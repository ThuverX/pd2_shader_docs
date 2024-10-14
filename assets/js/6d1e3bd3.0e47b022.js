"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[2545],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>D});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},i=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),c=d(n),u=a,D=c["".concat(s,".").concat(u)]||c[u]||m[u]||o;return n?r.createElement(D,p(p({ref:t},i),{},{components:n})):r.createElement(D,p({ref:t},i))}));function D(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,p[1]=l;for(var d=2;d<o;d++)p[d]=n[d];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8753:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={id:0xe9a1d3724964f000,title:"Post Gamma Default"},p="Post Gamma Default",l={unversionedId:"Generated/Shaders/Post/16834969369898710000",id:"Generated/Shaders/Post/16834969369898710000",title:"Post Gamma Default",description:"(post_gamma:default, 0xe9a1d3724964ecec)",source:"@site/docs/Generated/Shaders/Post/0xe9a1d3724964ecec.mdx",sourceDirName:"Generated/Shaders/Post",slug:"/Generated/Shaders/Post/16834969369898710000",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Post/16834969369898710000",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/Generated/Shaders/Post/0xe9a1d3724964ecec.mdx",tags:[],version:"current",frontMatter:{id:"16834969369898710000",title:"Post Gamma Default"},sidebar:"docsSidebar",previous:{title:"Post Fxaa Default",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Post/16667509001480083000"},next:{title:"Post Lex Composite Default",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Post/17367861730361713000"}},s={},d=[{value:"Technique <code>transparent</code>",id:"technique-transparent",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],i={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"post-gamma-default"},"Post Gamma Default"),(0,a.kt)("p",null,"(",(0,a.kt)("inlineCode",{parentName:"p"},"post_gamma:default"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"0xe9a1d3724964ecec"),")"),(0,a.kt)("p",null,"This template is referenced 1 time by ",(0,a.kt)("a",{parentName:"p",href:"/docs/Generated/Render%20Templates/post.render_template_database#post-gamma"},"post_gamma"),"."),(0,a.kt)("h3",{id:"technique-transparent"},"Technique ",(0,a.kt)("inlineCode",{parentName:"h3"},"transparent")),(0,a.kt)("h3",{id:"render-states"},"Render States"),(0,a.kt)("p",null,"More info can be found on the ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3drenderstatetype"},"Direct3D Docs")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 0,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 0,\n    D3DRS_ALPHABLENDENABLE = 0,\n    D3DRS_CULLMODE = 1,\n    D3DRS_COLORWRITEENABLE = 15,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n};\n")),(0,a.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,a.kt)("p",null,"More info can be found on the ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3dsamplerstatetype"},"Direct3D Docs")),(0,a.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 3,\n    D3DSAMP_ADDRESSV = 3,\n    D3DSAMP_MAGFILTER = 1,\n    D3DSAMP_MINFILTER = 1,\n    D3DSAMP_MIPFILTER = 1,\n};\n")),(0,a.kt)("h3",{id:"shaders"},"Shaders"),(0,a.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hlsl"},"column_major float4x4 view_proj_matrix : register(vs_3_0, c0);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 texcoord : TEXCOORD;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float2 texcoord : TEXCOORD;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    // def c4, 1, 0, 0, 0\n    // dcl_position v0\n    // dcl_texcoord v1\n    // dcl_position o0\n    // dcl_texcoord o1.xy\n    // dp4 o0.x, v0, c0\n    o.position.x = dot(i.position, (view_proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, v0, c1\n    o.position.y = dot(i.position, (view_proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.w, v0, c3\n    o.position.w = dot(i.position, (view_proj_matrix._m03_m13_m23_m33));\n    // mov o0.z, c4.x\n    o.position.z = float1(1);\n    // mov o1.xy, v1\n    o.texcoord = i.texcoord;\n    // \n\n    return o;\n}\n")),(0,a.kt)("p",null,"Decompiled by DXDecompiler."),(0,a.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hlsl"},"sampler2D diffuse_texture : register(ps_3_0, s0);\nfloat ref_brightness : register(ps_3_0, c0);\nfloat4 PixelMain(float2 texcoord : TEXCOORD) : COLOR\n{\n    float4 out_color;\n    float3 temp0, temp2;\n    float4 temp1;\n    // def c1, -0.5, 0.5, 0.75, 0\n    // dcl_texcoord v0.xy\n    // dcl_2d s0\n    // mov r0.x, c1.x\n    temp0.x = float1(-0.5);\n    // add r0.x, r0.x, c0.x\n    temp0.x = temp0.x + ref_brightness.x;\n    // mad r0.x, r0.x, c1.y, c1.z\n    temp0.x = temp0.x * float1(0.5) + float1(0.75);\n    // rcp r0.x, r0.x\n    temp0.x = 1.0f / temp0.x;\n    // texld r1, v0, s0\n    temp1 = tex2D(diffuse_texture, texcoord.xy);\n    // log r2.x, r1.x\n    temp2.x = log2(temp1.x);\n    // log r2.y, r1.y\n    temp2.y = log2(temp1.y);\n    // log r2.z, r1.z\n    temp2.z = log2(temp1.z);\n    // mul r0.xyz, r0.x, r2\n    temp0.xyz = temp0.xxx * temp2.xyz;\n    // exp oC0.x, r0.x\n    out_color.x = exp2(temp0.x);\n    // exp oC0.y, r0.y\n    out_color.y = exp2(temp0.y);\n    // exp oC0.zw, r0.z\n    out_color.zw = exp2(temp0.z);\n    // \n\n    return out_color;\n}\n")),(0,a.kt)("p",null,"Decompiled by DXDecompiler."))}m.isMDXComponent=!0}}]);