"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[44628],{603905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>D});var r=n(667294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},i="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),i=p(n),u=o,D=i["".concat(s,".").concat(u)]||i[u]||m[u]||a;return n?r.createElement(D,d(d({ref:t},c),{},{components:n})):r.createElement(D,d({ref:t},c))}));function D(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,d=new Array(a);d[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[i]="string"==typeof e?e:o,d[1]=l;for(var p=2;p<a;p++)d[p]=n[p];return r.createElement.apply(null,d)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},154159:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(487462),o=(n(667294),n(603905));const a={id:0x1b1d5122bfd15200,title:"Post Aob Downscale Default"},d="Post Aob Downscale Default",l={unversionedId:"Generated/Shaders/Post/1953807023037567500",id:"Generated/Shaders/Post/1953807023037567500",title:"Post Aob Downscale Default",description:"(postAOBdownscale:default, 0x1b1d5122bfd15228)",source:"@site/docs/Generated/Shaders/Post/0x1b1d5122bfd15228.mdx",sourceDirName:"Generated/Shaders/Post",slug:"/Generated/Shaders/Post/1953807023037567500",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Post/1953807023037567500",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/Generated/Shaders/Post/0x1b1d5122bfd15228.mdx",tags:[],version:"current",frontMatter:{id:"1953807023037567500",title:"Post Aob Downscale Default"},sidebar:"docsSidebar",previous:{title:"Post Dof Upscale Default",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Post/1890688861109898500"},next:{title:"Post Aob Prepare Default",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Post/1979920226490936300"}},s={},p=[{value:"Technique <code>ambient</code>",id:"technique-ambient",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],c={toc:p},i="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(i,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"post-aob-downscale-default"},"Post Aob Downscale Default"),(0,o.kt)("p",null,"(",(0,o.kt)("inlineCode",{parentName:"p"},"post_AOB_downscale:default"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"0x1b1d5122bfd15228"),")"),(0,o.kt)("p",null,"This template is referenced 1 time by ",(0,o.kt)("a",{parentName:"p",href:"/docs/Generated/Render%20Templates/post.render_template_database#post-aob-downscale"},"post_AOB_downscale"),"."),(0,o.kt)("h3",{id:"technique-ambient"},"Technique ",(0,o.kt)("inlineCode",{parentName:"h3"},"ambient")),(0,o.kt)("h3",{id:"render-states"},"Render States"),(0,o.kt)("p",null,"More info can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3drenderstatetype"},"Direct3D Docs")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 0,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 0,\n    D3DRS_ALPHABLENDENABLE = 0,\n    D3DRS_CULLMODE = 1,\n    D3DRS_COLORWRITEENABLE = 15,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n};\n")),(0,o.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,o.kt)("p",null,"More info can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3dsamplerstatetype"},"Direct3D Docs")),(0,o.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 3,\n    D3DSAMP_ADDRESSV = 3,\n    D3DSAMP_MAGFILTER = 2,\n    D3DSAMP_MINFILTER = 2,\n    D3DSAMP_MIPFILTER = 2,\n};\n")),(0,o.kt)("h3",{id:"shaders"},"Shaders"),(0,o.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"float3 render_target_size : register(vs_3_0, c4);\ncolumn_major float4x4 view_proj_matrix : register(vs_3_0, c0);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 texcoord : TEXCOORD;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float4 texcoord : TEXCOORD;\n    float4 texcoord1 : TEXCOORD1;\n    float4 texcoord2 : TEXCOORD2;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float4 temp0;\n    // def c5, 0.5, 0.25, -0.75, 0.75\n    // def c6, 1, 0, 0, 0\n    // dcl_position v0\n    // dcl_texcoord v1\n    // dcl_position o0\n    // dcl_texcoord o1\n    // dcl_texcoord1 o2\n    // dcl_texcoord2 o3\n    // dp4 o0.x, v0, c0\n    o.position.x = dot(i.position, (view_proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, v0, c1\n    o.position.y = dot(i.position, (view_proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.w, v0, c3\n    o.position.w = dot(i.position, (view_proj_matrix._m03_m13_m23_m33));\n    // rcp r0.xz, c4.x\n    temp0.xz = 1.0f / render_target_size.x;\n    // rcp r0.yw, c4.y\n    temp0.yw = 1.0f / render_target_size.y;\n    // mul o1.zw, r0, c5.x\n    o.texcoord.zw = temp0.zw * float2(0.5, 0.5);\n    // mad o2, r0.zwzw, c5.yzwy, v1.xyxy\n    o.texcoord1 = temp0.zwzw * float4(0.25, -0.75, 0.75, 0.25) + i.texcoord.xyxy;\n    // mad o3, r0, -c5.yzwy, v1.xyxy\n    o.texcoord2 = temp0 * float4(-0.25, 0.75, -0.75, -0.25) + i.texcoord.xyxy;\n    // mov o0.z, c6.x\n    o.position.z = float1(1);\n    // mov o1.xy, v1\n    o.texcoord.xy = i.texcoord.xy;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."),(0,o.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"sampler2D diffuse_texture : register(ps_3_0, s0);\nfloat4 PixelMain(float4 texcoord : TEXCOORD) : COLOR\n{\n    float4 out_color;\n    float4 temp0, temp1, temp2;\n    // def c0, 0.2, 0, 0, 0\n    // def c1, 0.5, -1.5, 1.5, -0.5\n    // dcl_texcoord v0\n    // dcl_2d s0\n    // texld r0, v0, s0\n    temp0 = tex2D(diffuse_texture, texcoord.xy);\n    // mad r1, v0.zwzw, c1.xyzx, v0.xyxy\n    temp1 = texcoord.zwzw * float4(0.5, -1.5, 1.5, 0.5) + texcoord.xyxy;\n    // texld r2, r1, s0\n    temp2 = tex2D(diffuse_texture, temp1.xy);\n    // texld r1, r1.zwzw, s0\n    temp1 = tex2D(diffuse_texture, temp1.zw);\n    // add r0, r0, r2\n    temp0 = temp0 + temp2;\n    // add r0, r1, r0\n    temp0 = temp1 + temp0;\n    // mad r1, v0.zwzw, c1.wzyw, v0.xyxy\n    temp1 = texcoord.zwzw * float4(-0.5, 1.5, -1.5, -0.5) + texcoord.xyxy;\n    // texld r2, r1, s0\n    temp2 = tex2D(diffuse_texture, temp1.xy);\n    // texld r1, r1.zwzw, s0\n    temp1 = tex2D(diffuse_texture, temp1.zw);\n    // add r0, r0, r2\n    temp0 = temp0 + temp2;\n    // add r0, r1, r0\n    temp0 = temp1 + temp0;\n    // mul oC0, r0, c0.x\n    out_color = temp0 * float4(0.2, 0.2, 0.2, 0.2);\n    // \n\n    return out_color;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."))}m.isMDXComponent=!0}}]);