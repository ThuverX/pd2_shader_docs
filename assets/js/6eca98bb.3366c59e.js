"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[41023],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>S});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),u=o,S=p["".concat(d,".").concat(u)]||p[u]||m[u]||a;return r?n.createElement(S,i(i({ref:t},c),{},{components:r})):n.createElement(S,i({ref:t},c))}));function S(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2984:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={id:0x25ee13294dff7400,title:"Generic Shadow Caster Vertex Color Alpha"},i="Generic Shadow Caster Vertex Color Alpha",l={unversionedId:"Generated/Shaders/Base/[700-800]/2733143091983643600",id:"Generated/Shaders/Base/[700-800]/2733143091983643600",title:"Generic Shadow Caster Vertex Color Alpha",description:"(genericVERTEXCOLOR_ALPHA, 0x25ee13294dff7357)",source:"@site/docs/Generated/Shaders/Base/[700-800]/0x25ee13294dff7357.mdx",sourceDirName:"Generated/Shaders/Base/[700-800]",slug:"/Generated/Shaders/Base/[700-800]/2733143091983643600",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[700-800]/2733143091983643600",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/docs/Generated/Shaders/Base/[700-800]/0x25ee13294dff7357.mdx",tags:[],version:"current",frontMatter:{id:"2733143091983643600",title:"Generic Shadow Caster Vertex Color Alpha"},sidebar:"docsSidebar",previous:{title:"Generic Shadow Caster Ati Diffuse Texture Rl Cops Skinned 3weights Vertex Color Vertex Color Alpha Vertex Color Character",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[700-800]/2733138505246550000"},next:{title:"Generic Shadow Caster Blend Diffuse Blend Mask Seperate Blend Normal Blend Smooth Diffuse Texture Normalmap Rl Environment Vertex Color",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[700-800]/2738844632631541000"}},d={},s=[{value:"Technique <code>ambient</code>",id:"technique-ambient",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],c={toc:s},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"generic-shadow-caster-vertex-color-alpha"},"Generic Shadow Caster Vertex Color Alpha"),(0,o.kt)("p",null,"(",(0,o.kt)("inlineCode",{parentName:"p"},"generic:shadow_caster:VERTEX_COLOR_ALPHA"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"0x25ee13294dff7357"),")"),(0,o.kt)("h3",{id:"technique-ambient"},"Technique ",(0,o.kt)("inlineCode",{parentName:"h3"},"ambient")),(0,o.kt)("h3",{id:"render-states"},"Render States"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 1,\n    D3DRS_ALPHABLENDENABLE = 0,\n    D3DRS_CULLMODE = 2,\n    D3DRS_COLORWRITEENABLE = 15,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 961656599,\n    D3DRS_SLOPESCALEDEPTHBIAS = 1075838976,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n};\n")),(0,o.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,o.kt)("h3",{id:"shaders"},"Shaders"),(0,o.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"column_major float4x4 view_proj_matrix : register(vs_3_0, c0);\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float texcoord1 : TEXCOORD1;\n};\n\nVertexMain_Output VertexMain(float4 position : POSITION)\n{\n    VertexMain_Output o;\n    float temp0;\n    // dcl_position v0\n    // dcl_position o0\n    // dcl_texcoord1 o1.x\n    // dp4 o0.x, v0, c0\n    o.position.x = dot(position, (view_proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, v0, c1\n    o.position.y = dot(position, (view_proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.w, v0, c3\n    o.position.w = dot(position, (view_proj_matrix._m03_m13_m23_m33));\n    // dp4 r0.x, v0, c2\n    temp0.x = dot(position, (view_proj_matrix._m02_m12_m22_m32));\n    // mov o0.z, r0.x\n    o.position.z = temp0.x;\n    // mov o1.x, r0.x\n    o.texcoord1 = temp0.x;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."),(0,o.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"float4 PixelMain(float texcoord1 : TEXCOORD1) : COLOR\n{\n    float4 out_color;\n    // def c0, 1, 0, 0, 0\n    // dcl_texcoord1 v0.x\n    // mul oC0, c0.xyyy, v0.x\n    out_color = float4(1, 0, 0, 0) * texcoord1.x;\n    // \n\n    return out_color;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."))}m.isMDXComponent=!0}}]);