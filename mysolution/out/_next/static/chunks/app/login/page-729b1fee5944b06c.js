(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{1119:function(e,t,a){Promise.resolve().then(a.bind(a,249))},5357:function(e,t,a){"use strict";a.d(t,{Z:function(){return x}});var n=a(2265),i=a(4839),s=a(587),r=a(6990),o=a(7434),d=a(3820),l=a(9134),u=a(7173),c=a(7437);let h=(0,u.Z)(),m=(0,l.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.root,t[`maxWidth${(0,o.Z)(String(a.maxWidth))}`],a.fixed&&t.fixed,a.disableGutters&&t.disableGutters]}}),f=e=>(0,d.default)({props:e,name:"MuiContainer",defaultTheme:h}),p=(e,t)=>{let{classes:a,fixed:n,disableGutters:i,maxWidth:d}=e,l={root:["root",d&&`maxWidth${(0,o.Z)(String(d))}`,n&&"fixed",i&&"disableGutters"]};return(0,r.Z)(l,e=>(0,s.ZP)(t,e),a)};function x(e={}){let{createStyledComponent:t=m,useThemeProps:a=f,componentName:s="MuiContainer"}=e,r=t(({theme:e,ownerState:t})=>({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",...!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}}),({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce((t,a)=>{let n=e.breakpoints.values[a];return 0!==n&&(t[e.breakpoints.up(a)]={maxWidth:`${n}${e.breakpoints.unit}`}),t},{}),({theme:e,ownerState:t})=>({..."xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},...t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}}));return n.forwardRef(function(e,t){let n=a(e),{className:o,component:d="div",disableGutters:l=!1,fixed:u=!1,maxWidth:h="lg",classes:m,...f}=n,x={...n,component:d,disableGutters:l,fixed:u,maxWidth:h},b=p(x,s);return(0,c.jsx)(r,{as:d,ownerState:x,className:(0,i.Z)(b.root,o),ref:t,...f})})}},249:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return m}});var n=a(7437),i=a(2265),s=a(8801),r=a(1193),o=a(3719),d=a(9021),l=a(6548),u=a(7349),c=a(7138),h=a(6463);function m(){let[e,t]=(0,i.useState)(""),[a,m]=(0,i.useState)(""),[f,p]=(0,i.useState)(""),[x,b]=(0,i.useState)(!1),g=(0,h.useRouter)(),v=async t=>{t.preventDefault(),b(!0),p("");try{let t=await fetch("https://meal-sharing-final-backend.onrender.com/hosts");if(!t.ok)throw Error("Network response was not ok");let n=(await t.json()).find(t=>t.email===e&&t.password===a);n?(console.log("Login successful:",n.full_name),alert("Login successful! "+n.full_name),g.push("/dashboard?user=".concat(n.full_name,"&id=").concat(n.id))):p("Invalid email or password")}catch(e){console.error("Error fetching hosts:",e),p("Failed to fetch user data")}finally{b(!1)}};return(0,n.jsx)(s.default,{maxWidth:"xs",children:(0,n.jsxs)(r.default,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,n.jsx)(o.default,{component:"h1",variant:"h5",children:"Sign in"}),(0,n.jsxs)(r.default,{component:"form",onSubmit:v,noValidate:!0,sx:{mt:1},children:[(0,n.jsx)(d.Z,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:e,onChange:e=>t(e.target.value)}),(0,n.jsx)(d.Z,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:a,onChange:e=>m(e.target.value)}),(0,n.jsxs)(l.default,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},disabled:x,children:[x?"Loading...":"Sign In"," "]}),(0,n.jsxs)(u.Z,{container:!0,children:[(0,n.jsx)(u.Z,{item:!0,xs:!0,children:(0,n.jsx)(l.default,{href:"#",variant:"body2",disabled:x,children:"Forgot password?"})}),(0,n.jsx)(u.Z,{item:!0,children:(0,n.jsx)(c.default,{href:"../become-host",children:(0,n.jsx)(l.default,{variant:"body2",disabled:x,children:"Don't have an account? Become a Host"})})})]})]})]})})}}},function(e){e.O(0,[193,47,643,596,21,190,349,971,23,744],function(){return e(e.s=1119)}),_N_E=e.O()}]);