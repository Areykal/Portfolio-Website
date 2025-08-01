const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/HomePage-Bw1qUA8X.js","assets/js/vendor-BqK2eT3h.js","assets/js/Hero-DDtZZPNQ.js","assets/js/AboutMe-DTSZkZ-h.js","assets/js/Projects-B4b4-AA0.js","assets/js/ContactSection-kjZcn0Ve.js"])))=>i.map(i=>d[i]);
var rr=Object.defineProperty;var ar=(e,t,n)=>t in e?rr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var z=(e,t,n)=>ar(e,typeof t!="symbol"?t+"":t,n);import{r as y,a as sr,g as _e,R as _,B as or,b as ir,c as lr}from"./vendor-BqK2eT3h.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();var cn={exports:{}},Ne={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cr=y,fr=Symbol.for("react.element"),ur=Symbol.for("react.fragment"),mr=Object.prototype.hasOwnProperty,dr=cr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,pr={key:!0,ref:!0,__self:!0,__source:!0};function fn(e,t,n){var r,a={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)mr.call(t,r)&&!pr.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:fr,type:e,key:s,ref:o,props:a,_owner:dr.current}}Ne.Fragment=ur;Ne.jsx=fn;Ne.jsxs=fn;cn.exports=Ne;var u=cn.exports,Xe={},Ct=sr;Xe.createRoot=Ct.createRoot,Xe.hydrateRoot=Ct.hydrateRoot;const hr="modulepreload",gr=function(e){return"/"+e},Pt={},be=function(t,n,r){let a=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),o=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));a=Promise.all(n.map(i=>{if(i=gr(i),i in Pt)return;Pt[i]=!0;const c=i.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${l}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":hr,c||(f.as="script",f.crossOrigin=""),f.href=i,o&&f.setAttribute("nonce",o),document.head.appendChild(f),c)return new Promise((d,p)=>{f.addEventListener("load",d),f.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${i}`)))})}))}return a.then(()=>t()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};var yr=typeof Element<"u",br=typeof Map=="function",vr=typeof Set=="function",xr=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Oe(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,a;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!Oe(e[r],t[r]))return!1;return!0}var s;if(br&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(s=e.entries();!(r=s.next()).done;)if(!t.has(r.value[0]))return!1;for(s=e.entries();!(r=s.next()).done;)if(!Oe(r.value[1],t.get(r.value[0])))return!1;return!0}if(vr&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(s=e.entries();!(r=s.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(xr&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(a=Object.keys(e),n=a.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,a[r]))return!1;if(yr&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((a[r]==="_owner"||a[r]==="__v"||a[r]==="__o")&&e.$$typeof)&&!Oe(e[a[r]],t[a[r]]))return!1;return!0}return e!==e&&t!==t}var Ar=function(t,n){try{return Oe(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const Tr=_e(Ar);var wr=function(e,t,n,r,a,s,o,i){if(!e){var c;if(t===void 0)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,a,s,o,i],f=0;c=new Error(t.replace(/%s/g,function(){return l[f++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}},Or=wr;const It=_e(Or);var Er=function(t,n,r,a){var s=r?r.call(a,t,n):void 0;if(s!==void 0)return!!s;if(t===n)return!0;if(typeof t!="object"||!t||typeof n!="object"||!n)return!1;var o=Object.keys(t),i=Object.keys(n);if(o.length!==i.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(n),l=0;l<o.length;l++){var f=o[l];if(!c(f))return!1;var d=t[f],p=n[f];if(s=r?r.call(a,d,p,f):void 0,s===!1||s===void 0&&d!==p)return!1}return!0};const kr=_e(Er);var un=(e=>(e.BASE="base",e.BODY="body",e.HEAD="head",e.HTML="html",e.LINK="link",e.META="meta",e.NOSCRIPT="noscript",e.SCRIPT="script",e.STYLE="style",e.TITLE="title",e.FRAGMENT="Symbol(react.fragment)",e))(un||{}),ze={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},_t=Object.values(un),gt={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Sr=Object.entries(gt).reduce((e,[t,n])=>(e[n]=t,e),{}),N="data-rh",ne={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},re=(e,t)=>{for(let n=e.length-1;n>=0;n-=1){const r=e[n];if(Object.prototype.hasOwnProperty.call(r,t))return r[t]}return null},Cr=e=>{let t=re(e,"title");const n=re(e,ne.TITLE_TEMPLATE);if(Array.isArray(t)&&(t=t.join("")),n&&t)return n.replace(/%s/g,()=>t);const r=re(e,ne.DEFAULT_TITLE);return t||r||void 0},Pr=e=>re(e,ne.ON_CHANGE_CLIENT_STATE)||(()=>{}),De=(e,t)=>t.filter(n=>typeof n[e]<"u").map(n=>n[e]).reduce((n,r)=>({...n,...r}),{}),Ir=(e,t)=>t.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,r)=>{if(!n.length){const a=Object.keys(r);for(let s=0;s<a.length;s+=1){const i=a[s].toLowerCase();if(e.indexOf(i)!==-1&&r[i])return n.concat(r)}}return n},[]),_r=e=>console&&typeof console.warn=="function"&&console.warn(e),le=(e,t,n)=>{const r={};return n.filter(a=>Array.isArray(a[e])?!0:(typeof a[e]<"u"&&_r(`Helmet: ${e} should be of type "Array". Instead found type "${typeof a[e]}"`),!1)).map(a=>a[e]).reverse().reduce((a,s)=>{const o={};s.filter(c=>{let l;const f=Object.keys(c);for(let p=0;p<f.length;p+=1){const g=f[p],A=g.toLowerCase();t.indexOf(A)!==-1&&!(l==="rel"&&c[l].toLowerCase()==="canonical")&&!(A==="rel"&&c[A].toLowerCase()==="stylesheet")&&(l=A),t.indexOf(g)!==-1&&(g==="innerHTML"||g==="cssText"||g==="itemprop")&&(l=g)}if(!l||!c[l])return!1;const d=c[l].toLowerCase();return r[l]||(r[l]={}),o[l]||(o[l]={}),r[l][d]?!1:(o[l][d]=!0,!0)}).reverse().forEach(c=>a.push(c));const i=Object.keys(o);for(let c=0;c<i.length;c+=1){const l=i[c],f={...r[l],...o[l]};r[l]=f}return a},[]).reverse()},Nr=(e,t)=>{if(Array.isArray(e)&&e.length){for(let n=0;n<e.length;n+=1)if(e[n][t])return!0}return!1},Lr=e=>({baseTag:Ir(["href"],e),bodyAttributes:De("bodyAttributes",e),defer:re(e,ne.DEFER),encode:re(e,ne.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:De("htmlAttributes",e),linkTags:le("link",["rel","href"],e),metaTags:le("meta",["name","charset","http-equiv","property","itemprop"],e),noscriptTags:le("noscript",["innerHTML"],e),onChangeClientState:Pr(e),scriptTags:le("script",["src","innerHTML"],e),styleTags:le("style",["cssText"],e),title:Cr(e),titleAttributes:De("titleAttributes",e),prioritizeSeoTags:Nr(e,ne.PRIORITIZE_SEO_TAGS)}),mn=e=>Array.isArray(e)?e.join(""):e,jr=(e,t)=>{const n=Object.keys(e);for(let r=0;r<n.length;r+=1)if(t[n[r]]&&t[n[r]].includes(e[n[r]]))return!0;return!1},$e=(e,t)=>Array.isArray(e)?e.reduce((n,r)=>(jr(r,t)?n.priority.push(r):n.default.push(r),n),{priority:[],default:[]}):{default:e,priority:[]},Nt=(e,t)=>({...e,[t]:void 0}),Mr=["noscript","script","style"],Be=(e,t=!0)=>t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),dn=e=>Object.keys(e).reduce((t,n)=>{const r=typeof e[n]<"u"?`${n}="${e[n]}"`:`${n}`;return t?`${t} ${r}`:r},""),Rr=(e,t,n,r)=>{const a=dn(n),s=mn(t);return a?`<${e} ${N}="true" ${a}>${Be(s,r)}</${e}>`:`<${e} ${N}="true">${Be(s,r)}</${e}>`},Fr=(e,t,n=!0)=>t.reduce((r,a)=>{const s=a,o=Object.keys(s).filter(l=>!(l==="innerHTML"||l==="cssText")).reduce((l,f)=>{const d=typeof s[f]>"u"?f:`${f}="${Be(s[f],n)}"`;return l?`${l} ${d}`:d},""),i=s.innerHTML||s.cssText||"",c=Mr.indexOf(e)===-1;return`${r}<${e} ${N}="true" ${o}${c?"/>":`>${i}</${e}>`}`},""),pn=(e,t={})=>Object.keys(e).reduce((n,r)=>{const a=gt[r];return n[a||r]=e[r],n},t),zr=(e,t,n)=>{const r={key:t,[N]:!0},a=pn(n,r);return[_.createElement("title",a,t)]},Ee=(e,t)=>t.map((n,r)=>{const a={key:r,[N]:!0};return Object.keys(n).forEach(s=>{const i=gt[s]||s;if(i==="innerHTML"||i==="cssText"){const c=n.innerHTML||n.cssText;a.dangerouslySetInnerHTML={__html:c}}else a[i]=n[s]}),_.createElement(e,a)}),P=(e,t,n=!0)=>{switch(e){case"title":return{toComponent:()=>zr(e,t.title,t.titleAttributes),toString:()=>Rr(e,t.title,t.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>pn(t),toString:()=>dn(t)};default:return{toComponent:()=>Ee(e,t),toString:()=>Fr(e,t,n)}}},Dr=({metaTags:e,linkTags:t,scriptTags:n,encode:r})=>{const a=$e(e,ze.meta),s=$e(t,ze.link),o=$e(n,ze.script);return{priorityMethods:{toComponent:()=>[...Ee("meta",a.priority),...Ee("link",s.priority),...Ee("script",o.priority)],toString:()=>`${P("meta",a.priority,r)} ${P("link",s.priority,r)} ${P("script",o.priority,r)}`},metaTags:a.default,linkTags:s.default,scriptTags:o.default}},$r=e=>{const{baseTag:t,bodyAttributes:n,encode:r=!0,htmlAttributes:a,noscriptTags:s,styleTags:o,title:i="",titleAttributes:c,prioritizeSeoTags:l}=e;let{linkTags:f,metaTags:d,scriptTags:p}=e,g={toComponent:()=>{},toString:()=>""};return l&&({priorityMethods:g,linkTags:f,metaTags:d,scriptTags:p}=Dr(e)),{priority:g,base:P("base",t,r),bodyAttributes:P("bodyAttributes",n,r),htmlAttributes:P("htmlAttributes",a,r),link:P("link",f,r),meta:P("meta",d,r),noscript:P("noscript",s,r),script:P("script",p,r),style:P("style",o,r),title:P("title",{title:i,titleAttributes:c},r)}},Ke=$r,Te=[],hn=!!(typeof window<"u"&&window.document&&window.document.createElement),Ze=class{constructor(e,t){z(this,"instances",[]);z(this,"canUseDOM",hn);z(this,"context");z(this,"value",{setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?Te:this.instances,add:e=>{(this.canUseDOM?Te:this.instances).push(e)},remove:e=>{const t=(this.canUseDOM?Te:this.instances).indexOf(e);(this.canUseDOM?Te:this.instances).splice(t,1)}}});this.context=e,this.canUseDOM=t||!1,t||(e.helmet=Ke({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},Hr={},gn=_.createContext(Hr),X,yn=(X=class extends y.Component{constructor(n){super(n);z(this,"helmetData");this.helmetData=new Ze(this.props.context||{},X.canUseDOM)}render(){return _.createElement(gn.Provider,{value:this.helmetData.value},this.props.children)}},z(X,"canUseDOM",hn),X),Q=(e,t)=>{const n=document.head||document.querySelector("head"),r=n.querySelectorAll(`${e}[${N}]`),a=[].slice.call(r),s=[];let o;return t&&t.length&&t.forEach(i=>{const c=document.createElement(e);for(const l in i)if(Object.prototype.hasOwnProperty.call(i,l))if(l==="innerHTML")c.innerHTML=i.innerHTML;else if(l==="cssText")c.styleSheet?c.styleSheet.cssText=i.cssText:c.appendChild(document.createTextNode(i.cssText));else{const f=l,d=typeof i[f]>"u"?"":i[f];c.setAttribute(l,d)}c.setAttribute(N,"true"),a.some((l,f)=>(o=f,c.isEqualNode(l)))?a.splice(o,1):s.push(c)}),a.forEach(i=>{var c;return(c=i.parentNode)==null?void 0:c.removeChild(i)}),s.forEach(i=>n.appendChild(i)),{oldTags:a,newTags:s}},Je=(e,t)=>{const n=document.getElementsByTagName(e)[0];if(!n)return;const r=n.getAttribute(N),a=r?r.split(","):[],s=[...a],o=Object.keys(t);for(const i of o){const c=t[i]||"";n.getAttribute(i)!==c&&n.setAttribute(i,c),a.indexOf(i)===-1&&a.push(i);const l=s.indexOf(i);l!==-1&&s.splice(l,1)}for(let i=s.length-1;i>=0;i-=1)n.removeAttribute(s[i]);a.length===s.length?n.removeAttribute(N):n.getAttribute(N)!==o.join(",")&&n.setAttribute(N,o.join(","))},Ur=(e,t)=>{typeof e<"u"&&document.title!==e&&(document.title=mn(e)),Je("title",t)},Lt=(e,t)=>{const{baseTag:n,bodyAttributes:r,htmlAttributes:a,linkTags:s,metaTags:o,noscriptTags:i,onChangeClientState:c,scriptTags:l,styleTags:f,title:d,titleAttributes:p}=e;Je("body",r),Je("html",a),Ur(d,p);const g={baseTag:Q("base",n),linkTags:Q("link",s),metaTags:Q("meta",o),noscriptTags:Q("noscript",i),scriptTags:Q("script",l),styleTags:Q("style",f)},A={},E={};Object.keys(g).forEach(b=>{const{newTags:T,oldTags:w}=g[b];T.length&&(A[b]=T),w.length&&(E[b]=g[b].oldTags)}),t&&t(),c(e,A,E)},ce=null,Yr=e=>{ce&&cancelAnimationFrame(ce),e.defer?ce=requestAnimationFrame(()=>{Lt(e,()=>{ce=null})}):(Lt(e),ce=null)},Vr=Yr,jt=class extends y.Component{constructor(){super(...arguments);z(this,"rendered",!1)}shouldComponentUpdate(t){return!kr(t,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:t}=this.props.context;t.remove(this),this.emitChange()}emitChange(){const{helmetInstances:t,setHelmet:n}=this.props.context;let r=null;const a=Lr(t.get().map(s=>{const o={...s.props};return delete o.context,o}));yn.canUseDOM?Vr(a):Ke&&(r=Ke(a)),n(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:t}=this.props.context;t.add(this),this.emitChange()}render(){return this.init(),null}},Ge,xo=(Ge=class extends y.Component{shouldComponentUpdate(e){return!Tr(Nt(this.props,"helmetData"),Nt(e,"helmetData"))}mapNestedChildrenToProps(e,t){if(!t)return null;switch(e.type){case"script":case"noscript":return{innerHTML:t};case"style":return{cssText:t};default:throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(e,t,n,r){return{...t,[e.type]:[...t[e.type]||[],{...n,...this.mapNestedChildrenToProps(e,r)}]}}mapObjectTypeChildren(e,t,n,r){switch(e.type){case"title":return{...t,[e.type]:r,titleAttributes:{...n}};case"body":return{...t,bodyAttributes:{...n}};case"html":return{...t,htmlAttributes:{...n}};default:return{...t,[e.type]:{...n}}}}mapArrayTypeChildrenToProps(e,t){let n={...t};return Object.keys(e).forEach(r=>{n={...n,[r]:e[r]}}),n}warnOnInvalidChildren(e,t){return It(_t.some(n=>e.type===n),typeof e.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${_t.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),It(!t||typeof t=="string"||Array.isArray(t)&&!t.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(e,t){let n={};return _.Children.forEach(e,r=>{if(!r||!r.props)return;const{children:a,...s}=r.props,o=Object.keys(s).reduce((c,l)=>(c[Sr[l]||l]=s[l],c),{});let{type:i}=r;switch(typeof i=="symbol"?i=i.toString():this.warnOnInvalidChildren(r,a),i){case"Symbol(react.fragment)":t=this.mapChildrenToProps(a,t);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(r,n,o,a);break;default:t=this.mapObjectTypeChildren(r,t,o,a);break}}),this.mapArrayTypeChildrenToProps(n,t)}render(){const{children:e,...t}=this.props;let n={...t},{helmetData:r}=t;if(e&&(n=this.mapChildrenToProps(e,n)),r&&!(r instanceof Ze)){const a=r;r=new Ze(a.context,!0),delete n.helmetData}return r?_.createElement(jt,{...n,context:r.value}):_.createElement(gn.Consumer,null,a=>_.createElement(jt,{...n,context:a}))}},z(Ge,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),Ge);const fe=()=>u.jsx("div",{className:"flex items-center justify-center h-screen",children:u.jsx("div",{className:"w-32 h-32 border-t-2 border-b-2 border-teal-500 rounded-full animate-spin"})}),Mt=()=>{};let yt={},bn={},vn=null,xn={mark:Mt,measure:Mt};try{typeof window<"u"&&(yt=window),typeof document<"u"&&(bn=document),typeof MutationObserver<"u"&&(vn=MutationObserver),typeof performance<"u"&&(xn=performance)}catch{}const{userAgent:Rt=""}=yt.navigator||{},V=yt,v=bn,Ft=vn,we=xn;V.document;const H=!!v.documentElement&&!!v.head&&typeof v.addEventListener=="function"&&typeof v.createElement=="function",An=~Rt.indexOf("MSIE")||~Rt.indexOf("Trident/");var x="classic",Tn="duotone",k="sharp",S="sharp-duotone",Wr=[x,Tn,k,S],qr={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},zt={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Gr=["kit"],Xr=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,Br=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Kr={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Zr={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},Jr={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},Qr={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},ea={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},ta={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},wn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},na=["solid","regular","light","thin","duotone","brands"],On=[1,2,3,4,5,6,7,8,9,10],ra=On.concat([11,12,13,14,15,16,17,18,19,20]),me={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},aa=[...Object.keys(Qr),...na,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",me.GROUP,me.SWAP_OPACITY,me.PRIMARY,me.SECONDARY].concat(On.map(e=>"".concat(e,"x"))).concat(ra.map(e=>"w-".concat(e))),sa={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},oa={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},ia={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Dt={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const D="___FONT_AWESOME___",Qe=16,En="fa",kn="svg-inline--fa",Z="data-fa-i2svg",et="data-fa-pseudo-element",la="data-fa-pseudo-element-pending",bt="data-prefix",vt="data-icon",$t="fontawesome-i2svg",ca="async",fa=["HTML","HEAD","STYLE","SCRIPT"],Sn=(()=>{try{return!0}catch{return!1}})(),Cn=[x,k,S];function ve(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[x]}})}const Pn={...wn};Pn[x]={...wn[x],...zt.kit,...zt["kit-duotone"]};const B=ve(Pn),tt={...ta};tt[x]={...tt[x],...Dt.kit,...Dt["kit-duotone"]};const ge=ve(tt),nt={...ea};nt[x]={...nt[x],...ia.kit};const K=ve(nt),rt={...Jr};rt[x]={...rt[x],...oa.kit};const ua=ve(rt),ma=Xr,In="fa-layers-text",da=Br,pa={...qr};ve(pa);const ha=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],He=me,se=new Set;Object.keys(ge[x]).map(se.add.bind(se));Object.keys(ge[k]).map(se.add.bind(se));Object.keys(ge[S]).map(se.add.bind(se));const ga=[...Gr,...aa],pe=V.FontAwesomeConfig||{};function ya(e){var t=v.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function ba(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}v&&typeof v.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const a=ba(ya(n));a!=null&&(pe[r]=a)});const _n={styleDefault:"solid",familyDefault:"classic",cssPrefix:En,replacementClass:kn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};pe.familyPrefix&&(pe.cssPrefix=pe.familyPrefix);const oe={..._n,...pe};oe.autoReplaceSvg||(oe.observeMutations=!1);const m={};Object.keys(_n).forEach(e=>{Object.defineProperty(m,e,{enumerable:!0,set:function(t){oe[e]=t,he.forEach(n=>n(m))},get:function(){return oe[e]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(e){oe.cssPrefix=e,he.forEach(t=>t(m))},get:function(){return oe.cssPrefix}});V.FontAwesomeConfig=m;const he=[];function va(e){return he.push(e),()=>{he.splice(he.indexOf(e),1)}}const U=Qe,j={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function xa(e){if(!e||!H)return;const t=v.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=v.head.childNodes;let r=null;for(let a=n.length-1;a>-1;a--){const s=n[a],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return v.head.insertBefore(t,r),e}const Aa="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ye(){let e=12,t="";for(;e-- >0;)t+=Aa[Math.random()*62|0];return t}function ie(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function xt(e){return e.classList?ie(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function Nn(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ta(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(Nn(e[n]),'" '),"").trim()}function Le(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function At(e){return e.size!==j.size||e.x!==j.x||e.y!==j.y||e.rotate!==j.rotate||e.flipX||e.flipY}function wa(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const a={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),i="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(s," ").concat(o," ").concat(i)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:c,path:l}}function Oa(e){let{transform:t,width:n=Qe,height:r=Qe,startCentered:a=!1}=e,s="";return a&&An?s+="translate(".concat(t.x/U-n/2,"em, ").concat(t.y/U-r/2,"em) "):a?s+="translate(calc(-50% + ".concat(t.x/U,"em), calc(-50% + ").concat(t.y/U,"em)) "):s+="translate(".concat(t.x/U,"em, ").concat(t.y/U,"em) "),s+="scale(".concat(t.size/U*(t.flipX?-1:1),", ").concat(t.size/U*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var Ea=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Ln(){const e=En,t=kn,n=m.cssPrefix,r=m.replacementClass;let a=Ea;if(n!==e||r!==t){const s=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),i=new RegExp("\\.".concat(t),"g");a=a.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(i,".".concat(r))}return a}let Ht=!1;function Ue(){m.autoAddCss&&!Ht&&(xa(Ln()),Ht=!0)}var ka={mixout(){return{dom:{css:Ln,insertCss:Ue}}},hooks(){return{beforeDOMElementCreation(){Ue()},beforeI2svg(){Ue()}}}};const $=V||{};$[D]||($[D]={});$[D].styles||($[D].styles={});$[D].hooks||($[D].hooks={});$[D].shims||($[D].shims=[]);var M=$[D];const jn=[],Mn=function(){v.removeEventListener("DOMContentLoaded",Mn),Ce=1,jn.map(e=>e())};let Ce=!1;H&&(Ce=(v.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(v.readyState),Ce||v.addEventListener("DOMContentLoaded",Mn));function Sa(e){H&&(Ce?setTimeout(e,0):jn.push(e))}function xe(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?Nn(e):"<".concat(t," ").concat(Ta(n),">").concat(r.map(xe).join(""),"</").concat(t,">")}function Ut(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Ye=function(t,n,r,a){var s=Object.keys(t),o=s.length,i=n,c,l,f;for(r===void 0?(c=1,f=t[s[0]]):(c=0,f=r);c<o;c++)l=s[c],f=i(f,t[l],l,t);return f};function Ca(e){const t=[];let n=0;const r=e.length;for(;n<r;){const a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){const s=e.charCodeAt(n++);(s&64512)==56320?t.push(((a&1023)<<10)+(s&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function at(e){const t=Ca(e);return t.length===1?t[0].toString(16):null}function Pa(e,t){const n=e.length;let r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Yt(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function st(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,a=Yt(t);typeof M.hooks.addPack=="function"&&!r?M.hooks.addPack(e,Yt(t)):M.styles[e]={...M.styles[e]||{},...a},e==="fas"&&st("fa",t)}const{styles:G,shims:Ia}=M,_a={[x]:Object.values(K[x]),[k]:Object.values(K[k]),[S]:Object.values(K[S])};let Tt=null,Rn={},Fn={},zn={},Dn={},$n={};const Na={[x]:Object.keys(B[x]),[k]:Object.keys(B[k]),[S]:Object.keys(B[S])};function La(e){return~ga.indexOf(e)}function ja(e,t){const n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!La(a)?a:null}const Hn=()=>{const e=r=>Ye(G,(a,s,o)=>(a[o]=Ye(s,r,{}),a),{});Rn=e((r,a,s)=>(a[3]&&(r[a[3]]=s),a[2]&&a[2].filter(i=>typeof i=="number").forEach(i=>{r[i.toString(16)]=s}),r)),Fn=e((r,a,s)=>(r[s]=s,a[2]&&a[2].filter(i=>typeof i=="string").forEach(i=>{r[i]=s}),r)),$n=e((r,a,s)=>{const o=a[2];return r[s]=s,o.forEach(i=>{r[i]=s}),r});const t="far"in G||m.autoFetchSvg,n=Ye(Ia,(r,a)=>{const s=a[0];let o=a[1];const i=a[2];return o==="far"&&!t&&(o="fas"),typeof s=="string"&&(r.names[s]={prefix:o,iconName:i}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:o,iconName:i}),r},{names:{},unicodes:{}});zn=n.names,Dn=n.unicodes,Tt=je(m.styleDefault,{family:m.familyDefault})};va(e=>{Tt=je(e.styleDefault,{family:m.familyDefault})});Hn();function wt(e,t){return(Rn[e]||{})[t]}function Ma(e,t){return(Fn[e]||{})[t]}function Y(e,t){return($n[e]||{})[t]}function Un(e){return zn[e]||{prefix:null,iconName:null}}function Ra(e){const t=Dn[e],n=wt("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function W(){return Tt}const Ot=()=>({prefix:null,iconName:null,rest:[]});function je(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=x}=t,r=B[n][e],a=ge[n][e]||ge[n][r],s=e in M.styles?e:null;return a||s||null}const Fa={[x]:Object.keys(K[x]),[k]:Object.keys(K[k]),[S]:Object.keys(K[S])};function Me(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t,r={[x]:"".concat(m.cssPrefix,"-").concat(x),[k]:"".concat(m.cssPrefix,"-").concat(k),[S]:"".concat(m.cssPrefix,"-").concat(S)};let a=null,s=x;const o=Wr.filter(c=>c!==Tn);o.forEach(c=>{(e.includes(r[c])||e.some(l=>Fa[c].includes(l)))&&(s=c)});const i=e.reduce((c,l)=>{const f=ja(m.cssPrefix,l);if(G[l]?(l=_a[s].includes(l)?ua[s][l]:l,a=l,c.prefix=l):Na[s].indexOf(l)>-1?(a=l,c.prefix=je(l,{family:s})):f?c.iconName=f:l!==m.replacementClass&&!o.some(d=>l===r[d])&&c.rest.push(l),!n&&c.prefix&&c.iconName){const d=a==="fa"?Un(c.iconName):{},p=Y(c.prefix,c.iconName);d.prefix&&(a=null),c.iconName=d.iconName||p||c.iconName,c.prefix=d.prefix||c.prefix,c.prefix==="far"&&!G.far&&G.fas&&!m.autoFetchSvg&&(c.prefix="fas")}return c},Ot());return(e.includes("fa-brands")||e.includes("fab"))&&(i.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(i.prefix="fad"),!i.prefix&&s===k&&(G.fass||m.autoFetchSvg)&&(i.prefix="fass",i.iconName=Y(i.prefix,i.iconName)||i.iconName),!i.prefix&&s===S&&(G.fasds||m.autoFetchSvg)&&(i.prefix="fasds",i.iconName=Y(i.prefix,i.iconName)||i.iconName),(i.prefix==="fa"||a==="fa")&&(i.prefix=W()||"fas"),i}class za{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const a=n.reduce(this._pullDefinitions,{});Object.keys(a).forEach(s=>{this.definitions[s]={...this.definitions[s]||{},...a[s]},st(s,a[s]);const o=K[x][s];o&&st(o,a[s]),Hn()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(a=>{const{prefix:s,iconName:o,icon:i}=r[a],c=i[2];t[s]||(t[s]={}),c.length>0&&c.forEach(l=>{typeof l=="string"&&(t[s][l]=i)}),t[s][o]=i}),t}}let Vt=[],ee={};const ae={},Da=Object.keys(ae);function $a(e,t){let{mixoutsTo:n}=t;return Vt=e,ee={},Object.keys(ae).forEach(r=>{Da.indexOf(r)===-1&&delete ae[r]}),Vt.forEach(r=>{const a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(s=>{typeof a[s]=="function"&&(n[s]=a[s]),typeof a[s]=="object"&&Object.keys(a[s]).forEach(o=>{n[s]||(n[s]={}),n[s][o]=a[s][o]})}),r.hooks){const s=r.hooks();Object.keys(s).forEach(o=>{ee[o]||(ee[o]=[]),ee[o].push(s[o])})}r.provides&&r.provides(ae)}),n}function ot(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return(ee[e]||[]).forEach(o=>{t=o.apply(null,[t,...r])}),t}function J(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(ee[e]||[]).forEach(s=>{s.apply(null,n)})}function q(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ae[e]?ae[e].apply(null,t):void 0}function it(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||W();if(t)return t=Y(n,t)||t,Ut(Yn.definitions,n,t)||Ut(M.styles,n,t)}const Yn=new za,Ha=()=>{m.autoReplaceSvg=!1,m.observeMutations=!1,J("noAuto")},Ua={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return H?(J("beforeI2svg",e),q("pseudoElements2svg",e),q("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,Sa(()=>{Va({autoReplaceSvgRoot:t}),J("watch",e)})}},Ya={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Y(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=je(e[0]);return{prefix:n,iconName:Y(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(m.cssPrefix,"-"))>-1||e.match(ma))){const t=Me(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||W(),iconName:Y(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=W();return{prefix:t,iconName:Y(t,e)||e}}}},C={noAuto:Ha,config:m,dom:Ua,parse:Ya,library:Yn,findIconDefinition:it,toHtml:xe},Va=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=v}=e;(Object.keys(M.styles).length>0||m.autoFetchSvg)&&H&&m.autoReplaceSvg&&C.dom.i2svg({node:t})};function Re(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>xe(n))}}),Object.defineProperty(e,"node",{get:function(){if(!H)return;const n=v.createElement("div");return n.innerHTML=e.html,n.children}}),e}function Wa(e){let{children:t,main:n,mask:r,attributes:a,styles:s,transform:o}=e;if(At(o)&&n.found&&!r.found){const{width:i,height:c}=n,l={x:i/c/2,y:.5};a.style=Le({...s,"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")})}return[{tag:"svg",attributes:a,children:t}]}function qa(e){let{prefix:t,iconName:n,children:r,attributes:a,symbol:s}=e;const o=s===!0?"".concat(t,"-").concat(m.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...a,id:o},children:r}]}]}function Et(e){const{icons:{main:t,mask:n},prefix:r,iconName:a,transform:s,symbol:o,title:i,maskId:c,titleId:l,extra:f,watchable:d=!1}=e,{width:p,height:g}=n.found?n:t,A=r==="fak",E=[m.replacementClass,a?"".concat(m.cssPrefix,"-").concat(a):""].filter(I=>f.classes.indexOf(I)===-1).filter(I=>I!==""||!!I).concat(f.classes).join(" ");let b={children:[],attributes:{...f.attributes,"data-prefix":r,"data-icon":a,class:E,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(g)}};const T=A&&!~f.classes.indexOf("fa-fw")?{width:"".concat(p/g*16*.0625,"em")}:{};d&&(b.attributes[Z]=""),i&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(l||ye())},children:[i]}),delete b.attributes.title);const w={...b,prefix:r,iconName:a,main:t,mask:n,maskId:c,transform:s,symbol:o,styles:{...T,...f.styles}},{children:O,attributes:F}=n.found&&t.found?q("generateAbstractMask",w)||{children:[],attributes:{}}:q("generateAbstractIcon",w)||{children:[],attributes:{}};return w.children=O,w.attributes=F,o?qa(w):Wa(w)}function Wt(e){const{content:t,width:n,height:r,transform:a,title:s,extra:o,watchable:i=!1}=e,c={...o.attributes,...s?{title:s}:{},class:o.classes.join(" ")};i&&(c[Z]="");const l={...o.styles};At(a)&&(l.transform=Oa({transform:a,startCentered:!0,width:n,height:r}),l["-webkit-transform"]=l.transform);const f=Le(l);f.length>0&&(c.style=f);const d=[];return d.push({tag:"span",attributes:c,children:[t]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function Ga(e){const{content:t,title:n,extra:r}=e,a={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},s=Le(r.styles);s.length>0&&(a.style=s);const o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:Ve}=M;function lt(e){const t=e[0],n=e[1],[r]=e.slice(4);let a=null;return Array.isArray(r)?a={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(He.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(He.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(He.PRIMARY),fill:"currentColor",d:r[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:a}}const Xa={found:!1,width:512,height:512};function Ba(e,t){!Sn&&!m.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ct(e,t){let n=t;return t==="fa"&&m.styleDefault!==null&&(t=W()),new Promise((r,a)=>{if(n==="fa"){const s=Un(e)||{};e=s.iconName||e,t=s.prefix||t}if(e&&t&&Ve[t]&&Ve[t][e]){const s=Ve[t][e];return r(lt(s))}Ba(e,t),r({...Xa,icon:m.showMissingIcons&&e?q("missingIconAbstract")||{}:{}})})}const qt=()=>{},ft=m.measurePerformance&&we&&we.mark&&we.measure?we:{mark:qt,measure:qt},de='FA "6.6.0"',Ka=e=>(ft.mark("".concat(de," ").concat(e," begins")),()=>Vn(e)),Vn=e=>{ft.mark("".concat(de," ").concat(e," ends")),ft.measure("".concat(de," ").concat(e),"".concat(de," ").concat(e," begins"),"".concat(de," ").concat(e," ends"))};var kt={begin:Ka,end:Vn};const ke=()=>{};function Gt(e){return typeof(e.getAttribute?e.getAttribute(Z):null)=="string"}function Za(e){const t=e.getAttribute?e.getAttribute(bt):null,n=e.getAttribute?e.getAttribute(vt):null;return t&&n}function Ja(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(m.replacementClass)}function Qa(){return m.autoReplaceSvg===!0?Se.replace:Se[m.autoReplaceSvg]||Se.replace}function es(e){return v.createElementNS("http://www.w3.org/2000/svg",e)}function ts(e){return v.createElement(e)}function Wn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?es:ts}=t;if(typeof e=="string")return v.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(s){r.setAttribute(s,e.attributes[s])}),(e.children||[]).forEach(function(s){r.appendChild(Wn(s,{ceFn:n}))}),r}function ns(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const Se={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(Wn(n),t)}),t.getAttribute(Z)===null&&m.keepOriginalSource){let n=v.createComment(ns(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~xt(t).indexOf(m.replacementClass))return Se.replace(e);const r=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((o,i)=>(i===m.replacementClass||i.match(r)?o.toSvg.push(i):o.toNode.push(i),o),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",s.toNode.join(" "))}const a=n.map(s=>xe(s)).join(`
`);t.setAttribute(Z,""),t.innerHTML=a}};function Xt(e){e()}function qn(e,t){const n=typeof t=="function"?t:ke;if(e.length===0)n();else{let r=Xt;m.mutateApproach===ca&&(r=V.requestAnimationFrame||Xt),r(()=>{const a=Qa(),s=kt.begin("mutate");e.map(a),s(),n()})}}let St=!1;function Gn(){St=!0}function ut(){St=!1}let Pe=null;function Bt(e){if(!Ft||!m.observeMutations)return;const{treeCallback:t=ke,nodeCallback:n=ke,pseudoElementsCallback:r=ke,observeMutationsRoot:a=v}=e;Pe=new Ft(s=>{if(St)return;const o=W();ie(s).forEach(i=>{if(i.type==="childList"&&i.addedNodes.length>0&&!Gt(i.addedNodes[0])&&(m.searchPseudoElements&&r(i.target),t(i.target)),i.type==="attributes"&&i.target.parentNode&&m.searchPseudoElements&&r(i.target.parentNode),i.type==="attributes"&&Gt(i.target)&&~ha.indexOf(i.attributeName))if(i.attributeName==="class"&&Za(i.target)){const{prefix:c,iconName:l}=Me(xt(i.target));i.target.setAttribute(bt,c||o),l&&i.target.setAttribute(vt,l)}else Ja(i.target)&&n(i.target)})}),H&&Pe.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function rs(){Pe&&Pe.disconnect()}function as(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,a)=>{const s=a.split(":"),o=s[0],i=s.slice(1);return o&&i.length>0&&(r[o]=i.join(":").trim()),r},{})),n}function ss(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let a=Me(xt(e));return a.prefix||(a.prefix=W()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Ma(a.prefix,e.innerText)||wt(a.prefix,at(e.innerText))),!a.iconName&&m.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function os(e){const t=ie(e.attributes).reduce((a,s)=>(a.name!=="class"&&a.name!=="style"&&(a[s.name]=s.value),a),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return m.autoA11y&&(n?t["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(r||ye()):(t["aria-hidden"]="true",t.focusable="false")),t}function is(){return{iconName:null,title:null,titleId:null,prefix:null,transform:j,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Kt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:a}=ss(e),s=os(e),o=ot("parseNodeAttributes",{},e);let i=t.styleParser?as(e):[];return{iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:j,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:i,attributes:s},...o}}const{styles:ls}=M;function Xn(e){const t=m.autoReplaceSvg==="nest"?Kt(e,{styleParser:!1}):Kt(e);return~t.extra.classes.indexOf(In)?q("generateLayersText",e,t):q("generateSvgReplacementMutation",e,t)}let R=new Set;Cn.map(e=>{R.add("fa-".concat(e))});Object.keys(B[x]).map(R.add.bind(R));Object.keys(B[k]).map(R.add.bind(R));Object.keys(B[S]).map(R.add.bind(R));R=[...R];function Zt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!H)return Promise.resolve();const n=v.documentElement.classList,r=f=>n.add("".concat($t,"-").concat(f)),a=f=>n.remove("".concat($t,"-").concat(f)),s=m.autoFetchSvg?R:Cn.map(f=>"fa-".concat(f)).concat(Object.keys(ls));s.includes("fa")||s.push("fa");const o=[".".concat(In,":not([").concat(Z,"])")].concat(s.map(f=>".".concat(f,":not([").concat(Z,"])"))).join(", ");if(o.length===0)return Promise.resolve();let i=[];try{i=ie(e.querySelectorAll(o))}catch{}if(i.length>0)r("pending"),a("complete");else return Promise.resolve();const c=kt.begin("onTree"),l=i.reduce((f,d)=>{try{const p=Xn(d);p&&f.push(p)}catch(p){Sn||p.name==="MissingIcon"&&console.error(p)}return f},[]);return new Promise((f,d)=>{Promise.all(l).then(p=>{qn(p,()=>{r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),c(),f()})}).catch(p=>{c(),d(p)})})}function cs(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Xn(e).then(n=>{n&&qn([n],t)})}function fs(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:it(t||{});let{mask:a}=n;return a&&(a=(a||{}).icon?a:it(a||{})),e(r,{...n,mask:a})}}const us=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=j,symbol:r=!1,mask:a=null,maskId:s=null,title:o=null,titleId:i=null,classes:c=[],attributes:l={},styles:f={}}=t;if(!e)return;const{prefix:d,iconName:p,icon:g}=e;return Re({type:"icon",...e},()=>(J("beforeDOMElementCreation",{iconDefinition:e,params:t}),m.autoA11y&&(o?l["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(i||ye()):(l["aria-hidden"]="true",l.focusable="false")),Et({icons:{main:lt(g),mask:a?lt(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:p,transform:{...j,...n},symbol:r,title:o,maskId:s,titleId:i,extra:{attributes:l,styles:f,classes:c}})))};var ms={mixout(){return{icon:fs(us)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=Zt,e.nodeCallback=cs,e}}},provides(e){e.i2svg=function(t){const{node:n=v,callback:r=()=>{}}=t;return Zt(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:a,titleId:s,prefix:o,transform:i,symbol:c,mask:l,maskId:f,extra:d}=n;return new Promise((p,g)=>{Promise.all([ct(r,o),l.iconName?ct(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(A=>{let[E,b]=A;p([t,Et({icons:{main:E,mask:b},prefix:o,iconName:r,transform:i,symbol:c,maskId:f,title:a,titleId:s,extra:d,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:a,transform:s,styles:o}=t;const i=Le(o);i.length>0&&(r.style=i);let c;return At(s)&&(c=q("generateAbstractTransformGrouping",{main:a,transform:s,containerWidth:a.width,iconWidth:a.width})),n.push(c||a.icon),{children:n,attributes:r}}}},ds={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return Re({type:"layer"},()=>{J("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(a=>{Array.isArray(a)?a.map(s=>{r=r.concat(s.abstract)}):r=r.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},ps={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:a={},styles:s={}}=t;return Re({type:"counter",content:e},()=>(J("beforeDOMElementCreation",{content:e,params:t}),Ga({content:e.toString(),title:n,extra:{attributes:a,styles:s,classes:["".concat(m.cssPrefix,"-layers-counter"),...r]}})))}}}},hs={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=j,title:r=null,classes:a=[],attributes:s={},styles:o={}}=t;return Re({type:"text",content:e},()=>(J("beforeDOMElementCreation",{content:e,params:t}),Wt({content:e,transform:{...j,...n},title:r,extra:{attributes:s,styles:o,classes:["".concat(m.cssPrefix,"-layers-text"),...a]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:a,extra:s}=n;let o=null,i=null;if(An){const c=parseInt(getComputedStyle(t).fontSize,10),l=t.getBoundingClientRect();o=l.width/c,i=l.height/c}return m.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([t,Wt({content:t.innerHTML,width:o,height:i,transform:a,title:r,extra:s,watchable:!0})])}}};const gs=new RegExp('"',"ug"),Jt=[1105920,1112319],Qt={FontAwesome:{normal:"fas",400:"fas"},...Zr,...Kr,...sa},mt=Object.keys(Qt).reduce((e,t)=>(e[t.toLowerCase()]=Qt[t],e),{}),ys=Object.keys(mt).reduce((e,t)=>{const n=mt[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function bs(e){const t=e.replace(gs,""),n=Pa(t,0),r=n>=Jt[0]&&n<=Jt[1],a=t.length===2?t[0]===t[1]:!1;return{value:at(a?t[0]:t),isSecondary:r||a}}function vs(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),a=isNaN(r)?"normal":r;return(mt[n]||{})[a]||ys[n]}function en(e,t){const n="".concat(la).concat(t.replace(":","-"));return new Promise((r,a)=>{if(e.getAttribute(n)!==null)return r();const o=ie(e.children).filter(p=>p.getAttribute(et)===t)[0],i=V.getComputedStyle(e,t),c=i.getPropertyValue("font-family"),l=c.match(da),f=i.getPropertyValue("font-weight"),d=i.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){const p=i.getPropertyValue("content");let g=vs(c,f);const{value:A,isSecondary:E}=bs(p),b=l[0].startsWith("FontAwesome");let T=wt(g,A),w=T;if(b){const O=Ra(A);O.iconName&&O.prefix&&(T=O.iconName,g=O.prefix)}if(T&&!E&&(!o||o.getAttribute(bt)!==g||o.getAttribute(vt)!==w)){e.setAttribute(n,w),o&&e.removeChild(o);const O=is(),{extra:F}=O;F.attributes[et]=t,ct(T,g).then(I=>{const tr=Et({...O,icons:{main:I,mask:Ot()},prefix:g,iconName:w,extra:F,watchable:!0}),Fe=v.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(Fe,e.firstChild):e.appendChild(Fe),Fe.outerHTML=tr.map(nr=>xe(nr)).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function xs(e){return Promise.all([en(e,"::before"),en(e,"::after")])}function As(e){return e.parentNode!==document.head&&!~fa.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(et)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function tn(e){if(H)return new Promise((t,n)=>{const r=ie(e.querySelectorAll("*")).filter(As).map(xs),a=kt.begin("searchPseudoElements");Gn(),Promise.all(r).then(()=>{a(),ut(),t()}).catch(()=>{a(),ut(),n()})})}var Ts={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=tn,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=v}=t;m.searchPseudoElements&&tn(n)}}};let nn=!1;var ws={mixout(){return{dom:{unwatch(){Gn(),nn=!0}}}},hooks(){return{bootstrap(){Bt(ot("mutationObserverCallbacks",{}))},noAuto(){rs()},watch(e){const{observeMutationsRoot:t}=e;nn?ut():Bt(ot("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const rn=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const a=r.toLowerCase().split("-"),s=a[0];let o=a.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},t)};var Os={mixout(){return{parse:{transform:e=>rn(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=rn(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:a,iconWidth:s}=t;const o={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(i," ").concat(c," ").concat(l)},d={transform:"translate(".concat(s/2*-1," -256)")},p={outer:o,inner:f,path:d};return{tag:"g",attributes:{...p.outer},children:[{tag:"g",attributes:{...p.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...p.path}}]}]}}}};const We={x:0,y:0,width:"100%",height:"100%"};function an(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Es(e){return e.tag==="g"?e.children:[e]}var ks={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?Me(n.split(" ").map(a=>a.trim())):Ot();return r.prefix||(r.prefix=W()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:a,mask:s,maskId:o,transform:i}=t;const{width:c,icon:l}=a,{width:f,icon:d}=s,p=wa({transform:i,containerWidth:f,iconWidth:c}),g={tag:"rect",attributes:{...We,fill:"white"}},A=l.children?{children:l.children.map(an)}:{},E={tag:"g",attributes:{...p.inner},children:[an({tag:l.tag,attributes:{...l.attributes,...p.path},...A})]},b={tag:"g",attributes:{...p.outer},children:[E]},T="mask-".concat(o||ye()),w="clip-".concat(o||ye()),O={tag:"mask",attributes:{...We,id:T,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[g,b]},F={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:Es(d)},O]};return n.push(F,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(T,")"),...We}}),{children:n,attributes:r}}}},Ss={provides(e){let t=!1;V.matchMedia&&(t=V.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const s={...a,attributeName:"opacity"},o={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return t||o.children.push({tag:"animate",attributes:{...a,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...s,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:t?[]:[{tag:"animate",attributes:{...s,values:"1;0;0;0;0;1;"}}]}),t||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...s,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Cs={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},Ps=[ka,ms,ds,ps,hs,Ts,ws,Os,ks,Ss,Cs];$a(Ps,{mixoutsTo:C});C.noAuto;C.config;C.library;C.dom;const dt=C.parse;C.findIconDefinition;C.toHtml;const Is=C.icon;C.layer;C.text;C.counter;var Bn={exports:{}},_s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ns=_s,Ls=Ns;function Kn(){}function Zn(){}Zn.resetWarningCache=Kn;var js=function(){function e(r,a,s,o,i,c){if(c!==Ls){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Zn,resetWarningCache:Kn};return n.PropTypes=n,n};Bn.exports=js();var Ms=Bn.exports;const h=_e(Ms);function sn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?sn(Object(n),!0).forEach(function(r){te(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):sn(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ie(e){"@babel/helpers - typeof";return Ie=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ie(e)}function te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Rs(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,s;for(s=0;s<r.length;s++)a=r[s],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Fs(e,t){if(e==null)return{};var n=Rs(e,t),r,a;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function pt(e){return zs(e)||Ds(e)||$s(e)||Hs()}function zs(e){if(Array.isArray(e))return ht(e)}function Ds(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function $s(e,t){if(e){if(typeof e=="string")return ht(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ht(e,t)}}function ht(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Hs(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Us(e){var t,n=e.beat,r=e.fade,a=e.beatFade,s=e.bounce,o=e.shake,i=e.flash,c=e.spin,l=e.spinPulse,f=e.spinReverse,d=e.pulse,p=e.fixedWidth,g=e.inverse,A=e.border,E=e.listItem,b=e.flip,T=e.size,w=e.rotation,O=e.pull,F=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":s,"fa-shake":o,"fa-flash":i,"fa-spin":c,"fa-spin-reverse":f,"fa-spin-pulse":l,"fa-pulse":d,"fa-fw":p,"fa-inverse":g,"fa-border":A,"fa-li":E,"fa-flip":b===!0,"fa-flip-horizontal":b==="horizontal"||b==="both","fa-flip-vertical":b==="vertical"||b==="both"},te(t,"fa-".concat(T),typeof T<"u"&&T!==null),te(t,"fa-rotate-".concat(w),typeof w<"u"&&w!==null&&w!==0),te(t,"fa-pull-".concat(O),typeof O<"u"&&O!==null),te(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(F).map(function(I){return F[I]?I:null}).filter(function(I){return I})}function Ys(e){return e=e-0,e===e}function Jn(e){return Ys(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Vs=["style"];function Ws(e){return e.charAt(0).toUpperCase()+e.slice(1)}function qs(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Jn(n.slice(0,r)),s=n.slice(r+1).trim();return a.startsWith("webkit")?t[Ws(a)]=s:t[a]=s,t},{})}function Qn(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return Qn(e,c)}),a=Object.keys(t.attributes||{}).reduce(function(c,l){var f=t.attributes[l];switch(l){case"class":c.attrs.className=f,delete t.attributes.class;break;case"style":c.attrs.style=qs(f);break;default:l.indexOf("aria-")===0||l.indexOf("data-")===0?c.attrs[l.toLowerCase()]=f:c.attrs[Jn(l)]=f}return c},{attrs:{}}),s=n.style,o=s===void 0?{}:s,i=Fs(n,Vs);return a.attrs.style=L(L({},a.attrs.style),o),e.apply(void 0,[t.tag,L(L({},a.attrs),i)].concat(pt(r)))}var er=!1;try{er=!0}catch{}function Gs(){if(!er&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function on(e){if(e&&Ie(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(dt.icon)return dt.icon(e);if(e===null)return null;if(e&&Ie(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function qe(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?te({},e,t):{}}var ln={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Ae=_.forwardRef(function(e,t){var n=L(L({},ln),e),r=n.icon,a=n.mask,s=n.symbol,o=n.className,i=n.title,c=n.titleId,l=n.maskId,f=on(r),d=qe("classes",[].concat(pt(Us(n)),pt((o||"").split(" ")))),p=qe("transform",typeof n.transform=="string"?dt.transform(n.transform):n.transform),g=qe("mask",on(a)),A=Is(f,L(L(L(L({},d),p),g),{},{symbol:s,title:i,titleId:c,maskId:l}));if(!A)return Gs("Could not find icon",f),null;var E=A.abstract,b={ref:t};return Object.keys(n).forEach(function(T){ln.hasOwnProperty(T)||(b[T]=n[T])}),Xs(E[0],b)});Ae.displayName="FontAwesomeIcon";Ae.propTypes={beat:h.bool,border:h.bool,beatFade:h.bool,bounce:h.bool,className:h.string,fade:h.bool,flash:h.bool,mask:h.oneOfType([h.object,h.array,h.string]),maskId:h.string,fixedWidth:h.bool,inverse:h.bool,flip:h.oneOf([!0,!1,"horizontal","vertical","both"]),icon:h.oneOfType([h.object,h.array,h.string]),listItem:h.bool,pull:h.oneOf(["right","left"]),pulse:h.bool,rotation:h.oneOf([0,90,180,270]),shake:h.bool,size:h.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:h.bool,spinPulse:h.bool,spinReverse:h.bool,symbol:h.oneOfType([h.bool,h.string]),title:h.string,titleId:h.string,transform:h.oneOfType([h.string,h.object]),swapOpacity:h.bool};var Xs=Qn.bind(null,_.createElement);const Bs={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},Ks={prefix:"fas",iconName:"up-right-from-square",icon:[512,512,["external-link-alt"],"f35d","M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-128c0-17.7-14.3-32-32-32L352 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"]},Ao=Ks,To={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},Zs={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},wo=Zs,Js={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]},Qs={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},eo=Qs,to=({src:e,alt:t,className:n,sizes:r})=>{const[a,s]=y.useState(!1),o=y.useRef(null);y.useEffect(()=>{if("loading"in HTMLImageElement.prototype)o.current.loading="lazy";else{const l=new IntersectionObserver(f=>{f.forEach(d=>{if(d.isIntersecting){const p=d.target;p.src=e,l.unobserve(p)}})},{rootMargin:"200px"});return o.current&&l.observe(o.current),()=>{o.current&&l.unobserve(o.current)}}},[e]);const i=()=>{s(!0)},c=e.replace(/\.(png|jpg|jpeg)$/,".webp");return u.jsxs("div",{className:`lazy-image-container ${n}`,children:[u.jsxs("picture",{children:[u.jsx("source",{srcSet:c,type:"image/webp"}),u.jsx("source",{srcSet:e,type:"image/jpeg"}),u.jsx("img",{ref:o,src:e,alt:t,className:`transition-opacity duration-300 ${a?"opacity-100":"opacity-0"}`,onLoad:i,sizes:r,loading:"lazy"})]}),!a&&u.jsx("div",{className:"bg-gray-300 lazy-image-placeholder animate-pulse",style:{aspectRatio:"16/9"}})]})},no=()=>{const[e,t]=y.useState(!1),[n,r]=y.useState(!1),a=y.useRef(null);y.useEffect(()=>{const o=()=>{window.pageYOffset>300?t(!0):t(!1)},i=()=>{o()};return window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)},[]),y.useEffect(()=>{const o=document.querySelector("footer");if(o){a.current=o;const i=new IntersectionObserver(([c])=>{r(c.isIntersecting)},{threshold:.1});return i.observe(o),()=>i.disconnect()}},[]);const s=()=>{window.scrollTo({top:0,behavior:"smooth"})};return!e||n?null:u.jsx("button",{onClick:s,className:"fixed z-50 p-3 transition-all duration-300 bg-blue-400 rounded-full shadow-lg text-slate-900 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 bottom-20 right-5 sm:bottom-5 sm:right-8 md:bottom-8 md:right-10 lg:bottom-10 lg:right-12","aria-label":"Scroll to top",children:u.jsx(Ae,{icon:Js})})},ro=new URL("/assets/webp/logo-COpjK3XH.webp",import.meta.url).href,ao=()=>{const[e,t]=y.useState(!1),[n,r]=y.useState(!1),a=y.useCallback(()=>{t(window.scrollY>50)},[]);y.useEffect(()=>(window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)),[a]);const s=()=>{r(!n)},o=y.useCallback((l,f)=>{l.preventDefault();const d=document.getElementById(f);d&&(d.scrollIntoView({behavior:"smooth"}),r(!1))},[]),i=y.useCallback(l=>{l.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})},[]),c=["About","Projects","Contact"];return u.jsxs(u.Fragment,{children:[u.jsx("header",{className:`fixed w-full z-10 transition-all duration-300 ${e?"bg-slate-800 shadow-lg py-2":"bg-transparent py-4"}`,children:u.jsxs("div",{className:"px-4 mx-auto max-w-7xl sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("a",{href:"#",onClick:i,className:"flex items-center","aria-label":"Go to top of page",children:u.jsx(to,{src:ro,alt:"Areykal Ho Logo",className:"w-10 h-10",sizes:"40px"})}),u.jsx("nav",{className:"hidden space-x-6 md:flex","aria-label":"Main navigation",children:c.map(l=>u.jsx("a",{href:`#${l.toLowerCase()}-section`,onClick:f=>o(f,`${l.toLowerCase()}-section`),className:"transition-colors duration-300 text-slate-400 hover:text-blue-400",children:l},l))}),u.jsx("button",{onClick:s,className:"transition-colors duration-300 text-slate-400 md:hidden hover:text-blue-400","aria-label":n?"Close menu":"Open menu","aria-expanded":n,children:u.jsx(Ae,{icon:n?eo:Bs,size:"lg"})})]}),u.jsx("div",{className:`md:hidden ${n?"block":"hidden"} mt-4`,"aria-hidden":!n,children:u.jsx("nav",{className:"flex flex-col space-y-4","aria-label":"Mobile navigation",children:c.map(l=>u.jsx("a",{href:`#${l.toLowerCase()}-section`,onClick:f=>o(f,`${l.toLowerCase()}-section`),className:"transition-colors duration-300 text-slate-400 hover:text-blue-400",children:l},l))})})]})}),u.jsx(no,{})]})},so={prefix:"fab",iconName:"linkedin-in",icon:[448,512,[],"f0e1","M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"]},oo={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},io={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]},lo={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},co={prefix:"fab",iconName:"telegram",icon:[496,512,[62462,"telegram-plane"],"f2c6","M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"]},ue=({icon:e,url:t,ariaLabel:n})=>u.jsx("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:"transition-colors duration-300 text-slate-400 hover:text-blue-400","aria-label":n,children:u.jsx(Ae,{icon:e,size:"lg"})}),fo=()=>u.jsx("footer",{className:"py-8 text-slate-400 bg-slate-900 sm:py-12",children:u.jsx("div",{className:"px-4 mx-auto max-w-7xl sm:px-6 lg:px-8",children:u.jsxs("div",{className:"flex flex-col items-center justify-between sm:flex-row",children:[u.jsxs("p",{className:"mb-4 sm:mb-0",children:["© ",new Date().getFullYear()," Areykal Ho. All rights reserved."]}),u.jsxs("div",{className:"flex pb-20 space-x-3 sm:pb-0",children:[u.jsx(ue,{icon:lo,url:"https://github.com/Areykal",ariaLabel:"Link to GitHub account"}),u.jsx(ue,{icon:co,url:"https://t.me/Areykal",ariaLabel:"Link to Telegram account"}),u.jsx(ue,{icon:so,url:"https://linkedin.com/in/areykalho",ariaLabel:"Link to LinkedIn account"}),u.jsx(ue,{icon:oo,url:"https://www.instagram.com/areykal.h/",ariaLabel:"Link to Instagram account"}),u.jsx(ue,{icon:io,url:"https://www.facebook.com/AreykalHo/",ariaLabel:"Link to Facebook account"})]})]})})}),uo=()=>u.jsx("a",{href:"#main-content",tabIndex:"0",className:"sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:bg-blue-500 focus:text-white focus:p-4",children:"Skip to main content"});y.lazy(()=>be(()=>import("./HomePage-Bw1qUA8X.js"),__vite__mapDeps([0,1])));const mo=y.lazy(()=>be(()=>import("./Hero-DDtZZPNQ.js"),__vite__mapDeps([2,1]))),po=y.lazy(()=>be(()=>import("./AboutMe-DTSZkZ-h.js"),__vite__mapDeps([3,1]))),ho=y.lazy(()=>be(()=>import("./Projects-B4b4-AA0.js"),__vite__mapDeps([4,1]))),go=y.lazy(()=>be(()=>import("./ContactSection-kjZcn0Ve.js"),__vite__mapDeps([5,1]))),yo=()=>u.jsx(yn,{children:u.jsx(or,{children:u.jsxs("div",{className:"flex flex-col min-h-screen overflow-x-hidden bg-gray-900",children:[u.jsx(uo,{}),u.jsx(ao,{}),u.jsx(y.Suspense,{fallback:u.jsx(fe,{}),children:u.jsx("main",{className:"flex-grow",children:u.jsx(ir,{children:u.jsx(lr,{path:"/",element:u.jsxs(u.Fragment,{children:[u.jsx(y.Suspense,{fallback:u.jsx(fe,{}),children:u.jsx(mo,{})}),u.jsx(y.Suspense,{fallback:u.jsx(fe,{}),children:u.jsx(po,{})}),u.jsx(y.Suspense,{fallback:u.jsx(fe,{}),children:u.jsx(ho,{})}),u.jsx(y.Suspense,{fallback:u.jsx(fe,{}),children:u.jsx(go,{})})]})})})})}),u.jsx(fo,{})]})})});Xe.createRoot(document.getElementById("root")).render(u.jsx(_.StrictMode,{children:u.jsx(yo,{})}));export{Ae as F,xo as H,fe as L,be as _,to as a,lo as b,Ao as c,To as d,wo as e,eo as f,u as j};
