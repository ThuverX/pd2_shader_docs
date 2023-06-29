"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[53752],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>s});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):m(m({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},i="mdxType",x={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=_(e,["components","mdxType","originalType","parentName"]),i=d(r),p=o,s=i["".concat(l,".").concat(p)]||i[p]||x[p]||a;return r?n.createElement(s,m(m({ref:t},c),{},{components:r})):n.createElement(s,m({ref:t},c))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,m=new Array(a);m[0]=p;var _={};for(var l in t)hasOwnProperty.call(t,l)&&(_[l]=t[l]);_.originalType=e,_[i]="string"==typeof e?e:o,m[1]=_;for(var d=2;d<a;d++)m[d]=r[d];return n.createElement.apply(null,m)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},66703:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>m,default:()=>x,frontMatter:()=>a,metadata:()=>_,toc:()=>d});var n=r(87462),o=(r(67294),r(3905));const a={id:0xdbd9f0f113719800,title:"Effect Default Lazer"},m="Effect Default Lazer",_={unversionedId:"Generated/Shaders/Base/[4100-4200]/15841958082456426000",id:"Generated/Shaders/Base/[4100-4200]/15841958082456426000",title:"Effect Default Lazer",description:"(effectLAZER, 0xdbd9f0f1137197ea)",source:"@site/docs/Generated/Shaders/Base/[4100-4200]/0xdbd9f0f1137197ea.mdx",sourceDirName:"Generated/Shaders/Base/[4100-4200]",slug:"/Generated/Shaders/Base/[4100-4200]/15841958082456426000",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[4100-4200]/15841958082456426000",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/docs/Generated/Shaders/Base/[4100-4200]/0xdbd9f0f1137197ea.mdx",tags:[],version:"current",frontMatter:{id:"15841958082456426000",title:"Effect Default Lazer"},sidebar:"docsSidebar",previous:{title:"Generic Default Cube Environment Mapping Diffuse Texture Instanced Simple Tint",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[4100-4200]/15841179654534363000"},next:{title:"Generic Shadow Caster Alpha Masked Diffuse Texture Double Sided External Alpha Ref Normalmap Opacity Texture Rl Civilians Skinned 3weights",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[4100-4200]/15846845052564589000"}},l={},d=[{value:"Technique <code>additive</code>",id:"technique-additive",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4},{value:"Technique <code>effect_glow</code>",id:"technique-effect_glow",level:3},{value:"Render States",id:"render-states-1",level:3},{value:"Sampler States",id:"sampler-states-1",level:3},{value:"Sampler 0",id:"sampler-0-1",level:4},{value:"Shaders",id:"shaders-1",level:3},{value:"Vertex Shader",id:"vertex-shader-1",level:4},{value:"Pixel Shader",id:"pixel-shader-1",level:4}],c={toc:d},i="wrapper";function x(e){let{components:t,...r}=e;return(0,o.kt)(i,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"effect-default-lazer"},"Effect Default Lazer"),(0,o.kt)("p",null,"(",(0,o.kt)("inlineCode",{parentName:"p"},"effect:default:LAZER"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"0xdbd9f0f1137197ea"),")"),(0,o.kt)("h3",{id:"technique-additive"},"Technique ",(0,o.kt)("inlineCode",{parentName:"h3"},"additive")),(0,o.kt)("h3",{id:"render-states"},"Render States"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 0,\n    D3DRS_ALPHABLENDENABLE = 1,\n    D3DRS_CULLMODE = 2,\n    D3DRS_COLORWRITEENABLE = 7,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n    D3DRS_BLENDOP = 1,\n    D3DRS_DESTBLEND = 2,\n    D3DRS_SRCBLEND = 5,\n};\n")),(0,o.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,o.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h3",{id:"shaders"},"Shaders"),(0,o.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"float3 ref_lazer_color : register(vs_3_0, c8);\nfloat ref_lazer_length : register(vs_3_0, c9);\ncolumn_major float4x4 view_proj_matrix : register(vs_3_0, c0);\ncolumn_major float4x4 world_matrix : register(vs_3_0, c4);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 normal : NORMAL;\n    float4 texcoord : TEXCOORD;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float4 texcoord : TEXCOORD;\n    float4 texcoord1 : TEXCOORD1;\n    float4 texcoord2 : TEXCOORD2;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float4 temp0;\n    // def c10, 2, -1, 0.25, 1\n    // dcl_position v0\n    // dcl_normal v1\n    // dcl_texcoord v2\n    // dcl_position o0\n    // dcl_texcoord o1\n    // dcl_texcoord1 o2\n    // dcl_texcoord2 o3\n    // mad r0.xyz, v1, c10.x, c10.y\n    temp0.xyz = i.normal.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 o2.x, r0, c4\n    o.texcoord1.x = dot(temp0.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 o2.y, r0, c5\n    o.texcoord1.y = dot(temp0.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o2.z, r0, c6\n    o.texcoord1.z = dot(temp0.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // mov r0.y, v0.y\n    temp0.y = i.position.y;\n    // mad r0.y, c9.x, v2.x, r0.y\n    temp0.y = ref_lazer_length.x * i.texcoord.x + temp0.y;\n    // mul r0.xzw, c10.zyzw, v0\n    temp0.xzw = float3(0.25, 0.25, 1) * i.position.xzw;\n    // dp4 o3.x, r0, c4\n    o.texcoord2.x = dot(temp0, (world_matrix._m00_m10_m20_m30));\n    // dp4 o3.y, r0, c5\n    o.texcoord2.y = dot(temp0, (world_matrix._m01_m11_m21_m31));\n    // dp4 o3.z, r0, c6\n    o.texcoord2.z = dot(temp0, (world_matrix._m02_m12_m22_m32));\n    // dp4 o3.w, r0, c7\n    o.texcoord2.w = dot(temp0, (world_matrix._m03_m13_m23_m33));\n    // dp4 o0.x, r0, c0\n    o.position.x = dot(temp0, (view_proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, r0, c1\n    o.position.y = dot(temp0, (view_proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.z, r0, c2\n    o.position.z = dot(temp0, (view_proj_matrix._m02_m12_m22_m32));\n    // dp4 o0.w, r0, c3\n    o.position.w = dot(temp0, (view_proj_matrix._m03_m13_m23_m33));\n    // mov o1.xy, v2\n    o.texcoord.xy = i.texcoord.xy;\n    // mov o1.zw, c8.xyxy\n    o.texcoord.zw = ref_lazer_color.xy;\n    // mov o2.w, c8.z\n    o.texcoord1.w = ref_lazer_color.z;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."),(0,o.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"column_major float4x4 camera_world_matrix : register(ps_3_0, c0);\nsampler2D diffuse_texture : register(ps_3_0, s0);\nfloat ref_lazer_smoke_scale : register(ps_3_0, c4);\nfloat ref_lazer_time_scale : register(ps_3_0, c5);\nfloat ref_time : register(ps_3_0, c3);\nstruct PixelMain_Input\n{\n    float4 texcoord : TEXCOORD;\n    float4 texcoord1 : TEXCOORD1;\n    float3 texcoord2 : TEXCOORD2;\n};\n\nfloat4 PixelMain(PixelMain_Input i) : COLOR\n{\n    float4 out_color;\n    float3 temp0;\n    float4 temp1;\n    // def c6, 0.5, 4, 1, 0\n    // dcl_texcoord v0.zw\n    // dcl_texcoord1 v1\n    // dcl_texcoord2 v2.xyz\n    // dcl_2d s0\n    // add r0.x, c0.w, -v2.x\n    temp0.x = (camera_world_matrix._m00_m10_m20_m30).w + -i.texcoord2.x;\n    // add r0.y, c1.w, -v2.y\n    temp0.y = (camera_world_matrix._m01_m11_m21_m31).w + -i.texcoord2.y;\n    // add r0.z, c2.w, -v2.z\n    temp0.z = (camera_world_matrix._m02_m12_m22_m32).w + -i.texcoord2.z;\n    // nrm r1.xyz, r0\n    temp1.xyz = normalize(temp0.xyz).xyz;\n    // dp3 r0.x, v1, r1\n    temp0.x = dot(i.texcoord1.xyz, temp1.xyz);\n    // mov r1.x, c3.x\n    temp1.x = ref_time.x;\n    // mul r0.y, r1.x, c5.x\n    temp0.y = temp1.x * ref_lazer_time_scale.x;\n    // mul r0.z, c4.x, v2.z\n    temp0.z = ref_lazer_smoke_scale.x * i.texcoord2.z;\n    // mad r0.y, r0.z, c6.x, r0.y\n    temp0.y = temp0.z * float1(0.5) + temp0.y;\n    // mad r0.yz, v2.xxyw, c4.x, r0.y\n    temp0.yz = i.texcoord2.xy * ref_lazer_smoke_scale.xx + temp0.yy;\n    // texld r1, r0.yzzw, s0\n    temp1 = tex2D(diffuse_texture, temp0.yz);\n    // mul r0.x, r0.x, r1.x\n    temp0.x = temp0.x * temp1.x;\n    // mov r1.xy, v0.zwzw\n    temp1.xy = i.texcoord.zw;\n    // mov r1.z, v1.w\n    temp1.z = i.texcoord1.w;\n    // mul r0.xyz, r0.x, r1\n    temp0.xyz = temp0.xxx * temp1.xyz;\n    // mul oC0.xyz, r0, c6.y\n    out_color.xyz = temp0.xyz * float3(4, 4, 4);\n    // mov oC0.w, c6.z\n    out_color.w = float1(1);\n    // \n\n    return out_color;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."),(0,o.kt)("h3",{id:"technique-effect_glow"},"Technique ",(0,o.kt)("inlineCode",{parentName:"h3"},"effect_glow")),(0,o.kt)("h3",{id:"render-states-1"},"Render States"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 0,\n    D3DRS_ALPHABLENDENABLE = 1,\n    D3DRS_CULLMODE = 1,\n    D3DRS_COLORWRITEENABLE = 8,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n    D3DRS_BLENDOP = 1,\n    D3DRS_DESTBLEND = 2,\n    D3DRS_SRCBLEND = 2,\n};\n")),(0,o.kt)("h3",{id:"sampler-states-1"},"Sampler States"),(0,o.kt)("h4",{id:"sampler-0-1"},"Sampler 0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h3",{id:"shaders-1"},"Shaders"),(0,o.kt)("h4",{id:"vertex-shader-1"},"Vertex Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"float3 ref_lazer_color : register(vs_3_0, c8);\nfloat ref_lazer_length : register(vs_3_0, c9);\ncolumn_major float4x4 view_proj_matrix : register(vs_3_0, c0);\ncolumn_major float4x4 world_matrix : register(vs_3_0, c4);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 normal : NORMAL;\n    float4 texcoord : TEXCOORD;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float4 texcoord : TEXCOORD;\n    float4 texcoord1 : TEXCOORD1;\n    float4 texcoord2 : TEXCOORD2;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float4 temp0;\n    float4 temp1;\n    // def c10, 2, -1, 0.37, -0.25\n    // dcl_position v0\n    // dcl_normal v1\n    // dcl_texcoord v2\n    // dcl_position o0\n    // dcl_texcoord o1\n    // dcl_texcoord1 o2\n    // dcl_texcoord2 o3\n    // mad r0.xyz, v1, c10.x, c10.y\n    temp0.xyz = i.normal.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 o2.x, r0, c4\n    o.texcoord1.x = dot(temp0.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 o2.y, r0, c5\n    o.texcoord1.y = dot(temp0.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o2.z, r0, c6\n    o.texcoord1.z = dot(temp0.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // mov r0.y, v0.y\n    temp0.y = i.position.y;\n    // mad r0.y, c9.x, v2.x, r0.y\n    temp0.y = ref_lazer_length.x * i.texcoord.x + temp0.y;\n    // mul r0.xzw, -c10.wywy, v0\n    temp0.xzw = float3(0.25, 0.25, 1) * i.position.xzw;\n    // dp4 o3.x, r0, c4\n    o.texcoord2.x = dot(temp0, (world_matrix._m00_m10_m20_m30));\n    // dp4 o3.y, r0, c5\n    o.texcoord2.y = dot(temp0, (world_matrix._m01_m11_m21_m31));\n    // dp4 o3.z, r0, c6\n    o.texcoord2.z = dot(temp0, (world_matrix._m02_m12_m22_m32));\n    // dp4 o3.w, r0, c7\n    o.texcoord2.w = dot(temp0, (world_matrix._m03_m13_m23_m33));\n    // dp4 o0.x, r0, c0\n    o.position.x = dot(temp0, (view_proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, r0, c1\n    o.position.y = dot(temp0, (view_proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.z, r0, c2\n    o.position.z = dot(temp0, (view_proj_matrix._m02_m12_m22_m32));\n    // dp4 o0.w, r0, c3\n    o.position.w = dot(temp0, (view_proj_matrix._m03_m13_m23_m33));\n    // mov r0.yz, v2.xxyw\n    temp0.yz = i.texcoord.xy;\n    // mov r1.z, c10.z\n    temp1.z = float1(0.37);\n    // dp3 r0.x, c8, r1.z\n    temp0.x = dot(ref_lazer_color.xyz, temp1.z);\n    // mov o1, r0.yzxx\n    o.texcoord = temp0.yzxx;\n    // mov o2.w, r0.x\n    o.texcoord1.w = temp0.x;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."),(0,o.kt)("h4",{id:"pixel-shader-1"},"Pixel Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"column_major float4x4 camera_world_matrix : register(ps_3_0, c0);\nsampler2D diffuse_texture : register(ps_3_0, s0);\nfloat ref_lazer_smoke_scale : register(ps_3_0, c4);\nfloat ref_lazer_time_scale : register(ps_3_0, c5);\nfloat ref_time : register(ps_3_0, c3);\nstruct PixelMain_Input\n{\n    float3 texcoord : TEXCOORD;\n    float3 texcoord1 : TEXCOORD1;\n    float3 texcoord2 : TEXCOORD2;\n};\n\nfloat4 PixelMain(PixelMain_Input i) : COLOR\n{\n    float4 out_color;\n    float3 temp0;\n    float4 temp1;\n    // def c6, 0.5, 4, 1, 0\n    // dcl_texcoord v0.z\n    // dcl_texcoord1 v1.xyz\n    // dcl_texcoord2 v2.xyz\n    // dcl_2d s0\n    // add r0.x, c0.w, -v2.x\n    temp0.x = (camera_world_matrix._m00_m10_m20_m30).w + -i.texcoord2.x;\n    // add r0.y, c1.w, -v2.y\n    temp0.y = (camera_world_matrix._m01_m11_m21_m31).w + -i.texcoord2.y;\n    // add r0.z, c2.w, -v2.z\n    temp0.z = (camera_world_matrix._m02_m12_m22_m32).w + -i.texcoord2.z;\n    // nrm r1.xyz, r0\n    temp1.xyz = normalize(temp0.xyz).xyz;\n    // dp3 r0.x, v1, r1\n    temp0.x = dot(i.texcoord1.xyz, temp1.xyz);\n    // mov r1.x, c3.x\n    temp1.x = ref_time.x;\n    // mul r0.y, r1.x, c5.x\n    temp0.y = temp1.x * ref_lazer_time_scale.x;\n    // mul r0.z, c4.x, v2.z\n    temp0.z = ref_lazer_smoke_scale.x * i.texcoord2.z;\n    // mad r0.y, r0.z, c6.x, r0.y\n    temp0.y = temp0.z * float1(0.5) + temp0.y;\n    // mad r0.yz, v2.xxyw, c4.x, r0.y\n    temp0.yz = i.texcoord2.xy * ref_lazer_smoke_scale.xx + temp0.yy;\n    // texld r1, r0.yzzw, s0\n    temp1 = tex2D(diffuse_texture, temp0.yz);\n    // mul r0.x, r0.x, r1.x\n    temp0.x = temp0.x * temp1.x;\n    // mul r0.y, r0.x, v0.z\n    temp0.y = temp0.x * i.texcoord.z;\n    // mov oC0.x, r0.x\n    out_color.x = temp0.x;\n    // mul oC0.w, r0.y, c6.y\n    out_color.w = temp0.y * float1(4);\n    // mov oC0.yz, c6.z\n    out_color.yz = float2(1, 1);\n    // \n\n    return out_color;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."))}x.isMDXComponent=!0}}]);