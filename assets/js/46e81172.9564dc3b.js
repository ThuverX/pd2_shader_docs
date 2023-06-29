"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[64135],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>_});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var x=n.createContext({}),c=function(e){var t=n.useContext(x),r=t;return e&&(r="function"==typeof e?e(t):m(m({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(x.Provider,{value:t},e.children)},l="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,x=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),l=c(r),s=o,_=l["".concat(x,".").concat(s)]||l[s]||i[s]||a;return r?n.createElement(_,m(m({ref:t},d),{},{components:r})):n.createElement(_,m({ref:t},d))}));function _(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,m=new Array(a);m[0]=s;var p={};for(var x in t)hasOwnProperty.call(t,x)&&(p[x]=t[x]);p.originalType=e,p[l]="string"==typeof e?e:o,m[1]=p;for(var c=2;c<a;c++)m[c]=r[c];return n.createElement.apply(null,m)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},91494:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>x,contentTitle:()=>m,default:()=>i,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={id:0xc18a8bf990fb6000,title:"Post Dome Occ Default"},m="Post Dome Occ Default",p={unversionedId:"Generated/Shaders/Post/13946113100101673000",id:"Generated/Shaders/Post/13946113100101673000",title:"Post Dome Occ Default",description:"(postdomeocc:default, 0xc18a8bf990fb61bf)",source:"@site/docs/Generated/Shaders/Post/0xc18a8bf990fb61bf.mdx",sourceDirName:"Generated/Shaders/Post",slug:"/Generated/Shaders/Post/13946113100101673000",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Post/13946113100101673000",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/docs/Generated/Shaders/Post/0xc18a8bf990fb61bf.mdx",tags:[],version:"current",frontMatter:{id:"13946113100101673000",title:"Post Dome Occ Default"},sidebar:"docsSidebar",previous:{title:"Filter Mark Shadow Areas Default Clear",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Post/13123039902863206000"},next:{title:"Post Dof Downscale Default",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Post/15430747946015203000"}},x={},c=[{value:"Technique <code>ambient</code>",id:"technique-ambient",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],d={toc:c},l="wrapper";function i(e){let{components:t,...r}=e;return(0,o.kt)(l,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"post-dome-occ-default"},"Post Dome Occ Default"),(0,o.kt)("p",null,"(",(0,o.kt)("inlineCode",{parentName:"p"},"post_dome_occ:default"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"0xc18a8bf990fb61bf"),")"),(0,o.kt)("h3",{id:"technique-ambient"},"Technique ",(0,o.kt)("inlineCode",{parentName:"h3"},"ambient")),(0,o.kt)("h3",{id:"render-states"},"Render States"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 0,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 0,\n    D3DRS_ALPHABLENDENABLE = 0,\n    D3DRS_CULLMODE = 1,\n    D3DRS_COLORWRITEENABLE = 15,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 0,\n    D3DRS_SLOPESCALEDEPTHBIAS = 0,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n};\n")),(0,o.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,o.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 3,\n    D3DSAMP_ADDRESSV = 3,\n    D3DSAMP_MAGFILTER = 2,\n    D3DSAMP_MINFILTER = 2,\n    D3DSAMP_MIPFILTER = 2,\n};\n")),(0,o.kt)("h3",{id:"shaders"},"Shaders"),(0,o.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"column_major float4x4 camera_inv_view_matrix : register(vs_3_0, c4);\nfloat3 camera_unprojection : register(vs_3_0, c7);\ncolumn_major float4x4 view_proj_matrix : register(vs_3_0, c0);\nstruct VertexMain_Input\n{\n    float4 position : POSITION;\n    float4 texcoord : TEXCOORD;\n};\n\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float2 texcoord : TEXCOORD;\n    float3 texcoord1 : TEXCOORD1;\n};\n\nVertexMain_Output VertexMain(VertexMain_Input i)\n{\n    VertexMain_Output o;\n    float2 temp0;\n    float3 temp1;\n    // def c8, 1, 0, 0, 0\n    // dcl_position v0\n    // dcl_texcoord v1\n    // dcl_position o0\n    // dcl_texcoord o1.xy\n    // dcl_texcoord1 o2.xyz\n    // dp4 o0.w, v0, c3\n    o.position.w = dot(i.position, (view_proj_matrix._m03_m13_m23_m33));\n    // dp4 r0.x, v0, c0\n    temp0.x = dot(i.position, (view_proj_matrix._m00_m10_m20_m30));\n    // dp4 r0.y, v0, c1\n    temp0.y = dot(i.position, (view_proj_matrix._m01_m11_m21_m31));\n    // mul r1.xy, r0, c7\n    temp1.xy = temp0.xy * camera_unprojection.xy;\n    // mov o0.xy, r0\n    o.position.xy = temp0.xy;\n    // mov r1.z, c8.x\n    temp1.z = float1(1);\n    // dp3 o2.x, r1, c4\n    o.texcoord1.x = dot(temp1.xyz, (camera_inv_view_matrix._m00_m10_m20_m30).xyz);\n    // dp3 o2.y, r1, c5\n    o.texcoord1.y = dot(temp1.xyz, (camera_inv_view_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o2.z, r1, c6\n    o.texcoord1.z = dot(temp1.xyz, (camera_inv_view_matrix._m02_m12_m22_m32).xyz);\n    // mov o0.z, c8.x\n    o.position.z = float1(1);\n    // mov o1.xy, v1\n    o.texcoord = i.texcoord;\n    // \n\n    return o;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."),(0,o.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hlsl"},"column_major float4x4 camera_world_matrix : register(ps_3_0, c0);\nsampler2D depth : register(ps_3_0, s0);\nfloat3 ref_dome_occ_pos : register(ps_3_0, c4);\nfloat3 ref_dome_occ_size : register(ps_3_0, c5);\nfloat3 render_target_size : register(ps_3_0, c3);\nstruct PixelMain_Input\n{\n    float2 texcoord : TEXCOORD;\n    float3 texcoord1 : TEXCOORD1;\n};\n\nfloat4 PixelMain(PixelMain_Input i) : COLOR\n{\n    float4 out_color;\n    float4 temp0, temp1, temp2, temp3;\n    float temp4;\n    // def c6, 1, 0, -1, 0.5\n    // dcl_texcoord v0.xy\n    // dcl_texcoord1 v1.z\n    // dcl_2d s0\n    // rcp r0.y, c3.y\n    temp0.y = 1.0f / render_target_size.y;\n    // rcp r0.x, c3.x\n    temp0.x = 1.0f / render_target_size.x;\n    // mov r0.zw, -r0.xyyx\n    temp0.zw = -temp0.yx;\n    // add r1, r0.xzwy, v0.xyxy\n    temp1 = temp0.xzwy + i.texcoord.xyxy;\n    // texld r2, r1.zwzw, s0\n    temp2 = tex2D(depth, temp1.zw);\n    // texld r1, r1, s0\n    temp1 = tex2D(depth, temp1.xy);\n    // add r0.zw, -r0.xyxy, v0.xyxy\n    temp0.zw = -temp0.xy + i.texcoord.xy;\n    // texld r3, r0.zwzw, s0\n    temp3 = tex2D(depth, temp0.zw);\n    // max r0.z, r3.x, r2.x\n    temp0.z = max(temp3.x, temp2.x);\n    // max r2.x, r1.x, r0.z\n    temp2.x = max(temp1.x, temp0.z);\n    // add r0.zw, r0.xyxy, v0.xyxy\n    temp0.zw = temp0.xy + i.texcoord.xy;\n    // mad r1, r0.xyxy, c6.yxyz, v0.xyxy\n    temp1 = temp0.xyxy * float4(0, 1, 0, -1) + i.texcoord.xyxy;\n    // mad r3, r0.x, c6.xyzy, v0.xyxy\n    temp3 = temp0.x * float4(1, 0, -1, 0) + i.texcoord.xyxy;\n    // texld r0, r0.zwzw, s0\n    temp0 = tex2D(depth, temp0.zw);\n    // max r4.x, r0.x, r2.x\n    temp4.x = max(temp0.x, temp2.x);\n    // texld r0, r1, s0\n    temp0 = tex2D(depth, temp1.xy);\n    // texld r1, r1.zwzw, s0\n    temp1 = tex2D(depth, temp1.zw);\n    // max r2.x, r0.x, r1.x\n    temp2.x = max(temp0.x, temp1.x);\n    // texld r0, r3.zwzw, s0\n    temp0 = tex2D(depth, temp3.zw);\n    // texld r1, r3, s0\n    temp1 = tex2D(depth, temp3.xy);\n    // max r1.y, r0.x, r2.x\n    temp1.y = max(temp0.x, temp2.x);\n    // max r0.x, r1.x, r1.y\n    temp0.x = max(temp1.x, temp1.y);\n    // max r1.x, r4.x, r0.x\n    temp1.x = max(temp4.x, temp0.x);\n    // texld r0, v0, s0\n    temp0 = tex2D(depth, i.texcoord.xy);\n    // max r2.x, r0.x, r1.x\n    temp2.x = max(temp0.x, temp1.x);\n    // mad r0.x, v1.z, r2.x, c2.w\n    temp0.x = i.texcoord1.z * temp2.x + (camera_world_matrix._m02_m12_m22_m32).w;\n    // add r0.x, r0.x, -c4.z\n    temp0.x = temp0.x + -ref_dome_occ_pos.z;\n    // rcp r0.y, c5.z\n    temp0.y = 1.0f / ref_dome_occ_size.z;\n    // mul_sat r0.x, r0.y, r0.x\n    temp0.x = saturate(temp0.y * temp0.x);\n    // add r0.xy, -r0.x, c6.wxzw\n    temp0.xy = -temp0.xx + float2(0.5, 1);\n    // add r0.yz, r0.xxyw, r0.xxyw\n    temp0.yz = temp0.xy + temp0.xy;\n    // cmp oC0.y, r0.x, r0.y, c6.y\n    out_color.y = (temp0.x >= 0) ? temp0.y : float1(0);\n    // mov_sat oC0.x, r0.z\n    out_color.x = saturate(temp0.z);\n    // mov oC0.zw, c6.xyyx\n    out_color.zw = float2(0, 1);\n    // \n\n    return out_color;\n}\n")),(0,o.kt)("p",null,"Decompiled by DXDecompiler."))}i.isMDXComponent=!0}}]);