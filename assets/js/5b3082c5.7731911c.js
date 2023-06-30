"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[41895],{603905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},i="mdxType",x={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),i=s(n),c=a,u=i["".concat(l,".").concat(c)]||i[c]||x[c]||o;return n?r.createElement(u,p(p({ref:t},m),{},{components:n})):r.createElement(u,p({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=c;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[i]="string"==typeof e?e:a,p[1]=d;for(var s=2;s<o;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},653829:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>x,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var r=n(487462),a=(n(667294),n(603905));const o={id:0xe2ab3c2e654b5000,title:"Post Lex Avg Default"},p="Post Lex Avg Default",d={unversionedId:"Generated/Shaders/Post/16333214643554832000",id:"Generated/Shaders/Post/16333214643554832000",title:"Post Lex Avg Default",description:"(postLEXAVG:default, 0xe2ab3c2e654b50e9)",source:"@site/docs/Generated/Shaders/Post/0xe2ab3c2e654b50e9.mdx",sourceDirName:"Generated/Shaders/Post",slug:"/Generated/Shaders/Post/16333214643554832000",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Post/16333214643554832000",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/Generated/Shaders/Post/0xe2ab3c2e654b50e9.mdx",tags:[],version:"current",frontMatter:{id:"16333214643554832000",title:"Post Lex Avg Default"},sidebar:"docsSidebar",previous:{title:"Post Dof Prepare Default",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Post/15561109158935150000"},next:{title:"Post Color Grading Default",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Post/16383909041883238000"}},l={},s=[{value:"Technique <code>ambient</code>",id:"technique-ambient",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Sampler 1",id:"sampler-1",level:4},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],m={toc:s},i="wrapper";function x(e){let{components:t,...n}=e;return(0,a.kt)(i,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"post-lex-avg-default"},"Post Lex Avg Default"),(0,a.kt)("p",null,"(",(0,a.kt)("inlineCode",{parentName:"p"},"post_LEX_AVG:default"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"0xe2ab3c2e654b50e9"),")"),(0,a.kt)("p",null,"This template is referenced 1 time by ",(0,a.kt)("a",{parentName:"p",href:"/docs/Generated/Render%20Templates/post.render_template_database#post-lex-avg"},"post_LEX_AVG"),"."),(0,a.kt)("h3",{id:"technique-ambient"},"Technique ",(0,a.kt)("inlineCode",{parentName:"h3"},"ambient")),(0,a.kt)("h3",{id:"render-states"},"Render States"),(0,a.kt)("p",null,"More info can be found on the ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3drenderstatetype"},"Direct3D Docs")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 0,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 0,\n    D3DRS_ALPHABLENDENABLE = 0,\n    D3DRS_CULLMODE = 1,\n    D3DRS_COLORWRITEENABLE = 15,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n};\n")),(0,a.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,a.kt)("p",null,"More info can be found on the ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3dsamplerstatetype"},"Direct3D Docs")),(0,a.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 3,\n    D3DSAMP_ADDRESSV = 3,\n    D3DSAMP_MAGFILTER = 2,\n    D3DSAMP_MINFILTER = 2,\n    D3DSAMP_MIPFILTER = 2,\n};\n")),(0,a.kt)("h4",{id:"sampler-1"},"Sampler 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 3,\n    D3DSAMP_ADDRESSV = 3,\n    D3DSAMP_MAGFILTER = 2,\n    D3DSAMP_MINFILTER = 2,\n    D3DSAMP_MIPFILTER = 2,\n};\n")),(0,a.kt)("h3",{id:"shaders"},"Shaders"),(0,a.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hlsl"},"column_major float4x4 view_proj_matrix : register(vs_3_0, c0);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 texcoord : TEXCOORD;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float2 texcoord : TEXCOORD;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    // def c4, 1, 0, 0, 0\n    // dcl_position v0\n    // dcl_texcoord v1\n    // dcl_position o0\n    // dcl_texcoord o1.xy\n    // dp4 o0.x, v0, c0\n    o.position.x = dot(i.position, (view_proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, v0, c1\n    o.position.y = dot(i.position, (view_proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.w, v0, c3\n    o.position.w = dot(i.position, (view_proj_matrix._m03_m13_m23_m33));\n    // mov o0.z, c4.x\n    o.position.z = float1(1);\n    // mov o1.xy, v1\n    o.texcoord = i.texcoord;\n    // \n\n    return o;\n}\n")),(0,a.kt)("p",null,"Decompiled by DXDecompiler."),(0,a.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hlsl"},"sampler2D diffuse_texture : register(ps_3_0, s0);\nsampler2D self_illumination_texture : register(ps_3_0, s1);\nfloat4 PixelMain() : COLOR\n{\n    float4 out_color;\n    float4 temp0, temp1;\n    // def c0, 0.125, 0.375, 0.625, 0.875\n    // def c1, 0.0625, 0.37, 0.5, 1\n    // def c2, 0.95, 0.05, 0, 0\n    // dcl_2d s0\n    // dcl_2d s1\n    // texld r0, c0.x, s0\n    temp0 = tex2D(diffuse_texture, float4(0.125, 0.125, 0.125, 0.125).xy);\n    // texld r1, c0.yxzw, s0\n    temp1 = tex2D(diffuse_texture, float4(0.375, 0.125, 0.625, 0.875).xy);\n    // add r0.xyz, r0, r1\n    temp0.xyz = temp0.xyz + temp1.xyz;\n    // texld r1, c0.zxzw, s0\n    temp1 = tex2D(diffuse_texture, float4(0.625, 0.125, 0.625, 0.875).xy);\n    // add r0.xyz, r0, r1\n    temp0.xyz = temp0.xyz + temp1.xyz;\n    // texld r1, c0.wxzw, s0\n    temp1 = tex2D(diffuse_texture, float4(0.875, 0.125, 0.625, 0.875).xy);\n    // add r0.xyz, r0, r1\n    temp0.xyz = temp0.xyz + temp1.xyz;\n    // texld r1, c0, s0\n    temp1 = tex2D(diffuse_texture, float4(0.125, 0.375, 0.625, 0.875).xy);\n    // add r0.xyz, r0, r1\n    temp0.xyz = temp0.xyz + temp1.xyz;\n    // texld r1, c0.y, s0\n    temp1 = tex2D(diffuse_texture, float4(0.375, 0.375, 0.375, 0.375).xy);\n    // add r0.xyz, r0, r1\n    temp0.xyz = temp0.xyz + temp1.xyz;\n    // texld r1, c0.zyzw, s0\n    temp1 = tex2D(diffuse_texture, float4(0.625, 0.375, 0.625, 0.875).xy);\n    // add r0.xyz, r0, r1\n    temp0.xyz = temp0.xyz + temp1.xyz;\n    // texld r1, c0.wyzw, s0\n    temp1 = tex2D(diffuse_texture, float4(0.875, 0.375, 0.625, 0.875).xy);\n    // add r0.xyz, r0, r1\n    temp0.xyz = temp0.xyz + temp1.xyz;\n    // texld r1, c0.xzzw, s0\n    temp1 = tex2D(diffuse_texture, float4(0.125, 0.625, 0.625, 0.875).xy);\n    // add r0.xyz, r0, r1\n    temp0.xyz = temp0.xyz + temp1.xyz;\n    // texld r1, c0.yzzw, s0\n    temp1 = tex2D(diffuse_texture, float4(0.375, 0.625, 0.625, 0.875).xy);\n    // add r0.xyz, r0, r1\n    temp0.xyz = temp0.xyz + temp1.xyz;\n    // texld r1, c0.z, s0\n    temp1 = tex2D(diffuse_texture, float4(0.625, 0.625, 0.625, 0.625).xy);\n    // add r0.xyz, r0, r1\n    temp0.xyz = temp0.xyz + temp1.xyz;\n    // texld r1, c0.wzzw, s0\n    temp1 = tex2D(diffuse_texture, float4(0.875, 0.625, 0.625, 0.875).xy);\n    // add r0.xyz, r0, r1\n    temp0.xyz = temp0.xyz + temp1.xyz;\n    // texld r1, c0.xwzw, s0\n    temp1 = tex2D(diffuse_texture, float4(0.125, 0.875, 0.625, 0.875).xy);\n    // add r0.xyz, r0, r1\n    temp0.xyz = temp0.xyz + temp1.xyz;\n    // texld r1, c0.ywzw, s0\n    temp1 = tex2D(diffuse_texture, float4(0.375, 0.875, 0.625, 0.875).xy);\n    // add r0.xyz, r0, r1\n    temp0.xyz = temp0.xyz + temp1.xyz;\n    // texld r1, c0.zwzw, s0\n    temp1 = tex2D(diffuse_texture, float4(0.625, 0.875, 0.625, 0.875).xy);\n    // add r0.xyz, r0, r1\n    temp0.xyz = temp0.xyz + temp1.xyz;\n    // texld r1, c0.w, s0\n    temp1 = tex2D(diffuse_texture, float4(0.875, 0.875, 0.875, 0.875).xy);\n    // add r0.xyz, r0, r1\n    temp0.xyz = temp0.xyz + temp1.xyz;\n    // mul r0.xyz, r0, c1.x\n    temp0.xyz = temp0.xyz * float3(0.0625, 0.0625, 0.0625);\n    // dp3 r0.w, r0, c1.y\n    temp0.w = dot(temp0.xyz, float3(0.37, 0.37, 0.37));\n    // mov_sat r0, r0\n    temp0 = saturate(temp0);\n    // add r0, -r0, c1.w\n    temp0 = -temp0 + float4(1, 1, 1, 1);\n    // mul r1, r0, r0\n    temp1 = temp0 * temp0;\n    // mul r1, r1, r1\n    temp1 = temp1 * temp1;\n    // mul r0, r0, r1\n    temp0 = temp0 * temp1;\n    // texld r1, c1.z, s1\n    temp1 = tex2D(self_illumination_texture, float4(0.5, 0.5, 0.5, 0.5).xy);\n    // mul r1, r1, c2.x\n    temp1 = temp1 * float4(0.95, 0.95, 0.95, 0.95);\n    // mad oC0, r0, c2.y, r1\n    out_color = temp0 * float4(0.05, 0.05, 0.05, 0.05) + temp1;\n    // \n\n    return out_color;\n}\n")),(0,a.kt)("p",null,"Decompiled by DXDecompiler."))}x.isMDXComponent=!0}}]);