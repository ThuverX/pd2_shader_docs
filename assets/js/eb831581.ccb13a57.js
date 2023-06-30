"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[93451],{603905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(667294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),i=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(d.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},x=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=i(n),x=o,u=m["".concat(d,".").concat(x)]||m[x]||c[x]||a;return n?r.createElement(u,l(l({ref:t},s),{},{components:n})):r.createElement(u,l({ref:t},s))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=x;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p[m]="string"==typeof e?e:o,l[1]=p;for(var i=2;i<a;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}x.displayName="MDXCreateElement"},642217:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>i});var r=n(487462),o=(n(667294),n(603905));const a={id:0x3e53d1fd722e4c00,title:"Post Smaa Blend Neighbourhood Default Smaa Hlsl 3"},l="Post Smaa Blend Neighbourhood Default Smaa Hlsl 3",p={unversionedId:"Generated/Shaders/Post/4491164139891084300",id:"Generated/Shaders/Post/4491164139891084300",title:"Post Smaa Blend Neighbourhood Default Smaa Hlsl 3",description:"(postSMAAblendneighbourhoodSMAAHLSL_3, 0x3e53d1fd722e4cf0)",source:"@site/docs/Generated/Shaders/Post/0x3e53d1fd722e4cf0.mdx",sourceDirName:"Generated/Shaders/Post",slug:"/Generated/Shaders/Post/4491164139891084300",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Post/4491164139891084300",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/Generated/Shaders/Post/0x3e53d1fd722e4cf0.mdx",tags:[],version:"current",frontMatter:{id:"4491164139891084300",title:"Post Smaa Blend Neighbourhood Default Smaa Hlsl 3"},sidebar:"docsSidebar",previous:{title:"Post Color Grading Prepare Default",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Post/4343724851644938000"},next:{title:"Post Contour Mask Default",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Post/4496740080585658000"}},d={},i=[{value:"Technique <code>ambient</code>",id:"technique-ambient",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Sampler 1",id:"sampler-1",level:4},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],s={toc:i},m="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"post-smaa-blend-neighbourhood-default-smaa-hlsl-3"},"Post Smaa Blend Neighbourhood Default Smaa Hlsl 3"),(0,o.kt)("p",null,"(",(0,o.kt)("inlineCode",{parentName:"p"},"post_SMAA_blend_neighbourhood:default:SMAA_HLSL_3"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"0x3e53d1fd722e4cf0"),")"),(0,o.kt)("p",null,"This template is referenced 1 time by ",(0,o.kt)("a",{parentName:"p",href:"/docs/Generated/Render%20Templates/post.render_template_database#post-smaa-blend-neighbourhood"},"post_SMAA_blend_neighbourhood"),"."),(0,o.kt)("h3",{id:"technique-ambient"},"Technique ",(0,o.kt)("inlineCode",{parentName:"h3"},"ambient")),(0,o.kt)("h3",{id:"render-states"},"Render States"),(0,o.kt)("p",null,"More info can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3drenderstatetype"},"Direct3D Docs")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 0,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 0,\n    D3DRS_ALPHABLENDENABLE = 0,\n    D3DRS_CULLMODE = 1,\n    D3DRS_COLORWRITEENABLE = 7,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 1,\n    D3DRS_STENCILFUNC = 8,\n    D3DRS_STENCILFAIL = 3,\n    D3DRS_STENCILMASK = 8,\n    D3DRS_STENCILPASS = 3,\n    D3DRS_STENCILREF = 1,\n    D3DRS_STENCILWRITEMASK = 8,\n    D3DRS_STENCILZFAIL = 3,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 1,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n};\n")),(0,o.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,o.kt)("p",null,"More info can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3dsamplerstatetype"},"Direct3D Docs")),(0,o.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 3,\n    D3DSAMP_ADDRESSV = 3,\n    D3DSAMP_MAGFILTER = 2,\n    D3DSAMP_MINFILTER = 2,\n    D3DSAMP_MIPFILTER = 2,\n};\n")),(0,o.kt)("h4",{id:"sampler-1"},"Sampler 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 3,\n    D3DSAMP_ADDRESSV = 3,\n    D3DSAMP_MAGFILTER = 2,\n    D3DSAMP_MINFILTER = 2,\n    D3DSAMP_MIPFILTER = 2,\n};\n")),(0,o.kt)("h3",{id:"shaders"},"Shaders"),(0,o.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"float3 render_target_size : register(vs_3_0, c4);\ncolumn_major float4x4 view_proj_matrix : register(vs_3_0, c0);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 texcoord : TEXCOORD;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float2 texcoord : TEXCOORD;\n    float4 texcoord1 : TEXCOORD1;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float4 temp0;\n    // def c5, 1, 0, 0, 0\n    // dcl_position v0\n    // dcl_texcoord v1\n    // dcl_position o0\n    // dcl_texcoord o1.xy\n    // dcl_texcoord1 o2\n    // dp4 o0.x, v0, c0\n    o.position.x = dot(i.position, (view_proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, v0, c1\n    o.position.y = dot(i.position, (view_proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.w, v0, c3\n    o.position.w = dot(i.position, (view_proj_matrix._m03_m13_m23_m33));\n    // rcp r0.xz, c4.x\n    temp0.xz = 1.0f / render_target_size.x;\n    // rcp r0.yw, c4.y\n    temp0.yw = 1.0f / render_target_size.y;\n    // mad o2, r0, c5.xyyx, v1.xyxy\n    o.texcoord1 = temp0 * float4(1, 0, 0, 1) + i.texcoord.xyxy;\n    // mov o0.z, c5.x\n    o.position.z = float1(1);\n    // mov o1.xy, v1\n    o.texcoord = i.texcoord;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."),(0,o.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"sampler2D diffuse_texture : register(ps_3_0, s0);\nfloat3 render_target_size : register(ps_3_0, c0);\nsampler2D self_illumination_texture : register(ps_3_0, s1);\nstruct PixelMain_Input\n{\n    float2 texcoord : TEXCOORD;\n    float4 texcoord1 : TEXCOORD1;\n};\n\nstruct PixelMain_Output\n{\n    float4 color : COLOR;\n    float4 color1 : COLOR1;\n};\n\nPixelMain_Output PixelMain(PixelMain_Input i)\n{\n    PixelMain_Output o;\n    float4 temp0, temp1, temp2;\n    // def c1, 1, 1E-05, 0, 0\n    // dcl_texcoord v0.xy\n    // dcl_texcoord1 v1\n    // dcl_2d s0\n    // dcl_2d s1\n    // texld r0, v1, s1\n    temp0 = tex2D(self_illumination_texture, i.texcoord1.xy);\n    // texld r1, v1.zwzw, s1\n    temp1 = tex2D(self_illumination_texture, i.texcoord1.zw);\n    // texld r2, v0, s1\n    temp2 = tex2D(self_illumination_texture, i.texcoord.xy);\n    // mov r1.x, r0.w\n    temp1.x = temp0.w;\n    // mov r1.zw, r2.xyzx\n    temp1.zw = temp2.zx;\n    // dp4 r0.x, r1, c1.x\n    temp0.x = dot(temp1, float4(1, 1, 1, 1));\n    // if_lt r0.x, c1.y\n    if (temp0.x < float4(1E-05, 1E-05, 1E-05, 1E-05)) {\n        // mul r0, c1.xxzz, v0.xyxx\n        temp0 = float4(1, 1, 0, 0) * i.texcoord.xyxx;\n        // texldl_pp oC0, r0, s0\n        o.color = /* not implemented _pp modifier */ tex2Dlod(diffuse_texture, temp0);\n        // else\n    } else {\n        // max r0.xy, r1, r2.zxzw\n        temp0.xy = max(temp1.xy, temp2.zx);\n        // add r0.x, -r0.x, r0.y\n        temp0.x = -temp0.x + temp0.y;\n        // cmp r2.xz, r0.x, c1.z, r1\n        temp2.xz = (temp0.xx >= 0) ? float2(0, 0) : temp1.xz;\n        // cmp r2.yw, r0.x, r1, c1.z\n        temp2.yw = (temp0.xx >= 0) ? temp1.yw : float2(0, 0);\n        // cmp r0.xy, r0.x, r1.ywzw, r1.xzzw\n        temp0.xy = (temp0.xx >= 0) ? temp1.yw : temp1.xz;\n        // dp2add r0.z, r0, c1.x, c1.z\n        temp0.z = dot(temp0.xy, float2(1, 1)) + float1(0);\n        // rcp r0.z, r0.z\n        temp0.z = 1.0f / temp0.z;\n        // mul r0.xy, r0.z, r0\n        temp0.xy = temp0.zz * temp0.xy;\n        // rcp r1.x, c0.x\n        temp1.x = 1.0f / render_target_size.x;\n        // rcp r1.y, c0.y\n        temp1.y = 1.0f / render_target_size.y;\n        // mov r1.zw, -r1.xyxy\n        temp1.zw = -temp1.xy;\n        // mad r1, r2, r1, v0.xyxy\n        temp1 = temp2 * temp1 + i.texcoord.xyxy;\n        // mul r2, r1.xyxx, c1.xxzz\n        temp2 = temp1.xyxx * float4(1, 1, 0, 0);\n        // texldl r2, r2, s0\n        temp2 = tex2Dlod(diffuse_texture, temp2);\n        // mul r1, r1.zwxx, c1.xxzz\n        temp1 = temp1.zwxx * float4(1, 1, 0, 0);\n        // texldl r1, r1, s0\n        temp1 = tex2Dlod(diffuse_texture, temp1);\n        // mul r1, r0.y, r1\n        temp1 = temp0.y * temp1;\n        // mad_pp oC0, r0.x, r2, r1\n        o.color = /* not implemented _pp modifier */ temp0.x * temp2 + temp1;\n        // endif\n    }\n    // mov_pp oC1, c1.z\n    o.color1 = /* not implemented _pp modifier */ float4(0, 0, 0, 0);\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."))}c.isMDXComponent=!0}}]);