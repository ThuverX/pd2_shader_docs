"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[65353],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>S});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=t.createContext({}),d=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},p=function(e){var n=d(e.components);return t.createElement(i.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(r),m=o,S=c["".concat(i,".").concat(m)]||c[m]||u[m]||a;return r?t.createElement(S,l(l({ref:n},p),{},{components:r})):t.createElement(S,l({ref:n},p))}));function S(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[c]="string"==typeof e?e:o,l[1]=s;for(var d=2;d<a;d++)l[d]=r[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3386:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var t=r(87462),o=(r(67294),r(3905));const a={id:985901794498171e4,title:"Generic Shadow Caster Blend Diffuse Blend Mask Control Blend Mask Crossblend Blend Normal Cube Environment Mapping Diffuse Texture Gloss Blurs Cubemap Gloss Control Value Normalmap Nvidia Vertex Color"},l="Generic Shadow Caster Blend Diffuse Blend Mask Control Blend Mask Crossblend Blend Normal Cube Environment Mapping Diffuse Texture Gloss Blurs Cubemap Gloss Control Value Normalmap Nvidia Vertex Color",s={unversionedId:"Generated/Shaders/Base/[2500-2600]/9859017944981710000",id:"Generated/Shaders/Base/[2500-2600]/9859017944981710000",title:"Generic Shadow Caster Blend Diffuse Blend Mask Control Blend Mask Crossblend Blend Normal Cube Environment Mapping Diffuse Texture Gloss Blurs Cubemap Gloss Control Value Normalmap Nvidia Vertex Color",description:"(genericBLENDDIFFUSEBLENDMASKCROSSBLENDCUBEENVIRONMENTMAPPINGGLOSSBLURSCUBEMAPNORMALMAPVERTEX_COLOR, 0x88d24495ecd624fc)",source:"@site/docs/Generated/Shaders/Base/[2500-2600]/0x88d24495ecd624fc.mdx",sourceDirName:"Generated/Shaders/Base/[2500-2600]",slug:"/Generated/Shaders/Base/[2500-2600]/9859017944981710000",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[2500-2600]/9859017944981710000",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/docs/Generated/Shaders/Base/[2500-2600]/0x88d24495ecd624fc.mdx",tags:[],version:"current",frontMatter:{id:"9859017944981710000",title:"Generic Shadow Caster Blend Diffuse Blend Mask Control Blend Mask Crossblend Blend Normal Cube Environment Mapping Diffuse Texture Gloss Blurs Cubemap Gloss Control Value Normalmap Nvidia Vertex Color"},sidebar:"docsSidebar",previous:{title:"Generic Shadow Caster Ati Contour Cube Environment Mapping Diffuse Texture Gsma Texture Normalmap",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[2500-2600]/9857610367904885000"},next:{title:"Generic Shadow Caster Ati Diffuse Texture Rl Cops Vertex Color Vertex Color Alpha Vertex Color Character",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[2500-2600]/9859262486175711000"}},i={},d=[{value:"Technique <code>ambient</code>",id:"technique-ambient",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],p={toc:d},c="wrapper";function u(e){let{components:n,...r}=e;return(0,o.kt)(c,(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"generic-shadow-caster-blend-diffuse-blend-mask-control-blend-mask-crossblend-blend-normal-cube-environment-mapping-diffuse-texture-gloss-blurs-cubemap-gloss-control-value-normalmap-nvidia-vertex-color"},"Generic Shadow Caster Blend Diffuse Blend Mask Control Blend Mask Crossblend Blend Normal Cube Environment Mapping Diffuse Texture Gloss Blurs Cubemap Gloss Control Value Normalmap Nvidia Vertex Color"),(0,o.kt)("p",null,"(",(0,o.kt)("inlineCode",{parentName:"p"},"generic:shadow_caster:BLEND_DIFFUSE:BLEND_MASK_CONTROL:BLEND_MASK_CROSSBLEND:BLEND_NORMAL:CUBE_ENVIRONMENT_MAPPING:DIFFUSE_TEXTURE:GLOSS_BLURS_CUBEMAP:GLOSS_CONTROL_VALUE:NORMALMAP:NVIDIA:VERTEX_COLOR"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"0x88d24495ecd624fc"),")"),(0,o.kt)("h3",{id:"technique-ambient"},"Technique ",(0,o.kt)("inlineCode",{parentName:"h3"},"ambient")),(0,o.kt)("h3",{id:"render-states"},"Render States"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 1,\n    D3DRS_ALPHABLENDENABLE = 0,\n    D3DRS_CULLMODE = 2,\n    D3DRS_COLORWRITEENABLE = 0,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 961656599,\n    D3DRS_SLOPESCALEDEPTHBIAS = 1075838976,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n};\n")),(0,o.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,o.kt)("h3",{id:"shaders"},"Shaders"),(0,o.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"column_major float4x4 view_proj_matrix : register(vs_3_0, c0);\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float texcoord1 : TEXCOORD1;\n};\n\nVertexMain_Output VertexMain(float4 position : POSITION)\n{\n    VertexMain_Output o;\n    float temp0;\n    // dcl_position v0\n    // dcl_position o0\n    // dcl_texcoord1 o1.x\n    // dp4 o0.x, v0, c0\n    o.position.x = dot(position, (view_proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, v0, c1\n    o.position.y = dot(position, (view_proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.w, v0, c3\n    o.position.w = dot(position, (view_proj_matrix._m03_m13_m23_m33));\n    // dp4 r0.x, v0, c2\n    temp0.x = dot(position, (view_proj_matrix._m02_m12_m22_m32));\n    // mov o0.z, r0.x\n    o.position.z = temp0.x;\n    // mov o1.x, r0.x\n    o.texcoord1 = temp0.x;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."),(0,o.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"float4 PixelMain(float texcoord1 : TEXCOORD1) : COLOR\n{\n    float4 out_color;\n    // def c0, 1, 0, 0, 0\n    // dcl_texcoord1 v0.x\n    // mul oC0, c0.xyyy, v0.x\n    out_color = float4(1, 0, 0, 0) * texcoord1.x;\n    // \n\n    return out_color;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."))}u.isMDXComponent=!0}}]);