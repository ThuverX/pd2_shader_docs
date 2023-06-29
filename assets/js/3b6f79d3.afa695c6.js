"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[27916],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>x});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=r.createContext({}),s=function(e){var a=r.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},m=function(e){var a=s(e.components);return r.createElement(p.Provider,{value:a},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=s(t),u=n,x=d["".concat(p,".").concat(u)]||d[u]||c[u]||l;return t?r.createElement(x,o(o({ref:a},m),{},{components:t})):r.createElement(x,o({ref:a},m))}));function x(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=u;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},31957:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=t(87462),n=(t(67294),t(3905));const l={id:0xa5498178621d4800,title:"Generic Shadow Caster Alpha Masked Cube Environment Mapping Diffuse Texture External Alpha Ref Gloss Blurs Cubemap Gsma Texture Normalmap Normalmap Depth Texture Normalmap Uv1 Parallax Parallax Animation Parallax Animation Vertex Alpha Mask Parallax Relief Simple Tint"},o="Generic Shadow Caster Alpha Masked Cube Environment Mapping Diffuse Texture External Alpha Ref Gloss Blurs Cubemap Gsma Texture Normalmap Normalmap Depth Texture Normalmap Uv1 Parallax Parallax Animation Parallax Animation Vertex Alpha Mask Parallax Relief Simple Tint",i={unversionedId:"Generated/Shaders/Base/[3100-3200]/11910193043600132000",id:"Generated/Shaders/Base/[3100-3200]/11910193043600132000",title:"Generic Shadow Caster Alpha Masked Cube Environment Mapping Diffuse Texture External Alpha Ref Gloss Blurs Cubemap Gsma Texture Normalmap Normalmap Depth Texture Normalmap Uv1 Parallax Parallax Animation Parallax Animation Vertex Alpha Mask Parallax Relief Simple Tint",description:"(genericALPHAMASKEDDIFFUSETEXTUREGLOSSBLURSCUBEMAPNORMALMAPNORMALMAPUV1PARALLAXANIMATIONPARALLAXRELIEF:SIMPLETINT, 0xa5498178621d4a66)",source:"@site/docs/Generated/Shaders/Base/[3100-3200]/0xa5498178621d4a66.mdx",sourceDirName:"Generated/Shaders/Base/[3100-3200]",slug:"/Generated/Shaders/Base/[3100-3200]/11910193043600132000",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[3100-3200]/11910193043600132000",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/docs/Generated/Shaders/Base/[3100-3200]/0xa5498178621d4a66.mdx",tags:[],version:"current",frontMatter:{id:"11910193043600132000",title:"Generic Shadow Caster Alpha Masked Cube Environment Mapping Diffuse Texture External Alpha Ref Gloss Blurs Cubemap Gsma Texture Normalmap Normalmap Depth Texture Normalmap Uv1 Parallax Parallax Animation Parallax Animation Vertex Alpha Mask Parallax Relief Simple Tint"},sidebar:"docsSidebar",previous:{title:"Opacity Default Cube Environment Mapping Diffuse Texture Nvidia",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[3100-3200]/11909517186502970000"},next:{title:"Generic Shadow Caster Diffuse Texture Normalmap Skinned 2weights",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[3100-3200]/11911530166826197000"}},p={},s=[{value:"Technique <code>ambient</code>",id:"technique-ambient",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],m={toc:s},d="wrapper";function c(e){let{components:a,...t}=e;return(0,n.kt)(d,(0,r.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"generic-shadow-caster-alpha-masked-cube-environment-mapping-diffuse-texture-external-alpha-ref-gloss-blurs-cubemap-gsma-texture-normalmap-normalmap-depth-texture-normalmap-uv1-parallax-parallax-animation-parallax-animation-vertex-alpha-mask-parallax-relief-simple-tint"},"Generic Shadow Caster Alpha Masked Cube Environment Mapping Diffuse Texture External Alpha Ref Gloss Blurs Cubemap Gsma Texture Normalmap Normalmap Depth Texture Normalmap Uv1 Parallax Parallax Animation Parallax Animation Vertex Alpha Mask Parallax Relief Simple Tint"),(0,n.kt)("p",null,"(",(0,n.kt)("inlineCode",{parentName:"p"},"generic:shadow_caster:ALPHA_MASKED:CUBE_ENVIRONMENT_MAPPING:DIFFUSE_TEXTURE:EXTERNAL_ALPHA_REF:GLOSS_BLURS_CUBEMAP:GSMA_TEXTURE:NORMALMAP:NORMALMAP_DEPTH_TEXTURE:NORMALMAP_UV1:PARALLAX:PARALLAX_ANIMATION:PARALLAX_ANIMATION_VERTEX_ALPHA_MASK:PARALLAX_RELIEF:SIMPLE_TINT"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"0xa5498178621d4a66"),")"),(0,n.kt)("h3",{id:"technique-ambient"},"Technique ",(0,n.kt)("inlineCode",{parentName:"h3"},"ambient")),(0,n.kt)("h3",{id:"render-states"},"Render States"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 1,\n    D3DRS_ALPHABLENDENABLE = 0,\n    D3DRS_CULLMODE = 2,\n    D3DRS_COLORWRITEENABLE = 15,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 961656599,\n    D3DRS_SLOPESCALEDEPTHBIAS = 1075838976,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n};\n")),(0,n.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,n.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 2,\n    D3DSAMP_MINFILTER = 2,\n    D3DSAMP_MIPFILTER = 2,\n};\n")),(0,n.kt)("h3",{id:"shaders"},"Shaders"),(0,n.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-hlsl"},"column_major float4x4 view_proj_matrix : register(vs_3_0, c0);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 texcoord : TEXCOORD;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float texcoord1 : TEXCOORD1;\n    float2 texcoord : TEXCOORD;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float temp0;\n    // dcl_position v0\n    // dcl_texcoord v1\n    // dcl_position o0\n    // dcl_texcoord1 o1.x\n    // dcl_texcoord o2.xy\n    // dp4 o0.x, v0, c0\n    o.position.x = dot(i.position, (view_proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, v0, c1\n    o.position.y = dot(i.position, (view_proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.w, v0, c3\n    o.position.w = dot(i.position, (view_proj_matrix._m03_m13_m23_m33));\n    // dp4 r0.x, v0, c2\n    temp0.x = dot(i.position, (view_proj_matrix._m02_m12_m22_m32));\n    // mov o0.z, r0.x\n    o.position.z = temp0.x;\n    // mov o1.x, r0.x\n    o.texcoord1 = temp0.x;\n    // mov o2.xy, v1\n    o.texcoord = i.texcoord;\n    // \n\n    return o;\n}\n")),(0,n.kt)("p",null,"Decompiled by DXDecompiler."),(0,n.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-hlsl"},"sampler2D diffuse_texture : register(ps_3_0, s0);\nfloat ref_alpha_ref : register(ps_3_0, c0);\nstruct PixelMain_Input\n{\n    float texcoord1 : TEXCOORD1;\n    float2 texcoord : TEXCOORD;\n};\n\nfloat4 PixelMain(PixelMain_Input i) : COLOR\n{\n    float4 out_color;\n    float4 temp0;\n    // def c1, 1, -1, 0, 0\n    // dcl_texcoord1 v0.x\n    // dcl_texcoord v1.xy\n    // dcl_2d s0\n    // texld_pp r0, v1, s0\n    temp0 = /* not implemented _pp modifier */ tex2D(diffuse_texture, i.texcoord.xy);\n    // add r0.x, r0.w, -c0.x\n    temp0.x = temp0.w + -ref_alpha_ref.x;\n    // cmp r0, r0.x, c1.x, c1.y\n    temp0 = (temp0.x >= 0) ? float4(1, 1, 1, 1) : float4(-1, -1, -1, -1);\n    // texkill r0\n    clip(temp0);\n    // mul oC0, c1.xzzz, v0.x\n    out_color = float4(1, 0, 0, 0) * i.texcoord1.x;\n    // \n\n    return out_color;\n}\n")),(0,n.kt)("p",null,"Decompiled by DXDecompiler."))}c.isMDXComponent=!0}}]);