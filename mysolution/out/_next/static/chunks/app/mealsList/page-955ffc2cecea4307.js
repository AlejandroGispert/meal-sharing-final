(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[186],{2455:function(e,t,a){Promise.resolve().then(a.bind(a,4273))},8518:function(e){e.exports={header:"page_header__oRW75",navbar:"page_navbar__k3RMs",margin:"page_margin__dW79Q",grid:"page_grid__JZ9Cz",gridCard:"page_gridCard__SHr0g",courseButton:"page_courseButton__PCWLZ",courseButtonContainer:"page_courseButtonContainer__eS198",aboutParagraphs:"page_aboutParagraphs__oBds0",aboutHeader:"page_aboutHeader__qF7Si","contact-info":"page_contact-info__a4Z7l",container:"page_container__jZF7q",backgroundVideo:"page_backgroundVideo__EjNBN",videoWrapper:"page_videoWrapper__nmU9S",fadeOut:"page_fadeOut__fTsyT",content:"page_content___38fW",transcript:"page_transcript__4aCQE",cvText:"page_cvText__1AvYq",aboutContainer:"page_aboutContainer__DgMjX",becomeHostSection:"page_becomeHostSection__Dqkx_",mediaBox:"page_mediaBox__VTlbq",mediaVideos:"page_mediaVideos__gySBt",imagesContainers:"page_imagesContainers__dIZiD",word:"page_word__YasOU",active:"page_active__9fwfh",homeTextFrontContainer:"page_homeTextFrontContainer__EHP1_",title:"page_title__po7na",map:"page_map__8FF97",becomeHostFormContainer:"page_becomeHostFormContainer__rpALs",stylingPics:"page_stylingPics__P1Wki",aboutAddWhenResponsive:"page_aboutAddWhenResponsive__0U9Hy"}},998:function(e,t,a){"use strict";a.d(t,{H:function(){return l},a:function(){return o}});var n=a(7437),r=a(2265);let i=(0,r.createContext)(),o=()=>(0,r.useContext)(i),l=e=>{let{children:t}=e,[a,o]=(0,r.useState)(null);return(0,n.jsx)(i.Provider,{value:{user:a,login:e=>{o(e)},logout:()=>{o(null)}},children:t})}},4273:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return P}});var n=a(7437),r=a(2265),i=a(6548),o=a(3719),l=a(1193),s=a(7349),c=a(9021),d=a(8518),u=a(8620),h=a(6648),m=a(9388),g=a(8685),x=a(998);function p(e){let{reviews:t}=e,{user:a}=(0,x.a)(),r=e=>(0,n.jsx)(l.default,{children:Array.from({length:5}).map((t,a)=>a<e?(0,n.jsx)(m.Z,{sx:{color:"#FFD700"}},a):(0,n.jsx)(g.Z,{sx:{color:"#FFD700"}},a))});return(0,n.jsxs)(l.default,{sx:{position:"absolute",top:"10%",right:"5%",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:3,overflowY:"scroll",maxHeight:"80%",zIndex:5,borderRadius:2},children:[(0,n.jsx)(o.default,{variant:"h6",sx:{fontWeight:"bold",mb:2},children:"Reviews"}),t&&t.length>0?t.map((e,t)=>(0,n.jsxs)(l.default,{sx:{mb:3,p:2,borderRadius:1,border:"1px solid #ddd",bgcolor:"#f9f9f9"},children:[(0,n.jsx)(o.default,{variant:"h6",sx:{fontWeight:"bold"},children:e.title}),(0,n.jsx)(o.default,{variant:"body2",sx:{color:"#666",mb:1},children:e.description}),r(e.stars),a&&(0,n.jsxs)(o.default,{variant:"caption",sx:{color:"#888",mt:1,display:"block"},children:["Reviewed by ",a.name||"Anonymous"]})]},t)):(0,n.jsx)(o.default,{children:"No Reviews Available"})]})}a(7449);var f=a(8801),_=a(335),b=e=>{let{onRatingChange:t}=e,[a,i]=(0,r.useState)(0),o=e=>{i(e),t(e)};return(0,n.jsx)(l.default,{sx:{display:"flex",alignItems:"center"},children:[1,2,3,4,5].map(e=>(0,n.jsx)(_.default,{onClick:()=>o(e),children:e<=a?(0,n.jsx)(m.Z,{sx:{color:"yellow"}}):(0,n.jsx)(g.Z,{sx:{color:"gray"}})},e))})};let j={image:"images/thumbnail.png",tag1:"Title",tag2:"Description",tag3:"Stars",buttonTxt:"Submit"};function v(e){let{mealId:t}=e,[a,s]=(0,r.useState)(!0),[d,u]=(0,r.useState)(0),[h,m]=(0,r.useState)({title:"",description:"",meal_id:t,stars:d}),[g,x]=(0,r.useState)(j),p=e=>{let{id:t,value:a}=e.target;m(e=>({...e,[t]:"stars"===t?parseInt(a):a}))},_=async e=>{e.preventDefault();let{title:a,description:n,stars:r,meal_id:i}=h;try{let e=await fetch("https://meal-sharing-final-backend.onrender.com/reviews?title=".concat(encodeURIComponent(a),"&description=").concat(encodeURIComponent(n),"&stars=").concat(r,"&meal_id=").concat(i),{method:"POST",headers:{"Content-Type":"application/json"}});if(e.ok)alert("New review added!"),m({title:"",description:"",meal_id:t,stars:d});else{let t=await e.json();console.log("Error response from server:",t),alert("Error creating review: ".concat(t.message||"Unknown error"))}}catch(e){console.error("Error creating review:",e),alert("Error creating review.")}};return(0,n.jsxs)(f.default,{maxWidth:"md",sx:{mt:5,height:"900px",overflowY:"auto"},children:[(0,n.jsxs)(o.default,{variant:"h5",component:"h2",children:["Add Review ",(0,n.jsx)(b,{onRatingChange:e=>{u(e),m(t=>({...t,stars:e}))}})]}),(0,n.jsxs)(l.default,{component:"form",sx:{mt:4},onSubmit:_,children:[(0,n.jsxs)(l.default,{sx:{mb:3},children:[(0,n.jsx)("label",{htmlFor:"title",children:g.tag1}),(0,n.jsx)(c.Z,{id:"title",variant:"outlined",fullWidth:!0,required:!0,"aria-label":g.tag1,onChange:p})]}),(0,n.jsxs)(l.default,{sx:{mb:3},children:[(0,n.jsx)("label",{htmlFor:"description",children:g.tag2}),(0,n.jsx)(c.Z,{id:"description",variant:"outlined",fullWidth:!0,multiline:!0,rows:4,required:!0,"aria-label":g.tag2,onChange:p})]}),(0,n.jsx)(i.default,{variant:"contained",type:"submit","aria-label":"Submit",children:g.buttonTxt})]})]})}let w={image:"images/thumbnail.png",tag1:"Name",tag2:"Email",tag3:"Phone",tag4:"Number of guests",buttonTxt:"Submit Reservation"};function y(e){let{mealId:t}=e,[a,s]=(0,r.useState)(!0),[d,u]=(0,r.useState)({number_of_guests:"",contact_phonenumber:"",meal_id:t,contact_name:"",contact_email:""}),[h,m]=(0,r.useState)(w),g=e=>Object.keys(e).map(t=>encodeURIComponent(t)+"="+encodeURIComponent(e[t])).join("&"),x=e=>{let{id:t,value:a}=e.target;u(e=>({...e,[t]:"meal_id"===t||"number_of_guests"===t?parseInt(a):a}))},p=async e=>{if(e.preventDefault(),!d.contact_name||!d.contact_email||!d.contact_phonenumber||!d.number_of_guests||!d.meal_id){alert("Please fill in all the fields.");return}try{let e=g(d);(await fetch("https://meal-sharing-final-backend.onrender.com/reservations?".concat(e),{method:"GET",headers:{"Content-Type":"application/json"}})).ok?(alert("New reservation added!"),u({number_of_guests:"",meal_id:t,contact_phonenumber:"",contact_name:"",contact_email:""})):alert("Error creating reservation.")}catch(e){console.error("Error creating reservation:",e),alert("Error creating reservation.")}};return(0,n.jsxs)(f.default,{maxWidth:"md",sx:{mt:5,height:"900px",overflowY:"auto"},children:[(0,n.jsx)(o.default,{variant:"h5",component:"h2",children:"Make Reservation"}),(0,n.jsxs)(l.default,{component:"form",sx:{mt:4},onSubmit:p,children:[(0,n.jsxs)(l.default,{sx:{mb:3},children:[(0,n.jsx)("label",{htmlFor:"contact_name",children:h.tag1}),(0,n.jsx)(c.Z,{id:"contact_name",variant:"outlined",fullWidth:!0,required:!0,"aria-label":h.tag1,onChange:x})]}),(0,n.jsxs)(l.default,{sx:{mb:3},children:[(0,n.jsx)("label",{htmlFor:"contact_email",children:h.tag2}),(0,n.jsx)(c.Z,{id:"contact_email",variant:"outlined",fullWidth:!0,rows:4,required:!0,"aria-label":h.tag2,onChange:x})]}),(0,n.jsxs)(l.default,{sx:{mb:3},children:[(0,n.jsx)("label",{htmlFor:"contact_phonenumber",children:h.tag3}),(0,n.jsx)(c.Z,{id:"contact_phonenumber",variant:"outlined",fullWidth:!0,required:!0,"aria-label":h.tag3,onChange:x})]}),(0,n.jsxs)(l.default,{sx:{mb:3},children:[(0,n.jsx)("label",{htmlFor:"number_of_guests",children:h.tag4}),(0,n.jsx)(c.Z,{id:"number_of_guests",variant:"outlined",fullWidth:!0,required:!0,"aria-label":h.tag4,onChange:x})]}),(0,n.jsx)(i.default,{variant:"contained",type:"submit","aria-label":"Submit",children:h.buttonTxt})]})]})}function S(e){let{isOpen:t,setIsOpen:a,fetchedSingleMeal:s,currentMealId:c}=e,[d,m]=(0,r.useState)(null),[g,f]=(0,r.useState)([]),[_,b]=(0,r.useState)(!1),[j,w]=(0,r.useState)(!1),[S,C]=(0,r.useState)(!1),[k,F]=(0,r.useState)(!1),[Z,R]=(0,r.useState)(!0),[E,W]=(0,r.useState)(!0),[T,A]=(0,r.useState)("Unknown"),{user:P}=(0,x.a)(),H=async e=>{try{let t=await fetch("https://meal-sharing-final-backend.onrender.com/meals/".concat(e));if(!t.ok)throw Error("Failed to fetch meal data");let a=await t.json();return console.log("Fetched meal data:",a),a}catch(e){return console.error(e),null}},N=async e=>{try{let t=await fetch("https://meal-sharing-final-backend.onrender.com/meals/".concat(e,"/reviews"));if(!t.ok)throw Error("Failed to fetch reviews");let a=await t.json();return console.log("Fetched reviews:",a),Array.isArray(a)?a:[]}catch(e){return console.error(e),[]}};(0,r.useEffect)(()=>(t&&(W(!0),m(null),H(c).then(e=>{e&&m(Array.isArray(e)?e[0]:e),W(!1)}),N(c).then(e=>f(e))),()=>{}),[t,c]);let I=()=>{a(!1),F(!1),R(!0),b(!1)};return(0,n.jsxs)(n.Fragment,{children:[void 0!==t&&(0,n.jsx)(u.Z,{open:t,onClose:I,disablePortal:!0,hideBackdrop:!Z,children:(0,n.jsxs)(l.default,{sx:{position:"absolute",top:"50%",left:k?"30%":"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4,transition:"left 0.5s ease"},children:[E?(0,n.jsx)(o.default,{children:"Loading..."}):d?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.default,{id:"simple-modal-title",variant:"h6",component:"h2",children:["Meal: ",d.title]}),(0,n.jsx)(h.default,{alt:d.title,src:d.image_url?d.image_url:"./images/empty.jpg",width:300,height:300,layout:"intrinsic"}),(0,n.jsxs)(o.default,{id:"simple-modal-description",sx:{mt:2},children:["Description: ",d.description]}),(0,n.jsxs)(o.default,{variant:"body1",children:["Place: ",d.location]}),(0,n.jsx)(o.default,{variant:"h6",color:"textSecondary",children:(0,n.jsxs)(o.default,{variant:"body1",children:["Max Reservations: ",d.max_reservations]})}),(0,n.jsxs)(o.default,{children:["Price: ",d.price]}),(0,n.jsxs)(o.default,{variant:"h6",color:"textSecondary",children:["Status: ",T]})]}):(0,n.jsx)(o.default,{children:"Failed to load meal data"}),(0,n.jsx)(i.default,{onClick:I,variant:"outlined",sx:{mt:2},children:"Close"}),P&&(0,n.jsx)(i.default,{onClick:()=>{w(e=>!e)},variant:"outlined",sx:{mt:2},children:j?"Hide":"Reserve"}),(0,n.jsx)(i.default,{onClick:()=>{b(e=>!e),F(!0),R(!1)},variant:"outlined",sx:{mt:2},children:_?"Hide Reviews":"Show Reviews"}),P&&(0,n.jsx)(i.default,{onClick:()=>{C(e=>!e)},variant:"outlined",sx:{mt:2},children:S?"Hide":"Add Reviews"}),S&&(0,n.jsx)(l.default,{children:(0,n.jsx)(v,{mealId:c})}),j&&(0,n.jsx)(y,{mealId:c})]})}),_&&(0,n.jsx)(p,{reviews:g})]})}var C=a(2900),k=a(7260),F=a(270),Z=a(4696),R=a(5349);function E(e){let{meal:t,index:a,handleOpenModal:r}=e;return(0,n.jsxs)(F.Z,{className:d.gridCard,children:[(0,n.jsx)(o.default,{variant:"h6",component:"div",sx:{textAlign:"center",padding:2,fontWeight:"bold"},children:t.title}),(0,n.jsx)(R.Z,{alt:t.title,src:t.image_url?t.image_url:"./images/empty.jpg",sx:{width:100,height:100,margin:"auto"}}),(0,n.jsxs)(Z.Z,{children:[(0,n.jsxs)(o.default,{variant:"body1",children:["Reservations: ",t.max_reservations]}),(0,n.jsxs)(o.default,{variant:"h6",color:"textSecondary",children:["Price: ",t.price]})]}),(0,n.jsxs)(i.default,{variant:"contained",color:"primary",onClick:()=>r(t.id),children:["See meal#",t.id]},a)]})}let W=async e=>{let t=await fetch("https://meal-sharing-final-backend.onrender.com/meals?sortKey=id&sortDir=".concat(e)),a=await t.json();return console.log(a),a},T=async(e,t)=>{let a="asc"===t?"https://meal-sharing-final-backend.onrender.com/meals/".concat(e,"?sortDir=").concat(t):"https://meal-sharing-final-backend.onrender.com/meals/".concat(e),n=await fetch(a);return await n.json()},A=async(e,t)=>{let a="asc"===t?"https://meal-sharing-final-backend.onrender.com/meals?title=".concat(e,"&sortDir=").concat(t):"https://meal-sharing-final-backend.onrender.com/meals?title=".concat(e),n=await fetch(a),r=await n.json();return console.log(r),r};function P(){let[e,t]=(0,r.useState)([]),[a,u]=(0,r.useState)(null),[h,m]=(0,r.useState)(!1),[g,x]=(0,r.useState)(null),[p,f]=(0,r.useState)(""),[_,b]=(0,r.useState)("desc"),[j,v]=(0,r.useState)("Active"),w=async()=>{try{let e=await A(p,_);t(e),console.log("done"),console.log(e)}catch(e){console.error("Error searching meals:",e)}},y=async e=>{b(e),console.log("direction "+e)},F=async e=>{try{let t=await T(e,_);u(t[0]),x(e),m(!0),console.log("this "+t[0])}catch(e){console.error("Error fetching single meal:",e)}};return(0,r.useEffect)(()=>{(async()=>{try{let e=await W(_);t(e)}catch(e){console.error("Error fetching meals:",e)}})()},[_]),(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:d.header,children:[(0,n.jsx)(c.Z,{label:"Search meal",variant:"outlined",value:p,onChange:e=>f(e.target.value)}),(0,n.jsx)(i.default,{onClick:w,children:"search"})]}),(0,n.jsx)(S,{isOpen:h,setIsOpen:m,fetchedSingleMeal:a,currentMealId:g}),(0,n.jsxs)(l.default,{sx:{flexGrow:1,padding:2},children:[(0,n.jsxs)("div",{children:[(0,n.jsxs)(i.default,{children:[" ",(0,n.jsx)(C.Z,{onClick:()=>y("asc")})]}),(0,n.jsxs)(i.default,{children:[" ",(0,n.jsx)(k.Z,{onClick:()=>y("desc")})]})]}),(0,n.jsx)(s.Z,{className:d.grid,container:!0,spacing:6,children:e.length>0?e.map((e,t)=>(0,n.jsx)(s.Z,{item:!0,xs:12,sm:6,md:3,children:(0,n.jsx)(E,{meal:e,index:t,handleOpenModal:F})},t)):(0,n.jsxs)(o.default,{variant:"h6",component:"div",sx:{textAlign:"center",padding:2},children:["No meals available.",(0,n.jsx)("br",{})," Try again later"]})})]})]})}}},function(e){e.O(0,[851,193,49,643,173,200,21,349,410,971,23,744],function(){return e(e.s=2455)}),_N_E=e.O()}]);