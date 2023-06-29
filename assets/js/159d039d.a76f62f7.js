"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[43987],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>y});var n=r(67294);function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,m=function(e,t){if(null==e)return{};var r,n,m={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(m[r]=e[r]);return m}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(m[r]=e[r])}return m}var x=n.createContext({}),_=function(e){var t=n.useContext(x),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=_(e.components);return n.createElement(x.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,m=e.mdxType,o=e.originalType,x=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=_(r),s=m,y=d["".concat(x,".").concat(s)]||d[s]||c[s]||o;return r?n.createElement(y,p(p({ref:t},l),{},{components:r})):n.createElement(y,p({ref:t},l))}));function y(e,t){var r=arguments,m=t&&t.mdxType;if("string"==typeof e||m){var o=r.length,p=new Array(o);p[0]=s;var a={};for(var x in t)hasOwnProperty.call(t,x)&&(a[x]=t[x]);a.originalType=e,a[d]="string"==typeof e?e:m,p[1]=a;for(var _=2;_<o;_++)p[_]=r[_];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},72757:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>x,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>_});var n=r(87462),m=(r(67294),r(3905));const o={id:0x435c411033b51c00,title:"Water Default Ati"},p="Water Default Ati",a={unversionedId:"Generated/Shaders/Base/[1200-1300]/4853826036241341000",id:"Generated/Shaders/Base/[1200-1300]/4853826036241341000",title:"Water Default Ati",description:"(waterATI, 0x435c411033b51b30)",source:"@site/docs/Generated/Shaders/Base/[1200-1300]/0x435c411033b51b30.mdx",sourceDirName:"Generated/Shaders/Base/[1200-1300]",slug:"/Generated/Shaders/Base/[1200-1300]/4853826036241341000",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[1200-1300]/4853826036241341000",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/docs/Generated/Shaders/Base/[1200-1300]/0x435c411033b51b30.mdx",tags:[],version:"current",frontMatter:{id:"4853826036241341000",title:"Water Default Ati"},sidebar:"docsSidebar",previous:{title:"Generic Shadow Caster Depth Scaling Diffuse Texture Double Sided Global Environment Mapping Normalmap Nvidia",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[1200-1300]/4848223238324761000"},next:{title:"Generic Shadow Caster Blend Diffuse Blend Gsma Blend Mask Control Blend Mask Crossblend Blend Normal Diffuse Texture Distance Fade 3 Gsma Texture Normalmap Nvidia Vertex Color World Up Blend",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[1200-1300]/4859652501034637000"}},x={},_=[{value:"Technique <code>transparent</code>",id:"technique-transparent",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Sampler 1",id:"sampler-1",level:4},{value:"Sampler 2",id:"sampler-2",level:4},{value:"Sampler 3",id:"sampler-3",level:4},{value:"Sampler 4",id:"sampler-4",level:4},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],l={toc:_},d="wrapper";function c(e){let{components:t,...r}=e;return(0,m.kt)(d,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,m.kt)("h1",{id:"water-default-ati"},"Water Default Ati"),(0,m.kt)("p",null,"(",(0,m.kt)("inlineCode",{parentName:"p"},"water:default:ATI"),", ",(0,m.kt)("inlineCode",{parentName:"p"},"0x435c411033b51b30"),")"),(0,m.kt)("h3",{id:"technique-transparent"},"Technique ",(0,m.kt)("inlineCode",{parentName:"h3"},"transparent")),(0,m.kt)("h3",{id:"render-states"},"Render States"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 0,\n    D3DRS_ALPHABLENDENABLE = 1,\n    D3DRS_CULLMODE = 2,\n    D3DRS_COLORWRITEENABLE = 7,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n    D3DRS_BLENDOP = 1,\n    D3DRS_DESTBLEND = 6,\n    D3DRS_SRCBLEND = 5,\n};\n")),(0,m.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,m.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,m.kt)("h4",{id:"sampler-1"},"Sampler 1"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,m.kt)("h4",{id:"sampler-2"},"Sampler 2"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 3,\n    D3DSAMP_ADDRESSV = 3,\n    D3DSAMP_MAGFILTER = 1,\n    D3DSAMP_MINFILTER = 1,\n    D3DSAMP_MIPFILTER = 1,\n};\n")),(0,m.kt)("h4",{id:"sampler-3"},"Sampler 3"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 3,\n    D3DSAMP_ADDRESSV = 3,\n    D3DSAMP_MAGFILTER = 2,\n    D3DSAMP_MINFILTER = 2,\n    D3DSAMP_MIPFILTER = 2,\n};\n")),(0,m.kt)("h4",{id:"sampler-4"},"Sampler 4"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,m.kt)("h3",{id:"shaders"},"Shaders"),(0,m.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-hlsl"},"float camera_near_range : register(vs_3_0, c12);\ncolumn_major float4x4 proj_matrix : register(vs_3_0, c8);\nfloat ref_time : register(vs_3_0, c16);\nfloat3 ref_water_settings_b : register(vs_3_0, c17);\nfloat3 ref_water_settings_c : register(vs_3_0, c18);\nfloat3 render_target_texel_offset : register(vs_3_0, c15);\ncolumn_major float4x4 view_matrix : register(vs_3_0, c0);\nfloat3 vp_offset : register(vs_3_0, c13);\nfloat3 vp_size : register(vs_3_0, c14);\ncolumn_major float4x4 world_matrix : register(vs_3_0, c4);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 normal : NORMAL;\n    float4 texcoord : TEXCOORD;\n    float4 texcoord1 : TEXCOORD1;\n    float4 tangent : TANGENT;\n    float4 binormal : BINORMAL;\n    float4 color : COLOR;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float4 texcoord : TEXCOORD;\n    float texcoord1 : TEXCOORD1;\n    float3 texcoord2 : TEXCOORD2;\n    float3 texcoord3 : TEXCOORD3;\n    float3 texcoord4 : TEXCOORD4;\n    float3 texcoord5 : TEXCOORD5;\n    float4 texcoord6 : TEXCOORD6;\n    float4 color : COLOR;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float4 temp0, temp1, temp2;\n    float3 temp3;\n    float2 temp4;\n    // def c19, 2, -1, 0.5, 0.2\n    // def c20, 0.15915494, 0.5, 6.2831855, -3.1415927\n    // def c21, 0.1, 0.01, 0.11, -0.011\n    // def c22, 1, 2, 0, -1\n    // dcl_position v0\n    // dcl_normal v1\n    // dcl_texcoord v2\n    // dcl_texcoord1 v3\n    // dcl_tangent v4\n    // dcl_binormal v5\n    // dcl_color v6\n    // dcl_position o0\n    // dcl_texcoord o1\n    // dcl_texcoord1 o2.x\n    // dcl_texcoord2 o3.xyz\n    // dcl_texcoord3 o4.xyz\n    // dcl_texcoord4 o5.xyz\n    // dcl_texcoord5 o6.xyz\n    // dcl_texcoord6 o7\n    // dcl_color o8\n    // dp4 r0.w, v0, c7\n    temp0.w = dot(i.position, (world_matrix._m03_m13_m23_m33));\n    // dp4 r0.z, v0, c6\n    temp0.z = dot(i.position, (world_matrix._m02_m12_m22_m32));\n    // dp4 r0.x, v0, c4\n    temp0.x = dot(i.position, (world_matrix._m00_m10_m20_m30));\n    // dp4 r0.y, v0, c5\n    temp0.y = dot(i.position, (world_matrix._m01_m11_m21_m31));\n    // dp4 r1.x, r0, c0\n    temp1.x = dot(temp0, (view_matrix._m00_m10_m20_m30));\n    // dp4 r1.y, r0, c1\n    temp1.y = dot(temp0, (view_matrix._m01_m11_m21_m31));\n    // dp4 r1.z, r0, c2\n    temp1.z = dot(temp0, (view_matrix._m02_m12_m22_m32));\n    // dp4 r1.w, r0, c3\n    temp1.w = dot(temp0, (view_matrix._m03_m13_m23_m33));\n    // mov o6.xyz, r0\n    o.texcoord5 = temp0;\n    // dp4 r2.z, r1, c10\n    temp2.z = dot(temp1, (proj_matrix._m02_m12_m22_m32));\n    // add o2.x, r2.z, c12.x\n    o.texcoord1 = temp2.z + camera_near_range.x;\n    // mad r3.xyz, v4, c19.x, c19.y\n    temp3.xyz = i.tangent.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 o3.x, r3, c4\n    o.texcoord2.x = dot(temp3.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 o4.x, r3, c5\n    o.texcoord3.x = dot(temp3.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o5.x, r3, c6\n    o.texcoord4.x = dot(temp3.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // mad r3.xyz, v5, c19.x, c19.y\n    temp3.xyz = i.binormal.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 o3.y, -r3, c4\n    o.texcoord2.y = dot(-temp3.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 o4.y, -r3, c5\n    o.texcoord3.y = dot(-temp3.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o5.y, -r3, c6\n    o.texcoord4.y = dot(-temp3.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // mad r3.xyz, v1, c19.x, c19.y\n    temp3.xyz = i.normal.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 o3.z, r3, c4\n    o.texcoord2.z = dot(temp3.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 o4.z, r3, c5\n    o.texcoord3.z = dot(temp3.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o5.z, r3, c6\n    o.texcoord4.z = dot(temp3.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // dp4 r2.x, r1, c8\n    temp2.x = dot(temp1, (proj_matrix._m00_m10_m20_m30));\n    // mov r3.xz, c19\n    temp3.xz = float2(2, 0.5);\n    // mov r4.xy, c14\n    temp4.xy = vp_size.xy;\n    // mad r0.zw, c13.xyxy, r3.x, r4.xyxy\n    temp0.zw = vp_offset.xy * temp3.xx + temp4.xy;\n    // add r0.zw, r0, c19.y\n    temp0.zw = temp0.zw + float2(-1, -1);\n    // dp4 r2.w, r1, c11\n    temp2.w = dot(temp1, (proj_matrix._m03_m13_m23_m33));\n    // dp4 r2.y, r1, c9\n    temp2.y = dot(temp1, (proj_matrix._m01_m11_m21_m31));\n    // mul r0.zw, r0, r2.w\n    temp0.zw = temp0.zw * temp2.ww;\n    // mad r1.x, r2.x, c14.x, r0.z\n    temp1.x = temp2.x * vp_size.x + temp0.z;\n    // mov o0, r2\n    o.position = temp2;\n    // mad r1.y, r2.y, -c14.y, r0.w\n    temp1.y = temp2.y * -vp_size.y + temp0.w;\n    // mul o7.zw, r2, c19_abs.xyyx\n    o.texcoord6.zw = temp2.zw * float2(1, 2);\n    // add r0.z, r2.w, r2.w\n    temp0.z = temp2.w + temp2.w;\n    // add r1.zw, r3.z, c15.xyxy\n    temp1.zw = temp3.zz + render_target_texel_offset.xy;\n    // mad o7.xy, r1.zwzw, r0.z, r1\n    o.texcoord6.xy = temp1.zw * temp0.zz + temp1.xy;\n    // mul r0.z, r0.y, c17.y\n    temp0.z = temp0.y * ref_water_settings_b.y;\n    // mad r0.z, r0.z, c20.x, c20.y\n    temp0.z = temp0.z * float1(0.15915494) + float1(0.5);\n    // frc r0.z, r0.z\n    temp0.z = frac(temp0.z);\n    // mad r0.z, r0.z, c20.z, c20.w\n    temp0.z = temp0.z * float1(6.2831855) + float1(-3.1415927);\n    // sincos r1.x, r0.z\n    temp1.x = cos(temp0.z);\n    // mad r0.x, r0.x, c17.y, r1.x\n    temp0.x = temp0.x * ref_water_settings_b.y + temp1.x;\n    // mov r0.z, c17.z\n    temp0.z = ref_water_settings_b.z;\n    // mad r0.x, c16.x, r0.z, r0.x\n    temp0.x = ref_time.x * temp0.z + temp0.x;\n    // mad r0.x, r0.x, c20.x, c20.y\n    temp0.x = temp0.x * float1(0.15915494) + float1(0.5);\n    // frc r0.x, r0.x\n    temp0.x = frac(temp0.x);\n    // mad r0.x, r0.x, c20.z, c20.w\n    temp0.x = temp0.x * float1(6.2831855) + float1(-3.1415927);\n    // sincos r1.y, r0.x\n    temp1.y = sin(temp0.x);\n    // sincos r2.y, r1.y\n    temp2.y = sin(temp1.y);\n    // mov r1.z, r1.y\n    temp1.z = temp1.y;\n    // mad r0.x, r0.y, c17.y, r2.y\n    temp0.x = temp0.y * ref_water_settings_b.y + temp2.y;\n    // mad r0.x, c16.x, r0.z, r0.x\n    temp0.x = ref_time.x * temp0.z + temp0.x;\n    // mad r0.x, r0.x, c20.x, c20.y\n    temp0.x = temp0.x * float1(0.15915494) + float1(0.5);\n    // frc r0.x, r0.x\n    temp0.x = frac(temp0.x);\n    // mad r0.x, r0.x, c20.z, c20.w\n    temp0.x = temp0.x * float1(6.2831855) + float1(-3.1415927);\n    // sincos r2.x, r0.x\n    temp2.x = cos(temp0.x);\n    // mov r1.w, r2.x\n    temp1.w = temp2.x;\n    // mad r0.xy, r1.zwzw, c17.x, v2\n    temp0.xy = temp1.zw * ref_water_settings_b.xx + i.texcoord.xy;\n    // mul r0.zw, r1, c17.x\n    temp0.zw = temp1.zw * ref_water_settings_b.xx;\n    // mov r1.x, c16.x\n    temp1.x = ref_time.x;\n    // mul r1, r1.x, c18.xyxy\n    temp1 = temp1.x * ref_water_settings_c.xyxy;\n    // mad o1.xy, r1, c21, r0\n    o.texcoord.xy = temp1.xy * float2(0.1, 0.01) + temp0.xy;\n    // add r0.xy, c19.w, v3\n    temp0.xy = float2(0.2, 0.2) + i.texcoord1.xy;\n    // mad r0.xy, r0.zwzw, c19.x, r0\n    temp0.xy = temp0.zw * float2(2, 2) + temp0.xy;\n    // add r0.xy, r0, c19.z\n    temp0.xy = temp0.xy + float2(0.5, 0.5);\n    // mad o1.zw, r1, c21, r0.xyxy\n    o.texcoord.zw = temp1.zw * float2(0.11, -0.011) + temp0.xy;\n    // add r0.x, -c19.z, v6.z\n    temp0.x = float1(-0.5) + i.color.z;\n    // add r0.x, r0.x, r0.x\n    temp0.x = temp0.x + temp0.x;\n    // abs o8.w, r0.x\n    o.color.w = abs(temp0.x);\n    // mad o8.xyz, v6, c22.xxyw, c22.zzww\n    o.color.xyz = i.color.xyz * float3(1, 1, 2) + float3(0, 0, -1);\n    // \n\n    return o;\n}\n")),(0,m.kt)("p",null,"Decompiled by DXDecompiler."),(0,m.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-hlsl"},"float3 GLOBAL_ambient_color : register(ps_3_0, c21);\nfloat3 GLOBAL_fog_far_low_color : register(ps_3_0, c26);\nfloat GLOBAL_fog_max_density : register(ps_3_0, c27);\nfloat GLOBAL_fog_max_range : register(ps_3_0, c29);\nfloat GLOBAL_fog_min_range : register(ps_3_0, c28);\nfloat3 GLOBAL_fog_start_color : register(ps_3_0, c25);\nfloat3 GLOBAL_shadow_slice_depths : register(ps_3_0, c16);\nfloat3 GLOBAL_sky_bottom_color : register(ps_3_0, c23);\nfloat3 GLOBAL_sky_top_color : register(ps_3_0, c22);\nsampler2D bump_normal_texture : register(ps_3_0, s1);\ncolumn_major float4x4 camera_world_matrix : register(ps_3_0, c12);\nsampler2D depth : register(ps_3_0, s2);\nsampler2D diffuse_texture : register(ps_3_0, s0);\nfloat3 global_light_col : register(ps_3_0, c24);\nfloat3 global_light_dir : register(ps_3_0, c15);\ncolumn_major float4x4 global_shadow_projection[3] : register(ps_3_0, c0);\nfloat3 ref_water_color_deep : register(ps_3_0, c17);\nfloat3 ref_water_color_shallow : register(ps_3_0, c18);\nfloat3 ref_water_settings : register(ps_3_0, c19);\nfloat3 ref_water_settings_d : register(ps_3_0, c20);\nsamplerCUBE reflection_texture : register(ps_3_0, s4);\nsampler2D shadow_depth : register(ps_3_0, s3);\nstruct PixelMain_Input\n{\n    float4 texcoord : TEXCOORD;\n    float texcoord1 : TEXCOORD1;\n    float3 texcoord2 : TEXCOORD2;\n    float3 texcoord3 : TEXCOORD3;\n    float3 texcoord4 : TEXCOORD4;\n    float3 texcoord5 : TEXCOORD5;\n    float4 texcoord6 : TEXCOORD6;\n    float4 color : COLOR;\n};\n\nfloat4 PixelMain(PixelMain_Input i) : COLOR\n{\n    float4 out_color;\n    float4 temp0, temp1, temp2, temp3, temp4;\n    float3 temp5;\n    // def c30, -0.5, 1, 0, 0.5\n    // def c31, 4, 10, 0, 0\n    // def c32, -1, -2, -3, 0\n    // dcl_texcoord v0\n    // dcl_texcoord1 v1.x\n    // dcl_texcoord2 v2.xyz\n    // dcl_texcoord3 v3.xyz\n    // dcl_texcoord4 v4.xyz\n    // dcl_texcoord5 v5.xyz\n    // dcl_texcoord6 v6\n    // dcl_color v7\n    // dcl_2d s0\n    // dcl_2d s1\n    // dcl_2d s2\n    // dcl_2d s3\n    // dcl_cube s4\n    // mov r0.x, -v1.x\n    temp0.x = -i.texcoord1.x;\n    // add r0.yzw, c16.xxyz, -v1.x\n    temp0.yzw = GLOBAL_shadow_slice_depths.xyz + -i.texcoord1.xxx;\n    // cmp r0, r0, c30.z, c30.y\n    temp0 = (temp0 >= 0) ? float4(0, 0, 0, 0) : float4(1, 1, 1, 1);\n    // dp4 r0.x, r0, c30.y\n    temp0.x = dot(temp0, float4(1, 1, 1, 1));\n    // add r0.xyz, r0.x, c32\n    temp0.xyz = temp0.xxx + float3(-1, -2, -3);\n    // mov r1.z, c30.z\n    temp1.z = float1(0);\n    // cmp r2, -r0_abs.x, c0, r1.z\n    temp2 = (-abs(temp0).x >= 0) ? (global_shadow_projection[0]._m00_m10_m20_m30) : temp1.z;\n    // cmp r2, -r0_abs.y, c4, r2\n    temp2 = (-abs(temp0).y >= 0) ? (global_shadow_projection[1]._m00_m10_m20_m30) : temp2;\n    // cmp r2, -r0_abs.z, c8, r2\n    temp2 = (-abs(temp0).z >= 0) ? (global_shadow_projection[2]._m00_m10_m20_m30) : temp2;\n    // mad r3, v5.xyzx, c30.yyyz, c30.zzzy\n    temp3 = i.texcoord5.xyzx * float4(1, 1, 1, 0) + float4(0, 0, 0, 1);\n    // dp4 r2.x, r3, r2\n    temp2.x = dot(temp3, temp2);\n    // cmp r4, -r0_abs.x, c1, r1.z\n    temp4 = (-abs(temp0).x >= 0) ? (global_shadow_projection[0]._m01_m11_m21_m31) : temp1.z;\n    // cmp r4, -r0_abs.y, c5, r4\n    temp4 = (-abs(temp0).y >= 0) ? (global_shadow_projection[1]._m01_m11_m21_m31) : temp4;\n    // cmp r4, -r0_abs.z, c9, r4\n    temp4 = (-abs(temp0).z >= 0) ? (global_shadow_projection[2]._m01_m11_m21_m31) : temp4;\n    // dp4 r2.y, r3, r4\n    temp2.y = dot(temp3, temp4);\n    // cmp r4, -r0_abs.x, c2, r1.z\n    temp4 = (-abs(temp0).x >= 0) ? (global_shadow_projection[0]._m02_m12_m22_m32) : temp1.z;\n    // cmp r4, -r0_abs.y, c6, r4\n    temp4 = (-abs(temp0).y >= 0) ? (global_shadow_projection[1]._m02_m12_m22_m32) : temp4;\n    // cmp r4, -r0_abs.z, c10, r4\n    temp4 = (-abs(temp0).z >= 0) ? (global_shadow_projection[2]._m02_m12_m22_m32) : temp4;\n    // dp4 r2.z, r3, r4\n    temp2.z = dot(temp3, temp4);\n    // cmp r1, -r0_abs.x, c3, r1.z\n    temp1 = (-abs(temp0).x >= 0) ? (global_shadow_projection[0]._m03_m13_m23_m33) : temp1.z;\n    // cmp r1, -r0_abs.y, c7, r1\n    temp1 = (-abs(temp0).y >= 0) ? (global_shadow_projection[1]._m03_m13_m23_m33) : temp1;\n    // cmp r0, -r0_abs.z, c11, r1\n    temp0 = (-abs(temp0).z >= 0) ? (global_shadow_projection[2]._m03_m13_m23_m33) : temp1;\n    // dp4 r2.w, r3, r0\n    temp2.w = dot(temp3, temp0);\n    // texld r0, r2, s3\n    temp0 = tex2D(shadow_depth, temp2.xy);\n    // mul r0.xyz, r0.x, c24\n    temp0.xyz = temp0.xxx * global_light_col.xyz;\n    // texld r1, v0, s1\n    temp1 = tex2D(bump_normal_texture, i.texcoord.xy);\n    // add r1.yz, r1.xwxw, c30.x\n    temp1.yz = temp1.wx + float2(-0.5, -0.5);\n    // add r1.yz, r1_abs, r1_abs\n    temp1.yz = abs(temp1).yz + abs(temp1).yz;\n    // dp2add r0.w, r1.yzzw, c30.y, c30.z\n    temp0.w = dot(temp1.yz, float2(1, 1)) + float1(0);\n    // texld r2, v0.zwzw, s1\n    temp2 = tex2D(bump_normal_texture, i.texcoord.zw);\n    // add r2.yz, r2.xwxw, c30.x\n    temp2.yz = temp2.wx + float2(-0.5, -0.5);\n    // add r2.yz, r2_abs, r2_abs\n    temp2.yz = abs(temp2).yz + abs(temp2).yz;\n    // dp2add r0.w, r2.yzzw, c30.y, -r0.w\n    temp0.w = dot(temp2.yz, float2(1, 1)) + -temp0.w;\n    // dp2add r2.y, r2.yzzw, c30.y, c30.z\n    temp2.y = dot(temp2.yz, float2(1, 1)) + float1(0);\n    // dp2add_sat r1.y, r1.yzzw, c30.y, -r2.y\n    temp1.y = saturate(dot(temp1.yz, float2(1, 1)) + -temp2.y);\n    // add_sat r1.y, r1.y, -v7.x\n    temp1.y = saturate(temp1.y + -i.color.x);\n    // mul_sat r1.y, r1.y, c31.y\n    temp1.y = saturate(temp1.y * float1(10));\n    // lrp r1.z, v7.w, v7.z, r0_abs.w\n    temp1.z = lerp(abs(temp0).w, i.color.z, i.color.w);\n    // lrp r3.xy, r1.z, r2.wxzw, r1.wxzw\n    temp3.xy = lerp(temp1.wx, temp2.wx, temp1.zz);\n    // add r1.xz, r3.xyyw, c30.x\n    temp1.xz = temp3.xy + float2(-0.5, -0.5);\n    // mul r1.xz, r1, v7.y\n    temp1.xz = temp1.xz * i.color.yy;\n    // add r2.xy, r1.xzzw, r1.xzzw\n    temp2.xy = temp1.xz + temp1.xz;\n    // mov r2.z, c30.y\n    temp2.z = float1(1);\n    // dp3 r3.x, r2, v2\n    temp3.x = dot(temp2.xyz, i.texcoord2.xyz);\n    // dp3 r3.y, r2, v3\n    temp3.y = dot(temp2.xyz, i.texcoord3.xyz);\n    // dp3 r3.z, r2, v4\n    temp3.z = dot(temp2.xyz, i.texcoord4.xyz);\n    // dp3 r0.w, r3, r3\n    temp0.w = dot(temp3.xyz, temp3.xyz);\n    // rsq r0.w, r0.w\n    temp0.w = 1 / sqrt(temp0.w);\n    // mad r1.x, r3.z, r0.w, c30.y\n    temp1.x = temp3.z * temp0.w + float1(1);\n    // mul r2.xyz, r0.w, r3\n    temp2.xyz = temp0.www * temp3.xyz;\n    // mad r0.w, r1.x, -c30.w, c30.y\n    temp0.w = temp1.x * float1(-0.5) + float1(1);\n    // mul r1.x, r1.x, c30.w\n    temp1.x = temp1.x * float1(0.5);\n    // mov r3.xyz, c23\n    temp3.xyz = GLOBAL_sky_bottom_color.xyz;\n    // mad r3.xyz, r3, r0.w, c21\n    temp3.xyz = temp3.xyz * temp0.www + GLOBAL_ambient_color.xyz;\n    // mad r1.xzw, c22.xyyz, r1.x, r3.xyyz\n    temp1.xzw = GLOBAL_sky_top_color.xyz * temp1.xxx + temp3.xyz;\n    // dp3_sat r0.w, -c15, r2\n    temp0.w = saturate(dot(-global_light_dir.xyz, temp2.xyz));\n    // mad r1.xzw, r0.xyyz, r0.w, r1\n    temp1.xzw = temp0.xyz * temp0.www + temp1.xzw;\n    // rcp r2.w, c19.z\n    temp2.w = 1.0f / ref_water_settings.z;\n    // add r3.x, c12.w, -v5.x\n    temp3.x = (camera_world_matrix._m00_m10_m20_m30).w + -i.texcoord5.x;\n    // add r3.y, c13.w, -v5.y\n    temp3.y = (camera_world_matrix._m01_m11_m21_m31).w + -i.texcoord5.y;\n    // add r3.z, c14.w, -v5.z\n    temp3.z = (camera_world_matrix._m02_m12_m22_m32).w + -i.texcoord5.z;\n    // dp3 r3.w, r3, r3\n    temp3.w = dot(temp3.xyz, temp3.xyz);\n    // rsq r3.w, r3.w\n    temp3.w = 1 / sqrt(temp3.w);\n    // rcp r4.x, r3.w\n    temp4.x = 1.0f / temp3.w;\n    // mul_sat r2.w, r2.w, r4.x\n    temp2.w = saturate(temp2.w * temp4.x);\n    // mul r2.w, r2.w, c19.y\n    temp2.w = temp2.w * ref_water_settings.y;\n    // mul r0.w, r0.w, r2.w\n    temp0.w = temp0.w * temp2.w;\n    // mul r0.xyz, r0.w, r0\n    temp0.xyz = temp0.www * temp0.xyz;\n    // mad r4.xyz, r3, r3.w, -c15\n    temp4.xyz = temp3.xyz * temp3.www + -global_light_dir.xyz;\n    // mul r3.xyz, r3.w, r3\n    temp3.xyz = temp3.www * temp3.xyz;\n    // nrm r5.xyz, r4\n    temp5.xyz = normalize(temp4.xyz).xyz;\n    // dp3_sat r0.w, r5, r2\n    temp0.w = saturate(dot(temp5.xyz, temp2.xyz));\n    // pow r2.w, r0.w, c20.x\n    temp2.w = pow(temp0.w, ref_water_settings_d.x);\n    // mul r0.xyz, r0, r2.w\n    temp0.xyz = temp0.xyz * temp2.www;\n    // dp3 r0.w, r2, r3\n    temp0.w = dot(temp2.xyz, temp3.xyz);\n    // add r2.w, r0.w, r0.w\n    temp2.w = temp0.w + temp0.w;\n    // mov_sat r0.w, r0.w\n    temp0.w = saturate(temp0.w);\n    // mad r2.xyz, r2, -r2.w, r3\n    temp2.xyz = temp2.xyz * -temp2.www + temp3.xyz;\n    // texld r2, r2, s4\n    temp2 = texCUBE(reflection_texture, temp2.xyz);\n    // mul r3.xyz, r2, c19.x\n    temp3.xyz = temp2.xyz * ref_water_settings.xxx;\n    // texld r4, v6, s2\n    temp4 = tex2D(depth, i.texcoord6.xy);\n    // add r2.w, r4.x, -v1.x\n    temp2.w = temp4.x + -i.texcoord1.x;\n    // rcp r3.w, c20.y\n    temp3.w = 1.0f / ref_water_settings_d.y;\n    // mul_sat r2.w, r2.w, r3.w\n    temp2.w = saturate(temp2.w * temp3.w);\n    // mov r4.xyz, c18\n    temp4.xyz = ref_water_color_shallow.xyz;\n    // add r4.xyz, -r4, c17\n    temp4.xyz = -temp4.xyz + ref_water_color_deep.xyz;\n    // mad r4.xyz, r2.w, r4, c18\n    temp4.xyz = temp2.www * temp4.xyz + ref_water_color_shallow.xyz;\n    // log r2.w, r2.w\n    temp2.w = log2(temp2.w);\n    // mul r2.w, r2.w, c20.z\n    temp2.w = temp2.w * ref_water_settings_d.z;\n    // exp oC0.w, r2.w\n    out_color.w = exp2(temp2.w);\n    // mad r2.xyz, r2, -c19.x, r4\n    temp2.xyz = temp2.xyz * -ref_water_settings.xxx + temp4.xyz;\n    // mad r2.xyz, r0.w, r2, r3\n    temp2.xyz = temp0.www * temp2.xyz + temp3.xyz;\n    // lrp r3.xy, c30.w, v0.zwzw, v0\n    temp3.xy = lerp(i.texcoord.xy, i.texcoord.zw, float2(0.5, 0.5));\n    // mul r3.xy, r3, c31.x\n    temp3.xy = temp3.xy * float2(4, 4);\n    // texld r3, r3, s0\n    temp3 = tex2D(diffuse_texture, temp3.xy);\n    // mul r0.w, r1.y, r3.w\n    temp0.w = temp1.y * temp3.w;\n    // lrp r4.xyz, r0.w, r3, r2\n    temp4.xyz = lerp(temp2.xyz, temp3.xyz, temp0.www);\n    // mad r0.xyz, r4, r1.xzww, r0\n    temp0.xyz = temp4.xyz * temp1.xzw + temp0.xyz;\n    // add r0.w, -c28.x, v1.x\n    temp0.w = -GLOBAL_fog_min_range.x + i.texcoord1.x;\n    // rcp r1.x, c29.x\n    temp1.x = 1.0f / GLOBAL_fog_max_range.x;\n    // mul r0.w, r0.w, r1.x\n    temp0.w = temp0.w * temp1.x;\n    // max r1.x, r0.w, c30.z\n    temp1.x = max(temp0.w, float1(0));\n    // min r0.w, c27.x, r1.x\n    temp0.w = min(GLOBAL_fog_max_density.x, temp1.x);\n    // add r0.w, -r0.w, c30.y\n    temp0.w = -temp0.w + float1(1);\n    // mul r0.w, r0.w, r0.w\n    temp0.w = temp0.w * temp0.w;\n    // mul r0.w, r0.w, r0.w\n    temp0.w = temp0.w * temp0.w;\n    // mov r1.xyz, c26\n    temp1.xyz = GLOBAL_fog_far_low_color.xyz;\n    // add r1.xyz, -r1, c25\n    temp1.xyz = -temp1.xyz + GLOBAL_fog_start_color.xyz;\n    // mad r1.xyz, r0.w, r1, c26\n    temp1.xyz = temp0.www * temp1.xyz + GLOBAL_fog_far_low_color.xyz;\n    // add r0.xyz, r0, -r1\n    temp0.xyz = temp0.xyz + -temp1.xyz;\n    // mad oC0.xyz, r0.w, r0, r1\n    out_color.xyz = temp0.www * temp0.xyz + temp1.xyz;\n    // \n\n    return out_color;\n}\n")),(0,m.kt)("p",null,"Decompiled by DXDecompiler."))}c.isMDXComponent=!0}}]);