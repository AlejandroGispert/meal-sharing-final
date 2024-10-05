"use strict";exports.id=481,exports.ids=[481],exports.modules={2481:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return b}});let n=r(1174),i=r(8374),o=r(326),a=i._(r(7577)),l=n._(r(962)),s=n._(r(815)),d=r(3078),u=r(5248),c=r(1206);r(576);let f=r(131),p=n._(r(6820)),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e,t,r,n,i,o,a){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function h(e){return a.use?{fetchPriority:e}:{fetchpriority:e}}globalThis.__NEXT_IMAGE_IMPORTED=!0;let y=(0,a.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:i,height:l,width:s,decoding:d,className:u,style:c,fetchPriority:f,placeholder:p,loading:g,unoptimized:y,fill:v,onLoadRef:b,onLoadingCompleteRef:w,setBlurComplete:x,setShowAltText:_,sizesInput:S,onLoad:j,onError:C,...P}=e;return(0,o.jsx)("img",{...P,...h(f),loading:g,width:s,height:l,decoding:d,"data-nimg":v?"fill":"1",className:u,style:c,sizes:i,srcSet:n,src:r,ref:(0,a.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&m(e,p,b,w,x,y,S))},[r,p,b,w,x,C,y,S,t]),onLoad:e=>{m(e.currentTarget,p,b,w,x,y,S)},onError:e=>{_(!0),"empty"!==p&&x(!0),C&&C(e)}})});function v(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...h(r.fetchPriority)};return t&&l.default.preload?(l.default.preload(r.src,n),null):(0,o.jsx)(s.default,{children:(0,o.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let b=(0,a.forwardRef)((e,t)=>{let r=(0,a.useContext)(f.RouterContext),n=(0,a.useContext)(c.ImageConfigContext),i=(0,a.useMemo)(()=>{let e=g||n||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:l,onLoadingComplete:s}=e,m=(0,a.useRef)(l);(0,a.useEffect)(()=>{m.current=l},[l]);let h=(0,a.useRef)(s);(0,a.useEffect)(()=>{h.current=s},[s]);let[b,w]=(0,a.useState)(!1),[x,_]=(0,a.useState)(!1),{props:S,meta:j}=(0,d.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:b,showAltText:x});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(y,{...S,unoptimized:j.unoptimized,placeholder:j.placeholder,fill:j.fill,onLoadRef:m,onLoadingCompleteRef:h,setBlurComplete:w,setShowAltText:_,sizesInput:e.sizes,ref:t}),j.priority?(0,o.jsx)(v,{isAppRouter:!r,imgAttributes:S}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3484:(e,t,r)=>{e.exports=r(1616).vendored.contexts.AmpContext},1157:(e,t,r)=>{e.exports=r(1616).vendored.contexts.HeadManagerContext},1206:(e,t,r)=>{e.exports=r(1616).vendored.contexts.ImageConfigContext},8710:(e,t)=>{function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},3078:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),r(576);let n=r(380),i=r(5248);function o(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var r;let l,s,d,{src:u,sizes:c,unoptimized:f=!1,priority:p=!1,loading:g,className:m,quality:h,width:y,height:v,fill:b=!1,style:w,overrideSrc:x,onLoad:_,onLoadingComplete:S,placeholder:j="empty",blurDataURL:C,fetchPriority:P,layout:O,objectFit:z,objectPosition:M,lazyBoundary:E,lazyRoot:I,...A}=e,{imgConf:R,showAltText:k,blurComplete:D,defaultLoader:U}=t,T=R||i.imageConfigDefault;if("allSizes"in T)l=T;else{let e=[...T.deviceSizes,...T.imageSizes].sort((e,t)=>e-t),t=T.deviceSizes.sort((e,t)=>e-t);l={...T,allSizes:e,deviceSizes:t}}if(void 0===U)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let F=A.loader||U;delete A.loader,delete A.srcSet;let L="__next_img_default"in F;if(L){if("custom"===l.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=F;F=t=>{let{config:r,...n}=t;return e(n)}}if(O){"fill"===O&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[O];t&&!c&&(c=t)}let N="",B=a(y),G=a(v);if("object"==typeof(r=u)&&(o(r)||void 0!==r.src)){let e=o(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,d=e.blurHeight,C=C||e.blurDataURL,N=e.src,!b){if(B||G){if(B&&!G){let t=B/e.width;G=Math.round(e.height*t)}else if(!B&&G){let t=G/e.height;B=Math.round(e.width*t)}}else B=e.width,G=e.height}}let W=!p&&("lazy"===g||void 0===g);(!(u="string"==typeof u?u:N)||u.startsWith("data:")||u.startsWith("blob:"))&&(f=!0,W=!1),l.unoptimized&&(f=!0),L&&u.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(f=!0),p&&(P="high");let H=a(h),V=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:z,objectPosition:M}:{},k?{}:{color:"transparent"},w),q=D||"empty"===j?null:"blur"===j?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:B,heightInt:G,blurWidth:s,blurHeight:d,blurDataURL:C||"",objectFit:V.objectFit})+'")':'url("'+j+'")',$=q?{backgroundSize:V.objectFit||"cover",backgroundPosition:V.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:q}:{},J=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:a,loader:l}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:d}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,a),u=s.length-1;return{sizes:a||"w"!==d?a:"100vw",srcSet:s.map((e,n)=>l({config:t,src:r,quality:o,width:e})+" "+("w"===d?e:n+1)+d).join(", "),src:l({config:t,src:r,quality:o,width:s[u]})}}({config:l,src:u,unoptimized:f,width:B,quality:H,sizes:c,loader:F});return{props:{...A,loading:W?"lazy":g,fetchPriority:P,width:B,height:G,decoding:"async",className:m,style:{...V,...$},sizes:J.sizes,srcSet:J.srcSet,src:x||J.src},meta:{unoptimized:f,priority:p,placeholder:j,fill:b}}}},815:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return m},defaultHead:function(){return c}});let n=r(1174),i=r(8374),o=r(326),a=i._(r(7577)),l=n._(r(8003)),s=r(3484),d=r(1157),u=r(8710);function c(e){void 0===e&&(e=!1);let t=[(0,o.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,o.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(576);let p=["name","httpEquiv","charSet","itemProp"];function g(e,t){let{inAmpMode:r}=t;return e.reduce(f,[]).reverse().concat(c(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return i=>{let o=!0,a=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){a=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?o=!1:r.add(t);else{let e=i.props[t],r=n[t]||new Set;("name"!==t||!a)&&r.has(e)?o=!1:(r.add(e),n[t]=r)}}}}return o}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:n})})}let m=function(e){let{children:t}=e,r=(0,a.useContext)(s.AmpStateContext),n=(0,a.useContext)(d.HeadManagerContext);return(0,o.jsx)(l.default,{reduceComponentsToState:g,headManager:n,inAmpMode:(0,u.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},380:(e,t)=>{function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o,objectFit:a}=e,l=n?40*n:t,s=i?40*i:r,d=l&&s?"viewBox='0 0 "+l+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},5248:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},6820:(e,t)=>{function r(e){let{config:t,src:r,width:n,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},8003:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let n=r(7577),i=()=>{},o=()=>{};function a(e){var t;let{headManager:r,reduceComponentsToState:a}=e;function l(){if(r&&r.mountedInstances){let t=n.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(a(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),l(),i(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),i(()=>(r&&(r._pendingUpdate=l),()=>{r&&(r._pendingUpdate=l)})),o(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}}};