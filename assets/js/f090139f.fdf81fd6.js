"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[49813],{603905:(e,n,t)=>{t.d(n,{Zo:()=>_,kt:()=>D});var o=t(667294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=o.createContext({}),p=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},_=function(e){var n=p(e.components);return o.createElement(d.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},s=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,_=l(e,["components","mdxType","originalType","parentName"]),m=p(t),s=r,D=m["".concat(d,".").concat(s)]||m[s]||c[s]||a;return t?o.createElement(D,i(i({ref:n},_),{},{components:t})):o.createElement(D,i({ref:n},_))}));function D(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=s;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}s.displayName="MDXCreateElement"},733075:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=t(487462),r=(t(667294),t(603905));const a={id:0xa3b4775fcb697800,title:"Generic Default Depth Scaling Diffuse Texture Self Illumination Self Illumination Bloom"},i="Generic Default Depth Scaling Diffuse Texture Self Illumination Self Illumination Bloom",l={unversionedId:"Generated/Shaders/Base/[3000-3100]/11796184577308457000",id:"Generated/Shaders/Base/[3000-3100]/11796184577308457000",title:"Generic Default Depth Scaling Diffuse Texture Self Illumination Self Illumination Bloom",description:"(genericDEPTHSCALINGSELFILLUMINATION:SELFILLUMINATION_BLOOM, 0xa3b4775fcb697bd3)",source:"@site/docs/Generated/Shaders/Base/[3000-3100]/0xa3b4775fcb697bd3.mdx",sourceDirName:"Generated/Shaders/Base/[3000-3100]",slug:"/Generated/Shaders/Base/[3000-3100]/11796184577308457000",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[3000-3100]/11796184577308457000",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/Generated/Shaders/Base/[3000-3100]/0xa3b4775fcb697bd3.mdx",tags:[],version:"current",frontMatter:{id:"11796184577308457000",title:"Generic Default Depth Scaling Diffuse Texture Self Illumination Self Illumination Bloom"},sidebar:"docsSidebar",previous:{title:"Generic Default Blend Diffuse Blend Normal Diffuse Texture Normalmap Rl Environment Vertex Color",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[3000-3100]/11788248786618335000"},next:{title:"Generic Default Diffuse Texture Double Sided Normalmap Skinned 3weights Vegetation Bending",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[3000-3100]/11798142585357173000"}},d={},p=[{value:"Technique <code>deferred_ambient_fps_depth</code>",id:"technique-deferred_ambient_fps_depth",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4},{value:"Technique <code>deferred_ambient_fps</code>",id:"technique-deferred_ambient_fps",level:3},{value:"Render States",id:"render-states-1",level:3},{value:"Sampler States",id:"sampler-states-1",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Shaders",id:"shaders-1",level:3},{value:"Vertex Shader",id:"vertex-shader-1",level:4},{value:"Pixel Shader",id:"pixel-shader-1",level:4},{value:"Technique <code>self_illumination</code>",id:"technique-self_illumination",level:3},{value:"Render States",id:"render-states-2",level:3},{value:"Sampler States",id:"sampler-states-2",level:3},{value:"Sampler 0",id:"sampler-0-1",level:4},{value:"Shaders",id:"shaders-2",level:3},{value:"Vertex Shader",id:"vertex-shader-2",level:4},{value:"Pixel Shader",id:"pixel-shader-2",level:4}],_={toc:p},m="wrapper";function c(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,o.Z)({},_,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"generic-default-depth-scaling-diffuse-texture-self-illumination-self-illumination-bloom"},"Generic Default Depth Scaling Diffuse Texture Self Illumination Self Illumination Bloom"),(0,r.kt)("p",null,"(",(0,r.kt)("inlineCode",{parentName:"p"},"generic:default:DEPTH_SCALING:DIFFUSE_TEXTURE:SELF_ILLUMINATION:SELF_ILLUMINATION_BLOOM"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"0xa3b4775fcb697bd3"),")"),(0,r.kt)("p",null,"This template is referenced 1 time by ",(0,r.kt)("a",{parentName:"p",href:"/docs/Generated/Render%20Templates/base.render_template_database#generic-depth-scaling-diffuse-texture-self-illumination-self-illumination-bloom"},"generic:DEPTH_SCALING:DIFFUSE_TEXTURE:SELF_ILLUMINATION:SELF_ILLUMINATION_BLOOM"),".\nThis template uses the following inputs:\n|Name|UI Name|Type|\n|---|---|---|\n|diffuse_texture|Diffuse Texture (UV1)|texture|\n|self_illumination_texture|Self Illumination Texture (UV4)|texture|\n|il_bloom|Self Illumination Bloom|scalar|\n|il_multiplier|Self Illumination Intensity Multiplier|scalar|."),(0,r.kt)("h3",{id:"technique-deferred_ambient_fps_depth"},"Technique ",(0,r.kt)("inlineCode",{parentName:"h3"},"deferred_ambient_fps_depth")),(0,r.kt)("h3",{id:"render-states"},"Render States"),(0,r.kt)("p",null,"More info can be found on the ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3drenderstatetype"},"Direct3D Docs")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 8,\n    D3DRS_ZWRITEENABLE = 1,\n    D3DRS_ALPHABLENDENABLE = 0,\n    D3DRS_CULLMODE = 2,\n    D3DRS_COLORWRITEENABLE = 0,\n    D3DRS_COLORWRITEENABLE1 = 0,\n    D3DRS_COLORWRITEENABLE2 = 0,\n    D3DRS_STENCILENABLE = 1,\n    D3DRS_STENCILFUNC = 8,\n    D3DRS_STENCILFAIL = 3,\n    D3DRS_STENCILMASK = -1,\n    D3DRS_STENCILPASS = 3,\n    D3DRS_STENCILREF = 4,\n    D3DRS_STENCILWRITEMASK = 255,\n    D3DRS_STENCILZFAIL = 3,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n};\n")),(0,r.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,r.kt)("p",null,"More info can be found on the ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3dsamplerstatetype"},"Direct3D Docs")),(0,r.kt)("h3",{id:"shaders"},"Shaders"),(0,r.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hlsl"},"float camera_near_range : register(vs_3_0, c7);\ncolumn_major float4x4 view_proj_matrix : register(vs_3_0, c0);\ncolumn_major float4x4 world_matrix : register(vs_3_0, c4);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 normal : NORMAL;\n    float4 texcoord : TEXCOORD;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float texcoord1 : TEXCOORD1;\n    float2 texcoord : TEXCOORD;\n    float3 texcoord2 : TEXCOORD2;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float3 temp0;\n    // def c8, 2, -1, 0, 0\n    // dcl_position v0\n    // dcl_normal v1\n    // dcl_texcoord v2\n    // dcl_position o0\n    // dcl_texcoord1 o1.x\n    // dcl_texcoord o2.xy\n    // dcl_texcoord2 o3.xyz\n    // dp4 o0.x, v0, c0\n    o.position.x = dot(i.position, (view_proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, v0, c1\n    o.position.y = dot(i.position, (view_proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.w, v0, c3\n    o.position.w = dot(i.position, (view_proj_matrix._m03_m13_m23_m33));\n    // dp4 r0.x, v0, c2\n    temp0.x = dot(i.position, (view_proj_matrix._m02_m12_m22_m32));\n    // add o1.x, r0.x, c7.x\n    o.texcoord1 = temp0.x + camera_near_range.x;\n    // mov o0.z, r0.x\n    o.position.z = temp0.x;\n    // mad r0.xyz, v1, c8.x, c8.y\n    temp0.xyz = i.normal.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 o3.x, r0, c4\n    o.texcoord2.x = dot(temp0.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 o3.y, r0, c5\n    o.texcoord2.y = dot(temp0.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o3.z, r0, c6\n    o.texcoord2.z = dot(temp0.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // mov o2.xy, v2\n    o.texcoord = i.texcoord;\n    // \n\n    return o;\n}\n")),(0,r.kt)("p",null,"Decompiled by DXDecompiler."),(0,r.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hlsl"},"struct PixelMain_Output\n{\n    float4 color : COLOR;\n    float4 color1 : COLOR1;\n    float4 color2 : COLOR2;\n};\n\nPixelMain_Output PixelMain()\n{\n    PixelMain_Output o;\n    // def c0, 1, 0, 0, 0\n    // mov oC0, c0.x\n    o.color = float4(1, 1, 1, 1);\n    // mov oC1, c0.x\n    o.color1 = float4(1, 1, 1, 1);\n    // mov oC2, c0.x\n    o.color2 = float4(1, 1, 1, 1);\n    // \n\n    return o;\n}\n")),(0,r.kt)("p",null,"Decompiled by DXDecompiler."),(0,r.kt)("h3",{id:"technique-deferred_ambient_fps"},"Technique ",(0,r.kt)("inlineCode",{parentName:"h3"},"deferred_ambient_fps")),(0,r.kt)("h3",{id:"render-states-1"},"Render States"),(0,r.kt)("p",null,"More info can be found on the ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3drenderstatetype"},"Direct3D Docs")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 1,\n    D3DRS_ALPHABLENDENABLE = 0,\n    D3DRS_CULLMODE = 2,\n    D3DRS_COLORWRITEENABLE = 15,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n};\n")),(0,r.kt)("h3",{id:"sampler-states-1"},"Sampler States"),(0,r.kt)("p",null,"More info can be found on the ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3dsamplerstatetype"},"Direct3D Docs")),(0,r.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,r.kt)("h3",{id:"shaders-1"},"Shaders"),(0,r.kt)("h4",{id:"vertex-shader-1"},"Vertex Shader"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hlsl"},"float camera_near_range : register(vs_3_0, c7);\ncolumn_major float4x4 view_proj_matrix : register(vs_3_0, c0);\ncolumn_major float4x4 world_matrix : register(vs_3_0, c4);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 normal : NORMAL;\n    float4 texcoord : TEXCOORD;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float texcoord1 : TEXCOORD1;\n    float2 texcoord : TEXCOORD;\n    float3 texcoord2 : TEXCOORD2;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float3 temp0;\n    // def c8, 2, -1, 0, 0\n    // dcl_position v0\n    // dcl_normal v1\n    // dcl_texcoord v2\n    // dcl_position o0\n    // dcl_texcoord1 o1.x\n    // dcl_texcoord o2.xy\n    // dcl_texcoord2 o3.xyz\n    // dp4 o0.x, v0, c0\n    o.position.x = dot(i.position, (view_proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, v0, c1\n    o.position.y = dot(i.position, (view_proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.w, v0, c3\n    o.position.w = dot(i.position, (view_proj_matrix._m03_m13_m23_m33));\n    // dp4 r0.x, v0, c2\n    temp0.x = dot(i.position, (view_proj_matrix._m02_m12_m22_m32));\n    // add o1.x, r0.x, c7.x\n    o.texcoord1 = temp0.x + camera_near_range.x;\n    // mov o0.z, r0.x\n    o.position.z = temp0.x;\n    // mad r0.xyz, v1, c8.x, c8.y\n    temp0.xyz = i.normal.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 o3.x, r0, c4\n    o.texcoord2.x = dot(temp0.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 o3.y, r0, c5\n    o.texcoord2.y = dot(temp0.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o3.z, r0, c6\n    o.texcoord2.z = dot(temp0.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // mov o2.xy, v2\n    o.texcoord = i.texcoord;\n    // \n\n    return o;\n}\n")),(0,r.kt)("p",null,"Decompiled by DXDecompiler."),(0,r.kt)("h4",{id:"pixel-shader-1"},"Pixel Shader"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hlsl"},"sampler2D diffuse_texture : register(ps_3_0, s0);\nstruct PixelMain_Input\n{\n    float texcoord1 : TEXCOORD1;\n    float2 texcoord : TEXCOORD;\n    float3 texcoord2 : TEXCOORD2;\n};\n\nstruct PixelMain_Output\n{\n    float4 color1 : COLOR1;\n    float4 color : COLOR;\n    float4 color2 : COLOR2;\n};\n\nPixelMain_Output PixelMain(PixelMain_Input i)\n{\n    PixelMain_Output o;\n    float4 temp0;\n    // def c0, 0.5, 0.4, 0, 0\n    // dcl_texcoord1 v0.x\n    // dcl_texcoord v1.xy\n    // dcl_texcoord2_pp v2.xyz\n    // dcl_2d s0\n    // nrm_pp r0.xyz, v2\n    temp0.xyz = /* not implemented _pp modifier */ normalize(i.texcoord2.xyz).xyz;\n    // mad_pp oC1.xyz, r0, c0.x, c0.x\n    o.color1.xyz = /* not implemented _pp modifier */ temp0.xyz * float3(0.5, 0.5, 0.5) + float3(0.5, 0.5, 0.5);\n    // texld_pp r0, v1, s0\n    temp0 = /* not implemented _pp modifier */ tex2D(diffuse_texture, i.texcoord.xy);\n    // mov_pp oC0.xyz, r0\n    o.color.xyz = /* not implemented _pp modifier */ temp0.xyz;\n    // mov_pp oC1.w, r0.w\n    o.color1.w = /* not implemented _pp modifier */ temp0.w;\n    // mov oC0.w, c0.y\n    o.color.w = float1(0.4);\n    // mov oC2, v0.x\n    o.color2 = i.texcoord1.x;\n    // \n\n    return o;\n}\n")),(0,r.kt)("p",null,"Decompiled by DXDecompiler."),(0,r.kt)("h3",{id:"technique-self_illumination"},"Technique ",(0,r.kt)("inlineCode",{parentName:"h3"},"self_illumination")),(0,r.kt)("h3",{id:"render-states-2"},"Render States"),(0,r.kt)("p",null,"More info can be found on the ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3drenderstatetype"},"Direct3D Docs")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 3,\n    D3DRS_ZWRITEENABLE = 1,\n    D3DRS_ALPHABLENDENABLE = 1,\n    D3DRS_CULLMODE = 2,\n    D3DRS_COLORWRITEENABLE = 15,\n    D3DRS_COLORWRITEENABLE1 = 7,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n    D3DRS_BLENDOP = 1,\n    D3DRS_SRCBLEND = 2,\n    D3DRS_DESTBLEND = 2,\n};\n")),(0,r.kt)("h3",{id:"sampler-states-2"},"Sampler States"),(0,r.kt)("p",null,"More info can be found on the ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3dsamplerstatetype"},"Direct3D Docs")),(0,r.kt)("h4",{id:"sampler-0-1"},"Sampler 0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,r.kt)("h3",{id:"shaders-2"},"Shaders"),(0,r.kt)("h4",{id:"vertex-shader-2"},"Vertex Shader"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hlsl"},"column_major float4x4 view_proj_matrix : register(vs_3_0, c0);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 texcoord : TEXCOORD;\n    float4 texcoord3 : TEXCOORD3;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float2 texcoord : TEXCOORD;\n    float2 texcoord6 : TEXCOORD6;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    // dcl_position v0\n    // dcl_texcoord v1\n    // dcl_texcoord3 v2\n    // dcl_position o0\n    // dcl_texcoord o1.xy\n    // dcl_texcoord6 o2.xy\n    // dp4 o0.x, v0, c0\n    o.position.x = dot(i.position, (view_proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, v0, c1\n    o.position.y = dot(i.position, (view_proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.z, v0, c2\n    o.position.z = dot(i.position, (view_proj_matrix._m02_m12_m22_m32));\n    // dp4 o0.w, v0, c3\n    o.position.w = dot(i.position, (view_proj_matrix._m03_m13_m23_m33));\n    // mov o1.xy, v1\n    o.texcoord = i.texcoord;\n    // mov o2.xy, v2\n    o.texcoord6 = i.texcoord3;\n    // \n\n    return o;\n}\n")),(0,r.kt)("p",null,"Decompiled by DXDecompiler."),(0,r.kt)("h4",{id:"pixel-shader-2"},"Pixel Shader"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hlsl"},"float ref_il_bloom : register(ps_3_0, c0);\nfloat ref_il_multiplier : register(ps_3_0, c1);\nsampler2D self_illumination_texture : register(ps_3_0, s0);\nstruct PixelMain_Output\n{\n    float4 color1 : COLOR1;\n    float4 color : COLOR;\n};\n\nPixelMain_Output PixelMain(float2 texcoord : TEXCOORD)\n{\n    PixelMain_Output o;\n    float4 temp0;\n    // def c2, 1, 0, 0, 0\n    // dcl_texcoord v0.xy\n    // dcl_2d s0\n    // texld_pp r0, v0, s0\n    temp0 = /* not implemented _pp modifier */ tex2D(self_illumination_texture, texcoord.xy);\n    // mul_pp r0.xyz, r0, c1.x\n    temp0.xyz = /* not implemented _pp modifier */ temp0.xyz * ref_il_multiplier.xxx;\n    // mov_pp r0.w, c2.x\n    temp0.w = /* not implemented _pp modifier */ float1(1);\n    // mul_pp oC1, r0, c0.x\n    o.color1 = /* not implemented _pp modifier */ temp0 * ref_il_bloom.x;\n    // mov_pp oC0, r0\n    o.color = /* not implemented _pp modifier */ temp0;\n    // \n\n    return o;\n}\n")),(0,r.kt)("p",null,"Decompiled by DXDecompiler."))}c.isMDXComponent=!0}}]);