const fs = require('fs');
const path = require('path');

const render_templates = JSON.parse(fs.readFileSync("data/all.render_templates.json", 'utf8'));
const template_names = new Map()

function firstToUpper(str) {
    str = str.toLowerCase();
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function createReadableName(name) {
    if (name.includes("_") || name.includes(":") || name.includes("-")) {
        return name.split(/[:_-]/g).map(firstToUpper).join(" ")
    } else {
        return name.split(/(?=[A-Z])/g).map(firstToUpper).join(" ")
    }
}

function createShaderMDX(data, type) {
    let out_mdx = ``
    if (data) {
        out_mdx += `#### ${type} Shader\n`

        if (data.status == "decompiled") {
            out_mdx += `\`\`\`hlsl\n`
            out_mdx += data.code
            out_mdx += `\`\`\`\n`
        }
        else {
            out_mdx += "```raw\n"
            out_mdx += data.code
            out_mdx += "\n```\n"
            out_mdx += `This shader was not successfully decompiled. Above is the raw bytecode.\n`
            out_mdx += "```csharp\n"
            out_mdx += data.error
            out_mdx += "\n```\n"

        }

        out_mdx += `Decompiled by ${data.decompiler}.\n`
    }

    return out_mdx
}

function createEnum(data, name) {
    let out_mdx = ''

    out_mdx += "```cpp\n"
    out_mdx += `enum ${name} {\n`
    for (let item of data) {
        out_mdx += `\t${item.name} = ${item.value},\n`
    }
    out_mdx += `};\n`
    out_mdx += "```\n"

    return out_mdx
}

function collectReferences(name) {
    let references = new Set()

    for (let [file_name, file] of render_templates) {
        for (let [template_name, template] of file.templates) {
            for (let [technique_name, methods] of template.techniques) {
                for (let method of methods) {
                    if (method == name) {
                        references.add({
                            file_name,
                            template_name,
                            inputs: template.inputs,
                        })
                    }
                }
            }
        }
    }

    return references
}

function MakeURLHash(str) {
    return str.toLowerCase().replace(/[^a-z0-9]/g, "-")
}

function BuildRenderTemplateIntoMDXFile(data) {
    let name_hash = data[0]
    let techniques = data[1].techniques
    let name = name_hash.name
    let hash = name_hash.id

    template_names.set(name, hash)

    let readable_name = createReadableName(name).trim() || hash

    let references = collectReferences(name)
    let reference_list = [...references].map((ref) => `[${ref.template_name}](/docs/Generated/Render%20Templates/${ref.file_name}#${MakeURLHash(ref.template_name)})`).join(", ")
    let inputs = [...references].map((ref) => ref.inputs).flat()
    let inputsString = `|Name|UI Name|Type|\n|---|---|---|\n` + inputs.map((input) => `|${input.name}|${input.ui_name}|${input.type}|`).join("\n")

    let out_mdx =
        `---
id: ${hash}
title: "${readable_name}"
---

# ${readable_name}
(\`${name}\`, \`${hash}\`)

This template is referenced ${references.size} time${references.size > 1 ? 's' : ''} by ${reference_list}.
${inputs.length ? `This template uses the following inputs:\n ${inputsString}.` : ""}

`

    for (let [tech_name, passes] of techniques) {
        out_mdx += `### Technique \`${tech_name.name}\`\n`

        for (let pass of passes) {
            out_mdx += `### Render States\n`
            out_mdx += `More info can be found on the [Direct3D Docs](https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3drenderstatetype)\n`

            out_mdx += createEnum(pass.render_states, "D3DRENDERSTATETYPE")

            out_mdx += `### Sampler States\n`
            out_mdx += `More info can be found on the [Direct3D Docs](https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3dsamplerstatetype)\n`

            for (let sampler of pass.sampler_states) {
                out_mdx += `#### Sampler ${sampler.id}\n`

                out_mdx += createEnum(sampler.vars, "D3DSAMPLERSTATETYPE")
            }

            out_mdx += `### Shaders\n`

            out_mdx += createShaderMDX(pass.vertex_shader, "Vertex")
            out_mdx += createShaderMDX(pass.pixel_shader, "Pixel")
        }
    }

    return [out_mdx, hash, readable_name]
}

function BuildShaderIndexFile(file_path, name, base_name, size) {
    let out_mdx =
        `---
title: ${name}
---

This folder contains ${size} render templates for the file \`${base_name}.shaders\`.
`

    fs.writeFileSync(`${file_path}/index.mdx`, out_mdx);
}

function BuildIntoMDXFiles(file_path, split = 0) {
    let json = JSON.parse(fs.readFileSync(file_path, 'utf8'));

    const base_name = path.basename(file_path).split(".")[0]
    let readableFileName = createReadableName(base_name);

    const folderPath = `docs/Generated/Shaders/${readableFileName}`

    fs.mkdirSync(folderPath, { recursive: true });

    let i = 0
    let x = 0
    for (let template of json.render_templates) {
        let [mdx, id, name] = BuildRenderTemplateIntoMDXFile(template, readableFileName);

        if (split) {
            fs.mkdirSync(`${folderPath}/[${x}-${x + split}]`, { recursive: true });
            fs.writeFileSync(`${folderPath}/[${x}-${x + split}]/${id}.mdx`, mdx);
        } else {
            fs.writeFileSync(`${folderPath}/${id}.mdx`, mdx);
        }
        i++

        if (i >= split) {
            i = 0
            x += split
        }
    }

    BuildShaderIndexFile(folderPath, readableFileName, base_name, json.render_templates.length)
}

function BuildRenderTemplateListIntoMDXFile() {
    for (let [file_name, file] of render_templates) {
        let readable_name = createReadableName(path.basename(file_name).split(".")[0])

        let out_mdx =
            `---
title: "${readable_name}"
---
(\`${ file_name }\`)

This file contains ${file.templates.length} render templates.
`

        for (let [template_name, template] of file.templates) {
            const name = createReadableName(template_name).trim() || template_name

            out_mdx += `## ${name}\n`
            out_mdx += `(\`${template_name}\`)\n`

            out_mdx += "### Techniques\n"

            for (let [technique_name, methods] of template.techniques) {
                out_mdx += `* ${technique_name}\n`

                for (let method of methods) {
                    out_mdx += `\t* ${method}\n`
                }
            }

            out_mdx += "### Inputs\n"
            if (template.inputs.length == 0) {
                out_mdx += "This template has no inputs.\n"
            } else {
                out_mdx += `|Name|UI Name|Type|\n|---|---|---|\n`

                for (let input of template.inputs) {
                    out_mdx += `|${input.name}|${input.ui_name}|${input.type}|`
                }
            }

            out_mdx += "\n"
        }

        fs.mkdirSync(`docs/Generated/Render Templates/`, { recursive: true });
        fs.writeFileSync(`docs/Generated/Render Templates/${file_name}.mdx`, out_mdx);
    }
}

function CreateShadersIndex() {
    const out_mdx = 
`---
title: "Shaders"
---`

    fs.writeFileSync(`docs/Generated/Shaders/index.mdx`, out_mdx);
}

function CreateRenderTemplatesIndex() {
    const out_mdx = 
`---
title: "Render Templates"
---`

    fs.writeFileSync(`docs/Generated/Render Templates/index.mdx`, out_mdx);
}

fs.rmSync(`docs/Generated/Render Templates/`, { recursive: true });
fs.rmSync(`docs/Generated/Shaders/`, { recursive: true });
BuildIntoMDXFiles("data/post.shaders.json")
BuildRenderTemplateListIntoMDXFile(100)
BuildIntoMDXFiles("data/default_shaders.shaders.json")
BuildIntoMDXFiles("data/base.shaders.json", 100)


CreateShadersIndex()
CreateRenderTemplatesIndex()