"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[32186],{603905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var r=n(667294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):m(m({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},_="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),_=d(n),s=o,u=_["".concat(p,".").concat(s)]||_[s]||c[s]||a;return n?r.createElement(u,m(m({ref:t},l),{},{components:n})):r.createElement(u,m({ref:t},l))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,m=new Array(a);m[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[_]="string"==typeof e?e:o,m[1]=i;for(var d=2;d<a;d++)m[d]=n[d];return r.createElement.apply(null,m)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},561710:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=n(487462),o=(n(667294),n(603905));const a={id:0x4a4b1131238c4800,title:"Generic Default Contour Diffuse Texture"},m="Generic Default Contour Diffuse Texture",i={unversionedId:"Generated/Shaders/Base/[1400-1500]/5353391484807432000",id:"Generated/Shaders/Base/[1400-1500]/5353391484807432000",title:"Generic Default Contour Diffuse Texture",description:"(genericCONTOUR:DIFFUSE_TEXTURE, 0x4a4b1131238c4865)",source:"@site/docs/Generated/Shaders/Base/[1400-1500]/0x4a4b1131238c4865.mdx",sourceDirName:"Generated/Shaders/Base/[1400-1500]",slug:"/Generated/Shaders/Base/[1400-1500]/5353391484807432000",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[1400-1500]/5353391484807432000",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/Generated/Shaders/Base/[1400-1500]/0x4a4b1131238c4865.mdx",tags:[],version:"current",frontMatter:{id:"5353391484807432000",title:"Generic Default Contour Diffuse Texture"},sidebar:"docsSidebar",previous:{title:"Generic Shadow Caster Ati Blend Diffuse Blend Gsma Blend Mask Control Blend Mask Crossblend Cube Environment Mapping Diffuse Texture Gloss Blurs Cubemap Gsma Texture Instanced Vertex Color",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[1400-1500]/5352641514028364000"},next:{title:"Generic Default Contour Cube Environment Mapping Diffuse Texture Gsma Texture Normalmap Vertex Color",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[1400-1500]/5355077953951792000"}},p={},d=[{value:"Technique <code>deferred_ambient</code>",id:"technique-deferred_ambient",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4},{value:"Technique <code>contours</code>",id:"technique-contours",level:3},{value:"Render States",id:"render-states-1",level:3},{value:"Sampler States",id:"sampler-states-1",level:3},{value:"Shaders",id:"shaders-1",level:3},{value:"Vertex Shader",id:"vertex-shader-1",level:4},{value:"Pixel Shader",id:"pixel-shader-1",level:4}],l={toc:d},_="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(_,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"generic-default-contour-diffuse-texture"},"Generic Default Contour Diffuse Texture"),(0,o.kt)("p",null,"(",(0,o.kt)("inlineCode",{parentName:"p"},"generic:default:CONTOUR:DIFFUSE_TEXTURE"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"0x4a4b1131238c4865"),")"),(0,o.kt)("p",null,"This template is referenced 1 time by ",(0,o.kt)("a",{parentName:"p",href:"/docs/Generated/Render%20Templates/base.render_template_database#generic-contour-diffuse-texture"},"generic:CONTOUR:DIFFUSE_TEXTURE"),".\nThis template uses the following inputs:\n|Name|UI Name|Type|\n|---|---|---|\n|diffuse_texture|Diffuse Texture (UV1)|texture|\n|contour_color|Contour color|vector3|\n|contour_opacity|Contour opacity|scalar|\n|contour_distance|Contour distance|scalar|."),(0,o.kt)("h3",{id:"technique-deferred_ambient"},"Technique ",(0,o.kt)("inlineCode",{parentName:"h3"},"deferred_ambient")),(0,o.kt)("h3",{id:"render-states"},"Render States"),(0,o.kt)("p",null,"More info can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3drenderstatetype"},"Direct3D Docs")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 1,\n    D3DRS_ALPHABLENDENABLE = 0,\n    D3DRS_CULLMODE = 2,\n    D3DRS_COLORWRITEENABLE = 15,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n};\n")),(0,o.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,o.kt)("p",null,"More info can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3dsamplerstatetype"},"Direct3D Docs")),(0,o.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h3",{id:"shaders"},"Shaders"),(0,o.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"float camera_near_range : register(vs_3_0, c7);\ncolumn_major float4x4 view_proj_matrix : register(vs_3_0, c0);\ncolumn_major float4x4 world_matrix : register(vs_3_0, c4);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 normal : NORMAL;\n    float4 texcoord : TEXCOORD;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float texcoord1 : TEXCOORD1;\n    float2 texcoord : TEXCOORD;\n    float3 texcoord2 : TEXCOORD2;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float3 temp0;\n    // def c8, 2, -1, 0, 0\n    // dcl_position v0\n    // dcl_normal v1\n    // dcl_texcoord v2\n    // dcl_position o0\n    // dcl_texcoord1 o1.x\n    // dcl_texcoord o2.xy\n    // dcl_texcoord2 o3.xyz\n    // dp4 o0.x, v0, c0\n    o.position.x = dot(i.position, (view_proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, v0, c1\n    o.position.y = dot(i.position, (view_proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.w, v0, c3\n    o.position.w = dot(i.position, (view_proj_matrix._m03_m13_m23_m33));\n    // dp4 r0.x, v0, c2\n    temp0.x = dot(i.position, (view_proj_matrix._m02_m12_m22_m32));\n    // add o1.x, r0.x, c7.x\n    o.texcoord1 = temp0.x + camera_near_range.x;\n    // mov o0.z, r0.x\n    o.position.z = temp0.x;\n    // mad r0.xyz, v1, c8.x, c8.y\n    temp0.xyz = i.normal.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 o3.x, r0, c4\n    o.texcoord2.x = dot(temp0.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 o3.y, r0, c5\n    o.texcoord2.y = dot(temp0.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o3.z, r0, c6\n    o.texcoord2.z = dot(temp0.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // mov o2.xy, v2\n    o.texcoord = i.texcoord;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."),(0,o.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"sampler2D diffuse_texture : register(ps_3_0, s0);\nstruct PixelMain_Input\n{\n    float texcoord1 : TEXCOORD1;\n    float2 texcoord : TEXCOORD;\n    float3 texcoord2 : TEXCOORD2;\n};\n\nstruct PixelMain_Output\n{\n    float4 color1 : COLOR1;\n    float4 color : COLOR;\n    float4 color2 : COLOR2;\n};\n\nPixelMain_Output PixelMain(PixelMain_Input i)\n{\n    PixelMain_Output o;\n    float4 temp0;\n    // def c0, 0.5, 0.4, 0, 0\n    // dcl_texcoord1 v0.x\n    // dcl_texcoord v1.xy\n    // dcl_texcoord2_pp v2.xyz\n    // dcl_2d s0\n    // nrm_pp r0.xyz, v2\n    temp0.xyz = /* not implemented _pp modifier */ normalize(i.texcoord2.xyz).xyz;\n    // mad_pp oC1.xyz, r0, c0.x, c0.x\n    o.color1.xyz = /* not implemented _pp modifier */ temp0.xyz * float3(0.5, 0.5, 0.5) + float3(0.5, 0.5, 0.5);\n    // texld_pp r0, v1, s0\n    temp0 = /* not implemented _pp modifier */ tex2D(diffuse_texture, i.texcoord.xy);\n    // mov_pp oC0.xyz, r0\n    o.color.xyz = /* not implemented _pp modifier */ temp0.xyz;\n    // mov_pp oC1.w, r0.w\n    o.color1.w = /* not implemented _pp modifier */ temp0.w;\n    // mov oC0.w, c0.y\n    o.color.w = float1(0.4);\n    // mov oC2, v0.x\n    o.color2 = i.texcoord1.x;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."),(0,o.kt)("h3",{id:"technique-contours"},"Technique ",(0,o.kt)("inlineCode",{parentName:"h3"},"contours")),(0,o.kt)("h3",{id:"render-states-1"},"Render States"),(0,o.kt)("p",null,"More info can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3drenderstatetype"},"Direct3D Docs")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 0,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 0,\n    D3DRS_ALPHABLENDENABLE = 1,\n    D3DRS_CULLMODE = 2,\n    D3DRS_COLORWRITEENABLE = 15,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n    D3DRS_BLENDOP = 1,\n    D3DRS_DESTBLEND = 6,\n    D3DRS_SRCBLEND = 5,\n};\n")),(0,o.kt)("h3",{id:"sampler-states-1"},"Sampler States"),(0,o.kt)("p",null,"More info can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3dsamplerstatetype"},"Direct3D Docs")),(0,o.kt)("h3",{id:"shaders-1"},"Shaders"),(0,o.kt)("h4",{id:"vertex-shader-1"},"Vertex Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"column_major float4x4 proj_matrix : register(vs_3_0, c8);\ncolumn_major float4x4 view_matrix : register(vs_3_0, c4);\ncolumn_major float4x4 world_matrix : register(vs_3_0, c0);\nfloat4 VertexMain(float4 position : POSITION) : POSITION\n{\n    float4 out_position;\n    float4 temp0, temp1;\n    // dcl_position v0\n    // dcl_position o0\n    // dp4 r0.x, v0, c0\n    temp0.x = dot(position, (world_matrix._m00_m10_m20_m30));\n    // dp4 r0.y, v0, c1\n    temp0.y = dot(position, (world_matrix._m01_m11_m21_m31));\n    // dp4 r0.z, v0, c2\n    temp0.z = dot(position, (world_matrix._m02_m12_m22_m32));\n    // dp4 r0.w, v0, c3\n    temp0.w = dot(position, (world_matrix._m03_m13_m23_m33));\n    // dp4 r1.x, r0, c4\n    temp1.x = dot(temp0, (view_matrix._m00_m10_m20_m30));\n    // dp4 r1.y, r0, c5\n    temp1.y = dot(temp0, (view_matrix._m01_m11_m21_m31));\n    // dp4 r1.z, r0, c6\n    temp1.z = dot(temp0, (view_matrix._m02_m12_m22_m32));\n    // dp4 r1.w, r0, c7\n    temp1.w = dot(temp0, (view_matrix._m03_m13_m23_m33));\n    // dp4 o0.x, r1, c8\n    out_position.x = dot(temp1, (proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, r1, c9\n    out_position.y = dot(temp1, (proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.z, r1, c10\n    out_position.z = dot(temp1, (proj_matrix._m02_m12_m22_m32));\n    // dp4 o0.w, r1, c11\n    out_position.w = dot(temp1, (proj_matrix._m03_m13_m23_m33));\n    // \n\n    return out_position;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."),(0,o.kt)("h4",{id:"pixel-shader-1"},"Pixel Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"column_major float4x4 camera_world_matrix : register(ps_3_0, c3);\nfloat3 ref_contour_color : register(ps_3_0, c6);\nfloat ref_contour_distance : register(ps_3_0, c8);\nfloat ref_contour_opacity : register(ps_3_0, c7);\ncolumn_major float4x4 world_matrix : register(ps_3_0, c0);\nfloat4 PixelMain() : COLOR\n{\n    float4 out_color;\n    float4 temp0;\n    float2 temp1;\n    // def c9, 1, 0, 0, 0\n    // mov r0.w, c0.w\n    temp0.w = (world_matrix._m00_m10_m20_m30).w;\n    // add r0.x, r0.w, -c3.w\n    temp0.x = temp0.w + -(camera_world_matrix._m00_m10_m20_m30).w;\n    // mov r0.w, c1.w\n    temp0.w = (world_matrix._m01_m11_m21_m31).w;\n    // add r0.y, r0.w, -c4.w\n    temp0.y = temp0.w + -(camera_world_matrix._m01_m11_m21_m31).w;\n    // mov r0.w, c2.w\n    temp0.w = (world_matrix._m02_m12_m22_m32).w;\n    // add r0.z, r0.w, -c5.w\n    temp0.z = temp0.w + -(camera_world_matrix._m02_m12_m22_m32).w;\n    // dp3 r0.x, r0, r0\n    temp0.x = dot(temp0.xyz, temp0.xyz);\n    // rsq r0.x, r0.x\n    temp0.x = 1 / sqrt(temp0.x);\n    // rcp r0.x, r0.x\n    temp0.x = 1.0f / temp0.x;\n    // add r0.x, -r0.x, c8.x\n    temp0.x = -temp0.x + ref_contour_distance.x;\n    // cmp r0.x, r0.x, c9.x, c9.y\n    temp0.x = (temp0.x >= 0) ? float1(1) : float1(0);\n    // mov r1.xy, c9\n    temp1.xy = float2(1, 0);\n    // cmp r0.y, -c8.x, r1.x, r1.y\n    temp0.y = (-ref_contour_distance.x >= 0) ? temp1.x : temp1.y;\n    // add r0.x, r0.y, r0.x\n    temp0.x = temp0.y + temp0.x;\n    // frc r0.y, -c7.x\n    temp0.y = frac(-ref_contour_opacity.x);\n    // add r0.y, r0.y, c7.x\n    temp0.y = temp0.y + ref_contour_opacity.x;\n    // mul_pp oC0.w, r0.x, r0.y\n    out_color.w = /* not implemented _pp modifier */ temp0.x * temp0.y;\n    // mov_pp oC0.xyz, c6\n    out_color.xyz = /* not implemented _pp modifier */ ref_contour_color.xyz;\n    // \n\n    return out_color;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."))}c.isMDXComponent=!0}}]);