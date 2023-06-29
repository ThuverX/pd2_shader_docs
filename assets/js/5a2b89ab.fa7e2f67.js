"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[99459],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>x});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},i="mdxType",_={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),i=c(n),s=o,x=i["".concat(p,".").concat(s)]||i[s]||_[s]||a;return n?r.createElement(x,d(d({ref:t},l),{},{components:n})):r.createElement(x,d({ref:t},l))}));function x(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,d=new Array(a);d[0]=s;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m[i]="string"==typeof e?e:o,d[1]=m;for(var c=2;c<a;c++)d[c]=n[c];return r.createElement.apply(null,d)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},34536:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>_,frontMatter:()=>a,metadata:()=>m,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={id:0xc073660ce25d4800,title:"Opacity Default Instanced"},d="Opacity Default Instanced",m={unversionedId:"Generated/Shaders/Base/[3600-3700]/13867539883127294000",id:"Generated/Shaders/Base/[3600-3700]/13867539883127294000",title:"Opacity Default Instanced",description:"(opacityINSTANCED, 0xc073660ce25d4524)",source:"@site/docs/Generated/Shaders/Base/[3600-3700]/0xc073660ce25d4524.mdx",sourceDirName:"Generated/Shaders/Base/[3600-3700]",slug:"/Generated/Shaders/Base/[3600-3700]/13867539883127294000",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[3600-3700]/13867539883127294000",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/docs/Generated/Shaders/Base/[3600-3700]/0xc073660ce25d4524.mdx",tags:[],version:"current",frontMatter:{id:"13867539883127294000",title:"Opacity Default Instanced"},sidebar:"docsSidebar",previous:{title:"Generic Shadow Caster Diffuse Texture Double Sided",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[3600-3700]/13856315312788148000"},next:{title:"Generic Shadow Caster Cube Environment Mapping Diffuse Texture Gloss Blurs Cubemap Gloss Control Value Instanced Normalmap Nvidia Vertex Color",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[3600-3700]/13869612810892511000"}},p={},c=[{value:"Technique <code>transparent</code>",id:"technique-transparent",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],l={toc:c},i="wrapper";function _(e){let{components:t,...n}=e;return(0,o.kt)(i,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"opacity-default-instanced"},"Opacity Default Instanced"),(0,o.kt)("p",null,"(",(0,o.kt)("inlineCode",{parentName:"p"},"opacity:default:INSTANCED"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"0xc073660ce25d4524"),")"),(0,o.kt)("h3",{id:"technique-transparent"},"Technique ",(0,o.kt)("inlineCode",{parentName:"h3"},"transparent")),(0,o.kt)("h3",{id:"render-states"},"Render States"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 0,\n    D3DRS_ALPHABLENDENABLE = 1,\n    D3DRS_CULLMODE = 2,\n    D3DRS_COLORWRITEENABLE = 7,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 1,\n    D3DRS_STENCILFUNC = 6,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 5,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 4,\n    D3DRS_STENCILWRITEMASK = 5,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n    D3DRS_BLENDOP = 1,\n    D3DRS_DESTBLEND = 6,\n    D3DRS_SRCBLEND = 5,\n};\n")),(0,o.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,o.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h3",{id:"shaders"},"Shaders"),(0,o.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"float camera_near_range : register(vs_3_0, c208);\ncolumn_major float4x4 proj_matrix : register(vs_3_0, c204);\ncolumn_major float4x4 ref_world_tm[50] : register(vs_3_0, c0);\ncolumn_major float4x4 view_matrix : register(vs_3_0, c200);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 position1 : POSITION1;\n    float4 normal : NORMAL;\n    float4 texcoord4 : TEXCOORD4;\n    float4 texcoord : TEXCOORD;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float2 texcoord1 : TEXCOORD1;\n    float4 texcoord5 : TEXCOORD5;\n    float2 texcoord : TEXCOORD;\n    float3 texcoord2 : TEXCOORD2;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float4 temp0, temp1;\n    float addr0;\n    // def c209, 2, -1, 4, -0\n    // dcl_position v0\n    // dcl_position1 v1\n    // dcl_normal v2\n    // dcl_texcoord4 v3\n    // dcl_texcoord v4\n    // dcl_position o0\n    // dcl_texcoord1 o1.xy\n    // dcl_texcoord5 o2\n    // dcl_texcoord o3.xy\n    // dcl_texcoord2 o4.xyz\n    // frc r0.x, v1.x\n    temp0.x = frac(i.position1.x);\n    // add r0.x, -r0.x, v1.x\n    temp0.x = -temp0.x + i.position1.x;\n    // mul r0.x, r0.x, c209.z\n    temp0.x = temp0.x * float1(4);\n    // mova a0.x, r0.x\n    addr0.x = temp0.x;\n    // mad r0, v0.xyzx, -c209.yyyw, -c209.wwwy\n    temp0 = i.position.xyzx * float4(1, 1, 1, 0) + float4(0, 0, 0, 1);\n    // dp4 r1.w, r0, c3[a0.x]\n    temp1.w = dot(temp0, (ref_world_tm[0 + (addr0.x / 4)]._m03_m13_m23_m33));\n    // dp4 r1.x, r0, c0[a0.x]\n    temp1.x = dot(temp0, (ref_world_tm[0 + (addr0.x / 4)]._m00_m10_m20_m30));\n    // dp4 r1.y, r0, c1[a0.x]\n    temp1.y = dot(temp0, (ref_world_tm[0 + (addr0.x / 4)]._m01_m11_m21_m31));\n    // dp4 r1.z, r0, c2[a0.x]\n    temp1.z = dot(temp0, (ref_world_tm[0 + (addr0.x / 4)]._m02_m12_m22_m32));\n    // dp4 r0.x, r1, c200\n    temp0.x = dot(temp1, (view_matrix._m00_m10_m20_m30));\n    // dp4 r0.y, r1, c201\n    temp0.y = dot(temp1, (view_matrix._m01_m11_m21_m31));\n    // dp4 r0.z, r1, c202\n    temp0.z = dot(temp1, (view_matrix._m02_m12_m22_m32));\n    // dp4 r0.w, r1, c203\n    temp0.w = dot(temp1, (view_matrix._m03_m13_m23_m33));\n    // mov o2.xyz, r1\n    o.texcoord5.xyz = temp1.xyz;\n    // dp4 o0.x, r0, c204\n    o.position.x = dot(temp0, (proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, r0, c205\n    o.position.y = dot(temp0, (proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.w, r0, c207\n    o.position.w = dot(temp0, (proj_matrix._m03_m13_m23_m33));\n    // dp4 r0.x, r0, c206\n    temp0.x = dot(temp0, (proj_matrix._m02_m12_m22_m32));\n    // mad r0.yzw, v2.xxyz, c209.x, c209.y\n    temp0.yzw = i.normal.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 o4.x, r0.yzww, c0[a0.x]\n    o.texcoord2.x = dot(temp0.yzw, (ref_world_tm[0 + (addr0.x / 4)]._m00_m10_m20_m30).xyz);\n    // dp3 o4.y, r0.yzww, c1[a0.x]\n    o.texcoord2.y = dot(temp0.yzw, (ref_world_tm[0 + (addr0.x / 4)]._m01_m11_m21_m31).xyz);\n    // dp3 o4.z, r0.yzww, c2[a0.x]\n    o.texcoord2.z = dot(temp0.yzw, (ref_world_tm[0 + (addr0.x / 4)]._m02_m12_m22_m32).xyz);\n    // add o2.w, r0.x, c208.x\n    o.texcoord5.w = temp0.x + camera_near_range.x;\n    // mov o0.z, r0.x\n    o.position.z = temp0.x;\n    // mov o1.xy, v3\n    o.texcoord1 = i.texcoord4;\n    // mov o3.xy, v4\n    o.texcoord = i.texcoord;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."),(0,o.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"sampler2D opacity_texture : register(ps_3_0, s0);\nfloat4 PixelMain(float2 texcoord : TEXCOORD) : COLOR\n{\n    float4 out_color;\n    float4 temp0;\n    // def c0, 0, 1, 0, 0\n    // dcl_texcoord v0.xy\n    // dcl_2d s0\n    // texld_pp r0, v0, s0\n    temp0 = /* not implemented _pp modifier */ tex2D(opacity_texture, texcoord.xy);\n    // mad_pp oC0, r0.x, c0.xxxy, c0.yyyx\n    out_color = /* not implemented _pp modifier */ temp0.x * float4(0, 0, 0, 1) + float4(1, 1, 1, 0);\n    // \n\n    return out_color;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."))}_.isMDXComponent=!0}}]);