"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[54600],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>D});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(r),m=a,D=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return r?n.createElement(D,l(l({ref:t},p),{},{components:r})):n.createElement(D,l({ref:t},p))}));function D(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},14684:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const o={id:0x3e79a597271bf000,title:"Blit Masks Depth Default"},l="Blit Masks Depth Default",i={unversionedId:"Generated/Shaders/Post/4501811371148308500",id:"Generated/Shaders/Post/4501811371148308500",title:"Blit Masks Depth Default",description:"(blitmasksdepth:default, 0x3e79a597271bf0f1)",source:"@site/docs/Generated/Shaders/Post/0x3e79a597271bf0f1.mdx",sourceDirName:"Generated/Shaders/Post",slug:"/Generated/Shaders/Post/4501811371148308500",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Post/4501811371148308500",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/docs/Generated/Shaders/Post/0x3e79a597271bf0f1.mdx",tags:[],version:"current",frontMatter:{id:"4501811371148308500",title:"Blit Masks Depth Default"},sidebar:"docsSidebar",previous:{title:"Post Contour Mask Default",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Post/4496740080585658000"},next:{title:"Post Chromatic Aberration Default",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Post/4972294675115822000"}},s={},d=[{value:"Technique <code>ambient</code>",id:"technique-ambient",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],p={toc:d},c="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"blit-masks-depth-default"},"Blit Masks Depth Default"),(0,a.kt)("p",null,"(",(0,a.kt)("inlineCode",{parentName:"p"},"blit_masks_depth:default"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"0x3e79a597271bf0f1"),")"),(0,a.kt)("h3",{id:"technique-ambient"},"Technique ",(0,a.kt)("inlineCode",{parentName:"h3"},"ambient")),(0,a.kt)("h3",{id:"render-states"},"Render States"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 8,\n    D3DRS_ZWRITEENABLE = 1,\n    D3DRS_ALPHABLENDENABLE = 0,\n    D3DRS_CULLMODE = 1,\n    D3DRS_COLORWRITEENABLE = 15,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n};\n")),(0,a.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,a.kt)("h3",{id:"shaders"},"Shaders"),(0,a.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hlsl"},"column_major float4x4 view_proj_matrix : register(vs_3_0, c0);\nfloat4 VertexMain(float4 position : POSITION) : POSITION\n{\n    float4 out_position;\n    float3 temp0;\n    // dcl_position v0\n    // dcl_position o0\n    // dp4 r0.x, v0, c0\n    temp0.x = dot(position, (view_proj_matrix._m00_m10_m20_m30));\n    // dp4 r0.y, v0, c1\n    temp0.y = dot(position, (view_proj_matrix._m01_m11_m21_m31));\n    // dp4 r0.z, v0, c3\n    temp0.z = dot(position, (view_proj_matrix._m03_m13_m23_m33));\n    // mov o0, r0.xyzz\n    out_position = temp0.xyzz;\n    // \n\n    return out_position;\n}\n")),(0,a.kt)("p",null,"Decompiled by DXDecompiler."),(0,a.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hlsl"},"float camera_far_range : register(ps_3_0, c0);\nfloat4 PixelMain() : COLOR\n{\n    float4 out_color;\n    float temp0;\n    // def c1, 1, 0, 0, 0\n    // mov r0.x, c0.x\n    temp0.x = camera_far_range.x;\n    // mul oC0, r0.x, c1.xyyy\n    out_color = temp0.x * float4(1, 0, 0, 0);\n    // \n\n    return out_color;\n}\n")),(0,a.kt)("p",null,"Decompiled by DXDecompiler."))}u.isMDXComponent=!0}}]);