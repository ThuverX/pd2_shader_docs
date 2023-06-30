"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[78707],{603905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>_});var r=n(667294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},x=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,p=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=m(n),x=o,_=c["".concat(s,".").concat(x)]||c[x]||d[x]||p;return n?r.createElement(_,a(a({ref:t},l),{},{components:n})):r.createElement(_,a({ref:t},l))}));function _(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=n.length,a=new Array(p);a[0]=x;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,a[1]=i;for(var m=2;m<p;m++)a[m]=n[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}x.displayName="MDXCreateElement"},563799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>p,metadata:()=>i,toc:()=>m});var r=n(487462),o=(n(667294),n(603905));const p={id:0xfbdbb63254cf1800,title:"Post Night Vision Default"},a="Post Night Vision Default",i={unversionedId:"Generated/Shaders/Post/18148299450707024000",id:"Generated/Shaders/Post/18148299450707024000",title:"Post Night Vision Default",description:"(postnightvision:default, 0xfbdbb63254cf1bc2)",source:"@site/docs/Generated/Shaders/Post/0xfbdbb63254cf1bc2.mdx",sourceDirName:"Generated/Shaders/Post",slug:"/Generated/Shaders/Post/18148299450707024000",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Post/18148299450707024000",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/Generated/Shaders/Post/0xfbdbb63254cf1bc2.mdx",tags:[],version:"current",frontMatter:{id:"18148299450707024000",title:"Post Night Vision Default"},sidebar:"docsSidebar",previous:{title:"Post Dof Default Vr",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Post/18145778677903110000"},next:{title:"Shader mods",permalink:"/pd2_shader_docs/docs/Modding/"}},s={},m=[{value:"Technique <code>transparent</code>",id:"technique-transparent",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Sampler 1",id:"sampler-1",level:4},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],l={toc:m},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"post-night-vision-default"},"Post Night Vision Default"),(0,o.kt)("p",null,"(",(0,o.kt)("inlineCode",{parentName:"p"},"post_night_vision:default"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"0xfbdbb63254cf1bc2"),")"),(0,o.kt)("p",null,"This template is referenced 1 time by ",(0,o.kt)("a",{parentName:"p",href:"/docs/Generated/Render%20Templates/post.render_template_database#post-night-vision"},"post_night_vision"),"."),(0,o.kt)("h3",{id:"technique-transparent"},"Technique ",(0,o.kt)("inlineCode",{parentName:"h3"},"transparent")),(0,o.kt)("h3",{id:"render-states"},"Render States"),(0,o.kt)("p",null,"More info can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3drenderstatetype"},"Direct3D Docs")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 0,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 0,\n    D3DRS_ALPHABLENDENABLE = 0,\n    D3DRS_CULLMODE = 1,\n    D3DRS_COLORWRITEENABLE = 15,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n};\n")),(0,o.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,o.kt)("p",null,"More info can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3dsamplerstatetype"},"Direct3D Docs")),(0,o.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 3,\n    D3DSAMP_ADDRESSV = 3,\n    D3DSAMP_MAGFILTER = 1,\n    D3DSAMP_MINFILTER = 1,\n    D3DSAMP_MIPFILTER = 1,\n};\n")),(0,o.kt)("h4",{id:"sampler-1"},"Sampler 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 1,\n    D3DSAMP_ADDRESSV = 1,\n    D3DSAMP_MAGFILTER = 3,\n    D3DSAMP_MINFILTER = 3,\n    D3DSAMP_MIPFILTER = 3,\n};\n")),(0,o.kt)("h3",{id:"shaders"},"Shaders"),(0,o.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"float3 filter_color_texture_size : register(vs_3_0, c5);\nfloat3 ref_noise_settings_a : register(vs_3_0, c7);\nfloat ref_time : register(vs_3_0, c6);\nfloat3 render_target_size : register(vs_3_0, c4);\ncolumn_major float4x4 view_proj_matrix : register(vs_3_0, c0);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 texcoord : TEXCOORD;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float2 texcoord : TEXCOORD;\n    float4 texcoord1 : TEXCOORD1;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float4 temp0;\n    float2 temp1, temp2;\n    // def c8, 0.15915494, 0.5, 6.2831855, -3.1415927\n    // def c9, 1, 0, 0, 0\n    // dcl_position v0\n    // dcl_texcoord v1\n    // dcl_position o0\n    // dcl_texcoord o1.xy\n    // dcl_texcoord1 o2\n    // dp4 o0.w, v0, c3\n    o.position.w = dot(i.position, (view_proj_matrix._m03_m13_m23_m33));\n    // mov r0.y, c7.y\n    temp0.y = ref_noise_settings_a.y;\n    // mul r0.x, r0.y, c6.x\n    temp0.x = temp0.y * ref_time.x;\n    // mad r0.y, r0.x, c8.x, c8.y\n    temp0.y = temp0.x * float1(0.15915494) + float1(0.5);\n    // frc r0.y, r0.y\n    temp0.y = frac(temp0.y);\n    // mad r0.y, r0.y, c8.z, c8.w\n    temp0.y = temp0.y * float1(6.2831855) + float1(-3.1415927);\n    // sincos r1.x, r0.y\n    temp1.x = cos(temp0.y);\n    // rcp r0.y, c4.x\n    temp0.y = 1.0f / render_target_size.x;\n    // mul r0.y, r0.y, c4.y\n    temp0.y = temp0.y * render_target_size.y;\n    // mul r0.x, r0.y, r0.x\n    temp0.x = temp0.y * temp0.x;\n    // mad r0.x, r0.x, c8.x, c8.y\n    temp0.x = temp0.x * float1(0.15915494) + float1(0.5);\n    // frc r0.x, r0.x\n    temp0.x = frac(temp0.x);\n    // mad r0.x, r0.x, c8.z, c8.w\n    temp0.x = temp0.x * float1(6.2831855) + float1(-3.1415927);\n    // sincos r2.y, r0.x\n    temp2.y = sin(temp0.x);\n    // mov r1.y, r2.y\n    temp1.y = temp2.y;\n    // rcp r0.x, c5.x\n    temp0.x = 1.0f / filter_color_texture_size.x;\n    // rcp r0.z, c7.x\n    temp0.z = 1.0f / ref_noise_settings_a.x;\n    // mul r0.zw, r0.z, c4.xyxy\n    temp0.zw = temp0.zz * render_target_size.xy;\n    // mul r0.x, r0.x, r0.z\n    temp0.x = temp0.x * temp0.z;\n    // mul r2.x, r0.x, v1.x\n    temp2.x = temp0.x * i.texcoord.x;\n    // rcp r0.x, c5.y\n    temp0.x = 1.0f / filter_color_texture_size.y;\n    // mul r0.x, r0.x, r0.w\n    temp0.x = temp0.x * temp0.w;\n    // mul r2.y, r0.x, v1.y\n    temp2.y = temp0.x * i.texcoord.y;\n    // mad o2.xy, r1, c7.z, r2\n    o.texcoord1.xy = temp1.xy * ref_noise_settings_a.zz + temp2.xy;\n    // dp4 r1.y, v0, c1\n    temp1.y = dot(i.position, (view_proj_matrix._m01_m11_m21_m31));\n    // mul o2.w, r0.y, r1.y\n    o.texcoord1.w = temp0.y * temp1.y;\n    // mov o0.z, c9.x\n    o.position.z = float1(1);\n    // dp4 r1.x, v0, c0\n    temp1.x = dot(i.position, (view_proj_matrix._m00_m10_m20_m30));\n    // mov o0.xy, r1\n    o.position.xy = temp1.xy;\n    // mov o2.z, r1.x\n    o.texcoord1.z = temp1.x;\n    // mov o1.xy, v1\n    o.texcoord = i.texcoord;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."),(0,o.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"sampler2D diffuse_texture : register(ps_3_0, s0);\nsampler2D filter_color_texture : register(ps_3_0, s1);\nfloat3 ref_noise_settings_b : register(ps_3_0, c2);\nfloat3 ref_scanline_settings : register(ps_3_0, c1);\nfloat3 ref_vignette_settings_a : register(ps_3_0, c3);\nfloat3 ref_vignette_settings_b : register(ps_3_0, c4);\nfloat3 render_target_size : register(ps_3_0, c0);\nstruct PixelMain_Input\n{\n    float2 texcoord : TEXCOORD;\n    float4 texcoord1 : TEXCOORD1;\n};\n\nfloat4 PixelMain(PixelMain_Input i) : COLOR\n{\n    float4 out_color;\n    float4 temp0, temp1, temp2;\n    // def c5, 0.5, 2, 0, -3\n    // def c6, -1, 1, 0, 0\n    // dcl_texcoord v0.xy\n    // dcl_texcoord1 v1\n    // dcl_2d s0\n    // dcl_2d s1\n    // rcp r0.x, c1.x\n    temp0.x = 1.0f / ref_scanline_settings.x;\n    // mul r0.x, r0.x, c0.y\n    temp0.x = temp0.x * render_target_size.y;\n    // mul r0.x, r0.x, v0.y\n    temp0.x = temp0.x * i.texcoord.y;\n    // frc r0.y, r0.x\n    temp0.y = frac(temp0.x);\n    // add r0.x, -r0.y, r0.x\n    temp0.x = -temp0.y + temp0.x;\n    // mul r0.y, r0.x, c5.x\n    temp0.y = temp0.x * float1(0.5);\n    // frc r0.y, r0_abs.y\n    temp0.y = frac(abs(temp0).y);\n    // cmp r0.x, r0.x, r0.y, -r0.y\n    temp0.x = (temp0.x >= 0) ? temp0.y : -temp0.y;\n    // rcp r0.y, c0.y\n    temp0.y = 1.0f / render_target_size.y;\n    // mad r0.x, r0.x, c5.y, -r0.y\n    temp0.x = temp0.x * float1(2) + -temp0.y;\n    // texld r1, v1, s1\n    temp1 = tex2D(filter_color_texture, i.texcoord1.xy);\n    // add r0.y, r1.z, c6.x\n    temp0.y = temp1.z + float1(-1);\n    // mov r1.y, c2.y\n    temp1.y = ref_noise_settings_b.y;\n    // mad r0.y, r1.y, r0.y, c6.y\n    temp0.y = temp1.y * temp0.y + float1(1);\n    // mul r0.y, r0.y, c1.y\n    temp0.y = temp0.y * ref_scanline_settings.y;\n    // cmp r0.x, r0.x, r0.y, c5.z\n    temp0.x = (temp0.x >= 0) ? temp0.y : float1(0);\n    // texld_pp r2, v0, s0\n    temp2 = /* not implemented _pp modifier */ tex2D(diffuse_texture, i.texcoord.xy);\n    // mad r1, r1.z, c2.x, r2.xyzz\n    temp1 = temp1.z * ref_noise_settings_b.x + temp2.xyzz;\n    // add r0, r0.x, r1\n    temp0 = temp0.x + temp1;\n    // dp2add r1.x, v1.zwzw, v1.zwzw, c5.z\n    temp1.x = dot(i.texcoord1.zw, i.texcoord1.zw) + float1(0);\n    // rsq r1.x, r1.x\n    temp1.x = 1 / sqrt(temp1.x);\n    // rcp r1.x, r1.x\n    temp1.x = 1.0f / temp1.x;\n    // add r1.x, r1.x, -c3.x\n    temp1.x = temp1.x + -ref_vignette_settings_a.x;\n    // add r1.y, -c3.x, c3.y\n    temp1.y = -ref_vignette_settings_a.x + ref_vignette_settings_a.y;\n    // rcp r1.y, r1.y\n    temp1.y = 1.0f / temp1.y;\n    // mul_sat r1.x, r1.y, r1.x\n    temp1.x = saturate(temp1.y * temp1.x);\n    // mad r1.y, r1.x, -c5.y, -c5.w\n    temp1.y = temp1.x * float1(-2) + float1(3);\n    // mul r1.x, r1.x, r1.x\n    temp1.x = temp1.x * temp1.x;\n    // mul r1.x, r1.x, r1.y\n    temp1.x = temp1.x * temp1.y;\n    // mov r1.y, c6.y\n    temp1.y = float1(1);\n    // lrp r2.x, r1.x, r1.y, c4.x\n    temp2.x = lerp(ref_vignette_settings_b.x, temp1.y, temp1.x);\n    // mul_pp oC0, r0, r2.x\n    out_color = /* not implemented _pp modifier */ temp0 * temp2.x;\n    // \n\n    return out_color;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."))}d.isMDXComponent=!0}}]);