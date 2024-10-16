"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[815],{6760:function(e,t,r){r.r(t);var n=r(9018),o=r(7437);t.default=(0,n.Z)((0,o.jsx)("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"}),"Menu")},335:function(e,t,r){r.d(t,{default:function(){return b}});var n=r(2265),o=r(4839),i=r(6990),l=r(6031),a=r(8024),c=r(339),s=r(8683),u=r(5885),d=r(8680),f=r(2272),m=r(2296),p=r(587);function h(e){return(0,p.ZP)("MuiIconButton",e)}let g=(0,m.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]);var v=r(7437);let y=e=>{let{classes:t,disabled:r,color:n,edge:o,size:l}=e,a={root:["root",r&&"disabled","default"!==n&&"color".concat((0,f.Z)(n)),o&&"edge".concat((0,f.Z)(o)),"size".concat((0,f.Z)(l))]};return(0,i.Z)(a,h,t)},S=(0,a.default)(d.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,"default"!==r.color&&t["color".concat((0,f.Z)(r.color))],r.edge&&t["edge".concat((0,f.Z)(r.edge))],t["size".concat((0,f.Z)(r.size))]]}})((0,c.Z)(e=>{let{theme:t}=e;return{textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),variants:[{props:{disableRipple:!1},style:{"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.action.activeChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,l.Fq)(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}},{props:{edge:"start"},style:{marginLeft:-12}},{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:{edge:"end"},style:{marginRight:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}}]}}),(0,c.Z)(e=>{let{theme:t}=e;return{variants:[{props:{color:"inherit"},style:{color:"inherit"}},...Object.entries(t.palette).filter((0,s.Z)()).map(e=>{let[r]=e;return{props:{color:r},style:{color:(t.vars||t).palette[r].main}}}),...Object.entries(t.palette).filter((0,s.Z)()).map(e=>{let[r]=e;return{props:{color:r,disableRipple:!1},style:{"&:hover":{backgroundColor:t.vars?"rgba(".concat((t.vars||t).palette[r].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,l.Fq)((t.vars||t).palette[r].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}}}),{props:{size:"small"},style:{padding:5,fontSize:t.typography.pxToRem(18)}},{props:{size:"large"},style:{padding:12,fontSize:t.typography.pxToRem(28)}}],["&.".concat(g.disabled)]:{backgroundColor:"transparent",color:(t.vars||t).palette.action.disabled}}}));var b=n.forwardRef(function(e,t){let r=(0,u.i)({props:e,name:"MuiIconButton"}),{edge:n=!1,children:i,className:l,color:a="default",disabled:c=!1,disableFocusRipple:s=!1,disableRipple:d=!1,size:f="medium",...m}=r,p={...r,edge:n,color:a,disabled:c,disableFocusRipple:s,disableRipple:d,size:f},h=y(p);return(0,v.jsx)(S,{className:(0,o.Z)(h.root,l),centerRipple:!0,focusRipple:!s,disabled:c,disableRipple:d,ref:t,...m,ownerState:p,children:i})})},4446:function(e,t,r){r.d(t,{default:function(){return c}}),r(2265);var n=r(9671),o=r(2737),i=r(7437);function l(e){let{theme:t,...r}=e,l=o.Z in t?t[o.Z]:void 0;return(0,i.jsx)(n.default,{...r,themeId:l?o.Z:void 0,theme:l||t})}var a=r(6110);function c(e){let{theme:t,...r}=e;return"function"!=typeof t&&"colorSchemes"in(o.Z in t?t[o.Z]:t)?(0,i.jsx)(a.CssVarsProvider,{theme:t,...r}):(0,i.jsx)(l,{theme:t,...r})}},6110:function(e,t,r){r.r(t),r.d(t,{CssVarsProvider:function(){return S},Experimental_CssVarsProvider:function(){return g},getInitColorSchemeScript:function(){return y},useColorScheme:function(){return p}});var n=r(2265),o=r(5263),i=r(6003),l=r(9397),a=r(9671),c=r(5398),s=r(1866),u=r(7437),d=r(4732),f=r(5032);let{CssVarsProvider:m,useColorScheme:p,getInitColorSchemeScript:h}=function(e){let{themeId:t,theme:r={},modeStorageKey:o=c.RI,colorSchemeStorageKey:d=c.Wp,disableTransitionOnChange:f=!1,defaultColorScheme:m,resolveTheme:p}=e,h={allColorSchemes:[],colorScheme:void 0,darkColorScheme:void 0,lightColorScheme:void 0,mode:void 0,setColorScheme:()=>{},setMode:()=>{},systemMode:void 0},g=n.createContext(void 0),v="string"==typeof m?m:m.light,y="string"==typeof m?m:m.dark;return{CssVarsProvider:function(e){let{children:c,theme:h,modeStorageKey:v=o,colorSchemeStorageKey:y=d,disableTransitionOnChange:S=f,storageWindow:b="undefined"==typeof window?void 0:window,documentNode:k="undefined"==typeof document?void 0:document,colorSchemeNode:w="undefined"==typeof document?void 0:document.documentElement,disableNestedContext:x=!1,disableStyleSheetGeneration:$=!1}=e,Z=n.useRef(!1),C=(0,l.Z)(),j=n.useContext(g),M=!!j&&!x,E=n.useMemo(()=>h||("function"==typeof r?r():r),[h]),I=E[t],{colorSchemes:R={},components:_={},cssVarPrefix:P,...G}=I||E,z=Object.keys(R).filter(e=>!!R[e]).join(","),L=n.useMemo(()=>z.split(","),[z]),O="string"==typeof m?m:m.light,A="string"==typeof m?m:m.dark,N=R[O]&&R[A]?"system":R[G.defaultColorScheme]?.palette?.mode||G.palette?.mode,{mode:W,setMode:T,systemMode:V,lightColorScheme:B,darkColorScheme:K,colorScheme:F,setColorScheme:H}=(0,s.default)({supportedColorSchemes:L,defaultLightColorScheme:O,defaultDarkColorScheme:A,modeStorageKey:v,colorSchemeStorageKey:y,defaultMode:N,storageWindow:b}),q=W,D=F;M&&(q=j.mode,D=j.colorScheme);let U=D||G.defaultColorScheme,Q=G.generateThemeVars?.()||G.vars,Y={...G,components:_,colorSchemes:R,cssVarPrefix:P,vars:Q};if("function"==typeof Y.generateSpacing&&(Y.spacing=Y.generateSpacing()),U){let e=R[U];e&&"object"==typeof e&&Object.keys(e).forEach(t=>{e[t]&&"object"==typeof e[t]?Y[t]={...Y[t],...e[t]}:Y[t]=e[t]})}let J=G.colorSchemeSelector;n.useEffect(()=>{if(D&&w&&J&&"media"!==J){let e=J;if("class"===J&&(e=".%s"),"data"===J&&(e="[data-%s]"),J?.startsWith("data-")&&!J.includes("%s")&&(e=`[${J}="%s"]`),e.startsWith("."))w.classList.remove(...L.map(t=>e.substring(1).replace("%s",t))),w.classList.add(e.substring(1).replace("%s",D));else{let t=e.replace("%s",D).match(/\[([^\]]+)\]/);if(t){let[e,r]=t[1].split("=");r||L.forEach(t=>{w.removeAttribute(e.replace(D,t))}),w.setAttribute(e,r?r.replace(/"|'/g,""):"")}else w.setAttribute(e,D)}}},[D,J,w,L]),n.useEffect(()=>{let e;if(S&&Z.current&&k){let t=k.createElement("style");t.appendChild(k.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),k.head.appendChild(t),window.getComputedStyle(k.body),e=setTimeout(()=>{k.head.removeChild(t)},1)}return()=>{clearTimeout(e)}},[D,S,k]),n.useEffect(()=>(Z.current=!0,()=>{Z.current=!1}),[]);let X=n.useMemo(()=>({allColorSchemes:L,colorScheme:D,darkColorScheme:K,lightColorScheme:B,mode:q,setColorScheme:H,setMode:T,systemMode:V}),[L,D,K,B,q,H,T,V]),ee=!0;($||!1===G.cssVariables||M&&C?.cssVarPrefix===P)&&(ee=!1);let et=(0,u.jsxs)(n.Fragment,{children:[ee&&(0,u.jsx)(n.Fragment,{children:(Y.generateStyleSheets?.()||[]).map((e,t)=>(0,u.jsx)(i.default,{styles:e},t))}),(0,u.jsx)(a.default,{themeId:I?t:void 0,theme:p?p(Y):Y,children:c})]});return M?et:(0,u.jsx)(g.Provider,{value:X,children:et})},useColorScheme:()=>n.useContext(g)||h,getInitColorSchemeScript:e=>(0,c.ZP)({colorSchemeStorageKey:d,defaultLightColorScheme:v,defaultDarkColorScheme:y,modeStorageKey:o,...e})}}({themeId:r(2737).Z,theme:()=>(0,d.Z)({cssVariables:!0}),colorSchemeStorageKey:"mui-color-scheme",modeStorageKey:"mui-mode",defaultColorScheme:{light:"light",dark:"dark"},resolveTheme:e=>{let t={...e,typography:(0,f.Z)(e.palette,e.typography)};return t.unstable_sx=function(e){return(0,o.Z)({sx:e,theme:this})},t}});function g(e){return(0,u.jsx)(m,{...e})}let v=!1,y=e=>(v||(console.warn("MUI: The getInitColorSchemeScript function has been deprecated.\n\nYou should use `import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'`\nand replace the function call with `<InitColorSchemeScript />` instead."),v=!0),h(e)),S=m},6950:function(e,t,r){let n=r(2265).createContext(null);t.Z=n},9397:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(2265),o=r(6950);function i(){return n.useContext(o.Z)}},2774:function(e,t,r){let n;r.d(t,{default:function(){return c}}),r(2265);var o=r(3209),i=r(1878),l=r(1419),a=r(7437);function c(e){let{injectFirst:t,children:r}=e;return t&&n?(0,a.jsx)(o.C,{value:n,children:r}):r}"object"==typeof document&&(n=(e=>{let t=(0,i.Z)(e);class r extends l.m{constructor(e){super(e),this.prepend=t.sheet.prepend}}return t.sheet=new r({key:t.key,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy,prepend:t.sheet.prepend,insertionPoint:t.sheet.insertionPoint}),t})({key:"css",prepend:!0}))},1285:function(e,t,r){r.d(t,{default:function(){return l}});var n=r(9424),o=r(5748);let i=(0,r(2296).Z)("MuiBox",["root"]);var l=(0,o.default)({defaultClassName:i.root,generateClassName:n.Z.generate})},7063:function(e,t,r){let n=(0,r(5357).Z)();t.default=n},7473:function(e,t,r){r.r(t);let n=(0,r(4609).Z)();t.default=n},4609:function(e,t,r){r.d(t,{Z:function(){return P}});var n=r(2265),o=r(4839),i=r(4686),l=r(587),a=r(6990),c=r(9134),s=r(3820),u=r(1661),d=r(9325),f=r(7173);let m=(e,t)=>e.filter(e=>t.includes(e)),p=(e,t,r)=>{let n=e.keys[0];Array.isArray(t)?t.forEach((t,n)=>{r((t,r)=>{n<=e.keys.length-1&&(0===n?Object.assign(t,r):t[e.up(e.keys[n])]=r)},t)}):t&&"object"==typeof t?(Object.keys(t).length>e.keys.length?e.keys:m(e.keys,Object.keys(t))).forEach(o=>{if(e.keys.includes(o)){let i=t[o];void 0!==i&&r((t,r)=>{n===o?Object.assign(t,r):t[e.up(o)]=r},i)}}):("number"==typeof t||"string"==typeof t)&&r((e,t)=>{Object.assign(e,t)},t)};function h(e){return e?`Level${e}`:""}function g(e){return e.unstable_level>0&&e.container}function v(e){return function(t){return 0===e.unstable_level?`var(--Grid-${t}Spacing)`:`var(--Grid-${t}Spacing${h(e.unstable_level-1)})`}}function y(e){return 0===e.unstable_level?"var(--Grid-columns)":`var(--Grid-columns${h(e.unstable_level-1)})`}let S=({theme:e,ownerState:t})=>{let r=v(t),n={};return p(e.breakpoints,t.size,(e,o)=>{let i={};"grow"===o&&(i={flexBasis:0,flexGrow:1,maxWidth:"100%"}),"auto"===o&&(i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),"number"==typeof o&&(i={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${o} / ${y(t)} - (${y(t)} - ${o}) * (${r("column")} / ${y(t)}))`}),e(n,i)}),n},b=({theme:e,ownerState:t})=>{let r=v(t),n={};return p(e.breakpoints,t.offset,(e,o)=>{let i={};"auto"===o&&(i={marginLeft:"auto"}),"number"==typeof o&&(i={marginLeft:0===o?"0px":`calc(100% * ${o} / ${y(t)} + ${r("column")} * ${o} / ${y(t)})`}),e(n,i)}),n},k=({theme:e,ownerState:t})=>{if(!t.container)return{};let r=g(t)?{[`--Grid-columns${h(t.unstable_level)}`]:y(t)}:{"--Grid-columns":12};return p(e.breakpoints,t.columns,(e,n)=>{e(r,{[`--Grid-columns${h(t.unstable_level)}`]:n})}),r},w=({theme:e,ownerState:t})=>{if(!t.container)return{};let r=v(t),n=g(t)?{[`--Grid-rowSpacing${h(t.unstable_level)}`]:r("row")}:{};return p(e.breakpoints,t.rowSpacing,(r,o)=>{r(n,{[`--Grid-rowSpacing${h(t.unstable_level)}`]:"string"==typeof o?o:e.spacing?.(o)})}),n},x=({theme:e,ownerState:t})=>{if(!t.container)return{};let r=v(t),n=g(t)?{[`--Grid-columnSpacing${h(t.unstable_level)}`]:r("column")}:{};return p(e.breakpoints,t.columnSpacing,(r,o)=>{r(n,{[`--Grid-columnSpacing${h(t.unstable_level)}`]:"string"==typeof o?o:e.spacing?.(o)})}),n},$=({theme:e,ownerState:t})=>{if(!t.container)return{};let r={};return p(e.breakpoints,t.direction,(e,t)=>{e(r,{flexDirection:t})}),r},Z=({ownerState:e})=>{let t=function(t){return`var(--Grid-${t}Spacing${h(e.unstable_level)})`};return{minWidth:0,boxSizing:"border-box",...e.container&&{display:"flex",flexWrap:"wrap",...e.wrap&&"wrap"!==e.wrap&&{flexWrap:e.wrap},gap:`${t("row")} ${t("column")}`}}},C=e=>{let t=[];return Object.entries(e).forEach(([e,r])=>{!1!==r&&void 0!==r&&t.push(`grid-${e}-${String(r)}`)}),t},j=(e,t="xs")=>{function r(e){return void 0!==e&&("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e&&e>0)}if(r(e))return[`spacing-${t}-${String(e)}`];if("object"==typeof e&&!Array.isArray(e)){let t=[];return Object.entries(e).forEach(([e,n])=>{r(n)&&t.push(`spacing-${e}-${String(n)}`)}),t}return[]},M=e=>void 0===e?[]:"object"==typeof e?Object.entries(e).map(([e,t])=>`direction-${e}-${t}`):[`direction-xs-${String(e)}`];var E=r(7437);let I=(0,f.Z)(),R=(0,c.Z)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>t.root});function _(e){return(0,s.default)({props:e,name:"MuiGrid",defaultTheme:I})}function P(e={}){let{createStyledComponent:t=R,useThemeProps:r=_,componentName:c="MuiGrid"}=e,s=(e,t)=>{let{container:r,direction:n,spacing:o,wrap:i,size:s}=e,u={root:["root",r&&"container","wrap"!==i&&`wrap-xs-${String(i)}`,...M(n),...C(s),...r?j(o,t.breakpoints.keys[0]):[]]};return(0,a.Z)(u,e=>(0,l.ZP)(c,e),{})};function f(e,t,r=()=>!0){let n={};return null===e||(Array.isArray(e)?e.forEach((e,o)=>{null!==e&&r(e)&&t.keys[o]&&(n[t.keys[o]]=e)}):"object"==typeof e?Object.keys(e).forEach(t=>{let o=e[t];null!=o&&r(o)&&(n[t]=o)}):n[t.keys[0]]=e),n}let m=t(k,x,w,S,$,Z,b),p=n.forwardRef(function(e,t){let l=(0,u.default)(),a=r(e),c=(0,d.Z)(a),{className:p,children:h,columns:g=12,container:v=!1,component:y="div",direction:S="row",wrap:b="wrap",size:k={},offset:w={},spacing:x=0,rowSpacing:$=x,columnSpacing:Z=x,unstable_level:C=0,...j}=c,M=f(k,l.breakpoints,e=>!1!==e),I=f(w,l.breakpoints),R=e.columns??(C?void 0:g),_=e.spacing??(C?void 0:x),P=e.rowSpacing??e.spacing??(C?void 0:$),G=e.columnSpacing??e.spacing??(C?void 0:Z),z={...c,level:C,columns:R,container:v,direction:S,wrap:b,spacing:_,rowSpacing:P,columnSpacing:G,size:M,offset:I},L=s(z,l);return(0,E.jsx)(m,{ref:t,as:y,ownerState:z,className:(0,o.Z)(L.root,p),...j,children:n.Children.map(h,e=>n.isValidElement(e)&&(0,i.Z)(e,["Grid"])?n.cloneElement(e,{unstable_level:e.props?.unstable_level??C+1}):e)})});return p.muiName="Grid",p}},5398:function(e,t,r){r.d(t,{RI:function(){return o},Wp:function(){return i},ZP:function(){return l}}),r(2265);var n=r(7437);let o="mode",i="color-scheme";function l(e){let{defaultLightColorScheme:t="light",defaultDarkColorScheme:r="dark",modeStorageKey:l=o,colorSchemeStorageKey:a=i,attribute:c="data-color-scheme",colorSchemeNode:s="document.documentElement",nonce:u}=e||{},d="",f=c;if("class"===c&&(f=".%s"),"data"===c&&(f="[data-%s]"),f.startsWith(".")){let e=f.substring(1);d+=`${s}.classList.remove('${e}'.replace('%s', light), '${e}'.replace('%s', dark));
      ${s}.classList.add('${e}'.replace('%s', colorScheme));`}let m=f.match(/\[([^\]]+)\]/);if(m){let[e,t]=m[1].split("=");t||(d+=`${s}.removeAttribute('${e}'.replace('%s', light));
      ${s}.removeAttribute('${e}'.replace('%s', dark));`),d+=`
      ${s}.setAttribute('${e}'.replace('%s', colorScheme), ${t?`${t}.replace('%s', colorScheme)`:'""'});`}else d+=`${s}.setAttribute('${f}', colorScheme);`;return(0,n.jsx)("script",{suppressHydrationWarning:!0,nonce:"undefined"==typeof window?u:"",dangerouslySetInnerHTML:{__html:`(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${l}') || 'system';
  const dark = localStorage.getItem('${a}-dark') || '${r}';
  const light = localStorage.getItem('${a}-light') || '${t}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${d}
  }
} catch(e){}})();`}},"mui-color-scheme-init")}},2251:function(e,t,r){r.r(t),r.d(t,{default:function(){return b}});var n=r(2265),o=r(4839),i=r(424),l=r(587),a=r(6990),c=r(9134),s=r(3820),u=r(9325),d=r(7173),f=r(3877),m=r(1572),p=r(7437);let h=(0,d.Z)(),g=(0,c.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function v(e){return(0,s.default)({props:e,name:"MuiStack",defaultTheme:h})}let y=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],S=({ownerState:e,theme:t})=>{let r={display:"flex",flexDirection:"column",...(0,f.k9)({theme:t},(0,f.P$)({values:e.direction,breakpoints:t.breakpoints.values}),e=>({flexDirection:e}))};if(e.spacing){let n=(0,m.hB)(t),o=Object.keys(t.breakpoints.values).reduce((t,r)=>(("object"==typeof e.spacing&&null!=e.spacing[r]||"object"==typeof e.direction&&null!=e.direction[r])&&(t[r]=!0),t),{}),l=(0,f.P$)({values:e.direction,base:o}),a=(0,f.P$)({values:e.spacing,base:o});"object"==typeof l&&Object.keys(l).forEach((e,t,r)=>{if(!l[e]){let n=t>0?l[r[t-1]]:"column";l[e]=n}}),r=(0,i.Z)(r,(0,f.k9)({theme:t},a,(t,r)=>e.useFlexGap?{gap:(0,m.NA)(n,t)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${y(r?l[r]:e.direction)}`]:(0,m.NA)(n,t)}}))}return(0,f.dt)(t.breakpoints,r)};var b=function(e={}){let{createStyledComponent:t=g,useThemeProps:r=v,componentName:i="MuiStack"}=e,c=()=>(0,a.Z)({root:["root"]},e=>(0,l.ZP)(i,e),{}),s=t(S);return n.forwardRef(function(e,t){let i=r(e),{component:l="div",direction:a="column",spacing:d=0,divider:f,children:m,className:h,useFlexGap:g=!1,...v}=(0,u.Z)(i),y=c();return(0,p.jsx)(s,{as:l,ownerState:{direction:a,spacing:d,useFlexGap:g},ref:t,className:(0,o.Z)(y.root,h),...v,children:f?function(e,t){let r=n.Children.toArray(e).filter(Boolean);return r.reduce((e,o,i)=>(e.push(o),i<r.length-1&&e.push(n.cloneElement(t,{key:`separator-${i}`})),e),[])}(m,f):m})})}()},9671:function(e,t,r){r.d(t,{default:function(){return h}});var n=r(2265),o=r(9397),i=r(6950),l="function"==typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__",a=r(7437),c=function(e){let{children:t,theme:r}=e,c=(0,o.Z)(),s=n.useMemo(()=>{let e=null===c?{...r}:"function"==typeof r?r(c):{...c,...r};return null!=e&&(e[l]=null!==c),e},[r,c]);return(0,a.jsx)(i.Z.Provider,{value:s,children:t})},s=r(3209),u=r(2739),d=r(9942),f=r(3289);let m={};function p(e,t,r){let o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return n.useMemo(()=>{let n=e&&t[e]||t;if("function"==typeof r){let i=r(n),l=e?{...t,[e]:i}:i;return o?()=>l:l}return e?{...t,[e]:r}:{...t,...r}},[e,t,r,o])}var h=function(e){let{children:t,theme:r,themeId:n}=e,i=(0,u.default)(m),l=(0,o.Z)()||m,h=p(n,i,r),g=p(n,l,r,!0),v="rtl"===h.direction;return(0,a.jsx)(c,{theme:g,children:(0,a.jsx)(s.T.Provider,{value:h,children:(0,a.jsx)(d.Z,{value:v,children:(0,a.jsx)(f.Z,{value:null==h?void 0:h.components,children:t})})})})}},1866:function(e,t,r){r.d(t,{default:function(){return c}});var n=r(2265),o=r(5398);function i(e){if("undefined"!=typeof window&&"function"==typeof window.matchMedia&&"system"===e)return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function l(e,t){return"light"===e.mode||"system"===e.mode&&"light"===e.systemMode?t("light"):"dark"===e.mode||"system"===e.mode&&"dark"===e.systemMode?t("dark"):void 0}function a(e,t){let r;if("undefined"!=typeof window){try{(r=localStorage.getItem(e)||void 0)||localStorage.setItem(e,t)}catch(e){}return r||t}}function c(e){let{defaultMode:t="light",defaultLightColorScheme:r,defaultDarkColorScheme:c,supportedColorSchemes:s=[],modeStorageKey:u=o.RI,colorSchemeStorageKey:d=o.Wp,storageWindow:f="undefined"==typeof window?void 0:window}=e,m=s.join(","),p=s.length>1,[h,g]=n.useState(()=>{let e=a(u,t),n=a("".concat(d,"-light"),r),o=a("".concat(d,"-dark"),c);return{mode:e,systemMode:i(e),lightColorScheme:n,darkColorScheme:o}}),[,v]=n.useState(!1),y=n.useRef(!1);n.useEffect(()=>{p&&v(!0),y.current=!0},[p]);let S=l(h,e=>"light"===e?h.lightColorScheme:"dark"===e?h.darkColorScheme:void 0),b=n.useCallback(e=>{g(r=>{if(e===r.mode)return r;let n=null!=e?e:t;try{localStorage.setItem(u,n)}catch(e){}return{...r,mode:n,systemMode:i(n)}})},[u,t]),k=n.useCallback(e=>{e?"string"==typeof e?e&&!m.includes(e)?console.error("`".concat(e,"` does not exist in `theme.colorSchemes`.")):g(t=>{let r={...t};return l(t,t=>{try{localStorage.setItem("".concat(d,"-").concat(t),e)}catch(e){}"light"===t&&(r.lightColorScheme=e),"dark"===t&&(r.darkColorScheme=e)}),r}):g(t=>{let n={...t},o=null===e.light?r:e.light,i=null===e.dark?c:e.dark;if(o){if(m.includes(o)){n.lightColorScheme=o;try{localStorage.setItem("".concat(d,"-light"),o)}catch(e){}}else console.error("`".concat(o,"` does not exist in `theme.colorSchemes`."))}if(i){if(m.includes(i)){n.darkColorScheme=i;try{localStorage.setItem("".concat(d,"-dark"),i)}catch(e){}}else console.error("`".concat(i,"` does not exist in `theme.colorSchemes`."))}return n}):g(e=>{try{localStorage.setItem("".concat(d,"-light"),r),localStorage.setItem("".concat(d,"-dark"),c)}catch(e){}return{...e,lightColorScheme:r,darkColorScheme:c}})},[m,d,r,c]),w=n.useCallback(e=>{"system"===h.mode&&g(t=>{let r=(null==e?void 0:e.matches)?"dark":"light";return t.systemMode===r?t:{...t,systemMode:r}})},[h.mode]),x=n.useRef(w);return x.current=w,n.useEffect(()=>{if("function"!=typeof window.matchMedia||!p)return;let e=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return x.current(...t)},t=window.matchMedia("(prefers-color-scheme: dark)");return t.addListener(e),e(t),()=>{t.removeListener(e)}},[p]),n.useEffect(()=>{if(f&&p){let e=e=>{let r=e.newValue;"string"==typeof e.key&&e.key.startsWith(d)&&(!r||m.match(r))&&(e.key.endsWith("light")&&k({light:r}),e.key.endsWith("dark")&&k({dark:r})),e.key===u&&(!r||["light","dark","system"].includes(r))&&b(r||t)};return f.addEventListener("storage",e),()=>{f.removeEventListener("storage",e)}}},[k,b,u,d,m,t,f,p]),{...h,mode:y.current||!p?h.mode:void 0,systemMode:y.current||!p?h.systemMode:void 0,colorScheme:y.current||!p?S:void 0,setMode:b,setColorScheme:k}}},9647:function(e,t,r){r.r(t),r.d(t,{default:function(){return s}});var n,o=r(2265),i=r(3815),l=r(6359),a=r(2739);let c=(n||(n=r.t(o,2))).useSyncExternalStore;function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=(0,a.default)(),n="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches:s=!1,matchMedia:u=n?window.matchMedia:null,ssrMatchMedia:d=null,noSsr:f=!1}=(0,l.Z)({name:"MuiUseMediaQuery",props:t,theme:r}),m="function"==typeof e?e(r):e;return(void 0!==c?function(e,t,r,n,i){let l=o.useCallback(()=>t,[t]),a=o.useMemo(()=>{if(i&&r)return()=>r(e).matches;if(null!==n){let{matches:t}=n(e);return()=>t}return l},[l,e,n,i,r]),[s,u]=o.useMemo(()=>{if(null===r)return[l,()=>()=>{}];let t=r(e);return[()=>t.matches,e=>(t.addEventListener("change",e),()=>{t.removeEventListener("change",e)})]},[l,r,e]);return c(u,s,a)}:function(e,t,r,n,l){let[a,c]=o.useState(()=>l&&r?r(e).matches:n?n(e).matches:t);return(0,i.default)(()=>{if(!r)return;let t=r(e),n=()=>{c(t.matches)};return n(),t.addEventListener("change",n),()=>{t.removeEventListener("change",n)}},[e,r]),a})(m=m.replace(/^@media( ?)/m,""),s,u,d,f)}},1519:function(e,t,r){r.d(t,{default:function(){return o}});var n=r(2265);function o(e){let{controlled:t,default:r,name:o,state:i="value"}=e,{current:l}=n.useRef(void 0!==t),[a,c]=n.useState(r),s=n.useCallback(e=>{l||c(e)},[]);return[l?t:a,s]}},292:function(e,t,r){r.d(t,{default:function(){return a}});var n,o=r(2265);let i=0,l=(n||(n=r.t(o,2)))["useId".toString()];function a(e){if(void 0!==l){let t=l();return null!=e?e:t}return function(e){let[t,r]=o.useState(e),n=e||t;return o.useEffect(()=>{null==t&&(i+=1,r("mui-".concat(i)))},[t]),n}(e)}},3331:function(e,t,r){var n=r(2265);t.default=e=>{let t=n.useRef({});return n.useEffect(()=>{t.current=e}),t.current}},608:function(e,t,r){var n=r(7740),o=r(7754),i=r(7664),l=r(8507);t.default=function(e){var t;let{elementType:r,externalSlotProps:a,ownerState:c,skipResolvingSlotProps:s=!1,...u}=e,d=s?{}:(0,l.Z)(a,c),{props:f,internalRef:m}=(0,i.Z)({...u,externalSlotProps:d}),p=(0,n.default)(m,null==d?void 0:d.ref,null===(t=e.additionalProps)||void 0===t?void 0:t.ref);return(0,o.Z)(r,{...f,ref:p},c)}}}]);