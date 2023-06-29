"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[55504],{3905:(e,n,t)=>{t.d(n,{Zo:()=>_,kt:()=>y});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},m=Object.keys(e);for(r=0;r<m.length;r++)t=m[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(r=0;r<m.length;r++)t=m[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),x=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},_=function(e){var n=x(e.components);return r.createElement(a.Provider,{value:n},e.children)},l="mdxType",i={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,m=e.originalType,a=e.parentName,_=p(e,["components","mdxType","originalType","parentName"]),l=x(t),c=o,y=l["".concat(a,".").concat(c)]||l[c]||i[c]||m;return t?r.createElement(y,d(d({ref:n},_),{},{components:t})):r.createElement(y,d({ref:n},_))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var m=t.length,d=new Array(m);d[0]=c;var p={};for(var a in n)hasOwnProperty.call(n,a)&&(p[a]=n[a]);p.originalType=e,p[l]="string"==typeof e?e:o,d[1]=p;for(var x=2;x<m;x++)d[x]=t[x];return r.createElement.apply(null,d)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},35764:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>i,frontMatter:()=>m,metadata:()=>p,toc:()=>x});var r=t(87462),o=(t(67294),t(3905));const m={id:0x85a06fef2f1fd000,title:"Generic Default Blend Diffuse Blend Mask Seperate Blend Smooth Diffuse Texture Gloss Control Value Normalmap Rl Core Environment Skinned 3weights Vertex Color"},d="Generic Default Blend Diffuse Blend Mask Seperate Blend Smooth Diffuse Texture Gloss Control Value Normalmap Rl Core Environment Skinned 3weights Vertex Color",p={unversionedId:"Generated/Shaders/Base/[2500-2600]/9628819076396601000",id:"Generated/Shaders/Base/[2500-2600]/9628819076396601000",title:"Generic Default Blend Diffuse Blend Mask Seperate Blend Smooth Diffuse Texture Gloss Control Value Normalmap Rl Core Environment Skinned 3weights Vertex Color",description:"(genericBLENDDIFFUSEBLENDSMOOTHGLOSSCONTROLVALUERLCOREENVIRONMENTVERTEX_COLOR, 0x85a06fef2f1fcc68)",source:"@site/docs/Generated/Shaders/Base/[2500-2600]/0x85a06fef2f1fcc68.mdx",sourceDirName:"Generated/Shaders/Base/[2500-2600]",slug:"/Generated/Shaders/Base/[2500-2600]/9628819076396601000",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[2500-2600]/9628819076396601000",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/docs/Generated/Shaders/Base/[2500-2600]/0x85a06fef2f1fcc68.mdx",tags:[],version:"current",frontMatter:{id:"9628819076396601000",title:"Generic Default Blend Diffuse Blend Mask Seperate Blend Smooth Diffuse Texture Gloss Control Value Normalmap Rl Core Environment Skinned 3weights Vertex Color"},sidebar:"docsSidebar",previous:{title:"Generic Shadow Caster Alpha Masked Ati Cube Environment Mapping Diffuse Texture External Alpha Ref Normalmap Vertex Color",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[2500-2600]/9622952370000234000"},next:{title:"Generic Shadow Caster Alpha Masked Ati Cube Environment Mapping Diffuse Texture External Alpha Ref Gloss Blurs Cubemap Gloss Control Value Normalmap Self Illumination Vegetation Bending Vertex Alpha",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[2500-2600]/9629971078161700000"}},a={},x=[{value:"Technique <code>deferred_core_environment</code>",id:"technique-deferred_core_environment",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Sampler 1",id:"sampler-1",level:4},{value:"Sampler 2",id:"sampler-2",level:4},{value:"Sampler 3",id:"sampler-3",level:4},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],_={toc:x},l="wrapper";function i(e){let{components:n,...t}=e;return(0,o.kt)(l,(0,r.Z)({},_,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"generic-default-blend-diffuse-blend-mask-seperate-blend-smooth-diffuse-texture-gloss-control-value-normalmap-rl-core-environment-skinned-3weights-vertex-color"},"Generic Default Blend Diffuse Blend Mask Seperate Blend Smooth Diffuse Texture Gloss Control Value Normalmap Rl Core Environment Skinned 3weights Vertex Color"),(0,o.kt)("p",null,"(",(0,o.kt)("inlineCode",{parentName:"p"},"generic:default:BLEND_DIFFUSE:BLEND_MASK_SEPERATE:BLEND_SMOOTH:DIFFUSE_TEXTURE:GLOSS_CONTROL_VALUE:NORMALMAP:RL_CORE_ENVIRONMENT:SKINNED_3WEIGHTS:VERTEX_COLOR"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"0x85a06fef2f1fcc68"),")"),(0,o.kt)("h3",{id:"technique-deferred_core_environment"},"Technique ",(0,o.kt)("inlineCode",{parentName:"h3"},"deferred_core_environment")),(0,o.kt)("h3",{id:"render-states"},"Render States"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 1,\n    D3DRS_ALPHABLENDENABLE = 0,\n    D3DRS_CULLMODE = 2,\n    D3DRS_COLORWRITEENABLE = 15,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n};\n")),(0,o.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,o.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h4",{id:"sampler-1"},"Sampler 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h4",{id:"sampler-2"},"Sampler 2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h4",{id:"sampler-3"},"Sampler 3"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h3",{id:"shaders"},"Shaders"),(0,o.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"column_major float4x3 bones[54] : register(vs_3_0, c0);\nfloat camera_near_range : register(vs_3_0, c169);\ncolumn_major float4x4 view_proj_matrix : register(vs_3_0, c162);\ncolumn_major float4x4 world_matrix : register(vs_3_0, c166);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 normal : NORMAL;\n    float4 blendweight : BLENDWEIGHT;\n    float4 blendindices : BLENDINDICES;\n    float4 texcoord1 : TEXCOORD1;\n    float4 texcoord : TEXCOORD;\n    float4 tangent : TANGENT;\n    float4 binormal : BINORMAL;\n    float4 color : COLOR;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float texcoord1 : TEXCOORD1;\n    float4 texcoord : TEXCOORD;\n    float3 texcoord2 : TEXCOORD2;\n    float3 texcoord3 : TEXCOORD3;\n    float3 texcoord4 : TEXCOORD4;\n    float4 color : COLOR;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float4 temp0;\n    float3 addr0, temp1, temp2;\n    // def c170, 2, -1, 3, 1\n    // dcl_position v0\n    // dcl_normal v1\n    // dcl_blendweight v2\n    // dcl_blendindices v3\n    // dcl_texcoord1 v4\n    // dcl_texcoord v5\n    // dcl_tangent v6\n    // dcl_binormal v7\n    // dcl_color v8\n    // dcl_position o0\n    // dcl_texcoord1 o1.x\n    // dcl_texcoord o2\n    // dcl_texcoord2 o3.xyz\n    // dcl_texcoord3 o4.xyz\n    // dcl_texcoord4 o5.xyz\n    // dcl_color o6\n    // mul r0.xyz, c170.z, v3\n    temp0.xyz = float3(3, 3, 3) * i.blendindices.xyz;\n    // mova a0.xyz, r0.yxzw\n    addr0.xyz = temp0.yxz;\n    // dp4 r1.x, v0, c0[a0.x]\n    temp1.x = dot(i.position, (bones[0 + (addr0.x / 3)]._m00_m10_m20_m30));\n    // dp4 r1.y, v0, c1[a0.x]\n    temp1.y = dot(i.position, (bones[0 + (addr0.x / 3)]._m01_m11_m21_m31));\n    // dp4 r1.z, v0, c2[a0.x]\n    temp1.z = dot(i.position, (bones[0 + (addr0.x / 3)]._m02_m12_m22_m32));\n    // mul r1.xyz, r1, v2.y\n    temp1.xyz = temp1.xyz * i.blendweight.yyy;\n    // dp4 r0.x, v0, c0[a0.y]\n    temp0.x = dot(i.position, (bones[0 + (addr0.y / 3)]._m00_m10_m20_m30));\n    // dp4 r0.y, v0, c1[a0.y]\n    temp0.y = dot(i.position, (bones[0 + (addr0.y / 3)]._m01_m11_m21_m31));\n    // dp4 r0.z, v0, c2[a0.y]\n    temp0.z = dot(i.position, (bones[0 + (addr0.y / 3)]._m02_m12_m22_m32));\n    // mad r0.xyz, v2.x, r0, r1\n    temp0.xyz = i.blendweight.xxx * temp0.xyz + temp1.xyz;\n    // dp4 r1.x, v0, c0[a0.z]\n    temp1.x = dot(i.position, (bones[0 + (addr0.z / 3)]._m00_m10_m20_m30));\n    // dp4 r1.y, v0, c1[a0.z]\n    temp1.y = dot(i.position, (bones[0 + (addr0.z / 3)]._m01_m11_m21_m31));\n    // dp4 r1.z, v0, c2[a0.z]\n    temp1.z = dot(i.position, (bones[0 + (addr0.z / 3)]._m02_m12_m22_m32));\n    // mad r0.xyz, v2.z, r1, r0\n    temp0.xyz = i.blendweight.zzz * temp1.xyz + temp0.xyz;\n    // mov r0.w, c170.w\n    temp0.w = float1(1);\n    // dp4 o0.x, r0, c162\n    o.position.x = dot(temp0, (view_proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, r0, c163\n    o.position.y = dot(temp0, (view_proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.w, r0, c165\n    o.position.w = dot(temp0, (view_proj_matrix._m03_m13_m23_m33));\n    // dp4 r0.x, r0, c164\n    temp0.x = dot(temp0, (view_proj_matrix._m02_m12_m22_m32));\n    // add o1.x, r0.x, c169.x\n    o.texcoord1 = temp0.x + camera_near_range.x;\n    // mov o0.z, r0.x\n    o.position.z = temp0.x;\n    // mad r0.xyz, v6, c170.x, c170.y\n    temp0.xyz = i.tangent.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 r1.x, r0, c0[a0.x]\n    temp1.x = dot(temp0.xyz, (bones[0 + (addr0.x / 3)]._m00_m10_m20_m30).xyz);\n    // dp3 r1.y, r0, c1[a0.x]\n    temp1.y = dot(temp0.xyz, (bones[0 + (addr0.x / 3)]._m01_m11_m21_m31).xyz);\n    // dp3 r1.z, r0, c2[a0.x]\n    temp1.z = dot(temp0.xyz, (bones[0 + (addr0.x / 3)]._m02_m12_m22_m32).xyz);\n    // mul r1.xyz, r1, v2.y\n    temp1.xyz = temp1.xyz * i.blendweight.yyy;\n    // dp3 r2.x, r0, c0[a0.y]\n    temp2.x = dot(temp0.xyz, (bones[0 + (addr0.y / 3)]._m00_m10_m20_m30).xyz);\n    // dp3 r2.y, r0, c1[a0.y]\n    temp2.y = dot(temp0.xyz, (bones[0 + (addr0.y / 3)]._m01_m11_m21_m31).xyz);\n    // dp3 r2.z, r0, c2[a0.y]\n    temp2.z = dot(temp0.xyz, (bones[0 + (addr0.y / 3)]._m02_m12_m22_m32).xyz);\n    // mad r1.xyz, v2.x, r2, r1\n    temp1.xyz = i.blendweight.xxx * temp2.xyz + temp1.xyz;\n    // dp3 r2.x, r0, c0[a0.z]\n    temp2.x = dot(temp0.xyz, (bones[0 + (addr0.z / 3)]._m00_m10_m20_m30).xyz);\n    // dp3 r2.y, r0, c1[a0.z]\n    temp2.y = dot(temp0.xyz, (bones[0 + (addr0.z / 3)]._m01_m11_m21_m31).xyz);\n    // dp3 r2.z, r0, c2[a0.z]\n    temp2.z = dot(temp0.xyz, (bones[0 + (addr0.z / 3)]._m02_m12_m22_m32).xyz);\n    // mad r0.xyz, v2.z, r2, r1\n    temp0.xyz = i.blendweight.zzz * temp2.xyz + temp1.xyz;\n    // nrm r1.xyz, r0\n    temp1.xyz = normalize(temp0.xyz).xyz;\n    // dp3 o3.x, r1, c166\n    o.texcoord2.x = dot(temp1.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 o4.x, r1, c167\n    o.texcoord3.x = dot(temp1.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o5.x, r1, c168\n    o.texcoord4.x = dot(temp1.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // mad r0.xyz, v7, c170.x, c170.y\n    temp0.xyz = i.binormal.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 r1.x, r0, c0[a0.x]\n    temp1.x = dot(temp0.xyz, (bones[0 + (addr0.x / 3)]._m00_m10_m20_m30).xyz);\n    // dp3 r1.y, r0, c1[a0.x]\n    temp1.y = dot(temp0.xyz, (bones[0 + (addr0.x / 3)]._m01_m11_m21_m31).xyz);\n    // dp3 r1.z, r0, c2[a0.x]\n    temp1.z = dot(temp0.xyz, (bones[0 + (addr0.x / 3)]._m02_m12_m22_m32).xyz);\n    // mul r1.xyz, r1, v2.y\n    temp1.xyz = temp1.xyz * i.blendweight.yyy;\n    // dp3 r2.x, r0, c0[a0.y]\n    temp2.x = dot(temp0.xyz, (bones[0 + (addr0.y / 3)]._m00_m10_m20_m30).xyz);\n    // dp3 r2.y, r0, c1[a0.y]\n    temp2.y = dot(temp0.xyz, (bones[0 + (addr0.y / 3)]._m01_m11_m21_m31).xyz);\n    // dp3 r2.z, r0, c2[a0.y]\n    temp2.z = dot(temp0.xyz, (bones[0 + (addr0.y / 3)]._m02_m12_m22_m32).xyz);\n    // mad r1.xyz, v2.x, r2, r1\n    temp1.xyz = i.blendweight.xxx * temp2.xyz + temp1.xyz;\n    // dp3 r2.x, r0, c0[a0.z]\n    temp2.x = dot(temp0.xyz, (bones[0 + (addr0.z / 3)]._m00_m10_m20_m30).xyz);\n    // dp3 r2.y, r0, c1[a0.z]\n    temp2.y = dot(temp0.xyz, (bones[0 + (addr0.z / 3)]._m01_m11_m21_m31).xyz);\n    // dp3 r2.z, r0, c2[a0.z]\n    temp2.z = dot(temp0.xyz, (bones[0 + (addr0.z / 3)]._m02_m12_m22_m32).xyz);\n    // mad r0.xyz, v2.z, r2, r1\n    temp0.xyz = i.blendweight.zzz * temp2.xyz + temp1.xyz;\n    // nrm r1.xyz, r0\n    temp1.xyz = normalize(temp0.xyz).xyz;\n    // dp3 o3.y, -r1, c166\n    o.texcoord2.y = dot(-temp1.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 o4.y, -r1, c167\n    o.texcoord3.y = dot(-temp1.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o5.y, -r1, c168\n    o.texcoord4.y = dot(-temp1.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // mad r0.xyz, v1, c170.x, c170.y\n    temp0.xyz = i.normal.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 r1.x, r0, c0[a0.x]\n    temp1.x = dot(temp0.xyz, (bones[0 + (addr0.x / 3)]._m00_m10_m20_m30).xyz);\n    // dp3 r1.y, r0, c1[a0.x]\n    temp1.y = dot(temp0.xyz, (bones[0 + (addr0.x / 3)]._m01_m11_m21_m31).xyz);\n    // dp3 r1.z, r0, c2[a0.x]\n    temp1.z = dot(temp0.xyz, (bones[0 + (addr0.x / 3)]._m02_m12_m22_m32).xyz);\n    // mul r1.xyz, r1, v2.y\n    temp1.xyz = temp1.xyz * i.blendweight.yyy;\n    // dp3 r2.x, r0, c0[a0.y]\n    temp2.x = dot(temp0.xyz, (bones[0 + (addr0.y / 3)]._m00_m10_m20_m30).xyz);\n    // dp3 r2.y, r0, c1[a0.y]\n    temp2.y = dot(temp0.xyz, (bones[0 + (addr0.y / 3)]._m01_m11_m21_m31).xyz);\n    // dp3 r2.z, r0, c2[a0.y]\n    temp2.z = dot(temp0.xyz, (bones[0 + (addr0.y / 3)]._m02_m12_m22_m32).xyz);\n    // mad r1.xyz, v2.x, r2, r1\n    temp1.xyz = i.blendweight.xxx * temp2.xyz + temp1.xyz;\n    // dp3 r2.x, r0, c0[a0.z]\n    temp2.x = dot(temp0.xyz, (bones[0 + (addr0.z / 3)]._m00_m10_m20_m30).xyz);\n    // dp3 r2.y, r0, c1[a0.z]\n    temp2.y = dot(temp0.xyz, (bones[0 + (addr0.z / 3)]._m01_m11_m21_m31).xyz);\n    // dp3 r2.z, r0, c2[a0.z]\n    temp2.z = dot(temp0.xyz, (bones[0 + (addr0.z / 3)]._m02_m12_m22_m32).xyz);\n    // mad r0.xyz, v2.z, r2, r1\n    temp0.xyz = i.blendweight.zzz * temp2.xyz + temp1.xyz;\n    // nrm r1.xyz, r0\n    temp1.xyz = normalize(temp0.xyz).xyz;\n    // dp3 o3.z, r1, c166\n    o.texcoord2.z = dot(temp1.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 o4.z, r1, c167\n    o.texcoord3.z = dot(temp1.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o5.z, r1, c168\n    o.texcoord4.z = dot(temp1.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // mov o2.xy, v5\n    o.texcoord.xy = i.texcoord.xy;\n    // mov o2.zw, v4.xyxy\n    o.texcoord.zw = i.texcoord1.xy;\n    // mul o6, c170.xxxw, v8\n    o.color = float4(2, 2, 2, 1) * i.color;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."),(0,o.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"sampler2D bump_normal_texture : register(ps_3_0, s3);\nsampler2D diffuse_layer0_texture : register(ps_3_0, s1);\nsampler2D diffuse_layer1_texture : register(ps_3_0, s2);\nsampler2D diffuse_texture : register(ps_3_0, s0);\nfloat ref_glossiness_control : register(ps_3_0, c0);\nstruct PixelMain_Input\n{\n    float texcoord1 : TEXCOORD1;\n    float4 texcoord : TEXCOORD;\n    float3 texcoord2 : TEXCOORD2;\n    float3 texcoord3 : TEXCOORD3;\n    float3 texcoord4 : TEXCOORD4;\n    float4 color : COLOR;\n};\n\nstruct PixelMain_Output\n{\n    float4 color : COLOR;\n    float4 color1 : COLOR1;\n    float4 color2 : COLOR2;\n};\n\nPixelMain_Output PixelMain(PixelMain_Input i)\n{\n    PixelMain_Output o;\n    float4 temp0, temp1, temp2, temp3;\n    // def c1, 5, -0.5, 1, 0.5\n    // dcl_texcoord1 v0.x\n    // dcl_texcoord v1\n    // dcl_texcoord2 v2.xyz\n    // dcl_texcoord3 v3.xyz\n    // dcl_texcoord4 v4.xyz\n    // dcl_color_pp v5\n    // dcl_2d s0\n    // dcl_2d s1\n    // dcl_2d s2\n    // dcl_2d s3\n    // texld_pp r0, v1, s2\n    temp0 = /* not implemented _pp modifier */ tex2D(diffuse_layer1_texture, i.texcoord.xy);\n    // add_pp r0.x, r0.y, -v5.w\n    temp0.x = /* not implemented _pp modifier */ temp0.y + -i.color.w;\n    // mul_sat_pp r0.x, r0.x, c1.x\n    ;// error\n    // texld_pp r1, v1, s0\n    temp1 = /* not implemented _pp modifier */ tex2D(diffuse_texture, i.texcoord.xy);\n    // texld_pp r2, v1, s1\n    temp2 = /* not implemented _pp modifier */ tex2D(diffuse_layer0_texture, i.texcoord.xy);\n    // lrp_pp r3, r0.x, r1, r2\n    temp3 = /* not implemented _pp modifier */ lerp(temp2, temp1, temp0.x);\n    // mul_pp oC0.xyz, r3, v5\n    o.color.xyz = /* not implemented _pp modifier */ temp3.xyz * i.color.xyz;\n    // mov_pp oC1.w, r3.w\n    o.color1.w = /* not implemented _pp modifier */ temp3.w;\n    // texld_pp r0, v1.zwzw, s3\n    temp0 = /* not implemented _pp modifier */ tex2D(bump_normal_texture, i.texcoord.zw);\n    // add_pp r0.xy, r0.wyzw, c1.y\n    temp0.xy = /* not implemented _pp modifier */ temp0.wy + float2(-0.5, -0.5);\n    // add_pp r0.xy, r0, r0\n    temp0.xy = /* not implemented _pp modifier */ temp0.xy + temp0.xy;\n    // mul_pp r0.w, r0.x, r0.x\n    temp0.w = /* not implemented _pp modifier */ temp0.x * temp0.x;\n    // mad_pp r0.w, r0.y, r0.y, -r0.w\n    temp0.w = /* not implemented _pp modifier */ temp0.y * temp0.y + -temp0.w;\n    // add_pp r0.w, -r0.w, c1.z\n    temp0.w = /* not implemented _pp modifier */ -temp0.w + float1(1);\n    // rsq_pp r0.w, r0.w\n    temp0.w = /* not implemented _pp modifier */ 1 / sqrt(temp0.w);\n    // rcp_pp r0.z, r0.w\n    temp0.z = /* not implemented _pp modifier */ 1.0f / temp0.w;\n    // dp3 r1.x, r0, v2\n    temp1.x = dot(temp0.xyz, i.texcoord2.xyz);\n    // dp3 r1.y, r0, v3\n    temp1.y = dot(temp0.xyz, i.texcoord3.xyz);\n    // dp3 r1.z, r0, v4\n    temp1.z = dot(temp0.xyz, i.texcoord4.xyz);\n    // nrm_pp r0.xyz, r1\n    temp0.xyz = /* not implemented _pp modifier */ normalize(temp1.xyz).xyz;\n    // mad_pp oC1.xyz, r0, c1.w, c1.w\n    o.color1.xyz = /* not implemented _pp modifier */ temp0.xyz * float3(0.5, 0.5, 0.5) + float3(0.5, 0.5, 0.5);\n    // mov oC0.w, c0.x\n    o.color.w = ref_glossiness_control.x;\n    // mov oC2, v0.x\n    o.color2 = i.texcoord1.x;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."))}i.isMDXComponent=!0}}]);