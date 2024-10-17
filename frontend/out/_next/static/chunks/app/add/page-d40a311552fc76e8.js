(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[853],{9752:function(e,t,a){Promise.resolve().then(a.bind(a,4973))},3019:function(e,t,a){"use strict";a.d(t,{default:function(){return b}});var i=a(2265),r=a(4839),n=a(587),o=a(6990),s=a(7434),l=a(664),d=a(9134),c=a(7173),u=a(7437);let _=(0,c.Z)(),p=(0,d.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.root,t[`maxWidth${(0,s.Z)(String(a.maxWidth))}`],a.fixed&&t.fixed,a.disableGutters&&t.disableGutters]}}),m=e=>(0,l.Z)({props:e,name:"MuiContainer",defaultTheme:_}),g=(e,t)=>{let{classes:a,fixed:i,disableGutters:r,maxWidth:l}=e,d={root:["root",l&&`maxWidth${(0,s.Z)(String(l))}`,i&&"fixed",r&&"disableGutters"]};return(0,o.Z)(d,e=>(0,n.ZP)(t,e),a)};var h=a(2272),x=a(8024),f=a(9281),b=function(e={}){let{createStyledComponent:t=p,useThemeProps:a=m,componentName:n="MuiContainer"}=e,o=t(({theme:e,ownerState:t})=>({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",...!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}}),({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce((t,a)=>{let i=e.breakpoints.values[a];return 0!==i&&(t[e.breakpoints.up(a)]={maxWidth:`${i}${e.breakpoints.unit}`}),t},{}),({theme:e,ownerState:t})=>({..."xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},...t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}}));return i.forwardRef(function(e,t){let i=a(e),{className:s,component:l="div",disableGutters:d=!1,fixed:c=!1,maxWidth:_="lg",classes:p,...m}=i,h={...i,component:l,disableGutters:d,fixed:c,maxWidth:_},x=g(h,n);return(0,u.jsx)(o,{as:l,ownerState:h,className:(0,r.Z)(x.root,s),ref:t,...m})})}({createStyledComponent:(0,x.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.root,t["maxWidth".concat((0,h.Z)(String(a.maxWidth)))],a.fixed&&t.fixed,a.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,f.Z)({props:e,name:"MuiContainer"})})},9134:function(e,t,a){"use strict";let i=(0,a(2902).ZP)();t.Z=i},7449:function(e,t){"use strict";function a(){return null}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8518:function(e){e.exports={header:"page_header__oRW75",navbar:"page_navbar__k3RMs",margin:"page_margin__dW79Q",grid:"page_grid__JZ9Cz",gridCard:"page_gridCard__SHr0g",courseButton:"page_courseButton__PCWLZ",courseButtonContainer:"page_courseButtonContainer__eS198",aboutParagraphs:"page_aboutParagraphs__oBds0",aboutHeader:"page_aboutHeader__qF7Si","contact-info":"page_contact-info__a4Z7l",container:"page_container__jZF7q",homeContainer:"page_homeContainer__AVfu4",addMealPage:"page_addMealPage__w_ouX",backgroundVideo:"page_backgroundVideo__EjNBN",videoWrapper:"page_videoWrapper__nmU9S",fadeOut:"page_fadeOut__fTsyT",content:"page_content___38fW",transcript:"page_transcript__4aCQE",cvText:"page_cvText__1AvYq",aboutContainer:"page_aboutContainer__DgMjX",main:"page_main__nw1Wk",becomeHostSection:"page_becomeHostSection__Dqkx_",becomeHostSectionForm:"page_becomeHostSectionForm__fxEtH",mediaBox:"page_mediaBox__VTlbq",mediaVideos:"page_mediaVideos__gySBt",imagesContainers:"page_imagesContainers__dIZiD",word:"page_word__YasOU",active:"page_active__9fwfh",homeTextFrontContainer:"page_homeTextFrontContainer__EHP1_",title:"page_title__po7na",map:"page_map__8FF97",closeButton:"page_closeButton__067Ye",loadingState:"page_loadingState__hO15Q",modal:"page_modal__Zu_ho","fade-out":"page_fade-out__CIMVF",addMealPageItems:"page_addMealPageItems__GzeF0",becomeHostFormContainer:"page_becomeHostFormContainer__rpALs",stylingPics:"page_stylingPics__P1Wki",aboutAddWhenResponsive:"page_aboutAddWhenResponsive__0U9Hy"}},4973:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return _}});var i=a(7437),r=a(2265),n=a(7449),o=a(3019),s=a(7156),l=a(3719),d=a(7432),c=a(6548),u=a(8518);function _(){let[e,t]=(0,r.useState)({title:"",description:"",location:"",price:"",max_reservations:""}),[a,_]=(0,r.useState)({}),p=e=>{let{id:a,value:i}=e.target;t(e=>({...e,[a]:i}))},m=()=>{let t={};e.title.trim()?(e.title.length<3||e.title.length>50)&&(t.title="Meal Name must be between 3 and 50 characters."):t.title="Meal Name is required.",e.description.trim()?e.description.length<10&&(t.description="Description must be at least 10 characters long."):t.description="Description is required.",e.location.trim()||(t.location="Place is required.");let a=parseFloat(e.price);(!e.price||isNaN(a)||a<=0||a>=3e3)&&(t.price="Price must be a positive number less than 3000.");let i=parseInt(e.max_reservations);return(!e.max_reservations||isNaN(i)||i<=0||i>500)&&(t.max_reservations="Max Reservations must be a positive integer up to 500."),_(t),0===Object.keys(t).length},g=async a=>{if(a.preventDefault(),m())try{(await fetch("https://meal-sharing-final-backend.onrender.com/meals",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).ok?(alert("New meal created successfully!"),t({title:"",description:"",location:"",price:"",max_reservations:""})):alert("Error creating meal.")}catch(e){console.error("Error creating meal:",e),alert("Error creating meal.")}};return(0,i.jsxs)("div",{className:u.container,children:[(0,i.jsxs)(n,{children:[(0,i.jsx)("title",{children:"Add Meal"}),(0,i.jsx)("meta",{name:"description",content:"Add a new meal"}),(0,i.jsx)("meta",{charSet:"UTF-8"})]}),(0,i.jsxs)("main",{children:[(0,i.jsx)(o.default,{maxWidth:"md",children:(0,i.jsx)(s.default,{className:u.addMealPage,children:(0,i.jsx)(l.default,{variant:"h4",component:"h1",children:"Add Meal"})})}),(0,i.jsx)(o.default,{maxWidth:"md",children:(0,i.jsxs)(s.default,{component:"form",sx:{mt:4,pt:0,pl:20,pr:20},onSubmit:g,className:u.addMealPageItems,children:[(0,i.jsxs)(s.default,{sx:{mb:3},children:[(0,i.jsx)("label",{htmlFor:"title",children:"Meal Name"}),(0,i.jsx)(d.Z,{id:"title",variant:"outlined",fullWidth:!0,required:!0,"aria-label":"Meal Name",value:e.title,onChange:p,error:!!a.title,helperText:a.title})]}),(0,i.jsxs)(s.default,{sx:{mb:3},children:[(0,i.jsx)("label",{htmlFor:"description",children:"Description"}),(0,i.jsx)(d.Z,{id:"description",variant:"outlined",fullWidth:!0,multiline:!0,rows:4,required:!0,"aria-label":"Description",value:e.description,onChange:p,error:!!a.description,helperText:a.description})]}),(0,i.jsxs)(s.default,{sx:{mb:3},children:[(0,i.jsx)("label",{htmlFor:"location",children:"Place"}),(0,i.jsx)(d.Z,{id:"location",variant:"outlined",fullWidth:!0,required:!0,"aria-label":"Place",value:e.location,onChange:p,error:!!a.location,helperText:a.location})]}),(0,i.jsxs)(s.default,{sx:{mb:3},children:[(0,i.jsx)("label",{htmlFor:"price",children:"Price in DKK"}),(0,i.jsx)(d.Z,{id:"price",type:"number",variant:"outlined",fullWidth:!0,required:!0,sx:{flex:1},"aria-label":"Price",value:e.price,onChange:p,error:!!a.price,helperText:a.price})]}),(0,i.jsxs)(s.default,{sx:{mb:3},children:[(0,i.jsx)("label",{htmlFor:"max_reservations",children:"Max Reservations"}),(0,i.jsx)(d.Z,{id:"max_reservations",type:"number",variant:"outlined",fullWidth:!0,required:!0,"aria-label":"Max Reservations",value:e.max_reservations,onChange:p,error:!!a.max_reservations,helperText:a.max_reservations})]}),(0,i.jsx)(c.Z,{variant:"contained",type:"submit","aria-label":"Submit",children:"Submit"})]})})]})]})}}},function(e){e.O(0,[851,156,154,71,432,971,23,744],function(){return e(e.s=9752)}),_N_E=e.O()}]);