"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[36201],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>S});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},D=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),s=p(r),D=a,S=s["".concat(c,".").concat(D)]||s[D]||u[D]||o;return r?n.createElement(S,l(l({ref:t},i),{},{components:r})):n.createElement(S,l({ref:t},i))}));function S(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=D;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[s]="string"==typeof e?e:a,l[1]=d;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}D.displayName="MDXCreateElement"},33486:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={id:0x639f3ca82a681400,title:"Background Vertex Color Textured Alpha Sweep"},l="Background Vertex Color Textured Alpha Sweep",d={unversionedId:"Generated/Shaders/Default_shaders/7178523024015496000",id:"Generated/Shaders/Default_shaders/7178523024015496000",title:"Background Vertex Color Textured Alpha Sweep",description:"(BackgroundVertexColorTexturedAlphaSweep, 0x639f3ca82a681569)",source:"@site/docs/Generated/Shaders/Default_shaders/0x639f3ca82a681569.mdx",sourceDirName:"Generated/Shaders/Default_shaders",slug:"/Generated/Shaders/Default_shaders/7178523024015496000",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Default_shaders/7178523024015496000",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/docs/Generated/Shaders/Default_shaders/0x639f3ca82a681569.mdx",tags:[],version:"current",frontMatter:{id:"7178523024015496000",title:"Background Vertex Color Textured Alpha Sweep"},sidebar:"docsSidebar",previous:{title:"0x5e74b26b97b203b4",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Default_shaders/6806261112039933000"},next:{title:"0x68bb21ac8fbb4282",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Default_shaders/7546662625618904000"}},c={},p=[{value:"Technique <code>overlay</code>",id:"technique-overlay",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],i={toc:p},s="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"background-vertex-color-textured-alpha-sweep"},"Background Vertex Color Textured Alpha Sweep"),(0,a.kt)("p",null,"(",(0,a.kt)("inlineCode",{parentName:"p"},"BackgroundVertexColorTexturedAlphaSweep"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"0x639f3ca82a681569"),")"),(0,a.kt)("h3",{id:"technique-overlay"},"Technique ",(0,a.kt)("inlineCode",{parentName:"h3"},"overlay")),(0,a.kt)("h3",{id:"render-states"},"Render States"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 0,\n    D3DRS_ALPHABLENDENABLE = 1,\n    D3DRS_CULLMODE = 1,\n    D3DRS_COLORWRITEENABLE = 7,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n    D3DRS_BLENDOP = 1,\n    D3DRS_DESTBLEND = 6,\n    D3DRS_SRCBLEND = 5,\n};\n")),(0,a.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,a.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,a.kt)("h3",{id:"shaders"},"Shaders"),(0,a.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hlsl"},"column_major float4x4 view_proj_matrix : register(vs_3_0, c0);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 color : COLOR;\n    float4 texcoord : TEXCOORD;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float4 color : COLOR;\n    float2 texcoord : TEXCOORD;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float3 temp0;\n    // def c4, 1, -1, 0, 0\n    // dcl_position v0\n    // dcl_color v1\n    // dcl_texcoord v2\n    // dcl_position o0\n    // dcl_color o1\n    // dcl_texcoord o2.xy\n    // dp4 r0.x, v0, c0\n    temp0.x = dot(i.position, (view_proj_matrix._m00_m10_m20_m30));\n    // dp4 r0.y, v0, c1\n    temp0.y = dot(i.position, (view_proj_matrix._m01_m11_m21_m31));\n    // dp4 r0.z, v0, c3\n    temp0.z = dot(i.position, (view_proj_matrix._m03_m13_m23_m33));\n    // mov o0, r0.xyzz\n    o.position = temp0.xyzz;\n    // mad o1, v1, c4.xxxy, c4.zzzx\n    o.color = i.color * float4(1, 1, 1, -1) + float4(0, 0, 0, 1);\n    // mov o2.xy, v2\n    o.texcoord = i.texcoord;\n    // \n\n    return o;\n}\n")),(0,a.kt)("p",null,"Decompiled by DXDecompiler."),(0,a.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hlsl"},"sampler2D diffuse_texture : register(ps_3_0, s0);\nstruct PixelMain_Input\n{\n    float4 color : COLOR;\n    float2 texcoord : TEXCOORD;\n};\n\nfloat4 PixelMain(PixelMain_Input i) : COLOR\n{\n    float4 out_color;\n    float4 temp0;\n    // def c0, 20, 0, 0, 0\n    // dcl_color v0\n    // dcl_texcoord v1.xy\n    // dcl_2d s0\n    // texld r0, v1, s0\n    temp0 = tex2D(diffuse_texture, i.texcoord.xy);\n    // mul oC0.xyz, r0.x, v0\n    out_color.xyz = temp0.xxx * i.color.xyz;\n    // add_sat r0.x, r0.y, -v0.w\n    temp0.x = saturate(temp0.y + -i.color.w);\n    // mul r0.x, r0.w, r0.x\n    temp0.x = temp0.w * temp0.x;\n    // mul oC0.w, r0.x, c0.x\n    out_color.w = temp0.x * float1(20);\n    // \n\n    return out_color;\n}\n")),(0,a.kt)("p",null,"Decompiled by DXDecompiler."))}u.isMDXComponent=!0}}]);