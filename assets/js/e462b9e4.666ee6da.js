"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[59398],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>D});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",_={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=d(r),s=o,D=c["".concat(p,".").concat(s)]||c[s]||_[s]||a;return r?n.createElement(D,l(l({ref:t},m),{},{components:r})):n.createElement(D,l({ref:t},m))}));function D(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var d=2;d<a;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},74645:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>_,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=r(87462),o=(r(67294),r(3905));const a={id:0x31f4bb9b43a5c600,title:"Opacity Default Diffuse Texture Vertex Color"},l="Opacity Default Diffuse Texture Vertex Color",i={unversionedId:"Generated/Shaders/Base/[900-1000]/3599708277705131500",id:"Generated/Shaders/Base/[900-1000]/3599708277705131500",title:"Opacity Default Diffuse Texture Vertex Color",description:"(opacityDIFFUSETEXTURE:VERTEXCOLOR, 0x31f4bb9b43a5c6cd)",source:"@site/docs/Generated/Shaders/Base/[900-1000]/0x31f4bb9b43a5c6cd.mdx",sourceDirName:"Generated/Shaders/Base/[900-1000]",slug:"/Generated/Shaders/Base/[900-1000]/3599708277705131500",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[900-1000]/3599708277705131500",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/docs/Generated/Shaders/Base/[900-1000]/0x31f4bb9b43a5c6cd.mdx",tags:[],version:"current",frontMatter:{id:"3599708277705131500",title:"Opacity Default Diffuse Texture Vertex Color"},sidebar:"docsSidebar",previous:{title:"Generic Shadow Caster Ati Blue Mask Tint Cube Environment Mapping Diffuse Texture Rl Environment Vertex Color",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[900-1000]/3597001556969411600"},next:{title:"Generic Shadow Caster Alpha Masked Diffuse Texture External Alpha Ref Normalmap Opacity Texture Rl Cops Skinned 3weights",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[900-1000]/3602239315352775000"}},p={},d=[{value:"Technique <code>transparent</code>",id:"technique-transparent",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Sampler 1",id:"sampler-1",level:4},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],m={toc:d},c="wrapper";function _(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"opacity-default-diffuse-texture-vertex-color"},"Opacity Default Diffuse Texture Vertex Color"),(0,o.kt)("p",null,"(",(0,o.kt)("inlineCode",{parentName:"p"},"opacity:default:DIFFUSE_TEXTURE:VERTEX_COLOR"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"0x31f4bb9b43a5c6cd"),")"),(0,o.kt)("h3",{id:"technique-transparent"},"Technique ",(0,o.kt)("inlineCode",{parentName:"h3"},"transparent")),(0,o.kt)("h3",{id:"render-states"},"Render States"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 0,\n    D3DRS_ALPHABLENDENABLE = 1,\n    D3DRS_CULLMODE = 2,\n    D3DRS_COLORWRITEENABLE = 7,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 1,\n    D3DRS_STENCILFUNC = 6,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 5,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 4,\n    D3DRS_STENCILWRITEMASK = 5,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n    D3DRS_BLENDOP = 1,\n    D3DRS_DESTBLEND = 6,\n    D3DRS_SRCBLEND = 5,\n};\n")),(0,o.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,o.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h4",{id:"sampler-1"},"Sampler 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h3",{id:"shaders"},"Shaders"),(0,o.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"float camera_near_range : register(vs_3_0, c12);\ncolumn_major float4x4 proj_matrix : register(vs_3_0, c8);\ncolumn_major float4x4 view_matrix : register(vs_3_0, c4);\ncolumn_major float4x4 world_matrix : register(vs_3_0, c0);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 color : COLOR;\n    float4 normal : NORMAL;\n    float4 texcoord4 : TEXCOORD4;\n    float4 texcoord : TEXCOORD;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float4 color : COLOR;\n    float2 texcoord1 : TEXCOORD1;\n    float4 texcoord5 : TEXCOORD5;\n    float2 texcoord : TEXCOORD;\n    float3 texcoord2 : TEXCOORD2;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float4 temp0, temp1;\n    // def c13, 2, -1, 0, 0\n    // dcl_position v0\n    // dcl_color v1\n    // dcl_normal v2\n    // dcl_texcoord4 v3\n    // dcl_texcoord v4\n    // dcl_position o0\n    // dcl_color o1\n    // dcl_texcoord1 o2.xy\n    // dcl_texcoord5 o3\n    // dcl_texcoord o4.xy\n    // dcl_texcoord2 o5.xyz\n    // dp4 r0.w, v0, c3\n    temp0.w = dot(i.position, (world_matrix._m03_m13_m23_m33));\n    // dp4 r0.x, v0, c0\n    temp0.x = dot(i.position, (world_matrix._m00_m10_m20_m30));\n    // dp4 r0.y, v0, c1\n    temp0.y = dot(i.position, (world_matrix._m01_m11_m21_m31));\n    // dp4 r0.z, v0, c2\n    temp0.z = dot(i.position, (world_matrix._m02_m12_m22_m32));\n    // dp4 r1.x, r0, c4\n    temp1.x = dot(temp0, (view_matrix._m00_m10_m20_m30));\n    // dp4 r1.y, r0, c5\n    temp1.y = dot(temp0, (view_matrix._m01_m11_m21_m31));\n    // dp4 r1.z, r0, c6\n    temp1.z = dot(temp0, (view_matrix._m02_m12_m22_m32));\n    // dp4 r1.w, r0, c7\n    temp1.w = dot(temp0, (view_matrix._m03_m13_m23_m33));\n    // mov o3.xyz, r0\n    o.texcoord5.xyz = temp0.xyz;\n    // dp4 o0.x, r1, c8\n    o.position.x = dot(temp1, (proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, r1, c9\n    o.position.y = dot(temp1, (proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.w, r1, c11\n    o.position.w = dot(temp1, (proj_matrix._m03_m13_m23_m33));\n    // dp4 r0.x, r1, c10\n    temp0.x = dot(temp1, (proj_matrix._m02_m12_m22_m32));\n    // mad r0.yzw, v2.xxyz, c13.x, c13.y\n    temp0.yzw = i.normal.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 o5.x, r0.yzww, c0\n    o.texcoord2.x = dot(temp0.yzw, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 o5.y, r0.yzww, c1\n    o.texcoord2.y = dot(temp0.yzw, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o5.z, r0.yzww, c2\n    o.texcoord2.z = dot(temp0.yzw, (world_matrix._m02_m12_m22_m32).xyz);\n    // add o3.w, r0.x, c12.x\n    o.texcoord5.w = temp0.x + camera_near_range.x;\n    // mov o0.z, r0.x\n    o.position.z = temp0.x;\n    // mov o1, v1\n    o.color = i.color;\n    // mov o2.xy, v3\n    o.texcoord1 = i.texcoord4;\n    // mov o4.xy, v4\n    o.texcoord = i.texcoord;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."),(0,o.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"sampler2D diffuse_texture : register(ps_3_0, s1);\nsampler2D opacity_texture : register(ps_3_0, s0);\nstruct PixelMain_Input\n{\n    float3 color : COLOR;\n    float2 texcoord : TEXCOORD;\n};\n\nfloat4 PixelMain(PixelMain_Input i) : COLOR\n{\n    float4 out_color;\n    float4 temp0;\n    // dcl_color v0.xyz\n    // dcl_texcoord v1.xy\n    // dcl_2d s0\n    // dcl_2d s1\n    // texld_pp r0, v1, s1\n    temp0 = /* not implemented _pp modifier */ tex2D(diffuse_texture, i.texcoord.xy);\n    // mul_pp oC0.xyz, r0, v0\n    out_color.xyz = /* not implemented _pp modifier */ temp0.xyz * i.color.xyz;\n    // texld_pp r0, v1, s0\n    temp0 = /* not implemented _pp modifier */ tex2D(opacity_texture, i.texcoord.xy);\n    // mov_pp oC0.w, r0.x\n    out_color.w = /* not implemented _pp modifier */ temp0.x;\n    // \n\n    return out_color;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."))}_.isMDXComponent=!0}}]);