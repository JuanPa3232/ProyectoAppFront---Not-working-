"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{6022:(M,w,i)=>{i.d(w,{c:()=>r});var a=i(9816),h=i(7864),c=i(1898);const r=(o,n)=>{let t,e;const l=(g,f,p)=>{if(typeof document>"u")return;const E=document.elementFromPoint(g,f);E&&n(E)?E!==t&&(v(),d(E,p)):v()},d=(g,f)=>{t=g,e||(e=t);const p=t;(0,a.w)(()=>p.classList.add("ion-activated")),f()},v=(g=!1)=>{if(!t)return;const f=t;(0,a.w)(()=>f.classList.remove("ion-activated")),g&&e!==t&&t.click(),t=void 0};return(0,c.createGesture)({el:o,gestureName:"buttonActiveDrag",threshold:0,onStart:g=>l(g.currentX,g.currentY,h.a),onMove:g=>l(g.currentX,g.currentY,h.b),onEnd:()=>{v(!0),(0,h.h)(),e=void 0}})}},2225:(M,w,i)=>{i.d(w,{g:()=>a});const a=(n,t,e,l,d)=>c(n[1],t[1],e[1],l[1],d).map(v=>h(n[0],t[0],e[0],l[0],v)),h=(n,t,e,l,d)=>d*(3*t*Math.pow(d-1,2)+d*(-3*e*d+3*e+l*d))-n*Math.pow(d-1,3),c=(n,t,e,l,d)=>o((l-=d)-3*(e-=d)+3*(t-=d)-(n-=d),3*e-6*t+3*n,3*t-3*n,n).filter(g=>g>=0&&g<=1),o=(n,t,e,l)=>{if(0===n)return((n,t,e)=>{const l=t*t-4*n*e;return l<0?[]:[(-t+Math.sqrt(l))/(2*n),(-t-Math.sqrt(l))/(2*n)]})(t,e,l);const d=(3*(e/=n)-(t/=n)*t)/3,v=(2*t*t*t-9*t*e+27*(l/=n))/27;if(0===d)return[Math.pow(-v,1/3)];if(0===v)return[Math.sqrt(-d),-Math.sqrt(-d)];const g=Math.pow(v/2,2)+Math.pow(d/3,3);if(0===g)return[Math.pow(v/2,.5)-t/3];if(g>0)return[Math.pow(-v/2+Math.sqrt(g),1/3)-Math.pow(v/2+Math.sqrt(g),1/3)-t/3];const f=Math.sqrt(Math.pow(-d/3,3)),p=Math.acos(-v/(2*Math.sqrt(Math.pow(-d/3,3)))),E=2*Math.pow(f,1/3);return[E*Math.cos(p/3)-t/3,E*Math.cos((p+2*Math.PI)/3)-t/3,E*Math.cos((p+4*Math.PI)/3)-t/3]}},5062:(M,w,i)=>{i.d(w,{i:()=>a});const a=h=>h&&""!==h.dir?"rtl"===h.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},6602:(M,w,i)=>{i.r(w),i.d(w,{startFocusVisible:()=>r});const a="ion-focused",c=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=o=>{let n=[],t=!0;const e=o?o.shadowRoot:document,l=o||document.body,d=y=>{n.forEach(u=>u.classList.remove(a)),y.forEach(u=>u.classList.add(a)),n=y},v=()=>{t=!1,d([])},g=y=>{t=c.includes(y.key),t||d([])},f=y=>{if(t&&void 0!==y.composedPath){const u=y.composedPath().filter(m=>!!m.classList&&m.classList.contains("ion-focusable"));d(u)}},p=()=>{e.activeElement===l&&d([])};return e.addEventListener("keydown",g),e.addEventListener("focusin",f),e.addEventListener("focusout",p),e.addEventListener("touchstart",v),e.addEventListener("mousedown",v),{destroy:()=>{e.removeEventListener("keydown",g),e.removeEventListener("focusin",f),e.removeEventListener("focusout",p),e.removeEventListener("touchstart",v),e.removeEventListener("mousedown",v)},setFocus:d}}},8689:(M,w,i)=>{i.d(w,{c:()=>h});var a=i(3577);const h=n=>{const t=n;let e;return{hasLegacyControl:()=>{if(void 0===e){const d=void 0!==t.label||c(t),v=t.hasAttribute("aria-label")||t.hasAttribute("aria-labelledby")&&null===t.shadowRoot,g=(0,a.h)(t);e=!0===t.legacy||!d&&!v&&null!==g}return e}}},c=n=>null!==n.shadowRoot&&!!(r.includes(n.tagName)&&null!==n.querySelector('[slot="label"]')||o.includes(n.tagName)&&""!==n.textContent),r=["ION-RANGE"],o=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},7864:(M,w,i)=>{i.d(w,{a:()=>r,b:()=>o,c:()=>c,d:()=>t,h:()=>n});const a={getEngine(){var e;const l=window;return l.TapticEngine||(null===(e=l.Capacitor)||void 0===e?void 0:e.isPluginAvailable("Haptics"))&&l.Capacitor.Plugins.Haptics},available(){var e;const l=window;return!!this.getEngine()&&("web"!==(null===(e=l.Capacitor)||void 0===e?void 0:e.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate)},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(e){const l=this.getEngine();if(!l)return;const d=this.isCapacitor()?e.style.toUpperCase():e.style;l.impact({style:d})},notification(e){const l=this.getEngine();if(!l)return;const d=this.isCapacitor()?e.style.toUpperCase():e.style;l.notification({style:d})},selection(){this.impact({style:"light"})},selectionStart(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},h=()=>a.available(),c=()=>{h()&&a.selection()},r=()=>{h()&&a.selectionStart()},o=()=>{h()&&a.selectionChanged()},n=()=>{h()&&a.selectionEnd()},t=e=>{h()&&a.impact(e)}},7366:(M,w,i)=>{i.d(w,{a:()=>a,b:()=>f,c:()=>t,d:()=>p,e:()=>L,f:()=>n,g:()=>E,h:()=>c,i:()=>h,j:()=>_,k:()=>O,l:()=>e,m:()=>v,n:()=>y,o:()=>d,p:()=>o,q:()=>r,r:()=>s,s:()=>C,t:()=>g,u:()=>u,v:()=>m,w:()=>l});const a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",L="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},2055:(M,w,i)=>{i.d(w,{I:()=>n,a:()=>d,b:()=>o,c:()=>f,d:()=>E,f:()=>v,g:()=>l,i:()=>e,p:()=>p,r:()=>y,s:()=>g});var a=i(5861),h=i(3577),c=i(1178);const o="ion-content",n=".ion-content-scroll-host",t=`${o}, ${n}`,e=u=>"ION-CONTENT"===u.tagName,l=function(){var u=(0,a.Z)(function*(m){return e(m)?(yield new Promise(s=>(0,h.c)(m,s)),m.getScrollElement()):m});return function(s){return u.apply(this,arguments)}}(),d=u=>u.querySelector(n)||u.querySelector(t),v=u=>u.closest(t),g=(u,m)=>e(u)?u.scrollToTop(m):Promise.resolve(u.scrollTo({top:0,left:0,behavior:m>0?"smooth":"auto"})),f=(u,m,s,_)=>e(u)?u.scrollByPoint(m,s,_):Promise.resolve(u.scrollBy({top:s,left:m,behavior:_>0?"smooth":"auto"})),p=u=>(0,c.b)(u,o),E=u=>{if(e(u)){const s=u.scrollY;return u.scrollY=!1,s}return u.style.setProperty("overflow","hidden"),!0},y=(u,m)=>{e(u)?u.scrollY=m:u.style.removeProperty("overflow")}},9240:(M,w,i)=>{i.d(w,{g:()=>h});var a=i(1178);const h=(r,o,n)=>{const t=null==r?0:r.toString().length,e=c(t,o);if(void 0===n)return e;try{return n(t,o)}catch(l){return(0,a.a)("Exception in provided `counterFormatter`.",l),e}},c=(r,o)=>`${r} / ${o}`},5234:(M,w,i)=>{i.r(w),i.d(w,{KEYBOARD_DID_CLOSE:()=>h,KEYBOARD_DID_OPEN:()=>a,copyVisualViewport:()=>m,keyboardDidClose:()=>p,keyboardDidOpen:()=>g,keyboardDidResize:()=>f,resetKeyboardAssist:()=>t,setKeyboardClose:()=>v,setKeyboardOpen:()=>d,startKeyboardAssist:()=>e,trackViewportChanges:()=>u});const a="ionKeyboardDidShow",h="ionKeyboardDidHide";let r={},o={},n=!1;const t=()=>{r={},o={},n=!1},e=s=>{l(s),s.visualViewport&&(o=m(s.visualViewport),s.visualViewport.onresize=()=>{u(s),g()||f(s)?d(s):p(s)&&v(s)})},l=s=>{s.addEventListener("keyboardDidShow",_=>d(s,_)),s.addEventListener("keyboardDidHide",()=>v(s))},d=(s,_)=>{E(s,_),n=!0},v=s=>{y(s),n=!1},g=()=>!n&&r.width===o.width&&(r.height-o.height)*o.scale>150,f=s=>n&&!p(s),p=s=>n&&o.height===s.innerHeight,E=(s,_)=>{const C=new CustomEvent(a,{detail:{keyboardHeight:_?_.keyboardHeight:s.innerHeight-o.height}});s.dispatchEvent(C)},y=s=>{const _=new CustomEvent(h);s.dispatchEvent(_)},u=s=>{r=Object.assign({},o),o=m(s.visualViewport)},m=s=>({width:Math.round(s.width),height:Math.round(s.height),offsetTop:s.offsetTop,offsetLeft:s.offsetLeft,pageTop:s.pageTop,pageLeft:s.pageLeft,scale:s.scale})},9852:(M,w,i)=>{i.d(w,{c:()=>h});var a=i(3457);const h=c=>{let r,o,n;const t=()=>{r=()=>{n=!0,c&&c(!0)},o=()=>{n=!1,c&&c(!1)},null==a.w||a.w.addEventListener("keyboardWillShow",r),null==a.w||a.w.addEventListener("keyboardWillHide",o)};return t(),{init:t,destroy:()=>{null==a.w||a.w.removeEventListener("keyboardWillShow",r),null==a.w||a.w.removeEventListener("keyboardWillHide",o),r=o=void 0},isKeyboardVisible:()=>n}}},7741:(M,w,i)=>{i.d(w,{S:()=>h});const h={bubbles:{dur:1e3,circles:9,fn:(c,r,o)=>{const n=c*r/o-c+"ms",t=2*Math.PI*r/o;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(c,r,o)=>{const n=r/o,t=c*n-c+"ms",e=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(c,r)=>({r:6,style:{left:9-9*r+"px","animation-delay":-110*r+"ms"}})},lines:{dur:1e3,lines:8,fn:(c,r,o)=>({y1:14,y2:26,style:{transform:`rotate(${360/o*r+(r<o/2?180:-180)}deg)`,"animation-delay":c*r/o-c+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(c,r,o)=>({y1:12,y2:20,style:{transform:`rotate(${360/o*r+(r<o/2?180:-180)}deg)`,"animation-delay":c*r/o-c+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(c,r,o)=>({y1:17,y2:29,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":c*r/o-c+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(c,r,o)=>({y1:12,y2:20,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":c*r/o-c+"ms"}})}}},7539:(M,w,i)=>{i.r(w),i.d(w,{createSwipeBackGesture:()=>o});var a=i(3577),h=i(5062),c=i(1898);i(4349);const o=(n,t,e,l,d)=>{const v=n.ownerDocument.defaultView;let g=(0,h.i)(n);const p=s=>g?-s.deltaX:s.deltaX;return(0,c.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:s=>(g=(0,h.i)(n),(s=>{const{startX:O}=s;return g?O>=v.innerWidth-50:O<=50})(s)&&t()),onStart:e,onMove:s=>{const O=p(s)/v.innerWidth;l(O)},onEnd:s=>{const _=p(s),O=v.innerWidth,C=_/O,L=(s=>g?-s.velocityX:s.velocityX)(s),D=L>=0&&(L>.2||_>O/2),x=(D?1-C:C)*O;let k=0;if(x>5){const B=x/Math.abs(L);k=Math.min(B,540)}d(D,C<=0?.01:(0,a.l)(0,C,.9999),k)}})}},8613:(M,w,i)=>{i.d(w,{K:()=>r});var a=i(2340),h=i(8256),c=i(529);let r=(()=>{class o{constructor(t){this.http=t,this.url=a.N.api}registerUser(t){return console.log(t),this.http.post(this.url+"/users/create",t)}loginUser(t){return this.http.post(this.url+"/users/login",t)}recoverPass(t){return this.http.post(this.url+"/users/forgotpass",t)}}return o.\u0275fac=function(t){return new(t||o)(h.LFG(c.eN))},o.\u0275prov=h.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()}}]);