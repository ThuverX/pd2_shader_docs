"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[99305],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>D});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},_="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},x=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,i=m(e,["components","mdxType","originalType","parentName"]),_=d(n),x=o,D=_["".concat(p,".").concat(x)]||_[x]||c[x]||a;return n?r.createElement(D,l(l({ref:t},i),{},{components:n})):r.createElement(D,l({ref:t},i))}));function D(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=x;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m[_]="string"==typeof e?e:o,l[1]=m;for(var d=2;d<a;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}x.displayName="MDXCreateElement"},2866:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>m,toc:()=>d});var r=n(87462),o=(n(67294),n(3905));const a={id:0xc105cf1aa7327000,title:"Generic Default Alpha Masked Diffuse Texture Double Sided External Alpha Ref Normalmap Self Illumination"},l="Generic Default Alpha Masked Diffuse Texture Double Sided External Alpha Ref Normalmap Self Illumination",m={unversionedId:"Generated/Shaders/Base/[3600-3700]/13908750737584845000",id:"Generated/Shaders/Base/[3600-3700]/13908750737584845000",title:"Generic Default Alpha Masked Diffuse Texture Double Sided External Alpha Ref Normalmap Self Illumination",description:"(genericALPHAMASKEDDOUBLESIDEDNORMALMAP:SELFILLUMINATION, 0xc105cf1aa7326e59)",source:"@site/docs/Generated/Shaders/Base/[3600-3700]/0xc105cf1aa7326e59.mdx",sourceDirName:"Generated/Shaders/Base/[3600-3700]",slug:"/Generated/Shaders/Base/[3600-3700]/13908750737584845000",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[3600-3700]/13908750737584845000",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/docs/Generated/Shaders/Base/[3600-3700]/0xc105cf1aa7326e59.mdx",tags:[],version:"current",frontMatter:{id:"13908750737584845000",title:"Generic Default Alpha Masked Diffuse Texture Double Sided External Alpha Ref Normalmap Self Illumination"},sidebar:"docsSidebar",previous:{title:"Generic Shadow Caster Alpha Masked Diffuse Texture External Alpha Ref Opacity Texture",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[3600-3700]/13907644687569291000"},next:{title:"Opacity Default Ati Cube Environment Mapping Cube Fresnel Diffuse Texture Diffuse Uvanim",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[3600-3700]/13914686305582432000"}},p={},d=[{value:"Technique <code>deferred_ambient_alpha_masked</code>",id:"technique-deferred_ambient_alpha_masked",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Sampler 1",id:"sampler-1",level:4},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4},{value:"Technique <code>self_illumination</code>",id:"technique-self_illumination",level:3},{value:"Render States",id:"render-states-1",level:3},{value:"Sampler States",id:"sampler-states-1",level:3},{value:"Sampler 0",id:"sampler-0-1",level:4},{value:"Shaders",id:"shaders-1",level:3},{value:"Vertex Shader",id:"vertex-shader-1",level:4},{value:"Pixel Shader",id:"pixel-shader-1",level:4}],i={toc:d},_="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(_,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"generic-default-alpha-masked-diffuse-texture-double-sided-external-alpha-ref-normalmap-self-illumination"},"Generic Default Alpha Masked Diffuse Texture Double Sided External Alpha Ref Normalmap Self Illumination"),(0,o.kt)("p",null,"(",(0,o.kt)("inlineCode",{parentName:"p"},"generic:default:ALPHA_MASKED:DIFFUSE_TEXTURE:DOUBLE_SIDED:EXTERNAL_ALPHA_REF:NORMALMAP:SELF_ILLUMINATION"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"0xc105cf1aa7326e59"),")"),(0,o.kt)("h3",{id:"technique-deferred_ambient_alpha_masked"},"Technique ",(0,o.kt)("inlineCode",{parentName:"h3"},"deferred_ambient_alpha_masked")),(0,o.kt)("h3",{id:"render-states"},"Render States"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 1,\n    D3DRS_ALPHABLENDENABLE = 0,\n    D3DRS_CULLMODE = 1,\n    D3DRS_COLORWRITEENABLE = 15,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n};\n")),(0,o.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,o.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h4",{id:"sampler-1"},"Sampler 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h3",{id:"shaders"},"Shaders"),(0,o.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"float camera_near_range : register(vs_3_0, c12);\ncolumn_major float4x4 proj_matrix : register(vs_3_0, c8);\ncolumn_major float4x4 view_matrix : register(vs_3_0, c4);\ncolumn_major float4x4 world_matrix : register(vs_3_0, c0);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 normal : NORMAL;\n    float4 texcoord1 : TEXCOORD1;\n    float4 texcoord : TEXCOORD;\n    float4 tangent : TANGENT;\n    float4 binormal : BINORMAL;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float texcoord1 : TEXCOORD1;\n    float4 texcoord : TEXCOORD;\n    float3 texcoord2 : TEXCOORD2;\n    float3 texcoord3 : TEXCOORD3;\n    float3 texcoord4 : TEXCOORD4;\n    float3 texcoord5 : TEXCOORD5;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float4 temp0, temp1;\n    // def c13, 2, -1, 0, 0\n    // dcl_position v0\n    // dcl_normal v1\n    // dcl_texcoord1 v2\n    // dcl_texcoord v3\n    // dcl_tangent v4\n    // dcl_binormal v5\n    // dcl_position o0\n    // dcl_texcoord1 o1.x\n    // dcl_texcoord o2\n    // dcl_texcoord2 o3.xyz\n    // dcl_texcoord3 o4.xyz\n    // dcl_texcoord4 o5.xyz\n    // dcl_texcoord5 o6.xyz\n    // dp4 r0.w, v0, c3\n    temp0.w = dot(i.position, (world_matrix._m03_m13_m23_m33));\n    // dp4 r0.x, v0, c0\n    temp0.x = dot(i.position, (world_matrix._m00_m10_m20_m30));\n    // dp4 r0.y, v0, c1\n    temp0.y = dot(i.position, (world_matrix._m01_m11_m21_m31));\n    // dp4 r0.z, v0, c2\n    temp0.z = dot(i.position, (world_matrix._m02_m12_m22_m32));\n    // dp4 r1.x, r0, c4\n    temp1.x = dot(temp0, (view_matrix._m00_m10_m20_m30));\n    // dp4 r1.y, r0, c5\n    temp1.y = dot(temp0, (view_matrix._m01_m11_m21_m31));\n    // dp4 r1.z, r0, c6\n    temp1.z = dot(temp0, (view_matrix._m02_m12_m22_m32));\n    // dp4 r1.w, r0, c7\n    temp1.w = dot(temp0, (view_matrix._m03_m13_m23_m33));\n    // mov o6.xyz, r0\n    o.texcoord5 = temp0;\n    // dp4 o0.x, r1, c8\n    o.position.x = dot(temp1, (proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, r1, c9\n    o.position.y = dot(temp1, (proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.w, r1, c11\n    o.position.w = dot(temp1, (proj_matrix._m03_m13_m23_m33));\n    // dp4 r0.x, r1, c10\n    temp0.x = dot(temp1, (proj_matrix._m02_m12_m22_m32));\n    // add o1.x, r0.x, c12.x\n    o.texcoord1 = temp0.x + camera_near_range.x;\n    // mov o0.z, r0.x\n    o.position.z = temp0.x;\n    // mad r0.xyz, v4, c13.x, c13.y\n    temp0.xyz = i.tangent.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 o3.x, r0, c0\n    o.texcoord2.x = dot(temp0.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 o4.x, r0, c1\n    o.texcoord3.x = dot(temp0.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o5.x, r0, c2\n    o.texcoord4.x = dot(temp0.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // mad r0.xyz, v5, c13.x, c13.y\n    temp0.xyz = i.binormal.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 o3.y, -r0, c0\n    o.texcoord2.y = dot(-temp0.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 o4.y, -r0, c1\n    o.texcoord3.y = dot(-temp0.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o5.y, -r0, c2\n    o.texcoord4.y = dot(-temp0.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // mad r0.xyz, v1, c13.x, c13.y\n    temp0.xyz = i.normal.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 o3.z, r0, c0\n    o.texcoord2.z = dot(temp0.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 o4.z, r0, c1\n    o.texcoord3.z = dot(temp0.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o5.z, r0, c2\n    o.texcoord4.z = dot(temp0.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // mov o2.xy, v3\n    o.texcoord.xy = i.texcoord.xy;\n    // mov o2.zw, v2.xyxy\n    o.texcoord.zw = i.texcoord1.xy;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."),(0,o.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"sampler2D bump_normal_texture : register(ps_3_0, s1);\nsampler2D diffuse_texture : register(ps_3_0, s0);\nfloat ref_alpha_ref : register(ps_3_0, c0);\nstruct PixelMain_Input\n{\n    float texcoord1 : TEXCOORD1;\n    float4 texcoord : TEXCOORD;\n    float3 texcoord2 : TEXCOORD2;\n    float3 texcoord3 : TEXCOORD3;\n    float3 texcoord4 : TEXCOORD4;\n    float4 vpos : vPos;\n};\n\nstruct PixelMain_Output\n{\n    float4 color1 : COLOR1;\n    float4 color : COLOR;\n    float4 color2 : COLOR2;\n};\n\nPixelMain_Output PixelMain(PixelMain_Input i)\n{\n    PixelMain_Output o;\n    float4 temp0, temp1;\n    float3 temp2;\n    // def c1, 1, -1, -0.5, 0.5\n    // def c2, 0.4, 0, 0, 0\n    // dcl_texcoord1 v0.x\n    // dcl_texcoord v1\n    // dcl_texcoord2 v2.xyz\n    // dcl_texcoord3 v3.xyz\n    // dcl_texcoord4 v4.xyz\n    // dcl vPos\n    // dcl_2d s0\n    // dcl_2d s1\n    // texld_pp r0, v1, s0\n    temp0 = /* not implemented _pp modifier */ tex2D(diffuse_texture, i.texcoord.xy);\n    // add r1.x, r0.w, -c0.x\n    temp1.x = temp0.w + -ref_alpha_ref.x;\n    // cmp r1, r1.x, c1.x, c1.y\n    temp1 = (temp1.x >= 0) ? float4(1, 1, 1, 1) : float4(-1, -1, -1, -1);\n    // texkill r1\n    clip(temp1);\n    // texld_pp r1, v1.zwzw, s1\n    temp1 = /* not implemented _pp modifier */ tex2D(bump_normal_texture, i.texcoord.zw);\n    // add_pp r1.xy, r1.wyzw, c1.z\n    temp1.xy = /* not implemented _pp modifier */ temp1.wy + float2(-0.5, -0.5);\n    // add_pp r1.xy, r1, r1\n    temp1.xy = /* not implemented _pp modifier */ temp1.xy + temp1.xy;\n    // mul_pp r1.w, r1.x, r1.x\n    temp1.w = /* not implemented _pp modifier */ temp1.x * temp1.x;\n    // mad_pp r1.w, r1.y, r1.y, -r1.w\n    temp1.w = /* not implemented _pp modifier */ temp1.y * temp1.y + -temp1.w;\n    // add_pp r1.w, -r1.w, c1.x\n    temp1.w = /* not implemented _pp modifier */ -temp1.w + float1(1);\n    // rsq_pp r1.w, r1.w\n    temp1.w = /* not implemented _pp modifier */ 1 / sqrt(temp1.w);\n    // rcp_pp r1.z, r1.w\n    temp1.z = /* not implemented _pp modifier */ 1.0f / temp1.w;\n    // dp3 r2.x, r1, v2\n    temp2.x = dot(temp1.xyz, i.texcoord2.xyz);\n    // dp3 r2.y, r1, v3\n    temp2.y = dot(temp1.xyz, i.texcoord3.xyz);\n    // dp3 r2.z, r1, v4\n    temp2.z = dot(temp1.xyz, i.texcoord4.xyz);\n    // nrm_pp r1.xyz, r2\n    temp1.xyz = /* not implemented _pp modifier */ normalize(temp2.xyz).xyz;\n    // cmp r1.w, vPos, c1.x, c1.y\n    temp1.w = (vPos.w >= 0) ? float1(1) : float1(-1);\n    // cmp_pp r1.xyz, -r1.w, r1, -r1\n    temp1.xyz = /* not implemented _pp modifier */ (-temp1.www >= 0) ? temp1.xyz : -temp1.xyz;\n    // nrm_pp r2.xyz, r1\n    temp2.xyz = /* not implemented _pp modifier */ normalize(temp1.xyz).xyz;\n    // mad_pp oC1.xyz, r2, c1.w, c1.w\n    o.color1.xyz = /* not implemented _pp modifier */ temp2.xyz * float3(0.5, 0.5, 0.5) + float3(0.5, 0.5, 0.5);\n    // mov_pp oC0.xyz, r0\n    o.color.xyz = /* not implemented _pp modifier */ temp0.xyz;\n    // mov_pp oC1.w, r0.w\n    o.color1.w = /* not implemented _pp modifier */ temp0.w;\n    // mov oC0.w, c2.x\n    o.color.w = float1(0.4);\n    // mov oC2, v0.x\n    o.color2 = i.texcoord1.x;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."),(0,o.kt)("h3",{id:"technique-self_illumination"},"Technique ",(0,o.kt)("inlineCode",{parentName:"h3"},"self_illumination")),(0,o.kt)("h3",{id:"render-states-1"},"Render States"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 3,\n    D3DRS_ZWRITEENABLE = 1,\n    D3DRS_ALPHABLENDENABLE = 1,\n    D3DRS_CULLMODE = 1,\n    D3DRS_COLORWRITEENABLE = 15,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n    D3DRS_BLENDOP = 1,\n    D3DRS_SRCBLEND = 2,\n    D3DRS_DESTBLEND = 2,\n};\n")),(0,o.kt)("h3",{id:"sampler-states-1"},"Sampler States"),(0,o.kt)("h4",{id:"sampler-0-1"},"Sampler 0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h3",{id:"shaders-1"},"Shaders"),(0,o.kt)("h4",{id:"vertex-shader-1"},"Vertex Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"column_major float4x4 view_proj_matrix : register(vs_3_0, c0);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 texcoord : TEXCOORD;\n    float4 texcoord3 : TEXCOORD3;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float2 texcoord : TEXCOORD;\n    float2 texcoord6 : TEXCOORD6;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    // dcl_position v0\n    // dcl_texcoord v1\n    // dcl_texcoord3 v2\n    // dcl_position o0\n    // dcl_texcoord o1.xy\n    // dcl_texcoord6 o2.xy\n    // dp4 o0.x, v0, c0\n    o.position.x = dot(i.position, (view_proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, v0, c1\n    o.position.y = dot(i.position, (view_proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.z, v0, c2\n    o.position.z = dot(i.position, (view_proj_matrix._m02_m12_m22_m32));\n    // dp4 o0.w, v0, c3\n    o.position.w = dot(i.position, (view_proj_matrix._m03_m13_m23_m33));\n    // mov o1.xy, v1\n    o.texcoord = i.texcoord;\n    // mov o2.xy, v2\n    o.texcoord6 = i.texcoord3;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."),(0,o.kt)("h4",{id:"pixel-shader-1"},"Pixel Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"float ref_il_multiplier : register(ps_3_0, c0);\nsampler2D self_illumination_texture : register(ps_3_0, s0);\nfloat4 PixelMain(float2 texcoord : TEXCOORD) : COLOR\n{\n    float4 out_color;\n    float4 temp0;\n    // def c1, 1, 0, 0, 0\n    // dcl_texcoord v0.xy\n    // dcl_2d s0\n    // texld_pp r0, v0, s0\n    temp0 = /* not implemented _pp modifier */ tex2D(self_illumination_texture, texcoord.xy);\n    // mul_pp oC0.xyz, r0, c0.x\n    out_color.xyz = /* not implemented _pp modifier */ temp0.xyz * ref_il_multiplier.xxx;\n    // mov_pp oC0.w, c1.x\n    out_color.w = /* not implemented _pp modifier */ float1(1);\n    // \n\n    return out_color;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."))}c.isMDXComponent=!0}}]);