"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[995],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>D});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(n),u=o,D=c["".concat(l,".").concat(u)]||c[u]||m[u]||a;return n?r.createElement(D,d(d({ref:t},p),{},{components:n})):r.createElement(D,d({ref:t},p))}));function D(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,d=new Array(a);d[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:o,d[1]=i;for(var s=2;s<a;s++)d[s]=n[s];return r.createElement.apply(null,d)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8153:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={id:0x6d5d8f89b407dc00,title:"Post Ssao Blur Default"},d="Post Ssao Blur Default",i={unversionedId:"Generated/Shaders/Post/7880612744561942000",id:"Generated/Shaders/Post/7880612744561942000",title:"Post Ssao Blur Default",description:"(postSSAOblur:default, 0x6d5d8f89b407dc6e)",source:"@site/docs/Generated/Shaders/Post/0x6d5d8f89b407dc6e.mdx",sourceDirName:"Generated/Shaders/Post",slug:"/Generated/Shaders/Post/7880612744561942000",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Post/7880612744561942000",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/Generated/Shaders/Post/0x6d5d8f89b407dc6e.mdx",tags:[],version:"current",frontMatter:{id:"7880612744561942000",title:"Post Ssao Blur Default"},sidebar:"docsSidebar",previous:{title:"Post Shadow Downscale Default",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Post/7848493977218125000"},next:{title:"Post Night Vision Default Vr",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Post/7916739389288253000"}},l={},s=[{value:"Technique <code>ambient</code>",id:"technique-ambient",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],p={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"post-ssao-blur-default"},"Post Ssao Blur Default"),(0,o.kt)("p",null,"(",(0,o.kt)("inlineCode",{parentName:"p"},"post_SSAO_blur:default"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"0x6d5d8f89b407dc6e"),")"),(0,o.kt)("p",null,"This template is referenced 1 time by ",(0,o.kt)("a",{parentName:"p",href:"/docs/Generated/Render%20Templates/post.render_template_database#post-ssao-blur"},"post_SSAO_blur"),"."),(0,o.kt)("h3",{id:"technique-ambient"},"Technique ",(0,o.kt)("inlineCode",{parentName:"h3"},"ambient")),(0,o.kt)("h3",{id:"render-states"},"Render States"),(0,o.kt)("p",null,"More info can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3drenderstatetype"},"Direct3D Docs")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 0,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 0,\n    D3DRS_ALPHABLENDENABLE = 0,\n    D3DRS_CULLMODE = 1,\n    D3DRS_COLORWRITEENABLE = 15,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n};\n")),(0,o.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,o.kt)("p",null,"More info can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3dsamplerstatetype"},"Direct3D Docs")),(0,o.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 3,\n    D3DSAMP_ADDRESSV = 3,\n    D3DSAMP_MAGFILTER = 2,\n    D3DSAMP_MINFILTER = 2,\n    D3DSAMP_MIPFILTER = 2,\n};\n")),(0,o.kt)("h3",{id:"shaders"},"Shaders"),(0,o.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"column_major float4x4 view_proj_matrix : register(vs_3_0, c0);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 texcoord : TEXCOORD;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float2 texcoord : TEXCOORD;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    // def c4, 1, 0, 0, 0\n    // dcl_position v0\n    // dcl_texcoord v1\n    // dcl_position o0\n    // dcl_texcoord o1.xy\n    // dp4 o0.x, v0, c0\n    o.position.x = dot(i.position, (view_proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, v0, c1\n    o.position.y = dot(i.position, (view_proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.w, v0, c3\n    o.position.w = dot(i.position, (view_proj_matrix._m03_m13_m23_m33));\n    // mov o0.z, c4.x\n    o.position.z = float1(1);\n    // mov o1.xy, v1\n    o.texcoord = i.texcoord;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."),(0,o.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"sampler2D diffuse_texture : register(ps_3_0, s0);\nfloat3 render_target_size : register(ps_3_0, c0);\nfloat4 PixelMain(float2 texcoord : TEXCOORD) : COLOR\n{\n    float4 out_color;\n    float4 temp0, temp1, temp2;\n    // def c1, 0, 0, -1.5, 1\n    // def c2, 0.0625, 0, 0, 0\n    // defi i0, 4, 0, 0, 0\n    // dcl_texcoord v0.xy\n    // dcl_2d s0\n    // rcp r0.x, c0.x\n    temp0.x = 1.0f / render_target_size.x;\n    // rcp r0.y, c0.y\n    temp0.y = 1.0f / render_target_size.y;\n    // mov r0.zw, c1.y\n    temp0.zw = float2(0, 0);\n    // rep i0\n    for (int it0 = 0; it0 < int1(4); ++it0) {\n        // add r1.z, r0.w, c1.z\n        temp1.z = temp0.w + float1(-1.5);\n        // mov r1.x, r0.z\n        temp1.x = temp0.z;\n        // mov r1.y, c1.y\n        temp1.y = float1(0);\n        // rep i0\n        for (int it1 = 0; it1 < int1(4); ++it1) {\n            // add r1.yw, r1.y, c1.xwzz\n            temp1.yw = temp1.yy + float2(1, -1.5);\n            // mad r2.xy, r1.zwzw, r0, v0\n            temp2.xy = temp1.zw * temp0.xy + texcoord.xy;\n            // texld r2, r2, s0\n            temp2 = tex2D(diffuse_texture, temp2.xy);\n            // add r1.x, r1.x, r2.x\n            temp1.x = temp1.x + temp2.x;\n            // endrep\n        }\n        // mov r0.z, r1.x\n        temp0.z = temp1.x;\n        // add r0.w, r0.w, c1.w\n        temp0.w = temp0.w + float1(1);\n        // endrep\n    }\n    // mul oC0, r0.z, c2.x\n    out_color = temp0.z * float4(0.0625, 0.0625, 0.0625, 0.0625);\n    // \n\n    return out_color;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."))}m.isMDXComponent=!0}}]);