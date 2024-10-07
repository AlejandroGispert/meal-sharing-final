(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[853],{7551:function(e,t,a){Promise.resolve().then(a.bind(a,4973))},8801:function(e,t,a){"use strict";var i=a(5357),r=a(2272),n=a(8024),o=a(9281);let s=(0,i.Z)({createStyledComponent:(0,n.default)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.root,t["maxWidth".concat((0,r.Z)(String(a.maxWidth)))],a.fixed&&t.fixed,a.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,o.default)({props:e,name:"MuiContainer"})});t.default=s},5357:function(e,t,a){"use strict";a.d(t,{Z:function(){return f}});var i=a(2265),r=a(4839),n=a(587),o=a(6990),s=a(7434),l=a(3820),d=a(9134),u=a(7173),c=a(7437);let _=(0,u.Z)(),p=(0,d.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.root,t[`maxWidth${(0,s.Z)(String(a.maxWidth))}`],a.fixed&&t.fixed,a.disableGutters&&t.disableGutters]}}),m=e=>(0,l.default)({props:e,name:"MuiContainer",defaultTheme:_}),h=(e,t)=>{let{classes:a,fixed:i,disableGutters:r,maxWidth:l}=e,d={root:["root",l&&`maxWidth${(0,s.Z)(String(l))}`,i&&"fixed",r&&"disableGutters"]};return(0,o.Z)(d,e=>(0,n.ZP)(t,e),a)};function f(e={}){let{createStyledComponent:t=p,useThemeProps:a=m,componentName:n="MuiContainer"}=e,o=t(({theme:e,ownerState:t})=>({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",...!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}}),({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce((t,a)=>{let i=e.breakpoints.values[a];return 0!==i&&(t[e.breakpoints.up(a)]={maxWidth:`${i}${e.breakpoints.unit}`}),t},{}),({theme:e,ownerState:t})=>({..."xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},...t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}}));return i.forwardRef(function(e,t){let i=a(e),{className:s,component:l="div",disableGutters:d=!1,fixed:u=!1,maxWidth:_="lg",classes:p,...m}=i,f={...i,component:l,disableGutters:d,fixed:u,maxWidth:_},g=h(f,n);return(0,c.jsx)(o,{as:l,ownerState:f,className:(0,r.Z)(g.root,s),ref:t,...m})})}},7449:function(e,t){"use strict";function a(){return null}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8518:function(e){e.exports={header:"page_header__oRW75",navbar:"page_navbar__k3RMs",margin:"page_margin__dW79Q",grid:"page_grid__JZ9Cz",gridCard:"page_gridCard__SHr0g",courseButton:"page_courseButton__PCWLZ",courseButtonContainer:"page_courseButtonContainer__eS198",aboutParagraphs:"page_aboutParagraphs__oBds0",aboutHeader:"page_aboutHeader__qF7Si","contact-info":"page_contact-info__a4Z7l",container:"page_container__jZF7q",backgroundVideo:"page_backgroundVideo__EjNBN",videoWrapper:"page_videoWrapper__nmU9S",fadeOut:"page_fadeOut__fTsyT",content:"page_content___38fW",transcript:"page_transcript__4aCQE",cvText:"page_cvText__1AvYq",aboutContainer:"page_aboutContainer__DgMjX",becomeHostSection:"page_becomeHostSection__Dqkx_",mediaBox:"page_mediaBox__VTlbq",mediaVideos:"page_mediaVideos__gySBt",imagesContainers:"page_imagesContainers__dIZiD",word:"page_word__YasOU",active:"page_active__9fwfh",homeTextFrontContainer:"page_homeTextFrontContainer__EHP1_",title:"page_title__po7na",map:"page_map__8FF97",becomeHostFormContainer:"page_becomeHostFormContainer__rpALs",stylingPics:"page_stylingPics__P1Wki",aboutAddWhenResponsive:"page_aboutAddWhenResponsive__0U9Hy"}},4973:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return _}});var i=a(7437),r=a(2265),n=a(7449),o=a(8801),s=a(1193),l=a(3719),d=a(9021),u=a(6548),c=a(8518);function _(){let[e,t]=(0,r.useState)({title:"",description:"",location:"",price:"",max_reservations:""}),a=e=>{let{id:a,value:i}=e.target;t(e=>({...e,[a]:i}))},_=async a=>{a.preventDefault();try{(await fetch("https://meal-sharing-final-backend.onrender.com/meals",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).ok?(alert("New meal created successfully!"),t({title:"",description:"",location:"",price:"",max_reservations:""})):alert("Error creating meal.")}catch(e){console.error("Error creating meal:",e),alert("Error creating meal.")}};return(0,i.jsxs)("div",{className:c.container,children:[(0,i.jsxs)(n,{children:[(0,i.jsx)("title",{children:"Add Meal"}),(0,i.jsx)("meta",{name:"description",content:"Add a new meal"}),(0,i.jsx)("meta",{charSet:"UTF-8"})]}),(0,i.jsxs)("main",{children:[(0,i.jsx)(o.default,{maxWidth:"md",children:(0,i.jsx)(s.default,{className:c.header,children:(0,i.jsx)(l.default,{variant:"h4",component:"h1",children:"Add Meal"})})}),(0,i.jsx)(o.default,{maxWidth:"md",children:(0,i.jsxs)(s.default,{component:"form",sx:{mt:4,pt:0,pl:20,pr:20},onSubmit:_,children:[(0,i.jsxs)(s.default,{sx:{mb:3},children:[(0,i.jsx)("label",{htmlFor:"title",children:"Meal Name"}),(0,i.jsx)(d.Z,{id:"title",variant:"outlined",fullWidth:!0,required:!0,"aria-label":"Meal Name",value:e.title,onChange:a})]}),(0,i.jsxs)(s.default,{sx:{mb:3},children:[(0,i.jsx)("label",{htmlFor:"description",children:"Description"}),(0,i.jsx)(d.Z,{id:"description",variant:"outlined",fullWidth:!0,multiline:!0,rows:4,required:!0,"aria-label":"Description",value:e.description,onChange:a})]}),(0,i.jsxs)(s.default,{sx:{mb:3},children:[(0,i.jsx)("label",{htmlFor:"location",children:"Place"}),(0,i.jsx)(d.Z,{id:"location",variant:"outlined",fullWidth:!0,required:!0,"aria-label":"Place",value:e.location,onChange:a})]}),(0,i.jsxs)(s.default,{sx:{mb:3},children:[(0,i.jsx)("label",{htmlFor:"price",children:"Price"}),(0,i.jsx)(d.Z,{id:"price",type:"number",variant:"outlined",fullWidth:!0,required:!0,"aria-label":"Price",value:e.price,onChange:a})]}),(0,i.jsxs)(s.default,{sx:{mb:3},children:[(0,i.jsx)("label",{htmlFor:"max_reservations",children:"Max Reservations"}),(0,i.jsx)(d.Z,{id:"max_reservations",type:"number",variant:"outlined",fullWidth:!0,required:!0,"aria-label":"Max Reservations",value:e.max_reservations,onChange:a})]}),(0,i.jsx)(u.default,{variant:"contained",type:"submit","aria-label":"Submit",children:"Submit"})]})})]})]})}}},function(e){e.O(0,[851,193,47,643,596,21,971,23,744],function(){return e(e.s=7551)}),_N_E=e.O()}]);