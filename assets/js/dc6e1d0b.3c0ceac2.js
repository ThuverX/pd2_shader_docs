"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[45142],{603905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>S});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},D=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),s=p(r),D=o,S=s["".concat(i,".").concat(D)]||s[D]||u[D]||a;return r?n.createElement(S,l(l({ref:t},c),{},{components:r})):n.createElement(S,l({ref:t},c))}));function S(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=D;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d[s]="string"==typeof e?e:o,l[1]=d;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}D.displayName="MDXCreateElement"},796090:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var n=r(487462),o=(r(667294),r(603905));const a={id:0xbc07e3212287e800,title:"Overlay Vertex Color Textured Alpha Sweep"},l="Overlay Vertex Color Textured Alpha Sweep",d={unversionedId:"Generated/Shaders/Default Shaders/13549047735420185000",id:"Generated/Shaders/Default Shaders/13549047735420185000",title:"Overlay Vertex Color Textured Alpha Sweep",description:"(OverlayVertexColorTexturedAlphaSweep, 0xbc07e3212287e5d7)",source:"@site/docs/Generated/Shaders/Default Shaders/0xbc07e3212287e5d7.mdx",sourceDirName:"Generated/Shaders/Default Shaders",slug:"/Generated/Shaders/Default Shaders/13549047735420185000",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Default Shaders/13549047735420185000",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/Generated/Shaders/Default Shaders/0xbc07e3212287e5d7.mdx",tags:[],version:"current",frontMatter:{id:"13549047735420185000",title:"Overlay Vertex Color Textured Alpha Sweep"},sidebar:"docsSidebar",previous:{title:"Background Vertex Color Textured",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Default Shaders/13111331375355333000"},next:{title:"Text",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Default Shaders/14116611110204641000"}},i={},p=[{value:"Technique <code>overlay</code>",id:"technique-overlay",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],c={toc:p},s="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overlay-vertex-color-textured-alpha-sweep"},"Overlay Vertex Color Textured Alpha Sweep"),(0,o.kt)("p",null,"(",(0,o.kt)("inlineCode",{parentName:"p"},"OverlayVertexColorTexturedAlphaSweep"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"0xbc07e3212287e5d7"),")"),(0,o.kt)("p",null,"This template is referenced 1 time by ",(0,o.kt)("a",{parentName:"p",href:"/docs/Generated/Render%20Templates/default_render_templates.render_template_database#overlayvertexcolortexturedalphasweep"},"OverlayVertexColorTexturedAlphaSweep"),"."),(0,o.kt)("h3",{id:"technique-overlay"},"Technique ",(0,o.kt)("inlineCode",{parentName:"h3"},"overlay")),(0,o.kt)("h3",{id:"render-states"},"Render States"),(0,o.kt)("p",null,"More info can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3drenderstatetype"},"Direct3D Docs")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 0,\n    D3DRS_ALPHABLENDENABLE = 1,\n    D3DRS_CULLMODE = 1,\n    D3DRS_COLORWRITEENABLE = 7,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n    D3DRS_BLENDOP = 1,\n    D3DRS_DESTBLEND = 6,\n    D3DRS_SRCBLEND = 5,\n};\n")),(0,o.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,o.kt)("p",null,"More info can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3dsamplerstatetype"},"Direct3D Docs")),(0,o.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h3",{id:"shaders"},"Shaders"),(0,o.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"column_major float4x4 view_proj_matrix : register(vs_3_0, c0);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 color : COLOR;\n    float4 texcoord : TEXCOORD;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float4 color : COLOR;\n    float2 texcoord : TEXCOORD;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    // def c4, 1, -1, 0, 0\n    // dcl_position v0\n    // dcl_color v1\n    // dcl_texcoord v2\n    // dcl_position o0\n    // dcl_color o1\n    // dcl_texcoord o2.xy\n    // dp4 o0.x, v0, c0\n    o.position.x = dot(i.position, (view_proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, v0, c1\n    o.position.y = dot(i.position, (view_proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.z, v0, c2\n    o.position.z = dot(i.position, (view_proj_matrix._m02_m12_m22_m32));\n    // dp4 o0.w, v0, c3\n    o.position.w = dot(i.position, (view_proj_matrix._m03_m13_m23_m33));\n    // mad o1, v1, c4.xxxy, c4.zzzx\n    o.color = i.color * float4(1, 1, 1, -1) + float4(0, 0, 0, 1);\n    // mov o2.xy, v2\n    o.texcoord = i.texcoord;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."),(0,o.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"sampler2D diffuse_texture : register(ps_3_0, s0);\nstruct PixelMain_Input\n{\n    float4 color : COLOR;\n    float2 texcoord : TEXCOORD;\n};\n\nfloat4 PixelMain(PixelMain_Input i) : COLOR\n{\n    float4 out_color;\n    float4 temp0;\n    // def c0, 20, 0, 0, 0\n    // dcl_color v0\n    // dcl_texcoord v1.xy\n    // dcl_2d s0\n    // texld r0, v1, s0\n    temp0 = tex2D(diffuse_texture, i.texcoord.xy);\n    // mul oC0.xyz, r0.x, v0\n    out_color.xyz = temp0.xxx * i.color.xyz;\n    // add_sat r0.x, r0.y, -v0.w\n    temp0.x = saturate(temp0.y + -i.color.w);\n    // mul r0.x, r0.w, r0.x\n    temp0.x = temp0.w * temp0.x;\n    // mul oC0.w, r0.x, c0.x\n    out_color.w = temp0.x * float1(20);\n    // \n\n    return out_color;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."))}u.isMDXComponent=!0}}]);