"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[769],{6760:function(e,t,r){r.r(t);var o=r(9018),n=r(7437);t.default=(0,o.Z)((0,n.jsx)("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"}),"Menu")},335:function(e,t,r){r.d(t,{default:function(){return k}});var o=r(2265),n=r(4839),a=r(6990),i=r(6031),l=r(8024),c=r(339),s=r(8683),u=r(5885),d=r(8680),m=r(2272),h=r(2296),f=r(587);function p(e){return(0,f.ZP)("MuiIconButton",e)}let g=(0,h.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]);var y=r(7437);let v=e=>{let{classes:t,disabled:r,color:o,edge:n,size:i}=e,l={root:["root",r&&"disabled","default"!==o&&"color".concat((0,m.Z)(o)),n&&"edge".concat((0,m.Z)(n)),"size".concat((0,m.Z)(i))]};return(0,a.Z)(l,p,t)},S=(0,l.default)(d.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,"default"!==r.color&&t["color".concat((0,m.Z)(r.color))],r.edge&&t["edge".concat((0,m.Z)(r.edge))],t["size".concat((0,m.Z)(r.size))]]}})((0,c.Z)(e=>{let{theme:t}=e;return{textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),variants:[{props:{disableRipple:!1},style:{"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.action.activeChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,i.Fq)(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}},{props:{edge:"start"},style:{marginLeft:-12}},{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:{edge:"end"},style:{marginRight:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}}]}}),(0,c.Z)(e=>{let{theme:t}=e;return{variants:[{props:{color:"inherit"},style:{color:"inherit"}},...Object.entries(t.palette).filter((0,s.Z)()).map(e=>{let[r]=e;return{props:{color:r},style:{color:(t.vars||t).palette[r].main}}}),...Object.entries(t.palette).filter((0,s.Z)()).map(e=>{let[r]=e;return{props:{color:r,disableRipple:!1},style:{"&:hover":{backgroundColor:t.vars?"rgba(".concat((t.vars||t).palette[r].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,i.Fq)((t.vars||t).palette[r].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}}}),{props:{size:"small"},style:{padding:5,fontSize:t.typography.pxToRem(18)}},{props:{size:"large"},style:{padding:12,fontSize:t.typography.pxToRem(28)}}],["&.".concat(g.disabled)]:{backgroundColor:"transparent",color:(t.vars||t).palette.action.disabled}}}));var k=o.forwardRef(function(e,t){let r=(0,u.i)({props:e,name:"MuiIconButton"}),{edge:o=!1,children:a,className:i,color:l="default",disabled:c=!1,disableFocusRipple:s=!1,disableRipple:d=!1,size:m="medium",...h}=r,f={...r,edge:o,color:l,disabled:c,disableFocusRipple:s,disableRipple:d,size:m},p=v(f);return(0,y.jsx)(S,{className:(0,n.Z)(p.root,i),centerRipple:!0,focusRipple:!s,disabled:c,disableRipple:d,ref:t,...h,ownerState:f,children:a})})},4446:function(e,t,r){r.d(t,{default:function(){return c}}),r(2265);var o=r(9671),n=r(2737),a=r(7437);function i(e){let{theme:t,...r}=e,i=n.Z in t?t[n.Z]:void 0;return(0,a.jsx)(o.default,{...r,themeId:i?n.Z:void 0,theme:i||t})}var l=r(6110);function c(e){let{theme:t,...r}=e;return"function"!=typeof t&&"colorSchemes"in(n.Z in t?t[n.Z]:t)?(0,a.jsx)(l.CssVarsProvider,{theme:t,...r}):(0,a.jsx)(i,{theme:t,...r})}},6110:function(e,t,r){r.r(t),r.d(t,{CssVarsProvider:function(){return S},Experimental_CssVarsProvider:function(){return g},getInitColorSchemeScript:function(){return v},useColorScheme:function(){return f}});var o=r(2265),n=r(5263),a=r(6003),i=r(9397),l=r(9671),c=r(5398),s=r(1866),u=r(7437),d=r(4732),m=r(5032);let{CssVarsProvider:h,useColorScheme:f,getInitColorSchemeScript:p}=function(e){let{themeId:t,theme:r={},modeStorageKey:n=c.RI,colorSchemeStorageKey:d=c.Wp,disableTransitionOnChange:m=!1,defaultColorScheme:h,resolveTheme:f}=e,p={allColorSchemes:[],colorScheme:void 0,darkColorScheme:void 0,lightColorScheme:void 0,mode:void 0,setColorScheme:()=>{},setMode:()=>{},systemMode:void 0},g=o.createContext(void 0),y="string"==typeof h?h:h.light,v="string"==typeof h?h:h.dark;return{CssVarsProvider:function(e){let{children:c,theme:p,modeStorageKey:y=n,colorSchemeStorageKey:v=d,disableTransitionOnChange:S=m,storageWindow:k="undefined"==typeof window?void 0:window,documentNode:b="undefined"==typeof document?void 0:document,colorSchemeNode:C="undefined"==typeof document?void 0:document.documentElement,disableNestedContext:Z=!1,disableStyleSheetGeneration:w=!1}=e,x=o.useRef(!1),M=(0,i.Z)(),j=o.useContext(g),I=!!j&&!Z,E=o.useMemo(()=>p||("function"==typeof r?r():r),[p]),$=E[t],{colorSchemes:R={},components:P={},cssVarPrefix:z,...L}=$||E,T=Object.keys(R).filter(e=>!!R[e]).join(","),_=o.useMemo(()=>T.split(","),[T]),A="string"==typeof h?h:h.light,O="string"==typeof h?h:h.dark,V=R[A]&&R[O]?"system":R[L.defaultColorScheme]?.palette?.mode||L.palette?.mode,{mode:W,setMode:N,systemMode:B,lightColorScheme:K,darkColorScheme:F,colorScheme:H,setColorScheme:q}=(0,s.default)({supportedColorSchemes:_,defaultLightColorScheme:A,defaultDarkColorScheme:O,modeStorageKey:y,colorSchemeStorageKey:v,defaultMode:V,storageWindow:k}),D=W,U=H;I&&(D=j.mode,U=j.colorScheme);let G=U||L.defaultColorScheme,Q=L.generateThemeVars?.()||L.vars,Y={...L,components:P,colorSchemes:R,cssVarPrefix:z,vars:Q};if("function"==typeof Y.generateSpacing&&(Y.spacing=Y.generateSpacing()),G){let e=R[G];e&&"object"==typeof e&&Object.keys(e).forEach(t=>{e[t]&&"object"==typeof e[t]?Y[t]={...Y[t],...e[t]}:Y[t]=e[t]})}let J=L.colorSchemeSelector;o.useEffect(()=>{if(U&&C&&J&&"media"!==J){let e=J;if("class"===J&&(e=".%s"),"data"===J&&(e="[data-%s]"),J?.startsWith("data-")&&!J.includes("%s")&&(e=`[${J}="%s"]`),e.startsWith("."))C.classList.remove(..._.map(t=>e.substring(1).replace("%s",t))),C.classList.add(e.substring(1).replace("%s",U));else{let t=e.replace("%s",U).match(/\[([^\]]+)\]/);if(t){let[e,r]=t[1].split("=");r||_.forEach(t=>{C.removeAttribute(e.replace(U,t))}),C.setAttribute(e,r?r.replace(/"|'/g,""):"")}else C.setAttribute(e,U)}}},[U,J,C,_]),o.useEffect(()=>{let e;if(S&&x.current&&b){let t=b.createElement("style");t.appendChild(b.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),b.head.appendChild(t),window.getComputedStyle(b.body),e=setTimeout(()=>{b.head.removeChild(t)},1)}return()=>{clearTimeout(e)}},[U,S,b]),o.useEffect(()=>(x.current=!0,()=>{x.current=!1}),[]);let X=o.useMemo(()=>({allColorSchemes:_,colorScheme:U,darkColorScheme:F,lightColorScheme:K,mode:D,setColorScheme:q,setMode:N,systemMode:B}),[_,U,F,K,D,q,N,B]),ee=!0;(w||!1===L.cssVariables||I&&M?.cssVarPrefix===z)&&(ee=!1);let et=(0,u.jsxs)(o.Fragment,{children:[ee&&(0,u.jsx)(o.Fragment,{children:(Y.generateStyleSheets?.()||[]).map((e,t)=>(0,u.jsx)(a.default,{styles:e},t))}),(0,u.jsx)(l.default,{themeId:$?t:void 0,theme:f?f(Y):Y,children:c})]});return I?et:(0,u.jsx)(g.Provider,{value:X,children:et})},useColorScheme:()=>o.useContext(g)||p,getInitColorSchemeScript:e=>(0,c.ZP)({colorSchemeStorageKey:d,defaultLightColorScheme:y,defaultDarkColorScheme:v,modeStorageKey:n,...e})}}({themeId:r(2737).Z,theme:()=>(0,d.Z)({cssVariables:!0}),colorSchemeStorageKey:"mui-color-scheme",modeStorageKey:"mui-mode",defaultColorScheme:{light:"light",dark:"dark"},resolveTheme:e=>{let t={...e,typography:(0,m.Z)(e.palette,e.typography)};return t.unstable_sx=function(e){return(0,n.Z)({sx:e,theme:this})},t}});function g(e){return(0,u.jsx)(h,{...e})}let y=!1,v=e=>(y||(console.warn("MUI: The getInitColorSchemeScript function has been deprecated.\n\nYou should use `import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'`\nand replace the function call with `<InitColorSchemeScript />` instead."),y=!0),p(e)),S=h},6950:function(e,t,r){let o=r(2265).createContext(null);t.Z=o},9397:function(e,t,r){r.d(t,{Z:function(){return a}});var o=r(2265),n=r(6950);function a(){return o.useContext(n.Z)}},2774:function(e,t,r){let o;r.d(t,{default:function(){return c}}),r(2265);var n=r(3209),a=r(1878),i=r(1419),l=r(7437);function c(e){let{injectFirst:t,children:r}=e;return t&&o?(0,l.jsx)(n.C,{value:o,children:r}):r}"object"==typeof document&&(o=(e=>{let t=(0,a.Z)(e);class r extends i.m{constructor(e){super(e),this.prepend=t.sheet.prepend}}return t.sheet=new r({key:t.key,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy,prepend:t.sheet.prepend,insertionPoint:t.sheet.insertionPoint}),t})({key:"css",prepend:!0}))},1285:function(e,t,r){r.d(t,{default:function(){return i}});var o=r(9424),n=r(5748);let a=(0,r(2296).Z)("MuiBox",["root"]);var i=(0,n.default)({defaultClassName:a.root,generateClassName:o.Z.generate})},7063:function(e,t,r){let o=(0,r(5357).Z)();t.default=o},7473:function(e,t,r){r.r(t);let o=(0,r(4609).Z)();t.default=o},5398:function(e,t,r){r.d(t,{RI:function(){return n},Wp:function(){return a},ZP:function(){return i}}),r(2265);var o=r(7437);let n="mode",a="color-scheme";function i(e){let{defaultLightColorScheme:t="light",defaultDarkColorScheme:r="dark",modeStorageKey:i=n,colorSchemeStorageKey:l=a,attribute:c="data-color-scheme",colorSchemeNode:s="document.documentElement",nonce:u}=e||{},d="",m=c;if("class"===c&&(m=".%s"),"data"===c&&(m="[data-%s]"),m.startsWith(".")){let e=m.substring(1);d+=`${s}.classList.remove('${e}'.replace('%s', light), '${e}'.replace('%s', dark));
      ${s}.classList.add('${e}'.replace('%s', colorScheme));`}let h=m.match(/\[([^\]]+)\]/);if(h){let[e,t]=h[1].split("=");t||(d+=`${s}.removeAttribute('${e}'.replace('%s', light));
      ${s}.removeAttribute('${e}'.replace('%s', dark));`),d+=`
      ${s}.setAttribute('${e}'.replace('%s', colorScheme), ${t?`${t}.replace('%s', colorScheme)`:'""'});`}else d+=`${s}.setAttribute('${m}', colorScheme);`;return(0,o.jsx)("script",{suppressHydrationWarning:!0,nonce:"undefined"==typeof window?u:"",dangerouslySetInnerHTML:{__html:`(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${i}') || 'system';
  const dark = localStorage.getItem('${l}-dark') || '${r}';
  const light = localStorage.getItem('${l}-light') || '${t}';
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
} catch(e){}})();`}},"mui-color-scheme-init")}},2251:function(e,t,r){r.r(t),r.d(t,{default:function(){return k}});var o=r(2265),n=r(4839),a=r(424),i=r(587),l=r(6990),c=r(9134),s=r(3820),u=r(9325),d=r(7173),m=r(3877),h=r(1572),f=r(7437);let p=(0,d.Z)(),g=(0,c.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function y(e){return(0,s.default)({props:e,name:"MuiStack",defaultTheme:p})}let v=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],S=({ownerState:e,theme:t})=>{let r={display:"flex",flexDirection:"column",...(0,m.k9)({theme:t},(0,m.P$)({values:e.direction,breakpoints:t.breakpoints.values}),e=>({flexDirection:e}))};if(e.spacing){let o=(0,h.hB)(t),n=Object.keys(t.breakpoints.values).reduce((t,r)=>(("object"==typeof e.spacing&&null!=e.spacing[r]||"object"==typeof e.direction&&null!=e.direction[r])&&(t[r]=!0),t),{}),i=(0,m.P$)({values:e.direction,base:n}),l=(0,m.P$)({values:e.spacing,base:n});"object"==typeof i&&Object.keys(i).forEach((e,t,r)=>{if(!i[e]){let o=t>0?i[r[t-1]]:"column";i[e]=o}}),r=(0,a.Z)(r,(0,m.k9)({theme:t},l,(t,r)=>e.useFlexGap?{gap:(0,h.NA)(o,t)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${v(r?i[r]:e.direction)}`]:(0,h.NA)(o,t)}}))}return(0,m.dt)(t.breakpoints,r)};var k=function(e={}){let{createStyledComponent:t=g,useThemeProps:r=y,componentName:a="MuiStack"}=e,c=()=>(0,l.Z)({root:["root"]},e=>(0,i.ZP)(a,e),{}),s=t(S);return o.forwardRef(function(e,t){let a=r(e),{component:i="div",direction:l="column",spacing:d=0,divider:m,children:h,className:p,useFlexGap:g=!1,...y}=(0,u.Z)(a),v=c();return(0,f.jsx)(s,{as:i,ownerState:{direction:l,spacing:d,useFlexGap:g},ref:t,className:(0,n.Z)(v.root,p),...y,children:m?function(e,t){let r=o.Children.toArray(e).filter(Boolean);return r.reduce((e,n,a)=>(e.push(n),a<r.length-1&&e.push(o.cloneElement(t,{key:`separator-${a}`})),e),[])}(h,m):h})})}()},9671:function(e,t,r){r.d(t,{default:function(){return p}});var o=r(2265),n=r(9397),a=r(6950),i="function"==typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__",l=r(7437),c=function(e){let{children:t,theme:r}=e,c=(0,n.Z)(),s=o.useMemo(()=>{let e=null===c?{...r}:"function"==typeof r?r(c):{...c,...r};return null!=e&&(e[i]=null!==c),e},[r,c]);return(0,l.jsx)(a.Z.Provider,{value:s,children:t})},s=r(3209),u=r(2739),d=r(9942),m=r(3289);let h={};function f(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return o.useMemo(()=>{let o=e&&t[e]||t;if("function"==typeof r){let a=r(o),i=e?{...t,[e]:a}:a;return n?()=>i:i}return e?{...t,[e]:r}:{...t,...r}},[e,t,r,n])}var p=function(e){let{children:t,theme:r,themeId:o}=e,a=(0,u.default)(h),i=(0,n.Z)()||h,p=f(o,a,r),g=f(o,i,r,!0),y="rtl"===p.direction;return(0,l.jsx)(c,{theme:g,children:(0,l.jsx)(s.T.Provider,{value:p,children:(0,l.jsx)(d.Z,{value:y,children:(0,l.jsx)(m.Z,{value:null==p?void 0:p.components,children:t})})})})}},1866:function(e,t,r){r.d(t,{default:function(){return c}});var o=r(2265),n=r(5398);function a(e){if("undefined"!=typeof window&&"function"==typeof window.matchMedia&&"system"===e)return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function i(e,t){return"light"===e.mode||"system"===e.mode&&"light"===e.systemMode?t("light"):"dark"===e.mode||"system"===e.mode&&"dark"===e.systemMode?t("dark"):void 0}function l(e,t){let r;if("undefined"!=typeof window){try{(r=localStorage.getItem(e)||void 0)||localStorage.setItem(e,t)}catch(e){}return r||t}}function c(e){let{defaultMode:t="light",defaultLightColorScheme:r,defaultDarkColorScheme:c,supportedColorSchemes:s=[],modeStorageKey:u=n.RI,colorSchemeStorageKey:d=n.Wp,storageWindow:m="undefined"==typeof window?void 0:window}=e,h=s.join(","),f=s.length>1,[p,g]=o.useState(()=>{let e=l(u,t),o=l("".concat(d,"-light"),r),n=l("".concat(d,"-dark"),c);return{mode:e,systemMode:a(e),lightColorScheme:o,darkColorScheme:n}}),[,y]=o.useState(!1),v=o.useRef(!1);o.useEffect(()=>{f&&y(!0),v.current=!0},[f]);let S=i(p,e=>"light"===e?p.lightColorScheme:"dark"===e?p.darkColorScheme:void 0),k=o.useCallback(e=>{g(r=>{if(e===r.mode)return r;let o=null!=e?e:t;try{localStorage.setItem(u,o)}catch(e){}return{...r,mode:o,systemMode:a(o)}})},[u,t]),b=o.useCallback(e=>{e?"string"==typeof e?e&&!h.includes(e)?console.error("`".concat(e,"` does not exist in `theme.colorSchemes`.")):g(t=>{let r={...t};return i(t,t=>{try{localStorage.setItem("".concat(d,"-").concat(t),e)}catch(e){}"light"===t&&(r.lightColorScheme=e),"dark"===t&&(r.darkColorScheme=e)}),r}):g(t=>{let o={...t},n=null===e.light?r:e.light,a=null===e.dark?c:e.dark;if(n){if(h.includes(n)){o.lightColorScheme=n;try{localStorage.setItem("".concat(d,"-light"),n)}catch(e){}}else console.error("`".concat(n,"` does not exist in `theme.colorSchemes`."))}if(a){if(h.includes(a)){o.darkColorScheme=a;try{localStorage.setItem("".concat(d,"-dark"),a)}catch(e){}}else console.error("`".concat(a,"` does not exist in `theme.colorSchemes`."))}return o}):g(e=>{try{localStorage.setItem("".concat(d,"-light"),r),localStorage.setItem("".concat(d,"-dark"),c)}catch(e){}return{...e,lightColorScheme:r,darkColorScheme:c}})},[h,d,r,c]),C=o.useCallback(e=>{"system"===p.mode&&g(t=>{let r=(null==e?void 0:e.matches)?"dark":"light";return t.systemMode===r?t:{...t,systemMode:r}})},[p.mode]),Z=o.useRef(C);return Z.current=C,o.useEffect(()=>{if("function"!=typeof window.matchMedia||!f)return;let e=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return Z.current(...t)},t=window.matchMedia("(prefers-color-scheme: dark)");return t.addListener(e),e(t),()=>{t.removeListener(e)}},[f]),o.useEffect(()=>{if(m&&f){let e=e=>{let r=e.newValue;"string"==typeof e.key&&e.key.startsWith(d)&&(!r||h.match(r))&&(e.key.endsWith("light")&&b({light:r}),e.key.endsWith("dark")&&b({dark:r})),e.key===u&&(!r||["light","dark","system"].includes(r))&&k(r||t)};return m.addEventListener("storage",e),()=>{m.removeEventListener("storage",e)}}},[b,k,u,d,h,t,m,f]),{...p,mode:v.current||!f?p.mode:void 0,systemMode:v.current||!f?p.systemMode:void 0,colorScheme:v.current||!f?S:void 0,setMode:k,setColorScheme:b}}},9647:function(e,t,r){r.r(t),r.d(t,{default:function(){return s}});var o,n=r(2265),a=r(3815),i=r(6359),l=r(2739);let c=(o||(o=r.t(n,2))).useSyncExternalStore;function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=(0,l.default)(),o="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches:s=!1,matchMedia:u=o?window.matchMedia:null,ssrMatchMedia:d=null,noSsr:m=!1}=(0,i.Z)({name:"MuiUseMediaQuery",props:t,theme:r}),h="function"==typeof e?e(r):e;return(void 0!==c?function(e,t,r,o,a){let i=n.useCallback(()=>t,[t]),l=n.useMemo(()=>{if(a&&r)return()=>r(e).matches;if(null!==o){let{matches:t}=o(e);return()=>t}return i},[i,e,o,a,r]),[s,u]=n.useMemo(()=>{if(null===r)return[i,()=>()=>{}];let t=r(e);return[()=>t.matches,e=>(t.addEventListener("change",e),()=>{t.removeEventListener("change",e)})]},[i,r,e]);return c(u,s,l)}:function(e,t,r,o,i){let[l,c]=n.useState(()=>i&&r?r(e).matches:o?o(e).matches:t);return(0,a.default)(()=>{if(!r)return;let t=r(e),o=()=>{c(t.matches)};return o(),t.addEventListener("change",o),()=>{t.removeEventListener("change",o)}},[e,r]),l})(h=h.replace(/^@media( ?)/m,""),s,u,d,m)}},3331:function(e,t,r){var o=r(2265);t.default=e=>{let t=o.useRef({});return o.useEffect(()=>{t.current=e}),t.current}}}]);