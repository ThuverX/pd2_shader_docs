"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[10951],{603905:(t,e,r)=>{r.d(e,{Zo:()=>z,kt:()=>l});var m=r(667294);function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(t);e&&(m=m.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,m)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){p(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e){if(null==t)return{};var r,m,p=function(t,e){if(null==t)return{};var r,m,p={},n=Object.keys(t);for(m=0;m<n.length;m++)r=n[m],e.indexOf(r)>=0||(p[r]=t[r]);return p}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(m=0;m<n.length;m++)r=n[m],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(p[r]=t[r])}return p}var x=m.createContext({}),o=function(t){var e=m.useContext(x),r=e;return t&&(r="function"==typeof t?t(e):y(y({},e),t)),r},z=function(t){var e=o(t.components);return m.createElement(x.Provider,{value:e},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return m.createElement(m.Fragment,{},e)}},_=m.forwardRef((function(t,e){var r=t.components,p=t.mdxType,n=t.originalType,x=t.parentName,z=a(t,["components","mdxType","originalType","parentName"]),d=o(r),_=p,l=d["".concat(x,".").concat(_)]||d[_]||c[_]||n;return r?m.createElement(l,y(y({ref:e},z),{},{components:r})):m.createElement(l,y({ref:e},z))}));function l(t,e){var r=arguments,p=e&&e.mdxType;if("string"==typeof t||p){var n=r.length,y=new Array(n);y[0]=_;var a={};for(var x in e)hasOwnProperty.call(e,x)&&(a[x]=e[x]);a.originalType=t,a[d]="string"==typeof t?t:p,y[1]=a;for(var o=2;o<n;o++)y[o]=r[o];return m.createElement.apply(null,y)}return m.createElement.apply(null,r)}_.displayName="MDXCreateElement"},772375:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>x,contentTitle:()=>y,default:()=>c,frontMatter:()=>n,metadata:()=>a,toc:()=>o});var m=r(487462),p=(r(667294),r(603905));const n={id:0x8e0c737fc5e32800,title:"Post Ssao Default"},y="Post Ssao Default",a={unversionedId:"Generated/Shaders/Post/10235683045724334000",id:"Generated/Shaders/Post/10235683045724334000",title:"Post Ssao Default",description:"(post_SSAO:default, 0x8e0c737fc5e32963)",source:"@site/docs/Generated/Shaders/Post/0x8e0c737fc5e32963.mdx",sourceDirName:"Generated/Shaders/Post",slug:"/Generated/Shaders/Post/10235683045724334000",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Post/10235683045724334000",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/Generated/Shaders/Post/0x8e0c737fc5e32963.mdx",tags:[],version:"current",frontMatter:{id:"10235683045724334000",title:"Post Ssao Default"},sidebar:"docsSidebar",previous:{title:"Filter Depth Downsample Default",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Post/10081567135150990000"},next:{title:"Post Downscale Default No A",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Post/10476193342307690000"}},x={},o=[{value:"Technique <code>ambient</code>",id:"technique-ambient",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Sampler 1",id:"sampler-1",level:4},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],z={toc:o},d="wrapper";function c(t){let{components:e,...r}=t;return(0,p.kt)(d,(0,m.Z)({},z,r,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"post-ssao-default"},"Post Ssao Default"),(0,p.kt)("p",null,"(",(0,p.kt)("inlineCode",{parentName:"p"},"post_SSAO:default"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"0x8e0c737fc5e32963"),")"),(0,p.kt)("p",null,"This template is referenced 1 time by ",(0,p.kt)("a",{parentName:"p",href:"/docs/Generated/Render%20Templates/post.render_template_database#post-ssao"},"post_SSAO"),"."),(0,p.kt)("h3",{id:"technique-ambient"},"Technique ",(0,p.kt)("inlineCode",{parentName:"h3"},"ambient")),(0,p.kt)("h3",{id:"render-states"},"Render States"),(0,p.kt)("p",null,"More info can be found on the ",(0,p.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3drenderstatetype"},"Direct3D Docs")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 0,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 0,\n    D3DRS_ALPHABLENDENABLE = 0,\n    D3DRS_CULLMODE = 1,\n    D3DRS_COLORWRITEENABLE = 15,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n};\n")),(0,p.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,p.kt)("p",null,"More info can be found on the ",(0,p.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3dsamplerstatetype"},"Direct3D Docs")),(0,p.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,p.kt)("h4",{id:"sampler-1"},"Sampler 1"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 3,\n    D3DSAMP_ADDRESSV = 3,\n    D3DSAMP_MAGFILTER = 2,\n    D3DSAMP_MINFILTER = 2,\n    D3DSAMP_MIPFILTER = 2,\n};\n")),(0,p.kt)("h3",{id:"shaders"},"Shaders"),(0,p.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-hlsl"},"column_major float4x4 camera_proj_matrix : register(vs_3_0, c4);\ncolumn_major float4x4 view_proj_matrix : register(vs_3_0, c0);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 texcoord : TEXCOORD;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float2 texcoord : TEXCOORD;\n    float3 texcoord1 : TEXCOORD1;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float3 temp0;\n    // def c6, 2, -1, 1, 0\n    // dcl_position v0\n    // dcl_texcoord v1\n    // dcl_position o0\n    // dcl_texcoord o1.xy\n    // dcl_texcoord1 o2.xyz\n    // dp4 o0.x, v0, c0\n    o.position.x = dot(i.position, (view_proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, v0, c1\n    o.position.y = dot(i.position, (view_proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.w, v0, c3\n    o.position.w = dot(i.position, (view_proj_matrix._m03_m13_m23_m33));\n    // rcp r0.x, c4.x\n    temp0.x = 1.0f / (camera_proj_matrix._m00_m10_m20_m30).x;\n    // mad r0.yz, v1.xxyw, c6.x, c6.y\n    temp0.yz = i.texcoord.xy * float2(2, 2) + float2(-1, -1);\n    // mul o2.x, r0.x, r0.y\n    o.texcoord1.x = temp0.x * temp0.y;\n    // rcp r0.x, c5.y\n    temp0.x = 1.0f / (camera_proj_matrix._m01_m11_m21_m31).y;\n    // mul o2.y, r0.x, r0.z\n    o.texcoord1.y = temp0.x * temp0.z;\n    // mov o0.z, c6.z\n    o.position.z = float1(1);\n    // mov o1.xy, v1\n    o.texcoord = i.texcoord;\n    // mov o2.z, c6.z\n    o.texcoord1.z = float1(1);\n    // \n\n    return o;\n}\n")),(0,p.kt)("p",null,"Decompiled by DXDecompiler."),(0,p.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-hlsl"},"column_major float4x4 camera_proj_matrix : register(ps_3_0, c0);\nsampler2D diffuse_texture : register(ps_3_0, s1);\nsampler2D random_texture : register(ps_3_0, s0);\nfloat ref_ssao_inflexion : register(ps_3_0, c6);\nfloat ref_ssao_radius : register(ps_3_0, c5);\nfloat ref_ssao_steepness : register(ps_3_0, c7);\nfloat3 render_target_size : register(ps_3_0, c4);\nstruct PixelMain_Input\n{\n    float2 texcoord : TEXCOORD;\n    float3 texcoord1 : TEXCOORD1;\n};\n\nfloat4 PixelMain(PixelMain_Input i) : COLOR\n{\n    float4 out_color;\n    float4 temp0, temp1, temp2, temp3, temp4;\n    // def c8, 0.07788405, -0.026286762, -0.05694806, 0.5\n    // def c9, -0.051540244, -0.01750787, -0.10510902, 1.442695\n    // def c10, 0.12589271, -0.08107969, 0.08757133, 0\n    // def c11, -0.1466384, 0.21174622, -0.06362439, 0\n    // def c12, 0.10092149, 0.06652882, 0.37487105, 0\n    // def c13, -0.1036207, -0.14146885, 0.5309762, 0\n    // def c14, 0.44012052, 0.5504413, -0.28769955, 0\n    // def c15, -0.6355765, -0.76710624, -0.08712381, 0\n    // def c16, 0.024466075, -0.019408112, -0.09499861, 0\n    // def c17, -0.10566495, 0.023530064, 0.047875702, 0\n    // def c18, 0.10496007, 0.132813, 0.03789087, 0\n    // def c19, 0.026339209, 0.09529735, 0.24619505, 0\n    // def c20, -0.13584931, -0.18946202, -0.31747225, 0\n    // def c21, 0.29442918, -0.3771256, -0.28943762, 0\n    // def c22, -0.70672727, -0.11214456, -0.2596592, 0\n    // def c23, -0.90279573, 0.31799483, -0.28954995, 0\n    // def c24, 0.25, 2, -1, 1\n    // def c25, 80, 1, 0, 0.0625\n    // dcl_texcoord v0.xy\n    // dcl_texcoord1 v1.xyz\n    // dcl_2d s0\n    // dcl_2d s1\n    // mov r0.w, c24.w\n    temp0.w = float1(1);\n    // mul r1.xy, c4, v0\n    temp1.xy = render_target_size.xy * i.texcoord.xy;\n    // mul r1.xy, r1, c24.x\n    temp1.xy = temp1.xy * float2(0.25, 0.25);\n    // texld r1, r1, s0\n    temp1 = tex2D(random_texture, temp1.xy);\n    // mad r1.xyz, r1, c24.y, c24.z\n    temp1.xyz = temp1.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 r1.w, c8, r1\n    temp1.w = dot(float3(0.07788405, -0.026286762, -0.05694806), temp1.xyz);\n    // add r1.w, r1.w, r1.w\n    temp1.w = temp1.w + temp1.w;\n    // mad r2.xyz, r1, -r1.w, c8\n    temp2.xyz = temp1.xyz * -temp1.www + float3(0.07788405, -0.026286762, -0.05694806);\n    // texld r3, v0, s1\n    temp3 = tex2D(diffuse_texture, i.texcoord.xy);\n    // mul r3.yzw, r3.x, v1.xxyz\n    temp3.yzw = temp3.xxx * i.texcoord1.xyz;\n    // mad r0.xyz, c5.x, r2, r3.yzww\n    temp0.xyz = ref_ssao_radius.xxx * temp2.xyz + temp3.yzw;\n    // dp4 r1.w, r0, c3\n    temp1.w = dot(temp0, (camera_proj_matrix._m03_m13_m23_m33));\n    // rcp r1.w, r1.w\n    temp1.w = 1.0f / temp1.w;\n    // dp4 r2.x, r0, c0\n    temp2.x = dot(temp0, (camera_proj_matrix._m00_m10_m20_m30));\n    // dp4 r2.y, r0, c1\n    temp2.y = dot(temp0, (camera_proj_matrix._m01_m11_m21_m31));\n    // mul r0.xy, r1.w, r2\n    temp0.xy = temp1.ww * temp2.xy;\n    // mad r0.xy, r0, c8.w, c8.w\n    temp0.xy = temp0.xy * float2(0.5, 0.5) + float2(0.5, 0.5);\n    // texld r2, r0, s1\n    temp2 = tex2D(diffuse_texture, temp0.xy);\n    // add r0.x, r0.z, -r2.x\n    temp0.x = temp0.z + -temp2.x;\n    // mad r0.y, v1.z, r3.x, -r2.x\n    temp0.y = i.texcoord1.z * temp3.x + -temp2.x;\n    // add r0.y, -r0_abs.y, c25.x\n    temp0.y = -abs(temp0).y + float1(80);\n    // cmp r0.y, r0.y, c25.y, c25.z\n    temp0.y = (temp0.y >= 0) ? float1(1) : float1(0);\n    // cmp r0.x, r0.x, r0.y, c25.z\n    temp0.x = (temp0.x >= 0) ? temp0.y : float1(0);\n    // mov r2.w, c24.w\n    temp2.w = float1(1);\n    // dp3 r0.y, c9, r1\n    temp0.y = dot(float3(-0.051540244, -0.01750787, -0.10510902), temp1.xyz);\n    // add r0.y, r0.y, r0.y\n    temp0.y = temp0.y + temp0.y;\n    // mad r0.yzw, r1.xxyz, -r0.y, c9.xxyz\n    temp0.yzw = temp1.xyz * -temp0.yyy + float3(-0.051540244, -0.01750787, -0.10510902);\n    // mad r2.xyz, c5.x, r0.yzww, r3.yzww\n    temp2.xyz = ref_ssao_radius.xxx * temp0.yzw + temp3.yzw;\n    // dp4 r0.y, r2, c3\n    temp0.y = dot(temp2, (camera_proj_matrix._m03_m13_m23_m33));\n    // rcp r0.y, r0.y\n    temp0.y = 1.0f / temp0.y;\n    // dp4 r4.x, r2, c0\n    temp4.x = dot(temp2, (camera_proj_matrix._m00_m10_m20_m30));\n    // dp4 r4.y, r2, c1\n    temp4.y = dot(temp2, (camera_proj_matrix._m01_m11_m21_m31));\n    // mul r0.yz, r0.y, r4.xxyw\n    temp0.yz = temp0.yy * temp4.xy;\n    // mad r0.yz, r0, c8.w, c8.w\n    temp0.yz = temp0.yz * float2(0.5, 0.5) + float2(0.5, 0.5);\n    // texld r4, r0.yzzw, s1\n    temp4 = tex2D(diffuse_texture, temp0.yz);\n    // add r0.y, r2.z, -r4.x\n    temp0.y = temp2.z + -temp4.x;\n    // mad r0.z, v1.z, r3.x, -r4.x\n    temp0.z = i.texcoord1.z * temp3.x + -temp4.x;\n    // add r0.z, -r0_abs.z, c25.x\n    temp0.z = -abs(temp0).z + float1(80);\n    // cmp r0.z, r0.z, c25.y, c25.z\n    temp0.z = (temp0.z >= 0) ? float1(1) : float1(0);\n    // cmp r0.y, r0.y, r0.z, c25.z\n    temp0.y = (temp0.y >= 0) ? temp0.z : float1(0);\n    // add r0.x, r0.y, r0.x\n    temp0.x = temp0.y + temp0.x;\n    // mov r2.w, c24.w\n    temp2.w = float1(1);\n    // dp3 r0.y, c10, r1\n    temp0.y = dot(float3(0.12589271, -0.08107969, 0.08757133), temp1.xyz);\n    // add r0.y, r0.y, r0.y\n    temp0.y = temp0.y + temp0.y;\n    // mad r0.yzw, r1.xxyz, -r0.y, c10.xxyz\n    temp0.yzw = temp1.xyz * -temp0.yyy + float3(0.12589271, -0.08107969, 0.08757133);\n    // mad r2.xyz, c5.x, r0.yzww, r3.yzww\n    temp2.xyz = ref_ssao_radius.xxx * temp0.yzw + temp3.yzw;\n    // dp4 r0.y, r2, c3\n    temp0.y = dot(temp2, (camera_proj_matrix._m03_m13_m23_m33));\n    // rcp r0.y, r0.y\n    temp0.y = 1.0f / temp0.y;\n    // dp4 r4.x, r2, c0\n    temp4.x = dot(temp2, (camera_proj_matrix._m00_m10_m20_m30));\n    // dp4 r4.y, r2, c1\n    temp4.y = dot(temp2, (camera_proj_matrix._m01_m11_m21_m31));\n    // mul r0.yz, r0.y, r4.xxyw\n    temp0.yz = temp0.yy * temp4.xy;\n    // mad r0.yz, r0, c8.w, c8.w\n    temp0.yz = temp0.yz * float2(0.5, 0.5) + float2(0.5, 0.5);\n    // texld r4, r0.yzzw, s1\n    temp4 = tex2D(diffuse_texture, temp0.yz);\n    // add r0.y, r2.z, -r4.x\n    temp0.y = temp2.z + -temp4.x;\n    // mad r0.z, v1.z, r3.x, -r4.x\n    temp0.z = i.texcoord1.z * temp3.x + -temp4.x;\n    // add r0.z, -r0_abs.z, c25.x\n    temp0.z = -abs(temp0).z + float1(80);\n    // cmp r0.z, r0.z, c25.y, c25.z\n    temp0.z = (temp0.z >= 0) ? float1(1) : float1(0);\n    // cmp r0.y, r0.y, r0.z, c25.z\n    temp0.y = (temp0.y >= 0) ? temp0.z : float1(0);\n    // add r0.x, r0.y, r0.x\n    temp0.x = temp0.y + temp0.x;\n    // mov r2.w, c24.w\n    temp2.w = float1(1);\n    // dp3 r0.y, c11, r1\n    temp0.y = dot(float3(-0.1466384, 0.21174622, -0.06362439), temp1.xyz);\n    // add r0.y, r0.y, r0.y\n    temp0.y = temp0.y + temp0.y;\n    // mad r0.yzw, r1.xxyz, -r0.y, c11.xxyz\n    temp0.yzw = temp1.xyz * -temp0.yyy + float3(-0.1466384, 0.21174622, -0.06362439);\n    // mad r2.xyz, c5.x, r0.yzww, r3.yzww\n    temp2.xyz = ref_ssao_radius.xxx * temp0.yzw + temp3.yzw;\n    // dp4 r0.y, r2, c3\n    temp0.y = dot(temp2, (camera_proj_matrix._m03_m13_m23_m33));\n    // rcp r0.y, r0.y\n    temp0.y = 1.0f / temp0.y;\n    // dp4 r4.x, r2, c0\n    temp4.x = dot(temp2, (camera_proj_matrix._m00_m10_m20_m30));\n    // dp4 r4.y, r2, c1\n    temp4.y = dot(temp2, (camera_proj_matrix._m01_m11_m21_m31));\n    // mul r0.yz, r0.y, r4.xxyw\n    temp0.yz = temp0.yy * temp4.xy;\n    // mad r0.yz, r0, c8.w, c8.w\n    temp0.yz = temp0.yz * float2(0.5, 0.5) + float2(0.5, 0.5);\n    // texld r4, r0.yzzw, s1\n    temp4 = tex2D(diffuse_texture, temp0.yz);\n    // add r0.y, r2.z, -r4.x\n    temp0.y = temp2.z + -temp4.x;\n    // mad r0.z, v1.z, r3.x, -r4.x\n    temp0.z = i.texcoord1.z * temp3.x + -temp4.x;\n    // add r0.z, -r0_abs.z, c25.x\n    temp0.z = -abs(temp0).z + float1(80);\n    // cmp r0.z, r0.z, c25.y, c25.z\n    temp0.z = (temp0.z >= 0) ? float1(1) : float1(0);\n    // cmp r0.y, r0.y, r0.z, c25.z\n    temp0.y = (temp0.y >= 0) ? temp0.z : float1(0);\n    // add r0.x, r0.y, r0.x\n    temp0.x = temp0.y + temp0.x;\n    // mov r2.w, c24.w\n    temp2.w = float1(1);\n    // dp3 r0.y, c12, r1\n    temp0.y = dot(float3(0.10092149, 0.06652882, 0.37487105), temp1.xyz);\n    // add r0.y, r0.y, r0.y\n    temp0.y = temp0.y + temp0.y;\n    // mad r0.yzw, r1.xxyz, -r0.y, c12.xxyz\n    temp0.yzw = temp1.xyz * -temp0.yyy + float3(0.10092149, 0.06652882, 0.37487105);\n    // mad r2.xyz, c5.x, r0.yzww, r3.yzww\n    temp2.xyz = ref_ssao_radius.xxx * temp0.yzw + temp3.yzw;\n    // dp4 r0.y, r2, c3\n    temp0.y = dot(temp2, (camera_proj_matrix._m03_m13_m23_m33));\n    // rcp r0.y, r0.y\n    temp0.y = 1.0f / temp0.y;\n    // dp4 r4.x, r2, c0\n    temp4.x = dot(temp2, (camera_proj_matrix._m00_m10_m20_m30));\n    // dp4 r4.y, r2, c1\n    temp4.y = dot(temp2, (camera_proj_matrix._m01_m11_m21_m31));\n    // mul r0.yz, r0.y, r4.xxyw\n    temp0.yz = temp0.yy * temp4.xy;\n    // mad r0.yz, r0, c8.w, c8.w\n    temp0.yz = temp0.yz * float2(0.5, 0.5) + float2(0.5, 0.5);\n    // texld r4, r0.yzzw, s1\n    temp4 = tex2D(diffuse_texture, temp0.yz);\n    // add r0.y, r2.z, -r4.x\n    temp0.y = temp2.z + -temp4.x;\n    // mad r0.z, v1.z, r3.x, -r4.x\n    temp0.z = i.texcoord1.z * temp3.x + -temp4.x;\n    // add r0.z, -r0_abs.z, c25.x\n    temp0.z = -abs(temp0).z + float1(80);\n    // cmp r0.z, r0.z, c25.y, c25.z\n    temp0.z = (temp0.z >= 0) ? float1(1) : float1(0);\n    // cmp r0.y, r0.y, r0.z, c25.z\n    temp0.y = (temp0.y >= 0) ? temp0.z : float1(0);\n    // add r0.x, r0.y, r0.x\n    temp0.x = temp0.y + temp0.x;\n    // mov r2.w, c24.w\n    temp2.w = float1(1);\n    // dp3 r0.y, c13, r1\n    temp0.y = dot(float3(-0.1036207, -0.14146885, 0.5309762), temp1.xyz);\n    // add r0.y, r0.y, r0.y\n    temp0.y = temp0.y + temp0.y;\n    // mad r0.yzw, r1.xxyz, -r0.y, c13.xxyz\n    temp0.yzw = temp1.xyz * -temp0.yyy + float3(-0.1036207, -0.14146885, 0.5309762);\n    // mad r2.xyz, c5.x, r0.yzww, r3.yzww\n    temp2.xyz = ref_ssao_radius.xxx * temp0.yzw + temp3.yzw;\n    // dp4 r0.y, r2, c3\n    temp0.y = dot(temp2, (camera_proj_matrix._m03_m13_m23_m33));\n    // rcp r0.y, r0.y\n    temp0.y = 1.0f / temp0.y;\n    // dp4 r4.x, r2, c0\n    temp4.x = dot(temp2, (camera_proj_matrix._m00_m10_m20_m30));\n    // dp4 r4.y, r2, c1\n    temp4.y = dot(temp2, (camera_proj_matrix._m01_m11_m21_m31));\n    // mul r0.yz, r0.y, r4.xxyw\n    temp0.yz = temp0.yy * temp4.xy;\n    // mad r0.yz, r0, c8.w, c8.w\n    temp0.yz = temp0.yz * float2(0.5, 0.5) + float2(0.5, 0.5);\n    // texld r4, r0.yzzw, s1\n    temp4 = tex2D(diffuse_texture, temp0.yz);\n    // add r0.y, r2.z, -r4.x\n    temp0.y = temp2.z + -temp4.x;\n    // mad r0.z, v1.z, r3.x, -r4.x\n    temp0.z = i.texcoord1.z * temp3.x + -temp4.x;\n    // add r0.z, -r0_abs.z, c25.x\n    temp0.z = -abs(temp0).z + float1(80);\n    // cmp r0.z, r0.z, c25.y, c25.z\n    temp0.z = (temp0.z >= 0) ? float1(1) : float1(0);\n    // cmp r0.y, r0.y, r0.z, c25.z\n    temp0.y = (temp0.y >= 0) ? temp0.z : float1(0);\n    // add r0.x, r0.y, r0.x\n    temp0.x = temp0.y + temp0.x;\n    // mov r2.w, c24.w\n    temp2.w = float1(1);\n    // dp3 r0.y, c14, r1\n    temp0.y = dot(float3(0.44012052, 0.5504413, -0.28769955), temp1.xyz);\n    // add r0.y, r0.y, r0.y\n    temp0.y = temp0.y + temp0.y;\n    // mad r0.yzw, r1.xxyz, -r0.y, c14.xxyz\n    temp0.yzw = temp1.xyz * -temp0.yyy + float3(0.44012052, 0.5504413, -0.28769955);\n    // mad r2.xyz, c5.x, r0.yzww, r3.yzww\n    temp2.xyz = ref_ssao_radius.xxx * temp0.yzw + temp3.yzw;\n    // dp4 r0.y, r2, c3\n    temp0.y = dot(temp2, (camera_proj_matrix._m03_m13_m23_m33));\n    // rcp r0.y, r0.y\n    temp0.y = 1.0f / temp0.y;\n    // dp4 r4.x, r2, c0\n    temp4.x = dot(temp2, (camera_proj_matrix._m00_m10_m20_m30));\n    // dp4 r4.y, r2, c1\n    temp4.y = dot(temp2, (camera_proj_matrix._m01_m11_m21_m31));\n    // mul r0.yz, r0.y, r4.xxyw\n    temp0.yz = temp0.yy * temp4.xy;\n    // mad r0.yz, r0, c8.w, c8.w\n    temp0.yz = temp0.yz * float2(0.5, 0.5) + float2(0.5, 0.5);\n    // texld r4, r0.yzzw, s1\n    temp4 = tex2D(diffuse_texture, temp0.yz);\n    // add r0.y, r2.z, -r4.x\n    temp0.y = temp2.z + -temp4.x;\n    // mad r0.z, v1.z, r3.x, -r4.x\n    temp0.z = i.texcoord1.z * temp3.x + -temp4.x;\n    // add r0.z, -r0_abs.z, c25.x\n    temp0.z = -abs(temp0).z + float1(80);\n    // cmp r0.z, r0.z, c25.y, c25.z\n    temp0.z = (temp0.z >= 0) ? float1(1) : float1(0);\n    // cmp r0.y, r0.y, r0.z, c25.z\n    temp0.y = (temp0.y >= 0) ? temp0.z : float1(0);\n    // add r0.x, r0.y, r0.x\n    temp0.x = temp0.y + temp0.x;\n    // mov r2.w, c24.w\n    temp2.w = float1(1);\n    // dp3 r0.y, c15, r1\n    temp0.y = dot(float3(-0.6355765, -0.76710624, -0.08712381), temp1.xyz);\n    // add r0.y, r0.y, r0.y\n    temp0.y = temp0.y + temp0.y;\n    // mad r0.yzw, r1.xxyz, -r0.y, c15.xxyz\n    temp0.yzw = temp1.xyz * -temp0.yyy + float3(-0.6355765, -0.76710624, -0.08712381);\n    // mad r2.xyz, c5.x, r0.yzww, r3.yzww\n    temp2.xyz = ref_ssao_radius.xxx * temp0.yzw + temp3.yzw;\n    // dp4 r0.y, r2, c3\n    temp0.y = dot(temp2, (camera_proj_matrix._m03_m13_m23_m33));\n    // rcp r0.y, r0.y\n    temp0.y = 1.0f / temp0.y;\n    // dp4 r4.x, r2, c0\n    temp4.x = dot(temp2, (camera_proj_matrix._m00_m10_m20_m30));\n    // dp4 r4.y, r2, c1\n    temp4.y = dot(temp2, (camera_proj_matrix._m01_m11_m21_m31));\n    // mul r0.yz, r0.y, r4.xxyw\n    temp0.yz = temp0.yy * temp4.xy;\n    // mad r0.yz, r0, c8.w, c8.w\n    temp0.yz = temp0.yz * float2(0.5, 0.5) + float2(0.5, 0.5);\n    // texld r4, r0.yzzw, s1\n    temp4 = tex2D(diffuse_texture, temp0.yz);\n    // add r0.y, r2.z, -r4.x\n    temp0.y = temp2.z + -temp4.x;\n    // mad r0.z, v1.z, r3.x, -r4.x\n    temp0.z = i.texcoord1.z * temp3.x + -temp4.x;\n    // add r0.z, -r0_abs.z, c25.x\n    temp0.z = -abs(temp0).z + float1(80);\n    // cmp r0.z, r0.z, c25.y, c25.z\n    temp0.z = (temp0.z >= 0) ? float1(1) : float1(0);\n    // cmp r0.y, r0.y, r0.z, c25.z\n    temp0.y = (temp0.y >= 0) ? temp0.z : float1(0);\n    // add r0.x, r0.y, r0.x\n    temp0.x = temp0.y + temp0.x;\n    // mov r2.w, c24.w\n    temp2.w = float1(1);\n    // dp3 r0.y, c16, r1\n    temp0.y = dot(float3(0.024466075, -0.019408112, -0.09499861), temp1.xyz);\n    // add r0.y, r0.y, r0.y\n    temp0.y = temp0.y + temp0.y;\n    // mad r0.yzw, r1.xxyz, -r0.y, c16.xxyz\n    temp0.yzw = temp1.xyz * -temp0.yyy + float3(0.024466075, -0.019408112, -0.09499861);\n    // mad r2.xyz, c5.x, r0.yzww, r3.yzww\n    temp2.xyz = ref_ssao_radius.xxx * temp0.yzw + temp3.yzw;\n    // dp4 r0.y, r2, c3\n    temp0.y = dot(temp2, (camera_proj_matrix._m03_m13_m23_m33));\n    // rcp r0.y, r0.y\n    temp0.y = 1.0f / temp0.y;\n    // dp4 r4.x, r2, c0\n    temp4.x = dot(temp2, (camera_proj_matrix._m00_m10_m20_m30));\n    // dp4 r4.y, r2, c1\n    temp4.y = dot(temp2, (camera_proj_matrix._m01_m11_m21_m31));\n    // mul r0.yz, r0.y, r4.xxyw\n    temp0.yz = temp0.yy * temp4.xy;\n    // mad r0.yz, r0, c8.w, c8.w\n    temp0.yz = temp0.yz * float2(0.5, 0.5) + float2(0.5, 0.5);\n    // texld r4, r0.yzzw, s1\n    temp4 = tex2D(diffuse_texture, temp0.yz);\n    // add r0.y, r2.z, -r4.x\n    temp0.y = temp2.z + -temp4.x;\n    // mad r0.z, v1.z, r3.x, -r4.x\n    temp0.z = i.texcoord1.z * temp3.x + -temp4.x;\n    // add r0.z, -r0_abs.z, c25.x\n    temp0.z = -abs(temp0).z + float1(80);\n    // cmp r0.z, r0.z, c25.y, c25.z\n    temp0.z = (temp0.z >= 0) ? float1(1) : float1(0);\n    // cmp r0.y, r0.y, r0.z, c25.z\n    temp0.y = (temp0.y >= 0) ? temp0.z : float1(0);\n    // add r0.x, r0.y, r0.x\n    temp0.x = temp0.y + temp0.x;\n    // mov r2.w, c24.w\n    temp2.w = float1(1);\n    // dp3 r0.y, c17, r1\n    temp0.y = dot(float3(-0.10566495, 0.023530064, 0.047875702), temp1.xyz);\n    // add r0.y, r0.y, r0.y\n    temp0.y = temp0.y + temp0.y;\n    // mad r0.yzw, r1.xxyz, -r0.y, c17.xxyz\n    temp0.yzw = temp1.xyz * -temp0.yyy + float3(-0.10566495, 0.023530064, 0.047875702);\n    // mad r2.xyz, c5.x, r0.yzww, r3.yzww\n    temp2.xyz = ref_ssao_radius.xxx * temp0.yzw + temp3.yzw;\n    // dp4 r0.y, r2, c3\n    temp0.y = dot(temp2, (camera_proj_matrix._m03_m13_m23_m33));\n    // rcp r0.y, r0.y\n    temp0.y = 1.0f / temp0.y;\n    // dp4 r4.x, r2, c0\n    temp4.x = dot(temp2, (camera_proj_matrix._m00_m10_m20_m30));\n    // dp4 r4.y, r2, c1\n    temp4.y = dot(temp2, (camera_proj_matrix._m01_m11_m21_m31));\n    // mul r0.yz, r0.y, r4.xxyw\n    temp0.yz = temp0.yy * temp4.xy;\n    // mad r0.yz, r0, c8.w, c8.w\n    temp0.yz = temp0.yz * float2(0.5, 0.5) + float2(0.5, 0.5);\n    // texld r4, r0.yzzw, s1\n    temp4 = tex2D(diffuse_texture, temp0.yz);\n    // add r0.y, r2.z, -r4.x\n    temp0.y = temp2.z + -temp4.x;\n    // mad r0.z, v1.z, r3.x, -r4.x\n    temp0.z = i.texcoord1.z * temp3.x + -temp4.x;\n    // add r0.z, -r0_abs.z, c25.x\n    temp0.z = -abs(temp0).z + float1(80);\n    // cmp r0.z, r0.z, c25.y, c25.z\n    temp0.z = (temp0.z >= 0) ? float1(1) : float1(0);\n    // cmp r0.y, r0.y, r0.z, c25.z\n    temp0.y = (temp0.y >= 0) ? temp0.z : float1(0);\n    // add r0.x, r0.y, r0.x\n    temp0.x = temp0.y + temp0.x;\n    // mov r2.w, c24.w\n    temp2.w = float1(1);\n    // dp3 r0.y, c18, r1\n    temp0.y = dot(float3(0.10496007, 0.132813, 0.03789087), temp1.xyz);\n    // add r0.y, r0.y, r0.y\n    temp0.y = temp0.y + temp0.y;\n    // mad r0.yzw, r1.xxyz, -r0.y, c18.xxyz\n    temp0.yzw = temp1.xyz * -temp0.yyy + float3(0.10496007, 0.132813, 0.03789087);\n    // mad r2.xyz, c5.x, r0.yzww, r3.yzww\n    temp2.xyz = ref_ssao_radius.xxx * temp0.yzw + temp3.yzw;\n    // dp4 r0.y, r2, c3\n    temp0.y = dot(temp2, (camera_proj_matrix._m03_m13_m23_m33));\n    // rcp r0.y, r0.y\n    temp0.y = 1.0f / temp0.y;\n    // dp4 r4.x, r2, c0\n    temp4.x = dot(temp2, (camera_proj_matrix._m00_m10_m20_m30));\n    // dp4 r4.y, r2, c1\n    temp4.y = dot(temp2, (camera_proj_matrix._m01_m11_m21_m31));\n    // mul r0.yz, r0.y, r4.xxyw\n    temp0.yz = temp0.yy * temp4.xy;\n    // mad r0.yz, r0, c8.w, c8.w\n    temp0.yz = temp0.yz * float2(0.5, 0.5) + float2(0.5, 0.5);\n    // texld r4, r0.yzzw, s1\n    temp4 = tex2D(diffuse_texture, temp0.yz);\n    // add r0.y, r2.z, -r4.x\n    temp0.y = temp2.z + -temp4.x;\n    // mad r0.z, v1.z, r3.x, -r4.x\n    temp0.z = i.texcoord1.z * temp3.x + -temp4.x;\n    // add r0.z, -r0_abs.z, c25.x\n    temp0.z = -abs(temp0).z + float1(80);\n    // cmp r0.z, r0.z, c25.y, c25.z\n    temp0.z = (temp0.z >= 0) ? float1(1) : float1(0);\n    // cmp r0.y, r0.y, r0.z, c25.z\n    temp0.y = (temp0.y >= 0) ? temp0.z : float1(0);\n    // add r0.x, r0.y, r0.x\n    temp0.x = temp0.y + temp0.x;\n    // mov r2.w, c24.w\n    temp2.w = float1(1);\n    // dp3 r0.y, c19, r1\n    temp0.y = dot(float3(0.026339209, 0.09529735, 0.24619505), temp1.xyz);\n    // add r0.y, r0.y, r0.y\n    temp0.y = temp0.y + temp0.y;\n    // mad r0.yzw, r1.xxyz, -r0.y, c19.xxyz\n    temp0.yzw = temp1.xyz * -temp0.yyy + float3(0.026339209, 0.09529735, 0.24619505);\n    // mad r2.xyz, c5.x, r0.yzww, r3.yzww\n    temp2.xyz = ref_ssao_radius.xxx * temp0.yzw + temp3.yzw;\n    // dp4 r0.y, r2, c3\n    temp0.y = dot(temp2, (camera_proj_matrix._m03_m13_m23_m33));\n    // rcp r0.y, r0.y\n    temp0.y = 1.0f / temp0.y;\n    // dp4 r4.x, r2, c0\n    temp4.x = dot(temp2, (camera_proj_matrix._m00_m10_m20_m30));\n    // dp4 r4.y, r2, c1\n    temp4.y = dot(temp2, (camera_proj_matrix._m01_m11_m21_m31));\n    // mul r0.yz, r0.y, r4.xxyw\n    temp0.yz = temp0.yy * temp4.xy;\n    // mad r0.yz, r0, c8.w, c8.w\n    temp0.yz = temp0.yz * float2(0.5, 0.5) + float2(0.5, 0.5);\n    // texld r4, r0.yzzw, s1\n    temp4 = tex2D(diffuse_texture, temp0.yz);\n    // add r0.y, r2.z, -r4.x\n    temp0.y = temp2.z + -temp4.x;\n    // mad r0.z, v1.z, r3.x, -r4.x\n    temp0.z = i.texcoord1.z * temp3.x + -temp4.x;\n    // add r0.z, -r0_abs.z, c25.x\n    temp0.z = -abs(temp0).z + float1(80);\n    // cmp r0.z, r0.z, c25.y, c25.z\n    temp0.z = (temp0.z >= 0) ? float1(1) : float1(0);\n    // cmp r0.y, r0.y, r0.z, c25.z\n    temp0.y = (temp0.y >= 0) ? temp0.z : float1(0);\n    // add r0.x, r0.y, r0.x\n    temp0.x = temp0.y + temp0.x;\n    // dp3 r0.y, c20, r1\n    temp0.y = dot(float3(-0.13584931, -0.18946202, -0.31747225), temp1.xyz);\n    // add r0.y, r0.y, r0.y\n    temp0.y = temp0.y + temp0.y;\n    // mad r0.yzw, r1.xxyz, -r0.y, c20.xxyz\n    temp0.yzw = temp1.xyz * -temp0.yyy + float3(-0.13584931, -0.18946202, -0.31747225);\n    // mad r2.xyz, c5.x, r0.yzww, r3.yzww\n    temp2.xyz = ref_ssao_radius.xxx * temp0.yzw + temp3.yzw;\n    // mov r2.w, c24.w\n    temp2.w = float1(1);\n    // dp4 r0.y, r2, c3\n    temp0.y = dot(temp2, (camera_proj_matrix._m03_m13_m23_m33));\n    // rcp r0.y, r0.y\n    temp0.y = 1.0f / temp0.y;\n    // dp4 r4.x, r2, c0\n    temp4.x = dot(temp2, (camera_proj_matrix._m00_m10_m20_m30));\n    // dp4 r4.y, r2, c1\n    temp4.y = dot(temp2, (camera_proj_matrix._m01_m11_m21_m31));\n    // mul r0.yz, r0.y, r4.xxyw\n    temp0.yz = temp0.yy * temp4.xy;\n    // mad r0.yz, r0, c8.w, c8.w\n    temp0.yz = temp0.yz * float2(0.5, 0.5) + float2(0.5, 0.5);\n    // texld r4, r0.yzzw, s1\n    temp4 = tex2D(diffuse_texture, temp0.yz);\n    // add r0.y, r2.z, -r4.x\n    temp0.y = temp2.z + -temp4.x;\n    // mad r0.z, v1.z, r3.x, -r4.x\n    temp0.z = i.texcoord1.z * temp3.x + -temp4.x;\n    // add r0.z, -r0_abs.z, c25.x\n    temp0.z = -abs(temp0).z + float1(80);\n    // cmp r0.z, r0.z, c25.y, c25.z\n    temp0.z = (temp0.z >= 0) ? float1(1) : float1(0);\n    // cmp r0.y, r0.y, r0.z, c25.z\n    temp0.y = (temp0.y >= 0) ? temp0.z : float1(0);\n    // add r0.x, r0.y, r0.x\n    temp0.x = temp0.y + temp0.x;\n    // dp3 r0.y, c21, r1\n    temp0.y = dot(float3(0.29442918, -0.3771256, -0.28943762), temp1.xyz);\n    // add r0.y, r0.y, r0.y\n    temp0.y = temp0.y + temp0.y;\n    // mad r0.yzw, r1.xxyz, -r0.y, c21.xxyz\n    temp0.yzw = temp1.xyz * -temp0.yyy + float3(0.29442918, -0.3771256, -0.28943762);\n    // mad r2.xyz, c5.x, r0.yzww, r3.yzww\n    temp2.xyz = ref_ssao_radius.xxx * temp0.yzw + temp3.yzw;\n    // mov r2.w, c24.w\n    temp2.w = float1(1);\n    // dp4 r0.y, r2, c3\n    temp0.y = dot(temp2, (camera_proj_matrix._m03_m13_m23_m33));\n    // rcp r0.y, r0.y\n    temp0.y = 1.0f / temp0.y;\n    // dp4 r4.x, r2, c0\n    temp4.x = dot(temp2, (camera_proj_matrix._m00_m10_m20_m30));\n    // dp4 r4.y, r2, c1\n    temp4.y = dot(temp2, (camera_proj_matrix._m01_m11_m21_m31));\n    // mul r0.yz, r0.y, r4.xxyw\n    temp0.yz = temp0.yy * temp4.xy;\n    // mad r0.yz, r0, c8.w, c8.w\n    temp0.yz = temp0.yz * float2(0.5, 0.5) + float2(0.5, 0.5);\n    // texld r4, r0.yzzw, s1\n    temp4 = tex2D(diffuse_texture, temp0.yz);\n    // add r0.y, r2.z, -r4.x\n    temp0.y = temp2.z + -temp4.x;\n    // mad r0.z, v1.z, r3.x, -r4.x\n    temp0.z = i.texcoord1.z * temp3.x + -temp4.x;\n    // add r0.z, -r0_abs.z, c25.x\n    temp0.z = -abs(temp0).z + float1(80);\n    // cmp r0.z, r0.z, c25.y, c25.z\n    temp0.z = (temp0.z >= 0) ? float1(1) : float1(0);\n    // cmp r0.y, r0.y, r0.z, c25.z\n    temp0.y = (temp0.y >= 0) ? temp0.z : float1(0);\n    // add r0.x, r0.y, r0.x\n    temp0.x = temp0.y + temp0.x;\n    // dp3 r0.y, c22, r1\n    temp0.y = dot(float3(-0.70672727, -0.11214456, -0.2596592), temp1.xyz);\n    // add r0.y, r0.y, r0.y\n    temp0.y = temp0.y + temp0.y;\n    // mad r0.yzw, r1.xxyz, -r0.y, c22.xxyz\n    temp0.yzw = temp1.xyz * -temp0.yyy + float3(-0.70672727, -0.11214456, -0.2596592);\n    // mad r2.xyz, c5.x, r0.yzww, r3.yzww\n    temp2.xyz = ref_ssao_radius.xxx * temp0.yzw + temp3.yzw;\n    // mov r2.w, c24.w\n    temp2.w = float1(1);\n    // dp4 r0.y, r2, c3\n    temp0.y = dot(temp2, (camera_proj_matrix._m03_m13_m23_m33));\n    // rcp r0.y, r0.y\n    temp0.y = 1.0f / temp0.y;\n    // dp4 r4.x, r2, c0\n    temp4.x = dot(temp2, (camera_proj_matrix._m00_m10_m20_m30));\n    // dp4 r4.y, r2, c1\n    temp4.y = dot(temp2, (camera_proj_matrix._m01_m11_m21_m31));\n    // mul r0.yz, r0.y, r4.xxyw\n    temp0.yz = temp0.yy * temp4.xy;\n    // mad r0.yz, r0, c8.w, c8.w\n    temp0.yz = temp0.yz * float2(0.5, 0.5) + float2(0.5, 0.5);\n    // texld r4, r0.yzzw, s1\n    temp4 = tex2D(diffuse_texture, temp0.yz);\n    // add r0.y, r2.z, -r4.x\n    temp0.y = temp2.z + -temp4.x;\n    // mad r0.z, v1.z, r3.x, -r4.x\n    temp0.z = i.texcoord1.z * temp3.x + -temp4.x;\n    // add r0.z, -r0_abs.z, c25.x\n    temp0.z = -abs(temp0).z + float1(80);\n    // cmp r0.z, r0.z, c25.y, c25.z\n    temp0.z = (temp0.z >= 0) ? float1(1) : float1(0);\n    // cmp r0.y, r0.y, r0.z, c25.z\n    temp0.y = (temp0.y >= 0) ? temp0.z : float1(0);\n    // add r0.x, r0.y, r0.x\n    temp0.x = temp0.y + temp0.x;\n    // dp3 r0.y, c23, r1\n    temp0.y = dot(float3(-0.90279573, 0.31799483, -0.28954995), temp1.xyz);\n    // add r0.y, r0.y, r0.y\n    temp0.y = temp0.y + temp0.y;\n    // mad r0.yzw, r1.xxyz, -r0.y, c23.xxyz\n    temp0.yzw = temp1.xyz * -temp0.yyy + float3(-0.90279573, 0.31799483, -0.28954995);\n    // mad r1.xyz, c5.x, r0.yzww, r3.yzww\n    temp1.xyz = ref_ssao_radius.xxx * temp0.yzw + temp3.yzw;\n    // mov r1.w, c24.w\n    temp1.w = float1(1);\n    // dp4 r0.y, r1, c3\n    temp0.y = dot(temp1, (camera_proj_matrix._m03_m13_m23_m33));\n    // rcp r0.y, r0.y\n    temp0.y = 1.0f / temp0.y;\n    // dp4 r2.x, r1, c0\n    temp2.x = dot(temp1, (camera_proj_matrix._m00_m10_m20_m30));\n    // dp4 r2.y, r1, c1\n    temp2.y = dot(temp1, (camera_proj_matrix._m01_m11_m21_m31));\n    // mul r0.yz, r0.y, r2.xxyw\n    temp0.yz = temp0.yy * temp2.xy;\n    // mad r0.yz, r0, c8.w, c8.w\n    temp0.yz = temp0.yz * float2(0.5, 0.5) + float2(0.5, 0.5);\n    // texld r2, r0.yzzw, s1\n    temp2 = tex2D(diffuse_texture, temp0.yz);\n    // add r0.y, r1.z, -r2.x\n    temp0.y = temp1.z + -temp2.x;\n    // mad r0.z, v1.z, r3.x, -r2.x\n    temp0.z = i.texcoord1.z * temp3.x + -temp2.x;\n    // add r0.z, -r0_abs.z, c25.x\n    temp0.z = -abs(temp0).z + float1(80);\n    // cmp r0.z, r0.z, c25.y, c25.z\n    temp0.z = (temp0.z >= 0) ? float1(1) : float1(0);\n    // cmp r0.y, r0.y, r0.z, c25.z\n    temp0.y = (temp0.y >= 0) ? temp0.z : float1(0);\n    // add r0.x, r0.y, r0.x\n    temp0.x = temp0.y + temp0.x;\n    // mad r0.x, r0.x, -c25.w, c25.y\n    temp0.x = temp0.x * float1(-0.0625) + float1(1);\n    // add r0.x, -r0.x, c6.x\n    temp0.x = -temp0.x + ref_ssao_inflexion.x;\n    // mul r0.x, r0.x, c7.x\n    temp0.x = temp0.x * ref_ssao_steepness.x;\n    // mul r0.x, r0.x, c9.w\n    temp0.x = temp0.x * float1(1.442695);\n    // exp r0.x, r0.x\n    temp0.x = exp2(temp0.x);\n    // add r0.x, r0.x, c24.w\n    temp0.x = temp0.x + float1(1);\n    // rcp oC0, r0.x\n    out_color = 1.0f / temp0.x;\n    // \n\n    return out_color;\n}\n")),(0,p.kt)("p",null,"Decompiled by DXDecompiler."))}c.isMDXComponent=!0}}]);