"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[4512],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function m(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=a.createContext({}),p=function(e){var r=a.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):m(m({},r),e)),t},c=function(e){var r=p(e.components);return a.createElement(d.Provider,{value:r},e.children)},_="mdxType",i={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},x=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),_=p(t),x=n,f=_["".concat(d,".").concat(x)]||_[x]||i[x]||o;return t?a.createElement(f,m(m({ref:r},c),{},{components:t})):a.createElement(f,m({ref:r},c))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,m=new Array(o);m[0]=x;var l={};for(var d in r)hasOwnProperty.call(r,d)&&(l[d]=r[d]);l.originalType=e,l[_]="string"==typeof e?e:n,m[1]=l;for(var p=2;p<o;p++)m[p]=t[p];return a.createElement.apply(null,m)}return a.createElement.apply(null,t)}x.displayName="MDXCreateElement"},29796:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>m,default:()=>i,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(87462),n=(t(67294),t(3905));const o={id:0x8834518b6f7dd000,title:"Generic Default Cube Environment Mapping Diffuse Texture Gsma Texture Normalmap Normalmap Depth Texture Normalmap Uv1 Parallax Parallax Relief Vertex Color"},m="Generic Default Cube Environment Mapping Diffuse Texture Gsma Texture Normalmap Normalmap Depth Texture Normalmap Uv1 Parallax Parallax Relief Vertex Color",l={unversionedId:"Generated/Shaders/Base/[2500-2600]/9814559147259974000",id:"Generated/Shaders/Base/[2500-2600]/9814559147259974000",title:"Generic Default Cube Environment Mapping Diffuse Texture Gsma Texture Normalmap Normalmap Depth Texture Normalmap Uv1 Parallax Parallax Relief Vertex Color",description:"(genericCUBEENVIRONMENTMAPPINGGSMATEXTURENORMALMAPDEPTHTEXTUREPARALLAXVERTEX_COLOR, 0x8834518b6f7dd295)",source:"@site/docs/Generated/Shaders/Base/[2500-2600]/0x8834518b6f7dd295.mdx",sourceDirName:"Generated/Shaders/Base/[2500-2600]",slug:"/Generated/Shaders/Base/[2500-2600]/9814559147259974000",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[2500-2600]/9814559147259974000",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/docs/Generated/Shaders/Base/[2500-2600]/0x8834518b6f7dd295.mdx",tags:[],version:"current",frontMatter:{id:"9814559147259974000",title:"Generic Default Cube Environment Mapping Diffuse Texture Gsma Texture Normalmap Normalmap Depth Texture Normalmap Uv1 Parallax Parallax Relief Vertex Color"},sidebar:"docsSidebar",previous:{title:"Opacity Default Ati Cube Environment Mapping Cube Fresnel Diffuse Texture Diffuse Uvanim Normalmap Normal Uvanim Skinned 3weights Vegetation Bending",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[2500-2600]/9814370573471408000"},next:{title:"Generic Shadow Caster Alpha Masked Ati Contour Diffuse Texture Double Sided External Alpha Ref Normalmap Opacity Texture Rl Civilians Simple Tint Skinned 3weights",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[2500-2600]/9819943999117054000"}},d={},p=[{value:"Technique <code>deferred_ambient</code>",id:"technique-deferred_ambient",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Sampler 1",id:"sampler-1",level:4},{value:"Sampler 2",id:"sampler-2",level:4},{value:"Sampler 3",id:"sampler-3",level:4},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],c={toc:p},_="wrapper";function i(e){let{components:r,...t}=e;return(0,n.kt)(_,(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"generic-default-cube-environment-mapping-diffuse-texture-gsma-texture-normalmap-normalmap-depth-texture-normalmap-uv1-parallax-parallax-relief-vertex-color"},"Generic Default Cube Environment Mapping Diffuse Texture Gsma Texture Normalmap Normalmap Depth Texture Normalmap Uv1 Parallax Parallax Relief Vertex Color"),(0,n.kt)("p",null,"(",(0,n.kt)("inlineCode",{parentName:"p"},"generic:default:CUBE_ENVIRONMENT_MAPPING:DIFFUSE_TEXTURE:GSMA_TEXTURE:NORMALMAP:NORMALMAP_DEPTH_TEXTURE:NORMALMAP_UV1:PARALLAX:PARALLAX_RELIEF:VERTEX_COLOR"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"0x8834518b6f7dd295"),")"),(0,n.kt)("h3",{id:"technique-deferred_ambient"},"Technique ",(0,n.kt)("inlineCode",{parentName:"h3"},"deferred_ambient")),(0,n.kt)("h3",{id:"render-states"},"Render States"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 1,\n    D3DRS_ALPHABLENDENABLE = 0,\n    D3DRS_CULLMODE = 2,\n    D3DRS_COLORWRITEENABLE = 15,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n};\n")),(0,n.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,n.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,n.kt)("h4",{id:"sampler-1"},"Sampler 1"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,n.kt)("h4",{id:"sampler-2"},"Sampler 2"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,n.kt)("h4",{id:"sampler-3"},"Sampler 3"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,n.kt)("h3",{id:"shaders"},"Shaders"),(0,n.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-hlsl"},"float camera_near_range : register(vs_3_0, c15);\ncolumn_major float4x4 camera_world_matrix : register(vs_3_0, c12);\ncolumn_major float4x4 proj_matrix : register(vs_3_0, c8);\ncolumn_major float4x4 view_matrix : register(vs_3_0, c4);\ncolumn_major float4x4 world_matrix : register(vs_3_0, c0);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 normal : NORMAL;\n    float4 texcoord1 : TEXCOORD1;\n    float4 texcoord : TEXCOORD;\n    float4 tangent : TANGENT;\n    float4 binormal : BINORMAL;\n    float4 color : COLOR;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float texcoord1 : TEXCOORD1;\n    float4 texcoord : TEXCOORD;\n    float3 texcoord2 : TEXCOORD2;\n    float3 texcoord3 : TEXCOORD3;\n    float3 texcoord4 : TEXCOORD4;\n    float3 texcoord8 : TEXCOORD8;\n    float texcoord10 : TEXCOORD10;\n    float3 texcoord5 : TEXCOORD5;\n    float4 color : COLOR;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float4 temp0, temp1, temp2;\n    float3 temp3, temp4;\n    // def c16, 2, -1, -1500, 0.002\n    // dcl_position v0\n    // dcl_normal v1\n    // dcl_texcoord1 v2\n    // dcl_texcoord v3\n    // dcl_tangent v4\n    // dcl_binormal v5\n    // dcl_color v6\n    // dcl_position o0\n    // dcl_texcoord1 o1.x\n    // dcl_texcoord o2\n    // dcl_texcoord2 o3.xyz\n    // dcl_texcoord3 o4.xyz\n    // dcl_texcoord4 o5.xyz\n    // dcl_texcoord8 o6.xyz\n    // dcl_texcoord10 o7.x\n    // dcl_texcoord5 o8.xyz\n    // dcl_color o9\n    // mad r0.xyz, v4, c16.x, c16.y\n    temp0.xyz = i.tangent.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 r1.x, r0, c0\n    temp1.x = dot(temp0.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 r1.y, r0, c1\n    temp1.y = dot(temp0.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 r1.z, r0, c2\n    temp1.z = dot(temp0.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // nrm r0.xyz, r1\n    temp0.xyz = normalize(temp1.xyz).xyz;\n    // mov o3.x, r1.x\n    o.texcoord2.x = temp1.x;\n    // mov o4.x, r1.y\n    o.texcoord3.x = temp1.y;\n    // mov o5.x, r1.z\n    o.texcoord4.x = temp1.z;\n    // dp4 r1.x, v0, c0\n    temp1.x = dot(i.position, (world_matrix._m00_m10_m20_m30));\n    // add r2.x, -r1.x, c12.w\n    temp2.x = -temp1.x + (camera_world_matrix._m00_m10_m20_m30).w;\n    // dp4 r1.y, v0, c1\n    temp1.y = dot(i.position, (world_matrix._m01_m11_m21_m31));\n    // add r2.y, -r1.y, c13.w\n    temp2.y = -temp1.y + (camera_world_matrix._m01_m11_m21_m31).w;\n    // dp4 r1.z, v0, c2\n    temp1.z = dot(i.position, (world_matrix._m02_m12_m22_m32));\n    // add r2.z, -r1.z, c14.w\n    temp2.z = -temp1.z + (camera_world_matrix._m02_m12_m22_m32).w;\n    // dp3 o6.x, r2, r0\n    o.texcoord8.x = dot(temp2.xyz, temp0.xyz);\n    // mad r0.xyz, v5, c16.x, c16.y\n    temp0.xyz = i.binormal.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 r3.x, r0, c0\n    temp3.x = dot(temp0.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 r3.y, r0, c1\n    temp3.y = dot(temp0.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 r3.z, r0, c2\n    temp3.z = dot(temp0.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // nrm r4.xyz, r3\n    temp4.xyz = normalize(temp3.xyz).xyz;\n    // dp3 o6.y, r2, r4\n    o.texcoord8.y = dot(temp2.xyz, temp4.xyz);\n    // mad r3.xyz, v1, c16.x, c16.y\n    temp3.xyz = i.normal.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 r4.x, r3, c0\n    temp4.x = dot(temp3.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 r4.y, r3, c1\n    temp4.y = dot(temp3.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 r4.z, r3, c2\n    temp4.z = dot(temp3.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // nrm r3.xyz, r4\n    temp3.xyz = normalize(temp4.xyz).xyz;\n    // mov o3.z, r4.x\n    o.texcoord2.z = temp4.x;\n    // mov o4.z, r4.y\n    o.texcoord3.z = temp4.y;\n    // mov o5.z, r4.z\n    o.texcoord4.z = temp4.z;\n    // dp3 o6.z, r2, r3\n    o.texcoord8.z = dot(temp2.xyz, temp3.xyz);\n    // dp4 r1.w, v0, c3\n    temp1.w = dot(i.position, (world_matrix._m03_m13_m23_m33));\n    // dp4 r2.x, r1, c4\n    temp2.x = dot(temp1, (view_matrix._m00_m10_m20_m30));\n    // dp4 r2.y, r1, c5\n    temp2.y = dot(temp1, (view_matrix._m01_m11_m21_m31));\n    // dp4 r2.z, r1, c6\n    temp2.z = dot(temp1, (view_matrix._m02_m12_m22_m32));\n    // dp4 r2.w, r1, c7\n    temp2.w = dot(temp1, (view_matrix._m03_m13_m23_m33));\n    // mov o8.xyz, r1\n    o.texcoord5 = temp1;\n    // dp4 o0.x, r2, c8\n    o.position.x = dot(temp2, (proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, r2, c9\n    o.position.y = dot(temp2, (proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.w, r2, c11\n    o.position.w = dot(temp2, (proj_matrix._m03_m13_m23_m33));\n    // dp4 r0.w, r2, c10\n    temp0.w = dot(temp2, (proj_matrix._m02_m12_m22_m32));\n    // add r1.x, r0.w, c15.x\n    temp1.x = temp0.w + camera_near_range.x;\n    // mov o0.z, r0.w\n    o.position.z = temp0.w;\n    // add r0.w, r1.x, c16.z\n    temp0.w = temp1.x + float1(-1500);\n    // mov o1.x, r1.x\n    o.texcoord1 = temp1.x;\n    // mul o7.x, r0.w, c16.w\n    o.texcoord10 = temp0.w * float4(0.002, 0.002, 0.002, 0.002);\n    // dp3 o3.y, -r0, c0\n    o.texcoord2.y = dot(-temp0.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 o4.y, -r0, c1\n    o.texcoord3.y = dot(-temp0.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o5.y, -r0, c2\n    o.texcoord4.y = dot(-temp0.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // mov o2.xy, v3\n    o.texcoord.xy = i.texcoord.xy;\n    // mov o2.zw, v2.xyxy\n    o.texcoord.zw = i.texcoord1.xy;\n    // mul o9, c16_abs.xxxy, v6\n    o.color = float4(2, 2, 2, 1) * i.color;\n    // \n\n    return o;\n}\n")),(0,n.kt)("p",null,"Decompiled by DXDecompiler."),(0,n.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-raw"},"0003fffffeff7d00435441421c000000bf0100000003ffff080000001c00000000010000b8010000bc0000000200030001000000d000000000000000e00000000300020001000000f400000000000000040100000200000003000000180100000000000028010000030000000100000038010000000000004801000003000100010000005c010000000000006c0100000200050001000000d000000000000000800100000200040001000000d000000000000000930100000300030001000000a801000000000000474c4f42414c5f7573655f706172616c6c6178000000030001000100010000000000000062756d705f6e6f726d616c5f746578747572650004000c0001000100010000000000000063616d6572615f776f726c645f6d61747269780003000300040004000100000000000000646966667573655f746578747572650004000c000100010001000000000000006d6174657269616c5f7465787475726500ababab04000c000100010001000000000000007265665f706172616c6c61785f6c6179657273007265665f706172616c6c61785f7363616c65007265666c656374696f6e5f7465787475726500abab04000e0001000100010000000000000070735f335f30004d6963726f736f66742028522920484c534c2053686164657220436f6d70696c657220392e32392e3935322e33313131005100000506000fa0000000000000803f0000a040000000005100000507000fa00000003f000000bf0000803e000000003000000500000ff0ff0000000000000000000000000000003000000501000ff0050000000000000000000000000000001f00000205000180000001901f00000205000080010003901f00000205000280020007901f00000205000380030007901f00000205000480040007901f00000205000880050007901f00000205000a80060001901f00000205000580070007901f0000020a000080080007901f0000020000009000080fa01f0000020000009001080fa01f0000020000009002080fa01f0000020000009803080fa001000002000005800600e4a029000402030000a1000000802900040206000090060055a024000002010007800500e49012000004020001800100aa8b0000aa80050000a006000002000001800200008005000003000006800100d080040000a006000002000008800100aa8005000003000006800000ff800000e4800500000301000380000000800000e9805b00000201000c80010044905c000002020003800100e4905d00000503000f800100e4900208e4a00100ee800200e48002000003000008800300aa81060055a00100000202000480060000a001000002020008800000ff8001000002030003800100e490260000010000e4f02d0003020200aa800200ff800200000302000480000000800200aa8004000004030003800000e980000000810300e4805d00000504000f800300e4800208e4a00100ee800200e48002000003020008800400aa81060055a02700000005000003000006800100d080070000a0050000030000088000000080070000a004000004010003800100e480070000a00300e480040000040000018000000080070000a10200aa8001000002030003800100e4800100000202000c80000094800100000203000c800000c480260000010100e4f005000003040003800200ee80070000a005000003040004800300ff80070000a05d00000505000f800300e4800208e4a00100ee800200e48002000003040008800500aa81060055a002000003040008800300aa800400ff8104000004050006800200f880070000a10300d08004000004050001800300ff80070000a00300aa8004000004060006800200f880070000a00300d08004000004060001800300ff80070000a10300aa8058000004030007800400ff800600c9800500c9800100000202000c800400448001000002030008800400aa80270000002a0000000100000203000380060000a02b0000000100000200001180060000901200000401000380000000800100e4900300e4802a00000001000002010003800100e4902b0000004200000300002f800100e4800108e4a04200000302002f800100e4800008e4a04200000301000f800100e4800208e4a00200000300000c8001004480070055a002000003010003800000ee800000ee8005000003000004800100008001000080040000040000048001005580010055800000aa8102000003000004800000aa81060055a007000002000004800000aa8006000002010004800000aa8008000003030001800100e4800200e49008000003030002800100e4800300e49008000003030004800100e4800400e49024000002010027800300e48002000003030001800000ffa00700009102000003030002800100ffa00700559102000003030004800200ffa00700aa9124000002040007800300e48008000003000004800100e4800400e48002000003000008800000aa800000aa8004000004030007800000ff800100e4810400e48001000002000014800000aa8002000003000004800000aa81060055a05a000004000004800000aa800000aa800700aaa00500000300000480000055800000aa804200000303000f800300e4800308e4a005000003030007800000aa800300e48004000004000827800200e4800800e4900300e48004000004010827800100e480070000a0070000a00100000200082880000000800100000201082880000055800100000202080f8000000090ffff0000\n")),(0,n.kt)("p",null,"This shader was not successfully decompiled. Above is the raw bytecode.\nDecompiled by DXDecompiler."))}i.isMDXComponent=!0}}]);