"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[46137],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>_});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},D=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=s(n),D=o,_=p["".concat(i,".").concat(D)]||p[D]||u[D]||a;return n?r.createElement(_,l(l({ref:t},c),{},{components:n})):r.createElement(_,l({ref:t},c))}));function _(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=D;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d[p]="string"==typeof e?e:o,l[1]=d;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}D.displayName="MDXCreateElement"},14509:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={id:0x86f309823fb45000,title:"Post Shadow Blur Default Dx9 Fetch4"},l="Post Shadow Blur Default Dx9 Fetch4",d={unversionedId:"Generated/Shaders/Post/9724126475442213000",id:"Generated/Shaders/Post/9724126475442213000",title:"Post Shadow Blur Default Dx9 Fetch4",description:"(postshadowblurDX9_FETCH4, 0x86f309823fb452bf)",source:"@site/docs/Generated/Shaders/Post/0x86f309823fb452bf.mdx",sourceDirName:"Generated/Shaders/Post",slug:"/Generated/Shaders/Post/9724126475442213000",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Post/9724126475442213000",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/docs/Generated/Shaders/Post/0x86f309823fb452bf.mdx",tags:[],version:"current",frontMatter:{id:"9724126475442213000",title:"Post Shadow Blur Default Dx9 Fetch4"},sidebar:"docsSidebar",previous:{title:"Post Upscale Default Combine",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Post/8804899509996087000"},next:{title:"Post Area Mask Depth Default",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Post/9873913825538365000"}},i={},s=[{value:"Technique <code>ambient</code>",id:"technique-ambient",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],c={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"post-shadow-blur-default-dx9-fetch4"},"Post Shadow Blur Default Dx9 Fetch4"),(0,o.kt)("p",null,"(",(0,o.kt)("inlineCode",{parentName:"p"},"post_shadow_blur:default:DX9_FETCH4"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"0x86f309823fb452bf"),")"),(0,o.kt)("h3",{id:"technique-ambient"},"Technique ",(0,o.kt)("inlineCode",{parentName:"h3"},"ambient")),(0,o.kt)("h3",{id:"render-states"},"Render States"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 7,\n    D3DRS_ZWRITEENABLE = 0,\n    D3DRS_ALPHABLENDENABLE = 0,\n    D3DRS_CULLMODE = 1,\n    D3DRS_COLORWRITEENABLE = 8,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 1,\n    D3DRS_STENCILFUNC = 3,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = -1,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 1,\n    D3DRS_STENCILWRITEMASK = 255,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n};\n")),(0,o.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,o.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 3,\n    D3DSAMP_ADDRESSV = 3,\n    D3DSAMP_MAGFILTER = 2,\n    D3DSAMP_MINFILTER = 2,\n    D3DSAMP_MIPFILTER = 2,\n};\n")),(0,o.kt)("h3",{id:"shaders"},"Shaders"),(0,o.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"float3 render_target_size : register(vs_3_0, c4);\ncolumn_major float4x4 view_proj_matrix : register(vs_3_0, c0);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 texcoord : TEXCOORD;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float2 texcoord : TEXCOORD;\n    float4 texcoord1 : TEXCOORD1;\n    float4 texcoord2 : TEXCOORD2;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float4 temp0;\n    // def c5, 1, 0, 0, 0\n    // def c6, 0.5, -1.5, 1.5, -0.5\n    // dcl_position v0\n    // dcl_texcoord v1\n    // dcl_position o0\n    // dcl_texcoord o1.xy\n    // dcl_texcoord1 o2\n    // dcl_texcoord2 o3\n    // dp4 o0.x, v0, c0\n    o.position.x = dot(i.position, (view_proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, v0, c1\n    o.position.y = dot(i.position, (view_proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.w, v0, c3\n    o.position.w = dot(i.position, (view_proj_matrix._m03_m13_m23_m33));\n    // rcp r0.xz, c4.x\n    temp0.xz = 1.0f / render_target_size.x;\n    // rcp r0.yw, c4.y\n    temp0.yw = 1.0f / render_target_size.y;\n    // mul o2, r0.zwzw, c6.xyzx\n    o.texcoord1 = temp0.zwzw * float4(0.5, -1.5, 1.5, 0.5);\n    // mul o3, r0, c6.wzyw\n    o.texcoord2 = temp0 * float4(-0.5, 1.5, -1.5, -0.5);\n    // mov o0.z, c5.x\n    o.position.z = float1(1);\n    // mov o1.xy, v1\n    o.texcoord = i.texcoord;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."),(0,o.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"sampler2D diffuse_texture : register(ps_3_0, s0);\nfloat4 PixelMain(float2 texcoord : TEXCOORD) : COLOR\n{\n    float4 out_color;\n    float4 temp0;\n    // dcl_texcoord v0.xy\n    // dcl_2d s0\n    // texld r0, v0, s0\n    temp0 = tex2D(diffuse_texture, texcoord.xy);\n    // mov oC0, r0.x\n    out_color = temp0.x;\n    // \n\n    return out_color;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."))}u.isMDXComponent=!0}}]);