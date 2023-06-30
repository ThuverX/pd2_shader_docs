"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[20756],{603905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>_});var n=t(667294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),d=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=d(e.components);return n.createElement(i.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(t),c=a,_=m["".concat(i,".").concat(c)]||m[c]||u[c]||l;return t?n.createElement(_,o(o({ref:r},p),{},{components:t})):n.createElement(_,o({ref:r},p))}));function _(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=c;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<l;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},718530:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var n=t(487462),a=(t(667294),t(603905));const l={id:0xc284d03e0206f000,title:"Generic Shadow Caster Ati Blend Diffuse Blend Gsma Blend Mask Control Blend Mask Crossblend Blend Normal Cube Environment Mapping Diffuse Texture Gloss Blurs Cubemap Gsma Texture Normalmap Normalmap Depth Texture Normalmap Uv1 Parallax Parallax Relief Vertex Color"},o="Generic Shadow Caster Ati Blend Diffuse Blend Gsma Blend Mask Control Blend Mask Crossblend Blend Normal Cube Environment Mapping Diffuse Texture Gloss Blurs Cubemap Gsma Texture Normalmap Normalmap Depth Texture Normalmap Uv1 Parallax Parallax Relief Vertex Color",s={unversionedId:"Generated/Shaders/Base/[3600-3700]/14016556905024385000",id:"Generated/Shaders/Base/[3600-3700]/14016556905024385000",title:"Generic Shadow Caster Ati Blend Diffuse Blend Gsma Blend Mask Control Blend Mask Crossblend Blend Normal Cube Environment Mapping Diffuse Texture Gloss Blurs Cubemap Gsma Texture Normalmap Normalmap Depth Texture Normalmap Uv1 Parallax Parallax Relief Vertex Color",description:"(genericATIBLENDGSMABLENDMASKCROSSBLENDCUBEENVIRONMENTMAPPINGGLOSSBLURSCUBEMAPNORMALMAPNORMALMAPUV1PARALLAXRELIEF:VERTEX_COLOR, 0xc284d03e0206ed61)",source:"@site/docs/Generated/Shaders/Base/[3600-3700]/0xc284d03e0206ed61.mdx",sourceDirName:"Generated/Shaders/Base/[3600-3700]",slug:"/Generated/Shaders/Base/[3600-3700]/14016556905024385000",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[3600-3700]/14016556905024385000",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/Generated/Shaders/Base/[3600-3700]/0xc284d03e0206ed61.mdx",tags:[],version:"current",frontMatter:{id:"14016556905024385000",title:"Generic Shadow Caster Ati Blend Diffuse Blend Gsma Blend Mask Control Blend Mask Crossblend Blend Normal Cube Environment Mapping Diffuse Texture Gloss Blurs Cubemap Gsma Texture Normalmap Normalmap Depth Texture Normalmap Uv1 Parallax Parallax Relief Vertex Color"},sidebar:"docsSidebar",previous:{title:"Generic Shadow Caster Diffuse Texture Self Illumination Self Illumination Uvanim",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[3600-3700]/14016122415312194000"},next:{title:"Generic Shadow Caster Depth Scaling Diffuse Texture Gsma Texture Normalmap Skinned 3weights",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[3600-3700]/14016582100638812000"}},i={},d=[{value:"Technique <code>ambient</code>",id:"technique-ambient",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],p={toc:d},m="wrapper";function u(e){let{components:r,...t}=e;return(0,a.kt)(m,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"generic-shadow-caster-ati-blend-diffuse-blend-gsma-blend-mask-control-blend-mask-crossblend-blend-normal-cube-environment-mapping-diffuse-texture-gloss-blurs-cubemap-gsma-texture-normalmap-normalmap-depth-texture-normalmap-uv1-parallax-parallax-relief-vertex-color"},"Generic Shadow Caster Ati Blend Diffuse Blend Gsma Blend Mask Control Blend Mask Crossblend Blend Normal Cube Environment Mapping Diffuse Texture Gloss Blurs Cubemap Gsma Texture Normalmap Normalmap Depth Texture Normalmap Uv1 Parallax Parallax Relief Vertex Color"),(0,a.kt)("p",null,"(",(0,a.kt)("inlineCode",{parentName:"p"},"generic:shadow_caster:ATI:BLEND_DIFFUSE:BLEND_GSMA:BLEND_MASK_CONTROL:BLEND_MASK_CROSSBLEND:BLEND_NORMAL:CUBE_ENVIRONMENT_MAPPING:DIFFUSE_TEXTURE:GLOSS_BLURS_CUBEMAP:GSMA_TEXTURE:NORMALMAP:NORMALMAP_DEPTH_TEXTURE:NORMALMAP_UV1:PARALLAX:PARALLAX_RELIEF:VERTEX_COLOR"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"0xc284d03e0206ed61"),")"),(0,a.kt)("p",null,"This template is referenced 1 time by ",(0,a.kt)("a",{parentName:"p",href:"/docs/Generated/Render%20Templates/base.render_template_database#generic-blend-diffuse-blend-gsma-blend-mask-control-blend-mask-crossblend-blend-normal-cube-environment-mapping-diffuse-texture-gloss-blurs-cubemap-gsma-texture-normalmap-normalmap-depth-texture-normalmap-uv1-parallax-parallax-relief-vertex-color"},"generic:BLEND_DIFFUSE:BLEND_GSMA:BLEND_MASK_CONTROL:BLEND_MASK_CROSSBLEND:BLEND_NORMAL:CUBE_ENVIRONMENT_MAPPING:DIFFUSE_TEXTURE:GLOSS_BLURS_CUBEMAP:GSMA_TEXTURE:NORMALMAP:NORMALMAP_DEPTH_TEXTURE:NORMALMAP_UV1:PARALLAX:PARALLAX_RELIEF:VERTEX_COLOR"),".\nThis template uses the following inputs:\n|Name|UI Name|Type|\n|---|---|---|\n|diffuse_texture|Diffuse Texture (UV1)|texture|\n|diffuse_layer0_texture|Second diffuse (Shifted UV1)|texture|\n|material_texture|Gloss-Spec-Material-Alpha Texture (GSMA)|texture|\n|diffuse_layer2_texture|Second Gloss-Spec-Material-Alpha Texture (GSMA)|texture|\n|bump_normal_texture|Normal map (UV2 else UV1)|texture|\n|normal_layer0_texture|Second normal map (UV1)|texture|\n|reflection_texture|Reflection Cube|texture|\n|blend_control|Blending Smoothing, Blend mask Bias|vector3|\n|parallax_scale|Parallax scale|scalar|\n|parallax_layers|Number of parallax layers|scalar|."),(0,a.kt)("h3",{id:"technique-ambient"},"Technique ",(0,a.kt)("inlineCode",{parentName:"h3"},"ambient")),(0,a.kt)("h3",{id:"render-states"},"Render States"),(0,a.kt)("p",null,"More info can be found on the ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3drenderstatetype"},"Direct3D Docs")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 1,\n    D3DRS_ALPHABLENDENABLE = 0,\n    D3DRS_CULLMODE = 2,\n    D3DRS_COLORWRITEENABLE = 0,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 961656599,\n    D3DRS_SLOPESCALEDEPTHBIAS = 1075838976,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n};\n")),(0,a.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,a.kt)("p",null,"More info can be found on the ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3dsamplerstatetype"},"Direct3D Docs")),(0,a.kt)("h3",{id:"shaders"},"Shaders"),(0,a.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hlsl"},"column_major float4x4 view_proj_matrix : register(vs_3_0, c0);\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float texcoord1 : TEXCOORD1;\n};\n\nVertexMain_Output VertexMain(float4 position : POSITION)\n{\n    VertexMain_Output o;\n    float temp0;\n    // dcl_position v0\n    // dcl_position o0\n    // dcl_texcoord1 o1.x\n    // dp4 o0.x, v0, c0\n    o.position.x = dot(position, (view_proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, v0, c1\n    o.position.y = dot(position, (view_proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.w, v0, c3\n    o.position.w = dot(position, (view_proj_matrix._m03_m13_m23_m33));\n    // dp4 r0.x, v0, c2\n    temp0.x = dot(position, (view_proj_matrix._m02_m12_m22_m32));\n    // mov o0.z, r0.x\n    o.position.z = temp0.x;\n    // mov o1.x, r0.x\n    o.texcoord1 = temp0.x;\n    // \n\n    return o;\n}\n")),(0,a.kt)("p",null,"Decompiled by DXDecompiler."),(0,a.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hlsl"},"float4 PixelMain(float texcoord1 : TEXCOORD1) : COLOR\n{\n    float4 out_color;\n    // def c0, 1, 0, 0, 0\n    // dcl_texcoord1 v0.x\n    // mul oC0, c0.xyyy, v0.x\n    out_color = float4(1, 0, 0, 0) * texcoord1.x;\n    // \n\n    return out_color;\n}\n")),(0,a.kt)("p",null,"Decompiled by DXDecompiler."))}u.isMDXComponent=!0}}]);