const fs = require('fs');
const path = require('path');

function firstToUpper(str) {
    str = str.toLowerCase();
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function createReadableName(name) {
    if(name.includes("_") || name.includes(":") || name.includes("-")) {
        return name.split(/[:_-]/g).map(firstToUpper).join(" ")
    } else {
        return name.split(/(?=[A-Z])/g).map(firstToUpper).join(" ")
    }
}

function createShaderMDX(data, type) {
    let out_mdx =``
    if(data) {
        out_mdx += `#### ${type} Shader\n`
        
        if(data.status == "decompiled") {
            out_mdx += `\`\`\`hlsl\n`
            out_mdx += data.code
            out_mdx += `\`\`\`\n`
        }
        else {
            out_mdx += "```raw\n"
            out_mdx += data.code
            out_mdx += "\n```\n"
            out_mdx += `This shader was not successfully decompiled. Above is the raw bytecode.\n`
        }

        out_mdx += `Decompiled by ${data.decompiler}.\n`
    }

    return out_mdx
}

function createEnum(data, name) {
    let out_mdx = ''

    out_mdx += "```cpp\n"
    out_mdx += `enum ${name} {\n`
    for(let item of data) {
        out_mdx += `\t${item.name} = ${item.value},\n`
    }
    out_mdx += `};\n`
    out_mdx += "```\n"

    return out_mdx
}

function BuildRenderTemplateIntoMDXFile(data) {
    let name_hash = data[0]
    let techniques = data[1].techniques
    let name = name_hash.name
    let hash = name_hash.id

    let readable_name = createReadableName(name).trim() || hash

    let out_mdx =
`---
id: ${hash}
title: "${readable_name}"
---

# ${readable_name}
(\`${name}\`, \`${hash}\`)

`

    for(let [tech_name, passes] of techniques) {
        out_mdx += `### Technique \`${tech_name.name}\`\n`

        for(let pass of passes) {
            out_mdx += `### Render States\n`

            out_mdx += createEnum(pass.render_states, "D3DRENDERSTATETYPE")

            out_mdx += `### Sampler States\n`

            for(let sampler of pass.sampler_states) {
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

function BuildIntoMDXFiles(file_path, split = 0) {
    let json = JSON.parse(fs.readFileSync(file_path, 'utf8'));
    
    let readableFileName = firstToUpper(path.basename(file_path).split(".")[0]);

    // fs.rmSync(`docs/Generated/Shaders/${readableFileName}`, { recursive: true });
    fs.mkdirSync(`docs/Generated/Shaders/${readableFileName}`, { recursive: true });

    let i = 0
    let x = 0
    for(let template of json.render_templates) {
        let [mdx, id, name] = BuildRenderTemplateIntoMDXFile(template, readableFileName);

        if(split) {
            fs.mkdirSync(`docs/Generated/Shaders/${readableFileName}/[${x}-${x + split}]`, { recursive: true });
            fs.writeFileSync(`docs/Generated/Shaders/${readableFileName}/[${x}-${x + split}]/${id}.mdx`, mdx);
        } else {
            fs.writeFileSync(`docs/Generated/Shaders/${readableFileName}/${id}.mdx`, mdx);
        }
        i++

        if(i >= split) {
            i = 0
            x += split
        }
    }
}

BuildIntoMDXFiles("data/post.shaders.json")
BuildIntoMDXFiles("data/default_shaders.shaders.json")
BuildIntoMDXFiles("data/base.shaders.json", 100)
