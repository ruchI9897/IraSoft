(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9361:function(e,t){"use strict";t.Z=function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}},5557:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(3678)}])},8045:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(9361).Z,o=i(4941).Z,r=i(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,i,l=e.src,s=e.sizes,$=e.unoptimized,h=void 0!==$&&$,b=e.priority,A=void 0!==b&&b,k=e.loading,E=e.lazyRoot,I=e.lazyBoundary,j=e.className,L=e.quality,R=e.width,C=e.height,q=e.style,P=e.objectFit,H=e.objectPosition,N=e.onLoadingComplete,M=e.placeholder,W=void 0===M?"empty":M,B=e.blurDataURL,Z=c(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),D=u.useContext(m.ImageConfigContext),T=u.useMemo(function(){var e=p||D||f.imageConfigDefault,t=r(e.deviceSizes).concat(r(e.imageSizes)).sort(function(e,t){return e-t}),i=e.deviceSizes.sort(function(e,t){return e-t});return a({},e,{allSizes:t,deviceSizes:i})},[D]),F=Z,O=s?"responsive":"intrinsic";"layout"in F&&(F.layout&&(O=F.layout),delete F.layout);var V=S;if("loader"in F){if(F.loader){var G=F.loader;V=function(e){e.config;var t=c(e,["config"]);return G(t)}}delete F.loader}var U,Q,X="";if(U=l,"object"==typeof U&&(w(U)||void 0!==(Q=U).src)){var K=w(l)?l.default:l;if(!K.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(K)));if(B=B||K.blurDataURL,X=K.src,(!O||"fill"!==O)&&(C=C||K.height,R=R||K.width,!K.height||!K.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(K)))}l="string"==typeof l?l:X;var Y=!A&&("lazy"===k||void 0===k);(l.startsWith("data:")||l.startsWith("blob:"))&&(h=!0,Y=!1),v.has(l)&&(Y=!1),T.unoptimized&&(h=!0);var J=o(u.useState(!1),2),ee=J[0],et=J[1],ei=o(g.useIntersection({rootRef:void 0===E?null:E,rootMargin:I||"200px",disabled:!Y}),3),en=ei[0],eo=ei[1],er=ei[2],ea=!Y||eo,el={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},es={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ec=!1,eu=z(R),ed=z(C),ef=z(L),eg=Object.assign({},q,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:P,objectPosition:H}),em="blur"!==W||ee?{}:{backgroundSize:P||"cover",backgroundPosition:H||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(B,'")')};if("fill"===O)el.display="block",el.position="absolute",el.top=0,el.left=0,el.bottom=0,el.right=0;else if(void 0!==eu&&void 0!==ed){var e$=ed/eu,eh=isNaN(e$)?"100%":"".concat(100*e$,"%");"responsive"===O?(el.display="block",el.position="relative",ec=!0,es.paddingTop=eh):"intrinsic"===O?(el.display="inline-block",el.position="relative",el.maxWidth="100%",ec=!0,es.maxWidth="100%",t="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(eu,"%27%20height=%27").concat(ed,"%27/%3e")):"fixed"===O&&(el.display="inline-block",el.position="relative",el.width=eu,el.height=ed)}var ep={src:y,srcSet:void 0,sizes:void 0};ea&&(ep=_({config:T,src:l,unoptimized:h,layout:O,width:eu,quality:ef,sizes:s,loader:V}));var ev=l,ey="imagesizes";ey="imageSizes";var eb=(n(i={},"imageSrcSet",ep.srcSet),n(i,ey,ep.sizes),i),ew=u.default.useLayoutEffect,e8=u.useRef(N),e_=u.useRef(l);u.useEffect(function(){e8.current=N},[N]),ew(function(){e_.current!==l&&(er(),e_.current=l)},[er,l]);var ez=a({isLazy:Y,imgAttributes:ep,heightInt:ed,widthInt:eu,qualityInt:ef,layout:O,className:j,imgStyle:eg,blurStyle:em,loading:k,config:T,unoptimized:h,placeholder:W,loader:V,srcString:ev,onLoadingCompleteRef:e8,setBlurComplete:et,setIntersection:en,isVisible:ea,noscriptSizes:s},F);return u.default.createElement(u.default.Fragment,null,u.default.createElement("span",{style:el},ec?u.default.createElement("span",{style:es},t?u.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:t}):null):null,u.default.createElement(x,Object.assign({},ez))),A?u.default.createElement(d.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+ep.src+ep.srcSet+ep.sizes,rel:"preload",as:"image",href:ep.srcSet?void 0:ep.src},eb))):null)};var a=i(6495).Z,l=i(2648).Z,s=i(1598).Z,c=i(7273).Z,u=s(i(7294)),d=l(i(5443)),f=i(9309),g=i(7190),m=i(9977);i(3794);var $=i(2392);function h(e){return"/"===e[0]?e.slice(1):e}var p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!1},v=new Set,y="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",b=new Map([["default",function(e){var t=e.config,i=e.src,n=e.width,o=e.quality;return i.endsWith(".svg")&&!t.dangerouslyAllowSVG?i:"".concat($.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(o||75)}],["imgix",function(e){var t=e.config,i=e.src,n=e.width,o=e.quality,r=new URL("".concat(t.path).concat(h(i))),a=r.searchParams;return a.set("auto",a.getAll("auto").join(",")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||n.toString()),o&&a.set("q",o.toString()),r.href}],["cloudinary",function(e){var t,i=e.config,n=e.src,o=e.width,r=["f_auto","c_limit","w_"+o,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(i.path).concat(r).concat(h(n))}],["akamai",function(e){var t=e.config,i=e.src,n=e.width;return"".concat(t.path).concat(h(i),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}],]);function w(e){return void 0!==e.default}function _(e){var t=e.config,i=e.src,n=e.unoptimized,o=e.layout,a=e.width,l=e.quality,s=e.sizes,c=e.loader;if(n)return{src:i,srcSet:void 0,sizes:void 0};var u=function(e,t,i,n){var o=e.deviceSizes,a=e.allSizes;if(n&&("fill"===i||"responsive"===i)){for(var l=/(^|\s)(1?\d?\d)vw/g,s=[];c=l.exec(n);c)s.push(parseInt(c[2]));if(s.length){var c,u,d=.01*(u=Math).min.apply(u,r(s));return{widths:a.filter(function(e){return e>=o[0]*d}),kind:"w"}}return{widths:a,kind:"w"}}return"number"!=typeof t||"fill"===i||"responsive"===i?{widths:o,kind:"w"}:{widths:r(new Set([t,2*t].map(function(e){return a.find(function(t){return t>=e})||a[a.length-1]}))),kind:"x"}}(t,a,o,s),d=u.widths,f=u.kind,g=d.length-1;return{sizes:s||"w"!==f?s:"100vw",srcSet:d.map(function(e,n){return"".concat(c({config:t,src:i,quality:l,width:e})," ").concat("w"===f?e:n+1).concat(f)}).join(", "),src:c({config:t,src:i,quality:l,width:d[g]})}}function z(e){return"number"==typeof e?e:"string"==typeof e?parseInt(e,10):void 0}function S(e){var t,i=(null==(t=e.config)?void 0:t.loader)||"default",n=b.get(i);if(n)return n(e);throw Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(i))}function A(e,t,i,n,o,r){e&&e.src!==y&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch(function(){}).then(function(){if(e.parentNode&&(v.add(t),"blur"===n&&r(!0),null==o?void 0:o.current)){var i=e.naturalWidth,a=e.naturalHeight;o.current({naturalWidth:i,naturalHeight:a})}}))}var x=function(e){var t=e.imgAttributes,i=(e.heightInt,e.widthInt),n=e.qualityInt,o=e.layout,r=e.className,l=e.imgStyle,s=e.blurStyle,d=e.isLazy,f=e.placeholder,g=e.loading,m=e.srcString,$=e.config,h=e.unoptimized,p=e.loader,v=e.onLoadingCompleteRef,y=e.setBlurComplete,b=e.setIntersection,w=e.onLoad,z=e.onError,S=(e.isVisible,e.noscriptSizes),x=c(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return g=d?"lazy":g,u.default.createElement(u.default.Fragment,null,u.default.createElement("img",Object.assign({},x,t,{decoding:"async","data-nimg":o,className:r,style:a({},l,s),ref:u.useCallback(function(e){b(e),(null==e?void 0:e.complete)&&A(e,m,o,f,v,y)},[b,m,o,f,v,y,]),onLoad:function(e){A(e.currentTarget,m,o,f,v,y),w&&w(e)},onError:function(e){"blur"===f&&y(!0),z&&z(e)}})),(d||"blur"===f)&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},x,_({config:$,src:m,unoptimized:h,layout:o,width:i,quality:n,sizes:S,loader:p}),{decoding:"async","data-nimg":o,style:l,className:r,loading:g}))))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t,i=e.rootRef,c=e.rootMargin,u=e.disabled||!a,d=n(o.useState(!1),2),f=d[0],g=d[1],m=n(o.useState(null),2),$=m[0],h=m[1];return o.useEffect(function(){if(a){if(!u&&!f&&$&&$.tagName){var e,t,n,o,d,m,h;return e=$,t=function(e){return e&&g(e)},d=(o=function(e){var t,i={root:e.root||null,margin:e.rootMargin||""},n=s.find(function(e){return e.root===i.root&&e.margin===i.margin});if(n&&(t=l.get(n)))return t;var o=new Map;return t={id:i,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=o.get(e.target),i=e.isIntersecting||e.intersectionRatio>0;t&&i&&t(i)})},e),elements:o},s.push(i),l.set(i,t),t}(n={root:null==i?void 0:i.current,rootMargin:c})).id,m=o.observer,(h=o.elements).set(e,t),m.observe(e),function(){if(h.delete(e),m.unobserve(e),0===h.size){m.disconnect(),l.delete(d);var t=s.findIndex(function(e){return e.root===d.root&&e.margin===d.margin});t>-1&&s.splice(t,1)}}}}else if(!f){var p=r.requestIdleCallback(function(){return g(!0)});return function(){return r.cancelIdleCallback(p)}}},[$,u,c,i,f]),[h,f,o.useCallback(function(){g(!1)},[])]};var o=i(7294),r=i(9311),a="function"==typeof IntersectionObserver,l=new Map,s=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3678:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return a}});var n=i(5893);i(9008),i(5675);var o=i(214),r=i.n(o);function a(){return(0,n.jsxs)("div",{className:r().container,children:[(0,n.jsx)("img",{src:"underConst.jpg",width:"500px"}),(0,n.jsx)("h1",{style:{color:"#E63946",fontFamily:"fangsong"},children:"Thanks for visiting, IraSoft will be live soon..."}),(0,n.jsx)("h2",{style:{fontFamily:"fangsong"},children:"Stay tuned!!"})]})}},214:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},9008:function(e,t,i){i(5443)},5675:function(e,t,i){i(8045)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);