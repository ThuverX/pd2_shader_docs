"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[54600],{603905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>D});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(n),u=a,D=c["".concat(l,".").concat(u)]||c[u]||m[u]||o;return n?r.createElement(D,s(s({ref:t},p),{},{components:n})):r.createElement(D,s({ref:t},p))}));function D(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var d=2;d<o;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},814684:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=n(487462),a=(n(667294),n(603905));const o={id:0x3e79a597271bf000,title:"Blit Masks Depth Default"},s="Blit Masks Depth Default",i={unversionedId:"Generated/Shaders/Post/4501811371148308500",id:"Generated/Shaders/Post/4501811371148308500",title:"Blit Masks Depth Default",description:"(blitmasksdepth:default, 0x3e79a597271bf0f1)",source:"@site/docs/Generated/Shaders/Post/0x3e79a597271bf0f1.mdx",sourceDirName:"Generated/Shaders/Post",slug:"/Generated/Shaders/Post/4501811371148308500",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Post/4501811371148308500",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/Generated/Shaders/Post/0x3e79a597271bf0f1.mdx",tags:[],version:"current",frontMatter:{id:"4501811371148308500",title:"Blit Masks Depth Default"},sidebar:"docsSidebar",previous:{title:"Post Contour Mask Default",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Post/4496740080585658000"},next:{title:"Post Chromatic Aberration Default",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Post/4972294675115822000"}},l={},d=[{value:"Technique <code>ambient</code>",id:"technique-ambient",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],p={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"blit-masks-depth-default"},"Blit Masks Depth Default"),(0,a.kt)("p",null,"(",(0,a.kt)("inlineCode",{parentName:"p"},"blit_masks_depth:default"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"0x3e79a597271bf0f1"),")"),(0,a.kt)("p",null,"This template is referenced 1 time by ",(0,a.kt)("a",{parentName:"p",href:"/docs/Generated/Render%20Templates/post.render_template_database#blit-masks-depth"},"blit_masks_depth"),"."),(0,a.kt)("h3",{id:"technique-ambient"},"Technique ",(0,a.kt)("inlineCode",{parentName:"h3"},"ambient")),(0,a.kt)("h3",{id:"render-states"},"Render States"),(0,a.kt)("p",null,"More info can be found on the ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3drenderstatetype"},"Direct3D Docs")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 8,\n    D3DRS_ZWRITEENABLE = 1,\n    D3DRS_ALPHABLENDENABLE = 0,\n    D3DRS_CULLMODE = 1,\n    D3DRS_COLORWRITEENABLE = 15,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n};\n")),(0,a.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,a.kt)("p",null,"More info can be found on the ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3dsamplerstatetype"},"Direct3D Docs")),(0,a.kt)("h3",{id:"shaders"},"Shaders"),(0,a.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hlsl"},"column_major float4x4 view_proj_matrix : register(vs_3_0, c0);\nfloat4 VertexMain(float4 position : POSITION) : POSITION\n{\n    float4 out_position;\n    float3 temp0;\n    // dcl_position v0\n    // dcl_position o0\n    // dp4 r0.x, v0, c0\n    temp0.x = dot(position, (view_proj_matrix._m00_m10_m20_m30));\n    // dp4 r0.y, v0, c1\n    temp0.y = dot(position, (view_proj_matrix._m01_m11_m21_m31));\n    // dp4 r0.z, v0, c3\n    temp0.z = dot(position, (view_proj_matrix._m03_m13_m23_m33));\n    // mov o0, r0.xyzz\n    out_position = temp0.xyzz;\n    // \n\n    return out_position;\n}\n")),(0,a.kt)("p",null,"Decompiled by DXDecompiler."),(0,a.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hlsl"},"float camera_far_range : register(ps_3_0, c0);\nfloat4 PixelMain() : COLOR\n{\n    float4 out_color;\n    float temp0;\n    // def c1, 1, 0, 0, 0\n    // mov r0.x, c0.x\n    temp0.x = camera_far_range.x;\n    // mul oC0, r0.x, c1.xyyy\n    out_color = temp0.x * float4(1, 0, 0, 0);\n    // \n\n    return out_color;\n}\n")),(0,a.kt)("p",null,"Decompiled by DXDecompiler."))}m.isMDXComponent=!0}}]);