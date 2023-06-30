"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[1231],{603905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>_});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,_=p["".concat(s,".").concat(u)]||p[u]||m[u]||o;return n?r.createElement(_,i(i({ref:t},l),{},{components:n})):r.createElement(_,i({ref:t},l))}));function _(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[p]="string"==typeof e?e:a,i[1]=d;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},923147:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var r=n(487462),a=(n(667294),n(603905));const o={id:0x161564958687f000,title:"Generic Shadow Caster Contour Diffuse Texture Instanced Nvidia"},i="Generic Shadow Caster Contour Diffuse Texture Instanced Nvidia",d={unversionedId:"Generated/Shaders/Base/[400-500]/1591288636715298800",id:"Generated/Shaders/Base/[400-500]/1591288636715298800",title:"Generic Shadow Caster Contour Diffuse Texture Instanced Nvidia",description:"(genericCONTOURINSTANCED:NVIDIA, 0x161564958687f012)",source:"@site/docs/Generated/Shaders/Base/[400-500]/0x161564958687f012.mdx",sourceDirName:"Generated/Shaders/Base/[400-500]",slug:"/Generated/Shaders/Base/[400-500]/1591288636715298800",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[400-500]/1591288636715298800",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/Generated/Shaders/Base/[400-500]/0x161564958687f012.mdx",tags:[],version:"current",frontMatter:{id:"1591288636715298800",title:"Generic Shadow Caster Contour Diffuse Texture Instanced Nvidia"},sidebar:"docsSidebar",previous:{title:"Generic Shadow Caster Alpha Masked Ati Diffuse Texture External Alpha Ref Instanced Normalmap Opacity Texture Self Illumination",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[400-500]/1586051905144678000"},next:{title:"Generic Shadow Caster Blend Diffuse Blend Mask Control Blend Mask Seperate Diffuse Texture Gloss Control Value Normalmap Simple Tint",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[400-500]/1598266410052987600"}},s={},c=[{value:"Technique <code>ambient</code>",id:"technique-ambient",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],l={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"generic-shadow-caster-contour-diffuse-texture-instanced-nvidia"},"Generic Shadow Caster Contour Diffuse Texture Instanced Nvidia"),(0,a.kt)("p",null,"(",(0,a.kt)("inlineCode",{parentName:"p"},"generic:shadow_caster:CONTOUR:DIFFUSE_TEXTURE:INSTANCED:NVIDIA"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"0x161564958687f012"),")"),(0,a.kt)("p",null,"This template is referenced 1 time by ",(0,a.kt)("a",{parentName:"p",href:"/docs/Generated/Render%20Templates/base.render_template_database#generic-contour-diffuse-texture-instanced"},"generic:CONTOUR:DIFFUSE_TEXTURE:INSTANCED"),".\nThis template uses the following inputs:\n|Name|UI Name|Type|\n|---|---|---|\n|diffuse_texture|Diffuse Texture (UV1)|texture|\n|contour_color|Contour color|vector3|\n|contour_opacity|Contour opacity|scalar|."),(0,a.kt)("h3",{id:"technique-ambient"},"Technique ",(0,a.kt)("inlineCode",{parentName:"h3"},"ambient")),(0,a.kt)("h3",{id:"render-states"},"Render States"),(0,a.kt)("p",null,"More info can be found on the ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3drenderstatetype"},"Direct3D Docs")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 1,\n    D3DRS_ALPHABLENDENABLE = 0,\n    D3DRS_CULLMODE = 2,\n    D3DRS_COLORWRITEENABLE = 0,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 961656599,\n    D3DRS_SLOPESCALEDEPTHBIAS = 1075838976,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n};\n")),(0,a.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,a.kt)("p",null,"More info can be found on the ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3dsamplerstatetype"},"Direct3D Docs")),(0,a.kt)("h3",{id:"shaders"},"Shaders"),(0,a.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hlsl"},"column_major float4x4 ref_world_tm[50] : register(vs_3_0, c0);\ncolumn_major float4x4 view_proj_matrix : register(vs_3_0, c200);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 position1 : POSITION1;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float texcoord1 : TEXCOORD1;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float4 temp0, temp1;\n    float addr0;\n    // def c204, 4, 1, 0, 0\n    // dcl_position v0\n    // dcl_position1 v1\n    // dcl_position o0\n    // dcl_texcoord1 o1.x\n    // frc r0.x, v1.x\n    temp0.x = frac(i.position1.x);\n    // add r0.x, -r0.x, v1.x\n    temp0.x = -temp0.x + i.position1.x;\n    // mul r0.x, r0.x, c204.x\n    temp0.x = temp0.x * float1(4);\n    // mova a0.x, r0.x\n    addr0.x = temp0.x;\n    // mad r0, v0.xyzx, c204.yyyz, c204.zzzy\n    temp0 = i.position.xyzx * float4(1, 1, 1, 0) + float4(0, 0, 0, 1);\n    // dp4 r1.x, r0, c0[a0.x]\n    temp1.x = dot(temp0, (ref_world_tm[0 + (addr0.x / 4)]._m00_m10_m20_m30));\n    // dp4 r1.y, r0, c1[a0.x]\n    temp1.y = dot(temp0, (ref_world_tm[0 + (addr0.x / 4)]._m01_m11_m21_m31));\n    // dp4 r1.z, r0, c2[a0.x]\n    temp1.z = dot(temp0, (ref_world_tm[0 + (addr0.x / 4)]._m02_m12_m22_m32));\n    // dp4 r1.w, r0, c3[a0.x]\n    temp1.w = dot(temp0, (ref_world_tm[0 + (addr0.x / 4)]._m03_m13_m23_m33));\n    // dp4 o0.x, r1, c200\n    o.position.x = dot(temp1, (view_proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, r1, c201\n    o.position.y = dot(temp1, (view_proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.w, r1, c203\n    o.position.w = dot(temp1, (view_proj_matrix._m03_m13_m23_m33));\n    // dp4 r0.x, r1, c202\n    temp0.x = dot(temp1, (view_proj_matrix._m02_m12_m22_m32));\n    // mov o0.z, r0.x\n    o.position.z = temp0.x;\n    // mov o1.x, r0.x\n    o.texcoord1 = temp0.x;\n    // \n\n    return o;\n}\n")),(0,a.kt)("p",null,"Decompiled by DXDecompiler."),(0,a.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hlsl"},"float4 PixelMain(float texcoord1 : TEXCOORD1) : COLOR\n{\n    float4 out_color;\n    // def c0, 1, 0, 0, 0\n    // dcl_texcoord1 v0.x\n    // mul oC0, c0.xyyy, v0.x\n    out_color = float4(1, 0, 0, 0) * texcoord1.x;\n    // \n\n    return out_color;\n}\n")),(0,a.kt)("p",null,"Decompiled by DXDecompiler."))}m.isMDXComponent=!0}}]);