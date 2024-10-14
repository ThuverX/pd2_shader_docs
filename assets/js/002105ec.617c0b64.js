"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[1321],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>x});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},i=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",_={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,i=m(e,["components","mdxType","originalType","parentName"]),c=d(r),s=a,x=c["".concat(l,".").concat(s)]||c[s]||_[s]||o;return r?n.createElement(x,p(p({ref:t},i),{},{components:r})):n.createElement(x,p({ref:t},i))}));function x(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=s;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m[c]="string"==typeof e?e:a,p[1]=m;for(var d=2;d<o;d++)p[d]=r[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},7484:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>_,frontMatter:()=>o,metadata:()=>m,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const o={id:0x70d32e8dc05e7000,title:"Radial Blur Default"},p="Radial Blur Default",m={unversionedId:"Generated/Shaders/Filters/8129892938686558000",id:"Generated/Shaders/Filters/8129892938686558000",title:"Radial Blur Default",description:"(radial_blur:default, 0x70d32e8dc05e70a0)",source:"@site/docs/Generated/Shaders/Filters/0x70d32e8dc05e70a0.mdx",sourceDirName:"Generated/Shaders/Filters",slug:"/Generated/Shaders/Filters/8129892938686558000",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Filters/8129892938686558000",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/Generated/Shaders/Filters/0x70d32e8dc05e70a0.mdx",tags:[],version:"current",frontMatter:{id:"8129892938686558000",title:"Radial Blur Default"},sidebar:"docsSidebar",previous:{title:"Identity Left Default",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Filters/7722629635250859000"},next:{title:"Bink Frame Old Default",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Filters/8175762766391443000"}},l={},d=[{value:"Technique <code>ambient</code>",id:"technique-ambient",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],i={toc:d},c="wrapper";function _(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"radial-blur-default"},"Radial Blur Default"),(0,a.kt)("p",null,"(",(0,a.kt)("inlineCode",{parentName:"p"},"radial_blur:default"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"0x70d32e8dc05e70a0"),")"),(0,a.kt)("p",null,"This template is referenced 1 time by ",(0,a.kt)("a",{parentName:"p",href:"/docs/Generated/Render%20Templates/filters.render_template_database#radial-blur"},"radial_blur"),"."),(0,a.kt)("h3",{id:"technique-ambient"},"Technique ",(0,a.kt)("inlineCode",{parentName:"h3"},"ambient")),(0,a.kt)("h3",{id:"render-states"},"Render States"),(0,a.kt)("p",null,"More info can be found on the ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3drenderstatetype"},"Direct3D Docs")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 0,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 0,\n    D3DRS_ALPHABLENDENABLE = 0,\n    D3DRS_CULLMODE = 1,\n    D3DRS_COLORWRITEENABLE = 15,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n};\n")),(0,a.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,a.kt)("p",null,"More info can be found on the ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3dsamplerstatetype"},"Direct3D Docs")),(0,a.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 3,\n    D3DSAMP_ADDRESSV = 3,\n    D3DSAMP_MAGFILTER = 2,\n    D3DSAMP_MINFILTER = 2,\n    D3DSAMP_MIPFILTER = 2,\n};\n")),(0,a.kt)("h3",{id:"shaders"},"Shaders"),(0,a.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hlsl"},"column_major float4x4 camera_proj_matrix : register(vs_3_0, c8);\ncolumn_major float4x4 camera_view_matrix : register(vs_3_0, c4);\nfloat3 ref_world_pos : register(vs_3_0, c15);\nfloat3 render_target_texel_offset : register(vs_3_0, c12);\ncolumn_major float4x4 view_proj_matrix : register(vs_3_0, c0);\nfloat3 vp_offset : register(vs_3_0, c13);\nfloat3 vp_size : register(vs_3_0, c14);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 texcoord : TEXCOORD;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float2 texcoord : TEXCOORD;\n    float4 texcoord1 : TEXCOORD1;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float4 temp0, temp1, temp2;\n    // def c16, 1, 0, 2, -1\n    // def c17, 0.5, 0, 0, 0\n    // dcl_position v0\n    // dcl_texcoord v1\n    // dcl_position o0\n    // dcl_texcoord o1.xy\n    // dcl_texcoord1 o2\n    // dp4 o0.x, v0, c0\n    o.position.x = dot(i.position, (view_proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, v0, c1\n    o.position.y = dot(i.position, (view_proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.z, v0, c2\n    o.position.z = dot(i.position, (view_proj_matrix._m02_m12_m22_m32));\n    // dp4 o0.w, v0, c3\n    o.position.w = dot(i.position, (view_proj_matrix._m03_m13_m23_m33));\n    // mov r0.xyz, c16\n    temp0.xyz = float3(1, 0, 2);\n    // mad r1, c15.xyzx, r0.xxxy, r0.yyyx\n    temp1 = ref_world_pos.xyzx * temp0.xxxy + temp0.yyyx;\n    // dp4 r2.x, r1, c4\n    temp2.x = dot(temp1, (camera_view_matrix._m00_m10_m20_m30));\n    // dp4 r2.y, r1, c5\n    temp2.y = dot(temp1, (camera_view_matrix._m01_m11_m21_m31));\n    // dp4 r2.z, r1, c6\n    temp2.z = dot(temp1, (camera_view_matrix._m02_m12_m22_m32));\n    // dp4 r2.w, r1, c7\n    temp2.w = dot(temp1, (camera_view_matrix._m03_m13_m23_m33));\n    // dp4 o2.z, r2, c10\n    o.texcoord1.z = dot(temp2, (camera_proj_matrix._m02_m12_m22_m32));\n    // mov r0.xy, c14\n    temp0.xy = vp_size.xy;\n    // mad r0.xy, c13, r0.z, r0\n    temp0.xy = vp_offset.xy * temp0.zz + temp0.xy;\n    // add r0.xy, r0, c16.w\n    temp0.xy = temp0.xy + float2(-1, -1);\n    // dp4 r0.z, r2, c11\n    temp0.z = dot(temp2, (camera_proj_matrix._m03_m13_m23_m33));\n    // mul r0.xy, r0, r0.z\n    temp0.xy = temp0.xy * temp0.zz;\n    // add r0.z, r0.z, r0.z\n    temp0.z = temp0.z + temp0.z;\n    // dp4 r0.w, r2, c8\n    temp0.w = dot(temp2, (camera_proj_matrix._m00_m10_m20_m30));\n    // dp4 r1.x, r2, c9\n    temp1.x = dot(temp2, (camera_proj_matrix._m01_m11_m21_m31));\n    // mad r0.y, r1.x, -c14.y, r0.y\n    temp0.y = temp1.x * -vp_size.y + temp0.y;\n    // mad r0.x, r0.w, c14.x, r0.x\n    temp0.x = temp0.w * vp_size.x + temp0.x;\n    // mov r1.x, c17.x\n    temp1.x = float1(0.5);\n    // add r1.xy, r1.x, c12\n    temp1.xy = temp1.xx + render_target_texel_offset.xy;\n    // mad o2.x, r0.z, r1.x, r0.x\n    o.texcoord1.x = temp0.z * temp1.x + temp0.x;\n    // mad o2.y, r0.z, r1.y, r0.y\n    o.texcoord1.y = temp0.z * temp1.y + temp0.y;\n    // mov o2.w, r0.z\n    o.texcoord1.w = temp0.z;\n    // mov o1.xy, v1\n    o.texcoord = i.texcoord;\n    // \n\n    return o;\n}\n")),(0,a.kt)("p",null,"Decompiled by DXDecompiler."),(0,a.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hlsl"},"sampler2D diffuse_texture : register(ps_3_0, s0);\nfloat ref_falloff_exponent : register(ps_3_0, c2);\nfloat ref_kernel_size : register(ps_3_0, c1);\nfloat ref_opacity : register(ps_3_0, c3);\nfloat3 render_target_size : register(ps_3_0, c0);\nstruct PixelMain_Input\n{\n    float2 texcoord : TEXCOORD;\n    float4 texcoord1 : TEXCOORD1;\n};\n\nfloat4 PixelMain(PixelMain_Input i) : COLOR\n{\n    float4 out_color;\n    float4 temp0, temp1, temp3;\n    float3 temp2;\n    // def c4, 0, 1, 0, 0\n    // def c5, 0.125, 0, -0.0001, -13.287712\n    // defi i0, 8, 0, 0, 0\n    // dcl_texcoord v0.xy\n    // dcl_texcoord1 v1.xyw\n    // dcl_2d s0\n    // rcp r0.x, c0.x\n    temp0.x = 1.0f / render_target_size.x;\n    // rcp r0.y, c0.y\n    temp0.y = 1.0f / render_target_size.y;\n    // mov r1.x, c5.x\n    temp1.x = float1(0.125);\n    // mul r0.z, r1.x, c1.x\n    temp0.z = temp1.x * ref_kernel_size.x;\n    // rcp r0.w, v1.w\n    temp0.w = 1.0f / i.texcoord1.w;\n    // mov r1.xy, v0\n    temp1.xy = i.texcoord.xy;\n    // mad r1.xy, v1, -r0.w, r1\n    temp1.xy = i.texcoord1.xy * -temp0.ww + temp1.xy;\n    // dp2add r0.w, r1, r1, c5.y\n    temp0.w = dot(temp1.xy, temp1.xy) + float1(0);\n    // rsq r0.w, r0.w\n    temp0.w = 1 / sqrt(temp0.w);\n    // rcp r1.z, r0.w\n    temp1.z = 1.0f / temp0.w;\n    // mul r1.xy, r0.w, r1\n    temp1.xy = temp0.ww * temp1.xy;\n    // add r0.w, r1.z, c5.z\n    temp0.w = temp1.z + float1(-0.0001);\n    // log r1.z, r1.z\n    temp1.z = log2(temp1.z);\n    // cmp r0.w, r0.w, r1.z, c5.w\n    temp0.w = (temp0.w >= 0) ? temp1.z : float1(-13.287712);\n    // mul r0.w, r0.w, c2.x\n    temp0.w = temp0.w * ref_falloff_exponent.x;\n    // exp_sat r0.w, r0.w\n    temp0.w = saturate(exp2(temp0.w));\n    // mul r0.z, r0.w, -r0.z\n    temp0.z = temp0.w * -temp0.z;\n    // mul r1.xy, r0.z, r1\n    temp1.xy = temp0.zz * temp1.xy;\n    // mov r2.xyz, c5.y\n    temp2.xyz = float3(0, 0, 0);\n    // mov r0.z, c5.y\n    temp0.z = float1(0);\n    // rep i0\n    for (int it0 = 0; it0 < int1(8); ++it0) {\n        // mul r1.zw, r1.xyxy, r0.z\n        temp1.zw = temp1.xy * temp0.zz;\n        // mad r1.zw, r1, r0.xyxy, v0.xyxy\n        temp1.zw = temp1.zw * temp0.xy + i.texcoord.xy;\n        // texld r3, r1.zwzw, s0\n        temp3 = tex2D(diffuse_texture, temp1.zw);\n        // add r2.xyz, r2, r3\n        temp2.xyz = temp2.xyz + temp3.xyz;\n        // add r0.z, r0.z, c4.y\n        temp0.z = temp0.z + float1(1);\n        // endrep\n    }\n    // mul oC0.xyz, r2, c5.x\n    out_color.xyz = temp2.xyz * float3(0.125, 0.125, 0.125);\n    // mul oC0.w, r0.w, c3.x\n    out_color.w = temp0.w * ref_opacity.x;\n    // \n\n    return out_color;\n}\n")),(0,a.kt)("p",null,"Decompiled by DXDecompiler."))}_.isMDXComponent=!0}}]);