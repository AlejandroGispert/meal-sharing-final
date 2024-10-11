"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[711],{4446:function(e,t,r){r.d(t,{default:function(){return a}}),r(2265);var n=r(9671),o=r(2737),i=r(7437);function l(e){let{theme:t,...r}=e,l=o.Z in t?t[o.Z]:void 0;return(0,i.jsx)(n.default,{...r,themeId:l?o.Z:void 0,theme:l||t})}var c=r(6110);function a(e){let{theme:t,...r}=e;return"function"!=typeof t&&"colorSchemes"in(o.Z in t?t[o.Z]:t)?(0,i.jsx)(c.CssVarsProvider,{theme:t,...r}):(0,i.jsx)(l,{theme:t,...r})}},6110:function(e,t,r){r.r(t),r.d(t,{CssVarsProvider:function(){return S},Experimental_CssVarsProvider:function(){return g},getInitColorSchemeScript:function(){return y},useColorScheme:function(){return h}});var n=r(2265),o=r(5263),i=r(6003),l=r(9397),c=r(9671),a=r(5398),s=r(1866),u=r(7437),d=r(4732),f=r(5032);let{CssVarsProvider:m,useColorScheme:h,getInitColorSchemeScript:p}=function(e){let{themeId:t,theme:r={},modeStorageKey:o=a.RI,colorSchemeStorageKey:d=a.Wp,disableTransitionOnChange:f=!1,defaultColorScheme:m,resolveTheme:h}=e,p={allColorSchemes:[],colorScheme:void 0,darkColorScheme:void 0,lightColorScheme:void 0,mode:void 0,setColorScheme:()=>{},setMode:()=>{},systemMode:void 0},g=n.createContext(void 0),v="string"==typeof m?m:m.light,y="string"==typeof m?m:m.dark;return{CssVarsProvider:function(e){let{children:a,theme:p,modeStorageKey:v=o,colorSchemeStorageKey:y=d,disableTransitionOnChange:S=f,storageWindow:k="undefined"==typeof window?void 0:window,documentNode:b="undefined"==typeof document?void 0:document,colorSchemeNode:w="undefined"==typeof document?void 0:document.documentElement,disableNestedContext:$=!1,disableStyleSheetGeneration:x=!1}=e,C=n.useRef(!1),Z=(0,l.Z)(),j=n.useContext(g),E=!!j&&!$,M=n.useMemo(()=>p||("function"==typeof r?r():r),[p]),_=M[t],{colorSchemes:I={},components:G={},cssVarPrefix:P,...A}=_||M,L=Object.keys(I).filter(e=>!!I[e]).join(","),N=n.useMemo(()=>L.split(","),[L]),R="string"==typeof m?m:m.light,W="string"==typeof m?m:m.dark,O=I[R]&&I[W]?"system":I[A.defaultColorScheme]?.palette?.mode||A.palette?.mode,{mode:T,setMode:V,systemMode:B,lightColorScheme:K,darkColorScheme:z,colorScheme:D,setColorScheme:F}=(0,s.default)({supportedColorSchemes:N,defaultLightColorScheme:R,defaultDarkColorScheme:W,modeStorageKey:v,colorSchemeStorageKey:y,defaultMode:O,storageWindow:k}),H=T,q=D;E&&(H=j.mode,q=j.colorScheme);let U=q||A.defaultColorScheme,Q=A.generateThemeVars?.()||A.vars,Y={...A,components:G,colorSchemes:I,cssVarPrefix:P,vars:Q};if("function"==typeof Y.generateSpacing&&(Y.spacing=Y.generateSpacing()),U){let e=I[U];e&&"object"==typeof e&&Object.keys(e).forEach(t=>{e[t]&&"object"==typeof e[t]?Y[t]={...Y[t],...e[t]}:Y[t]=e[t]})}let J=A.colorSchemeSelector;n.useEffect(()=>{if(q&&w&&J&&"media"!==J){let e=J;if("class"===J&&(e=".%s"),"data"===J&&(e="[data-%s]"),J?.startsWith("data-")&&!J.includes("%s")&&(e=`[${J}="%s"]`),e.startsWith("."))w.classList.remove(...N.map(t=>e.substring(1).replace("%s",t))),w.classList.add(e.substring(1).replace("%s",q));else{let t=e.replace("%s",q).match(/\[([^\]]+)\]/);if(t){let[e,r]=t[1].split("=");r||N.forEach(t=>{w.removeAttribute(e.replace(q,t))}),w.setAttribute(e,r?r.replace(/"|'/g,""):"")}else w.setAttribute(e,q)}}},[q,J,w,N]),n.useEffect(()=>{let e;if(S&&C.current&&b){let t=b.createElement("style");t.appendChild(b.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),b.head.appendChild(t),window.getComputedStyle(b.body),e=setTimeout(()=>{b.head.removeChild(t)},1)}return()=>{clearTimeout(e)}},[q,S,b]),n.useEffect(()=>(C.current=!0,()=>{C.current=!1}),[]);let X=n.useMemo(()=>({allColorSchemes:N,colorScheme:q,darkColorScheme:z,lightColorScheme:K,mode:H,setColorScheme:F,setMode:V,systemMode:B}),[N,q,z,K,H,F,V,B]),ee=!0;(x||!1===A.cssVariables||E&&Z?.cssVarPrefix===P)&&(ee=!1);let et=(0,u.jsxs)(n.Fragment,{children:[ee&&(0,u.jsx)(n.Fragment,{children:(Y.generateStyleSheets?.()||[]).map((e,t)=>(0,u.jsx)(i.default,{styles:e},t))}),(0,u.jsx)(c.default,{themeId:_?t:void 0,theme:h?h(Y):Y,children:a})]});return E?et:(0,u.jsx)(g.Provider,{value:X,children:et})},useColorScheme:()=>n.useContext(g)||p,getInitColorSchemeScript:e=>(0,a.ZP)({colorSchemeStorageKey:d,defaultLightColorScheme:v,defaultDarkColorScheme:y,modeStorageKey:o,...e})}}({themeId:r(2737).Z,theme:()=>(0,d.Z)({cssVariables:!0}),colorSchemeStorageKey:"mui-color-scheme",modeStorageKey:"mui-mode",defaultColorScheme:{light:"light",dark:"dark"},resolveTheme:e=>{let t={...e,typography:(0,f.Z)(e.palette,e.typography)};return t.unstable_sx=function(e){return(0,o.Z)({sx:e,theme:this})},t}});function g(e){return(0,u.jsx)(m,{...e})}let v=!1,y=e=>(v||(console.warn("MUI: The getInitColorSchemeScript function has been deprecated.\n\nYou should use `import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'`\nand replace the function call with `<InitColorSchemeScript />` instead."),v=!0),p(e)),S=m},6950:function(e,t,r){let n=r(2265).createContext(null);t.Z=n},9397:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(2265),o=r(6950);function i(){return n.useContext(o.Z)}},2774:function(e,t,r){let n;r.d(t,{default:function(){return a}}),r(2265);var o=r(3209),i=r(1878),l=r(1419),c=r(7437);function a(e){let{injectFirst:t,children:r}=e;return t&&n?(0,c.jsx)(o.C,{value:n,children:r}):r}"object"==typeof document&&(n=(e=>{let t=(0,i.Z)(e);class r extends l.m{constructor(e){super(e),this.prepend=t.sheet.prepend}}return t.sheet=new r({key:t.key,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy,prepend:t.sheet.prepend,insertionPoint:t.sheet.insertionPoint}),t})({key:"css",prepend:!0}))},1285:function(e,t,r){r.d(t,{default:function(){return l}});var n=r(9424),o=r(5748);let i=(0,r(2296).Z)("MuiBox",["root"]);var l=(0,o.default)({defaultClassName:i.root,generateClassName:n.Z.generate})},7063:function(e,t,r){let n=(0,r(5357).Z)();t.default=n},7473:function(e,t,r){r.r(t);let n=(0,r(4609).Z)();t.default=n},4609:function(e,t,r){r.d(t,{Z:function(){return P}});var n=r(2265),o=r(4839),i=r(4686),l=r(587),c=r(6990),a=r(9134),s=r(3820),u=r(1661),d=r(9325),f=r(7173);let m=(e,t)=>e.filter(e=>t.includes(e)),h=(e,t,r)=>{let n=e.keys[0];Array.isArray(t)?t.forEach((t,n)=>{r((t,r)=>{n<=e.keys.length-1&&(0===n?Object.assign(t,r):t[e.up(e.keys[n])]=r)},t)}):t&&"object"==typeof t?(Object.keys(t).length>e.keys.length?e.keys:m(e.keys,Object.keys(t))).forEach(o=>{if(e.keys.includes(o)){let i=t[o];void 0!==i&&r((t,r)=>{n===o?Object.assign(t,r):t[e.up(o)]=r},i)}}):("number"==typeof t||"string"==typeof t)&&r((e,t)=>{Object.assign(e,t)},t)};function p(e){return e?`Level${e}`:""}function g(e){return e.unstable_level>0&&e.container}function v(e){return function(t){return 0===e.unstable_level?`var(--Grid-${t}Spacing)`:`var(--Grid-${t}Spacing${p(e.unstable_level-1)})`}}function y(e){return 0===e.unstable_level?"var(--Grid-columns)":`var(--Grid-columns${p(e.unstable_level-1)})`}let S=({theme:e,ownerState:t})=>{let r=v(t),n={};return h(e.breakpoints,t.size,(e,o)=>{let i={};"grow"===o&&(i={flexBasis:0,flexGrow:1,maxWidth:"100%"}),"auto"===o&&(i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),"number"==typeof o&&(i={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${o} / ${y(t)} - (${y(t)} - ${o}) * (${r("column")} / ${y(t)}))`}),e(n,i)}),n},k=({theme:e,ownerState:t})=>{let r=v(t),n={};return h(e.breakpoints,t.offset,(e,o)=>{let i={};"auto"===o&&(i={marginLeft:"auto"}),"number"==typeof o&&(i={marginLeft:0===o?"0px":`calc(100% * ${o} / ${y(t)} + ${r("column")} * ${o} / ${y(t)})`}),e(n,i)}),n},b=({theme:e,ownerState:t})=>{if(!t.container)return{};let r=g(t)?{[`--Grid-columns${p(t.unstable_level)}`]:y(t)}:{"--Grid-columns":12};return h(e.breakpoints,t.columns,(e,n)=>{e(r,{[`--Grid-columns${p(t.unstable_level)}`]:n})}),r},w=({theme:e,ownerState:t})=>{if(!t.container)return{};let r=v(t),n=g(t)?{[`--Grid-rowSpacing${p(t.unstable_level)}`]:r("row")}:{};return h(e.breakpoints,t.rowSpacing,(r,o)=>{r(n,{[`--Grid-rowSpacing${p(t.unstable_level)}`]:"string"==typeof o?o:e.spacing?.(o)})}),n},$=({theme:e,ownerState:t})=>{if(!t.container)return{};let r=v(t),n=g(t)?{[`--Grid-columnSpacing${p(t.unstable_level)}`]:r("column")}:{};return h(e.breakpoints,t.columnSpacing,(r,o)=>{r(n,{[`--Grid-columnSpacing${p(t.unstable_level)}`]:"string"==typeof o?o:e.spacing?.(o)})}),n},x=({theme:e,ownerState:t})=>{if(!t.container)return{};let r={};return h(e.breakpoints,t.direction,(e,t)=>{e(r,{flexDirection:t})}),r},C=({ownerState:e})=>{let t=function(t){return`var(--Grid-${t}Spacing${p(e.unstable_level)})`};return{minWidth:0,boxSizing:"border-box",...e.container&&{display:"flex",flexWrap:"wrap",...e.wrap&&"wrap"!==e.wrap&&{flexWrap:e.wrap},gap:`${t("row")} ${t("column")}`}}},Z=e=>{let t=[];return Object.entries(e).forEach(([e,r])=>{!1!==r&&void 0!==r&&t.push(`grid-${e}-${String(r)}`)}),t},j=(e,t="xs")=>{function r(e){return void 0!==e&&("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e&&e>0)}if(r(e))return[`spacing-${t}-${String(e)}`];if("object"==typeof e&&!Array.isArray(e)){let t=[];return Object.entries(e).forEach(([e,n])=>{r(n)&&t.push(`spacing-${e}-${String(n)}`)}),t}return[]},E=e=>void 0===e?[]:"object"==typeof e?Object.entries(e).map(([e,t])=>`direction-${e}-${t}`):[`direction-xs-${String(e)}`];var M=r(7437);let _=(0,f.Z)(),I=(0,a.Z)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>t.root});function G(e){return(0,s.default)({props:e,name:"MuiGrid",defaultTheme:_})}function P(e={}){let{createStyledComponent:t=I,useThemeProps:r=G,componentName:a="MuiGrid"}=e,s=(e,t)=>{let{container:r,direction:n,spacing:o,wrap:i,size:s}=e,u={root:["root",r&&"container","wrap"!==i&&`wrap-xs-${String(i)}`,...E(n),...Z(s),...r?j(o,t.breakpoints.keys[0]):[]]};return(0,c.Z)(u,e=>(0,l.ZP)(a,e),{})};function f(e,t,r=()=>!0){let n={};return null===e||(Array.isArray(e)?e.forEach((e,o)=>{null!==e&&r(e)&&t.keys[o]&&(n[t.keys[o]]=e)}):"object"==typeof e?Object.keys(e).forEach(t=>{let o=e[t];null!=o&&r(o)&&(n[t]=o)}):n[t.keys[0]]=e),n}let m=t(b,$,w,S,x,C,k),h=n.forwardRef(function(e,t){let l=(0,u.default)(),c=r(e),a=(0,d.Z)(c),{className:h,children:p,columns:g=12,container:v=!1,component:y="div",direction:S="row",wrap:k="wrap",size:b={},offset:w={},spacing:$=0,rowSpacing:x=$,columnSpacing:C=$,unstable_level:Z=0,...j}=a,E=f(b,l.breakpoints,e=>!1!==e),_=f(w,l.breakpoints),I=e.columns??(Z?void 0:g),G=e.spacing??(Z?void 0:$),P=e.rowSpacing??e.spacing??(Z?void 0:x),A=e.columnSpacing??e.spacing??(Z?void 0:C),L={...a,level:Z,columns:I,container:v,direction:S,wrap:k,spacing:G,rowSpacing:P,columnSpacing:A,size:E,offset:_},N=s(L,l);return(0,M.jsx)(m,{ref:t,as:y,ownerState:L,className:(0,o.Z)(N.root,h),...j,children:n.Children.map(p,e=>n.isValidElement(e)&&(0,i.Z)(e,["Grid"])?n.cloneElement(e,{unstable_level:e.props?.unstable_level??Z+1}):e)})});return h.muiName="Grid",h}},5398:function(e,t,r){r.d(t,{RI:function(){return o},Wp:function(){return i},ZP:function(){return l}}),r(2265);var n=r(7437);let o="mode",i="color-scheme";function l(e){let{defaultLightColorScheme:t="light",defaultDarkColorScheme:r="dark",modeStorageKey:l=o,colorSchemeStorageKey:c=i,attribute:a="data-color-scheme",colorSchemeNode:s="document.documentElement",nonce:u}=e||{},d="",f=a;if("class"===a&&(f=".%s"),"data"===a&&(f="[data-%s]"),f.startsWith(".")){let e=f.substring(1);d+=`${s}.classList.remove('${e}'.replace('%s', light), '${e}'.replace('%s', dark));
      ${s}.classList.add('${e}'.replace('%s', colorScheme));`}let m=f.match(/\[([^\]]+)\]/);if(m){let[e,t]=m[1].split("=");t||(d+=`${s}.removeAttribute('${e}'.replace('%s', light));
      ${s}.removeAttribute('${e}'.replace('%s', dark));`),d+=`
      ${s}.setAttribute('${e}'.replace('%s', colorScheme), ${t?`${t}.replace('%s', colorScheme)`:'""'});`}else d+=`${s}.setAttribute('${f}', colorScheme);`;return(0,n.jsx)("script",{suppressHydrationWarning:!0,nonce:"undefined"==typeof window?u:"",dangerouslySetInnerHTML:{__html:`(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${l}') || 'system';
  const dark = localStorage.getItem('${c}-dark') || '${r}';
  const light = localStorage.getItem('${c}-light') || '${t}';
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
} catch(e){}})();`}},"mui-color-scheme-init")}},2251:function(e,t,r){r.r(t),r.d(t,{default:function(){return k}});var n=r(2265),o=r(4839),i=r(424),l=r(587),c=r(6990),a=r(9134),s=r(3820),u=r(9325),d=r(7173),f=r(3877),m=r(1572),h=r(7437);let p=(0,d.Z)(),g=(0,a.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function v(e){return(0,s.default)({props:e,name:"MuiStack",defaultTheme:p})}let y=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],S=({ownerState:e,theme:t})=>{let r={display:"flex",flexDirection:"column",...(0,f.k9)({theme:t},(0,f.P$)({values:e.direction,breakpoints:t.breakpoints.values}),e=>({flexDirection:e}))};if(e.spacing){let n=(0,m.hB)(t),o=Object.keys(t.breakpoints.values).reduce((t,r)=>(("object"==typeof e.spacing&&null!=e.spacing[r]||"object"==typeof e.direction&&null!=e.direction[r])&&(t[r]=!0),t),{}),l=(0,f.P$)({values:e.direction,base:o}),c=(0,f.P$)({values:e.spacing,base:o});"object"==typeof l&&Object.keys(l).forEach((e,t,r)=>{if(!l[e]){let n=t>0?l[r[t-1]]:"column";l[e]=n}}),r=(0,i.Z)(r,(0,f.k9)({theme:t},c,(t,r)=>e.useFlexGap?{gap:(0,m.NA)(n,t)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${y(r?l[r]:e.direction)}`]:(0,m.NA)(n,t)}}))}return(0,f.dt)(t.breakpoints,r)};var k=function(e={}){let{createStyledComponent:t=g,useThemeProps:r=v,componentName:i="MuiStack"}=e,a=()=>(0,c.Z)({root:["root"]},e=>(0,l.ZP)(i,e),{}),s=t(S);return n.forwardRef(function(e,t){let i=r(e),{component:l="div",direction:c="column",spacing:d=0,divider:f,children:m,className:p,useFlexGap:g=!1,...v}=(0,u.Z)(i),y=a();return(0,h.jsx)(s,{as:l,ownerState:{direction:c,spacing:d,useFlexGap:g},ref:t,className:(0,o.Z)(y.root,p),...v,children:f?function(e,t){let r=n.Children.toArray(e).filter(Boolean);return r.reduce((e,o,i)=>(e.push(o),i<r.length-1&&e.push(n.cloneElement(t,{key:`separator-${i}`})),e),[])}(m,f):m})})}()},9671:function(e,t,r){r.d(t,{default:function(){return p}});var n=r(2265),o=r(9397),i=r(6950),l="function"==typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__",c=r(7437),a=function(e){let{children:t,theme:r}=e,a=(0,o.Z)(),s=n.useMemo(()=>{let e=null===a?{...r}:"function"==typeof r?r(a):{...a,...r};return null!=e&&(e[l]=null!==a),e},[r,a]);return(0,c.jsx)(i.Z.Provider,{value:s,children:t})},s=r(3209),u=r(2739),d=r(9942),f=r(3289);let m={};function h(e,t,r){let o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return n.useMemo(()=>{let n=e&&t[e]||t;if("function"==typeof r){let i=r(n),l=e?{...t,[e]:i}:i;return o?()=>l:l}return e?{...t,[e]:r}:{...t,...r}},[e,t,r,o])}var p=function(e){let{children:t,theme:r,themeId:n}=e,i=(0,u.default)(m),l=(0,o.Z)()||m,p=h(n,i,r),g=h(n,l,r,!0),v="rtl"===p.direction;return(0,c.jsx)(a,{theme:g,children:(0,c.jsx)(s.T.Provider,{value:p,children:(0,c.jsx)(d.Z,{value:v,children:(0,c.jsx)(f.Z,{value:null==p?void 0:p.components,children:t})})})})}},1866:function(e,t,r){r.d(t,{default:function(){return a}});var n=r(2265),o=r(5398);function i(e){if("undefined"!=typeof window&&"function"==typeof window.matchMedia&&"system"===e)return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function l(e,t){return"light"===e.mode||"system"===e.mode&&"light"===e.systemMode?t("light"):"dark"===e.mode||"system"===e.mode&&"dark"===e.systemMode?t("dark"):void 0}function c(e,t){let r;if("undefined"!=typeof window){try{(r=localStorage.getItem(e)||void 0)||localStorage.setItem(e,t)}catch(e){}return r||t}}function a(e){let{defaultMode:t="light",defaultLightColorScheme:r,defaultDarkColorScheme:a,supportedColorSchemes:s=[],modeStorageKey:u=o.RI,colorSchemeStorageKey:d=o.Wp,storageWindow:f="undefined"==typeof window?void 0:window}=e,m=s.join(","),h=s.length>1,[p,g]=n.useState(()=>{let e=c(u,t),n=c("".concat(d,"-light"),r),o=c("".concat(d,"-dark"),a);return{mode:e,systemMode:i(e),lightColorScheme:n,darkColorScheme:o}}),[,v]=n.useState(!1),y=n.useRef(!1);n.useEffect(()=>{h&&v(!0),y.current=!0},[h]);let S=l(p,e=>"light"===e?p.lightColorScheme:"dark"===e?p.darkColorScheme:void 0),k=n.useCallback(e=>{g(r=>{if(e===r.mode)return r;let n=null!=e?e:t;try{localStorage.setItem(u,n)}catch(e){}return{...r,mode:n,systemMode:i(n)}})},[u,t]),b=n.useCallback(e=>{e?"string"==typeof e?e&&!m.includes(e)?console.error("`".concat(e,"` does not exist in `theme.colorSchemes`.")):g(t=>{let r={...t};return l(t,t=>{try{localStorage.setItem("".concat(d,"-").concat(t),e)}catch(e){}"light"===t&&(r.lightColorScheme=e),"dark"===t&&(r.darkColorScheme=e)}),r}):g(t=>{let n={...t},o=null===e.light?r:e.light,i=null===e.dark?a:e.dark;if(o){if(m.includes(o)){n.lightColorScheme=o;try{localStorage.setItem("".concat(d,"-light"),o)}catch(e){}}else console.error("`".concat(o,"` does not exist in `theme.colorSchemes`."))}if(i){if(m.includes(i)){n.darkColorScheme=i;try{localStorage.setItem("".concat(d,"-dark"),i)}catch(e){}}else console.error("`".concat(i,"` does not exist in `theme.colorSchemes`."))}return n}):g(e=>{try{localStorage.setItem("".concat(d,"-light"),r),localStorage.setItem("".concat(d,"-dark"),a)}catch(e){}return{...e,lightColorScheme:r,darkColorScheme:a}})},[m,d,r,a]),w=n.useCallback(e=>{"system"===p.mode&&g(t=>{let r=(null==e?void 0:e.matches)?"dark":"light";return t.systemMode===r?t:{...t,systemMode:r}})},[p.mode]),$=n.useRef(w);return $.current=w,n.useEffect(()=>{if("function"!=typeof window.matchMedia||!h)return;let e=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return $.current(...t)},t=window.matchMedia("(prefers-color-scheme: dark)");return t.addListener(e),e(t),()=>{t.removeListener(e)}},[h]),n.useEffect(()=>{if(f&&h){let e=e=>{let r=e.newValue;"string"==typeof e.key&&e.key.startsWith(d)&&(!r||m.match(r))&&(e.key.endsWith("light")&&b({light:r}),e.key.endsWith("dark")&&b({dark:r})),e.key===u&&(!r||["light","dark","system"].includes(r))&&k(r||t)};return f.addEventListener("storage",e),()=>{f.removeEventListener("storage",e)}}},[b,k,u,d,m,t,f,h]),{...p,mode:y.current||!h?p.mode:void 0,systemMode:y.current||!h?p.systemMode:void 0,colorScheme:y.current||!h?S:void 0,setMode:k,setColorScheme:b}}},9647:function(e,t,r){r.r(t),r.d(t,{default:function(){return s}});var n,o=r(2265),i=r(3815),l=r(6359),c=r(2739);let a=(n||(n=r.t(o,2))).useSyncExternalStore;function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=(0,c.default)(),n="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches:s=!1,matchMedia:u=n?window.matchMedia:null,ssrMatchMedia:d=null,noSsr:f=!1}=(0,l.Z)({name:"MuiUseMediaQuery",props:t,theme:r}),m="function"==typeof e?e(r):e;return(void 0!==a?function(e,t,r,n,i){let l=o.useCallback(()=>t,[t]),c=o.useMemo(()=>{if(i&&r)return()=>r(e).matches;if(null!==n){let{matches:t}=n(e);return()=>t}return l},[l,e,n,i,r]),[s,u]=o.useMemo(()=>{if(null===r)return[l,()=>()=>{}];let t=r(e);return[()=>t.matches,e=>(t.addEventListener("change",e),()=>{t.removeEventListener("change",e)})]},[l,r,e]);return a(u,s,c)}:function(e,t,r,n,l){let[c,a]=o.useState(()=>l&&r?r(e).matches:n?n(e).matches:t);return(0,i.default)(()=>{if(!r)return;let t=r(e),n=()=>{a(t.matches)};return n(),t.addEventListener("change",n),()=>{t.removeEventListener("change",n)}},[e,r]),c})(m=m.replace(/^@media( ?)/m,""),s,u,d,f)}},1519:function(e,t,r){r.d(t,{default:function(){return o}});var n=r(2265);function o(e){let{controlled:t,default:r,name:o,state:i="value"}=e,{current:l}=n.useRef(void 0!==t),[c,a]=n.useState(r),s=n.useCallback(e=>{l||a(e)},[]);return[l?t:c,s]}},292:function(e,t,r){r.d(t,{default:function(){return c}});var n,o=r(2265);let i=0,l=(n||(n=r.t(o,2)))["useId".toString()];function c(e){if(void 0!==l){let t=l();return null!=e?e:t}return function(e){let[t,r]=o.useState(e),n=e||t;return o.useEffect(()=>{null==t&&(i+=1,r("mui-".concat(i)))},[t]),n}(e)}},3331:function(e,t,r){var n=r(2265);t.default=e=>{let t=n.useRef({});return n.useEffect(()=>{t.current=e}),t.current}},608:function(e,t,r){var n=r(7740),o=r(7754),i=r(7664),l=r(8507);t.default=function(e){var t;let{elementType:r,externalSlotProps:c,ownerState:a,skipResolvingSlotProps:s=!1,...u}=e,d=s?{}:(0,l.Z)(c,a),{props:f,internalRef:m}=(0,i.Z)({...u,externalSlotProps:d}),h=(0,n.default)(m,null==d?void 0:d.ref,null===(t=e.additionalProps)||void 0===t?void 0:t.ref);return(0,o.Z)(r,{...f,ref:h},a)}}}]);