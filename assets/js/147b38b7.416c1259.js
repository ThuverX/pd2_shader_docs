"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[29257],{603905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>x});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),m=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=m(e.components);return n.createElement(d.Provider,{value:t},e.children)},i="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},D=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),i=m(r),D=a,x=i["".concat(d,".").concat(D)]||i[D]||c[D]||o;return r?n.createElement(x,p(p({ref:t},s),{},{components:r})):n.createElement(x,p({ref:t},s))}));function x(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=D;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[i]="string"==typeof e?e:a,p[1]=l;for(var m=2;m<o;m++)p[m]=r[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}D.displayName="MDXCreateElement"},942950:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var n=r(487462),a=(r(667294),r(603905));const o={id:0xfbd2c1912d45b000,title:"Post Dof Default Vr"},p="Post Dof Default Vr",l={unversionedId:"Generated/Shaders/Post/18145778677903110000",id:"Generated/Shaders/Post/18145778677903110000",title:"Post Dof Default Vr",description:"(post_DOFVR, 0xfbd2c1912d45b0c9)",source:"@site/docs/Generated/Shaders/Post/0xfbd2c1912d45b0c9.mdx",sourceDirName:"Generated/Shaders/Post",slug:"/Generated/Shaders/Post/18145778677903110000",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Post/18145778677903110000",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/Generated/Shaders/Post/0xfbd2c1912d45b0c9.mdx",tags:[],version:"current",frontMatter:{id:"18145778677903110000",title:"Post Dof Default Vr"},sidebar:"docsSidebar",previous:{title:"Occluder Visualization Default Albedo",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Post/17981847172465370000"},next:{title:"Post Night Vision Default",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Post/18148299450707024000"}},d={},m=[{value:"Technique <code>ambient</code>",id:"technique-ambient",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Sampler 1",id:"sampler-1",level:4},{value:"Sampler 2",id:"sampler-2",level:4},{value:"Sampler 3",id:"sampler-3",level:4},{value:"Sampler 4",id:"sampler-4",level:4},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],s={toc:m},i="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(i,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"post-dof-default-vr"},"Post Dof Default Vr"),(0,a.kt)("p",null,"(",(0,a.kt)("inlineCode",{parentName:"p"},"post_DOF:default:VR"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"0xfbd2c1912d45b0c9"),")"),(0,a.kt)("p",null,"This template is referenced 1 time by ",(0,a.kt)("a",{parentName:"p",href:"/docs/Generated/Render%20Templates/post.render_template_database#post-dof-vr"},"post_DOF:VR"),"."),(0,a.kt)("h3",{id:"technique-ambient"},"Technique ",(0,a.kt)("inlineCode",{parentName:"h3"},"ambient")),(0,a.kt)("h3",{id:"render-states"},"Render States"),(0,a.kt)("p",null,"More info can be found on the ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3drenderstatetype"},"Direct3D Docs")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 0,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 0,\n    D3DRS_ALPHABLENDENABLE = 0,\n    D3DRS_CULLMODE = 1,\n    D3DRS_COLORWRITEENABLE = 15,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n};\n")),(0,a.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,a.kt)("p",null,"More info can be found on the ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3dsamplerstatetype"},"Direct3D Docs")),(0,a.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 3,\n    D3DSAMP_ADDRESSV = 3,\n    D3DSAMP_MAGFILTER = 2,\n    D3DSAMP_MINFILTER = 2,\n    D3DSAMP_MIPFILTER = 2,\n};\n")),(0,a.kt)("h4",{id:"sampler-1"},"Sampler 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 3,\n    D3DSAMP_ADDRESSV = 3,\n    D3DSAMP_MAGFILTER = 2,\n    D3DSAMP_MINFILTER = 2,\n    D3DSAMP_MIPFILTER = 2,\n};\n")),(0,a.kt)("h4",{id:"sampler-2"},"Sampler 2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 3,\n    D3DSAMP_ADDRESSV = 3,\n    D3DSAMP_MAGFILTER = 2,\n    D3DSAMP_MINFILTER = 2,\n    D3DSAMP_MIPFILTER = 2,\n};\n")),(0,a.kt)("h4",{id:"sampler-3"},"Sampler 3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 3,\n    D3DSAMP_ADDRESSV = 3,\n    D3DSAMP_MAGFILTER = 2,\n    D3DSAMP_MINFILTER = 2,\n    D3DSAMP_MIPFILTER = 2,\n};\n")),(0,a.kt)("h4",{id:"sampler-4"},"Sampler 4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 3,\n    D3DSAMP_ADDRESSV = 3,\n    D3DSAMP_MAGFILTER = 2,\n    D3DSAMP_MINFILTER = 2,\n    D3DSAMP_MIPFILTER = 2,\n};\n")),(0,a.kt)("h3",{id:"shaders"},"Shaders"),(0,a.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hlsl"},"float3 render_target_size : register(vs_3_0, c4);\ncolumn_major float4x4 view_proj_matrix : register(vs_3_0, c0);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 texcoord : TEXCOORD;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float2 texcoord : TEXCOORD;\n    float4 texcoord1 : TEXCOORD1;\n    float4 texcoord2 : TEXCOORD2;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float4 temp0;\n    // def c5, 1, 0, 0, 0\n    // def c6, 0.375, -1.125, 1.125, -0.375\n    // dcl_position v0\n    // dcl_texcoord v1\n    // dcl_position o0\n    // dcl_texcoord o1.xy\n    // dcl_texcoord1 o2\n    // dcl_texcoord2 o3\n    // dp4 o0.x, v0, c0\n    o.position.x = dot(i.position, (view_proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, v0, c1\n    o.position.y = dot(i.position, (view_proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.w, v0, c3\n    o.position.w = dot(i.position, (view_proj_matrix._m03_m13_m23_m33));\n    // rcp r0.xz, c4.x\n    temp0.xz = 1.0f / render_target_size.x;\n    // rcp r0.yw, c4.y\n    temp0.yw = 1.0f / render_target_size.y;\n    // mul o2, r0.zwzw, c6.xyzx\n    o.texcoord1 = temp0.zwzw * float4(0.375, -1.125, 1.125, 0.375);\n    // mul o3, r0, c6.wzyw\n    o.texcoord2 = temp0 * float4(-0.375, 1.125, -1.125, -0.375);\n    // mov o0.z, c5.x\n    o.position.z = float1(1);\n    // mov o1.xy, v1\n    o.texcoord = i.texcoord;\n    // \n\n    return o;\n}\n")),(0,a.kt)("p",null,"Decompiled by DXDecompiler."),(0,a.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hlsl"},"sampler2D depth : register(ps_3_0, s3);\nsampler2D diffuse_texture : register(ps_3_0, s0);\nsampler2D filter_color_texture : register(ps_3_0, s2);\nsampler2D opacity_texture : register(ps_3_0, s4);\nfloat3 ref_far_plane : register(ps_3_0, c0);\nfloat3 ref_settings : register(ps_3_0, c1);\nsampler2D self_illumination_texture : register(ps_3_0, s1);\nstruct PixelMain_Input\n{\n    float2 texcoord : TEXCOORD;\n    float4 texcoord1 : TEXCOORD1;\n    float4 texcoord2 : TEXCOORD2;\n};\n\nfloat4 PixelMain(PixelMain_Input i) : COLOR\n{\n    float4 out_color;\n    float4 temp0, temp1, temp2, temp3, temp4, temp5;\n    // def c2, 1, 0.2, 1.1, -0.1\n    // dcl_texcoord v0.xy\n    // dcl_texcoord1 v1\n    // dcl_texcoord2 v2\n    // dcl_2d s0\n    // dcl_2d s1\n    // dcl_2d s2\n    // dcl_2d s3\n    // dcl_2d s4\n    // texld r0, v0, s3\n    temp0 = tex2D(depth, i.texcoord.xy);\n    // add r0.x, r0.x, -c0.x\n    temp0.x = temp0.x + -ref_far_plane.x;\n    // rcp r0.y, c0.y\n    temp0.y = 1.0f / ref_far_plane.y;\n    // mul_sat r0.x, r0.y, r0.x\n    temp0.x = saturate(temp0.y * temp0.x);\n    // mul_sat r0.x, r0.x, c0.z\n    temp0.x = saturate(temp0.x * ref_far_plane.z);\n    // add r0.x, r0.x, r0.x\n    temp0.x = temp0.x + temp0.x;\n    // mov r1.xy, v0\n    temp1.xy = i.texcoord.xy;\n    // mad r2, v1, r0.x, r1.xyxy\n    temp2 = i.texcoord1 * temp0.x + temp1.xyxy;\n    // mad r0, v2, r0.x, r1.xyxy\n    temp0 = i.texcoord2 * temp0.x + temp1.xyxy;\n    // texld r3, r2, s0\n    temp3 = tex2D(diffuse_texture, temp2.xy);\n    // texld r2, r2.zwzw, s0\n    temp2 = tex2D(diffuse_texture, temp2.zw);\n    // texld r4, v0, s0\n    temp4 = tex2D(diffuse_texture, i.texcoord.xy);\n    // add r3, r3.xyzz, r4.xyzz\n    temp3 = temp3.xyzz + temp4.xyzz;\n    // add r2, r2.xyzz, r3\n    temp2 = temp2.xyzz + temp3;\n    // texld r3, r0, s0\n    temp3 = tex2D(diffuse_texture, temp0.xy);\n    // texld r0, r0.zwzw, s0\n    temp0 = tex2D(diffuse_texture, temp0.zw);\n    // add r2, r2, r3.xyzz\n    temp2 = temp2 + temp3.xyzz;\n    // add r0, r0.xyzz, r2\n    temp0 = temp0.xyzz + temp2;\n    // mul r2, r0, c2.y\n    temp2 = temp0 * float4(0.2, 0.2, 0.2, 0.2);\n    // texld r3, v0, s4\n    temp3 = tex2D(opacity_texture, i.texcoord.xy);\n    // add r4, r1.xyxy, v1\n    temp4 = temp1.xyxy + i.texcoord1;\n    // texld r5, r4, s4\n    temp5 = tex2D(opacity_texture, temp4.xy);\n    // texld r4, r4.zwzw, s4\n    temp4 = tex2D(opacity_texture, temp4.zw);\n    // add r0.z, r3.w, r5.w\n    temp0.z = temp3.w + temp5.w;\n    // add r0.z, r4.w, r0.z\n    temp0.z = temp4.w + temp0.z;\n    // add r1, r1.xyxy, v2\n    temp1 = temp1.xyxy + i.texcoord2;\n    // texld r3, r1, s4\n    temp3 = tex2D(opacity_texture, temp1.xy);\n    // texld r1, r1.zwzw, s4\n    temp1 = tex2D(opacity_texture, temp1.zw);\n    // add r0.z, r0.z, r3.w\n    temp0.z = temp0.z + temp3.w;\n    // add r0.z, r1.w, r0.z\n    temp0.z = temp1.w + temp0.z;\n    // mad r0.z, r0.z, -c2.y, c2.x\n    temp0.z = temp0.z * float1(-0.2) + float1(1);\n    // texld r1, v0, s1\n    temp1 = tex2D(self_illumination_texture, i.texcoord.xy);\n    // add r1.w, -r1.w, c2.x\n    temp1.w = -temp1.w + float1(1);\n    // mad r3, r0.xyww, -c2.y, r1.xyzz\n    temp3 = temp0.xyww * float4(-0.2, -0.2, -0.2, -0.2) + temp1.xyzz;\n    // mad_sat r0.x, r1.w, c2.z, c2.w\n    temp0.x = saturate(temp1.w * float1(1.1) + float1(-0.1));\n    // add r0.x, r0.x, c1.x\n    temp0.x = temp0.x + ref_settings.x;\n    // add_sat r0.x, r0.x, c1.y\n    temp0.x = saturate(temp0.x + ref_settings.y);\n    // mul r0.x, r0.x, r0.z\n    temp0.x = temp0.x * temp0.z;\n    // mad r0, r0.x, r3, r2\n    temp0 = temp0.x * temp3 + temp2;\n    // texld r1, v0, s2\n    temp1 = tex2D(filter_color_texture, i.texcoord.xy);\n    // add r0, r0, r1.xyzz\n    temp0 = temp0 + temp1.xyzz;\n    // mul oC0, r1.w, r0\n    out_color = temp1.w * temp0;\n    // \n\n    return out_color;\n}\n")),(0,a.kt)("p",null,"Decompiled by DXDecompiler."))}c.isMDXComponent=!0}}]);