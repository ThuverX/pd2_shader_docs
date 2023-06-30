"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[5886],{603905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>x});var r=n(667294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},i=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},_=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),c=m(n),_=o,x=c["".concat(l,".").concat(_)]||c[_]||s[_]||a;return n?r.createElement(x,d(d({ref:t},i),{},{components:n})):r.createElement(x,d({ref:t},i))}));function x(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,d=new Array(a);d[0]=_;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:o,d[1]=p;for(var m=2;m<a;m++)d[m]=n[m];return r.createElement.apply(null,d)}return r.createElement.apply(null,n)}_.displayName="MDXCreateElement"},980592:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>m});var r=n(487462),o=(n(667294),n(603905));const a={id:0x121f459d1ddf4400,title:"Generic Default Alpha Masked Diffuse Texture Double Sided External Alpha Ref Instanced"},d="Generic Default Alpha Masked Diffuse Texture Double Sided External Alpha Ref Instanced",p={unversionedId:"Generated/Shaders/Base/[300-400]/1305838958074086400",id:"Generated/Shaders/Base/[300-400]/1305838958074086400",title:"Generic Default Alpha Masked Diffuse Texture Double Sided External Alpha Ref Instanced",description:"(genericALPHAMASKEDDOUBLESIDEDINSTANCED, 0x121f459d1ddf439b)",source:"@site/docs/Generated/Shaders/Base/[300-400]/0x121f459d1ddf439b.mdx",sourceDirName:"Generated/Shaders/Base/[300-400]",slug:"/Generated/Shaders/Base/[300-400]/1305838958074086400",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[300-400]/1305838958074086400",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/Generated/Shaders/Base/[300-400]/0x121f459d1ddf439b.mdx",tags:[],version:"current",frontMatter:{id:"1305838958074086400",title:"Generic Default Alpha Masked Diffuse Texture Double Sided External Alpha Ref Instanced"},sidebar:"docsSidebar",previous:{title:"Generic Shadow Caster Contour Diffuse Texture Global Environment Mapping Gloss Blurs Cubemap Gsma Texture Normalmap Rl Cops Skinned 3weights",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[300-400]/1304050848469811000"},next:{title:"Generic Shadow Caster Cube Environment Mapping Diffuse Texture Rl Environment Vertex Color",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[300-400]/1307730156448256500"}},l={},m=[{value:"Technique <code>deferred_ambient_alpha_masked</code>",id:"technique-deferred_ambient_alpha_masked",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],i={toc:m},c="wrapper";function s(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"generic-default-alpha-masked-diffuse-texture-double-sided-external-alpha-ref-instanced"},"Generic Default Alpha Masked Diffuse Texture Double Sided External Alpha Ref Instanced"),(0,o.kt)("p",null,"(",(0,o.kt)("inlineCode",{parentName:"p"},"generic:default:ALPHA_MASKED:DIFFUSE_TEXTURE:DOUBLE_SIDED:EXTERNAL_ALPHA_REF:INSTANCED"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"0x121f459d1ddf439b"),")"),(0,o.kt)("p",null,"This template is referenced 1 time by ",(0,o.kt)("a",{parentName:"p",href:"/docs/Generated/Render%20Templates/base.render_template_database#generic-alpha-masked-diffuse-texture-double-sided-external-alpha-ref-instanced"},"generic:ALPHA_MASKED:DIFFUSE_TEXTURE:DOUBLE_SIDED:EXTERNAL_ALPHA_REF:INSTANCED"),".\nThis template uses the following inputs:\n|Name|UI Name|Type|\n|---|---|---|\n|diffuse_texture|Diffuse Texture (UV1)|texture|\n|alpha_ref|Alpha Mask Reference|scalar|."),(0,o.kt)("h3",{id:"technique-deferred_ambient_alpha_masked"},"Technique ",(0,o.kt)("inlineCode",{parentName:"h3"},"deferred_ambient_alpha_masked")),(0,o.kt)("h3",{id:"render-states"},"Render States"),(0,o.kt)("p",null,"More info can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3drenderstatetype"},"Direct3D Docs")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 1,\n    D3DRS_ALPHABLENDENABLE = 0,\n    D3DRS_CULLMODE = 1,\n    D3DRS_COLORWRITEENABLE = 15,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n};\n")),(0,o.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,o.kt)("p",null,"More info can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3dsamplerstatetype"},"Direct3D Docs")),(0,o.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h3",{id:"shaders"},"Shaders"),(0,o.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"float camera_near_range : register(vs_3_0, c208);\ncolumn_major float4x4 proj_matrix : register(vs_3_0, c204);\ncolumn_major float4x4 ref_world_tm[50] : register(vs_3_0, c0);\ncolumn_major float4x4 view_matrix : register(vs_3_0, c200);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 normal : NORMAL;\n    float4 texcoord : TEXCOORD;\n    float4 position1 : POSITION1;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float texcoord1 : TEXCOORD1;\n    float2 texcoord : TEXCOORD;\n    float3 texcoord2 : TEXCOORD2;\n    float3 texcoord5 : TEXCOORD5;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float4 temp0, temp1;\n    float addr0;\n    // def c209, 2, -1, 4, -0\n    // dcl_position v0\n    // dcl_normal v1\n    // dcl_texcoord v2\n    // dcl_position1 v3\n    // dcl_position o0\n    // dcl_texcoord1 o1.x\n    // dcl_texcoord o2.xy\n    // dcl_texcoord2 o3.xyz\n    // dcl_texcoord5 o4.xyz\n    // frc r0.x, v3.x\n    temp0.x = frac(i.position1.x);\n    // add r0.x, -r0.x, v3.x\n    temp0.x = -temp0.x + i.position1.x;\n    // mul r0.x, r0.x, c209.z\n    temp0.x = temp0.x * float1(4);\n    // mova a0.x, r0.x\n    addr0.x = temp0.x;\n    // mad r0, v0.xyzx, -c209.yyyw, -c209.wwwy\n    temp0 = i.position.xyzx * float4(1, 1, 1, 0) + float4(0, 0, 0, 1);\n    // dp4 r1.w, r0, c3[a0.x]\n    temp1.w = dot(temp0, (ref_world_tm[0 + (addr0.x / 4)]._m03_m13_m23_m33));\n    // dp4 r1.x, r0, c0[a0.x]\n    temp1.x = dot(temp0, (ref_world_tm[0 + (addr0.x / 4)]._m00_m10_m20_m30));\n    // dp4 r1.y, r0, c1[a0.x]\n    temp1.y = dot(temp0, (ref_world_tm[0 + (addr0.x / 4)]._m01_m11_m21_m31));\n    // dp4 r1.z, r0, c2[a0.x]\n    temp1.z = dot(temp0, (ref_world_tm[0 + (addr0.x / 4)]._m02_m12_m22_m32));\n    // dp4 r0.x, r1, c200\n    temp0.x = dot(temp1, (view_matrix._m00_m10_m20_m30));\n    // dp4 r0.y, r1, c201\n    temp0.y = dot(temp1, (view_matrix._m01_m11_m21_m31));\n    // dp4 r0.z, r1, c202\n    temp0.z = dot(temp1, (view_matrix._m02_m12_m22_m32));\n    // dp4 r0.w, r1, c203\n    temp0.w = dot(temp1, (view_matrix._m03_m13_m23_m33));\n    // mov o4.xyz, r1\n    o.texcoord5 = temp1;\n    // dp4 o0.x, r0, c204\n    o.position.x = dot(temp0, (proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, r0, c205\n    o.position.y = dot(temp0, (proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.w, r0, c207\n    o.position.w = dot(temp0, (proj_matrix._m03_m13_m23_m33));\n    // dp4 r0.x, r0, c206\n    temp0.x = dot(temp0, (proj_matrix._m02_m12_m22_m32));\n    // add o1.x, r0.x, c208.x\n    o.texcoord1 = temp0.x + camera_near_range.x;\n    // mov o0.z, r0.x\n    o.position.z = temp0.x;\n    // mad r0.xyz, v1, c209.x, c209.y\n    temp0.xyz = i.normal.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 o3.x, r0, c0[a0.x]\n    o.texcoord2.x = dot(temp0.xyz, (ref_world_tm[0 + (addr0.x / 4)]._m00_m10_m20_m30).xyz);\n    // dp3 o3.y, r0, c1[a0.x]\n    o.texcoord2.y = dot(temp0.xyz, (ref_world_tm[0 + (addr0.x / 4)]._m01_m11_m21_m31).xyz);\n    // dp3 o3.z, r0, c2[a0.x]\n    o.texcoord2.z = dot(temp0.xyz, (ref_world_tm[0 + (addr0.x / 4)]._m02_m12_m22_m32).xyz);\n    // mov o2.xy, v2\n    o.texcoord = i.texcoord;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."),(0,o.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"sampler2D diffuse_texture : register(ps_3_0, s0);\nfloat ref_alpha_ref : register(ps_3_0, c0);\nstruct PixelMain_Input\n{\n    float texcoord1 : TEXCOORD1;\n    float2 texcoord : TEXCOORD;\n    float3 texcoord2 : TEXCOORD2;\n    float4 vpos : vPos;\n};\n\nstruct PixelMain_Output\n{\n    float4 color1 : COLOR1;\n    float4 color : COLOR;\n    float4 color2 : COLOR2;\n};\n\nPixelMain_Output PixelMain(PixelMain_Input i)\n{\n    PixelMain_Output o;\n    float4 temp0, temp1;\n    float3 temp2;\n    // def c1, 1, -1, 0.5, 0.4\n    // dcl_texcoord1 v0.x\n    // dcl_texcoord v1.xy\n    // dcl_texcoord2_pp v2.xyz\n    // dcl vPos\n    // dcl_2d s0\n    // texld_pp r0, v1, s0\n    temp0 = /* not implemented _pp modifier */ tex2D(diffuse_texture, i.texcoord.xy);\n    // add r1.x, r0.w, -c0.x\n    temp1.x = temp0.w + -ref_alpha_ref.x;\n    // cmp r1, r1.x, c1.x, c1.y\n    temp1 = (temp1.x >= 0) ? float4(1, 1, 1, 1) : float4(-1, -1, -1, -1);\n    // texkill r1\n    clip(temp1);\n    // cmp r1.x, vPos, c1.x, c1.y\n    temp1.x = (vPos.x >= 0) ? float1(1) : float1(-1);\n    // cmp_pp r1.xyz, -r1.x, v2, -v2\n    temp1.xyz = /* not implemented _pp modifier */ (-temp1.xxx >= 0) ? i.texcoord2.xyz : -i.texcoord2.xyz;\n    // nrm_pp r2.xyz, r1\n    temp2.xyz = /* not implemented _pp modifier */ normalize(temp1.xyz).xyz;\n    // mad_pp oC1.xyz, r2, c1.z, c1.z\n    o.color1.xyz = /* not implemented _pp modifier */ temp2.xyz * float3(0.5, 0.5, 0.5) + float3(0.5, 0.5, 0.5);\n    // mov_pp oC0.xyz, r0\n    o.color.xyz = /* not implemented _pp modifier */ temp0.xyz;\n    // mov_pp oC1.w, r0.w\n    o.color1.w = /* not implemented _pp modifier */ temp0.w;\n    // mov oC0.w, c1.w\n    o.color.w = float1(0.4);\n    // mov oC2, v0.x\n    o.color2 = i.texcoord1.x;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."))}s.isMDXComponent=!0}}]);