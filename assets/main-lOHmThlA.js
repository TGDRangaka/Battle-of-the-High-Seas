var W=Object.defineProperty;var D=(t,e,o)=>e in t?W(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var u=(t,e,o)=>(D(t,typeof e!="symbol"?e+"":e,o),o);import{i as V,g as M,a as k,r as m,o as j,$ as i,b,c as w,P as E,d as x,u as B,R as P,e as v,M as L,s as R,D as g,S as a,f as s,h as n,j as U,k as z,l as G}from"./Ship-CbUz4hjx.js";class N{constructor(e){u(this,"size");u(this,"grid");this.size=e,this.grid=this.createGrid(e)}createGrid(e){let o=0;return Array.from({length:e*e},()=>new Y(o++,"empty",!1))}}class Y{constructor(e,o,r){u(this,"index");u(this,"inside");u(this,"isHit");this.index=e,this.inside=o,this.isHit=r}}const H={apiKey:"AIzaSyAL0AmcXBH1zr7EKL8pE3-Joge0Pxyljfg",authDomain:"battle-of-the-high-seas.firebaseapp.com",databaseURL:"https://battle-of-the-high-seas-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"battle-of-the-high-seas",storageBucket:"battle-of-the-high-seas.appspot.com",messagingSenderId:"95988470782",appId:"1:95988470782:web:b745e9ce5edeeebbe566af",measurementId:"G-ZVDQNVR4JY"};V(H);const p=M(),A=k();let l,f,c;const $=m(p,"users");j(A,async t=>{if(U($,e=>{if(e.exists()){const o=e.val(),r=o?Object.keys(o).length:0;i(".count").text(r)}else i(".count").text(0)}),t){f=m(p,"users/"+t.uid),l=t.uid;try{const e=J(l);e?(c=e,await R(f,{name:c})):(c=K(),await R(f,{name:c}),F(l,c)),z(f).remove()}catch(e){console.error("Error fetching user data:",e)}}else G(A).catch(e=>{console.error("Error signing in anonymously:",e)})});function F(t,e){localStorage.setItem(t,e)}function J(t){const e=localStorage.getItem(t);return e||null}i("#createRoomBtn").on("click",async function(){i(".create-room").toggle()});i("#submitCode").click(async()=>{let t=parseInt(i("#roomIdInput").val()+"");if(!t||t>=1e4||t<=999){alert("Please enter a room ID");return}const e=await b(w(m(p),"rooms/"+t));if(e.exists()){const o=e.val(),r=o.players||{},h=new Map(Object.entries(r));if(h.size<2){const d=new E(l,c,new N(O(o.difficulty)),C(o.difficulty),x.NOT_READY);h.set(d.id,d);const I={...o,players:S(h)};B(w(m(p),"rooms/"+t),I).then(()=>{T(t.toString())}).catch(y=>console.log("Error adding player to room",y))}else alert("Room is already full.")}else console.log("Room doesn't exist")});function S(t){const e={};return t.forEach((o,r)=>{e[r]=o}),e}i("#joinRoomBtn").on("click",function(){i(".pop-up").toggle()});i(".close-btn").click(()=>{i(".pop-up, .create-room").hide()});i(".card button").click(function(){const t=i(this).data("difficulty");Q(t)});function T(t){window.location.href=`/Battle-of-the-High-Seas/src/pages/game-view.html?roomId=${t}`}function K(){const t=["Silly","Goofy","Wobbly","Clumsy","Bouncy","Quirky","Zany","Snappy","Wacky","Bizarre"],e=["Penguin","Banana","Noodle","Pancake","Nugget","Pickle","Wombat","Squirrel","Doodle","Llama"],o=t[Math.floor(Math.random()*t.length)],r=e[Math.floor(Math.random()*e.length)];return`${o} ${r}`}async function Q(t){let e=!1,o=Math.floor(Math.random()*9e3)+1e3;for(;!e;)await b(w(m(p),"rooms/"+o)).then(async r=>{if(!r.exists()){const h=new Map;h.set(l,new E(l,c,new N(O(t)),C(t),x.NOT_READY));const d=new P(o,h,v.WAITING,L.DEFAULT,t,l),I={...d,players:S(d.players)};await R(m(p,"rooms/"+o),I).then(()=>{e=!0,T(o.toString())}).catch(y=>console.log("Error creating room",y))}}).catch(r=>{console.log(r.message)}).finally(()=>o=Math.floor(Math.random()*9e3)+1e3)}function O(t){return t===g.EASY?7:t===g.DEFAULT?10:14}function C(t){return t===g.EASY?[new a("ship-3-2","3x1",3,-1,s.INACTIVE,3,n.ROW),new a("ship-3-1","3x1",3,-1,s.INACTIVE,3,n.ROW),new a("ship-2-1","2x1",2,-1,s.INACTIVE,2,n.ROW)]:t===g.DEFAULT?[new a("ship-4-2","4x1",4,-1,s.INACTIVE,4,n.ROW),new a("ship-4-1","4x1",4,-1,s.INACTIVE,4,n.ROW),new a("ship-3-2","3x1",3,-1,s.INACTIVE,3,n.ROW),new a("ship-3-1","3x1",3,-1,s.INACTIVE,3,n.ROW),new a("ship-2-1","2x1",2,-1,s.INACTIVE,2,n.ROW)]:[new a("ship-6-1","6x1",6,-1,s.INACTIVE,6,n.ROW),new a("ship-4-2","4x1",4,-1,s.INACTIVE,4,n.ROW),new a("ship-4-1","4x1",4,-1,s.INACTIVE,4,n.ROW),new a("ship-3-2","3x1",3,-1,s.INACTIVE,3,n.ROW),new a("ship-3-1","3x1",3,-1,s.INACTIVE,3,n.ROW),new a("ship-2-1","2x1",2,-1,s.INACTIVE,2,n.ROW)]}
