"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[96035],{3905:(e,t,r)=>{r.d(t,{Zo:()=>x,kt:()=>s});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},m=Object.keys(e);for(n=0;n<m.length;n++)r=m[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)r=m[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),l=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},x=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},c="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},_=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,m=e.originalType,d=e.parentName,x=p(e,["components","mdxType","originalType","parentName"]),c=l(r),_=o,s=c["".concat(d,".").concat(_)]||c[_]||i[_]||m;return r?n.createElement(s,a(a({ref:t},x),{},{components:r})):n.createElement(s,a({ref:t},x))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var m=r.length,a=new Array(m);a[0]=_;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p[c]="string"==typeof e?e:o,a[1]=p;for(var l=2;l<m;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}_.displayName="MDXCreateElement"},31635:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>i,frontMatter:()=>m,metadata:()=>p,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const m={id:0xdca46386e4f13000,title:"Generic Default Cube Environment Mapping Diffuse Texture Distance Fade 2 Gloss Blurs Cubemap Gsma Texture Normalmap"},a="Generic Default Cube Environment Mapping Diffuse Texture Distance Fade 2 Gloss Blurs Cubemap Gsma Texture Normalmap",p={unversionedId:"Generated/Shaders/Base/[4100-4200]/15898942015542473000",id:"Generated/Shaders/Base/[4100-4200]/15898942015542473000",title:"Generic Default Cube Environment Mapping Diffuse Texture Distance Fade 2 Gloss Blurs Cubemap Gsma Texture Normalmap",description:"(genericCUBEENVIRONMENTMAPPINGDISTANCEFADE2GSMATEXTURE:NORMALMAP, 0xdca46386e4f1339d)",source:"@site/docs/Generated/Shaders/Base/[4100-4200]/0xdca46386e4f1339d.mdx",sourceDirName:"Generated/Shaders/Base/[4100-4200]",slug:"/Generated/Shaders/Base/[4100-4200]/15898942015542473000",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[4100-4200]/15898942015542473000",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/docs/Generated/Shaders/Base/[4100-4200]/0xdca46386e4f1339d.mdx",tags:[],version:"current",frontMatter:{id:"15898942015542473000",title:"Generic Default Cube Environment Mapping Diffuse Texture Distance Fade 2 Gloss Blurs Cubemap Gsma Texture Normalmap"},sidebar:"docsSidebar",previous:{title:"Generic Shadow Caster Align Normal World Z Alpha Masked Diffuse Texture Double Sided External Alpha Ref Instanced Nvidia Opacity Texture",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[4100-4200]/15881631025064743000"},next:{title:"Landscape Shadow Caster Ati Blend Masks Cubemap Mat0 Mat0 Blend World Mask Mat0 Nm Mat0 Uv2 Mat1 Mat1 Blend World Mask Mat1 Nm Mat1 Uv2 Mat2 Mat2 Blend World Mask Mat2 Nm Mat2 Uv2 Mat3 Mat3 Blend World Mask Mat3 Nm Mat3 Uv2 Overlay Over Detail World Mask A Wetness World Nm World Overlay Mask Texture World Overlay Texture World Tex Uv1",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[4100-4200]/15900192439459265000"}},d={},l=[{value:"Technique <code>deferred_ambient</code>",id:"technique-deferred_ambient",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Sampler 1",id:"sampler-1",level:4},{value:"Sampler 2",id:"sampler-2",level:4},{value:"Sampler 3",id:"sampler-3",level:4},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],x={toc:l},c="wrapper";function i(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},x,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"generic-default-cube-environment-mapping-diffuse-texture-distance-fade-2-gloss-blurs-cubemap-gsma-texture-normalmap"},"Generic Default Cube Environment Mapping Diffuse Texture Distance Fade 2 Gloss Blurs Cubemap Gsma Texture Normalmap"),(0,o.kt)("p",null,"(",(0,o.kt)("inlineCode",{parentName:"p"},"generic:default:CUBE_ENVIRONMENT_MAPPING:DIFFUSE_TEXTURE:DISTANCE_FADE_2:GLOSS_BLURS_CUBEMAP:GSMA_TEXTURE:NORMALMAP"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"0xdca46386e4f1339d"),")"),(0,o.kt)("h3",{id:"technique-deferred_ambient"},"Technique ",(0,o.kt)("inlineCode",{parentName:"h3"},"deferred_ambient")),(0,o.kt)("h3",{id:"render-states"},"Render States"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 1,\n    D3DRS_ALPHABLENDENABLE = 0,\n    D3DRS_CULLMODE = 2,\n    D3DRS_COLORWRITEENABLE = 15,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n};\n")),(0,o.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,o.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h4",{id:"sampler-1"},"Sampler 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h4",{id:"sampler-2"},"Sampler 2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h4",{id:"sampler-3"},"Sampler 3"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h3",{id:"shaders"},"Shaders"),(0,o.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"float GLOBAL_fov_ratio : register(vs_3_0, c13);\nfloat camera_near_range : register(vs_3_0, c12);\ncolumn_major float4x4 proj_matrix : register(vs_3_0, c8);\ncolumn_major float4x4 view_matrix : register(vs_3_0, c4);\ncolumn_major float4x4 world_matrix : register(vs_3_0, c0);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 normal : NORMAL;\n    float4 texcoord1 : TEXCOORD1;\n    float4 texcoord : TEXCOORD;\n    float4 tangent : TANGENT;\n    float4 binormal : BINORMAL;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float2 texcoord1 : TEXCOORD1;\n    float4 texcoord : TEXCOORD;\n    float3 texcoord2 : TEXCOORD2;\n    float3 texcoord3 : TEXCOORD3;\n    float3 texcoord4 : TEXCOORD4;\n    float3 texcoord5 : TEXCOORD5;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float4 temp0, temp1;\n    // def c14, 2, -1, -1625, 0.0011428571\n    // dcl_position v0\n    // dcl_normal v1\n    // dcl_texcoord1 v2\n    // dcl_texcoord v3\n    // dcl_tangent v4\n    // dcl_binormal v5\n    // dcl_position o0\n    // dcl_texcoord1 o1.xy\n    // dcl_texcoord o2\n    // dcl_texcoord2 o3.xyz\n    // dcl_texcoord3 o4.xyz\n    // dcl_texcoord4 o5.xyz\n    // dcl_texcoord5 o6.xyz\n    // dp4 r0.w, v0, c3\n    temp0.w = dot(i.position, (world_matrix._m03_m13_m23_m33));\n    // dp4 r0.x, v0, c0\n    temp0.x = dot(i.position, (world_matrix._m00_m10_m20_m30));\n    // dp4 r0.y, v0, c1\n    temp0.y = dot(i.position, (world_matrix._m01_m11_m21_m31));\n    // dp4 r0.z, v0, c2\n    temp0.z = dot(i.position, (world_matrix._m02_m12_m22_m32));\n    // dp4 r1.x, r0, c4\n    temp1.x = dot(temp0, (view_matrix._m00_m10_m20_m30));\n    // dp4 r1.y, r0, c5\n    temp1.y = dot(temp0, (view_matrix._m01_m11_m21_m31));\n    // dp4 r1.z, r0, c6\n    temp1.z = dot(temp0, (view_matrix._m02_m12_m22_m32));\n    // dp4 r1.w, r0, c7\n    temp1.w = dot(temp0, (view_matrix._m03_m13_m23_m33));\n    // mov o6.xyz, r0\n    o.texcoord5 = temp0;\n    // dp4 o0.x, r1, c8\n    o.position.x = dot(temp1, (proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, r1, c9\n    o.position.y = dot(temp1, (proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.w, r1, c11\n    o.position.w = dot(temp1, (proj_matrix._m03_m13_m23_m33));\n    // dp4 r0.x, r1, c10\n    temp0.x = dot(temp1, (proj_matrix._m02_m12_m22_m32));\n    // add r0.y, r0.x, c12.x\n    temp0.y = temp0.x + camera_near_range.x;\n    // mov o0.z, r0.x\n    o.position.z = temp0.x;\n    // rsq r0.x, c13.x\n    temp0.x = 1 / sqrt(GLOBAL_fov_ratio.x);\n    // mad r0.x, r0.y, r0.x, c14.z\n    temp0.x = temp0.y * temp0.x + float1(-1625);\n    // mov o1.x, r0.y\n    o.texcoord1.x = temp0.y;\n    // mul_sat r0.x, r0.x, c14.w\n    temp0.x = saturate(temp0.x * float1(0.0011428571));\n    // add o1.y, -r0.x, -c14.y\n    o.texcoord1.y = -temp0.x + float1(1);\n    // mad r0.xyz, v4, c14.x, c14.y\n    temp0.xyz = i.tangent.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 o3.x, r0, c0\n    o.texcoord2.x = dot(temp0.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 o4.x, r0, c1\n    o.texcoord3.x = dot(temp0.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o5.x, r0, c2\n    o.texcoord4.x = dot(temp0.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // mad r0.xyz, v5, c14.x, c14.y\n    temp0.xyz = i.binormal.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 o3.y, -r0, c0\n    o.texcoord2.y = dot(-temp0.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 o4.y, -r0, c1\n    o.texcoord3.y = dot(-temp0.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o5.y, -r0, c2\n    o.texcoord4.y = dot(-temp0.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // mad r0.xyz, v1, c14.x, c14.y\n    temp0.xyz = i.normal.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 o3.z, r0, c0\n    o.texcoord2.z = dot(temp0.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 o4.z, r0, c1\n    o.texcoord3.z = dot(temp0.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o5.z, r0, c2\n    o.texcoord4.z = dot(temp0.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // mov o2.xy, v3\n    o.texcoord.xy = i.texcoord.xy;\n    // mov o2.zw, v2.xyxy\n    o.texcoord.zw = i.texcoord1.xy;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."),(0,o.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"sampler2D bump_normal_texture : register(ps_3_0, s2);\ncolumn_major float4x4 camera_world_matrix : register(ps_3_0, c0);\nsampler2D diffuse_texture : register(ps_3_0, s0);\nsampler2D material_texture : register(ps_3_0, s1);\nsamplerCUBE reflection_texture : register(ps_3_0, s3);\nstruct PixelMain_Input\n{\n    float2 texcoord1 : TEXCOORD1;\n    float4 texcoord : TEXCOORD;\n    float3 texcoord2 : TEXCOORD2;\n    float3 texcoord3 : TEXCOORD3;\n    float3 texcoord4 : TEXCOORD4;\n    float3 texcoord5 : TEXCOORD5;\n    float2 vface : vFace;\n};\n\nstruct PixelMain_Output\n{\n    float4 color1 : COLOR1;\n    float4 color : COLOR;\n    float4 color2 : COLOR2;\n};\n\nPixelMain_Output PixelMain(PixelMain_Input i)\n{\n    PixelMain_Output o;\n    float4 temp0, temp1, temp2;\n    // def c3, 4, 0.25, -4, -0.25\n    // def c4, -0, -1, -2, -3\n    // def c5, 1, -1, -0.5, 7\n    // def c6, 0.05882353, 0.7647059, 0.23529412, 0.9411765\n    // def c7, 0.5294118, 0.29411766, 0.7058824, 0.47058824\n    // def c8, 0.1764706, 0.88235295, 0.11764706, 0.8235294\n    // def c9, 0.64705884, 0.4117647, 0.5882353, 0.3529412\n    // dcl_texcoord1 v0.xy\n    // dcl_texcoord v1\n    // dcl_texcoord2 v2.xyz\n    // dcl_texcoord3 v3.xyz\n    // dcl_texcoord4 v4.xyz\n    // dcl_texcoord5 v5.xyz\n    // dcl vFace.xy\n    // dcl_2d s0\n    // dcl_2d s1\n    // dcl_2d s2\n    // dcl_cube s3\n    // cmp r0, vFace.yyxx, c3.xyxy, c3.zwzw\n    temp0 = (vFace.yyxx >= 0) ? float4(4, 0.25, 4, 0.25) : float4(-4, -0.25, -4, -0.25);\n    // mul r0.yw, r0.xwzy, vFace.xxzy\n    temp0.yw = temp0.wy * vFace.xy;\n    // frc r0.yw, r0\n    temp0.yw = frac(temp0.yw);\n    // mul r0.xy, r0.ywzw, r0.zxzw\n    temp0.xy = temp0.yw * temp0.zx;\n    // frc r0.zw, r0.xyxy\n    temp0.zw = frac(temp0.xy);\n    // add r0.xy, r0, -r0.zwzw\n    temp0.xy = temp0.xy + -temp0.zw;\n    // add r1, r0.y, c4\n    temp1 = temp0.y + float4(-0, -1, -2, -3);\n    // add r0, r0.x, c4\n    temp0 = temp0.x + float4(-0, -1, -2, -3);\n    // cmp r0, -r0_abs, -c4.y, -c4.x\n    temp0 = (-abs(temp0) >= 0) ? float4(1, 1, 1, 1) : float4(0, 0, 0, 0);\n    // cmp r1, -r1_abs, -c4.y, -c4.x\n    temp1 = (-abs(temp1) >= 0) ? float4(1, 1, 1, 1) : float4(0, 0, 0, 0);\n    // dp4 r2.x, c6, r0\n    temp2.x = dot(float4(0.05882353, 0.7647059, 0.23529412, 0.9411765), temp0);\n    // dp4 r2.y, c7, r0\n    temp2.y = dot(float4(0.5294118, 0.29411766, 0.7058824, 0.47058824), temp0);\n    // dp4 r2.z, c8, r0\n    temp2.z = dot(float4(0.1764706, 0.88235295, 0.11764706, 0.8235294), temp0);\n    // dp4 r2.w, c9, r0\n    temp2.w = dot(float4(0.64705884, 0.4117647, 0.5882353, 0.3529412), temp0);\n    // dp4 r0.x, r2, r1\n    temp0.x = dot(temp2, temp1);\n    // add r0.x, -r0.x, v0.y\n    temp0.x = -temp0.x + i.texcoord1.y;\n    // cmp r0, r0.x, c5.x, c5.y\n    temp0 = (temp0.x >= 0) ? float4(1, 1, 1, 1) : float4(-1, -1, -1, -1);\n    // texkill r0\n    clip(temp0);\n    // texld_pp r0, v1.zwzw, s2\n    temp0 = /* not implemented _pp modifier */ tex2D(bump_normal_texture, i.texcoord.zw);\n    // add_pp r0.xy, r0.wyzw, c5.z\n    temp0.xy = /* not implemented _pp modifier */ temp0.wy + float2(-0.5, -0.5);\n    // add_pp r0.xy, r0, r0\n    temp0.xy = /* not implemented _pp modifier */ temp0.xy + temp0.xy;\n    // mul_pp r0.w, r0.x, r0.x\n    temp0.w = /* not implemented _pp modifier */ temp0.x * temp0.x;\n    // mad_pp r0.w, r0.y, r0.y, -r0.w\n    temp0.w = /* not implemented _pp modifier */ temp0.y * temp0.y + -temp0.w;\n    // add_pp r0.w, -r0.w, -c4.y\n    temp0.w = /* not implemented _pp modifier */ -temp0.w + float1(1);\n    // rsq_pp r0.w, r0.w\n    temp0.w = /* not implemented _pp modifier */ 1 / sqrt(temp0.w);\n    // rcp_pp r0.z, r0.w\n    temp0.z = /* not implemented _pp modifier */ 1.0f / temp0.w;\n    // dp3 r1.x, r0, v2\n    temp1.x = dot(temp0.xyz, i.texcoord2.xyz);\n    // dp3 r1.y, r0, v3\n    temp1.y = dot(temp0.xyz, i.texcoord3.xyz);\n    // dp3 r1.z, r0, v4\n    temp1.z = dot(temp0.xyz, i.texcoord4.xyz);\n    // nrm_pp r0.xyz, r1\n    temp0.xyz = /* not implemented _pp modifier */ normalize(temp1.xyz).xyz;\n    // add r1.x, c0.w, -v5.x\n    temp1.x = (camera_world_matrix._m00_m10_m20_m30).w + -i.texcoord5.x;\n    // add r1.y, c1.w, -v5.y\n    temp1.y = (camera_world_matrix._m01_m11_m21_m31).w + -i.texcoord5.y;\n    // add r1.z, c2.w, -v5.z\n    temp1.z = (camera_world_matrix._m02_m12_m22_m32).w + -i.texcoord5.z;\n    // nrm r2.xyz, r1\n    temp2.xyz = normalize(temp1.xyz).xyz;\n    // dp3 r0.w, r0, r2\n    temp0.w = dot(temp0.xyz, temp2.xyz);\n    // add r1.x, r0.w, r0.w\n    temp1.x = temp0.w + temp0.w;\n    // mov_sat r0.w, r0.w\n    temp0.w = saturate(temp0.w);\n    // add r0.w, -r0.w, -c4.y\n    temp0.w = -temp0.w + float1(1);\n    // dp2add r0.w, r0.w, r0.w, c3.y\n    temp0.w = dot(temp0.ww, temp0.ww) + float1(0.25);\n    // mad r1.xyz, r1.x, -r0, r2\n    temp1.xyz = temp1.xxx * -temp0.xyz + temp2.xyz;\n    // mad_pp oC1.xyz, r0, -c5.z, -c5.z\n    o.color1.xyz = /* not implemented _pp modifier */ temp0.xyz * float3(0.5, 0.5, 0.5) + float3(0.5, 0.5, 0.5);\n    // texld_pp r2, v1, s1\n    temp2 = /* not implemented _pp modifier */ tex2D(material_texture, i.texcoord.xy);\n    // add r0.x, -r2.x, -c4.y\n    temp0.x = -temp2.x + float1(1);\n    // mul r0.x, r0.x, c5.w\n    temp0.x = temp0.x * float1(7);\n    // frc r0.y, r0.x\n    temp0.y = frac(temp0.x);\n    // add r1.w, -r0.y, r0.x\n    temp1.w = -temp0.y + temp0.x;\n    // texldl r1, r1, s3\n    temp1 = texCUBElod(reflection_texture, temp1);\n    // mul r0.x, r0.w, r2.y\n    temp0.x = temp0.w * temp2.y;\n    // mul r0.xyz, r0.x, r1\n    temp0.xyz = temp0.xxx * temp1.xyz;\n    // texld_pp r1, v1, s0\n    temp1 = /* not implemented _pp modifier */ tex2D(diffuse_texture, i.texcoord.xy);\n    // mad_pp oC0.xyz, r0, r2.z, r1\n    o.color.xyz = /* not implemented _pp modifier */ temp0.xyz * temp2.zzz + temp1.xyz;\n    // mov_pp oC0.w, r2.x\n    o.color.w = /* not implemented _pp modifier */ temp2.x;\n    // mov_pp oC1.w, r2.y\n    o.color1.w = /* not implemented _pp modifier */ temp2.y;\n    // mov oC2, v0.x\n    o.color2 = i.texcoord1.x;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."))}i.isMDXComponent=!0}}]);