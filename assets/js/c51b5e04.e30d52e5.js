"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[84696],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>u});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=t.createContext({}),d=function(e){var n=t.useContext(m),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},p=function(e){var n=d(e.components);return t.createElement(m.Provider,{value:n},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},x=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(a),x=r,u=s["".concat(m,".").concat(x)]||s[x]||c[x]||o;return a?t.createElement(u,i(i({ref:n},p),{},{components:a})):t.createElement(u,i({ref:n},p))}));function u(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=x;var l={};for(var m in n)hasOwnProperty.call(n,m)&&(l[m]=n[m]);l.originalType=e,l[s]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}x.displayName="MDXCreateElement"},8727:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>m,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=a(87462),r=(a(67294),a(3905));const o={id:0xf39910c2a9445800,title:"Generic Shadow Caster Diffuse Texture Diffuse Uvanim Global Environment Mapping Normalmap Normalmap Depth Texture Normalmap Uv1 Normal Uvanim Nvidia Parallax Parallax Animation Parallax Relief Parallax Shadows Self Illumination Skinned 3weights"},i="Generic Shadow Caster Diffuse Texture Diffuse Uvanim Global Environment Mapping Normalmap Normalmap Depth Texture Normalmap Uv1 Normal Uvanim Nvidia Parallax Parallax Animation Parallax Relief Parallax Shadows Self Illumination Skinned 3weights",l={unversionedId:"Generated/Shaders/Base/[4500-4600]/17553079450902747000",id:"Generated/Shaders/Base/[4500-4600]/17553079450902747000",title:"Generic Shadow Caster Diffuse Texture Diffuse Uvanim Global Environment Mapping Normalmap Normalmap Depth Texture Normalmap Uv1 Normal Uvanim Nvidia Parallax Parallax Animation Parallax Relief Parallax Shadows Self Illumination Skinned 3weights",description:"(genericDIFFUSETEXTUREGLOBALENVIRONMENTMAPPINGNORMALMAPDEPTHTEXTURENORMALUVANIMPARALLAXPARALLAXRELIEFSELFILLUMINATION:SKINNED3WEIGHTS, 0xf39910c2a9445bcd)",source:"@site/docs/Generated/Shaders/Base/[4500-4600]/0xf39910c2a9445bcd.mdx",sourceDirName:"Generated/Shaders/Base/[4500-4600]",slug:"/Generated/Shaders/Base/[4500-4600]/17553079450902747000",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[4500-4600]/17553079450902747000",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/docs/Generated/Shaders/Base/[4500-4600]/0xf39910c2a9445bcd.mdx",tags:[],version:"current",frontMatter:{id:"17553079450902747000",title:"Generic Shadow Caster Diffuse Texture Diffuse Uvanim Global Environment Mapping Normalmap Normalmap Depth Texture Normalmap Uv1 Normal Uvanim Nvidia Parallax Parallax Animation Parallax Relief Parallax Shadows Self Illumination Skinned 3weights"},sidebar:"docsSidebar",previous:{title:"Generic Shadow Caster Alpha Masked Ati Diffuse Texture External Alpha Ref Normalmap Opacity Texture Self Illumination Self Illumination Bloom",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[4500-4600]/17548408594957718000"},next:{title:"Generic Default Depth Scaling Diffuse Texture Global Environment Mapping Normalmap Self Illumination",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[4500-4600]/17556151466761607000"}},m={},d=[{value:"Technique <code>ambient</code>",id:"technique-ambient",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],p={toc:d},s="wrapper";function c(e){let{components:n,...a}=e;return(0,r.kt)(s,(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"generic-shadow-caster-diffuse-texture-diffuse-uvanim-global-environment-mapping-normalmap-normalmap-depth-texture-normalmap-uv1-normal-uvanim-nvidia-parallax-parallax-animation-parallax-relief-parallax-shadows-self-illumination-skinned-3weights"},"Generic Shadow Caster Diffuse Texture Diffuse Uvanim Global Environment Mapping Normalmap Normalmap Depth Texture Normalmap Uv1 Normal Uvanim Nvidia Parallax Parallax Animation Parallax Relief Parallax Shadows Self Illumination Skinned 3weights"),(0,r.kt)("p",null,"(",(0,r.kt)("inlineCode",{parentName:"p"},"generic:shadow_caster:DIFFUSE_TEXTURE:DIFFUSE_UVANIM:GLOBAL_ENVIRONMENT_MAPPING:NORMALMAP:NORMALMAP_DEPTH_TEXTURE:NORMALMAP_UV1:NORMAL_UVANIM:NVIDIA:PARALLAX:PARALLAX_ANIMATION:PARALLAX_RELIEF:PARALLAX_SHADOWS:SELF_ILLUMINATION:SKINNED_3WEIGHTS"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"0xf39910c2a9445bcd"),")"),(0,r.kt)("h3",{id:"technique-ambient"},"Technique ",(0,r.kt)("inlineCode",{parentName:"h3"},"ambient")),(0,r.kt)("h3",{id:"render-states"},"Render States"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 1,\n    D3DRS_ALPHABLENDENABLE = 0,\n    D3DRS_CULLMODE = 2,\n    D3DRS_COLORWRITEENABLE = 0,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 961656599,\n    D3DRS_SLOPESCALEDEPTHBIAS = 1075838976,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n};\n")),(0,r.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,r.kt)("h3",{id:"shaders"},"Shaders"),(0,r.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hlsl"},"column_major float4x3 bones[54] : register(vs_3_0, c0);\ncolumn_major float4x4 view_proj_matrix : register(vs_3_0, c162);\nstruct VertexMain_Input\n{\n    float4 blendweight : BLENDWEIGHT;\n    float4 blendindices : BLENDINDICES;\n    float4 position : POSITION;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float texcoord1 : TEXCOORD1;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float4 temp0;\n    float2 addr0;\n    float3 temp1;\n    // def c166, 3, 1, 0, 0\n    // dcl_blendweight v0\n    // dcl_blendindices v1\n    // dcl_position v2\n    // dcl_position o0\n    // dcl_texcoord1 o1.x\n    // mul r0.xyz, c166.x, v1\n    temp0.xyz = float3(3, 3, 3) * i.blendindices.xyz;\n    // mova a0.x, r0.y\n    addr0.x = temp0.y;\n    // dp4 r1.x, v2, c0[a0.x]\n    temp1.x = dot(i.position, (bones[0 + (addr0.x / 3)]._m00_m10_m20_m30));\n    // dp4 r1.y, v2, c1[a0.x]\n    temp1.y = dot(i.position, (bones[0 + (addr0.x / 3)]._m01_m11_m21_m31));\n    // dp4 r1.z, v2, c2[a0.x]\n    temp1.z = dot(i.position, (bones[0 + (addr0.x / 3)]._m02_m12_m22_m32));\n    // mul r1.xyz, r1, v0.y\n    temp1.xyz = temp1.xyz * i.blendweight.yyy;\n    // mova a0.xy, r0.xzzw\n    addr0.xy = temp0.xz;\n    // dp4 r0.x, v2, c0[a0.x]\n    temp0.x = dot(i.position, (bones[0 + (addr0.x / 3)]._m00_m10_m20_m30));\n    // dp4 r0.y, v2, c1[a0.x]\n    temp0.y = dot(i.position, (bones[0 + (addr0.x / 3)]._m01_m11_m21_m31));\n    // dp4 r0.z, v2, c2[a0.x]\n    temp0.z = dot(i.position, (bones[0 + (addr0.x / 3)]._m02_m12_m22_m32));\n    // mad r0.xyz, v0.x, r0, r1\n    temp0.xyz = i.blendweight.xxx * temp0.xyz + temp1.xyz;\n    // dp4 r1.x, v2, c0[a0.y]\n    temp1.x = dot(i.position, (bones[0 + (addr0.y / 3)]._m00_m10_m20_m30));\n    // dp4 r1.y, v2, c1[a0.y]\n    temp1.y = dot(i.position, (bones[0 + (addr0.y / 3)]._m01_m11_m21_m31));\n    // dp4 r1.z, v2, c2[a0.y]\n    temp1.z = dot(i.position, (bones[0 + (addr0.y / 3)]._m02_m12_m22_m32));\n    // mad r0.xyz, v0.z, r1, r0\n    temp0.xyz = i.blendweight.zzz * temp1.xyz + temp0.xyz;\n    // mov r0.w, c166.y\n    temp0.w = float1(1);\n    // dp4 o0.x, r0, c162\n    o.position.x = dot(temp0, (view_proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, r0, c163\n    o.position.y = dot(temp0, (view_proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.w, r0, c165\n    o.position.w = dot(temp0, (view_proj_matrix._m03_m13_m23_m33));\n    // dp4 r0.x, r0, c164\n    temp0.x = dot(temp0, (view_proj_matrix._m02_m12_m22_m32));\n    // mov o0.z, r0.x\n    o.position.z = temp0.x;\n    // mov o1.x, r0.x\n    o.texcoord1 = temp0.x;\n    // \n\n    return o;\n}\n")),(0,r.kt)("p",null,"Decompiled by DXDecompiler."),(0,r.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hlsl"},"float4 PixelMain(float texcoord1 : TEXCOORD1) : COLOR\n{\n    float4 out_color;\n    // def c0, 1, 0, 0, 0\n    // dcl_texcoord1 v0.x\n    // mul oC0, c0.xyyy, v0.x\n    out_color = float4(1, 0, 0, 0) * texcoord1.x;\n    // \n\n    return out_color;\n}\n")),(0,r.kt)("p",null,"Decompiled by DXDecompiler."))}c.isMDXComponent=!0}}]);