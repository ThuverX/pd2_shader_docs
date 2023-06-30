"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[66713],{603905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>D});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},_=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=l(r),_=o,D=c["".concat(p,".").concat(_)]||c[_]||s[_]||a;return r?n.createElement(D,d(d({ref:t},m),{},{components:r})):n.createElement(D,d({ref:t},m))}));function D(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,d=new Array(a);d[0]=_;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:o,d[1]=i;for(var l=2;l<a;l++)d[l]=r[l];return n.createElement.apply(null,d)}return n.createElement.apply(null,r)}_.displayName="MDXCreateElement"},503645:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(487462),o=(r(667294),r(603905));const a={id:0x2d5b674220ec0600,title:"Opacity Default Diffuse Texture Double Sided"},d="Opacity Default Diffuse Texture Double Sided",i={unversionedId:"Generated/Shaders/Base/[800-900]/3268319488305268000",id:"Generated/Shaders/Base/[800-900]/3268319488305268000",title:"Opacity Default Diffuse Texture Double Sided",description:"(opacityDIFFUSETEXTURE:DOUBLESIDED, 0x2d5b674220ec062d)",source:"@site/docs/Generated/Shaders/Base/[800-900]/0x2d5b674220ec062d.mdx",sourceDirName:"Generated/Shaders/Base/[800-900]",slug:"/Generated/Shaders/Base/[800-900]/3268319488305268000",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[800-900]/3268319488305268000",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/Generated/Shaders/Base/[800-900]/0x2d5b674220ec062d.mdx",tags:[],version:"current",frontMatter:{id:"3268319488305268000",title:"Opacity Default Diffuse Texture Double Sided"},sidebar:"docsSidebar",previous:{title:"Generic Shadow Caster Diffuse Texture Diffuse Uvoffset Nvidia",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[800-900]/3267895012389337600"},next:{title:"Opacity Default Ati Diffuse Texture Normalmap Opacity Controller Skinned 3weights",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[800-900]/3269529107973897000"}},p={},l=[{value:"Technique <code>transparent</code>",id:"technique-transparent",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Sampler 1",id:"sampler-1",level:4},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],m={toc:l},c="wrapper";function s(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"opacity-default-diffuse-texture-double-sided"},"Opacity Default Diffuse Texture Double Sided"),(0,o.kt)("p",null,"(",(0,o.kt)("inlineCode",{parentName:"p"},"opacity:default:DIFFUSE_TEXTURE:DOUBLE_SIDED"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"0x2d5b674220ec062d"),")"),(0,o.kt)("p",null,"This template is referenced 1 time by ",(0,o.kt)("a",{parentName:"p",href:"/docs/Generated/Render%20Templates/base.render_template_database#opacity-diffuse-texture-double-sided"},"opacity:DIFFUSE_TEXTURE:DOUBLE_SIDED"),".\nThis template uses the following inputs:\n|Name|UI Name|Type|\n|---|---|---|\n|opacity_texture|Opacity Texture (UV5)|texture|\n|diffuse_texture|Diffuse Texture (UV1)|texture|."),(0,o.kt)("h3",{id:"technique-transparent"},"Technique ",(0,o.kt)("inlineCode",{parentName:"h3"},"transparent")),(0,o.kt)("h3",{id:"render-states"},"Render States"),(0,o.kt)("p",null,"More info can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3drenderstatetype"},"Direct3D Docs")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 0,\n    D3DRS_ALPHABLENDENABLE = 1,\n    D3DRS_CULLMODE = 1,\n    D3DRS_COLORWRITEENABLE = 7,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 1,\n    D3DRS_STENCILFUNC = 6,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 5,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 4,\n    D3DRS_STENCILWRITEMASK = 5,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n    D3DRS_BLENDOP = 1,\n    D3DRS_DESTBLEND = 6,\n    D3DRS_SRCBLEND = 5,\n};\n")),(0,o.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,o.kt)("p",null,"More info can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3dsamplerstatetype"},"Direct3D Docs")),(0,o.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h4",{id:"sampler-1"},"Sampler 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h3",{id:"shaders"},"Shaders"),(0,o.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"float camera_near_range : register(vs_3_0, c12);\ncolumn_major float4x4 proj_matrix : register(vs_3_0, c8);\ncolumn_major float4x4 view_matrix : register(vs_3_0, c4);\ncolumn_major float4x4 world_matrix : register(vs_3_0, c0);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 normal : NORMAL;\n    float4 texcoord4 : TEXCOORD4;\n    float4 texcoord : TEXCOORD;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float2 texcoord1 : TEXCOORD1;\n    float4 texcoord5 : TEXCOORD5;\n    float2 texcoord : TEXCOORD;\n    float3 texcoord2 : TEXCOORD2;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float4 temp0, temp1;\n    // def c13, 2, -1, 0, 0\n    // dcl_position v0\n    // dcl_normal v1\n    // dcl_texcoord4 v2\n    // dcl_texcoord v3\n    // dcl_position o0\n    // dcl_texcoord1 o1.xy\n    // dcl_texcoord5 o2\n    // dcl_texcoord o3.xy\n    // dcl_texcoord2 o4.xyz\n    // dp4 r0.w, v0, c3\n    temp0.w = dot(i.position, (world_matrix._m03_m13_m23_m33));\n    // dp4 r0.x, v0, c0\n    temp0.x = dot(i.position, (world_matrix._m00_m10_m20_m30));\n    // dp4 r0.y, v0, c1\n    temp0.y = dot(i.position, (world_matrix._m01_m11_m21_m31));\n    // dp4 r0.z, v0, c2\n    temp0.z = dot(i.position, (world_matrix._m02_m12_m22_m32));\n    // dp4 r1.x, r0, c4\n    temp1.x = dot(temp0, (view_matrix._m00_m10_m20_m30));\n    // dp4 r1.y, r0, c5\n    temp1.y = dot(temp0, (view_matrix._m01_m11_m21_m31));\n    // dp4 r1.z, r0, c6\n    temp1.z = dot(temp0, (view_matrix._m02_m12_m22_m32));\n    // dp4 r1.w, r0, c7\n    temp1.w = dot(temp0, (view_matrix._m03_m13_m23_m33));\n    // mov o2.xyz, r0\n    o.texcoord5.xyz = temp0.xyz;\n    // dp4 o0.x, r1, c8\n    o.position.x = dot(temp1, (proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, r1, c9\n    o.position.y = dot(temp1, (proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.w, r1, c11\n    o.position.w = dot(temp1, (proj_matrix._m03_m13_m23_m33));\n    // dp4 r0.x, r1, c10\n    temp0.x = dot(temp1, (proj_matrix._m02_m12_m22_m32));\n    // mad r0.yzw, v1.xxyz, c13.x, c13.y\n    temp0.yzw = i.normal.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 o4.x, r0.yzww, c0\n    o.texcoord2.x = dot(temp0.yzw, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 o4.y, r0.yzww, c1\n    o.texcoord2.y = dot(temp0.yzw, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o4.z, r0.yzww, c2\n    o.texcoord2.z = dot(temp0.yzw, (world_matrix._m02_m12_m22_m32).xyz);\n    // add o2.w, r0.x, c12.x\n    o.texcoord5.w = temp0.x + camera_near_range.x;\n    // mov o0.z, r0.x\n    o.position.z = temp0.x;\n    // mov o1.xy, v2\n    o.texcoord1 = i.texcoord4;\n    // mov o3.xy, v3\n    o.texcoord = i.texcoord;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."),(0,o.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"sampler2D diffuse_texture : register(ps_3_0, s1);\nsampler2D opacity_texture : register(ps_3_0, s0);\nfloat4 PixelMain(float2 texcoord : TEXCOORD) : COLOR\n{\n    float4 out_color;\n    float4 temp0;\n    // dcl_texcoord v0.xy\n    // dcl_2d s0\n    // dcl_2d s1\n    // texld_pp r0, v0, s1\n    temp0 = /* not implemented _pp modifier */ tex2D(diffuse_texture, texcoord.xy);\n    // mov_pp oC0.xyz, r0\n    out_color.xyz = /* not implemented _pp modifier */ temp0.xyz;\n    // texld_pp r0, v0, s0\n    temp0 = /* not implemented _pp modifier */ tex2D(opacity_texture, texcoord.xy);\n    // mov_pp oC0.w, r0.x\n    out_color.w = /* not implemented _pp modifier */ temp0.x;\n    // \n\n    return out_color;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."))}s.isMDXComponent=!0}}]);