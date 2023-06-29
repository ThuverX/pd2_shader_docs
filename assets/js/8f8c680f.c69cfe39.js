"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[66134],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>s});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):m(m({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",_={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},x=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=i(r),x=o,s=p["".concat(l,".").concat(x)]||p[x]||_[x]||a;return r?n.createElement(s,m(m({ref:t},c),{},{components:r})):n.createElement(s,m({ref:t},c))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,m=new Array(a);m[0]=x;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[p]="string"==typeof e?e:o,m[1]=d;for(var i=2;i<a;i++)m[i]=r[i];return n.createElement.apply(null,m)}return n.createElement.apply(null,r)}x.displayName="MDXCreateElement"},27512:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>m,default:()=>_,frontMatter:()=>a,metadata:()=>d,toc:()=>i});var n=r(87462),o=(r(67294),r(3905));const a={id:0xebd364c0b3138800,title:"Opacity Default Diffuse Texture Normalmap Self Illumination"},m="Opacity Default Diffuse Texture Normalmap Self Illumination",d={unversionedId:"Generated/Shaders/Base/[4400-4500]/16993036597799913000",id:"Generated/Shaders/Base/[4400-4500]/16993036597799913000",title:"Opacity Default Diffuse Texture Normalmap Self Illumination",description:"(opacityDIFFUSETEXTURESELFILLUMINATION, 0xebd364c0b3138bb7)",source:"@site/docs/Generated/Shaders/Base/[4400-4500]/0xebd364c0b3138bb7.mdx",sourceDirName:"Generated/Shaders/Base/[4400-4500]",slug:"/Generated/Shaders/Base/[4400-4500]/16993036597799913000",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[4400-4500]/16993036597799913000",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/docs/Generated/Shaders/Base/[4400-4500]/0xebd364c0b3138bb7.mdx",tags:[],version:"current",frontMatter:{id:"16993036597799913000",title:"Opacity Default Diffuse Texture Normalmap Self Illumination"},sidebar:"docsSidebar",previous:{title:"Generic Shadow Caster Ati Diffuse Texture Double Sided Skinned 3weights",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[4400-4500]/16991086640243830000"},next:{title:"Generic Shadow Caster Detail Texture Diffuse Texture Normalmap",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[4400-4500]/16996585354678004000"}},l={},i=[{value:"Technique <code>transparent</code>",id:"technique-transparent",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],c={toc:i},p="wrapper";function _(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"opacity-default-diffuse-texture-normalmap-self-illumination"},"Opacity Default Diffuse Texture Normalmap Self Illumination"),(0,o.kt)("p",null,"(",(0,o.kt)("inlineCode",{parentName:"p"},"opacity:default:DIFFUSE_TEXTURE:NORMALMAP:SELF_ILLUMINATION"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"0xebd364c0b3138bb7"),")"),(0,o.kt)("h3",{id:"technique-transparent"},"Technique ",(0,o.kt)("inlineCode",{parentName:"h3"},"transparent")),(0,o.kt)("h3",{id:"render-states"},"Render States"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 0,\n    D3DRS_ALPHABLENDENABLE = 1,\n    D3DRS_CULLMODE = 2,\n    D3DRS_COLORWRITEENABLE = 7,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 1,\n    D3DRS_STENCILFUNC = 6,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 5,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 4,\n    D3DRS_STENCILWRITEMASK = 5,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n    D3DRS_BLENDOP = 1,\n    D3DRS_DESTBLEND = 6,\n    D3DRS_SRCBLEND = 5,\n};\n")),(0,o.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,o.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h3",{id:"shaders"},"Shaders"),(0,o.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"float camera_near_range : register(vs_3_0, c12);\ncolumn_major float4x4 proj_matrix : register(vs_3_0, c8);\ncolumn_major float4x4 view_matrix : register(vs_3_0, c4);\ncolumn_major float4x4 world_matrix : register(vs_3_0, c0);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 texcoord : TEXCOORD;\n    float4 texcoord3 : TEXCOORD3;\n    float4 normal : NORMAL;\n    float4 texcoord1 : TEXCOORD1;\n    float4 texcoord4 : TEXCOORD4;\n    float4 tangent : TANGENT;\n    float4 binormal : BINORMAL;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float4 texcoord : TEXCOORD;\n    float3 texcoord3 : TEXCOORD3;\n    float2 texcoord6 : TEXCOORD6;\n    float2 texcoord1 : TEXCOORD1;\n    float3 texcoord4 : TEXCOORD4;\n    float4 texcoord5 : TEXCOORD5;\n    float3 texcoord2 : TEXCOORD2;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float4 temp0, temp1;\n    // def c13, 2, -1, 0, 0\n    // dcl_position v0\n    // dcl_texcoord v1\n    // dcl_texcoord3 v2\n    // dcl_normal v3\n    // dcl_texcoord1 v4\n    // dcl_texcoord4 v5\n    // dcl_tangent v6\n    // dcl_binormal v7\n    // dcl_position o0\n    // dcl_texcoord o1\n    // dcl_texcoord3 o2.xyz\n    // dcl_texcoord6 o3.xy\n    // dcl_texcoord1 o4.xy\n    // dcl_texcoord4 o5.xyz\n    // dcl_texcoord5 o6\n    // dcl_texcoord2 o7.xyz\n    // dp4 r0.w, v0, c3\n    temp0.w = dot(i.position, (world_matrix._m03_m13_m23_m33));\n    // dp4 r0.x, v0, c0\n    temp0.x = dot(i.position, (world_matrix._m00_m10_m20_m30));\n    // dp4 r0.y, v0, c1\n    temp0.y = dot(i.position, (world_matrix._m01_m11_m21_m31));\n    // dp4 r0.z, v0, c2\n    temp0.z = dot(i.position, (world_matrix._m02_m12_m22_m32));\n    // dp4 r1.x, r0, c4\n    temp1.x = dot(temp0, (view_matrix._m00_m10_m20_m30));\n    // dp4 r1.y, r0, c5\n    temp1.y = dot(temp0, (view_matrix._m01_m11_m21_m31));\n    // dp4 r1.z, r0, c6\n    temp1.z = dot(temp0, (view_matrix._m02_m12_m22_m32));\n    // dp4 r1.w, r0, c7\n    temp1.w = dot(temp0, (view_matrix._m03_m13_m23_m33));\n    // mov o6.xyz, r0\n    o.texcoord5.xyz = temp0.xyz;\n    // dp4 o0.x, r1, c8\n    o.position.x = dot(temp1, (proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, r1, c9\n    o.position.y = dot(temp1, (proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.w, r1, c11\n    o.position.w = dot(temp1, (proj_matrix._m03_m13_m23_m33));\n    // dp4 r0.x, r1, c10\n    temp0.x = dot(temp1, (proj_matrix._m02_m12_m22_m32));\n    // mad r0.yzw, v6.xxyz, c13.x, c13.y\n    temp0.yzw = i.tangent.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 o7.x, r0.yzww, c0\n    o.texcoord2.x = dot(temp0.yzw, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 o2.x, r0.yzww, c1\n    o.texcoord3.x = dot(temp0.yzw, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o5.x, r0.yzww, c2\n    o.texcoord4.x = dot(temp0.yzw, (world_matrix._m02_m12_m22_m32).xyz);\n    // mad r0.yzw, v7.xxyz, c13.x, c13.y\n    temp0.yzw = i.binormal.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 o7.y, -r0.yzww, c0\n    o.texcoord2.y = dot(-temp0.yzw, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 o2.y, -r0.yzww, c1\n    o.texcoord3.y = dot(-temp0.yzw, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o5.y, -r0.yzww, c2\n    o.texcoord4.y = dot(-temp0.yzw, (world_matrix._m02_m12_m22_m32).xyz);\n    // mad r0.yzw, v3.xxyz, c13.x, c13.y\n    temp0.yzw = i.normal.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 o7.z, r0.yzww, c0\n    o.texcoord2.z = dot(temp0.yzw, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 o2.z, r0.yzww, c1\n    o.texcoord3.z = dot(temp0.yzw, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o5.z, r0.yzww, c2\n    o.texcoord4.z = dot(temp0.yzw, (world_matrix._m02_m12_m22_m32).xyz);\n    // add o6.w, r0.x, c12.x\n    o.texcoord5.w = temp0.x + camera_near_range.x;\n    // mov o0.z, r0.x\n    o.position.z = temp0.x;\n    // mov o1.xy, v1\n    o.texcoord.xy = i.texcoord.xy;\n    // mov o1.zw, v4.xyxy\n    o.texcoord.zw = i.texcoord1.xy;\n    // mov o3.xy, v2\n    o.texcoord6 = i.texcoord3;\n    // mov o4.xy, v5\n    o.texcoord1 = i.texcoord4;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."),(0,o.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"float ref_il_multiplier : register(ps_3_0, c0);\nsampler2D self_illumination_texture : register(ps_3_0, s0);\nfloat4 PixelMain(float2 texcoord : TEXCOORD) : COLOR\n{\n    float4 out_color;\n    float4 temp0;\n    // def c1, 1, 0, 0, 0\n    // dcl_texcoord v0.xy\n    // dcl_2d s0\n    // texld_pp r0, v0, s0\n    temp0 = /* not implemented _pp modifier */ tex2D(self_illumination_texture, texcoord.xy);\n    // mul_pp oC0.xyz, r0, c0.x\n    out_color.xyz = /* not implemented _pp modifier */ temp0.xyz * ref_il_multiplier.xxx;\n    // mov_pp oC0.w, c1.x\n    out_color.w = /* not implemented _pp modifier */ float1(1);\n    // \n\n    return out_color;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."))}_.isMDXComponent=!0}}]);