"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[60123],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>s});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},c="mdxType",x={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},_=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),c=l(t),_=o,s=c["".concat(i,".").concat(_)]||c[_]||x[_]||a;return t?r.createElement(s,d(d({ref:n},p),{},{components:t})):r.createElement(s,d({ref:n},p))}));function s(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,d=new Array(a);d[0]=_;var m={};for(var i in n)hasOwnProperty.call(n,i)&&(m[i]=n[i]);m.originalType=e,m[c]="string"==typeof e?e:o,d[1]=m;for(var l=2;l<a;l++)d[l]=t[l];return r.createElement.apply(null,d)}return r.createElement.apply(null,t)}_.displayName="MDXCreateElement"},6567:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>x,frontMatter:()=>a,metadata:()=>m,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const a={id:0xb60f1d6018ad5000,title:"Generic Default Skinned 3weights Vertex Color Vertex Color Alpha"},d="Generic Default Skinned 3weights Vertex Color Vertex Color Alpha",m={unversionedId:"Generated/Shaders/Base/[3400-3500]/13118736538121622000",id:"Generated/Shaders/Base/[3400-3500]/13118736538121622000",title:"Generic Default Skinned 3weights Vertex Color Vertex Color Alpha",description:"(genericSKINNED3WEIGHTSVERTEXCOLORALPHA, 0xb60f1d6018ad52ba)",source:"@site/docs/Generated/Shaders/Base/[3400-3500]/0xb60f1d6018ad52ba.mdx",sourceDirName:"Generated/Shaders/Base/[3400-3500]",slug:"/Generated/Shaders/Base/[3400-3500]/13118736538121622000",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[3400-3500]/13118736538121622000",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/docs/Generated/Shaders/Base/[3400-3500]/0xb60f1d6018ad52ba.mdx",tags:[],version:"current",frontMatter:{id:"13118736538121622000",title:"Generic Default Skinned 3weights Vertex Color Vertex Color Alpha"},sidebar:"docsSidebar",previous:{title:"Generic Shadow Caster Ati Diffuse Texture Normalmap Rl 3rd Weapons Vertex Color",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[3400-3500]/13111197617554577000"},next:{title:"Generic Shadow Caster Diffuse Texture Normalmap Rl Environment Vertex Color",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[3400-3500]/13122019720688680000"}},i={},l=[{value:"Technique <code>deferred_ambient</code>",id:"technique-deferred_ambient",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],p={toc:l},c="wrapper";function x(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"generic-default-skinned-3weights-vertex-color-vertex-color-alpha"},"Generic Default Skinned 3weights Vertex Color Vertex Color Alpha"),(0,o.kt)("p",null,"(",(0,o.kt)("inlineCode",{parentName:"p"},"generic:default:SKINNED_3WEIGHTS:VERTEX_COLOR:VERTEX_COLOR_ALPHA"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"0xb60f1d6018ad52ba"),")"),(0,o.kt)("h3",{id:"technique-deferred_ambient"},"Technique ",(0,o.kt)("inlineCode",{parentName:"h3"},"deferred_ambient")),(0,o.kt)("h3",{id:"render-states"},"Render States"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 1,\n    D3DRS_ALPHABLENDENABLE = 0,\n    D3DRS_CULLMODE = 2,\n    D3DRS_COLORWRITEENABLE = 15,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n};\n")),(0,o.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,o.kt)("h3",{id:"shaders"},"Shaders"),(0,o.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"column_major float4x3 bones[54] : register(vs_3_0, c0);\nfloat camera_near_range : register(vs_3_0, c169);\ncolumn_major float4x4 view_proj_matrix : register(vs_3_0, c162);\ncolumn_major float4x4 world_matrix : register(vs_3_0, c166);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 normal : NORMAL;\n    float4 blendweight : BLENDWEIGHT;\n    float4 blendindices : BLENDINDICES;\n    float4 color : COLOR;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float texcoord1 : TEXCOORD1;\n    float3 texcoord2 : TEXCOORD2;\n    float4 color : COLOR;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float4 temp0;\n    float3 addr0, temp1, temp2;\n    // def c170, 2, -1, 3, 1\n    // dcl_position v0\n    // dcl_normal v1\n    // dcl_blendweight v2\n    // dcl_blendindices v3\n    // dcl_color v4\n    // dcl_position o0\n    // dcl_texcoord1 o1.x\n    // dcl_texcoord2 o2.xyz\n    // dcl_color o3\n    // mul r0.xyz, c170.z, v3\n    temp0.xyz = float3(3, 3, 3) * i.blendindices.xyz;\n    // mova a0.xyz, r0.yxzw\n    addr0.xyz = temp0.yxz;\n    // dp4 r1.x, v0, c0[a0.x]\n    temp1.x = dot(i.position, (bones[0 + (addr0.x / 3)]._m00_m10_m20_m30));\n    // dp4 r1.y, v0, c1[a0.x]\n    temp1.y = dot(i.position, (bones[0 + (addr0.x / 3)]._m01_m11_m21_m31));\n    // dp4 r1.z, v0, c2[a0.x]\n    temp1.z = dot(i.position, (bones[0 + (addr0.x / 3)]._m02_m12_m22_m32));\n    // mul r1.xyz, r1, v2.y\n    temp1.xyz = temp1.xyz * i.blendweight.yyy;\n    // dp4 r0.x, v0, c0[a0.y]\n    temp0.x = dot(i.position, (bones[0 + (addr0.y / 3)]._m00_m10_m20_m30));\n    // dp4 r0.y, v0, c1[a0.y]\n    temp0.y = dot(i.position, (bones[0 + (addr0.y / 3)]._m01_m11_m21_m31));\n    // dp4 r0.z, v0, c2[a0.y]\n    temp0.z = dot(i.position, (bones[0 + (addr0.y / 3)]._m02_m12_m22_m32));\n    // mad r0.xyz, v2.x, r0, r1\n    temp0.xyz = i.blendweight.xxx * temp0.xyz + temp1.xyz;\n    // dp4 r1.x, v0, c0[a0.z]\n    temp1.x = dot(i.position, (bones[0 + (addr0.z / 3)]._m00_m10_m20_m30));\n    // dp4 r1.y, v0, c1[a0.z]\n    temp1.y = dot(i.position, (bones[0 + (addr0.z / 3)]._m01_m11_m21_m31));\n    // dp4 r1.z, v0, c2[a0.z]\n    temp1.z = dot(i.position, (bones[0 + (addr0.z / 3)]._m02_m12_m22_m32));\n    // mad r0.xyz, v2.z, r1, r0\n    temp0.xyz = i.blendweight.zzz * temp1.xyz + temp0.xyz;\n    // mov r0.w, c170.w\n    temp0.w = float1(1);\n    // dp4 o0.x, r0, c162\n    o.position.x = dot(temp0, (view_proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, r0, c163\n    o.position.y = dot(temp0, (view_proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.w, r0, c165\n    o.position.w = dot(temp0, (view_proj_matrix._m03_m13_m23_m33));\n    // dp4 r0.x, r0, c164\n    temp0.x = dot(temp0, (view_proj_matrix._m02_m12_m22_m32));\n    // add o1.x, r0.x, c169.x\n    o.texcoord1 = temp0.x + camera_near_range.x;\n    // mov o0.z, r0.x\n    o.position.z = temp0.x;\n    // mad r0.xyz, v1, c170.x, c170.y\n    temp0.xyz = i.normal.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 r1.x, r0, c0[a0.x]\n    temp1.x = dot(temp0.xyz, (bones[0 + (addr0.x / 3)]._m00_m10_m20_m30).xyz);\n    // dp3 r1.y, r0, c1[a0.x]\n    temp1.y = dot(temp0.xyz, (bones[0 + (addr0.x / 3)]._m01_m11_m21_m31).xyz);\n    // dp3 r1.z, r0, c2[a0.x]\n    temp1.z = dot(temp0.xyz, (bones[0 + (addr0.x / 3)]._m02_m12_m22_m32).xyz);\n    // mul r1.xyz, r1, v2.y\n    temp1.xyz = temp1.xyz * i.blendweight.yyy;\n    // dp3 r2.x, r0, c0[a0.y]\n    temp2.x = dot(temp0.xyz, (bones[0 + (addr0.y / 3)]._m00_m10_m20_m30).xyz);\n    // dp3 r2.y, r0, c1[a0.y]\n    temp2.y = dot(temp0.xyz, (bones[0 + (addr0.y / 3)]._m01_m11_m21_m31).xyz);\n    // dp3 r2.z, r0, c2[a0.y]\n    temp2.z = dot(temp0.xyz, (bones[0 + (addr0.y / 3)]._m02_m12_m22_m32).xyz);\n    // mad r1.xyz, v2.x, r2, r1\n    temp1.xyz = i.blendweight.xxx * temp2.xyz + temp1.xyz;\n    // dp3 r2.x, r0, c0[a0.z]\n    temp2.x = dot(temp0.xyz, (bones[0 + (addr0.z / 3)]._m00_m10_m20_m30).xyz);\n    // dp3 r2.y, r0, c1[a0.z]\n    temp2.y = dot(temp0.xyz, (bones[0 + (addr0.z / 3)]._m01_m11_m21_m31).xyz);\n    // dp3 r2.z, r0, c2[a0.z]\n    temp2.z = dot(temp0.xyz, (bones[0 + (addr0.z / 3)]._m02_m12_m22_m32).xyz);\n    // mad r0.xyz, v2.z, r2, r1\n    temp0.xyz = i.blendweight.zzz * temp2.xyz + temp1.xyz;\n    // nrm r1.xyz, r0\n    temp1.xyz = normalize(temp0.xyz).xyz;\n    // dp3 o2.x, r1, c166\n    o.texcoord2.x = dot(temp1.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 o2.y, r1, c167\n    o.texcoord2.y = dot(temp1.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o2.z, r1, c168\n    o.texcoord2.z = dot(temp1.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // mul o3, c170.xxxw, v4\n    o.color = float4(2, 2, 2, 1) * i.color;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."),(0,o.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"struct PixelMain_Input\n{\n    float texcoord1 : TEXCOORD1;\n    float3 texcoord2 : TEXCOORD2;\n    float3 color : COLOR;\n};\n\nstruct PixelMain_Output\n{\n    float4 color1 : COLOR1;\n    float4 color : COLOR;\n    float4 color2 : COLOR2;\n};\n\nPixelMain_Output PixelMain(PixelMain_Input i)\n{\n    PixelMain_Output o;\n    float3 temp0;\n    // def c0, 0.5, 1, 0, 0.4\n    // dcl_texcoord1 v0.x\n    // dcl_texcoord2_pp v1.xyz\n    // dcl_color v2.xyz\n    // nrm_pp r0.xyz, v1\n    temp0.xyz = /* not implemented _pp modifier */ normalize(i.texcoord2.xyz).xyz;\n    // mad_pp oC1.xyz, r0, c0.x, c0.x\n    o.color1.xyz = /* not implemented _pp modifier */ temp0.xyz * float3(0.5, 0.5, 0.5) + float3(0.5, 0.5, 0.5);\n    // mad oC0, v2.xyzx, c0.yyyz, c0.zzzw\n    o.color = i.color.xyzx * float4(1, 1, 1, 0) + float4(0, 0, 0, 0.4);\n    // mov_pp oC1.w, c0.y\n    o.color1.w = /* not implemented _pp modifier */ float1(1);\n    // mov oC2, v0.x\n    o.color2 = i.texcoord1.x;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."))}x.isMDXComponent=!0}}]);