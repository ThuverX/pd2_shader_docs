"use strict";(self.webpackChunkpd_2_shader_docs=self.webpackChunkpd_2_shader_docs||[]).push([[33231],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>D});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),s=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(t),u=a,D=p["".concat(d,".").concat(u)]||p[u]||m[u]||o;return t?r.createElement(D,l(l({ref:n},c),{},{components:t})):r.createElement(D,l({ref:n},c))}));function D(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},50258:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const o={id:0x63deb4af47c2bc00,title:"Generic Shadow Caster Blend Diffuse Blend Mask Control Blend Normal Diffuse Texture Normalmap Rl Environment World Up Blend"},l="Generic Shadow Caster Blend Diffuse Blend Mask Control Blend Normal Diffuse Texture Normalmap Rl Environment World Up Blend",i={unversionedId:"Generated/Shaders/Base/[1800-1900]/7196387919500852000",id:"Generated/Shaders/Base/[1800-1900]/7196387919500852000",title:"Generic Shadow Caster Blend Diffuse Blend Mask Control Blend Normal Diffuse Texture Normalmap Rl Environment World Up Blend",description:"(genericBLENDDIFFUSEBLENDNORMALNORMALMAPWORLDUP_BLEND, 0x63deb4af47c2bd55)",source:"@site/docs/Generated/Shaders/Base/[1800-1900]/0x63deb4af47c2bd55.mdx",sourceDirName:"Generated/Shaders/Base/[1800-1900]",slug:"/Generated/Shaders/Base/[1800-1900]/7196387919500852000",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[1800-1900]/7196387919500852000",draft:!1,editUrl:"https://github.com/thuverx/pd2_shader_docs/tree/main/docs/docs/Generated/Shaders/Base/[1800-1900]/0x63deb4af47c2bd55.mdx",tags:[],version:"current",frontMatter:{id:"7196387919500852000",title:"Generic Shadow Caster Blend Diffuse Blend Mask Control Blend Normal Diffuse Texture Normalmap Rl Environment World Up Blend"},sidebar:"docsSidebar",previous:{title:"Generic Shadow Caster Alpha Masked Cube Environment Mapping Diffuse Texture External Alpha Ref Gsma Texture Vertex Color",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[1800-1900]/7194987634184120000"},next:{title:"Generic Shadow Caster Alpha Masked Diffuse Texture External Alpha Ref Normalmap Opacity Texture Self Illumination Self Illumination Bloom",permalink:"/pd2_shader_docs/docs/Generated/Shaders/Base/[1800-1900]/7198789856075823000"}},d={},s=[{value:"Technique <code>ambient</code>",id:"technique-ambient",level:3},{value:"Render States",id:"render-states",level:3},{value:"Sampler States",id:"sampler-states",level:3},{value:"Shaders",id:"shaders",level:3},{value:"Vertex Shader",id:"vertex-shader",level:4},{value:"Pixel Shader",id:"pixel-shader",level:4}],c={toc:s},p="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"generic-shadow-caster-blend-diffuse-blend-mask-control-blend-normal-diffuse-texture-normalmap-rl-environment-world-up-blend"},"Generic Shadow Caster Blend Diffuse Blend Mask Control Blend Normal Diffuse Texture Normalmap Rl Environment World Up Blend"),(0,a.kt)("p",null,"(",(0,a.kt)("inlineCode",{parentName:"p"},"generic:shadow_caster:BLEND_DIFFUSE:BLEND_MASK_CONTROL:BLEND_NORMAL:DIFFUSE_TEXTURE:NORMALMAP:RL_ENVIRONMENT:WORLD_UP_BLEND"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"0x63deb4af47c2bd55"),")"),(0,a.kt)("h3",{id:"technique-ambient"},"Technique ",(0,a.kt)("inlineCode",{parentName:"h3"},"ambient")),(0,a.kt)("h3",{id:"render-states"},"Render States"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"enum D3DRENDERSTATETYPE {\n    D3DRS_ZENABLE = 1,\n    D3DRS_ZFUNC = 4,\n    D3DRS_ZWRITEENABLE = 1,\n    D3DRS_ALPHABLENDENABLE = 0,\n    D3DRS_CULLMODE = 2,\n    D3DRS_COLORWRITEENABLE = 15,\n    D3DRS_COLORWRITEENABLE1 = 15,\n    D3DRS_COLORWRITEENABLE2 = 15,\n    D3DRS_STENCILENABLE = 0,\n    D3DRS_STENCILFUNC = 1,\n    D3DRS_STENCILFAIL = 1,\n    D3DRS_STENCILMASK = 0,\n    D3DRS_STENCILPASS = 1,\n    D3DRS_STENCILREF = 0,\n    D3DRS_STENCILWRITEMASK = 0,\n    D3DRS_STENCILZFAIL = 1,\n    D3DRS_DEPTHBIAS = 961656599,\n    D3DRS_SLOPESCALEDEPTHBIAS = 1075838976,\n    D3DRS_FOGENABLE = 0,\n    D3DRS_SPECULARENABLE = 0,\n    D3DRS_ADAPTIVETESS_X = 0,\n    D3DRS_ADAPTIVETESS_Z = 0,\n    D3DRS_ADAPTIVETESS_W = 0,\n    D3DRS_SRGBWRITEENABLE = 0,\n    D3DRS_SEPARATEALPHABLENDENABLE = 0,\n    D3DRS_ALPHATESTENABLE = 0,\n};\n")),(0,a.kt)("h3",{id:"sampler-states"},"Sampler States"),(0,a.kt)("h3",{id:"shaders"},"Shaders"),(0,a.kt)("h4",{id:"vertex-shader"},"Vertex Shader"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hlsl"},"column_major float4x4 view_proj_matrix : register(vs_3_0, c0);\nstruct VertexMain_Output\n{\n    float4 position : POSITION;\n    float texcoord1 : TEXCOORD1;\n};\n\nVertexMain_Output VertexMain(float4 position : POSITION)\n{\n    VertexMain_Output o;\n    float temp0;\n    // dcl_position v0\n    // dcl_position o0\n    // dcl_texcoord1 o1.x\n    // dp4 o0.x, v0, c0\n    o.position.x = dot(position, (view_proj_matrix._m00_m10_m20_m30));\n    // dp4 o0.y, v0, c1\n    o.position.y = dot(position, (view_proj_matrix._m01_m11_m21_m31));\n    // dp4 o0.w, v0, c3\n    o.position.w = dot(position, (view_proj_matrix._m03_m13_m23_m33));\n    // dp4 r0.x, v0, c2\n    temp0.x = dot(position, (view_proj_matrix._m02_m12_m22_m32));\n    // mov o0.z, r0.x\n    o.position.z = temp0.x;\n    // mov o1.x, r0.x\n    o.texcoord1 = temp0.x;\n    // \n\n    return o;\n}\n")),(0,a.kt)("p",null,"Decompiled by DXDecompiler."),(0,a.kt)("h4",{id:"pixel-shader"},"Pixel Shader"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hlsl"},"float4 PixelMain(float texcoord1 : TEXCOORD1) : COLOR\n{\n    float4 out_color;\n    // def c0, 1, 0, 0, 0\n    // dcl_texcoord1 v0.x\n    // mul oC0, c0.xyyy, v0.x\n    out_color = float4(1, 0, 0, 0) * texcoord1.x;\n    // \n\n    return out_color;\n}\n")),(0,a.kt)("p",null,"Decompiled by DXDecompiler."))}m.isMDXComponent=!0}}]);