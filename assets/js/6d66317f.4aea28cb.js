"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[20490],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>s});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",_={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},x=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),x=o,s=m["".concat(i,".").concat(x)]||m[x]||_[x]||a;return n?r.createElement(s,d(d({ref:t},p),{},{components:n})):r.createElement(s,d({ref:t},p))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,d=new Array(a);d[0]=x;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:o,d[1]=l;for(var c=2;c<a;c++)d[c]=n[c];return r.createElement.apply(null,d)}return r.createElement.apply(null,n)}x.displayName="MDXCreateElement"},98930:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>_,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={id:0x9801c81babe03800,title:"Generic Default Diffuse Texture Instanced Vertex Color"},d="Generic Default Diffuse Texture Instanced Vertex Color",l={unversionedId:"Generated/Shaders/Base/[2800-2900]/10953255789915027000",id:"Generated/Shaders/Base/[2800-2900]/10953255789915027000",title:"Generic Default Diffuse Texture Instanced Vertex Color",description:"(genericDIFFUSETEXTUREVERTEXCOLOR, 0x9801c81babe035fd)",source:"@site/docs/Generated/Shaders/Base/[2800-2900]/0x9801c81babe035fd.mdx",sourceDirName:"Generated/Shaders/Base/[2800-2900]",slug:"/Generated/Shaders/Base/[2800-2900]/10953255789915027000",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[2800-2900]/10953255789915027000",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/docs/Generated/Shaders/Base/[2800-2900]/0x9801c81babe035fd.mdx",tags:[],version:"current",frontMatter:{id:"10953255789915027000",title:"Generic Default Diffuse Texture Instanced Vertex Color"},sidebar:"docsSidebar",previous:{title:"Generic Default Diffuse Texture Double Sided Normalmap Rl Environment Vertex Color",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[2800-2900]/10944910168040530000"},next:{title:"Generic Shadow Caster Ati Contour Depth Scaling Diffuse Texture Normalmap Skinned 3weights",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[2800-2900]/10958077832727730000"}},i={},c=[{value:"Technique <code>deferred_ambient</code>",id:"technique-deferred_ambient",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],p={toc:c},m="wrapper";function _(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"generic-default-diffuse-texture-instanced-vertex-color"},"Generic Default Diffuse Texture Instanced Vertex Color"),(0,o.kt)("p",null,"(",(0,o.kt)("inlineCode",{parentName:"p"},"generic:default:DIFFUSE_TEXTURE:INSTANCED:VERTEX_COLOR"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"0x9801c81babe035fd"),")"),(0,o.kt)("h3",{id:"technique-deferred_ambient"},"Technique ",(0,o.kt)("inlineCode",{parentName:"h3"},"deferred_ambient")),(0,o.kt)("h3",{id:"render-states"},"Render States"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 1,\n    D3DRS_ALPHABLENDENABLE = 0,\n    D3DRS_CULLMODE = 2,\n    D3DRS_COLORWRITEENABLE = 15,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n};\n")),(0,o.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,o.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h3",{id:"shaders"},"Shaders"),(0,o.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"float camera_near_range : register(vs_3_0, c204);\ncolumn_major float4x4 ref_world_tm[50] : register(vs_3_0, c0);\ncolumn_major float4x4 view_proj_matrix : register(vs_3_0, c200);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 normal : NORMAL;\n    float4 texcoord : TEXCOORD;\n    float4 position1 : POSITION1;\n    float4 color : COLOR;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float texcoord1 : TEXCOORD1;\n    float2 texcoord : TEXCOORD;\n    float3 texcoord2 : TEXCOORD2;\n    float4 color : COLOR;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float4 temp0, temp1;\n    float addr0;\n    // def c205, 2, -1, 4, -0\n    // dcl_position v0\n    // dcl_normal v1\n    // dcl_texcoord v2\n    // dcl_position1 v3\n    // dcl_color v4\n    // dcl_position o0\n    // dcl_texcoord1 o1.x\n    // dcl_texcoord o2.xy\n    // dcl_texcoord2 o3.xyz\n    // dcl_color o4\n    // frc r0.x, v3.x\n    temp0.x = frac(i.position1.x);\n    // add r0.x, -r0.x, v3.x\n    temp0.x = -temp0.x + i.position1.x;\n    // mul r0.x, r0.x, c205.z\n    temp0.x = temp0.x * float1(4);\n    // mova a0.x, r0.x\n    addr0.x = temp0.x;\n    // mad r0, v0.xyzx, -c205.yyyw, -c205.wwwy\n    temp0 = i.position.xyzx * float4(1, 1, 1, 0) + float4(0, 0, 0, 1);\n    // dp4 r1.x, r0, c0[a0.x]\n    temp1.x = dot(temp0, (ref_world_tm[0 + (addr0.x / 4)]._m00_m10_m20_m30));\n    // dp4 r1.y, r0, c1[a0.x]\n    temp1.y = dot(temp0, (ref_world_tm[0 + (addr0.x / 4)]._m01_m11_m21_m31));\n    // dp4 r1.z, r0, c2[a0.x]\n    temp1.z = dot(temp0, (ref_world_tm[0 + (addr0.x / 4)]._m02_m12_m22_m32));\n    // dp4 r1.w, r0, c3[a0.x]\n    temp1.w = dot(temp0, (ref_world_tm[0 + (addr0.x / 4)]._m03_m13_m23_m33));\n    // dp4 o0.x, r1, c200\n    o.position.x = dot(temp1, (view_proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, r1, c201\n    o.position.y = dot(temp1, (view_proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.w, r1, c203\n    o.position.w = dot(temp1, (view_proj_matrix._m03_m13_m23_m33));\n    // dp4 r0.x, r1, c202\n    temp0.x = dot(temp1, (view_proj_matrix._m02_m12_m22_m32));\n    // add o1.x, r0.x, c204.x\n    o.texcoord1 = temp0.x + camera_near_range.x;\n    // mov o0.z, r0.x\n    o.position.z = temp0.x;\n    // mad r0.xyz, v1, c205.x, c205.y\n    temp0.xyz = i.normal.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 o3.x, r0, c0[a0.x]\n    o.texcoord2.x = dot(temp0.xyz, (ref_world_tm[0 + (addr0.x / 4)]._m00_m10_m20_m30).xyz);\n    // dp3 o3.y, r0, c1[a0.x]\n    o.texcoord2.y = dot(temp0.xyz, (ref_world_tm[0 + (addr0.x / 4)]._m01_m11_m21_m31).xyz);\n    // dp3 o3.z, r0, c2[a0.x]\n    o.texcoord2.z = dot(temp0.xyz, (ref_world_tm[0 + (addr0.x / 4)]._m02_m12_m22_m32).xyz);\n    // mov o2.xy, v2\n    o.texcoord = i.texcoord;\n    // mul o4, c205_abs.xxxy, v4\n    o.color = float4(2, 2, 2, 1) * i.color;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."),(0,o.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"sampler2D diffuse_texture : register(ps_3_0, s0);\nstruct PixelMain_Input\n{\n    float texcoord1 : TEXCOORD1;\n    float2 texcoord : TEXCOORD;\n    float3 texcoord2 : TEXCOORD2;\n    float3 color : COLOR;\n};\n\nstruct PixelMain_Output\n{\n    float4 color : COLOR;\n    float4 color1 : COLOR1;\n    float4 color2 : COLOR2;\n};\n\nPixelMain_Output PixelMain(PixelMain_Input i)\n{\n    PixelMain_Output o;\n    float4 temp0;\n    // def c0, 0.5, 0.4, 0, 0\n    // dcl_texcoord1 v0.x\n    // dcl_texcoord v1.xy\n    // dcl_texcoord2_pp v2.xyz\n    // dcl_color v3.xyz\n    // dcl_2d s0\n    // texld_pp r0, v1, s0\n    temp0 = /* not implemented _pp modifier */ tex2D(diffuse_texture, i.texcoord.xy);\n    // mul_pp oC0.xyz, r0, v3\n    o.color.xyz = /* not implemented _pp modifier */ temp0.xyz * i.color.xyz;\n    // mov_pp oC1.w, r0.w\n    o.color1.w = /* not implemented _pp modifier */ temp0.w;\n    // nrm_pp r0.xyz, v2\n    temp0.xyz = /* not implemented _pp modifier */ normalize(i.texcoord2.xyz).xyz;\n    // mad_pp oC1.xyz, r0, c0.x, c0.x\n    o.color1.xyz = /* not implemented _pp modifier */ temp0.xyz * float3(0.5, 0.5, 0.5) + float3(0.5, 0.5, 0.5);\n    // mov oC0.w, c0.y\n    o.color.w = float1(0.4);\n    // mov oC2, v0.x\n    o.color2 = i.texcoord1.x;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."))}_.isMDXComponent=!0}}]);