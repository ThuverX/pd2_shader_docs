"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[22757],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),x=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=x(e.components);return n.createElement(d.Provider,{value:t},e.children)},l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},i=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),l=x(r),i=a,y=l["".concat(d,".").concat(i)]||l[i]||c[i]||o;return r?n.createElement(y,p(p({ref:t},s),{},{components:r})):n.createElement(y,p({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=i;var m={};for(var d in t)hasOwnProperty.call(t,d)&&(m[d]=t[d]);m.originalType=e,m[l]="string"==typeof e?e:a,p[1]=m;for(var x=2;x<o;x++)p[x]=r[x];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}i.displayName="MDXCreateElement"},13897:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>m,toc:()=>x});var n=r(87462),a=(r(67294),r(3905));const o={id:0x1dee51a5759f1000,title:"Post Smaa Edge Detect Default Smaa Hlsl 3"},p="Post Smaa Edge Detect Default Smaa Hlsl 3",m={unversionedId:"Generated/Shaders/Post/2156751042641858600",id:"Generated/Shaders/Post/2156751042641858600",title:"Post Smaa Edge Detect Default Smaa Hlsl 3",description:"(postSMAAedgedetectSMAAHLSL_3, 0x1dee51a5759f0fbe)",source:"@site/docs/Generated/Shaders/Post/0x1dee51a5759f0fbe.mdx",sourceDirName:"Generated/Shaders/Post",slug:"/Generated/Shaders/Post/2156751042641858600",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Post/2156751042641858600",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/docs/Generated/Shaders/Post/0x1dee51a5759f0fbe.mdx",tags:[],version:"current",frontMatter:{id:"2156751042641858600",title:"Post Smaa Edge Detect Default Smaa Hlsl 3"},sidebar:"docsSidebar",previous:{title:"Post Aob Prepare Default",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Post/1979920226490936300"},next:{title:"Post Dome Occ Process Bake Default",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Post/2243231336143111400"}},d={},x=[{value:"Technique <code>ambient</code>",id:"technique-ambient",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],s={toc:x},l="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(l,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"post-smaa-edge-detect-default-smaa-hlsl-3"},"Post Smaa Edge Detect Default Smaa Hlsl 3"),(0,a.kt)("p",null,"(",(0,a.kt)("inlineCode",{parentName:"p"},"post_SMAA_edge_detect:default:SMAA_HLSL_3"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"0x1dee51a5759f0fbe"),")"),(0,a.kt)("h3",{id:"technique-ambient"},"Technique ",(0,a.kt)("inlineCode",{parentName:"h3"},"ambient")),(0,a.kt)("h3",{id:"render-states"},"Render States"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 0,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 0,\n    D3DRS_ALPHABLENDENABLE = 0,\n    D3DRS_CULLMODE = 1,\n    D3DRS_COLORWRITEENABLE = 15,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 1,\n    D3DRS_STENCILFUNC = 8,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = -1,\n    D3DRS_STENCILPASS = 3,\n    D3DRS_STENCILREF = 8,\n    D3DRS_STENCILWRITEMASK = 8,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n};\n")),(0,a.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,a.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 3,\n    D3DSAMP_ADDRESSV = 3,\n    D3DSAMP_MAGFILTER = 2,\n    D3DSAMP_MINFILTER = 2,\n    D3DSAMP_MIPFILTER = 2,\n};\n")),(0,a.kt)("h3",{id:"shaders"},"Shaders"),(0,a.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hlsl"},"float3 render_target_size : register(vs_3_0, c4);\ncolumn_major float4x4 view_proj_matrix : register(vs_3_0, c0);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 texcoord : TEXCOORD;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float2 texcoord : TEXCOORD;\n    float4 texcoord1 : TEXCOORD1;\n    float4 texcoord2 : TEXCOORD2;\n    float4 texcoord3 : TEXCOORD3;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float4 temp0;\n    // def c5, -1, 0, 1, -2\n    // dcl_position v0\n    // dcl_texcoord v1\n    // dcl_position o0\n    // dcl_texcoord o1.xy\n    // dcl_texcoord1 o2\n    // dcl_texcoord2 o3\n    // dcl_texcoord3 o4\n    // dp4 o0.x, v0, c0\n    o.position.x = dot(i.position, (view_proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, v0, c1\n    o.position.y = dot(i.position, (view_proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.w, v0, c3\n    o.position.w = dot(i.position, (view_proj_matrix._m03_m13_m23_m33));\n    // rcp r0.xz, c4.x\n    temp0.xz = 1.0f / render_target_size.x;\n    // rcp r0.yw, c4.y\n    temp0.yw = 1.0f / render_target_size.y;\n    // mad o2, r0.zwzw, c5.xyyx, v1.xyxy\n    o.texcoord1 = temp0.zwzw * float4(-1, 0, 0, -1) + i.texcoord.xyxy;\n    // mad o3, r0.zwzw, c5.zyyz, v1.xyxy\n    o.texcoord2 = temp0.zwzw * float4(1, 0, 0, 1) + i.texcoord.xyxy;\n    // mad o4, r0, c5.wyyw, v1.xyxy\n    o.texcoord3 = temp0 * float4(-2, 0, 0, -2) + i.texcoord.xyxy;\n    // mov o0.z, c5.z\n    o.position.z = float1(1);\n    // mov o1.xy, v1\n    o.texcoord = i.texcoord;\n    // \n\n    return o;\n}\n")),(0,a.kt)("p",null,"Decompiled by DXDecompiler."),(0,a.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hlsl"},"sampler2D diffuse_texture : register(ps_3_0, s0);\nstruct PixelMain_Input\n{\n    float2 texcoord : TEXCOORD;\n    float4 texcoord1 : TEXCOORD1;\n    float4 texcoord2 : TEXCOORD2;\n    float4 texcoord3 : TEXCOORD3;\n};\n\nfloat4 PixelMain(PixelMain_Input i) : COLOR\n{\n    float4 out_color;\n    float4 temp0, temp1, temp3;\n    float3 temp2;\n    float2 temp4;\n    // def c0, -0.1, 1, 0, 2\n    // dcl_texcoord v0.xy\n    // dcl_texcoord1 v1\n    // dcl_texcoord2 v2\n    // dcl_texcoord3 v3\n    // dcl_2d s0\n    // texld r0, v0, s0\n    temp0 = tex2D(diffuse_texture, i.texcoord.xy);\n    // texld r1, v1, s0\n    temp1 = tex2D(diffuse_texture, i.texcoord1.xy);\n    // add r1.xyz, r0, -r1\n    temp1.xyz = temp0.xyz + -temp1.xyz;\n    // max r0.w, r1_abs.x, r1_abs.y\n    temp0.w = max(abs(temp1).x, abs(temp1).y);\n    // max r2.x, r0.w, r1_abs.z\n    temp2.x = max(temp0.w, abs(temp1).z);\n    // texld r1, v1.zwzw, s0\n    temp1 = tex2D(diffuse_texture, i.texcoord1.zw);\n    // add r1.xyz, r0, -r1\n    temp1.xyz = temp0.xyz + -temp1.xyz;\n    // max r0.w, r1_abs.x, r1_abs.y\n    temp0.w = max(abs(temp1).x, abs(temp1).y);\n    // max r2.y, r0.w, r1_abs.z\n    temp2.y = max(temp0.w, abs(temp1).z);\n    // add r1.xy, r2, c0.x\n    temp1.xy = temp2.xy + float2(-0.1, -0.1);\n    // cmp r1.xy, r1, c0.y, c0.z\n    temp1.xy = (temp1.xy >= 0) ? float2(1, 1) : float2(0, 0);\n    // dp2add r0.w, r1, c0.y, c0.z\n    temp0.w = dot(temp1.xy, float2(1, 1)) + float1(0);\n    // cmp r3, -r0.w, -c0.y, -c0.z\n    temp3 = (-temp0.w >= 0) ? float4(-1, -1, -1, -1) : float4(-0, -0, -0, -0);\n    // texkill r3\n    clip(temp3);\n    // texld r3, v2, s0\n    temp3 = tex2D(diffuse_texture, i.texcoord2.xy);\n    // add r3.xyz, r0, -r3\n    temp3.xyz = temp0.xyz + -temp3.xyz;\n    // max r0.w, r3_abs.x, r3_abs.y\n    temp0.w = max(abs(temp3).x, abs(temp3).y);\n    // max r4.x, r0.w, r3_abs.z\n    temp4.x = max(temp0.w, abs(temp3).z);\n    // texld r3, v2.zwzw, s0\n    temp3 = tex2D(diffuse_texture, i.texcoord2.zw);\n    // add r3.xyz, r0, -r3\n    temp3.xyz = temp0.xyz + -temp3.xyz;\n    // max r0.w, r3_abs.x, r3_abs.y\n    temp0.w = max(abs(temp3).x, abs(temp3).y);\n    // max r4.y, r0.w, r3_abs.z\n    temp4.y = max(temp0.w, abs(temp3).z);\n    // max r1.zw, r2.xyxy, r4.xyxy\n    temp1.zw = max(temp2.xy, temp4.xy);\n    // texld r3, v3, s0\n    temp3 = tex2D(diffuse_texture, i.texcoord3.xy);\n    // add r3.xyz, r0, -r3\n    temp3.xyz = temp0.xyz + -temp3.xyz;\n    // max r0.w, r3_abs.x, r3_abs.y\n    temp0.w = max(abs(temp3).x, abs(temp3).y);\n    // max r4.x, r0.w, r3_abs.z\n    temp4.x = max(temp0.w, abs(temp3).z);\n    // texld r3, v3.zwzw, s0\n    temp3 = tex2D(diffuse_texture, i.texcoord3.zw);\n    // add r0.xyz, r0, -r3\n    temp0.xyz = temp0.xyz + -temp3.xyz;\n    // max r2.z, r0_abs.x, r0_abs.y\n    temp2.z = max(abs(temp0).x, abs(temp0).y);\n    // max r4.y, r2.z, r0_abs.z\n    temp4.y = max(temp2.z, abs(temp0).z);\n    // max r0.xy, r1.zwzw, r4\n    temp0.xy = max(temp1.zw, temp4.xy);\n    // max r1.z, r0.x, r0.y\n    temp1.z = max(temp0.x, temp0.y);\n    // mad r0.xy, r2, c0.w, -r1.z\n    temp0.xy = temp2.xy * float2(2, 2) + -temp1.zz;\n    // cmp r0.xy, r0, r1, c0.z\n    temp0.xy = (temp0.xy >= 0) ? temp1.xy : float2(0, 0);\n    // mov oC0.xy, r0\n    out_color.xy = temp0.xy;\n    // mov oC0.zw, c0.z\n    out_color.zw = float2(0, 0);\n    // \n\n    return out_color;\n}\n")),(0,a.kt)("p",null,"Decompiled by DXDecompiler."))}c.isMDXComponent=!0}}]);