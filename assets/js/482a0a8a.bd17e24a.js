"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[68589],{603905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>s});var r=n(667294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},m=Object.keys(e);for(r=0;r<m.length;r++)n=m[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(r=0;r<m.length;r++)n=m[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},i=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},_="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},x=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,m=e.originalType,d=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),_=l(n),x=o,s=_["".concat(d,".").concat(x)]||_[x]||c[x]||m;return n?r.createElement(s,a(a({ref:t},i),{},{components:n})):r.createElement(s,a({ref:t},i))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var m=n.length,a=new Array(m);a[0]=x;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p[_]="string"==typeof e?e:o,a[1]=p;for(var l=2;l<m;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}x.displayName="MDXCreateElement"},74759:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>m,metadata:()=>p,toc:()=>l});var r=n(487462),o=(n(667294),n(603905));const m={id:0x4febf5e972e03800,title:"Generic Default Alpha Masked Diffuse Texture Double Sided External Alpha Ref Normalmap Opacity Texture Vegetation Bending"},a="Generic Default Alpha Masked Diffuse Texture Double Sided External Alpha Ref Normalmap Opacity Texture Vegetation Bending",p={unversionedId:"Generated/Shaders/Base/[1500-1600]/5758966931526793000",id:"Generated/Shaders/Base/[1500-1600]/5758966931526793000",title:"Generic Default Alpha Masked Diffuse Texture Double Sided External Alpha Ref Normalmap Opacity Texture Vegetation Bending",description:"(genericALPHAMASKEDDOUBLESIDEDNORMALMAPVEGETATION_BENDING, 0x4febf5e972e03607)",source:"@site/docs/Generated/Shaders/Base/[1500-1600]/0x4febf5e972e03607.mdx",sourceDirName:"Generated/Shaders/Base/[1500-1600]",slug:"/Generated/Shaders/Base/[1500-1600]/5758966931526793000",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[1500-1600]/5758966931526793000",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/Generated/Shaders/Base/[1500-1600]/0x4febf5e972e03607.mdx",tags:[],version:"current",frontMatter:{id:"5758966931526793000",title:"Generic Default Alpha Masked Diffuse Texture Double Sided External Alpha Ref Normalmap Opacity Texture Vegetation Bending"},sidebar:"docsSidebar",previous:{title:"Generic Shadow Caster Ati Diffuse Texture Skinned 1weight Vertex Color",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[1500-1600]/5757878418257759000"},next:{title:"Generic Default Cube Environment Mapping Diffuse Texture Gsma Texture Normalmap Self Illumination Self Illumination Bloom Skinned 3weights",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[1500-1600]/5764760171726601000"}},d={},l=[{value:"Technique <code>deferred_ambient_alpha_masked</code>",id:"technique-deferred_ambient_alpha_masked",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Sampler 1",id:"sampler-1",level:4},{value:"Sampler 2",id:"sampler-2",level:4},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],i={toc:l},_="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(_,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"generic-default-alpha-masked-diffuse-texture-double-sided-external-alpha-ref-normalmap-opacity-texture-vegetation-bending"},"Generic Default Alpha Masked Diffuse Texture Double Sided External Alpha Ref Normalmap Opacity Texture Vegetation Bending"),(0,o.kt)("p",null,"(",(0,o.kt)("inlineCode",{parentName:"p"},"generic:default:ALPHA_MASKED:DIFFUSE_TEXTURE:DOUBLE_SIDED:EXTERNAL_ALPHA_REF:NORMALMAP:OPACITY_TEXTURE:VEGETATION_BENDING"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"0x4febf5e972e03607"),")"),(0,o.kt)("p",null,"This template is referenced 1 time by ",(0,o.kt)("a",{parentName:"p",href:"/docs/Generated/Render%20Templates/base.render_template_database#generic-alpha-masked-diffuse-texture-double-sided-external-alpha-ref-normalmap-opacity-texture-vegetation-bending"},"generic:ALPHA_MASKED:DIFFUSE_TEXTURE:DOUBLE_SIDED:EXTERNAL_ALPHA_REF:NORMALMAP:OPACITY_TEXTURE:VEGETATION_BENDING"),".\nThis template uses the following inputs:\n|Name|UI Name|Type|\n|---|---|---|\n|diffuse_texture|Diffuse Texture (UV1)|texture|\n|bump_normal_texture|Normal map (UV2 else UV1)|texture|\n|opacity_texture|Alpha Mask (UV5)|texture|\n|speed|Speed|scalar|\n|detail_settings|Detail Bending Amplitude / Frequency|vector3|\n|branch_settings|Branch Bending Amplitude / Frequency|vector3|\n|alpha_ref|Alpha Mask Reference|scalar|."),(0,o.kt)("h3",{id:"technique-deferred_ambient_alpha_masked"},"Technique ",(0,o.kt)("inlineCode",{parentName:"h3"},"deferred_ambient_alpha_masked")),(0,o.kt)("h3",{id:"render-states"},"Render States"),(0,o.kt)("p",null,"More info can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3drenderstatetype"},"Direct3D Docs")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 1,\n    D3DRS_ALPHABLENDENABLE = 0,\n    D3DRS_CULLMODE = 1,\n    D3DRS_COLORWRITEENABLE = 15,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n};\n")),(0,o.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,o.kt)("p",null,"More info can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3dsamplerstatetype"},"Direct3D Docs")),(0,o.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h4",{id:"sampler-1"},"Sampler 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h4",{id:"sampler-2"},"Sampler 2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 2,\n    D3DSAMP_MINFILTER = 2,\n    D3DSAMP_MIPFILTER = 2,\n};\n")),(0,o.kt)("h3",{id:"shaders"},"Shaders"),(0,o.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"float camera_near_range : register(vs_3_0, c12);\ncolumn_major float4x4 proj_matrix : register(vs_3_0, c8);\nfloat3 ref_branch_settings : register(vs_3_0, c16);\nfloat3 ref_detail_settings : register(vs_3_0, c15);\nfloat ref_speed : register(vs_3_0, c14);\nfloat ref_time : register(vs_3_0, c13);\ncolumn_major float4x4 view_matrix : register(vs_3_0, c4);\ncolumn_major float4x4 world_matrix : register(vs_3_0, c0);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 normal : NORMAL;\n    float4 texcoord1 : TEXCOORD1;\n    float4 texcoord : TEXCOORD;\n    float4 texcoord4 : TEXCOORD4;\n    float4 tangent : TANGENT;\n    float4 binormal : BINORMAL;\n    float4 color : COLOR;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float texcoord1 : TEXCOORD1;\n    float4 texcoord : TEXCOORD;\n    float3 texcoord2 : TEXCOORD2;\n    float3 texcoord3 : TEXCOORD3;\n    float3 texcoord4 : TEXCOORD4;\n    float3 texcoord5 : TEXCOORD5;\n    float2 texcoord7 : TEXCOORD7;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float4 temp0, temp1, temp4;\n    float3 temp2, temp3;\n    // def c17, 2, -1, 1, -0.5\n    // def c18, 1.975, 0.793, 0.375, 0.193\n    // def c19, 2, 3, 0, 0\n    // dcl_position v0\n    // dcl_normal v1\n    // dcl_texcoord1 v2\n    // dcl_texcoord v3\n    // dcl_texcoord4 v4\n    // dcl_tangent v5\n    // dcl_binormal v6\n    // dcl_color v7\n    // dcl_position o0\n    // dcl_texcoord1 o1.x\n    // dcl_texcoord o2\n    // dcl_texcoord2 o3.xyz\n    // dcl_texcoord3 o4.xyz\n    // dcl_texcoord4 o5.xyz\n    // dcl_texcoord5 o6.xyz\n    // dcl_texcoord7 o7.xy\n    // mov r0.x, c0.w\n    temp0.x = (world_matrix._m00_m10_m20_m30).w;\n    // mov r0.y, c1.w\n    temp0.y = (world_matrix._m01_m11_m21_m31).w;\n    // mov r0.z, c2.w\n    temp0.z = (world_matrix._m02_m12_m22_m32).w;\n    // dp3 r0.x, r0, c17.z\n    temp0.x = dot(temp0.xyz, float3(1, 1, 1));\n    // add r0.x, r0.x, v7.y\n    temp0.x = temp0.x + i.color.y;\n    // add r0.x, r0.x, c13.x\n    temp0.x = temp0.x + ref_time.x;\n    // mul r0.zw, r0.x, c16.y\n    temp0.zw = temp0.x * ref_branch_settings.y;\n    // add r1.x, c13.x, v7.y\n    temp1.x = ref_time.x + i.color.y;\n    // mul r0.xy, r1.x, c15.y\n    temp0.xy = temp1.x * ref_detail_settings.y;\n    // mul r0, r0, c14.x\n    temp0 = temp0 * ref_speed.x;\n    // mul r0, r0, c18\n    temp0 = temp0 * float4(1.975, 0.793, 0.375, 0.193);\n    // frc r0, r0\n    temp0 = frac(temp0);\n    // mad r0, r0, c17.x, c17.w\n    temp0 = temp0 * float4(2, 2, 2, 2) + float4(-0.5, -0.5, -0.5, -0.5);\n    // frc r0, r0\n    temp0 = frac(temp0);\n    // mad r0, r0, c17.x, c17.y\n    temp0 = temp0 * float4(2, 2, 2, 2) + float4(-1, -1, -1, -1);\n    // mul r1, r0_abs, r0_abs\n    temp1 = abs(temp0) * abs(temp0);\n    // mad r0, r0_abs, -c19.x, c19.y\n    temp0 = abs(temp0) * float4(-2, -2, -2, -2) + float4(3, 3, 3, 3);\n    // mul r0, r0, r1\n    temp0 = temp0 * temp1;\n    // add r0.xyz, r0.yyww, r0.xxzw\n    temp0.xyz = temp0.yyw + temp0.xxz;\n    // dp4 r1.x, v0, c0\n    temp1.x = dot(i.position, (world_matrix._m00_m10_m20_m30));\n    // dp4 r1.y, v0, c1\n    temp1.y = dot(i.position, (world_matrix._m01_m11_m21_m31));\n    // dp4 r1.z, v0, c2\n    temp1.z = dot(i.position, (world_matrix._m02_m12_m22_m32));\n    // mul r2.z, c16.x, v7.z\n    temp2.z = ref_branch_settings.x * i.color.z;\n    // mul r0.w, v7.z, v7.x\n    temp0.w = i.color.z * i.color.x;\n    // mul r0.w, r0.w, c15.x\n    temp0.w = temp0.w * ref_detail_settings.x;\n    // mad r3.xyz, v1, c17.x, c17.y\n    temp3.xyz = i.normal.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 r4.z, r3, c0\n    temp4.z = dot(temp3.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 r4.w, r3, c1\n    temp4.w = dot(temp3.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o5.z, r3, c2\n    o.texcoord4.z = dot(temp3.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // mul r2.xy, r0.w, r4.zwzw\n    temp2.xy = temp0.ww * temp4.zw;\n    // mov o4.z, r4.w\n    o.texcoord3.z = temp4.w;\n    // mad r0.xyz, r0, r2, r1\n    temp0.xyz = temp0.xyz * temp2.xyz + temp1.xyz;\n    // dp4 r0.w, v0, c3\n    temp0.w = dot(i.position, (world_matrix._m03_m13_m23_m33));\n    // dp4 r1.x, r0, c4\n    temp1.x = dot(temp0, (view_matrix._m00_m10_m20_m30));\n    // dp4 r1.y, r0, c5\n    temp1.y = dot(temp0, (view_matrix._m01_m11_m21_m31));\n    // dp4 r1.z, r0, c6\n    temp1.z = dot(temp0, (view_matrix._m02_m12_m22_m32));\n    // dp4 r1.w, r0, c7\n    temp1.w = dot(temp0, (view_matrix._m03_m13_m23_m33));\n    // mov o6.xyz, r0\n    o.texcoord5 = temp0;\n    // dp4 o0.x, r1, c8\n    o.position.x = dot(temp1, (proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, r1, c9\n    o.position.y = dot(temp1, (proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.w, r1, c11\n    o.position.w = dot(temp1, (proj_matrix._m03_m13_m23_m33));\n    // dp4 r0.x, r1, c10\n    temp0.x = dot(temp1, (proj_matrix._m02_m12_m22_m32));\n    // add o1.x, r0.x, c12.x\n    o.texcoord1 = temp0.x + camera_near_range.x;\n    // mov o0.z, r0.x\n    o.position.z = temp0.x;\n    // mad r0.xyz, v5, c17.x, c17.y\n    temp0.xyz = i.tangent.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 o4.x, r0, c1\n    o.texcoord3.x = dot(temp0.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o5.x, r0, c2\n    o.texcoord4.x = dot(temp0.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // dp3 r4.x, r0, c0\n    temp4.x = dot(temp0.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // mad r0.xyz, v6, c17.x, c17.y\n    temp0.xyz = i.binormal.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 o4.y, -r0, c1\n    o.texcoord3.y = dot(-temp0.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o5.y, -r0, c2\n    o.texcoord4.y = dot(-temp0.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // dp3 r4.y, -r0, c0\n    temp4.y = dot(-temp0.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // mov o3.xyz, r4\n    o.texcoord2 = temp4;\n    // mov o2.xy, v3\n    o.texcoord.xy = i.texcoord.xy;\n    // mov o2.zw, v2.xyxy\n    o.texcoord.zw = i.texcoord1.xy;\n    // mov o7.xy, v4\n    o.texcoord7 = i.texcoord4;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."),(0,o.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"sampler2D bump_normal_texture : register(ps_3_0, s1);\nsampler2D diffuse_texture : register(ps_3_0, s0);\nsampler2D opacity_texture : register(ps_3_0, s2);\nfloat ref_alpha_ref : register(ps_3_0, c0);\nstruct PixelMain_Input\n{\n    float texcoord1 : TEXCOORD1;\n    float4 texcoord : TEXCOORD;\n    float3 texcoord2 : TEXCOORD2;\n    float3 texcoord3 : TEXCOORD3;\n    float3 texcoord4 : TEXCOORD4;\n    float2 texcoord7 : TEXCOORD7;\n    float4 vpos : vPos;\n};\n\nstruct PixelMain_Output\n{\n    float4 color1 : COLOR1;\n    float4 color : COLOR;\n    float4 color2 : COLOR2;\n};\n\nPixelMain_Output PixelMain(PixelMain_Input i)\n{\n    PixelMain_Output o;\n    float4 temp0;\n    float3 temp1;\n    // def c1, 1, -1, -0.5, 0.5\n    // def c2, 0.4, 0, 0, 0\n    // dcl_texcoord1 v0.x\n    // dcl_texcoord v1\n    // dcl_texcoord2 v2.xyz\n    // dcl_texcoord3 v3.xyz\n    // dcl_texcoord4 v4.xyz\n    // dcl_texcoord7 v5.xy\n    // dcl vPos\n    // dcl_2d s0\n    // dcl_2d s1\n    // dcl_2d s2\n    // texld_pp r0, v5, s2\n    temp0 = /* not implemented _pp modifier */ tex2D(opacity_texture, i.texcoord7.xy);\n    // add r0.x, r0.x, -c0.x\n    temp0.x = temp0.x + -ref_alpha_ref.x;\n    // cmp r0, r0.x, c1.x, c1.y\n    temp0 = (temp0.x >= 0) ? float4(1, 1, 1, 1) : float4(-1, -1, -1, -1);\n    // texkill r0\n    clip(temp0);\n    // texld_pp r0, v1.zwzw, s1\n    temp0 = /* not implemented _pp modifier */ tex2D(bump_normal_texture, i.texcoord.zw);\n    // add_pp r0.xy, r0.wyzw, c1.z\n    temp0.xy = /* not implemented _pp modifier */ temp0.wy + float2(-0.5, -0.5);\n    // add_pp r0.xy, r0, r0\n    temp0.xy = /* not implemented _pp modifier */ temp0.xy + temp0.xy;\n    // mul_pp r0.w, r0.x, r0.x\n    temp0.w = /* not implemented _pp modifier */ temp0.x * temp0.x;\n    // mad_pp r0.w, r0.y, r0.y, -r0.w\n    temp0.w = /* not implemented _pp modifier */ temp0.y * temp0.y + -temp0.w;\n    // add_pp r0.w, -r0.w, c1.x\n    temp0.w = /* not implemented _pp modifier */ -temp0.w + float1(1);\n    // rsq_pp r0.w, r0.w\n    temp0.w = /* not implemented _pp modifier */ 1 / sqrt(temp0.w);\n    // rcp_pp r0.z, r0.w\n    temp0.z = /* not implemented _pp modifier */ 1.0f / temp0.w;\n    // dp3 r1.x, r0, v2\n    temp1.x = dot(temp0.xyz, i.texcoord2.xyz);\n    // dp3 r1.y, r0, v3\n    temp1.y = dot(temp0.xyz, i.texcoord3.xyz);\n    // dp3 r1.z, r0, v4\n    temp1.z = dot(temp0.xyz, i.texcoord4.xyz);\n    // nrm_pp r0.xyz, r1\n    temp0.xyz = /* not implemented _pp modifier */ normalize(temp1.xyz).xyz;\n    // cmp r0.w, vPos, c1.x, c1.y\n    temp0.w = (vPos.w >= 0) ? float1(1) : float1(-1);\n    // cmp_pp r0.xyz, -r0.w, r0, -r0\n    temp0.xyz = /* not implemented _pp modifier */ (-temp0.www >= 0) ? temp0.xyz : -temp0.xyz;\n    // nrm_pp r1.xyz, r0\n    temp1.xyz = /* not implemented _pp modifier */ normalize(temp0.xyz).xyz;\n    // mad_pp oC1.xyz, r1, c1.w, c1.w\n    o.color1.xyz = /* not implemented _pp modifier */ temp1.xyz * float3(0.5, 0.5, 0.5) + float3(0.5, 0.5, 0.5);\n    // texld_pp r0, v1, s0\n    temp0 = /* not implemented _pp modifier */ tex2D(diffuse_texture, i.texcoord.xy);\n    // mov_pp oC0.xyz, r0\n    o.color.xyz = /* not implemented _pp modifier */ temp0.xyz;\n    // mov_pp oC1.w, r0.w\n    o.color1.w = /* not implemented _pp modifier */ temp0.w;\n    // mov oC0.w, c2.x\n    o.color.w = float1(0.4);\n    // mov oC2, v0.x\n    o.color2 = i.texcoord1.x;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."))}c.isMDXComponent=!0}}]);