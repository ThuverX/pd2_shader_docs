"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[54879],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>D});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},_=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(r),_=a,D=m["".concat(p,".").concat(_)]||m[_]||c[_]||o;return r?n.createElement(D,i(i({ref:t},s),{},{components:r})):n.createElement(D,i({ref:t},s))}));function D(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=_;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}_.displayName="MDXCreateElement"},41147:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const o={id:0x407d1bf7bf3e2400,title:"Decal Default Diffuse Texture Opacity Texture"},i="Decal Default Diffuse Texture Opacity Texture",l={unversionedId:"Generated/Shaders/Base/[1200-1300]/4646901141395613000",id:"Generated/Shaders/Base/[1200-1300]/4646901141395613000",title:"Decal Default Diffuse Texture Opacity Texture",description:"(decalDIFFUSETEXTURE:OPACITYTEXTURE, 0x407d1bf7bf3e225e)",source:"@site/docs/Generated/Shaders/Base/[1200-1300]/0x407d1bf7bf3e225e.mdx",sourceDirName:"Generated/Shaders/Base/[1200-1300]",slug:"/Generated/Shaders/Base/[1200-1300]/4646901141395613000",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[1200-1300]/4646901141395613000",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/docs/Generated/Shaders/Base/[1200-1300]/0x407d1bf7bf3e225e.mdx",tags:[],version:"current",frontMatter:{id:"4646901141395613000",title:"Decal Default Diffuse Texture Opacity Texture"},sidebar:"docsSidebar",previous:{title:"Generic Shadow Caster Blend Diffuse Cube Environment Mapping Diffuse Texture Gsma Texture Normalmap Vertex Color",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[1200-1300]/4637071106303755000"},next:{title:"Generic Shadow Caster Diffuse Texture Gsma Texture Normalmap Nvidia Self Illumination Self Illumination Bloom",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[1200-1300]/4653205091247184000"}},p={},d=[{value:"Technique <code>deferred_semi_transparent_albedo</code>",id:"technique-deferred_semi_transparent_albedo",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Sampler 1",id:"sampler-1",level:4},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],s={toc:d},m="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"decal-default-diffuse-texture-opacity-texture"},"Decal Default Diffuse Texture Opacity Texture"),(0,a.kt)("p",null,"(",(0,a.kt)("inlineCode",{parentName:"p"},"decal:default:DIFFUSE_TEXTURE:OPACITY_TEXTURE"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"0x407d1bf7bf3e225e"),")"),(0,a.kt)("h3",{id:"technique-deferred_semi_transparent_albedo"},"Technique ",(0,a.kt)("inlineCode",{parentName:"h3"},"deferred_semi_transparent_albedo")),(0,a.kt)("h3",{id:"render-states"},"Render States"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 0,\n    D3DRS_ALPHABLENDENABLE = 1,\n    D3DRS_CULLMODE = 2,\n    D3DRS_COLORWRITEENABLE = 7,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n    D3DRS_BLENDOP = 1,\n    D3DRS_DESTBLEND = 6,\n    D3DRS_SRCBLEND = 5,\n};\n")),(0,a.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,a.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,a.kt)("h4",{id:"sampler-1"},"Sampler 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,a.kt)("h3",{id:"shaders"},"Shaders"),(0,a.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hlsl"},"column_major float4x4 proj_matrix : register(vs_3_0, c4);\ncolumn_major float4x4 world_view_matrix : register(vs_3_0, c0);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 texcoord : TEXCOORD;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float2 texcoord : TEXCOORD;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float4 temp0;\n    // def c8, 0.0004, 9.995, 0.005, 0\n    // dcl_position v0\n    // dcl_texcoord v1\n    // dcl_position o0\n    // dcl_texcoord o1.xy\n    // dp4 r0.x, v0, c2\n    temp0.x = dot(i.position, (world_view_matrix._m02_m12_m22_m32));\n    // mul_sat r0.y, r0.x, c8.x\n    temp0.y = saturate(temp0.x * float1(0.0004));\n    // mad r0.y, r0.y, c8.y, c8.z\n    temp0.y = temp0.y * float1(9.995) + float1(0.005);\n    // add r0.z, -r0.y, r0.x\n    temp0.z = -temp0.y + temp0.x;\n    // dp4 r0.x, v0, c0\n    temp0.x = dot(i.position, (world_view_matrix._m00_m10_m20_m30));\n    // dp4 r0.y, v0, c1\n    temp0.y = dot(i.position, (world_view_matrix._m01_m11_m21_m31));\n    // dp4 r0.w, v0, c3\n    temp0.w = dot(i.position, (world_view_matrix._m03_m13_m23_m33));\n    // dp4 o0.x, r0, c4\n    o.position.x = dot(temp0, (proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, r0, c5\n    o.position.y = dot(temp0, (proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.z, r0, c6\n    o.position.z = dot(temp0, (proj_matrix._m02_m12_m22_m32));\n    // dp4 o0.w, r0, c7\n    o.position.w = dot(temp0, (proj_matrix._m03_m13_m23_m33));\n    // mov o1.xy, v1\n    o.texcoord = i.texcoord;\n    // \n\n    return o;\n}\n")),(0,a.kt)("p",null,"Decompiled by DXDecompiler."),(0,a.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hlsl"},"sampler2D diffuse_texture : register(ps_3_0, s0);\nsampler2D opacity_texture : register(ps_3_0, s1);\nfloat4 PixelMain(float2 texcoord : TEXCOORD) : COLOR\n{\n    float4 out_color;\n    float4 temp0;\n    // dcl_texcoord v0.xy\n    // dcl_2d s0\n    // dcl_2d s1\n    // texld_pp r0, v0, s0\n    temp0 = /* not implemented _pp modifier */ tex2D(diffuse_texture, texcoord.xy);\n    // mov_pp oC0.xyz, r0\n    out_color.xyz = /* not implemented _pp modifier */ temp0.xyz;\n    // texld_pp r0, v0, s1\n    temp0 = /* not implemented _pp modifier */ tex2D(opacity_texture, texcoord.xy);\n    // mov_pp oC0.w, r0.x\n    out_color.w = /* not implemented _pp modifier */ temp0.x;\n    // \n\n    return out_color;\n}\n")),(0,a.kt)("p",null,"Decompiled by DXDecompiler."))}c.isMDXComponent=!0}}]);