"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[40923],{3905:(e,t,r)=>{r.d(t,{Zo:()=>_,kt:()=>s});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},m=Object.keys(e);for(n=0;n<m.length;n++)r=m[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)r=m[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},_=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},i="mdxType",x={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,m=e.originalType,l=e.parentName,_=a(e,["components","mdxType","originalType","parentName"]),i=d(r),c=o,s=i["".concat(l,".").concat(c)]||i[c]||x[c]||m;return r?n.createElement(s,p(p({ref:t},_),{},{components:r})):n.createElement(s,p({ref:t},_))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var m=r.length,p=new Array(m);p[0]=c;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[i]="string"==typeof e?e:o,p[1]=a;for(var d=2;d<m;d++)p[d]=r[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},55065:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>x,frontMatter:()=>m,metadata:()=>a,toc:()=>d});var n=r(87462),o=(r(67294),r(3905));const m={id:0x7ebf095c842c5800,title:"Generic Default Blend Diffuse Blend Diffuse Uv2 Blend Mask Control Blend Mask Seperate Cube Environment Mapping Diffuse Texture Gloss Blurs Cubemap Gsma Texture Normalmap Vertex Color"},p="Generic Default Blend Diffuse Blend Diffuse Uv2 Blend Mask Control Blend Mask Seperate Cube Environment Mapping Diffuse Texture Gloss Blurs Cubemap Gsma Texture Normalmap Vertex Color",a={unversionedId:"Generated/Shaders/Base/[2300-2400]/9133028862289795000",id:"Generated/Shaders/Base/[2300-2400]/9133028862289795000",title:"Generic Default Blend Diffuse Blend Diffuse Uv2 Blend Mask Control Blend Mask Seperate Cube Environment Mapping Diffuse Texture Gloss Blurs Cubemap Gsma Texture Normalmap Vertex Color",description:"(genericBLENDDIFFUSEBLENDMASKCONTROLCUBEENVIRONMENTMAPPINGGLOSSBLURSCUBEMAPNORMALMAP:VERTEXCOLOR, 0x7ebf095c842c5674)",source:"@site/docs/Generated/Shaders/Base/[2300-2400]/0x7ebf095c842c5674.mdx",sourceDirName:"Generated/Shaders/Base/[2300-2400]",slug:"/Generated/Shaders/Base/[2300-2400]/9133028862289795000",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[2300-2400]/9133028862289795000",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/docs/Generated/Shaders/Base/[2300-2400]/0x7ebf095c842c5674.mdx",tags:[],version:"current",frontMatter:{id:"9133028862289795000",title:"Generic Default Blend Diffuse Blend Diffuse Uv2 Blend Mask Control Blend Mask Seperate Cube Environment Mapping Diffuse Texture Gloss Blurs Cubemap Gsma Texture Normalmap Vertex Color"},sidebar:"docsSidebar",previous:{title:"Generic Shadow Caster Alpha Masked Cube Environment Mapping Diffuse Texture External Alpha Ref Rl Environment",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[2300-2400]/9129427049644355000"},next:{title:"Generic Shadow Caster Ati Contour Diffuse Texture Normalmap Rl Players Skinned 3weights Vertex Color Vertex Color Alpha",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[2300-2400]/9134997078130607000"}},l={},d=[{value:"Technique <code>deferred_ambient</code>",id:"technique-deferred_ambient",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Sampler 1",id:"sampler-1",level:4},{value:"Sampler 2",id:"sampler-2",level:4},{value:"Sampler 3",id:"sampler-3",level:4},{value:"Sampler 4",id:"sampler-4",level:4},{value:"Sampler 5",id:"sampler-5",level:4},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],_={toc:d},i="wrapper";function x(e){let{components:t,...r}=e;return(0,o.kt)(i,(0,n.Z)({},_,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"generic-default-blend-diffuse-blend-diffuse-uv2-blend-mask-control-blend-mask-seperate-cube-environment-mapping-diffuse-texture-gloss-blurs-cubemap-gsma-texture-normalmap-vertex-color"},"Generic Default Blend Diffuse Blend Diffuse Uv2 Blend Mask Control Blend Mask Seperate Cube Environment Mapping Diffuse Texture Gloss Blurs Cubemap Gsma Texture Normalmap Vertex Color"),(0,o.kt)("p",null,"(",(0,o.kt)("inlineCode",{parentName:"p"},"generic:default:BLEND_DIFFUSE:BLEND_DIFFUSE_UV2:BLEND_MASK_CONTROL:BLEND_MASK_SEPERATE:CUBE_ENVIRONMENT_MAPPING:DIFFUSE_TEXTURE:GLOSS_BLURS_CUBEMAP:GSMA_TEXTURE:NORMALMAP:VERTEX_COLOR"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"0x7ebf095c842c5674"),")"),(0,o.kt)("h3",{id:"technique-deferred_ambient"},"Technique ",(0,o.kt)("inlineCode",{parentName:"h3"},"deferred_ambient")),(0,o.kt)("h3",{id:"render-states"},"Render States"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 1,\n    D3DRS_ALPHABLENDENABLE = 0,\n    D3DRS_CULLMODE = 2,\n    D3DRS_COLORWRITEENABLE = 15,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n};\n")),(0,o.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,o.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h4",{id:"sampler-1"},"Sampler 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h4",{id:"sampler-2"},"Sampler 2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h4",{id:"sampler-3"},"Sampler 3"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h4",{id:"sampler-4"},"Sampler 4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h4",{id:"sampler-5"},"Sampler 5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h3",{id:"shaders"},"Shaders"),(0,o.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"float camera_near_range : register(vs_3_0, c12);\ncolumn_major float4x4 proj_matrix : register(vs_3_0, c8);\ncolumn_major float4x4 view_matrix : register(vs_3_0, c4);\ncolumn_major float4x4 world_matrix : register(vs_3_0, c0);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 normal : NORMAL;\n    float4 texcoord1 : TEXCOORD1;\n    float4 texcoord : TEXCOORD;\n    float4 tangent : TANGENT;\n    float4 binormal : BINORMAL;\n    float4 color : COLOR;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float texcoord1 : TEXCOORD1;\n    float4 texcoord : TEXCOORD;\n    float3 texcoord2 : TEXCOORD2;\n    float3 texcoord3 : TEXCOORD3;\n    float3 texcoord4 : TEXCOORD4;\n    float3 texcoord5 : TEXCOORD5;\n    float4 color : COLOR;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float4 temp0, temp1;\n    // def c13, 2, -1, 1, 0\n    // dcl_position v0\n    // dcl_normal v1\n    // dcl_texcoord1 v2\n    // dcl_texcoord v3\n    // dcl_tangent v4\n    // dcl_binormal v5\n    // dcl_color v6\n    // dcl_position o0\n    // dcl_texcoord1 o1.x\n    // dcl_texcoord o2\n    // dcl_texcoord2 o3.xyz\n    // dcl_texcoord3 o4.xyz\n    // dcl_texcoord4 o5.xyz\n    // dcl_texcoord5 o6.xyz\n    // dcl_color o7\n    // dp4 r0.w, v0, c3\n    temp0.w = dot(i.position, (world_matrix._m03_m13_m23_m33));\n    // dp4 r0.x, v0, c0\n    temp0.x = dot(i.position, (world_matrix._m00_m10_m20_m30));\n    // dp4 r0.y, v0, c1\n    temp0.y = dot(i.position, (world_matrix._m01_m11_m21_m31));\n    // dp4 r0.z, v0, c2\n    temp0.z = dot(i.position, (world_matrix._m02_m12_m22_m32));\n    // dp4 r1.x, r0, c4\n    temp1.x = dot(temp0, (view_matrix._m00_m10_m20_m30));\n    // dp4 r1.y, r0, c5\n    temp1.y = dot(temp0, (view_matrix._m01_m11_m21_m31));\n    // dp4 r1.z, r0, c6\n    temp1.z = dot(temp0, (view_matrix._m02_m12_m22_m32));\n    // dp4 r1.w, r0, c7\n    temp1.w = dot(temp0, (view_matrix._m03_m13_m23_m33));\n    // mov o6.xyz, r0\n    o.texcoord5 = temp0;\n    // dp4 o0.x, r1, c8\n    o.position.x = dot(temp1, (proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, r1, c9\n    o.position.y = dot(temp1, (proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.w, r1, c11\n    o.position.w = dot(temp1, (proj_matrix._m03_m13_m23_m33));\n    // dp4 r0.x, r1, c10\n    temp0.x = dot(temp1, (proj_matrix._m02_m12_m22_m32));\n    // add o1.x, r0.x, c12.x\n    o.texcoord1 = temp0.x + camera_near_range.x;\n    // mov o0.z, r0.x\n    o.position.z = temp0.x;\n    // mad r0.xyz, v4, c13.x, c13.y\n    temp0.xyz = i.tangent.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 o3.x, r0, c0\n    o.texcoord2.x = dot(temp0.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 o4.x, r0, c1\n    o.texcoord3.x = dot(temp0.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o5.x, r0, c2\n    o.texcoord4.x = dot(temp0.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // mad r0.xyz, v5, c13.x, c13.y\n    temp0.xyz = i.binormal.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 o3.y, -r0, c0\n    o.texcoord2.y = dot(-temp0.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 o4.y, -r0, c1\n    o.texcoord3.y = dot(-temp0.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o5.y, -r0, c2\n    o.texcoord4.y = dot(-temp0.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // mad r0.xyz, v1, c13.x, c13.y\n    temp0.xyz = i.normal.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 o3.z, r0, c0\n    o.texcoord2.z = dot(temp0.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 o4.z, r0, c1\n    o.texcoord3.z = dot(temp0.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o5.z, r0, c2\n    o.texcoord4.z = dot(temp0.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // mov o2.xy, v3\n    o.texcoord.xy = i.texcoord.xy;\n    // mov o2.zw, v2.xyxy\n    o.texcoord.zw = i.texcoord1.xy;\n    // mul o7, c13.xxxz, v6\n    o.color = float4(2, 2, 2, 1) * i.color;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."),(0,o.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"sampler2D bump_normal_texture : register(ps_3_0, s4);\ncolumn_major float4x4 camera_world_matrix : register(ps_3_0, c0);\nsampler2D diffuse_layer0_texture : register(ps_3_0, s1);\nsampler2D diffuse_layer1_texture : register(ps_3_0, s2);\nsampler2D diffuse_texture : register(ps_3_0, s0);\nsampler2D material_texture : register(ps_3_0, s3);\nfloat2 ref_blend_control : register(ps_3_0, c3);\nsamplerCUBE reflection_texture : register(ps_3_0, s5);\nstruct PixelMain_Input\n{\n    float texcoord1 : TEXCOORD1;\n    float4 texcoord : TEXCOORD;\n    float3 texcoord2 : TEXCOORD2;\n    float3 texcoord3 : TEXCOORD3;\n    float3 texcoord4 : TEXCOORD4;\n    float3 texcoord5 : TEXCOORD5;\n    float4 color : COLOR;\n};\n\nstruct PixelMain_Output\n{\n    float4 color1 : COLOR1;\n    float4 color : COLOR;\n    float4 color2 : COLOR2;\n};\n\nPixelMain_Output PixelMain(PixelMain_Input i)\n{\n    PixelMain_Output o;\n    float4 temp0, temp1, temp2;\n    float3 temp3;\n    // def c4, -0.5, 1, 0.25, 7\n    // dcl_texcoord1 v0.x\n    // dcl_texcoord v1\n    // dcl_texcoord2 v2.xyz\n    // dcl_texcoord3 v3.xyz\n    // dcl_texcoord4 v4.xyz\n    // dcl_texcoord5 v5.xyz\n    // dcl_color_pp v6\n    // dcl_2d s0\n    // dcl_2d s1\n    // dcl_2d s2\n    // dcl_2d s3\n    // dcl_2d s4\n    // dcl_cube s5\n    // texld_pp r0, v1, s2\n    temp0 = /* not implemented _pp modifier */ tex2D(diffuse_layer1_texture, i.texcoord.xy);\n    // add_pp r0.x, r0.y, -v6.w\n    temp0.x = /* not implemented _pp modifier */ temp0.y + -i.color.w;\n    // rcp r0.y, c3.x\n    temp0.y = 1.0f / ref_blend_control.x;\n    // mul_sat_pp r0.x, r0.y, r0.x\n    ;// error\n    // texld_pp r1, v1, s0\n    temp1 = /* not implemented _pp modifier */ tex2D(diffuse_texture, i.texcoord.xy);\n    // texld_pp r2, v1.zwzw, s1\n    temp2 = /* not implemented _pp modifier */ tex2D(diffuse_layer0_texture, i.texcoord.zw);\n    // lrp_pp r3.xyz, r0.x, r1, r2\n    temp3.xyz = /* not implemented _pp modifier */ lerp(temp2.xyz, temp1.xyz, temp0.xxx);\n    // texld_pp r0, v1.zwzw, s4\n    temp0 = /* not implemented _pp modifier */ tex2D(bump_normal_texture, i.texcoord.zw);\n    // add_pp r0.xy, r0.wyzw, c4.x\n    temp0.xy = /* not implemented _pp modifier */ temp0.wy + float2(-0.5, -0.5);\n    // add_pp r0.xy, r0, r0\n    temp0.xy = /* not implemented _pp modifier */ temp0.xy + temp0.xy;\n    // mul_pp r0.w, r0.x, r0.x\n    temp0.w = /* not implemented _pp modifier */ temp0.x * temp0.x;\n    // mad_pp r0.w, r0.y, r0.y, -r0.w\n    temp0.w = /* not implemented _pp modifier */ temp0.y * temp0.y + -temp0.w;\n    // add_pp r0.w, -r0.w, c4.y\n    temp0.w = /* not implemented _pp modifier */ -temp0.w + float1(1);\n    // rsq_pp r0.w, r0.w\n    temp0.w = /* not implemented _pp modifier */ 1 / sqrt(temp0.w);\n    // rcp_pp r0.z, r0.w\n    temp0.z = /* not implemented _pp modifier */ 1.0f / temp0.w;\n    // dp3 r1.x, r0, v2\n    temp1.x = dot(temp0.xyz, i.texcoord2.xyz);\n    // dp3 r1.y, r0, v3\n    temp1.y = dot(temp0.xyz, i.texcoord3.xyz);\n    // dp3 r1.z, r0, v4\n    temp1.z = dot(temp0.xyz, i.texcoord4.xyz);\n    // nrm_pp r0.xyz, r1\n    temp0.xyz = /* not implemented _pp modifier */ normalize(temp1.xyz).xyz;\n    // add r1.x, c0.w, -v5.x\n    temp1.x = (camera_world_matrix._m00_m10_m20_m30).w + -i.texcoord5.x;\n    // add r1.y, c1.w, -v5.y\n    temp1.y = (camera_world_matrix._m01_m11_m21_m31).w + -i.texcoord5.y;\n    // add r1.z, c2.w, -v5.z\n    temp1.z = (camera_world_matrix._m02_m12_m22_m32).w + -i.texcoord5.z;\n    // nrm r2.xyz, r1\n    temp2.xyz = normalize(temp1.xyz).xyz;\n    // dp3 r0.w, r0, r2\n    temp0.w = dot(temp0.xyz, temp2.xyz);\n    // add r1.x, r0.w, r0.w\n    temp1.x = temp0.w + temp0.w;\n    // mov_sat r0.w, r0.w\n    temp0.w = saturate(temp0.w);\n    // add r0.w, -r0.w, c4.y\n    temp0.w = -temp0.w + float1(1);\n    // dp2add r0.w, r0.w, r0.w, c4.z\n    temp0.w = dot(temp0.ww, temp0.ww) + float1(0.25);\n    // mad r1.xyz, r1.x, -r0, r2\n    temp1.xyz = temp1.xxx * -temp0.xyz + temp2.xyz;\n    // mad_pp oC1.xyz, r0, -c4.x, -c4.x\n    o.color1.xyz = /* not implemented _pp modifier */ temp0.xyz * float3(0.5, 0.5, 0.5) + float3(0.5, 0.5, 0.5);\n    // texld_pp r2, v1, s3\n    temp2 = /* not implemented _pp modifier */ tex2D(material_texture, i.texcoord.xy);\n    // add r0.x, -r2.x, c4.y\n    temp0.x = -temp2.x + float1(1);\n    // mul r0.x, r0.x, c4.w\n    temp0.x = temp0.x * float1(7);\n    // frc r0.y, r0.x\n    temp0.y = frac(temp0.x);\n    // add r1.w, -r0.y, r0.x\n    temp1.w = -temp0.y + temp0.x;\n    // texldl r1, r1, s5\n    temp1 = texCUBElod(reflection_texture, temp1);\n    // mul r0.x, r0.w, r2.y\n    temp0.x = temp0.w * temp2.y;\n    // mul r0.xyz, r0.x, r1\n    temp0.xyz = temp0.xxx * temp1.xyz;\n    // mul r0.xyz, r2.z, r0\n    temp0.xyz = temp2.zzz * temp0.xyz;\n    // mad_pp oC0.xyz, r3, v6, r0\n    o.color.xyz = /* not implemented _pp modifier */ temp3.xyz * i.color.xyz + temp0.xyz;\n    // mov_pp oC0.w, r2.x\n    o.color.w = /* not implemented _pp modifier */ temp2.x;\n    // mov_pp oC1.w, r2.y\n    o.color1.w = /* not implemented _pp modifier */ temp2.y;\n    // mov oC2, v0.x\n    o.color2 = i.texcoord1.x;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."))}x.isMDXComponent=!0}}]);