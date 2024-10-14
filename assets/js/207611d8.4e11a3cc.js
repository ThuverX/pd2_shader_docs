"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[114],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>x});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):m(m({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},_=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=l(r),_=a,x=c["".concat(i,".").concat(_)]||c[_]||s[_]||o;return r?n.createElement(x,m(m({ref:t},d),{},{components:r})):n.createElement(x,m({ref:t},d))}));function x(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,m=new Array(o);m[0]=_;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:a,m[1]=p;for(var l=2;l<o;l++)m[l]=r[l];return n.createElement.apply(null,m)}return n.createElement.apply(null,r)}_.displayName="MDXCreateElement"},5059:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>m,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={id:884391017610587e4,title:"Omni Default"},m="Omni Default",p={unversionedId:"Generated/Shaders/Deferred Lighting/8843910176105870000",id:"Generated/Shaders/Deferred Lighting/8843910176105870000",title:"Omni Default",description:"(omni:default, 0x7abbe172b840b368)",source:"@site/docs/Generated/Shaders/Deferred Lighting/0x7abbe172b840b368.mdx",sourceDirName:"Generated/Shaders/Deferred Lighting",slug:"/Generated/Shaders/Deferred Lighting/8843910176105870000",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Deferred Lighting/8843910176105870000",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/Generated/Shaders/Deferred Lighting/0x7abbe172b840b368.mdx",tags:[],version:"current",frontMatter:{id:"8843910176105870000",title:"Omni Default"},sidebar:"docsSidebar",previous:{title:"Global Lighting Default Hq Nvdbt",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Deferred Lighting/8558452228730316000"},next:{title:"Ambocc Depth Downscale Default",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Deferred Lighting/8930626724205090000"}},i={},l=[{value:"Technique <code>ambient</code>",id:"technique-ambient",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Sampler 1",id:"sampler-1",level:4},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],d={toc:l},c="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"omni-default"},"Omni Default"),(0,a.kt)("p",null,"(",(0,a.kt)("inlineCode",{parentName:"p"},"omni:default"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"0x7abbe172b840b368"),")"),(0,a.kt)("p",null,"This template is referenced 1 time by ",(0,a.kt)("a",{parentName:"p",href:"/docs/Generated/Render%20Templates/deferred_lighting.render_template_database#omni"},"omni"),"."),(0,a.kt)("h3",{id:"technique-ambient"},"Technique ",(0,a.kt)("inlineCode",{parentName:"h3"},"ambient")),(0,a.kt)("h3",{id:"render-states"},"Render States"),(0,a.kt)("p",null,"More info can be found on the ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3drenderstatetype"},"Direct3D Docs")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_STENCILENABLE = 1,\n    D3DRS_STENCILFUNC = 6,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = -1,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 5,\n    D3DRS_STENCILWRITEMASK = 255,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZWRITEENABLE = 0,\n    D3DRS_ALPHABLENDENABLE = 1,\n    D3DRS_BLENDOP = 1,\n    D3DRS_SRCBLEND = 2,\n    D3DRS_DESTBLEND = 2,\n    D3DRS_COLORWRITEENABLE = 7,\n};\n")),(0,a.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,a.kt)("p",null,"More info can be found on the ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3dsamplerstatetype"},"Direct3D Docs")),(0,a.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 3,\n    D3DSAMP_ADDRESSV = 3,\n    D3DSAMP_MAGFILTER = 1,\n    D3DSAMP_MINFILTER = 1,\n    D3DSAMP_MIPFILTER = 1,\n};\n")),(0,a.kt)("h4",{id:"sampler-1"},"Sampler 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 3,\n    D3DSAMP_ADDRESSV = 3,\n    D3DSAMP_MAGFILTER = 1,\n    D3DSAMP_MINFILTER = 1,\n    D3DSAMP_MIPFILTER = 1,\n};\n")),(0,a.kt)("h3",{id:"shaders"},"Shaders"),(0,a.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hlsl"},"column_major float4x4 camera_inv_view_matrix : register(vs_3_0, c4);\nfloat3 camera_unprojection : register(vs_3_0, c9);\nfloat ref_omni_scale : register(vs_3_0, c7);\nfloat3 render_target_texel_offset : register(vs_3_0, c8);\ncolumn_major float4x4 view_proj_matrix : register(vs_3_0, c0);\nfloat3 vp_offset : register(vs_3_0, c10);\nfloat3 vp_size : register(vs_3_0, c11);\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float4 texcoord : TEXCOORD;\n    float4 texcoord1 : TEXCOORD1;\n};\n\nVertexMain_Output VertexMain(float4 position : POSITION)\n{\n    VertexMain_Output o;\n    float4 temp0, temp1;\n    float3 temp2;\n    // def c12, 1, 2, -1, 0.5\n    // dcl_position v0\n    // dcl_position o0\n    // dcl_texcoord o1\n    // dcl_texcoord1 o2\n    // mul r0.xyz, c7.x, v0\n    temp0.xyz = ref_omni_scale.xxx * position.xyz;\n    // mov r0.w, c12.x\n    temp0.w = float1(1);\n    // dp4 r1.x, r0, c0\n    temp1.x = dot(temp0, (view_proj_matrix._m00_m10_m20_m30));\n    // dp4 r1.y, r0, c1\n    temp1.y = dot(temp0, (view_proj_matrix._m01_m11_m21_m31));\n    // mul r2.xy, r1, c9\n    temp2.xy = temp1.xy * camera_unprojection.xy;\n    // dp4 r2.z, r0, c3\n    temp2.z = dot(temp0, (view_proj_matrix._m03_m13_m23_m33));\n    // dp4 r1.z, r0, c2\n    temp1.z = dot(temp0, (view_proj_matrix._m02_m12_m22_m32));\n    // dp3 o2.x, r2, c4\n    o.texcoord1.x = dot(temp2.xyz, (camera_inv_view_matrix._m00_m10_m20_m30).xyz);\n    // dp3 o2.y, r2, c5\n    o.texcoord1.y = dot(temp2.xyz, (camera_inv_view_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o2.z, r2, c6\n    o.texcoord1.z = dot(temp2.xyz, (camera_inv_view_matrix._m02_m12_m22_m32).xyz);\n    // mov r0.yw, c12\n    temp0.yw = float2(2, 0.5);\n    // mov r2.xy, c11\n    temp2.xy = vp_size.xy;\n    // mad r0.xy, c10, r0.y, r2\n    temp0.xy = vp_offset.xy * temp0.yy + temp2.xy;\n    // add r0.xy, r0, c12.z\n    temp0.xy = temp0.xy + float2(-1, -1);\n    // mul r0.xy, r0, r2.z\n    temp0.xy = temp0.xy * temp2.zz;\n    // mad r2.x, r1.x, c11.x, r0.x\n    temp2.x = temp1.x * vp_size.x + temp0.x;\n    // mad r2.y, r1.y, -c11.y, r0.y\n    temp2.y = temp1.y * -vp_size.y + temp0.y;\n    // add r0.xy, r0.w, c8\n    temp0.xy = temp0.ww + render_target_texel_offset.xy;\n    // add r0.z, r2.z, r2.z\n    temp0.z = temp2.z + temp2.z;\n    // mov r1.w, r2.z\n    temp1.w = temp2.z;\n    // mad o1.xy, r0, r0.z, r2\n    o.texcoord.xy = temp0.xy * temp0.zz + temp2.xy;\n    // mov o1.w, r0.z\n    o.texcoord.w = temp0.z;\n    // mov o0, r1\n    o.position = temp1;\n    // mov o2.w, r1.w\n    o.texcoord1.w = temp1.w;\n    // mov o1.z, r1.z\n    o.texcoord.z = temp1.z;\n    // \n\n    return o;\n}\n")),(0,a.kt)("p",null,"Decompiled by DXDecompiler."),(0,a.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hlsl"},"column_major float4x4 camera_world_matrix : register(ps_3_0, c0);\nsampler2D depth : register(ps_3_0, s1);\nsampler2D normal : register(ps_3_0, s0);\nfloat3 ref_light_color : register(ps_3_0, c4);\nfloat ref_light_falloff : register(ps_3_0, c3);\nfloat3 ref_light_position : register(ps_3_0, c5);\nstruct PixelMain_Input\n{\n    float4 texcoord : TEXCOORD;\n    float4 texcoord1 : TEXCOORD1;\n};\n\nfloat4 PixelMain(PixelMain_Input i) : COLOR\n{\n    float4 out_color;\n    float4 temp0, temp1;\n    float3 temp2;\n    // def c6, 1, -0.5, 0.0001, 0\n    // dcl_texcoord v0.xyw\n    // dcl_texcoord1 v1\n    // dcl_2d s0\n    // dcl_2d s1\n    // rcp r0.x, v0.w\n    temp0.x = 1.0f / i.texcoord.w;\n    // mul r0.xy, r0.x, v0\n    temp0.xy = temp0.xx * i.texcoord.xy;\n    // texld r1, r0, s1\n    temp1 = tex2D(depth, temp0.xy);\n    // texld r0, r0, s0\n    temp0 = tex2D(normal, temp0.xy);\n    // add r0.xyz, r0, c6.y\n    temp0.xyz = temp0.xyz + float3(-0.5, -0.5, -0.5);\n    // add r0.xyz, r0, r0\n    temp0.xyz = temp0.xyz + temp0.xyz;\n    // rcp r0.w, v1.w\n    temp0.w = 1.0f / i.texcoord1.w;\n    // mul r1.yzw, r0.w, v1.xxyz\n    temp1.yzw = temp0.www * i.texcoord1.xyz;\n    // mad r2.x, r1.y, r1.x, c0.w\n    temp2.x = temp1.y * temp1.x + (camera_world_matrix._m00_m10_m20_m30).w;\n    // mad r2.y, r1.z, r1.x, c1.w\n    temp2.y = temp1.z * temp1.x + (camera_world_matrix._m01_m11_m21_m31).w;\n    // mad r2.z, r1.w, r1.x, c2.w\n    temp2.z = temp1.w * temp1.x + (camera_world_matrix._m02_m12_m22_m32).w;\n    // add r1.xyz, -r2, c5\n    temp1.xyz = -temp2.xyz + ref_light_position.xyz;\n    // dp3 r0.w, r1, r1\n    temp0.w = dot(temp1.xyz, temp1.xyz);\n    // rsq r0.w, r0.w\n    temp0.w = 1 / sqrt(temp0.w);\n    // rcp r0.w, r0.w\n    temp0.w = 1.0f / temp0.w;\n    // add r1.w, r0.w, c6.z\n    temp1.w = temp0.w + float1(0.0001);\n    // mov r2.x, c6.x\n    temp2.x = float1(1);\n    // mad_sat r0.w, r0.w, -c3.x, r2.x\n    temp0.w = saturate(temp0.w * -ref_light_falloff.x + temp2.x);\n    // rcp r1.w, r1.w\n    temp1.w = 1.0f / temp1.w;\n    // mul r1.xyz, r1.w, r1\n    temp1.xyz = temp1.www * temp1.xyz;\n    // dp3_sat r0.x, r1, r0\n    temp0.x = saturate(dot(temp1.xyz, temp0.xyz));\n    // mul r0.x, r0.w, r0.x\n    temp0.x = temp0.w * temp0.x;\n    // mul oC0, r0.x, c4.xyzz\n    out_color = temp0.x * ref_light_color.xyzz;\n    // \n\n    return out_color;\n}\n")),(0,a.kt)("p",null,"Decompiled by DXDecompiler."))}s.isMDXComponent=!0}}]);