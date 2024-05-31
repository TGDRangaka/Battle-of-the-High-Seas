var Yh=Object.defineProperty;var Qh=(n,e,t)=>e in n?Yh(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var ye=(n,e,t)=>(Qh(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();var ka={};/**
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
 */const Ll={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const D=function(n,e){if(!n)throw Dn(e)},Dn=function(n){return new Error("Firebase Database ("+Ll.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const Ml=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Xh=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const a=n[t++];e[i++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=n[t++],c=n[t++],p=n[t++],_=((s&7)<<18|(a&63)<<12|(c&63)<<6|p&63)-65536;e[i++]=String.fromCharCode(55296+(_>>10)),e[i++]=String.fromCharCode(56320+(_&1023))}else{const a=n[t++],c=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(a&63)<<6|c&63)}}return e.join("")},Ks={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const a=n[s],c=s+1<n.length,p=c?n[s+1]:0,_=s+2<n.length,v=_?n[s+2]:0,T=a>>2,E=(a&3)<<4|p>>4;let k=(p&15)<<2|v>>6,M=v&63;_||(M=64,c||(k=64)),i.push(t[T],t[E],t[k],t[M])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ml(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Xh(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const a=t[n.charAt(s++)],p=s<n.length?t[n.charAt(s)]:0;++s;const v=s<n.length?t[n.charAt(s)]:64;++s;const E=s<n.length?t[n.charAt(s)]:64;if(++s,a==null||p==null||v==null||E==null)throw new Jh;const k=a<<2|p>>4;if(i.push(k),v!==64){const M=p<<4&240|v>>2;if(i.push(M),E!==64){const P=v<<6&192|E;i.push(P)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Jh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Fl=function(n){const e=Ml(n);return Ks.encodeByteArray(e,!0)},Ji=function(n){return Fl(n).replace(/\./g,"")},Zi=function(n){try{return Ks.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Zh(n){return Ul(void 0,n)}function Ul(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!ed(t)||(n[t]=Ul(n[t],e[t]));return n}function ed(n){return n!=="__proto__"}/**
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
 */function td(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const nd=()=>td().__FIREBASE_DEFAULTS__,id=()=>{if(typeof process>"u"||typeof ka>"u")return;const n=ka.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},rd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Zi(n[1]);return e&&JSON.parse(e)},Ys=()=>{try{return nd()||id()||rd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Hl=n=>{var e,t;return(t=(e=Ys())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},sd=n=>{const e=Hl(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Wl=()=>{var n;return(n=Ys())===null||n===void 0?void 0:n.config},jl=n=>{var e;return(e=Ys())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */function od(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ji(JSON.stringify(t)),Ji(JSON.stringify(c)),""].join(".")}/**
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
 */function Ne(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qs(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ne())}function ad(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Bl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ld(){const n=Ne();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Vl(){return Ll.NODE_ADMIN===!0}function cd(){try{return typeof indexedDB=="object"}catch{return!1}}function ud(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var a;e(((a=s.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
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
 */const hd="FirebaseError";class Bt extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=hd,Object.setPrototypeOf(this,Bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ei.prototype.create)}}class Ei{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,a=this.errors[e],c=a?dd(a,i):"Error",p=`${this.serviceName}: ${c} (${s}).`;return new Bt(s,p,i)}}function dd(n,e){return n.replace(fd,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const fd=/\{\$([^}]+)}/g;/**
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
 */function fi(n){return JSON.parse(n)}function we(n){return JSON.stringify(n)}/**
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
 */const ql=function(n){let e={},t={},i={},s="";try{const a=n.split(".");e=fi(Zi(a[0])||""),t=fi(Zi(a[1])||""),s=a[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},pd=function(n){const e=ql(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},gd=function(n){const e=ql(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function st(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function In(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function er(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function tr(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function nr(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const a=n[s],c=e[s];if(Aa(a)&&Aa(c)){if(!nr(a,c))return!1}else if(a!==c)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Aa(n){return n!==null&&typeof n=="object"}/**
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
 */function Ln(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class _d{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let E=0;E<16;E++)i[E]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let E=0;E<16;E++)i[E]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let E=16;E<80;E++){const k=i[E-3]^i[E-8]^i[E-14]^i[E-16];i[E]=(k<<1|k>>>31)&4294967295}let s=this.chain_[0],a=this.chain_[1],c=this.chain_[2],p=this.chain_[3],_=this.chain_[4],v,T;for(let E=0;E<80;E++){E<40?E<20?(v=p^a&(c^p),T=1518500249):(v=a^c^p,T=1859775393):E<60?(v=a&c|p&(a|c),T=2400959708):(v=a^c^p,T=3395469782);const k=(s<<5|s>>>27)+v+_+T+i[E]&4294967295;_=p,p=c,c=(a<<30|a>>>2)&4294967295,a=s,s=k}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+p&4294967295,this.chain_[4]=this.chain_[4]+_&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const a=this.buf_;let c=this.inbuf_;for(;s<t;){if(c===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(a[c]=e.charCodeAt(s),++c,++s,c===this.blockSize){this.compress_(a),c=0;break}}else for(;s<t;)if(a[c]=e[s],++c,++s,c===this.blockSize){this.compress_(a),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let a=24;a>=0;a-=8)e[i]=this.chain_[s]>>a&255,++i;return e}}function md(n,e){const t=new vd(n,e);return t.subscribe.bind(t)}class vd{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");yd(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=ds),s.error===void 0&&(s.error=ds),s.complete===void 0&&(s.complete=ds);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yd(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ds(){}function Sn(n,e){return`${n} failed: ${e} argument `}/**
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
 */const wd=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const a=s-55296;i++,D(i<n.length,"Surrogate pair missing trail surrogate.");const c=n.charCodeAt(i)-56320;s=65536+(a<<10)+c}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Er=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Me(n){return n&&n._delegate?n._delegate:n}class Xt{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Kt="[DEFAULT]";/**
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
 */class Cd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new nt;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ed(e))try{this.getOrInitializeService({instanceIdentifier:Kt})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:s});i.resolve(a)}catch{}}}}clearInstance(e=Kt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kt){return this.instances.has(e)}getOptions(e=Kt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[a,c]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(a);i===p&&c.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),a=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;a.add(e),this.onInitCallbacks.set(s,a);const c=this.instances.get(s);return c&&e(c,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:bd(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Kt){return this.component?this.component.multipleInstances?e:Kt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bd(n){return n===Kt?void 0:n}function Ed(n){return n.instantiationMode==="EAGER"}/**
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
 */class Td{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Cd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ce;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ce||(ce={}));const Id={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},Sd=ce.INFO,Nd={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},kd=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=Nd[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xs{constructor(e){this.name=e,this._logLevel=Sd,this._logHandler=kd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Id[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const Ad=(n,e)=>e.some(t=>n instanceof t);let Ra,xa;function Rd(){return Ra||(Ra=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xd(){return xa||(xa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $l=new WeakMap,Ss=new WeakMap,zl=new WeakMap,fs=new WeakMap,Js=new WeakMap;function Pd(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",a),n.removeEventListener("error",c)},a=()=>{t(xt(n.result)),s()},c=()=>{i(n.error),s()};n.addEventListener("success",a),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&$l.set(t,n)}).catch(()=>{}),Js.set(e,n),e}function Od(n){if(Ss.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",c),n.removeEventListener("abort",c)},a=()=>{t(),s()},c=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",a),n.addEventListener("error",c),n.addEventListener("abort",c)});Ss.set(n,e)}let Ns={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ss.get(n);if(e==="objectStoreNames")return n.objectStoreNames||zl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return xt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Dd(n){Ns=n(Ns)}function Ld(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(ps(this),e,...t);return zl.set(i,e.sort?e.sort():[e]),xt(i)}:xd().includes(n)?function(...e){return n.apply(ps(this),e),xt($l.get(this))}:function(...e){return xt(n.apply(ps(this),e))}}function Md(n){return typeof n=="function"?Ld(n):(n instanceof IDBTransaction&&Od(n),Ad(n,Rd())?new Proxy(n,Ns):n)}function xt(n){if(n instanceof IDBRequest)return Pd(n);if(fs.has(n))return fs.get(n);const e=Md(n);return e!==n&&(fs.set(n,e),Js.set(e,n)),e}const ps=n=>Js.get(n);function Fd(n,e,{blocked:t,upgrade:i,blocking:s,terminated:a}={}){const c=indexedDB.open(n,e),p=xt(c);return i&&c.addEventListener("upgradeneeded",_=>{i(xt(c.result),_.oldVersion,_.newVersion,xt(c.transaction),_)}),t&&c.addEventListener("blocked",_=>t(_.oldVersion,_.newVersion,_)),p.then(_=>{a&&_.addEventListener("close",()=>a()),s&&_.addEventListener("versionchange",v=>s(v.oldVersion,v.newVersion,v))}).catch(()=>{}),p}const Ud=["get","getKey","getAll","getAllKeys","count"],Hd=["put","add","delete","clear"],gs=new Map;function Pa(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(gs.get(e))return gs.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=Hd.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Ud.includes(t)))return;const a=async function(c,...p){const _=this.transaction(c,s?"readwrite":"readonly");let v=_.store;return i&&(v=v.index(p.shift())),(await Promise.all([v[t](...p),s&&_.done]))[0]};return gs.set(e,a),a}Dd(n=>({...n,get:(e,t,i)=>Pa(e,t)||n.get(e,t,i),has:(e,t)=>!!Pa(e,t)||n.has(e,t)}));/**
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
 */class Wd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(jd(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function jd(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ks="@firebase/app",Oa="0.10.4";/**
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
 */const Jt=new Xs("@firebase/app"),Bd="@firebase/app-compat",Vd="@firebase/analytics-compat",qd="@firebase/analytics",$d="@firebase/app-check-compat",zd="@firebase/app-check",Gd="@firebase/auth",Kd="@firebase/auth-compat",Yd="@firebase/database",Qd="@firebase/database-compat",Xd="@firebase/functions",Jd="@firebase/functions-compat",Zd="@firebase/installations",ef="@firebase/installations-compat",tf="@firebase/messaging",nf="@firebase/messaging-compat",rf="@firebase/performance",sf="@firebase/performance-compat",of="@firebase/remote-config",af="@firebase/remote-config-compat",lf="@firebase/storage",cf="@firebase/storage-compat",uf="@firebase/firestore",hf="@firebase/vertexai-preview",df="@firebase/firestore-compat",ff="firebase",pf="10.12.1";/**
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
 */const As="[DEFAULT]",gf={[ks]:"fire-core",[Bd]:"fire-core-compat",[qd]:"fire-analytics",[Vd]:"fire-analytics-compat",[zd]:"fire-app-check",[$d]:"fire-app-check-compat",[Gd]:"fire-auth",[Kd]:"fire-auth-compat",[Yd]:"fire-rtdb",[Qd]:"fire-rtdb-compat",[Xd]:"fire-fn",[Jd]:"fire-fn-compat",[Zd]:"fire-iid",[ef]:"fire-iid-compat",[tf]:"fire-fcm",[nf]:"fire-fcm-compat",[rf]:"fire-perf",[sf]:"fire-perf-compat",[of]:"fire-rc",[af]:"fire-rc-compat",[lf]:"fire-gcs",[cf]:"fire-gcs-compat",[uf]:"fire-fst",[df]:"fire-fst-compat",[hf]:"fire-vertex","fire-js":"fire-js",[ff]:"fire-js-all"};/**
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
 */const ir=new Map,_f=new Map,Rs=new Map;function Da(n,e){try{n.container.addComponent(e)}catch(t){Jt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Nn(n){const e=n.name;if(Rs.has(e))return Jt.debug(`There were multiple attempts to register component ${e}.`),!1;Rs.set(e,n);for(const t of ir.values())Da(t,n);for(const t of _f.values())Da(t,n);return!0}function Zs(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ft(n){return n.settings!==void 0}/**
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
 */const mf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pt=new Ei("app","Firebase",mf);/**
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
 */class vf{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pt.create("app-deleted",{appName:this._name})}}/**
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
 */const Mn=pf;function yf(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:As,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Pt.create("bad-app-name",{appName:String(s)});if(t||(t=Wl()),!t)throw Pt.create("no-options");const a=ir.get(s);if(a){if(nr(t,a.options)&&nr(i,a.config))return a;throw Pt.create("duplicate-app",{appName:s})}const c=new Td(s);for(const _ of Rs.values())c.addComponent(_);const p=new vf(t,i,c);return ir.set(s,p),p}function Gl(n=As){const e=ir.get(n);if(!e&&n===As&&Wl())return yf();if(!e)throw Pt.create("no-app",{appName:n});return e}function Ot(n,e,t){var i;let s=(i=gf[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const a=s.match(/\s|\//),c=e.match(/\s|\//);if(a||c){const p=[`Unable to register library "${s}" with version "${e}":`];a&&p.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&c&&p.push("and"),c&&p.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Jt.warn(p.join(" "));return}Nn(new Xt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const wf="firebase-heartbeat-database",Cf=1,pi="firebase-heartbeat-store";let _s=null;function Kl(){return _s||(_s=Fd(wf,Cf,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(pi)}catch(t){console.warn(t)}}}}).catch(n=>{throw Pt.create("idb-open",{originalErrorMessage:n.message})})),_s}async function bf(n){try{const t=(await Kl()).transaction(pi),i=await t.objectStore(pi).get(Yl(n));return await t.done,i}catch(e){if(e instanceof Bt)Jt.warn(e.message);else{const t=Pt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Jt.warn(t.message)}}}async function La(n,e){try{const i=(await Kl()).transaction(pi,"readwrite");await i.objectStore(pi).put(e,Yl(n)),await i.done}catch(t){if(t instanceof Bt)Jt.warn(t.message);else{const i=Pt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Jt.warn(i.message)}}}function Yl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Ef=1024,Tf=30*24*60*60*1e3;class If{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Nf(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Ma();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(c=>c.date===a)))return this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(c=>{const p=new Date(c.date).valueOf();return Date.now()-p<=Tf}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ma(),{heartbeatsToSend:i,unsentEntries:s}=Sf(this._heartbeatsCache.heartbeats),a=Ji(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}}function Ma(){return new Date().toISOString().substring(0,10)}function Sf(n,e=Ef){const t=[];let i=n.slice();for(const s of n){const a=t.find(c=>c.agent===s.agent);if(a){if(a.dates.push(s.date),Fa(t)>e){a.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Fa(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Nf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cd()?ud().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await bf(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return La(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return La(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Fa(n){return Ji(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function kf(n){Nn(new Xt("platform-logger",e=>new Wd(e),"PRIVATE")),Nn(new Xt("heartbeat",e=>new If(e),"PRIVATE")),Ot(ks,Oa,n),Ot(ks,Oa,"esm2017"),Ot("fire-js","")}kf("");var Af="firebase",Rf="10.12.1";/**
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
 */Ot(Af,Rf,"app");var xf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Pf(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Ql={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */(function(n){(function(e,t){n.exports=e.document?t(e,!0):function(i){if(!i.document)throw new Error("jQuery requires a window with a document");return t(i)}})(typeof window<"u"?window:xf,function(e,t){var i=[],s=Object.getPrototypeOf,a=i.slice,c=i.flat?function(r){return i.flat.call(r)}:function(r){return i.concat.apply([],r)},p=i.push,_=i.indexOf,v={},T=v.toString,E=v.hasOwnProperty,k=E.toString,M=k.call(Object),P={},F=function(o){return typeof o=="function"&&typeof o.nodeType!="number"&&typeof o.item!="function"},ue=function(o){return o!=null&&o===o.window},B=e.document,at={type:!0,src:!0,nonce:!0,noModule:!0};function Ke(r,o,l){l=l||B;var u,d,f=l.createElement("script");if(f.text=r,o)for(u in at)d=o[u]||o.getAttribute&&o.getAttribute(u),d&&f.setAttribute(u,d);l.head.appendChild(f).parentNode.removeChild(f)}function Be(r){return r==null?r+"":typeof r=="object"||typeof r=="function"?v[T.call(r)]||"object":typeof r}var Bn="3.7.1",Vn=/HTML$/i,h=function(r,o){return new h.fn.init(r,o)};h.fn=h.prototype={jquery:Bn,constructor:h,length:0,toArray:function(){return a.call(this)},get:function(r){return r==null?a.call(this):r<0?this[r+this.length]:this[r]},pushStack:function(r){var o=h.merge(this.constructor(),r);return o.prevObject=this,o},each:function(r){return h.each(this,r)},map:function(r){return this.pushStack(h.map(this,function(o,l){return r.call(o,l,o)}))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(h.grep(this,function(r,o){return(o+1)%2}))},odd:function(){return this.pushStack(h.grep(this,function(r,o){return o%2}))},eq:function(r){var o=this.length,l=+r+(r<0?o:0);return this.pushStack(l>=0&&l<o?[this[l]]:[])},end:function(){return this.prevObject||this.constructor()},push:p,sort:i.sort,splice:i.splice},h.extend=h.fn.extend=function(){var r,o,l,u,d,f,g=arguments[0]||{},w=1,y=arguments.length,b=!1;for(typeof g=="boolean"&&(b=g,g=arguments[w]||{},w++),typeof g!="object"&&!F(g)&&(g={}),w===y&&(g=this,w--);w<y;w++)if((r=arguments[w])!=null)for(o in r)u=r[o],!(o==="__proto__"||g===u)&&(b&&u&&(h.isPlainObject(u)||(d=Array.isArray(u)))?(l=g[o],d&&!Array.isArray(l)?f=[]:!d&&!h.isPlainObject(l)?f={}:f=l,d=!1,g[o]=h.extend(b,f,u)):u!==void 0&&(g[o]=u));return g},h.extend({expando:"jQuery"+(Bn+Math.random()).replace(/\D/g,""),isReady:!0,error:function(r){throw new Error(r)},noop:function(){},isPlainObject:function(r){var o,l;return!r||T.call(r)!=="[object Object]"?!1:(o=s(r),o?(l=E.call(o,"constructor")&&o.constructor,typeof l=="function"&&k.call(l)===M):!0)},isEmptyObject:function(r){var o;for(o in r)return!1;return!0},globalEval:function(r,o,l){Ke(r,{nonce:o&&o.nonce},l)},each:function(r,o){var l,u=0;if(qn(r))for(l=r.length;u<l&&o.call(r[u],u,r[u])!==!1;u++);else for(u in r)if(o.call(r[u],u,r[u])===!1)break;return r},text:function(r){var o,l="",u=0,d=r.nodeType;if(!d)for(;o=r[u++];)l+=h.text(o);return d===1||d===11?r.textContent:d===9?r.documentElement.textContent:d===3||d===4?r.nodeValue:l},makeArray:function(r,o){var l=o||[];return r!=null&&(qn(Object(r))?h.merge(l,typeof r=="string"?[r]:r):p.call(l,r)),l},inArray:function(r,o,l){return o==null?-1:_.call(o,r,l)},isXMLDoc:function(r){var o=r&&r.namespaceURI,l=r&&(r.ownerDocument||r).documentElement;return!Vn.test(o||l&&l.nodeName||"HTML")},merge:function(r,o){for(var l=+o.length,u=0,d=r.length;u<l;u++)r[d++]=o[u];return r.length=d,r},grep:function(r,o,l){for(var u,d=[],f=0,g=r.length,w=!l;f<g;f++)u=!o(r[f],f),u!==w&&d.push(r[f]);return d},map:function(r,o,l){var u,d,f=0,g=[];if(qn(r))for(u=r.length;f<u;f++)d=o(r[f],f,l),d!=null&&g.push(d);else for(f in r)d=o(r[f],f,l),d!=null&&g.push(d);return c(g)},guid:1,support:P}),typeof Symbol=="function"&&(h.fn[Symbol.iterator]=i[Symbol.iterator]),h.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(r,o){v["[object "+o+"]"]=o.toLowerCase()});function qn(r){var o=!!r&&"length"in r&&r.length,l=Be(r);return F(r)||ue(r)?!1:l==="array"||o===0||typeof o=="number"&&o>0&&o-1 in r}function se(r,o){return r.nodeName&&r.nodeName.toLowerCase()===o.toLowerCase()}var jr=i.pop,qu=i.sort,$u=i.splice,le="[\\x20\\t\\r\\n\\f]",$n=new RegExp("^"+le+"+|((?:^|[^\\\\])(?:\\\\.)*)"+le+"+$","g");h.contains=function(r,o){var l=o&&o.parentNode;return r===l||!!(l&&l.nodeType===1&&(r.contains?r.contains(l):r.compareDocumentPosition&&r.compareDocumentPosition(l)&16))};var zu=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function Gu(r,o){return o?r==="\0"?"�":r.slice(0,-1)+"\\"+r.charCodeAt(r.length-1).toString(16)+" ":"\\"+r}h.escapeSelector=function(r){return(r+"").replace(zu,Gu)};var lt=B,Br=p;(function(){var r,o,l,u,d,f=Br,g,w,y,b,A,x=h.expando,S=0,O=0,z=Wi(),ne=Wi(),Y=Wi(),Ie=Wi(),ve=function(m,C){return m===C&&(d=!0),0},Xe="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",Je="(?:\\\\[\\da-fA-F]{1,6}"+le+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",te="\\["+le+"*("+Je+")(?:"+le+"*([*^$|!~]?=)"+le+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Je+"))|)"+le+"*\\]",zt=":("+Je+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+te+")*)|.*)\\)|)",ie=new RegExp(le+"+","g"),_e=new RegExp("^"+le+"*,"+le+"*"),ei=new RegExp("^"+le+"*([>+~]|"+le+")"+le+"*"),ss=new RegExp(le+"|>"),Ze=new RegExp(zt),ti=new RegExp("^"+Je+"$"),et={ID:new RegExp("^#("+Je+")"),CLASS:new RegExp("^\\.("+Je+")"),TAG:new RegExp("^("+Je+"|[*])"),ATTR:new RegExp("^"+te),PSEUDO:new RegExp("^"+zt),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+le+"*(even|odd|(([+-]|)(\\d*)n|)"+le+"*(?:([+-]|)"+le+"*(\\d+)|))"+le+"*\\)|)","i"),bool:new RegExp("^(?:"+Xe+")$","i"),needsContext:new RegExp("^"+le+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+le+"*((?:-\\d)?\\d*)"+le+"*\\)|)(?=[^-]|$)","i")},bt=/^(?:input|select|textarea|button)$/i,Et=/^h\d$/i,Ue=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,os=/[+~]/,ht=new RegExp("\\\\[\\da-fA-F]{1,6}"+le+"?|\\\\([^\\r\\n\\f])","g"),dt=function(m,C){var I="0x"+m.slice(1)-65536;return C||(I<0?String.fromCharCode(I+65536):String.fromCharCode(I>>10|55296,I&1023|56320))},Bh=function(){Tt()},Vh=Bi(function(m){return m.disabled===!0&&se(m,"fieldset")},{dir:"parentNode",next:"legend"});function qh(){try{return g.activeElement}catch{}}try{f.apply(i=a.call(lt.childNodes),lt.childNodes),i[lt.childNodes.length].nodeType}catch{f={apply:function(C,I){Br.apply(C,a.call(I))},call:function(C){Br.apply(C,a.call(arguments,1))}}}function oe(m,C,I,N){var R,L,U,W,H,Z,$,K=C&&C.ownerDocument,ee=C?C.nodeType:9;if(I=I||[],typeof m!="string"||!m||ee!==1&&ee!==9&&ee!==11)return I;if(!N&&(Tt(C),C=C||g,y)){if(ee!==11&&(H=Ue.exec(m)))if(R=H[1]){if(ee===9)if(U=C.getElementById(R)){if(U.id===R)return f.call(I,U),I}else return I;else if(K&&(U=K.getElementById(R))&&oe.contains(C,U)&&U.id===R)return f.call(I,U),I}else{if(H[2])return f.apply(I,C.getElementsByTagName(m)),I;if((R=H[3])&&C.getElementsByClassName)return f.apply(I,C.getElementsByClassName(R)),I}if(!Ie[m+" "]&&(!b||!b.test(m))){if($=m,K=C,ee===1&&(ss.test(m)||ei.test(m))){for(K=os.test(m)&&as(C.parentNode)||C,(K!=C||!P.scope)&&((W=C.getAttribute("id"))?W=h.escapeSelector(W):C.setAttribute("id",W=x)),Z=ni(m),L=Z.length;L--;)Z[L]=(W?"#"+W:":scope")+" "+ji(Z[L]);$=Z.join(",")}try{return f.apply(I,K.querySelectorAll($)),I}catch{Ie(m,!0)}finally{W===x&&C.removeAttribute("id")}}}return Na(m.replace($n,"$1"),C,I,N)}function Wi(){var m=[];function C(I,N){return m.push(I+" ")>o.cacheLength&&delete C[m.shift()],C[I+" "]=N}return C}function qe(m){return m[x]=!0,m}function pn(m){var C=g.createElement("fieldset");try{return!!m(C)}catch{return!1}finally{C.parentNode&&C.parentNode.removeChild(C),C=null}}function $h(m){return function(C){return se(C,"input")&&C.type===m}}function zh(m){return function(C){return(se(C,"input")||se(C,"button"))&&C.type===m}}function Ia(m){return function(C){return"form"in C?C.parentNode&&C.disabled===!1?"label"in C?"label"in C.parentNode?C.parentNode.disabled===m:C.disabled===m:C.isDisabled===m||C.isDisabled!==!m&&Vh(C)===m:C.disabled===m:"label"in C?C.disabled===m:!1}}function Gt(m){return qe(function(C){return C=+C,qe(function(I,N){for(var R,L=m([],I.length,C),U=L.length;U--;)I[R=L[U]]&&(I[R]=!(N[R]=I[R]))})})}function as(m){return m&&typeof m.getElementsByTagName<"u"&&m}function Tt(m){var C,I=m?m.ownerDocument||m:lt;return I==g||I.nodeType!==9||!I.documentElement||(g=I,w=g.documentElement,y=!h.isXMLDoc(g),A=w.matches||w.webkitMatchesSelector||w.msMatchesSelector,w.msMatchesSelector&&lt!=g&&(C=g.defaultView)&&C.top!==C&&C.addEventListener("unload",Bh),P.getById=pn(function(N){return w.appendChild(N).id=h.expando,!g.getElementsByName||!g.getElementsByName(h.expando).length}),P.disconnectedMatch=pn(function(N){return A.call(N,"*")}),P.scope=pn(function(){return g.querySelectorAll(":scope")}),P.cssHas=pn(function(){try{return g.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),P.getById?(o.filter.ID=function(N){var R=N.replace(ht,dt);return function(L){return L.getAttribute("id")===R}},o.find.ID=function(N,R){if(typeof R.getElementById<"u"&&y){var L=R.getElementById(N);return L?[L]:[]}}):(o.filter.ID=function(N){var R=N.replace(ht,dt);return function(L){var U=typeof L.getAttributeNode<"u"&&L.getAttributeNode("id");return U&&U.value===R}},o.find.ID=function(N,R){if(typeof R.getElementById<"u"&&y){var L,U,W,H=R.getElementById(N);if(H){if(L=H.getAttributeNode("id"),L&&L.value===N)return[H];for(W=R.getElementsByName(N),U=0;H=W[U++];)if(L=H.getAttributeNode("id"),L&&L.value===N)return[H]}return[]}}),o.find.TAG=function(N,R){return typeof R.getElementsByTagName<"u"?R.getElementsByTagName(N):R.querySelectorAll(N)},o.find.CLASS=function(N,R){if(typeof R.getElementsByClassName<"u"&&y)return R.getElementsByClassName(N)},b=[],pn(function(N){var R;w.appendChild(N).innerHTML="<a id='"+x+"' href='' disabled='disabled'></a><select id='"+x+"-\r\\' disabled='disabled'><option selected=''></option></select>",N.querySelectorAll("[selected]").length||b.push("\\["+le+"*(?:value|"+Xe+")"),N.querySelectorAll("[id~="+x+"-]").length||b.push("~="),N.querySelectorAll("a#"+x+"+*").length||b.push(".#.+[+~]"),N.querySelectorAll(":checked").length||b.push(":checked"),R=g.createElement("input"),R.setAttribute("type","hidden"),N.appendChild(R).setAttribute("name","D"),w.appendChild(N).disabled=!0,N.querySelectorAll(":disabled").length!==2&&b.push(":enabled",":disabled"),R=g.createElement("input"),R.setAttribute("name",""),N.appendChild(R),N.querySelectorAll("[name='']").length||b.push("\\["+le+"*name"+le+"*="+le+`*(?:''|"")`)}),P.cssHas||b.push(":has"),b=b.length&&new RegExp(b.join("|")),ve=function(N,R){if(N===R)return d=!0,0;var L=!N.compareDocumentPosition-!R.compareDocumentPosition;return L||(L=(N.ownerDocument||N)==(R.ownerDocument||R)?N.compareDocumentPosition(R):1,L&1||!P.sortDetached&&R.compareDocumentPosition(N)===L?N===g||N.ownerDocument==lt&&oe.contains(lt,N)?-1:R===g||R.ownerDocument==lt&&oe.contains(lt,R)?1:u?_.call(u,N)-_.call(u,R):0:L&4?-1:1)}),g}oe.matches=function(m,C){return oe(m,null,null,C)},oe.matchesSelector=function(m,C){if(Tt(m),y&&!Ie[C+" "]&&(!b||!b.test(C)))try{var I=A.call(m,C);if(I||P.disconnectedMatch||m.document&&m.document.nodeType!==11)return I}catch{Ie(C,!0)}return oe(C,g,null,[m]).length>0},oe.contains=function(m,C){return(m.ownerDocument||m)!=g&&Tt(m),h.contains(m,C)},oe.attr=function(m,C){(m.ownerDocument||m)!=g&&Tt(m);var I=o.attrHandle[C.toLowerCase()],N=I&&E.call(o.attrHandle,C.toLowerCase())?I(m,C,!y):void 0;return N!==void 0?N:m.getAttribute(C)},oe.error=function(m){throw new Error("Syntax error, unrecognized expression: "+m)},h.uniqueSort=function(m){var C,I=[],N=0,R=0;if(d=!P.sortStable,u=!P.sortStable&&a.call(m,0),qu.call(m,ve),d){for(;C=m[R++];)C===m[R]&&(N=I.push(R));for(;N--;)$u.call(m,I[N],1)}return u=null,m},h.fn.uniqueSort=function(){return this.pushStack(h.uniqueSort(a.apply(this)))},o=h.expr={cacheLength:50,createPseudo:qe,match:et,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(m){return m[1]=m[1].replace(ht,dt),m[3]=(m[3]||m[4]||m[5]||"").replace(ht,dt),m[2]==="~="&&(m[3]=" "+m[3]+" "),m.slice(0,4)},CHILD:function(m){return m[1]=m[1].toLowerCase(),m[1].slice(0,3)==="nth"?(m[3]||oe.error(m[0]),m[4]=+(m[4]?m[5]+(m[6]||1):2*(m[3]==="even"||m[3]==="odd")),m[5]=+(m[7]+m[8]||m[3]==="odd")):m[3]&&oe.error(m[0]),m},PSEUDO:function(m){var C,I=!m[6]&&m[2];return et.CHILD.test(m[0])?null:(m[3]?m[2]=m[4]||m[5]||"":I&&Ze.test(I)&&(C=ni(I,!0))&&(C=I.indexOf(")",I.length-C)-I.length)&&(m[0]=m[0].slice(0,C),m[2]=I.slice(0,C)),m.slice(0,3))}},filter:{TAG:function(m){var C=m.replace(ht,dt).toLowerCase();return m==="*"?function(){return!0}:function(I){return se(I,C)}},CLASS:function(m){var C=z[m+" "];return C||(C=new RegExp("(^|"+le+")"+m+"("+le+"|$)"))&&z(m,function(I){return C.test(typeof I.className=="string"&&I.className||typeof I.getAttribute<"u"&&I.getAttribute("class")||"")})},ATTR:function(m,C,I){return function(N){var R=oe.attr(N,m);return R==null?C==="!=":C?(R+="",C==="="?R===I:C==="!="?R!==I:C==="^="?I&&R.indexOf(I)===0:C==="*="?I&&R.indexOf(I)>-1:C==="$="?I&&R.slice(-I.length)===I:C==="~="?(" "+R.replace(ie," ")+" ").indexOf(I)>-1:C==="|="?R===I||R.slice(0,I.length+1)===I+"-":!1):!0}},CHILD:function(m,C,I,N,R){var L=m.slice(0,3)!=="nth",U=m.slice(-4)!=="last",W=C==="of-type";return N===1&&R===0?function(H){return!!H.parentNode}:function(H,Z,$){var K,ee,V,de,De,Se=L!==U?"nextSibling":"previousSibling",He=H.parentNode,tt=W&&H.nodeName.toLowerCase(),gn=!$&&!W,ke=!1;if(He){if(L){for(;Se;){for(V=H;V=V[Se];)if(W?se(V,tt):V.nodeType===1)return!1;De=Se=m==="only"&&!De&&"nextSibling"}return!0}if(De=[U?He.firstChild:He.lastChild],U&&gn){for(ee=He[x]||(He[x]={}),K=ee[m]||[],de=K[0]===S&&K[1],ke=de&&K[2],V=de&&He.childNodes[de];V=++de&&V&&V[Se]||(ke=de=0)||De.pop();)if(V.nodeType===1&&++ke&&V===H){ee[m]=[S,de,ke];break}}else if(gn&&(ee=H[x]||(H[x]={}),K=ee[m]||[],de=K[0]===S&&K[1],ke=de),ke===!1)for(;(V=++de&&V&&V[Se]||(ke=de=0)||De.pop())&&!((W?se(V,tt):V.nodeType===1)&&++ke&&(gn&&(ee=V[x]||(V[x]={}),ee[m]=[S,ke]),V===H)););return ke-=R,ke===N||ke%N===0&&ke/N>=0}}},PSEUDO:function(m,C){var I,N=o.pseudos[m]||o.setFilters[m.toLowerCase()]||oe.error("unsupported pseudo: "+m);return N[x]?N(C):N.length>1?(I=[m,m,"",C],o.setFilters.hasOwnProperty(m.toLowerCase())?qe(function(R,L){for(var U,W=N(R,C),H=W.length;H--;)U=_.call(R,W[H]),R[U]=!(L[U]=W[H])}):function(R){return N(R,0,I)}):N}},pseudos:{not:qe(function(m){var C=[],I=[],N=hs(m.replace($n,"$1"));return N[x]?qe(function(R,L,U,W){for(var H,Z=N(R,null,W,[]),$=R.length;$--;)(H=Z[$])&&(R[$]=!(L[$]=H))}):function(R,L,U){return C[0]=R,N(C,null,U,I),C[0]=null,!I.pop()}}),has:qe(function(m){return function(C){return oe(m,C).length>0}}),contains:qe(function(m){return m=m.replace(ht,dt),function(C){return(C.textContent||h.text(C)).indexOf(m)>-1}}),lang:qe(function(m){return ti.test(m||"")||oe.error("unsupported lang: "+m),m=m.replace(ht,dt).toLowerCase(),function(C){var I;do if(I=y?C.lang:C.getAttribute("xml:lang")||C.getAttribute("lang"))return I=I.toLowerCase(),I===m||I.indexOf(m+"-")===0;while((C=C.parentNode)&&C.nodeType===1);return!1}}),target:function(m){var C=e.location&&e.location.hash;return C&&C.slice(1)===m.id},root:function(m){return m===w},focus:function(m){return m===qh()&&g.hasFocus()&&!!(m.type||m.href||~m.tabIndex)},enabled:Ia(!1),disabled:Ia(!0),checked:function(m){return se(m,"input")&&!!m.checked||se(m,"option")&&!!m.selected},selected:function(m){return m.parentNode&&m.parentNode.selectedIndex,m.selected===!0},empty:function(m){for(m=m.firstChild;m;m=m.nextSibling)if(m.nodeType<6)return!1;return!0},parent:function(m){return!o.pseudos.empty(m)},header:function(m){return Et.test(m.nodeName)},input:function(m){return bt.test(m.nodeName)},button:function(m){return se(m,"input")&&m.type==="button"||se(m,"button")},text:function(m){var C;return se(m,"input")&&m.type==="text"&&((C=m.getAttribute("type"))==null||C.toLowerCase()==="text")},first:Gt(function(){return[0]}),last:Gt(function(m,C){return[C-1]}),eq:Gt(function(m,C,I){return[I<0?I+C:I]}),even:Gt(function(m,C){for(var I=0;I<C;I+=2)m.push(I);return m}),odd:Gt(function(m,C){for(var I=1;I<C;I+=2)m.push(I);return m}),lt:Gt(function(m,C,I){var N;for(I<0?N=I+C:I>C?N=C:N=I;--N>=0;)m.push(N);return m}),gt:Gt(function(m,C,I){for(var N=I<0?I+C:I;++N<C;)m.push(N);return m})}},o.pseudos.nth=o.pseudos.eq;for(r in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[r]=$h(r);for(r in{submit:!0,reset:!0})o.pseudos[r]=zh(r);function Sa(){}Sa.prototype=o.filters=o.pseudos,o.setFilters=new Sa;function ni(m,C){var I,N,R,L,U,W,H,Z=ne[m+" "];if(Z)return C?0:Z.slice(0);for(U=m,W=[],H=o.preFilter;U;){(!I||(N=_e.exec(U)))&&(N&&(U=U.slice(N[0].length)||U),W.push(R=[])),I=!1,(N=ei.exec(U))&&(I=N.shift(),R.push({value:I,type:N[0].replace($n," ")}),U=U.slice(I.length));for(L in o.filter)(N=et[L].exec(U))&&(!H[L]||(N=H[L](N)))&&(I=N.shift(),R.push({value:I,type:L,matches:N}),U=U.slice(I.length));if(!I)break}return C?U.length:U?oe.error(m):ne(m,W).slice(0)}function ji(m){for(var C=0,I=m.length,N="";C<I;C++)N+=m[C].value;return N}function Bi(m,C,I){var N=C.dir,R=C.next,L=R||N,U=I&&L==="parentNode",W=O++;return C.first?function(H,Z,$){for(;H=H[N];)if(H.nodeType===1||U)return m(H,Z,$);return!1}:function(H,Z,$){var K,ee,V=[S,W];if($){for(;H=H[N];)if((H.nodeType===1||U)&&m(H,Z,$))return!0}else for(;H=H[N];)if(H.nodeType===1||U)if(ee=H[x]||(H[x]={}),R&&se(H,R))H=H[N]||H;else{if((K=ee[L])&&K[0]===S&&K[1]===W)return V[2]=K[2];if(ee[L]=V,V[2]=m(H,Z,$))return!0}return!1}}function ls(m){return m.length>1?function(C,I,N){for(var R=m.length;R--;)if(!m[R](C,I,N))return!1;return!0}:m[0]}function Gh(m,C,I){for(var N=0,R=C.length;N<R;N++)oe(m,C[N],I);return I}function Vi(m,C,I,N,R){for(var L,U=[],W=0,H=m.length,Z=C!=null;W<H;W++)(L=m[W])&&(!I||I(L,N,R))&&(U.push(L),Z&&C.push(W));return U}function cs(m,C,I,N,R,L){return N&&!N[x]&&(N=cs(N)),R&&!R[x]&&(R=cs(R,L)),qe(function(U,W,H,Z){var $,K,ee,V,de=[],De=[],Se=W.length,He=U||Gh(C||"*",H.nodeType?[H]:H,[]),tt=m&&(U||!C)?Vi(He,de,m,H,Z):He;if(I?(V=R||(U?m:Se||N)?[]:W,I(tt,V,H,Z)):V=tt,N)for($=Vi(V,De),N($,[],H,Z),K=$.length;K--;)(ee=$[K])&&(V[De[K]]=!(tt[De[K]]=ee));if(U){if(R||m){if(R){for($=[],K=V.length;K--;)(ee=V[K])&&$.push(tt[K]=ee);R(null,V=[],$,Z)}for(K=V.length;K--;)(ee=V[K])&&($=R?_.call(U,ee):de[K])>-1&&(U[$]=!(W[$]=ee))}}else V=Vi(V===W?V.splice(Se,V.length):V),R?R(null,W,V,Z):f.apply(W,V)})}function us(m){for(var C,I,N,R=m.length,L=o.relative[m[0].type],U=L||o.relative[" "],W=L?1:0,H=Bi(function(K){return K===C},U,!0),Z=Bi(function(K){return _.call(C,K)>-1},U,!0),$=[function(K,ee,V){var de=!L&&(V||ee!=l)||((C=ee).nodeType?H(K,ee,V):Z(K,ee,V));return C=null,de}];W<R;W++)if(I=o.relative[m[W].type])$=[Bi(ls($),I)];else{if(I=o.filter[m[W].type].apply(null,m[W].matches),I[x]){for(N=++W;N<R&&!o.relative[m[N].type];N++);return cs(W>1&&ls($),W>1&&ji(m.slice(0,W-1).concat({value:m[W-2].type===" "?"*":""})).replace($n,"$1"),I,W<N&&us(m.slice(W,N)),N<R&&us(m=m.slice(N)),N<R&&ji(m))}$.push(I)}return ls($)}function Kh(m,C){var I=C.length>0,N=m.length>0,R=function(L,U,W,H,Z){var $,K,ee,V=0,de="0",De=L&&[],Se=[],He=l,tt=L||N&&o.find.TAG("*",Z),gn=S+=He==null?1:Math.random()||.1,ke=tt.length;for(Z&&(l=U==g||U||Z);de!==ke&&($=tt[de])!=null;de++){if(N&&$){for(K=0,!U&&$.ownerDocument!=g&&(Tt($),W=!y);ee=m[K++];)if(ee($,U||g,W)){f.call(H,$);break}Z&&(S=gn)}I&&(($=!ee&&$)&&V--,L&&De.push($))}if(V+=de,I&&de!==V){for(K=0;ee=C[K++];)ee(De,Se,U,W);if(L){if(V>0)for(;de--;)De[de]||Se[de]||(Se[de]=jr.call(H));Se=Vi(Se)}f.apply(H,Se),Z&&!L&&Se.length>0&&V+C.length>1&&h.uniqueSort(H)}return Z&&(S=gn,l=He),De};return I?qe(R):R}function hs(m,C){var I,N=[],R=[],L=Y[m+" "];if(!L){for(C||(C=ni(m)),I=C.length;I--;)L=us(C[I]),L[x]?N.push(L):R.push(L);L=Y(m,Kh(R,N)),L.selector=m}return L}function Na(m,C,I,N){var R,L,U,W,H,Z=typeof m=="function"&&m,$=!N&&ni(m=Z.selector||m);if(I=I||[],$.length===1){if(L=$[0]=$[0].slice(0),L.length>2&&(U=L[0]).type==="ID"&&C.nodeType===9&&y&&o.relative[L[1].type]){if(C=(o.find.ID(U.matches[0].replace(ht,dt),C)||[])[0],C)Z&&(C=C.parentNode);else return I;m=m.slice(L.shift().value.length)}for(R=et.needsContext.test(m)?0:L.length;R--&&(U=L[R],!o.relative[W=U.type]);)if((H=o.find[W])&&(N=H(U.matches[0].replace(ht,dt),os.test(L[0].type)&&as(C.parentNode)||C))){if(L.splice(R,1),m=N.length&&ji(L),!m)return f.apply(I,N),I;break}}return(Z||hs(m,$))(N,C,!y,I,!C||os.test(m)&&as(C.parentNode)||C),I}P.sortStable=x.split("").sort(ve).join("")===x,Tt(),P.sortDetached=pn(function(m){return m.compareDocumentPosition(g.createElement("fieldset"))&1}),h.find=oe,h.expr[":"]=h.expr.pseudos,h.unique=h.uniqueSort,oe.compile=hs,oe.select=Na,oe.setDocument=Tt,oe.tokenize=ni,oe.escape=h.escapeSelector,oe.getText=h.text,oe.isXML=h.isXMLDoc,oe.selectors=h.expr,oe.support=h.support,oe.uniqueSort=h.uniqueSort})();var on=function(r,o,l){for(var u=[],d=l!==void 0;(r=r[o])&&r.nodeType!==9;)if(r.nodeType===1){if(d&&h(r).is(l))break;u.push(r)}return u},Bo=function(r,o){for(var l=[];r;r=r.nextSibling)r.nodeType===1&&r!==o&&l.push(r);return l},Vo=h.expr.match.needsContext,qo=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function Vr(r,o,l){return F(o)?h.grep(r,function(u,d){return!!o.call(u,d,u)!==l}):o.nodeType?h.grep(r,function(u){return u===o!==l}):typeof o!="string"?h.grep(r,function(u){return _.call(o,u)>-1!==l}):h.filter(o,r,l)}h.filter=function(r,o,l){var u=o[0];return l&&(r=":not("+r+")"),o.length===1&&u.nodeType===1?h.find.matchesSelector(u,r)?[u]:[]:h.find.matches(r,h.grep(o,function(d){return d.nodeType===1}))},h.fn.extend({find:function(r){var o,l,u=this.length,d=this;if(typeof r!="string")return this.pushStack(h(r).filter(function(){for(o=0;o<u;o++)if(h.contains(d[o],this))return!0}));for(l=this.pushStack([]),o=0;o<u;o++)h.find(r,d[o],l);return u>1?h.uniqueSort(l):l},filter:function(r){return this.pushStack(Vr(this,r||[],!1))},not:function(r){return this.pushStack(Vr(this,r||[],!0))},is:function(r){return!!Vr(this,typeof r=="string"&&Vo.test(r)?h(r):r||[],!1).length}});var $o,Ku=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Yu=h.fn.init=function(r,o,l){var u,d;if(!r)return this;if(l=l||$o,typeof r=="string")if(r[0]==="<"&&r[r.length-1]===">"&&r.length>=3?u=[null,r,null]:u=Ku.exec(r),u&&(u[1]||!o))if(u[1]){if(o=o instanceof h?o[0]:o,h.merge(this,h.parseHTML(u[1],o&&o.nodeType?o.ownerDocument||o:B,!0)),qo.test(u[1])&&h.isPlainObject(o))for(u in o)F(this[u])?this[u](o[u]):this.attr(u,o[u]);return this}else return d=B.getElementById(u[2]),d&&(this[0]=d,this.length=1),this;else return!o||o.jquery?(o||l).find(r):this.constructor(o).find(r);else{if(r.nodeType)return this[0]=r,this.length=1,this;if(F(r))return l.ready!==void 0?l.ready(r):r(h)}return h.makeArray(r,this)};Yu.prototype=h.fn,$o=h(B);var Qu=/^(?:parents|prev(?:Until|All))/,Xu={children:!0,contents:!0,next:!0,prev:!0};h.fn.extend({has:function(r){var o=h(r,this),l=o.length;return this.filter(function(){for(var u=0;u<l;u++)if(h.contains(this,o[u]))return!0})},closest:function(r,o){var l,u=0,d=this.length,f=[],g=typeof r!="string"&&h(r);if(!Vo.test(r)){for(;u<d;u++)for(l=this[u];l&&l!==o;l=l.parentNode)if(l.nodeType<11&&(g?g.index(l)>-1:l.nodeType===1&&h.find.matchesSelector(l,r))){f.push(l);break}}return this.pushStack(f.length>1?h.uniqueSort(f):f)},index:function(r){return r?typeof r=="string"?_.call(h(r),this[0]):_.call(this,r.jquery?r[0]:r):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(r,o){return this.pushStack(h.uniqueSort(h.merge(this.get(),h(r,o))))},addBack:function(r){return this.add(r==null?this.prevObject:this.prevObject.filter(r))}});function zo(r,o){for(;(r=r[o])&&r.nodeType!==1;);return r}h.each({parent:function(r){var o=r.parentNode;return o&&o.nodeType!==11?o:null},parents:function(r){return on(r,"parentNode")},parentsUntil:function(r,o,l){return on(r,"parentNode",l)},next:function(r){return zo(r,"nextSibling")},prev:function(r){return zo(r,"previousSibling")},nextAll:function(r){return on(r,"nextSibling")},prevAll:function(r){return on(r,"previousSibling")},nextUntil:function(r,o,l){return on(r,"nextSibling",l)},prevUntil:function(r,o,l){return on(r,"previousSibling",l)},siblings:function(r){return Bo((r.parentNode||{}).firstChild,r)},children:function(r){return Bo(r.firstChild)},contents:function(r){return r.contentDocument!=null&&s(r.contentDocument)?r.contentDocument:(se(r,"template")&&(r=r.content||r),h.merge([],r.childNodes))}},function(r,o){h.fn[r]=function(l,u){var d=h.map(this,o,l);return r.slice(-5)!=="Until"&&(u=l),u&&typeof u=="string"&&(d=h.filter(u,d)),this.length>1&&(Xu[r]||h.uniqueSort(d),Qu.test(r)&&d.reverse()),this.pushStack(d)}});var Ye=/[^\x20\t\r\n\f]+/g;function Ju(r){var o={};return h.each(r.match(Ye)||[],function(l,u){o[u]=!0}),o}h.Callbacks=function(r){r=typeof r=="string"?Ju(r):h.extend({},r);var o,l,u,d,f=[],g=[],w=-1,y=function(){for(d=d||r.once,u=o=!0;g.length;w=-1)for(l=g.shift();++w<f.length;)f[w].apply(l[0],l[1])===!1&&r.stopOnFalse&&(w=f.length,l=!1);r.memory||(l=!1),o=!1,d&&(l?f=[]:f="")},b={add:function(){return f&&(l&&!o&&(w=f.length-1,g.push(l)),function A(x){h.each(x,function(S,O){F(O)?(!r.unique||!b.has(O))&&f.push(O):O&&O.length&&Be(O)!=="string"&&A(O)})}(arguments),l&&!o&&y()),this},remove:function(){return h.each(arguments,function(A,x){for(var S;(S=h.inArray(x,f,S))>-1;)f.splice(S,1),S<=w&&w--}),this},has:function(A){return A?h.inArray(A,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return d=g=[],f=l="",this},disabled:function(){return!f},lock:function(){return d=g=[],!l&&!o&&(f=l=""),this},locked:function(){return!!d},fireWith:function(A,x){return d||(x=x||[],x=[A,x.slice?x.slice():x],g.push(x),o||y()),this},fire:function(){return b.fireWith(this,arguments),this},fired:function(){return!!u}};return b};function an(r){return r}function Oi(r){throw r}function Go(r,o,l,u){var d;try{r&&F(d=r.promise)?d.call(r).done(o).fail(l):r&&F(d=r.then)?d.call(r,o,l):o.apply(void 0,[r].slice(u))}catch(f){l.apply(void 0,[f])}}h.extend({Deferred:function(r){var o=[["notify","progress",h.Callbacks("memory"),h.Callbacks("memory"),2],["resolve","done",h.Callbacks("once memory"),h.Callbacks("once memory"),0,"resolved"],["reject","fail",h.Callbacks("once memory"),h.Callbacks("once memory"),1,"rejected"]],l="pending",u={state:function(){return l},always:function(){return d.done(arguments).fail(arguments),this},catch:function(f){return u.then(null,f)},pipe:function(){var f=arguments;return h.Deferred(function(g){h.each(o,function(w,y){var b=F(f[y[4]])&&f[y[4]];d[y[1]](function(){var A=b&&b.apply(this,arguments);A&&F(A.promise)?A.promise().progress(g.notify).done(g.resolve).fail(g.reject):g[y[0]+"With"](this,b?[A]:arguments)})}),f=null}).promise()},then:function(f,g,w){var y=0;function b(A,x,S,O){return function(){var z=this,ne=arguments,Y=function(){var ve,Xe;if(!(A<y)){if(ve=S.apply(z,ne),ve===x.promise())throw new TypeError("Thenable self-resolution");Xe=ve&&(typeof ve=="object"||typeof ve=="function")&&ve.then,F(Xe)?O?Xe.call(ve,b(y,x,an,O),b(y,x,Oi,O)):(y++,Xe.call(ve,b(y,x,an,O),b(y,x,Oi,O),b(y,x,an,x.notifyWith))):(S!==an&&(z=void 0,ne=[ve]),(O||x.resolveWith)(z,ne))}},Ie=O?Y:function(){try{Y()}catch(ve){h.Deferred.exceptionHook&&h.Deferred.exceptionHook(ve,Ie.error),A+1>=y&&(S!==Oi&&(z=void 0,ne=[ve]),x.rejectWith(z,ne))}};A?Ie():(h.Deferred.getErrorHook?Ie.error=h.Deferred.getErrorHook():h.Deferred.getStackHook&&(Ie.error=h.Deferred.getStackHook()),e.setTimeout(Ie))}}return h.Deferred(function(A){o[0][3].add(b(0,A,F(w)?w:an,A.notifyWith)),o[1][3].add(b(0,A,F(f)?f:an)),o[2][3].add(b(0,A,F(g)?g:Oi))}).promise()},promise:function(f){return f!=null?h.extend(f,u):u}},d={};return h.each(o,function(f,g){var w=g[2],y=g[5];u[g[1]]=w.add,y&&w.add(function(){l=y},o[3-f][2].disable,o[3-f][3].disable,o[0][2].lock,o[0][3].lock),w.add(g[3].fire),d[g[0]]=function(){return d[g[0]+"With"](this===d?void 0:this,arguments),this},d[g[0]+"With"]=w.fireWith}),u.promise(d),r&&r.call(d,d),d},when:function(r){var o=arguments.length,l=o,u=Array(l),d=a.call(arguments),f=h.Deferred(),g=function(w){return function(y){u[w]=this,d[w]=arguments.length>1?a.call(arguments):y,--o||f.resolveWith(u,d)}};if(o<=1&&(Go(r,f.done(g(l)).resolve,f.reject,!o),f.state()==="pending"||F(d[l]&&d[l].then)))return f.then();for(;l--;)Go(d[l],g(l),f.reject);return f.promise()}});var Zu=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;h.Deferred.exceptionHook=function(r,o){e.console&&e.console.warn&&r&&Zu.test(r.name)&&e.console.warn("jQuery.Deferred exception: "+r.message,r.stack,o)},h.readyException=function(r){e.setTimeout(function(){throw r})};var qr=h.Deferred();h.fn.ready=function(r){return qr.then(r).catch(function(o){h.readyException(o)}),this},h.extend({isReady:!1,readyWait:1,ready:function(r){(r===!0?--h.readyWait:h.isReady)||(h.isReady=!0,!(r!==!0&&--h.readyWait>0)&&qr.resolveWith(B,[h]))}}),h.ready.then=qr.then;function Di(){B.removeEventListener("DOMContentLoaded",Di),e.removeEventListener("load",Di),h.ready()}B.readyState==="complete"||B.readyState!=="loading"&&!B.documentElement.doScroll?e.setTimeout(h.ready):(B.addEventListener("DOMContentLoaded",Di),e.addEventListener("load",Di));var ct=function(r,o,l,u,d,f,g){var w=0,y=r.length,b=l==null;if(Be(l)==="object"){d=!0;for(w in l)ct(r,o,w,l[w],!0,f,g)}else if(u!==void 0&&(d=!0,F(u)||(g=!0),b&&(g?(o.call(r,u),o=null):(b=o,o=function(A,x,S){return b.call(h(A),S)})),o))for(;w<y;w++)o(r[w],l,g?u:u.call(r[w],w,o(r[w],l)));return d?r:b?o.call(r):y?o(r[0],l):f},eh=/^-ms-/,th=/-([a-z])/g;function nh(r,o){return o.toUpperCase()}function Qe(r){return r.replace(eh,"ms-").replace(th,nh)}var zn=function(r){return r.nodeType===1||r.nodeType===9||!+r.nodeType};function Gn(){this.expando=h.expando+Gn.uid++}Gn.uid=1,Gn.prototype={cache:function(r){var o=r[this.expando];return o||(o={},zn(r)&&(r.nodeType?r[this.expando]=o:Object.defineProperty(r,this.expando,{value:o,configurable:!0}))),o},set:function(r,o,l){var u,d=this.cache(r);if(typeof o=="string")d[Qe(o)]=l;else for(u in o)d[Qe(u)]=o[u];return d},get:function(r,o){return o===void 0?this.cache(r):r[this.expando]&&r[this.expando][Qe(o)]},access:function(r,o,l){return o===void 0||o&&typeof o=="string"&&l===void 0?this.get(r,o):(this.set(r,o,l),l!==void 0?l:o)},remove:function(r,o){var l,u=r[this.expando];if(u!==void 0){if(o!==void 0)for(Array.isArray(o)?o=o.map(Qe):(o=Qe(o),o=o in u?[o]:o.match(Ye)||[]),l=o.length;l--;)delete u[o[l]];(o===void 0||h.isEmptyObject(u))&&(r.nodeType?r[this.expando]=void 0:delete r[this.expando])}},hasData:function(r){var o=r[this.expando];return o!==void 0&&!h.isEmptyObject(o)}};var j=new Gn,xe=new Gn,ih=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,rh=/[A-Z]/g;function sh(r){return r==="true"?!0:r==="false"?!1:r==="null"?null:r===+r+""?+r:ih.test(r)?JSON.parse(r):r}function Ko(r,o,l){var u;if(l===void 0&&r.nodeType===1)if(u="data-"+o.replace(rh,"-$&").toLowerCase(),l=r.getAttribute(u),typeof l=="string"){try{l=sh(l)}catch{}xe.set(r,o,l)}else l=void 0;return l}h.extend({hasData:function(r){return xe.hasData(r)||j.hasData(r)},data:function(r,o,l){return xe.access(r,o,l)},removeData:function(r,o){xe.remove(r,o)},_data:function(r,o,l){return j.access(r,o,l)},_removeData:function(r,o){j.remove(r,o)}}),h.fn.extend({data:function(r,o){var l,u,d,f=this[0],g=f&&f.attributes;if(r===void 0){if(this.length&&(d=xe.get(f),f.nodeType===1&&!j.get(f,"hasDataAttrs"))){for(l=g.length;l--;)g[l]&&(u=g[l].name,u.indexOf("data-")===0&&(u=Qe(u.slice(5)),Ko(f,u,d[u])));j.set(f,"hasDataAttrs",!0)}return d}return typeof r=="object"?this.each(function(){xe.set(this,r)}):ct(this,function(w){var y;if(f&&w===void 0)return y=xe.get(f,r),y!==void 0||(y=Ko(f,r),y!==void 0)?y:void 0;this.each(function(){xe.set(this,r,w)})},null,o,arguments.length>1,null,!0)},removeData:function(r){return this.each(function(){xe.remove(this,r)})}}),h.extend({queue:function(r,o,l){var u;if(r)return o=(o||"fx")+"queue",u=j.get(r,o),l&&(!u||Array.isArray(l)?u=j.access(r,o,h.makeArray(l)):u.push(l)),u||[]},dequeue:function(r,o){o=o||"fx";var l=h.queue(r,o),u=l.length,d=l.shift(),f=h._queueHooks(r,o),g=function(){h.dequeue(r,o)};d==="inprogress"&&(d=l.shift(),u--),d&&(o==="fx"&&l.unshift("inprogress"),delete f.stop,d.call(r,g,f)),!u&&f&&f.empty.fire()},_queueHooks:function(r,o){var l=o+"queueHooks";return j.get(r,l)||j.access(r,l,{empty:h.Callbacks("once memory").add(function(){j.remove(r,[o+"queue",l])})})}}),h.fn.extend({queue:function(r,o){var l=2;return typeof r!="string"&&(o=r,r="fx",l--),arguments.length<l?h.queue(this[0],r):o===void 0?this:this.each(function(){var u=h.queue(this,r,o);h._queueHooks(this,r),r==="fx"&&u[0]!=="inprogress"&&h.dequeue(this,r)})},dequeue:function(r){return this.each(function(){h.dequeue(this,r)})},clearQueue:function(r){return this.queue(r||"fx",[])},promise:function(r,o){var l,u=1,d=h.Deferred(),f=this,g=this.length,w=function(){--u||d.resolveWith(f,[f])};for(typeof r!="string"&&(o=r,r=void 0),r=r||"fx";g--;)l=j.get(f[g],r+"queueHooks"),l&&l.empty&&(u++,l.empty.add(w));return w(),d.promise(o)}});var Yo=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Kn=new RegExp("^(?:([+-])=|)("+Yo+")([a-z%]*)$","i"),ut=["Top","Right","Bottom","Left"],Vt=B.documentElement,ln=function(r){return h.contains(r.ownerDocument,r)},oh={composed:!0};Vt.getRootNode&&(ln=function(r){return h.contains(r.ownerDocument,r)||r.getRootNode(oh)===r.ownerDocument});var Li=function(r,o){return r=o||r,r.style.display==="none"||r.style.display===""&&ln(r)&&h.css(r,"display")==="none"};function Qo(r,o,l,u){var d,f,g=20,w=u?function(){return u.cur()}:function(){return h.css(r,o,"")},y=w(),b=l&&l[3]||(h.cssNumber[o]?"":"px"),A=r.nodeType&&(h.cssNumber[o]||b!=="px"&&+y)&&Kn.exec(h.css(r,o));if(A&&A[3]!==b){for(y=y/2,b=b||A[3],A=+y||1;g--;)h.style(r,o,A+b),(1-f)*(1-(f=w()/y||.5))<=0&&(g=0),A=A/f;A=A*2,h.style(r,o,A+b),l=l||[]}return l&&(A=+A||+y||0,d=l[1]?A+(l[1]+1)*l[2]:+l[2],u&&(u.unit=b,u.start=A,u.end=d)),d}var Xo={};function ah(r){var o,l=r.ownerDocument,u=r.nodeName,d=Xo[u];return d||(o=l.body.appendChild(l.createElement(u)),d=h.css(o,"display"),o.parentNode.removeChild(o),d==="none"&&(d="block"),Xo[u]=d,d)}function cn(r,o){for(var l,u,d=[],f=0,g=r.length;f<g;f++)u=r[f],u.style&&(l=u.style.display,o?(l==="none"&&(d[f]=j.get(u,"display")||null,d[f]||(u.style.display="")),u.style.display===""&&Li(u)&&(d[f]=ah(u))):l!=="none"&&(d[f]="none",j.set(u,"display",l)));for(f=0;f<g;f++)d[f]!=null&&(r[f].style.display=d[f]);return r}h.fn.extend({show:function(){return cn(this,!0)},hide:function(){return cn(this)},toggle:function(r){return typeof r=="boolean"?r?this.show():this.hide():this.each(function(){Li(this)?h(this).show():h(this).hide()})}});var Yn=/^(?:checkbox|radio)$/i,Jo=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Zo=/^$|^module$|\/(?:java|ecma)script/i;(function(){var r=B.createDocumentFragment(),o=r.appendChild(B.createElement("div")),l=B.createElement("input");l.setAttribute("type","radio"),l.setAttribute("checked","checked"),l.setAttribute("name","t"),o.appendChild(l),P.checkClone=o.cloneNode(!0).cloneNode(!0).lastChild.checked,o.innerHTML="<textarea>x</textarea>",P.noCloneChecked=!!o.cloneNode(!0).lastChild.defaultValue,o.innerHTML="<option></option>",P.option=!!o.lastChild})();var Fe={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Fe.tbody=Fe.tfoot=Fe.colgroup=Fe.caption=Fe.thead,Fe.th=Fe.td,P.option||(Fe.optgroup=Fe.option=[1,"<select multiple='multiple'>","</select>"]);function Pe(r,o){var l;return typeof r.getElementsByTagName<"u"?l=r.getElementsByTagName(o||"*"):typeof r.querySelectorAll<"u"?l=r.querySelectorAll(o||"*"):l=[],o===void 0||o&&se(r,o)?h.merge([r],l):l}function $r(r,o){for(var l=0,u=r.length;l<u;l++)j.set(r[l],"globalEval",!o||j.get(o[l],"globalEval"))}var lh=/<|&#?\w+;/;function ea(r,o,l,u,d){for(var f,g,w,y,b,A,x=o.createDocumentFragment(),S=[],O=0,z=r.length;O<z;O++)if(f=r[O],f||f===0)if(Be(f)==="object")h.merge(S,f.nodeType?[f]:f);else if(!lh.test(f))S.push(o.createTextNode(f));else{for(g=g||x.appendChild(o.createElement("div")),w=(Jo.exec(f)||["",""])[1].toLowerCase(),y=Fe[w]||Fe._default,g.innerHTML=y[1]+h.htmlPrefilter(f)+y[2],A=y[0];A--;)g=g.lastChild;h.merge(S,g.childNodes),g=x.firstChild,g.textContent=""}for(x.textContent="",O=0;f=S[O++];){if(u&&h.inArray(f,u)>-1){d&&d.push(f);continue}if(b=ln(f),g=Pe(x.appendChild(f),"script"),b&&$r(g),l)for(A=0;f=g[A++];)Zo.test(f.type||"")&&l.push(f)}return x}var ta=/^([^.]*)(?:\.(.+)|)/;function un(){return!0}function hn(){return!1}function zr(r,o,l,u,d,f){var g,w;if(typeof o=="object"){typeof l!="string"&&(u=u||l,l=void 0);for(w in o)zr(r,w,l,u,o[w],f);return r}if(u==null&&d==null?(d=l,u=l=void 0):d==null&&(typeof l=="string"?(d=u,u=void 0):(d=u,u=l,l=void 0)),d===!1)d=hn;else if(!d)return r;return f===1&&(g=d,d=function(y){return h().off(y),g.apply(this,arguments)},d.guid=g.guid||(g.guid=h.guid++)),r.each(function(){h.event.add(this,o,d,u,l)})}h.event={global:{},add:function(r,o,l,u,d){var f,g,w,y,b,A,x,S,O,z,ne,Y=j.get(r);if(zn(r))for(l.handler&&(f=l,l=f.handler,d=f.selector),d&&h.find.matchesSelector(Vt,d),l.guid||(l.guid=h.guid++),(y=Y.events)||(y=Y.events=Object.create(null)),(g=Y.handle)||(g=Y.handle=function(Ie){return typeof h<"u"&&h.event.triggered!==Ie.type?h.event.dispatch.apply(r,arguments):void 0}),o=(o||"").match(Ye)||[""],b=o.length;b--;)w=ta.exec(o[b])||[],O=ne=w[1],z=(w[2]||"").split(".").sort(),O&&(x=h.event.special[O]||{},O=(d?x.delegateType:x.bindType)||O,x=h.event.special[O]||{},A=h.extend({type:O,origType:ne,data:u,handler:l,guid:l.guid,selector:d,needsContext:d&&h.expr.match.needsContext.test(d),namespace:z.join(".")},f),(S=y[O])||(S=y[O]=[],S.delegateCount=0,(!x.setup||x.setup.call(r,u,z,g)===!1)&&r.addEventListener&&r.addEventListener(O,g)),x.add&&(x.add.call(r,A),A.handler.guid||(A.handler.guid=l.guid)),d?S.splice(S.delegateCount++,0,A):S.push(A),h.event.global[O]=!0)},remove:function(r,o,l,u,d){var f,g,w,y,b,A,x,S,O,z,ne,Y=j.hasData(r)&&j.get(r);if(!(!Y||!(y=Y.events))){for(o=(o||"").match(Ye)||[""],b=o.length;b--;){if(w=ta.exec(o[b])||[],O=ne=w[1],z=(w[2]||"").split(".").sort(),!O){for(O in y)h.event.remove(r,O+o[b],l,u,!0);continue}for(x=h.event.special[O]||{},O=(u?x.delegateType:x.bindType)||O,S=y[O]||[],w=w[2]&&new RegExp("(^|\\.)"+z.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=S.length;f--;)A=S[f],(d||ne===A.origType)&&(!l||l.guid===A.guid)&&(!w||w.test(A.namespace))&&(!u||u===A.selector||u==="**"&&A.selector)&&(S.splice(f,1),A.selector&&S.delegateCount--,x.remove&&x.remove.call(r,A));g&&!S.length&&((!x.teardown||x.teardown.call(r,z,Y.handle)===!1)&&h.removeEvent(r,O,Y.handle),delete y[O])}h.isEmptyObject(y)&&j.remove(r,"handle events")}},dispatch:function(r){var o,l,u,d,f,g,w=new Array(arguments.length),y=h.event.fix(r),b=(j.get(this,"events")||Object.create(null))[y.type]||[],A=h.event.special[y.type]||{};for(w[0]=y,o=1;o<arguments.length;o++)w[o]=arguments[o];if(y.delegateTarget=this,!(A.preDispatch&&A.preDispatch.call(this,y)===!1)){for(g=h.event.handlers.call(this,y,b),o=0;(d=g[o++])&&!y.isPropagationStopped();)for(y.currentTarget=d.elem,l=0;(f=d.handlers[l++])&&!y.isImmediatePropagationStopped();)(!y.rnamespace||f.namespace===!1||y.rnamespace.test(f.namespace))&&(y.handleObj=f,y.data=f.data,u=((h.event.special[f.origType]||{}).handle||f.handler).apply(d.elem,w),u!==void 0&&(y.result=u)===!1&&(y.preventDefault(),y.stopPropagation()));return A.postDispatch&&A.postDispatch.call(this,y),y.result}},handlers:function(r,o){var l,u,d,f,g,w=[],y=o.delegateCount,b=r.target;if(y&&b.nodeType&&!(r.type==="click"&&r.button>=1)){for(;b!==this;b=b.parentNode||this)if(b.nodeType===1&&!(r.type==="click"&&b.disabled===!0)){for(f=[],g={},l=0;l<y;l++)u=o[l],d=u.selector+" ",g[d]===void 0&&(g[d]=u.needsContext?h(d,this).index(b)>-1:h.find(d,this,null,[b]).length),g[d]&&f.push(u);f.length&&w.push({elem:b,handlers:f})}}return b=this,y<o.length&&w.push({elem:b,handlers:o.slice(y)}),w},addProp:function(r,o){Object.defineProperty(h.Event.prototype,r,{enumerable:!0,configurable:!0,get:F(o)?function(){if(this.originalEvent)return o(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[r]},set:function(l){Object.defineProperty(this,r,{enumerable:!0,configurable:!0,writable:!0,value:l})}})},fix:function(r){return r[h.expando]?r:new h.Event(r)},special:{load:{noBubble:!0},click:{setup:function(r){var o=this||r;return Yn.test(o.type)&&o.click&&se(o,"input")&&Mi(o,"click",!0),!1},trigger:function(r){var o=this||r;return Yn.test(o.type)&&o.click&&se(o,"input")&&Mi(o,"click"),!0},_default:function(r){var o=r.target;return Yn.test(o.type)&&o.click&&se(o,"input")&&j.get(o,"click")||se(o,"a")}},beforeunload:{postDispatch:function(r){r.result!==void 0&&r.originalEvent&&(r.originalEvent.returnValue=r.result)}}}};function Mi(r,o,l){if(!l){j.get(r,o)===void 0&&h.event.add(r,o,un);return}j.set(r,o,!1),h.event.add(r,o,{namespace:!1,handler:function(u){var d,f=j.get(this,o);if(u.isTrigger&1&&this[o]){if(f)(h.event.special[o]||{}).delegateType&&u.stopPropagation();else if(f=a.call(arguments),j.set(this,o,f),this[o](),d=j.get(this,o),j.set(this,o,!1),f!==d)return u.stopImmediatePropagation(),u.preventDefault(),d}else f&&(j.set(this,o,h.event.trigger(f[0],f.slice(1),this)),u.stopPropagation(),u.isImmediatePropagationStopped=un)}})}h.removeEvent=function(r,o,l){r.removeEventListener&&r.removeEventListener(o,l)},h.Event=function(r,o){if(!(this instanceof h.Event))return new h.Event(r,o);r&&r.type?(this.originalEvent=r,this.type=r.type,this.isDefaultPrevented=r.defaultPrevented||r.defaultPrevented===void 0&&r.returnValue===!1?un:hn,this.target=r.target&&r.target.nodeType===3?r.target.parentNode:r.target,this.currentTarget=r.currentTarget,this.relatedTarget=r.relatedTarget):this.type=r,o&&h.extend(this,o),this.timeStamp=r&&r.timeStamp||Date.now(),this[h.expando]=!0},h.Event.prototype={constructor:h.Event,isDefaultPrevented:hn,isPropagationStopped:hn,isImmediatePropagationStopped:hn,isSimulated:!1,preventDefault:function(){var r=this.originalEvent;this.isDefaultPrevented=un,r&&!this.isSimulated&&r.preventDefault()},stopPropagation:function(){var r=this.originalEvent;this.isPropagationStopped=un,r&&!this.isSimulated&&r.stopPropagation()},stopImmediatePropagation:function(){var r=this.originalEvent;this.isImmediatePropagationStopped=un,r&&!this.isSimulated&&r.stopImmediatePropagation(),this.stopPropagation()}},h.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},h.event.addProp),h.each({focus:"focusin",blur:"focusout"},function(r,o){function l(u){if(B.documentMode){var d=j.get(this,"handle"),f=h.event.fix(u);f.type=u.type==="focusin"?"focus":"blur",f.isSimulated=!0,d(u),f.target===f.currentTarget&&d(f)}else h.event.simulate(o,u.target,h.event.fix(u))}h.event.special[r]={setup:function(){var u;if(Mi(this,r,!0),B.documentMode)u=j.get(this,o),u||this.addEventListener(o,l),j.set(this,o,(u||0)+1);else return!1},trigger:function(){return Mi(this,r),!0},teardown:function(){var u;if(B.documentMode)u=j.get(this,o)-1,u?j.set(this,o,u):(this.removeEventListener(o,l),j.remove(this,o));else return!1},_default:function(u){return j.get(u.target,r)},delegateType:o},h.event.special[o]={setup:function(){var u=this.ownerDocument||this.document||this,d=B.documentMode?this:u,f=j.get(d,o);f||(B.documentMode?this.addEventListener(o,l):u.addEventListener(r,l,!0)),j.set(d,o,(f||0)+1)},teardown:function(){var u=this.ownerDocument||this.document||this,d=B.documentMode?this:u,f=j.get(d,o)-1;f?j.set(d,o,f):(B.documentMode?this.removeEventListener(o,l):u.removeEventListener(r,l,!0),j.remove(d,o))}}}),h.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(r,o){h.event.special[r]={delegateType:o,bindType:o,handle:function(l){var u,d=this,f=l.relatedTarget,g=l.handleObj;return(!f||f!==d&&!h.contains(d,f))&&(l.type=g.origType,u=g.handler.apply(this,arguments),l.type=o),u}}}),h.fn.extend({on:function(r,o,l,u){return zr(this,r,o,l,u)},one:function(r,o,l,u){return zr(this,r,o,l,u,1)},off:function(r,o,l){var u,d;if(r&&r.preventDefault&&r.handleObj)return u=r.handleObj,h(r.delegateTarget).off(u.namespace?u.origType+"."+u.namespace:u.origType,u.selector,u.handler),this;if(typeof r=="object"){for(d in r)this.off(d,o,r[d]);return this}return(o===!1||typeof o=="function")&&(l=o,o=void 0),l===!1&&(l=hn),this.each(function(){h.event.remove(this,r,l,o)})}});var ch=/<script|<style|<link/i,uh=/checked\s*(?:[^=]|=\s*.checked.)/i,hh=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function na(r,o){return se(r,"table")&&se(o.nodeType!==11?o:o.firstChild,"tr")&&h(r).children("tbody")[0]||r}function dh(r){return r.type=(r.getAttribute("type")!==null)+"/"+r.type,r}function fh(r){return(r.type||"").slice(0,5)==="true/"?r.type=r.type.slice(5):r.removeAttribute("type"),r}function ia(r,o){var l,u,d,f,g,w,y;if(o.nodeType===1){if(j.hasData(r)&&(f=j.get(r),y=f.events,y)){j.remove(o,"handle events");for(d in y)for(l=0,u=y[d].length;l<u;l++)h.event.add(o,d,y[d][l])}xe.hasData(r)&&(g=xe.access(r),w=h.extend({},g),xe.set(o,w))}}function ph(r,o){var l=o.nodeName.toLowerCase();l==="input"&&Yn.test(r.type)?o.checked=r.checked:(l==="input"||l==="textarea")&&(o.defaultValue=r.defaultValue)}function dn(r,o,l,u){o=c(o);var d,f,g,w,y,b,A=0,x=r.length,S=x-1,O=o[0],z=F(O);if(z||x>1&&typeof O=="string"&&!P.checkClone&&uh.test(O))return r.each(function(ne){var Y=r.eq(ne);z&&(o[0]=O.call(this,ne,Y.html())),dn(Y,o,l,u)});if(x&&(d=ea(o,r[0].ownerDocument,!1,r,u),f=d.firstChild,d.childNodes.length===1&&(d=f),f||u)){for(g=h.map(Pe(d,"script"),dh),w=g.length;A<x;A++)y=d,A!==S&&(y=h.clone(y,!0,!0),w&&h.merge(g,Pe(y,"script"))),l.call(r[A],y,A);if(w)for(b=g[g.length-1].ownerDocument,h.map(g,fh),A=0;A<w;A++)y=g[A],Zo.test(y.type||"")&&!j.access(y,"globalEval")&&h.contains(b,y)&&(y.src&&(y.type||"").toLowerCase()!=="module"?h._evalUrl&&!y.noModule&&h._evalUrl(y.src,{nonce:y.nonce||y.getAttribute("nonce")},b):Ke(y.textContent.replace(hh,""),y,b))}return r}function ra(r,o,l){for(var u,d=o?h.filter(o,r):r,f=0;(u=d[f])!=null;f++)!l&&u.nodeType===1&&h.cleanData(Pe(u)),u.parentNode&&(l&&ln(u)&&$r(Pe(u,"script")),u.parentNode.removeChild(u));return r}h.extend({htmlPrefilter:function(r){return r},clone:function(r,o,l){var u,d,f,g,w=r.cloneNode(!0),y=ln(r);if(!P.noCloneChecked&&(r.nodeType===1||r.nodeType===11)&&!h.isXMLDoc(r))for(g=Pe(w),f=Pe(r),u=0,d=f.length;u<d;u++)ph(f[u],g[u]);if(o)if(l)for(f=f||Pe(r),g=g||Pe(w),u=0,d=f.length;u<d;u++)ia(f[u],g[u]);else ia(r,w);return g=Pe(w,"script"),g.length>0&&$r(g,!y&&Pe(r,"script")),w},cleanData:function(r){for(var o,l,u,d=h.event.special,f=0;(l=r[f])!==void 0;f++)if(zn(l)){if(o=l[j.expando]){if(o.events)for(u in o.events)d[u]?h.event.remove(l,u):h.removeEvent(l,u,o.handle);l[j.expando]=void 0}l[xe.expando]&&(l[xe.expando]=void 0)}}}),h.fn.extend({detach:function(r){return ra(this,r,!0)},remove:function(r){return ra(this,r)},text:function(r){return ct(this,function(o){return o===void 0?h.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=o)})},null,r,arguments.length)},append:function(){return dn(this,arguments,function(r){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var o=na(this,r);o.appendChild(r)}})},prepend:function(){return dn(this,arguments,function(r){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var o=na(this,r);o.insertBefore(r,o.firstChild)}})},before:function(){return dn(this,arguments,function(r){this.parentNode&&this.parentNode.insertBefore(r,this)})},after:function(){return dn(this,arguments,function(r){this.parentNode&&this.parentNode.insertBefore(r,this.nextSibling)})},empty:function(){for(var r,o=0;(r=this[o])!=null;o++)r.nodeType===1&&(h.cleanData(Pe(r,!1)),r.textContent="");return this},clone:function(r,o){return r=r??!1,o=o??r,this.map(function(){return h.clone(this,r,o)})},html:function(r){return ct(this,function(o){var l=this[0]||{},u=0,d=this.length;if(o===void 0&&l.nodeType===1)return l.innerHTML;if(typeof o=="string"&&!ch.test(o)&&!Fe[(Jo.exec(o)||["",""])[1].toLowerCase()]){o=h.htmlPrefilter(o);try{for(;u<d;u++)l=this[u]||{},l.nodeType===1&&(h.cleanData(Pe(l,!1)),l.innerHTML=o);l=0}catch{}}l&&this.empty().append(o)},null,r,arguments.length)},replaceWith:function(){var r=[];return dn(this,arguments,function(o){var l=this.parentNode;h.inArray(this,r)<0&&(h.cleanData(Pe(this)),l&&l.replaceChild(o,this))},r)}}),h.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(r,o){h.fn[r]=function(l){for(var u,d=[],f=h(l),g=f.length-1,w=0;w<=g;w++)u=w===g?this:this.clone(!0),h(f[w])[o](u),p.apply(d,u.get());return this.pushStack(d)}});var Gr=new RegExp("^("+Yo+")(?!px)[a-z%]+$","i"),Kr=/^--/,Fi=function(r){var o=r.ownerDocument.defaultView;return(!o||!o.opener)&&(o=e),o.getComputedStyle(r)},sa=function(r,o,l){var u,d,f={};for(d in o)f[d]=r.style[d],r.style[d]=o[d];u=l.call(r);for(d in o)r.style[d]=f[d];return u},gh=new RegExp(ut.join("|"),"i");(function(){function r(){if(b){y.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",b.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Vt.appendChild(y).appendChild(b);var A=e.getComputedStyle(b);l=A.top!=="1%",w=o(A.marginLeft)===12,b.style.right="60%",f=o(A.right)===36,u=o(A.width)===36,b.style.position="absolute",d=o(b.offsetWidth/3)===12,Vt.removeChild(y),b=null}}function o(A){return Math.round(parseFloat(A))}var l,u,d,f,g,w,y=B.createElement("div"),b=B.createElement("div");b.style&&(b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",P.clearCloneStyle=b.style.backgroundClip==="content-box",h.extend(P,{boxSizingReliable:function(){return r(),u},pixelBoxStyles:function(){return r(),f},pixelPosition:function(){return r(),l},reliableMarginLeft:function(){return r(),w},scrollboxSize:function(){return r(),d},reliableTrDimensions:function(){var A,x,S,O;return g==null&&(A=B.createElement("table"),x=B.createElement("tr"),S=B.createElement("div"),A.style.cssText="position:absolute;left:-11111px;border-collapse:separate",x.style.cssText="box-sizing:content-box;border:1px solid",x.style.height="1px",S.style.height="9px",S.style.display="block",Vt.appendChild(A).appendChild(x).appendChild(S),O=e.getComputedStyle(x),g=parseInt(O.height,10)+parseInt(O.borderTopWidth,10)+parseInt(O.borderBottomWidth,10)===x.offsetHeight,Vt.removeChild(A)),g}}))})();function Qn(r,o,l){var u,d,f,g,w=Kr.test(o),y=r.style;return l=l||Fi(r),l&&(g=l.getPropertyValue(o)||l[o],w&&g&&(g=g.replace($n,"$1")||void 0),g===""&&!ln(r)&&(g=h.style(r,o)),!P.pixelBoxStyles()&&Gr.test(g)&&gh.test(o)&&(u=y.width,d=y.minWidth,f=y.maxWidth,y.minWidth=y.maxWidth=y.width=g,g=l.width,y.width=u,y.minWidth=d,y.maxWidth=f)),g!==void 0?g+"":g}function oa(r,o){return{get:function(){if(r()){delete this.get;return}return(this.get=o).apply(this,arguments)}}}var aa=["Webkit","Moz","ms"],la=B.createElement("div").style,ca={};function _h(r){for(var o=r[0].toUpperCase()+r.slice(1),l=aa.length;l--;)if(r=aa[l]+o,r in la)return r}function Yr(r){var o=h.cssProps[r]||ca[r];return o||(r in la?r:ca[r]=_h(r)||r)}var mh=/^(none|table(?!-c[ea]).+)/,vh={position:"absolute",visibility:"hidden",display:"block"},ua={letterSpacing:"0",fontWeight:"400"};function ha(r,o,l){var u=Kn.exec(o);return u?Math.max(0,u[2]-(l||0))+(u[3]||"px"):o}function Qr(r,o,l,u,d,f){var g=o==="width"?1:0,w=0,y=0,b=0;if(l===(u?"border":"content"))return 0;for(;g<4;g+=2)l==="margin"&&(b+=h.css(r,l+ut[g],!0,d)),u?(l==="content"&&(y-=h.css(r,"padding"+ut[g],!0,d)),l!=="margin"&&(y-=h.css(r,"border"+ut[g]+"Width",!0,d))):(y+=h.css(r,"padding"+ut[g],!0,d),l!=="padding"?y+=h.css(r,"border"+ut[g]+"Width",!0,d):w+=h.css(r,"border"+ut[g]+"Width",!0,d));return!u&&f>=0&&(y+=Math.max(0,Math.ceil(r["offset"+o[0].toUpperCase()+o.slice(1)]-f-y-w-.5))||0),y+b}function da(r,o,l){var u=Fi(r),d=!P.boxSizingReliable()||l,f=d&&h.css(r,"boxSizing",!1,u)==="border-box",g=f,w=Qn(r,o,u),y="offset"+o[0].toUpperCase()+o.slice(1);if(Gr.test(w)){if(!l)return w;w="auto"}return(!P.boxSizingReliable()&&f||!P.reliableTrDimensions()&&se(r,"tr")||w==="auto"||!parseFloat(w)&&h.css(r,"display",!1,u)==="inline")&&r.getClientRects().length&&(f=h.css(r,"boxSizing",!1,u)==="border-box",g=y in r,g&&(w=r[y])),w=parseFloat(w)||0,w+Qr(r,o,l||(f?"border":"content"),g,u,w)+"px"}h.extend({cssHooks:{opacity:{get:function(r,o){if(o){var l=Qn(r,"opacity");return l===""?"1":l}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(r,o,l,u){if(!(!r||r.nodeType===3||r.nodeType===8||!r.style)){var d,f,g,w=Qe(o),y=Kr.test(o),b=r.style;if(y||(o=Yr(w)),g=h.cssHooks[o]||h.cssHooks[w],l!==void 0){if(f=typeof l,f==="string"&&(d=Kn.exec(l))&&d[1]&&(l=Qo(r,o,d),f="number"),l==null||l!==l)return;f==="number"&&!y&&(l+=d&&d[3]||(h.cssNumber[w]?"":"px")),!P.clearCloneStyle&&l===""&&o.indexOf("background")===0&&(b[o]="inherit"),(!g||!("set"in g)||(l=g.set(r,l,u))!==void 0)&&(y?b.setProperty(o,l):b[o]=l)}else return g&&"get"in g&&(d=g.get(r,!1,u))!==void 0?d:b[o]}},css:function(r,o,l,u){var d,f,g,w=Qe(o),y=Kr.test(o);return y||(o=Yr(w)),g=h.cssHooks[o]||h.cssHooks[w],g&&"get"in g&&(d=g.get(r,!0,l)),d===void 0&&(d=Qn(r,o,u)),d==="normal"&&o in ua&&(d=ua[o]),l===""||l?(f=parseFloat(d),l===!0||isFinite(f)?f||0:d):d}}),h.each(["height","width"],function(r,o){h.cssHooks[o]={get:function(l,u,d){if(u)return mh.test(h.css(l,"display"))&&(!l.getClientRects().length||!l.getBoundingClientRect().width)?sa(l,vh,function(){return da(l,o,d)}):da(l,o,d)},set:function(l,u,d){var f,g=Fi(l),w=!P.scrollboxSize()&&g.position==="absolute",y=w||d,b=y&&h.css(l,"boxSizing",!1,g)==="border-box",A=d?Qr(l,o,d,b,g):0;return b&&w&&(A-=Math.ceil(l["offset"+o[0].toUpperCase()+o.slice(1)]-parseFloat(g[o])-Qr(l,o,"border",!1,g)-.5)),A&&(f=Kn.exec(u))&&(f[3]||"px")!=="px"&&(l.style[o]=u,u=h.css(l,o)),ha(l,u,A)}}}),h.cssHooks.marginLeft=oa(P.reliableMarginLeft,function(r,o){if(o)return(parseFloat(Qn(r,"marginLeft"))||r.getBoundingClientRect().left-sa(r,{marginLeft:0},function(){return r.getBoundingClientRect().left}))+"px"}),h.each({margin:"",padding:"",border:"Width"},function(r,o){h.cssHooks[r+o]={expand:function(l){for(var u=0,d={},f=typeof l=="string"?l.split(" "):[l];u<4;u++)d[r+ut[u]+o]=f[u]||f[u-2]||f[0];return d}},r!=="margin"&&(h.cssHooks[r+o].set=ha)}),h.fn.extend({css:function(r,o){return ct(this,function(l,u,d){var f,g,w={},y=0;if(Array.isArray(u)){for(f=Fi(l),g=u.length;y<g;y++)w[u[y]]=h.css(l,u[y],!1,f);return w}return d!==void 0?h.style(l,u,d):h.css(l,u)},r,o,arguments.length>1)}});function Oe(r,o,l,u,d){return new Oe.prototype.init(r,o,l,u,d)}h.Tween=Oe,Oe.prototype={constructor:Oe,init:function(r,o,l,u,d,f){this.elem=r,this.prop=l,this.easing=d||h.easing._default,this.options=o,this.start=this.now=this.cur(),this.end=u,this.unit=f||(h.cssNumber[l]?"":"px")},cur:function(){var r=Oe.propHooks[this.prop];return r&&r.get?r.get(this):Oe.propHooks._default.get(this)},run:function(r){var o,l=Oe.propHooks[this.prop];return this.options.duration?this.pos=o=h.easing[this.easing](r,this.options.duration*r,0,1,this.options.duration):this.pos=o=r,this.now=(this.end-this.start)*o+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),l&&l.set?l.set(this):Oe.propHooks._default.set(this),this}},Oe.prototype.init.prototype=Oe.prototype,Oe.propHooks={_default:{get:function(r){var o;return r.elem.nodeType!==1||r.elem[r.prop]!=null&&r.elem.style[r.prop]==null?r.elem[r.prop]:(o=h.css(r.elem,r.prop,""),!o||o==="auto"?0:o)},set:function(r){h.fx.step[r.prop]?h.fx.step[r.prop](r):r.elem.nodeType===1&&(h.cssHooks[r.prop]||r.elem.style[Yr(r.prop)]!=null)?h.style(r.elem,r.prop,r.now+r.unit):r.elem[r.prop]=r.now}}},Oe.propHooks.scrollTop=Oe.propHooks.scrollLeft={set:function(r){r.elem.nodeType&&r.elem.parentNode&&(r.elem[r.prop]=r.now)}},h.easing={linear:function(r){return r},swing:function(r){return .5-Math.cos(r*Math.PI)/2},_default:"swing"},h.fx=Oe.prototype.init,h.fx.step={};var fn,Ui,yh=/^(?:toggle|show|hide)$/,wh=/queueHooks$/;function Xr(){Ui&&(B.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(Xr):e.setTimeout(Xr,h.fx.interval),h.fx.tick())}function fa(){return e.setTimeout(function(){fn=void 0}),fn=Date.now()}function Hi(r,o){var l,u=0,d={height:r};for(o=o?1:0;u<4;u+=2-o)l=ut[u],d["margin"+l]=d["padding"+l]=r;return o&&(d.opacity=d.width=r),d}function pa(r,o,l){for(var u,d=(Ve.tweeners[o]||[]).concat(Ve.tweeners["*"]),f=0,g=d.length;f<g;f++)if(u=d[f].call(l,o,r))return u}function Ch(r,o,l){var u,d,f,g,w,y,b,A,x="width"in o||"height"in o,S=this,O={},z=r.style,ne=r.nodeType&&Li(r),Y=j.get(r,"fxshow");l.queue||(g=h._queueHooks(r,"fx"),g.unqueued==null&&(g.unqueued=0,w=g.empty.fire,g.empty.fire=function(){g.unqueued||w()}),g.unqueued++,S.always(function(){S.always(function(){g.unqueued--,h.queue(r,"fx").length||g.empty.fire()})}));for(u in o)if(d=o[u],yh.test(d)){if(delete o[u],f=f||d==="toggle",d===(ne?"hide":"show"))if(d==="show"&&Y&&Y[u]!==void 0)ne=!0;else continue;O[u]=Y&&Y[u]||h.style(r,u)}if(y=!h.isEmptyObject(o),!(!y&&h.isEmptyObject(O))){x&&r.nodeType===1&&(l.overflow=[z.overflow,z.overflowX,z.overflowY],b=Y&&Y.display,b==null&&(b=j.get(r,"display")),A=h.css(r,"display"),A==="none"&&(b?A=b:(cn([r],!0),b=r.style.display||b,A=h.css(r,"display"),cn([r]))),(A==="inline"||A==="inline-block"&&b!=null)&&h.css(r,"float")==="none"&&(y||(S.done(function(){z.display=b}),b==null&&(A=z.display,b=A==="none"?"":A)),z.display="inline-block")),l.overflow&&(z.overflow="hidden",S.always(function(){z.overflow=l.overflow[0],z.overflowX=l.overflow[1],z.overflowY=l.overflow[2]})),y=!1;for(u in O)y||(Y?"hidden"in Y&&(ne=Y.hidden):Y=j.access(r,"fxshow",{display:b}),f&&(Y.hidden=!ne),ne&&cn([r],!0),S.done(function(){ne||cn([r]),j.remove(r,"fxshow");for(u in O)h.style(r,u,O[u])})),y=pa(ne?Y[u]:0,u,S),u in Y||(Y[u]=y.start,ne&&(y.end=y.start,y.start=0))}}function bh(r,o){var l,u,d,f,g;for(l in r)if(u=Qe(l),d=o[u],f=r[l],Array.isArray(f)&&(d=f[1],f=r[l]=f[0]),l!==u&&(r[u]=f,delete r[l]),g=h.cssHooks[u],g&&"expand"in g){f=g.expand(f),delete r[u];for(l in f)l in r||(r[l]=f[l],o[l]=d)}else o[u]=d}function Ve(r,o,l){var u,d,f=0,g=Ve.prefilters.length,w=h.Deferred().always(function(){delete y.elem}),y=function(){if(d)return!1;for(var x=fn||fa(),S=Math.max(0,b.startTime+b.duration-x),O=S/b.duration||0,z=1-O,ne=0,Y=b.tweens.length;ne<Y;ne++)b.tweens[ne].run(z);return w.notifyWith(r,[b,z,S]),z<1&&Y?S:(Y||w.notifyWith(r,[b,1,0]),w.resolveWith(r,[b]),!1)},b=w.promise({elem:r,props:h.extend({},o),opts:h.extend(!0,{specialEasing:{},easing:h.easing._default},l),originalProperties:o,originalOptions:l,startTime:fn||fa(),duration:l.duration,tweens:[],createTween:function(x,S){var O=h.Tween(r,b.opts,x,S,b.opts.specialEasing[x]||b.opts.easing);return b.tweens.push(O),O},stop:function(x){var S=0,O=x?b.tweens.length:0;if(d)return this;for(d=!0;S<O;S++)b.tweens[S].run(1);return x?(w.notifyWith(r,[b,1,0]),w.resolveWith(r,[b,x])):w.rejectWith(r,[b,x]),this}}),A=b.props;for(bh(A,b.opts.specialEasing);f<g;f++)if(u=Ve.prefilters[f].call(b,r,A,b.opts),u)return F(u.stop)&&(h._queueHooks(b.elem,b.opts.queue).stop=u.stop.bind(u)),u;return h.map(A,pa,b),F(b.opts.start)&&b.opts.start.call(r,b),b.progress(b.opts.progress).done(b.opts.done,b.opts.complete).fail(b.opts.fail).always(b.opts.always),h.fx.timer(h.extend(y,{elem:r,anim:b,queue:b.opts.queue})),b}h.Animation=h.extend(Ve,{tweeners:{"*":[function(r,o){var l=this.createTween(r,o);return Qo(l.elem,r,Kn.exec(o),l),l}]},tweener:function(r,o){F(r)?(o=r,r=["*"]):r=r.match(Ye);for(var l,u=0,d=r.length;u<d;u++)l=r[u],Ve.tweeners[l]=Ve.tweeners[l]||[],Ve.tweeners[l].unshift(o)},prefilters:[Ch],prefilter:function(r,o){o?Ve.prefilters.unshift(r):Ve.prefilters.push(r)}}),h.speed=function(r,o,l){var u=r&&typeof r=="object"?h.extend({},r):{complete:l||!l&&o||F(r)&&r,duration:r,easing:l&&o||o&&!F(o)&&o};return h.fx.off?u.duration=0:typeof u.duration!="number"&&(u.duration in h.fx.speeds?u.duration=h.fx.speeds[u.duration]:u.duration=h.fx.speeds._default),(u.queue==null||u.queue===!0)&&(u.queue="fx"),u.old=u.complete,u.complete=function(){F(u.old)&&u.old.call(this),u.queue&&h.dequeue(this,u.queue)},u},h.fn.extend({fadeTo:function(r,o,l,u){return this.filter(Li).css("opacity",0).show().end().animate({opacity:o},r,l,u)},animate:function(r,o,l,u){var d=h.isEmptyObject(r),f=h.speed(o,l,u),g=function(){var w=Ve(this,h.extend({},r),f);(d||j.get(this,"finish"))&&w.stop(!0)};return g.finish=g,d||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(r,o,l){var u=function(d){var f=d.stop;delete d.stop,f(l)};return typeof r!="string"&&(l=o,o=r,r=void 0),o&&this.queue(r||"fx",[]),this.each(function(){var d=!0,f=r!=null&&r+"queueHooks",g=h.timers,w=j.get(this);if(f)w[f]&&w[f].stop&&u(w[f]);else for(f in w)w[f]&&w[f].stop&&wh.test(f)&&u(w[f]);for(f=g.length;f--;)g[f].elem===this&&(r==null||g[f].queue===r)&&(g[f].anim.stop(l),d=!1,g.splice(f,1));(d||!l)&&h.dequeue(this,r)})},finish:function(r){return r!==!1&&(r=r||"fx"),this.each(function(){var o,l=j.get(this),u=l[r+"queue"],d=l[r+"queueHooks"],f=h.timers,g=u?u.length:0;for(l.finish=!0,h.queue(this,r,[]),d&&d.stop&&d.stop.call(this,!0),o=f.length;o--;)f[o].elem===this&&f[o].queue===r&&(f[o].anim.stop(!0),f.splice(o,1));for(o=0;o<g;o++)u[o]&&u[o].finish&&u[o].finish.call(this);delete l.finish})}}),h.each(["toggle","show","hide"],function(r,o){var l=h.fn[o];h.fn[o]=function(u,d,f){return u==null||typeof u=="boolean"?l.apply(this,arguments):this.animate(Hi(o,!0),u,d,f)}}),h.each({slideDown:Hi("show"),slideUp:Hi("hide"),slideToggle:Hi("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(r,o){h.fn[r]=function(l,u,d){return this.animate(o,l,u,d)}}),h.timers=[],h.fx.tick=function(){var r,o=0,l=h.timers;for(fn=Date.now();o<l.length;o++)r=l[o],!r()&&l[o]===r&&l.splice(o--,1);l.length||h.fx.stop(),fn=void 0},h.fx.timer=function(r){h.timers.push(r),h.fx.start()},h.fx.interval=13,h.fx.start=function(){Ui||(Ui=!0,Xr())},h.fx.stop=function(){Ui=null},h.fx.speeds={slow:600,fast:200,_default:400},h.fn.delay=function(r,o){return r=h.fx&&h.fx.speeds[r]||r,o=o||"fx",this.queue(o,function(l,u){var d=e.setTimeout(l,r);u.stop=function(){e.clearTimeout(d)}})},function(){var r=B.createElement("input"),o=B.createElement("select"),l=o.appendChild(B.createElement("option"));r.type="checkbox",P.checkOn=r.value!=="",P.optSelected=l.selected,r=B.createElement("input"),r.value="t",r.type="radio",P.radioValue=r.value==="t"}();var ga,Xn=h.expr.attrHandle;h.fn.extend({attr:function(r,o){return ct(this,h.attr,r,o,arguments.length>1)},removeAttr:function(r){return this.each(function(){h.removeAttr(this,r)})}}),h.extend({attr:function(r,o,l){var u,d,f=r.nodeType;if(!(f===3||f===8||f===2)){if(typeof r.getAttribute>"u")return h.prop(r,o,l);if((f!==1||!h.isXMLDoc(r))&&(d=h.attrHooks[o.toLowerCase()]||(h.expr.match.bool.test(o)?ga:void 0)),l!==void 0){if(l===null){h.removeAttr(r,o);return}return d&&"set"in d&&(u=d.set(r,l,o))!==void 0?u:(r.setAttribute(o,l+""),l)}return d&&"get"in d&&(u=d.get(r,o))!==null?u:(u=h.find.attr(r,o),u??void 0)}},attrHooks:{type:{set:function(r,o){if(!P.radioValue&&o==="radio"&&se(r,"input")){var l=r.value;return r.setAttribute("type",o),l&&(r.value=l),o}}}},removeAttr:function(r,o){var l,u=0,d=o&&o.match(Ye);if(d&&r.nodeType===1)for(;l=d[u++];)r.removeAttribute(l)}}),ga={set:function(r,o,l){return o===!1?h.removeAttr(r,l):r.setAttribute(l,l),l}},h.each(h.expr.match.bool.source.match(/\w+/g),function(r,o){var l=Xn[o]||h.find.attr;Xn[o]=function(u,d,f){var g,w,y=d.toLowerCase();return f||(w=Xn[y],Xn[y]=g,g=l(u,d,f)!=null?y:null,Xn[y]=w),g}});var Eh=/^(?:input|select|textarea|button)$/i,Th=/^(?:a|area)$/i;h.fn.extend({prop:function(r,o){return ct(this,h.prop,r,o,arguments.length>1)},removeProp:function(r){return this.each(function(){delete this[h.propFix[r]||r]})}}),h.extend({prop:function(r,o,l){var u,d,f=r.nodeType;if(!(f===3||f===8||f===2))return(f!==1||!h.isXMLDoc(r))&&(o=h.propFix[o]||o,d=h.propHooks[o]),l!==void 0?d&&"set"in d&&(u=d.set(r,l,o))!==void 0?u:r[o]=l:d&&"get"in d&&(u=d.get(r,o))!==null?u:r[o]},propHooks:{tabIndex:{get:function(r){var o=h.find.attr(r,"tabindex");return o?parseInt(o,10):Eh.test(r.nodeName)||Th.test(r.nodeName)&&r.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),P.optSelected||(h.propHooks.selected={get:function(r){var o=r.parentNode;return o&&o.parentNode&&o.parentNode.selectedIndex,null},set:function(r){var o=r.parentNode;o&&(o.selectedIndex,o.parentNode&&o.parentNode.selectedIndex)}}),h.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){h.propFix[this.toLowerCase()]=this});function qt(r){var o=r.match(Ye)||[];return o.join(" ")}function $t(r){return r.getAttribute&&r.getAttribute("class")||""}function Jr(r){return Array.isArray(r)?r:typeof r=="string"?r.match(Ye)||[]:[]}h.fn.extend({addClass:function(r){var o,l,u,d,f,g;return F(r)?this.each(function(w){h(this).addClass(r.call(this,w,$t(this)))}):(o=Jr(r),o.length?this.each(function(){if(u=$t(this),l=this.nodeType===1&&" "+qt(u)+" ",l){for(f=0;f<o.length;f++)d=o[f],l.indexOf(" "+d+" ")<0&&(l+=d+" ");g=qt(l),u!==g&&this.setAttribute("class",g)}}):this)},removeClass:function(r){var o,l,u,d,f,g;return F(r)?this.each(function(w){h(this).removeClass(r.call(this,w,$t(this)))}):arguments.length?(o=Jr(r),o.length?this.each(function(){if(u=$t(this),l=this.nodeType===1&&" "+qt(u)+" ",l){for(f=0;f<o.length;f++)for(d=o[f];l.indexOf(" "+d+" ")>-1;)l=l.replace(" "+d+" "," ");g=qt(l),u!==g&&this.setAttribute("class",g)}}):this):this.attr("class","")},toggleClass:function(r,o){var l,u,d,f,g=typeof r,w=g==="string"||Array.isArray(r);return F(r)?this.each(function(y){h(this).toggleClass(r.call(this,y,$t(this),o),o)}):typeof o=="boolean"&&w?o?this.addClass(r):this.removeClass(r):(l=Jr(r),this.each(function(){if(w)for(f=h(this),d=0;d<l.length;d++)u=l[d],f.hasClass(u)?f.removeClass(u):f.addClass(u);else(r===void 0||g==="boolean")&&(u=$t(this),u&&j.set(this,"__className__",u),this.setAttribute&&this.setAttribute("class",u||r===!1?"":j.get(this,"__className__")||""))}))},hasClass:function(r){var o,l,u=0;for(o=" "+r+" ";l=this[u++];)if(l.nodeType===1&&(" "+qt($t(l))+" ").indexOf(o)>-1)return!0;return!1}});var Ih=/\r/g;h.fn.extend({val:function(r){var o,l,u,d=this[0];return arguments.length?(u=F(r),this.each(function(f){var g;this.nodeType===1&&(u?g=r.call(this,f,h(this).val()):g=r,g==null?g="":typeof g=="number"?g+="":Array.isArray(g)&&(g=h.map(g,function(w){return w==null?"":w+""})),o=h.valHooks[this.type]||h.valHooks[this.nodeName.toLowerCase()],(!o||!("set"in o)||o.set(this,g,"value")===void 0)&&(this.value=g))})):d?(o=h.valHooks[d.type]||h.valHooks[d.nodeName.toLowerCase()],o&&"get"in o&&(l=o.get(d,"value"))!==void 0?l:(l=d.value,typeof l=="string"?l.replace(Ih,""):l??"")):void 0}}),h.extend({valHooks:{option:{get:function(r){var o=h.find.attr(r,"value");return o??qt(h.text(r))}},select:{get:function(r){var o,l,u,d=r.options,f=r.selectedIndex,g=r.type==="select-one",w=g?null:[],y=g?f+1:d.length;for(f<0?u=y:u=g?f:0;u<y;u++)if(l=d[u],(l.selected||u===f)&&!l.disabled&&(!l.parentNode.disabled||!se(l.parentNode,"optgroup"))){if(o=h(l).val(),g)return o;w.push(o)}return w},set:function(r,o){for(var l,u,d=r.options,f=h.makeArray(o),g=d.length;g--;)u=d[g],(u.selected=h.inArray(h.valHooks.option.get(u),f)>-1)&&(l=!0);return l||(r.selectedIndex=-1),f}}}}),h.each(["radio","checkbox"],function(){h.valHooks[this]={set:function(r,o){if(Array.isArray(o))return r.checked=h.inArray(h(r).val(),o)>-1}},P.checkOn||(h.valHooks[this].get=function(r){return r.getAttribute("value")===null?"on":r.value})});var Jn=e.location,_a={guid:Date.now()},Zr=/\?/;h.parseXML=function(r){var o,l;if(!r||typeof r!="string")return null;try{o=new e.DOMParser().parseFromString(r,"text/xml")}catch{}return l=o&&o.getElementsByTagName("parsererror")[0],(!o||l)&&h.error("Invalid XML: "+(l?h.map(l.childNodes,function(u){return u.textContent}).join(`
`):r)),o};var ma=/^(?:focusinfocus|focusoutblur)$/,va=function(r){r.stopPropagation()};h.extend(h.event,{trigger:function(r,o,l,u){var d,f,g,w,y,b,A,x,S=[l||B],O=E.call(r,"type")?r.type:r,z=E.call(r,"namespace")?r.namespace.split("."):[];if(f=x=g=l=l||B,!(l.nodeType===3||l.nodeType===8)&&!ma.test(O+h.event.triggered)&&(O.indexOf(".")>-1&&(z=O.split("."),O=z.shift(),z.sort()),y=O.indexOf(":")<0&&"on"+O,r=r[h.expando]?r:new h.Event(O,typeof r=="object"&&r),r.isTrigger=u?2:3,r.namespace=z.join("."),r.rnamespace=r.namespace?new RegExp("(^|\\.)"+z.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,r.result=void 0,r.target||(r.target=l),o=o==null?[r]:h.makeArray(o,[r]),A=h.event.special[O]||{},!(!u&&A.trigger&&A.trigger.apply(l,o)===!1))){if(!u&&!A.noBubble&&!ue(l)){for(w=A.delegateType||O,ma.test(w+O)||(f=f.parentNode);f;f=f.parentNode)S.push(f),g=f;g===(l.ownerDocument||B)&&S.push(g.defaultView||g.parentWindow||e)}for(d=0;(f=S[d++])&&!r.isPropagationStopped();)x=f,r.type=d>1?w:A.bindType||O,b=(j.get(f,"events")||Object.create(null))[r.type]&&j.get(f,"handle"),b&&b.apply(f,o),b=y&&f[y],b&&b.apply&&zn(f)&&(r.result=b.apply(f,o),r.result===!1&&r.preventDefault());return r.type=O,!u&&!r.isDefaultPrevented()&&(!A._default||A._default.apply(S.pop(),o)===!1)&&zn(l)&&y&&F(l[O])&&!ue(l)&&(g=l[y],g&&(l[y]=null),h.event.triggered=O,r.isPropagationStopped()&&x.addEventListener(O,va),l[O](),r.isPropagationStopped()&&x.removeEventListener(O,va),h.event.triggered=void 0,g&&(l[y]=g)),r.result}},simulate:function(r,o,l){var u=h.extend(new h.Event,l,{type:r,isSimulated:!0});h.event.trigger(u,null,o)}}),h.fn.extend({trigger:function(r,o){return this.each(function(){h.event.trigger(r,o,this)})},triggerHandler:function(r,o){var l=this[0];if(l)return h.event.trigger(r,o,l,!0)}});var Sh=/\[\]$/,ya=/\r?\n/g,Nh=/^(?:submit|button|image|reset|file)$/i,kh=/^(?:input|select|textarea|keygen)/i;function es(r,o,l,u){var d;if(Array.isArray(o))h.each(o,function(f,g){l||Sh.test(r)?u(r,g):es(r+"["+(typeof g=="object"&&g!=null?f:"")+"]",g,l,u)});else if(!l&&Be(o)==="object")for(d in o)es(r+"["+d+"]",o[d],l,u);else u(r,o)}h.param=function(r,o){var l,u=[],d=function(f,g){var w=F(g)?g():g;u[u.length]=encodeURIComponent(f)+"="+encodeURIComponent(w??"")};if(r==null)return"";if(Array.isArray(r)||r.jquery&&!h.isPlainObject(r))h.each(r,function(){d(this.name,this.value)});else for(l in r)es(l,r[l],o,d);return u.join("&")},h.fn.extend({serialize:function(){return h.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var r=h.prop(this,"elements");return r?h.makeArray(r):this}).filter(function(){var r=this.type;return this.name&&!h(this).is(":disabled")&&kh.test(this.nodeName)&&!Nh.test(r)&&(this.checked||!Yn.test(r))}).map(function(r,o){var l=h(this).val();return l==null?null:Array.isArray(l)?h.map(l,function(u){return{name:o.name,value:u.replace(ya,`\r
`)}}):{name:o.name,value:l.replace(ya,`\r
`)}}).get()}});var Ah=/%20/g,Rh=/#.*$/,xh=/([?&])_=[^&]*/,Ph=/^(.*?):[ \t]*([^\r\n]*)$/mg,Oh=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Dh=/^(?:GET|HEAD)$/,Lh=/^\/\//,wa={},ts={},Ca="*/".concat("*"),ns=B.createElement("a");ns.href=Jn.href;function ba(r){return function(o,l){typeof o!="string"&&(l=o,o="*");var u,d=0,f=o.toLowerCase().match(Ye)||[];if(F(l))for(;u=f[d++];)u[0]==="+"?(u=u.slice(1)||"*",(r[u]=r[u]||[]).unshift(l)):(r[u]=r[u]||[]).push(l)}}function Ea(r,o,l,u){var d={},f=r===ts;function g(w){var y;return d[w]=!0,h.each(r[w]||[],function(b,A){var x=A(o,l,u);if(typeof x=="string"&&!f&&!d[x])return o.dataTypes.unshift(x),g(x),!1;if(f)return!(y=x)}),y}return g(o.dataTypes[0])||!d["*"]&&g("*")}function is(r,o){var l,u,d=h.ajaxSettings.flatOptions||{};for(l in o)o[l]!==void 0&&((d[l]?r:u||(u={}))[l]=o[l]);return u&&h.extend(!0,r,u),r}function Mh(r,o,l){for(var u,d,f,g,w=r.contents,y=r.dataTypes;y[0]==="*";)y.shift(),u===void 0&&(u=r.mimeType||o.getResponseHeader("Content-Type"));if(u){for(d in w)if(w[d]&&w[d].test(u)){y.unshift(d);break}}if(y[0]in l)f=y[0];else{for(d in l){if(!y[0]||r.converters[d+" "+y[0]]){f=d;break}g||(g=d)}f=f||g}if(f)return f!==y[0]&&y.unshift(f),l[f]}function Fh(r,o,l,u){var d,f,g,w,y,b={},A=r.dataTypes.slice();if(A[1])for(g in r.converters)b[g.toLowerCase()]=r.converters[g];for(f=A.shift();f;)if(r.responseFields[f]&&(l[r.responseFields[f]]=o),!y&&u&&r.dataFilter&&(o=r.dataFilter(o,r.dataType)),y=f,f=A.shift(),f){if(f==="*")f=y;else if(y!=="*"&&y!==f){if(g=b[y+" "+f]||b["* "+f],!g){for(d in b)if(w=d.split(" "),w[1]===f&&(g=b[y+" "+w[0]]||b["* "+w[0]],g)){g===!0?g=b[d]:b[d]!==!0&&(f=w[0],A.unshift(w[1]));break}}if(g!==!0)if(g&&r.throws)o=g(o);else try{o=g(o)}catch(x){return{state:"parsererror",error:g?x:"No conversion from "+y+" to "+f}}}}return{state:"success",data:o}}h.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Jn.href,type:"GET",isLocal:Oh.test(Jn.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Ca,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":h.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(r,o){return o?is(is(r,h.ajaxSettings),o):is(h.ajaxSettings,r)},ajaxPrefilter:ba(wa),ajaxTransport:ba(ts),ajax:function(r,o){typeof r=="object"&&(o=r,r=void 0),o=o||{};var l,u,d,f,g,w,y,b,A,x,S=h.ajaxSetup({},o),O=S.context||S,z=S.context&&(O.nodeType||O.jquery)?h(O):h.event,ne=h.Deferred(),Y=h.Callbacks("once memory"),Ie=S.statusCode||{},ve={},Xe={},Je="canceled",te={readyState:0,getResponseHeader:function(ie){var _e;if(y){if(!f)for(f={};_e=Ph.exec(d);)f[_e[1].toLowerCase()+" "]=(f[_e[1].toLowerCase()+" "]||[]).concat(_e[2]);_e=f[ie.toLowerCase()+" "]}return _e==null?null:_e.join(", ")},getAllResponseHeaders:function(){return y?d:null},setRequestHeader:function(ie,_e){return y==null&&(ie=Xe[ie.toLowerCase()]=Xe[ie.toLowerCase()]||ie,ve[ie]=_e),this},overrideMimeType:function(ie){return y==null&&(S.mimeType=ie),this},statusCode:function(ie){var _e;if(ie)if(y)te.always(ie[te.status]);else for(_e in ie)Ie[_e]=[Ie[_e],ie[_e]];return this},abort:function(ie){var _e=ie||Je;return l&&l.abort(_e),zt(0,_e),this}};if(ne.promise(te),S.url=((r||S.url||Jn.href)+"").replace(Lh,Jn.protocol+"//"),S.type=o.method||o.type||S.method||S.type,S.dataTypes=(S.dataType||"*").toLowerCase().match(Ye)||[""],S.crossDomain==null){w=B.createElement("a");try{w.href=S.url,w.href=w.href,S.crossDomain=ns.protocol+"//"+ns.host!=w.protocol+"//"+w.host}catch{S.crossDomain=!0}}if(S.data&&S.processData&&typeof S.data!="string"&&(S.data=h.param(S.data,S.traditional)),Ea(wa,S,o,te),y)return te;b=h.event&&S.global,b&&h.active++===0&&h.event.trigger("ajaxStart"),S.type=S.type.toUpperCase(),S.hasContent=!Dh.test(S.type),u=S.url.replace(Rh,""),S.hasContent?S.data&&S.processData&&(S.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(S.data=S.data.replace(Ah,"+")):(x=S.url.slice(u.length),S.data&&(S.processData||typeof S.data=="string")&&(u+=(Zr.test(u)?"&":"?")+S.data,delete S.data),S.cache===!1&&(u=u.replace(xh,"$1"),x=(Zr.test(u)?"&":"?")+"_="+_a.guid+++x),S.url=u+x),S.ifModified&&(h.lastModified[u]&&te.setRequestHeader("If-Modified-Since",h.lastModified[u]),h.etag[u]&&te.setRequestHeader("If-None-Match",h.etag[u])),(S.data&&S.hasContent&&S.contentType!==!1||o.contentType)&&te.setRequestHeader("Content-Type",S.contentType),te.setRequestHeader("Accept",S.dataTypes[0]&&S.accepts[S.dataTypes[0]]?S.accepts[S.dataTypes[0]]+(S.dataTypes[0]!=="*"?", "+Ca+"; q=0.01":""):S.accepts["*"]);for(A in S.headers)te.setRequestHeader(A,S.headers[A]);if(S.beforeSend&&(S.beforeSend.call(O,te,S)===!1||y))return te.abort();if(Je="abort",Y.add(S.complete),te.done(S.success),te.fail(S.error),l=Ea(ts,S,o,te),!l)zt(-1,"No Transport");else{if(te.readyState=1,b&&z.trigger("ajaxSend",[te,S]),y)return te;S.async&&S.timeout>0&&(g=e.setTimeout(function(){te.abort("timeout")},S.timeout));try{y=!1,l.send(ve,zt)}catch(ie){if(y)throw ie;zt(-1,ie)}}function zt(ie,_e,ei,ss){var Ze,ti,et,bt,Et,Ue=_e;y||(y=!0,g&&e.clearTimeout(g),l=void 0,d=ss||"",te.readyState=ie>0?4:0,Ze=ie>=200&&ie<300||ie===304,ei&&(bt=Mh(S,te,ei)),!Ze&&h.inArray("script",S.dataTypes)>-1&&h.inArray("json",S.dataTypes)<0&&(S.converters["text script"]=function(){}),bt=Fh(S,bt,te,Ze),Ze?(S.ifModified&&(Et=te.getResponseHeader("Last-Modified"),Et&&(h.lastModified[u]=Et),Et=te.getResponseHeader("etag"),Et&&(h.etag[u]=Et)),ie===204||S.type==="HEAD"?Ue="nocontent":ie===304?Ue="notmodified":(Ue=bt.state,ti=bt.data,et=bt.error,Ze=!et)):(et=Ue,(ie||!Ue)&&(Ue="error",ie<0&&(ie=0))),te.status=ie,te.statusText=(_e||Ue)+"",Ze?ne.resolveWith(O,[ti,Ue,te]):ne.rejectWith(O,[te,Ue,et]),te.statusCode(Ie),Ie=void 0,b&&z.trigger(Ze?"ajaxSuccess":"ajaxError",[te,S,Ze?ti:et]),Y.fireWith(O,[te,Ue]),b&&(z.trigger("ajaxComplete",[te,S]),--h.active||h.event.trigger("ajaxStop")))}return te},getJSON:function(r,o,l){return h.get(r,o,l,"json")},getScript:function(r,o){return h.get(r,void 0,o,"script")}}),h.each(["get","post"],function(r,o){h[o]=function(l,u,d,f){return F(u)&&(f=f||d,d=u,u=void 0),h.ajax(h.extend({url:l,type:o,dataType:f,data:u,success:d},h.isPlainObject(l)&&l))}}),h.ajaxPrefilter(function(r){var o;for(o in r.headers)o.toLowerCase()==="content-type"&&(r.contentType=r.headers[o]||"")}),h._evalUrl=function(r,o,l){return h.ajax({url:r,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(u){h.globalEval(u,o,l)}})},h.fn.extend({wrapAll:function(r){var o;return this[0]&&(F(r)&&(r=r.call(this[0])),o=h(r,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&o.insertBefore(this[0]),o.map(function(){for(var l=this;l.firstElementChild;)l=l.firstElementChild;return l}).append(this)),this},wrapInner:function(r){return F(r)?this.each(function(o){h(this).wrapInner(r.call(this,o))}):this.each(function(){var o=h(this),l=o.contents();l.length?l.wrapAll(r):o.append(r)})},wrap:function(r){var o=F(r);return this.each(function(l){h(this).wrapAll(o?r.call(this,l):r)})},unwrap:function(r){return this.parent(r).not("body").each(function(){h(this).replaceWith(this.childNodes)}),this}}),h.expr.pseudos.hidden=function(r){return!h.expr.pseudos.visible(r)},h.expr.pseudos.visible=function(r){return!!(r.offsetWidth||r.offsetHeight||r.getClientRects().length)},h.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var Uh={0:200,1223:204},Zn=h.ajaxSettings.xhr();P.cors=!!Zn&&"withCredentials"in Zn,P.ajax=Zn=!!Zn,h.ajaxTransport(function(r){var o,l;if(P.cors||Zn&&!r.crossDomain)return{send:function(u,d){var f,g=r.xhr();if(g.open(r.type,r.url,r.async,r.username,r.password),r.xhrFields)for(f in r.xhrFields)g[f]=r.xhrFields[f];r.mimeType&&g.overrideMimeType&&g.overrideMimeType(r.mimeType),!r.crossDomain&&!u["X-Requested-With"]&&(u["X-Requested-With"]="XMLHttpRequest");for(f in u)g.setRequestHeader(f,u[f]);o=function(w){return function(){o&&(o=l=g.onload=g.onerror=g.onabort=g.ontimeout=g.onreadystatechange=null,w==="abort"?g.abort():w==="error"?typeof g.status!="number"?d(0,"error"):d(g.status,g.statusText):d(Uh[g.status]||g.status,g.statusText,(g.responseType||"text")!=="text"||typeof g.responseText!="string"?{binary:g.response}:{text:g.responseText},g.getAllResponseHeaders()))}},g.onload=o(),l=g.onerror=g.ontimeout=o("error"),g.onabort!==void 0?g.onabort=l:g.onreadystatechange=function(){g.readyState===4&&e.setTimeout(function(){o&&l()})},o=o("abort");try{g.send(r.hasContent&&r.data||null)}catch(w){if(o)throw w}},abort:function(){o&&o()}}}),h.ajaxPrefilter(function(r){r.crossDomain&&(r.contents.script=!1)}),h.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(r){return h.globalEval(r),r}}}),h.ajaxPrefilter("script",function(r){r.cache===void 0&&(r.cache=!1),r.crossDomain&&(r.type="GET")}),h.ajaxTransport("script",function(r){if(r.crossDomain||r.scriptAttrs){var o,l;return{send:function(u,d){o=h("<script>").attr(r.scriptAttrs||{}).prop({charset:r.scriptCharset,src:r.url}).on("load error",l=function(f){o.remove(),l=null,f&&d(f.type==="error"?404:200,f.type)}),B.head.appendChild(o[0])},abort:function(){l&&l()}}}});var Ta=[],rs=/(=)\?(?=&|$)|\?\?/;h.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var r=Ta.pop()||h.expando+"_"+_a.guid++;return this[r]=!0,r}}),h.ajaxPrefilter("json jsonp",function(r,o,l){var u,d,f,g=r.jsonp!==!1&&(rs.test(r.url)?"url":typeof r.data=="string"&&(r.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&rs.test(r.data)&&"data");if(g||r.dataTypes[0]==="jsonp")return u=r.jsonpCallback=F(r.jsonpCallback)?r.jsonpCallback():r.jsonpCallback,g?r[g]=r[g].replace(rs,"$1"+u):r.jsonp!==!1&&(r.url+=(Zr.test(r.url)?"&":"?")+r.jsonp+"="+u),r.converters["script json"]=function(){return f||h.error(u+" was not called"),f[0]},r.dataTypes[0]="json",d=e[u],e[u]=function(){f=arguments},l.always(function(){d===void 0?h(e).removeProp(u):e[u]=d,r[u]&&(r.jsonpCallback=o.jsonpCallback,Ta.push(u)),f&&F(d)&&d(f[0]),f=d=void 0}),"script"}),P.createHTMLDocument=function(){var r=B.implementation.createHTMLDocument("").body;return r.innerHTML="<form></form><form></form>",r.childNodes.length===2}(),h.parseHTML=function(r,o,l){if(typeof r!="string")return[];typeof o=="boolean"&&(l=o,o=!1);var u,d,f;return o||(P.createHTMLDocument?(o=B.implementation.createHTMLDocument(""),u=o.createElement("base"),u.href=B.location.href,o.head.appendChild(u)):o=B),d=qo.exec(r),f=!l&&[],d?[o.createElement(d[1])]:(d=ea([r],o,f),f&&f.length&&h(f).remove(),h.merge([],d.childNodes))},h.fn.load=function(r,o,l){var u,d,f,g=this,w=r.indexOf(" ");return w>-1&&(u=qt(r.slice(w)),r=r.slice(0,w)),F(o)?(l=o,o=void 0):o&&typeof o=="object"&&(d="POST"),g.length>0&&h.ajax({url:r,type:d||"GET",dataType:"html",data:o}).done(function(y){f=arguments,g.html(u?h("<div>").append(h.parseHTML(y)).find(u):y)}).always(l&&function(y,b){g.each(function(){l.apply(this,f||[y.responseText,b,y])})}),this},h.expr.pseudos.animated=function(r){return h.grep(h.timers,function(o){return r===o.elem}).length},h.offset={setOffset:function(r,o,l){var u,d,f,g,w,y,b,A=h.css(r,"position"),x=h(r),S={};A==="static"&&(r.style.position="relative"),w=x.offset(),f=h.css(r,"top"),y=h.css(r,"left"),b=(A==="absolute"||A==="fixed")&&(f+y).indexOf("auto")>-1,b?(u=x.position(),g=u.top,d=u.left):(g=parseFloat(f)||0,d=parseFloat(y)||0),F(o)&&(o=o.call(r,l,h.extend({},w))),o.top!=null&&(S.top=o.top-w.top+g),o.left!=null&&(S.left=o.left-w.left+d),"using"in o?o.using.call(r,S):x.css(S)}},h.fn.extend({offset:function(r){if(arguments.length)return r===void 0?this:this.each(function(d){h.offset.setOffset(this,r,d)});var o,l,u=this[0];if(u)return u.getClientRects().length?(o=u.getBoundingClientRect(),l=u.ownerDocument.defaultView,{top:o.top+l.pageYOffset,left:o.left+l.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var r,o,l,u=this[0],d={top:0,left:0};if(h.css(u,"position")==="fixed")o=u.getBoundingClientRect();else{for(o=this.offset(),l=u.ownerDocument,r=u.offsetParent||l.documentElement;r&&(r===l.body||r===l.documentElement)&&h.css(r,"position")==="static";)r=r.parentNode;r&&r!==u&&r.nodeType===1&&(d=h(r).offset(),d.top+=h.css(r,"borderTopWidth",!0),d.left+=h.css(r,"borderLeftWidth",!0))}return{top:o.top-d.top-h.css(u,"marginTop",!0),left:o.left-d.left-h.css(u,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var r=this.offsetParent;r&&h.css(r,"position")==="static";)r=r.offsetParent;return r||Vt})}}),h.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(r,o){var l=o==="pageYOffset";h.fn[r]=function(u){return ct(this,function(d,f,g){var w;if(ue(d)?w=d:d.nodeType===9&&(w=d.defaultView),g===void 0)return w?w[o]:d[f];w?w.scrollTo(l?w.pageXOffset:g,l?g:w.pageYOffset):d[f]=g},r,u,arguments.length)}}),h.each(["top","left"],function(r,o){h.cssHooks[o]=oa(P.pixelPosition,function(l,u){if(u)return u=Qn(l,o),Gr.test(u)?h(l).position()[o]+"px":u})}),h.each({Height:"height",Width:"width"},function(r,o){h.each({padding:"inner"+r,content:o,"":"outer"+r},function(l,u){h.fn[u]=function(d,f){var g=arguments.length&&(l||typeof d!="boolean"),w=l||(d===!0||f===!0?"margin":"border");return ct(this,function(y,b,A){var x;return ue(y)?u.indexOf("outer")===0?y["inner"+r]:y.document.documentElement["client"+r]:y.nodeType===9?(x=y.documentElement,Math.max(y.body["scroll"+r],x["scroll"+r],y.body["offset"+r],x["offset"+r],x["client"+r])):A===void 0?h.css(y,b,w):h.style(y,b,A,w)},o,g?d:void 0,g)}})}),h.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(r,o){h.fn[o]=function(l){return this.on(o,l)}}),h.fn.extend({bind:function(r,o,l){return this.on(r,null,o,l)},unbind:function(r,o){return this.off(r,null,o)},delegate:function(r,o,l,u){return this.on(o,r,l,u)},undelegate:function(r,o,l){return arguments.length===1?this.off(r,"**"):this.off(o,r||"**",l)},hover:function(r,o){return this.on("mouseenter",r).on("mouseleave",o||r)}}),h.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(r,o){h.fn[o]=function(l,u){return arguments.length>0?this.on(o,null,l,u):this.trigger(o)}});var Hh=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;h.proxy=function(r,o){var l,u,d;if(typeof o=="string"&&(l=r[o],o=r,r=l),!!F(r))return u=a.call(arguments,2),d=function(){return r.apply(o||this,u.concat(a.call(arguments)))},d.guid=r.guid=r.guid||h.guid++,d},h.holdReady=function(r){r?h.readyWait++:h.ready(!0)},h.isArray=Array.isArray,h.parseJSON=JSON.parse,h.nodeName=se,h.isFunction=F,h.isWindow=ue,h.camelCase=Qe,h.type=Be,h.now=Date.now,h.isNumeric=function(r){var o=h.type(r);return(o==="number"||o==="string")&&!isNaN(r-parseFloat(r))},h.trim=function(r){return r==null?"":(r+"").replace(Hh,"$1")};var Wh=e.jQuery,jh=e.$;return h.noConflict=function(r){return e.$===h&&(e.$=jh),r&&e.jQuery===h&&(e.jQuery=Wh),h},typeof t>"u"&&(e.jQuery=e.$=h),h})})(Ql);var Of=Ql.exports;const Xv=Pf(Of);function eo(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function Xl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Df=Xl,Jl=new Ei("auth","Firebase",Xl());/**
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
 */const rr=new Xs("@firebase/auth");function Lf(n,...e){rr.logLevel<=ce.WARN&&rr.warn(`Auth (${Mn}): ${n}`,...e)}function Gi(n,...e){rr.logLevel<=ce.ERROR&&rr.error(`Auth (${Mn}): ${n}`,...e)}/**
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
 */function yt(n,...e){throw to(n,...e)}function it(n,...e){return to(n,...e)}function Zl(n,e,t){const i=Object.assign(Object.assign({},Df()),{[e]:t});return new Ei("auth","Firebase",i).create(e,{appName:n.name})}function Dt(n){return Zl(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function to(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Jl.create(n,...e)}function G(n,e,...t){if(!n)throw to(e,...t)}function pt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Gi(e),new Error(e)}function wt(n,e){n||pt(e)}/**
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
 */function xs(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Mf(){return Ua()==="http:"||Ua()==="https:"}function Ua(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Ff(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Mf()||ad()||"connection"in navigator)?navigator.onLine:!0}function Uf(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Ti{constructor(e,t){this.shortDelay=e,this.longDelay=t,wt(t>e,"Short delay should be less than long delay!"),this.isMobile=Qs()||Bl()}get(){return Ff()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function no(n,e){wt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class ec{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Hf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Wf=new Ti(3e4,6e4);function Tr(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Fn(n,e,t,i,s={}){return tc(n,s,async()=>{let a={},c={};i&&(e==="GET"?c=i:a={body:JSON.stringify(i)});const p=Ln(Object.assign({key:n.config.apiKey},c)).slice(1),_=await n._getAdditionalHeaders();return _["Content-Type"]="application/json",n.languageCode&&(_["X-Firebase-Locale"]=n.languageCode),ec.fetch()(ic(n,n.config.apiHost,t,p),Object.assign({method:e,headers:_,referrerPolicy:"no-referrer"},a))})}async function tc(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},Hf),e);try{const s=new jf(n),a=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const c=await a.json();if("needConfirmation"in c)throw qi(n,"account-exists-with-different-credential",c);if(a.ok&&!("errorMessage"in c))return c;{const p=a.ok?c.errorMessage:c.error.message,[_,v]=p.split(" : ");if(_==="FEDERATED_USER_ID_ALREADY_LINKED")throw qi(n,"credential-already-in-use",c);if(_==="EMAIL_EXISTS")throw qi(n,"email-already-in-use",c);if(_==="USER_DISABLED")throw qi(n,"user-disabled",c);const T=i[_]||_.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw Zl(n,T,v);yt(n,T)}}catch(s){if(s instanceof Bt)throw s;yt(n,"network-request-failed",{message:String(s)})}}async function nc(n,e,t,i,s={}){const a=await Fn(n,e,t,i,s);return"mfaPendingCredential"in a&&yt(n,"multi-factor-auth-required",{_serverResponse:a}),a}function ic(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?no(n.config,s):`${n.config.apiScheme}://${s}`}class jf{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(it(this.auth,"network-request-failed")),Wf.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function qi(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=it(n,e,i);return s.customData._tokenResponse=t,s}/**
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
 */async function Bf(n,e){return Fn(n,"POST","/v1/accounts:delete",e)}async function rc(n,e){return Fn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function ai(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Vf(n,e=!1){const t=Me(n),i=await t.getIdToken(e),s=io(i);G(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,c=a==null?void 0:a.sign_in_provider;return{claims:s,token:i,authTime:ai(ms(s.auth_time)),issuedAtTime:ai(ms(s.iat)),expirationTime:ai(ms(s.exp)),signInProvider:c||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function ms(n){return Number(n)*1e3}function io(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Gi("JWT malformed, contained fewer than 3 sections"),null;try{const s=Zi(t);return s?JSON.parse(s):(Gi("Failed to decode base64 JWT payload"),null)}catch(s){return Gi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ha(n){const e=io(n);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function gi(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Bt&&qf(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function qf({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class $f{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ps{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ai(this.lastLoginAt),this.creationTime=ai(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function sr(n){var e;const t=n.auth,i=await n.getIdToken(),s=await gi(n,rc(t,{idToken:i}));G(s==null?void 0:s.users.length,t,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const c=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?sc(a.providerUserInfo):[],p=Gf(n.providerData,c),_=n.isAnonymous,v=!(n.email&&a.passwordHash)&&!(p!=null&&p.length),T=_?v:!1,E={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:p,metadata:new Ps(a.createdAt,a.lastLoginAt),isAnonymous:T};Object.assign(n,E)}async function zf(n){const e=Me(n);await sr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Gf(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function sc(n){return n.map(e=>{var{providerId:t}=e,i=eo(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function Kf(n,e){const t=await tc(n,{},async()=>{const i=Ln({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:a}=n.config,c=ic(n,s,"/v1/token",`key=${a}`),p=await n._getAdditionalHeaders();return p["Content-Type"]="application/x-www-form-urlencoded",ec.fetch()(c,{method:"POST",headers:p,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Yf(n,e){return Fn(n,"POST","/v2/accounts:revokeToken",Tr(n,e))}/**
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
 */class wn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ha(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){G(e.length!==0,"internal-error");const t=Ha(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:a}=await Kf(e,t);this.updateTokensAndExpiration(i,s,Number(a))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:a}=t,c=new wn;return i&&(G(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),s&&(G(typeof s=="string","internal-error",{appName:e}),c.accessToken=s),a&&(G(typeof a=="number","internal-error",{appName:e}),c.expirationTime=a),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wn,this.toJSON())}_performRefresh(){return pt("not implemented")}}/**
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
 */function It(n,e){G(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class gt{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,a=eo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $f(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Ps(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await gi(this,this.stsTokenManager.getToken(this.auth,e));return G(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Vf(this,e)}reload(){return zf(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new gt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await sr(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ft(this.auth.app))return Promise.reject(Dt(this.auth));const e=await this.getIdToken();return await gi(this,Bf(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,a,c,p,_,v,T;const E=(i=t.displayName)!==null&&i!==void 0?i:void 0,k=(s=t.email)!==null&&s!==void 0?s:void 0,M=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,P=(c=t.photoURL)!==null&&c!==void 0?c:void 0,F=(p=t.tenantId)!==null&&p!==void 0?p:void 0,ue=(_=t._redirectEventId)!==null&&_!==void 0?_:void 0,B=(v=t.createdAt)!==null&&v!==void 0?v:void 0,at=(T=t.lastLoginAt)!==null&&T!==void 0?T:void 0,{uid:Ke,emailVerified:Be,isAnonymous:Bn,providerData:Vn,stsTokenManager:h}=t;G(Ke&&h,e,"internal-error");const qn=wn.fromJSON(this.name,h);G(typeof Ke=="string",e,"internal-error"),It(E,e.name),It(k,e.name),G(typeof Be=="boolean",e,"internal-error"),G(typeof Bn=="boolean",e,"internal-error"),It(M,e.name),It(P,e.name),It(F,e.name),It(ue,e.name),It(B,e.name),It(at,e.name);const se=new gt({uid:Ke,auth:e,email:k,emailVerified:Be,displayName:E,isAnonymous:Bn,photoURL:P,phoneNumber:M,tenantId:F,stsTokenManager:qn,createdAt:B,lastLoginAt:at});return Vn&&Array.isArray(Vn)&&(se.providerData=Vn.map(jr=>Object.assign({},jr))),ue&&(se._redirectEventId=ue),se}static async _fromIdTokenResponse(e,t,i=!1){const s=new wn;s.updateFromServerResponse(t);const a=new gt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await sr(a),a}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];G(s.localId!==void 0,"internal-error");const a=s.providerUserInfo!==void 0?sc(s.providerUserInfo):[],c=!(s.email&&s.passwordHash)&&!(a!=null&&a.length),p=new wn;p.updateFromIdToken(i);const _=new gt({uid:s.localId,auth:e,stsTokenManager:p,isAnonymous:c}),v={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ps(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(a!=null&&a.length)};return Object.assign(_,v),_}}/**
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
 */const Wa=new Map;function _t(n){wt(n instanceof Function,"Expected a class definition");let e=Wa.get(n);return e?(wt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Wa.set(n,e),e)}/**
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
 */class oc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}oc.type="NONE";const ja=oc;/**
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
 */function Ki(n,e,t){return`firebase:${n}:${e}:${t}`}class Cn{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:a}=this.auth;this.fullUserKey=Ki(this.userKey,s.apiKey,a),this.fullPersistenceKey=Ki("persistence",s.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Cn(_t(ja),e,i);const s=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let a=s[0]||_t(ja);const c=Ki(i,e.config.apiKey,e.name);let p=null;for(const v of t)try{const T=await v._get(c);if(T){const E=gt._fromJSON(e,T);v!==a&&(p=E),a=v;break}}catch{}const _=s.filter(v=>v._shouldAllowMigration);return!a._shouldAllowMigration||!_.length?new Cn(a,e,i):(a=_[0],p&&await a._set(c,p.toJSON()),await Promise.all(t.map(async v=>{if(v!==a)try{await v._remove(c)}catch{}})),new Cn(a,e,i))}}/**
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
 */function Ba(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ac(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hc(e))return"Blackberry";if(dc(e))return"Webos";if(ro(e))return"Safari";if((e.includes("chrome/")||lc(e))&&!e.includes("edge/"))return"Chrome";if(uc(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function ac(n=Ne()){return/firefox\//i.test(n)}function ro(n=Ne()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lc(n=Ne()){return/crios\//i.test(n)}function cc(n=Ne()){return/iemobile/i.test(n)}function uc(n=Ne()){return/android/i.test(n)}function hc(n=Ne()){return/blackberry/i.test(n)}function dc(n=Ne()){return/webos/i.test(n)}function Ir(n=Ne()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Qf(n=Ne()){var e;return Ir(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Xf(){return ld()&&document.documentMode===10}function fc(n=Ne()){return Ir(n)||uc(n)||dc(n)||hc(n)||/windows phone/i.test(n)||cc(n)}function Jf(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function pc(n,e=[]){let t;switch(n){case"Browser":t=Ba(Ne());break;case"Worker":t=`${Ba(Ne())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Mn}/${i}`}/**
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
 */class Zf{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=a=>new Promise((c,p)=>{try{const _=e(a);c(_)}catch(_){p(_)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function ep(n,e={}){return Fn(n,"GET","/v2/passwordPolicy",Tr(n,e))}/**
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
 */const tp=6;class np{constructor(e){var t,i,s,a;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:tp,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,s,a,c,p;const _={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,_),this.validatePasswordCharacterOptions(e,_),_.isValid&&(_.isValid=(t=_.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),_.isValid&&(_.isValid=(i=_.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),_.isValid&&(_.isValid=(s=_.containsLowercaseLetter)!==null&&s!==void 0?s:!0),_.isValid&&(_.isValid=(a=_.containsUppercaseLetter)!==null&&a!==void 0?a:!0),_.isValid&&(_.isValid=(c=_.containsNumericCharacter)!==null&&c!==void 0?c:!0),_.isValid&&(_.isValid=(p=_.containsNonAlphanumericCharacter)!==null&&p!==void 0?p:!0),_}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
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
 */class ip{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Va(this),this.idTokenSubscription=new Va(this),this.beforeStateQueue=new Zf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Jl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_t(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Cn.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await rc(this,{idToken:e}),i=await gt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ft(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(p,p))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,p=s==null?void 0:s._redirectEventId,_=await this.tryRedirectSignIn(e);(!c||c===p)&&(_!=null&&_.user)&&(s=_.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(c){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await sr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Uf()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ft(this.app))return Promise.reject(Dt(this));const t=e?Me(e):null;return t&&G(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ft(this.app)?Promise.reject(Dt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ft(this.app)?Promise.reject(Dt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_t(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ep(this),t=new np(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ei("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Yf(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_t(e)||this._popupRedirectResolver;G(t,this,"argument-error"),this.redirectPersistenceManager=await Cn.create(this,[_t(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let c=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(p,this,"internal-error"),p.then(()=>{c||a(this.currentUser)}),typeof t=="function"){const _=e.addObserver(t,i,s);return()=>{c=!0,_()}}else{const _=e.addObserver(t);return()=>{c=!0,_()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Lf(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Sr(n){return Me(n)}class Va{constructor(e){this.auth=e,this.observer=null,this.addObserver=md(t=>this.observer=t)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let so={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function rp(n){so=n}function sp(n){return so.loadJS(n)}function op(){return so.gapiScript}function ap(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function lp(n,e){const t=Zs(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),a=t.getOptions();if(nr(a,e??{}))return s;yt(s,"already-initialized")}return t.initialize({options:e})}function cp(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(_t);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function up(n,e,t){const i=Sr(n);G(i._canInitEmulator,i,"emulator-config-failed"),G(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,a=gc(e),{host:c,port:p}=hp(e),_=p===null?"":`:${p}`;i.config.emulator={url:`${a}//${c}${_}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:c,port:p,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})}),dp()}function gc(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function hp(n){const e=gc(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const a=s[1];return{host:a,port:qa(i.substr(a.length+1))}}else{const[a,c]=i.split(":");return{host:a,port:qa(c)}}}function qa(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function dp(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class _c{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return pt("not implemented")}_getIdTokenResponse(e){return pt("not implemented")}_linkToIdToken(e,t){return pt("not implemented")}_getReauthenticationResolver(e){return pt("not implemented")}}/**
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
 */async function bn(n,e){return nc(n,"POST","/v1/accounts:signInWithIdp",Tr(n,e))}/**
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
 */const fp="http://localhost";class Zt extends _c{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Zt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):yt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,a=eo(t,["providerId","signInMethod"]);if(!i||!s)return null;const c=new Zt(i,s);return c.idToken=a.idToken||void 0,c.accessToken=a.accessToken||void 0,c.secret=a.secret,c.nonce=a.nonce,c.pendingToken=a.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return bn(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,bn(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,bn(e,t)}buildRequest(){const e={requestUri:fp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ln(t)}return e}}/**
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
 */class mc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ii extends mc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class St extends Ii{constructor(){super("facebook.com")}static credential(e){return Zt._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return St.credential(e.oauthAccessToken)}catch{return null}}}St.FACEBOOK_SIGN_IN_METHOD="facebook.com";St.PROVIDER_ID="facebook.com";/**
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
 */class Nt extends Ii{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Zt._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Nt.credential(t,i)}catch{return null}}}Nt.GOOGLE_SIGN_IN_METHOD="google.com";Nt.PROVIDER_ID="google.com";/**
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
 */class kt extends Ii{constructor(){super("github.com")}static credential(e){return Zt._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kt.credential(e.oauthAccessToken)}catch{return null}}}kt.GITHUB_SIGN_IN_METHOD="github.com";kt.PROVIDER_ID="github.com";/**
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
 */class At extends Ii{constructor(){super("twitter.com")}static credential(e,t){return Zt._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return At.credential(t,i)}catch{return null}}}At.TWITTER_SIGN_IN_METHOD="twitter.com";At.PROVIDER_ID="twitter.com";/**
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
 */async function pp(n,e){return nc(n,"POST","/v1/accounts:signUp",Tr(n,e))}/**
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
 */class Ft{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const a=await gt._fromIdTokenResponse(e,i,s),c=$a(i);return new Ft({user:a,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=$a(i);return new Ft({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function $a(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function Jv(n){var e;if(ft(n.app))return Promise.reject(Dt(n));const t=Sr(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Ft({user:t.currentUser,providerId:null,operationType:"signIn"});const i=await pp(t,{returnSecureToken:!0}),s=await Ft._fromIdTokenResponse(t,"signIn",i,!0);return await t._updateCurrentUser(s.user),s}/**
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
 */class or extends Bt{constructor(e,t,i,s){var a;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,or.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new or(e,t,i,s)}}function vc(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?or._fromErrorAndOperation(n,a,e,i):a})}async function gp(n,e,t=!1){const i=await gi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ft._forOperation(n,"link",i)}/**
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
 */async function _p(n,e,t=!1){const{auth:i}=n;if(ft(i.app))return Promise.reject(Dt(i));const s="reauthenticate";try{const a=await gi(n,vc(i,s,e,n),t);G(a.idToken,i,"internal-error");const c=io(a.idToken);G(c,i,"internal-error");const{sub:p}=c;return G(n.uid===p,i,"user-mismatch"),Ft._forOperation(n,s,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&yt(i,"user-mismatch"),a}}/**
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
 */async function mp(n,e,t=!1){if(ft(n.app))return Promise.reject(Dt(n));const i="signIn",s=await vc(n,i,e),a=await Ft._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(a.user),a}function vp(n,e,t,i){return Me(n).onIdTokenChanged(e,t,i)}function yp(n,e,t){return Me(n).beforeAuthStateChanged(e,t)}function Zv(n,e,t,i){return Me(n).onAuthStateChanged(e,t,i)}const ar="__sak";/**
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
 */class yc{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ar,"1"),this.storage.removeItem(ar),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function wp(){const n=Ne();return ro(n)||Ir(n)}const Cp=1e3,bp=10;class wc extends yc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=wp()&&Jf(),this.fallbackToPolling=fc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,p,_)=>{this.notifyListeners(c,_)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const c=this.storage.getItem(i);if(e.newValue!==c)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const s=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},a=this.storage.getItem(i);Xf()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,bp):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Cp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}wc.type="LOCAL";const Ep=wc;/**
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
 */class Cc extends yc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Cc.type="SESSION";const bc=Cc;/**
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
 */function Tp(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Nr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new Nr(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:a}=t.data,c=this.handlersMap[s];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const p=Array.from(c).map(async v=>v(t.origin,a)),_=await Tp(p);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:_})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Nr.receivers=[];/**
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
 */function oo(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Ip{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,c;return new Promise((p,_)=>{const v=oo("",20);s.port1.start();const T=setTimeout(()=>{_(new Error("unsupported_event"))},i);c={messageChannel:s,onMessage(E){const k=E;if(k.data.eventId===v)switch(k.data.status){case"ack":clearTimeout(T),a=setTimeout(()=>{_(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),p(k.data.response);break;default:clearTimeout(T),clearTimeout(a),_(new Error("invalid_response"));break}}},this.handlers.add(c),s.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[s.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function rt(){return window}function Sp(n){rt().location.href=n}/**
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
 */function Ec(){return typeof rt().WorkerGlobalScope<"u"&&typeof rt().importScripts=="function"}async function Np(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kp(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Ap(){return Ec()?self:null}/**
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
 */const Tc="firebaseLocalStorageDb",Rp=1,lr="firebaseLocalStorage",Ic="fbase_key";class Si{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function kr(n,e){return n.transaction([lr],e?"readwrite":"readonly").objectStore(lr)}function xp(){const n=indexedDB.deleteDatabase(Tc);return new Si(n).toPromise()}function Os(){const n=indexedDB.open(Tc,Rp);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(lr,{keyPath:Ic})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(lr)?e(i):(i.close(),await xp(),e(await Os()))})})}async function za(n,e,t){const i=kr(n,!0).put({[Ic]:e,value:t});return new Si(i).toPromise()}async function Pp(n,e){const t=kr(n,!1).get(e),i=await new Si(t).toPromise();return i===void 0?null:i.value}function Ga(n,e){const t=kr(n,!0).delete(e);return new Si(t).toPromise()}const Op=800,Dp=3;class Sc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Os(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Dp)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ec()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Nr._getInstance(Ap()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Np(),!this.activeServiceWorker)return;this.sender=new Ip(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Os();return await za(e,ar,"1"),await Ga(e,ar),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>za(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Pp(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ga(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const a=kr(s,!1).getAll();return new Si(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:a}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Op)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Sc.type="LOCAL";const Lp=Sc;new Ti(3e4,6e4);/**
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
 */function Mp(n,e){return e?_t(e):(G(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class ao extends _c{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return bn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return bn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Fp(n){return mp(n.auth,new ao(n),n.bypassAuthState)}function Up(n){const{auth:e,user:t}=n;return G(t,e,"internal-error"),_p(t,new ao(n),n.bypassAuthState)}async function Hp(n){const{auth:e,user:t}=n;return G(t,e,"internal-error"),gp(t,new ao(n),n.bypassAuthState)}/**
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
 */class Nc{constructor(e,t,i,s,a=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:a,error:c,type:p}=e;if(c){this.reject(c);return}const _={auth:this.auth,requestUri:t,sessionId:i,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(_))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Fp;case"linkViaPopup":case"linkViaRedirect":return Hp;case"reauthViaPopup":case"reauthViaRedirect":return Up;default:yt(this.auth,"internal-error")}}resolve(e){wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Wp=new Ti(2e3,1e4);class mn extends Nc{constructor(e,t,i,s,a){super(e,t,s,a),this.provider=i,this.authWindow=null,this.pollId=null,mn.currentPopupAction&&mn.currentPopupAction.cancel(),mn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){wt(this.filter.length===1,"Popup operations only handle one event");const e=oo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(it(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(it(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(it(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Wp.get())};e()}}mn.currentPopupAction=null;/**
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
 */const jp="pendingRedirect",Yi=new Map;class Bp extends Nc{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Yi.get(this.auth._key());if(!e){try{const i=await Vp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Yi.set(this.auth._key(),e)}return this.bypassAuthState||Yi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Vp(n,e){const t=zp(e),i=$p(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function qp(n,e){Yi.set(n._key(),e)}function $p(n){return _t(n._redirectPersistence)}function zp(n){return Ki(jp,n.config.apiKey,n.name)}async function Gp(n,e,t=!1){if(ft(n.app))return Promise.reject(Dt(n));const i=Sr(n),s=Mp(i,e),c=await new Bp(i,s,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
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
 */const Kp=10*60*1e3;class Yp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Qp(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!kc(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(it(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Kp&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ka(e))}saveEventToCache(e){this.cachedEventUids.add(Ka(e)),this.lastProcessedEventTime=Date.now()}}function Ka(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function kc({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Qp(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kc(n);default:return!1}}/**
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
 */async function Xp(n,e={}){return Fn(n,"GET","/v1/projects",e)}/**
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
 */const Jp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Zp=/^https?/;async function eg(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Xp(n);for(const t of e)try{if(tg(t))return}catch{}yt(n,"unauthorized-domain")}function tg(n){const e=xs(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!Zp.test(t))return!1;if(Jp.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const ng=new Ti(3e4,6e4);function Ya(){const n=rt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function ig(n){return new Promise((e,t)=>{var i,s,a;function c(){Ya(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ya(),t(it(n,"network-request-failed"))},timeout:ng.get()})}if(!((s=(i=rt().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((a=rt().gapi)===null||a===void 0)&&a.load)c();else{const p=ap("iframefcb");return rt()[p]=()=>{gapi.load?c():t(it(n,"network-request-failed"))},sp(`${op()}?onload=${p}`).catch(_=>t(_))}}).catch(e=>{throw Qi=null,e})}let Qi=null;function rg(n){return Qi=Qi||ig(n),Qi}/**
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
 */const sg=new Ti(5e3,15e3),og="__/auth/iframe",ag="emulator/auth/iframe",lg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ug(n){const e=n.config;G(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?no(e,ag):`https://${n.config.authDomain}/${og}`,i={apiKey:e.apiKey,appName:n.name,v:Mn},s=cg.get(n.config.apiHost);s&&(i.eid=s);const a=n._getFrameworks();return a.length&&(i.fw=a.join(",")),`${t}?${Ln(i).slice(1)}`}async function hg(n){const e=await rg(n),t=rt().gapi;return G(t,n,"internal-error"),e.open({where:document.body,url:ug(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lg,dontclear:!0},i=>new Promise(async(s,a)=>{await i.restyle({setHideOnLeave:!1});const c=it(n,"network-request-failed"),p=rt().setTimeout(()=>{a(c)},sg.get());function _(){rt().clearTimeout(p),s(i)}i.ping(_).then(_,()=>{a(c)})}))}/**
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
 */const dg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fg=500,pg=600,gg="_blank",_g="http://localhost";class Qa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mg(n,e,t,i=fg,s=pg){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let p="";const _=Object.assign(Object.assign({},dg),{width:i.toString(),height:s.toString(),top:a,left:c}),v=Ne().toLowerCase();t&&(p=lc(v)?gg:t),ac(v)&&(e=e||_g,_.scrollbars="yes");const T=Object.entries(_).reduce((k,[M,P])=>`${k}${M}=${P},`,"");if(Qf(v)&&p!=="_self")return vg(e||"",p),new Qa(null);const E=window.open(e||"",p,T);G(E,n,"popup-blocked");try{E.focus()}catch{}return new Qa(E)}function vg(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const yg="__/auth/handler",wg="emulator/auth/handler",Cg=encodeURIComponent("fac");async function Xa(n,e,t,i,s,a){G(n.config.authDomain,n,"auth-domain-config-required"),G(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Mn,eventId:s};if(e instanceof mc){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",er(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[T,E]of Object.entries({}))c[T]=E}if(e instanceof Ii){const T=e.getScopes().filter(E=>E!=="");T.length>0&&(c.scopes=T.join(","))}n.tenantId&&(c.tid=n.tenantId);const p=c;for(const T of Object.keys(p))p[T]===void 0&&delete p[T];const _=await n._getAppCheckToken(),v=_?`#${Cg}=${encodeURIComponent(_)}`:"";return`${bg(n)}?${Ln(p).slice(1)}${v}`}function bg({config:n}){return n.emulator?no(n,wg):`https://${n.authDomain}/${yg}`}/**
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
 */const vs="webStorageSupport";class Eg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bc,this._completeRedirectFn=Gp,this._overrideRedirectResult=qp}async _openPopup(e,t,i,s){var a;wt((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const c=await Xa(e,t,i,xs(),s);return mg(e,c,oo())}async _openRedirect(e,t,i,s){await this._originValidation(e);const a=await Xa(e,t,i,xs(),s);return Sp(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:a}=this.eventManagers[t];return s?Promise.resolve(s):(wt(a,"If manager is not set, promise should be"),a)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await hg(e),i=new Yp(e);return t.register("authEvent",s=>(G(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(vs,{type:vs},s=>{var a;const c=(a=s==null?void 0:s[0])===null||a===void 0?void 0:a[vs];c!==void 0&&t(!!c),yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=eg(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return fc()||ro()||Ir()}}const Tg=Eg;var Ja="@firebase/auth",Za="1.7.3";/**
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
 */class Ig{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Sg(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ng(n){Nn(new Xt("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:c,authDomain:p}=i.options;G(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const _={apiKey:c,authDomain:p,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pc(n)},v=new ip(i,s,a,_);return cp(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Nn(new Xt("auth-internal",e=>{const t=Sr(e.getProvider("auth").getImmediate());return(i=>new Ig(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ot(Ja,Za,Sg(n)),Ot(Ja,Za,"esm2017")}/**
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
 */const kg=5*60,Ag=jl("authIdTokenMaxAge")||kg;let el=null;const Rg=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Ag)return;const s=t==null?void 0:t.token;el!==s&&(el=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ey(n=Gl()){const e=Zs(n,"auth");if(e.isInitialized())return e.getImmediate();const t=lp(n,{popupRedirectResolver:Tg,persistence:[Lp,Ep,bc]}),i=jl("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(i,location.origin);if(location.origin===a.origin){const c=Rg(a.toString());yp(t,c,()=>c(t.currentUser)),vp(t,p=>c(p))}}const s=Hl("auth");return s&&up(t,`http://${s}`),t}function xg(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}rp({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const a=it("internal-error");a.customData=s,t(a)},i.type="text/javascript",i.charset="UTF-8",xg().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ng("Browser");var tl={};const nl="@firebase/database",il="1.0.5";/**
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
 */let Ac="";function Pg(n){Ac=n}/**
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
 */class Og{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),we(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:fi(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Dg{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return st(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Rc=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Og(e)}}catch{}return new Dg},Qt=Rc("localStorage"),Lg=Rc("sessionStorage");/**
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
 */const En=new Xs("@firebase/database"),Mg=function(){let n=1;return function(){return n++}}(),xc=function(n){const e=wd(n),t=new _d;t.update(e);const i=t.digest();return Ks.encodeByteArray(i)},Ni=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Ni.apply(null,i):typeof i=="object"?e+=we(i):e+=i,e+=" "}return e};let li=null,rl=!0;const Fg=function(n,e){D(!e,"Can't turn on custom loggers persistently."),En.logLevel=ce.VERBOSE,li=En.log.bind(En)},Ee=function(...n){if(rl===!0&&(rl=!1,li===null&&Lg.get("logging_enabled")===!0&&Fg()),li){const e=Ni.apply(null,n);li(e)}},ki=function(n){return function(...e){Ee(n,...e)}},Ds=function(...n){const e="FIREBASE INTERNAL ERROR: "+Ni(...n);En.error(e)},Ct=function(...n){const e=`FIREBASE FATAL ERROR: ${Ni(...n)}`;throw En.error(e),new Error(e)},Re=function(...n){const e="FIREBASE WARNING: "+Ni(...n);En.warn(e)},Ug=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Re("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ar=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Hg=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},kn="[MIN_NAME]",en="[MAX_NAME]",rn=function(n,e){if(n===e)return 0;if(n===kn||e===en)return-1;if(e===kn||n===en)return 1;{const t=sl(n),i=sl(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},Wg=function(n,e){return n===e?0:n<e?-1:1},ii=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+we(e))},lo=function(n){if(typeof n!="object"||n===null)return we(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=we(e[i]),t+=":",t+=lo(n[e[i]]);return t+="}",t},Pc=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function Te(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Oc=function(n){D(!Ar(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,a,c,p,_;n===0?(a=0,c=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(p=Math.min(Math.floor(Math.log(n)/Math.LN2),i),a=p+i,c=Math.round(n*Math.pow(2,t-p)-Math.pow(2,t))):(a=0,c=Math.round(n/Math.pow(2,1-i-t))));const v=[];for(_=t;_;_-=1)v.push(c%2?1:0),c=Math.floor(c/2);for(_=e;_;_-=1)v.push(a%2?1:0),a=Math.floor(a/2);v.push(s?1:0),v.reverse();const T=v.join("");let E="";for(_=0;_<64;_+=8){let k=parseInt(T.substr(_,8),2).toString(16);k.length===1&&(k="0"+k),E=E+k}return E.toLowerCase()},jg=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Bg=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Vg(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const qg=new RegExp("^-?(0*)\\d{1,10}$"),$g=-2147483648,zg=2147483647,sl=function(n){if(qg.test(n)){const e=Number(n);if(e>=$g&&e<=zg)return e}return null},Un=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Re("Exception was thrown by user callback.",t),e},Math.floor(0))}},Gg=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ci=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Kg{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Re(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Yg{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Ee("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Re(e)}}class Xi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Xi.OWNER="owner";/**
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
 */const co="5",Dc="v",Lc="s",Mc="r",Fc="f",Uc=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Hc="ls",Wc="p",Ls="ac",jc="websocket",Bc="long_polling";/**
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
 */class Vc{constructor(e,t,i,s,a=!1,c="",p=!1,_=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=a,this.persistenceKey=c,this.includeNamespaceInQueryParams=p,this.isUsingEmulator=_,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Qt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Qt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Qg(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function qc(n,e,t){D(typeof e=="string","typeof type must == string"),D(typeof t=="object","typeof params must == object");let i;if(e===jc)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Bc)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Qg(n)&&(t.ns=n.namespace);const s=[];return Te(t,(a,c)=>{s.push(a+"="+c)}),i+s.join("&")}/**
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
 */class Xg{constructor(){this.counters_={}}incrementCounter(e,t=1){st(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Zh(this.counters_)}}/**
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
 */const ys={},ws={};function uo(n){const e=n.toString();return ys[e]||(ys[e]=new Xg),ys[e]}function Jg(n,e){const t=n.toString();return ws[t]||(ws[t]=e()),ws[t]}/**
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
 */class Zg{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Un(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const ol="start",e_="close",t_="pLPCommand",n_="pRTLPCB",$c="id",zc="pw",Gc="ser",i_="cb",r_="seg",s_="ts",o_="d",a_="dframe",Kc=1870,Yc=30,l_=Kc-Yc,c_=25e3,u_=3e4;class vn{constructor(e,t,i,s,a,c,p){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=a,this.transportSessionId=c,this.lastSessionId=p,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ki(e),this.stats_=uo(t),this.urlFn=_=>(this.appCheckToken&&(_[Ls]=this.appCheckToken),qc(t,Bc,_))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Zg(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(u_)),Hg(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ho((...a)=>{const[c,p,_,v,T]=a;if(this.incrementIncomingBytes_(a),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===ol)this.id=p,this.password=_;else if(c===e_)p?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(p,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...a)=>{const[c,p]=a;this.incrementIncomingBytes_(a),this.myPacketOrderer.handleResponse(c,p)},()=>{this.onClosed_()},this.urlFn);const i={};i[ol]="t",i[Gc]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[i_]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Dc]=co,this.transportSessionId&&(i[Lc]=this.transportSessionId),this.lastSessionId&&(i[Hc]=this.lastSessionId),this.applicationId&&(i[Wc]=this.applicationId),this.appCheckToken&&(i[Ls]=this.appCheckToken),typeof location<"u"&&location.hostname&&Uc.test(location.hostname)&&(i[Mc]=Fc);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){vn.forceAllow_=!0}static forceDisallow(){vn.forceDisallow_=!0}static isAvailable(){return vn.forceAllow_?!0:!vn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!jg()&&!Bg()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=we(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Fl(t),s=Pc(i,l_);for(let a=0;a<s.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[a]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[a_]="t",i[$c]=e,i[zc]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=we(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class ho{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Mg(),window[t_+this.uniqueCallbackIdentifier]=e,window[n_+this.uniqueCallbackIdentifier]=t,this.myIFrame=ho.createIFrame_();let a="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(a='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(p){Ee("frame writing exception"),p.stack&&Ee(p.stack),Ee(p)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ee("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[$c]=this.myID,e[zc]=this.myPW,e[Gc]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Yc+i.length<=Kc;){const c=this.pendingSegs.shift();i=i+"&"+r_+s+"="+c.seg+"&"+s_+s+"="+c.ts+"&"+o_+s+"="+c.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(c_)),a=()=>{clearTimeout(s),i()};this.addTag(e,a)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{Ee("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const h_=16384,d_=45e3;let cr=null;typeof MozWebSocket<"u"?cr=MozWebSocket:typeof WebSocket<"u"&&(cr=WebSocket);class $e{constructor(e,t,i,s,a,c,p){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ki(this.connId),this.stats_=uo(t),this.connURL=$e.connectionURL_(t,c,p,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,a){const c={};return c[Dc]=co,typeof location<"u"&&location.hostname&&Uc.test(location.hostname)&&(c[Mc]=Fc),t&&(c[Lc]=t),i&&(c[Hc]=i),s&&(c[Ls]=s),a&&(c[Wc]=a),qc(e,jc,c)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Qt.set("previous_websocket_failure",!0);try{let i;Vl(),this.mySock=new cr(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){$e.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&cr!==null&&!$e.forceDisallow_}static previouslyFailed(){return Qt.isInMemoryStorage||Qt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Qt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=fi(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(D(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=we(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Pc(t,h_);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(d_))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}$e.responsesRequiredToBeHealthy=2;$e.healthyTimeout=3e4;/**
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
 */class _i{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[vn,$e]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=$e&&$e.isAvailable();let i=t&&!$e.previouslyFailed();if(e.webSocketOnly&&(t||Re("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[$e];else{const s=this.transports_=[];for(const a of _i.ALL_TRANSPORTS)a&&a.isAvailable()&&s.push(a);_i.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}_i.globalTransportInitialized_=!1;/**
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
 */const f_=6e4,p_=5e3,g_=10*1024,__=100*1024,Cs="t",al="d",m_="s",ll="r",v_="e",cl="o",ul="a",hl="n",dl="p",y_="h";class w_{constructor(e,t,i,s,a,c,p,_,v,T){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=a,this.onMessage_=c,this.onReady_=p,this.onDisconnect_=_,this.onKill_=v,this.lastSessionId=T,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ki("c:"+this.id+":"),this.transportManager_=new _i(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=ci(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>__?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>g_?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Cs in e){const t=e[Cs];t===ul?this.upgradeIfSecondaryHealthy_():t===ll?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===cl&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=ii("t",e),i=ii("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:dl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ul,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:hl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=ii("t",e),i=ii("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=ii(Cs,e);if(al in e){const i=e[al];if(t===y_){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===hl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===m_?this.onConnectionShutdown_(i):t===ll?this.onReset_(i):t===v_?Ds("Server Error: "+i):t===cl?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ds("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),co!==i&&Re("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),ci(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(f_))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ci(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(p_))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:dl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Qt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Qc{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class Xc{constructor(e){this.allowedEvents_=e,this.listeners_={},D(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let a=0;a<s.length;a++)if(s[a].callback===t&&(!i||i===s[a].context)){s.splice(a,1);return}}validateEventType_(e){D(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class ur extends Xc{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Qs()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ur}getInitialEvent(e){return D(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const fl=32,pl=768;class ae{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function re(){return new ae("")}function Q(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Ut(n){return n.pieces_.length-n.pieceNum_}function he(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new ae(n.pieces_,e)}function fo(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function C_(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function mi(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Jc(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new ae(e,0)}function pe(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof ae)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new ae(t,0)}function X(n){return n.pieceNum_>=n.pieces_.length}function Ae(n,e){const t=Q(n),i=Q(e);if(t===null)return e;if(t===i)return Ae(he(n),he(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function b_(n,e){const t=mi(n,0),i=mi(e,0);for(let s=0;s<t.length&&s<i.length;s++){const a=rn(t[s],i[s]);if(a!==0)return a}return t.length===i.length?0:t.length<i.length?-1:1}function po(n,e){if(Ut(n)!==Ut(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function We(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Ut(n)>Ut(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class E_{constructor(e,t){this.errorPrefix_=t,this.parts_=mi(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Er(this.parts_[i]);Zc(this)}}function T_(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Er(e),Zc(n)}function I_(n){const e=n.parts_.pop();n.byteLength_-=Er(e),n.parts_.length>0&&(n.byteLength_-=1)}function Zc(n){if(n.byteLength_>pl)throw new Error(n.errorPrefix_+"has a key path longer than "+pl+" bytes ("+n.byteLength_+").");if(n.parts_.length>fl)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+fl+") or object contains a cycle "+Yt(n))}function Yt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class go extends Xc{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new go}getInitialEvent(e){return D(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ri=1e3,S_=60*5*1e3,gl=30*1e3,N_=1.3,k_=3e4,A_="server_kill",_l=3;class vt extends Qc{constructor(e,t,i,s,a,c,p,_){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=a,this.authTokenProvider_=c,this.appCheckTokenProvider_=p,this.authOverride_=_,this.id=vt.nextPersistentConnectionId_++,this.log_=ki("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ri,this.maxReconnectDelay_=S_,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,_&&!Vl())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");go.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ur.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,a={r:s,a:e,b:t};this.log_(we(a)),D(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new nt,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const p=c.d;c.s==="ok"?t.resolve(p):t.reject(p)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(a),t.promise}listen(e,t,i,s){this.initConnection_();const a=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+a),this.listens.has(c)||this.listens.set(c,new Map),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),D(!this.listens.get(c).has(a),"listen() called twice for same path/queryId.");const p={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(c).set(a,p),this.connected_&&this.sendListen_(p)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const a={p:i},c="q";e.tag&&(a.q=t._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest(c,a,p=>{const _=p.d,v=p.s;vt.warnOnListenWarnings_(_,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",p),v!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(v,_))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&st(e,"w")){const i=In(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',a=t._path.toString();Re(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${a} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||gd(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=gl)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=pd(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const a=s.s,c=s.d||"error";this.authToken_===e&&(a==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(a,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const a={p:e},c="n";s&&(a.q=i,a.t=s),this.sendRequest(c,a)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const a={p:t,d:i};this.log_("onDisconnect "+e,a),this.sendRequest(e,a,c=>{s&&setTimeout(()=>{s(c.s,c.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,a){this.initConnection_();const c={p:t,d:i};a!==void 0&&(c.h=a),this.outstandingPuts_.push({action:e,request:c,onComplete:s}),this.outstandingPutCount_++;const p=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(p):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,a=>{this.log_(t+" response",a),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(a.s,a.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const a=i.d;this.log_("reportStats","Error sending stats: "+a)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+we(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Ds("Unrecognized action received from server: "+we(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){D(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ri,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ri,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>k_&&(this.reconnectDelay_=ri),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*N_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+vt.nextConnectionId_++,a=this.lastSessionId;let c=!1,p=null;const _=function(){p?p.close():(c=!0,i())},v=function(E){D(p,"sendRequest call when we're not connected not allowed."),p.sendRequest(E)};this.realtime_={close:_,sendRequest:v};const T=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[E,k]=await Promise.all([this.authTokenProvider_.getToken(T),this.appCheckTokenProvider_.getToken(T)]);c?Ee("getToken() completed but was canceled"):(Ee("getToken() completed. Creating connection."),this.authToken_=E&&E.accessToken,this.appCheckToken_=k&&k.token,p=new w_(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,M=>{Re(M+" ("+this.repoInfo_.toString()+")"),this.interrupt(A_)},a))}catch(E){this.log_("Failed to get token: "+E),c||(this.repoInfo_.nodeAdmin&&Re(E),_())}}}interrupt(e){Ee("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ee("Resuming connection for reason: "+e),delete this.interruptReasons_[e],er(this.interruptReasons_)&&(this.reconnectDelay_=ri,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(a=>lo(a)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new ae(e).toString();let s;if(this.listens.has(i)){const a=this.listens.get(i);s=a.get(t),a.delete(t),a.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){Ee("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=_l&&(this.reconnectDelay_=gl,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Ee("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=_l&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Ac.replace(/\./g,"-")]=1,Qs()?e["framework.cordova"]=1:Bl()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ur.getInstance().currentlyOnline();return er(this.interruptReasons_)&&e}}vt.nextPersistentConnectionId_=0;vt.nextConnectionId_=0;/**
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
 */class Rr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new J(kn,e),s=new J(kn,t);return this.compare(i,s)!==0}minPost(){return J.MIN}}/**
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
 */let $i;class eu extends Rr{static get __EMPTY_NODE(){return $i}static set __EMPTY_NODE(e){$i=e}compare(e,t){return rn(e.name,t.name)}isDefinedOn(e){throw Dn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return J.MIN}maxPost(){return new J(en,$i)}makePost(e,t){return D(typeof e=="string","KeyIndex indexValue must always be a string."),new J(e,$i)}toString(){return".key"}}const Tn=new eu;/**
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
 */class zi{constructor(e,t,i,s,a=null){this.isReverse_=s,this.resultGenerator_=a,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=t?i(e.key,t):1,s&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class be{constructor(e,t,i,s,a){this.key=e,this.value=t,this.color=i??be.RED,this.left=s??Le.EMPTY_NODE,this.right=a??Le.EMPTY_NODE}copy(e,t,i,s,a){return new be(e??this.key,t??this.value,i??this.color,s??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const a=i(e,s.key);return a<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):a===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Le.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return Le.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}be.RED=!0;be.BLACK=!1;class R_{copy(e,t,i,s,a){return this}insert(e,t,i){return new be(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Le{constructor(e,t=Le.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Le(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,be.BLACK,null,null))}remove(e){return new Le(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,be.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new zi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new zi(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new zi(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new zi(this.root_,null,this.comparator_,!0,e)}}Le.EMPTY_NODE=new R_;/**
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
 */function x_(n,e){return rn(n.name,e.name)}function _o(n,e){return rn(n,e)}/**
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
 */let Ms;function P_(n){Ms=n}const tu=function(n){return typeof n=="number"?"number:"+Oc(n):"string:"+n},nu=function(n){if(n.isLeafNode()){const e=n.val();D(typeof e=="string"||typeof e=="number"||typeof e=="object"&&st(e,".sv"),"Priority must be a string or number.")}else D(n===Ms||n.isEmpty(),"priority of unexpected type.");D(n===Ms||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let ml;class Ce{constructor(e,t=Ce.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,D(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),nu(this.priorityNode_)}static set __childrenNodeConstructor(e){ml=e}static get __childrenNodeConstructor(){return ml}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ce(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ce.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return X(e)?this:Q(e)===".priority"?this.priorityNode_:Ce.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Ce.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=Q(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(D(i!==".priority"||Ut(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Ce.__childrenNodeConstructor.EMPTY_NODE.updateChild(he(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+tu(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Oc(this.value_):e+=this.value_,this.lazyHash_=xc(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ce.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ce.__childrenNodeConstructor?-1:(D(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=Ce.VALUE_TYPE_ORDER.indexOf(t),a=Ce.VALUE_TYPE_ORDER.indexOf(i);return D(s>=0,"Unknown leaf type: "+t),D(a>=0,"Unknown leaf type: "+i),s===a?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Ce.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let iu,ru;function O_(n){iu=n}function D_(n){ru=n}class L_ extends Rr{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),a=i.compareTo(s);return a===0?rn(e.name,t.name):a}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return J.MIN}maxPost(){return new J(en,new Ce("[PRIORITY-POST]",ru))}makePost(e,t){const i=iu(e);return new J(t,new Ce("[PRIORITY-POST]",i))}toString(){return".priority"}}const ge=new L_;/**
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
 */const M_=Math.log(2);class F_{constructor(e){const t=a=>parseInt(Math.log(a)/M_,10),i=a=>parseInt(Array(a+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const hr=function(n,e,t,i){n.sort(e);const s=function(_,v){const T=v-_;let E,k;if(T===0)return null;if(T===1)return E=n[_],k=t?t(E):E,new be(k,E.node,be.BLACK,null,null);{const M=parseInt(T/2,10)+_,P=s(_,M),F=s(M+1,v);return E=n[M],k=t?t(E):E,new be(k,E.node,be.BLACK,P,F)}},a=function(_){let v=null,T=null,E=n.length;const k=function(P,F){const ue=E-P,B=E;E-=P;const at=s(ue+1,B),Ke=n[ue],Be=t?t(Ke):Ke;M(new be(Be,Ke.node,F,null,at))},M=function(P){v?(v.left=P,v=P):(T=P,v=P)};for(let P=0;P<_.count;++P){const F=_.nextBitIsOne(),ue=Math.pow(2,_.count-(P+1));F?k(ue,be.BLACK):(k(ue,be.BLACK),k(ue,be.RED))}return T},c=new F_(n.length),p=a(c);return new Le(i||e,p)};/**
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
 */let bs;const _n={};class mt{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return D(_n&&ge,"ChildrenNode.ts has not been loaded"),bs=bs||new mt({".priority":_n},{".priority":ge}),bs}get(e){const t=In(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Le?t:null}hasIndex(e){return st(this.indexSet_,e.toString())}addIndex(e,t){D(e!==Tn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const a=t.getIterator(J.Wrap);let c=a.getNext();for(;c;)s=s||e.isDefinedOn(c.node),i.push(c),c=a.getNext();let p;s?p=hr(i,e.getCompare()):p=_n;const _=e.toString(),v=Object.assign({},this.indexSet_);v[_]=e;const T=Object.assign({},this.indexes_);return T[_]=p,new mt(T,v)}addToIndexes(e,t){const i=tr(this.indexes_,(s,a)=>{const c=In(this.indexSet_,a);if(D(c,"Missing index implementation for "+a),s===_n)if(c.isDefinedOn(e.node)){const p=[],_=t.getIterator(J.Wrap);let v=_.getNext();for(;v;)v.name!==e.name&&p.push(v),v=_.getNext();return p.push(e),hr(p,c.getCompare())}else return _n;else{const p=t.get(e.name);let _=s;return p&&(_=_.remove(new J(e.name,p))),_.insert(e,e.node)}});return new mt(i,this.indexSet_)}removeFromIndexes(e,t){const i=tr(this.indexes_,s=>{if(s===_n)return s;{const a=t.get(e.name);return a?s.remove(new J(e.name,a)):s}});return new mt(i,this.indexSet_)}}/**
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
 */let si;class q{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&nu(this.priorityNode_),this.children_.isEmpty()&&D(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return si||(si=new q(new Le(_o),null,mt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||si}updatePriority(e){return this.children_.isEmpty()?this:new q(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?si:t}}getChild(e){const t=Q(e);return t===null?this:this.getImmediateChild(t).getChild(he(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(D(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new J(e,t);let s,a;t.isEmpty()?(s=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),a=this.indexMap_.addToIndexes(i,this.children_));const c=s.isEmpty()?si:this.priorityNode_;return new q(s,c,a)}}updateChild(e,t){const i=Q(e);if(i===null)return t;{D(Q(e)!==".priority"||Ut(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(he(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,a=!0;if(this.forEachChild(ge,(c,p)=>{t[c]=p.val(e),i++,a&&q.INTEGER_REGEXP_.test(c)?s=Math.max(s,Number(c)):a=!1}),!e&&a&&s<2*i){const c=[];for(const p in t)c[p]=t[p];return c}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+tu(this.getPriority().val())+":"),this.forEachChild(ge,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":xc(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const a=s.getPredecessorKey(new J(e,t));return a?a.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new J(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new J(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,J.Wrap);let a=s.peek();for(;a!=null&&t.compare(a,e)<0;)s.getNext(),a=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,J.Wrap);let a=s.peek();for(;a!=null&&t.compare(a,e)>0;)s.getNext(),a=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ai?-1:0}withIndex(e){if(e===Tn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new q(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Tn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(ge),s=t.getIterator(ge);let a=i.getNext(),c=s.getNext();for(;a&&c;){if(a.name!==c.name||!a.node.equals(c.node))return!1;a=i.getNext(),c=s.getNext()}return a===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===Tn?null:this.indexMap_.get(e.toString())}}q.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class U_ extends q{constructor(){super(new Le(_o),q.EMPTY_NODE,mt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return q.EMPTY_NODE}isEmpty(){return!1}}const Ai=new U_;Object.defineProperties(J,{MIN:{value:new J(kn,q.EMPTY_NODE)},MAX:{value:new J(en,Ai)}});eu.__EMPTY_NODE=q.EMPTY_NODE;Ce.__childrenNodeConstructor=q;P_(Ai);D_(Ai);/**
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
 */const H_=!0;function me(n,e=null){if(n===null)return q.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),D(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Ce(t,me(e))}if(!(n instanceof Array)&&H_){const t=[];let i=!1;if(Te(n,(c,p)=>{if(c.substring(0,1)!=="."){const _=me(p);_.isEmpty()||(i=i||!_.getPriority().isEmpty(),t.push(new J(c,_)))}}),t.length===0)return q.EMPTY_NODE;const a=hr(t,x_,c=>c.name,_o);if(i){const c=hr(t,ge.getCompare());return new q(a,me(e),new mt({".priority":c},{".priority":ge}))}else return new q(a,me(e),mt.Default)}else{let t=q.EMPTY_NODE;return Te(n,(i,s)=>{if(st(n,i)&&i.substring(0,1)!=="."){const a=me(s);(a.isLeafNode()||!a.isEmpty())&&(t=t.updateImmediateChild(i,a))}}),t.updatePriority(me(e))}}O_(me);/**
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
 */class W_ extends Rr{constructor(e){super(),this.indexPath_=e,D(!X(e)&&Q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),a=i.compareTo(s);return a===0?rn(e.name,t.name):a}makePost(e,t){const i=me(e),s=q.EMPTY_NODE.updateChild(this.indexPath_,i);return new J(t,s)}maxPost(){const e=q.EMPTY_NODE.updateChild(this.indexPath_,Ai);return new J(en,e)}toString(){return mi(this.indexPath_,0).join("/")}}/**
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
 */class j_ extends Rr{compare(e,t){const i=e.node.compareTo(t.node);return i===0?rn(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return J.MIN}maxPost(){return J.MAX}makePost(e,t){const i=me(e);return new J(t,i)}toString(){return".value"}}const B_=new j_;/**
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
 */function su(n){return{type:"value",snapshotNode:n}}function An(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function vi(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function yi(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function V_(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class mo{constructor(e){this.index_=e}updateChild(e,t,i,s,a,c){D(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const p=e.getImmediateChild(t);return p.getChild(s).equals(i.getChild(s))&&p.isEmpty()===i.isEmpty()||(c!=null&&(i.isEmpty()?e.hasChild(t)?c.trackChildChange(vi(t,p)):D(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):p.isEmpty()?c.trackChildChange(An(t,i)):c.trackChildChange(yi(t,i,p))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(ge,(s,a)=>{t.hasChild(s)||i.trackChildChange(vi(s,a))}),t.isLeafNode()||t.forEachChild(ge,(s,a)=>{if(e.hasChild(s)){const c=e.getImmediateChild(s);c.equals(a)||i.trackChildChange(yi(s,a,c))}else i.trackChildChange(An(s,a))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?q.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class wi{constructor(e){this.indexedFilter_=new mo(e.getIndex()),this.index_=e.getIndex(),this.startPost_=wi.getStartPost_(e),this.endPost_=wi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,a,c){return this.matches(new J(t,i))||(i=q.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,a,c)}updateFullNode(e,t,i){t.isLeafNode()&&(t=q.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(q.EMPTY_NODE);const a=this;return t.forEachChild(ge,(c,p)=>{a.matches(new J(c,p))||(s=s.updateImmediateChild(c,q.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class q_{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new wi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,a,c){return this.rangedFilter_.matches(new J(t,i))||(i=q.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,a,c):this.fullLimitUpdateChild_(e,t,i,a,c)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=q.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=q.EMPTY_NODE.withIndex(this.index_);let a;this.reverse_?a=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):a=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let c=0;for(;a.hasNext()&&c<this.limit_;){const p=a.getNext();if(this.withinDirectionalStart(p))if(this.withinDirectionalEnd(p))s=s.updateImmediateChild(p.name,p.node),c++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(q.EMPTY_NODE);let a;this.reverse_?a=s.getReverseIterator(this.index_):a=s.getIterator(this.index_);let c=0;for(;a.hasNext();){const p=a.getNext();c<this.limit_&&this.withinDirectionalStart(p)&&this.withinDirectionalEnd(p)?c++:s=s.updateImmediateChild(p.name,q.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,a){let c;if(this.reverse_){const E=this.index_.getCompare();c=(k,M)=>E(M,k)}else c=this.index_.getCompare();const p=e;D(p.numChildren()===this.limit_,"");const _=new J(t,i),v=this.reverse_?p.getFirstChild(this.index_):p.getLastChild(this.index_),T=this.rangedFilter_.matches(_);if(p.hasChild(t)){const E=p.getImmediateChild(t);let k=s.getChildAfterChild(this.index_,v,this.reverse_);for(;k!=null&&(k.name===t||p.hasChild(k.name));)k=s.getChildAfterChild(this.index_,k,this.reverse_);const M=k==null?1:c(k,_);if(T&&!i.isEmpty()&&M>=0)return a!=null&&a.trackChildChange(yi(t,i,E)),p.updateImmediateChild(t,i);{a!=null&&a.trackChildChange(vi(t,E));const F=p.updateImmediateChild(t,q.EMPTY_NODE);return k!=null&&this.rangedFilter_.matches(k)?(a!=null&&a.trackChildChange(An(k.name,k.node)),F.updateImmediateChild(k.name,k.node)):F}}else return i.isEmpty()?e:T&&c(v,_)>=0?(a!=null&&(a.trackChildChange(vi(v.name,v.node)),a.trackChildChange(An(t,i))),p.updateImmediateChild(t,i).updateImmediateChild(v.name,q.EMPTY_NODE)):e}}/**
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
 */class vo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ge}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return D(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return D(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:kn}hasEnd(){return this.endSet_}getIndexEndValue(){return D(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return D(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:en}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return D(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ge}copy(){const e=new vo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function $_(n){return n.loadsAllData()?new mo(n.getIndex()):n.hasLimit()?new q_(n):new wi(n)}function vl(n){const e={};if(n.isDefault())return e;let t;if(n.index_===ge?t="$priority":n.index_===B_?t="$value":n.index_===Tn?t="$key":(D(n.index_ instanceof W_,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=we(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=we(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+we(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=we(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+we(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function yl(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==ge&&(e.i=n.index_.toString()),e}/**
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
 */class dr extends Qc{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=ki("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(D(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);const c=dr.getListenId_(e,i),p={};this.listens_[c]=p;const _=vl(e._queryParams);this.restRequest_(a+".json",_,(v,T)=>{let E=T;if(v===404&&(E=null,v=null),v===null&&this.onDataUpdate_(a,E,!1,i),In(this.listens_,c)===p){let k;v?v===401?k="permission_denied":k="rest_error:"+v:k="ok",s(k,null)}})}unlisten(e,t){const i=dr.getListenId_(e,t);delete this.listens_[i]}get(e){const t=vl(e._queryParams),i=e._path.toString(),s=new nt;return this.restRequest_(i+".json",t,(a,c)=>{let p=c;a===404&&(p=null,a=null),a===null?(this.onDataUpdate_(i,p,!1,null),s.resolve(p)):s.reject(new Error(p))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,a])=>{s&&s.accessToken&&(t.auth=s.accessToken),a&&a.token&&(t.ac=a.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ln(t);this.log_("Sending REST request for "+c);const p=new XMLHttpRequest;p.onreadystatechange=()=>{if(i&&p.readyState===4){this.log_("REST Response for "+c+" received. status:",p.status,"response:",p.responseText);let _=null;if(p.status>=200&&p.status<300){try{_=fi(p.responseText)}catch{Re("Failed to parse JSON response for "+c+": "+p.responseText)}i(null,_)}else p.status!==401&&p.status!==404&&Re("Got unsuccessful REST response for "+c+" Status: "+p.status),i(p.status);i=null}},p.open("GET",c,!0),p.send()})}}/**
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
 */class z_{constructor(){this.rootNode_=q.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function fr(){return{value:null,children:new Map}}function Hn(n,e,t){if(X(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=Q(e);n.children.has(i)||n.children.set(i,fr());const s=n.children.get(i);e=he(e),Hn(s,e,t)}}function Fs(n,e){if(X(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(ge,(i,s)=>{Hn(n,new ae(i),s)}),Fs(n,e)}}else if(n.children.size>0){const t=Q(e);return e=he(e),n.children.has(t)&&Fs(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function Us(n,e,t){n.value!==null?t(e,n.value):G_(n,(i,s)=>{const a=new ae(e.toString()+"/"+i);Us(s,a,t)})}function G_(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
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
 */class K_{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Te(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
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
 */const wl=10*1e3,Y_=30*1e3,Q_=5*60*1e3;class X_{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new K_(e);const i=wl+(Y_-wl)*Math.random();ci(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;Te(e,(s,a)=>{a>0&&st(this.statsToReport_,s)&&(t[s]=a,i=!0)}),i&&this.server_.reportStats(t),ci(this.reportStats_.bind(this),Math.floor(Math.random()*2*Q_))}}/**
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
 */var ze;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ze||(ze={}));function yo(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function wo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Co(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class pr{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=ze.ACK_USER_WRITE,this.source=yo()}operationForChild(e){if(X(this.path)){if(this.affectedTree.value!=null)return D(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ae(e));return new pr(re(),t,this.revert)}}else return D(Q(this.path)===e,"operationForChild called for unrelated child."),new pr(he(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ci{constructor(e,t){this.source=e,this.path=t,this.type=ze.LISTEN_COMPLETE}operationForChild(e){return X(this.path)?new Ci(this.source,re()):new Ci(this.source,he(this.path))}}/**
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
 */class tn{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=ze.OVERWRITE}operationForChild(e){return X(this.path)?new tn(this.source,re(),this.snap.getImmediateChild(e)):new tn(this.source,he(this.path),this.snap)}}/**
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
 */class Rn{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=ze.MERGE}operationForChild(e){if(X(this.path)){const t=this.children.subtree(new ae(e));return t.isEmpty()?null:t.value?new tn(this.source,re(),t.value):new Rn(this.source,re(),t)}else return D(Q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Rn(this.source,he(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Ht{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(X(e))return this.isFullyInitialized()&&!this.filtered_;const t=Q(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class J_{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Z_(n,e,t,i){const s=[],a=[];return e.forEach(c=>{c.type==="child_changed"&&n.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&a.push(V_(c.childName,c.snapshotNode))}),oi(n,s,"child_removed",e,i,t),oi(n,s,"child_added",e,i,t),oi(n,s,"child_moved",a,i,t),oi(n,s,"child_changed",e,i,t),oi(n,s,"value",e,i,t),s}function oi(n,e,t,i,s,a){const c=i.filter(p=>p.type===t);c.sort((p,_)=>tm(n,p,_)),c.forEach(p=>{const _=em(n,p,a);s.forEach(v=>{v.respondsTo(p.type)&&e.push(v.createEvent(_,n.query_))})})}function em(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function tm(n,e,t){if(e.childName==null||t.childName==null)throw Dn("Should only compare child_ events.");const i=new J(e.childName,e.snapshotNode),s=new J(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
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
 */function xr(n,e){return{eventCache:n,serverCache:e}}function ui(n,e,t,i){return xr(new Ht(e,t,i),n.serverCache)}function ou(n,e,t,i){return xr(n.eventCache,new Ht(e,t,i))}function gr(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function nn(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Es;const nm=()=>(Es||(Es=new Le(Wg)),Es);class fe{constructor(e,t=nm()){this.value=e,this.children=t}static fromObject(e){let t=new fe(null);return Te(e,(i,s)=>{t=t.set(new ae(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:re(),value:this.value};if(X(e))return null;{const i=Q(e),s=this.children.get(i);if(s!==null){const a=s.findRootMostMatchingPathAndValue(he(e),t);return a!=null?{path:pe(new ae(i),a.path),value:a.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(X(e))return this;{const t=Q(e),i=this.children.get(t);return i!==null?i.subtree(he(e)):new fe(null)}}set(e,t){if(X(e))return new fe(t,this.children);{const i=Q(e),a=(this.children.get(i)||new fe(null)).set(he(e),t),c=this.children.insert(i,a);return new fe(this.value,c)}}remove(e){if(X(e))return this.children.isEmpty()?new fe(null):new fe(null,this.children);{const t=Q(e),i=this.children.get(t);if(i){const s=i.remove(he(e));let a;return s.isEmpty()?a=this.children.remove(t):a=this.children.insert(t,s),this.value===null&&a.isEmpty()?new fe(null):new fe(this.value,a)}else return this}}get(e){if(X(e))return this.value;{const t=Q(e),i=this.children.get(t);return i?i.get(he(e)):null}}setTree(e,t){if(X(e))return t;{const i=Q(e),a=(this.children.get(i)||new fe(null)).setTree(he(e),t);let c;return a.isEmpty()?c=this.children.remove(i):c=this.children.insert(i,a),new fe(this.value,c)}}fold(e){return this.fold_(re(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,a)=>{i[s]=a.fold_(pe(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,re(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(X(e))return null;{const a=Q(e),c=this.children.get(a);return c?c.findOnPath_(he(e),pe(t,a),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,re(),t)}foreachOnPath_(e,t,i){if(X(e))return this;{this.value&&i(t,this.value);const s=Q(e),a=this.children.get(s);return a?a.foreachOnPath_(he(e),pe(t,s),i):new fe(null)}}foreach(e){this.foreach_(re(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(pe(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
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
 */class Ge{constructor(e){this.writeTree_=e}static empty(){return new Ge(new fe(null))}}function hi(n,e,t){if(X(e))return new Ge(new fe(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let a=i.value;const c=Ae(s,e);return a=a.updateChild(c,t),new Ge(n.writeTree_.set(s,a))}else{const s=new fe(t),a=n.writeTree_.setTree(e,s);return new Ge(a)}}}function Hs(n,e,t){let i=n;return Te(t,(s,a)=>{i=hi(i,pe(e,s),a)}),i}function Cl(n,e){if(X(e))return Ge.empty();{const t=n.writeTree_.setTree(e,new fe(null));return new Ge(t)}}function Ws(n,e){return sn(n,e)!=null}function sn(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Ae(t.path,e)):null}function bl(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(ge,(i,s)=>{e.push(new J(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new J(i,s.value))}),e}function Lt(n,e){if(X(e))return n;{const t=sn(n,e);return t!=null?new Ge(new fe(t)):new Ge(n.writeTree_.subtree(e))}}function js(n){return n.writeTree_.isEmpty()}function xn(n,e){return au(re(),n.writeTree_,e)}function au(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,a)=>{s===".priority"?(D(a.value!==null,"Priority writes must always be leaf nodes"),i=a.value):t=au(pe(n,s),a,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(pe(n,".priority"),i)),t}}/**
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
 */function Pr(n,e){return hu(e,n)}function im(n,e,t,i,s){D(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=hi(n.visibleWrites,e,t)),n.lastWriteId=i}function rm(n,e,t,i){D(i>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:i,visible:!0}),n.visibleWrites=Hs(n.visibleWrites,e,t),n.lastWriteId=i}function sm(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function om(n,e){const t=n.allWrites.findIndex(p=>p.writeId===e);D(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,a=!1,c=n.allWrites.length-1;for(;s&&c>=0;){const p=n.allWrites[c];p.visible&&(c>=t&&am(p,i.path)?s=!1:We(i.path,p.path)&&(a=!0)),c--}if(s){if(a)return lm(n),!0;if(i.snap)n.visibleWrites=Cl(n.visibleWrites,i.path);else{const p=i.children;Te(p,_=>{n.visibleWrites=Cl(n.visibleWrites,pe(i.path,_))})}return!0}else return!1}function am(n,e){if(n.snap)return We(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&We(pe(n.path,t),e))return!0;return!1}function lm(n){n.visibleWrites=lu(n.allWrites,cm,re()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function cm(n){return n.visible}function lu(n,e,t){let i=Ge.empty();for(let s=0;s<n.length;++s){const a=n[s];if(e(a)){const c=a.path;let p;if(a.snap)We(t,c)?(p=Ae(t,c),i=hi(i,p,a.snap)):We(c,t)&&(p=Ae(c,t),i=hi(i,re(),a.snap.getChild(p)));else if(a.children){if(We(t,c))p=Ae(t,c),i=Hs(i,p,a.children);else if(We(c,t))if(p=Ae(c,t),X(p))i=Hs(i,re(),a.children);else{const _=In(a.children,Q(p));if(_){const v=_.getChild(he(p));i=hi(i,re(),v)}}}else throw Dn("WriteRecord should have .snap or .children")}}return i}function cu(n,e,t,i,s){if(!i&&!s){const a=sn(n.visibleWrites,e);if(a!=null)return a;{const c=Lt(n.visibleWrites,e);if(js(c))return t;if(t==null&&!Ws(c,re()))return null;{const p=t||q.EMPTY_NODE;return xn(c,p)}}}else{const a=Lt(n.visibleWrites,e);if(!s&&js(a))return t;if(!s&&t==null&&!Ws(a,re()))return null;{const c=function(v){return(v.visible||s)&&(!i||!~i.indexOf(v.writeId))&&(We(v.path,e)||We(e,v.path))},p=lu(n.allWrites,c,e),_=t||q.EMPTY_NODE;return xn(p,_)}}}function um(n,e,t){let i=q.EMPTY_NODE;const s=sn(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(ge,(a,c)=>{i=i.updateImmediateChild(a,c)}),i;if(t){const a=Lt(n.visibleWrites,e);return t.forEachChild(ge,(c,p)=>{const _=xn(Lt(a,new ae(c)),p);i=i.updateImmediateChild(c,_)}),bl(a).forEach(c=>{i=i.updateImmediateChild(c.name,c.node)}),i}else{const a=Lt(n.visibleWrites,e);return bl(a).forEach(c=>{i=i.updateImmediateChild(c.name,c.node)}),i}}function hm(n,e,t,i,s){D(i||s,"Either existingEventSnap or existingServerSnap must exist");const a=pe(e,t);if(Ws(n.visibleWrites,a))return null;{const c=Lt(n.visibleWrites,a);return js(c)?s.getChild(t):xn(c,s.getChild(t))}}function dm(n,e,t,i){const s=pe(e,t),a=sn(n.visibleWrites,s);if(a!=null)return a;if(i.isCompleteForChild(t)){const c=Lt(n.visibleWrites,s);return xn(c,i.getNode().getImmediateChild(t))}else return null}function fm(n,e){return sn(n.visibleWrites,e)}function pm(n,e,t,i,s,a,c){let p;const _=Lt(n.visibleWrites,e),v=sn(_,re());if(v!=null)p=v;else if(t!=null)p=xn(_,t);else return[];if(p=p.withIndex(c),!p.isEmpty()&&!p.isLeafNode()){const T=[],E=c.getCompare(),k=a?p.getReverseIteratorFrom(i,c):p.getIteratorFrom(i,c);let M=k.getNext();for(;M&&T.length<s;)E(M,i)!==0&&T.push(M),M=k.getNext();return T}else return[]}function gm(){return{visibleWrites:Ge.empty(),allWrites:[],lastWriteId:-1}}function _r(n,e,t,i){return cu(n.writeTree,n.treePath,e,t,i)}function bo(n,e){return um(n.writeTree,n.treePath,e)}function El(n,e,t,i){return hm(n.writeTree,n.treePath,e,t,i)}function mr(n,e){return fm(n.writeTree,pe(n.treePath,e))}function _m(n,e,t,i,s,a){return pm(n.writeTree,n.treePath,e,t,i,s,a)}function Eo(n,e,t){return dm(n.writeTree,n.treePath,e,t)}function uu(n,e){return hu(pe(n.treePath,e),n.writeTree)}function hu(n,e){return{treePath:n,writeTree:e}}/**
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
 */class mm{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;D(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),D(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const a=s.type;if(t==="child_added"&&a==="child_removed")this.changeMap.set(i,yi(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&a==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&a==="child_changed")this.changeMap.set(i,vi(i,s.oldSnap));else if(t==="child_changed"&&a==="child_added")this.changeMap.set(i,An(i,e.snapshotNode));else if(t==="child_changed"&&a==="child_changed")this.changeMap.set(i,yi(i,e.snapshotNode,s.oldSnap));else throw Dn("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class vm{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const du=new vm;class To{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Ht(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Eo(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:nn(this.viewCache_),a=_m(this.writes_,s,t,1,i,e);return a.length===0?null:a[0]}}/**
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
 */function ym(n){return{filter:n}}function wm(n,e){D(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),D(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Cm(n,e,t,i,s){const a=new mm;let c,p;if(t.type===ze.OVERWRITE){const v=t;v.source.fromUser?c=Bs(n,e,v.path,v.snap,i,s,a):(D(v.source.fromServer,"Unknown source."),p=v.source.tagged||e.serverCache.isFiltered()&&!X(v.path),c=vr(n,e,v.path,v.snap,i,s,p,a))}else if(t.type===ze.MERGE){const v=t;v.source.fromUser?c=Em(n,e,v.path,v.children,i,s,a):(D(v.source.fromServer,"Unknown source."),p=v.source.tagged||e.serverCache.isFiltered(),c=Vs(n,e,v.path,v.children,i,s,p,a))}else if(t.type===ze.ACK_USER_WRITE){const v=t;v.revert?c=Sm(n,e,v.path,i,s,a):c=Tm(n,e,v.path,v.affectedTree,i,s,a)}else if(t.type===ze.LISTEN_COMPLETE)c=Im(n,e,t.path,i,a);else throw Dn("Unknown operation type: "+t.type);const _=a.getChanges();return bm(e,c,_),{viewCache:c,changes:_}}function bm(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),a=gr(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(a)||!i.getNode().getPriority().equals(a.getPriority()))&&t.push(su(gr(e)))}}function fu(n,e,t,i,s,a){const c=e.eventCache;if(mr(i,t)!=null)return e;{let p,_;if(X(t))if(D(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const v=nn(e),T=v instanceof q?v:q.EMPTY_NODE,E=bo(i,T);p=n.filter.updateFullNode(e.eventCache.getNode(),E,a)}else{const v=_r(i,nn(e));p=n.filter.updateFullNode(e.eventCache.getNode(),v,a)}else{const v=Q(t);if(v===".priority"){D(Ut(t)===1,"Can't have a priority with additional path components");const T=c.getNode();_=e.serverCache.getNode();const E=El(i,t,T,_);E!=null?p=n.filter.updatePriority(T,E):p=c.getNode()}else{const T=he(t);let E;if(c.isCompleteForChild(v)){_=e.serverCache.getNode();const k=El(i,t,c.getNode(),_);k!=null?E=c.getNode().getImmediateChild(v).updateChild(T,k):E=c.getNode().getImmediateChild(v)}else E=Eo(i,v,e.serverCache);E!=null?p=n.filter.updateChild(c.getNode(),v,E,T,s,a):p=c.getNode()}}return ui(e,p,c.isFullyInitialized()||X(t),n.filter.filtersNodes())}}function vr(n,e,t,i,s,a,c,p){const _=e.serverCache;let v;const T=c?n.filter:n.filter.getIndexedFilter();if(X(t))v=T.updateFullNode(_.getNode(),i,null);else if(T.filtersNodes()&&!_.isFiltered()){const M=_.getNode().updateChild(t,i);v=T.updateFullNode(_.getNode(),M,null)}else{const M=Q(t);if(!_.isCompleteForPath(t)&&Ut(t)>1)return e;const P=he(t),ue=_.getNode().getImmediateChild(M).updateChild(P,i);M===".priority"?v=T.updatePriority(_.getNode(),ue):v=T.updateChild(_.getNode(),M,ue,P,du,null)}const E=ou(e,v,_.isFullyInitialized()||X(t),T.filtersNodes()),k=new To(s,E,a);return fu(n,E,t,s,k,p)}function Bs(n,e,t,i,s,a,c){const p=e.eventCache;let _,v;const T=new To(s,e,a);if(X(t))v=n.filter.updateFullNode(e.eventCache.getNode(),i,c),_=ui(e,v,!0,n.filter.filtersNodes());else{const E=Q(t);if(E===".priority")v=n.filter.updatePriority(e.eventCache.getNode(),i),_=ui(e,v,p.isFullyInitialized(),p.isFiltered());else{const k=he(t),M=p.getNode().getImmediateChild(E);let P;if(X(k))P=i;else{const F=T.getCompleteChild(E);F!=null?fo(k)===".priority"&&F.getChild(Jc(k)).isEmpty()?P=F:P=F.updateChild(k,i):P=q.EMPTY_NODE}if(M.equals(P))_=e;else{const F=n.filter.updateChild(p.getNode(),E,P,k,T,c);_=ui(e,F,p.isFullyInitialized(),n.filter.filtersNodes())}}}return _}function Tl(n,e){return n.eventCache.isCompleteForChild(e)}function Em(n,e,t,i,s,a,c){let p=e;return i.foreach((_,v)=>{const T=pe(t,_);Tl(e,Q(T))&&(p=Bs(n,p,T,v,s,a,c))}),i.foreach((_,v)=>{const T=pe(t,_);Tl(e,Q(T))||(p=Bs(n,p,T,v,s,a,c))}),p}function Il(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Vs(n,e,t,i,s,a,c,p){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let _=e,v;X(t)?v=i:v=new fe(null).setTree(t,i);const T=e.serverCache.getNode();return v.children.inorderTraversal((E,k)=>{if(T.hasChild(E)){const M=e.serverCache.getNode().getImmediateChild(E),P=Il(n,M,k);_=vr(n,_,new ae(E),P,s,a,c,p)}}),v.children.inorderTraversal((E,k)=>{const M=!e.serverCache.isCompleteForChild(E)&&k.value===null;if(!T.hasChild(E)&&!M){const P=e.serverCache.getNode().getImmediateChild(E),F=Il(n,P,k);_=vr(n,_,new ae(E),F,s,a,c,p)}}),_}function Tm(n,e,t,i,s,a,c){if(mr(s,t)!=null)return e;const p=e.serverCache.isFiltered(),_=e.serverCache;if(i.value!=null){if(X(t)&&_.isFullyInitialized()||_.isCompleteForPath(t))return vr(n,e,t,_.getNode().getChild(t),s,a,p,c);if(X(t)){let v=new fe(null);return _.getNode().forEachChild(Tn,(T,E)=>{v=v.set(new ae(T),E)}),Vs(n,e,t,v,s,a,p,c)}else return e}else{let v=new fe(null);return i.foreach((T,E)=>{const k=pe(t,T);_.isCompleteForPath(k)&&(v=v.set(T,_.getNode().getChild(k)))}),Vs(n,e,t,v,s,a,p,c)}}function Im(n,e,t,i,s){const a=e.serverCache,c=ou(e,a.getNode(),a.isFullyInitialized()||X(t),a.isFiltered());return fu(n,c,t,i,du,s)}function Sm(n,e,t,i,s,a){let c;if(mr(i,t)!=null)return e;{const p=new To(i,e,s),_=e.eventCache.getNode();let v;if(X(t)||Q(t)===".priority"){let T;if(e.serverCache.isFullyInitialized())T=_r(i,nn(e));else{const E=e.serverCache.getNode();D(E instanceof q,"serverChildren would be complete if leaf node"),T=bo(i,E)}T=T,v=n.filter.updateFullNode(_,T,a)}else{const T=Q(t);let E=Eo(i,T,e.serverCache);E==null&&e.serverCache.isCompleteForChild(T)&&(E=_.getImmediateChild(T)),E!=null?v=n.filter.updateChild(_,T,E,he(t),p,a):e.eventCache.getNode().hasChild(T)?v=n.filter.updateChild(_,T,q.EMPTY_NODE,he(t),p,a):v=_,v.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=_r(i,nn(e)),c.isLeafNode()&&(v=n.filter.updateFullNode(v,c,a)))}return c=e.serverCache.isFullyInitialized()||mr(i,re())!=null,ui(e,v,c,n.filter.filtersNodes())}}/**
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
 */class Nm{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new mo(i.getIndex()),a=$_(i);this.processor_=ym(a);const c=t.serverCache,p=t.eventCache,_=s.updateFullNode(q.EMPTY_NODE,c.getNode(),null),v=a.updateFullNode(q.EMPTY_NODE,p.getNode(),null),T=new Ht(_,c.isFullyInitialized(),s.filtersNodes()),E=new Ht(v,p.isFullyInitialized(),a.filtersNodes());this.viewCache_=xr(E,T),this.eventGenerator_=new J_(this.query_)}get query(){return this.query_}}function km(n){return n.viewCache_.serverCache.getNode()}function Am(n){return gr(n.viewCache_)}function Rm(n,e){const t=nn(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!X(e)&&!t.getImmediateChild(Q(e)).isEmpty())?t.getChild(e):null}function Sl(n){return n.eventRegistrations_.length===0}function xm(n,e){n.eventRegistrations_.push(e)}function Nl(n,e,t){const i=[];if(t){D(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(a=>{const c=a.createCancelEvent(t,s);c&&i.push(c)})}if(e){let s=[];for(let a=0;a<n.eventRegistrations_.length;++a){const c=n.eventRegistrations_[a];if(!c.matches(e))s.push(c);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(a+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function kl(n,e,t,i){e.type===ze.MERGE&&e.source.queryId!==null&&(D(nn(n.viewCache_),"We should always have a full cache before handling merges"),D(gr(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,a=Cm(n.processor_,s,e,t,i);return wm(n.processor_,a.viewCache),D(a.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=a.viewCache,pu(n,a.changes,a.viewCache.eventCache.getNode(),null)}function Pm(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(ge,(a,c)=>{i.push(An(a,c))}),t.isFullyInitialized()&&i.push(su(t.getNode())),pu(n,i,t.getNode(),e)}function pu(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return Z_(n.eventGenerator_,e,t,s)}/**
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
 */let yr;class gu{constructor(){this.views=new Map}}function Om(n){D(!yr,"__referenceConstructor has already been defined"),yr=n}function Dm(){return D(yr,"Reference.ts has not been loaded"),yr}function Lm(n){return n.views.size===0}function Io(n,e,t,i){const s=e.source.queryId;if(s!==null){const a=n.views.get(s);return D(a!=null,"SyncTree gave us an op for an invalid query."),kl(a,e,t,i)}else{let a=[];for(const c of n.views.values())a=a.concat(kl(c,e,t,i));return a}}function _u(n,e,t,i,s){const a=e._queryIdentifier,c=n.views.get(a);if(!c){let p=_r(t,s?i:null),_=!1;p?_=!0:i instanceof q?(p=bo(t,i),_=!1):(p=q.EMPTY_NODE,_=!1);const v=xr(new Ht(p,_,!1),new Ht(i,s,!1));return new Nm(e,v)}return c}function Mm(n,e,t,i,s,a){const c=_u(n,e,i,s,a);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,c),xm(c,t),Pm(c,t)}function Fm(n,e,t,i){const s=e._queryIdentifier,a=[];let c=[];const p=Wt(n);if(s==="default")for(const[_,v]of n.views.entries())c=c.concat(Nl(v,t,i)),Sl(v)&&(n.views.delete(_),v.query._queryParams.loadsAllData()||a.push(v.query));else{const _=n.views.get(s);_&&(c=c.concat(Nl(_,t,i)),Sl(_)&&(n.views.delete(s),_.query._queryParams.loadsAllData()||a.push(_.query)))}return p&&!Wt(n)&&a.push(new(Dm())(e._repo,e._path)),{removed:a,events:c}}function mu(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Mt(n,e){let t=null;for(const i of n.views.values())t=t||Rm(i,e);return t}function vu(n,e){if(e._queryParams.loadsAllData())return Or(n);{const i=e._queryIdentifier;return n.views.get(i)}}function yu(n,e){return vu(n,e)!=null}function Wt(n){return Or(n)!=null}function Or(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let wr;function Um(n){D(!wr,"__referenceConstructor has already been defined"),wr=n}function Hm(){return D(wr,"Reference.ts has not been loaded"),wr}let Wm=1;class Al{constructor(e){this.listenProvider_=e,this.syncPointTree_=new fe(null),this.pendingWriteTree_=gm(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function wu(n,e,t,i,s){return im(n.pendingWriteTree_,e,t,i,s),s?Wn(n,new tn(yo(),e,t)):[]}function jm(n,e,t,i){rm(n.pendingWriteTree_,e,t,i);const s=fe.fromObject(t);return Wn(n,new Rn(yo(),e,s))}function Rt(n,e,t=!1){const i=sm(n.pendingWriteTree_,e);if(om(n.pendingWriteTree_,e)){let a=new fe(null);return i.snap!=null?a=a.set(re(),!0):Te(i.children,c=>{a=a.set(new ae(c),!0)}),Wn(n,new pr(i.path,a,t))}else return[]}function Ri(n,e,t){return Wn(n,new tn(wo(),e,t))}function Bm(n,e,t){const i=fe.fromObject(t);return Wn(n,new Rn(wo(),e,i))}function Vm(n,e){return Wn(n,new Ci(wo(),e))}function qm(n,e,t){const i=No(n,t);if(i){const s=ko(i),a=s.path,c=s.queryId,p=Ae(a,e),_=new Ci(Co(c),p);return Ao(n,a,_)}else return[]}function Cr(n,e,t,i,s=!1){const a=e._path,c=n.syncPointTree_.get(a);let p=[];if(c&&(e._queryIdentifier==="default"||yu(c,e))){const _=Fm(c,e,t,i);Lm(c)&&(n.syncPointTree_=n.syncPointTree_.remove(a));const v=_.removed;if(p=_.events,!s){const T=v.findIndex(k=>k._queryParams.loadsAllData())!==-1,E=n.syncPointTree_.findOnPath(a,(k,M)=>Wt(M));if(T&&!E){const k=n.syncPointTree_.subtree(a);if(!k.isEmpty()){const M=Gm(k);for(let P=0;P<M.length;++P){const F=M[P],ue=F.query,B=Tu(n,F);n.listenProvider_.startListening(di(ue),bi(n,ue),B.hashFn,B.onComplete)}}}!E&&v.length>0&&!i&&(T?n.listenProvider_.stopListening(di(e),null):v.forEach(k=>{const M=n.queryToTagMap.get(Dr(k));n.listenProvider_.stopListening(di(k),M)}))}Km(n,v)}return p}function Cu(n,e,t,i){const s=No(n,i);if(s!=null){const a=ko(s),c=a.path,p=a.queryId,_=Ae(c,e),v=new tn(Co(p),_,t);return Ao(n,c,v)}else return[]}function $m(n,e,t,i){const s=No(n,i);if(s){const a=ko(s),c=a.path,p=a.queryId,_=Ae(c,e),v=fe.fromObject(t),T=new Rn(Co(p),_,v);return Ao(n,c,T)}else return[]}function qs(n,e,t,i=!1){const s=e._path;let a=null,c=!1;n.syncPointTree_.foreachOnPath(s,(k,M)=>{const P=Ae(k,s);a=a||Mt(M,P),c=c||Wt(M)});let p=n.syncPointTree_.get(s);p?(c=c||Wt(p),a=a||Mt(p,re())):(p=new gu,n.syncPointTree_=n.syncPointTree_.set(s,p));let _;a!=null?_=!0:(_=!1,a=q.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((M,P)=>{const F=Mt(P,re());F&&(a=a.updateImmediateChild(M,F))}));const v=yu(p,e);if(!v&&!e._queryParams.loadsAllData()){const k=Dr(e);D(!n.queryToTagMap.has(k),"View does not exist, but we have a tag");const M=Ym();n.queryToTagMap.set(k,M),n.tagToQueryMap.set(M,k)}const T=Pr(n.pendingWriteTree_,s);let E=Mm(p,e,t,T,a,_);if(!v&&!c&&!i){const k=vu(p,e);E=E.concat(Qm(n,e,k))}return E}function So(n,e,t){const s=n.pendingWriteTree_,a=n.syncPointTree_.findOnPath(e,(c,p)=>{const _=Ae(c,e),v=Mt(p,_);if(v)return v});return cu(s,e,a,t,!0)}function zm(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(v,T)=>{const E=Ae(v,t);i=i||Mt(T,E)});let s=n.syncPointTree_.get(t);s?i=i||Mt(s,re()):(s=new gu,n.syncPointTree_=n.syncPointTree_.set(t,s));const a=i!=null,c=a?new Ht(i,!0,!1):null,p=Pr(n.pendingWriteTree_,e._path),_=_u(s,e,p,a?c.getNode():q.EMPTY_NODE,a);return Am(_)}function Wn(n,e){return bu(e,n.syncPointTree_,null,Pr(n.pendingWriteTree_,re()))}function bu(n,e,t,i){if(X(n.path))return Eu(n,e,t,i);{const s=e.get(re());t==null&&s!=null&&(t=Mt(s,re()));let a=[];const c=Q(n.path),p=n.operationForChild(c),_=e.children.get(c);if(_&&p){const v=t?t.getImmediateChild(c):null,T=uu(i,c);a=a.concat(bu(p,_,v,T))}return s&&(a=a.concat(Io(s,n,i,t))),a}}function Eu(n,e,t,i){const s=e.get(re());t==null&&s!=null&&(t=Mt(s,re()));let a=[];return e.children.inorderTraversal((c,p)=>{const _=t?t.getImmediateChild(c):null,v=uu(i,c),T=n.operationForChild(c);T&&(a=a.concat(Eu(T,p,_,v)))}),s&&(a=a.concat(Io(s,n,i,t))),a}function Tu(n,e){const t=e.query,i=bi(n,t);return{hashFn:()=>(km(e)||q.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?qm(n,t._path,i):Vm(n,t._path);{const a=Vg(s,t);return Cr(n,t,null,a)}}}}function bi(n,e){const t=Dr(e);return n.queryToTagMap.get(t)}function Dr(n){return n._path.toString()+"$"+n._queryIdentifier}function No(n,e){return n.tagToQueryMap.get(e)}function ko(n){const e=n.indexOf("$");return D(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new ae(n.substr(0,e))}}function Ao(n,e,t){const i=n.syncPointTree_.get(e);D(i,"Missing sync point for query tag that we're tracking");const s=Pr(n.pendingWriteTree_,e);return Io(i,t,s,null)}function Gm(n){return n.fold((e,t,i)=>{if(t&&Wt(t))return[Or(t)];{let s=[];return t&&(s=mu(t)),Te(i,(a,c)=>{s=s.concat(c)}),s}})}function di(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Hm())(n._repo,n._path):n}function Km(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=Dr(i),a=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(a)}}}function Ym(){return Wm++}function Qm(n,e,t){const i=e._path,s=bi(n,e),a=Tu(n,t),c=n.listenProvider_.startListening(di(e),s,a.hashFn,a.onComplete),p=n.syncPointTree_.subtree(i);if(s)D(!Wt(p.value),"If we're adding a query, it shouldn't be shadowed");else{const _=p.fold((v,T,E)=>{if(!X(v)&&T&&Wt(T))return[Or(T).query];{let k=[];return T&&(k=k.concat(mu(T).map(M=>M.query))),Te(E,(M,P)=>{k=k.concat(P)}),k}});for(let v=0;v<_.length;++v){const T=_[v];n.listenProvider_.stopListening(di(T),bi(n,T))}}return c}/**
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
 */class Ro{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Ro(t)}node(){return this.node_}}class xo{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=pe(this.path_,e);return new xo(this.syncTree_,t)}node(){return So(this.syncTree_,this.path_)}}const Xm=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Rl=function(n,e,t){if(!n||typeof n!="object")return n;if(D(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Jm(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Zm(n[".sv"],e);D(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Jm=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:D(!1,"Unexpected server value: "+n)}},Zm=function(n,e,t){n.hasOwnProperty("increment")||D(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&D(!1,"Unexpected increment value: "+i);const s=e.node();if(D(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const c=s.getValue();return typeof c!="number"?i:c+i},Iu=function(n,e,t,i){return Po(e,new xo(t,n),i)},Su=function(n,e,t){return Po(n,new Ro(e),t)};function Po(n,e,t){const i=n.getPriority().val(),s=Rl(i,e.getImmediateChild(".priority"),t);let a;if(n.isLeafNode()){const c=n,p=Rl(c.getValue(),e,t);return p!==c.getValue()||s!==c.getPriority().val()?new Ce(p,me(s)):n}else{const c=n;return a=c,s!==c.getPriority().val()&&(a=a.updatePriority(new Ce(s))),c.forEachChild(ge,(p,_)=>{const v=Po(_,e.getImmediateChild(p),t);v!==_&&(a=a.updateImmediateChild(p,v))}),a}}/**
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
 */class Oo{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function Do(n,e){let t=e instanceof ae?e:new ae(e),i=n,s=Q(t);for(;s!==null;){const a=In(i.node.children,s)||{children:{},childCount:0};i=new Oo(s,i,a),t=he(t),s=Q(t)}return i}function jn(n){return n.node.value}function Nu(n,e){n.node.value=e,$s(n)}function ku(n){return n.node.childCount>0}function ev(n){return jn(n)===void 0&&!ku(n)}function Lr(n,e){Te(n.node.children,(t,i)=>{e(new Oo(t,n,i))})}function Au(n,e,t,i){t&&!i&&e(n),Lr(n,s=>{Au(s,e,!0,i)}),t&&i&&e(n)}function tv(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function xi(n){return new ae(n.parent===null?n.name:xi(n.parent)+"/"+n.name)}function $s(n){n.parent!==null&&nv(n.parent,n.name,n)}function nv(n,e,t){const i=ev(t),s=st(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,$s(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,$s(n))}/**
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
 */const iv=/[\[\].#$\/\u0000-\u001F\u007F]/,rv=/[\[\].#$\u0000-\u001F\u007F]/,Ts=10*1024*1024,Lo=function(n){return typeof n=="string"&&n.length!==0&&!iv.test(n)},Ru=function(n){return typeof n=="string"&&n.length!==0&&!rv.test(n)},sv=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ru(n)},xu=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Ar(n)||n&&typeof n=="object"&&st(n,".sv")},zs=function(n,e,t,i){Mr(Sn(n,"value"),e,t)},Mr=function(n,e,t){const i=t instanceof ae?new E_(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Yt(i));if(typeof e=="function")throw new Error(n+"contains a function "+Yt(i)+" with contents = "+e.toString());if(Ar(e))throw new Error(n+"contains "+e.toString()+" "+Yt(i));if(typeof e=="string"&&e.length>Ts/3&&Er(e)>Ts)throw new Error(n+"contains a string greater than "+Ts+" utf8 bytes "+Yt(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,a=!1;if(Te(e,(c,p)=>{if(c===".value")s=!0;else if(c!==".priority"&&c!==".sv"&&(a=!0,!Lo(c)))throw new Error(n+" contains an invalid key ("+c+") "+Yt(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);T_(i,c),Mr(n,p,i),I_(i)}),s&&a)throw new Error(n+' contains ".value" child '+Yt(i)+" in addition to actual children.")}},ov=function(n,e){let t,i;for(t=0;t<e.length;t++){i=e[t];const a=mi(i);for(let c=0;c<a.length;c++)if(!(a[c]===".priority"&&c===a.length-1)){if(!Lo(a[c]))throw new Error(n+"contains an invalid key ("+a[c]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(b_);let s=null;for(t=0;t<e.length;t++){if(i=e[t],s!==null&&We(s,i))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},Pu=function(n,e,t,i){const s=Sn(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const a=[];Te(e,(c,p)=>{const _=new ae(c);if(Mr(s,p,pe(t,_)),fo(_)===".priority"&&!xu(p))throw new Error(s+"contains an invalid value for '"+_.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");a.push(_)}),ov(s,a)},av=function(n,e,t){if(Ar(e))throw new Error(Sn(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!xu(e))throw new Error(Sn(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},Ou=function(n,e,t,i){if(!Ru(t))throw new Error(Sn(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},lv=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ou(n,e,t)},yn=function(n,e){if(Q(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},cv=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Lo(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!sv(t))throw new Error(Sn(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class uv{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Fr(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],a=s.getPath();t!==null&&!po(a,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:a}),t.events.push(s)}t&&n.eventLists_.push(t)}function Du(n,e,t){Fr(n,t),Lu(n,i=>po(i,e))}function je(n,e,t){Fr(n,t),Lu(n,i=>We(i,e)||We(e,i))}function Lu(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const a=s.path;e(a)?(hv(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function hv(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();li&&Ee("event: "+t.toString()),Un(i)}}}/**
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
 */const dv="repo_interrupt",fv=25;class pv{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new uv,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=fr(),this.transactionQueueTree_=new Oo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function gv(n,e,t){if(n.stats_=uo(n.repoInfo_),n.forceRestClient_||Gg())n.server_=new dr(n.repoInfo_,(i,s,a,c)=>{xl(n,i,s,a,c)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Pl(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{we(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new vt(n.repoInfo_,e,(i,s,a,c)=>{xl(n,i,s,a,c)},i=>{Pl(n,i)},i=>{mv(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=Jg(n.repoInfo_,()=>new X_(n.stats_,n.server_)),n.infoData_=new z_,n.infoSyncTree_=new Al({startListening:(i,s,a,c)=>{let p=[];const _=n.infoData_.getNode(i._path);return _.isEmpty()||(p=Ri(n.infoSyncTree_,i._path,_),setTimeout(()=>{c("ok")},0)),p},stopListening:()=>{}}),Mo(n,"connected",!1),n.serverSyncTree_=new Al({startListening:(i,s,a,c)=>(n.server_.listen(i,a,s,(p,_)=>{const v=c(p,_);je(n.eventQueue_,i._path,v)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function _v(n){const t=n.infoData_.getNode(new ae(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Ur(n){return Xm({timestamp:_v(n)})}function xl(n,e,t,i,s){n.dataUpdateCount++;const a=new ae(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let c=[];if(s)if(i){const _=tr(t,v=>me(v));c=$m(n.serverSyncTree_,a,_,s)}else{const _=me(t);c=Cu(n.serverSyncTree_,a,_,s)}else if(i){const _=tr(t,v=>me(v));c=Bm(n.serverSyncTree_,a,_)}else{const _=me(t);c=Ri(n.serverSyncTree_,a,_)}let p=a;c.length>0&&(p=Pn(n,a)),je(n.eventQueue_,p,c)}function Pl(n,e){Mo(n,"connected",e),e===!1&&Cv(n)}function mv(n,e){Te(e,(t,i)=>{Mo(n,t,i)})}function Mo(n,e,t){const i=new ae("/.info/"+e),s=me(t);n.infoData_.updateSnapshot(i,s);const a=Ri(n.infoSyncTree_,i,s);je(n.eventQueue_,i,a)}function Fo(n){return n.nextWriteId_++}function vv(n,e,t){const i=zm(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(s=>{const a=me(s).withIndex(e._queryParams.getIndex());qs(n.serverSyncTree_,e,t,!0);let c;if(e._queryParams.loadsAllData())c=Ri(n.serverSyncTree_,e._path,a);else{const p=bi(n.serverSyncTree_,e);c=Cu(n.serverSyncTree_,e._path,a,p)}return je(n.eventQueue_,e._path,c),Cr(n.serverSyncTree_,e,t,null,!0),a},s=>(Pi(n,"get for query "+we(e)+" failed: "+s),Promise.reject(new Error(s))))}function yv(n,e,t,i,s){Pi(n,"set",{path:e.toString(),value:t,priority:i});const a=Ur(n),c=me(t,i),p=So(n.serverSyncTree_,e),_=Su(c,p,a),v=Fo(n),T=wu(n.serverSyncTree_,e,_,v,!0);Fr(n.eventQueue_,T),n.server_.put(e.toString(),c.val(!0),(k,M)=>{const P=k==="ok";P||Re("set at "+e+" failed: "+k);const F=Rt(n.serverSyncTree_,v,!P);je(n.eventQueue_,e,F),jt(n,s,k,M)});const E=Ho(n,e);Pn(n,E),je(n.eventQueue_,E,[])}function wv(n,e,t,i){Pi(n,"update",{path:e.toString(),value:t});let s=!0;const a=Ur(n),c={};if(Te(t,(p,_)=>{s=!1,c[p]=Iu(pe(e,p),me(_),n.serverSyncTree_,a)}),s)Ee("update() called with empty data.  Don't do anything."),jt(n,i,"ok",void 0);else{const p=Fo(n),_=jm(n.serverSyncTree_,e,c,p);Fr(n.eventQueue_,_),n.server_.merge(e.toString(),t,(v,T)=>{const E=v==="ok";E||Re("update at "+e+" failed: "+v);const k=Rt(n.serverSyncTree_,p,!E),M=k.length>0?Pn(n,e):e;je(n.eventQueue_,M,k),jt(n,i,v,T)}),Te(t,v=>{const T=Ho(n,pe(e,v));Pn(n,T)}),je(n.eventQueue_,e,[])}}function Cv(n){Pi(n,"onDisconnectEvents");const e=Ur(n),t=fr();Us(n.onDisconnect_,re(),(s,a)=>{const c=Iu(s,a,n.serverSyncTree_,e);Hn(t,s,c)});let i=[];Us(t,re(),(s,a)=>{i=i.concat(Ri(n.serverSyncTree_,s,a));const c=Ho(n,s);Pn(n,c)}),n.onDisconnect_=fr(),je(n.eventQueue_,re(),i)}function bv(n,e,t){n.server_.onDisconnectCancel(e.toString(),(i,s)=>{i==="ok"&&Fs(n.onDisconnect_,e),jt(n,t,i,s)})}function Ol(n,e,t,i){const s=me(t);n.server_.onDisconnectPut(e.toString(),s.val(!0),(a,c)=>{a==="ok"&&Hn(n.onDisconnect_,e,s),jt(n,i,a,c)})}function Ev(n,e,t,i,s){const a=me(t,i);n.server_.onDisconnectPut(e.toString(),a.val(!0),(c,p)=>{c==="ok"&&Hn(n.onDisconnect_,e,a),jt(n,s,c,p)})}function Tv(n,e,t,i){if(er(t)){Ee("onDisconnect().update() called with empty data.  Don't do anything."),jt(n,i,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(s,a)=>{s==="ok"&&Te(t,(c,p)=>{const _=me(p);Hn(n.onDisconnect_,pe(e,c),_)}),jt(n,i,s,a)})}function Iv(n,e,t){let i;Q(e._path)===".info"?i=qs(n.infoSyncTree_,e,t):i=qs(n.serverSyncTree_,e,t),Du(n.eventQueue_,e._path,i)}function Sv(n,e,t){let i;Q(e._path)===".info"?i=Cr(n.infoSyncTree_,e,t):i=Cr(n.serverSyncTree_,e,t),Du(n.eventQueue_,e._path,i)}function Nv(n){n.persistentConnection_&&n.persistentConnection_.interrupt(dv)}function Pi(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Ee(t,...e)}function jt(n,e,t,i){e&&Un(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let a=s;i&&(a+=": "+i);const c=new Error(a);c.code=s,e(c)}})}function Mu(n,e,t){return So(n.serverSyncTree_,e,t)||q.EMPTY_NODE}function Uo(n,e=n.transactionQueueTree_){if(e||Hr(n,e),jn(e)){const t=Uu(n,e);D(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&kv(n,xi(e),t)}else ku(e)&&Lr(e,t=>{Uo(n,t)})}function kv(n,e,t){const i=t.map(v=>v.currentWriteId),s=Mu(n,e,i);let a=s;const c=s.hash();for(let v=0;v<t.length;v++){const T=t[v];D(T.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),T.status=1,T.retryCount++;const E=Ae(e,T.path);a=a.updateChild(E,T.currentOutputSnapshotRaw)}const p=a.val(!0),_=e;n.server_.put(_.toString(),p,v=>{Pi(n,"transaction put response",{path:_.toString(),status:v});let T=[];if(v==="ok"){const E=[];for(let k=0;k<t.length;k++)t[k].status=2,T=T.concat(Rt(n.serverSyncTree_,t[k].currentWriteId)),t[k].onComplete&&E.push(()=>t[k].onComplete(null,!0,t[k].currentOutputSnapshotResolved)),t[k].unwatcher();Hr(n,Do(n.transactionQueueTree_,e)),Uo(n,n.transactionQueueTree_),je(n.eventQueue_,e,T);for(let k=0;k<E.length;k++)Un(E[k])}else{if(v==="datastale")for(let E=0;E<t.length;E++)t[E].status===3?t[E].status=4:t[E].status=0;else{Re("transaction at "+_.toString()+" failed: "+v);for(let E=0;E<t.length;E++)t[E].status=4,t[E].abortReason=v}Pn(n,e)}},c)}function Pn(n,e){const t=Fu(n,e),i=xi(t),s=Uu(n,t);return Av(n,s,i),i}function Av(n,e,t){if(e.length===0)return;const i=[];let s=[];const c=e.filter(p=>p.status===0).map(p=>p.currentWriteId);for(let p=0;p<e.length;p++){const _=e[p],v=Ae(t,_.path);let T=!1,E;if(D(v!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),_.status===4)T=!0,E=_.abortReason,s=s.concat(Rt(n.serverSyncTree_,_.currentWriteId,!0));else if(_.status===0)if(_.retryCount>=fv)T=!0,E="maxretry",s=s.concat(Rt(n.serverSyncTree_,_.currentWriteId,!0));else{const k=Mu(n,_.path,c);_.currentInputSnapshot=k;const M=e[p].update(k.val());if(M!==void 0){Mr("transaction failed: Data returned ",M,_.path);let P=me(M);typeof M=="object"&&M!=null&&st(M,".priority")||(P=P.updatePriority(k.getPriority()));const ue=_.currentWriteId,B=Ur(n),at=Su(P,k,B);_.currentOutputSnapshotRaw=P,_.currentOutputSnapshotResolved=at,_.currentWriteId=Fo(n),c.splice(c.indexOf(ue),1),s=s.concat(wu(n.serverSyncTree_,_.path,at,_.currentWriteId,_.applyLocally)),s=s.concat(Rt(n.serverSyncTree_,ue,!0))}else T=!0,E="nodata",s=s.concat(Rt(n.serverSyncTree_,_.currentWriteId,!0))}je(n.eventQueue_,t,s),s=[],T&&(e[p].status=2,function(k){setTimeout(k,Math.floor(0))}(e[p].unwatcher),e[p].onComplete&&(E==="nodata"?i.push(()=>e[p].onComplete(null,!1,e[p].currentInputSnapshot)):i.push(()=>e[p].onComplete(new Error(E),!1,null))))}Hr(n,n.transactionQueueTree_);for(let p=0;p<i.length;p++)Un(i[p]);Uo(n,n.transactionQueueTree_)}function Fu(n,e){let t,i=n.transactionQueueTree_;for(t=Q(e);t!==null&&jn(i)===void 0;)i=Do(i,t),e=he(e),t=Q(e);return i}function Uu(n,e){const t=[];return Hu(n,e,t),t.sort((i,s)=>i.order-s.order),t}function Hu(n,e,t){const i=jn(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);Lr(e,s=>{Hu(n,s,t)})}function Hr(n,e){const t=jn(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,Nu(e,t.length>0?t:void 0)}Lr(e,i=>{Hr(n,i)})}function Ho(n,e){const t=xi(Fu(n,e)),i=Do(n.transactionQueueTree_,e);return tv(i,s=>{Is(n,s)}),Is(n,i),Au(i,s=>{Is(n,s)}),t}function Is(n,e){const t=jn(e);if(t){const i=[];let s=[],a=-1;for(let c=0;c<t.length;c++)t[c].status===3||(t[c].status===1?(D(a===c-1,"All SENT items should be at beginning of queue."),a=c,t[c].status=3,t[c].abortReason="set"):(D(t[c].status===0,"Unexpected transaction status in abort"),t[c].unwatcher(),s=s.concat(Rt(n.serverSyncTree_,t[c].currentWriteId,!0)),t[c].onComplete&&i.push(t[c].onComplete.bind(null,new Error("set"),!1,null))));a===-1?Nu(e,void 0):t.length=a+1,je(n.eventQueue_,xi(e),s);for(let c=0;c<i.length;c++)Un(i[c])}}/**
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
 */function Rv(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function xv(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Re(`Invalid query segment '${t}' in query '${n}'`)}return e}const Dl=function(n,e){const t=Pv(n),i=t.namespace;t.domain==="firebase.com"&&Ct(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&Ct("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Ug();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Vc(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new ae(t.pathString)}},Pv=function(n){let e="",t="",i="",s="",a="",c=!0,p="https",_=443;if(typeof n=="string"){let v=n.indexOf("//");v>=0&&(p=n.substring(0,v-1),n=n.substring(v+2));let T=n.indexOf("/");T===-1&&(T=n.length);let E=n.indexOf("?");E===-1&&(E=n.length),e=n.substring(0,Math.min(T,E)),T<E&&(s=Rv(n.substring(T,E)));const k=xv(n.substring(Math.min(n.length,E)));v=e.indexOf(":"),v>=0?(c=p==="https"||p==="wss",_=parseInt(e.substring(v+1),10)):v=e.length;const M=e.slice(0,v);if(M.toLowerCase()==="localhost")t="localhost";else if(M.split(".").length<=2)t=M;else{const P=e.indexOf(".");i=e.substring(0,P).toLowerCase(),t=e.substring(P+1),a=i}"ns"in k&&(a=k.ns)}return{host:e,port:_,domain:t,subdomain:i,secure:c,scheme:p,pathString:s,namespace:a}};/**
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
 */class Wu{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+we(this.snapshot.exportVal())}}class ju{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Bu{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return D(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Ov{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new nt;return bv(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){yn("OnDisconnect.remove",this._path);const e=new nt;return Ol(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){yn("OnDisconnect.set",this._path),zs("OnDisconnect.set",e,this._path);const t=new nt;return Ol(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){yn("OnDisconnect.setWithPriority",this._path),zs("OnDisconnect.setWithPriority",e,this._path),av("OnDisconnect.setWithPriority",t);const i=new nt;return Ev(this._repo,this._path,e,t,i.wrapCallback(()=>{})),i.promise}update(e){yn("OnDisconnect.update",this._path),Pu("OnDisconnect.update",e,this._path);const t=new nt;return Tv(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
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
 */class Wo{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return X(this._path)?null:fo(this._path)}get ref(){return new ot(this._repo,this._path)}get _queryIdentifier(){const e=yl(this._queryParams),t=lo(e);return t==="{}"?"default":t}get _queryObject(){return yl(this._queryParams)}isEqual(e){if(e=Me(e),!(e instanceof Wo))return!1;const t=this._repo===e._repo,i=po(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+C_(this._path)}}class ot extends Wo{constructor(e,t){super(e,t,new vo,!1)}get parent(){const e=Jc(this._path);return e===null?null:new ot(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class On{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ae(e),i=br(this.ref,e);return new On(this._node.getChild(t),i,ge)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new On(s,br(this.ref,i),ge)))}hasChild(e){const t=new ae(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ty(n,e){return n=Me(n),n._checkNotDeleted("ref"),e!==void 0?br(n._root,e):n._root}function br(n,e){return n=Me(n),Q(n._path)===null?lv("child","path",e):Ou("child","path",e),new ot(n._repo,pe(n._path,e))}function ny(n){return n=Me(n),new Ov(n._repo,n._path)}function iy(n){return yn("remove",n._path),Dv(n,null)}function Dv(n,e){n=Me(n),yn("set",n._path),zs("set",e,n._path);const t=new nt;return yv(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function ry(n,e){Pu("update",e,n._path);const t=new nt;return wv(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function sy(n){n=Me(n);const e=new Bu(()=>{}),t=new Wr(e);return vv(n._repo,n,t).then(i=>new On(i,new ot(n._repo,n._path),n._queryParams.getIndex()))}class Wr{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new Wu("value",this,new On(e.snapshotNode,new ot(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ju(this,e,t):null}matches(e){return e instanceof Wr?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class jo{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ju(this,e,t):null}createEvent(e,t){D(e.childName!=null,"Child events should have a childName.");const i=br(new ot(t._repo,t._path),e.childName),s=t._queryParams.getIndex();return new Wu(e.type,this,new On(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof jo?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Vu(n,e,t,i,s){const a=new Bu(t,void 0),c=e==="value"?new Wr(a):new jo(e,a);return Iv(n._repo,n,c),()=>Sv(n._repo,n,c)}function oy(n,e,t,i){return Vu(n,"value",e)}function ay(n,e,t,i){return Vu(n,"child_added",e)}Om(ot);Um(ot);/**
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
 */const Lv="FIREBASE_DATABASE_EMULATOR_HOST",Gs={};let Mv=!1;function Fv(n,e,t,i){n.repoInfo_=new Vc(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function Uv(n,e,t,i,s){let a=i||n.options.databaseURL;a===void 0&&(n.options.projectId||Ct("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ee("Using default host for project ",n.options.projectId),a=`${n.options.projectId}-default-rtdb.firebaseio.com`);let c=Dl(a,s),p=c.repoInfo,_;typeof process<"u"&&tl&&(_=tl[Lv]),_?(a=`http://${_}?ns=${p.namespace}`,c=Dl(a,s),p=c.repoInfo):c.repoInfo.secure;const v=new Yg(n.name,n.options,e);cv("Invalid Firebase Database URL",c),X(c.path)||Ct("Database URL must point to the root of a Firebase Database (not including a child path).");const T=Wv(p,n,v,new Kg(n.name,t));return new jv(T,n)}function Hv(n,e){const t=Gs[e];(!t||t[n.key]!==n)&&Ct(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Nv(n),delete t[n.key]}function Wv(n,e,t,i){let s=Gs[e.name];s||(s={},Gs[e.name]=s);let a=s[n.toURLString()];return a&&Ct("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),a=new pv(n,Mv,t,i),s[n.toURLString()]=a,a}class jv{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(gv(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ot(this._repo,re())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Hv(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ct("Cannot call "+e+" on a deleted database.")}}function ly(n=Gl(),e){const t=Zs(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=sd("database");i&&Bv(t,...i)}return t}function Bv(n,e,t,i={}){n=Me(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Ct("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let a;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&Ct('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),a=new Xi(Xi.OWNER);else if(i.mockUserToken){const c=typeof i.mockUserToken=="string"?i.mockUserToken:od(i.mockUserToken,n.app.options.projectId);a=new Xi(c)}Fv(s,e,t,a)}/**
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
 */function Vv(n){Pg(Mn),Nn(new Xt("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return Uv(i,s,a,t)},"PUBLIC").setMultipleInstances(!0)),Ot(nl,il,n),Ot(nl,il,"esm2017")}vt.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};vt.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Vv();class cy{constructor(e,t,i,s,a,c){ye(this,"roomId");ye(this,"players");ye(this,"status");ye(this,"mode");ye(this,"difficulty");ye(this,"turn");this.roomId=e,this.players=t,this.status=i,this.mode=s,this.difficulty=a,this.turn=c}}var qv=(n=>(n.WAITING="waiting",n.PLAYING="playing",n.FINISHED="finished",n))(qv||{}),$v=(n=>(n.DEFAULT="default",n))($v||{}),zv=(n=>(n.EASY="easy",n.DEFAULT="default",n.HARD="hard",n))(zv||{});class uy{constructor(e,t,i,s,a){ye(this,"id");ye(this,"name");ye(this,"board");ye(this,"ships");ye(this,"state");this.id=e,this.name=t,this.board=i,this.ships=s,this.state=a}}var Gv=(n=>(n.NOT_READY="not_ready",n.READY="ready",n.PLAYING="playing",n))(Gv||{});class hy{constructor(e,t,i,s,a,c,p){ye(this,"id");ye(this,"size");ye(this,"length");ye(this,"index");ye(this,"status");ye(this,"health");ye(this,"direction");this.id=e,this.size=t,this.length=i,this.index=s,this.status=a,this.health=c,this.direction=p}}var Kv=(n=>(n.INACTIVE="inactive",n.PLACED="placed",n.ACTIVE="active",n.DAMAGED="damaged",n.DESTROYED="destroyed",n))(Kv||{}),Yv=(n=>(n.COLUMN="column",n.ROW="row",n))(Yv||{});export{Xv as $,Yv as D,$v as M,uy as P,cy as R,hy as S,ey as a,Kv as b,sy as c,br as d,Gv as e,qv as f,ly as g,zv as h,yf as i,oy as j,ny as k,Jv as l,ay as m,iy as n,Zv as o,ty as r,Dv as s,ry as u};
