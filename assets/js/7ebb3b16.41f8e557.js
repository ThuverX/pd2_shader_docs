"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[87543],{603905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>D});var r=n(667294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},_="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),_=m(n),s=o,D=_["".concat(p,".").concat(s)]||_[s]||c[s]||a;return n?r.createElement(D,i(i({ref:t},d),{},{components:n})):r.createElement(D,i({ref:t},d))}));function D(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[_]="string"==typeof e?e:o,i[1]=l;for(var m=2;m<a;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},570238:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var r=n(487462),o=(n(667294),n(603905));const a={id:0xa42d05a90aedc000,title:"Generic Default Alpha Masked Diffuse Texture Diffuse Uvanim Double Sided External Alpha Ref Opacity Texture Opacity Uvanim Self Illumination Self Illumination Bloom Self Illumination Uvanim"},i="Generic Default Alpha Masked Diffuse Texture Diffuse Uvanim Double Sided External Alpha Ref Opacity Texture Opacity Uvanim Self Illumination Self Illumination Bloom Self Illumination Uvanim",l={unversionedId:"Generated/Shaders/Base/[3000-3100]/11830118019763126000",id:"Generated/Shaders/Base/[3000-3100]/11830118019763126000",title:"Generic Default Alpha Masked Diffuse Texture Diffuse Uvanim Double Sided External Alpha Ref Opacity Texture Opacity Uvanim Self Illumination Self Illumination Bloom Self Illumination Uvanim",description:"(genericALPHAMASKEDDIFFUSEUVANIMEXTERNALALPHAREFOPACITYUVANIMSELFILLUMINATIONBLOOM:SELFILLUMINATION_UVANIM, 0xa42d05a90aedc078)",source:"@site/docs/Generated/Shaders/Base/[3000-3100]/0xa42d05a90aedc078.mdx",sourceDirName:"Generated/Shaders/Base/[3000-3100]",slug:"/Generated/Shaders/Base/[3000-3100]/11830118019763126000",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[3000-3100]/11830118019763126000",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/Generated/Shaders/Base/[3000-3100]/0xa42d05a90aedc078.mdx",tags:[],version:"current",frontMatter:{id:"11830118019763126000",title:"Generic Default Alpha Masked Diffuse Texture Diffuse Uvanim Double Sided External Alpha Ref Opacity Texture Opacity Uvanim Self Illumination Self Illumination Bloom Self Illumination Uvanim"},sidebar:"docsSidebar",previous:{title:"Generic Default Alpha Masked Cube Environment Mapping Diffuse Texture Double Sided External Alpha Ref Gsma Texture Opacity Texture",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[3000-3100]/11828494263456786000"},next:{title:"Generic Shadow Caster Diffuse Texture Diffuse Uvanim Normalmap Normal Uvanim Nvidia Self Illumination Self Illumination Uvanim",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[3000-3100]/11832415539827694000"}},p={},m=[{value:"Technique <code>deferred_ambient_alpha_masked</code>",id:"technique-deferred_ambient_alpha_masked",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Sampler 1",id:"sampler-1",level:4},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4},{value:"Technique <code>self_illumination</code>",id:"technique-self_illumination",level:3},{value:"Render States",id:"render-states-1",level:3},{value:"Sampler States",id:"sampler-states-1",level:3},{value:"Sampler 0",id:"sampler-0-1",level:4},{value:"Shaders",id:"shaders-1",level:3},{value:"Vertex Shader",id:"vertex-shader-1",level:4},{value:"Pixel Shader",id:"pixel-shader-1",level:4}],d={toc:m},_="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(_,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"generic-default-alpha-masked-diffuse-texture-diffuse-uvanim-double-sided-external-alpha-ref-opacity-texture-opacity-uvanim-self-illumination-self-illumination-bloom-self-illumination-uvanim"},"Generic Default Alpha Masked Diffuse Texture Diffuse Uvanim Double Sided External Alpha Ref Opacity Texture Opacity Uvanim Self Illumination Self Illumination Bloom Self Illumination Uvanim"),(0,o.kt)("p",null,"(",(0,o.kt)("inlineCode",{parentName:"p"},"generic:default:ALPHA_MASKED:DIFFUSE_TEXTURE:DIFFUSE_UVANIM:DOUBLE_SIDED:EXTERNAL_ALPHA_REF:OPACITY_TEXTURE:OPACITY_UVANIM:SELF_ILLUMINATION:SELF_ILLUMINATION_BLOOM:SELF_ILLUMINATION_UVANIM"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"0xa42d05a90aedc078"),")"),(0,o.kt)("p",null,"This template is referenced 1 time by ",(0,o.kt)("a",{parentName:"p",href:"/docs/Generated/Render%20Templates/base.render_template_database#generic-alpha-masked-diffuse-texture-diffuse-uvanim-double-sided-external-alpha-ref-opacity-texture-opacity-uvanim-self-illumination-self-illumination-bloom-self-illumination-uvanim"},"generic:ALPHA_MASKED:DIFFUSE_TEXTURE:DIFFUSE_UVANIM:DOUBLE_SIDED:EXTERNAL_ALPHA_REF:OPACITY_TEXTURE:OPACITY_UVANIM:SELF_ILLUMINATION:SELF_ILLUMINATION_BLOOM:SELF_ILLUMINATION_UVANIM"),".\nThis template uses the following inputs:\n|Name|UI Name|Type|\n|---|---|---|\n|diffuse_texture|Diffuse Texture (UV1)|texture|\n|opacity_texture|Alpha Mask (UV5)|texture|\n|uv_speed|UV Speed|vector3|\n|alpha_ref|Alpha Mask Reference|scalar|\n|self_illumination_texture|Self Illumination Texture (UV4)|texture|\n|il_bloom|Self Illumination Bloom|scalar|\n|il_multiplier|Self Illumination Intensity Multiplier|scalar|."),(0,o.kt)("h3",{id:"technique-deferred_ambient_alpha_masked"},"Technique ",(0,o.kt)("inlineCode",{parentName:"h3"},"deferred_ambient_alpha_masked")),(0,o.kt)("h3",{id:"render-states"},"Render States"),(0,o.kt)("p",null,"More info can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3drenderstatetype"},"Direct3D Docs")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 1,\n    D3DRS_ALPHABLENDENABLE = 0,\n    D3DRS_CULLMODE = 1,\n    D3DRS_COLORWRITEENABLE = 15,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n};\n")),(0,o.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,o.kt)("p",null,"More info can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3dsamplerstatetype"},"Direct3D Docs")),(0,o.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h4",{id:"sampler-1"},"Sampler 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 2,\n    D3DSAMP_MINFILTER = 2,\n    D3DSAMP_MIPFILTER = 2,\n};\n")),(0,o.kt)("h3",{id:"shaders"},"Shaders"),(0,o.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"float camera_near_range : register(vs_3_0, c12);\ncolumn_major float4x4 proj_matrix : register(vs_3_0, c8);\nfloat ref_time : register(vs_3_0, c13);\nfloat3 ref_uv_speed : register(vs_3_0, c14);\ncolumn_major float4x4 view_matrix : register(vs_3_0, c4);\ncolumn_major float4x4 world_matrix : register(vs_3_0, c0);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 normal : NORMAL;\n    float4 texcoord : TEXCOORD;\n    float4 texcoord4 : TEXCOORD4;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float texcoord1 : TEXCOORD1;\n    float2 texcoord : TEXCOORD;\n    float3 texcoord2 : TEXCOORD2;\n    float3 texcoord5 : TEXCOORD5;\n    float2 texcoord7 : TEXCOORD7;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float4 temp0, temp1;\n    // def c15, 2, -1, 0, 0\n    // dcl_position v0\n    // dcl_normal v1\n    // dcl_texcoord v2\n    // dcl_texcoord4 v3\n    // dcl_position o0\n    // dcl_texcoord1 o1.x\n    // dcl_texcoord o2.xy\n    // dcl_texcoord2 o3.xyz\n    // dcl_texcoord5 o4.xyz\n    // dcl_texcoord7 o5.xy\n    // dp4 r0.w, v0, c3\n    temp0.w = dot(i.position, (world_matrix._m03_m13_m23_m33));\n    // dp4 r0.x, v0, c0\n    temp0.x = dot(i.position, (world_matrix._m00_m10_m20_m30));\n    // dp4 r0.y, v0, c1\n    temp0.y = dot(i.position, (world_matrix._m01_m11_m21_m31));\n    // dp4 r0.z, v0, c2\n    temp0.z = dot(i.position, (world_matrix._m02_m12_m22_m32));\n    // dp4 r1.x, r0, c4\n    temp1.x = dot(temp0, (view_matrix._m00_m10_m20_m30));\n    // dp4 r1.y, r0, c5\n    temp1.y = dot(temp0, (view_matrix._m01_m11_m21_m31));\n    // dp4 r1.z, r0, c6\n    temp1.z = dot(temp0, (view_matrix._m02_m12_m22_m32));\n    // dp4 r1.w, r0, c7\n    temp1.w = dot(temp0, (view_matrix._m03_m13_m23_m33));\n    // mov o4.xyz, r0\n    o.texcoord5 = temp0;\n    // dp4 o0.x, r1, c8\n    o.position.x = dot(temp1, (proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, r1, c9\n    o.position.y = dot(temp1, (proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.w, r1, c11\n    o.position.w = dot(temp1, (proj_matrix._m03_m13_m23_m33));\n    // dp4 r0.x, r1, c10\n    temp0.x = dot(temp1, (proj_matrix._m02_m12_m22_m32));\n    // add o1.x, r0.x, c12.x\n    o.texcoord1 = temp0.x + camera_near_range.x;\n    // mov o0.z, r0.x\n    o.position.z = temp0.x;\n    // mov r0.x, c13.x\n    temp0.x = ref_time.x;\n    // mad o2.xy, r0.x, c14, v2\n    o.texcoord = temp0.x * ref_uv_speed + i.texcoord;\n    // mad r0.yzw, v1.xxyz, c15.x, c15.y\n    temp0.yzw = i.normal.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 o3.x, r0.yzww, c0\n    o.texcoord2.x = dot(temp0.yzw, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 o3.y, r0.yzww, c1\n    o.texcoord2.y = dot(temp0.yzw, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o3.z, r0.yzww, c2\n    o.texcoord2.z = dot(temp0.yzw, (world_matrix._m02_m12_m22_m32).xyz);\n    // mad o5.xy, r0.x, c14, v3\n    o.texcoord7 = temp0.x * ref_uv_speed + i.texcoord4;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."),(0,o.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"sampler2D diffuse_texture : register(ps_3_0, s0);\nsampler2D opacity_texture : register(ps_3_0, s1);\nfloat ref_alpha_ref : register(ps_3_0, c0);\nstruct PixelMain_Input\n{\n    float texcoord1 : TEXCOORD1;\n    float2 texcoord : TEXCOORD;\n    float3 texcoord2 : TEXCOORD2;\n    float2 texcoord7 : TEXCOORD7;\n    float4 vpos : vPos;\n};\n\nstruct PixelMain_Output\n{\n    float4 color1 : COLOR1;\n    float4 color : COLOR;\n    float4 color2 : COLOR2;\n};\n\nPixelMain_Output PixelMain(PixelMain_Input i)\n{\n    PixelMain_Output o;\n    float4 temp0;\n    float3 temp1;\n    // def c1, 1, -1, 0.5, 0.4\n    // dcl_texcoord1 v0.x\n    // dcl_texcoord v1.xy\n    // dcl_texcoord2_pp v2.xyz\n    // dcl_texcoord7 v3.xy\n    // dcl vPos\n    // dcl_2d s0\n    // dcl_2d s1\n    // texld_pp r0, v3, s1\n    temp0 = /* not implemented _pp modifier */ tex2D(opacity_texture, i.texcoord7.xy);\n    // add r0.x, r0.x, -c0.x\n    temp0.x = temp0.x + -ref_alpha_ref.x;\n    // cmp r0, r0.x, c1.x, c1.y\n    temp0 = (temp0.x >= 0) ? float4(1, 1, 1, 1) : float4(-1, -1, -1, -1);\n    // texkill r0\n    clip(temp0);\n    // cmp r0.x, vPos, c1.x, c1.y\n    temp0.x = (vPos.x >= 0) ? float1(1) : float1(-1);\n    // cmp_pp r0.xyz, -r0.x, v2, -v2\n    temp0.xyz = /* not implemented _pp modifier */ (-temp0.xxx >= 0) ? i.texcoord2.xyz : -i.texcoord2.xyz;\n    // nrm_pp r1.xyz, r0\n    temp1.xyz = /* not implemented _pp modifier */ normalize(temp0.xyz).xyz;\n    // mad_pp oC1.xyz, r1, c1.z, c1.z\n    o.color1.xyz = /* not implemented _pp modifier */ temp1.xyz * float3(0.5, 0.5, 0.5) + float3(0.5, 0.5, 0.5);\n    // texld_pp r0, v1, s0\n    temp0 = /* not implemented _pp modifier */ tex2D(diffuse_texture, i.texcoord.xy);\n    // mov_pp oC0.xyz, r0\n    o.color.xyz = /* not implemented _pp modifier */ temp0.xyz;\n    // mov_pp oC1.w, r0.w\n    o.color1.w = /* not implemented _pp modifier */ temp0.w;\n    // mov oC0.w, c1.w\n    o.color.w = float1(0.4);\n    // mov oC2, v0.x\n    o.color2 = i.texcoord1.x;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."),(0,o.kt)("h3",{id:"technique-self_illumination"},"Technique ",(0,o.kt)("inlineCode",{parentName:"h3"},"self_illumination")),(0,o.kt)("h3",{id:"render-states-1"},"Render States"),(0,o.kt)("p",null,"More info can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3drenderstatetype"},"Direct3D Docs")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 3,\n    D3DRS_ZWRITEENABLE = 1,\n    D3DRS_ALPHABLENDENABLE = 1,\n    D3DRS_CULLMODE = 1,\n    D3DRS_COLORWRITEENABLE = 15,\n    D3DRS_COLORWRITEENABLE1 = 7,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n    D3DRS_BLENDOP = 1,\n    D3DRS_SRCBLEND = 2,\n    D3DRS_DESTBLEND = 2,\n};\n")),(0,o.kt)("h3",{id:"sampler-states-1"},"Sampler States"),(0,o.kt)("p",null,"More info can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3dsamplerstatetype"},"Direct3D Docs")),(0,o.kt)("h4",{id:"sampler-0-1"},"Sampler 0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h3",{id:"shaders-1"},"Shaders"),(0,o.kt)("h4",{id:"vertex-shader-1"},"Vertex Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"float ref_time : register(vs_3_0, c4);\nfloat3 ref_uv_speed : register(vs_3_0, c5);\ncolumn_major float4x4 view_proj_matrix : register(vs_3_0, c0);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 texcoord : TEXCOORD;\n    float4 texcoord3 : TEXCOORD3;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float2 texcoord : TEXCOORD;\n    float2 texcoord6 : TEXCOORD6;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float temp0;\n    // dcl_position v0\n    // dcl_texcoord v1\n    // dcl_texcoord3 v2\n    // dcl_position o0\n    // dcl_texcoord o1.xy\n    // dcl_texcoord6 o2.xy\n    // dp4 o0.x, v0, c0\n    o.position.x = dot(i.position, (view_proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, v0, c1\n    o.position.y = dot(i.position, (view_proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.z, v0, c2\n    o.position.z = dot(i.position, (view_proj_matrix._m02_m12_m22_m32));\n    // dp4 o0.w, v0, c3\n    o.position.w = dot(i.position, (view_proj_matrix._m03_m13_m23_m33));\n    // mov r0.x, c4.x\n    temp0.x = ref_time.x;\n    // mad o2.xy, r0.x, c5, v2\n    o.texcoord6 = temp0.x * ref_uv_speed + i.texcoord3;\n    // mad o1.xy, r0.x, c5, v1\n    o.texcoord = temp0.x * ref_uv_speed + i.texcoord;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."),(0,o.kt)("h4",{id:"pixel-shader-1"},"Pixel Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"float ref_il_bloom : register(ps_3_0, c0);\nfloat ref_il_multiplier : register(ps_3_0, c1);\nsampler2D self_illumination_texture : register(ps_3_0, s0);\nstruct PixelMain_Output\n{\n    float4 color1 : COLOR1;\n    float4 color : COLOR;\n};\n\nPixelMain_Output PixelMain(float2 texcoord : TEXCOORD)\n{\n    PixelMain_Output o;\n    float4 temp0;\n    // def c2, 1, 0, 0, 0\n    // dcl_texcoord v0.xy\n    // dcl_2d s0\n    // texld_pp r0, v0, s0\n    temp0 = /* not implemented _pp modifier */ tex2D(self_illumination_texture, texcoord.xy);\n    // mul_pp r0.xyz, r0, c1.x\n    temp0.xyz = /* not implemented _pp modifier */ temp0.xyz * ref_il_multiplier.xxx;\n    // mov_pp r0.w, c2.x\n    temp0.w = /* not implemented _pp modifier */ float1(1);\n    // mul_pp oC1, r0, c0.x\n    o.color1 = /* not implemented _pp modifier */ temp0 * ref_il_bloom.x;\n    // mov_pp oC0, r0\n    o.color = /* not implemented _pp modifier */ temp0;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."))}c.isMDXComponent=!0}}]);