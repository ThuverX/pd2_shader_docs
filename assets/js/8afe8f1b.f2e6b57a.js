"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[96394],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>s});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),i=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(d.Provider,{value:t},e.children)},_="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},x=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),_=i(r),x=o,s=_["".concat(d,".").concat(x)]||_[x]||c[x]||a;return r?n.createElement(s,p(p({ref:t},l),{},{components:r})):n.createElement(s,p({ref:t},l))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=x;var m={};for(var d in t)hasOwnProperty.call(t,d)&&(m[d]=t[d]);m.originalType=e,m[_]="string"==typeof e?e:o,p[1]=m;for(var i=2;i<a;i++)p[i]=r[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}x.displayName="MDXCreateElement"},33392:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>c,frontMatter:()=>a,metadata:()=>m,toc:()=>i});var n=r(87462),o=(r(67294),r(3905));const a={id:0x2a77a713ea021000,title:"Opacity Default Ati Diffuse Texture Opacity By Depth"},p="Opacity Default Ati Diffuse Texture Opacity By Depth",m={unversionedId:"Generated/Shaders/Base/[800-900]/3060098175793762300",id:"Generated/Shaders/Base/[800-900]/3060098175793762300",title:"Opacity Default Ati Diffuse Texture Opacity By Depth",description:"(opacityATIOPACITYBY_DEPTH, 0x2a77a713ea021091)",source:"@site/docs/Generated/Shaders/Base/[800-900]/0x2a77a713ea021091.mdx",sourceDirName:"Generated/Shaders/Base/[800-900]",slug:"/Generated/Shaders/Base/[800-900]/3060098175793762300",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[800-900]/3060098175793762300",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/docs/Generated/Shaders/Base/[800-900]/0x2a77a713ea021091.mdx",tags:[],version:"current",frontMatter:{id:"3060098175793762300",title:"Opacity Default Ati Diffuse Texture Opacity By Depth"},sidebar:"docsSidebar",previous:{title:"Generic Default Diffuse Texture Diffuse Uvoffset",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[800-900]/3058610672514041000"},next:{title:"Generic Shadow Caster Contour Diffuse Texture Normalmap Self Illumination Self Illumination Bloom Skinned 3weights",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[800-900]/3064436253756233000"}},d={},i=[{value:"Technique <code>transparent</code>",id:"technique-transparent",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Sampler 1",id:"sampler-1",level:4},{value:"Sampler 2",id:"sampler-2",level:4},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],l={toc:i},_="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(_,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"opacity-default-ati-diffuse-texture-opacity-by-depth"},"Opacity Default Ati Diffuse Texture Opacity By Depth"),(0,o.kt)("p",null,"(",(0,o.kt)("inlineCode",{parentName:"p"},"opacity:default:ATI:DIFFUSE_TEXTURE:OPACITY_BY_DEPTH"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"0x2a77a713ea021091"),")"),(0,o.kt)("h3",{id:"technique-transparent"},"Technique ",(0,o.kt)("inlineCode",{parentName:"h3"},"transparent")),(0,o.kt)("h3",{id:"render-states"},"Render States"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 0,\n    D3DRS_ALPHABLENDENABLE = 1,\n    D3DRS_CULLMODE = 2,\n    D3DRS_COLORWRITEENABLE = 7,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 1,\n    D3DRS_STENCILFUNC = 6,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 5,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 4,\n    D3DRS_STENCILWRITEMASK = 5,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n    D3DRS_BLENDOP = 1,\n    D3DRS_DESTBLEND = 6,\n    D3DRS_SRCBLEND = 5,\n};\n")),(0,o.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,o.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 3,\n    D3DSAMP_ADDRESSV = 3,\n    D3DSAMP_MAGFILTER = 1,\n    D3DSAMP_MINFILTER = 1,\n    D3DSAMP_MIPFILTER = 1,\n};\n")),(0,o.kt)("h4",{id:"sampler-1"},"Sampler 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h4",{id:"sampler-2"},"Sampler 2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h3",{id:"shaders"},"Shaders"),(0,o.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"float camera_near_range : register(vs_3_0, c12);\ncolumn_major float4x4 proj_matrix : register(vs_3_0, c8);\nfloat3 render_target_texel_offset : register(vs_3_0, c13);\ncolumn_major float4x4 view_matrix : register(vs_3_0, c4);\nfloat3 vp_offset : register(vs_3_0, c14);\nfloat3 vp_size : register(vs_3_0, c15);\ncolumn_major float4x4 world_matrix : register(vs_3_0, c0);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 normal : NORMAL;\n    float4 texcoord4 : TEXCOORD4;\n    float4 texcoord : TEXCOORD;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float4 texcoord6 : TEXCOORD6;\n    float2 texcoord1 : TEXCOORD1;\n    float4 texcoord5 : TEXCOORD5;\n    float2 texcoord : TEXCOORD;\n    float3 texcoord2 : TEXCOORD2;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float4 temp0, temp1, temp2;\n    float temp3;\n    // def c16, 2, -1, 0.5, 1\n    // dcl_position v0\n    // dcl_normal v1\n    // dcl_texcoord4 v2\n    // dcl_texcoord v3\n    // dcl_position o0\n    // dcl_texcoord6 o1\n    // dcl_texcoord1 o2.xy\n    // dcl_texcoord5 o3\n    // dcl_texcoord o4.xy\n    // dcl_texcoord2 o5.xyz\n    // mov r0.xz, c16\n    temp0.xz = float2(2, 0.5);\n    // add r0.yz, r0.z, c13.xxyw\n    temp0.yz = temp0.zz + render_target_texel_offset.xy;\n    // mov r1.xy, c15\n    temp1.xy = vp_size.xy;\n    // mad r0.xw, c14.xyzy, r0.x, r1.xyzy\n    temp0.xw = vp_offset.xy * temp0.xx + temp1.xy;\n    // add r0.xw, r0, c16.y\n    temp0.xw = temp0.xw + float2(-1, -1);\n    // dp4 r1.w, v0, c3\n    temp1.w = dot(i.position, (world_matrix._m03_m13_m23_m33));\n    // dp4 r1.x, v0, c0\n    temp1.x = dot(i.position, (world_matrix._m00_m10_m20_m30));\n    // dp4 r1.y, v0, c1\n    temp1.y = dot(i.position, (world_matrix._m01_m11_m21_m31));\n    // dp4 r1.z, v0, c2\n    temp1.z = dot(i.position, (world_matrix._m02_m12_m22_m32));\n    // dp4 r2.x, r1, c4\n    temp2.x = dot(temp1, (view_matrix._m00_m10_m20_m30));\n    // dp4 r2.y, r1, c5\n    temp2.y = dot(temp1, (view_matrix._m01_m11_m21_m31));\n    // dp4 r2.z, r1, c6\n    temp2.z = dot(temp1, (view_matrix._m02_m12_m22_m32));\n    // dp4 r2.w, r1, c7\n    temp2.w = dot(temp1, (view_matrix._m03_m13_m23_m33));\n    // mov o3.xyz, r1\n    o.texcoord5.xyz = temp1.xyz;\n    // dp4 r1.w, r2, c11\n    temp1.w = dot(temp2, (proj_matrix._m03_m13_m23_m33));\n    // mul r0.xw, r0, r1.w\n    temp0.xw = temp0.xw * temp1.ww;\n    // dp4 r1.x, r2, c8\n    temp1.x = dot(temp2, (proj_matrix._m00_m10_m20_m30));\n    // mad r0.x, r1.x, c15.x, r0.x\n    temp0.x = temp1.x * vp_size.x + temp0.x;\n    // add r3.x, r1.w, r1.w\n    temp3.x = temp1.w + temp1.w;\n    // mad o1.x, r3.x, r0.y, r0.x\n    o.texcoord6.x = temp3.x * temp0.y + temp0.x;\n    // dp4 r1.y, r2, c9\n    temp1.y = dot(temp2, (proj_matrix._m01_m11_m21_m31));\n    // dp4 r1.z, r2, c10\n    temp1.z = dot(temp2, (proj_matrix._m02_m12_m22_m32));\n    // mad r0.x, r1.y, -c15.y, r0.w\n    temp0.x = temp1.y * -vp_size.y + temp0.w;\n    // mov o0, r1\n    o.position = temp1;\n    // mul o1.zw, r1, c16.xywx\n    o.texcoord6.zw = temp1.zw * float2(1, 2);\n    // add o3.w, r1.z, c12.x\n    o.texcoord5.w = temp1.z + camera_near_range.x;\n    // mad o1.y, r3.x, r0.z, r0.x\n    o.texcoord6.y = temp3.x * temp0.z + temp0.x;\n    // mad r0.xyz, v1, c16.x, c16.y\n    temp0.xyz = i.normal.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 o5.x, r0, c0\n    o.texcoord2.x = dot(temp0.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 o5.y, r0, c1\n    o.texcoord2.y = dot(temp0.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o5.z, r0, c2\n    o.texcoord2.z = dot(temp0.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // mov o2.xy, v2\n    o.texcoord1 = i.texcoord4;\n    // mov o4.xy, v3\n    o.texcoord = i.texcoord;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."),(0,o.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"sampler2D depth : register(ps_3_0, s0);\nsampler2D diffuse_texture : register(ps_3_0, s2);\nsampler2D opacity_texture : register(ps_3_0, s1);\nfloat ref_depth_opacity : register(ps_3_0, c0);\nstruct PixelMain_Input\n{\n    float4 texcoord6 : TEXCOORD6;\n    float2 texcoord : TEXCOORD;\n};\n\nfloat4 PixelMain(PixelMain_Input i) : COLOR\n{\n    float4 out_color;\n    float4 temp0, temp1;\n    // dcl_texcoord6 v0\n    // dcl_texcoord v1.xy\n    // dcl_2d s0\n    // dcl_2d s1\n    // dcl_2d s2\n    // texld r0, v0, s0\n    temp0 = tex2D(depth, i.texcoord6.xy);\n    // add r0.x, -r0.x, v0.z\n    temp0.x = -temp0.x + i.texcoord6.z;\n    // rcp r0.y, c0.x\n    temp0.y = 1.0f / ref_depth_opacity.x;\n    // mul_sat_pp r0.x, r0.y, r0_abs.x\n    ;// error\n    // texld_pp r1, v1, s1\n    temp1 = /* not implemented _pp modifier */ tex2D(opacity_texture, i.texcoord.xy);\n    // mul_pp oC0.w, r0.x, r1.x\n    out_color.w = /* not implemented _pp modifier */ temp0.x * temp1.x;\n    // texld_pp r0, v1, s2\n    temp0 = /* not implemented _pp modifier */ tex2D(diffuse_texture, i.texcoord.xy);\n    // mov_pp oC0.xyz, r0\n    out_color.xyz = /* not implemented _pp modifier */ temp0.xyz;\n    // \n\n    return out_color;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."))}c.isMDXComponent=!0}}]);