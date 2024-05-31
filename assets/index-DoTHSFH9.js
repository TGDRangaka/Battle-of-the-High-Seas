var fd=Object.defineProperty;var pd=(n,e,t)=>e in n?fd(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var pe=(n,e,t)=>(pd(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();var gd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _d(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Gl={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */(function(n){(function(e,t){n.exports=e.document?t(e,!0):function(i){if(!i.document)throw new Error("jQuery requires a window with a document");return t(i)}})(typeof window<"u"?window:gd,function(e,t){var i=[],s=Object.getPrototypeOf,a=i.slice,c=i.flat?function(r){return i.flat.call(r)}:function(r){return i.concat.apply([],r)},p=i.push,_=i.indexOf,y={},I=y.toString,C=y.hasOwnProperty,k=C.toString,M=k.call(Object),P={},F=function(o){return typeof o=="function"&&typeof o.nodeType!="number"&&typeof o.item!="function"},ue=function(o){return o!=null&&o===o.window},B=e.document,ot={type:!0,src:!0,nonce:!0,noModule:!0};function Ke(r,o,l){l=l||B;var u,d,f=l.createElement("script");if(f.text=r,o)for(u in ot)d=o[u]||o.getAttribute&&o.getAttribute(u),d&&f.setAttribute(u,d);l.head.appendChild(f).parentNode.removeChild(f)}function Be(r){return r==null?r+"":typeof r=="object"||typeof r=="function"?y[I.call(r)]||"object":typeof r}var zn="3.7.1",Gn=/HTML$/i,h=function(r,o){return new h.fn.init(r,o)};h.fn=h.prototype={jquery:zn,constructor:h,length:0,toArray:function(){return a.call(this)},get:function(r){return r==null?a.call(this):r<0?this[r+this.length]:this[r]},pushStack:function(r){var o=h.merge(this.constructor(),r);return o.prevObject=this,o},each:function(r){return h.each(this,r)},map:function(r){return this.pushStack(h.map(this,function(o,l){return r.call(o,l,o)}))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(h.grep(this,function(r,o){return(o+1)%2}))},odd:function(){return this.pushStack(h.grep(this,function(r,o){return o%2}))},eq:function(r){var o=this.length,l=+r+(r<0?o:0);return this.pushStack(l>=0&&l<o?[this[l]]:[])},end:function(){return this.prevObject||this.constructor()},push:p,sort:i.sort,splice:i.splice},h.extend=h.fn.extend=function(){var r,o,l,u,d,f,g=arguments[0]||{},w=1,v=arguments.length,E=!1;for(typeof g=="boolean"&&(E=g,g=arguments[w]||{},w++),typeof g!="object"&&!F(g)&&(g={}),w===v&&(g=this,w--);w<v;w++)if((r=arguments[w])!=null)for(o in r)u=r[o],!(o==="__proto__"||g===u)&&(E&&u&&(h.isPlainObject(u)||(d=Array.isArray(u)))?(l=g[o],d&&!Array.isArray(l)?f=[]:!d&&!h.isPlainObject(l)?f={}:f=l,d=!1,g[o]=h.extend(E,f,u)):u!==void 0&&(g[o]=u));return g},h.extend({expando:"jQuery"+(zn+Math.random()).replace(/\D/g,""),isReady:!0,error:function(r){throw new Error(r)},noop:function(){},isPlainObject:function(r){var o,l;return!r||I.call(r)!=="[object Object]"?!1:(o=s(r),o?(l=C.call(o,"constructor")&&o.constructor,typeof l=="function"&&k.call(l)===M):!0)},isEmptyObject:function(r){var o;for(o in r)return!1;return!0},globalEval:function(r,o,l){Ke(r,{nonce:o&&o.nonce},l)},each:function(r,o){var l,u=0;if(Kn(r))for(l=r.length;u<l&&o.call(r[u],u,r[u])!==!1;u++);else for(u in r)if(o.call(r[u],u,r[u])===!1)break;return r},text:function(r){var o,l="",u=0,d=r.nodeType;if(!d)for(;o=r[u++];)l+=h.text(o);return d===1||d===11?r.textContent:d===9?r.documentElement.textContent:d===3||d===4?r.nodeValue:l},makeArray:function(r,o){var l=o||[];return r!=null&&(Kn(Object(r))?h.merge(l,typeof r=="string"?[r]:r):p.call(l,r)),l},inArray:function(r,o,l){return o==null?-1:_.call(o,r,l)},isXMLDoc:function(r){var o=r&&r.namespaceURI,l=r&&(r.ownerDocument||r).documentElement;return!Gn.test(o||l&&l.nodeName||"HTML")},merge:function(r,o){for(var l=+o.length,u=0,d=r.length;u<l;u++)r[d++]=o[u];return r.length=d,r},grep:function(r,o,l){for(var u,d=[],f=0,g=r.length,w=!l;f<g;f++)u=!o(r[f],f),u!==w&&d.push(r[f]);return d},map:function(r,o,l){var u,d,f=0,g=[];if(Kn(r))for(u=r.length;f<u;f++)d=o(r[f],f,l),d!=null&&g.push(d);else for(f in r)d=o(r[f],f,l),d!=null&&g.push(d);return c(g)},guid:1,support:P}),typeof Symbol=="function"&&(h.fn[Symbol.iterator]=i[Symbol.iterator]),h.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(r,o){y["[object "+o+"]"]=o.toLowerCase()});function Kn(r){var o=!!r&&"length"in r&&r.length,l=Be(r);return F(r)||ue(r)?!1:l==="array"||o===0||typeof o=="number"&&o>0&&o-1 in r}function se(r,o){return r.nodeName&&r.nodeName.toLowerCase()===o.toLowerCase()}var Qr=i.pop,lh=i.sort,ch=i.splice,le="[\\x20\\t\\r\\n\\f]",Yn=new RegExp("^"+le+"+|((?:^|[^\\\\])(?:\\\\.)*)"+le+"+$","g");h.contains=function(r,o){var l=o&&o.parentNode;return r===l||!!(l&&l.nodeType===1&&(r.contains?r.contains(l):r.compareDocumentPosition&&r.compareDocumentPosition(l)&16))};var uh=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function hh(r,o){return o?r==="\0"?"�":r.slice(0,-1)+"\\"+r.charCodeAt(r.length-1).toString(16)+" ":"\\"+r}h.escapeSelector=function(r){return(r+"").replace(uh,hh)};var at=B,Xr=p;(function(){var r,o,l,u,d,f=Xr,g,w,v,E,A,x=h.expando,S=0,D=0,z=Ki(),ne=Ki(),Y=Ki(),Te=Ki(),ve=function(m,b){return m===b&&(d=!0),0},Xe="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",Je="(?:\\\\[\\da-fA-F]{1,6}"+le+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",te="\\["+le+"*("+Je+")(?:"+le+"*([*^$|!~]?=)"+le+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Je+"))|)"+le+"*\\]",Gt=":("+Je+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+te+")*)|.*)\\)|)",ie=new RegExp(le+"+","g"),me=new RegExp("^"+le+"*,"+le+"*"),ri=new RegExp("^"+le+"*([>+~]|"+le+")"+le+"*"),ps=new RegExp(le+"|>"),Ze=new RegExp(Gt),si=new RegExp("^"+Je+"$"),et={ID:new RegExp("^#("+Je+")"),CLASS:new RegExp("^\\.("+Je+")"),TAG:new RegExp("^("+Je+"|[*])"),ATTR:new RegExp("^"+te),PSEUDO:new RegExp("^"+Gt),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+le+"*(even|odd|(([+-]|)(\\d*)n|)"+le+"*(?:([+-]|)"+le+"*(\\d+)|))"+le+"*\\)|)","i"),bool:new RegExp("^(?:"+Xe+")$","i"),needsContext:new RegExp("^"+le+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+le+"*((?:-\\d)?\\d*)"+le+"*\\)|)(?=[^-]|$)","i")},Ct=/^(?:input|select|textarea|button)$/i,It=/^h\d$/i,Ue=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,gs=/[+~]/,ut=new RegExp("\\\\[\\da-fA-F]{1,6}"+le+"?|\\\\([^\\r\\n\\f])","g"),ht=function(m,b){var T="0x"+m.slice(1)-65536;return b||(T<0?String.fromCharCode(T+65536):String.fromCharCode(T>>10|55296,T&1023|56320))},od=function(){Tt()},ad=Qi(function(m){return m.disabled===!0&&se(m,"fieldset")},{dir:"parentNode",next:"legend"});function ld(){try{return g.activeElement}catch{}}try{f.apply(i=a.call(at.childNodes),at.childNodes),i[at.childNodes.length].nodeType}catch{f={apply:function(b,T){Xr.apply(b,a.call(T))},call:function(b){Xr.apply(b,a.call(arguments,1))}}}function oe(m,b,T,N){var R,L,U,W,H,Z,$,K=b&&b.ownerDocument,ee=b?b.nodeType:9;if(T=T||[],typeof m!="string"||!m||ee!==1&&ee!==9&&ee!==11)return T;if(!N&&(Tt(b),b=b||g,v)){if(ee!==11&&(H=Ue.exec(m)))if(R=H[1]){if(ee===9)if(U=b.getElementById(R)){if(U.id===R)return f.call(T,U),T}else return T;else if(K&&(U=K.getElementById(R))&&oe.contains(b,U)&&U.id===R)return f.call(T,U),T}else{if(H[2])return f.apply(T,b.getElementsByTagName(m)),T;if((R=H[3])&&b.getElementsByClassName)return f.apply(T,b.getElementsByClassName(R)),T}if(!Te[m+" "]&&(!E||!E.test(m))){if($=m,K=b,ee===1&&(ps.test(m)||ri.test(m))){for(K=gs.test(m)&&_s(b.parentNode)||b,(K!=b||!P.scope)&&((W=b.getAttribute("id"))?W=h.escapeSelector(W):b.setAttribute("id",W=x)),Z=oi(m),L=Z.length;L--;)Z[L]=(W?"#"+W:":scope")+" "+Yi(Z[L]);$=Z.join(",")}try{return f.apply(T,K.querySelectorAll($)),T}catch{Te(m,!0)}finally{W===x&&b.removeAttribute("id")}}}return Ua(m.replace(Yn,"$1"),b,T,N)}function Ki(){var m=[];function b(T,N){return m.push(T+" ")>o.cacheLength&&delete b[m.shift()],b[T+" "]=N}return b}function qe(m){return m[x]=!0,m}function mn(m){var b=g.createElement("fieldset");try{return!!m(b)}catch{return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function cd(m){return function(b){return se(b,"input")&&b.type===m}}function ud(m){return function(b){return(se(b,"input")||se(b,"button"))&&b.type===m}}function Ma(m){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===m:b.disabled===m:b.isDisabled===m||b.isDisabled!==!m&&ad(b)===m:b.disabled===m:"label"in b?b.disabled===m:!1}}function Kt(m){return qe(function(b){return b=+b,qe(function(T,N){for(var R,L=m([],T.length,b),U=L.length;U--;)T[R=L[U]]&&(T[R]=!(N[R]=T[R]))})})}function _s(m){return m&&typeof m.getElementsByTagName<"u"&&m}function Tt(m){var b,T=m?m.ownerDocument||m:at;return T==g||T.nodeType!==9||!T.documentElement||(g=T,w=g.documentElement,v=!h.isXMLDoc(g),A=w.matches||w.webkitMatchesSelector||w.msMatchesSelector,w.msMatchesSelector&&at!=g&&(b=g.defaultView)&&b.top!==b&&b.addEventListener("unload",od),P.getById=mn(function(N){return w.appendChild(N).id=h.expando,!g.getElementsByName||!g.getElementsByName(h.expando).length}),P.disconnectedMatch=mn(function(N){return A.call(N,"*")}),P.scope=mn(function(){return g.querySelectorAll(":scope")}),P.cssHas=mn(function(){try{return g.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),P.getById?(o.filter.ID=function(N){var R=N.replace(ut,ht);return function(L){return L.getAttribute("id")===R}},o.find.ID=function(N,R){if(typeof R.getElementById<"u"&&v){var L=R.getElementById(N);return L?[L]:[]}}):(o.filter.ID=function(N){var R=N.replace(ut,ht);return function(L){var U=typeof L.getAttributeNode<"u"&&L.getAttributeNode("id");return U&&U.value===R}},o.find.ID=function(N,R){if(typeof R.getElementById<"u"&&v){var L,U,W,H=R.getElementById(N);if(H){if(L=H.getAttributeNode("id"),L&&L.value===N)return[H];for(W=R.getElementsByName(N),U=0;H=W[U++];)if(L=H.getAttributeNode("id"),L&&L.value===N)return[H]}return[]}}),o.find.TAG=function(N,R){return typeof R.getElementsByTagName<"u"?R.getElementsByTagName(N):R.querySelectorAll(N)},o.find.CLASS=function(N,R){if(typeof R.getElementsByClassName<"u"&&v)return R.getElementsByClassName(N)},E=[],mn(function(N){var R;w.appendChild(N).innerHTML="<a id='"+x+"' href='' disabled='disabled'></a><select id='"+x+"-\r\\' disabled='disabled'><option selected=''></option></select>",N.querySelectorAll("[selected]").length||E.push("\\["+le+"*(?:value|"+Xe+")"),N.querySelectorAll("[id~="+x+"-]").length||E.push("~="),N.querySelectorAll("a#"+x+"+*").length||E.push(".#.+[+~]"),N.querySelectorAll(":checked").length||E.push(":checked"),R=g.createElement("input"),R.setAttribute("type","hidden"),N.appendChild(R).setAttribute("name","D"),w.appendChild(N).disabled=!0,N.querySelectorAll(":disabled").length!==2&&E.push(":enabled",":disabled"),R=g.createElement("input"),R.setAttribute("name",""),N.appendChild(R),N.querySelectorAll("[name='']").length||E.push("\\["+le+"*name"+le+"*="+le+`*(?:''|"")`)}),P.cssHas||E.push(":has"),E=E.length&&new RegExp(E.join("|")),ve=function(N,R){if(N===R)return d=!0,0;var L=!N.compareDocumentPosition-!R.compareDocumentPosition;return L||(L=(N.ownerDocument||N)==(R.ownerDocument||R)?N.compareDocumentPosition(R):1,L&1||!P.sortDetached&&R.compareDocumentPosition(N)===L?N===g||N.ownerDocument==at&&oe.contains(at,N)?-1:R===g||R.ownerDocument==at&&oe.contains(at,R)?1:u?_.call(u,N)-_.call(u,R):0:L&4?-1:1)}),g}oe.matches=function(m,b){return oe(m,null,null,b)},oe.matchesSelector=function(m,b){if(Tt(m),v&&!Te[b+" "]&&(!E||!E.test(b)))try{var T=A.call(m,b);if(T||P.disconnectedMatch||m.document&&m.document.nodeType!==11)return T}catch{Te(b,!0)}return oe(b,g,null,[m]).length>0},oe.contains=function(m,b){return(m.ownerDocument||m)!=g&&Tt(m),h.contains(m,b)},oe.attr=function(m,b){(m.ownerDocument||m)!=g&&Tt(m);var T=o.attrHandle[b.toLowerCase()],N=T&&C.call(o.attrHandle,b.toLowerCase())?T(m,b,!v):void 0;return N!==void 0?N:m.getAttribute(b)},oe.error=function(m){throw new Error("Syntax error, unrecognized expression: "+m)},h.uniqueSort=function(m){var b,T=[],N=0,R=0;if(d=!P.sortStable,u=!P.sortStable&&a.call(m,0),lh.call(m,ve),d){for(;b=m[R++];)b===m[R]&&(N=T.push(R));for(;N--;)ch.call(m,T[N],1)}return u=null,m},h.fn.uniqueSort=function(){return this.pushStack(h.uniqueSort(a.apply(this)))},o=h.expr={cacheLength:50,createPseudo:qe,match:et,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(m){return m[1]=m[1].replace(ut,ht),m[3]=(m[3]||m[4]||m[5]||"").replace(ut,ht),m[2]==="~="&&(m[3]=" "+m[3]+" "),m.slice(0,4)},CHILD:function(m){return m[1]=m[1].toLowerCase(),m[1].slice(0,3)==="nth"?(m[3]||oe.error(m[0]),m[4]=+(m[4]?m[5]+(m[6]||1):2*(m[3]==="even"||m[3]==="odd")),m[5]=+(m[7]+m[8]||m[3]==="odd")):m[3]&&oe.error(m[0]),m},PSEUDO:function(m){var b,T=!m[6]&&m[2];return et.CHILD.test(m[0])?null:(m[3]?m[2]=m[4]||m[5]||"":T&&Ze.test(T)&&(b=oi(T,!0))&&(b=T.indexOf(")",T.length-b)-T.length)&&(m[0]=m[0].slice(0,b),m[2]=T.slice(0,b)),m.slice(0,3))}},filter:{TAG:function(m){var b=m.replace(ut,ht).toLowerCase();return m==="*"?function(){return!0}:function(T){return se(T,b)}},CLASS:function(m){var b=z[m+" "];return b||(b=new RegExp("(^|"+le+")"+m+"("+le+"|$)"))&&z(m,function(T){return b.test(typeof T.className=="string"&&T.className||typeof T.getAttribute<"u"&&T.getAttribute("class")||"")})},ATTR:function(m,b,T){return function(N){var R=oe.attr(N,m);return R==null?b==="!=":b?(R+="",b==="="?R===T:b==="!="?R!==T:b==="^="?T&&R.indexOf(T)===0:b==="*="?T&&R.indexOf(T)>-1:b==="$="?T&&R.slice(-T.length)===T:b==="~="?(" "+R.replace(ie," ")+" ").indexOf(T)>-1:b==="|="?R===T||R.slice(0,T.length+1)===T+"-":!1):!0}},CHILD:function(m,b,T,N,R){var L=m.slice(0,3)!=="nth",U=m.slice(-4)!=="last",W=b==="of-type";return N===1&&R===0?function(H){return!!H.parentNode}:function(H,Z,$){var K,ee,V,de,Oe,Se=L!==U?"nextSibling":"previousSibling",He=H.parentNode,tt=W&&H.nodeName.toLowerCase(),yn=!$&&!W,ke=!1;if(He){if(L){for(;Se;){for(V=H;V=V[Se];)if(W?se(V,tt):V.nodeType===1)return!1;Oe=Se=m==="only"&&!Oe&&"nextSibling"}return!0}if(Oe=[U?He.firstChild:He.lastChild],U&&yn){for(ee=He[x]||(He[x]={}),K=ee[m]||[],de=K[0]===S&&K[1],ke=de&&K[2],V=de&&He.childNodes[de];V=++de&&V&&V[Se]||(ke=de=0)||Oe.pop();)if(V.nodeType===1&&++ke&&V===H){ee[m]=[S,de,ke];break}}else if(yn&&(ee=H[x]||(H[x]={}),K=ee[m]||[],de=K[0]===S&&K[1],ke=de),ke===!1)for(;(V=++de&&V&&V[Se]||(ke=de=0)||Oe.pop())&&!((W?se(V,tt):V.nodeType===1)&&++ke&&(yn&&(ee=V[x]||(V[x]={}),ee[m]=[S,ke]),V===H)););return ke-=R,ke===N||ke%N===0&&ke/N>=0}}},PSEUDO:function(m,b){var T,N=o.pseudos[m]||o.setFilters[m.toLowerCase()]||oe.error("unsupported pseudo: "+m);return N[x]?N(b):N.length>1?(T=[m,m,"",b],o.setFilters.hasOwnProperty(m.toLowerCase())?qe(function(R,L){for(var U,W=N(R,b),H=W.length;H--;)U=_.call(R,W[H]),R[U]=!(L[U]=W[H])}):function(R){return N(R,0,T)}):N}},pseudos:{not:qe(function(m){var b=[],T=[],N=ws(m.replace(Yn,"$1"));return N[x]?qe(function(R,L,U,W){for(var H,Z=N(R,null,W,[]),$=R.length;$--;)(H=Z[$])&&(R[$]=!(L[$]=H))}):function(R,L,U){return b[0]=R,N(b,null,U,T),b[0]=null,!T.pop()}}),has:qe(function(m){return function(b){return oe(m,b).length>0}}),contains:qe(function(m){return m=m.replace(ut,ht),function(b){return(b.textContent||h.text(b)).indexOf(m)>-1}}),lang:qe(function(m){return si.test(m||"")||oe.error("unsupported lang: "+m),m=m.replace(ut,ht).toLowerCase(),function(b){var T;do if(T=v?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return T=T.toLowerCase(),T===m||T.indexOf(m+"-")===0;while((b=b.parentNode)&&b.nodeType===1);return!1}}),target:function(m){var b=e.location&&e.location.hash;return b&&b.slice(1)===m.id},root:function(m){return m===w},focus:function(m){return m===ld()&&g.hasFocus()&&!!(m.type||m.href||~m.tabIndex)},enabled:Ma(!1),disabled:Ma(!0),checked:function(m){return se(m,"input")&&!!m.checked||se(m,"option")&&!!m.selected},selected:function(m){return m.parentNode&&m.parentNode.selectedIndex,m.selected===!0},empty:function(m){for(m=m.firstChild;m;m=m.nextSibling)if(m.nodeType<6)return!1;return!0},parent:function(m){return!o.pseudos.empty(m)},header:function(m){return It.test(m.nodeName)},input:function(m){return Ct.test(m.nodeName)},button:function(m){return se(m,"input")&&m.type==="button"||se(m,"button")},text:function(m){var b;return se(m,"input")&&m.type==="text"&&((b=m.getAttribute("type"))==null||b.toLowerCase()==="text")},first:Kt(function(){return[0]}),last:Kt(function(m,b){return[b-1]}),eq:Kt(function(m,b,T){return[T<0?T+b:T]}),even:Kt(function(m,b){for(var T=0;T<b;T+=2)m.push(T);return m}),odd:Kt(function(m,b){for(var T=1;T<b;T+=2)m.push(T);return m}),lt:Kt(function(m,b,T){var N;for(T<0?N=T+b:T>b?N=b:N=T;--N>=0;)m.push(N);return m}),gt:Kt(function(m,b,T){for(var N=T<0?T+b:T;++N<b;)m.push(N);return m})}},o.pseudos.nth=o.pseudos.eq;for(r in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[r]=cd(r);for(r in{submit:!0,reset:!0})o.pseudos[r]=ud(r);function Fa(){}Fa.prototype=o.filters=o.pseudos,o.setFilters=new Fa;function oi(m,b){var T,N,R,L,U,W,H,Z=ne[m+" "];if(Z)return b?0:Z.slice(0);for(U=m,W=[],H=o.preFilter;U;){(!T||(N=me.exec(U)))&&(N&&(U=U.slice(N[0].length)||U),W.push(R=[])),T=!1,(N=ri.exec(U))&&(T=N.shift(),R.push({value:T,type:N[0].replace(Yn," ")}),U=U.slice(T.length));for(L in o.filter)(N=et[L].exec(U))&&(!H[L]||(N=H[L](N)))&&(T=N.shift(),R.push({value:T,type:L,matches:N}),U=U.slice(T.length));if(!T)break}return b?U.length:U?oe.error(m):ne(m,W).slice(0)}function Yi(m){for(var b=0,T=m.length,N="";b<T;b++)N+=m[b].value;return N}function Qi(m,b,T){var N=b.dir,R=b.next,L=R||N,U=T&&L==="parentNode",W=D++;return b.first?function(H,Z,$){for(;H=H[N];)if(H.nodeType===1||U)return m(H,Z,$);return!1}:function(H,Z,$){var K,ee,V=[S,W];if($){for(;H=H[N];)if((H.nodeType===1||U)&&m(H,Z,$))return!0}else for(;H=H[N];)if(H.nodeType===1||U)if(ee=H[x]||(H[x]={}),R&&se(H,R))H=H[N]||H;else{if((K=ee[L])&&K[0]===S&&K[1]===W)return V[2]=K[2];if(ee[L]=V,V[2]=m(H,Z,$))return!0}return!1}}function ms(m){return m.length>1?function(b,T,N){for(var R=m.length;R--;)if(!m[R](b,T,N))return!1;return!0}:m[0]}function hd(m,b,T){for(var N=0,R=b.length;N<R;N++)oe(m,b[N],T);return T}function Xi(m,b,T,N,R){for(var L,U=[],W=0,H=m.length,Z=b!=null;W<H;W++)(L=m[W])&&(!T||T(L,N,R))&&(U.push(L),Z&&b.push(W));return U}function ys(m,b,T,N,R,L){return N&&!N[x]&&(N=ys(N)),R&&!R[x]&&(R=ys(R,L)),qe(function(U,W,H,Z){var $,K,ee,V,de=[],Oe=[],Se=W.length,He=U||hd(b||"*",H.nodeType?[H]:H,[]),tt=m&&(U||!b)?Xi(He,de,m,H,Z):He;if(T?(V=R||(U?m:Se||N)?[]:W,T(tt,V,H,Z)):V=tt,N)for($=Xi(V,Oe),N($,[],H,Z),K=$.length;K--;)(ee=$[K])&&(V[Oe[K]]=!(tt[Oe[K]]=ee));if(U){if(R||m){if(R){for($=[],K=V.length;K--;)(ee=V[K])&&$.push(tt[K]=ee);R(null,V=[],$,Z)}for(K=V.length;K--;)(ee=V[K])&&($=R?_.call(U,ee):de[K])>-1&&(U[$]=!(W[$]=ee))}}else V=Xi(V===W?V.splice(Se,V.length):V),R?R(null,W,V,Z):f.apply(W,V)})}function vs(m){for(var b,T,N,R=m.length,L=o.relative[m[0].type],U=L||o.relative[" "],W=L?1:0,H=Qi(function(K){return K===b},U,!0),Z=Qi(function(K){return _.call(b,K)>-1},U,!0),$=[function(K,ee,V){var de=!L&&(V||ee!=l)||((b=ee).nodeType?H(K,ee,V):Z(K,ee,V));return b=null,de}];W<R;W++)if(T=o.relative[m[W].type])$=[Qi(ms($),T)];else{if(T=o.filter[m[W].type].apply(null,m[W].matches),T[x]){for(N=++W;N<R&&!o.relative[m[N].type];N++);return ys(W>1&&ms($),W>1&&Yi(m.slice(0,W-1).concat({value:m[W-2].type===" "?"*":""})).replace(Yn,"$1"),T,W<N&&vs(m.slice(W,N)),N<R&&vs(m=m.slice(N)),N<R&&Yi(m))}$.push(T)}return ms($)}function dd(m,b){var T=b.length>0,N=m.length>0,R=function(L,U,W,H,Z){var $,K,ee,V=0,de="0",Oe=L&&[],Se=[],He=l,tt=L||N&&o.find.TAG("*",Z),yn=S+=He==null?1:Math.random()||.1,ke=tt.length;for(Z&&(l=U==g||U||Z);de!==ke&&($=tt[de])!=null;de++){if(N&&$){for(K=0,!U&&$.ownerDocument!=g&&(Tt($),W=!v);ee=m[K++];)if(ee($,U||g,W)){f.call(H,$);break}Z&&(S=yn)}T&&(($=!ee&&$)&&V--,L&&Oe.push($))}if(V+=de,T&&de!==V){for(K=0;ee=b[K++];)ee(Oe,Se,U,W);if(L){if(V>0)for(;de--;)Oe[de]||Se[de]||(Se[de]=Qr.call(H));Se=Xi(Se)}f.apply(H,Se),Z&&!L&&Se.length>0&&V+b.length>1&&h.uniqueSort(H)}return Z&&(S=yn,l=He),Oe};return T?qe(R):R}function ws(m,b){var T,N=[],R=[],L=Y[m+" "];if(!L){for(b||(b=oi(m)),T=b.length;T--;)L=vs(b[T]),L[x]?N.push(L):R.push(L);L=Y(m,dd(R,N)),L.selector=m}return L}function Ua(m,b,T,N){var R,L,U,W,H,Z=typeof m=="function"&&m,$=!N&&oi(m=Z.selector||m);if(T=T||[],$.length===1){if(L=$[0]=$[0].slice(0),L.length>2&&(U=L[0]).type==="ID"&&b.nodeType===9&&v&&o.relative[L[1].type]){if(b=(o.find.ID(U.matches[0].replace(ut,ht),b)||[])[0],b)Z&&(b=b.parentNode);else return T;m=m.slice(L.shift().value.length)}for(R=et.needsContext.test(m)?0:L.length;R--&&(U=L[R],!o.relative[W=U.type]);)if((H=o.find[W])&&(N=H(U.matches[0].replace(ut,ht),gs.test(L[0].type)&&_s(b.parentNode)||b))){if(L.splice(R,1),m=N.length&&Yi(L),!m)return f.apply(T,N),T;break}}return(Z||ws(m,$))(N,b,!v,T,!b||gs.test(m)&&_s(b.parentNode)||b),T}P.sortStable=x.split("").sort(ve).join("")===x,Tt(),P.sortDetached=mn(function(m){return m.compareDocumentPosition(g.createElement("fieldset"))&1}),h.find=oe,h.expr[":"]=h.expr.pseudos,h.unique=h.uniqueSort,oe.compile=ws,oe.select=Ua,oe.setDocument=Tt,oe.tokenize=oi,oe.escape=h.escapeSelector,oe.getText=h.text,oe.isXML=h.isXMLDoc,oe.selectors=h.expr,oe.support=h.support,oe.uniqueSort=h.uniqueSort})();var cn=function(r,o,l){for(var u=[],d=l!==void 0;(r=r[o])&&r.nodeType!==9;)if(r.nodeType===1){if(d&&h(r).is(l))break;u.push(r)}return u},Zo=function(r,o){for(var l=[];r;r=r.nextSibling)r.nodeType===1&&r!==o&&l.push(r);return l},ea=h.expr.match.needsContext,ta=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function Jr(r,o,l){return F(o)?h.grep(r,function(u,d){return!!o.call(u,d,u)!==l}):o.nodeType?h.grep(r,function(u){return u===o!==l}):typeof o!="string"?h.grep(r,function(u){return _.call(o,u)>-1!==l}):h.filter(o,r,l)}h.filter=function(r,o,l){var u=o[0];return l&&(r=":not("+r+")"),o.length===1&&u.nodeType===1?h.find.matchesSelector(u,r)?[u]:[]:h.find.matches(r,h.grep(o,function(d){return d.nodeType===1}))},h.fn.extend({find:function(r){var o,l,u=this.length,d=this;if(typeof r!="string")return this.pushStack(h(r).filter(function(){for(o=0;o<u;o++)if(h.contains(d[o],this))return!0}));for(l=this.pushStack([]),o=0;o<u;o++)h.find(r,d[o],l);return u>1?h.uniqueSort(l):l},filter:function(r){return this.pushStack(Jr(this,r||[],!1))},not:function(r){return this.pushStack(Jr(this,r||[],!0))},is:function(r){return!!Jr(this,typeof r=="string"&&ea.test(r)?h(r):r||[],!1).length}});var na,dh=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,fh=h.fn.init=function(r,o,l){var u,d;if(!r)return this;if(l=l||na,typeof r=="string")if(r[0]==="<"&&r[r.length-1]===">"&&r.length>=3?u=[null,r,null]:u=dh.exec(r),u&&(u[1]||!o))if(u[1]){if(o=o instanceof h?o[0]:o,h.merge(this,h.parseHTML(u[1],o&&o.nodeType?o.ownerDocument||o:B,!0)),ta.test(u[1])&&h.isPlainObject(o))for(u in o)F(this[u])?this[u](o[u]):this.attr(u,o[u]);return this}else return d=B.getElementById(u[2]),d&&(this[0]=d,this.length=1),this;else return!o||o.jquery?(o||l).find(r):this.constructor(o).find(r);else{if(r.nodeType)return this[0]=r,this.length=1,this;if(F(r))return l.ready!==void 0?l.ready(r):r(h)}return h.makeArray(r,this)};fh.prototype=h.fn,na=h(B);var ph=/^(?:parents|prev(?:Until|All))/,gh={children:!0,contents:!0,next:!0,prev:!0};h.fn.extend({has:function(r){var o=h(r,this),l=o.length;return this.filter(function(){for(var u=0;u<l;u++)if(h.contains(this,o[u]))return!0})},closest:function(r,o){var l,u=0,d=this.length,f=[],g=typeof r!="string"&&h(r);if(!ea.test(r)){for(;u<d;u++)for(l=this[u];l&&l!==o;l=l.parentNode)if(l.nodeType<11&&(g?g.index(l)>-1:l.nodeType===1&&h.find.matchesSelector(l,r))){f.push(l);break}}return this.pushStack(f.length>1?h.uniqueSort(f):f)},index:function(r){return r?typeof r=="string"?_.call(h(r),this[0]):_.call(this,r.jquery?r[0]:r):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(r,o){return this.pushStack(h.uniqueSort(h.merge(this.get(),h(r,o))))},addBack:function(r){return this.add(r==null?this.prevObject:this.prevObject.filter(r))}});function ia(r,o){for(;(r=r[o])&&r.nodeType!==1;);return r}h.each({parent:function(r){var o=r.parentNode;return o&&o.nodeType!==11?o:null},parents:function(r){return cn(r,"parentNode")},parentsUntil:function(r,o,l){return cn(r,"parentNode",l)},next:function(r){return ia(r,"nextSibling")},prev:function(r){return ia(r,"previousSibling")},nextAll:function(r){return cn(r,"nextSibling")},prevAll:function(r){return cn(r,"previousSibling")},nextUntil:function(r,o,l){return cn(r,"nextSibling",l)},prevUntil:function(r,o,l){return cn(r,"previousSibling",l)},siblings:function(r){return Zo((r.parentNode||{}).firstChild,r)},children:function(r){return Zo(r.firstChild)},contents:function(r){return r.contentDocument!=null&&s(r.contentDocument)?r.contentDocument:(se(r,"template")&&(r=r.content||r),h.merge([],r.childNodes))}},function(r,o){h.fn[r]=function(l,u){var d=h.map(this,o,l);return r.slice(-5)!=="Until"&&(u=l),u&&typeof u=="string"&&(d=h.filter(u,d)),this.length>1&&(gh[r]||h.uniqueSort(d),ph.test(r)&&d.reverse()),this.pushStack(d)}});var Ye=/[^\x20\t\r\n\f]+/g;function _h(r){var o={};return h.each(r.match(Ye)||[],function(l,u){o[u]=!0}),o}h.Callbacks=function(r){r=typeof r=="string"?_h(r):h.extend({},r);var o,l,u,d,f=[],g=[],w=-1,v=function(){for(d=d||r.once,u=o=!0;g.length;w=-1)for(l=g.shift();++w<f.length;)f[w].apply(l[0],l[1])===!1&&r.stopOnFalse&&(w=f.length,l=!1);r.memory||(l=!1),o=!1,d&&(l?f=[]:f="")},E={add:function(){return f&&(l&&!o&&(w=f.length-1,g.push(l)),function A(x){h.each(x,function(S,D){F(D)?(!r.unique||!E.has(D))&&f.push(D):D&&D.length&&Be(D)!=="string"&&A(D)})}(arguments),l&&!o&&v()),this},remove:function(){return h.each(arguments,function(A,x){for(var S;(S=h.inArray(x,f,S))>-1;)f.splice(S,1),S<=w&&w--}),this},has:function(A){return A?h.inArray(A,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return d=g=[],f=l="",this},disabled:function(){return!f},lock:function(){return d=g=[],!l&&!o&&(f=l=""),this},locked:function(){return!!d},fireWith:function(A,x){return d||(x=x||[],x=[A,x.slice?x.slice():x],g.push(x),o||v()),this},fire:function(){return E.fireWith(this,arguments),this},fired:function(){return!!u}};return E};function un(r){return r}function ji(r){throw r}function ra(r,o,l,u){var d;try{r&&F(d=r.promise)?d.call(r).done(o).fail(l):r&&F(d=r.then)?d.call(r,o,l):o.apply(void 0,[r].slice(u))}catch(f){l.apply(void 0,[f])}}h.extend({Deferred:function(r){var o=[["notify","progress",h.Callbacks("memory"),h.Callbacks("memory"),2],["resolve","done",h.Callbacks("once memory"),h.Callbacks("once memory"),0,"resolved"],["reject","fail",h.Callbacks("once memory"),h.Callbacks("once memory"),1,"rejected"]],l="pending",u={state:function(){return l},always:function(){return d.done(arguments).fail(arguments),this},catch:function(f){return u.then(null,f)},pipe:function(){var f=arguments;return h.Deferred(function(g){h.each(o,function(w,v){var E=F(f[v[4]])&&f[v[4]];d[v[1]](function(){var A=E&&E.apply(this,arguments);A&&F(A.promise)?A.promise().progress(g.notify).done(g.resolve).fail(g.reject):g[v[0]+"With"](this,E?[A]:arguments)})}),f=null}).promise()},then:function(f,g,w){var v=0;function E(A,x,S,D){return function(){var z=this,ne=arguments,Y=function(){var ve,Xe;if(!(A<v)){if(ve=S.apply(z,ne),ve===x.promise())throw new TypeError("Thenable self-resolution");Xe=ve&&(typeof ve=="object"||typeof ve=="function")&&ve.then,F(Xe)?D?Xe.call(ve,E(v,x,un,D),E(v,x,ji,D)):(v++,Xe.call(ve,E(v,x,un,D),E(v,x,ji,D),E(v,x,un,x.notifyWith))):(S!==un&&(z=void 0,ne=[ve]),(D||x.resolveWith)(z,ne))}},Te=D?Y:function(){try{Y()}catch(ve){h.Deferred.exceptionHook&&h.Deferred.exceptionHook(ve,Te.error),A+1>=v&&(S!==ji&&(z=void 0,ne=[ve]),x.rejectWith(z,ne))}};A?Te():(h.Deferred.getErrorHook?Te.error=h.Deferred.getErrorHook():h.Deferred.getStackHook&&(Te.error=h.Deferred.getStackHook()),e.setTimeout(Te))}}return h.Deferred(function(A){o[0][3].add(E(0,A,F(w)?w:un,A.notifyWith)),o[1][3].add(E(0,A,F(f)?f:un)),o[2][3].add(E(0,A,F(g)?g:ji))}).promise()},promise:function(f){return f!=null?h.extend(f,u):u}},d={};return h.each(o,function(f,g){var w=g[2],v=g[5];u[g[1]]=w.add,v&&w.add(function(){l=v},o[3-f][2].disable,o[3-f][3].disable,o[0][2].lock,o[0][3].lock),w.add(g[3].fire),d[g[0]]=function(){return d[g[0]+"With"](this===d?void 0:this,arguments),this},d[g[0]+"With"]=w.fireWith}),u.promise(d),r&&r.call(d,d),d},when:function(r){var o=arguments.length,l=o,u=Array(l),d=a.call(arguments),f=h.Deferred(),g=function(w){return function(v){u[w]=this,d[w]=arguments.length>1?a.call(arguments):v,--o||f.resolveWith(u,d)}};if(o<=1&&(ra(r,f.done(g(l)).resolve,f.reject,!o),f.state()==="pending"||F(d[l]&&d[l].then)))return f.then();for(;l--;)ra(d[l],g(l),f.reject);return f.promise()}});var mh=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;h.Deferred.exceptionHook=function(r,o){e.console&&e.console.warn&&r&&mh.test(r.name)&&e.console.warn("jQuery.Deferred exception: "+r.message,r.stack,o)},h.readyException=function(r){e.setTimeout(function(){throw r})};var Zr=h.Deferred();h.fn.ready=function(r){return Zr.then(r).catch(function(o){h.readyException(o)}),this},h.extend({isReady:!1,readyWait:1,ready:function(r){(r===!0?--h.readyWait:h.isReady)||(h.isReady=!0,!(r!==!0&&--h.readyWait>0)&&Zr.resolveWith(B,[h]))}}),h.ready.then=Zr.then;function Bi(){B.removeEventListener("DOMContentLoaded",Bi),e.removeEventListener("load",Bi),h.ready()}B.readyState==="complete"||B.readyState!=="loading"&&!B.documentElement.doScroll?e.setTimeout(h.ready):(B.addEventListener("DOMContentLoaded",Bi),e.addEventListener("load",Bi));var lt=function(r,o,l,u,d,f,g){var w=0,v=r.length,E=l==null;if(Be(l)==="object"){d=!0;for(w in l)lt(r,o,w,l[w],!0,f,g)}else if(u!==void 0&&(d=!0,F(u)||(g=!0),E&&(g?(o.call(r,u),o=null):(E=o,o=function(A,x,S){return E.call(h(A),S)})),o))for(;w<v;w++)o(r[w],l,g?u:u.call(r[w],w,o(r[w],l)));return d?r:E?o.call(r):v?o(r[0],l):f},yh=/^-ms-/,vh=/-([a-z])/g;function wh(r,o){return o.toUpperCase()}function Qe(r){return r.replace(yh,"ms-").replace(vh,wh)}var Qn=function(r){return r.nodeType===1||r.nodeType===9||!+r.nodeType};function Xn(){this.expando=h.expando+Xn.uid++}Xn.uid=1,Xn.prototype={cache:function(r){var o=r[this.expando];return o||(o={},Qn(r)&&(r.nodeType?r[this.expando]=o:Object.defineProperty(r,this.expando,{value:o,configurable:!0}))),o},set:function(r,o,l){var u,d=this.cache(r);if(typeof o=="string")d[Qe(o)]=l;else for(u in o)d[Qe(u)]=o[u];return d},get:function(r,o){return o===void 0?this.cache(r):r[this.expando]&&r[this.expando][Qe(o)]},access:function(r,o,l){return o===void 0||o&&typeof o=="string"&&l===void 0?this.get(r,o):(this.set(r,o,l),l!==void 0?l:o)},remove:function(r,o){var l,u=r[this.expando];if(u!==void 0){if(o!==void 0)for(Array.isArray(o)?o=o.map(Qe):(o=Qe(o),o=o in u?[o]:o.match(Ye)||[]),l=o.length;l--;)delete u[o[l]];(o===void 0||h.isEmptyObject(u))&&(r.nodeType?r[this.expando]=void 0:delete r[this.expando])}},hasData:function(r){var o=r[this.expando];return o!==void 0&&!h.isEmptyObject(o)}};var j=new Xn,xe=new Xn,bh=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Eh=/[A-Z]/g;function Ch(r){return r==="true"?!0:r==="false"?!1:r==="null"?null:r===+r+""?+r:bh.test(r)?JSON.parse(r):r}function sa(r,o,l){var u;if(l===void 0&&r.nodeType===1)if(u="data-"+o.replace(Eh,"-$&").toLowerCase(),l=r.getAttribute(u),typeof l=="string"){try{l=Ch(l)}catch{}xe.set(r,o,l)}else l=void 0;return l}h.extend({hasData:function(r){return xe.hasData(r)||j.hasData(r)},data:function(r,o,l){return xe.access(r,o,l)},removeData:function(r,o){xe.remove(r,o)},_data:function(r,o,l){return j.access(r,o,l)},_removeData:function(r,o){j.remove(r,o)}}),h.fn.extend({data:function(r,o){var l,u,d,f=this[0],g=f&&f.attributes;if(r===void 0){if(this.length&&(d=xe.get(f),f.nodeType===1&&!j.get(f,"hasDataAttrs"))){for(l=g.length;l--;)g[l]&&(u=g[l].name,u.indexOf("data-")===0&&(u=Qe(u.slice(5)),sa(f,u,d[u])));j.set(f,"hasDataAttrs",!0)}return d}return typeof r=="object"?this.each(function(){xe.set(this,r)}):lt(this,function(w){var v;if(f&&w===void 0)return v=xe.get(f,r),v!==void 0||(v=sa(f,r),v!==void 0)?v:void 0;this.each(function(){xe.set(this,r,w)})},null,o,arguments.length>1,null,!0)},removeData:function(r){return this.each(function(){xe.remove(this,r)})}}),h.extend({queue:function(r,o,l){var u;if(r)return o=(o||"fx")+"queue",u=j.get(r,o),l&&(!u||Array.isArray(l)?u=j.access(r,o,h.makeArray(l)):u.push(l)),u||[]},dequeue:function(r,o){o=o||"fx";var l=h.queue(r,o),u=l.length,d=l.shift(),f=h._queueHooks(r,o),g=function(){h.dequeue(r,o)};d==="inprogress"&&(d=l.shift(),u--),d&&(o==="fx"&&l.unshift("inprogress"),delete f.stop,d.call(r,g,f)),!u&&f&&f.empty.fire()},_queueHooks:function(r,o){var l=o+"queueHooks";return j.get(r,l)||j.access(r,l,{empty:h.Callbacks("once memory").add(function(){j.remove(r,[o+"queue",l])})})}}),h.fn.extend({queue:function(r,o){var l=2;return typeof r!="string"&&(o=r,r="fx",l--),arguments.length<l?h.queue(this[0],r):o===void 0?this:this.each(function(){var u=h.queue(this,r,o);h._queueHooks(this,r),r==="fx"&&u[0]!=="inprogress"&&h.dequeue(this,r)})},dequeue:function(r){return this.each(function(){h.dequeue(this,r)})},clearQueue:function(r){return this.queue(r||"fx",[])},promise:function(r,o){var l,u=1,d=h.Deferred(),f=this,g=this.length,w=function(){--u||d.resolveWith(f,[f])};for(typeof r!="string"&&(o=r,r=void 0),r=r||"fx";g--;)l=j.get(f[g],r+"queueHooks"),l&&l.empty&&(u++,l.empty.add(w));return w(),d.promise(o)}});var oa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Jn=new RegExp("^(?:([+-])=|)("+oa+")([a-z%]*)$","i"),ct=["Top","Right","Bottom","Left"],qt=B.documentElement,hn=function(r){return h.contains(r.ownerDocument,r)},Ih={composed:!0};qt.getRootNode&&(hn=function(r){return h.contains(r.ownerDocument,r)||r.getRootNode(Ih)===r.ownerDocument});var Vi=function(r,o){return r=o||r,r.style.display==="none"||r.style.display===""&&hn(r)&&h.css(r,"display")==="none"};function aa(r,o,l,u){var d,f,g=20,w=u?function(){return u.cur()}:function(){return h.css(r,o,"")},v=w(),E=l&&l[3]||(h.cssNumber[o]?"":"px"),A=r.nodeType&&(h.cssNumber[o]||E!=="px"&&+v)&&Jn.exec(h.css(r,o));if(A&&A[3]!==E){for(v=v/2,E=E||A[3],A=+v||1;g--;)h.style(r,o,A+E),(1-f)*(1-(f=w()/v||.5))<=0&&(g=0),A=A/f;A=A*2,h.style(r,o,A+E),l=l||[]}return l&&(A=+A||+v||0,d=l[1]?A+(l[1]+1)*l[2]:+l[2],u&&(u.unit=E,u.start=A,u.end=d)),d}var la={};function Th(r){var o,l=r.ownerDocument,u=r.nodeName,d=la[u];return d||(o=l.body.appendChild(l.createElement(u)),d=h.css(o,"display"),o.parentNode.removeChild(o),d==="none"&&(d="block"),la[u]=d,d)}function dn(r,o){for(var l,u,d=[],f=0,g=r.length;f<g;f++)u=r[f],u.style&&(l=u.style.display,o?(l==="none"&&(d[f]=j.get(u,"display")||null,d[f]||(u.style.display="")),u.style.display===""&&Vi(u)&&(d[f]=Th(u))):l!=="none"&&(d[f]="none",j.set(u,"display",l)));for(f=0;f<g;f++)d[f]!=null&&(r[f].style.display=d[f]);return r}h.fn.extend({show:function(){return dn(this,!0)},hide:function(){return dn(this)},toggle:function(r){return typeof r=="boolean"?r?this.show():this.hide():this.each(function(){Vi(this)?h(this).show():h(this).hide()})}});var Zn=/^(?:checkbox|radio)$/i,ca=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,ua=/^$|^module$|\/(?:java|ecma)script/i;(function(){var r=B.createDocumentFragment(),o=r.appendChild(B.createElement("div")),l=B.createElement("input");l.setAttribute("type","radio"),l.setAttribute("checked","checked"),l.setAttribute("name","t"),o.appendChild(l),P.checkClone=o.cloneNode(!0).cloneNode(!0).lastChild.checked,o.innerHTML="<textarea>x</textarea>",P.noCloneChecked=!!o.cloneNode(!0).lastChild.defaultValue,o.innerHTML="<option></option>",P.option=!!o.lastChild})();var Fe={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Fe.tbody=Fe.tfoot=Fe.colgroup=Fe.caption=Fe.thead,Fe.th=Fe.td,P.option||(Fe.optgroup=Fe.option=[1,"<select multiple='multiple'>","</select>"]);function Pe(r,o){var l;return typeof r.getElementsByTagName<"u"?l=r.getElementsByTagName(o||"*"):typeof r.querySelectorAll<"u"?l=r.querySelectorAll(o||"*"):l=[],o===void 0||o&&se(r,o)?h.merge([r],l):l}function es(r,o){for(var l=0,u=r.length;l<u;l++)j.set(r[l],"globalEval",!o||j.get(o[l],"globalEval"))}var Sh=/<|&#?\w+;/;function ha(r,o,l,u,d){for(var f,g,w,v,E,A,x=o.createDocumentFragment(),S=[],D=0,z=r.length;D<z;D++)if(f=r[D],f||f===0)if(Be(f)==="object")h.merge(S,f.nodeType?[f]:f);else if(!Sh.test(f))S.push(o.createTextNode(f));else{for(g=g||x.appendChild(o.createElement("div")),w=(ca.exec(f)||["",""])[1].toLowerCase(),v=Fe[w]||Fe._default,g.innerHTML=v[1]+h.htmlPrefilter(f)+v[2],A=v[0];A--;)g=g.lastChild;h.merge(S,g.childNodes),g=x.firstChild,g.textContent=""}for(x.textContent="",D=0;f=S[D++];){if(u&&h.inArray(f,u)>-1){d&&d.push(f);continue}if(E=hn(f),g=Pe(x.appendChild(f),"script"),E&&es(g),l)for(A=0;f=g[A++];)ua.test(f.type||"")&&l.push(f)}return x}var da=/^([^.]*)(?:\.(.+)|)/;function fn(){return!0}function pn(){return!1}function ts(r,o,l,u,d,f){var g,w;if(typeof o=="object"){typeof l!="string"&&(u=u||l,l=void 0);for(w in o)ts(r,w,l,u,o[w],f);return r}if(u==null&&d==null?(d=l,u=l=void 0):d==null&&(typeof l=="string"?(d=u,u=void 0):(d=u,u=l,l=void 0)),d===!1)d=pn;else if(!d)return r;return f===1&&(g=d,d=function(v){return h().off(v),g.apply(this,arguments)},d.guid=g.guid||(g.guid=h.guid++)),r.each(function(){h.event.add(this,o,d,u,l)})}h.event={global:{},add:function(r,o,l,u,d){var f,g,w,v,E,A,x,S,D,z,ne,Y=j.get(r);if(Qn(r))for(l.handler&&(f=l,l=f.handler,d=f.selector),d&&h.find.matchesSelector(qt,d),l.guid||(l.guid=h.guid++),(v=Y.events)||(v=Y.events=Object.create(null)),(g=Y.handle)||(g=Y.handle=function(Te){return typeof h<"u"&&h.event.triggered!==Te.type?h.event.dispatch.apply(r,arguments):void 0}),o=(o||"").match(Ye)||[""],E=o.length;E--;)w=da.exec(o[E])||[],D=ne=w[1],z=(w[2]||"").split(".").sort(),D&&(x=h.event.special[D]||{},D=(d?x.delegateType:x.bindType)||D,x=h.event.special[D]||{},A=h.extend({type:D,origType:ne,data:u,handler:l,guid:l.guid,selector:d,needsContext:d&&h.expr.match.needsContext.test(d),namespace:z.join(".")},f),(S=v[D])||(S=v[D]=[],S.delegateCount=0,(!x.setup||x.setup.call(r,u,z,g)===!1)&&r.addEventListener&&r.addEventListener(D,g)),x.add&&(x.add.call(r,A),A.handler.guid||(A.handler.guid=l.guid)),d?S.splice(S.delegateCount++,0,A):S.push(A),h.event.global[D]=!0)},remove:function(r,o,l,u,d){var f,g,w,v,E,A,x,S,D,z,ne,Y=j.hasData(r)&&j.get(r);if(!(!Y||!(v=Y.events))){for(o=(o||"").match(Ye)||[""],E=o.length;E--;){if(w=da.exec(o[E])||[],D=ne=w[1],z=(w[2]||"").split(".").sort(),!D){for(D in v)h.event.remove(r,D+o[E],l,u,!0);continue}for(x=h.event.special[D]||{},D=(u?x.delegateType:x.bindType)||D,S=v[D]||[],w=w[2]&&new RegExp("(^|\\.)"+z.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=S.length;f--;)A=S[f],(d||ne===A.origType)&&(!l||l.guid===A.guid)&&(!w||w.test(A.namespace))&&(!u||u===A.selector||u==="**"&&A.selector)&&(S.splice(f,1),A.selector&&S.delegateCount--,x.remove&&x.remove.call(r,A));g&&!S.length&&((!x.teardown||x.teardown.call(r,z,Y.handle)===!1)&&h.removeEvent(r,D,Y.handle),delete v[D])}h.isEmptyObject(v)&&j.remove(r,"handle events")}},dispatch:function(r){var o,l,u,d,f,g,w=new Array(arguments.length),v=h.event.fix(r),E=(j.get(this,"events")||Object.create(null))[v.type]||[],A=h.event.special[v.type]||{};for(w[0]=v,o=1;o<arguments.length;o++)w[o]=arguments[o];if(v.delegateTarget=this,!(A.preDispatch&&A.preDispatch.call(this,v)===!1)){for(g=h.event.handlers.call(this,v,E),o=0;(d=g[o++])&&!v.isPropagationStopped();)for(v.currentTarget=d.elem,l=0;(f=d.handlers[l++])&&!v.isImmediatePropagationStopped();)(!v.rnamespace||f.namespace===!1||v.rnamespace.test(f.namespace))&&(v.handleObj=f,v.data=f.data,u=((h.event.special[f.origType]||{}).handle||f.handler).apply(d.elem,w),u!==void 0&&(v.result=u)===!1&&(v.preventDefault(),v.stopPropagation()));return A.postDispatch&&A.postDispatch.call(this,v),v.result}},handlers:function(r,o){var l,u,d,f,g,w=[],v=o.delegateCount,E=r.target;if(v&&E.nodeType&&!(r.type==="click"&&r.button>=1)){for(;E!==this;E=E.parentNode||this)if(E.nodeType===1&&!(r.type==="click"&&E.disabled===!0)){for(f=[],g={},l=0;l<v;l++)u=o[l],d=u.selector+" ",g[d]===void 0&&(g[d]=u.needsContext?h(d,this).index(E)>-1:h.find(d,this,null,[E]).length),g[d]&&f.push(u);f.length&&w.push({elem:E,handlers:f})}}return E=this,v<o.length&&w.push({elem:E,handlers:o.slice(v)}),w},addProp:function(r,o){Object.defineProperty(h.Event.prototype,r,{enumerable:!0,configurable:!0,get:F(o)?function(){if(this.originalEvent)return o(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[r]},set:function(l){Object.defineProperty(this,r,{enumerable:!0,configurable:!0,writable:!0,value:l})}})},fix:function(r){return r[h.expando]?r:new h.Event(r)},special:{load:{noBubble:!0},click:{setup:function(r){var o=this||r;return Zn.test(o.type)&&o.click&&se(o,"input")&&qi(o,"click",!0),!1},trigger:function(r){var o=this||r;return Zn.test(o.type)&&o.click&&se(o,"input")&&qi(o,"click"),!0},_default:function(r){var o=r.target;return Zn.test(o.type)&&o.click&&se(o,"input")&&j.get(o,"click")||se(o,"a")}},beforeunload:{postDispatch:function(r){r.result!==void 0&&r.originalEvent&&(r.originalEvent.returnValue=r.result)}}}};function qi(r,o,l){if(!l){j.get(r,o)===void 0&&h.event.add(r,o,fn);return}j.set(r,o,!1),h.event.add(r,o,{namespace:!1,handler:function(u){var d,f=j.get(this,o);if(u.isTrigger&1&&this[o]){if(f)(h.event.special[o]||{}).delegateType&&u.stopPropagation();else if(f=a.call(arguments),j.set(this,o,f),this[o](),d=j.get(this,o),j.set(this,o,!1),f!==d)return u.stopImmediatePropagation(),u.preventDefault(),d}else f&&(j.set(this,o,h.event.trigger(f[0],f.slice(1),this)),u.stopPropagation(),u.isImmediatePropagationStopped=fn)}})}h.removeEvent=function(r,o,l){r.removeEventListener&&r.removeEventListener(o,l)},h.Event=function(r,o){if(!(this instanceof h.Event))return new h.Event(r,o);r&&r.type?(this.originalEvent=r,this.type=r.type,this.isDefaultPrevented=r.defaultPrevented||r.defaultPrevented===void 0&&r.returnValue===!1?fn:pn,this.target=r.target&&r.target.nodeType===3?r.target.parentNode:r.target,this.currentTarget=r.currentTarget,this.relatedTarget=r.relatedTarget):this.type=r,o&&h.extend(this,o),this.timeStamp=r&&r.timeStamp||Date.now(),this[h.expando]=!0},h.Event.prototype={constructor:h.Event,isDefaultPrevented:pn,isPropagationStopped:pn,isImmediatePropagationStopped:pn,isSimulated:!1,preventDefault:function(){var r=this.originalEvent;this.isDefaultPrevented=fn,r&&!this.isSimulated&&r.preventDefault()},stopPropagation:function(){var r=this.originalEvent;this.isPropagationStopped=fn,r&&!this.isSimulated&&r.stopPropagation()},stopImmediatePropagation:function(){var r=this.originalEvent;this.isImmediatePropagationStopped=fn,r&&!this.isSimulated&&r.stopImmediatePropagation(),this.stopPropagation()}},h.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},h.event.addProp),h.each({focus:"focusin",blur:"focusout"},function(r,o){function l(u){if(B.documentMode){var d=j.get(this,"handle"),f=h.event.fix(u);f.type=u.type==="focusin"?"focus":"blur",f.isSimulated=!0,d(u),f.target===f.currentTarget&&d(f)}else h.event.simulate(o,u.target,h.event.fix(u))}h.event.special[r]={setup:function(){var u;if(qi(this,r,!0),B.documentMode)u=j.get(this,o),u||this.addEventListener(o,l),j.set(this,o,(u||0)+1);else return!1},trigger:function(){return qi(this,r),!0},teardown:function(){var u;if(B.documentMode)u=j.get(this,o)-1,u?j.set(this,o,u):(this.removeEventListener(o,l),j.remove(this,o));else return!1},_default:function(u){return j.get(u.target,r)},delegateType:o},h.event.special[o]={setup:function(){var u=this.ownerDocument||this.document||this,d=B.documentMode?this:u,f=j.get(d,o);f||(B.documentMode?this.addEventListener(o,l):u.addEventListener(r,l,!0)),j.set(d,o,(f||0)+1)},teardown:function(){var u=this.ownerDocument||this.document||this,d=B.documentMode?this:u,f=j.get(d,o)-1;f?j.set(d,o,f):(B.documentMode?this.removeEventListener(o,l):u.removeEventListener(r,l,!0),j.remove(d,o))}}}),h.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(r,o){h.event.special[r]={delegateType:o,bindType:o,handle:function(l){var u,d=this,f=l.relatedTarget,g=l.handleObj;return(!f||f!==d&&!h.contains(d,f))&&(l.type=g.origType,u=g.handler.apply(this,arguments),l.type=o),u}}}),h.fn.extend({on:function(r,o,l,u){return ts(this,r,o,l,u)},one:function(r,o,l,u){return ts(this,r,o,l,u,1)},off:function(r,o,l){var u,d;if(r&&r.preventDefault&&r.handleObj)return u=r.handleObj,h(r.delegateTarget).off(u.namespace?u.origType+"."+u.namespace:u.origType,u.selector,u.handler),this;if(typeof r=="object"){for(d in r)this.off(d,o,r[d]);return this}return(o===!1||typeof o=="function")&&(l=o,o=void 0),l===!1&&(l=pn),this.each(function(){h.event.remove(this,r,l,o)})}});var Nh=/<script|<style|<link/i,kh=/checked\s*(?:[^=]|=\s*.checked.)/i,Ah=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function fa(r,o){return se(r,"table")&&se(o.nodeType!==11?o:o.firstChild,"tr")&&h(r).children("tbody")[0]||r}function Rh(r){return r.type=(r.getAttribute("type")!==null)+"/"+r.type,r}function xh(r){return(r.type||"").slice(0,5)==="true/"?r.type=r.type.slice(5):r.removeAttribute("type"),r}function pa(r,o){var l,u,d,f,g,w,v;if(o.nodeType===1){if(j.hasData(r)&&(f=j.get(r),v=f.events,v)){j.remove(o,"handle events");for(d in v)for(l=0,u=v[d].length;l<u;l++)h.event.add(o,d,v[d][l])}xe.hasData(r)&&(g=xe.access(r),w=h.extend({},g),xe.set(o,w))}}function Ph(r,o){var l=o.nodeName.toLowerCase();l==="input"&&Zn.test(r.type)?o.checked=r.checked:(l==="input"||l==="textarea")&&(o.defaultValue=r.defaultValue)}function gn(r,o,l,u){o=c(o);var d,f,g,w,v,E,A=0,x=r.length,S=x-1,D=o[0],z=F(D);if(z||x>1&&typeof D=="string"&&!P.checkClone&&kh.test(D))return r.each(function(ne){var Y=r.eq(ne);z&&(o[0]=D.call(this,ne,Y.html())),gn(Y,o,l,u)});if(x&&(d=ha(o,r[0].ownerDocument,!1,r,u),f=d.firstChild,d.childNodes.length===1&&(d=f),f||u)){for(g=h.map(Pe(d,"script"),Rh),w=g.length;A<x;A++)v=d,A!==S&&(v=h.clone(v,!0,!0),w&&h.merge(g,Pe(v,"script"))),l.call(r[A],v,A);if(w)for(E=g[g.length-1].ownerDocument,h.map(g,xh),A=0;A<w;A++)v=g[A],ua.test(v.type||"")&&!j.access(v,"globalEval")&&h.contains(E,v)&&(v.src&&(v.type||"").toLowerCase()!=="module"?h._evalUrl&&!v.noModule&&h._evalUrl(v.src,{nonce:v.nonce||v.getAttribute("nonce")},E):Ke(v.textContent.replace(Ah,""),v,E))}return r}function ga(r,o,l){for(var u,d=o?h.filter(o,r):r,f=0;(u=d[f])!=null;f++)!l&&u.nodeType===1&&h.cleanData(Pe(u)),u.parentNode&&(l&&hn(u)&&es(Pe(u,"script")),u.parentNode.removeChild(u));return r}h.extend({htmlPrefilter:function(r){return r},clone:function(r,o,l){var u,d,f,g,w=r.cloneNode(!0),v=hn(r);if(!P.noCloneChecked&&(r.nodeType===1||r.nodeType===11)&&!h.isXMLDoc(r))for(g=Pe(w),f=Pe(r),u=0,d=f.length;u<d;u++)Ph(f[u],g[u]);if(o)if(l)for(f=f||Pe(r),g=g||Pe(w),u=0,d=f.length;u<d;u++)pa(f[u],g[u]);else pa(r,w);return g=Pe(w,"script"),g.length>0&&es(g,!v&&Pe(r,"script")),w},cleanData:function(r){for(var o,l,u,d=h.event.special,f=0;(l=r[f])!==void 0;f++)if(Qn(l)){if(o=l[j.expando]){if(o.events)for(u in o.events)d[u]?h.event.remove(l,u):h.removeEvent(l,u,o.handle);l[j.expando]=void 0}l[xe.expando]&&(l[xe.expando]=void 0)}}}),h.fn.extend({detach:function(r){return ga(this,r,!0)},remove:function(r){return ga(this,r)},text:function(r){return lt(this,function(o){return o===void 0?h.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=o)})},null,r,arguments.length)},append:function(){return gn(this,arguments,function(r){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var o=fa(this,r);o.appendChild(r)}})},prepend:function(){return gn(this,arguments,function(r){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var o=fa(this,r);o.insertBefore(r,o.firstChild)}})},before:function(){return gn(this,arguments,function(r){this.parentNode&&this.parentNode.insertBefore(r,this)})},after:function(){return gn(this,arguments,function(r){this.parentNode&&this.parentNode.insertBefore(r,this.nextSibling)})},empty:function(){for(var r,o=0;(r=this[o])!=null;o++)r.nodeType===1&&(h.cleanData(Pe(r,!1)),r.textContent="");return this},clone:function(r,o){return r=r??!1,o=o??r,this.map(function(){return h.clone(this,r,o)})},html:function(r){return lt(this,function(o){var l=this[0]||{},u=0,d=this.length;if(o===void 0&&l.nodeType===1)return l.innerHTML;if(typeof o=="string"&&!Nh.test(o)&&!Fe[(ca.exec(o)||["",""])[1].toLowerCase()]){o=h.htmlPrefilter(o);try{for(;u<d;u++)l=this[u]||{},l.nodeType===1&&(h.cleanData(Pe(l,!1)),l.innerHTML=o);l=0}catch{}}l&&this.empty().append(o)},null,r,arguments.length)},replaceWith:function(){var r=[];return gn(this,arguments,function(o){var l=this.parentNode;h.inArray(this,r)<0&&(h.cleanData(Pe(this)),l&&l.replaceChild(o,this))},r)}}),h.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(r,o){h.fn[r]=function(l){for(var u,d=[],f=h(l),g=f.length-1,w=0;w<=g;w++)u=w===g?this:this.clone(!0),h(f[w])[o](u),p.apply(d,u.get());return this.pushStack(d)}});var ns=new RegExp("^("+oa+")(?!px)[a-z%]+$","i"),is=/^--/,$i=function(r){var o=r.ownerDocument.defaultView;return(!o||!o.opener)&&(o=e),o.getComputedStyle(r)},_a=function(r,o,l){var u,d,f={};for(d in o)f[d]=r.style[d],r.style[d]=o[d];u=l.call(r);for(d in o)r.style[d]=f[d];return u},Dh=new RegExp(ct.join("|"),"i");(function(){function r(){if(E){v.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",E.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",qt.appendChild(v).appendChild(E);var A=e.getComputedStyle(E);l=A.top!=="1%",w=o(A.marginLeft)===12,E.style.right="60%",f=o(A.right)===36,u=o(A.width)===36,E.style.position="absolute",d=o(E.offsetWidth/3)===12,qt.removeChild(v),E=null}}function o(A){return Math.round(parseFloat(A))}var l,u,d,f,g,w,v=B.createElement("div"),E=B.createElement("div");E.style&&(E.style.backgroundClip="content-box",E.cloneNode(!0).style.backgroundClip="",P.clearCloneStyle=E.style.backgroundClip==="content-box",h.extend(P,{boxSizingReliable:function(){return r(),u},pixelBoxStyles:function(){return r(),f},pixelPosition:function(){return r(),l},reliableMarginLeft:function(){return r(),w},scrollboxSize:function(){return r(),d},reliableTrDimensions:function(){var A,x,S,D;return g==null&&(A=B.createElement("table"),x=B.createElement("tr"),S=B.createElement("div"),A.style.cssText="position:absolute;left:-11111px;border-collapse:separate",x.style.cssText="box-sizing:content-box;border:1px solid",x.style.height="1px",S.style.height="9px",S.style.display="block",qt.appendChild(A).appendChild(x).appendChild(S),D=e.getComputedStyle(x),g=parseInt(D.height,10)+parseInt(D.borderTopWidth,10)+parseInt(D.borderBottomWidth,10)===x.offsetHeight,qt.removeChild(A)),g}}))})();function ei(r,o,l){var u,d,f,g,w=is.test(o),v=r.style;return l=l||$i(r),l&&(g=l.getPropertyValue(o)||l[o],w&&g&&(g=g.replace(Yn,"$1")||void 0),g===""&&!hn(r)&&(g=h.style(r,o)),!P.pixelBoxStyles()&&ns.test(g)&&Dh.test(o)&&(u=v.width,d=v.minWidth,f=v.maxWidth,v.minWidth=v.maxWidth=v.width=g,g=l.width,v.width=u,v.minWidth=d,v.maxWidth=f)),g!==void 0?g+"":g}function ma(r,o){return{get:function(){if(r()){delete this.get;return}return(this.get=o).apply(this,arguments)}}}var ya=["Webkit","Moz","ms"],va=B.createElement("div").style,wa={};function Oh(r){for(var o=r[0].toUpperCase()+r.slice(1),l=ya.length;l--;)if(r=ya[l]+o,r in va)return r}function rs(r){var o=h.cssProps[r]||wa[r];return o||(r in va?r:wa[r]=Oh(r)||r)}var Lh=/^(none|table(?!-c[ea]).+)/,Mh={position:"absolute",visibility:"hidden",display:"block"},ba={letterSpacing:"0",fontWeight:"400"};function Ea(r,o,l){var u=Jn.exec(o);return u?Math.max(0,u[2]-(l||0))+(u[3]||"px"):o}function ss(r,o,l,u,d,f){var g=o==="width"?1:0,w=0,v=0,E=0;if(l===(u?"border":"content"))return 0;for(;g<4;g+=2)l==="margin"&&(E+=h.css(r,l+ct[g],!0,d)),u?(l==="content"&&(v-=h.css(r,"padding"+ct[g],!0,d)),l!=="margin"&&(v-=h.css(r,"border"+ct[g]+"Width",!0,d))):(v+=h.css(r,"padding"+ct[g],!0,d),l!=="padding"?v+=h.css(r,"border"+ct[g]+"Width",!0,d):w+=h.css(r,"border"+ct[g]+"Width",!0,d));return!u&&f>=0&&(v+=Math.max(0,Math.ceil(r["offset"+o[0].toUpperCase()+o.slice(1)]-f-v-w-.5))||0),v+E}function Ca(r,o,l){var u=$i(r),d=!P.boxSizingReliable()||l,f=d&&h.css(r,"boxSizing",!1,u)==="border-box",g=f,w=ei(r,o,u),v="offset"+o[0].toUpperCase()+o.slice(1);if(ns.test(w)){if(!l)return w;w="auto"}return(!P.boxSizingReliable()&&f||!P.reliableTrDimensions()&&se(r,"tr")||w==="auto"||!parseFloat(w)&&h.css(r,"display",!1,u)==="inline")&&r.getClientRects().length&&(f=h.css(r,"boxSizing",!1,u)==="border-box",g=v in r,g&&(w=r[v])),w=parseFloat(w)||0,w+ss(r,o,l||(f?"border":"content"),g,u,w)+"px"}h.extend({cssHooks:{opacity:{get:function(r,o){if(o){var l=ei(r,"opacity");return l===""?"1":l}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(r,o,l,u){if(!(!r||r.nodeType===3||r.nodeType===8||!r.style)){var d,f,g,w=Qe(o),v=is.test(o),E=r.style;if(v||(o=rs(w)),g=h.cssHooks[o]||h.cssHooks[w],l!==void 0){if(f=typeof l,f==="string"&&(d=Jn.exec(l))&&d[1]&&(l=aa(r,o,d),f="number"),l==null||l!==l)return;f==="number"&&!v&&(l+=d&&d[3]||(h.cssNumber[w]?"":"px")),!P.clearCloneStyle&&l===""&&o.indexOf("background")===0&&(E[o]="inherit"),(!g||!("set"in g)||(l=g.set(r,l,u))!==void 0)&&(v?E.setProperty(o,l):E[o]=l)}else return g&&"get"in g&&(d=g.get(r,!1,u))!==void 0?d:E[o]}},css:function(r,o,l,u){var d,f,g,w=Qe(o),v=is.test(o);return v||(o=rs(w)),g=h.cssHooks[o]||h.cssHooks[w],g&&"get"in g&&(d=g.get(r,!0,l)),d===void 0&&(d=ei(r,o,u)),d==="normal"&&o in ba&&(d=ba[o]),l===""||l?(f=parseFloat(d),l===!0||isFinite(f)?f||0:d):d}}),h.each(["height","width"],function(r,o){h.cssHooks[o]={get:function(l,u,d){if(u)return Lh.test(h.css(l,"display"))&&(!l.getClientRects().length||!l.getBoundingClientRect().width)?_a(l,Mh,function(){return Ca(l,o,d)}):Ca(l,o,d)},set:function(l,u,d){var f,g=$i(l),w=!P.scrollboxSize()&&g.position==="absolute",v=w||d,E=v&&h.css(l,"boxSizing",!1,g)==="border-box",A=d?ss(l,o,d,E,g):0;return E&&w&&(A-=Math.ceil(l["offset"+o[0].toUpperCase()+o.slice(1)]-parseFloat(g[o])-ss(l,o,"border",!1,g)-.5)),A&&(f=Jn.exec(u))&&(f[3]||"px")!=="px"&&(l.style[o]=u,u=h.css(l,o)),Ea(l,u,A)}}}),h.cssHooks.marginLeft=ma(P.reliableMarginLeft,function(r,o){if(o)return(parseFloat(ei(r,"marginLeft"))||r.getBoundingClientRect().left-_a(r,{marginLeft:0},function(){return r.getBoundingClientRect().left}))+"px"}),h.each({margin:"",padding:"",border:"Width"},function(r,o){h.cssHooks[r+o]={expand:function(l){for(var u=0,d={},f=typeof l=="string"?l.split(" "):[l];u<4;u++)d[r+ct[u]+o]=f[u]||f[u-2]||f[0];return d}},r!=="margin"&&(h.cssHooks[r+o].set=Ea)}),h.fn.extend({css:function(r,o){return lt(this,function(l,u,d){var f,g,w={},v=0;if(Array.isArray(u)){for(f=$i(l),g=u.length;v<g;v++)w[u[v]]=h.css(l,u[v],!1,f);return w}return d!==void 0?h.style(l,u,d):h.css(l,u)},r,o,arguments.length>1)}});function De(r,o,l,u,d){return new De.prototype.init(r,o,l,u,d)}h.Tween=De,De.prototype={constructor:De,init:function(r,o,l,u,d,f){this.elem=r,this.prop=l,this.easing=d||h.easing._default,this.options=o,this.start=this.now=this.cur(),this.end=u,this.unit=f||(h.cssNumber[l]?"":"px")},cur:function(){var r=De.propHooks[this.prop];return r&&r.get?r.get(this):De.propHooks._default.get(this)},run:function(r){var o,l=De.propHooks[this.prop];return this.options.duration?this.pos=o=h.easing[this.easing](r,this.options.duration*r,0,1,this.options.duration):this.pos=o=r,this.now=(this.end-this.start)*o+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),l&&l.set?l.set(this):De.propHooks._default.set(this),this}},De.prototype.init.prototype=De.prototype,De.propHooks={_default:{get:function(r){var o;return r.elem.nodeType!==1||r.elem[r.prop]!=null&&r.elem.style[r.prop]==null?r.elem[r.prop]:(o=h.css(r.elem,r.prop,""),!o||o==="auto"?0:o)},set:function(r){h.fx.step[r.prop]?h.fx.step[r.prop](r):r.elem.nodeType===1&&(h.cssHooks[r.prop]||r.elem.style[rs(r.prop)]!=null)?h.style(r.elem,r.prop,r.now+r.unit):r.elem[r.prop]=r.now}}},De.propHooks.scrollTop=De.propHooks.scrollLeft={set:function(r){r.elem.nodeType&&r.elem.parentNode&&(r.elem[r.prop]=r.now)}},h.easing={linear:function(r){return r},swing:function(r){return .5-Math.cos(r*Math.PI)/2},_default:"swing"},h.fx=De.prototype.init,h.fx.step={};var _n,zi,Fh=/^(?:toggle|show|hide)$/,Uh=/queueHooks$/;function os(){zi&&(B.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(os):e.setTimeout(os,h.fx.interval),h.fx.tick())}function Ia(){return e.setTimeout(function(){_n=void 0}),_n=Date.now()}function Gi(r,o){var l,u=0,d={height:r};for(o=o?1:0;u<4;u+=2-o)l=ct[u],d["margin"+l]=d["padding"+l]=r;return o&&(d.opacity=d.width=r),d}function Ta(r,o,l){for(var u,d=(Ve.tweeners[o]||[]).concat(Ve.tweeners["*"]),f=0,g=d.length;f<g;f++)if(u=d[f].call(l,o,r))return u}function Hh(r,o,l){var u,d,f,g,w,v,E,A,x="width"in o||"height"in o,S=this,D={},z=r.style,ne=r.nodeType&&Vi(r),Y=j.get(r,"fxshow");l.queue||(g=h._queueHooks(r,"fx"),g.unqueued==null&&(g.unqueued=0,w=g.empty.fire,g.empty.fire=function(){g.unqueued||w()}),g.unqueued++,S.always(function(){S.always(function(){g.unqueued--,h.queue(r,"fx").length||g.empty.fire()})}));for(u in o)if(d=o[u],Fh.test(d)){if(delete o[u],f=f||d==="toggle",d===(ne?"hide":"show"))if(d==="show"&&Y&&Y[u]!==void 0)ne=!0;else continue;D[u]=Y&&Y[u]||h.style(r,u)}if(v=!h.isEmptyObject(o),!(!v&&h.isEmptyObject(D))){x&&r.nodeType===1&&(l.overflow=[z.overflow,z.overflowX,z.overflowY],E=Y&&Y.display,E==null&&(E=j.get(r,"display")),A=h.css(r,"display"),A==="none"&&(E?A=E:(dn([r],!0),E=r.style.display||E,A=h.css(r,"display"),dn([r]))),(A==="inline"||A==="inline-block"&&E!=null)&&h.css(r,"float")==="none"&&(v||(S.done(function(){z.display=E}),E==null&&(A=z.display,E=A==="none"?"":A)),z.display="inline-block")),l.overflow&&(z.overflow="hidden",S.always(function(){z.overflow=l.overflow[0],z.overflowX=l.overflow[1],z.overflowY=l.overflow[2]})),v=!1;for(u in D)v||(Y?"hidden"in Y&&(ne=Y.hidden):Y=j.access(r,"fxshow",{display:E}),f&&(Y.hidden=!ne),ne&&dn([r],!0),S.done(function(){ne||dn([r]),j.remove(r,"fxshow");for(u in D)h.style(r,u,D[u])})),v=Ta(ne?Y[u]:0,u,S),u in Y||(Y[u]=v.start,ne&&(v.end=v.start,v.start=0))}}function Wh(r,o){var l,u,d,f,g;for(l in r)if(u=Qe(l),d=o[u],f=r[l],Array.isArray(f)&&(d=f[1],f=r[l]=f[0]),l!==u&&(r[u]=f,delete r[l]),g=h.cssHooks[u],g&&"expand"in g){f=g.expand(f),delete r[u];for(l in f)l in r||(r[l]=f[l],o[l]=d)}else o[u]=d}function Ve(r,o,l){var u,d,f=0,g=Ve.prefilters.length,w=h.Deferred().always(function(){delete v.elem}),v=function(){if(d)return!1;for(var x=_n||Ia(),S=Math.max(0,E.startTime+E.duration-x),D=S/E.duration||0,z=1-D,ne=0,Y=E.tweens.length;ne<Y;ne++)E.tweens[ne].run(z);return w.notifyWith(r,[E,z,S]),z<1&&Y?S:(Y||w.notifyWith(r,[E,1,0]),w.resolveWith(r,[E]),!1)},E=w.promise({elem:r,props:h.extend({},o),opts:h.extend(!0,{specialEasing:{},easing:h.easing._default},l),originalProperties:o,originalOptions:l,startTime:_n||Ia(),duration:l.duration,tweens:[],createTween:function(x,S){var D=h.Tween(r,E.opts,x,S,E.opts.specialEasing[x]||E.opts.easing);return E.tweens.push(D),D},stop:function(x){var S=0,D=x?E.tweens.length:0;if(d)return this;for(d=!0;S<D;S++)E.tweens[S].run(1);return x?(w.notifyWith(r,[E,1,0]),w.resolveWith(r,[E,x])):w.rejectWith(r,[E,x]),this}}),A=E.props;for(Wh(A,E.opts.specialEasing);f<g;f++)if(u=Ve.prefilters[f].call(E,r,A,E.opts),u)return F(u.stop)&&(h._queueHooks(E.elem,E.opts.queue).stop=u.stop.bind(u)),u;return h.map(A,Ta,E),F(E.opts.start)&&E.opts.start.call(r,E),E.progress(E.opts.progress).done(E.opts.done,E.opts.complete).fail(E.opts.fail).always(E.opts.always),h.fx.timer(h.extend(v,{elem:r,anim:E,queue:E.opts.queue})),E}h.Animation=h.extend(Ve,{tweeners:{"*":[function(r,o){var l=this.createTween(r,o);return aa(l.elem,r,Jn.exec(o),l),l}]},tweener:function(r,o){F(r)?(o=r,r=["*"]):r=r.match(Ye);for(var l,u=0,d=r.length;u<d;u++)l=r[u],Ve.tweeners[l]=Ve.tweeners[l]||[],Ve.tweeners[l].unshift(o)},prefilters:[Hh],prefilter:function(r,o){o?Ve.prefilters.unshift(r):Ve.prefilters.push(r)}}),h.speed=function(r,o,l){var u=r&&typeof r=="object"?h.extend({},r):{complete:l||!l&&o||F(r)&&r,duration:r,easing:l&&o||o&&!F(o)&&o};return h.fx.off?u.duration=0:typeof u.duration!="number"&&(u.duration in h.fx.speeds?u.duration=h.fx.speeds[u.duration]:u.duration=h.fx.speeds._default),(u.queue==null||u.queue===!0)&&(u.queue="fx"),u.old=u.complete,u.complete=function(){F(u.old)&&u.old.call(this),u.queue&&h.dequeue(this,u.queue)},u},h.fn.extend({fadeTo:function(r,o,l,u){return this.filter(Vi).css("opacity",0).show().end().animate({opacity:o},r,l,u)},animate:function(r,o,l,u){var d=h.isEmptyObject(r),f=h.speed(o,l,u),g=function(){var w=Ve(this,h.extend({},r),f);(d||j.get(this,"finish"))&&w.stop(!0)};return g.finish=g,d||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(r,o,l){var u=function(d){var f=d.stop;delete d.stop,f(l)};return typeof r!="string"&&(l=o,o=r,r=void 0),o&&this.queue(r||"fx",[]),this.each(function(){var d=!0,f=r!=null&&r+"queueHooks",g=h.timers,w=j.get(this);if(f)w[f]&&w[f].stop&&u(w[f]);else for(f in w)w[f]&&w[f].stop&&Uh.test(f)&&u(w[f]);for(f=g.length;f--;)g[f].elem===this&&(r==null||g[f].queue===r)&&(g[f].anim.stop(l),d=!1,g.splice(f,1));(d||!l)&&h.dequeue(this,r)})},finish:function(r){return r!==!1&&(r=r||"fx"),this.each(function(){var o,l=j.get(this),u=l[r+"queue"],d=l[r+"queueHooks"],f=h.timers,g=u?u.length:0;for(l.finish=!0,h.queue(this,r,[]),d&&d.stop&&d.stop.call(this,!0),o=f.length;o--;)f[o].elem===this&&f[o].queue===r&&(f[o].anim.stop(!0),f.splice(o,1));for(o=0;o<g;o++)u[o]&&u[o].finish&&u[o].finish.call(this);delete l.finish})}}),h.each(["toggle","show","hide"],function(r,o){var l=h.fn[o];h.fn[o]=function(u,d,f){return u==null||typeof u=="boolean"?l.apply(this,arguments):this.animate(Gi(o,!0),u,d,f)}}),h.each({slideDown:Gi("show"),slideUp:Gi("hide"),slideToggle:Gi("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(r,o){h.fn[r]=function(l,u,d){return this.animate(o,l,u,d)}}),h.timers=[],h.fx.tick=function(){var r,o=0,l=h.timers;for(_n=Date.now();o<l.length;o++)r=l[o],!r()&&l[o]===r&&l.splice(o--,1);l.length||h.fx.stop(),_n=void 0},h.fx.timer=function(r){h.timers.push(r),h.fx.start()},h.fx.interval=13,h.fx.start=function(){zi||(zi=!0,os())},h.fx.stop=function(){zi=null},h.fx.speeds={slow:600,fast:200,_default:400},h.fn.delay=function(r,o){return r=h.fx&&h.fx.speeds[r]||r,o=o||"fx",this.queue(o,function(l,u){var d=e.setTimeout(l,r);u.stop=function(){e.clearTimeout(d)}})},function(){var r=B.createElement("input"),o=B.createElement("select"),l=o.appendChild(B.createElement("option"));r.type="checkbox",P.checkOn=r.value!=="",P.optSelected=l.selected,r=B.createElement("input"),r.value="t",r.type="radio",P.radioValue=r.value==="t"}();var Sa,ti=h.expr.attrHandle;h.fn.extend({attr:function(r,o){return lt(this,h.attr,r,o,arguments.length>1)},removeAttr:function(r){return this.each(function(){h.removeAttr(this,r)})}}),h.extend({attr:function(r,o,l){var u,d,f=r.nodeType;if(!(f===3||f===8||f===2)){if(typeof r.getAttribute>"u")return h.prop(r,o,l);if((f!==1||!h.isXMLDoc(r))&&(d=h.attrHooks[o.toLowerCase()]||(h.expr.match.bool.test(o)?Sa:void 0)),l!==void 0){if(l===null){h.removeAttr(r,o);return}return d&&"set"in d&&(u=d.set(r,l,o))!==void 0?u:(r.setAttribute(o,l+""),l)}return d&&"get"in d&&(u=d.get(r,o))!==null?u:(u=h.find.attr(r,o),u??void 0)}},attrHooks:{type:{set:function(r,o){if(!P.radioValue&&o==="radio"&&se(r,"input")){var l=r.value;return r.setAttribute("type",o),l&&(r.value=l),o}}}},removeAttr:function(r,o){var l,u=0,d=o&&o.match(Ye);if(d&&r.nodeType===1)for(;l=d[u++];)r.removeAttribute(l)}}),Sa={set:function(r,o,l){return o===!1?h.removeAttr(r,l):r.setAttribute(l,l),l}},h.each(h.expr.match.bool.source.match(/\w+/g),function(r,o){var l=ti[o]||h.find.attr;ti[o]=function(u,d,f){var g,w,v=d.toLowerCase();return f||(w=ti[v],ti[v]=g,g=l(u,d,f)!=null?v:null,ti[v]=w),g}});var jh=/^(?:input|select|textarea|button)$/i,Bh=/^(?:a|area)$/i;h.fn.extend({prop:function(r,o){return lt(this,h.prop,r,o,arguments.length>1)},removeProp:function(r){return this.each(function(){delete this[h.propFix[r]||r]})}}),h.extend({prop:function(r,o,l){var u,d,f=r.nodeType;if(!(f===3||f===8||f===2))return(f!==1||!h.isXMLDoc(r))&&(o=h.propFix[o]||o,d=h.propHooks[o]),l!==void 0?d&&"set"in d&&(u=d.set(r,l,o))!==void 0?u:r[o]=l:d&&"get"in d&&(u=d.get(r,o))!==null?u:r[o]},propHooks:{tabIndex:{get:function(r){var o=h.find.attr(r,"tabindex");return o?parseInt(o,10):jh.test(r.nodeName)||Bh.test(r.nodeName)&&r.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),P.optSelected||(h.propHooks.selected={get:function(r){var o=r.parentNode;return o&&o.parentNode&&o.parentNode.selectedIndex,null},set:function(r){var o=r.parentNode;o&&(o.selectedIndex,o.parentNode&&o.parentNode.selectedIndex)}}),h.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){h.propFix[this.toLowerCase()]=this});function $t(r){var o=r.match(Ye)||[];return o.join(" ")}function zt(r){return r.getAttribute&&r.getAttribute("class")||""}function as(r){return Array.isArray(r)?r:typeof r=="string"?r.match(Ye)||[]:[]}h.fn.extend({addClass:function(r){var o,l,u,d,f,g;return F(r)?this.each(function(w){h(this).addClass(r.call(this,w,zt(this)))}):(o=as(r),o.length?this.each(function(){if(u=zt(this),l=this.nodeType===1&&" "+$t(u)+" ",l){for(f=0;f<o.length;f++)d=o[f],l.indexOf(" "+d+" ")<0&&(l+=d+" ");g=$t(l),u!==g&&this.setAttribute("class",g)}}):this)},removeClass:function(r){var o,l,u,d,f,g;return F(r)?this.each(function(w){h(this).removeClass(r.call(this,w,zt(this)))}):arguments.length?(o=as(r),o.length?this.each(function(){if(u=zt(this),l=this.nodeType===1&&" "+$t(u)+" ",l){for(f=0;f<o.length;f++)for(d=o[f];l.indexOf(" "+d+" ")>-1;)l=l.replace(" "+d+" "," ");g=$t(l),u!==g&&this.setAttribute("class",g)}}):this):this.attr("class","")},toggleClass:function(r,o){var l,u,d,f,g=typeof r,w=g==="string"||Array.isArray(r);return F(r)?this.each(function(v){h(this).toggleClass(r.call(this,v,zt(this),o),o)}):typeof o=="boolean"&&w?o?this.addClass(r):this.removeClass(r):(l=as(r),this.each(function(){if(w)for(f=h(this),d=0;d<l.length;d++)u=l[d],f.hasClass(u)?f.removeClass(u):f.addClass(u);else(r===void 0||g==="boolean")&&(u=zt(this),u&&j.set(this,"__className__",u),this.setAttribute&&this.setAttribute("class",u||r===!1?"":j.get(this,"__className__")||""))}))},hasClass:function(r){var o,l,u=0;for(o=" "+r+" ";l=this[u++];)if(l.nodeType===1&&(" "+$t(zt(l))+" ").indexOf(o)>-1)return!0;return!1}});var Vh=/\r/g;h.fn.extend({val:function(r){var o,l,u,d=this[0];return arguments.length?(u=F(r),this.each(function(f){var g;this.nodeType===1&&(u?g=r.call(this,f,h(this).val()):g=r,g==null?g="":typeof g=="number"?g+="":Array.isArray(g)&&(g=h.map(g,function(w){return w==null?"":w+""})),o=h.valHooks[this.type]||h.valHooks[this.nodeName.toLowerCase()],(!o||!("set"in o)||o.set(this,g,"value")===void 0)&&(this.value=g))})):d?(o=h.valHooks[d.type]||h.valHooks[d.nodeName.toLowerCase()],o&&"get"in o&&(l=o.get(d,"value"))!==void 0?l:(l=d.value,typeof l=="string"?l.replace(Vh,""):l??"")):void 0}}),h.extend({valHooks:{option:{get:function(r){var o=h.find.attr(r,"value");return o??$t(h.text(r))}},select:{get:function(r){var o,l,u,d=r.options,f=r.selectedIndex,g=r.type==="select-one",w=g?null:[],v=g?f+1:d.length;for(f<0?u=v:u=g?f:0;u<v;u++)if(l=d[u],(l.selected||u===f)&&!l.disabled&&(!l.parentNode.disabled||!se(l.parentNode,"optgroup"))){if(o=h(l).val(),g)return o;w.push(o)}return w},set:function(r,o){for(var l,u,d=r.options,f=h.makeArray(o),g=d.length;g--;)u=d[g],(u.selected=h.inArray(h.valHooks.option.get(u),f)>-1)&&(l=!0);return l||(r.selectedIndex=-1),f}}}}),h.each(["radio","checkbox"],function(){h.valHooks[this]={set:function(r,o){if(Array.isArray(o))return r.checked=h.inArray(h(r).val(),o)>-1}},P.checkOn||(h.valHooks[this].get=function(r){return r.getAttribute("value")===null?"on":r.value})});var ni=e.location,Na={guid:Date.now()},ls=/\?/;h.parseXML=function(r){var o,l;if(!r||typeof r!="string")return null;try{o=new e.DOMParser().parseFromString(r,"text/xml")}catch{}return l=o&&o.getElementsByTagName("parsererror")[0],(!o||l)&&h.error("Invalid XML: "+(l?h.map(l.childNodes,function(u){return u.textContent}).join(`
`):r)),o};var ka=/^(?:focusinfocus|focusoutblur)$/,Aa=function(r){r.stopPropagation()};h.extend(h.event,{trigger:function(r,o,l,u){var d,f,g,w,v,E,A,x,S=[l||B],D=C.call(r,"type")?r.type:r,z=C.call(r,"namespace")?r.namespace.split("."):[];if(f=x=g=l=l||B,!(l.nodeType===3||l.nodeType===8)&&!ka.test(D+h.event.triggered)&&(D.indexOf(".")>-1&&(z=D.split("."),D=z.shift(),z.sort()),v=D.indexOf(":")<0&&"on"+D,r=r[h.expando]?r:new h.Event(D,typeof r=="object"&&r),r.isTrigger=u?2:3,r.namespace=z.join("."),r.rnamespace=r.namespace?new RegExp("(^|\\.)"+z.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,r.result=void 0,r.target||(r.target=l),o=o==null?[r]:h.makeArray(o,[r]),A=h.event.special[D]||{},!(!u&&A.trigger&&A.trigger.apply(l,o)===!1))){if(!u&&!A.noBubble&&!ue(l)){for(w=A.delegateType||D,ka.test(w+D)||(f=f.parentNode);f;f=f.parentNode)S.push(f),g=f;g===(l.ownerDocument||B)&&S.push(g.defaultView||g.parentWindow||e)}for(d=0;(f=S[d++])&&!r.isPropagationStopped();)x=f,r.type=d>1?w:A.bindType||D,E=(j.get(f,"events")||Object.create(null))[r.type]&&j.get(f,"handle"),E&&E.apply(f,o),E=v&&f[v],E&&E.apply&&Qn(f)&&(r.result=E.apply(f,o),r.result===!1&&r.preventDefault());return r.type=D,!u&&!r.isDefaultPrevented()&&(!A._default||A._default.apply(S.pop(),o)===!1)&&Qn(l)&&v&&F(l[D])&&!ue(l)&&(g=l[v],g&&(l[v]=null),h.event.triggered=D,r.isPropagationStopped()&&x.addEventListener(D,Aa),l[D](),r.isPropagationStopped()&&x.removeEventListener(D,Aa),h.event.triggered=void 0,g&&(l[v]=g)),r.result}},simulate:function(r,o,l){var u=h.extend(new h.Event,l,{type:r,isSimulated:!0});h.event.trigger(u,null,o)}}),h.fn.extend({trigger:function(r,o){return this.each(function(){h.event.trigger(r,o,this)})},triggerHandler:function(r,o){var l=this[0];if(l)return h.event.trigger(r,o,l,!0)}});var qh=/\[\]$/,Ra=/\r?\n/g,$h=/^(?:submit|button|image|reset|file)$/i,zh=/^(?:input|select|textarea|keygen)/i;function cs(r,o,l,u){var d;if(Array.isArray(o))h.each(o,function(f,g){l||qh.test(r)?u(r,g):cs(r+"["+(typeof g=="object"&&g!=null?f:"")+"]",g,l,u)});else if(!l&&Be(o)==="object")for(d in o)cs(r+"["+d+"]",o[d],l,u);else u(r,o)}h.param=function(r,o){var l,u=[],d=function(f,g){var w=F(g)?g():g;u[u.length]=encodeURIComponent(f)+"="+encodeURIComponent(w??"")};if(r==null)return"";if(Array.isArray(r)||r.jquery&&!h.isPlainObject(r))h.each(r,function(){d(this.name,this.value)});else for(l in r)cs(l,r[l],o,d);return u.join("&")},h.fn.extend({serialize:function(){return h.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var r=h.prop(this,"elements");return r?h.makeArray(r):this}).filter(function(){var r=this.type;return this.name&&!h(this).is(":disabled")&&zh.test(this.nodeName)&&!$h.test(r)&&(this.checked||!Zn.test(r))}).map(function(r,o){var l=h(this).val();return l==null?null:Array.isArray(l)?h.map(l,function(u){return{name:o.name,value:u.replace(Ra,`\r
`)}}):{name:o.name,value:l.replace(Ra,`\r
`)}}).get()}});var Gh=/%20/g,Kh=/#.*$/,Yh=/([?&])_=[^&]*/,Qh=/^(.*?):[ \t]*([^\r\n]*)$/mg,Xh=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Jh=/^(?:GET|HEAD)$/,Zh=/^\/\//,xa={},us={},Pa="*/".concat("*"),hs=B.createElement("a");hs.href=ni.href;function Da(r){return function(o,l){typeof o!="string"&&(l=o,o="*");var u,d=0,f=o.toLowerCase().match(Ye)||[];if(F(l))for(;u=f[d++];)u[0]==="+"?(u=u.slice(1)||"*",(r[u]=r[u]||[]).unshift(l)):(r[u]=r[u]||[]).push(l)}}function Oa(r,o,l,u){var d={},f=r===us;function g(w){var v;return d[w]=!0,h.each(r[w]||[],function(E,A){var x=A(o,l,u);if(typeof x=="string"&&!f&&!d[x])return o.dataTypes.unshift(x),g(x),!1;if(f)return!(v=x)}),v}return g(o.dataTypes[0])||!d["*"]&&g("*")}function ds(r,o){var l,u,d=h.ajaxSettings.flatOptions||{};for(l in o)o[l]!==void 0&&((d[l]?r:u||(u={}))[l]=o[l]);return u&&h.extend(!0,r,u),r}function ed(r,o,l){for(var u,d,f,g,w=r.contents,v=r.dataTypes;v[0]==="*";)v.shift(),u===void 0&&(u=r.mimeType||o.getResponseHeader("Content-Type"));if(u){for(d in w)if(w[d]&&w[d].test(u)){v.unshift(d);break}}if(v[0]in l)f=v[0];else{for(d in l){if(!v[0]||r.converters[d+" "+v[0]]){f=d;break}g||(g=d)}f=f||g}if(f)return f!==v[0]&&v.unshift(f),l[f]}function td(r,o,l,u){var d,f,g,w,v,E={},A=r.dataTypes.slice();if(A[1])for(g in r.converters)E[g.toLowerCase()]=r.converters[g];for(f=A.shift();f;)if(r.responseFields[f]&&(l[r.responseFields[f]]=o),!v&&u&&r.dataFilter&&(o=r.dataFilter(o,r.dataType)),v=f,f=A.shift(),f){if(f==="*")f=v;else if(v!=="*"&&v!==f){if(g=E[v+" "+f]||E["* "+f],!g){for(d in E)if(w=d.split(" "),w[1]===f&&(g=E[v+" "+w[0]]||E["* "+w[0]],g)){g===!0?g=E[d]:E[d]!==!0&&(f=w[0],A.unshift(w[1]));break}}if(g!==!0)if(g&&r.throws)o=g(o);else try{o=g(o)}catch(x){return{state:"parsererror",error:g?x:"No conversion from "+v+" to "+f}}}}return{state:"success",data:o}}h.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ni.href,type:"GET",isLocal:Xh.test(ni.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Pa,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":h.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(r,o){return o?ds(ds(r,h.ajaxSettings),o):ds(h.ajaxSettings,r)},ajaxPrefilter:Da(xa),ajaxTransport:Da(us),ajax:function(r,o){typeof r=="object"&&(o=r,r=void 0),o=o||{};var l,u,d,f,g,w,v,E,A,x,S=h.ajaxSetup({},o),D=S.context||S,z=S.context&&(D.nodeType||D.jquery)?h(D):h.event,ne=h.Deferred(),Y=h.Callbacks("once memory"),Te=S.statusCode||{},ve={},Xe={},Je="canceled",te={readyState:0,getResponseHeader:function(ie){var me;if(v){if(!f)for(f={};me=Qh.exec(d);)f[me[1].toLowerCase()+" "]=(f[me[1].toLowerCase()+" "]||[]).concat(me[2]);me=f[ie.toLowerCase()+" "]}return me==null?null:me.join(", ")},getAllResponseHeaders:function(){return v?d:null},setRequestHeader:function(ie,me){return v==null&&(ie=Xe[ie.toLowerCase()]=Xe[ie.toLowerCase()]||ie,ve[ie]=me),this},overrideMimeType:function(ie){return v==null&&(S.mimeType=ie),this},statusCode:function(ie){var me;if(ie)if(v)te.always(ie[te.status]);else for(me in ie)Te[me]=[Te[me],ie[me]];return this},abort:function(ie){var me=ie||Je;return l&&l.abort(me),Gt(0,me),this}};if(ne.promise(te),S.url=((r||S.url||ni.href)+"").replace(Zh,ni.protocol+"//"),S.type=o.method||o.type||S.method||S.type,S.dataTypes=(S.dataType||"*").toLowerCase().match(Ye)||[""],S.crossDomain==null){w=B.createElement("a");try{w.href=S.url,w.href=w.href,S.crossDomain=hs.protocol+"//"+hs.host!=w.protocol+"//"+w.host}catch{S.crossDomain=!0}}if(S.data&&S.processData&&typeof S.data!="string"&&(S.data=h.param(S.data,S.traditional)),Oa(xa,S,o,te),v)return te;E=h.event&&S.global,E&&h.active++===0&&h.event.trigger("ajaxStart"),S.type=S.type.toUpperCase(),S.hasContent=!Jh.test(S.type),u=S.url.replace(Kh,""),S.hasContent?S.data&&S.processData&&(S.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(S.data=S.data.replace(Gh,"+")):(x=S.url.slice(u.length),S.data&&(S.processData||typeof S.data=="string")&&(u+=(ls.test(u)?"&":"?")+S.data,delete S.data),S.cache===!1&&(u=u.replace(Yh,"$1"),x=(ls.test(u)?"&":"?")+"_="+Na.guid+++x),S.url=u+x),S.ifModified&&(h.lastModified[u]&&te.setRequestHeader("If-Modified-Since",h.lastModified[u]),h.etag[u]&&te.setRequestHeader("If-None-Match",h.etag[u])),(S.data&&S.hasContent&&S.contentType!==!1||o.contentType)&&te.setRequestHeader("Content-Type",S.contentType),te.setRequestHeader("Accept",S.dataTypes[0]&&S.accepts[S.dataTypes[0]]?S.accepts[S.dataTypes[0]]+(S.dataTypes[0]!=="*"?", "+Pa+"; q=0.01":""):S.accepts["*"]);for(A in S.headers)te.setRequestHeader(A,S.headers[A]);if(S.beforeSend&&(S.beforeSend.call(D,te,S)===!1||v))return te.abort();if(Je="abort",Y.add(S.complete),te.done(S.success),te.fail(S.error),l=Oa(us,S,o,te),!l)Gt(-1,"No Transport");else{if(te.readyState=1,E&&z.trigger("ajaxSend",[te,S]),v)return te;S.async&&S.timeout>0&&(g=e.setTimeout(function(){te.abort("timeout")},S.timeout));try{v=!1,l.send(ve,Gt)}catch(ie){if(v)throw ie;Gt(-1,ie)}}function Gt(ie,me,ri,ps){var Ze,si,et,Ct,It,Ue=me;v||(v=!0,g&&e.clearTimeout(g),l=void 0,d=ps||"",te.readyState=ie>0?4:0,Ze=ie>=200&&ie<300||ie===304,ri&&(Ct=ed(S,te,ri)),!Ze&&h.inArray("script",S.dataTypes)>-1&&h.inArray("json",S.dataTypes)<0&&(S.converters["text script"]=function(){}),Ct=td(S,Ct,te,Ze),Ze?(S.ifModified&&(It=te.getResponseHeader("Last-Modified"),It&&(h.lastModified[u]=It),It=te.getResponseHeader("etag"),It&&(h.etag[u]=It)),ie===204||S.type==="HEAD"?Ue="nocontent":ie===304?Ue="notmodified":(Ue=Ct.state,si=Ct.data,et=Ct.error,Ze=!et)):(et=Ue,(ie||!Ue)&&(Ue="error",ie<0&&(ie=0))),te.status=ie,te.statusText=(me||Ue)+"",Ze?ne.resolveWith(D,[si,Ue,te]):ne.rejectWith(D,[te,Ue,et]),te.statusCode(Te),Te=void 0,E&&z.trigger(Ze?"ajaxSuccess":"ajaxError",[te,S,Ze?si:et]),Y.fireWith(D,[te,Ue]),E&&(z.trigger("ajaxComplete",[te,S]),--h.active||h.event.trigger("ajaxStop")))}return te},getJSON:function(r,o,l){return h.get(r,o,l,"json")},getScript:function(r,o){return h.get(r,void 0,o,"script")}}),h.each(["get","post"],function(r,o){h[o]=function(l,u,d,f){return F(u)&&(f=f||d,d=u,u=void 0),h.ajax(h.extend({url:l,type:o,dataType:f,data:u,success:d},h.isPlainObject(l)&&l))}}),h.ajaxPrefilter(function(r){var o;for(o in r.headers)o.toLowerCase()==="content-type"&&(r.contentType=r.headers[o]||"")}),h._evalUrl=function(r,o,l){return h.ajax({url:r,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(u){h.globalEval(u,o,l)}})},h.fn.extend({wrapAll:function(r){var o;return this[0]&&(F(r)&&(r=r.call(this[0])),o=h(r,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&o.insertBefore(this[0]),o.map(function(){for(var l=this;l.firstElementChild;)l=l.firstElementChild;return l}).append(this)),this},wrapInner:function(r){return F(r)?this.each(function(o){h(this).wrapInner(r.call(this,o))}):this.each(function(){var o=h(this),l=o.contents();l.length?l.wrapAll(r):o.append(r)})},wrap:function(r){var o=F(r);return this.each(function(l){h(this).wrapAll(o?r.call(this,l):r)})},unwrap:function(r){return this.parent(r).not("body").each(function(){h(this).replaceWith(this.childNodes)}),this}}),h.expr.pseudos.hidden=function(r){return!h.expr.pseudos.visible(r)},h.expr.pseudos.visible=function(r){return!!(r.offsetWidth||r.offsetHeight||r.getClientRects().length)},h.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var nd={0:200,1223:204},ii=h.ajaxSettings.xhr();P.cors=!!ii&&"withCredentials"in ii,P.ajax=ii=!!ii,h.ajaxTransport(function(r){var o,l;if(P.cors||ii&&!r.crossDomain)return{send:function(u,d){var f,g=r.xhr();if(g.open(r.type,r.url,r.async,r.username,r.password),r.xhrFields)for(f in r.xhrFields)g[f]=r.xhrFields[f];r.mimeType&&g.overrideMimeType&&g.overrideMimeType(r.mimeType),!r.crossDomain&&!u["X-Requested-With"]&&(u["X-Requested-With"]="XMLHttpRequest");for(f in u)g.setRequestHeader(f,u[f]);o=function(w){return function(){o&&(o=l=g.onload=g.onerror=g.onabort=g.ontimeout=g.onreadystatechange=null,w==="abort"?g.abort():w==="error"?typeof g.status!="number"?d(0,"error"):d(g.status,g.statusText):d(nd[g.status]||g.status,g.statusText,(g.responseType||"text")!=="text"||typeof g.responseText!="string"?{binary:g.response}:{text:g.responseText},g.getAllResponseHeaders()))}},g.onload=o(),l=g.onerror=g.ontimeout=o("error"),g.onabort!==void 0?g.onabort=l:g.onreadystatechange=function(){g.readyState===4&&e.setTimeout(function(){o&&l()})},o=o("abort");try{g.send(r.hasContent&&r.data||null)}catch(w){if(o)throw w}},abort:function(){o&&o()}}}),h.ajaxPrefilter(function(r){r.crossDomain&&(r.contents.script=!1)}),h.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(r){return h.globalEval(r),r}}}),h.ajaxPrefilter("script",function(r){r.cache===void 0&&(r.cache=!1),r.crossDomain&&(r.type="GET")}),h.ajaxTransport("script",function(r){if(r.crossDomain||r.scriptAttrs){var o,l;return{send:function(u,d){o=h("<script>").attr(r.scriptAttrs||{}).prop({charset:r.scriptCharset,src:r.url}).on("load error",l=function(f){o.remove(),l=null,f&&d(f.type==="error"?404:200,f.type)}),B.head.appendChild(o[0])},abort:function(){l&&l()}}}});var La=[],fs=/(=)\?(?=&|$)|\?\?/;h.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var r=La.pop()||h.expando+"_"+Na.guid++;return this[r]=!0,r}}),h.ajaxPrefilter("json jsonp",function(r,o,l){var u,d,f,g=r.jsonp!==!1&&(fs.test(r.url)?"url":typeof r.data=="string"&&(r.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&fs.test(r.data)&&"data");if(g||r.dataTypes[0]==="jsonp")return u=r.jsonpCallback=F(r.jsonpCallback)?r.jsonpCallback():r.jsonpCallback,g?r[g]=r[g].replace(fs,"$1"+u):r.jsonp!==!1&&(r.url+=(ls.test(r.url)?"&":"?")+r.jsonp+"="+u),r.converters["script json"]=function(){return f||h.error(u+" was not called"),f[0]},r.dataTypes[0]="json",d=e[u],e[u]=function(){f=arguments},l.always(function(){d===void 0?h(e).removeProp(u):e[u]=d,r[u]&&(r.jsonpCallback=o.jsonpCallback,La.push(u)),f&&F(d)&&d(f[0]),f=d=void 0}),"script"}),P.createHTMLDocument=function(){var r=B.implementation.createHTMLDocument("").body;return r.innerHTML="<form></form><form></form>",r.childNodes.length===2}(),h.parseHTML=function(r,o,l){if(typeof r!="string")return[];typeof o=="boolean"&&(l=o,o=!1);var u,d,f;return o||(P.createHTMLDocument?(o=B.implementation.createHTMLDocument(""),u=o.createElement("base"),u.href=B.location.href,o.head.appendChild(u)):o=B),d=ta.exec(r),f=!l&&[],d?[o.createElement(d[1])]:(d=ha([r],o,f),f&&f.length&&h(f).remove(),h.merge([],d.childNodes))},h.fn.load=function(r,o,l){var u,d,f,g=this,w=r.indexOf(" ");return w>-1&&(u=$t(r.slice(w)),r=r.slice(0,w)),F(o)?(l=o,o=void 0):o&&typeof o=="object"&&(d="POST"),g.length>0&&h.ajax({url:r,type:d||"GET",dataType:"html",data:o}).done(function(v){f=arguments,g.html(u?h("<div>").append(h.parseHTML(v)).find(u):v)}).always(l&&function(v,E){g.each(function(){l.apply(this,f||[v.responseText,E,v])})}),this},h.expr.pseudos.animated=function(r){return h.grep(h.timers,function(o){return r===o.elem}).length},h.offset={setOffset:function(r,o,l){var u,d,f,g,w,v,E,A=h.css(r,"position"),x=h(r),S={};A==="static"&&(r.style.position="relative"),w=x.offset(),f=h.css(r,"top"),v=h.css(r,"left"),E=(A==="absolute"||A==="fixed")&&(f+v).indexOf("auto")>-1,E?(u=x.position(),g=u.top,d=u.left):(g=parseFloat(f)||0,d=parseFloat(v)||0),F(o)&&(o=o.call(r,l,h.extend({},w))),o.top!=null&&(S.top=o.top-w.top+g),o.left!=null&&(S.left=o.left-w.left+d),"using"in o?o.using.call(r,S):x.css(S)}},h.fn.extend({offset:function(r){if(arguments.length)return r===void 0?this:this.each(function(d){h.offset.setOffset(this,r,d)});var o,l,u=this[0];if(u)return u.getClientRects().length?(o=u.getBoundingClientRect(),l=u.ownerDocument.defaultView,{top:o.top+l.pageYOffset,left:o.left+l.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var r,o,l,u=this[0],d={top:0,left:0};if(h.css(u,"position")==="fixed")o=u.getBoundingClientRect();else{for(o=this.offset(),l=u.ownerDocument,r=u.offsetParent||l.documentElement;r&&(r===l.body||r===l.documentElement)&&h.css(r,"position")==="static";)r=r.parentNode;r&&r!==u&&r.nodeType===1&&(d=h(r).offset(),d.top+=h.css(r,"borderTopWidth",!0),d.left+=h.css(r,"borderLeftWidth",!0))}return{top:o.top-d.top-h.css(u,"marginTop",!0),left:o.left-d.left-h.css(u,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var r=this.offsetParent;r&&h.css(r,"position")==="static";)r=r.offsetParent;return r||qt})}}),h.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(r,o){var l=o==="pageYOffset";h.fn[r]=function(u){return lt(this,function(d,f,g){var w;if(ue(d)?w=d:d.nodeType===9&&(w=d.defaultView),g===void 0)return w?w[o]:d[f];w?w.scrollTo(l?w.pageXOffset:g,l?g:w.pageYOffset):d[f]=g},r,u,arguments.length)}}),h.each(["top","left"],function(r,o){h.cssHooks[o]=ma(P.pixelPosition,function(l,u){if(u)return u=ei(l,o),ns.test(u)?h(l).position()[o]+"px":u})}),h.each({Height:"height",Width:"width"},function(r,o){h.each({padding:"inner"+r,content:o,"":"outer"+r},function(l,u){h.fn[u]=function(d,f){var g=arguments.length&&(l||typeof d!="boolean"),w=l||(d===!0||f===!0?"margin":"border");return lt(this,function(v,E,A){var x;return ue(v)?u.indexOf("outer")===0?v["inner"+r]:v.document.documentElement["client"+r]:v.nodeType===9?(x=v.documentElement,Math.max(v.body["scroll"+r],x["scroll"+r],v.body["offset"+r],x["offset"+r],x["client"+r])):A===void 0?h.css(v,E,w):h.style(v,E,A,w)},o,g?d:void 0,g)}})}),h.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(r,o){h.fn[o]=function(l){return this.on(o,l)}}),h.fn.extend({bind:function(r,o,l){return this.on(r,null,o,l)},unbind:function(r,o){return this.off(r,null,o)},delegate:function(r,o,l,u){return this.on(o,r,l,u)},undelegate:function(r,o,l){return arguments.length===1?this.off(r,"**"):this.off(o,r||"**",l)},hover:function(r,o){return this.on("mouseenter",r).on("mouseleave",o||r)}}),h.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(r,o){h.fn[o]=function(l,u){return arguments.length>0?this.on(o,null,l,u):this.trigger(o)}});var id=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;h.proxy=function(r,o){var l,u,d;if(typeof o=="string"&&(l=r[o],o=r,r=l),!!F(r))return u=a.call(arguments,2),d=function(){return r.apply(o||this,u.concat(a.call(arguments)))},d.guid=r.guid=r.guid||h.guid++,d},h.holdReady=function(r){r?h.readyWait++:h.ready(!0)},h.isArray=Array.isArray,h.parseJSON=JSON.parse,h.nodeName=se,h.isFunction=F,h.isWindow=ue,h.camelCase=Qe,h.type=Be,h.now=Date.now,h.isNumeric=function(r){var o=h.type(r);return(o==="number"||o==="string")&&!isNaN(r-parseFloat(r))},h.trim=function(r){return r==null?"":(r+"").replace(id,"$1")};var rd=e.jQuery,sd=e.$;return h.noConflict=function(r){return e.$===h&&(e.$=sd),r&&e.jQuery===h&&(e.jQuery=rd),h},typeof t>"u"&&(e.jQuery=e.$=h),h})})(Gl);var md=Gl.exports;const yt=_d(md);var Ha={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O=function(n,e){if(!n)throw Un(e)},Un=function(n){return new Error("Firebase Database ("+Kl.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yl=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},yd=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const a=n[t++];e[i++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=n[t++],c=n[t++],p=n[t++],_=((s&7)<<18|(a&63)<<12|(c&63)<<6|p&63)-65536;e[i++]=String.fromCharCode(55296+(_>>10)),e[i++]=String.fromCharCode(56320+(_&1023))}else{const a=n[t++],c=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(a&63)<<6|c&63)}}return e.join("")},so={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const a=n[s],c=s+1<n.length,p=c?n[s+1]:0,_=s+2<n.length,y=_?n[s+2]:0,I=a>>2,C=(a&3)<<4|p>>4;let k=(p&15)<<2|y>>6,M=y&63;_||(M=64,c||(k=64)),i.push(t[I],t[C],t[k],t[M])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Yl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):yd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const a=t[n.charAt(s++)],p=s<n.length?t[n.charAt(s)]:0;++s;const y=s<n.length?t[n.charAt(s)]:64;++s;const C=s<n.length?t[n.charAt(s)]:64;if(++s,a==null||p==null||y==null||C==null)throw new vd;const k=a<<2|p>>4;if(i.push(k),y!==64){const M=p<<4&240|y>>2;if(i.push(M),C!==64){const P=y<<6&192|C;i.push(P)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class vd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ql=function(n){const e=Yl(n);return so.encodeByteArray(e,!0)},ar=function(n){return Ql(n).replace(/\./g,"")},lr=function(n){try{return so.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(n){return Xl(void 0,n)}function Xl(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!bd(t)||(n[t]=Xl(n[t],e[t]));return n}function bd(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd=()=>Ed().__FIREBASE_DEFAULTS__,Id=()=>{if(typeof process>"u"||typeof Ha>"u")return;const n=Ha.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Td=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&lr(n[1]);return e&&JSON.parse(e)},oo=()=>{try{return Cd()||Id()||Td()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Jl=n=>{var e,t;return(t=(e=oo())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Sd=n=>{const e=Jl(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Zl=()=>{var n;return(n=oo())===null||n===void 0?void 0:n.config},ec=n=>{var e;return(e=oo())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ar(JSON.stringify(t)),ar(JSON.stringify(c)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ao(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ne())}function kd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function tc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ad(){const n=Ne();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function nc(){return Kl.NODE_ADMIN===!0}function Rd(){try{return typeof indexedDB=="object"}catch{return!1}}function xd(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var a;e(((a=s.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd="FirebaseError";class Vt extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Pd,Object.setPrototypeOf(this,Vt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xi.prototype.create)}}class xi{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,a=this.errors[e],c=a?Dd(a,i):"Error",p=`${this.serviceName}: ${c} (${s}).`;return new Vt(s,p,i)}}function Dd(n,e){return n.replace(Od,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Od=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(n){return JSON.parse(n)}function we(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic=function(n){let e={},t={},i={},s="";try{const a=n.split(".");e=yi(lr(a[0])||""),t=yi(lr(a[1])||""),s=a[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},Ld=function(n){const e=ic(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Md=function(n){const e=ic(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Nn(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function cr(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ur(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function hr(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const a=n[s],c=e[s];if(Wa(a)&&Wa(c)){if(!hr(a,c))return!1}else if(a!==c)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Wa(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let C=0;C<16;C++)i[C]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let C=0;C<16;C++)i[C]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let C=16;C<80;C++){const k=i[C-3]^i[C-8]^i[C-14]^i[C-16];i[C]=(k<<1|k>>>31)&4294967295}let s=this.chain_[0],a=this.chain_[1],c=this.chain_[2],p=this.chain_[3],_=this.chain_[4],y,I;for(let C=0;C<80;C++){C<40?C<20?(y=p^a&(c^p),I=1518500249):(y=a^c^p,I=1859775393):C<60?(y=a&c|p&(a|c),I=2400959708):(y=a^c^p,I=3395469782);const k=(s<<5|s>>>27)+y+_+I+i[C]&4294967295;_=p,p=c,c=(a<<30|a>>>2)&4294967295,a=s,s=k}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+p&4294967295,this.chain_[4]=this.chain_[4]+_&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const a=this.buf_;let c=this.inbuf_;for(;s<t;){if(c===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(a[c]=e.charCodeAt(s),++c,++s,c===this.blockSize){this.compress_(a),c=0;break}}else for(;s<t;)if(a[c]=e[s],++c,++s,c===this.blockSize){this.compress_(a),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let a=24;a>=0;a-=8)e[i]=this.chain_[s]>>a&255,++i;return e}}function Ud(n,e){const t=new Hd(n,e);return t.subscribe.bind(t)}class Hd{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");Wd(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=bs),s.error===void 0&&(s.error=bs),s.complete===void 0&&(s.complete=bs);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Wd(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function bs(){}function kn(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const a=s-55296;i++,O(i<n.length,"Surrogate pair missing trail surrogate.");const c=n.charCodeAt(i)-56320;s=65536+(a<<10)+c}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Pr=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(n){return n&&n._delegate?n._delegate:n}class en{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new nt;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qd(e))try{this.getOrInitializeService({instanceIdentifier:Yt})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:s});i.resolve(a)}catch{}}}}clearInstance(e=Yt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yt){return this.instances.has(e)}getOptions(e=Yt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[a,c]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(a);i===p&&c.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),a=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;a.add(e),this.onInitCallbacks.set(s,a);const c=this.instances.get(s);return c&&e(c,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Vd(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Yt){return this.component?this.component.multipleInstances?e:Yt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vd(n){return n===Yt?void 0:n}function qd(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Bd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ce||(ce={}));const zd={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},Gd=ce.INFO,Kd={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},Yd=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=Kd[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class lo{constructor(e){this.name=e,this._logLevel=Gd,this._logHandler=Yd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const Qd=(n,e)=>e.some(t=>n instanceof t);let ja,Ba;function Xd(){return ja||(ja=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jd(){return Ba||(Ba=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rc=new WeakMap,Ls=new WeakMap,sc=new WeakMap,Es=new WeakMap,co=new WeakMap;function Zd(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",a),n.removeEventListener("error",c)},a=()=>{t(Pt(n.result)),s()},c=()=>{i(n.error),s()};n.addEventListener("success",a),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&rc.set(t,n)}).catch(()=>{}),co.set(e,n),e}function ef(n){if(Ls.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",c),n.removeEventListener("abort",c)},a=()=>{t(),s()},c=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",a),n.addEventListener("error",c),n.addEventListener("abort",c)});Ls.set(n,e)}let Ms={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ls.get(n);if(e==="objectStoreNames")return n.objectStoreNames||sc.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Pt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function tf(n){Ms=n(Ms)}function nf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Cs(this),e,...t);return sc.set(i,e.sort?e.sort():[e]),Pt(i)}:Jd().includes(n)?function(...e){return n.apply(Cs(this),e),Pt(rc.get(this))}:function(...e){return Pt(n.apply(Cs(this),e))}}function rf(n){return typeof n=="function"?nf(n):(n instanceof IDBTransaction&&ef(n),Qd(n,Xd())?new Proxy(n,Ms):n)}function Pt(n){if(n instanceof IDBRequest)return Zd(n);if(Es.has(n))return Es.get(n);const e=rf(n);return e!==n&&(Es.set(n,e),co.set(e,n)),e}const Cs=n=>co.get(n);function sf(n,e,{blocked:t,upgrade:i,blocking:s,terminated:a}={}){const c=indexedDB.open(n,e),p=Pt(c);return i&&c.addEventListener("upgradeneeded",_=>{i(Pt(c.result),_.oldVersion,_.newVersion,Pt(c.transaction),_)}),t&&c.addEventListener("blocked",_=>t(_.oldVersion,_.newVersion,_)),p.then(_=>{a&&_.addEventListener("close",()=>a()),s&&_.addEventListener("versionchange",y=>s(y.oldVersion,y.newVersion,y))}).catch(()=>{}),p}const of=["get","getKey","getAll","getAllKeys","count"],af=["put","add","delete","clear"],Is=new Map;function Va(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Is.get(e))return Is.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=af.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||of.includes(t)))return;const a=async function(c,...p){const _=this.transaction(c,s?"readwrite":"readonly");let y=_.store;return i&&(y=y.index(p.shift())),(await Promise.all([y[t](...p),s&&_.done]))[0]};return Is.set(e,a),a}tf(n=>({...n,get:(e,t,i)=>Va(e,t)||n.get(e,t,i),has:(e,t)=>!!Va(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(cf(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function cf(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fs="@firebase/app",qa="0.10.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn=new lo("@firebase/app"),uf="@firebase/app-compat",hf="@firebase/analytics-compat",df="@firebase/analytics",ff="@firebase/app-check-compat",pf="@firebase/app-check",gf="@firebase/auth",_f="@firebase/auth-compat",mf="@firebase/database",yf="@firebase/database-compat",vf="@firebase/functions",wf="@firebase/functions-compat",bf="@firebase/installations",Ef="@firebase/installations-compat",Cf="@firebase/messaging",If="@firebase/messaging-compat",Tf="@firebase/performance",Sf="@firebase/performance-compat",Nf="@firebase/remote-config",kf="@firebase/remote-config-compat",Af="@firebase/storage",Rf="@firebase/storage-compat",xf="@firebase/firestore",Pf="@firebase/vertexai-preview",Df="@firebase/firestore-compat",Of="firebase",Lf="10.12.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us="[DEFAULT]",Mf={[Fs]:"fire-core",[uf]:"fire-core-compat",[df]:"fire-analytics",[hf]:"fire-analytics-compat",[pf]:"fire-app-check",[ff]:"fire-app-check-compat",[gf]:"fire-auth",[_f]:"fire-auth-compat",[mf]:"fire-rtdb",[yf]:"fire-rtdb-compat",[vf]:"fire-fn",[wf]:"fire-fn-compat",[bf]:"fire-iid",[Ef]:"fire-iid-compat",[Cf]:"fire-fcm",[If]:"fire-fcm-compat",[Tf]:"fire-perf",[Sf]:"fire-perf-compat",[Nf]:"fire-rc",[kf]:"fire-rc-compat",[Af]:"fire-gcs",[Rf]:"fire-gcs-compat",[xf]:"fire-fst",[Df]:"fire-fst-compat",[Pf]:"fire-vertex","fire-js":"fire-js",[Of]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=new Map,Ff=new Map,Hs=new Map;function $a(n,e){try{n.container.addComponent(e)}catch(t){tn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function An(n){const e=n.name;if(Hs.has(e))return tn.debug(`There were multiple attempts to register component ${e}.`),!1;Hs.set(e,n);for(const t of dr.values())$a(t,n);for(const t of Ff.values())$a(t,n);return!0}function uo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function dt(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Dt=new xi("app","Firebase",Uf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new en("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn=Lf;function oc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Us,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Dt.create("bad-app-name",{appName:String(s)});if(t||(t=Zl()),!t)throw Dt.create("no-options");const a=dr.get(s);if(a){if(hr(t,a.options)&&hr(i,a.config))return a;throw Dt.create("duplicate-app",{appName:s})}const c=new $d(s);for(const _ of Hs.values())c.addComponent(_);const p=new Hf(t,i,c);return dr.set(s,p),p}function ac(n=Us){const e=dr.get(n);if(!e&&n===Us&&Zl())return oc();if(!e)throw Dt.create("no-app",{appName:n});return e}function Ot(n,e,t){var i;let s=(i=Mf[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const a=s.match(/\s|\//),c=e.match(/\s|\//);if(a||c){const p=[`Unable to register library "${s}" with version "${e}":`];a&&p.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&c&&p.push("and"),c&&p.push(`version name "${e}" contains illegal characters (whitespace or "/")`),tn.warn(p.join(" "));return}An(new en(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf="firebase-heartbeat-database",jf=1,vi="firebase-heartbeat-store";let Ts=null;function lc(){return Ts||(Ts=sf(Wf,jf,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(vi)}catch(t){console.warn(t)}}}}).catch(n=>{throw Dt.create("idb-open",{originalErrorMessage:n.message})})),Ts}async function Bf(n){try{const t=(await lc()).transaction(vi),i=await t.objectStore(vi).get(cc(n));return await t.done,i}catch(e){if(e instanceof Vt)tn.warn(e.message);else{const t=Dt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});tn.warn(t.message)}}}async function za(n,e){try{const i=(await lc()).transaction(vi,"readwrite");await i.objectStore(vi).put(e,cc(n)),await i.done}catch(t){if(t instanceof Vt)tn.warn(t.message);else{const i=Dt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});tn.warn(i.message)}}}function cc(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf=1024,qf=30*24*60*60*1e3;class $f{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Gf(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Ga();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(c=>c.date===a)))return this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(c=>{const p=new Date(c.date).valueOf();return Date.now()-p<=qf}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ga(),{heartbeatsToSend:i,unsentEntries:s}=zf(this._heartbeatsCache.heartbeats),a=ar(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}}function Ga(){return new Date().toISOString().substring(0,10)}function zf(n,e=Vf){const t=[];let i=n.slice();for(const s of n){const a=t.find(c=>c.agent===s.agent);if(a){if(a.dates.push(s.date),Ka(t)>e){a.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Ka(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Gf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rd()?xd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Bf(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return za(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return za(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ka(n){return ar(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(n){An(new en("platform-logger",e=>new lf(e),"PRIVATE")),An(new en("heartbeat",e=>new $f(e),"PRIVATE")),Ot(Fs,qa,n),Ot(Fs,qa,"esm2017"),Ot("fire-js","")}Kf("");var Yf="firebase",Qf="10.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ot(Yf,Qf,"app");function ho(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function uc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Xf=uc,hc=new xi("auth","Firebase",uc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr=new lo("@firebase/auth");function Jf(n,...e){fr.logLevel<=ce.WARN&&fr.warn(`Auth (${Wn}): ${n}`,...e)}function nr(n,...e){fr.logLevel<=ce.ERROR&&fr.error(`Auth (${Wn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(n,...e){throw fo(n,...e)}function it(n,...e){return fo(n,...e)}function dc(n,e,t){const i=Object.assign(Object.assign({},Xf()),{[e]:t});return new xi("auth","Firebase",i).create(e,{appName:n.name})}function Lt(n){return dc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function fo(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return hc.create(n,...e)}function G(n,e,...t){if(!n)throw fo(e,...t)}function ft(n){const e="INTERNAL ASSERTION FAILED: "+n;throw nr(e),new Error(e)}function wt(n,e){n||ft(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Zf(){return Ya()==="http:"||Ya()==="https:"}function Ya(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Zf()||kd()||"connection"in navigator)?navigator.onLine:!0}function tp(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,t){this.shortDelay=e,this.longDelay=t,wt(t>e,"Short delay should be less than long delay!"),this.isMobile=ao()||tc()}get(){return ep()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(n,e){wt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip=new Pi(3e4,6e4);function Dr(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function jn(n,e,t,i,s={}){return pc(n,s,async()=>{let a={},c={};i&&(e==="GET"?c=i:a={body:JSON.stringify(i)});const p=Hn(Object.assign({key:n.config.apiKey},c)).slice(1),_=await n._getAdditionalHeaders();return _["Content-Type"]="application/json",n.languageCode&&(_["X-Firebase-Locale"]=n.languageCode),fc.fetch()(_c(n,n.config.apiHost,t,p),Object.assign({method:e,headers:_,referrerPolicy:"no-referrer"},a))})}async function pc(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},np),e);try{const s=new rp(n),a=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const c=await a.json();if("needConfirmation"in c)throw Ji(n,"account-exists-with-different-credential",c);if(a.ok&&!("errorMessage"in c))return c;{const p=a.ok?c.errorMessage:c.error.message,[_,y]=p.split(" : ");if(_==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ji(n,"credential-already-in-use",c);if(_==="EMAIL_EXISTS")throw Ji(n,"email-already-in-use",c);if(_==="USER_DISABLED")throw Ji(n,"user-disabled",c);const I=i[_]||_.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw dc(n,I,y);vt(n,I)}}catch(s){if(s instanceof Vt)throw s;vt(n,"network-request-failed",{message:String(s)})}}async function gc(n,e,t,i,s={}){const a=await jn(n,e,t,i,s);return"mfaPendingCredential"in a&&vt(n,"multi-factor-auth-required",{_serverResponse:a}),a}function _c(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?po(n.config,s):`${n.config.apiScheme}://${s}`}class rp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(it(this.auth,"network-request-failed")),ip.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ji(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=it(n,e,i);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sp(n,e){return jn(n,"POST","/v1/accounts:delete",e)}async function mc(n,e){return jn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function op(n,e=!1){const t=Me(n),i=await t.getIdToken(e),s=go(i);G(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,c=a==null?void 0:a.sign_in_provider;return{claims:s,token:i,authTime:di(Ss(s.auth_time)),issuedAtTime:di(Ss(s.iat)),expirationTime:di(Ss(s.exp)),signInProvider:c||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Ss(n){return Number(n)*1e3}function go(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return nr("JWT malformed, contained fewer than 3 sections"),null;try{const s=lr(t);return s?JSON.parse(s):(nr("Failed to decode base64 JWT payload"),null)}catch(s){return nr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Qa(n){const e=go(n);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wi(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Vt&&ap(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function ap({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=di(this.lastLoginAt),this.creationTime=di(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pr(n){var e;const t=n.auth,i=await n.getIdToken(),s=await wi(n,mc(t,{idToken:i}));G(s==null?void 0:s.users.length,t,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const c=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?yc(a.providerUserInfo):[],p=up(n.providerData,c),_=n.isAnonymous,y=!(n.email&&a.passwordHash)&&!(p!=null&&p.length),I=_?y:!1,C={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:p,metadata:new js(a.createdAt,a.lastLoginAt),isAnonymous:I};Object.assign(n,C)}async function cp(n){const e=Me(n);await pr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function up(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function yc(n){return n.map(e=>{var{providerId:t}=e,i=ho(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hp(n,e){const t=await pc(n,{},async()=>{const i=Hn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:a}=n.config,c=_c(n,s,"/v1/token",`key=${a}`),p=await n._getAdditionalHeaders();return p["Content-Type"]="application/x-www-form-urlencoded",fc.fetch()(c,{method:"POST",headers:p,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function dp(n,e){return jn(n,"POST","/v2/accounts:revokeToken",Dr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Qa(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){G(e.length!==0,"internal-error");const t=Qa(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:a}=await hp(e,t);this.updateTokensAndExpiration(i,s,Number(a))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:a}=t,c=new En;return i&&(G(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),s&&(G(typeof s=="string","internal-error",{appName:e}),c.accessToken=s),a&&(G(typeof a=="number","internal-error",{appName:e}),c.expirationTime=a),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new En,this.toJSON())}_performRefresh(){return ft("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(n,e){G(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class pt{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,a=ho(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new lp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new js(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await wi(this,this.stsTokenManager.getToken(this.auth,e));return G(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return op(this,e)}reload(){return cp(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new pt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await pr(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(dt(this.auth.app))return Promise.reject(Lt(this.auth));const e=await this.getIdToken();return await wi(this,sp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,a,c,p,_,y,I;const C=(i=t.displayName)!==null&&i!==void 0?i:void 0,k=(s=t.email)!==null&&s!==void 0?s:void 0,M=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,P=(c=t.photoURL)!==null&&c!==void 0?c:void 0,F=(p=t.tenantId)!==null&&p!==void 0?p:void 0,ue=(_=t._redirectEventId)!==null&&_!==void 0?_:void 0,B=(y=t.createdAt)!==null&&y!==void 0?y:void 0,ot=(I=t.lastLoginAt)!==null&&I!==void 0?I:void 0,{uid:Ke,emailVerified:Be,isAnonymous:zn,providerData:Gn,stsTokenManager:h}=t;G(Ke&&h,e,"internal-error");const Kn=En.fromJSON(this.name,h);G(typeof Ke=="string",e,"internal-error"),St(C,e.name),St(k,e.name),G(typeof Be=="boolean",e,"internal-error"),G(typeof zn=="boolean",e,"internal-error"),St(M,e.name),St(P,e.name),St(F,e.name),St(ue,e.name),St(B,e.name),St(ot,e.name);const se=new pt({uid:Ke,auth:e,email:k,emailVerified:Be,displayName:C,isAnonymous:zn,photoURL:P,phoneNumber:M,tenantId:F,stsTokenManager:Kn,createdAt:B,lastLoginAt:ot});return Gn&&Array.isArray(Gn)&&(se.providerData=Gn.map(Qr=>Object.assign({},Qr))),ue&&(se._redirectEventId=ue),se}static async _fromIdTokenResponse(e,t,i=!1){const s=new En;s.updateFromServerResponse(t);const a=new pt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await pr(a),a}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];G(s.localId!==void 0,"internal-error");const a=s.providerUserInfo!==void 0?yc(s.providerUserInfo):[],c=!(s.email&&s.passwordHash)&&!(a!=null&&a.length),p=new En;p.updateFromIdToken(i);const _=new pt({uid:s.localId,auth:e,stsTokenManager:p,isAnonymous:c}),y={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new js(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(a!=null&&a.length)};return Object.assign(_,y),_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa=new Map;function gt(n){wt(n instanceof Function,"Expected a class definition");let e=Xa.get(n);return e?(wt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Xa.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}vc.type="NONE";const Ja=vc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(n,e,t){return`firebase:${n}:${e}:${t}`}class Cn{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:a}=this.auth;this.fullUserKey=ir(this.userKey,s.apiKey,a),this.fullPersistenceKey=ir("persistence",s.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?pt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Cn(gt(Ja),e,i);const s=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let a=s[0]||gt(Ja);const c=ir(i,e.config.apiKey,e.name);let p=null;for(const y of t)try{const I=await y._get(c);if(I){const C=pt._fromJSON(e,I);y!==a&&(p=C),a=y;break}}catch{}const _=s.filter(y=>y._shouldAllowMigration);return!a._shouldAllowMigration||!_.length?new Cn(a,e,i):(a=_[0],p&&await a._set(c,p.toJSON()),await Promise.all(t.map(async y=>{if(y!==a)try{await y._remove(c)}catch{}})),new Cn(a,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ec(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(wc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ic(e))return"Blackberry";if(Tc(e))return"Webos";if(_o(e))return"Safari";if((e.includes("chrome/")||bc(e))&&!e.includes("edge/"))return"Chrome";if(Cc(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function wc(n=Ne()){return/firefox\//i.test(n)}function _o(n=Ne()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function bc(n=Ne()){return/crios\//i.test(n)}function Ec(n=Ne()){return/iemobile/i.test(n)}function Cc(n=Ne()){return/android/i.test(n)}function Ic(n=Ne()){return/blackberry/i.test(n)}function Tc(n=Ne()){return/webos/i.test(n)}function Or(n=Ne()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function fp(n=Ne()){var e;return Or(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function pp(){return Ad()&&document.documentMode===10}function Sc(n=Ne()){return Or(n)||Cc(n)||Tc(n)||Ic(n)||/windows phone/i.test(n)||Ec(n)}function gp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(n,e=[]){let t;switch(n){case"Browser":t=Za(Ne());break;case"Worker":t=`${Za(Ne())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Wn}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=a=>new Promise((c,p)=>{try{const _=e(a);c(_)}catch(_){p(_)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mp(n,e={}){return jn(n,"GET","/v2/passwordPolicy",Dr(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp=6;class vp{constructor(e){var t,i,s,a;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:yp,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,s,a,c,p;const _={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,_),this.validatePasswordCharacterOptions(e,_),_.isValid&&(_.isValid=(t=_.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),_.isValid&&(_.isValid=(i=_.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),_.isValid&&(_.isValid=(s=_.containsLowercaseLetter)!==null&&s!==void 0?s:!0),_.isValid&&(_.isValid=(a=_.containsUppercaseLetter)!==null&&a!==void 0?a:!0),_.isValid&&(_.isValid=(c=_.containsNumericCharacter)!==null&&c!==void 0?c:!0),_.isValid&&(_.isValid=(p=_.containsNonAlphanumericCharacter)!==null&&p!==void 0?p:!0),_}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new el(this),this.idTokenSubscription=new el(this),this.beforeStateQueue=new _p(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=gt(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Cn.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await mc(this,{idToken:e}),i=await pt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(dt(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(p,p))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,p=s==null?void 0:s._redirectEventId,_=await this.tryRedirectSignIn(e);(!c||c===p)&&(_!=null&&_.user)&&(s=_.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(c){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await pr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=tp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(dt(this.app))return Promise.reject(Lt(this));const t=e?Me(e):null;return t&&G(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return dt(this.app)?Promise.reject(Lt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return dt(this.app)?Promise.reject(Lt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await mp(this),t=new vp(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new xi("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await dp(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&gt(e)||this._popupRedirectResolver;G(t,this,"argument-error"),this.redirectPersistenceManager=await Cn.create(this,[gt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let c=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(p,this,"internal-error"),p.then(()=>{c||a(this.currentUser)}),typeof t=="function"){const _=e.addObserver(t,i,s);return()=>{c=!0,_()}}else{const _=e.addObserver(t);return()=>{c=!0,_()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Nc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Jf(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Lr(n){return Me(n)}class el{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ud(t=>this.observer=t)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function bp(n){mo=n}function Ep(n){return mo.loadJS(n)}function Cp(){return mo.gapiScript}function Ip(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(n,e){const t=uo(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),a=t.getOptions();if(hr(a,e??{}))return s;vt(s,"already-initialized")}return t.initialize({options:e})}function Sp(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(gt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Np(n,e,t){const i=Lr(n);G(i._canInitEmulator,i,"emulator-config-failed"),G(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,a=kc(e),{host:c,port:p}=kp(e),_=p===null?"":`:${p}`;i.config.emulator={url:`${a}//${c}${_}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:c,port:p,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})}),Ap()}function kc(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function kp(n){const e=kc(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const a=s[1];return{host:a,port:tl(i.substr(a.length+1))}}else{const[a,c]=i.split(":");return{host:a,port:tl(c)}}}function tl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Ap(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ft("not implemented")}_getIdTokenResponse(e){return ft("not implemented")}_linkToIdToken(e,t){return ft("not implemented")}_getReauthenticationResolver(e){return ft("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function In(n,e){return gc(n,"POST","/v1/accounts:signInWithIdp",Dr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp="http://localhost";class nn extends Ac{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new nn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):vt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,a=ho(t,["providerId","signInMethod"]);if(!i||!s)return null;const c=new nn(i,s);return c.idToken=a.idToken||void 0,c.accessToken=a.accessToken||void 0,c.secret=a.secret,c.nonce=a.nonce,c.pendingToken=a.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return In(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,In(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,In(e,t)}buildRequest(){const e={requestUri:Rp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Hn(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di extends Rc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends Di{constructor(){super("facebook.com")}static credential(e){return nn._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nt.credential(e.oauthAccessToken)}catch{return null}}}Nt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends Di{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return nn._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return kt.credential(t,i)}catch{return null}}}kt.GOOGLE_SIGN_IN_METHOD="google.com";kt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends Di{constructor(){super("github.com")}static credential(e){return nn._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return At.credential(e.oauthAccessToken)}catch{return null}}}At.GITHUB_SIGN_IN_METHOD="github.com";At.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends Di{constructor(){super("twitter.com")}static credential(e,t){return nn._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Rt.credential(t,i)}catch{return null}}}Rt.TWITTER_SIGN_IN_METHOD="twitter.com";Rt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xp(n,e){return gc(n,"POST","/v1/accounts:signUp",Dr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const a=await pt._fromIdTokenResponse(e,i,s),c=nl(i);return new Ut({user:a,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=nl(i);return new Ut({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function nl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pp(n){var e;if(dt(n.app))return Promise.reject(Lt(n));const t=Lr(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Ut({user:t.currentUser,providerId:null,operationType:"signIn"});const i=await xp(t,{returnSecureToken:!0}),s=await Ut._fromIdTokenResponse(t,"signIn",i,!0);return await t._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends Vt{constructor(e,t,i,s){var a;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,gr.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new gr(e,t,i,s)}}function xc(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?gr._fromErrorAndOperation(n,a,e,i):a})}async function Dp(n,e,t=!1){const i=await wi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ut._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Op(n,e,t=!1){const{auth:i}=n;if(dt(i.app))return Promise.reject(Lt(i));const s="reauthenticate";try{const a=await wi(n,xc(i,s,e,n),t);G(a.idToken,i,"internal-error");const c=go(a.idToken);G(c,i,"internal-error");const{sub:p}=c;return G(n.uid===p,i,"user-mismatch"),Ut._forOperation(n,s,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&vt(i,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lp(n,e,t=!1){if(dt(n.app))return Promise.reject(Lt(n));const i="signIn",s=await xc(n,i,e),a=await Ut._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(a.user),a}function Mp(n,e,t,i){return Me(n).onIdTokenChanged(e,t,i)}function Fp(n,e,t){return Me(n).beforeAuthStateChanged(e,t)}function Up(n,e,t,i){return Me(n).onAuthStateChanged(e,t,i)}const _r="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(_r,"1"),this.storage.removeItem(_r),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(){const n=Ne();return _o(n)||Or(n)}const Wp=1e3,jp=10;class Dc extends Pc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Hp()&&gp(),this.fallbackToPolling=Sc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,p,_)=>{this.notifyListeners(c,_)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const c=this.storage.getItem(i);if(e.newValue!==c)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const s=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},a=this.storage.getItem(i);pp()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,jp):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Wp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Dc.type="LOCAL";const Bp=Dc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc extends Pc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Oc.type="SESSION";const Lc=Oc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vp(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new Mr(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:a}=t.data,c=this.handlersMap[s];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const p=Array.from(c).map(async y=>y(t.origin,a)),_=await Vp(p);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:_})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Mr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,c;return new Promise((p,_)=>{const y=yo("",20);s.port1.start();const I=setTimeout(()=>{_(new Error("unsupported_event"))},i);c={messageChannel:s,onMessage(C){const k=C;if(k.data.eventId===y)switch(k.data.status){case"ack":clearTimeout(I),a=setTimeout(()=>{_(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),p(k.data.response);break;default:clearTimeout(I),clearTimeout(a),_(new Error("invalid_response"));break}}},this.handlers.add(c),s.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[s.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return window}function $p(n){rt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(){return typeof rt().WorkerGlobalScope<"u"&&typeof rt().importScripts=="function"}async function zp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Gp(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Kp(){return Mc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc="firebaseLocalStorageDb",Yp=1,mr="firebaseLocalStorage",Uc="fbase_key";class Oi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Fr(n,e){return n.transaction([mr],e?"readwrite":"readonly").objectStore(mr)}function Qp(){const n=indexedDB.deleteDatabase(Fc);return new Oi(n).toPromise()}function Bs(){const n=indexedDB.open(Fc,Yp);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(mr,{keyPath:Uc})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(mr)?e(i):(i.close(),await Qp(),e(await Bs()))})})}async function il(n,e,t){const i=Fr(n,!0).put({[Uc]:e,value:t});return new Oi(i).toPromise()}async function Xp(n,e){const t=Fr(n,!1).get(e),i=await new Oi(t).toPromise();return i===void 0?null:i.value}function rl(n,e){const t=Fr(n,!0).delete(e);return new Oi(t).toPromise()}const Jp=800,Zp=3;class Hc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bs(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Zp)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Mr._getInstance(Kp()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await zp(),!this.activeServiceWorker)return;this.sender=new qp(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Gp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bs();return await il(e,_r,"1"),await rl(e,_r),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>il(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Xp(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>rl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const a=Fr(s,!1).getAll();return new Oi(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:a}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Jp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Hc.type="LOCAL";const eg=Hc;new Pi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(n,e){return e?gt(e):(G(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo extends Ac{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return In(e,this._buildIdpRequest())}_linkToIdToken(e,t){return In(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return In(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ng(n){return Lp(n.auth,new vo(n),n.bypassAuthState)}function ig(n){const{auth:e,user:t}=n;return G(t,e,"internal-error"),Op(t,new vo(n),n.bypassAuthState)}async function rg(n){const{auth:e,user:t}=n;return G(t,e,"internal-error"),Dp(t,new vo(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,t,i,s,a=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:a,error:c,type:p}=e;if(c){this.reject(c);return}const _={auth:this.auth,requestUri:t,sessionId:i,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(_))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ng;case"linkViaPopup":case"linkViaRedirect":return rg;case"reauthViaPopup":case"reauthViaRedirect":return ig;default:vt(this.auth,"internal-error")}}resolve(e){wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg=new Pi(2e3,1e4);class wn extends Wc{constructor(e,t,i,s,a){super(e,t,s,a),this.provider=i,this.authWindow=null,this.pollId=null,wn.currentPopupAction&&wn.currentPopupAction.cancel(),wn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){wt(this.filter.length===1,"Popup operations only handle one event");const e=yo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(it(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(it(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(it(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,sg.get())};e()}}wn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og="pendingRedirect",rr=new Map;class ag extends Wc{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=rr.get(this.auth._key());if(!e){try{const i=await lg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}rr.set(this.auth._key(),e)}return this.bypassAuthState||rr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lg(n,e){const t=hg(e),i=ug(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function cg(n,e){rr.set(n._key(),e)}function ug(n){return gt(n._redirectPersistence)}function hg(n){return ir(og,n.config.apiKey,n.name)}async function dg(n,e,t=!1){if(dt(n.app))return Promise.reject(Lt(n));const i=Lr(n),s=tg(i,e),c=await new ag(i,s,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg=10*60*1e3;class pg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gg(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!jc(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(it(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fg&&this.cachedEventUids.clear(),this.cachedEventUids.has(sl(e))}saveEventToCache(e){this.cachedEventUids.add(sl(e)),this.lastProcessedEventTime=Date.now()}}function sl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function jc({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function gg(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jc(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _g(n,e={}){return jn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yg=/^https?/;async function vg(n){if(n.config.emulator)return;const{authorizedDomains:e}=await _g(n);for(const t of e)try{if(wg(t))return}catch{}vt(n,"unauthorized-domain")}function wg(n){const e=Ws(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!yg.test(t))return!1;if(mg.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg=new Pi(3e4,6e4);function ol(){const n=rt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Eg(n){return new Promise((e,t)=>{var i,s,a;function c(){ol(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ol(),t(it(n,"network-request-failed"))},timeout:bg.get()})}if(!((s=(i=rt().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((a=rt().gapi)===null||a===void 0)&&a.load)c();else{const p=Ip("iframefcb");return rt()[p]=()=>{gapi.load?c():t(it(n,"network-request-failed"))},Ep(`${Cp()}?onload=${p}`).catch(_=>t(_))}}).catch(e=>{throw sr=null,e})}let sr=null;function Cg(n){return sr=sr||Eg(n),sr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig=new Pi(5e3,15e3),Tg="__/auth/iframe",Sg="emulator/auth/iframe",Ng={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ag(n){const e=n.config;G(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?po(e,Sg):`https://${n.config.authDomain}/${Tg}`,i={apiKey:e.apiKey,appName:n.name,v:Wn},s=kg.get(n.config.apiHost);s&&(i.eid=s);const a=n._getFrameworks();return a.length&&(i.fw=a.join(",")),`${t}?${Hn(i).slice(1)}`}async function Rg(n){const e=await Cg(n),t=rt().gapi;return G(t,n,"internal-error"),e.open({where:document.body,url:Ag(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ng,dontclear:!0},i=>new Promise(async(s,a)=>{await i.restyle({setHideOnLeave:!1});const c=it(n,"network-request-failed"),p=rt().setTimeout(()=>{a(c)},Ig.get());function _(){rt().clearTimeout(p),s(i)}i.ping(_).then(_,()=>{a(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Pg=500,Dg=600,Og="_blank",Lg="http://localhost";class al{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Mg(n,e,t,i=Pg,s=Dg){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let p="";const _=Object.assign(Object.assign({},xg),{width:i.toString(),height:s.toString(),top:a,left:c}),y=Ne().toLowerCase();t&&(p=bc(y)?Og:t),wc(y)&&(e=e||Lg,_.scrollbars="yes");const I=Object.entries(_).reduce((k,[M,P])=>`${k}${M}=${P},`,"");if(fp(y)&&p!=="_self")return Fg(e||"",p),new al(null);const C=window.open(e||"",p,I);G(C,n,"popup-blocked");try{C.focus()}catch{}return new al(C)}function Fg(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug="__/auth/handler",Hg="emulator/auth/handler",Wg=encodeURIComponent("fac");async function ll(n,e,t,i,s,a){G(n.config.authDomain,n,"auth-domain-config-required"),G(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Wn,eventId:s};if(e instanceof Rc){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",cr(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[I,C]of Object.entries({}))c[I]=C}if(e instanceof Di){const I=e.getScopes().filter(C=>C!=="");I.length>0&&(c.scopes=I.join(","))}n.tenantId&&(c.tid=n.tenantId);const p=c;for(const I of Object.keys(p))p[I]===void 0&&delete p[I];const _=await n._getAppCheckToken(),y=_?`#${Wg}=${encodeURIComponent(_)}`:"";return`${jg(n)}?${Hn(p).slice(1)}${y}`}function jg({config:n}){return n.emulator?po(n,Hg):`https://${n.authDomain}/${Ug}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns="webStorageSupport";class Bg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Lc,this._completeRedirectFn=dg,this._overrideRedirectResult=cg}async _openPopup(e,t,i,s){var a;wt((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const c=await ll(e,t,i,Ws(),s);return Mg(e,c,yo())}async _openRedirect(e,t,i,s){await this._originValidation(e);const a=await ll(e,t,i,Ws(),s);return $p(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:a}=this.eventManagers[t];return s?Promise.resolve(s):(wt(a,"If manager is not set, promise should be"),a)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await Rg(e),i=new pg(e);return t.register("authEvent",s=>(G(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ns,{type:Ns},s=>{var a;const c=(a=s==null?void 0:s[0])===null||a===void 0?void 0:a[Ns];c!==void 0&&t(!!c),vt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=vg(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Sc()||_o()||Or()}}const Vg=Bg;var cl="@firebase/auth",ul="1.7.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function zg(n){An(new en("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:c,authDomain:p}=i.options;G(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const _={apiKey:c,authDomain:p,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Nc(n)},y=new wp(i,s,a,_);return Sp(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),An(new en("auth-internal",e=>{const t=Lr(e.getProvider("auth").getImmediate());return(i=>new qg(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ot(cl,ul,$g(n)),Ot(cl,ul,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg=5*60,Kg=ec("authIdTokenMaxAge")||Gg;let hl=null;const Yg=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Kg)return;const s=t==null?void 0:t.token;hl!==s&&(hl=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Qg(n=ac()){const e=uo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Tp(n,{popupRedirectResolver:Vg,persistence:[eg,Bp,Lc]}),i=ec("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(i,location.origin);if(location.origin===a.origin){const c=Yg(a.toString());Fp(t,c,()=>c(t.currentUser)),Mp(t,p=>c(p))}}const s=Jl("auth");return s&&Np(t,`http://${s}`),t}function Xg(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}bp({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const a=it("internal-error");a.customData=s,t(a)},i.type="text/javascript",i.charset="UTF-8",Xg().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});zg("Browser");var dl={};const fl="@firebase/database",pl="1.0.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bc="";function Jg(n){Bc=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),we(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:yi(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return st(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Zg(e)}}catch{}return new e_},Jt=Vc("localStorage"),t_=Vc("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=new lo("@firebase/database"),n_=function(){let n=1;return function(){return n++}}(),qc=function(n){const e=jd(n),t=new Fd;t.update(e);const i=t.digest();return so.encodeByteArray(i)},Li=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Li.apply(null,i):typeof i=="object"?e+=we(i):e+=i,e+=" "}return e};let fi=null,gl=!0;const i_=function(n,e){O(!e,"Can't turn on custom loggers persistently."),Tn.logLevel=ce.VERBOSE,fi=Tn.log.bind(Tn)},Ce=function(...n){if(gl===!0&&(gl=!1,fi===null&&t_.get("logging_enabled")===!0&&i_()),fi){const e=Li.apply(null,n);fi(e)}},Mi=function(n){return function(...e){Ce(n,...e)}},Vs=function(...n){const e="FIREBASE INTERNAL ERROR: "+Li(...n);Tn.error(e)},bt=function(...n){const e=`FIREBASE FATAL ERROR: ${Li(...n)}`;throw Tn.error(e),new Error(e)},Re=function(...n){const e="FIREBASE WARNING: "+Li(...n);Tn.warn(e)},r_=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Re("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ur=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},s_=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Rn="[MIN_NAME]",rn="[MAX_NAME]",an=function(n,e){if(n===e)return 0;if(n===Rn||e===rn)return-1;if(e===Rn||n===rn)return 1;{const t=_l(n),i=_l(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},o_=function(n,e){return n===e?0:n<e?-1:1},ai=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+we(e))},wo=function(n){if(typeof n!="object"||n===null)return we(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=we(e[i]),t+=":",t+=wo(n[e[i]]);return t+="}",t},$c=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function Ie(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const zc=function(n){O(!Ur(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,a,c,p,_;n===0?(a=0,c=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(p=Math.min(Math.floor(Math.log(n)/Math.LN2),i),a=p+i,c=Math.round(n*Math.pow(2,t-p)-Math.pow(2,t))):(a=0,c=Math.round(n/Math.pow(2,1-i-t))));const y=[];for(_=t;_;_-=1)y.push(c%2?1:0),c=Math.floor(c/2);for(_=e;_;_-=1)y.push(a%2?1:0),a=Math.floor(a/2);y.push(s?1:0),y.reverse();const I=y.join("");let C="";for(_=0;_<64;_+=8){let k=parseInt(I.substr(_,8),2).toString(16);k.length===1&&(k="0"+k),C=C+k}return C.toLowerCase()},a_=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},l_=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function c_(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const u_=new RegExp("^-?(0*)\\d{1,10}$"),h_=-2147483648,d_=2147483647,_l=function(n){if(u_.test(n)){const e=Number(n);if(e>=h_&&e<=d_)return e}return null},Bn=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Re("Exception was thrown by user callback.",t),e},Math.floor(0))}},f_=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},pi=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Re(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Ce("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Re(e)}}class or{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}or.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo="5",Gc="v",Kc="s",Yc="r",Qc="f",Xc=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Jc="ls",Zc="p",qs="ac",eu="websocket",tu="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e,t,i,s,a=!1,c="",p=!1,_=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=a,this.persistenceKey=c,this.includeNamespaceInQueryParams=p,this.isUsingEmulator=_,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Jt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Jt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function __(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function iu(n,e,t){O(typeof e=="string","typeof type must == string"),O(typeof t=="object","typeof params must == object");let i;if(e===eu)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===tu)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);__(n)&&(t.ns=n.namespace);const s=[];return Ie(t,(a,c)=>{s.push(a+"="+c)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(){this.counters_={}}incrementCounter(e,t=1){st(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return wd(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks={},As={};function Eo(n){const e=n.toString();return ks[e]||(ks[e]=new m_),ks[e]}function y_(n,e){const t=n.toString();return As[t]||(As[t]=e()),As[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Bn(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml="start",w_="close",b_="pLPCommand",E_="pRTLPCB",ru="id",su="pw",ou="ser",C_="cb",I_="seg",T_="ts",S_="d",N_="dframe",au=1870,lu=30,k_=au-lu,A_=25e3,R_=3e4;class bn{constructor(e,t,i,s,a,c,p){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=a,this.transportSessionId=c,this.lastSessionId=p,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Mi(e),this.stats_=Eo(t),this.urlFn=_=>(this.appCheckToken&&(_[qs]=this.appCheckToken),iu(t,tu,_))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new v_(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(R_)),s_(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Co((...a)=>{const[c,p,_,y,I]=a;if(this.incrementIncomingBytes_(a),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===ml)this.id=p,this.password=_;else if(c===w_)p?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(p,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...a)=>{const[c,p]=a;this.incrementIncomingBytes_(a),this.myPacketOrderer.handleResponse(c,p)},()=>{this.onClosed_()},this.urlFn);const i={};i[ml]="t",i[ou]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[C_]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Gc]=bo,this.transportSessionId&&(i[Kc]=this.transportSessionId),this.lastSessionId&&(i[Jc]=this.lastSessionId),this.applicationId&&(i[Zc]=this.applicationId),this.appCheckToken&&(i[qs]=this.appCheckToken),typeof location<"u"&&location.hostname&&Xc.test(location.hostname)&&(i[Yc]=Qc);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){bn.forceAllow_=!0}static forceDisallow(){bn.forceDisallow_=!0}static isAvailable(){return bn.forceAllow_?!0:!bn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!a_()&&!l_()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=we(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Ql(t),s=$c(i,k_);for(let a=0;a<s.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[a]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[N_]="t",i[ru]=e,i[su]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=we(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Co{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=n_(),window[b_+this.uniqueCallbackIdentifier]=e,window[E_+this.uniqueCallbackIdentifier]=t,this.myIFrame=Co.createIFrame_();let a="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(a='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(p){Ce("frame writing exception"),p.stack&&Ce(p.stack),Ce(p)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ce("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ru]=this.myID,e[su]=this.myPW,e[ou]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+lu+i.length<=au;){const c=this.pendingSegs.shift();i=i+"&"+I_+s+"="+c.seg+"&"+T_+s+"="+c.ts+"&"+S_+s+"="+c.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(A_)),a=()=>{clearTimeout(s),i()};this.addTag(e,a)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{Ce("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_=16384,P_=45e3;let yr=null;typeof MozWebSocket<"u"?yr=MozWebSocket:typeof WebSocket<"u"&&(yr=WebSocket);class $e{constructor(e,t,i,s,a,c,p){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Mi(this.connId),this.stats_=Eo(t),this.connURL=$e.connectionURL_(t,c,p,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,a){const c={};return c[Gc]=bo,typeof location<"u"&&location.hostname&&Xc.test(location.hostname)&&(c[Yc]=Qc),t&&(c[Kc]=t),i&&(c[Jc]=i),s&&(c[qs]=s),a&&(c[Zc]=a),iu(e,eu,c)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Jt.set("previous_websocket_failure",!0);try{let i;nc(),this.mySock=new yr(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){$e.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&yr!==null&&!$e.forceDisallow_}static previouslyFailed(){return Jt.isInMemoryStorage||Jt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Jt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=yi(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(O(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=we(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=$c(t,x_);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(P_))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}$e.responsesRequiredToBeHealthy=2;$e.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[bn,$e]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=$e&&$e.isAvailable();let i=t&&!$e.previouslyFailed();if(e.webSocketOnly&&(t||Re("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[$e];else{const s=this.transports_=[];for(const a of bi.ALL_TRANSPORTS)a&&a.isAvailable()&&s.push(a);bi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}bi.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_=6e4,O_=5e3,L_=10*1024,M_=100*1024,Rs="t",yl="d",F_="s",vl="r",U_="e",wl="o",bl="a",El="n",Cl="p",H_="h";class W_{constructor(e,t,i,s,a,c,p,_,y,I){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=a,this.onMessage_=c,this.onReady_=p,this.onDisconnect_=_,this.onKill_=y,this.lastSessionId=I,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Mi("c:"+this.id+":"),this.transportManager_=new bi(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=pi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>M_?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>L_?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Rs in e){const t=e[Rs];t===bl?this.upgradeIfSecondaryHealthy_():t===vl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===wl&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=ai("t",e),i=ai("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Cl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:bl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:El,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=ai("t",e),i=ai("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=ai(Rs,e);if(yl in e){const i=e[yl];if(t===H_){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===El){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===F_?this.onConnectionShutdown_(i):t===vl?this.onReset_(i):t===U_?Vs("Server Error: "+i):t===wl?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Vs("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),bo!==i&&Re("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),pi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(D_))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):pi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(O_))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Cl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Jt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e){this.allowedEvents_=e,this.listeners_={},O(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let a=0;a<s.length;a++)if(s[a].callback===t&&(!i||i===s[a].context)){s.splice(a,1);return}}validateEventType_(e){O(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends uu{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ao()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new vr}getInitialEvent(e){return O(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il=32,Tl=768;class ae{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function re(){return new ae("")}function Q(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Ht(n){return n.pieces_.length-n.pieceNum_}function he(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new ae(n.pieces_,e)}function Io(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function j_(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Ei(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function hu(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new ae(e,0)}function ge(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof ae)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new ae(t,0)}function X(n){return n.pieceNum_>=n.pieces_.length}function Ae(n,e){const t=Q(n),i=Q(e);if(t===null)return e;if(t===i)return Ae(he(n),he(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function B_(n,e){const t=Ei(n,0),i=Ei(e,0);for(let s=0;s<t.length&&s<i.length;s++){const a=an(t[s],i[s]);if(a!==0)return a}return t.length===i.length?0:t.length<i.length?-1:1}function To(n,e){if(Ht(n)!==Ht(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function We(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Ht(n)>Ht(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class V_{constructor(e,t){this.errorPrefix_=t,this.parts_=Ei(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Pr(this.parts_[i]);du(this)}}function q_(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Pr(e),du(n)}function $_(n){const e=n.parts_.pop();n.byteLength_-=Pr(e),n.parts_.length>0&&(n.byteLength_-=1)}function du(n){if(n.byteLength_>Tl)throw new Error(n.errorPrefix_+"has a key path longer than "+Tl+" bytes ("+n.byteLength_+").");if(n.parts_.length>Il)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Il+") or object contains a cycle "+Qt(n))}function Qt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So extends uu{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new So}getInitialEvent(e){return O(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li=1e3,z_=60*5*1e3,Sl=30*1e3,G_=1.3,K_=3e4,Y_="server_kill",Nl=3;class mt extends cu{constructor(e,t,i,s,a,c,p,_){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=a,this.authTokenProvider_=c,this.appCheckTokenProvider_=p,this.authOverride_=_,this.id=mt.nextPersistentConnectionId_++,this.log_=Mi("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=li,this.maxReconnectDelay_=z_,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,_&&!nc())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");So.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&vr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,a={r:s,a:e,b:t};this.log_(we(a)),O(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new nt,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const p=c.d;c.s==="ok"?t.resolve(p):t.reject(p)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(a),t.promise}listen(e,t,i,s){this.initConnection_();const a=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+a),this.listens.has(c)||this.listens.set(c,new Map),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),O(!this.listens.get(c).has(a),"listen() called twice for same path/queryId.");const p={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(c).set(a,p),this.connected_&&this.sendListen_(p)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const a={p:i},c="q";e.tag&&(a.q=t._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest(c,a,p=>{const _=p.d,y=p.s;mt.warnOnListenWarnings_(_,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",p),y!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(y,_))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&st(e,"w")){const i=Nn(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',a=t._path.toString();Re(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${a} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Md(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Sl)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Ld(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const a=s.s,c=s.d||"error";this.authToken_===e&&(a==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(a,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const a={p:e},c="n";s&&(a.q=i,a.t=s),this.sendRequest(c,a)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const a={p:t,d:i};this.log_("onDisconnect "+e,a),this.sendRequest(e,a,c=>{s&&setTimeout(()=>{s(c.s,c.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,a){this.initConnection_();const c={p:t,d:i};a!==void 0&&(c.h=a),this.outstandingPuts_.push({action:e,request:c,onComplete:s}),this.outstandingPutCount_++;const p=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(p):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,a=>{this.log_(t+" response",a),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(a.s,a.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const a=i.d;this.log_("reportStats","Error sending stats: "+a)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+we(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Vs("Unrecognized action received from server: "+we(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){O(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=li,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=li,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>K_&&(this.reconnectDelay_=li),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*G_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+mt.nextConnectionId_++,a=this.lastSessionId;let c=!1,p=null;const _=function(){p?p.close():(c=!0,i())},y=function(C){O(p,"sendRequest call when we're not connected not allowed."),p.sendRequest(C)};this.realtime_={close:_,sendRequest:y};const I=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[C,k]=await Promise.all([this.authTokenProvider_.getToken(I),this.appCheckTokenProvider_.getToken(I)]);c?Ce("getToken() completed but was canceled"):(Ce("getToken() completed. Creating connection."),this.authToken_=C&&C.accessToken,this.appCheckToken_=k&&k.token,p=new W_(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,M=>{Re(M+" ("+this.repoInfo_.toString()+")"),this.interrupt(Y_)},a))}catch(C){this.log_("Failed to get token: "+C),c||(this.repoInfo_.nodeAdmin&&Re(C),_())}}}interrupt(e){Ce("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ce("Resuming connection for reason: "+e),delete this.interruptReasons_[e],cr(this.interruptReasons_)&&(this.reconnectDelay_=li,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(a=>wo(a)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new ae(e).toString();let s;if(this.listens.has(i)){const a=this.listens.get(i);s=a.get(t),a.delete(t),a.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){Ce("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Nl&&(this.reconnectDelay_=Sl,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Ce("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Nl&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Bc.replace(/\./g,"-")]=1,ao()?e["framework.cordova"]=1:tc()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=vr.getInstance().currentlyOnline();return cr(this.interruptReasons_)&&e}}mt.nextPersistentConnectionId_=0;mt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new J(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new J(Rn,e),s=new J(Rn,t);return this.compare(i,s)!==0}minPost(){return J.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zi;class fu extends Hr{static get __EMPTY_NODE(){return Zi}static set __EMPTY_NODE(e){Zi=e}compare(e,t){return an(e.name,t.name)}isDefinedOn(e){throw Un("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return J.MIN}maxPost(){return new J(rn,Zi)}makePost(e,t){return O(typeof e=="string","KeyIndex indexValue must always be a string."),new J(e,Zi)}toString(){return".key"}}const Sn=new fu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,t,i,s,a=null){this.isReverse_=s,this.resultGenerator_=a,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=t?i(e.key,t):1,s&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ee{constructor(e,t,i,s,a){this.key=e,this.value=t,this.color=i??Ee.RED,this.left=s??Le.EMPTY_NODE,this.right=a??Le.EMPTY_NODE}copy(e,t,i,s,a){return new Ee(e??this.key,t??this.value,i??this.color,s??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const a=i(e,s.key);return a<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):a===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Le.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return Le.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ee.RED=!0;Ee.BLACK=!1;class Q_{copy(e,t,i,s,a){return this}insert(e,t,i){return new Ee(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Le{constructor(e,t=Le.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Le(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ee.BLACK,null,null))}remove(e){return new Le(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ee.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new er(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new er(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new er(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new er(this.root_,null,this.comparator_,!0,e)}}Le.EMPTY_NODE=new Q_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X_(n,e){return an(n.name,e.name)}function No(n,e){return an(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $s;function J_(n){$s=n}const pu=function(n){return typeof n=="number"?"number:"+zc(n):"string:"+n},gu=function(n){if(n.isLeafNode()){const e=n.val();O(typeof e=="string"||typeof e=="number"||typeof e=="object"&&st(e,".sv"),"Priority must be a string or number.")}else O(n===$s||n.isEmpty(),"priority of unexpected type.");O(n===$s||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kl;class be{constructor(e,t=be.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,O(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),gu(this.priorityNode_)}static set __childrenNodeConstructor(e){kl=e}static get __childrenNodeConstructor(){return kl}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new be(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:be.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return X(e)?this:Q(e)===".priority"?this.priorityNode_:be.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:be.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=Q(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(O(i!==".priority"||Ht(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,be.__childrenNodeConstructor.EMPTY_NODE.updateChild(he(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+pu(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=zc(this.value_):e+=this.value_,this.lazyHash_=qc(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===be.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof be.__childrenNodeConstructor?-1:(O(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=be.VALUE_TYPE_ORDER.indexOf(t),a=be.VALUE_TYPE_ORDER.indexOf(i);return O(s>=0,"Unknown leaf type: "+t),O(a>=0,"Unknown leaf type: "+i),s===a?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}be.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _u,mu;function Z_(n){_u=n}function em(n){mu=n}class tm extends Hr{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),a=i.compareTo(s);return a===0?an(e.name,t.name):a}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return J.MIN}maxPost(){return new J(rn,new be("[PRIORITY-POST]",mu))}makePost(e,t){const i=_u(e);return new J(t,new be("[PRIORITY-POST]",i))}toString(){return".priority"}}const _e=new tm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm=Math.log(2);class im{constructor(e){const t=a=>parseInt(Math.log(a)/nm,10),i=a=>parseInt(Array(a+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const wr=function(n,e,t,i){n.sort(e);const s=function(_,y){const I=y-_;let C,k;if(I===0)return null;if(I===1)return C=n[_],k=t?t(C):C,new Ee(k,C.node,Ee.BLACK,null,null);{const M=parseInt(I/2,10)+_,P=s(_,M),F=s(M+1,y);return C=n[M],k=t?t(C):C,new Ee(k,C.node,Ee.BLACK,P,F)}},a=function(_){let y=null,I=null,C=n.length;const k=function(P,F){const ue=C-P,B=C;C-=P;const ot=s(ue+1,B),Ke=n[ue],Be=t?t(Ke):Ke;M(new Ee(Be,Ke.node,F,null,ot))},M=function(P){y?(y.left=P,y=P):(I=P,y=P)};for(let P=0;P<_.count;++P){const F=_.nextBitIsOne(),ue=Math.pow(2,_.count-(P+1));F?k(ue,Ee.BLACK):(k(ue,Ee.BLACK),k(ue,Ee.RED))}return I},c=new im(n.length),p=a(c);return new Le(i||e,p)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xs;const vn={};class _t{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return O(vn&&_e,"ChildrenNode.ts has not been loaded"),xs=xs||new _t({".priority":vn},{".priority":_e}),xs}get(e){const t=Nn(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Le?t:null}hasIndex(e){return st(this.indexSet_,e.toString())}addIndex(e,t){O(e!==Sn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const a=t.getIterator(J.Wrap);let c=a.getNext();for(;c;)s=s||e.isDefinedOn(c.node),i.push(c),c=a.getNext();let p;s?p=wr(i,e.getCompare()):p=vn;const _=e.toString(),y=Object.assign({},this.indexSet_);y[_]=e;const I=Object.assign({},this.indexes_);return I[_]=p,new _t(I,y)}addToIndexes(e,t){const i=ur(this.indexes_,(s,a)=>{const c=Nn(this.indexSet_,a);if(O(c,"Missing index implementation for "+a),s===vn)if(c.isDefinedOn(e.node)){const p=[],_=t.getIterator(J.Wrap);let y=_.getNext();for(;y;)y.name!==e.name&&p.push(y),y=_.getNext();return p.push(e),wr(p,c.getCompare())}else return vn;else{const p=t.get(e.name);let _=s;return p&&(_=_.remove(new J(e.name,p))),_.insert(e,e.node)}});return new _t(i,this.indexSet_)}removeFromIndexes(e,t){const i=ur(this.indexes_,s=>{if(s===vn)return s;{const a=t.get(e.name);return a?s.remove(new J(e.name,a)):s}});return new _t(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ci;class q{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&gu(this.priorityNode_),this.children_.isEmpty()&&O(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ci||(ci=new q(new Le(No),null,_t.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ci}updatePriority(e){return this.children_.isEmpty()?this:new q(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?ci:t}}getChild(e){const t=Q(e);return t===null?this:this.getImmediateChild(t).getChild(he(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(O(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new J(e,t);let s,a;t.isEmpty()?(s=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),a=this.indexMap_.addToIndexes(i,this.children_));const c=s.isEmpty()?ci:this.priorityNode_;return new q(s,c,a)}}updateChild(e,t){const i=Q(e);if(i===null)return t;{O(Q(e)!==".priority"||Ht(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(he(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,a=!0;if(this.forEachChild(_e,(c,p)=>{t[c]=p.val(e),i++,a&&q.INTEGER_REGEXP_.test(c)?s=Math.max(s,Number(c)):a=!1}),!e&&a&&s<2*i){const c=[];for(const p in t)c[p]=t[p];return c}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+pu(this.getPriority().val())+":"),this.forEachChild(_e,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":qc(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const a=s.getPredecessorKey(new J(e,t));return a?a.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new J(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new J(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,J.Wrap);let a=s.peek();for(;a!=null&&t.compare(a,e)<0;)s.getNext(),a=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,J.Wrap);let a=s.peek();for(;a!=null&&t.compare(a,e)>0;)s.getNext(),a=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Fi?-1:0}withIndex(e){if(e===Sn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new q(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Sn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(_e),s=t.getIterator(_e);let a=i.getNext(),c=s.getNext();for(;a&&c;){if(a.name!==c.name||!a.node.equals(c.node))return!1;a=i.getNext(),c=s.getNext()}return a===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===Sn?null:this.indexMap_.get(e.toString())}}q.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class rm extends q{constructor(){super(new Le(No),q.EMPTY_NODE,_t.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return q.EMPTY_NODE}isEmpty(){return!1}}const Fi=new rm;Object.defineProperties(J,{MIN:{value:new J(Rn,q.EMPTY_NODE)},MAX:{value:new J(rn,Fi)}});fu.__EMPTY_NODE=q.EMPTY_NODE;be.__childrenNodeConstructor=q;J_(Fi);em(Fi);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm=!0;function ye(n,e=null){if(n===null)return q.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),O(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new be(t,ye(e))}if(!(n instanceof Array)&&sm){const t=[];let i=!1;if(Ie(n,(c,p)=>{if(c.substring(0,1)!=="."){const _=ye(p);_.isEmpty()||(i=i||!_.getPriority().isEmpty(),t.push(new J(c,_)))}}),t.length===0)return q.EMPTY_NODE;const a=wr(t,X_,c=>c.name,No);if(i){const c=wr(t,_e.getCompare());return new q(a,ye(e),new _t({".priority":c},{".priority":_e}))}else return new q(a,ye(e),_t.Default)}else{let t=q.EMPTY_NODE;return Ie(n,(i,s)=>{if(st(n,i)&&i.substring(0,1)!=="."){const a=ye(s);(a.isLeafNode()||!a.isEmpty())&&(t=t.updateImmediateChild(i,a))}}),t.updatePriority(ye(e))}}Z_(ye);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om extends Hr{constructor(e){super(),this.indexPath_=e,O(!X(e)&&Q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),a=i.compareTo(s);return a===0?an(e.name,t.name):a}makePost(e,t){const i=ye(e),s=q.EMPTY_NODE.updateChild(this.indexPath_,i);return new J(t,s)}maxPost(){const e=q.EMPTY_NODE.updateChild(this.indexPath_,Fi);return new J(rn,e)}toString(){return Ei(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am extends Hr{compare(e,t){const i=e.node.compareTo(t.node);return i===0?an(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return J.MIN}maxPost(){return J.MAX}makePost(e,t){const i=ye(e);return new J(t,i)}toString(){return".value"}}const lm=new am;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(n){return{type:"value",snapshotNode:n}}function xn(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Ci(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Ii(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function cm(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e){this.index_=e}updateChild(e,t,i,s,a,c){O(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const p=e.getImmediateChild(t);return p.getChild(s).equals(i.getChild(s))&&p.isEmpty()===i.isEmpty()||(c!=null&&(i.isEmpty()?e.hasChild(t)?c.trackChildChange(Ci(t,p)):O(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):p.isEmpty()?c.trackChildChange(xn(t,i)):c.trackChildChange(Ii(t,i,p))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(_e,(s,a)=>{t.hasChild(s)||i.trackChildChange(Ci(s,a))}),t.isLeafNode()||t.forEachChild(_e,(s,a)=>{if(e.hasChild(s)){const c=e.getImmediateChild(s);c.equals(a)||i.trackChildChange(Ii(s,a,c))}else i.trackChildChange(xn(s,a))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?q.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this.indexedFilter_=new ko(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ti.getStartPost_(e),this.endPost_=Ti.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,a,c){return this.matches(new J(t,i))||(i=q.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,a,c)}updateFullNode(e,t,i){t.isLeafNode()&&(t=q.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(q.EMPTY_NODE);const a=this;return t.forEachChild(_e,(c,p)=>{a.matches(new J(c,p))||(s=s.updateImmediateChild(c,q.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Ti(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,a,c){return this.rangedFilter_.matches(new J(t,i))||(i=q.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,a,c):this.fullLimitUpdateChild_(e,t,i,a,c)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=q.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=q.EMPTY_NODE.withIndex(this.index_);let a;this.reverse_?a=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):a=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let c=0;for(;a.hasNext()&&c<this.limit_;){const p=a.getNext();if(this.withinDirectionalStart(p))if(this.withinDirectionalEnd(p))s=s.updateImmediateChild(p.name,p.node),c++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(q.EMPTY_NODE);let a;this.reverse_?a=s.getReverseIterator(this.index_):a=s.getIterator(this.index_);let c=0;for(;a.hasNext();){const p=a.getNext();c<this.limit_&&this.withinDirectionalStart(p)&&this.withinDirectionalEnd(p)?c++:s=s.updateImmediateChild(p.name,q.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,a){let c;if(this.reverse_){const C=this.index_.getCompare();c=(k,M)=>C(M,k)}else c=this.index_.getCompare();const p=e;O(p.numChildren()===this.limit_,"");const _=new J(t,i),y=this.reverse_?p.getFirstChild(this.index_):p.getLastChild(this.index_),I=this.rangedFilter_.matches(_);if(p.hasChild(t)){const C=p.getImmediateChild(t);let k=s.getChildAfterChild(this.index_,y,this.reverse_);for(;k!=null&&(k.name===t||p.hasChild(k.name));)k=s.getChildAfterChild(this.index_,k,this.reverse_);const M=k==null?1:c(k,_);if(I&&!i.isEmpty()&&M>=0)return a!=null&&a.trackChildChange(Ii(t,i,C)),p.updateImmediateChild(t,i);{a!=null&&a.trackChildChange(Ci(t,C));const F=p.updateImmediateChild(t,q.EMPTY_NODE);return k!=null&&this.rangedFilter_.matches(k)?(a!=null&&a.trackChildChange(xn(k.name,k.node)),F.updateImmediateChild(k.name,k.node)):F}}else return i.isEmpty()?e:I&&c(y,_)>=0?(a!=null&&(a.trackChildChange(Ci(y.name,y.node)),a.trackChildChange(xn(t,i))),p.updateImmediateChild(t,i).updateImmediateChild(y.name,q.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=_e}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return O(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return O(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Rn}hasEnd(){return this.endSet_}getIndexEndValue(){return O(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return O(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:rn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return O(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===_e}copy(){const e=new Ao;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function hm(n){return n.loadsAllData()?new ko(n.getIndex()):n.hasLimit()?new um(n):new Ti(n)}function Al(n){const e={};if(n.isDefault())return e;let t;if(n.index_===_e?t="$priority":n.index_===lm?t="$value":n.index_===Sn?t="$key":(O(n.index_ instanceof om,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=we(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=we(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+we(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=we(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+we(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Rl(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==_e&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br extends cu{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Mi("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(O(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);const c=br.getListenId_(e,i),p={};this.listens_[c]=p;const _=Al(e._queryParams);this.restRequest_(a+".json",_,(y,I)=>{let C=I;if(y===404&&(C=null,y=null),y===null&&this.onDataUpdate_(a,C,!1,i),Nn(this.listens_,c)===p){let k;y?y===401?k="permission_denied":k="rest_error:"+y:k="ok",s(k,null)}})}unlisten(e,t){const i=br.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Al(e._queryParams),i=e._path.toString(),s=new nt;return this.restRequest_(i+".json",t,(a,c)=>{let p=c;a===404&&(p=null,a=null),a===null?(this.onDataUpdate_(i,p,!1,null),s.resolve(p)):s.reject(new Error(p))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,a])=>{s&&s.accessToken&&(t.auth=s.accessToken),a&&a.token&&(t.ac=a.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Hn(t);this.log_("Sending REST request for "+c);const p=new XMLHttpRequest;p.onreadystatechange=()=>{if(i&&p.readyState===4){this.log_("REST Response for "+c+" received. status:",p.status,"response:",p.responseText);let _=null;if(p.status>=200&&p.status<300){try{_=yi(p.responseText)}catch{Re("Failed to parse JSON response for "+c+": "+p.responseText)}i(null,_)}else p.status!==401&&p.status!==404&&Re("Got unsuccessful REST response for "+c+" Status: "+p.status),i(p.status);i=null}},p.open("GET",c,!0),p.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(){this.rootNode_=q.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(){return{value:null,children:new Map}}function Vn(n,e,t){if(X(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=Q(e);n.children.has(i)||n.children.set(i,Er());const s=n.children.get(i);e=he(e),Vn(s,e,t)}}function zs(n,e){if(X(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(_e,(i,s)=>{Vn(n,new ae(i),s)}),zs(n,e)}}else if(n.children.size>0){const t=Q(e);return e=he(e),n.children.has(t)&&zs(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function Gs(n,e,t){n.value!==null?t(e,n.value):fm(n,(i,s)=>{const a=new ae(e.toString()+"/"+i);Gs(s,a,t)})}function fm(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Ie(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl=10*1e3,gm=30*1e3,_m=5*60*1e3;class mm{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new pm(e);const i=xl+(gm-xl)*Math.random();pi(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;Ie(e,(s,a)=>{a>0&&st(this.statsToReport_,s)&&(t[s]=a,i=!0)}),i&&this.server_.reportStats(t),pi(this.reportStats_.bind(this),Math.floor(Math.random()*2*_m))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ze||(ze={}));function Ro(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function xo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Po(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=ze.ACK_USER_WRITE,this.source=Ro()}operationForChild(e){if(X(this.path)){if(this.affectedTree.value!=null)return O(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ae(e));return new Cr(re(),t,this.revert)}}else return O(Q(this.path)===e,"operationForChild called for unrelated child."),new Cr(he(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,t){this.source=e,this.path=t,this.type=ze.LISTEN_COMPLETE}operationForChild(e){return X(this.path)?new Si(this.source,re()):new Si(this.source,he(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=ze.OVERWRITE}operationForChild(e){return X(this.path)?new sn(this.source,re(),this.snap.getImmediateChild(e)):new sn(this.source,he(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=ze.MERGE}operationForChild(e){if(X(this.path)){const t=this.children.subtree(new ae(e));return t.isEmpty()?null:t.value?new sn(this.source,re(),t.value):new Pn(this.source,re(),t)}else return O(Q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Pn(this.source,he(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(X(e))return this.isFullyInitialized()&&!this.filtered_;const t=Q(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function vm(n,e,t,i){const s=[],a=[];return e.forEach(c=>{c.type==="child_changed"&&n.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&a.push(cm(c.childName,c.snapshotNode))}),ui(n,s,"child_removed",e,i,t),ui(n,s,"child_added",e,i,t),ui(n,s,"child_moved",a,i,t),ui(n,s,"child_changed",e,i,t),ui(n,s,"value",e,i,t),s}function ui(n,e,t,i,s,a){const c=i.filter(p=>p.type===t);c.sort((p,_)=>bm(n,p,_)),c.forEach(p=>{const _=wm(n,p,a);s.forEach(y=>{y.respondsTo(p.type)&&e.push(y.createEvent(_,n.query_))})})}function wm(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function bm(n,e,t){if(e.childName==null||t.childName==null)throw Un("Should only compare child_ events.");const i=new J(e.childName,e.snapshotNode),s=new J(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(n,e){return{eventCache:n,serverCache:e}}function gi(n,e,t,i){return Wr(new Wt(e,t,i),n.serverCache)}function vu(n,e,t,i){return Wr(n.eventCache,new Wt(e,t,i))}function Ir(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function on(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ps;const Em=()=>(Ps||(Ps=new Le(o_)),Ps);class fe{constructor(e,t=Em()){this.value=e,this.children=t}static fromObject(e){let t=new fe(null);return Ie(e,(i,s)=>{t=t.set(new ae(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:re(),value:this.value};if(X(e))return null;{const i=Q(e),s=this.children.get(i);if(s!==null){const a=s.findRootMostMatchingPathAndValue(he(e),t);return a!=null?{path:ge(new ae(i),a.path),value:a.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(X(e))return this;{const t=Q(e),i=this.children.get(t);return i!==null?i.subtree(he(e)):new fe(null)}}set(e,t){if(X(e))return new fe(t,this.children);{const i=Q(e),a=(this.children.get(i)||new fe(null)).set(he(e),t),c=this.children.insert(i,a);return new fe(this.value,c)}}remove(e){if(X(e))return this.children.isEmpty()?new fe(null):new fe(null,this.children);{const t=Q(e),i=this.children.get(t);if(i){const s=i.remove(he(e));let a;return s.isEmpty()?a=this.children.remove(t):a=this.children.insert(t,s),this.value===null&&a.isEmpty()?new fe(null):new fe(this.value,a)}else return this}}get(e){if(X(e))return this.value;{const t=Q(e),i=this.children.get(t);return i?i.get(he(e)):null}}setTree(e,t){if(X(e))return t;{const i=Q(e),a=(this.children.get(i)||new fe(null)).setTree(he(e),t);let c;return a.isEmpty()?c=this.children.remove(i):c=this.children.insert(i,a),new fe(this.value,c)}}fold(e){return this.fold_(re(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,a)=>{i[s]=a.fold_(ge(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,re(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(X(e))return null;{const a=Q(e),c=this.children.get(a);return c?c.findOnPath_(he(e),ge(t,a),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,re(),t)}foreachOnPath_(e,t,i){if(X(e))return this;{this.value&&i(t,this.value);const s=Q(e),a=this.children.get(s);return a?a.foreachOnPath_(he(e),ge(t,s),i):new fe(null)}}foreach(e){this.foreach_(re(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(ge(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.writeTree_=e}static empty(){return new Ge(new fe(null))}}function _i(n,e,t){if(X(e))return new Ge(new fe(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let a=i.value;const c=Ae(s,e);return a=a.updateChild(c,t),new Ge(n.writeTree_.set(s,a))}else{const s=new fe(t),a=n.writeTree_.setTree(e,s);return new Ge(a)}}}function Ks(n,e,t){let i=n;return Ie(t,(s,a)=>{i=_i(i,ge(e,s),a)}),i}function Pl(n,e){if(X(e))return Ge.empty();{const t=n.writeTree_.setTree(e,new fe(null));return new Ge(t)}}function Ys(n,e){return ln(n,e)!=null}function ln(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Ae(t.path,e)):null}function Dl(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(_e,(i,s)=>{e.push(new J(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new J(i,s.value))}),e}function Mt(n,e){if(X(e))return n;{const t=ln(n,e);return t!=null?new Ge(new fe(t)):new Ge(n.writeTree_.subtree(e))}}function Qs(n){return n.writeTree_.isEmpty()}function Dn(n,e){return wu(re(),n.writeTree_,e)}function wu(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,a)=>{s===".priority"?(O(a.value!==null,"Priority writes must always be leaf nodes"),i=a.value):t=wu(ge(n,s),a,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(ge(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(n,e){return Iu(e,n)}function Cm(n,e,t,i,s){O(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=_i(n.visibleWrites,e,t)),n.lastWriteId=i}function Im(n,e,t,i){O(i>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:i,visible:!0}),n.visibleWrites=Ks(n.visibleWrites,e,t),n.lastWriteId=i}function Tm(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function Sm(n,e){const t=n.allWrites.findIndex(p=>p.writeId===e);O(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,a=!1,c=n.allWrites.length-1;for(;s&&c>=0;){const p=n.allWrites[c];p.visible&&(c>=t&&Nm(p,i.path)?s=!1:We(i.path,p.path)&&(a=!0)),c--}if(s){if(a)return km(n),!0;if(i.snap)n.visibleWrites=Pl(n.visibleWrites,i.path);else{const p=i.children;Ie(p,_=>{n.visibleWrites=Pl(n.visibleWrites,ge(i.path,_))})}return!0}else return!1}function Nm(n,e){if(n.snap)return We(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&We(ge(n.path,t),e))return!0;return!1}function km(n){n.visibleWrites=bu(n.allWrites,Am,re()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Am(n){return n.visible}function bu(n,e,t){let i=Ge.empty();for(let s=0;s<n.length;++s){const a=n[s];if(e(a)){const c=a.path;let p;if(a.snap)We(t,c)?(p=Ae(t,c),i=_i(i,p,a.snap)):We(c,t)&&(p=Ae(c,t),i=_i(i,re(),a.snap.getChild(p)));else if(a.children){if(We(t,c))p=Ae(t,c),i=Ks(i,p,a.children);else if(We(c,t))if(p=Ae(c,t),X(p))i=Ks(i,re(),a.children);else{const _=Nn(a.children,Q(p));if(_){const y=_.getChild(he(p));i=_i(i,re(),y)}}}else throw Un("WriteRecord should have .snap or .children")}}return i}function Eu(n,e,t,i,s){if(!i&&!s){const a=ln(n.visibleWrites,e);if(a!=null)return a;{const c=Mt(n.visibleWrites,e);if(Qs(c))return t;if(t==null&&!Ys(c,re()))return null;{const p=t||q.EMPTY_NODE;return Dn(c,p)}}}else{const a=Mt(n.visibleWrites,e);if(!s&&Qs(a))return t;if(!s&&t==null&&!Ys(a,re()))return null;{const c=function(y){return(y.visible||s)&&(!i||!~i.indexOf(y.writeId))&&(We(y.path,e)||We(e,y.path))},p=bu(n.allWrites,c,e),_=t||q.EMPTY_NODE;return Dn(p,_)}}}function Rm(n,e,t){let i=q.EMPTY_NODE;const s=ln(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(_e,(a,c)=>{i=i.updateImmediateChild(a,c)}),i;if(t){const a=Mt(n.visibleWrites,e);return t.forEachChild(_e,(c,p)=>{const _=Dn(Mt(a,new ae(c)),p);i=i.updateImmediateChild(c,_)}),Dl(a).forEach(c=>{i=i.updateImmediateChild(c.name,c.node)}),i}else{const a=Mt(n.visibleWrites,e);return Dl(a).forEach(c=>{i=i.updateImmediateChild(c.name,c.node)}),i}}function xm(n,e,t,i,s){O(i||s,"Either existingEventSnap or existingServerSnap must exist");const a=ge(e,t);if(Ys(n.visibleWrites,a))return null;{const c=Mt(n.visibleWrites,a);return Qs(c)?s.getChild(t):Dn(c,s.getChild(t))}}function Pm(n,e,t,i){const s=ge(e,t),a=ln(n.visibleWrites,s);if(a!=null)return a;if(i.isCompleteForChild(t)){const c=Mt(n.visibleWrites,s);return Dn(c,i.getNode().getImmediateChild(t))}else return null}function Dm(n,e){return ln(n.visibleWrites,e)}function Om(n,e,t,i,s,a,c){let p;const _=Mt(n.visibleWrites,e),y=ln(_,re());if(y!=null)p=y;else if(t!=null)p=Dn(_,t);else return[];if(p=p.withIndex(c),!p.isEmpty()&&!p.isLeafNode()){const I=[],C=c.getCompare(),k=a?p.getReverseIteratorFrom(i,c):p.getIteratorFrom(i,c);let M=k.getNext();for(;M&&I.length<s;)C(M,i)!==0&&I.push(M),M=k.getNext();return I}else return[]}function Lm(){return{visibleWrites:Ge.empty(),allWrites:[],lastWriteId:-1}}function Tr(n,e,t,i){return Eu(n.writeTree,n.treePath,e,t,i)}function Do(n,e){return Rm(n.writeTree,n.treePath,e)}function Ol(n,e,t,i){return xm(n.writeTree,n.treePath,e,t,i)}function Sr(n,e){return Dm(n.writeTree,ge(n.treePath,e))}function Mm(n,e,t,i,s,a){return Om(n.writeTree,n.treePath,e,t,i,s,a)}function Oo(n,e,t){return Pm(n.writeTree,n.treePath,e,t)}function Cu(n,e){return Iu(ge(n.treePath,e),n.writeTree)}function Iu(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;O(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),O(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const a=s.type;if(t==="child_added"&&a==="child_removed")this.changeMap.set(i,Ii(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&a==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&a==="child_changed")this.changeMap.set(i,Ci(i,s.oldSnap));else if(t==="child_changed"&&a==="child_added")this.changeMap.set(i,xn(i,e.snapshotNode));else if(t==="child_changed"&&a==="child_changed")this.changeMap.set(i,Ii(i,e.snapshotNode,s.oldSnap));else throw Un("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const Tu=new Um;class Lo{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Wt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Oo(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:on(this.viewCache_),a=Mm(this.writes_,s,t,1,i,e);return a.length===0?null:a[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(n){return{filter:n}}function Wm(n,e){O(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),O(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function jm(n,e,t,i,s){const a=new Fm;let c,p;if(t.type===ze.OVERWRITE){const y=t;y.source.fromUser?c=Xs(n,e,y.path,y.snap,i,s,a):(O(y.source.fromServer,"Unknown source."),p=y.source.tagged||e.serverCache.isFiltered()&&!X(y.path),c=Nr(n,e,y.path,y.snap,i,s,p,a))}else if(t.type===ze.MERGE){const y=t;y.source.fromUser?c=Vm(n,e,y.path,y.children,i,s,a):(O(y.source.fromServer,"Unknown source."),p=y.source.tagged||e.serverCache.isFiltered(),c=Js(n,e,y.path,y.children,i,s,p,a))}else if(t.type===ze.ACK_USER_WRITE){const y=t;y.revert?c=zm(n,e,y.path,i,s,a):c=qm(n,e,y.path,y.affectedTree,i,s,a)}else if(t.type===ze.LISTEN_COMPLETE)c=$m(n,e,t.path,i,a);else throw Un("Unknown operation type: "+t.type);const _=a.getChanges();return Bm(e,c,_),{viewCache:c,changes:_}}function Bm(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),a=Ir(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(a)||!i.getNode().getPriority().equals(a.getPriority()))&&t.push(yu(Ir(e)))}}function Su(n,e,t,i,s,a){const c=e.eventCache;if(Sr(i,t)!=null)return e;{let p,_;if(X(t))if(O(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const y=on(e),I=y instanceof q?y:q.EMPTY_NODE,C=Do(i,I);p=n.filter.updateFullNode(e.eventCache.getNode(),C,a)}else{const y=Tr(i,on(e));p=n.filter.updateFullNode(e.eventCache.getNode(),y,a)}else{const y=Q(t);if(y===".priority"){O(Ht(t)===1,"Can't have a priority with additional path components");const I=c.getNode();_=e.serverCache.getNode();const C=Ol(i,t,I,_);C!=null?p=n.filter.updatePriority(I,C):p=c.getNode()}else{const I=he(t);let C;if(c.isCompleteForChild(y)){_=e.serverCache.getNode();const k=Ol(i,t,c.getNode(),_);k!=null?C=c.getNode().getImmediateChild(y).updateChild(I,k):C=c.getNode().getImmediateChild(y)}else C=Oo(i,y,e.serverCache);C!=null?p=n.filter.updateChild(c.getNode(),y,C,I,s,a):p=c.getNode()}}return gi(e,p,c.isFullyInitialized()||X(t),n.filter.filtersNodes())}}function Nr(n,e,t,i,s,a,c,p){const _=e.serverCache;let y;const I=c?n.filter:n.filter.getIndexedFilter();if(X(t))y=I.updateFullNode(_.getNode(),i,null);else if(I.filtersNodes()&&!_.isFiltered()){const M=_.getNode().updateChild(t,i);y=I.updateFullNode(_.getNode(),M,null)}else{const M=Q(t);if(!_.isCompleteForPath(t)&&Ht(t)>1)return e;const P=he(t),ue=_.getNode().getImmediateChild(M).updateChild(P,i);M===".priority"?y=I.updatePriority(_.getNode(),ue):y=I.updateChild(_.getNode(),M,ue,P,Tu,null)}const C=vu(e,y,_.isFullyInitialized()||X(t),I.filtersNodes()),k=new Lo(s,C,a);return Su(n,C,t,s,k,p)}function Xs(n,e,t,i,s,a,c){const p=e.eventCache;let _,y;const I=new Lo(s,e,a);if(X(t))y=n.filter.updateFullNode(e.eventCache.getNode(),i,c),_=gi(e,y,!0,n.filter.filtersNodes());else{const C=Q(t);if(C===".priority")y=n.filter.updatePriority(e.eventCache.getNode(),i),_=gi(e,y,p.isFullyInitialized(),p.isFiltered());else{const k=he(t),M=p.getNode().getImmediateChild(C);let P;if(X(k))P=i;else{const F=I.getCompleteChild(C);F!=null?Io(k)===".priority"&&F.getChild(hu(k)).isEmpty()?P=F:P=F.updateChild(k,i):P=q.EMPTY_NODE}if(M.equals(P))_=e;else{const F=n.filter.updateChild(p.getNode(),C,P,k,I,c);_=gi(e,F,p.isFullyInitialized(),n.filter.filtersNodes())}}}return _}function Ll(n,e){return n.eventCache.isCompleteForChild(e)}function Vm(n,e,t,i,s,a,c){let p=e;return i.foreach((_,y)=>{const I=ge(t,_);Ll(e,Q(I))&&(p=Xs(n,p,I,y,s,a,c))}),i.foreach((_,y)=>{const I=ge(t,_);Ll(e,Q(I))||(p=Xs(n,p,I,y,s,a,c))}),p}function Ml(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Js(n,e,t,i,s,a,c,p){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let _=e,y;X(t)?y=i:y=new fe(null).setTree(t,i);const I=e.serverCache.getNode();return y.children.inorderTraversal((C,k)=>{if(I.hasChild(C)){const M=e.serverCache.getNode().getImmediateChild(C),P=Ml(n,M,k);_=Nr(n,_,new ae(C),P,s,a,c,p)}}),y.children.inorderTraversal((C,k)=>{const M=!e.serverCache.isCompleteForChild(C)&&k.value===null;if(!I.hasChild(C)&&!M){const P=e.serverCache.getNode().getImmediateChild(C),F=Ml(n,P,k);_=Nr(n,_,new ae(C),F,s,a,c,p)}}),_}function qm(n,e,t,i,s,a,c){if(Sr(s,t)!=null)return e;const p=e.serverCache.isFiltered(),_=e.serverCache;if(i.value!=null){if(X(t)&&_.isFullyInitialized()||_.isCompleteForPath(t))return Nr(n,e,t,_.getNode().getChild(t),s,a,p,c);if(X(t)){let y=new fe(null);return _.getNode().forEachChild(Sn,(I,C)=>{y=y.set(new ae(I),C)}),Js(n,e,t,y,s,a,p,c)}else return e}else{let y=new fe(null);return i.foreach((I,C)=>{const k=ge(t,I);_.isCompleteForPath(k)&&(y=y.set(I,_.getNode().getChild(k)))}),Js(n,e,t,y,s,a,p,c)}}function $m(n,e,t,i,s){const a=e.serverCache,c=vu(e,a.getNode(),a.isFullyInitialized()||X(t),a.isFiltered());return Su(n,c,t,i,Tu,s)}function zm(n,e,t,i,s,a){let c;if(Sr(i,t)!=null)return e;{const p=new Lo(i,e,s),_=e.eventCache.getNode();let y;if(X(t)||Q(t)===".priority"){let I;if(e.serverCache.isFullyInitialized())I=Tr(i,on(e));else{const C=e.serverCache.getNode();O(C instanceof q,"serverChildren would be complete if leaf node"),I=Do(i,C)}I=I,y=n.filter.updateFullNode(_,I,a)}else{const I=Q(t);let C=Oo(i,I,e.serverCache);C==null&&e.serverCache.isCompleteForChild(I)&&(C=_.getImmediateChild(I)),C!=null?y=n.filter.updateChild(_,I,C,he(t),p,a):e.eventCache.getNode().hasChild(I)?y=n.filter.updateChild(_,I,q.EMPTY_NODE,he(t),p,a):y=_,y.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=Tr(i,on(e)),c.isLeafNode()&&(y=n.filter.updateFullNode(y,c,a)))}return c=e.serverCache.isFullyInitialized()||Sr(i,re())!=null,gi(e,y,c,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new ko(i.getIndex()),a=hm(i);this.processor_=Hm(a);const c=t.serverCache,p=t.eventCache,_=s.updateFullNode(q.EMPTY_NODE,c.getNode(),null),y=a.updateFullNode(q.EMPTY_NODE,p.getNode(),null),I=new Wt(_,c.isFullyInitialized(),s.filtersNodes()),C=new Wt(y,p.isFullyInitialized(),a.filtersNodes());this.viewCache_=Wr(C,I),this.eventGenerator_=new ym(this.query_)}get query(){return this.query_}}function Km(n){return n.viewCache_.serverCache.getNode()}function Ym(n){return Ir(n.viewCache_)}function Qm(n,e){const t=on(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!X(e)&&!t.getImmediateChild(Q(e)).isEmpty())?t.getChild(e):null}function Fl(n){return n.eventRegistrations_.length===0}function Xm(n,e){n.eventRegistrations_.push(e)}function Ul(n,e,t){const i=[];if(t){O(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(a=>{const c=a.createCancelEvent(t,s);c&&i.push(c)})}if(e){let s=[];for(let a=0;a<n.eventRegistrations_.length;++a){const c=n.eventRegistrations_[a];if(!c.matches(e))s.push(c);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(a+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function Hl(n,e,t,i){e.type===ze.MERGE&&e.source.queryId!==null&&(O(on(n.viewCache_),"We should always have a full cache before handling merges"),O(Ir(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,a=jm(n.processor_,s,e,t,i);return Wm(n.processor_,a.viewCache),O(a.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=a.viewCache,Nu(n,a.changes,a.viewCache.eventCache.getNode(),null)}function Jm(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(_e,(a,c)=>{i.push(xn(a,c))}),t.isFullyInitialized()&&i.push(yu(t.getNode())),Nu(n,i,t.getNode(),e)}function Nu(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return vm(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kr;class ku{constructor(){this.views=new Map}}function Zm(n){O(!kr,"__referenceConstructor has already been defined"),kr=n}function ey(){return O(kr,"Reference.ts has not been loaded"),kr}function ty(n){return n.views.size===0}function Mo(n,e,t,i){const s=e.source.queryId;if(s!==null){const a=n.views.get(s);return O(a!=null,"SyncTree gave us an op for an invalid query."),Hl(a,e,t,i)}else{let a=[];for(const c of n.views.values())a=a.concat(Hl(c,e,t,i));return a}}function Au(n,e,t,i,s){const a=e._queryIdentifier,c=n.views.get(a);if(!c){let p=Tr(t,s?i:null),_=!1;p?_=!0:i instanceof q?(p=Do(t,i),_=!1):(p=q.EMPTY_NODE,_=!1);const y=Wr(new Wt(p,_,!1),new Wt(i,s,!1));return new Gm(e,y)}return c}function ny(n,e,t,i,s,a){const c=Au(n,e,i,s,a);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,c),Xm(c,t),Jm(c,t)}function iy(n,e,t,i){const s=e._queryIdentifier,a=[];let c=[];const p=jt(n);if(s==="default")for(const[_,y]of n.views.entries())c=c.concat(Ul(y,t,i)),Fl(y)&&(n.views.delete(_),y.query._queryParams.loadsAllData()||a.push(y.query));else{const _=n.views.get(s);_&&(c=c.concat(Ul(_,t,i)),Fl(_)&&(n.views.delete(s),_.query._queryParams.loadsAllData()||a.push(_.query)))}return p&&!jt(n)&&a.push(new(ey())(e._repo,e._path)),{removed:a,events:c}}function Ru(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Ft(n,e){let t=null;for(const i of n.views.values())t=t||Qm(i,e);return t}function xu(n,e){if(e._queryParams.loadsAllData())return Br(n);{const i=e._queryIdentifier;return n.views.get(i)}}function Pu(n,e){return xu(n,e)!=null}function jt(n){return Br(n)!=null}function Br(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ar;function ry(n){O(!Ar,"__referenceConstructor has already been defined"),Ar=n}function sy(){return O(Ar,"Reference.ts has not been loaded"),Ar}let oy=1;class Wl{constructor(e){this.listenProvider_=e,this.syncPointTree_=new fe(null),this.pendingWriteTree_=Lm(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Du(n,e,t,i,s){return Cm(n.pendingWriteTree_,e,t,i,s),s?qn(n,new sn(Ro(),e,t)):[]}function ay(n,e,t,i){Im(n.pendingWriteTree_,e,t,i);const s=fe.fromObject(t);return qn(n,new Pn(Ro(),e,s))}function xt(n,e,t=!1){const i=Tm(n.pendingWriteTree_,e);if(Sm(n.pendingWriteTree_,e)){let a=new fe(null);return i.snap!=null?a=a.set(re(),!0):Ie(i.children,c=>{a=a.set(new ae(c),!0)}),qn(n,new Cr(i.path,a,t))}else return[]}function Ui(n,e,t){return qn(n,new sn(xo(),e,t))}function ly(n,e,t){const i=fe.fromObject(t);return qn(n,new Pn(xo(),e,i))}function cy(n,e){return qn(n,new Si(xo(),e))}function uy(n,e,t){const i=Uo(n,t);if(i){const s=Ho(i),a=s.path,c=s.queryId,p=Ae(a,e),_=new Si(Po(c),p);return Wo(n,a,_)}else return[]}function Rr(n,e,t,i,s=!1){const a=e._path,c=n.syncPointTree_.get(a);let p=[];if(c&&(e._queryIdentifier==="default"||Pu(c,e))){const _=iy(c,e,t,i);ty(c)&&(n.syncPointTree_=n.syncPointTree_.remove(a));const y=_.removed;if(p=_.events,!s){const I=y.findIndex(k=>k._queryParams.loadsAllData())!==-1,C=n.syncPointTree_.findOnPath(a,(k,M)=>jt(M));if(I&&!C){const k=n.syncPointTree_.subtree(a);if(!k.isEmpty()){const M=fy(k);for(let P=0;P<M.length;++P){const F=M[P],ue=F.query,B=Fu(n,F);n.listenProvider_.startListening(mi(ue),Ni(n,ue),B.hashFn,B.onComplete)}}}!C&&y.length>0&&!i&&(I?n.listenProvider_.stopListening(mi(e),null):y.forEach(k=>{const M=n.queryToTagMap.get(Vr(k));n.listenProvider_.stopListening(mi(k),M)}))}py(n,y)}return p}function Ou(n,e,t,i){const s=Uo(n,i);if(s!=null){const a=Ho(s),c=a.path,p=a.queryId,_=Ae(c,e),y=new sn(Po(p),_,t);return Wo(n,c,y)}else return[]}function hy(n,e,t,i){const s=Uo(n,i);if(s){const a=Ho(s),c=a.path,p=a.queryId,_=Ae(c,e),y=fe.fromObject(t),I=new Pn(Po(p),_,y);return Wo(n,c,I)}else return[]}function Zs(n,e,t,i=!1){const s=e._path;let a=null,c=!1;n.syncPointTree_.foreachOnPath(s,(k,M)=>{const P=Ae(k,s);a=a||Ft(M,P),c=c||jt(M)});let p=n.syncPointTree_.get(s);p?(c=c||jt(p),a=a||Ft(p,re())):(p=new ku,n.syncPointTree_=n.syncPointTree_.set(s,p));let _;a!=null?_=!0:(_=!1,a=q.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((M,P)=>{const F=Ft(P,re());F&&(a=a.updateImmediateChild(M,F))}));const y=Pu(p,e);if(!y&&!e._queryParams.loadsAllData()){const k=Vr(e);O(!n.queryToTagMap.has(k),"View does not exist, but we have a tag");const M=gy();n.queryToTagMap.set(k,M),n.tagToQueryMap.set(M,k)}const I=jr(n.pendingWriteTree_,s);let C=ny(p,e,t,I,a,_);if(!y&&!c&&!i){const k=xu(p,e);C=C.concat(_y(n,e,k))}return C}function Fo(n,e,t){const s=n.pendingWriteTree_,a=n.syncPointTree_.findOnPath(e,(c,p)=>{const _=Ae(c,e),y=Ft(p,_);if(y)return y});return Eu(s,e,a,t,!0)}function dy(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(y,I)=>{const C=Ae(y,t);i=i||Ft(I,C)});let s=n.syncPointTree_.get(t);s?i=i||Ft(s,re()):(s=new ku,n.syncPointTree_=n.syncPointTree_.set(t,s));const a=i!=null,c=a?new Wt(i,!0,!1):null,p=jr(n.pendingWriteTree_,e._path),_=Au(s,e,p,a?c.getNode():q.EMPTY_NODE,a);return Ym(_)}function qn(n,e){return Lu(e,n.syncPointTree_,null,jr(n.pendingWriteTree_,re()))}function Lu(n,e,t,i){if(X(n.path))return Mu(n,e,t,i);{const s=e.get(re());t==null&&s!=null&&(t=Ft(s,re()));let a=[];const c=Q(n.path),p=n.operationForChild(c),_=e.children.get(c);if(_&&p){const y=t?t.getImmediateChild(c):null,I=Cu(i,c);a=a.concat(Lu(p,_,y,I))}return s&&(a=a.concat(Mo(s,n,i,t))),a}}function Mu(n,e,t,i){const s=e.get(re());t==null&&s!=null&&(t=Ft(s,re()));let a=[];return e.children.inorderTraversal((c,p)=>{const _=t?t.getImmediateChild(c):null,y=Cu(i,c),I=n.operationForChild(c);I&&(a=a.concat(Mu(I,p,_,y)))}),s&&(a=a.concat(Mo(s,n,i,t))),a}function Fu(n,e){const t=e.query,i=Ni(n,t);return{hashFn:()=>(Km(e)||q.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?uy(n,t._path,i):cy(n,t._path);{const a=c_(s,t);return Rr(n,t,null,a)}}}}function Ni(n,e){const t=Vr(e);return n.queryToTagMap.get(t)}function Vr(n){return n._path.toString()+"$"+n._queryIdentifier}function Uo(n,e){return n.tagToQueryMap.get(e)}function Ho(n){const e=n.indexOf("$");return O(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new ae(n.substr(0,e))}}function Wo(n,e,t){const i=n.syncPointTree_.get(e);O(i,"Missing sync point for query tag that we're tracking");const s=jr(n.pendingWriteTree_,e);return Mo(i,t,s,null)}function fy(n){return n.fold((e,t,i)=>{if(t&&jt(t))return[Br(t)];{let s=[];return t&&(s=Ru(t)),Ie(i,(a,c)=>{s=s.concat(c)}),s}})}function mi(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(sy())(n._repo,n._path):n}function py(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=Vr(i),a=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(a)}}}function gy(){return oy++}function _y(n,e,t){const i=e._path,s=Ni(n,e),a=Fu(n,t),c=n.listenProvider_.startListening(mi(e),s,a.hashFn,a.onComplete),p=n.syncPointTree_.subtree(i);if(s)O(!jt(p.value),"If we're adding a query, it shouldn't be shadowed");else{const _=p.fold((y,I,C)=>{if(!X(y)&&I&&jt(I))return[Br(I).query];{let k=[];return I&&(k=k.concat(Ru(I).map(M=>M.query))),Ie(C,(M,P)=>{k=k.concat(P)}),k}});for(let y=0;y<_.length;++y){const I=_[y];n.listenProvider_.stopListening(mi(I),Ni(n,I))}}return c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new jo(t)}node(){return this.node_}}class Bo{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ge(this.path_,e);return new Bo(this.syncTree_,t)}node(){return Fo(this.syncTree_,this.path_)}}const my=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},jl=function(n,e,t){if(!n||typeof n!="object")return n;if(O(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return yy(n[".sv"],e,t);if(typeof n[".sv"]=="object")return vy(n[".sv"],e);O(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},yy=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:O(!1,"Unexpected server value: "+n)}},vy=function(n,e,t){n.hasOwnProperty("increment")||O(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&O(!1,"Unexpected increment value: "+i);const s=e.node();if(O(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const c=s.getValue();return typeof c!="number"?i:c+i},Uu=function(n,e,t,i){return Vo(e,new Bo(t,n),i)},Hu=function(n,e,t){return Vo(n,new jo(e),t)};function Vo(n,e,t){const i=n.getPriority().val(),s=jl(i,e.getImmediateChild(".priority"),t);let a;if(n.isLeafNode()){const c=n,p=jl(c.getValue(),e,t);return p!==c.getValue()||s!==c.getPriority().val()?new be(p,ye(s)):n}else{const c=n;return a=c,s!==c.getPriority().val()&&(a=a.updatePriority(new be(s))),c.forEachChild(_e,(p,_)=>{const y=Vo(_,e.getImmediateChild(p),t);y!==_&&(a=a.updateImmediateChild(p,y))}),a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function $o(n,e){let t=e instanceof ae?e:new ae(e),i=n,s=Q(t);for(;s!==null;){const a=Nn(i.node.children,s)||{children:{},childCount:0};i=new qo(s,i,a),t=he(t),s=Q(t)}return i}function $n(n){return n.node.value}function Wu(n,e){n.node.value=e,eo(n)}function ju(n){return n.node.childCount>0}function wy(n){return $n(n)===void 0&&!ju(n)}function qr(n,e){Ie(n.node.children,(t,i)=>{e(new qo(t,n,i))})}function Bu(n,e,t,i){t&&!i&&e(n),qr(n,s=>{Bu(s,e,!0,i)}),t&&i&&e(n)}function by(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Hi(n){return new ae(n.parent===null?n.name:Hi(n.parent)+"/"+n.name)}function eo(n){n.parent!==null&&Ey(n.parent,n.name,n)}function Ey(n,e,t){const i=wy(t),s=st(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,eo(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,eo(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy=/[\[\].#$\/\u0000-\u001F\u007F]/,Iy=/[\[\].#$\u0000-\u001F\u007F]/,Ds=10*1024*1024,zo=function(n){return typeof n=="string"&&n.length!==0&&!Cy.test(n)},Vu=function(n){return typeof n=="string"&&n.length!==0&&!Iy.test(n)},Ty=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Vu(n)},qu=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Ur(n)||n&&typeof n=="object"&&st(n,".sv")},to=function(n,e,t,i){$r(kn(n,"value"),e,t)},$r=function(n,e,t){const i=t instanceof ae?new V_(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Qt(i));if(typeof e=="function")throw new Error(n+"contains a function "+Qt(i)+" with contents = "+e.toString());if(Ur(e))throw new Error(n+"contains "+e.toString()+" "+Qt(i));if(typeof e=="string"&&e.length>Ds/3&&Pr(e)>Ds)throw new Error(n+"contains a string greater than "+Ds+" utf8 bytes "+Qt(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,a=!1;if(Ie(e,(c,p)=>{if(c===".value")s=!0;else if(c!==".priority"&&c!==".sv"&&(a=!0,!zo(c)))throw new Error(n+" contains an invalid key ("+c+") "+Qt(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);q_(i,c),$r(n,p,i),$_(i)}),s&&a)throw new Error(n+' contains ".value" child '+Qt(i)+" in addition to actual children.")}},Sy=function(n,e){let t,i;for(t=0;t<e.length;t++){i=e[t];const a=Ei(i);for(let c=0;c<a.length;c++)if(!(a[c]===".priority"&&c===a.length-1)){if(!zo(a[c]))throw new Error(n+"contains an invalid key ("+a[c]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(B_);let s=null;for(t=0;t<e.length;t++){if(i=e[t],s!==null&&We(s,i))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},$u=function(n,e,t,i){const s=kn(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const a=[];Ie(e,(c,p)=>{const _=new ae(c);if($r(s,p,ge(t,_)),Io(_)===".priority"&&!qu(p))throw new Error(s+"contains an invalid value for '"+_.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");a.push(_)}),Sy(s,a)},Ny=function(n,e,t){if(Ur(e))throw new Error(kn(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!qu(e))throw new Error(kn(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},zu=function(n,e,t,i){if(!Vu(t))throw new Error(kn(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},ky=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),zu(n,e,t)},hi=function(n,e){if(Q(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Ay=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!zo(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Ty(t))throw new Error(kn(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function zr(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],a=s.getPath();t!==null&&!To(a,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:a}),t.events.push(s)}t&&n.eventLists_.push(t)}function Gu(n,e,t){zr(n,t),Ku(n,i=>To(i,e))}function je(n,e,t){zr(n,t),Ku(n,i=>We(i,e)||We(e,i))}function Ku(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const a=s.path;e(a)?(xy(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function xy(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();fi&&Ce("event: "+t.toString()),Bn(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Py="repo_interrupt",Dy=25;class Oy{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Ry,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Er(),this.transactionQueueTree_=new qo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Ly(n,e,t){if(n.stats_=Eo(n.repoInfo_),n.forceRestClient_||f_())n.server_=new br(n.repoInfo_,(i,s,a,c)=>{Bl(n,i,s,a,c)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Vl(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{we(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new mt(n.repoInfo_,e,(i,s,a,c)=>{Bl(n,i,s,a,c)},i=>{Vl(n,i)},i=>{Fy(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=y_(n.repoInfo_,()=>new mm(n.stats_,n.server_)),n.infoData_=new dm,n.infoSyncTree_=new Wl({startListening:(i,s,a,c)=>{let p=[];const _=n.infoData_.getNode(i._path);return _.isEmpty()||(p=Ui(n.infoSyncTree_,i._path,_),setTimeout(()=>{c("ok")},0)),p},stopListening:()=>{}}),Go(n,"connected",!1),n.serverSyncTree_=new Wl({startListening:(i,s,a,c)=>(n.server_.listen(i,a,s,(p,_)=>{const y=c(p,_);je(n.eventQueue_,i._path,y)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function My(n){const t=n.infoData_.getNode(new ae(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Gr(n){return my({timestamp:My(n)})}function Bl(n,e,t,i,s){n.dataUpdateCount++;const a=new ae(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let c=[];if(s)if(i){const _=ur(t,y=>ye(y));c=hy(n.serverSyncTree_,a,_,s)}else{const _=ye(t);c=Ou(n.serverSyncTree_,a,_,s)}else if(i){const _=ur(t,y=>ye(y));c=ly(n.serverSyncTree_,a,_)}else{const _=ye(t);c=Ui(n.serverSyncTree_,a,_)}let p=a;c.length>0&&(p=On(n,a)),je(n.eventQueue_,p,c)}function Vl(n,e){Go(n,"connected",e),e===!1&&jy(n)}function Fy(n,e){Ie(e,(t,i)=>{Go(n,t,i)})}function Go(n,e,t){const i=new ae("/.info/"+e),s=ye(t);n.infoData_.updateSnapshot(i,s);const a=Ui(n.infoSyncTree_,i,s);je(n.eventQueue_,i,a)}function Ko(n){return n.nextWriteId_++}function Uy(n,e,t){const i=dy(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(s=>{const a=ye(s).withIndex(e._queryParams.getIndex());Zs(n.serverSyncTree_,e,t,!0);let c;if(e._queryParams.loadsAllData())c=Ui(n.serverSyncTree_,e._path,a);else{const p=Ni(n.serverSyncTree_,e);c=Ou(n.serverSyncTree_,e._path,a,p)}return je(n.eventQueue_,e._path,c),Rr(n.serverSyncTree_,e,t,null,!0),a},s=>(Wi(n,"get for query "+we(e)+" failed: "+s),Promise.reject(new Error(s))))}function Hy(n,e,t,i,s){Wi(n,"set",{path:e.toString(),value:t,priority:i});const a=Gr(n),c=ye(t,i),p=Fo(n.serverSyncTree_,e),_=Hu(c,p,a),y=Ko(n),I=Du(n.serverSyncTree_,e,_,y,!0);zr(n.eventQueue_,I),n.server_.put(e.toString(),c.val(!0),(k,M)=>{const P=k==="ok";P||Re("set at "+e+" failed: "+k);const F=xt(n.serverSyncTree_,y,!P);je(n.eventQueue_,e,F),Bt(n,s,k,M)});const C=Qo(n,e);On(n,C),je(n.eventQueue_,C,[])}function Wy(n,e,t,i){Wi(n,"update",{path:e.toString(),value:t});let s=!0;const a=Gr(n),c={};if(Ie(t,(p,_)=>{s=!1,c[p]=Uu(ge(e,p),ye(_),n.serverSyncTree_,a)}),s)Ce("update() called with empty data.  Don't do anything."),Bt(n,i,"ok",void 0);else{const p=Ko(n),_=ay(n.serverSyncTree_,e,c,p);zr(n.eventQueue_,_),n.server_.merge(e.toString(),t,(y,I)=>{const C=y==="ok";C||Re("update at "+e+" failed: "+y);const k=xt(n.serverSyncTree_,p,!C),M=k.length>0?On(n,e):e;je(n.eventQueue_,M,k),Bt(n,i,y,I)}),Ie(t,y=>{const I=Qo(n,ge(e,y));On(n,I)}),je(n.eventQueue_,e,[])}}function jy(n){Wi(n,"onDisconnectEvents");const e=Gr(n),t=Er();Gs(n.onDisconnect_,re(),(s,a)=>{const c=Uu(s,a,n.serverSyncTree_,e);Vn(t,s,c)});let i=[];Gs(t,re(),(s,a)=>{i=i.concat(Ui(n.serverSyncTree_,s,a));const c=Qo(n,s);On(n,c)}),n.onDisconnect_=Er(),je(n.eventQueue_,re(),i)}function By(n,e,t){n.server_.onDisconnectCancel(e.toString(),(i,s)=>{i==="ok"&&zs(n.onDisconnect_,e),Bt(n,t,i,s)})}function ql(n,e,t,i){const s=ye(t);n.server_.onDisconnectPut(e.toString(),s.val(!0),(a,c)=>{a==="ok"&&Vn(n.onDisconnect_,e,s),Bt(n,i,a,c)})}function Vy(n,e,t,i,s){const a=ye(t,i);n.server_.onDisconnectPut(e.toString(),a.val(!0),(c,p)=>{c==="ok"&&Vn(n.onDisconnect_,e,a),Bt(n,s,c,p)})}function qy(n,e,t,i){if(cr(t)){Ce("onDisconnect().update() called with empty data.  Don't do anything."),Bt(n,i,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(s,a)=>{s==="ok"&&Ie(t,(c,p)=>{const _=ye(p);Vn(n.onDisconnect_,ge(e,c),_)}),Bt(n,i,s,a)})}function $y(n,e,t){let i;Q(e._path)===".info"?i=Zs(n.infoSyncTree_,e,t):i=Zs(n.serverSyncTree_,e,t),Gu(n.eventQueue_,e._path,i)}function zy(n,e,t){let i;Q(e._path)===".info"?i=Rr(n.infoSyncTree_,e,t):i=Rr(n.serverSyncTree_,e,t),Gu(n.eventQueue_,e._path,i)}function Gy(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Py)}function Wi(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Ce(t,...e)}function Bt(n,e,t,i){e&&Bn(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let a=s;i&&(a+=": "+i);const c=new Error(a);c.code=s,e(c)}})}function Yu(n,e,t){return Fo(n.serverSyncTree_,e,t)||q.EMPTY_NODE}function Yo(n,e=n.transactionQueueTree_){if(e||Kr(n,e),$n(e)){const t=Xu(n,e);O(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&Ky(n,Hi(e),t)}else ju(e)&&qr(e,t=>{Yo(n,t)})}function Ky(n,e,t){const i=t.map(y=>y.currentWriteId),s=Yu(n,e,i);let a=s;const c=s.hash();for(let y=0;y<t.length;y++){const I=t[y];O(I.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),I.status=1,I.retryCount++;const C=Ae(e,I.path);a=a.updateChild(C,I.currentOutputSnapshotRaw)}const p=a.val(!0),_=e;n.server_.put(_.toString(),p,y=>{Wi(n,"transaction put response",{path:_.toString(),status:y});let I=[];if(y==="ok"){const C=[];for(let k=0;k<t.length;k++)t[k].status=2,I=I.concat(xt(n.serverSyncTree_,t[k].currentWriteId)),t[k].onComplete&&C.push(()=>t[k].onComplete(null,!0,t[k].currentOutputSnapshotResolved)),t[k].unwatcher();Kr(n,$o(n.transactionQueueTree_,e)),Yo(n,n.transactionQueueTree_),je(n.eventQueue_,e,I);for(let k=0;k<C.length;k++)Bn(C[k])}else{if(y==="datastale")for(let C=0;C<t.length;C++)t[C].status===3?t[C].status=4:t[C].status=0;else{Re("transaction at "+_.toString()+" failed: "+y);for(let C=0;C<t.length;C++)t[C].status=4,t[C].abortReason=y}On(n,e)}},c)}function On(n,e){const t=Qu(n,e),i=Hi(t),s=Xu(n,t);return Yy(n,s,i),i}function Yy(n,e,t){if(e.length===0)return;const i=[];let s=[];const c=e.filter(p=>p.status===0).map(p=>p.currentWriteId);for(let p=0;p<e.length;p++){const _=e[p],y=Ae(t,_.path);let I=!1,C;if(O(y!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),_.status===4)I=!0,C=_.abortReason,s=s.concat(xt(n.serverSyncTree_,_.currentWriteId,!0));else if(_.status===0)if(_.retryCount>=Dy)I=!0,C="maxretry",s=s.concat(xt(n.serverSyncTree_,_.currentWriteId,!0));else{const k=Yu(n,_.path,c);_.currentInputSnapshot=k;const M=e[p].update(k.val());if(M!==void 0){$r("transaction failed: Data returned ",M,_.path);let P=ye(M);typeof M=="object"&&M!=null&&st(M,".priority")||(P=P.updatePriority(k.getPriority()));const ue=_.currentWriteId,B=Gr(n),ot=Hu(P,k,B);_.currentOutputSnapshotRaw=P,_.currentOutputSnapshotResolved=ot,_.currentWriteId=Ko(n),c.splice(c.indexOf(ue),1),s=s.concat(Du(n.serverSyncTree_,_.path,ot,_.currentWriteId,_.applyLocally)),s=s.concat(xt(n.serverSyncTree_,ue,!0))}else I=!0,C="nodata",s=s.concat(xt(n.serverSyncTree_,_.currentWriteId,!0))}je(n.eventQueue_,t,s),s=[],I&&(e[p].status=2,function(k){setTimeout(k,Math.floor(0))}(e[p].unwatcher),e[p].onComplete&&(C==="nodata"?i.push(()=>e[p].onComplete(null,!1,e[p].currentInputSnapshot)):i.push(()=>e[p].onComplete(new Error(C),!1,null))))}Kr(n,n.transactionQueueTree_);for(let p=0;p<i.length;p++)Bn(i[p]);Yo(n,n.transactionQueueTree_)}function Qu(n,e){let t,i=n.transactionQueueTree_;for(t=Q(e);t!==null&&$n(i)===void 0;)i=$o(i,t),e=he(e),t=Q(e);return i}function Xu(n,e){const t=[];return Ju(n,e,t),t.sort((i,s)=>i.order-s.order),t}function Ju(n,e,t){const i=$n(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);qr(e,s=>{Ju(n,s,t)})}function Kr(n,e){const t=$n(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,Wu(e,t.length>0?t:void 0)}qr(e,i=>{Kr(n,i)})}function Qo(n,e){const t=Hi(Qu(n,e)),i=$o(n.transactionQueueTree_,e);return by(i,s=>{Os(n,s)}),Os(n,i),Bu(i,s=>{Os(n,s)}),t}function Os(n,e){const t=$n(e);if(t){const i=[];let s=[],a=-1;for(let c=0;c<t.length;c++)t[c].status===3||(t[c].status===1?(O(a===c-1,"All SENT items should be at beginning of queue."),a=c,t[c].status=3,t[c].abortReason="set"):(O(t[c].status===0,"Unexpected transaction status in abort"),t[c].unwatcher(),s=s.concat(xt(n.serverSyncTree_,t[c].currentWriteId,!0)),t[c].onComplete&&i.push(t[c].onComplete.bind(null,new Error("set"),!1,null))));a===-1?Wu(e,void 0):t.length=a+1,je(n.eventQueue_,Hi(e),s);for(let c=0;c<i.length;c++)Bn(i[c])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qy(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Xy(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Re(`Invalid query segment '${t}' in query '${n}'`)}return e}const $l=function(n,e){const t=Jy(n),i=t.namespace;t.domain==="firebase.com"&&bt(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&bt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||r_();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new nu(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new ae(t.pathString)}},Jy=function(n){let e="",t="",i="",s="",a="",c=!0,p="https",_=443;if(typeof n=="string"){let y=n.indexOf("//");y>=0&&(p=n.substring(0,y-1),n=n.substring(y+2));let I=n.indexOf("/");I===-1&&(I=n.length);let C=n.indexOf("?");C===-1&&(C=n.length),e=n.substring(0,Math.min(I,C)),I<C&&(s=Qy(n.substring(I,C)));const k=Xy(n.substring(Math.min(n.length,C)));y=e.indexOf(":"),y>=0?(c=p==="https"||p==="wss",_=parseInt(e.substring(y+1),10)):y=e.length;const M=e.slice(0,y);if(M.toLowerCase()==="localhost")t="localhost";else if(M.split(".").length<=2)t=M;else{const P=e.indexOf(".");i=e.substring(0,P).toLowerCase(),t=e.substring(P+1),a=i}"ns"in k&&(a=k.ns)}return{host:e,port:_,domain:t,subdomain:i,secure:c,scheme:p,pathString:s,namespace:a}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+we(this.snapshot.exportVal())}}class ev{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return O(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new nt;return By(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){hi("OnDisconnect.remove",this._path);const e=new nt;return ql(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){hi("OnDisconnect.set",this._path),to("OnDisconnect.set",e,this._path);const t=new nt;return ql(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){hi("OnDisconnect.setWithPriority",this._path),to("OnDisconnect.setWithPriority",e,this._path),Ny("OnDisconnect.setWithPriority",t);const i=new nt;return Vy(this._repo,this._path,e,t,i.wrapCallback(()=>{})),i.promise}update(e){hi("OnDisconnect.update",this._path),$u("OnDisconnect.update",e,this._path);const t=new nt;return qy(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return X(this._path)?null:Io(this._path)}get ref(){return new Et(this._repo,this._path)}get _queryIdentifier(){const e=Rl(this._queryParams),t=wo(e);return t==="{}"?"default":t}get _queryObject(){return Rl(this._queryParams)}isEqual(e){if(e=Me(e),!(e instanceof Xo))return!1;const t=this._repo===e._repo,i=To(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+j_(this._path)}}class Et extends Xo{constructor(e,t){super(e,t,new Ao,!1)}get parent(){const e=hu(this._path);return e===null?null:new Et(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ki{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ae(e),i=Mn(this.ref,e);return new ki(this._node.getChild(t),i,_e)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new ki(s,Mn(this.ref,i),_e)))}hasChild(e){const t=new ae(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ln(n,e){return n=Me(n),n._checkNotDeleted("ref"),e!==void 0?Mn(n._root,e):n._root}function Mn(n,e){return n=Me(n),Q(n._path)===null?ky("child","path",e):zu("child","path",e),new Et(n._repo,ge(n._path,e))}function nv(n){return n=Me(n),new tv(n._repo,n._path)}function no(n,e){n=Me(n),hi("set",n._path),to("set",e,n._path);const t=new nt;return Hy(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function iv(n,e){$u("update",e,n._path);const t=new nt;return Wy(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function eh(n){n=Me(n);const e=new Zu(()=>{}),t=new Yr(e);return Uy(n._repo,n,t).then(i=>new ki(i,new Et(n._repo,n._path),n._queryParams.getIndex()))}class Yr{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new Zy("value",this,new ki(e.snapshotNode,new Et(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ev(this,e,t):null}matches(e){return e instanceof Yr?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function rv(n,e,t,i,s){const a=new Zu(t,void 0),c=new Yr(a);return $y(n._repo,n,c),()=>zy(n._repo,n,c)}function sv(n,e,t,i){return rv(n,"value",e)}Zm(Et);ry(Et);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov="FIREBASE_DATABASE_EMULATOR_HOST",io={};let av=!1;function lv(n,e,t,i){n.repoInfo_=new nu(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function cv(n,e,t,i,s){let a=i||n.options.databaseURL;a===void 0&&(n.options.projectId||bt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ce("Using default host for project ",n.options.projectId),a=`${n.options.projectId}-default-rtdb.firebaseio.com`);let c=$l(a,s),p=c.repoInfo,_;typeof process<"u"&&dl&&(_=dl[ov]),_?(a=`http://${_}?ns=${p.namespace}`,c=$l(a,s),p=c.repoInfo):c.repoInfo.secure;const y=new g_(n.name,n.options,e);Ay("Invalid Firebase Database URL",c),X(c.path)||bt("Database URL must point to the root of a Firebase Database (not including a child path).");const I=hv(p,n,y,new p_(n.name,t));return new dv(I,n)}function uv(n,e){const t=io[e];(!t||t[n.key]!==n)&&bt(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Gy(n),delete t[n.key]}function hv(n,e,t,i){let s=io[e.name];s||(s={},io[e.name]=s);let a=s[n.toURLString()];return a&&bt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),a=new Oy(n,av,t,i),s[n.toURLString()]=a,a}class dv{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Ly(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Et(this._repo,re())),this._rootInternal}_delete(){return this._rootInternal!==null&&(uv(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&bt("Cannot call "+e+" on a deleted database.")}}function fv(n=ac(),e){const t=uo(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=Sd("database");i&&pv(t,...i)}return t}function pv(n,e,t,i={}){n=Me(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&bt("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let a;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&bt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),a=new or(or.OWNER);else if(i.mockUserToken){const c=typeof i.mockUserToken=="string"?i.mockUserToken:Nd(i.mockUserToken,n.app.options.projectId);a=new or(c)}lv(s,e,t,a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gv(n){Jg(Wn),An(new en("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return cv(i,s,a,t)},"PUBLIC").setMultipleInstances(!0)),Ot(fl,pl,n),Ot(fl,pl,"esm2017")}mt.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};mt.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};gv();class _v{constructor(e,t,i,s,a,c){pe(this,"roomId");pe(this,"players");pe(this,"status");pe(this,"mode");pe(this,"difficulty");pe(this,"turn");this.roomId=e,this.players=t,this.status=i,this.mode=s,this.difficulty=a,this.turn=c}}var th=(n=>(n.WAITING="waiting",n.PLAYING="playing",n.FINISHED="finished",n))(th||{}),nh=(n=>(n.DEFAULT="default",n))(nh||{}),ih=(n=>(n.EASY="easy",n.DEFAULT="default",n.HARD="hard",n))(ih||{});class rh{constructor(e,t,i,s,a){pe(this,"id");pe(this,"name");pe(this,"board");pe(this,"ships");pe(this,"state");this.id=e,this.name=t,this.board=i,this.ships=s,this.state=a}}var Jo=(n=>(n.NOT_READY="not_ready",n.READY="ready",n.PLAYING="playing",n))(Jo||{});class sh{constructor(e){pe(this,"size");pe(this,"grid");this.size=e,this.grid=this.createGrid(e)}createGrid(e){let t=0;return Array.from({length:e*e},()=>new mv(t++,"empty",!1))}}class mv{constructor(e,t,i){pe(this,"index");pe(this,"inside");pe(this,"isHit");this.index=e,this.inside=t,this.isHit=i}}class xr{constructor(e,t,i,s,a,c,p){pe(this,"id");pe(this,"size");pe(this,"length");pe(this,"index");pe(this,"status");pe(this,"health");pe(this,"direction");this.id=e,this.size=t,this.length=i,this.index=s,this.status=a,this.health=c,this.direction=p}}var Ai=(n=>(n.INACTIVE="inactive",n.PLACED="placed",n.ACTIVE="active",n.DAMAGED="damaged",n.DESTROYED="destroyed",n))(Ai||{}),Ri=(n=>(n.COLUMN="column",n.ROW="row",n))(Ri||{});const yv={apiKey:"AIzaSyAL0AmcXBH1zr7EKL8pE3-Joge0Pxyljfg",authDomain:"battle-of-the-high-seas.firebaseapp.com",databaseURL:"https://battle-of-the-high-seas-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"battle-of-the-high-seas",storageBucket:"battle-of-the-high-seas.appspot.com",messagingSenderId:"95988470782",appId:"1:95988470782:web:b745e9ce5edeeebbe566af",measurementId:"G-ZVDQNVR4JY"};oc(yv);const Fn=fv(),zl=Qg();let Zt,tr,Xt;const vv=Ln(Fn,"users");Up(zl,async n=>{if(sv(vv,e=>{if(e.exists()){const t=e.val(),i=t?Object.keys(t).length:0;yt(".count").text(i)}else yt(".count").text(0)}),n){tr=Ln(Fn,"users/"+n.uid),Zt=n.uid;try{const e=bv(Zt);e?(Xt=e,await no(tr,{name:Xt})):(Xt=Ev(),await no(tr,{name:Xt}),wv(Zt,Xt)),nv(tr).remove()}catch(e){console.error("Error fetching user data:",e)}}else Pp(zl).catch(e=>{console.error("Error signing in anonymously:",e)})});function wv(n,e){localStorage.setItem(n,e)}function bv(n){const e=localStorage.getItem(n);return e||null}yt("#createRoomBtn").on("click",async function(){let n=!1,e=Math.floor(Math.random()*9e3)+1e3;for(;!n;)await eh(Mn(Ln(Fn),"rooms/"+e)).then(async t=>{if(!t.exists()){const i=[new xr("ship-3-1","3x1",3,-1,Ai.INACTIVE,3,Ri.ROW),new xr("ship-2-1","2x1",2,-1,Ai.INACTIVE,2,Ri.ROW)],s=new Map;s.set(Zt,new rh(Zt,Xt,new sh(10),i,Jo.NOT_READY));const a=new _v(e,s,th.WAITING,nh.DEFAULT,ih.DEFAULT,Zt),c={...a,players:oh(a.players)};await no(Ln(Fn,"rooms/"+e),c).then(()=>{n=!0,ah(e.toString())}).catch(p=>console.log("Error creating room",p))}}).catch(t=>{console.log(t.message)}).finally(()=>e=Math.floor(Math.random()*9e3)+1e3)});yt("#submitCode").click(async()=>{let n=parseInt(yt("#roomIdInput").val()+"");if(!n||n>=1e4||n<=999){alert("Please enter a room ID");return}const e=await eh(Mn(Ln(Fn),"rooms/"+n));if(e.exists()){const t=e.val(),i=t.players||{},s=new Map(Object.entries(i));if(s.size<2){const a=[new xr("ship-3-1","3x1",3,-1,Ai.INACTIVE,3,Ri.ROW),new xr("ship-2-1","2x1",2,-1,Ai.INACTIVE,2,Ri.ROW)],c=new rh(Zt,Xt,new sh(10),a,Jo.NOT_READY);s.set(c.id,c);const p={...t,players:oh(s)};iv(Mn(Ln(Fn),"rooms/"+n),p).then(()=>{ah(n.toString())}).catch(_=>console.log("Error adding player to room",_))}else alert("Room is already full.")}else console.log("Room doesn't exist")});function oh(n){const e={};return n.forEach((t,i)=>{e[i]=t}),e}let ro=!1;yt("#joinRoomBtn").on("click",function(){ro||(ro=!0,yt(".pop-up").show())});yt(".close-btn").click(()=>{yt(".pop-up").hide(),ro=!1});function ah(n){window.location.href=`#/Battle-of-the-High-Seas/src/pages/game-view.html?roomId=${n}`}function Ev(){const n=["Silly","Goofy","Wobbly","Clumsy","Bouncy","Quirky","Zany","Snappy","Wacky","Bizarre"],e=["Penguin","Banana","Noodle","Pancake","Nugget","Pickle","Wombat","Squirrel","Doodle","Llama"],t=n[Math.floor(Math.random()*n.length)],i=e[Math.floor(Math.random()*e.length)];return`${t} ${i}`}
