"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[52409],{603905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>s});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},i=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},x="mdxType",_={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,i=m(e,["components","mdxType","originalType","parentName"]),x=l(r),c=o,s=x["".concat(p,".").concat(c)]||x[c]||_[c]||a;return r?n.createElement(s,d(d({ref:t},i),{},{components:r})):n.createElement(s,d({ref:t},i))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,d=new Array(a);d[0]=c;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m[x]="string"==typeof e?e:o,d[1]=m;for(var l=2;l<a;l++)d[l]=r[l];return n.createElement.apply(null,d)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},750316:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>_,frontMatter:()=>a,metadata:()=>m,toc:()=>l});var n=r(487462),o=(r(667294),r(603905));const a={id:0x22a2df63198d1c00,title:"Generic Default Alpha Masked Diffuse Texture Double Sided External Alpha Ref Instanced Normalmap"},d="Generic Default Alpha Masked Diffuse Texture Double Sided External Alpha Ref Instanced Normalmap",m={unversionedId:"Generated/Shaders/Base/[600-700]/2495802760240110600",id:"Generated/Shaders/Base/[600-700]/2495802760240110600",title:"Generic Default Alpha Masked Diffuse Texture Double Sided External Alpha Ref Instanced Normalmap",description:"(genericALPHAMASKEDDOUBLESIDEDINSTANCED:NORMALMAP, 0x22a2df63198d1bb2)",source:"@site/docs/Generated/Shaders/Base/[600-700]/0x22a2df63198d1bb2.mdx",sourceDirName:"Generated/Shaders/Base/[600-700]",slug:"/Generated/Shaders/Base/[600-700]/2495802760240110600",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[600-700]/2495802760240110600",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/Generated/Shaders/Base/[600-700]/0x22a2df63198d1bb2.mdx",tags:[],version:"current",frontMatter:{id:"2495802760240110600",title:"Generic Default Alpha Masked Diffuse Texture Double Sided External Alpha Ref Instanced Normalmap"},sidebar:"docsSidebar",previous:{title:"Generic Shadow Caster Alpha Masked Cube Environment Mapping Diffuse Texture External Alpha Ref Gloss Blurs Cubemap Gsma Texture Normalmap Opacity Texture Rl Civilians Skinned 3weights",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[600-700]/2490384162555372000"},next:{title:"Generic Default Alpha Masked Diffuse Texture External Alpha Ref Opacity Texture Rl Civilians Skinned 3weights Vertex Color Vertex Color Character",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[600-700]/2497488821142946000"}},p={},l=[{value:"Technique <code>deferred_ambient_alpha_masked</code>",id:"technique-deferred_ambient_alpha_masked",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Sampler 1",id:"sampler-1",level:4},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],i={toc:l},x="wrapper";function _(e){let{components:t,...r}=e;return(0,o.kt)(x,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"generic-default-alpha-masked-diffuse-texture-double-sided-external-alpha-ref-instanced-normalmap"},"Generic Default Alpha Masked Diffuse Texture Double Sided External Alpha Ref Instanced Normalmap"),(0,o.kt)("p",null,"(",(0,o.kt)("inlineCode",{parentName:"p"},"generic:default:ALPHA_MASKED:DIFFUSE_TEXTURE:DOUBLE_SIDED:EXTERNAL_ALPHA_REF:INSTANCED:NORMALMAP"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"0x22a2df63198d1bb2"),")"),(0,o.kt)("p",null,"This template is referenced 1 time by ",(0,o.kt)("a",{parentName:"p",href:"/docs/Generated/Render%20Templates/base.render_template_database#generic-alpha-masked-diffuse-texture-double-sided-external-alpha-ref-instanced-normalmap"},"generic:ALPHA_MASKED:DIFFUSE_TEXTURE:DOUBLE_SIDED:EXTERNAL_ALPHA_REF:INSTANCED:NORMALMAP"),".\nThis template uses the following inputs:\n|Name|UI Name|Type|\n|---|---|---|\n|diffuse_texture|Diffuse Texture (UV1)|texture|\n|bump_normal_texture|Normal map (UV2 else UV1)|texture|\n|alpha_ref|Alpha Mask Reference|scalar|."),(0,o.kt)("h3",{id:"technique-deferred_ambient_alpha_masked"},"Technique ",(0,o.kt)("inlineCode",{parentName:"h3"},"deferred_ambient_alpha_masked")),(0,o.kt)("h3",{id:"render-states"},"Render States"),(0,o.kt)("p",null,"More info can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3drenderstatetype"},"Direct3D Docs")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 1,\n    D3DRS_ALPHABLENDENABLE = 0,\n    D3DRS_CULLMODE = 1,\n    D3DRS_COLORWRITEENABLE = 15,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n};\n")),(0,o.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,o.kt)("p",null,"More info can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3dsamplerstatetype"},"Direct3D Docs")),(0,o.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h4",{id:"sampler-1"},"Sampler 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h3",{id:"shaders"},"Shaders"),(0,o.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"float camera_near_range : register(vs_3_0, c208);\ncolumn_major float4x4 proj_matrix : register(vs_3_0, c204);\ncolumn_major float4x4 ref_world_tm[50] : register(vs_3_0, c0);\ncolumn_major float4x4 view_matrix : register(vs_3_0, c200);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 normal : NORMAL;\n    float4 texcoord1 : TEXCOORD1;\n    float4 texcoord : TEXCOORD;\n    float4 tangent : TANGENT;\n    float4 binormal : BINORMAL;\n    float4 position1 : POSITION1;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float texcoord1 : TEXCOORD1;\n    float4 texcoord : TEXCOORD;\n    float3 texcoord2 : TEXCOORD2;\n    float3 texcoord3 : TEXCOORD3;\n    float3 texcoord4 : TEXCOORD4;\n    float3 texcoord5 : TEXCOORD5;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float4 temp0, temp1;\n    float addr0;\n    // def c209, 2, -1, 4, -0\n    // dcl_position v0\n    // dcl_normal v1\n    // dcl_texcoord1 v2\n    // dcl_texcoord v3\n    // dcl_tangent v4\n    // dcl_binormal v5\n    // dcl_position1 v6\n    // dcl_position o0\n    // dcl_texcoord1 o1.x\n    // dcl_texcoord o2\n    // dcl_texcoord2 o3.xyz\n    // dcl_texcoord3 o4.xyz\n    // dcl_texcoord4 o5.xyz\n    // dcl_texcoord5 o6.xyz\n    // mad r0, v0.xyzx, -c209.yyyw, -c209.wwwy\n    temp0 = i.position.xyzx * float4(1, 1, 1, 0) + float4(0, 0, 0, 1);\n    // frc r1.x, v6.x\n    temp1.x = frac(i.position1.x);\n    // add r1.x, -r1.x, v6.x\n    temp1.x = -temp1.x + i.position1.x;\n    // mul r1.x, r1.x, c209.z\n    temp1.x = temp1.x * float1(4);\n    // mova a0.x, r1.x\n    addr0.x = temp1.x;\n    // dp4 r1.w, r0, c3[a0.x]\n    temp1.w = dot(temp0, (ref_world_tm[0 + (addr0.x / 4)]._m03_m13_m23_m33));\n    // dp4 r1.x, r0, c0[a0.x]\n    temp1.x = dot(temp0, (ref_world_tm[0 + (addr0.x / 4)]._m00_m10_m20_m30));\n    // dp4 r1.y, r0, c1[a0.x]\n    temp1.y = dot(temp0, (ref_world_tm[0 + (addr0.x / 4)]._m01_m11_m21_m31));\n    // dp4 r1.z, r0, c2[a0.x]\n    temp1.z = dot(temp0, (ref_world_tm[0 + (addr0.x / 4)]._m02_m12_m22_m32));\n    // dp4 r0.x, r1, c200\n    temp0.x = dot(temp1, (view_matrix._m00_m10_m20_m30));\n    // dp4 r0.y, r1, c201\n    temp0.y = dot(temp1, (view_matrix._m01_m11_m21_m31));\n    // dp4 r0.z, r1, c202\n    temp0.z = dot(temp1, (view_matrix._m02_m12_m22_m32));\n    // dp4 r0.w, r1, c203\n    temp0.w = dot(temp1, (view_matrix._m03_m13_m23_m33));\n    // mov o6.xyz, r1\n    o.texcoord5 = temp1;\n    // dp4 o0.x, r0, c204\n    o.position.x = dot(temp0, (proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, r0, c205\n    o.position.y = dot(temp0, (proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.w, r0, c207\n    o.position.w = dot(temp0, (proj_matrix._m03_m13_m23_m33));\n    // dp4 r0.x, r0, c206\n    temp0.x = dot(temp0, (proj_matrix._m02_m12_m22_m32));\n    // add o1.x, r0.x, c208.x\n    o.texcoord1 = temp0.x + camera_near_range.x;\n    // mov o0.z, r0.x\n    o.position.z = temp0.x;\n    // mad r0.xyz, v4, c209.x, c209.y\n    temp0.xyz = i.tangent.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 o3.x, r0, c0[a0.x]\n    o.texcoord2.x = dot(temp0.xyz, (ref_world_tm[0 + (addr0.x / 4)]._m00_m10_m20_m30).xyz);\n    // dp3 o4.x, r0, c1[a0.x]\n    o.texcoord3.x = dot(temp0.xyz, (ref_world_tm[0 + (addr0.x / 4)]._m01_m11_m21_m31).xyz);\n    // dp3 o5.x, r0, c2[a0.x]\n    o.texcoord4.x = dot(temp0.xyz, (ref_world_tm[0 + (addr0.x / 4)]._m02_m12_m22_m32).xyz);\n    // mad r0.xyz, v5, c209.x, c209.y\n    temp0.xyz = i.binormal.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 o3.y, -r0, c0[a0.x]\n    o.texcoord2.y = dot(-temp0.xyz, (ref_world_tm[0 + (addr0.x / 4)]._m00_m10_m20_m30).xyz);\n    // dp3 o4.y, -r0, c1[a0.x]\n    o.texcoord3.y = dot(-temp0.xyz, (ref_world_tm[0 + (addr0.x / 4)]._m01_m11_m21_m31).xyz);\n    // dp3 o5.y, -r0, c2[a0.x]\n    o.texcoord4.y = dot(-temp0.xyz, (ref_world_tm[0 + (addr0.x / 4)]._m02_m12_m22_m32).xyz);\n    // mad r0.xyz, v1, c209.x, c209.y\n    temp0.xyz = i.normal.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 o3.z, r0, c0[a0.x]\n    o.texcoord2.z = dot(temp0.xyz, (ref_world_tm[0 + (addr0.x / 4)]._m00_m10_m20_m30).xyz);\n    // dp3 o4.z, r0, c1[a0.x]\n    o.texcoord3.z = dot(temp0.xyz, (ref_world_tm[0 + (addr0.x / 4)]._m01_m11_m21_m31).xyz);\n    // dp3 o5.z, r0, c2[a0.x]\n    o.texcoord4.z = dot(temp0.xyz, (ref_world_tm[0 + (addr0.x / 4)]._m02_m12_m22_m32).xyz);\n    // mov o2.xy, v3\n    o.texcoord.xy = i.texcoord.xy;\n    // mov o2.zw, v2.xyxy\n    o.texcoord.zw = i.texcoord1.xy;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."),(0,o.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"sampler2D bump_normal_texture : register(ps_3_0, s1);\nsampler2D diffuse_texture : register(ps_3_0, s0);\nfloat ref_alpha_ref : register(ps_3_0, c0);\nstruct PixelMain_Input\n{\n    float texcoord1 : TEXCOORD1;\n    float4 texcoord : TEXCOORD;\n    float3 texcoord2 : TEXCOORD2;\n    float3 texcoord3 : TEXCOORD3;\n    float3 texcoord4 : TEXCOORD4;\n    float4 vpos : vPos;\n};\n\nstruct PixelMain_Output\n{\n    float4 color1 : COLOR1;\n    float4 color : COLOR;\n    float4 color2 : COLOR2;\n};\n\nPixelMain_Output PixelMain(PixelMain_Input i)\n{\n    PixelMain_Output o;\n    float4 temp0, temp1;\n    float3 temp2;\n    // def c1, 1, -1, -0.5, 0.5\n    // def c2, 0.4, 0, 0, 0\n    // dcl_texcoord1 v0.x\n    // dcl_texcoord v1\n    // dcl_texcoord2 v2.xyz\n    // dcl_texcoord3 v3.xyz\n    // dcl_texcoord4 v4.xyz\n    // dcl vPos\n    // dcl_2d s0\n    // dcl_2d s1\n    // texld_pp r0, v1, s0\n    temp0 = /* not implemented _pp modifier */ tex2D(diffuse_texture, i.texcoord.xy);\n    // add r1.x, r0.w, -c0.x\n    temp1.x = temp0.w + -ref_alpha_ref.x;\n    // cmp r1, r1.x, c1.x, c1.y\n    temp1 = (temp1.x >= 0) ? float4(1, 1, 1, 1) : float4(-1, -1, -1, -1);\n    // texkill r1\n    clip(temp1);\n    // texld_pp r1, v1.zwzw, s1\n    temp1 = /* not implemented _pp modifier */ tex2D(bump_normal_texture, i.texcoord.zw);\n    // add_pp r1.xy, r1.wyzw, c1.z\n    temp1.xy = /* not implemented _pp modifier */ temp1.wy + float2(-0.5, -0.5);\n    // add_pp r1.xy, r1, r1\n    temp1.xy = /* not implemented _pp modifier */ temp1.xy + temp1.xy;\n    // mul_pp r1.w, r1.x, r1.x\n    temp1.w = /* not implemented _pp modifier */ temp1.x * temp1.x;\n    // mad_pp r1.w, r1.y, r1.y, -r1.w\n    temp1.w = /* not implemented _pp modifier */ temp1.y * temp1.y + -temp1.w;\n    // add_pp r1.w, -r1.w, c1.x\n    temp1.w = /* not implemented _pp modifier */ -temp1.w + float1(1);\n    // rsq_pp r1.w, r1.w\n    temp1.w = /* not implemented _pp modifier */ 1 / sqrt(temp1.w);\n    // rcp_pp r1.z, r1.w\n    temp1.z = /* not implemented _pp modifier */ 1.0f / temp1.w;\n    // dp3 r2.x, r1, v2\n    temp2.x = dot(temp1.xyz, i.texcoord2.xyz);\n    // dp3 r2.y, r1, v3\n    temp2.y = dot(temp1.xyz, i.texcoord3.xyz);\n    // dp3 r2.z, r1, v4\n    temp2.z = dot(temp1.xyz, i.texcoord4.xyz);\n    // nrm_pp r1.xyz, r2\n    temp1.xyz = /* not implemented _pp modifier */ normalize(temp2.xyz).xyz;\n    // cmp r1.w, vPos, c1.x, c1.y\n    temp1.w = (vPos.w >= 0) ? float1(1) : float1(-1);\n    // cmp_pp r1.xyz, -r1.w, r1, -r1\n    temp1.xyz = /* not implemented _pp modifier */ (-temp1.www >= 0) ? temp1.xyz : -temp1.xyz;\n    // nrm_pp r2.xyz, r1\n    temp2.xyz = /* not implemented _pp modifier */ normalize(temp1.xyz).xyz;\n    // mad_pp oC1.xyz, r2, c1.w, c1.w\n    o.color1.xyz = /* not implemented _pp modifier */ temp2.xyz * float3(0.5, 0.5, 0.5) + float3(0.5, 0.5, 0.5);\n    // mov_pp oC0.xyz, r0\n    o.color.xyz = /* not implemented _pp modifier */ temp0.xyz;\n    // mov_pp oC1.w, r0.w\n    o.color1.w = /* not implemented _pp modifier */ temp0.w;\n    // mov oC0.w, c2.x\n    o.color.w = float1(0.4);\n    // mov oC2, v0.x\n    o.color2 = i.texcoord1.x;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."))}_.isMDXComponent=!0}}]);