"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[41151],{603905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},_=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),m=p(n),_=a,u=m["".concat(s,".").concat(_)]||m[_]||c[_]||o;return n?r.createElement(u,i(i({ref:t},l),{},{components:n})):r.createElement(u,i({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=_;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[m]="string"==typeof e?e:a,i[1]=d;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}_.displayName="MDXCreateElement"},133359:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var r=n(487462),a=(n(667294),n(603905));const o={id:0xe9a517574498f800,title:"Effect Default Diffuse0 Texture Skinned 3weights"},i="Effect Default Diffuse0 Texture Skinned 3weights",d={unversionedId:"Generated/Shaders/Base/[4300-4400]/16835888445574937000",id:"Generated/Shaders/Base/[4300-4400]/16835888445574937000",title:"Effect Default Diffuse0 Texture Skinned 3weights",description:"(effectDIFFUSE0TEXTURE:SKINNED3WEIGHTS, 0xe9a517574498fb83)",source:"@site/docs/Generated/Shaders/Base/[4300-4400]/0xe9a517574498fb83.mdx",sourceDirName:"Generated/Shaders/Base/[4300-4400]",slug:"/Generated/Shaders/Base/[4300-4400]/16835888445574937000",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[4300-4400]/16835888445574937000",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/Generated/Shaders/Base/[4300-4400]/0xe9a517574498fb83.mdx",tags:[],version:"current",frontMatter:{id:"16835888445574937000",title:"Effect Default Diffuse0 Texture Skinned 3weights"},sidebar:"docsSidebar",previous:{title:"Generic Shadow Caster Diffuse Texture Gsma Texture Normalmap Nvidia Vertex Color",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[4300-4400]/16831529358826940000"},next:{title:"Generic Shadow Caster Blend Diffuse Blend Mask Seperate Blend Normal Blend Smooth Diffuse Texture Instanced Normalmap Nvidia Vertex Color",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[4300-4400]/16835898415739170000"}},s={},p=[{value:"Technique <code>transparent</code>",id:"technique-transparent",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],l={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"effect-default-diffuse0-texture-skinned-3weights"},"Effect Default Diffuse0 Texture Skinned 3weights"),(0,a.kt)("p",null,"(",(0,a.kt)("inlineCode",{parentName:"p"},"effect:default:DIFFUSE0_TEXTURE:SKINNED_3WEIGHTS"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"0xe9a517574498fb83"),")"),(0,a.kt)("p",null,"This template is referenced 1 time by ",(0,a.kt)("a",{parentName:"p",href:"/docs/Generated/Render%20Templates/base.render_template_database#effect-diffuse0-texture-skinned-3weights"},"effect:DIFFUSE0_TEXTURE:SKINNED_3WEIGHTS"),".\nThis template uses the following inputs:\n|Name|UI Name|Type|\n|---|---|---|\n|diffuse_texture|Diffuse0 Texture|texture|\n|intensity|Intensity|scalar|."),(0,a.kt)("h3",{id:"technique-transparent"},"Technique ",(0,a.kt)("inlineCode",{parentName:"h3"},"transparent")),(0,a.kt)("h3",{id:"render-states"},"Render States"),(0,a.kt)("p",null,"More info can be found on the ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3drenderstatetype"},"Direct3D Docs")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 0,\n    D3DRS_ALPHABLENDENABLE = 1,\n    D3DRS_CULLMODE = 2,\n    D3DRS_COLORWRITEENABLE = 7,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n    D3DRS_BLENDOP = 1,\n    D3DRS_DESTBLEND = 6,\n    D3DRS_SRCBLEND = 5,\n};\n")),(0,a.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,a.kt)("p",null,"More info can be found on the ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3dsamplerstatetype"},"Direct3D Docs")),(0,a.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,a.kt)("h3",{id:"shaders"},"Shaders"),(0,a.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hlsl"},"column_major float4x3 bones[54] : register(vs_3_0, c0);\ncolumn_major float4x4 view_proj_matrix : register(vs_3_0, c162);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 blendweight : BLENDWEIGHT;\n    float4 blendindices : BLENDINDICES;\n    float4 texcoord : TEXCOORD;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float2 texcoord : TEXCOORD;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float4 temp0;\n    float2 addr0;\n    float3 temp1;\n    // def c166, 3, 1, 0, 0\n    // dcl_position v0\n    // dcl_blendweight v1\n    // dcl_blendindices v2\n    // dcl_texcoord v3\n    // dcl_position o0\n    // dcl_texcoord o1.xy\n    // mul r0.xyz, c166.x, v2\n    temp0.xyz = float3(3, 3, 3) * i.blendindices.xyz;\n    // mova a0.x, r0.y\n    addr0.x = temp0.y;\n    // dp4 r1.x, v0, c0[a0.x]\n    temp1.x = dot(i.position, (bones[0 + (addr0.x / 3)]._m00_m10_m20_m30));\n    // dp4 r1.y, v0, c1[a0.x]\n    temp1.y = dot(i.position, (bones[0 + (addr0.x / 3)]._m01_m11_m21_m31));\n    // dp4 r1.z, v0, c2[a0.x]\n    temp1.z = dot(i.position, (bones[0 + (addr0.x / 3)]._m02_m12_m22_m32));\n    // mul r1.xyz, r1, v1.y\n    temp1.xyz = temp1.xyz * i.blendweight.yyy;\n    // mova a0.xy, r0.xzzw\n    addr0.xy = temp0.xz;\n    // dp4 r0.x, v0, c0[a0.x]\n    temp0.x = dot(i.position, (bones[0 + (addr0.x / 3)]._m00_m10_m20_m30));\n    // dp4 r0.y, v0, c1[a0.x]\n    temp0.y = dot(i.position, (bones[0 + (addr0.x / 3)]._m01_m11_m21_m31));\n    // dp4 r0.z, v0, c2[a0.x]\n    temp0.z = dot(i.position, (bones[0 + (addr0.x / 3)]._m02_m12_m22_m32));\n    // mad r0.xyz, v1.x, r0, r1\n    temp0.xyz = i.blendweight.xxx * temp0.xyz + temp1.xyz;\n    // dp4 r1.x, v0, c0[a0.y]\n    temp1.x = dot(i.position, (bones[0 + (addr0.y / 3)]._m00_m10_m20_m30));\n    // dp4 r1.y, v0, c1[a0.y]\n    temp1.y = dot(i.position, (bones[0 + (addr0.y / 3)]._m01_m11_m21_m31));\n    // dp4 r1.z, v0, c2[a0.y]\n    temp1.z = dot(i.position, (bones[0 + (addr0.y / 3)]._m02_m12_m22_m32));\n    // mad r0.xyz, v1.z, r1, r0\n    temp0.xyz = i.blendweight.zzz * temp1.xyz + temp0.xyz;\n    // mov r0.w, c166.y\n    temp0.w = float1(1);\n    // dp4 o0.x, r0, c162\n    o.position.x = dot(temp0, (view_proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, r0, c163\n    o.position.y = dot(temp0, (view_proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.z, r0, c164\n    o.position.z = dot(temp0, (view_proj_matrix._m02_m12_m22_m32));\n    // dp4 o0.w, r0, c165\n    o.position.w = dot(temp0, (view_proj_matrix._m03_m13_m23_m33));\n    // mov o1.xy, v3\n    o.texcoord = i.texcoord;\n    // \n\n    return o;\n}\n")),(0,a.kt)("p",null,"Decompiled by DXDecompiler."),(0,a.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hlsl"},"sampler2D diffuse_texture : register(ps_3_0, s0);\nfloat ref_intensity : register(ps_3_0, c0);\nfloat4 PixelMain(float2 texcoord : TEXCOORD) : COLOR\n{\n    float4 out_color;\n    float4 temp0;\n    // dcl_texcoord v0.xy\n    // dcl_2d s0\n    // texld_pp r0, v0, s0\n    temp0 = /* not implemented _pp modifier */ tex2D(diffuse_texture, texcoord.xy);\n    // mul oC0.xyz, r0, c0.x\n    out_color.xyz = temp0.xyz * ref_intensity.xxx;\n    // mov_pp oC0.w, r0.w\n    out_color.w = /* not implemented _pp modifier */ temp0.w;\n    // \n\n    return out_color;\n}\n")),(0,a.kt)("p",null,"Decompiled by DXDecompiler."))}c.isMDXComponent=!0}}]);