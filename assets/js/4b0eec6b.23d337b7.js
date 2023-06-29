"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[79834],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>x});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=i(n),u=o,x=c["".concat(p,".").concat(u)]||c[u]||m[u]||a;return n?r.createElement(x,l(l({ref:t},s),{},{components:n})):r.createElement(x,l({ref:t},s))}));function x(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d[c]="string"==typeof e?e:o,l[1]=d;for(var i=2;i<a;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},44239:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>i});var r=n(87462),o=(n(67294),n(3905));const a={id:0x4b26910754036400,title:"Post Upscale Default No A"},l="Post Upscale Default No A",d={unversionedId:"Generated/Shaders/Post/5415175062619907000",id:"Generated/Shaders/Post/5415175062619907000",title:"Post Upscale Default No A",description:"(postupscaleNOA, 0x4b269107540363fb)",source:"@site/docs/Generated/Shaders/Post/0x4b269107540363fb.mdx",sourceDirName:"Generated/Shaders/Post",slug:"/Generated/Shaders/Post/5415175062619907000",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Post/5415175062619907000",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/docs/Generated/Shaders/Post/0x4b269107540363fb.mdx",tags:[],version:"current",frontMatter:{id:"5415175062619907000",title:"Post Upscale Default No A"},sidebar:"docsSidebar",previous:{title:"Post Dof Upscale Default None",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Post/5374587768137989000"},next:{title:"Post Color Grading Default Menu",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Post/5686842235662365000"}},p={},i=[{value:"Technique <code>ambient</code>",id:"technique-ambient",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],s={toc:i},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"post-upscale-default-no-a"},"Post Upscale Default No A"),(0,o.kt)("p",null,"(",(0,o.kt)("inlineCode",{parentName:"p"},"post_upscale:default:NO_A"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"0x4b269107540363fb"),")"),(0,o.kt)("h3",{id:"technique-ambient"},"Technique ",(0,o.kt)("inlineCode",{parentName:"h3"},"ambient")),(0,o.kt)("h3",{id:"render-states"},"Render States"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 0,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 0,\n    D3DRS_ALPHABLENDENABLE = 0,\n    D3DRS_CULLMODE = 1,\n    D3DRS_COLORWRITEENABLE = 7,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n};\n")),(0,o.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,o.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 3,\n    D3DSAMP_ADDRESSV = 3,\n    D3DSAMP_MAGFILTER = 2,\n    D3DSAMP_MINFILTER = 2,\n    D3DSAMP_MIPFILTER = 2,\n};\n")),(0,o.kt)("h3",{id:"shaders"},"Shaders"),(0,o.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"column_major float4x4 view_proj_matrix : register(vs_3_0, c0);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 texcoord : TEXCOORD;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float2 texcoord : TEXCOORD;\n    float4 texcoord1 : TEXCOORD1;\n    float4 texcoord2 : TEXCOORD2;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    // def c4, 1, 0.5, -1.5, 1.5\n    // dcl_position v0\n    // dcl_texcoord v1\n    // dcl_position o0\n    // dcl_texcoord o1.xy\n    // dcl_texcoord1 o2\n    // dcl_texcoord2 o3\n    // dp4 o0.x, v0, c0\n    o.position.x = dot(i.position, (view_proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, v0, c1\n    o.position.y = dot(i.position, (view_proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.w, v0, c3\n    o.position.w = dot(i.position, (view_proj_matrix._m03_m13_m23_m33));\n    // mov o0.z, c4.x\n    o.position.z = float1(1);\n    // mov o1.xy, v1\n    o.texcoord = i.texcoord;\n    // mov o2, c4.yzwy\n    o.texcoord1 = float4(0.5, -1.5, 1.5, 0.5);\n    // mov o3, -c4.yzwy\n    o.texcoord2 = float4(-0.5, 1.5, -1.5, -0.5);\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."),(0,o.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"sampler2D diffuse_texture : register(ps_3_0, s0);\nfloat3 render_target_size : register(ps_3_0, c0);\nstruct PixelMain_Input\n{\n    float2 texcoord : TEXCOORD;\n    float4 texcoord1 : TEXCOORD1;\n    float4 texcoord2 : TEXCOORD2;\n};\n\nfloat4 PixelMain(PixelMain_Input i) : COLOR\n{\n    float4 out_color;\n    float4 temp0, temp1, temp2, temp3;\n    // def c1, 0.2, 0, 0, 0\n    // dcl_texcoord v0.xy\n    // dcl_texcoord1 v1\n    // dcl_texcoord2 v2\n    // dcl_2d s0\n    // texld r0, v0, s0\n    temp0 = tex2D(diffuse_texture, i.texcoord.xy);\n    // rcp r1.x, c0.x\n    temp1.x = 1.0f / render_target_size.x;\n    // rcp r1.y, c0.y\n    temp1.y = 1.0f / render_target_size.y;\n    // mov r2.xy, v0\n    temp2.xy = i.texcoord.xy;\n    // mad r3, v1, r1.xyxy, r2.xyxy\n    temp3 = i.texcoord1 * temp1.xyxy + temp2.xyxy;\n    // mad r1, v2, r1.xyxy, r2.xyxy\n    temp1 = i.texcoord2 * temp1.xyxy + temp2.xyxy;\n    // texld r2, r3, s0\n    temp2 = tex2D(diffuse_texture, temp3.xy);\n    // texld r3, r3.zwzw, s0\n    temp3 = tex2D(diffuse_texture, temp3.zw);\n    // add r0, r0.xyzz, r2.xyzz\n    temp0 = temp0.xyzz + temp2.xyzz;\n    // add r0, r3.xyzz, r0\n    temp0 = temp3.xyzz + temp0;\n    // texld r2, r1, s0\n    temp2 = tex2D(diffuse_texture, temp1.xy);\n    // texld r1, r1.zwzw, s0\n    temp1 = tex2D(diffuse_texture, temp1.zw);\n    // add r0, r0, r2.xyzz\n    temp0 = temp0 + temp2.xyzz;\n    // add r0, r1.xyzz, r0\n    temp0 = temp1.xyzz + temp0;\n    // mul oC0, r0, c1.x\n    out_color = temp0 * float4(0.2, 0.2, 0.2, 0.2);\n    // \n\n    return out_color;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."))}m.isMDXComponent=!0}}]);