"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[72391],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>_});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(t),u=a,_=m["".concat(l,".").concat(u)]||m[u]||c[u]||o;return t?r.createElement(_,d(d({ref:n},s),{},{components:t})):r.createElement(_,d({ref:n},s))}));function _(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,d=new Array(o);d[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[m]="string"==typeof e?e:a,d[1]=i;for(var p=2;p<o;p++)d[p]=t[p];return r.createElement.apply(null,d)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},95281:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={id:0xe769fd2e1779d000,title:"Generic Shadow Caster Blend Diffuse Blend Mask Control Blend Normal Cube Environment Mapping Diffuse Texture Instanced Normalmap World Up Blend"},d="Generic Shadow Caster Blend Diffuse Blend Mask Control Blend Normal Cube Environment Mapping Diffuse Texture Instanced Normalmap World Up Blend",i={unversionedId:"Generated/Shaders/Base/[4300-4400]/16675137469720154000",id:"Generated/Shaders/Base/[4300-4400]/16675137469720154000",title:"Generic Shadow Caster Blend Diffuse Blend Mask Control Blend Normal Cube Environment Mapping Diffuse Texture Instanced Normalmap World Up Blend",description:"(genericBLENDDIFFUSEBLENDNORMALDIFFUSETEXTURENORMALMAP:WORLDUPBLEND, 0xe769fd2e1779d091)",source:"@site/docs/Generated/Shaders/Base/[4300-4400]/0xe769fd2e1779d091.mdx",sourceDirName:"Generated/Shaders/Base/[4300-4400]",slug:"/Generated/Shaders/Base/[4300-4400]/16675137469720154000",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[4300-4400]/16675137469720154000",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/docs/Generated/Shaders/Base/[4300-4400]/0xe769fd2e1779d091.mdx",tags:[],version:"current",frontMatter:{id:"16675137469720154000",title:"Generic Shadow Caster Blend Diffuse Blend Mask Control Blend Normal Cube Environment Mapping Diffuse Texture Instanced Normalmap World Up Blend"},sidebar:"docsSidebar",previous:{title:"Generic Shadow Caster Align Normal World Z Alpha Masked Diffuse Texture Double Sided Instanced Nvidia Opacity Texture",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[4300-4400]/16669433106751767000"},next:{title:"Generic Default Depth Scaling Diffuse Texture Double Sided Skinned 3weights",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[4300-4400]/16675823192881314000"}},l={},p=[{value:"Technique <code>ambient</code>",id:"technique-ambient",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],s={toc:p},m="wrapper";function c(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"generic-shadow-caster-blend-diffuse-blend-mask-control-blend-normal-cube-environment-mapping-diffuse-texture-instanced-normalmap-world-up-blend"},"Generic Shadow Caster Blend Diffuse Blend Mask Control Blend Normal Cube Environment Mapping Diffuse Texture Instanced Normalmap World Up Blend"),(0,a.kt)("p",null,"(",(0,a.kt)("inlineCode",{parentName:"p"},"generic:shadow_caster:BLEND_DIFFUSE:BLEND_MASK_CONTROL:BLEND_NORMAL:CUBE_ENVIRONMENT_MAPPING:DIFFUSE_TEXTURE:INSTANCED:NORMALMAP:WORLD_UP_BLEND"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"0xe769fd2e1779d091"),")"),(0,a.kt)("h3",{id:"technique-ambient"},"Technique ",(0,a.kt)("inlineCode",{parentName:"h3"},"ambient")),(0,a.kt)("h3",{id:"render-states"},"Render States"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 1,\n    D3DRS_ALPHABLENDENABLE = 0,\n    D3DRS_CULLMODE = 2,\n    D3DRS_COLORWRITEENABLE = 15,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 961656599,\n    D3DRS_SLOPESCALEDEPTHBIAS = 1075838976,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n};\n")),(0,a.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,a.kt)("h3",{id:"shaders"},"Shaders"),(0,a.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hlsl"},"column_major float4x4 ref_world_tm[50] : register(vs_3_0, c0);\ncolumn_major float4x4 view_proj_matrix : register(vs_3_0, c200);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 position1 : POSITION1;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float texcoord1 : TEXCOORD1;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float4 temp0, temp1;\n    float addr0;\n    // def c204, 4, 1, 0, 0\n    // dcl_position v0\n    // dcl_position1 v1\n    // dcl_position o0\n    // dcl_texcoord1 o1.x\n    // frc r0.x, v1.x\n    temp0.x = frac(i.position1.x);\n    // add r0.x, -r0.x, v1.x\n    temp0.x = -temp0.x + i.position1.x;\n    // mul r0.x, r0.x, c204.x\n    temp0.x = temp0.x * float1(4);\n    // mova a0.x, r0.x\n    addr0.x = temp0.x;\n    // mad r0, v0.xyzx, c204.yyyz, c204.zzzy\n    temp0 = i.position.xyzx * float4(1, 1, 1, 0) + float4(0, 0, 0, 1);\n    // dp4 r1.x, r0, c0[a0.x]\n    temp1.x = dot(temp0, (ref_world_tm[0 + (addr0.x / 4)]._m00_m10_m20_m30));\n    // dp4 r1.y, r0, c1[a0.x]\n    temp1.y = dot(temp0, (ref_world_tm[0 + (addr0.x / 4)]._m01_m11_m21_m31));\n    // dp4 r1.z, r0, c2[a0.x]\n    temp1.z = dot(temp0, (ref_world_tm[0 + (addr0.x / 4)]._m02_m12_m22_m32));\n    // dp4 r1.w, r0, c3[a0.x]\n    temp1.w = dot(temp0, (ref_world_tm[0 + (addr0.x / 4)]._m03_m13_m23_m33));\n    // dp4 o0.x, r1, c200\n    o.position.x = dot(temp1, (view_proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, r1, c201\n    o.position.y = dot(temp1, (view_proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.w, r1, c203\n    o.position.w = dot(temp1, (view_proj_matrix._m03_m13_m23_m33));\n    // dp4 r0.x, r1, c202\n    temp0.x = dot(temp1, (view_proj_matrix._m02_m12_m22_m32));\n    // mov o0.z, r0.x\n    o.position.z = temp0.x;\n    // mov o1.x, r0.x\n    o.texcoord1 = temp0.x;\n    // \n\n    return o;\n}\n")),(0,a.kt)("p",null,"Decompiled by DXDecompiler."),(0,a.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hlsl"},"float4 PixelMain(float texcoord1 : TEXCOORD1) : COLOR\n{\n    float4 out_color;\n    // def c0, 1, 0, 0, 0\n    // dcl_texcoord1 v0.x\n    // mul oC0, c0.xyyy, v0.x\n    out_color = float4(1, 0, 0, 0) * texcoord1.x;\n    // \n\n    return out_color;\n}\n")),(0,a.kt)("p",null,"Decompiled by DXDecompiler."))}c.isMDXComponent=!0}}]);