"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[98340],{603905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>D});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=l(r),u=o,D=s["".concat(c,".").concat(u)]||s[u]||m[u]||a;return r?n.createElement(D,i(i({ref:t},p),{},{components:r})):n.createElement(D,i({ref:t},p))}));function D(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[s]="string"==typeof e?e:o,i[1]=d;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},808004:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var n=r(487462),o=(r(667294),r(603905));const a={id:0x450123a9a4d84c00,title:"Post Chromatic Aberration Default"},i="Post Chromatic Aberration Default",d={unversionedId:"Generated/Shaders/Post/4972294675115822000",id:"Generated/Shaders/Post/4972294675115822000",title:"Post Chromatic Aberration Default",description:"(postchromaticaberration:default, 0x450123a9a4d84a2a)",source:"@site/docs/Generated/Shaders/Post/0x450123a9a4d84a2a.mdx",sourceDirName:"Generated/Shaders/Post",slug:"/Generated/Shaders/Post/4972294675115822000",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Post/4972294675115822000",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/Generated/Shaders/Post/0x450123a9a4d84a2a.mdx",tags:[],version:"current",frontMatter:{id:"4972294675115822000",title:"Post Chromatic Aberration Default"},sidebar:"docsSidebar",previous:{title:"Blit Masks Depth Default",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Post/4501811371148308500"},next:{title:"Post Dof Upscale Default None",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Post/5374587768137989000"}},c={},l=[{value:"Technique <code>ambient</code>",id:"technique-ambient",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],p={toc:l},s="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"post-chromatic-aberration-default"},"Post Chromatic Aberration Default"),(0,o.kt)("p",null,"(",(0,o.kt)("inlineCode",{parentName:"p"},"post_chromatic_aberration:default"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"0x450123a9a4d84a2a"),")"),(0,o.kt)("p",null,"This template is referenced 1 time by ",(0,o.kt)("a",{parentName:"p",href:"/docs/Generated/Render%20Templates/post.render_template_database#post-chromatic-aberration"},"post_chromatic_aberration"),"."),(0,o.kt)("h3",{id:"technique-ambient"},"Technique ",(0,o.kt)("inlineCode",{parentName:"h3"},"ambient")),(0,o.kt)("h3",{id:"render-states"},"Render States"),(0,o.kt)("p",null,"More info can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3drenderstatetype"},"Direct3D Docs")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 0,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 0,\n    D3DRS_ALPHABLENDENABLE = 0,\n    D3DRS_CULLMODE = 1,\n    D3DRS_COLORWRITEENABLE = 7,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n};\n")),(0,o.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,o.kt)("p",null,"More info can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3dsamplerstatetype"},"Direct3D Docs")),(0,o.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 3,\n    D3DSAMP_ADDRESSV = 3,\n    D3DSAMP_MAGFILTER = 2,\n    D3DSAMP_MINFILTER = 2,\n    D3DSAMP_MIPFILTER = 2,\n};\n")),(0,o.kt)("h3",{id:"shaders"},"Shaders"),(0,o.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"float ref_chromatic_amount : register(vs_3_0, c4);\ncolumn_major float4x4 view_proj_matrix : register(vs_3_0, c0);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 texcoord : TEXCOORD;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float4 texcoord : TEXCOORD;\n    float2 texcoord1 : TEXCOORD1;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float3 temp0;\n    // def c5, 0.01, 1, -0.5, 0.5\n    // def c6, 2, 0, 0, 0\n    // dcl_position v0\n    // dcl_texcoord v1\n    // dcl_position o0\n    // dcl_texcoord o1\n    // dcl_texcoord1 o2.xy\n    // dp4 o0.x, v0, c0\n    o.position.x = dot(i.position, (view_proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, v0, c1\n    o.position.y = dot(i.position, (view_proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.w, v0, c3\n    o.position.w = dot(i.position, (view_proj_matrix._m03_m13_m23_m33));\n    // mov r0.xy, c5\n    temp0.xy = float2(0.01, 1);\n    // mad r0.x, c4.x, -r0.x, r0.y\n    temp0.x = ref_chromatic_amount.x * -temp0.x + temp0.y;\n    // add r0.yz, c5.z, v1.xxyw\n    temp0.yz = float2(-0.5, -0.5) + i.texcoord.xy;\n    // mad o1.zw, r0.xyyz, r0.x, c5.w\n    o.texcoord.zw = temp0.yz * temp0.xx + float2(0.5, 0.5);\n    // add r0.x, -r0.x, c6.x\n    temp0.x = -temp0.x + float1(2);\n    // mad o2.xy, r0.yzzw, r0.x, c5.w\n    o.texcoord1 = temp0.yzzw * temp0.x + float4(0.5, 0.5, 0.5, 0.5);\n    // mov o0.z, c5.y\n    o.position.z = float1(1);\n    // mov o1.xy, v1\n    o.texcoord.xy = i.texcoord.xy;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."),(0,o.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"sampler2D diffuse_texture : register(ps_3_0, s0);\nfloat ref_contrast : register(ps_3_0, c1);\nfloat3 render_target_size : register(ps_3_0, c0);\nstruct PixelMain_Input\n{\n    float4 texcoord : TEXCOORD;\n    float2 texcoord1 : TEXCOORD1;\n};\n\nfloat4 PixelMain(PixelMain_Input i) : COLOR\n{\n    float4 out_color;\n    float4 temp0, temp1, temp2;\n    // def c2, 0.5, 10, 0, 0\n    // dcl_texcoord v0\n    // dcl_texcoord1 v1.xy\n    // dcl_2d s0\n    // rcp r0.x, c0.x\n    temp0.x = 1.0f / render_target_size.x;\n    // rcp r0.y, c0.y\n    temp0.y = 1.0f / render_target_size.y;\n    // mad r0.xy, r0, c2.x, v0\n    temp0.xy = temp0.xy * float2(0.5, 0.5) + i.texcoord.xy;\n    // texld r0, r0, s0\n    temp0 = tex2D(diffuse_texture, temp0.xy);\n    // texld r1, v0.zwzw, s0\n    temp1 = tex2D(diffuse_texture, i.texcoord.zw);\n    // texld r2, v0, s0\n    temp2 = tex2D(diffuse_texture, i.texcoord.xy);\n    // mov r1.y, r2.y\n    temp1.y = temp2.y;\n    // texld r2, v1, s0\n    temp2 = tex2D(diffuse_texture, i.texcoord1.xy);\n    // mov r1.zw, r2.z\n    temp1.zw = temp2.z;\n    // add r0, -r0.xyzz, r1.xyww\n    temp0 = -temp0.xyzz + temp1.xyww;\n    // mul_sat r0, r0, c2.y\n    temp0 = saturate(temp0 * float4(10, 10, 10, 10));\n    // mad oC0, r0, c1.x, r1\n    out_color = temp0 * ref_contrast.x + temp1;\n    // \n\n    return out_color;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."))}m.isMDXComponent=!0}}]);