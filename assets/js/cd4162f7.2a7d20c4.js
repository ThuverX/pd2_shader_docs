"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[28260],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>s});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):m(m({},t),e)),n},l=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",_={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},x=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),c=i(n),x=o,s=c["".concat(p,".").concat(x)]||c[x]||_[x]||a;return n?r.createElement(s,m(m({ref:t},l),{},{components:n})):r.createElement(s,m({ref:t},l))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,m=new Array(a);m[0]=x;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d[c]="string"==typeof e?e:o,m[1]=d;for(var i=2;i<a;i++)m[i]=n[i];return r.createElement.apply(null,m)}return r.createElement.apply(null,n)}x.displayName="MDXCreateElement"},41846:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>_,frontMatter:()=>a,metadata:()=>d,toc:()=>i});var r=n(87462),o=(n(67294),n(3905));const a={id:0x3570e3b3c5d40200,title:"Generic Default Diffuse Texture Double Sided Vegetation Bending"},m="Generic Default Diffuse Texture Double Sided Vegetation Bending",d={unversionedId:"Generated/Shaders/Base/[900-1000]/3850828042659431000",id:"Generated/Shaders/Base/[900-1000]/3850828042659431000",title:"Generic Default Diffuse Texture Double Sided Vegetation Bending",description:"(genericDIFFUSETEXTUREVEGETATION_BENDING, 0x3570e3b3c5d401ab)",source:"@site/docs/Generated/Shaders/Base/[900-1000]/0x3570e3b3c5d401ab.mdx",sourceDirName:"Generated/Shaders/Base/[900-1000]",slug:"/Generated/Shaders/Base/[900-1000]/3850828042659431000",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[900-1000]/3850828042659431000",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/docs/Generated/Shaders/Base/[900-1000]/0x3570e3b3c5d401ab.mdx",tags:[],version:"current",frontMatter:{id:"3850828042659431000",title:"Generic Default Diffuse Texture Double Sided Vegetation Bending"},sidebar:"docsSidebar",previous:{title:"Generic Shadow Caster Contour Diffuse Texture Self Illumination Self Illumination Bloom",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[900-1000]/3848358809741145600"},next:{title:"Overlay Vertex Color Textured",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Default_shaders/1467613576943367400"}},p={},i=[{value:"Technique <code>deferred_ambient</code>",id:"technique-deferred_ambient",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],l={toc:i},c="wrapper";function _(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"generic-default-diffuse-texture-double-sided-vegetation-bending"},"Generic Default Diffuse Texture Double Sided Vegetation Bending"),(0,o.kt)("p",null,"(",(0,o.kt)("inlineCode",{parentName:"p"},"generic:default:DIFFUSE_TEXTURE:DOUBLE_SIDED:VEGETATION_BENDING"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"0x3570e3b3c5d401ab"),")"),(0,o.kt)("h3",{id:"technique-deferred_ambient"},"Technique ",(0,o.kt)("inlineCode",{parentName:"h3"},"deferred_ambient")),(0,o.kt)("h3",{id:"render-states"},"Render States"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 1,\n    D3DRS_ALPHABLENDENABLE = 0,\n    D3DRS_CULLMODE = 1,\n    D3DRS_COLORWRITEENABLE = 15,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n};\n")),(0,o.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,o.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h3",{id:"shaders"},"Shaders"),(0,o.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"float camera_near_range : register(vs_3_0, c12);\ncolumn_major float4x4 proj_matrix : register(vs_3_0, c8);\nfloat3 ref_branch_settings : register(vs_3_0, c16);\nfloat3 ref_detail_settings : register(vs_3_0, c15);\nfloat ref_speed : register(vs_3_0, c14);\nfloat ref_time : register(vs_3_0, c13);\ncolumn_major float4x4 view_matrix : register(vs_3_0, c4);\ncolumn_major float4x4 world_matrix : register(vs_3_0, c0);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 normal : NORMAL;\n    float4 texcoord : TEXCOORD;\n    float4 color : COLOR;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float texcoord1 : TEXCOORD1;\n    float2 texcoord : TEXCOORD;\n    float3 texcoord2 : TEXCOORD2;\n    float3 texcoord5 : TEXCOORD5;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float4 temp0, temp1;\n    float3 temp2, temp3;\n    float2 temp4;\n    // def c17, 2, -1, 1, -0.5\n    // def c18, 1.975, 0.793, 0.375, 0.193\n    // def c19, 2, 3, 0, 0\n    // dcl_position v0\n    // dcl_normal v1\n    // dcl_texcoord v2\n    // dcl_color v3\n    // dcl_position o0\n    // dcl_texcoord1 o1.x\n    // dcl_texcoord o2.xy\n    // dcl_texcoord2 o3.xyz\n    // dcl_texcoord5 o4.xyz\n    // mov r0.x, c0.w\n    temp0.x = (world_matrix._m00_m10_m20_m30).w;\n    // mov r0.y, c1.w\n    temp0.y = (world_matrix._m01_m11_m21_m31).w;\n    // mov r0.z, c2.w\n    temp0.z = (world_matrix._m02_m12_m22_m32).w;\n    // dp3 r0.x, r0, c17.z\n    temp0.x = dot(temp0.xyz, float3(1, 1, 1));\n    // add r0.x, r0.x, v3.y\n    temp0.x = temp0.x + i.color.y;\n    // add r0.x, r0.x, c13.x\n    temp0.x = temp0.x + ref_time.x;\n    // mul r0.zw, r0.x, c16.y\n    temp0.zw = temp0.x * ref_branch_settings.y;\n    // add r1.x, c13.x, v3.y\n    temp1.x = ref_time.x + i.color.y;\n    // mul r0.xy, r1.x, c15.y\n    temp0.xy = temp1.x * ref_detail_settings.y;\n    // mul r0, r0, c14.x\n    temp0 = temp0 * ref_speed.x;\n    // mul r0, r0, c18\n    temp0 = temp0 * float4(1.975, 0.793, 0.375, 0.193);\n    // frc r0, r0\n    temp0 = frac(temp0);\n    // mad r0, r0, c17.x, c17.w\n    temp0 = temp0 * float4(2, 2, 2, 2) + float4(-0.5, -0.5, -0.5, -0.5);\n    // frc r0, r0\n    temp0 = frac(temp0);\n    // mad r0, r0, c17.x, c17.y\n    temp0 = temp0 * float4(2, 2, 2, 2) + float4(-1, -1, -1, -1);\n    // mul r1, r0_abs, r0_abs\n    temp1 = abs(temp0) * abs(temp0);\n    // mad r0, r0_abs, -c19.x, c19.y\n    temp0 = abs(temp0) * float4(-2, -2, -2, -2) + float4(3, 3, 3, 3);\n    // mul r0, r0, r1\n    temp0 = temp0 * temp1;\n    // add r0.xyz, r0.yyww, r0.xxzw\n    temp0.xyz = temp0.yyw + temp0.xxz;\n    // dp4 r1.x, v0, c0\n    temp1.x = dot(i.position, (world_matrix._m00_m10_m20_m30));\n    // dp4 r1.y, v0, c1\n    temp1.y = dot(i.position, (world_matrix._m01_m11_m21_m31));\n    // dp4 r1.z, v0, c2\n    temp1.z = dot(i.position, (world_matrix._m02_m12_m22_m32));\n    // mul r2.z, c16.x, v3.z\n    temp2.z = ref_branch_settings.x * i.color.z;\n    // mul r0.w, v3.z, v3.x\n    temp0.w = i.color.z * i.color.x;\n    // mul r0.w, r0.w, c15.x\n    temp0.w = temp0.w * ref_detail_settings.x;\n    // mad r3.xyz, v1, c17.x, c17.y\n    temp3.xyz = i.normal.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 r4.x, r3, c0\n    temp4.x = dot(temp3.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 r4.y, r3, c1\n    temp4.y = dot(temp3.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o3.z, r3, c2\n    o.texcoord2.z = dot(temp3.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // mul r2.xy, r0.w, r4\n    temp2.xy = temp0.ww * temp4.xy;\n    // mov o3.xy, r4\n    o.texcoord2.xy = temp4.xy;\n    // mad r0.xyz, r0, r2, r1\n    temp0.xyz = temp0.xyz * temp2.xyz + temp1.xyz;\n    // dp4 r0.w, v0, c3\n    temp0.w = dot(i.position, (world_matrix._m03_m13_m23_m33));\n    // dp4 r1.x, r0, c4\n    temp1.x = dot(temp0, (view_matrix._m00_m10_m20_m30));\n    // dp4 r1.y, r0, c5\n    temp1.y = dot(temp0, (view_matrix._m01_m11_m21_m31));\n    // dp4 r1.z, r0, c6\n    temp1.z = dot(temp0, (view_matrix._m02_m12_m22_m32));\n    // dp4 r1.w, r0, c7\n    temp1.w = dot(temp0, (view_matrix._m03_m13_m23_m33));\n    // mov o4.xyz, r0\n    o.texcoord5 = temp0;\n    // dp4 o0.x, r1, c8\n    o.position.x = dot(temp1, (proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, r1, c9\n    o.position.y = dot(temp1, (proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.w, r1, c11\n    o.position.w = dot(temp1, (proj_matrix._m03_m13_m23_m33));\n    // dp4 r0.x, r1, c10\n    temp0.x = dot(temp1, (proj_matrix._m02_m12_m22_m32));\n    // add o1.x, r0.x, c12.x\n    o.texcoord1 = temp0.x + camera_near_range.x;\n    // mov o0.z, r0.x\n    o.position.z = temp0.x;\n    // mov o2.xy, v2\n    o.texcoord = i.texcoord;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."),(0,o.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"sampler2D diffuse_texture : register(ps_3_0, s0);\nstruct PixelMain_Input\n{\n    float texcoord1 : TEXCOORD1;\n    float2 texcoord : TEXCOORD;\n    float3 texcoord2 : TEXCOORD2;\n    float4 vpos : vPos;\n};\n\nstruct PixelMain_Output\n{\n    float4 color1 : COLOR1;\n    float4 color : COLOR;\n    float4 color2 : COLOR2;\n};\n\nPixelMain_Output PixelMain(PixelMain_Input i)\n{\n    PixelMain_Output o;\n    float4 temp0;\n    float3 temp1;\n    // def c0, 1, -1, 0.5, 0.4\n    // dcl_texcoord1 v0.x\n    // dcl_texcoord v1.xy\n    // dcl_texcoord2_pp v2.xyz\n    // dcl vPos\n    // dcl_2d s0\n    // cmp r0.x, vPos, c0.x, c0.y\n    temp0.x = (vPos.x >= 0) ? float1(1) : float1(-1);\n    // cmp_pp r0.xyz, -r0.x, v2, -v2\n    temp0.xyz = /* not implemented _pp modifier */ (-temp0.xxx >= 0) ? i.texcoord2.xyz : -i.texcoord2.xyz;\n    // nrm_pp r1.xyz, r0\n    temp1.xyz = /* not implemented _pp modifier */ normalize(temp0.xyz).xyz;\n    // mad_pp oC1.xyz, r1, c0.z, c0.z\n    o.color1.xyz = /* not implemented _pp modifier */ temp1.xyz * float3(0.5, 0.5, 0.5) + float3(0.5, 0.5, 0.5);\n    // texld_pp r0, v1, s0\n    temp0 = /* not implemented _pp modifier */ tex2D(diffuse_texture, i.texcoord.xy);\n    // mov_pp oC0.xyz, r0\n    o.color.xyz = /* not implemented _pp modifier */ temp0.xyz;\n    // mov_pp oC1.w, r0.w\n    o.color1.w = /* not implemented _pp modifier */ temp0.w;\n    // mov oC0.w, c0.w\n    o.color.w = float1(0.4);\n    // mov oC2, v0.x\n    o.color2 = i.texcoord1.x;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."))}_.isMDXComponent=!0}}]);