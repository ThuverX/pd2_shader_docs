"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[15238],{603905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>x});var r=t(667294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),m=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=m(e.components);return r.createElement(d.Provider,{value:n},e.children)},c="mdxType",_={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=m(t),s=o,x=c["".concat(d,".").concat(s)]||c[s]||_[s]||a;return t?r.createElement(x,l(l({ref:n},p),{},{components:t})):r.createElement(x,l({ref:n},p))}));function x(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=s;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var m=2;m<a;m++)l[m]=t[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},95662:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>_,frontMatter:()=>a,metadata:()=>i,toc:()=>m});var r=t(487462),o=(t(667294),t(603905));const a={id:0x18349b941fe1d500,title:"Generic Default Instanced Self Illumination Vertex Color"},l="Generic Default Instanced Self Illumination Vertex Color",i={unversionedId:"Generated/Shaders/Base/[400-500]/1744190016191583500",id:"Generated/Shaders/Base/[400-500]/1744190016191583500",title:"Generic Default Instanced Self Illumination Vertex Color",description:"(genericINSTANCEDVERTEXCOLOR, 0x18349b941fe1d500)",source:"@site/docs/Generated/Shaders/Base/[400-500]/0x18349b941fe1d500.mdx",sourceDirName:"Generated/Shaders/Base/[400-500]",slug:"/Generated/Shaders/Base/[400-500]/1744190016191583500",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[400-500]/1744190016191583500",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/Generated/Shaders/Base/[400-500]/0x18349b941fe1d500.mdx",tags:[],version:"current",frontMatter:{id:"1744190016191583500",title:"Generic Default Instanced Self Illumination Vertex Color"},sidebar:"docsSidebar",previous:{title:"Generic Shadow Caster Alpha Masked Diffuse Texture External Alpha Ref Normalmap Rl Environment Simple Tint",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[400-500]/1734623572333382000"},next:{title:"Generic Shadow Caster Alpha Masked Diffuse Texture External Alpha Ref Normalmap Nvidia Opacity Texture Self Illumination Self Illumination Bloom",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[400-500]/1746907304824183800"}},d={},m=[{value:"Technique <code>deferred_ambient</code>",id:"technique-deferred_ambient",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4},{value:"Technique <code>self_illumination</code>",id:"technique-self_illumination",level:3},{value:"Render States",id:"render-states-1",level:3},{value:"Sampler States",id:"sampler-states-1",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Shaders",id:"shaders-1",level:3},{value:"Vertex Shader",id:"vertex-shader-1",level:4},{value:"Pixel Shader",id:"pixel-shader-1",level:4}],p={toc:m},c="wrapper";function _(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"generic-default-instanced-self-illumination-vertex-color"},"Generic Default Instanced Self Illumination Vertex Color"),(0,o.kt)("p",null,"(",(0,o.kt)("inlineCode",{parentName:"p"},"generic:default:INSTANCED:SELF_ILLUMINATION:VERTEX_COLOR"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"0x18349b941fe1d500"),")"),(0,o.kt)("p",null,"This template is referenced 1 time by ",(0,o.kt)("a",{parentName:"p",href:"/docs/Generated/Render%20Templates/base.render_template_database#generic-instanced-self-illumination-vertex-color"},"generic:INSTANCED:SELF_ILLUMINATION:VERTEX_COLOR"),".\nThis template uses the following inputs:\n|Name|UI Name|Type|\n|---|---|---|\n|self_illumination_texture|Self Illumination Texture (UV4)|texture|\n|il_multiplier|Self Illumination Intensity Multiplier|scalar|."),(0,o.kt)("h3",{id:"technique-deferred_ambient"},"Technique ",(0,o.kt)("inlineCode",{parentName:"h3"},"deferred_ambient")),(0,o.kt)("h3",{id:"render-states"},"Render States"),(0,o.kt)("p",null,"More info can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3drenderstatetype"},"Direct3D Docs")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 1,\n    D3DRS_ALPHABLENDENABLE = 0,\n    D3DRS_CULLMODE = 2,\n    D3DRS_COLORWRITEENABLE = 15,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n};\n")),(0,o.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,o.kt)("p",null,"More info can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3dsamplerstatetype"},"Direct3D Docs")),(0,o.kt)("h3",{id:"shaders"},"Shaders"),(0,o.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"float camera_near_range : register(vs_3_0, c204);\ncolumn_major float4x4 ref_world_tm[50] : register(vs_3_0, c0);\ncolumn_major float4x4 view_proj_matrix : register(vs_3_0, c200);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 normal : NORMAL;\n    float4 position1 : POSITION1;\n    float4 color : COLOR;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float texcoord1 : TEXCOORD1;\n    float3 texcoord2 : TEXCOORD2;\n    float4 color : COLOR;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float4 temp0, temp1;\n    float addr0;\n    // def c205, 2, -1, 4, -0\n    // dcl_position v0\n    // dcl_normal v1\n    // dcl_position1 v2\n    // dcl_color v3\n    // dcl_position o0\n    // dcl_texcoord1 o1.x\n    // dcl_texcoord2 o2.xyz\n    // dcl_color o3\n    // frc r0.x, v2.x\n    temp0.x = frac(i.position1.x);\n    // add r0.x, -r0.x, v2.x\n    temp0.x = -temp0.x + i.position1.x;\n    // mul r0.x, r0.x, c205.z\n    temp0.x = temp0.x * float1(4);\n    // mova a0.x, r0.x\n    addr0.x = temp0.x;\n    // mad r0, v0.xyzx, -c205.yyyw, -c205.wwwy\n    temp0 = i.position.xyzx * float4(1, 1, 1, 0) + float4(0, 0, 0, 1);\n    // dp4 r1.x, r0, c0[a0.x]\n    temp1.x = dot(temp0, (ref_world_tm[0 + (addr0.x / 4)]._m00_m10_m20_m30));\n    // dp4 r1.y, r0, c1[a0.x]\n    temp1.y = dot(temp0, (ref_world_tm[0 + (addr0.x / 4)]._m01_m11_m21_m31));\n    // dp4 r1.z, r0, c2[a0.x]\n    temp1.z = dot(temp0, (ref_world_tm[0 + (addr0.x / 4)]._m02_m12_m22_m32));\n    // dp4 r1.w, r0, c3[a0.x]\n    temp1.w = dot(temp0, (ref_world_tm[0 + (addr0.x / 4)]._m03_m13_m23_m33));\n    // dp4 o0.x, r1, c200\n    o.position.x = dot(temp1, (view_proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, r1, c201\n    o.position.y = dot(temp1, (view_proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.w, r1, c203\n    o.position.w = dot(temp1, (view_proj_matrix._m03_m13_m23_m33));\n    // dp4 r0.x, r1, c202\n    temp0.x = dot(temp1, (view_proj_matrix._m02_m12_m22_m32));\n    // add o1.x, r0.x, c204.x\n    o.texcoord1 = temp0.x + camera_near_range.x;\n    // mov o0.z, r0.x\n    o.position.z = temp0.x;\n    // mad r0.xyz, v1, c205.x, c205.y\n    temp0.xyz = i.normal.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 o2.x, r0, c0[a0.x]\n    o.texcoord2.x = dot(temp0.xyz, (ref_world_tm[0 + (addr0.x / 4)]._m00_m10_m20_m30).xyz);\n    // dp3 o2.y, r0, c1[a0.x]\n    o.texcoord2.y = dot(temp0.xyz, (ref_world_tm[0 + (addr0.x / 4)]._m01_m11_m21_m31).xyz);\n    // dp3 o2.z, r0, c2[a0.x]\n    o.texcoord2.z = dot(temp0.xyz, (ref_world_tm[0 + (addr0.x / 4)]._m02_m12_m22_m32).xyz);\n    // mul o3, c205_abs.xxxy, v3\n    o.color = float4(2, 2, 2, 1) * i.color;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."),(0,o.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"struct PixelMain_Input\n{\n    float texcoord1 : TEXCOORD1;\n    float3 texcoord2 : TEXCOORD2;\n    float3 color : COLOR;\n};\n\nstruct PixelMain_Output\n{\n    float4 color1 : COLOR1;\n    float4 color : COLOR;\n    float4 color2 : COLOR2;\n};\n\nPixelMain_Output PixelMain(PixelMain_Input i)\n{\n    PixelMain_Output o;\n    float3 temp0;\n    // def c0, 0.5, 1, 0, 0.4\n    // dcl_texcoord1 v0.x\n    // dcl_texcoord2_pp v1.xyz\n    // dcl_color v2.xyz\n    // nrm_pp r0.xyz, v1\n    temp0.xyz = /* not implemented _pp modifier */ normalize(i.texcoord2.xyz).xyz;\n    // mad_pp oC1.xyz, r0, c0.x, c0.x\n    o.color1.xyz = /* not implemented _pp modifier */ temp0.xyz * float3(0.5, 0.5, 0.5) + float3(0.5, 0.5, 0.5);\n    // mad oC0, v2.xyzx, c0.yyyz, c0.zzzw\n    o.color = i.color.xyzx * float4(1, 1, 1, 0) + float4(0, 0, 0, 0.4);\n    // mov_pp oC1.w, c0.y\n    o.color1.w = /* not implemented _pp modifier */ float1(1);\n    // mov oC2, v0.x\n    o.color2 = i.texcoord1.x;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."),(0,o.kt)("h3",{id:"technique-self_illumination"},"Technique ",(0,o.kt)("inlineCode",{parentName:"h3"},"self_illumination")),(0,o.kt)("h3",{id:"render-states-1"},"Render States"),(0,o.kt)("p",null,"More info can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3drenderstatetype"},"Direct3D Docs")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 3,\n    D3DRS_ZWRITEENABLE = 1,\n    D3DRS_ALPHABLENDENABLE = 1,\n    D3DRS_CULLMODE = 2,\n    D3DRS_COLORWRITEENABLE = 15,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n    D3DRS_BLENDOP = 1,\n    D3DRS_SRCBLEND = 2,\n    D3DRS_DESTBLEND = 2,\n};\n")),(0,o.kt)("h3",{id:"sampler-states-1"},"Sampler States"),(0,o.kt)("p",null,"More info can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3dsamplerstatetype"},"Direct3D Docs")),(0,o.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h3",{id:"shaders-1"},"Shaders"),(0,o.kt)("h4",{id:"vertex-shader-1"},"Vertex Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"column_major float4x4 ref_world_tm[50] : register(vs_3_0, c0);\ncolumn_major float4x4 view_proj_matrix : register(vs_3_0, c200);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 color : COLOR;\n    float4 position1 : POSITION1;\n    float4 texcoord : TEXCOORD;\n    float4 texcoord3 : TEXCOORD3;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float4 color : COLOR;\n    float2 texcoord : TEXCOORD;\n    float2 texcoord6 : TEXCOORD6;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float4 temp0, temp1;\n    float addr0;\n    // def c204, 4, 1, 0, 0\n    // dcl_position v0\n    // dcl_color v1\n    // dcl_position1 v2\n    // dcl_texcoord v3\n    // dcl_texcoord3 v4\n    // dcl_position o0\n    // dcl_color o1\n    // dcl_texcoord o2.xy\n    // dcl_texcoord6 o3.xy\n    // frc r0.x, v2.x\n    temp0.x = frac(i.position1.x);\n    // add r0.x, -r0.x, v2.x\n    temp0.x = -temp0.x + i.position1.x;\n    // mul r0.x, r0.x, c204.x\n    temp0.x = temp0.x * float1(4);\n    // mova a0.x, r0.x\n    addr0.x = temp0.x;\n    // mad r0, v0.xyzx, c204.yyyz, c204.zzzy\n    temp0 = i.position.xyzx * float4(1, 1, 1, 0) + float4(0, 0, 0, 1);\n    // dp4 r1.x, r0, c0[a0.x]\n    temp1.x = dot(temp0, (ref_world_tm[0 + (addr0.x / 4)]._m00_m10_m20_m30));\n    // dp4 r1.y, r0, c1[a0.x]\n    temp1.y = dot(temp0, (ref_world_tm[0 + (addr0.x / 4)]._m01_m11_m21_m31));\n    // dp4 r1.z, r0, c2[a0.x]\n    temp1.z = dot(temp0, (ref_world_tm[0 + (addr0.x / 4)]._m02_m12_m22_m32));\n    // dp4 r1.w, r0, c3[a0.x]\n    temp1.w = dot(temp0, (ref_world_tm[0 + (addr0.x / 4)]._m03_m13_m23_m33));\n    // dp4 o0.x, r1, c200\n    o.position.x = dot(temp1, (view_proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, r1, c201\n    o.position.y = dot(temp1, (view_proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.z, r1, c202\n    o.position.z = dot(temp1, (view_proj_matrix._m02_m12_m22_m32));\n    // dp4 o0.w, r1, c203\n    o.position.w = dot(temp1, (view_proj_matrix._m03_m13_m23_m33));\n    // mov o1, v1\n    o.color = i.color;\n    // mov o2.xy, v3\n    o.texcoord = i.texcoord;\n    // mov o3.xy, v4\n    o.texcoord6 = i.texcoord3;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."),(0,o.kt)("h4",{id:"pixel-shader-1"},"Pixel Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"float ref_il_multiplier : register(ps_3_0, c0);\nsampler2D self_illumination_texture : register(ps_3_0, s0);\nfloat4 PixelMain(float2 texcoord : TEXCOORD) : COLOR\n{\n    float4 out_color;\n    float4 temp0;\n    // def c1, 1, 0, 0, 0\n    // dcl_texcoord v0.xy\n    // dcl_2d s0\n    // texld_pp r0, v0, s0\n    temp0 = /* not implemented _pp modifier */ tex2D(self_illumination_texture, texcoord.xy);\n    // mul_pp oC0.xyz, r0, c0.x\n    out_color.xyz = /* not implemented _pp modifier */ temp0.xyz * ref_il_multiplier.xxx;\n    // mov_pp oC0.w, c1.x\n    out_color.w = /* not implemented _pp modifier */ float1(1);\n    // \n\n    return out_color;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."))}_.isMDXComponent=!0}}]);