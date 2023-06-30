"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[77023],{603905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>x});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),i=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=i(e.components);return r.createElement(d.Provider,{value:t},e.children)},_="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),_=i(n),s=a,x=_["".concat(d,".").concat(s)]||_[s]||c[s]||o;return n?r.createElement(x,p(p({ref:t},l),{},{components:n})):r.createElement(x,p({ref:t},l))}));function x(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=s;var m={};for(var d in t)hasOwnProperty.call(t,d)&&(m[d]=t[d]);m.originalType=e,m[_]="string"==typeof e?e:a,p[1]=m;for(var i=2;i<o;i++)p[i]=n[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},556228:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>m,toc:()=>i});var r=n(487462),a=(n(667294),n(603905));const o={id:0xac91abb2f3277800,title:"Opacity Default Cube Environment Mapping Cube Fresnel Diffuse Texture Double Sided Instanced"},p="Opacity Default Cube Environment Mapping Cube Fresnel Diffuse Texture Double Sided Instanced",m={unversionedId:"Generated/Shaders/Base/[3200-3300]/12434908831218629000",id:"Generated/Shaders/Base/[3200-3300]/12434908831218629000",title:"Opacity Default Cube Environment Mapping Cube Fresnel Diffuse Texture Double Sided Instanced",description:"(opacityCUBEENVIRONMENTMAPPINGDIFFUSETEXTUREINSTANCED, 0xac91abb2f32776d1)",source:"@site/docs/Generated/Shaders/Base/[3200-3300]/0xac91abb2f32776d1.mdx",sourceDirName:"Generated/Shaders/Base/[3200-3300]",slug:"/Generated/Shaders/Base/[3200-3300]/12434908831218629000",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[3200-3300]/12434908831218629000",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/Generated/Shaders/Base/[3200-3300]/0xac91abb2f32776d1.mdx",tags:[],version:"current",frontMatter:{id:"12434908831218629000",title:"Opacity Default Cube Environment Mapping Cube Fresnel Diffuse Texture Double Sided Instanced"},sidebar:"docsSidebar",previous:{title:"Generic Default Alpha Masked Diffuse Texture External Alpha Ref Instanced Normalmap Vegetation Bending",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[3200-3300]/12434645318777315000"},next:{title:"Generic Default Contour Cube Environment Mapping Diffuse Texture Normalmap Rl Players",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[3200-3300]/12437395629185567000"}},d={},i=[{value:"Technique <code>transparent</code>",id:"technique-transparent",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Sampler 1",id:"sampler-1",level:4},{value:"Sampler 2",id:"sampler-2",level:4},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],l={toc:i},_="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(_,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"opacity-default-cube-environment-mapping-cube-fresnel-diffuse-texture-double-sided-instanced"},"Opacity Default Cube Environment Mapping Cube Fresnel Diffuse Texture Double Sided Instanced"),(0,a.kt)("p",null,"(",(0,a.kt)("inlineCode",{parentName:"p"},"opacity:default:CUBE_ENVIRONMENT_MAPPING:CUBE_FRESNEL:DIFFUSE_TEXTURE:DOUBLE_SIDED:INSTANCED"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"0xac91abb2f32776d1"),")"),(0,a.kt)("p",null,"This template is referenced 1 time by ",(0,a.kt)("a",{parentName:"p",href:"/docs/Generated/Render%20Templates/base.render_template_database#opacity-cube-environment-mapping-cube-fresnel-diffuse-texture-double-sided-instanced"},"opacity:CUBE_ENVIRONMENT_MAPPING:CUBE_FRESNEL:DIFFUSE_TEXTURE:DOUBLE_SIDED:INSTANCED"),".\nThis template uses the following inputs:\n|Name|UI Name|Type|\n|---|---|---|\n|reflection_texture|Reflection Cube|texture|\n|opacity_texture|Opacity Texture (UV5)|texture|\n|diffuse_texture|Diffuse Texture (UV1)|texture|\n|fresnel_settings|Falloff Settings (Falloff curve, Falloff multiplier, Opacity dimmer)|vector3|."),(0,a.kt)("h3",{id:"technique-transparent"},"Technique ",(0,a.kt)("inlineCode",{parentName:"h3"},"transparent")),(0,a.kt)("h3",{id:"render-states"},"Render States"),(0,a.kt)("p",null,"More info can be found on the ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3drenderstatetype"},"Direct3D Docs")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 0,\n    D3DRS_ALPHABLENDENABLE = 1,\n    D3DRS_CULLMODE = 1,\n    D3DRS_COLORWRITEENABLE = 7,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 1,\n    D3DRS_STENCILFUNC = 6,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 5,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 4,\n    D3DRS_STENCILWRITEMASK = 5,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n    D3DRS_BLENDOP = 1,\n    D3DRS_DESTBLEND = 6,\n    D3DRS_SRCBLEND = 5,\n};\n")),(0,a.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,a.kt)("p",null,"More info can be found on the ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3dsamplerstatetype"},"Direct3D Docs")),(0,a.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,a.kt)("h4",{id:"sampler-1"},"Sampler 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,a.kt)("h4",{id:"sampler-2"},"Sampler 2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,a.kt)("h3",{id:"shaders"},"Shaders"),(0,a.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hlsl"},"float camera_near_range : register(vs_3_0, c208);\ncolumn_major float4x4 proj_matrix : register(vs_3_0, c204);\ncolumn_major float4x4 ref_world_tm[50] : register(vs_3_0, c0);\ncolumn_major float4x4 view_matrix : register(vs_3_0, c200);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 position1 : POSITION1;\n    float4 normal : NORMAL;\n    float4 texcoord4 : TEXCOORD4;\n    float4 texcoord : TEXCOORD;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float4 texcoord5 : TEXCOORD5;\n    float2 texcoord1 : TEXCOORD1;\n    float2 texcoord : TEXCOORD;\n    float3 texcoord2 : TEXCOORD2;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float4 temp0, temp1;\n    float addr0;\n    // def c209, 2, -1, 4, -0\n    // dcl_position v0\n    // dcl_position1 v1\n    // dcl_normal v2\n    // dcl_texcoord4 v3\n    // dcl_texcoord v4\n    // dcl_position o0\n    // dcl_texcoord5 o1\n    // dcl_texcoord1 o2.xy\n    // dcl_texcoord o3.xy\n    // dcl_texcoord2 o4.xyz\n    // frc r0.x, v1.x\n    temp0.x = frac(i.position1.x);\n    // add r0.x, -r0.x, v1.x\n    temp0.x = -temp0.x + i.position1.x;\n    // mul r0.x, r0.x, c209.z\n    temp0.x = temp0.x * float1(4);\n    // mova a0.x, r0.x\n    addr0.x = temp0.x;\n    // mad r0, v0.xyzx, -c209.yyyw, -c209.wwwy\n    temp0 = i.position.xyzx * float4(1, 1, 1, 0) + float4(0, 0, 0, 1);\n    // dp4 r1.w, r0, c3[a0.x]\n    temp1.w = dot(temp0, (ref_world_tm[0 + (addr0.x / 4)]._m03_m13_m23_m33));\n    // dp4 r1.x, r0, c0[a0.x]\n    temp1.x = dot(temp0, (ref_world_tm[0 + (addr0.x / 4)]._m00_m10_m20_m30));\n    // dp4 r1.y, r0, c1[a0.x]\n    temp1.y = dot(temp0, (ref_world_tm[0 + (addr0.x / 4)]._m01_m11_m21_m31));\n    // dp4 r1.z, r0, c2[a0.x]\n    temp1.z = dot(temp0, (ref_world_tm[0 + (addr0.x / 4)]._m02_m12_m22_m32));\n    // dp4 r0.x, r1, c200\n    temp0.x = dot(temp1, (view_matrix._m00_m10_m20_m30));\n    // dp4 r0.y, r1, c201\n    temp0.y = dot(temp1, (view_matrix._m01_m11_m21_m31));\n    // dp4 r0.z, r1, c202\n    temp0.z = dot(temp1, (view_matrix._m02_m12_m22_m32));\n    // dp4 r0.w, r1, c203\n    temp0.w = dot(temp1, (view_matrix._m03_m13_m23_m33));\n    // mov o1.xyz, r1\n    o.texcoord5.xyz = temp1.xyz;\n    // dp4 o0.x, r0, c204\n    o.position.x = dot(temp0, (proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, r0, c205\n    o.position.y = dot(temp0, (proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.w, r0, c207\n    o.position.w = dot(temp0, (proj_matrix._m03_m13_m23_m33));\n    // dp4 r0.x, r0, c206\n    temp0.x = dot(temp0, (proj_matrix._m02_m12_m22_m32));\n    // mad r0.yzw, v2.xxyz, c209.x, c209.y\n    temp0.yzw = i.normal.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 o4.x, r0.yzww, c0[a0.x]\n    o.texcoord2.x = dot(temp0.yzw, (ref_world_tm[0 + (addr0.x / 4)]._m00_m10_m20_m30).xyz);\n    // dp3 o4.y, r0.yzww, c1[a0.x]\n    o.texcoord2.y = dot(temp0.yzw, (ref_world_tm[0 + (addr0.x / 4)]._m01_m11_m21_m31).xyz);\n    // dp3 o4.z, r0.yzww, c2[a0.x]\n    o.texcoord2.z = dot(temp0.yzw, (ref_world_tm[0 + (addr0.x / 4)]._m02_m12_m22_m32).xyz);\n    // add o1.w, r0.x, c208.x\n    o.texcoord5.w = temp0.x + camera_near_range.x;\n    // mov o0.z, r0.x\n    o.position.z = temp0.x;\n    // mov o2.xy, v3\n    o.texcoord1 = i.texcoord4;\n    // mov o3.xy, v4\n    o.texcoord = i.texcoord;\n    // \n\n    return o;\n}\n")),(0,a.kt)("p",null,"Decompiled by DXDecompiler."),(0,a.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hlsl"},"column_major float4x4 camera_world_matrix : register(ps_3_0, c0);\nsampler2D diffuse_texture : register(ps_3_0, s2);\nsampler2D opacity_texture : register(ps_3_0, s1);\nfloat3 ref_fresnel_settings : register(ps_3_0, c3);\nsamplerCUBE reflection_texture : register(ps_3_0, s0);\nstruct PixelMain_Input\n{\n    float3 texcoord5 : TEXCOORD5;\n    float2 texcoord : TEXCOORD;\n    float3 texcoord2 : TEXCOORD2;\n};\n\nfloat4 PixelMain(PixelMain_Input i) : COLOR\n{\n    float4 out_color;\n    float4 temp0, temp1, temp2, temp3;\n    // def c4, 1, -1, 0.5773672, 0\n    // dcl_texcoord5 v0.xyz\n    // dcl_texcoord v1.xy\n    // dcl_texcoord2 v2.xyz\n    // dcl_cube s0\n    // dcl_2d s1\n    // dcl_2d s2\n    // mov r0.x, -c0.w\n    temp0.x = -(camera_world_matrix._m00_m10_m20_m30).w;\n    // mov r0.y, -c1.w\n    temp0.y = -(camera_world_matrix._m01_m11_m21_m31).w;\n    // mov r0.z, -c2.w\n    temp0.z = -(camera_world_matrix._m02_m12_m22_m32).w;\n    // add r0.xyz, r0, v0\n    temp0.xyz = temp0.xyz + i.texcoord5.xyz;\n    // nrm r1.xyz, r0\n    temp1.xyz = normalize(temp0.xyz).xyz;\n    // nrm_pp r0.xyz, v2\n    temp0.xyz = /* not implemented _pp modifier */ normalize(i.texcoord2.xyz).xyz;\n    // dp3 r0.w, r0, -r1\n    temp0.w = dot(temp0.xyz, -temp1.xyz);\n    // add r1.w, r0.w, r0.w\n    temp1.w = temp0.w + temp0.w;\n    // mov_sat r0.w, r0.w\n    temp0.w = saturate(temp0.w);\n    // mad_pp r0.xyz, r1.w, -r0, -r1\n    temp0.xyz = /* not implemented _pp modifier */ temp1.www * -temp0.xyz + -temp1.xyz;\n    // texld_pp r1, r0, s0\n    temp1 = /* not implemented _pp modifier */ texCUBE(reflection_texture, temp0.xyz);\n    // texld_pp r2, v1, s2\n    temp2 = /* not implemented _pp modifier */ tex2D(diffuse_texture, i.texcoord.xy);\n    // texld_pp r3, v1, s1\n    temp3 = /* not implemented _pp modifier */ tex2D(opacity_texture, i.texcoord.xy);\n    // mad_pp oC0.xyz, r1, r3.z, r2\n    out_color.xyz = /* not implemented _pp modifier */ temp1.xyz * temp3.zzz + temp2.xyz;\n    // dp3 r0.x, r1, r1\n    temp0.x = dot(temp1.xyz, temp1.xyz);\n    // rsq r0.x, r0.x\n    temp0.x = 1 / sqrt(temp0.x);\n    // rcp r0.x, r0.x\n    temp0.x = 1.0f / temp0.x;\n    // mul_sat_pp r0.x, r0.x, c4.z\n    ;// error\n    // add r0.yw, -r0.xxzw, c4.x\n    temp0.yw = -temp0.xw + float2(1, 1);\n    // mad_pp r0.x, c3.z, r0.y, r0.x\n    temp0.x = /* not implemented _pp modifier */ ref_fresnel_settings.z * temp0.y + temp0.x;\n    // mul_pp r0.x, r0.x, r3.x\n    temp0.x = /* not implemented _pp modifier */ temp0.x * temp3.x;\n    // mov r1.x, c4.x\n    temp1.x = float1(1);\n    // add r0.y, r1.x, c3.x\n    temp0.y = temp1.x + ref_fresnel_settings.x;\n    // pow r1.y, r0.w, r0.y\n    temp1.y = pow(temp0.w, temp0.y);\n    // add r0.y, r1.y, c4.y\n    temp0.y = temp1.y + float1(-1);\n    // mad r0.y, c3.y, r0.y, r1.x\n    temp0.y = ref_fresnel_settings.y * temp0.y + temp1.x;\n    // mad_pp oC0.w, r0.x, r0.y, r3.y\n    out_color.w = /* not implemented _pp modifier */ temp0.x * temp0.y + temp3.y;\n    // \n\n    return out_color;\n}\n")),(0,a.kt)("p",null,"Decompiled by DXDecompiler."))}c.isMDXComponent=!0}}]);