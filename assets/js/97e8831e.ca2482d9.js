"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[65677],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>E});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),d=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},p=function(e){var r=d(e.components);return t.createElement(i.Provider,{value:r},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(n),u=a,E=m["".concat(i,".").concat(u)]||m[u]||c[u]||o;return n?t.createElement(E,l(l({ref:r},p),{},{components:n})):t.createElement(E,l({ref:r},p))}));function E(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s[m]="string"==typeof e?e:a,l[1]=s;for(var d=2;d<o;d++)l[d]=n[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},38765:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var t=n(87462),a=(n(67294),n(3905));const o={id:0x959615c9c7f5f800,title:"Generic Shadow Caster Blend Diffuse Blend Gsma Blend Mask Control Blend Mask Crossblend Blend Normal Cube Environment Mapping Diffuse Texture Gloss Blurs Cubemap Gsma Texture Normalmap Normalmap Depth Texture Normalmap Uv1 Nvidia Parallax Parallax Relief Vertex Color"},l="Generic Shadow Caster Blend Diffuse Blend Gsma Blend Mask Control Blend Mask Crossblend Blend Normal Cube Environment Mapping Diffuse Texture Gloss Blurs Cubemap Gsma Texture Normalmap Normalmap Depth Texture Normalmap Uv1 Nvidia Parallax Parallax Relief Vertex Color",s={unversionedId:"Generated/Shaders/Base/[2800-2900]/10778826714545256000",id:"Generated/Shaders/Base/[2800-2900]/10778826714545256000",title:"Generic Shadow Caster Blend Diffuse Blend Gsma Blend Mask Control Blend Mask Crossblend Blend Normal Cube Environment Mapping Diffuse Texture Gloss Blurs Cubemap Gsma Texture Normalmap Normalmap Depth Texture Normalmap Uv1 Nvidia Parallax Parallax Relief Vertex Color",description:"(genericBLENDDIFFUSEBLENDMASKCONTROLBLENDNORMALDIFFUSETEXTUREGSMATEXTURENORMALMAPDEPTHTEXTURENVIDIAPARALLAXRELIEF:VERTEX_COLOR, 0x959615c9c7f5f840)",source:"@site/docs/Generated/Shaders/Base/[2800-2900]/0x959615c9c7f5f840.mdx",sourceDirName:"Generated/Shaders/Base/[2800-2900]",slug:"/Generated/Shaders/Base/[2800-2900]/10778826714545256000",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[2800-2900]/10778826714545256000",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/docs/Generated/Shaders/Base/[2800-2900]/0x959615c9c7f5f840.mdx",tags:[],version:"current",frontMatter:{id:"10778826714545256000",title:"Generic Shadow Caster Blend Diffuse Blend Gsma Blend Mask Control Blend Mask Crossblend Blend Normal Cube Environment Mapping Diffuse Texture Gloss Blurs Cubemap Gsma Texture Normalmap Normalmap Depth Texture Normalmap Uv1 Nvidia Parallax Parallax Relief Vertex Color"},sidebar:"docsSidebar",previous:{title:"Generic Shadow Caster Alpha Masked Diffuse Texture External Alpha Ref Instanced Normalmap Opacity Texture Self Illumination Self Illumination Tint",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[2800-2900]/10778727282560055000"},next:{title:"Generic Shadow Caster Alpha Masked Ati Diffuse Texture External Alpha Ref Gloss Control Value",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[2800-2900]/10783592872366277000"}},i={},d=[{value:"Technique <code>ambient</code>",id:"technique-ambient",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],p={toc:d},m="wrapper";function c(e){let{components:r,...n}=e;return(0,a.kt)(m,(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"generic-shadow-caster-blend-diffuse-blend-gsma-blend-mask-control-blend-mask-crossblend-blend-normal-cube-environment-mapping-diffuse-texture-gloss-blurs-cubemap-gsma-texture-normalmap-normalmap-depth-texture-normalmap-uv1-nvidia-parallax-parallax-relief-vertex-color"},"Generic Shadow Caster Blend Diffuse Blend Gsma Blend Mask Control Blend Mask Crossblend Blend Normal Cube Environment Mapping Diffuse Texture Gloss Blurs Cubemap Gsma Texture Normalmap Normalmap Depth Texture Normalmap Uv1 Nvidia Parallax Parallax Relief Vertex Color"),(0,a.kt)("p",null,"(",(0,a.kt)("inlineCode",{parentName:"p"},"generic:shadow_caster:BLEND_DIFFUSE:BLEND_GSMA:BLEND_MASK_CONTROL:BLEND_MASK_CROSSBLEND:BLEND_NORMAL:CUBE_ENVIRONMENT_MAPPING:DIFFUSE_TEXTURE:GLOSS_BLURS_CUBEMAP:GSMA_TEXTURE:NORMALMAP:NORMALMAP_DEPTH_TEXTURE:NORMALMAP_UV1:NVIDIA:PARALLAX:PARALLAX_RELIEF:VERTEX_COLOR"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"0x959615c9c7f5f840"),")"),(0,a.kt)("h3",{id:"technique-ambient"},"Technique ",(0,a.kt)("inlineCode",{parentName:"h3"},"ambient")),(0,a.kt)("h3",{id:"render-states"},"Render States"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 1,\n    D3DRS_ALPHABLENDENABLE = 0,\n    D3DRS_CULLMODE = 2,\n    D3DRS_COLORWRITEENABLE = 0,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 961656599,\n    D3DRS_SLOPESCALEDEPTHBIAS = 1075838976,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n};\n")),(0,a.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,a.kt)("h3",{id:"shaders"},"Shaders"),(0,a.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hlsl"},"column_major float4x4 view_proj_matrix : register(vs_3_0, c0);\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float texcoord1 : TEXCOORD1;\n};\n\nVertexMain_Output VertexMain(float4 position : POSITION)\n{\n    VertexMain_Output o;\n    float temp0;\n    // dcl_position v0\n    // dcl_position o0\n    // dcl_texcoord1 o1.x\n    // dp4 o0.x, v0, c0\n    o.position.x = dot(position, (view_proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, v0, c1\n    o.position.y = dot(position, (view_proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.w, v0, c3\n    o.position.w = dot(position, (view_proj_matrix._m03_m13_m23_m33));\n    // dp4 r0.x, v0, c2\n    temp0.x = dot(position, (view_proj_matrix._m02_m12_m22_m32));\n    // mov o0.z, r0.x\n    o.position.z = temp0.x;\n    // mov o1.x, r0.x\n    o.texcoord1 = temp0.x;\n    // \n\n    return o;\n}\n")),(0,a.kt)("p",null,"Decompiled by DXDecompiler."),(0,a.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hlsl"},"float4 PixelMain(float texcoord1 : TEXCOORD1) : COLOR\n{\n    float4 out_color;\n    // def c0, 1, 0, 0, 0\n    // dcl_texcoord1 v0.x\n    // mul oC0, c0.xyyy, v0.x\n    out_color = float4(1, 0, 0, 0) * texcoord1.x;\n    // \n\n    return out_color;\n}\n")),(0,a.kt)("p",null,"Decompiled by DXDecompiler."))}c.isMDXComponent=!0}}]);