"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[26345],{3905:(e,t,n)=>{n.d(t,{Zo:()=>x,kt:()=>y});var m=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);t&&(m=m.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,m)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,m,r=function(e,t){if(null==e)return{};var n,m,r={},o=Object.keys(e);for(m=0;m<o.length;m++)n=o[m],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(m=0;m<o.length;m++)n=o[m],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var _=m.createContext({}),a=function(e){var t=m.useContext(_),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},x=function(e){var t=a(e.components);return m.createElement(_.Provider,{value:t},e.children)},i="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return m.createElement(m.Fragment,{},t)}},c=m.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,_=e.parentName,x=d(e,["components","mdxType","originalType","parentName"]),i=a(n),c=r,y=i["".concat(_,".").concat(c)]||i[c]||l[c]||o;return n?m.createElement(y,p(p({ref:t},x),{},{components:n})):m.createElement(y,p({ref:t},x))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=c;var d={};for(var _ in t)hasOwnProperty.call(t,_)&&(d[_]=t[_]);d.originalType=e,d[i]="string"==typeof e?e:r,p[1]=d;for(var a=2;a<o;a++)p[a]=n[a];return m.createElement.apply(null,p)}return m.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3515:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>_,contentTitle:()=>p,default:()=>l,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var m=n(87462),r=(n(67294),n(3905));const o={id:0x50008ad54b157c00,title:"Generic Default Cube Environment Mapping Diffuse Texture Gsma Texture Normalmap Self Illumination Self Illumination Bloom Skinned 3weights"},p="Generic Default Cube Environment Mapping Diffuse Texture Gsma Texture Normalmap Self Illumination Self Illumination Bloom Skinned 3weights",d={unversionedId:"Generated/Shaders/Base/[1500-1600]/5764760171726601000",id:"Generated/Shaders/Base/[1500-1600]/5764760171726601000",title:"Generic Default Cube Environment Mapping Diffuse Texture Gsma Texture Normalmap Self Illumination Self Illumination Bloom Skinned 3weights",description:"(genericCUBEENVIRONMENTMAPPINGGSMATEXTURESELFILLUMINATIONSKINNED3WEIGHTS, 0x50008ad54b157cb8)",source:"@site/docs/Generated/Shaders/Base/[1500-1600]/0x50008ad54b157cb8.mdx",sourceDirName:"Generated/Shaders/Base/[1500-1600]",slug:"/Generated/Shaders/Base/[1500-1600]/5764760171726601000",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[1500-1600]/5764760171726601000",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/docs/Generated/Shaders/Base/[1500-1600]/0x50008ad54b157cb8.mdx",tags:[],version:"current",frontMatter:{id:"5764760171726601000",title:"Generic Default Cube Environment Mapping Diffuse Texture Gsma Texture Normalmap Self Illumination Self Illumination Bloom Skinned 3weights"},sidebar:"docsSidebar",previous:{title:"Generic Default Alpha Masked Diffuse Texture Double Sided External Alpha Ref Normalmap Opacity Texture Vegetation Bending",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[1500-1600]/5758966931526793000"},next:{title:"Generic Default Diffuse Texture Instanced Simple Tint",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[1500-1600]/5766616051306606000"}},_={},a=[{value:"Technique <code>deferred_ambient</code>",id:"technique-deferred_ambient",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Sampler 1",id:"sampler-1",level:4},{value:"Sampler 2",id:"sampler-2",level:4},{value:"Sampler 3",id:"sampler-3",level:4},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4},{value:"Technique <code>self_illumination</code>",id:"technique-self_illumination",level:3},{value:"Render States",id:"render-states-1",level:3},{value:"Sampler States",id:"sampler-states-1",level:3},{value:"Sampler 0",id:"sampler-0-1",level:4},{value:"Shaders",id:"shaders-1",level:3},{value:"Vertex Shader",id:"vertex-shader-1",level:4},{value:"Pixel Shader",id:"pixel-shader-1",level:4}],x={toc:a},i="wrapper";function l(e){let{components:t,...n}=e;return(0,r.kt)(i,(0,m.Z)({},x,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"generic-default-cube-environment-mapping-diffuse-texture-gsma-texture-normalmap-self-illumination-self-illumination-bloom-skinned-3weights"},"Generic Default Cube Environment Mapping Diffuse Texture Gsma Texture Normalmap Self Illumination Self Illumination Bloom Skinned 3weights"),(0,r.kt)("p",null,"(",(0,r.kt)("inlineCode",{parentName:"p"},"generic:default:CUBE_ENVIRONMENT_MAPPING:DIFFUSE_TEXTURE:GSMA_TEXTURE:NORMALMAP:SELF_ILLUMINATION:SELF_ILLUMINATION_BLOOM:SKINNED_3WEIGHTS"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"0x50008ad54b157cb8"),")"),(0,r.kt)("h3",{id:"technique-deferred_ambient"},"Technique ",(0,r.kt)("inlineCode",{parentName:"h3"},"deferred_ambient")),(0,r.kt)("h3",{id:"render-states"},"Render States"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 1,\n    D3DRS_ALPHABLENDENABLE = 0,\n    D3DRS_CULLMODE = 2,\n    D3DRS_COLORWRITEENABLE = 15,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n};\n")),(0,r.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,r.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,r.kt)("h4",{id:"sampler-1"},"Sampler 1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,r.kt)("h4",{id:"sampler-2"},"Sampler 2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,r.kt)("h4",{id:"sampler-3"},"Sampler 3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,r.kt)("h3",{id:"shaders"},"Shaders"),(0,r.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hlsl"},"column_major float4x3 bones[54] : register(vs_3_0, c0);\nfloat camera_near_range : register(vs_3_0, c174);\ncolumn_major float4x4 proj_matrix : register(vs_3_0, c170);\ncolumn_major float4x4 view_matrix : register(vs_3_0, c166);\ncolumn_major float4x4 world_matrix : register(vs_3_0, c162);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 normal : NORMAL;\n    float4 blendweight : BLENDWEIGHT;\n    float4 blendindices : BLENDINDICES;\n    float4 texcoord1 : TEXCOORD1;\n    float4 texcoord : TEXCOORD;\n    float4 tangent : TANGENT;\n    float4 binormal : BINORMAL;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float texcoord1 : TEXCOORD1;\n    float4 texcoord : TEXCOORD;\n    float3 texcoord2 : TEXCOORD2;\n    float3 texcoord3 : TEXCOORD3;\n    float3 texcoord4 : TEXCOORD4;\n    float3 texcoord5 : TEXCOORD5;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float4 temp0, temp1;\n    float3 addr0, temp2;\n    // def c175, 2, -1, 3, 1\n    // dcl_position v0\n    // dcl_normal v1\n    // dcl_blendweight v2\n    // dcl_blendindices v3\n    // dcl_texcoord1 v4\n    // dcl_texcoord v5\n    // dcl_tangent v6\n    // dcl_binormal v7\n    // dcl_position o0\n    // dcl_texcoord1 o1.x\n    // dcl_texcoord o2\n    // dcl_texcoord2 o3.xyz\n    // dcl_texcoord3 o4.xyz\n    // dcl_texcoord4 o5.xyz\n    // dcl_texcoord5 o6.xyz\n    // mul r0.xyz, c175.z, v3\n    temp0.xyz = float3(3, 3, 3) * i.blendindices.xyz;\n    // mova a0.xyz, r0.yxzw\n    addr0.xyz = temp0.yxz;\n    // dp4 r1.x, v0, c0[a0.x]\n    temp1.x = dot(i.position, (bones[0 + (addr0.x / 3)]._m00_m10_m20_m30));\n    // dp4 r1.y, v0, c1[a0.x]\n    temp1.y = dot(i.position, (bones[0 + (addr0.x / 3)]._m01_m11_m21_m31));\n    // dp4 r1.z, v0, c2[a0.x]\n    temp1.z = dot(i.position, (bones[0 + (addr0.x / 3)]._m02_m12_m22_m32));\n    // mul r1.xyz, r1, v2.y\n    temp1.xyz = temp1.xyz * i.blendweight.yyy;\n    // dp4 r0.x, v0, c0[a0.y]\n    temp0.x = dot(i.position, (bones[0 + (addr0.y / 3)]._m00_m10_m20_m30));\n    // dp4 r0.y, v0, c1[a0.y]\n    temp0.y = dot(i.position, (bones[0 + (addr0.y / 3)]._m01_m11_m21_m31));\n    // dp4 r0.z, v0, c2[a0.y]\n    temp0.z = dot(i.position, (bones[0 + (addr0.y / 3)]._m02_m12_m22_m32));\n    // mad r0.xyz, v2.x, r0, r1\n    temp0.xyz = i.blendweight.xxx * temp0.xyz + temp1.xyz;\n    // dp4 r1.x, v0, c0[a0.z]\n    temp1.x = dot(i.position, (bones[0 + (addr0.z / 3)]._m00_m10_m20_m30));\n    // dp4 r1.y, v0, c1[a0.z]\n    temp1.y = dot(i.position, (bones[0 + (addr0.z / 3)]._m01_m11_m21_m31));\n    // dp4 r1.z, v0, c2[a0.z]\n    temp1.z = dot(i.position, (bones[0 + (addr0.z / 3)]._m02_m12_m22_m32));\n    // mad r0.xyz, v2.z, r1, r0\n    temp0.xyz = i.blendweight.zzz * temp1.xyz + temp0.xyz;\n    // mov r0.w, c175.w\n    temp0.w = float1(1);\n    // dp4 r1.w, r0, c165\n    temp1.w = dot(temp0, (world_matrix._m03_m13_m23_m33));\n    // dp4 r1.x, r0, c162\n    temp1.x = dot(temp0, (world_matrix._m00_m10_m20_m30));\n    // dp4 r1.y, r0, c163\n    temp1.y = dot(temp0, (world_matrix._m01_m11_m21_m31));\n    // dp4 r1.z, r0, c164\n    temp1.z = dot(temp0, (world_matrix._m02_m12_m22_m32));\n    // dp4 r0.x, r1, c166\n    temp0.x = dot(temp1, (view_matrix._m00_m10_m20_m30));\n    // dp4 r0.y, r1, c167\n    temp0.y = dot(temp1, (view_matrix._m01_m11_m21_m31));\n    // dp4 r0.z, r1, c168\n    temp0.z = dot(temp1, (view_matrix._m02_m12_m22_m32));\n    // dp4 r0.w, r1, c169\n    temp0.w = dot(temp1, (view_matrix._m03_m13_m23_m33));\n    // mov o6.xyz, r1\n    o.texcoord5 = temp1;\n    // dp4 o0.x, r0, c170\n    o.position.x = dot(temp0, (proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, r0, c171\n    o.position.y = dot(temp0, (proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.w, r0, c173\n    o.position.w = dot(temp0, (proj_matrix._m03_m13_m23_m33));\n    // dp4 r0.x, r0, c172\n    temp0.x = dot(temp0, (proj_matrix._m02_m12_m22_m32));\n    // add o1.x, r0.x, c174.x\n    o.texcoord1 = temp0.x + camera_near_range.x;\n    // mov o0.z, r0.x\n    o.position.z = temp0.x;\n    // mad r0.xyz, v6, c175.x, c175.y\n    temp0.xyz = i.tangent.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 r1.x, r0, c0[a0.x]\n    temp1.x = dot(temp0.xyz, (bones[0 + (addr0.x / 3)]._m00_m10_m20_m30).xyz);\n    // dp3 r1.y, r0, c1[a0.x]\n    temp1.y = dot(temp0.xyz, (bones[0 + (addr0.x / 3)]._m01_m11_m21_m31).xyz);\n    // dp3 r1.z, r0, c2[a0.x]\n    temp1.z = dot(temp0.xyz, (bones[0 + (addr0.x / 3)]._m02_m12_m22_m32).xyz);\n    // mul r1.xyz, r1, v2.y\n    temp1.xyz = temp1.xyz * i.blendweight.yyy;\n    // dp3 r2.x, r0, c0[a0.y]\n    temp2.x = dot(temp0.xyz, (bones[0 + (addr0.y / 3)]._m00_m10_m20_m30).xyz);\n    // dp3 r2.y, r0, c1[a0.y]\n    temp2.y = dot(temp0.xyz, (bones[0 + (addr0.y / 3)]._m01_m11_m21_m31).xyz);\n    // dp3 r2.z, r0, c2[a0.y]\n    temp2.z = dot(temp0.xyz, (bones[0 + (addr0.y / 3)]._m02_m12_m22_m32).xyz);\n    // mad r1.xyz, v2.x, r2, r1\n    temp1.xyz = i.blendweight.xxx * temp2.xyz + temp1.xyz;\n    // dp3 r2.x, r0, c0[a0.z]\n    temp2.x = dot(temp0.xyz, (bones[0 + (addr0.z / 3)]._m00_m10_m20_m30).xyz);\n    // dp3 r2.y, r0, c1[a0.z]\n    temp2.y = dot(temp0.xyz, (bones[0 + (addr0.z / 3)]._m01_m11_m21_m31).xyz);\n    // dp3 r2.z, r0, c2[a0.z]\n    temp2.z = dot(temp0.xyz, (bones[0 + (addr0.z / 3)]._m02_m12_m22_m32).xyz);\n    // mad r0.xyz, v2.z, r2, r1\n    temp0.xyz = i.blendweight.zzz * temp2.xyz + temp1.xyz;\n    // nrm r1.xyz, r0\n    temp1.xyz = normalize(temp0.xyz).xyz;\n    // dp3 o3.x, r1, c162\n    o.texcoord2.x = dot(temp1.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 o4.x, r1, c163\n    o.texcoord3.x = dot(temp1.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o5.x, r1, c164\n    o.texcoord4.x = dot(temp1.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // mad r0.xyz, v7, c175.x, c175.y\n    temp0.xyz = i.binormal.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 r1.x, r0, c0[a0.x]\n    temp1.x = dot(temp0.xyz, (bones[0 + (addr0.x / 3)]._m00_m10_m20_m30).xyz);\n    // dp3 r1.y, r0, c1[a0.x]\n    temp1.y = dot(temp0.xyz, (bones[0 + (addr0.x / 3)]._m01_m11_m21_m31).xyz);\n    // dp3 r1.z, r0, c2[a0.x]\n    temp1.z = dot(temp0.xyz, (bones[0 + (addr0.x / 3)]._m02_m12_m22_m32).xyz);\n    // mul r1.xyz, r1, v2.y\n    temp1.xyz = temp1.xyz * i.blendweight.yyy;\n    // dp3 r2.x, r0, c0[a0.y]\n    temp2.x = dot(temp0.xyz, (bones[0 + (addr0.y / 3)]._m00_m10_m20_m30).xyz);\n    // dp3 r2.y, r0, c1[a0.y]\n    temp2.y = dot(temp0.xyz, (bones[0 + (addr0.y / 3)]._m01_m11_m21_m31).xyz);\n    // dp3 r2.z, r0, c2[a0.y]\n    temp2.z = dot(temp0.xyz, (bones[0 + (addr0.y / 3)]._m02_m12_m22_m32).xyz);\n    // mad r1.xyz, v2.x, r2, r1\n    temp1.xyz = i.blendweight.xxx * temp2.xyz + temp1.xyz;\n    // dp3 r2.x, r0, c0[a0.z]\n    temp2.x = dot(temp0.xyz, (bones[0 + (addr0.z / 3)]._m00_m10_m20_m30).xyz);\n    // dp3 r2.y, r0, c1[a0.z]\n    temp2.y = dot(temp0.xyz, (bones[0 + (addr0.z / 3)]._m01_m11_m21_m31).xyz);\n    // dp3 r2.z, r0, c2[a0.z]\n    temp2.z = dot(temp0.xyz, (bones[0 + (addr0.z / 3)]._m02_m12_m22_m32).xyz);\n    // mad r0.xyz, v2.z, r2, r1\n    temp0.xyz = i.blendweight.zzz * temp2.xyz + temp1.xyz;\n    // nrm r1.xyz, r0\n    temp1.xyz = normalize(temp0.xyz).xyz;\n    // dp3 o3.y, -r1, c162\n    o.texcoord2.y = dot(-temp1.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 o4.y, -r1, c163\n    o.texcoord3.y = dot(-temp1.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o5.y, -r1, c164\n    o.texcoord4.y = dot(-temp1.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // mad r0.xyz, v1, c175.x, c175.y\n    temp0.xyz = i.normal.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 r1.x, r0, c0[a0.x]\n    temp1.x = dot(temp0.xyz, (bones[0 + (addr0.x / 3)]._m00_m10_m20_m30).xyz);\n    // dp3 r1.y, r0, c1[a0.x]\n    temp1.y = dot(temp0.xyz, (bones[0 + (addr0.x / 3)]._m01_m11_m21_m31).xyz);\n    // dp3 r1.z, r0, c2[a0.x]\n    temp1.z = dot(temp0.xyz, (bones[0 + (addr0.x / 3)]._m02_m12_m22_m32).xyz);\n    // mul r1.xyz, r1, v2.y\n    temp1.xyz = temp1.xyz * i.blendweight.yyy;\n    // dp3 r2.x, r0, c0[a0.y]\n    temp2.x = dot(temp0.xyz, (bones[0 + (addr0.y / 3)]._m00_m10_m20_m30).xyz);\n    // dp3 r2.y, r0, c1[a0.y]\n    temp2.y = dot(temp0.xyz, (bones[0 + (addr0.y / 3)]._m01_m11_m21_m31).xyz);\n    // dp3 r2.z, r0, c2[a0.y]\n    temp2.z = dot(temp0.xyz, (bones[0 + (addr0.y / 3)]._m02_m12_m22_m32).xyz);\n    // mad r1.xyz, v2.x, r2, r1\n    temp1.xyz = i.blendweight.xxx * temp2.xyz + temp1.xyz;\n    // dp3 r2.x, r0, c0[a0.z]\n    temp2.x = dot(temp0.xyz, (bones[0 + (addr0.z / 3)]._m00_m10_m20_m30).xyz);\n    // dp3 r2.y, r0, c1[a0.z]\n    temp2.y = dot(temp0.xyz, (bones[0 + (addr0.z / 3)]._m01_m11_m21_m31).xyz);\n    // dp3 r2.z, r0, c2[a0.z]\n    temp2.z = dot(temp0.xyz, (bones[0 + (addr0.z / 3)]._m02_m12_m22_m32).xyz);\n    // mad r0.xyz, v2.z, r2, r1\n    temp0.xyz = i.blendweight.zzz * temp2.xyz + temp1.xyz;\n    // nrm r1.xyz, r0\n    temp1.xyz = normalize(temp0.xyz).xyz;\n    // dp3 o3.z, r1, c162\n    o.texcoord2.z = dot(temp1.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 o4.z, r1, c163\n    o.texcoord3.z = dot(temp1.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o5.z, r1, c164\n    o.texcoord4.z = dot(temp1.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // mov o2.xy, v5\n    o.texcoord.xy = i.texcoord.xy;\n    // mov o2.zw, v4.xyxy\n    o.texcoord.zw = i.texcoord1.xy;\n    // \n\n    return o;\n}\n")),(0,r.kt)("p",null,"Decompiled by DXDecompiler."),(0,r.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hlsl"},"sampler2D bump_normal_texture : register(ps_3_0, s2);\ncolumn_major float4x4 camera_world_matrix : register(ps_3_0, c0);\nsampler2D diffuse_texture : register(ps_3_0, s0);\nsampler2D material_texture : register(ps_3_0, s1);\nsamplerCUBE reflection_texture : register(ps_3_0, s3);\nstruct PixelMain_Input\n{\n    float texcoord1 : TEXCOORD1;\n    float4 texcoord : TEXCOORD;\n    float3 texcoord2 : TEXCOORD2;\n    float3 texcoord3 : TEXCOORD3;\n    float3 texcoord4 : TEXCOORD4;\n    float3 texcoord5 : TEXCOORD5;\n};\n\nstruct PixelMain_Output\n{\n    float4 color1 : COLOR1;\n    float4 color : COLOR;\n    float4 color2 : COLOR2;\n};\n\nPixelMain_Output PixelMain(PixelMain_Input i)\n{\n    PixelMain_Output o;\n    float4 temp0, temp1, temp2, temp3;\n    // def c3, -0.5, 1, 0.25, 0.5\n    // dcl_texcoord1 v0.x\n    // dcl_texcoord v1\n    // dcl_texcoord2 v2.xyz\n    // dcl_texcoord3 v3.xyz\n    // dcl_texcoord4 v4.xyz\n    // dcl_texcoord5 v5.xyz\n    // dcl_2d s0\n    // dcl_2d s1\n    // dcl_2d s2\n    // dcl_cube s3\n    // texld_pp r0, v1.zwzw, s2\n    temp0 = /* not implemented _pp modifier */ tex2D(bump_normal_texture, i.texcoord.zw);\n    // add_pp r0.xy, r0.wyzw, c3.x\n    temp0.xy = /* not implemented _pp modifier */ temp0.wy + float2(-0.5, -0.5);\n    // add_pp r0.xy, r0, r0\n    temp0.xy = /* not implemented _pp modifier */ temp0.xy + temp0.xy;\n    // mul_pp r0.w, r0.x, r0.x\n    temp0.w = /* not implemented _pp modifier */ temp0.x * temp0.x;\n    // mad_pp r0.w, r0.y, r0.y, -r0.w\n    temp0.w = /* not implemented _pp modifier */ temp0.y * temp0.y + -temp0.w;\n    // add_pp r0.w, -r0.w, c3.y\n    temp0.w = /* not implemented _pp modifier */ -temp0.w + float1(1);\n    // rsq_pp r0.w, r0.w\n    temp0.w = /* not implemented _pp modifier */ 1 / sqrt(temp0.w);\n    // rcp_pp r0.z, r0.w\n    temp0.z = /* not implemented _pp modifier */ 1.0f / temp0.w;\n    // dp3 r1.x, r0, v2\n    temp1.x = dot(temp0.xyz, i.texcoord2.xyz);\n    // dp3 r1.y, r0, v3\n    temp1.y = dot(temp0.xyz, i.texcoord3.xyz);\n    // dp3 r1.z, r0, v4\n    temp1.z = dot(temp0.xyz, i.texcoord4.xyz);\n    // nrm_pp r0.xyz, r1\n    temp0.xyz = /* not implemented _pp modifier */ normalize(temp1.xyz).xyz;\n    // add r1.x, c0.w, -v5.x\n    temp1.x = (camera_world_matrix._m00_m10_m20_m30).w + -i.texcoord5.x;\n    // add r1.y, c1.w, -v5.y\n    temp1.y = (camera_world_matrix._m01_m11_m21_m31).w + -i.texcoord5.y;\n    // add r1.z, c2.w, -v5.z\n    temp1.z = (camera_world_matrix._m02_m12_m22_m32).w + -i.texcoord5.z;\n    // nrm r2.xyz, r1\n    temp2.xyz = normalize(temp1.xyz).xyz;\n    // dp3 r0.w, r0, r2\n    temp0.w = dot(temp0.xyz, temp2.xyz);\n    // add r1.x, r0.w, r0.w\n    temp1.x = temp0.w + temp0.w;\n    // mov_sat r0.w, r0.w\n    temp0.w = saturate(temp0.w);\n    // add r0.w, -r0.w, c3.y\n    temp0.w = -temp0.w + float1(1);\n    // dp2add r0.w, r0.w, r0.w, c3.z\n    temp0.w = dot(temp0.ww, temp0.ww) + float1(0.25);\n    // mad r1.xyz, r1.x, -r0, r2\n    temp1.xyz = temp1.xxx * -temp0.xyz + temp2.xyz;\n    // mad_pp oC1.xyz, r0, c3.w, c3.w\n    o.color1.xyz = /* not implemented _pp modifier */ temp0.xyz * float3(0.5, 0.5, 0.5) + float3(0.5, 0.5, 0.5);\n    // texld r1, r1, s3\n    temp1 = texCUBE(reflection_texture, temp1.xyz);\n    // texld_pp r2, v1, s1\n    temp2 = /* not implemented _pp modifier */ tex2D(material_texture, i.texcoord.xy);\n    // mul r0.x, r0.w, r2.y\n    temp0.x = temp0.w * temp2.y;\n    // texld_pp r3, v1, s0\n    temp3 = /* not implemented _pp modifier */ tex2D(diffuse_texture, i.texcoord.xy);\n    // mad_pp oC0.xyz, r1, r0.x, r3\n    o.color.xyz = /* not implemented _pp modifier */ temp1.xyz * temp0.xxx + temp3.xyz;\n    // mov_pp oC0.w, r2.x\n    o.color.w = /* not implemented _pp modifier */ temp2.x;\n    // mov_pp oC1.w, r2.y\n    o.color1.w = /* not implemented _pp modifier */ temp2.y;\n    // mov oC2, v0.x\n    o.color2 = i.texcoord1.x;\n    // \n\n    return o;\n}\n")),(0,r.kt)("p",null,"Decompiled by DXDecompiler."),(0,r.kt)("h3",{id:"technique-self_illumination"},"Technique ",(0,r.kt)("inlineCode",{parentName:"h3"},"self_illumination")),(0,r.kt)("h3",{id:"render-states-1"},"Render States"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 3,\n    D3DRS_ZWRITEENABLE = 1,\n    D3DRS_ALPHABLENDENABLE = 1,\n    D3DRS_CULLMODE = 2,\n    D3DRS_COLORWRITEENABLE = 15,\n    D3DRS_COLORWRITEENABLE1 = 7,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n    D3DRS_BLENDOP = 1,\n    D3DRS_SRCBLEND = 2,\n    D3DRS_DESTBLEND = 2,\n};\n")),(0,r.kt)("h3",{id:"sampler-states-1"},"Sampler States"),(0,r.kt)("h4",{id:"sampler-0-1"},"Sampler 0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,r.kt)("h3",{id:"shaders-1"},"Shaders"),(0,r.kt)("h4",{id:"vertex-shader-1"},"Vertex Shader"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hlsl"},"column_major float4x3 bones[54] : register(vs_3_0, c0);\ncolumn_major float4x4 camera_world_matrix : register(vs_3_0, c174);\ncolumn_major float4x4 proj_matrix : register(vs_3_0, c170);\nfloat3 render_target_texel_offset : register(vs_3_0, c179);\ncolumn_major float4x4 view_matrix : register(vs_3_0, c166);\nfloat3 vp_offset : register(vs_3_0, c177);\nfloat3 vp_size : register(vs_3_0, c178);\ncolumn_major float4x4 world_matrix : register(vs_3_0, c162);\nstruct VertexMain_Input\n{\n    float4 blendweight : BLENDWEIGHT;\n    float4 blendindices : BLENDINDICES;\n    float4 position : POSITION;\n    float4 texcoord : TEXCOORD;\n    float4 texcoord3 : TEXCOORD3;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float3 texcoord : TEXCOORD;\n    float2 texcoord6 : TEXCOORD6;\n    float4 texcoord1 : TEXCOORD1;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float4 temp0, temp1;\n    float2 addr0, temp3;\n    float3 temp2;\n    // def c180, 3, 1, 2, -1\n    // def c181, 0.5, 0, 0, 0\n    // dcl_blendweight v0\n    // dcl_blendindices v1\n    // dcl_position v2\n    // dcl_texcoord v3\n    // dcl_texcoord3 v4\n    // dcl_position o0\n    // dcl_texcoord o1.xyz\n    // dcl_texcoord6 o2.xy\n    // dcl_texcoord1 o3\n    // mul r0.xyz, c180.x, v1\n    temp0.xyz = float3(3, 3, 3) * i.blendindices.xyz;\n    // mova a0.x, r0.y\n    addr0.x = temp0.y;\n    // dp4 r1.x, v2, c0[a0.x]\n    temp1.x = dot(i.position, (bones[0 + (addr0.x / 3)]._m00_m10_m20_m30));\n    // dp4 r1.y, v2, c1[a0.x]\n    temp1.y = dot(i.position, (bones[0 + (addr0.x / 3)]._m01_m11_m21_m31));\n    // dp4 r1.z, v2, c2[a0.x]\n    temp1.z = dot(i.position, (bones[0 + (addr0.x / 3)]._m02_m12_m22_m32));\n    // mul r1.xyz, r1, v0.y\n    temp1.xyz = temp1.xyz * i.blendweight.yyy;\n    // mova a0.xy, r0.xzzw\n    addr0.xy = temp0.xz;\n    // dp4 r0.x, v2, c0[a0.x]\n    temp0.x = dot(i.position, (bones[0 + (addr0.x / 3)]._m00_m10_m20_m30));\n    // dp4 r0.y, v2, c1[a0.x]\n    temp0.y = dot(i.position, (bones[0 + (addr0.x / 3)]._m01_m11_m21_m31));\n    // dp4 r0.z, v2, c2[a0.x]\n    temp0.z = dot(i.position, (bones[0 + (addr0.x / 3)]._m02_m12_m22_m32));\n    // mad r0.xyz, v0.x, r0, r1\n    temp0.xyz = i.blendweight.xxx * temp0.xyz + temp1.xyz;\n    // dp4 r1.x, v2, c0[a0.y]\n    temp1.x = dot(i.position, (bones[0 + (addr0.y / 3)]._m00_m10_m20_m30));\n    // dp4 r1.y, v2, c1[a0.y]\n    temp1.y = dot(i.position, (bones[0 + (addr0.y / 3)]._m01_m11_m21_m31));\n    // dp4 r1.z, v2, c2[a0.y]\n    temp1.z = dot(i.position, (bones[0 + (addr0.y / 3)]._m02_m12_m22_m32));\n    // mad r0.xyz, v0.z, r1, r0\n    temp0.xyz = i.blendweight.zzz * temp1.xyz + temp0.xyz;\n    // mov r0.w, c180.y\n    temp0.w = float1(1);\n    // dp4 r1.x, r0, c162\n    temp1.x = dot(temp0, (world_matrix._m00_m10_m20_m30));\n    // dp4 r1.y, r0, c163\n    temp1.y = dot(temp0, (world_matrix._m01_m11_m21_m31));\n    // dp4 r1.w, r0, c165\n    temp1.w = dot(temp0, (world_matrix._m03_m13_m23_m33));\n    // dp4 r1.z, r0, c164\n    temp1.z = dot(temp0, (world_matrix._m02_m12_m22_m32));\n    // dp4 r0.x, r1, c166\n    temp0.x = dot(temp1, (view_matrix._m00_m10_m20_m30));\n    // dp4 r0.y, r1, c167\n    temp0.y = dot(temp1, (view_matrix._m01_m11_m21_m31));\n    // dp4 r0.z, r1, c168\n    temp0.z = dot(temp1, (view_matrix._m02_m12_m22_m32));\n    // dp4 r0.w, r1, c169\n    temp0.w = dot(temp1, (view_matrix._m03_m13_m23_m33));\n    // add o1.z, -r1.z, c176.w\n    o.texcoord.z = -temp1.z + (camera_world_matrix._m02_m12_m22_m32).w;\n    // dp4 r1.x, r0, c170\n    temp1.x = dot(temp0, (proj_matrix._m00_m10_m20_m30));\n    // dp4 r1.w, r0, c173\n    temp1.w = dot(temp0, (proj_matrix._m03_m13_m23_m33));\n    // mov r2.z, c180.z\n    temp2.z = float1(2);\n    // mov r2.xy, c178\n    temp2.xy = vp_size.xy;\n    // mad r2.xy, c177, r2.z, r2\n    temp2.xy = vp_offset.xy * temp2.zz + temp2.xy;\n    // add r2.xy, r2, c180.w\n    temp2.xy = temp2.xy + float2(-1, -1);\n    // mul r2.xy, r1.w, r2\n    temp2.xy = temp1.ww * temp2.xy;\n    // mad r2.x, r1.x, c178.x, r2.x\n    temp2.x = temp1.x * vp_size.x + temp2.x;\n    // add r2.z, r1.w, r1.w\n    temp2.z = temp1.w + temp1.w;\n    // mov r3.x, c181.x\n    temp3.x = float1(0.5);\n    // add r3.xy, r3.x, c179\n    temp3.xy = temp3.xx + render_target_texel_offset.xy;\n    // mad o3.x, r2.z, r3.x, r2.x\n    o.texcoord1.x = temp2.z * temp3.x + temp2.x;\n    // dp4 r1.y, r0, c171\n    temp1.y = dot(temp0, (proj_matrix._m01_m11_m21_m31));\n    // dp4 r1.z, r0, c172\n    temp1.z = dot(temp0, (proj_matrix._m02_m12_m22_m32));\n    // mad r0.x, r1.y, -c178.y, r2.y\n    temp0.x = temp1.y * -vp_size.y + temp2.y;\n    // mov o0, r1\n    o.position = temp1;\n    // mul o3.zw, r1, c180.xyyz\n    o.texcoord1.zw = temp1.zw * float2(1, 2);\n    // mad o3.y, r2.z, r3.y, r0.x\n    o.texcoord1.y = temp2.z * temp3.y + temp0.x;\n    // mov o1.xy, v3\n    o.texcoord.xy = i.texcoord.xy;\n    // mov o2.xy, v4\n    o.texcoord6 = i.texcoord3;\n    // \n\n    return o;\n}\n")),(0,r.kt)("p",null,"Decompiled by DXDecompiler."),(0,r.kt)("h4",{id:"pixel-shader-1"},"Pixel Shader"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hlsl"},"float ref_il_bloom : register(ps_3_0, c0);\nfloat ref_il_multiplier : register(ps_3_0, c1);\nsampler2D self_illumination_texture : register(ps_3_0, s0);\nstruct PixelMain_Output\n{\n    float4 color1 : COLOR1;\n    float4 color : COLOR;\n};\n\nPixelMain_Output PixelMain(float2 texcoord : TEXCOORD)\n{\n    PixelMain_Output o;\n    float4 temp0;\n    // def c2, 1, 0, 0, 0\n    // dcl_texcoord v0.xy\n    // dcl_2d s0\n    // texld_pp r0, v0, s0\n    temp0 = /* not implemented _pp modifier */ tex2D(self_illumination_texture, texcoord.xy);\n    // mul_pp r0.xyz, r0, c1.x\n    temp0.xyz = /* not implemented _pp modifier */ temp0.xyz * ref_il_multiplier.xxx;\n    // mov_pp r0.w, c2.x\n    temp0.w = /* not implemented _pp modifier */ float1(1);\n    // mul_pp oC1, r0, c0.x\n    o.color1 = /* not implemented _pp modifier */ temp0 * ref_il_bloom.x;\n    // mov_pp oC0, r0\n    o.color = /* not implemented _pp modifier */ temp0;\n    // \n\n    return o;\n}\n")),(0,r.kt)("p",null,"Decompiled by DXDecompiler."))}l.isMDXComponent=!0}}]);