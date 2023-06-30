"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[33008],{603905:(e,t,n)=>{n.d(t,{Zo:()=>_,kt:()=>c});var r=n(667294);function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,m=function(e,t){if(null==e)return{};var n,r,m={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(m[n]=e[n]);return m}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(m[n]=e[n])}return m}var d=r.createContext({}),x=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},_=function(e){var t=x(e.components);return r.createElement(d.Provider,{value:t},e.children)},i="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,m=e.mdxType,p=e.originalType,d=e.parentName,_=a(e,["components","mdxType","originalType","parentName"]),i=x(n),y=m,c=i["".concat(d,".").concat(y)]||i[y]||l[y]||p;return n?r.createElement(c,o(o({ref:t},_),{},{components:n})):r.createElement(c,o({ref:t},_))}));function c(e,t){var n=arguments,m=t&&t.mdxType;if("string"==typeof e||m){var p=n.length,o=new Array(p);o[0]=y;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a[i]="string"==typeof e?e:m,o[1]=a;for(var x=2;x<p;x++)o[x]=n[x];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},347184:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>p,metadata:()=>a,toc:()=>x});var r=n(487462),m=(n(667294),n(603905));const p={id:0xbf0a3e521599d000,title:"Opacity Default Ati Cube Environment Mapping Cube Fresnel Diffuse Texture Diffuse Uvanim Double Sided Normalmap Normal Uvanim Skinned 3weights Vegetation Bending"},o="Opacity Default Ati Cube Environment Mapping Cube Fresnel Diffuse Texture Diffuse Uvanim Double Sided Normalmap Normal Uvanim Skinned 3weights Vegetation Bending",a={unversionedId:"Generated/Shaders/Base/[3500-3600]/13765883733281985000",id:"Generated/Shaders/Base/[3500-3600]/13765883733281985000",title:"Opacity Default Ati Cube Environment Mapping Cube Fresnel Diffuse Texture Diffuse Uvanim Double Sided Normalmap Normal Uvanim Skinned 3weights Vegetation Bending",description:"(opacityATICUBEFRESNELDIFFUSEUVANIMNORMALMAPSKINNED3WEIGHTS:VEGETATION_BENDING, 0xbf0a3e521599ccdf)",source:"@site/docs/Generated/Shaders/Base/[3500-3600]/0xbf0a3e521599ccdf.mdx",sourceDirName:"Generated/Shaders/Base/[3500-3600]",slug:"/Generated/Shaders/Base/[3500-3600]/13765883733281985000",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[3500-3600]/13765883733281985000",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/Generated/Shaders/Base/[3500-3600]/0xbf0a3e521599ccdf.mdx",tags:[],version:"current",frontMatter:{id:"13765883733281985000",title:"Opacity Default Ati Cube Environment Mapping Cube Fresnel Diffuse Texture Diffuse Uvanim Double Sided Normalmap Normal Uvanim Skinned 3weights Vegetation Bending"},sidebar:"docsSidebar",previous:{title:"Generic Shadow Caster Ati Diffuse Texture Normalmap Self Illumination Vertex Color",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[3500-3600]/13763295554665030000"},next:{title:"Generic Shadow Caster Diffuse Texture Normalmap Normalmap Depth Texture Normalmap Uv1 Parallax Parallax Animation Parallax Animation Uv2 Parallax Animation Vertex Alpha Mask Parallax Relief Vertex Color",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[3500-3600]/13769474118761212000"}},d={},x=[{value:"Technique <code>transparent</code>",id:"technique-transparent",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Sampler 1",id:"sampler-1",level:4},{value:"Sampler 2",id:"sampler-2",level:4},{value:"Sampler 3",id:"sampler-3",level:4},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],_={toc:x},i="wrapper";function l(e){let{components:t,...n}=e;return(0,m.kt)(i,(0,r.Z)({},_,n,{components:t,mdxType:"MDXLayout"}),(0,m.kt)("h1",{id:"opacity-default-ati-cube-environment-mapping-cube-fresnel-diffuse-texture-diffuse-uvanim-double-sided-normalmap-normal-uvanim-skinned-3weights-vegetation-bending"},"Opacity Default Ati Cube Environment Mapping Cube Fresnel Diffuse Texture Diffuse Uvanim Double Sided Normalmap Normal Uvanim Skinned 3weights Vegetation Bending"),(0,m.kt)("p",null,"(",(0,m.kt)("inlineCode",{parentName:"p"},"opacity:default:ATI:CUBE_ENVIRONMENT_MAPPING:CUBE_FRESNEL:DIFFUSE_TEXTURE:DIFFUSE_UVANIM:DOUBLE_SIDED:NORMALMAP:NORMAL_UVANIM:SKINNED_3WEIGHTS:VEGETATION_BENDING"),", ",(0,m.kt)("inlineCode",{parentName:"p"},"0xbf0a3e521599ccdf"),")"),(0,m.kt)("p",null,"This template is referenced 1 time by ",(0,m.kt)("a",{parentName:"p",href:"/docs/Generated/Render%20Templates/base.render_template_database#opacity-cube-environment-mapping-cube-fresnel-diffuse-texture-diffuse-uvanim-double-sided-normalmap-normal-uvanim-skinned-3weights-vegetation-bending"},"opacity:CUBE_ENVIRONMENT_MAPPING:CUBE_FRESNEL:DIFFUSE_TEXTURE:DIFFUSE_UVANIM:DOUBLE_SIDED:NORMALMAP:NORMAL_UVANIM:SKINNED_3WEIGHTS:VEGETATION_BENDING"),".\nThis template uses the following inputs:\n|Name|UI Name|Type|\n|---|---|---|\n|reflection_texture|Reflection Cube|texture|\n|opacity_texture|Opacity Texture (UV5)|texture|\n|diffuse_texture|Diffuse Texture (UV1)|texture|\n|bump_normal_texture|Normal Map (UV2 else UV1)|texture|\n|uv_speed|UV Speed|vector3|\n|speed|Speed|scalar|\n|detail_settings|Detail Bending Amplitude / Frequency|vector3|\n|branch_settings|Branch Bending Amplitude / Frequency|vector3|\n|fresnel_settings|Falloff Settings (Falloff curve, Falloff multiplier, Opacity dimmer)|vector3|."),(0,m.kt)("h3",{id:"technique-transparent"},"Technique ",(0,m.kt)("inlineCode",{parentName:"h3"},"transparent")),(0,m.kt)("h3",{id:"render-states"},"Render States"),(0,m.kt)("p",null,"More info can be found on the ",(0,m.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3drenderstatetype"},"Direct3D Docs")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 0,\n    D3DRS_ALPHABLENDENABLE = 1,\n    D3DRS_CULLMODE = 1,\n    D3DRS_COLORWRITEENABLE = 7,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 1,\n    D3DRS_STENCILFUNC = 6,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 5,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 4,\n    D3DRS_STENCILWRITEMASK = 5,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n    D3DRS_BLENDOP = 1,\n    D3DRS_DESTBLEND = 6,\n    D3DRS_SRCBLEND = 5,\n};\n")),(0,m.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,m.kt)("p",null,"More info can be found on the ",(0,m.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3dsamplerstatetype"},"Direct3D Docs")),(0,m.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,m.kt)("h4",{id:"sampler-1"},"Sampler 1"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,m.kt)("h4",{id:"sampler-2"},"Sampler 2"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,m.kt)("h4",{id:"sampler-3"},"Sampler 3"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,m.kt)("h3",{id:"shaders"},"Shaders"),(0,m.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-hlsl"},"column_major float4x3 bones[54] : register(vs_3_0, c0);\nfloat camera_near_range : register(vs_3_0, c174);\ncolumn_major float4x4 proj_matrix : register(vs_3_0, c170);\nfloat3 ref_branch_settings : register(vs_3_0, c179);\nfloat3 ref_detail_settings : register(vs_3_0, c178);\nfloat ref_speed : register(vs_3_0, c177);\nfloat ref_time : register(vs_3_0, c175);\nfloat3 ref_uv_speed : register(vs_3_0, c176);\ncolumn_major float4x4 view_matrix : register(vs_3_0, c166);\ncolumn_major float4x4 world_matrix : register(vs_3_0, c162);\nstruct VertexMain_Input\n{\n    float4 blendweight : BLENDWEIGHT;\n    float4 blendindices : BLENDINDICES;\n    float4 position : POSITION;\n    float4 normal : NORMAL;\n    float4 color : COLOR;\n    float4 texcoord1 : TEXCOORD1;\n    float4 texcoord4 : TEXCOORD4;\n    float4 texcoord : TEXCOORD;\n    float4 tangent : TANGENT;\n    float4 binormal : BINORMAL;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float4 texcoord5 : TEXCOORD5;\n    float2 texcoord1 : TEXCOORD1;\n    float3 texcoord4 : TEXCOORD4;\n    float4 texcoord : TEXCOORD;\n    float3 texcoord2 : TEXCOORD2;\n    float3 texcoord3 : TEXCOORD3;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float4 temp0, temp1, temp2, temp3;\n    float3 addr0, temp4;\n    // def c180, 2, -1, 3, 1\n    // def c181, 1.975, 0.793, 0.375, 0.193\n    // def c182, 2, -0.5, 0, 0\n    // dcl_blendweight v0\n    // dcl_blendindices v1\n    // dcl_position v2\n    // dcl_normal v3\n    // dcl_color v4\n    // dcl_texcoord1 v5\n    // dcl_texcoord4 v6\n    // dcl_texcoord v7\n    // dcl_tangent v8\n    // dcl_binormal v9\n    // dcl_position o0\n    // dcl_texcoord5 o1\n    // dcl_texcoord1 o2.xy\n    // dcl_texcoord4 o3.xyz\n    // dcl_texcoord o4\n    // dcl_texcoord2 o5.xyz\n    // dcl_texcoord3 o6.xyz\n    // mov r0.x, c162.w\n    temp0.x = (world_matrix._m00_m10_m20_m30).w;\n    // mov r0.y, c163.w\n    temp0.y = (world_matrix._m01_m11_m21_m31).w;\n    // mov r0.z, c164.w\n    temp0.z = (world_matrix._m02_m12_m22_m32).w;\n    // dp3 r0.x, r0, c180.w\n    temp0.x = dot(temp0.xyz, float3(1, 1, 1));\n    // add r0.x, r0.x, v4.y\n    temp0.x = temp0.x + i.color.y;\n    // add r0.x, r0.x, c175.x\n    temp0.x = temp0.x + ref_time.x;\n    // mul r0.zw, r0.x, c179.y\n    temp0.zw = temp0.x * ref_branch_settings.y;\n    // add r1.x, c175.x, v4.y\n    temp1.x = ref_time.x + i.color.y;\n    // mul r0.xy, r1.x, c178.y\n    temp0.xy = temp1.x * ref_detail_settings.y;\n    // mul r0, r0, c177.x\n    temp0 = temp0 * ref_speed.x;\n    // mul r0, r0, c181\n    temp0 = temp0 * float4(1.975, 0.793, 0.375, 0.193);\n    // frc r0, r0\n    temp0 = frac(temp0);\n    // mad r0, r0, c182.x, c182.y\n    temp0 = temp0 * float4(2, 2, 2, 2) + float4(-0.5, -0.5, -0.5, -0.5);\n    // frc r0, r0\n    temp0 = frac(temp0);\n    // mad r0, r0, c180.x, c180.y\n    temp0 = temp0 * float4(2, 2, 2, 2) + float4(-1, -1, -1, -1);\n    // mul r1, r0_abs, r0_abs\n    temp1 = abs(temp0) * abs(temp0);\n    // mad r0, r0_abs, -c180.x, c180.z\n    temp0 = abs(temp0) * float4(-2, -2, -2, -2) + float4(3, 3, 3, 3);\n    // mul r0, r0, r1\n    temp0 = temp0 * temp1;\n    // add r0.xyz, r0.yyww, r0.xxzw\n    temp0.xyz = temp0.yyw + temp0.xxz;\n    // mul r1.z, c179.x, v4.z\n    temp1.z = ref_branch_settings.x * i.color.z;\n    // mul r0.w, v4.z, v4.x\n    temp0.w = i.color.z * i.color.x;\n    // mul r0.w, r0.w, c178.x\n    temp0.w = temp0.w * ref_detail_settings.x;\n    // mad r2.xyz, v3, c180.x, c180.y\n    temp2.xyz = i.normal.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // mul r3.xyz, c180.z, v1\n    temp3.xyz = float3(3, 3, 3) * i.blendindices.xyz;\n    // mova a0.xyz, r3.yxzw\n    addr0.xyz = temp3.yxz;\n    // dp3 r4.x, r2, c0[a0.x]\n    temp4.x = dot(temp2.xyz, (bones[0 + (addr0.x / 3)]._m00_m10_m20_m30).xyz);\n    // dp3 r4.y, r2, c1[a0.x]\n    temp4.y = dot(temp2.xyz, (bones[0 + (addr0.x / 3)]._m01_m11_m21_m31).xyz);\n    // dp3 r4.z, r2, c2[a0.x]\n    temp4.z = dot(temp2.xyz, (bones[0 + (addr0.x / 3)]._m02_m12_m22_m32).xyz);\n    // mul r4.xyz, r4, v0.y\n    temp4.xyz = temp4.xyz * i.blendweight.yyy;\n    // dp3 r3.x, r2, c0[a0.y]\n    temp3.x = dot(temp2.xyz, (bones[0 + (addr0.y / 3)]._m00_m10_m20_m30).xyz);\n    // dp3 r3.y, r2, c1[a0.y]\n    temp3.y = dot(temp2.xyz, (bones[0 + (addr0.y / 3)]._m01_m11_m21_m31).xyz);\n    // dp3 r3.z, r2, c2[a0.y]\n    temp3.z = dot(temp2.xyz, (bones[0 + (addr0.y / 3)]._m02_m12_m22_m32).xyz);\n    // mad r3.xyz, v0.x, r3, r4\n    temp3.xyz = i.blendweight.xxx * temp3.xyz + temp4.xyz;\n    // dp3 r4.x, r2, c0[a0.z]\n    temp4.x = dot(temp2.xyz, (bones[0 + (addr0.z / 3)]._m00_m10_m20_m30).xyz);\n    // dp3 r4.y, r2, c1[a0.z]\n    temp4.y = dot(temp2.xyz, (bones[0 + (addr0.z / 3)]._m01_m11_m21_m31).xyz);\n    // dp3 r4.z, r2, c2[a0.z]\n    temp4.z = dot(temp2.xyz, (bones[0 + (addr0.z / 3)]._m02_m12_m22_m32).xyz);\n    // mad r2.xyz, v0.z, r4, r3\n    temp2.xyz = i.blendweight.zzz * temp4.xyz + temp3.xyz;\n    // nrm r3.xyz, r2\n    temp3.xyz = normalize(temp2.xyz).xyz;\n    // dp3 r2.z, r3, c162\n    temp2.z = dot(temp3.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // dp3 r2.w, r3, c163\n    temp2.w = dot(temp3.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o3.z, r3, c164\n    o.texcoord4.z = dot(temp3.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // mul r1.xy, r0.w, r2.zwzw\n    temp1.xy = temp0.ww * temp2.zw;\n    // mov o6.z, r2.w\n    o.texcoord3.z = temp2.w;\n    // dp4 r3.x, v2, c0[a0.x]\n    temp3.x = dot(i.position, (bones[0 + (addr0.x / 3)]._m00_m10_m20_m30));\n    // dp4 r3.y, v2, c1[a0.x]\n    temp3.y = dot(i.position, (bones[0 + (addr0.x / 3)]._m01_m11_m21_m31));\n    // dp4 r3.z, v2, c2[a0.x]\n    temp3.z = dot(i.position, (bones[0 + (addr0.x / 3)]._m02_m12_m22_m32));\n    // mul r3.xyz, r3, v0.y\n    temp3.xyz = temp3.xyz * i.blendweight.yyy;\n    // dp4 r4.x, v2, c0[a0.y]\n    temp4.x = dot(i.position, (bones[0 + (addr0.y / 3)]._m00_m10_m20_m30));\n    // dp4 r4.y, v2, c1[a0.y]\n    temp4.y = dot(i.position, (bones[0 + (addr0.y / 3)]._m01_m11_m21_m31));\n    // dp4 r4.z, v2, c2[a0.y]\n    temp4.z = dot(i.position, (bones[0 + (addr0.y / 3)]._m02_m12_m22_m32));\n    // mad r3.xyz, v0.x, r4, r3\n    temp3.xyz = i.blendweight.xxx * temp4.xyz + temp3.xyz;\n    // dp4 r4.x, v2, c0[a0.z]\n    temp4.x = dot(i.position, (bones[0 + (addr0.z / 3)]._m00_m10_m20_m30));\n    // dp4 r4.y, v2, c1[a0.z]\n    temp4.y = dot(i.position, (bones[0 + (addr0.z / 3)]._m01_m11_m21_m31));\n    // dp4 r4.z, v2, c2[a0.z]\n    temp4.z = dot(i.position, (bones[0 + (addr0.z / 3)]._m02_m12_m22_m32));\n    // mad r3.xyz, v0.z, r4, r3\n    temp3.xyz = i.blendweight.zzz * temp4.xyz + temp3.xyz;\n    // mov r3.w, c180.w\n    temp3.w = float1(1);\n    // dp4 r4.x, r3, c162\n    temp4.x = dot(temp3, (world_matrix._m00_m10_m20_m30));\n    // dp4 r4.y, r3, c163\n    temp4.y = dot(temp3, (world_matrix._m01_m11_m21_m31));\n    // dp4 r4.z, r3, c164\n    temp4.z = dot(temp3, (world_matrix._m02_m12_m22_m32));\n    // dp4 r3.w, r3, c165\n    temp3.w = dot(temp3, (world_matrix._m03_m13_m23_m33));\n    // mad r3.xyz, r0, r1, r4\n    temp3.xyz = temp0.xyz * temp1.xyz + temp4.xyz;\n    // dp4 r0.x, r3, c166\n    temp0.x = dot(temp3, (view_matrix._m00_m10_m20_m30));\n    // dp4 r0.y, r3, c167\n    temp0.y = dot(temp3, (view_matrix._m01_m11_m21_m31));\n    // dp4 r0.z, r3, c168\n    temp0.z = dot(temp3, (view_matrix._m02_m12_m22_m32));\n    // dp4 r0.w, r3, c169\n    temp0.w = dot(temp3, (view_matrix._m03_m13_m23_m33));\n    // mov o1.xyz, r3\n    o.texcoord5.xyz = temp3.xyz;\n    // dp4 o0.x, r0, c170\n    o.position.x = dot(temp0, (proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, r0, c171\n    o.position.y = dot(temp0, (proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.w, r0, c173\n    o.position.w = dot(temp0, (proj_matrix._m03_m13_m23_m33));\n    // dp4 r0.x, r0, c172\n    temp0.x = dot(temp0, (proj_matrix._m02_m12_m22_m32));\n    // mad r0.yzw, v8.xxyz, c180.x, c180.y\n    temp0.yzw = i.tangent.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 r1.x, r0.yzww, c0[a0.x]\n    temp1.x = dot(temp0.yzw, (bones[0 + (addr0.x / 3)]._m00_m10_m20_m30).xyz);\n    // dp3 r1.y, r0.yzww, c1[a0.x]\n    temp1.y = dot(temp0.yzw, (bones[0 + (addr0.x / 3)]._m01_m11_m21_m31).xyz);\n    // dp3 r1.z, r0.yzww, c2[a0.x]\n    temp1.z = dot(temp0.yzw, (bones[0 + (addr0.x / 3)]._m02_m12_m22_m32).xyz);\n    // mul r1.xyz, r1, v0.y\n    temp1.xyz = temp1.xyz * i.blendweight.yyy;\n    // dp3 r3.x, r0.yzww, c0[a0.y]\n    temp3.x = dot(temp0.yzw, (bones[0 + (addr0.y / 3)]._m00_m10_m20_m30).xyz);\n    // dp3 r3.y, r0.yzww, c1[a0.y]\n    temp3.y = dot(temp0.yzw, (bones[0 + (addr0.y / 3)]._m01_m11_m21_m31).xyz);\n    // dp3 r3.z, r0.yzww, c2[a0.y]\n    temp3.z = dot(temp0.yzw, (bones[0 + (addr0.y / 3)]._m02_m12_m22_m32).xyz);\n    // mad r1.xyz, v0.x, r3, r1\n    temp1.xyz = i.blendweight.xxx * temp3.xyz + temp1.xyz;\n    // dp3 r3.x, r0.yzww, c0[a0.z]\n    temp3.x = dot(temp0.yzw, (bones[0 + (addr0.z / 3)]._m00_m10_m20_m30).xyz);\n    // dp3 r3.y, r0.yzww, c1[a0.z]\n    temp3.y = dot(temp0.yzw, (bones[0 + (addr0.z / 3)]._m01_m11_m21_m31).xyz);\n    // dp3 r3.z, r0.yzww, c2[a0.z]\n    temp3.z = dot(temp0.yzw, (bones[0 + (addr0.z / 3)]._m02_m12_m22_m32).xyz);\n    // mad r0.yzw, v0.z, r3.xxyz, r1.xxyz\n    temp0.yzw = i.blendweight.zzz * temp3.xyz + temp1.xyz;\n    // nrm r1.xyz, r0.yzww\n    temp1.xyz = normalize(temp0.yzww.xyz).xyz;\n    // dp3 o6.x, r1, c163\n    o.texcoord3.x = dot(temp1.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o3.x, r1, c164\n    o.texcoord4.x = dot(temp1.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // dp3 r2.x, r1, c162\n    temp2.x = dot(temp1.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // mad r0.yzw, v9.xxyz, c180.x, c180.y\n    temp0.yzw = i.binormal.xyz * float3(2, 2, 2) + float3(-1, -1, -1);\n    // dp3 r1.x, r0.yzww, c0[a0.x]\n    temp1.x = dot(temp0.yzw, (bones[0 + (addr0.x / 3)]._m00_m10_m20_m30).xyz);\n    // dp3 r1.y, r0.yzww, c1[a0.x]\n    temp1.y = dot(temp0.yzw, (bones[0 + (addr0.x / 3)]._m01_m11_m21_m31).xyz);\n    // dp3 r1.z, r0.yzww, c2[a0.x]\n    temp1.z = dot(temp0.yzw, (bones[0 + (addr0.x / 3)]._m02_m12_m22_m32).xyz);\n    // mul r1.xyz, r1, v0.y\n    temp1.xyz = temp1.xyz * i.blendweight.yyy;\n    // dp3 r3.x, r0.yzww, c0[a0.y]\n    temp3.x = dot(temp0.yzw, (bones[0 + (addr0.y / 3)]._m00_m10_m20_m30).xyz);\n    // dp3 r3.y, r0.yzww, c1[a0.y]\n    temp3.y = dot(temp0.yzw, (bones[0 + (addr0.y / 3)]._m01_m11_m21_m31).xyz);\n    // dp3 r3.z, r0.yzww, c2[a0.y]\n    temp3.z = dot(temp0.yzw, (bones[0 + (addr0.y / 3)]._m02_m12_m22_m32).xyz);\n    // mad r1.xyz, v0.x, r3, r1\n    temp1.xyz = i.blendweight.xxx * temp3.xyz + temp1.xyz;\n    // dp3 r3.x, r0.yzww, c0[a0.z]\n    temp3.x = dot(temp0.yzw, (bones[0 + (addr0.z / 3)]._m00_m10_m20_m30).xyz);\n    // dp3 r3.y, r0.yzww, c1[a0.z]\n    temp3.y = dot(temp0.yzw, (bones[0 + (addr0.z / 3)]._m01_m11_m21_m31).xyz);\n    // dp3 r3.z, r0.yzww, c2[a0.z]\n    temp3.z = dot(temp0.yzw, (bones[0 + (addr0.z / 3)]._m02_m12_m22_m32).xyz);\n    // mad r0.yzw, v0.z, r3.xxyz, r1.xxyz\n    temp0.yzw = i.blendweight.zzz * temp3.xyz + temp1.xyz;\n    // nrm r1.xyz, r0.yzww\n    temp1.xyz = normalize(temp0.yzww.xyz).xyz;\n    // dp3 o6.y, -r1, c163\n    o.texcoord3.y = dot(-temp1.xyz, (world_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o3.y, -r1, c164\n    o.texcoord4.y = dot(-temp1.xyz, (world_matrix._m02_m12_m22_m32).xyz);\n    // dp3 r2.y, -r1, c162\n    temp2.y = dot(-temp1.xyz, (world_matrix._m00_m10_m20_m30).xyz);\n    // mov o5.xyz, r2\n    o.texcoord2 = temp2;\n    // mov r1.x, c175.x\n    temp1.x = ref_time.x;\n    // mad o4.xy, r1.x, c176, v7\n    o.texcoord.xy = temp1.xx * ref_uv_speed.xy + i.texcoord.xy;\n    // mad o4.zw, r1.x, c176.xyxy, v5.xyxy\n    o.texcoord.zw = temp1.xx * ref_uv_speed.xy + i.texcoord1.xy;\n    // add o1.w, r0.x, c174.x\n    o.texcoord5.w = temp0.x + camera_near_range.x;\n    // mov o0.z, r0.x\n    o.position.z = temp0.x;\n    // mov o2.xy, v6\n    o.texcoord1 = i.texcoord4;\n    // \n\n    return o;\n}\n")),(0,m.kt)("p",null,"Decompiled by DXDecompiler."),(0,m.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-hlsl"},"sampler2D bump_normal_texture : register(ps_3_0, s3);\ncolumn_major float4x4 camera_world_matrix : register(ps_3_0, c0);\nsampler2D diffuse_texture : register(ps_3_0, s2);\nsampler2D opacity_texture : register(ps_3_0, s1);\nfloat3 ref_fresnel_settings : register(ps_3_0, c3);\nsamplerCUBE reflection_texture : register(ps_3_0, s0);\nstruct PixelMain_Input\n{\n    float3 texcoord5 : TEXCOORD5;\n    float3 texcoord4 : TEXCOORD4;\n    float4 texcoord : TEXCOORD;\n    float3 texcoord2 : TEXCOORD2;\n    float3 texcoord3 : TEXCOORD3;\n};\n\nfloat4 PixelMain(PixelMain_Input i) : COLOR\n{\n    float4 out_color;\n    float4 temp0, temp1, temp2, temp3;\n    // def c4, -0.5, 1, -1, 0.5773672\n    // dcl_texcoord5 v0.xyz\n    // dcl_texcoord4 v1.xyz\n    // dcl_texcoord v2\n    // dcl_texcoord2 v3.xyz\n    // dcl_texcoord3 v4.xyz\n    // dcl_cube s0\n    // dcl_2d s1\n    // dcl_2d s2\n    // dcl_2d s3\n    // texld_pp r0, v2.zwzw, s3\n    temp0 = /* not implemented _pp modifier */ tex2D(bump_normal_texture, i.texcoord.zw);\n    // add_pp r0.xy, r0.wyzw, c4.x\n    temp0.xy = /* not implemented _pp modifier */ temp0.wy + float2(-0.5, -0.5);\n    // add_pp r0.xy, r0, r0\n    temp0.xy = /* not implemented _pp modifier */ temp0.xy + temp0.xy;\n    // mul_pp r0.w, r0.x, r0.x\n    temp0.w = /* not implemented _pp modifier */ temp0.x * temp0.x;\n    // mad_pp r0.w, r0.y, r0.y, -r0.w\n    temp0.w = /* not implemented _pp modifier */ temp0.y * temp0.y + -temp0.w;\n    // add_pp r0.w, -r0.w, c4.y\n    temp0.w = /* not implemented _pp modifier */ -temp0.w + float1(1);\n    // rsq_pp r0.w, r0.w\n    temp0.w = /* not implemented _pp modifier */ 1 / sqrt(temp0.w);\n    // rcp_pp r0.z, r0.w\n    temp0.z = /* not implemented _pp modifier */ 1.0f / temp0.w;\n    // dp3 r1.x, r0, v3\n    temp1.x = dot(temp0.xyz, i.texcoord2.xyz);\n    // dp3 r1.y, r0, v4\n    temp1.y = dot(temp0.xyz, i.texcoord3.xyz);\n    // dp3 r1.z, r0, v1\n    temp1.z = dot(temp0.xyz, i.texcoord4.xyz);\n    // nrm_pp r0.xyz, r1\n    temp0.xyz = /* not implemented _pp modifier */ normalize(temp1.xyz).xyz;\n    // mov r1.x, -c0.w\n    temp1.x = -(camera_world_matrix._m00_m10_m20_m30).w;\n    // mov r1.y, -c1.w\n    temp1.y = -(camera_world_matrix._m01_m11_m21_m31).w;\n    // mov r1.z, -c2.w\n    temp1.z = -(camera_world_matrix._m02_m12_m22_m32).w;\n    // add r1.xyz, r1, v0\n    temp1.xyz = temp1.xyz + i.texcoord5.xyz;\n    // nrm r2.xyz, r1\n    temp2.xyz = normalize(temp1.xyz).xyz;\n    // dp3 r0.w, r0, -r2\n    temp0.w = dot(temp0.xyz, -temp2.xyz);\n    // add r1.x, r0.w, r0.w\n    temp1.x = temp0.w + temp0.w;\n    // mov_sat r0.w, r0.w\n    temp0.w = saturate(temp0.w);\n    // mad_pp r0.xyz, r1.x, -r0, -r2\n    temp0.xyz = /* not implemented _pp modifier */ temp1.xxx * -temp0.xyz + -temp2.xyz;\n    // texld_pp r1, r0, s0\n    temp1 = /* not implemented _pp modifier */ texCUBE(reflection_texture, temp0.xyz);\n    // texld_pp r2, v2, s2\n    temp2 = /* not implemented _pp modifier */ tex2D(diffuse_texture, i.texcoord.xy);\n    // texld_pp r3, v2, s1\n    temp3 = /* not implemented _pp modifier */ tex2D(opacity_texture, i.texcoord.xy);\n    // mad_pp oC0.xyz, r1, r3.z, r2\n    out_color.xyz = /* not implemented _pp modifier */ temp1.xyz * temp3.zzz + temp2.xyz;\n    // dp3 r0.x, r1, r1\n    temp0.x = dot(temp1.xyz, temp1.xyz);\n    // rsq r0.x, r0.x\n    temp0.x = 1 / sqrt(temp0.x);\n    // rcp r0.x, r0.x\n    temp0.x = 1.0f / temp0.x;\n    // mul_sat_pp r0.x, r0.x, c4.w\n    ;// error\n    // add r0.yw, -r0.xxzw, c4.y\n    temp0.yw = -temp0.xw + float2(1, 1);\n    // mad_pp r0.x, c3.z, r0.y, r0.x\n    temp0.x = /* not implemented _pp modifier */ ref_fresnel_settings.z * temp0.y + temp0.x;\n    // mul_pp r0.x, r0.x, r3.x\n    temp0.x = /* not implemented _pp modifier */ temp0.x * temp3.x;\n    // mov r0.y, c4.y\n    temp0.y = float1(1);\n    // add r0.z, r0.y, c3.x\n    temp0.z = temp0.y + ref_fresnel_settings.x;\n    // pow r1.x, r0.w, r0.z\n    temp1.x = pow(temp0.w, temp0.z);\n    // add r0.z, r1.x, c4.z\n    temp0.z = temp1.x + float1(-1);\n    // mad r0.y, c3.y, r0.z, r0.y\n    temp0.y = ref_fresnel_settings.y * temp0.z + temp0.y;\n    // mad_pp oC0.w, r0.x, r0.y, r3.y\n    out_color.w = /* not implemented _pp modifier */ temp0.x * temp0.y + temp3.y;\n    // \n\n    return out_color;\n}\n")),(0,m.kt)("p",null,"Decompiled by DXDecompiler."))}l.isMDXComponent=!0}}]);