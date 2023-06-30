"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[87725],{603905:(e,n,t)=>{t.d(n,{Zo:()=>i,kt:()=>x});var r=t(667294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=r.createContext({}),p=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},i=function(e){var n=p(e.components);return r.createElement(m.Provider,{value:n},e.children)},_="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,m=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),_=p(t),s=o,x=_["".concat(m,".").concat(s)]||_[s]||c[s]||a;return t?r.createElement(x,l(l({ref:n},i),{},{components:t})):r.createElement(x,l({ref:n},i))}));function x(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=s;var d={};for(var m in n)hasOwnProperty.call(n,m)&&(d[m]=n[m]);d.originalType=e,d[_]="string"==typeof e?e:o,l[1]=d;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},644057:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var r=t(487462),o=(t(667294),t(603905));const a={id:0xb1112dd239cab000,title:"Generic Default Blend Diffuse Blend Diffuse Uv2 Blend Mask Control Blend Mask D A Blend Normal Blend Normal Uv2 Diffuse Texture Gsma Texture Normalmap"},l="Generic Default Blend Diffuse Blend Diffuse Uv2 Blend Mask Control Blend Mask D A Blend Normal Blend Normal Uv2 Diffuse Texture Gsma Texture Normalmap",d={unversionedId:"Generated/Shaders/Base/[3300-3400]/12759029600253293000",id:"Generated/Shaders/Base/[3300-3400]/12759029600253293000",title:"Generic Default Blend Diffuse Blend Diffuse Uv2 Blend Mask Control Blend Mask D A Blend Normal Blend Normal Uv2 Diffuse Texture Gsma Texture Normalmap",description:"(genericBLENDDIFFUSEBLENDMASKCONTROLBLENDNORMALDIFFUSETEXTURENORMALMAP, 0xb1112dd239cab3aa)",source:"@site/docs/Generated/Shaders/Base/[3300-3400]/0xb1112dd239cab3aa.mdx",sourceDirName:"Generated/Shaders/Base/[3300-3400]",slug:"/Generated/Shaders/Base/[3300-3400]/12759029600253293000",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[3300-3400]/12759029600253293000",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/Generated/Shaders/Base/[3300-3400]/0xb1112dd239cab3aa.mdx",tags:[],version:"current",frontMatter:{id:"12759029600253293000",title:"Generic Default Blend Diffuse Blend Diffuse Uv2 Blend Mask Control Blend Mask D A Blend Normal Blend Normal Uv2 Diffuse Texture Gsma Texture Normalmap"},sidebar:"docsSidebar",previous:{title:"Generic Shadow Caster Alpha Masked Depth Scaling Diffuse Texture Double Sided External Alpha Ref Normalmap Nvidia",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[3300-3400]/12757607425006236000"},next:{title:"Generic Shadow Caster Ati Blend Diffuse Blend Gsma Blend Mask Control Blend Mask Crossblend Blend Normal Cube Environment Mapping Diffuse Texture Gloss Blurs Cubemap Gsma Texture Normalmap Vertex Color",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[3300-3400]/12766257766647175000"}},m={},p=[{value:"Technique <code>deferred_ambient</code>",id:"technique-deferred_ambient",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Sampler 1",id:"sampler-1",level:4},{value:"Sampler 2",id:"sampler-2",level:4},{value:"Sampler 3",id:"sampler-3",level:4},{value:"Sampler 4",id:"sampler-4",level:4},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],i={toc:p},_="wrapper";function c(e){let{components:n,...t}=e;return(0,o.kt)(_,(0,r.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"generic-default-blend-diffuse-blend-diffuse-uv2-blend-mask-control-blend-mask-d-a-blend-normal-blend-normal-uv2-diffuse-texture-gsma-texture-normalmap"},"Generic Default Blend Diffuse Blend Diffuse Uv2 Blend Mask Control Blend Mask D A Blend Normal Blend Normal Uv2 Diffuse Texture Gsma Texture Normalmap"),(0,o.kt)("p",null,"(",(0,o.kt)("inlineCode",{parentName:"p"},"generic:default:BLEND_DIFFUSE:BLEND_DIFFUSE_UV2:BLEND_MASK_CONTROL:BLEND_MASK_D_A:BLEND_NORMAL:BLEND_NORMAL_UV2:DIFFUSE_TEXTURE:GSMA_TEXTURE:NORMALMAP"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"0xb1112dd239cab3aa"),")"),(0,o.kt)("p",null,"This template is referenced 1 time by ",(0,o.kt)("a",{parentName:"p",href:"/docs/Generated/Render%20Templates/base.render_template_database#generic-blend-diffuse-blend-diffuse-uv2-blend-mask-control-blend-mask-d-a-blend-normal-blend-normal-uv2-diffuse-texture-gsma-texture-normalmap"},"generic:BLEND_DIFFUSE:BLEND_DIFFUSE_UV2:BLEND_MASK_CONTROL:BLEND_MASK_D_A:BLEND_NORMAL:BLEND_NORMAL_UV2:DIFFUSE_TEXTURE:GSMA_TEXTURE:NORMALMAP"),".\nThis template uses the following inputs:\n|Name|UI Name|Type|\n|---|---|---|\n|diffuse_texture|Diffuse Texture (UV1)|texture|\n|diffuse_layer0_texture|Second diffuse (Shifted UV1)|texture|\n|material_texture|Gloss-Spec-Material-Alpha Texture (GSMA)|texture|\n|bump_normal_texture|Normal map (UV2 else UV1)|texture|\n|normal_layer0_texture|Second normal map (UV1)|texture|\n|blend_control|Blending Smoothing, Blend mask Bias|vector3|."),(0,o.kt)("h3",{id:"technique-deferred_ambient"},"Technique ",(0,o.kt)("inlineCode",{parentName:"h3"},"deferred_ambient")),(0,o.kt)("h3",{id:"render-states"},"Render States"),(0,o.kt)("p",null,"More info can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3drenderstatetype"},"Direct3D Docs")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 1,\n    D3DRS_ALPHABLENDENABLE = 0,\n    D3DRS_CULLMODE = 2,\n    D3DRS_COLORWRITEENABLE = 15,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n};\n")),(0,o.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,o.kt)("p",null,"More info can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3dsamplerstatetype"},"Direct3D Docs")),(0,o.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h4",{id:"sampler-1"},"Sampler 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h4",{id:"sampler-2"},"Sampler 2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h4",{id:"sampler-3"},"Sampler 3"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h4",{id:"sampler-4"},"Sampler 4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h3",{id:"shaders"},"Shaders"),(0,o.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"float camera_near_range : register(vs_3_0, c7);\ncolumn_major float4x4 view_proj_matrix : register(vs_3_0, c0);\ncolumn_major float4x4 world_matrix : register(vs_3_0, c4);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 normal : NORMAL;\n    float4 texcoord1 : TEXCOORD1;\n    float4 texcoord : TEXCOORD;\n    float4 tangent : TANGENT;\n    float4 binormal : BINORMAL;\n    float4 color : COLOR;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float texcoord1 : TEXCOORD1;\n    float4 texcoord : TEXCOORD;\n    float3 texcoord2 : TEXCOORD2;\n    float3 texcoord3 : TEXCOORD3;\n    float3 texcoord4 : TEXCOORD4;\n    float4 color : COLOR;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float3 temp0;\n    // def c8, 2, -1, 1, 0\n    // dcl_position v0\n    // dcl_normal v1\n    // dcl_texcoord1 v2\n    // dcl_texcoord v3\n    // dcl_tangent v4\n    // dcl_binormal v5\n    // dcl_color v6\n    // dcl_position o0\n    // dcl_texcoord1 o1.x\n    // dcl_texcoord o2\n    // dcl_texcoord2 o3.xyz\n    // dcl_texcoord3 o4.xyz\n    // dcl_texcoord4 o5.xyz\n    // dcl_color o6\n    // dp4 o0.x, v0, c0\n    o.position.x = dot(i.position, (view_proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, v0, c1\n    o.position.y = dot(i.position, (view_proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.w, v0, c3\n    o.position.w = dot(i.position, (view_proj_matrix._m03_m13_m23_m33));\n    // dp4 r0.x, v0, c2\n    temp0.x = dot(i.position, (view_proj_matrix._m02_m12_m22_m32));\n    // add o1.x, r0.x, c7.x\n    o.texcoord1 = temp0.x + camera_near_range.x;\n    // mov o0.z, r0.x\n    o.position.z = temp0.x;\n    // mad r0.xyz, v4, c8.x, c8.y\n    temp0.xyz = i.tangent.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 o3.x, r0, c4\n    o.texcoord2.x = dot(temp0.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 o4.x, r0, c5\n    o.texcoord3.x = dot(temp0.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o5.x, r0, c6\n    o.texcoord4.x = dot(temp0.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // mad r0.xyz, v5, c8.x, c8.y\n    temp0.xyz = i.binormal.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 o3.y, -r0, c4\n    o.texcoord2.y = dot(-temp0.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 o4.y, -r0, c5\n    o.texcoord3.y = dot(-temp0.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o5.y, -r0, c6\n    o.texcoord4.y = dot(-temp0.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // mad r0.xyz, v1, c8.x, c8.y\n    temp0.xyz = i.normal.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 o3.z, r0, c4\n    o.texcoord2.z = dot(temp0.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 o4.z, r0, c5\n    o.texcoord3.z = dot(temp0.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o5.z, r0, c6\n    o.texcoord4.z = dot(temp0.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // mov o2.xy, v3\n    o.texcoord.xy = i.texcoord.xy;\n    // mov o2.zw, v2.xyxy\n    o.texcoord.zw = i.texcoord1.xy;\n    // mul o6, c8.xxxz, v6\n    o.color = float4(2, 2, 2, 1) * i.color;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."),(0,o.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"sampler2D bump_normal_texture : register(ps_3_0, s3);\nsampler2D diffuse_layer0_texture : register(ps_3_0, s1);\nsampler2D diffuse_texture : register(ps_3_0, s0);\nsampler2D material_texture : register(ps_3_0, s2);\nsampler2D normal_layer0_texture : register(ps_3_0, s4);\nfloat2 ref_blend_control : register(ps_3_0, c0);\nstruct PixelMain_Input\n{\n    float texcoord1 : TEXCOORD1;\n    float4 texcoord : TEXCOORD;\n    float3 texcoord2 : TEXCOORD2;\n    float3 texcoord3 : TEXCOORD3;\n    float3 texcoord4 : TEXCOORD4;\n    float4 color : COLOR;\n};\n\nstruct PixelMain_Output\n{\n    float4 color : COLOR;\n    float4 color1 : COLOR1;\n    float4 color2 : COLOR2;\n};\n\nPixelMain_Output PixelMain(PixelMain_Input i)\n{\n    PixelMain_Output o;\n    float4 temp0, temp1, temp2;\n    // def c1, -0.5, 2, 1, 0.5\n    // dcl_texcoord1 v0.x\n    // dcl_texcoord v1\n    // dcl_texcoord2 v2.xyz\n    // dcl_texcoord3 v3.xyz\n    // dcl_texcoord4 v4.xyz\n    // dcl_color_pp v5.w\n    // dcl_2d s0\n    // dcl_2d s1\n    // dcl_2d s2\n    // dcl_2d s3\n    // dcl_2d s4\n    // texld_pp r0, v1, s0\n    temp0 = /* not implemented _pp modifier */ tex2D(diffuse_texture, i.texcoord.xy);\n    // texld_pp r1, v1.zwzw, s1\n    temp1 = /* not implemented _pp modifier */ tex2D(diffuse_layer0_texture, i.texcoord.zw);\n    // add_pp r0.xyz, r0, -r1\n    temp0.xyz = /* not implemented _pp modifier */ temp0.xyz + -temp1.xyz;\n    // add_pp r0.w, r1.w, -v5.w\n    temp0.w = /* not implemented _pp modifier */ temp1.w + -i.color.w;\n    // rcp r1.w, c0.x\n    temp1.w = 1.0f / ref_blend_control.x;\n    // mul_sat_pp r0.w, r0.w, r1.w\n    ;// error\n    // mad_pp oC0.xyz, r0.w, r0, r1\n    o.color.xyz = /* not implemented _pp modifier */ temp0.www * temp0.xyz + temp1.xyz;\n    // texld r1, v1, s3\n    temp1 = tex2D(bump_normal_texture, i.texcoord.xy);\n    // mov r1.xy, r1.wyzw\n    temp1.xy = temp1.wy;\n    // texld r2, v1.zwzw, s4\n    temp2 = tex2D(normal_layer0_texture, i.texcoord.zw);\n    // mov r1.zw, r2.xywy\n    temp1.zw = temp2.wy;\n    // add r1, r1, c1.x\n    temp1 = temp1 + float4(-0.5, -0.5, -0.5, -0.5);\n    // add r0.xy, r1.zwzw, r1.zwzw\n    temp0.xy = temp1.zw + temp1.zw;\n    // mad r1.xy, r1, c1.y, -r0\n    temp1.xy = temp1.xy * float2(2, 2) + -temp0.xy;\n    // mad r0.xy, r0.w, r1, r0\n    temp0.xy = temp0.ww * temp1.xy + temp0.xy;\n    // mul r0.w, r0.x, r0.x\n    temp0.w = temp0.x * temp0.x;\n    // mad r0.w, r0.y, r0.y, -r0.w\n    temp0.w = temp0.y * temp0.y + -temp0.w;\n    // add r0.w, -r0.w, c1.z\n    temp0.w = -temp0.w + float1(1);\n    // rsq r0.w, r0.w\n    temp0.w = 1 / sqrt(temp0.w);\n    // rcp r0.z, r0.w\n    temp0.z = 1.0f / temp0.w;\n    // dp3 r1.x, r0, v2\n    temp1.x = dot(temp0.xyz, i.texcoord2.xyz);\n    // dp3 r1.y, r0, v3\n    temp1.y = dot(temp0.xyz, i.texcoord3.xyz);\n    // dp3 r1.z, r0, v4\n    temp1.z = dot(temp0.xyz, i.texcoord4.xyz);\n    // nrm_pp r0.xyz, r1\n    temp0.xyz = /* not implemented _pp modifier */ normalize(temp1.xyz).xyz;\n    // mad_pp oC1.xyz, r0, c1.w, c1.w\n    o.color1.xyz = /* not implemented _pp modifier */ temp0.xyz * float3(0.5, 0.5, 0.5) + float3(0.5, 0.5, 0.5);\n    // texld_pp r0, v1, s2\n    temp0 = /* not implemented _pp modifier */ tex2D(material_texture, i.texcoord.xy);\n    // mov_pp oC0.w, r0.x\n    o.color.w = /* not implemented _pp modifier */ temp0.x;\n    // mov_pp oC1.w, r0.y\n    o.color1.w = /* not implemented _pp modifier */ temp0.y;\n    // mov oC2, v0.x\n    o.color2 = i.texcoord1.x;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."))}c.isMDXComponent=!0}}]);