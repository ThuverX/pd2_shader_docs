"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[2408],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>x});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),d=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},_=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(r),_=o,x=c["".concat(i,".").concat(_)]||c[_]||m[_]||a;return r?n.createElement(x,p(p({ref:t},s),{},{components:r})):n.createElement(x,p({ref:t},s))}));function x(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=_;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:o,p[1]=l;for(var d=2;d<a;d++)p[d]=r[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}_.displayName="MDXCreateElement"},8461:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=r(7462),o=(r(7294),r(3905));const a={id:0xb4299be28a255800,title:"Sepia Levels Default"},p="Sepia Levels Default",l={unversionedId:"Generated/Shaders/Filters/12982078798154783000",id:"Generated/Shaders/Filters/12982078798154783000",title:"Sepia Levels Default",description:"(sepia_levels:default, 0xb4299be28a255477)",source:"@site/docs/Generated/Shaders/Filters/0xb4299be28a255477.mdx",sourceDirName:"Generated/Shaders/Filters",slug:"/Generated/Shaders/Filters/12982078798154783000",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Filters/12982078798154783000",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/Generated/Shaders/Filters/0xb4299be28a255477.mdx",tags:[],version:"current",frontMatter:{id:"12982078798154783000",title:"Sepia Levels Default"},sidebar:"docsSidebar",previous:{title:"4 Tap Filter Default",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Filters/12710178955994563000"},next:{title:"4 Tap Filter R Default",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Filters/13388089457263204000"}},i={},d=[{value:"Technique <code>ambient</code>",id:"technique-ambient",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],s={toc:d},c="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sepia-levels-default"},"Sepia Levels Default"),(0,o.kt)("p",null,"(",(0,o.kt)("inlineCode",{parentName:"p"},"sepia_levels:default"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"0xb4299be28a255477"),")"),(0,o.kt)("p",null,"This template is referenced 1 time by ",(0,o.kt)("a",{parentName:"p",href:"/docs/Generated/Render%20Templates/filters.render_template_database#sepia-levels"},"sepia_levels"),"."),(0,o.kt)("h3",{id:"technique-ambient"},"Technique ",(0,o.kt)("inlineCode",{parentName:"h3"},"ambient")),(0,o.kt)("h3",{id:"render-states"},"Render States"),(0,o.kt)("p",null,"More info can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3drenderstatetype"},"Direct3D Docs")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 0,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 0,\n    D3DRS_ALPHABLENDENABLE = 0,\n    D3DRS_CULLMODE = 1,\n    D3DRS_COLORWRITEENABLE = 15,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n};\n")),(0,o.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,o.kt)("p",null,"More info can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3dsamplerstatetype"},"Direct3D Docs")),(0,o.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 3,\n    D3DSAMP_ADDRESSV = 3,\n    D3DSAMP_MAGFILTER = 1,\n    D3DSAMP_MINFILTER = 1,\n    D3DSAMP_MIPFILTER = 1,\n};\n")),(0,o.kt)("h3",{id:"shaders"},"Shaders"),(0,o.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"float3 ref_levels_b : register(vs_3_0, c6);\nfloat3 ref_levels_g : register(vs_3_0, c5);\nfloat3 ref_levels_r : register(vs_3_0, c4);\ncolumn_major float4x4 view_proj_matrix : register(vs_3_0, c0);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 texcoord : TEXCOORD;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float2 texcoord : TEXCOORD;\n    float3 texcoord1 : TEXCOORD1;\n    float3 texcoord2 : TEXCOORD2;\n    float3 texcoord3 : TEXCOORD3;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float3 temp0, temp1, temp2;\n    // dcl_position v0\n    // dcl_texcoord v1\n    // dcl_position o0\n    // dcl_texcoord o1.xy\n    // dcl_texcoord1 o2.xyz\n    // dcl_texcoord2 o3.xyz\n    // dcl_texcoord3 o4.xyz\n    // dp4 o0.x, v0, c0\n    o.position.x = dot(i.position, (view_proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, v0, c1\n    o.position.y = dot(i.position, (view_proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.z, v0, c2\n    o.position.z = dot(i.position, (view_proj_matrix._m02_m12_m22_m32));\n    // dp4 o0.w, v0, c3\n    o.position.w = dot(i.position, (view_proj_matrix._m03_m13_m23_m33));\n    // mov r0.x, c4.x\n    temp0.x = ref_levels_r.x;\n    // mov r0.y, c5.x\n    temp0.y = ref_levels_g.x;\n    // mov r0.z, c6.x\n    temp0.z = ref_levels_b.x;\n    // mov r1.x, c4.y\n    temp1.x = ref_levels_r.y;\n    // mov r1.y, c5.y\n    temp1.y = ref_levels_g.y;\n    // mov r1.z, c6.y\n    temp1.z = ref_levels_b.y;\n    // add r2.xyz, -r0, r1\n    temp2.xyz = -temp0.xyz + temp1.xyz;\n    // mov o2.xyz, r0\n    o.texcoord1 = temp0;\n    // mov o3.xyz, r1\n    o.texcoord2 = temp1;\n    // rcp o4.x, r2.x\n    o.texcoord3.x = 1.0f / temp2.x;\n    // rcp o4.y, r2.y\n    o.texcoord3.y = 1.0f / temp2.y;\n    // rcp o4.z, r2.z\n    o.texcoord3.z = 1.0f / temp2.z;\n    // mov o1.xy, v1\n    o.texcoord = i.texcoord;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."),(0,o.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"float ref_opacity : register(ps_3_0, c0);\nfloat3 ref_sepia_b : register(ps_3_0, c3);\nfloat3 ref_sepia_g : register(ps_3_0, c2);\nfloat3 ref_sepia_r : register(ps_3_0, c1);\nsampler2D ref_src_texture : register(ps_3_0, s0);\nstruct PixelMain_Input\n{\n    float2 texcoord : TEXCOORD;\n    float3 texcoord1 : TEXCOORD1;\n    float3 texcoord2 : TEXCOORD2;\n    float3 texcoord3 : TEXCOORD3;\n};\n\nfloat4 PixelMain(PixelMain_Input i) : COLOR\n{\n    float4 out_color;\n    float4 temp0;\n    float3 temp1, temp2;\n    // dcl_texcoord v0.xy\n    // dcl_texcoord1 v1.xyz\n    // dcl_texcoord2 v2.xyz\n    // dcl_texcoord3 v3.xyz\n    // dcl_2d s0\n    // texld_pp r0, v0, s0\n    temp0 = /* not implemented _pp modifier */ tex2D(ref_src_texture, i.texcoord.xy);\n    // dp3_pp r1.x, c1, r0\n    temp1.x = /* not implemented _pp modifier */ dot(ref_sepia_r.xyz, temp0.xyz);\n    // dp3_pp r1.y, c2, r0\n    temp1.y = /* not implemented _pp modifier */ dot(ref_sepia_g.xyz, temp0.xyz);\n    // dp3_pp r1.z, c3, r0\n    temp1.z = /* not implemented _pp modifier */ dot(ref_sepia_b.xyz, temp0.xyz);\n    // lrp r2.xyz, c0.x, r1, r0\n    temp2.xyz = lerp(temp0.xyz, temp1.xyz, ref_opacity.xxx);\n    // mov_pp oC0.w, r0.w\n    out_color.w = /* not implemented _pp modifier */ temp0.w;\n    // max r0.xyz, r2, v1\n    temp0.xyz = max(temp2.xyz, i.texcoord1.xyz);\n    // min r1.xyz, v2, r0\n    temp1.xyz = min(i.texcoord2.xyz, temp0.xyz);\n    // add r0.xyz, r1, -v1\n    temp0.xyz = temp1.xyz + -i.texcoord1.xyz;\n    // mul_pp oC0.xyz, r0, v3\n    out_color.xyz = /* not implemented _pp modifier */ temp0.xyz * i.texcoord3.xyz;\n    // \n\n    return out_color;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."))}m.isMDXComponent=!0}}]);