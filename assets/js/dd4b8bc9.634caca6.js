"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[33271],{3905:(e,a,r)=>{r.d(a,{Zo:()=>_,kt:()=>x});var t=r(67294);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function o(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function m(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?o(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function l(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=t.createContext({}),p=function(e){var a=t.useContext(d),r=a;return e&&(r="function"==typeof e?e(a):m(m({},a),e)),r},_=function(e){var a=p(e.components);return t.createElement(d.Provider,{value:a},e.children)},c="mdxType",i={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},f=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,_=l(e,["components","mdxType","originalType","parentName"]),c=p(r),f=n,x=c["".concat(d,".").concat(f)]||c[f]||i[f]||o;return r?t.createElement(x,m(m({ref:a},_),{},{components:r})):t.createElement(x,m({ref:a},_))}));function x(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=r.length,m=new Array(o);m[0]=f;var l={};for(var d in a)hasOwnProperty.call(a,d)&&(l[d]=a[d]);l.originalType=e,l[c]="string"==typeof e?e:n,m[1]=l;for(var p=2;p<o;p++)m[p]=r[p];return t.createElement.apply(null,m)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},59410:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>d,contentTitle:()=>m,default:()=>i,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var t=r(87462),n=(r(67294),r(3905));const o={id:0x34539a410856e800,title:"Generic Default Alpha Masked Cube Environment Mapping Diffuse Texture Double Sided External Alpha Ref Gloss Blurs Cubemap Gsma Texture Normalmap Normalmap Depth Texture Normalmap Uv1 Parallax Parallax Animation Parallax Animation Vertex Alpha Mask Parallax Relief Simple Tint"},m="Generic Default Alpha Masked Cube Environment Mapping Diffuse Texture Double Sided External Alpha Ref Gloss Blurs Cubemap Gsma Texture Normalmap Normalmap Depth Texture Normalmap Uv1 Parallax Parallax Animation Parallax Animation Vertex Alpha Mask Parallax Relief Simple Tint",l={unversionedId:"Generated/Shaders/Base/[900-1000]/3770526917142702000",id:"Generated/Shaders/Base/[900-1000]/3770526917142702000",title:"Generic Default Alpha Masked Cube Environment Mapping Diffuse Texture Double Sided External Alpha Ref Gloss Blurs Cubemap Gsma Texture Normalmap Normalmap Depth Texture Normalmap Uv1 Parallax Parallax Animation Parallax Animation Vertex Alpha Mask Parallax Relief Simple Tint",description:"(genericALPHAMASKEDDIFFUSETEXTUREEXTERNALALPHAREFGSMATEXTURENORMALMAPDEPTHTEXTUREPARALLAXPARALLAXANIMATIONVERTEXALPHAMASKSIMPLETINT, 0x34539a410856e788)",source:"@site/docs/Generated/Shaders/Base/[900-1000]/0x34539a410856e788.mdx",sourceDirName:"Generated/Shaders/Base/[900-1000]",slug:"/Generated/Shaders/Base/[900-1000]/3770526917142702000",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[900-1000]/3770526917142702000",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/docs/Generated/Shaders/Base/[900-1000]/0x34539a410856e788.mdx",tags:[],version:"current",frontMatter:{id:"3770526917142702000",title:"Generic Default Alpha Masked Cube Environment Mapping Diffuse Texture Double Sided External Alpha Ref Gloss Blurs Cubemap Gsma Texture Normalmap Normalmap Depth Texture Normalmap Uv1 Parallax Parallax Animation Parallax Animation Vertex Alpha Mask Parallax Relief Simple Tint"},sidebar:"docsSidebar",previous:{title:"Generic Shadow Caster Blend Diffuse Blend Mask D A Blend Normal Blend Smooth Blend Tint Second Diffuse Texture Normalmap Nvidia Rl Environment",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[900-1000]/3770268852782946300"},next:{title:"Generic Shadow Caster Blend Diffuse Blend Fade Diffuse Texture Gsma Texture Normalmap Nvidia Vertex Color",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[900-1000]/3771194380999017000"}},d={},p=[{value:"Technique <code>deferred_ambient_alpha_masked</code>",id:"technique-deferred_ambient_alpha_masked",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Sampler 1",id:"sampler-1",level:4},{value:"Sampler 2",id:"sampler-2",level:4},{value:"Sampler 3",id:"sampler-3",level:4},{value:"Sampler 4",id:"sampler-4",level:4},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],_={toc:p},c="wrapper";function i(e){let{components:a,...r}=e;return(0,n.kt)(c,(0,t.Z)({},_,r,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"generic-default-alpha-masked-cube-environment-mapping-diffuse-texture-double-sided-external-alpha-ref-gloss-blurs-cubemap-gsma-texture-normalmap-normalmap-depth-texture-normalmap-uv1-parallax-parallax-animation-parallax-animation-vertex-alpha-mask-parallax-relief-simple-tint"},"Generic Default Alpha Masked Cube Environment Mapping Diffuse Texture Double Sided External Alpha Ref Gloss Blurs Cubemap Gsma Texture Normalmap Normalmap Depth Texture Normalmap Uv1 Parallax Parallax Animation Parallax Animation Vertex Alpha Mask Parallax Relief Simple Tint"),(0,n.kt)("p",null,"(",(0,n.kt)("inlineCode",{parentName:"p"},"generic:default:ALPHA_MASKED:CUBE_ENVIRONMENT_MAPPING:DIFFUSE_TEXTURE:DOUBLE_SIDED:EXTERNAL_ALPHA_REF:GLOSS_BLURS_CUBEMAP:GSMA_TEXTURE:NORMALMAP:NORMALMAP_DEPTH_TEXTURE:NORMALMAP_UV1:PARALLAX:PARALLAX_ANIMATION:PARALLAX_ANIMATION_VERTEX_ALPHA_MASK:PARALLAX_RELIEF:SIMPLE_TINT"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"0x34539a410856e788"),")"),(0,n.kt)("h3",{id:"technique-deferred_ambient_alpha_masked"},"Technique ",(0,n.kt)("inlineCode",{parentName:"h3"},"deferred_ambient_alpha_masked")),(0,n.kt)("h3",{id:"render-states"},"Render States"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 1,\n    D3DRS_ALPHABLENDENABLE = 0,\n    D3DRS_CULLMODE = 1,\n    D3DRS_COLORWRITEENABLE = 15,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n};\n")),(0,n.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,n.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,n.kt)("h4",{id:"sampler-1"},"Sampler 1"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,n.kt)("h4",{id:"sampler-2"},"Sampler 2"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,n.kt)("h4",{id:"sampler-3"},"Sampler 3"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 2,\n    D3DSAMP_MINFILTER = 2,\n    D3DSAMP_MIPFILTER = 2,\n};\n")),(0,n.kt)("h4",{id:"sampler-4"},"Sampler 4"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,n.kt)("h3",{id:"shaders"},"Shaders"),(0,n.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-hlsl"},"float camera_near_range : register(vs_3_0, c15);\ncolumn_major float4x4 camera_world_matrix : register(vs_3_0, c12);\ncolumn_major float4x4 proj_matrix : register(vs_3_0, c8);\nfloat3 ref_parallax_animation_uv_offset : register(vs_3_0, c18);\nfloat3 ref_parallax_animation_uv_scale : register(vs_3_0, c19);\nfloat ref_time : register(vs_3_0, c16);\nfloat3 ref_uv_speed : register(vs_3_0, c17);\ncolumn_major float4x4 view_matrix : register(vs_3_0, c4);\ncolumn_major float4x4 world_matrix : register(vs_3_0, c0);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 normal : NORMAL;\n    float4 texcoord1 : TEXCOORD1;\n    float4 texcoord : TEXCOORD;\n    float4 tangent : TANGENT;\n    float4 binormal : BINORMAL;\n    float4 color : COLOR;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float texcoord1 : TEXCOORD1;\n    float4 texcoord : TEXCOORD;\n    float3 texcoord2 : TEXCOORD2;\n    float3 texcoord3 : TEXCOORD3;\n    float3 texcoord4 : TEXCOORD4;\n    float3 texcoord8 : TEXCOORD8;\n    float texcoord10 : TEXCOORD10;\n    float2 texcoord11 : TEXCOORD11;\n    float4 color : COLOR;\n    float3 texcoord5 : TEXCOORD5;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float4 temp0, temp1, temp2;\n    float3 temp3, temp4;\n    // def c20, 2, -1, -1500, 0.002\n    // dcl_position v0\n    // dcl_normal v1\n    // dcl_texcoord1 v2\n    // dcl_texcoord v3\n    // dcl_tangent v4\n    // dcl_binormal v5\n    // dcl_color v6\n    // dcl_position o0\n    // dcl_texcoord1 o1.x\n    // dcl_texcoord o2\n    // dcl_texcoord2 o3.xyz\n    // dcl_texcoord3 o4.xyz\n    // dcl_texcoord4 o5.xyz\n    // dcl_texcoord8 o6.xyz\n    // dcl_texcoord10 o7.x\n    // dcl_texcoord11 o8.xy\n    // dcl_color o9\n    // dcl_texcoord5 o10.xyz\n    // mad r0.xyz, v4, c20.x, c20.y\n    temp0.xyz = i.tangent.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 r1.x, r0, c0\n    temp1.x = dot(temp0.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 r1.y, r0, c1\n    temp1.y = dot(temp0.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 r1.z, r0, c2\n    temp1.z = dot(temp0.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // nrm r0.xyz, r1\n    temp0.xyz = normalize(temp1.xyz).xyz;\n    // mov o3.x, r1.x\n    o.texcoord2.x = temp1.x;\n    // mov o4.x, r1.y\n    o.texcoord3.x = temp1.y;\n    // mov o5.x, r1.z\n    o.texcoord4.x = temp1.z;\n    // dp4 r1.x, v0, c0\n    temp1.x = dot(i.position, (world_matrix._m00_m10_m20_m30));\n    // add r2.x, -r1.x, c12.w\n    temp2.x = -temp1.x + (camera_world_matrix._m00_m10_m20_m30).w;\n    // dp4 r1.y, v0, c1\n    temp1.y = dot(i.position, (world_matrix._m01_m11_m21_m31));\n    // add r2.y, -r1.y, c13.w\n    temp2.y = -temp1.y + (camera_world_matrix._m01_m11_m21_m31).w;\n    // dp4 r1.z, v0, c2\n    temp1.z = dot(i.position, (world_matrix._m02_m12_m22_m32));\n    // add r2.z, -r1.z, c14.w\n    temp2.z = -temp1.z + (camera_world_matrix._m02_m12_m22_m32).w;\n    // dp3 o6.x, r2, r0\n    o.texcoord8.x = dot(temp2.xyz, temp0.xyz);\n    // mad r0.xyz, v5, c20.x, c20.y\n    temp0.xyz = i.binormal.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 r3.x, r0, c0\n    temp3.x = dot(temp0.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 r3.y, r0, c1\n    temp3.y = dot(temp0.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 r3.z, r0, c2\n    temp3.z = dot(temp0.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // nrm r4.xyz, r3\n    temp4.xyz = normalize(temp3.xyz).xyz;\n    // dp3 o6.y, r2, r4\n    o.texcoord8.y = dot(temp2.xyz, temp4.xyz);\n    // mad r3.xyz, v1, c20.x, c20.y\n    temp3.xyz = i.normal.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 r4.x, r3, c0\n    temp4.x = dot(temp3.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 r4.y, r3, c1\n    temp4.y = dot(temp3.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 r4.z, r3, c2\n    temp4.z = dot(temp3.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // nrm r3.xyz, r4\n    temp3.xyz = normalize(temp4.xyz).xyz;\n    // mov o3.z, r4.x\n    o.texcoord2.z = temp4.x;\n    // mov o4.z, r4.y\n    o.texcoord3.z = temp4.y;\n    // mov o5.z, r4.z\n    o.texcoord4.z = temp4.z;\n    // dp3 o6.z, r2, r3\n    o.texcoord8.z = dot(temp2.xyz, temp3.xyz);\n    // dp4 r1.w, v0, c3\n    temp1.w = dot(i.position, (world_matrix._m03_m13_m23_m33));\n    // dp4 r2.x, r1, c4\n    temp2.x = dot(temp1, (view_matrix._m00_m10_m20_m30));\n    // dp4 r2.y, r1, c5\n    temp2.y = dot(temp1, (view_matrix._m01_m11_m21_m31));\n    // dp4 r2.z, r1, c6\n    temp2.z = dot(temp1, (view_matrix._m02_m12_m22_m32));\n    // dp4 r2.w, r1, c7\n    temp2.w = dot(temp1, (view_matrix._m03_m13_m23_m33));\n    // mov o10.xyz, r1\n    o.texcoord5 = temp1;\n    // dp4 o0.x, r2, c8\n    o.position.x = dot(temp2, (proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, r2, c9\n    o.position.y = dot(temp2, (proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.w, r2, c11\n    o.position.w = dot(temp2, (proj_matrix._m03_m13_m23_m33));\n    // dp4 r0.w, r2, c10\n    temp0.w = dot(temp2, (proj_matrix._m02_m12_m22_m32));\n    // add r1.x, r0.w, c15.x\n    temp1.x = temp0.w + camera_near_range.x;\n    // mov o0.z, r0.w\n    o.position.z = temp0.w;\n    // add r0.w, r1.x, c20.z\n    temp0.w = temp1.x + float1(-1500);\n    // mov o1.x, r1.x\n    o.texcoord1 = temp1.x;\n    // mul o7.x, r0.w, c20.w\n    o.texcoord10 = temp0.w * float4(0.002, 0.002, 0.002, 0.002);\n    // dp3 o3.y, -r0, c0\n    o.texcoord2.y = dot(-temp0.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 o4.y, -r0, c1\n    o.texcoord3.y = dot(-temp0.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o5.y, -r0, c2\n    o.texcoord4.y = dot(-temp0.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // mov r0.x, c16.x\n    temp0.x = ref_time.x;\n    // mad r0.xy, r0.x, c17, v3\n    temp0.xy = temp0.xx * ref_uv_speed.xy + i.texcoord.xy;\n    // mov r1.xy, c19\n    temp1.xy = ref_parallax_animation_uv_scale.xy;\n    // mad o8.xy, r0, r1, c18\n    o.texcoord11 = temp0 * temp1 + ref_parallax_animation_uv_offset;\n    // mov o2.xy, v3\n    o.texcoord.xy = i.texcoord.xy;\n    // mov o2.zw, v2.xyxy\n    o.texcoord.zw = i.texcoord1.xy;\n    // mul o9, c20_abs.xxxy, v6\n    o.color = float4(2, 2, 2, 1) * i.color;\n    // \n\n    return o;\n}\n")),(0,n.kt)("p",null,"Decompiled by DXDecompiler."),(0,n.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-raw"},"0003fffffeffbe00435441421c000000c30200000003ffff0d0000001c00000000010000bc020000200100000200030001000000340100000000000044010000030002000100000058010000000000006801000002000000030000007c010000000000008c01000003000000010000009c01000000000000ac0100000300010001000000c001000000000000d00100000300030001000000ec01000000000000fc010000020004000100000034010000000000000a020000020009000100000034020000000000004402000002000800010000003401000000000000610200000200070001000000340100000000000075020000020006000100000034010000000000008802000002000500010000003402000000000000970200000300040001000000ac02000000000000474c4f42414c5f7573655f706172616c6c6178000000030001000100010000000000000062756d705f6e6f726d616c5f746578747572650004000c0001000100010000000000000063616d6572615f776f726c645f6d61747269780003000300040004000100000000000000646966667573655f746578747572650004000c000100010001000000000000006d6174657269616c5f7465787475726500ababab04000c00010001000100000000000000706172616c6c61785f616e696d6174696f6e5f7465787475726500ab04000c000100010001000000000000007265665f616c7068615f726566007265665f706172616c6c61785f616e696d6174696f6e5f6e6f726d616c5f73657474696e677300ababab010003000100030001000000000000007265665f706172616c6c61785f616e696d6174696f6e5f7363616c65007265665f706172616c6c61785f6c6179657273007265665f706172616c6c61785f7363616c65007265665f74696e745f636f6c6f72007265666c656374696f6e5f7465787475726500abab04000e0001000100010000000000000070735f335f30004d6963726f736f66742028522920484c534c2053686164657220436f6d70696c657220392e32392e3935322e3331313100510000050a000fa0000000000000003f000000bf0000803e510000050b000fa00000803f000080bf000000000000a040510000050c000fa0000000c0000040400000e040000000003000000500000ff0ff0000000000000000000000000000003000000501000ff0050000000000000000000000000000001f00000205000180000001901f00000205000080010003901f00000205000280020007901f00000205000380030007901f00000205000480040007901f00000205000880050007901f00000205000a80060001901f00000205000b80070003901f0000020a000080080008901f00000205000580090007901f0000020000008001100f901f0000020000009000080fa01f0000020000009001080fa01f0000020000009002080fa01f0000020000009003080fa01f0000020000009804080fa058000004000001800110e4900b0000a00b0055a00100000201000d800b00e4a029000402030000a10100aa8029000402060000900b0000a024000002020007800500e4904200000303000f800700e4900308e4a00200000300000280030000810b0000a00500000300000280000055800800ff9012000004000004800200aa8b0100ff80070000a0020000030000088001000080080000a006000002000004800000aa8005000003010001800000aa800000ff8005000003010002800000ff80060000a005000003010006800200d0800100558006000002010008800200aa8005000003010006800100ff800100e48005000003020003800000aa800100e9805b00000202000c80010044905c000002030003800100e4905d00000504000f800100e4900208e4a00200ee800300e480040000040100088000005580080000a00400aa8102000003010008800100ff800b0000a001000002030004800b00aaa001000002030008800100ff8001000002040003800100e490260000010000e4f02d0003020300aa800300ff8004000004030004800000ff800000aa800300aa8004000004040003800100e9800000aa810400e4805d00000505000f800400e4800208e4a00200ee800300e480040000040400048000005580080000a00500aa8102000003030008800400aa800b0000a0270000000500000300000c80020044800a0055a00500000301000280010000800a0055a00400000401000c80020044800a0055a0040044800400000401000180010000800a0055a10300aa8001000002020003800000ee8001000002040007800100ce80010000020300048001005580260000010100e4f005000003050003800200e4800a0055a005000003030008800300aa800a0055a05d00000506000f800400e4800208e4a00200ee800300e480040000040400088000005580080000a00600aa8102000003040008800400ff800b0000a002000003040008800400ff810400aa8004000004060006800200d0800a0055a10400d08004000004060001800300aa800a0055a00400aa8004000004070006800200d0800a0055a00400d08004000004070001800300aa800a0055a10400aa8058000004040007800400ff800700c9800600c98001000002020003800500e48001000002030004800300ff80270000002a00000001000002040003800b00aaa001000002000002800b00aaa02b0000000100000201000180060000900200000300000480010000800800ff9102000003000014800000aa800b0000a012000004010003800000aa800100e4900400e4802a00000001000002010003800100e49001000002000002800b00aaa02b0000004200000302002f800100e4800108e4a04200000303002f800100e4800008e4a002000003000004800300ff80040000a15800000404000f800000aa800b0000a00b0055a04100000104000f804200000301000f800100e4800208e4a00200000300000c80010044800a00aaa002000003040003800000ee800000ee8005000003000004800400008004000080040000040000048004005580040055800000aa8102000003000004800000aa810b0000a007000002000004800000aa8006000002040008800000aa800500000300000280000055800100aa800600000200000480090000a005000003000012800000aa80000055800400000400000480000055800c0000a00c0055a0050000030000028000005580000055800500000300000280000055800000aa8005000003000002800000558004005580040000040400048000005580090055a00400558024000002010007800400f88008000003040001800100e4800200e49008000003040002800100e4800300e49008000003040004800100e4800400e49024000002010027800400e4800500000300000e8003009080050090a00200000300002e800000e4800000e4805800000401002780000000810100e4800100e48102000003030001800000ffa00900009102000003030002800100ffa00900559102000003030004800200ffa00900aa9124000002040007800300e48008000003000001800100e4800400e4800200000301000880000000800000008004000004030007800100ff800100e4810400e4800100000200001180000000800200000300000180000000810b0000a05a0000040000018000000080000000800a00ffa0050000030000018002005580000000800200000301000880020000810b0000a005000003010008800100ff800c00aaa013000002020008800100ff8002000003030008800100ff800200ff815f00000303000f800300e4800408e4a00500000303000780000000800300e48004000004000827800300e4800200aa800000f98024000002000027800100e48004000004010827800000e4800a0055a00a0055a00100000200082880020000800100000201082880020055800100000202080f8000000090ffff0000\n")),(0,n.kt)("p",null,"This shader was not successfully decompiled. Above is the raw bytecode.\nDecompiled by DXDecompiler."))}i.isMDXComponent=!0}}]);