"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[48074],{603905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>s});var n=r(667294);function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,m=function(e,t){if(null==e)return{};var r,n,m={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(m[r]=e[r]);return m}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(m[r]=e[r])}return m}var _=n.createContext({}),d=function(e){var t=n.useContext(_),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(_.Provider,{value:t},e.children)},x="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,m=e.mdxType,o=e.originalType,_=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),x=d(r),c=m,s=x["".concat(_,".").concat(c)]||x[c]||i[c]||o;return r?n.createElement(s,p(p({ref:t},l),{},{components:r})):n.createElement(s,p({ref:t},l))}));function s(e,t){var r=arguments,m=t&&t.mdxType;if("string"==typeof e||m){var o=r.length,p=new Array(o);p[0]=c;var a={};for(var _ in t)hasOwnProperty.call(t,_)&&(a[_]=t[_]);a.originalType=e,a[x]="string"==typeof e?e:m,p[1]=a;for(var d=2;d<o;d++)p[d]=r[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},439502:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>_,contentTitle:()=>p,default:()=>i,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=r(487462),m=(r(667294),r(603905));const o={id:0x3eda652231f1b40,title:"Opacity Default Cube Environment Mapping Cube Fresnel Diffuse Texture Distortion Normalmap Nvidia Take Global Light"},p="Opacity Default Cube Environment Mapping Cube Fresnel Diffuse Texture Distortion Normalmap Nvidia Take Global Light",a={unversionedId:"Generated/Shaders/Base/[0-100]/283065223300979520",id:"Generated/Shaders/Base/[0-100]/283065223300979520",title:"Opacity Default Cube Environment Mapping Cube Fresnel Diffuse Texture Distortion Normalmap Nvidia Take Global Light",description:"(opacityCUBEENVIRONMENTMAPPINGDIFFUSETEXTURENORMALMAPTAKEGLOBALLIGHT, 0x3eda652231f1b44)",source:"@site/docs/Generated/Shaders/Base/[0-100]/0x3eda652231f1b44.mdx",sourceDirName:"Generated/Shaders/Base/[0-100]",slug:"/Generated/Shaders/Base/[0-100]/283065223300979520",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[0-100]/283065223300979520",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/Generated/Shaders/Base/[0-100]/0x3eda652231f1b44.mdx",tags:[],version:"current",frontMatter:{id:"283065223300979520",title:"Opacity Default Cube Environment Mapping Cube Fresnel Diffuse Texture Distortion Normalmap Nvidia Take Global Light"},sidebar:"docsSidebar",previous:{title:"Generic Shadow Caster Alpha Masked Diffuse Texture Double Sided Gsma Alpha Masking Gsma Texture Nvidia",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[0-100]/17460267185421986"},next:{title:"Generic Shadow Caster Depth Scaling Diffuse Texture Double Sided Normalmap Nvidia",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[0-100]/284335507100682050"}},_={},d=[{value:"Technique <code>transparent</code>",id:"technique-transparent",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Sampler 1",id:"sampler-1",level:4},{value:"Sampler 2",id:"sampler-2",level:4},{value:"Sampler 3",id:"sampler-3",level:4},{value:"Sampler 4",id:"sampler-4",level:4},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],l={toc:d},x="wrapper";function i(e){let{components:t,...r}=e;return(0,m.kt)(x,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,m.kt)("h1",{id:"opacity-default-cube-environment-mapping-cube-fresnel-diffuse-texture-distortion-normalmap-nvidia-take-global-light"},"Opacity Default Cube Environment Mapping Cube Fresnel Diffuse Texture Distortion Normalmap Nvidia Take Global Light"),(0,m.kt)("p",null,"(",(0,m.kt)("inlineCode",{parentName:"p"},"opacity:default:CUBE_ENVIRONMENT_MAPPING:CUBE_FRESNEL:DIFFUSE_TEXTURE:DISTORTION:NORMALMAP:NVIDIA:TAKE_GLOBAL_LIGHT"),", ",(0,m.kt)("inlineCode",{parentName:"p"},"0x3eda652231f1b44"),")"),(0,m.kt)("p",null,"This template is referenced 1 time by ",(0,m.kt)("a",{parentName:"p",href:"/docs/Generated/Render%20Templates/base.render_template_database#opacity-cube-environment-mapping-cube-fresnel-diffuse-texture-distortion-normalmap-take-global-light"},"opacity:CUBE_ENVIRONMENT_MAPPING:CUBE_FRESNEL:DIFFUSE_TEXTURE:DISTORTION:NORMALMAP:TAKE_GLOBAL_LIGHT"),".\nThis template uses the following inputs:\n|Name|UI Name|Type|\n|---|---|---|\n|reflection_texture|Reflection Cube|texture|\n|opacity_texture|Opacity Texture (UV5)|texture|\n|diffuse_texture|Diffuse Texture (UV1)|texture|\n|bump_normal_texture|Normal Map (UV2 else UV1)|texture|\n|depth_opacity|Opacity Distance Falloff|scalar|."),(0,m.kt)("h3",{id:"technique-transparent"},"Technique ",(0,m.kt)("inlineCode",{parentName:"h3"},"transparent")),(0,m.kt)("h3",{id:"render-states"},"Render States"),(0,m.kt)("p",null,"More info can be found on the ",(0,m.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3drenderstatetype"},"Direct3D Docs")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 0,\n    D3DRS_ALPHABLENDENABLE = 1,\n    D3DRS_CULLMODE = 2,\n    D3DRS_COLORWRITEENABLE = 7,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 1,\n    D3DRS_STENCILFUNC = 6,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 5,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 4,\n    D3DRS_STENCILWRITEMASK = 5,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n    D3DRS_BLENDOP = 1,\n    D3DRS_DESTBLEND = 6,\n    D3DRS_SRCBLEND = 5,\n};\n")),(0,m.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,m.kt)("p",null,"More info can be found on the ",(0,m.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3dsamplerstatetype"},"Direct3D Docs")),(0,m.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 3,\n    D3DSAMP_ADDRESSV = 3,\n    D3DSAMP_MAGFILTER = 1,\n    D3DSAMP_MINFILTER = 1,\n    D3DSAMP_MIPFILTER = 1,\n};\n")),(0,m.kt)("h4",{id:"sampler-1"},"Sampler 1"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 3,\n    D3DSAMP_ADDRESSV = 3,\n    D3DSAMP_MAGFILTER = 2,\n    D3DSAMP_MINFILTER = 2,\n    D3DSAMP_MIPFILTER = 2,\n};\n")),(0,m.kt)("h4",{id:"sampler-2"},"Sampler 2"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 3,\n    D3DSAMP_ADDRESSV = 3,\n    D3DSAMP_MAGFILTER = 2,\n    D3DSAMP_MINFILTER = 2,\n    D3DSAMP_MIPFILTER = 2,\n};\n")),(0,m.kt)("h4",{id:"sampler-3"},"Sampler 3"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,m.kt)("h4",{id:"sampler-4"},"Sampler 4"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,m.kt)("h3",{id:"shaders"},"Shaders"),(0,m.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-hlsl"},"float camera_near_range : register(vs_3_0, c12);\ncolumn_major float4x4 proj_matrix : register(vs_3_0, c8);\nfloat3 render_target_texel_offset : register(vs_3_0, c13);\ncolumn_major float4x4 view_matrix : register(vs_3_0, c4);\nfloat3 vp_offset : register(vs_3_0, c14);\nfloat3 vp_size : register(vs_3_0, c15);\ncolumn_major float4x4 world_matrix : register(vs_3_0, c0);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 normal : NORMAL;\n    float4 texcoord1 : TEXCOORD1;\n    float4 texcoord4 : TEXCOORD4;\n    float4 texcoord : TEXCOORD;\n    float4 tangent : TANGENT;\n    float4 binormal : BINORMAL;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float4 texcoord6 : TEXCOORD6;\n    float4 texcoord5 : TEXCOORD5;\n    float2 texcoord1 : TEXCOORD1;\n    float3 texcoord4 : TEXCOORD4;\n    float4 texcoord : TEXCOORD;\n    float3 texcoord2 : TEXCOORD2;\n    float3 texcoord3 : TEXCOORD3;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float4 temp0, temp1, temp2;\n    float temp3;\n    // def c16, 2, -1, 0.5, 1\n    // dcl_position v0\n    // dcl_normal v1\n    // dcl_texcoord1 v2\n    // dcl_texcoord4 v3\n    // dcl_texcoord v4\n    // dcl_tangent v5\n    // dcl_binormal v6\n    // dcl_position o0\n    // dcl_texcoord6 o1\n    // dcl_texcoord5 o2\n    // dcl_texcoord1 o3.xy\n    // dcl_texcoord4 o4.xyz\n    // dcl_texcoord o5\n    // dcl_texcoord2 o6.xyz\n    // dcl_texcoord3 o7.xyz\n    // mov r0.xz, c16\n    temp0.xz = float2(2, 0.5);\n    // add r0.yz, r0.z, c13.xxyw\n    temp0.yz = temp0.zz + render_target_texel_offset.xy;\n    // mov r1.xy, c15\n    temp1.xy = vp_size.xy;\n    // mad r0.xw, c14.xyzy, r0.x, r1.xyzy\n    temp0.xw = vp_offset.xy * temp0.xx + temp1.xy;\n    // add r0.xw, r0, c16.y\n    temp0.xw = temp0.xw + float2(-1, -1);\n    // dp4 r1.w, v0, c3\n    temp1.w = dot(i.position, (world_matrix._m03_m13_m23_m33));\n    // dp4 r1.x, v0, c0\n    temp1.x = dot(i.position, (world_matrix._m00_m10_m20_m30));\n    // dp4 r1.y, v0, c1\n    temp1.y = dot(i.position, (world_matrix._m01_m11_m21_m31));\n    // dp4 r1.z, v0, c2\n    temp1.z = dot(i.position, (world_matrix._m02_m12_m22_m32));\n    // dp4 r2.x, r1, c4\n    temp2.x = dot(temp1, (view_matrix._m00_m10_m20_m30));\n    // dp4 r2.y, r1, c5\n    temp2.y = dot(temp1, (view_matrix._m01_m11_m21_m31));\n    // dp4 r2.z, r1, c6\n    temp2.z = dot(temp1, (view_matrix._m02_m12_m22_m32));\n    // dp4 r2.w, r1, c7\n    temp2.w = dot(temp1, (view_matrix._m03_m13_m23_m33));\n    // mov o2.xyz, r1\n    o.texcoord5.xyz = temp1.xyz;\n    // dp4 r1.w, r2, c11\n    temp1.w = dot(temp2, (proj_matrix._m03_m13_m23_m33));\n    // mul r0.xw, r0, r1.w\n    temp0.xw = temp0.xw * temp1.ww;\n    // dp4 r1.x, r2, c8\n    temp1.x = dot(temp2, (proj_matrix._m00_m10_m20_m30));\n    // mad r0.x, r1.x, c15.x, r0.x\n    temp0.x = temp1.x * vp_size.x + temp0.x;\n    // add r3.x, r1.w, r1.w\n    temp3.x = temp1.w + temp1.w;\n    // mad o1.x, r3.x, r0.y, r0.x\n    o.texcoord6.x = temp3.x * temp0.y + temp0.x;\n    // dp4 r1.y, r2, c9\n    temp1.y = dot(temp2, (proj_matrix._m01_m11_m21_m31));\n    // dp4 r1.z, r2, c10\n    temp1.z = dot(temp2, (proj_matrix._m02_m12_m22_m32));\n    // mad r0.x, r1.y, -c15.y, r0.w\n    temp0.x = temp1.y * -vp_size.y + temp0.w;\n    // mov o0, r1\n    o.position = temp1;\n    // mul o1.zw, r1, c16.xywx\n    o.texcoord6.zw = temp1.zw * float2(1, 2);\n    // add o2.w, r1.z, c12.x\n    o.texcoord5.w = temp1.z + camera_near_range.x;\n    // mad o1.y, r3.x, r0.z, r0.x\n    o.texcoord6.y = temp3.x * temp0.z + temp0.x;\n    // mad r0.xyz, v5, c16.x, c16.y\n    temp0.xyz = i.tangent.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 o6.x, r0, c0\n    o.texcoord2.x = dot(temp0.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 o7.x, r0, c1\n    o.texcoord3.x = dot(temp0.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o4.x, r0, c2\n    o.texcoord4.x = dot(temp0.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // mad r0.xyz, v6, c16.x, c16.y\n    temp0.xyz = i.binormal.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 o6.y, -r0, c0\n    o.texcoord2.y = dot(-temp0.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 o7.y, -r0, c1\n    o.texcoord3.y = dot(-temp0.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o4.y, -r0, c2\n    o.texcoord4.y = dot(-temp0.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // mad r0.xyz, v1, c16.x, c16.y\n    temp0.xyz = i.normal.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 o6.z, r0, c0\n    o.texcoord2.z = dot(temp0.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 o7.z, r0, c1\n    o.texcoord3.z = dot(temp0.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o4.z, r0, c2\n    o.texcoord4.z = dot(temp0.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // mov o3.xy, v3\n    o.texcoord1 = i.texcoord4;\n    // mov o5.xy, v4\n    o.texcoord.xy = i.texcoord.xy;\n    // mov o5.zw, v2.xyxy\n    o.texcoord.zw = i.texcoord1.xy;\n    // \n\n    return o;\n}\n")),(0,m.kt)("p",null,"Decompiled by DXDecompiler."),(0,m.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-hlsl"},"float3 GLOBAL_ambient_color : register(ps_3_0, c18);\nfloat3 GLOBAL_shadow_slice_depths : register(ps_3_0, c16);\nsampler2D bump_normal_texture : register(ps_3_0, s4);\ncolumn_major float4x4 camera_world_matrix : register(ps_3_0, c12);\nsampler2D depth : register(ps_3_0, s0);\nsampler2D diffuse_texture : register(ps_3_0, s3);\nsampler2D distortion_source : register(ps_3_0, s1);\nfloat3 global_light_col : register(ps_3_0, c19);\nfloat3 global_light_dir : register(ps_3_0, c15);\ncolumn_major float4x4 global_shadow_projection[3] : register(ps_3_0, c0);\nfloat ref_depth_opacity : register(ps_3_0, c17);\nsampler2D shadow_depth : register(ps_3_0, s2);\nstruct PixelMain_Input\n{\n    float4 texcoord6 : TEXCOORD6;\n    float4 texcoord5 : TEXCOORD5;\n    float3 texcoord4 : TEXCOORD4;\n    float4 texcoord : TEXCOORD;\n    float3 texcoord2 : TEXCOORD2;\n    float3 texcoord3 : TEXCOORD3;\n};\n\nfloat4 PixelMain(PixelMain_Input i) : COLOR\n{\n    float4 out_color;\n    float4 temp0, temp1, temp2, temp3, temp4, temp5, temp6;\n    // def c20, -0.5, 1, 0.05, 2\n    // def c21, 0.9, 511.5, 0.3, 0\n    // def c22, 0, 1, 2, 3\n    // dcl_texcoord6 v0\n    // dcl_texcoord5 v1\n    // dcl_texcoord4 v2.xyz\n    // dcl_texcoord v3\n    // dcl_texcoord2 v4.xyz\n    // dcl_texcoord3 v5.xyz\n    // dcl_2d s0\n    // dcl_2d s1\n    // dcl_2d s2\n    // dcl_2d s3\n    // dcl_2d s4\n    // texld_pp r0, v3.zwzw, s4\n    temp0 = /* not implemented _pp modifier */ tex2D(bump_normal_texture, i.texcoord.zw);\n    // add_pp r0.xy, r0.wyzw, c20.x\n    temp0.xy = /* not implemented _pp modifier */ temp0.wy + float2(-0.5, -0.5);\n    // add_pp r0.xy, r0, r0\n    temp0.xy = /* not implemented _pp modifier */ temp0.xy + temp0.xy;\n    // mul_pp r0.w, r0.x, r0.x\n    temp0.w = /* not implemented _pp modifier */ temp0.x * temp0.x;\n    // mad_pp r0.w, r0.y, r0.y, -r0.w\n    temp0.w = /* not implemented _pp modifier */ temp0.y * temp0.y + -temp0.w;\n    // add_pp r0.w, -r0.w, c20.y\n    temp0.w = /* not implemented _pp modifier */ -temp0.w + float1(1);\n    // rsq_pp r0.w, r0.w\n    temp0.w = /* not implemented _pp modifier */ 1 / sqrt(temp0.w);\n    // rcp_pp r0.z, r0.w\n    temp0.z = /* not implemented _pp modifier */ 1.0f / temp0.w;\n    // dp3 r1.x, r0, v4\n    temp1.x = dot(temp0.xyz, i.texcoord2.xyz);\n    // dp3 r1.y, r0, v5\n    temp1.y = dot(temp0.xyz, i.texcoord3.xyz);\n    // dp3 r1.z, r0, v2\n    temp1.z = dot(temp0.xyz, i.texcoord4.xyz);\n    // nrm_pp r0.xyz, r1\n    temp0.xyz = /* not implemented _pp modifier */ normalize(temp1.xyz).xyz;\n    // texld r1, v0, s0\n    temp1 = tex2D(depth, i.texcoord6.xy);\n    // add r0.w, -r1.x, v0.z\n    temp0.w = -temp1.x + i.texcoord6.z;\n    // rcp r1.x, c17.x\n    temp1.x = 1.0f / ref_depth_opacity.x;\n    // mul_sat_pp r0.w, r0_abs.w, r1.x\n    ;// error\n    // mul_pp r1.x, r0.w, c20.z\n    temp1.x = /* not implemented _pp modifier */ temp0.w * float1(0.05);\n    // mul r1.xy, r0, r1.x\n    temp1.xy = temp0.xy * temp1.xx;\n    // rcp r1.z, v0.w\n    temp1.z = 1.0f / i.texcoord6.w;\n    // mad r1.xy, v0, r1.z, r1\n    temp1.xy = i.texcoord6.xy * temp1.zz + temp1.xy;\n    // texld r1, r1, s1\n    temp1 = tex2D(distortion_source, temp1.xy);\n    // texld_pp r2, v3, s3\n    temp2 = /* not implemented _pp modifier */ tex2D(diffuse_texture, i.texcoord.xy);\n    // mul r1.xyz, r1, r2\n    temp1.xyz = temp1.xyz * temp2.xyz;\n    // mad r2.xyz, r1, -c20.w, r2\n    temp2.xyz = temp1.xyz * float3(-2, -2, -2) + temp2.xyz;\n    // add r1.xyz, r1, r1\n    temp1.xyz = temp1.xyz + temp1.xyz;\n    // mad_pp r1.xyz, r0.w, r2, r1\n    temp1.xyz = /* not implemented _pp modifier */ temp0.www * temp2.xyz + temp1.xyz;\n    // mov r2.x, -v1.w\n    temp2.x = -i.texcoord5.w;\n    // add r2.yzw, c16.xxyz, -v1.w\n    temp2.yzw = GLOBAL_shadow_slice_depths.xyz + -i.texcoord5.www;\n    // cmp r2, r2, c22.x, c22.y\n    temp2 = (temp2 >= 0) ? float4(0, 0, 0, 0) : float4(1, 1, 1, 1);\n    // dp4 r0.w, r2, c20.y\n    temp0.w = dot(temp2, float4(1, 1, 1, 1));\n    // add r2.xyz, r0.w, -c22.yzww\n    temp2.xyz = temp0.www + float3(-1, -2, -3);\n    // mov r3.x, c22.x\n    temp3.x = float1(0);\n    // cmp r4, -r2_abs.x, c0, r3.x\n    temp4 = (-abs(temp2).x >= 0) ? (global_shadow_projection[0]._m00_m10_m20_m30) : temp3.x;\n    // cmp r4, -r2_abs.y, c4, r4\n    temp4 = (-abs(temp2).y >= 0) ? (global_shadow_projection[1]._m00_m10_m20_m30) : temp4;\n    // cmp r4, -r2_abs.z, c8, r4\n    temp4 = (-abs(temp2).z >= 0) ? (global_shadow_projection[2]._m00_m10_m20_m30) : temp4;\n    // mad r5, v1.xyzx, c22.yyyx, c22.xxxy\n    temp5 = i.texcoord5.xyzx * float4(1, 1, 1, 0) + float4(0, 0, 0, 1);\n    // dp4 r4.x, r5, r4\n    temp4.x = dot(temp5, temp4);\n    // cmp r6, -r2_abs.x, c1, r3.x\n    temp6 = (-abs(temp2).x >= 0) ? (global_shadow_projection[0]._m01_m11_m21_m31) : temp3.x;\n    // cmp r6, -r2_abs.y, c5, r6\n    temp6 = (-abs(temp2).y >= 0) ? (global_shadow_projection[1]._m01_m11_m21_m31) : temp6;\n    // cmp r6, -r2_abs.z, c9, r6\n    temp6 = (-abs(temp2).z >= 0) ? (global_shadow_projection[2]._m01_m11_m21_m31) : temp6;\n    // dp4 r4.y, r5, r6\n    temp4.y = dot(temp5, temp6);\n    // cmp r6, -r2_abs.x, c2, r3.x\n    temp6 = (-abs(temp2).x >= 0) ? (global_shadow_projection[0]._m02_m12_m22_m32) : temp3.x;\n    // cmp r6, -r2_abs.y, c6, r6\n    temp6 = (-abs(temp2).y >= 0) ? (global_shadow_projection[1]._m02_m12_m22_m32) : temp6;\n    // cmp r6, -r2_abs.z, c10, r6\n    temp6 = (-abs(temp2).z >= 0) ? (global_shadow_projection[2]._m02_m12_m22_m32) : temp6;\n    // dp4 r4.z, r5, r6\n    temp4.z = dot(temp5, temp6);\n    // cmp r3, -r2_abs.x, c3, r3.x\n    temp3 = (-abs(temp2).x >= 0) ? (global_shadow_projection[0]._m03_m13_m23_m33) : temp3.x;\n    // cmp r3, -r2_abs.y, c7, r3\n    temp3 = (-abs(temp2).y >= 0) ? (global_shadow_projection[1]._m03_m13_m23_m33) : temp3;\n    // cmp r2, -r2_abs.z, c11, r3\n    temp2 = (-abs(temp2).z >= 0) ? (global_shadow_projection[2]._m03_m13_m23_m33) : temp3;\n    // dp4 r4.w, r5, r2\n    temp4.w = dot(temp5, temp2);\n    // texld r2, r4, s2\n    temp2 = tex2D(shadow_depth, temp4.xy);\n    // dp3_sat r0.w, -c15, r0\n    temp0.w = saturate(dot(-global_light_dir.xyz, temp0.xyz));\n    // mov r3.x, -c12.w\n    temp3.x = -(camera_world_matrix._m00_m10_m20_m30).w;\n    // mov r3.y, -c13.w\n    temp3.y = -(camera_world_matrix._m01_m11_m21_m31).w;\n    // mov r3.z, -c14.w\n    temp3.z = -(camera_world_matrix._m02_m12_m22_m32).w;\n    // add r2.yzw, r3.xxyz, v1.xxyz\n    temp2.yzw = temp3.xyz + i.texcoord5.xyz;\n    // dp3 r1.w, r2.yzww, r2.yzww\n    temp1.w = dot(temp2.yzw, temp2.yzw);\n    // rsq r1.w, r1.w\n    temp1.w = 1 / sqrt(temp1.w);\n    // mul r3.xyz, r1.w, r2.yzww\n    temp3.xyz = temp1.www * temp2.yzw;\n    // mad r2.yzw, r2, -r1.w, -c15.xxyz\n    temp2.yzw = temp2.yzw * -temp1.www + -global_light_dir.xyz;\n    // nrm r4.xyz, r2.yzww\n    temp4.xyz = normalize(temp2.yzww.xyz).xyz;\n    // dp3_sat r0.x, r4, r0\n    temp0.x = saturate(dot(temp4.xyz, temp0.xyz));\n    // pow r1.w, r0.x, c21.y\n    temp1.w = pow(temp0.x, float1(511.5));\n    // dp3 r0.x, r3, c15\n    temp0.x = dot(temp3.xyz, global_light_dir.xyz);\n    // mad_sat r0.x, r0.x, -c20.x, -c20.x\n    temp0.x = saturate(temp0.x * float1(0.5) + float1(0.5));\n    // mul r0.x, r0.w, r0.x\n    temp0.x = temp0.w * temp0.x;\n    // mul r0.xyz, r0.x, c19\n    temp0.xyz = temp0.xxx * global_light_col.xyz;\n    // mad r0.xyz, c19, r0.w, r0\n    temp0.xyz = global_light_col.xyz * temp0.www + temp0.xyz;\n    // mad r0.xyz, r2.x, r0, c18\n    temp0.xyz = temp2.xxx * temp0.xyz + GLOBAL_ambient_color.xyz;\n    // add_sat r0.xyz, r0, c21.z\n    temp0.xyz = saturate(temp0.xyz + float3(0.3, 0.3, 0.3));\n    // mul r2.yzw, r2.x, c19.xxyz\n    temp2.yzw = temp2.xxx * global_light_col.xyz;\n    // mul r2.yzw, r2, c21.x\n    temp2.yzw = temp2.yzw * float3(0.9, 0.9, 0.9);\n    // mul r3.xyz, r1.w, r2.yzww\n    temp3.xyz = temp1.www * temp2.yzw;\n    // mul r3.xyz, r2.x, r3\n    temp3.xyz = temp2.xxx * temp3.xyz;\n    // cmp r3.xyz, -r0.w, c22.x, r3\n    temp3.xyz = (-temp0.www >= 0) ? float3(0, 0, 0) : temp3.xyz;\n    // mad r0.xyz, r0, r1, r3\n    temp0.xyz = temp0.xyz * temp1.xyz + temp3.xyz;\n    // mad_pp oC0.xyz, r2.yzww, r1.w, r0\n    out_color.xyz = /* not implemented _pp modifier */ temp2.yzw * temp1.www + temp0.xyz;\n    // mov_pp oC0.w, c20.y\n    out_color.w = /* not implemented _pp modifier */ float1(1);\n    // \n\n    return out_color;\n}\n")),(0,m.kt)("p",null,"Decompiled by DXDecompiler."))}i.isMDXComponent=!0}}]);