(()=>{var e={};e.id=626,e.ids=[626],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},9598:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>h,tree:()=>d}),a(4213),a(899),a(5866);var r=a(3191),n=a(8716),s=a(7922),o=a.n(s),i=a(5231),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);a.d(t,l);let d=["",{children:["login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,4213)),"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/login/page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,899)),"/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/layout.js"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/login/page.js"],u="/login/page",p={require:a,loadChunk:()=>Promise.resolve()},h=new r.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/login/page",pathname:"/login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},422:(e,t,a)=>{Promise.resolve().then(a.bind(a,3476))},7400:(e,t,a)=>{Promise.resolve().then(a.bind(a,6339))},7046:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,2994,23)),Promise.resolve().then(a.t.bind(a,6114,23)),Promise.resolve().then(a.t.bind(a,9727,23)),Promise.resolve().then(a.t.bind(a,9671,23)),Promise.resolve().then(a.t.bind(a,1868,23)),Promise.resolve().then(a.t.bind(a,4759,23))},9376:e=>{e.exports={header:"page_header__oRW75",navbar:"page_navbar__k3RMs",margin:"page_margin__dW79Q",grid:"page_grid__JZ9Cz",gridCard:"page_gridCard__SHr0g",courseButton:"page_courseButton__PCWLZ",courseButtonContainer:"page_courseButtonContainer__eS198",aboutParagraphs:"page_aboutParagraphs__oBds0",aboutHeader:"page_aboutHeader__qF7Si","contact-info":"page_contact-info__a4Z7l",container:"page_container__jZF7q",backgroundVideo:"page_backgroundVideo__EjNBN",videoWrapper:"page_videoWrapper__nmU9S",fadeOut:"page_fadeOut__fTsyT",content:"page_content___38fW",transcript:"page_transcript__4aCQE",cvText:"page_cvText__1AvYq",aboutContainer:"page_aboutContainer__DgMjX",becomeHostSection:"page_becomeHostSection__Dqkx_",mediaBox:"page_mediaBox__VTlbq",mediaVideos:"page_mediaVideos__gySBt",imagesContainers:"page_imagesContainers__dIZiD",word:"page_word__YasOU",active:"page_active__9fwfh",homeTextFrontContainer:"page_homeTextFrontContainer__EHP1_",title:"page_title__po7na",map:"page_map__8FF97",becomeHostFormContainer:"page_becomeHostFormContainer__rpALs",stylingPics:"page_stylingPics__P1Wki",aboutAddWhenResponsive:"page_aboutAddWhenResponsive__0U9Hy"}},7481:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});var r=a(6621);let n=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},4047:()=>{},6503:(e,t,a)=>{"use strict";a.d(t,{H:()=>i,a:()=>o});var r=a(326),n=a(7577);let s=(0,n.createContext)(),o=()=>(0,n.useContext)(s),i=({children:e})=>{let[t,a]=(0,n.useState)(null);return r.jsx(s.Provider,{value:{user:t,login:e=>{a(e)},logout:()=>{a(null)}},children:e})}},3476:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>S});var r=a(326),n=a(8961),s=a(8473);a(4047);var o=a(7577),i=a(5047),l=a(9426),d=a(7841),c=a(5609),u=a(8260),p=a(6725),h=a(2265),m=a(6283),g=a(434),x=a(9074),_=a(4979),f=a(6326),j=a(1028),b=a(8597),v=a(6503),y=a(9376);function w(){(0,i.useRouter)();let[e,t]=(0,o.useState)(!1),{user:a,logout:n}=(0,v.a)(),s=e=>a=>{("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&t(e)};return(0,r.jsxs)(r.Fragment,{children:[r.jsx(l.default,{position:"static",sx:{background:"linear-gradient(to right, #caa024, #16f5b7)"},children:(0,r.jsxs)(d.default,{children:[r.jsx(u.default,{edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},onClick:s(!0),children:r.jsx(p.default,{})}),(0,r.jsxs)(c.default,{className:y.title,variant:"h6",component:"div",sx:{flexGrow:1},children:[r.jsx("strong",{children:"Eat Together"})," - Live Better"]}),(0,r.jsxs)(m.default,{sx:{display:{xs:"none",md:"block"}},children:[r.jsx(h.default,{color:"inherit",sx:{mx:1},children:r.jsx(g.default,{href:"/",passHref:!0,children:"Home"})}),r.jsx(h.default,{color:"inherit",sx:{mx:1},children:r.jsx(g.default,{href:"/mealsList",passHref:!0,children:"Meals"})}),r.jsx(h.default,{color:"inherit",sx:{mx:1},children:r.jsx(g.default,{href:"/become-host",passHref:!0,children:"Become a host"})}),a&&r.jsx(h.default,{color:"inherit",sx:{mx:1},children:r.jsx(g.default,{href:"/add",passHref:!0,children:"Add Meal"})}),a&&r.jsx(h.default,{color:"inherit",sx:{mx:1},onClick:()=>n(),children:"Log Out"}),!a&&r.jsx(h.default,{color:"inherit",sx:{mx:1},children:r.jsx(g.default,{href:"/login",passHref:!0,children:"Login"})})]})]})}),r.jsx(x.ZP,{anchor:"left",open:e,onClose:s(!1),children:(0,r.jsxs)(m.default,{className:y.navbar,sx:{width:250},role:"presentation",onClick:s(!1),onKeyDown:s(!1),children:[r.jsx(_.Z,{children:["Home","Meals","Become host","Add","About","Contact"].map(e=>r.jsx(f.ZP,{sx:{marginTop:4.75},button:!0,children:r.jsx(g.default,{href:`/${e.toLowerCase().replace(/\s+/g,"-")}`,passHref:!0,children:r.jsx(j.Z,{primary:e})})},e))}),r.jsx(b.Z,{})]})})]})}var P=a(5771);function C(){return r.jsx(m.default,{component:"footer",sx:{py:3,px:2,mt:"auto",textAlign:"center"},children:(0,r.jsxs)(P.default,{maxWidth:"sm",children:[r.jsx("iframe",{title:"Tons of food lost or wasted",src:"https://www.theworldcounts.com/embeds/counters/101?background_color=white&color=black&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=14",style:{border:"none"},height:"100",width:"300"}),r.jsx(c.default,{variant:"body1",children:"Meal Sharing App Denmark"}),(0,r.jsxs)(c.default,{variant:"body2",color:"text.secondary",children:["\xa9 ",new Date().getFullYear()," created by Alejandro Gispert. All rights reserved."]})]})})}var H=a(6670);function S({children:e}){return(0,r.jsxs)("html",{lang:"en",children:[r.jsx(H,{children:r.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@context":"https://schema.org","@type":"VideoObject",name:"Promo video of a delicious meal",description:"Watch the promo video showcasing a delicious meal.",thumbnailUrl:"/images/thumbnail.png",uploadDate:"2024-09-20T08:00:00+00:00",duration:"PT2M30S",publisher:{"@type":"Organization",name:"Share Meal App",logo:{"@type":"ImageObject",url:"/images/thumbnail.png"}}})}})}),r.jsx("body",{className:`${n.variable} ${s.variable}`,children:(0,r.jsxs)(v.H,{children:[r.jsx(k,{}),r.jsx(w,{}),r.jsx("main",{children:e}),r.jsx(C,{})]})})]})}let k=()=>{let{user:e}=(0,v.a)();return console.log("User:",e),null}},6339:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>m});var r=a(326),n=a(7577),s=a(5771),o=a(6283),i=a(5609),l=a(477),d=a(2265),c=a(4746),u=a(434),p=a(5047),h=a(6503);function m(){let[e,t]=(0,n.useState)(""),[a,m]=(0,n.useState)(""),[g,x]=(0,n.useState)(""),[_,f]=(0,n.useState)(!1),j=(0,p.useRouter)(),{login:b}=(0,h.a)(),v=async t=>{t.preventDefault(),f(!0),x("");try{let t=await fetch("https://meal-sharing-final-backend.onrender.com/hosts");if(!t.ok)throw Error("Network response was not ok");let r=(await t.json()).find(t=>t.email===e&&t.password===a);r?(console.log("Login successful:",r.full_name),alert("Login successful! "+r.full_name),b(r.full_name),j.push(`/dashboard?user=${r.full_name}&id=${r.id}`)):x("Invalid email or password")}catch(e){console.error("Error fetching hosts:",e),x("Failed to fetch user data")}finally{f(!1)}};return r.jsx(s.default,{maxWidth:"xs",children:(0,r.jsxs)(o.default,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[r.jsx(i.default,{component:"h1",variant:"h5",children:"Sign in"}),g&&r.jsx(i.default,{color:"error",children:g})," ",(0,r.jsxs)(o.default,{component:"form",onSubmit:v,noValidate:!0,sx:{mt:1},children:[r.jsx(l.Z,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:e,onChange:e=>t(e.target.value)}),r.jsx(l.Z,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:a,onChange:e=>m(e.target.value)}),r.jsx(d.default,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},disabled:_,children:_?"Loading...":"Sign In"}),(0,r.jsxs)(c.Z,{container:!0,children:[r.jsx(c.Z,{item:!0,xs:!0,children:r.jsx(d.default,{href:"#",variant:"body2",disabled:_,children:"Forgot password?"})}),r.jsx(c.Z,{item:!0,children:r.jsx(u.default,{href:"../become-host",children:r.jsx(d.default,{variant:"body2",disabled:_,children:"Don't have an account? Become a Host"})})})]})]})]})})}},899:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});let r=(0,a(8570).createProxy)(String.raw`/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/layout.js#default`)},4213:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});let r=(0,a(8570).createProxy)(String.raw`/Users/nadiachristensen/Documents/HYF/meal-sharing-repo/mysolution/app/login/page.js#default`)}};var t=require("../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[948,601,621,477,746],()=>a(9598));module.exports=r})();