"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[4453],{3905:(e,t,r)=>{r.d(t,{Zo:()=>_,kt:()=>s});var n=r(7294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},m=Object.keys(e);for(n=0;n<m.length;n++)r=m[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)r=m[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},_=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},x="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},i=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,m=e.originalType,l=e.parentName,_=a(e,["components","mdxType","originalType","parentName"]),x=d(r),i=p,s=x["".concat(l,".").concat(i)]||x[i]||c[i]||m;return r?n.createElement(s,o(o({ref:t},_),{},{components:r})):n.createElement(s,o({ref:t},_))}));function s(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var m=r.length,o=new Array(m);o[0]=i;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[x]="string"==typeof e?e:p,o[1]=a;for(var d=2;d<m;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}i.displayName="MDXCreateElement"},6509:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>m,metadata:()=>a,toc:()=>d});var n=r(7462),p=(r(7294),r(3905));const m={id:0xad3edd8178703800,title:"Spot Default Hq Invsq Projection Specular"},o="Spot Default Hq Invsq Projection Specular",a={unversionedId:"Generated/Shaders/Deferred Lighting/12483658765258734000",id:"Generated/Shaders/Deferred Lighting/12483658765258734000",title:"Spot Default Hq Invsq Projection Specular",description:"(spotHQPROJECTION:SPECULAR, 0xad3edd817870350f)",source:"@site/docs/Generated/Shaders/Deferred Lighting/0xad3edd817870350f.mdx",sourceDirName:"Generated/Shaders/Deferred Lighting",slug:"/Generated/Shaders/Deferred Lighting/12483658765258734000",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Deferred Lighting/12483658765258734000",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/Generated/Shaders/Deferred Lighting/0xad3edd817870350f.mdx",tags:[],version:"current",frontMatter:{id:"12483658765258734000",title:"Spot Default Hq Invsq Projection Specular"},sidebar:"docsSidebar",previous:{title:"Ambient Occlusion Default Nvdbt",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Deferred Lighting/12120076231556389000"},next:{title:"Global Shadow Mask Default Dx9 Fetch4",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Deferred Lighting/13064614224251472000"}},l={},d=[{value:"Technique <code>ambient</code>",id:"technique-ambient",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Sampler 0",id:"sampler-0",level:4},{value:"Sampler 1",id:"sampler-1",level:4},{value:"Sampler 2",id:"sampler-2",level:4},{value:"Sampler 3",id:"sampler-3",level:4},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],_={toc:d},x="wrapper";function c(e){let{components:t,...r}=e;return(0,p.kt)(x,(0,n.Z)({},_,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"spot-default-hq-invsq-projection-specular"},"Spot Default Hq Invsq Projection Specular"),(0,p.kt)("p",null,"(",(0,p.kt)("inlineCode",{parentName:"p"},"spot:default:HQ:INVSQ:PROJECTION:SPECULAR"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"0xad3edd817870350f"),")"),(0,p.kt)("p",null,"This template is referenced 1 time by ",(0,p.kt)("a",{parentName:"p",href:"/docs/Generated/Render%20Templates/deferred_lighting.render_template_database#spot-hq-invsq-projection-specular"},"spot:HQ:INVSQ:PROJECTION:SPECULAR"),"."),(0,p.kt)("h3",{id:"technique-ambient"},"Technique ",(0,p.kt)("inlineCode",{parentName:"h3"},"ambient")),(0,p.kt)("h3",{id:"render-states"},"Render States"),(0,p.kt)("p",null,"More info can be found on the ",(0,p.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3drenderstatetype"},"Direct3D Docs")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_STENCILENABLE = 1,\n    D3DRS_STENCILFUNC = 6,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = -1,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 5,\n    D3DRS_STENCILWRITEMASK = 255,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZWRITEENABLE = 0,\n    D3DRS_ALPHABLENDENABLE = 1,\n    D3DRS_BLENDOP = 1,\n    D3DRS_SRCBLEND = 2,\n    D3DRS_DESTBLEND = 2,\n    D3DRS_COLORWRITEENABLE = 7,\n};\n")),(0,p.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,p.kt)("p",null,"More info can be found on the ",(0,p.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3dsamplerstatetype"},"Direct3D Docs")),(0,p.kt)("h4",{id:"sampler-0"},"Sampler 0"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 3,\n    D3DSAMP_ADDRESSV = 3,\n    D3DSAMP_MAGFILTER = 1,\n    D3DSAMP_MINFILTER = 1,\n    D3DSAMP_MIPFILTER = 1,\n};\n")),(0,p.kt)("h4",{id:"sampler-1"},"Sampler 1"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 3,\n    D3DSAMP_ADDRESSV = 3,\n    D3DSAMP_MAGFILTER = 1,\n    D3DSAMP_MINFILTER = 1,\n    D3DSAMP_MIPFILTER = 1,\n};\n")),(0,p.kt)("h4",{id:"sampler-2"},"Sampler 2"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 0,\n    D3DSAMP_ADDRESSU = 3,\n    D3DSAMP_ADDRESSV = 3,\n    D3DSAMP_MAGFILTER = 1,\n    D3DSAMP_MINFILTER = 1,\n    D3DSAMP_MIPFILTER = 1,\n};\n")),(0,p.kt)("h4",{id:"sampler-3"},"Sampler 3"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DSAMPLERSTATETYPE {\n    D3DSAMP_MIPMAPLODBIAS = 827606343,\n    D3DSAMP_SRGBTEXTURE = 1,\n    D3DSAMP_ADDRESSU = 3,\n    D3DSAMP_ADDRESSV = 3,\n    D3DSAMP_MAGFILTER = 2,\n    D3DSAMP_MINFILTER = 2,\n    D3DSAMP_MIPFILTER = 2,\n};\n")),(0,p.kt)("h3",{id:"shaders"},"Shaders"),(0,p.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-hlsl"},"column_major float4x4 camera_inv_view_matrix : register(vs_3_0, c4);\nfloat3 camera_unprojection : register(vs_3_0, c12);\nfloat3 ref_light_direction : register(vs_3_0, c11);\nfloat3 ref_light_position : register(vs_3_0, c10);\nfloat ref_spot_angle_falloff_end : register(vs_3_0, c9);\nfloat ref_spot_angle_falloff_start : register(vs_3_0, c8);\nfloat3 ref_spot_scale : register(vs_3_0, c7);\nfloat3 render_target_texel_offset : register(vs_3_0, c13);\ncolumn_major float4x4 view_proj_matrix : register(vs_3_0, c0);\nfloat3 vp_offset : register(vs_3_0, c14);\nfloat3 vp_size : register(vs_3_0, c15);\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float4 texcoord : TEXCOORD;\n    float4 texcoord1 : TEXCOORD1;\n    float2 texcoord2 : TEXCOORD2;\n};\n\nVertexMain_Output VertexMain(float4 position : POSITION)\n{\n    VertexMain_Output o;\n    float4 temp0, temp1;\n    float3 temp2;\n    // def c16, 1, 2, -1, 0.5\n    // def c17, -0.001, 0, 0, 0\n    // dcl_position v0\n    // dcl_position o0\n    // dcl_texcoord o1\n    // dcl_texcoord1 o2\n    // dcl_texcoord2 o3.xy\n    // mul r0.xyz, c7, v0\n    temp0.xyz = ref_spot_scale.xyz * position.xyz;\n    // mov r0.w, c16.x\n    temp0.w = float1(1);\n    // dp4 r1.x, r0, c0\n    temp1.x = dot(temp0, (view_proj_matrix._m00_m10_m20_m30));\n    // dp4 r1.y, r0, c1\n    temp1.y = dot(temp0, (view_proj_matrix._m01_m11_m21_m31));\n    // mul r2.xy, r1, c12\n    temp2.xy = temp1.xy * camera_unprojection.xy;\n    // dp4 r2.z, r0, c3\n    temp2.z = dot(temp0, (view_proj_matrix._m03_m13_m23_m33));\n    // dp4 r1.z, r0, c2\n    temp1.z = dot(temp0, (view_proj_matrix._m02_m12_m22_m32));\n    // dp3 o2.x, r2, c4\n    o.texcoord1.x = dot(temp2.xyz, (camera_inv_view_matrix._m00_m10_m20_m30).xyz);\n    // dp3 o2.y, r2, c5\n    o.texcoord1.y = dot(temp2.xyz, (camera_inv_view_matrix._m01_m11_m21_m31).xyz);\n    // dp3 o2.z, r2, c6\n    o.texcoord1.z = dot(temp2.xyz, (camera_inv_view_matrix._m02_m12_m22_m32).xyz);\n    // mov r0.yw, c16\n    temp0.yw = float2(2, 0.5);\n    // mov r2.xy, c15\n    temp2.xy = vp_size.xy;\n    // mad r0.xy, c14, r0.y, r2\n    temp0.xy = vp_offset.xy * temp0.yy + temp2.xy;\n    // add r0.xy, r0, c16.z\n    temp0.xy = temp0.xy + float2(-1, -1);\n    // mul r0.xy, r0, r2.z\n    temp0.xy = temp0.xy * temp2.zz;\n    // mad r0.x, r1.x, c15.x, r0.x\n    temp0.x = temp1.x * vp_size.x + temp0.x;\n    // mad r0.y, r1.y, -c15.y, r0.y\n    temp0.y = temp1.y * -vp_size.y + temp0.y;\n    // add r0.z, r2.z, r2.z\n    temp0.z = temp2.z + temp2.z;\n    // mov r1.w, r2.z\n    temp1.w = temp2.z;\n    // add r2.xy, r0.w, c13\n    temp2.xy = temp0.ww + render_target_texel_offset.xy;\n    // mad o1.x, r0.z, r2.x, r0.x\n    o.texcoord.x = temp0.z * temp2.x + temp0.x;\n    // mad o1.y, r0.z, r2.y, r0.y\n    o.texcoord.y = temp0.z * temp2.y + temp0.y;\n    // mov o1.w, r0.z\n    o.texcoord.w = temp0.z;\n    // mov r0.xyz, c10\n    temp0.xyz = ref_light_position.xyz;\n    // dp3 o3.x, r0, c11\n    o.texcoord2.x = dot(temp0.xyz, ref_light_direction.xyz);\n    // mov r0.x, c8.x\n    temp0.x = ref_spot_angle_falloff_start.x;\n    // add r0.x, r0.x, -c9.x\n    temp0.x = temp0.x + -ref_spot_angle_falloff_end.x;\n    // min r0.x, r0.x, c17.x\n    temp0.x = min(temp0.x, float1(-0.001));\n    // rcp o3.y, r0.x\n    o.texcoord2.y = 1.0f / temp0.x;\n    // mov o0, r1\n    o.position = temp1;\n    // mov o2.w, r1.w\n    o.texcoord1.w = temp1.w;\n    // mov o1.z, r1.z\n    o.texcoord.z = temp1.z;\n    // \n\n    return o;\n}\n")),(0,p.kt)("p",null,"Decompiled by DXDecompiler."),(0,p.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-hlsl"},"sampler2D albedo : register(ps_3_0, s2);\ncolumn_major float4x4 camera_world_matrix : register(ps_3_0, c0);\nsampler2D depth : register(ps_3_0, s1);\nsampler2D normal : register(ps_3_0, s0);\nfloat3 ref_light_color : register(ps_3_0, c7);\nfloat3 ref_light_direction : register(ps_3_0, c9);\nfloat ref_light_falloff : register(ps_3_0, c10);\nfloat ref_light_falloff_exponent : register(ps_3_0, c11);\ncolumn_major float4x4 ref_light_matrix : register(ps_3_0, c3);\nfloat3 ref_light_position : register(ps_3_0, c8);\nfloat ref_light_start : register(ps_3_0, c12);\nsampler2D ref_light_texture : register(ps_3_0, s3);\nfloat ref_spot_angle_falloff_end : register(ps_3_0, c5);\nfloat ref_spot_projection_scale : register(ps_3_0, c6);\nstruct PixelMain_Input\n{\n    float4 texcoord : TEXCOORD;\n    float4 texcoord1 : TEXCOORD1;\n    float2 texcoord2 : TEXCOORD2;\n};\n\nfloat4 PixelMain(PixelMain_Input i) : COLOR\n{\n    float4 out_color;\n    float4 temp0, temp1, temp2, temp3, temp4;\n    // def c13, 1, 0, 30000, -0.5\n    // def c14, 590, 10, 0.33, 1\n    // dcl_texcoord v0.xyw\n    // dcl_texcoord1 v1\n    // dcl_texcoord2 v2.xy\n    // dcl_2d s0\n    // dcl_2d s1\n    // dcl_2d s2\n    // dcl_2d s3\n    // mul r0.x, c10.x, c10.x\n    temp0.x = ref_light_falloff.x * ref_light_falloff.x;\n    // rcp r0.y, v1.w\n    temp0.y = 1.0f / i.texcoord1.w;\n    // mul r0.yzw, r0.y, v1.xxyz\n    temp0.yzw = temp0.yyy * i.texcoord1.xyz;\n    // rcp r1.x, v0.w\n    temp1.x = 1.0f / i.texcoord.w;\n    // mul r1.xy, r1.x, v0\n    temp1.xy = temp1.xx * i.texcoord.xy;\n    // texld r2, r1, s1\n    temp2 = tex2D(depth, temp1.xy);\n    // mov r3.x, c0.w\n    temp3.x = (camera_world_matrix._m00_m10_m20_m30).w;\n    // mov r3.y, c1.w\n    temp3.y = (camera_world_matrix._m01_m11_m21_m31).w;\n    // mov r3.z, c2.w\n    temp3.z = (camera_world_matrix._m02_m12_m22_m32).w;\n    // mad r0.yzw, r0, r2.x, r3.xxyz\n    temp0.yzw = temp0.yzw * temp2.xxx + temp3.xyz;\n    // add r2.xyz, -r0.yzww, r3\n    temp2.xyz = -temp0.yzw + temp3.xyz;\n    // add r3.xyz, -r0.yzww, c8\n    temp3.xyz = -temp0.yzw + ref_light_position.xyz;\n    // dp3 r0.y, r0.yzww, c9\n    temp0.y = dot(temp0.yzw, ref_light_direction.xyz);\n    // add r0.y, r0.y, -v2.x\n    temp0.y = temp0.y + -i.texcoord2.x;\n    // add r0.y, r0.y, -c12.x\n    temp0.y = temp0.y + -ref_light_start.x;\n    // dp3 r0.z, r3, r3\n    temp0.z = dot(temp3.xyz, temp3.xyz);\n    // mul r0.x, r0.z, r0.x\n    temp0.x = temp0.z * temp0.x;\n    // mad r0.x, r0.x, -r0.x, c13.x\n    temp0.x = temp0.x * -temp0.x + float1(1);\n    // max r1.z, r0.x, c13.y\n    temp1.z = max(temp0.x, float1(0));\n    // mul r0.x, r1.z, r1.z\n    temp0.x = temp1.z * temp1.z;\n    // add r0.w, r0.z, c13.x\n    temp0.w = temp0.z + float1(1);\n    // rsq r0.z, r0.z\n    temp0.z = 1 / sqrt(temp0.z);\n    // mul r3.xyz, r0.z, r3\n    temp3.xyz = temp0.zzz * temp3.xyz;\n    // rcp r0.z, r0.w\n    temp0.z = 1.0f / temp0.w;\n    // mul r0.x, r0.x, r0.z\n    temp0.x = temp0.x * temp0.z;\n    // mul r0.x, r0.x, c13.z\n    temp0.x = temp0.x * float1(30000);\n    // cmp r0.z, -r0.y, c13.y, c13.x\n    temp0.z = (-temp0.y >= 0) ? float1(0) : float1(1);\n    // cmp r0.y, r0.y, -c13.y, -c13.x\n    temp0.y = (temp0.y >= 0) ? float1(-0) : float1(-1);\n    // add r0.y, r0.y, r0.z\n    temp0.y = temp0.y + temp0.z;\n    // mul r0.x, r0.y, r0.x\n    temp0.x = temp0.y * temp0.x;\n    // dp3 r0.y, r3, -c9\n    temp0.y = dot(temp3.xyz, -ref_light_direction.xyz);\n    // add r0.y, -r0.y, c13.x\n    temp0.y = -temp0.y + float1(1);\n    // add r0.y, r0.y, -c5.x\n    temp0.y = temp0.y + -ref_spot_angle_falloff_end.x;\n    // mul_sat r0.y, r0.y, v2.y\n    temp0.y = saturate(temp0.y * i.texcoord2.y);\n    // mul r0.y, r0.y, r0.y\n    temp0.y = temp0.y * temp0.y;\n    // mul r0.x, r0.y, r0.x\n    temp0.x = temp0.y * temp0.x;\n    // texld r4, r1, s0\n    temp4 = tex2D(normal, temp1.xy);\n    // texld r1, r1, s2\n    temp1 = tex2D(albedo, temp1.xy);\n    // add r0.yzw, r4.xxyz, c13.w\n    temp0.yzw = temp4.xyz + float3(-0.5, -0.5, -0.5);\n    // mul r2.w, r4.w, r4.w\n    temp2.w = temp4.w * temp4.w;\n    // add r0.yzw, r0, r0\n    temp0.yzw = temp0.yzw + temp0.yzw;\n    // dp3_sat r3.w, r3, r0.yzww\n    temp3.w = saturate(dot(temp3.xyz, temp0.yzw));\n    // mul r0.x, r0.x, r3.w\n    temp0.x = temp0.x * temp3.w;\n    // dp2add r2.w, r2.w, r0.x, c13.y\n    temp2.w = dot(temp2.ww, temp0.xx) + float1(0);\n    // dp3 r3.w, r2, r2\n    temp3.w = dot(temp2.xyz, temp2.xyz);\n    // rsq r3.w, r3.w\n    temp3.w = 1 / sqrt(temp3.w);\n    // mad_pp r2.xyz, r2, r3.w, r3\n    temp2.xyz = /* not implemented _pp modifier */ temp2.xyz * temp3.www + temp3.xyz;\n    // nrm_pp r4.xyz, r2\n    temp4.xyz = /* not implemented _pp modifier */ normalize(temp2.xyz).xyz;\n    // dp3_sat r0.y, r4, r0.yzww\n    temp0.y = saturate(dot(temp4.xyz, temp0.yzw));\n    // mad r0.z, r1.w, c14.x, c14.y\n    temp0.z = temp1.w * float1(590) + float1(10);\n    // pow r1.w, r0.y, r0.z\n    temp1.w = pow(temp0.y, temp0.z);\n    // mov r2.x, c13.x\n    temp2.x = float1(1);\n    // add_sat r0.y, -r2.x, c11.x\n    temp0.y = saturate(-temp2.x + ref_light_falloff_exponent.x);\n    // mad r0.y, r0.y, c14.z, c14.w\n    temp0.y = temp0.y * float1(0.33) + float1(1);\n    // mul r0.y, r0.y, r1.w\n    temp0.y = temp0.y * temp1.w;\n    // mul r0.y, r2.w, r0.y\n    temp0.y = temp2.w * temp0.y;\n    // dp3 r2.x, r3, c3\n    temp2.x = dot(temp3.xyz, (ref_light_matrix._m00_m10_m20_m30).xyz);\n    // dp3 r2.y, r3, c4\n    temp2.y = dot(temp3.xyz, (ref_light_matrix._m01_m11_m21_m31).xyz);\n    // mul r0.zw, r2.xyxy, c6.x\n    temp0.zw = temp2.xy * ref_spot_projection_scale.xx;\n    // mad r0.zw, r0, -c13.w, -c13.w\n    temp0.zw = temp0.zw * float2(0.5, 0.5) + float2(0.5, 0.5);\n    // texld r2, r0.zwzw, s3\n    temp2 = tex2D(ref_light_texture, temp0.zw);\n    // mul r2, r2.xyzz, c7.xyzz\n    temp2 = temp2.xyzz * ref_light_color.xyzz;\n    // add r2, r2, r2\n    temp2 = temp2 + temp2;\n    // mul r3, r0.y, r2\n    temp3 = temp0.y * temp2;\n    // mul r0, r0.x, r2.xyww\n    temp0 = temp0.x * temp2.xyww;\n    // mad r0, r1.xyzz, r0, r3\n    temp0 = temp1.xyzz * temp0 + temp3;\n    // max oC0, r0, c13.y\n    out_color = max(temp0, float4(0, 0, 0, 0));\n    // \n\n    return out_color;\n}\n")),(0,p.kt)("p",null,"Decompiled by DXDecompiler."))}c.isMDXComponent=!0}}]);