"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[44418],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>s});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=r.createContext({}),d=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},i=function(e){var t=d(e.components);return r.createElement(m.Provider,{value:t},e.children)},_="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},x=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,m=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),_=d(n),x=o,s=_["".concat(m,".").concat(x)]||_[x]||c[x]||a;return n?r.createElement(s,p(p({ref:t},i),{},{components:n})):r.createElement(s,p({ref:t},i))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=x;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[_]="string"==typeof e?e:o,p[1]=l;for(var d=2;d<a;d++)p[d]=n[d];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}x.displayName="MDXCreateElement"},58939:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(87462),o=(n(67294),n(3905));const a={id:0x817244629f7a6800,title:"Generic Default Alpha Masked Diffuse Texture External Alpha Ref Gsma Alpha Masking Gsma Texture Normalmap"},p="Generic Default Alpha Masked Diffuse Texture External Alpha Ref Gsma Alpha Masking Gsma Texture Normalmap",l={unversionedId:"Generated/Shaders/Base/[2400-2500]/9327592968610802000",id:"Generated/Shaders/Base/[2400-2500]/9327592968610802000",title:"Generic Default Alpha Masked Diffuse Texture External Alpha Ref Gsma Alpha Masking Gsma Texture Normalmap",description:"(genericALPHAMASKEDEXTERNALALPHAREFGSMA_TEXTURE:NORMALMAP, 0x817244629f7a69bf)",source:"@site/docs/Generated/Shaders/Base/[2400-2500]/0x817244629f7a69bf.mdx",sourceDirName:"Generated/Shaders/Base/[2400-2500]",slug:"/Generated/Shaders/Base/[2400-2500]/9327592968610802000",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[2400-2500]/9327592968610802000",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/docs/Generated/Shaders/Base/[2400-2500]/0x817244629f7a69bf.mdx",tags:[],version:"current",frontMatter:{id:"9327592968610802000",title:"Generic Default Alpha Masked Diffuse Texture External Alpha Ref Gsma Alpha Masking Gsma Texture Normalmap"},sidebar:"docsSidebar",previous:{title:"Generic Shadow Caster Alpha Masked Ati Diffuse Texture Distance Fade 2 Double Sided External Alpha Ref Instanced Normalmap",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[2400-2500]/9322465288264296000"},next:{title:"Generic Shadow Caster Diffuse Texture Global Environment Mapping Gloss Blurs Cubemap Gloss Control Value",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[2400-2500]/9328358562706086000"}},m={},d=[{value:"Technique <code>deferred_ambient_alpha_masked</code>",id:"technique-deferred_ambient_alpha_masked",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Sampler 1",id:"sampler-1",level:4},{value:"Sampler 2",id:"sampler-2",level:4},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],i={toc:d},_="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(_,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"generic-default-alpha-masked-diffuse-texture-external-alpha-ref-gsma-alpha-masking-gsma-texture-normalmap"},"Generic Default Alpha Masked Diffuse Texture External Alpha Ref Gsma Alpha Masking Gsma Texture Normalmap"),(0,o.kt)("p",null,"(",(0,o.kt)("inlineCode",{parentName:"p"},"generic:default:ALPHA_MASKED:DIFFUSE_TEXTURE:EXTERNAL_ALPHA_REF:GSMA_ALPHA_MASKING:GSMA_TEXTURE:NORMALMAP"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"0x817244629f7a69bf"),")"),(0,o.kt)("h3",{id:"technique-deferred_ambient_alpha_masked"},"Technique ",(0,o.kt)("inlineCode",{parentName:"h3"},"deferred_ambient_alpha_masked")),(0,o.kt)("h3",{id:"render-states"},"Render States"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 1,\n    D3DRS_ALPHABLENDENABLE = 0,\n    D3DRS_CULLMODE = 2,\n    D3DRS_COLORWRITEENABLE = 15,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n};\n")),(0,o.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,o.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h4",{id:"sampler-1"},"Sampler 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h4",{id:"sampler-2"},"Sampler 2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h3",{id:"shaders"},"Shaders"),(0,o.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"float camera_near_range : register(vs_3_0, c7);\ncolumn_major float4x4 view_proj_matrix : register(vs_3_0, c0);\ncolumn_major float4x4 world_matrix : register(vs_3_0, c4);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 normal : NORMAL;\n    float4 texcoord1 : TEXCOORD1;\n    float4 texcoord : TEXCOORD;\n    float4 tangent : TANGENT;\n    float4 binormal : BINORMAL;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float texcoord1 : TEXCOORD1;\n    float4 texcoord : TEXCOORD;\n    float3 texcoord2 : TEXCOORD2;\n    float3 texcoord3 : TEXCOORD3;\n    float3 texcoord4 : TEXCOORD4;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float3 temp0;\n    // def c8, 2, -1, 0, 0\n    // dcl_position v0\n    // dcl_normal v1\n    // dcl_texcoord1 v2\n    // dcl_texcoord v3\n    // dcl_tangent v4\n    // dcl_binormal v5\n    // dcl_position o0\n    // dcl_texcoord1 o1.x\n    // dcl_texcoord o2\n    // dcl_texcoord2 o3.xyz\n    // dcl_texcoord3 o4.xyz\n    // dcl_texcoord4 o5.xyz\n    // dp4 o0.x, v0, c0\n    o.position.x = dot(i.position, (view_proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, v0, c1\n    o.position.y = dot(i.position, (view_proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.w, v0, c3\n    o.position.w = dot(i.position, (view_proj_matrix._m03_m13_m23_m33));\n    // dp4 r0.x, v0, c2\n    temp0.x = dot(i.position, (view_proj_matrix._m02_m12_m22_m32));\n    // add o1.x, r0.x, c7.x\n    o.texcoord1 = temp0.x + camera_near_range.x;\n    // mov o0.z, r0.x\n    o.position.z = temp0.x;\n    // mad r0.xyz, v4, c8.x, c8.y\n    temp0.xyz = i.tangent.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 o3.x, r0, c4\n    o.texcoord2.x = dot(temp0.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 o4.x, r0, c5\n    o.texcoord3.x = dot(temp0.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o5.x, r0, c6\n    o.texcoord4.x = dot(temp0.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // mad r0.xyz, v5, c8.x, c8.y\n    temp0.xyz = i.binormal.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 o3.y, -r0, c4\n    o.texcoord2.y = dot(-temp0.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 o4.y, -r0, c5\n    o.texcoord3.y = dot(-temp0.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o5.y, -r0, c6\n    o.texcoord4.y = dot(-temp0.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // mad r0.xyz, v1, c8.x, c8.y\n    temp0.xyz = i.normal.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 o3.z, r0, c4\n    o.texcoord2.z = dot(temp0.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 o4.z, r0, c5\n    o.texcoord3.z = dot(temp0.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o5.z, r0, c6\n    o.texcoord4.z = dot(temp0.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // mov o2.xy, v3\n    o.texcoord.xy = i.texcoord.xy;\n    // mov o2.zw, v2.xyxy\n    o.texcoord.zw = i.texcoord1.xy;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."),(0,o.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"sampler2D bump_normal_texture : register(ps_3_0, s2);\nsampler2D diffuse_texture : register(ps_3_0, s0);\nsampler2D material_texture : register(ps_3_0, s1);\nfloat ref_alpha_ref : register(ps_3_0, c0);\nstruct PixelMain_Input\n{\n    float texcoord1 : TEXCOORD1;\n    float4 texcoord : TEXCOORD;\n    float3 texcoord2 : TEXCOORD2;\n    float3 texcoord3 : TEXCOORD3;\n    float3 texcoord4 : TEXCOORD4;\n};\n\nstruct PixelMain_Output\n{\n    float4 color1 : COLOR1;\n    float4 color : COLOR;\n    float4 color2 : COLOR2;\n};\n\nPixelMain_Output PixelMain(PixelMain_Input i)\n{\n    PixelMain_Output o;\n    float4 temp0, temp1;\n    float3 temp2;\n    // def c1, 1, -1, -0.5, 0.5\n    // dcl_texcoord1 v0.x\n    // dcl_texcoord v1\n    // dcl_texcoord2 v2.xyz\n    // dcl_texcoord3 v3.xyz\n    // dcl_texcoord4 v4.xyz\n    // dcl_2d s0\n    // dcl_2d s1\n    // dcl_2d s2\n    // texld_pp r0, v1, s1\n    temp0 = /* not implemented _pp modifier */ tex2D(material_texture, i.texcoord.xy);\n    // add r0.z, r0.w, -c0.x\n    temp0.z = temp0.w + -ref_alpha_ref.x;\n    // cmp r1, r0.z, c1.x, c1.y\n    temp1 = (temp0.z >= 0) ? float4(1, 1, 1, 1) : float4(-1, -1, -1, -1);\n    // texkill r1\n    clip(temp1);\n    // texld_pp r1, v1.zwzw, s2\n    temp1 = /* not implemented _pp modifier */ tex2D(bump_normal_texture, i.texcoord.zw);\n    // add_pp r0.zw, r1.xywy, c1.z\n    temp0.zw = /* not implemented _pp modifier */ temp1.wy + float2(-0.5, -0.5);\n    // add_pp r1.xy, r0.zwzw, r0.zwzw\n    temp1.xy = /* not implemented _pp modifier */ temp0.zw + temp0.zw;\n    // mul_pp r0.z, r1.x, r1.x\n    temp0.z = /* not implemented _pp modifier */ temp1.x * temp1.x;\n    // mad_pp r0.z, r1.y, r1.y, -r0.z\n    temp0.z = /* not implemented _pp modifier */ temp1.y * temp1.y + -temp0.z;\n    // add_pp r0.z, -r0.z, c1.x\n    temp0.z = /* not implemented _pp modifier */ -temp0.z + float1(1);\n    // rsq_pp r0.z, r0.z\n    temp0.z = /* not implemented _pp modifier */ 1 / sqrt(temp0.z);\n    // rcp_pp r1.z, r0.z\n    temp1.z = /* not implemented _pp modifier */ 1.0f / temp0.z;\n    // dp3 r2.x, r1, v2\n    temp2.x = dot(temp1.xyz, i.texcoord2.xyz);\n    // dp3 r2.y, r1, v3\n    temp2.y = dot(temp1.xyz, i.texcoord3.xyz);\n    // dp3 r2.z, r1, v4\n    temp2.z = dot(temp1.xyz, i.texcoord4.xyz);\n    // nrm_pp r1.xyz, r2\n    temp1.xyz = /* not implemented _pp modifier */ normalize(temp2.xyz).xyz;\n    // mad_pp oC1.xyz, r1, c1.w, c1.w\n    o.color1.xyz = /* not implemented _pp modifier */ temp1.xyz * float3(0.5, 0.5, 0.5) + float3(0.5, 0.5, 0.5);\n    // texld_pp r1, v1, s0\n    temp1 = /* not implemented _pp modifier */ tex2D(diffuse_texture, i.texcoord.xy);\n    // mov_pp oC0.xyz, r1\n    o.color.xyz = /* not implemented _pp modifier */ temp1.xyz;\n    // mov_pp oC0.w, r0.x\n    o.color.w = /* not implemented _pp modifier */ temp0.x;\n    // mov_pp oC1.w, r0.y\n    o.color1.w = /* not implemented _pp modifier */ temp0.y;\n    // mov oC2, v0.x\n    o.color2 = i.texcoord1.x;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."))}c.isMDXComponent=!0}}]);