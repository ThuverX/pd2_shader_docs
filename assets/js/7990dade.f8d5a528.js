"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[24499],{3905:(e,r,t)=>{t.d(r,{Zo:()=>_,kt:()=>s});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function m(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?m(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},m=Object.keys(e);for(n=0;n<m.length;n++)t=m[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)t=m[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),d=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},_=function(e){var r=d(e.components);return n.createElement(p.Provider,{value:r},e.children)},x="mdxType",i={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,m=e.originalType,p=e.parentName,_=l(e,["components","mdxType","originalType","parentName"]),x=d(t),c=o,s=x["".concat(p,".").concat(c)]||x[c]||i[c]||m;return t?n.createElement(s,a(a({ref:r},_),{},{components:t})):n.createElement(s,a({ref:r},_))}));function s(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var m=t.length,a=new Array(m);a[0]=c;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[x]="string"==typeof e?e:o,a[1]=l;for(var d=2;d<m;d++)a[d]=t[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},48169:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>i,frontMatter:()=>m,metadata:()=>l,toc:()=>d});var n=t(87462),o=(t(67294),t(3905));const m={id:0xd2f72e8345f35800,title:"Generic Default Blend Diffuse Blend Gsma Blend Mask Control Blend Mask Crossblend Blend Normal Cube Environment Mapping Diffuse Texture Gloss Blurs Cubemap Gsma Texture Normalmap Vertex Color"},a="Generic Default Blend Diffuse Blend Gsma Blend Mask Control Blend Mask Crossblend Blend Normal Cube Environment Mapping Diffuse Texture Gloss Blurs Cubemap Gsma Texture Normalmap Vertex Color",l={unversionedId:"Generated/Shaders/Base/[3900-4000]/15201670208561568000",id:"Generated/Shaders/Base/[3900-4000]/15201670208561568000",title:"Generic Default Blend Diffuse Blend Gsma Blend Mask Control Blend Mask Crossblend Blend Normal Cube Environment Mapping Diffuse Texture Gloss Blurs Cubemap Gsma Texture Normalmap Vertex Color",description:"(genericBLENDDIFFUSEBLENDMASKCONTROLBLENDNORMALDIFFUSETEXTUREGSMATEXTUREVERTEXCOLOR, 0xd2f72e8345f35891)",source:"@site/docs/Generated/Shaders/Base/[3900-4000]/0xd2f72e8345f35891.mdx",sourceDirName:"Generated/Shaders/Base/[3900-4000]",slug:"/Generated/Shaders/Base/[3900-4000]/15201670208561568000",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[3900-4000]/15201670208561568000",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/docs/Generated/Shaders/Base/[3900-4000]/0xd2f72e8345f35891.mdx",tags:[],version:"current",frontMatter:{id:"15201670208561568000",title:"Generic Default Blend Diffuse Blend Gsma Blend Mask Control Blend Mask Crossblend Blend Normal Cube Environment Mapping Diffuse Texture Gloss Blurs Cubemap Gsma Texture Normalmap Vertex Color"},sidebar:"docsSidebar",previous:{title:"Generic Default Blend Diffuse Diffuse Texture Normalmap World Up Blend",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[3900-4000]/15196906016573155000"},next:{title:"Generic Shadow Caster Ati Depth Scaling Diffuse Texture Normalmap Uv1",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[3900-4000]/15204842320025910000"}},p={},d=[{value:"Technique <code>deferred_ambient</code>",id:"technique-deferred_ambient",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Sampler 1",id:"sampler-1",level:4},{value:"Sampler 2",id:"sampler-2",level:4},{value:"Sampler 3",id:"sampler-3",level:4},{value:"Sampler 4",id:"sampler-4",level:4},{value:"Sampler 5",id:"sampler-5",level:4},{value:"Sampler 6",id:"sampler-6",level:4},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],_={toc:d},x="wrapper";function i(e){let{components:r,...t}=e;return(0,o.kt)(x,(0,n.Z)({},_,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"generic-default-blend-diffuse-blend-gsma-blend-mask-control-blend-mask-crossblend-blend-normal-cube-environment-mapping-diffuse-texture-gloss-blurs-cubemap-gsma-texture-normalmap-vertex-color"},"Generic Default Blend Diffuse Blend Gsma Blend Mask Control Blend Mask Crossblend Blend Normal Cube Environment Mapping Diffuse Texture Gloss Blurs Cubemap Gsma Texture Normalmap Vertex Color"),(0,o.kt)("p",null,"(",(0,o.kt)("inlineCode",{parentName:"p"},"generic:default:BLEND_DIFFUSE:BLEND_GSMA:BLEND_MASK_CONTROL:BLEND_MASK_CROSSBLEND:BLEND_NORMAL:CUBE_ENVIRONMENT_MAPPING:DIFFUSE_TEXTURE:GLOSS_BLURS_CUBEMAP:GSMA_TEXTURE:NORMALMAP:VERTEX_COLOR"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"0xd2f72e8345f35891"),")"),(0,o.kt)("h3",{id:"technique-deferred_ambient"},"Technique ",(0,o.kt)("inlineCode",{parentName:"h3"},"deferred_ambient")),(0,o.kt)("h3",{id:"render-states"},"Render States"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 1,\n    D3DRS_ALPHABLENDENABLE = 0,\n    D3DRS_CULLMODE = 2,\n    D3DRS_COLORWRITEENABLE = 15,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n};\n")),(0,o.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,o.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h4",{id:"sampler-1"},"Sampler 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h4",{id:"sampler-2"},"Sampler 2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h4",{id:"sampler-3"},"Sampler 3"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h4",{id:"sampler-4"},"Sampler 4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h4",{id:"sampler-5"},"Sampler 5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h4",{id:"sampler-6"},"Sampler 6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h3",{id:"shaders"},"Shaders"),(0,o.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"float camera_near_range : register(vs_3_0, c12);\ncolumn_major float4x4 proj_matrix : register(vs_3_0, c8);\ncolumn_major float4x4 view_matrix : register(vs_3_0, c4);\ncolumn_major float4x4 world_matrix : register(vs_3_0, c0);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 normal : NORMAL;\n    float4 texcoord1 : TEXCOORD1;\n    float4 texcoord : TEXCOORD;\n    float4 tangent : TANGENT;\n    float4 binormal : BINORMAL;\n    float4 color : COLOR;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float texcoord1 : TEXCOORD1;\n    float4 texcoord : TEXCOORD;\n    float3 texcoord2 : TEXCOORD2;\n    float3 texcoord3 : TEXCOORD3;\n    float3 texcoord4 : TEXCOORD4;\n    float3 texcoord5 : TEXCOORD5;\n    float4 color : COLOR;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float4 temp0, temp1;\n    // def c13, 2, -1, 1, 0\n    // dcl_position v0\n    // dcl_normal v1\n    // dcl_texcoord1 v2\n    // dcl_texcoord v3\n    // dcl_tangent v4\n    // dcl_binormal v5\n    // dcl_color v6\n    // dcl_position o0\n    // dcl_texcoord1 o1.x\n    // dcl_texcoord o2\n    // dcl_texcoord2 o3.xyz\n    // dcl_texcoord3 o4.xyz\n    // dcl_texcoord4 o5.xyz\n    // dcl_texcoord5 o6.xyz\n    // dcl_color o7\n    // dp4 r0.w, v0, c3\n    temp0.w = dot(i.position, (world_matrix._m03_m13_m23_m33));\n    // dp4 r0.x, v0, c0\n    temp0.x = dot(i.position, (world_matrix._m00_m10_m20_m30));\n    // dp4 r0.y, v0, c1\n    temp0.y = dot(i.position, (world_matrix._m01_m11_m21_m31));\n    // dp4 r0.z, v0, c2\n    temp0.z = dot(i.position, (world_matrix._m02_m12_m22_m32));\n    // dp4 r1.x, r0, c4\n    temp1.x = dot(temp0, (view_matrix._m00_m10_m20_m30));\n    // dp4 r1.y, r0, c5\n    temp1.y = dot(temp0, (view_matrix._m01_m11_m21_m31));\n    // dp4 r1.z, r0, c6\n    temp1.z = dot(temp0, (view_matrix._m02_m12_m22_m32));\n    // dp4 r1.w, r0, c7\n    temp1.w = dot(temp0, (view_matrix._m03_m13_m23_m33));\n    // mov o6.xyz, r0\n    o.texcoord5 = temp0;\n    // dp4 o0.x, r1, c8\n    o.position.x = dot(temp1, (proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, r1, c9\n    o.position.y = dot(temp1, (proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.w, r1, c11\n    o.position.w = dot(temp1, (proj_matrix._m03_m13_m23_m33));\n    // dp4 r0.x, r1, c10\n    temp0.x = dot(temp1, (proj_matrix._m02_m12_m22_m32));\n    // add o1.x, r0.x, c12.x\n    o.texcoord1 = temp0.x + camera_near_range.x;\n    // mov o0.z, r0.x\n    o.position.z = temp0.x;\n    // mad r0.xyz, v4, c13.x, c13.y\n    temp0.xyz = i.tangent.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 o3.x, r0, c0\n    o.texcoord2.x = dot(temp0.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 o4.x, r0, c1\n    o.texcoord3.x = dot(temp0.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o5.x, r0, c2\n    o.texcoord4.x = dot(temp0.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // mad r0.xyz, v5, c13.x, c13.y\n    temp0.xyz = i.binormal.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 o3.y, -r0, c0\n    o.texcoord2.y = dot(-temp0.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 o4.y, -r0, c1\n    o.texcoord3.y = dot(-temp0.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o5.y, -r0, c2\n    o.texcoord4.y = dot(-temp0.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // mad r0.xyz, v1, c13.x, c13.y\n    temp0.xyz = i.normal.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 o3.z, r0, c0\n    o.texcoord2.z = dot(temp0.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 o4.z, r0, c1\n    o.texcoord3.z = dot(temp0.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o5.z, r0, c2\n    o.texcoord4.z = dot(temp0.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // mov o2.xy, v3\n    o.texcoord.xy = i.texcoord.xy;\n    // mov o2.zw, v2.xyxy\n    o.texcoord.zw = i.texcoord1.xy;\n    // mul o7, c13.xxxz, v6\n    o.color = float4(2, 2, 2, 1) * i.color;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."),(0,o.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"sampler2D bump_normal_texture : register(ps_3_0, s4);\ncolumn_major float4x4 camera_world_matrix : register(ps_3_0, c0);\nsampler2D diffuse_layer0_texture : register(ps_3_0, s1);\nsampler2D diffuse_layer2_texture : register(ps_3_0, s3);\nsampler2D diffuse_texture : register(ps_3_0, s0);\nsampler2D material_texture : register(ps_3_0, s2);\nsampler2D normal_layer0_texture : register(ps_3_0, s5);\nfloat2 ref_blend_control : register(ps_3_0, c3);\nsamplerCUBE reflection_texture : register(ps_3_0, s6);\nstruct PixelMain_Input\n{\n    float texcoord1 : TEXCOORD1;\n    float2 texcoord : TEXCOORD;\n    float3 texcoord2 : TEXCOORD2;\n    float3 texcoord3 : TEXCOORD3;\n    float3 texcoord4 : TEXCOORD4;\n    float3 texcoord5 : TEXCOORD5;\n    float4 color : COLOR;\n};\n\nstruct PixelMain_Output\n{\n    float4 color1 : COLOR1;\n    float4 color : COLOR;\n    float4 color2 : COLOR2;\n};\n\nPixelMain_Output PixelMain(PixelMain_Input i)\n{\n    PixelMain_Output o;\n    float4 temp0, temp1, temp2, temp3, temp4, temp5;\n    // def c4, 1, -0.5, 2, 0.25\n    // def c5, 7, 0, 0, 0\n    // dcl_texcoord1 v0.x\n    // dcl_texcoord v1.xy\n    // dcl_texcoord2 v2.xyz\n    // dcl_texcoord3 v3.xyz\n    // dcl_texcoord4 v4.xyz\n    // dcl_texcoord5 v5.xyz\n    // dcl_color_pp v6\n    // dcl_2d s0\n    // dcl_2d s1\n    // dcl_2d s2\n    // dcl_2d s3\n    // dcl_2d s4\n    // dcl_2d s5\n    // dcl_cube s6\n    // texld r0, v1, s4\n    temp0 = tex2D(bump_normal_texture, i.texcoord.xy);\n    // mov r0.xy, r0.wyzw\n    temp0.xy = temp0.wy;\n    // texld r1, v1, s5\n    temp1 = tex2D(normal_layer0_texture, i.texcoord.xy);\n    // mov r0.zw, r1.xywy\n    temp0.zw = temp1.wy;\n    // add r0, r0, c4.y\n    temp0 = temp0 + float4(-0.5, -0.5, -0.5, -0.5);\n    // add r0.zw, r0, r0\n    temp0.zw = temp0.zw + temp0.zw;\n    // mad r0.xy, r0, c4.z, -r0.zwzw\n    temp0.xy = temp0.xy * float2(2, 2) + -temp0.zw;\n    // texld_pp r1, v1, s1\n    temp1 = /* not implemented _pp modifier */ tex2D(diffuse_layer0_texture, i.texcoord.xy);\n    // add_pp r1.w, -r1.w, c4.x\n    temp1.w = /* not implemented _pp modifier */ -temp1.w + float1(1);\n    // texld_pp r2, v1, s0\n    temp2 = /* not implemented _pp modifier */ tex2D(diffuse_texture, i.texcoord.xy);\n    // lrp_pp r3.x, c3.y, r1.w, r2.w\n    temp3.x = /* not implemented _pp modifier */ lerp(temp2.w, temp1.w, ref_blend_control.y);\n    // add_pp r1.w, r3.x, -v6.w\n    temp1.w = /* not implemented _pp modifier */ temp3.x + -i.color.w;\n    // rcp r2.w, c3.x\n    temp2.w = 1.0f / ref_blend_control.x;\n    // mul_sat_pp r1.w, r1.w, r2.w\n    ;// error\n    // mad r0.xy, r1.w, r0, r0.zwzw\n    temp0.xy = temp1.ww * temp0.xy + temp0.zw;\n    // mul r0.w, r0.x, r0.x\n    temp0.w = temp0.x * temp0.x;\n    // mad r0.w, r0.y, r0.y, -r0.w\n    temp0.w = temp0.y * temp0.y + -temp0.w;\n    // add r0.w, -r0.w, c4.x\n    temp0.w = -temp0.w + float1(1);\n    // rsq r0.w, r0.w\n    temp0.w = 1 / sqrt(temp0.w);\n    // rcp r0.z, r0.w\n    temp0.z = 1.0f / temp0.w;\n    // dp3 r3.x, r0, v2\n    temp3.x = dot(temp0.xyz, i.texcoord2.xyz);\n    // dp3 r3.y, r0, v3\n    temp3.y = dot(temp0.xyz, i.texcoord3.xyz);\n    // dp3 r3.z, r0, v4\n    temp3.z = dot(temp0.xyz, i.texcoord4.xyz);\n    // nrm_pp r0.xyz, r3\n    temp0.xyz = /* not implemented _pp modifier */ normalize(temp3.xyz).xyz;\n    // add r3.x, c0.w, -v5.x\n    temp3.x = (camera_world_matrix._m00_m10_m20_m30).w + -i.texcoord5.x;\n    // add r3.y, c1.w, -v5.y\n    temp3.y = (camera_world_matrix._m01_m11_m21_m31).w + -i.texcoord5.y;\n    // add r3.z, c2.w, -v5.z\n    temp3.z = (camera_world_matrix._m02_m12_m22_m32).w + -i.texcoord5.z;\n    // nrm r4.xyz, r3\n    temp4.xyz = normalize(temp3.xyz).xyz;\n    // dp3 r0.w, r0, r4\n    temp0.w = dot(temp0.xyz, temp4.xyz);\n    // add r2.w, r0.w, r0.w\n    temp2.w = temp0.w + temp0.w;\n    // mov_sat r0.w, r0.w\n    temp0.w = saturate(temp0.w);\n    // add r0.w, -r0.w, c4.x\n    temp0.w = -temp0.w + float1(1);\n    // dp2add r0.w, r0.w, r0.w, c4.w\n    temp0.w = dot(temp0.ww, temp0.ww) + float1(0.25);\n    // mad r3.xyz, r2.w, -r0, r4\n    temp3.xyz = temp2.www * -temp0.xyz + temp4.xyz;\n    // mad_pp oC1.xyz, r0, -c4.y, -c4.y\n    o.color1.xyz = /* not implemented _pp modifier */ temp0.xyz * float3(0.5, 0.5, 0.5) + float3(0.5, 0.5, 0.5);\n    // texld_pp r4, v1, s2\n    temp4 = /* not implemented _pp modifier */ tex2D(material_texture, i.texcoord.xy);\n    // texld r5, v1, s3\n    temp5 = tex2D(diffuse_layer2_texture, i.texcoord.xy);\n    // lrp r0.xyz, r1.w, r4.yxzw, r5.yxzw\n    temp0.xyz = lerp(temp5.yxz, temp4.yxz, temp1.www);\n    // lrp_pp r4.xyz, r1.w, r2, r1\n    temp4.xyz = /* not implemented _pp modifier */ lerp(temp1.xyz, temp2.xyz, temp1.www);\n    // add r1.x, -r0.y, c4.x\n    temp1.x = -temp0.y + float1(1);\n    // mul r1.x, r1.x, c5.x\n    temp1.x = temp1.x * float1(7);\n    // frc r1.y, r1.x\n    temp1.y = frac(temp1.x);\n    // add r3.w, -r1.y, r1.x\n    temp3.w = -temp1.y + temp1.x;\n    // texldl r1, r3, s6\n    temp1 = texCUBElod(reflection_texture, temp3);\n    // mul r0.w, r0.x, r0.w\n    temp0.w = temp0.x * temp0.w;\n    // mul r1.xyz, r0.w, r1\n    temp1.xyz = temp0.www * temp1.xyz;\n    // mul r1.xyz, r0.z, r1\n    temp1.xyz = temp0.zzz * temp1.xyz;\n    // mad_pp oC0.xyz, r4, v6, r1\n    o.color.xyz = /* not implemented _pp modifier */ temp4.xyz * i.color.xyz + temp1.xyz;\n    // mov oC0.w, r0.y\n    o.color.w = temp0.y;\n    // mov_pp oC1.w, r0.x\n    o.color1.w = /* not implemented _pp modifier */ temp0.x;\n    // mov oC2, v0.x\n    o.color2 = i.texcoord1.x;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."))}i.isMDXComponent=!0}}]);