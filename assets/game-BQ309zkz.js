var J=Object.defineProperty;var Z=(t,e,i)=>e in t?J(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var N=(t,e,i)=>(Z(t,typeof e!="symbol"?e+"":e,i),i);import{i as q,g as K,a as F,o as k,$ as s,r as f,c as I,e as _,m as X,j as S,f as T,D as p,b as m,u as y,n as $,l as ee,d as te}from"./Ship-mtCjgaWR.js";const se="/Battle-of-the-High-Seas/assets/board-bg2-BJ8gmd7w.gif",ie=Object.freeze(Object.defineProperty({__proto__:null,default:se},Symbol.toStringTag,{value:"Module"})),ae="/Battle-of-the-High-Seas/assets/fire-B7NqIo9M.gif",re=Object.freeze(Object.defineProperty({__proto__:null,default:ae},Symbol.toStringTag,{value:"Module"})),oe="/Battle-of-the-High-Seas/assets/lobby-bg-C72S6EjQ.jpg",ne=Object.freeze(Object.defineProperty({__proto__:null,default:oe},Symbol.toStringTag,{value:"Module"})),le="/Battle-of-the-High-Seas/assets/logo-NdU70Ygn.png",de=Object.freeze(Object.defineProperty({__proto__:null,default:le},Symbol.toStringTag,{value:"Module"})),ce="/Battle-of-the-High-Seas/assets/missed-shot-CZNQCz4t.png",fe=Object.freeze(Object.defineProperty({__proto__:null,default:ce},Symbol.toStringTag,{value:"Module"})),ge="/Battle-of-the-High-Seas/assets/player-ship-fire-DqB_8Afc.gif",ue=Object.freeze(Object.defineProperty({__proto__:null,default:ge},Symbol.toStringTag,{value:"Module"})),he="/Battle-of-the-High-Seas/assets/ship-2-1-Ctcwa05g.png",pe=Object.freeze(Object.defineProperty({__proto__:null,default:he},Symbol.toStringTag,{value:"Module"})),me="/Battle-of-the-High-Seas/assets/ship-3-1-DBkbElqy.png",be=Object.freeze(Object.defineProperty({__proto__:null,default:me},Symbol.toStringTag,{value:"Module"})),ye="/Battle-of-the-High-Seas/assets/ship-3-2-BJPXlfHt.png",Ae=Object.freeze(Object.defineProperty({__proto__:null,default:ye},Symbol.toStringTag,{value:"Module"})),Ce="/Battle-of-the-High-Seas/assets/ship-4-1-C4W2Nih_.png",Ie=Object.freeze(Object.defineProperty({__proto__:null,default:Ce},Symbol.toStringTag,{value:"Module"})),Se="data:image/png;base64,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",_e=Object.freeze(Object.defineProperty({__proto__:null,default:Se},Symbol.toStringTag,{value:"Module"})),ve="/Battle-of-the-High-Seas/assets/ship-5-1-DqDdTOJq.png",xe=Object.freeze(Object.defineProperty({__proto__:null,default:ve},Symbol.toStringTag,{value:"Module"})),we="/Battle-of-the-High-Seas/assets/ship-6-1-BbM6-ehE.png",Ee=Object.freeze(Object.defineProperty({__proto__:null,default:we},Symbol.toStringTag,{value:"Module"}));class Te{constructor(e,i,r){N(this,"isHaveWinner");N(this,"winner");N(this,"selectedCell");this.isHaveWinner=e,this.winner=i,this.selectedCell=r}}const Be={apiKey:"AIzaSyAL0AmcXBH1zr7EKL8pE3-Joge0Pxyljfg",authDomain:"battle-of-the-high-seas.firebaseapp.com",databaseURL:"https://battle-of-the-high-seas-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"battle-of-the-high-seas",storageBucket:"battle-of-the-high-seas.appspot.com",messagingSenderId:"95988470782",appId:"1:95988470782:web:b745e9ce5edeeebbe566af",measurementId:"G-ZVDQNVR4JY"};q(Be);const g=K(),je=new URLSearchParams(window.location.search);let u=je.get("roomId");const M=F();let j,L,U;k(M,async t=>{if(t){L=f(g,"users/"+t.uid),j=t.uid;try{U=await I(L),U.exists()}catch(e){console.error("Error fetching user data:",e)}}else ee(M).catch(e=>{console.error("Error signing in anonymously:",e)})});let x,a,B,v;const R=s("#dropzone");let H;const w=f(g,"rooms/"+u);I(w).then(t=>{if(t.exists()){v=t.val();const e=new Map(Object.entries(v.players||{}));s("#roomId").text(`ROOM ID: #${v.roomId}`);const i=e.get(j);i&&(a=i,x=f(g,`rooms/${u}/players/${j}`),s(".player .player-name").text(a.name),a.state===_.NOT_READY&&s(".player button").prop("disabled",!0)),Re(i.board),H=s(".cells"),H&&Oe()}else console.error("no room to get...")});X(f(g,`rooms/${u}/players`),t=>{t.exists()&&t.val().id!==j&&(B=t.val(),s(".enemy .player-name").text(B.name),alert("Player Joined!!!"))});let z=!1;S(f(g,`rooms/${u}/players`),async t=>{if(z)return;if((await I(w)).val().status!==T.WAITING){D(),Y(),!z&&G();return}const i=new Map(Object.entries(t.val()||{}));let r=[!1,!1];i.forEach((o,l)=>{l===j?o.state!==_.NOT_READY&&(r[0]=!0):o.state!==_.NOT_READY&&s(".enemy button").prop("disabled",!1)&&(r[1]=!0)}),r[0]&&r[1]&&y(w,{status:T.PLAYING}).then(()=>{D(),Y(),a.state=_.PLAYING,y(x,a),G()}).catch(o=>console.log("error updating room status to playing",o))});let E=null;function Oe(){s(".guide-pane, #dropzone").on("dragstart",".ship",function(t){if(v.status!==T.WAITING)return;E=s(this);const e=a.ships.find(o=>o.id===E.attr("id"));if(!e)return!1;const i=s(this).data("size").split("x"),r=parseInt(i[0]);R.on("dragover",".cell",function(o){o.preventDefault();let l=s(".cell").index(this),d=[];for(let n=0;n<r;n++){let b=e.direction===p.ROW?n:n*10;const O=l+b;d.push(O)}s(".cell").removeClass("highlight"),s(".cell").removeClass("warning"),W(l,e)?d.map(n=>s(".cell").eq(n).addClass("highlight")):d.map(n=>s(".cell").eq(n).addClass("warning"))})}),R.on("drop",".cell",function(t){if(v.status!==T.WAITING)return;const e=s(this).data("index"),i=a.ships.find(r=>r.id===E.attr("id"));if(i){if(W(e,i)){t.preventDefault(),s(".cell").removeClass("highlight"),s(".cell").removeClass("warning"),s(this).prepend(E);const r=a.ships.find(o=>o.id===E.attr("id"));r&&(r.index=e,r.status=m.PLACED,a.ships.filter(o=>o.status===m.INACTIVE).length==0?s(".player button").prop("disabled",!1):s(".player button").prop("disabled",!0),y(x,a).catch(o=>console.log("error while updating ships",o)));return}s(".cell").removeClass("highlight"),s(".cell").removeClass("warning")}}),R.on("click",".cell",function(){if(v.status!==T.WAITING)return;const t=s(this).data("index"),e=a.ships.find(i=>i.index===t);e&&(ze(e,a.ships)?(e.direction===p.COLUMN?(s(".cell").eq(e.index).find(".ship").attr("direction","row"),e.direction=p.ROW):(s(".cell").eq(e.index).find(".ship").attr("direction","column"),e.direction=p.COLUMN),y(x,{ships:a.ships}).catch(i=>console.log("error while updating ships",i))):(s(".cell").eq(t).addClass("warning"),setTimeout(()=>{s(".cell").eq(t).removeClass("warning")},1500)))}),Ne(a.ships),Pe(a.ships)}s(".player button").on("click",function(){a.state===_.NOT_READY&&y(x,{state:_.READY}).then(()=>{}).catch(t=>console.log("error while updating ships",t))});const V=t=>{const e=`/src/assets/imgs/${t}`,r=Object.assign({"/src/assets/imgs/board-bg2.gif":ie,"/src/assets/imgs/fire.gif":re,"/src/assets/imgs/lobby-bg.jpg":ne,"/src/assets/imgs/logo.png":de,"/src/assets/imgs/missed-shot.png":fe,"/src/assets/imgs/player-ship-fire.gif":ue,"/src/assets/imgs/ship-2-1.png":pe,"/src/assets/imgs/ship-3-1.png":be,"/src/assets/imgs/ship-3-2.png":Ae,"/src/assets/imgs/ship-4-1.png":Ie,"/src/assets/imgs/ship-4-2.png":_e,"/src/assets/imgs/ship-5-1.png":xe,"/src/assets/imgs/ship-6-1.png":Ee})[e];return r?r.default:""};function Ne(t){for(let e of t){const i=V(e.id+".png");console.log(`Loading image from path: ${i}`),e.status===m.INACTIVE&&s(".guide-pane .ships").append(`
            <div id="${e.id}" class="ship" draggable="true" data-size="${e.size}" direaction="column">
                <img src="${i}">
            </div>
        `),s(".fleet .ships").append(`
            <div id="${e.id}" class="ship" data-size="${e.size}" direaction="column">
                <img src="${i}">
            </div>
        `)}}function Re(t){const e=t.size*t.size;for(let i=0;i<e;i++)R.append(`<div data-index="${i}" class="cell"></div>`),s("#enemy-board .board").append(`<div data-index="${i}" class="cell"></div>`)}function W(t,e){let i=t%10;const r=Math.floor(t/10);let o=!0;if(e.direction===p.ROW){if(i+e.length>10)return!1;e:for(let l=0;l<e.length;l++){let d=t+l;for(let n of a.ships)if(n.status!==m.INACTIVE&&n.id!==e.id){if(n.direction===p.ROW){if(n.index===d){o=!1;break e}}else for(let b=0;b<n.length;b++)if(d===n.index+b*10){o=!1;break e}}}if(!o)return!1}else{if(r+e.length>10)return!1;e:for(let l=0;l<e.length;l++){let d=t+l*10;for(let n of a.ships)if(n.status!==m.INACTIVE&&n.id!==e.id){if(n.direction===p.COLUMN){if(n.index===d){o=!1;break e}}else for(let b=0;b<n.length;b++)if(d===n.index+b){o=!1;break e}}}if(!o)return!1}return!0}function ze(t,e){let i=!0;const r=t.index;if(t.direction===p.ROW){if(Math.floor(r/10)+t.length>10)return!1;for(let o=1;o<t.length;o++){let l=r+o*10;if(l>=100||(e.forEach(d=>{if(d.status!==m.INACTIVE&&d.id!==t.id){if(d.direction===p.COLUMN){if(d.index===l){i=!1;return}}else if(d.index<=l&&d.index+d.length>l){i=!1;return}}}),!i))return!1}}else{if(r%10+t.length>10)return!1;for(let o=1;o<t.length;o++){let l=r+o;if(e.forEach(d=>{if(d.status!==m.INACTIVE&&d.id!==t.id){if(d.direction===p.ROW){if(d.index===l){i=!1;return}}else for(let n=0;n<d.length;n++)if(l===d.index+n*10){i=!1;return}}}),!i)return!1}}return!0}function Pe(t){for(let e of t)if(e.status!=m.INACTIVE){const i=e.index,r=e.direction,o=V(e.id+".png");let l=s(".cell").eq(i);r==p.ROW?l.append(`
                <div id="${e.id}" class="ship" draggable="true" data-size="${e.size}" direction="row">
                    <img src="${o}" alt="">
                </div>
                `):l.append(`
                <div id="${e.id}" class="ship" draggable="true" data-size="${e.size}" direction="column">
                    <img src="${o}" alt="">
                </div>
                `)}a.ships.filter(e=>e.status===m.INACTIVE).length==0?s(".player button").prop("disabled",!1):s(".player button").prop("disabled",!0)}function Y(){a.ships.map(t=>{const e=t.index;if(t.direction===p.ROW)for(let r=0;r<t.length;r++)a.board.grid[e+r].inside=t.id;else for(let r=0;r<t.length;r++)a.board.grid[e+r*10].inside=t.id})}function D(){s(".guide-pane").hide(),s(".board-area + .right").show(),s("aside").removeClass("hidden"),s(".player-info button").hide(),s("#dropzone .ship[draggable='true']").attr("draggable","false"),s("#dropzone .ship").css("zIndex","-1"),s("#turnPlayerName").show()}async function G(){if(z)return;s(".cell").append("<div class='shot'></div>"),I(te(f(g),`rooms/${u}/gameStat`)).then(h=>{h.exists()||y(w,{gameStat:new Te(!1,null,-1)}).then(()=>{}).catch(c=>console.error("Error while adding game stat",c))});const t=f(g,`rooms/${u}/turn`),e=f(g,`rooms/${u}/gameStat`),i=f(g,`rooms/${u}/gameStat/isHaveWinner`),r=f(g,`rooms/${u}/gameStat/selectedCell`),o=f(g,`rooms/${u}/players/${B.id}/board/grid`),l=f(g,`rooms/${u}/players/${a.id}/board/grid`);let n=(await I(f(g,`rooms/${u}/players/${B.id}/board/grid`))).val(),O=(await I(f(g,`rooms/${u}/players/${a.id}/board/grid`))).val();S(t,h=>{const c=h.val();s("#turnPlayerName").text(c==a.id?"YOUR TURN":"ENEMY TURN"),s("#turnPlayerName").css("color",c==a.id?"#9DFF21":"#ff2121")}),s("#enemy-board .board").on("click",".cell",async function(){if((await I(t)).val()===a.id){const c=s(this).index();if(n[c].isHit)return;await y(e,{selectedCell:c})}}),S(r,async h=>{const c=h.val(),A=await I(t);if(c!=-1&&A.val()!==a.id){const P=a.board.grid[c];if(a.board.grid[c].isHit=!0,P.inside!=="empty"){let C=a.ships.findIndex(Q=>Q.id===P.inside);if(!a.ships[C])return;a.ships[C].health>1?(a.ships[C].health=a.ships[C].health-1,a.ships[C].status=m.DAMAGED):(a.ships[C].health=0,a.ships[C].status=m.DESTROYED)}y(x,a).then(async()=>{Me(a.ships)&&await y(e,{isHaveWinner:!0,winner:B}),await y(w,{turn:a.id})}).catch(C=>console.log("error updating the player after attack",C))}}),S(l,async h=>{O=h.val(),O.map((c,A)=>{c.isHit&&s("#player-board .board .cell .shot").eq(A).html(c.inside==="empty"?'<img src="../assets/imgs/missed-shot.png" alt="missed"/>':'<img src="../assets/imgs/player-ship-fire.gif" alt="fire"/>')})}),S(o,async h=>{n=h.val(),n.map((c,A)=>{c.isHit&&s("#enemy-board .board .cell .shot").eq(A).html(c.inside==="empty"?'<img src="../assets/imgs/missed-shot.png" alt="missed"/>':'<img src="../assets/imgs/fire.gif" alt="fire"/>')})}),S(i,async h=>{if(h.val()){const A=(await I(f(g,`rooms/${u}/gameStat/winner`))).val();alert("Winner is "+A.name),s("#turnPlayerName").text(A==a.id?"YOUR WIN":"ENEMY WIN"),s("#turnPlayerName").css("color",A==a.id?"#9DFF21":"#ff2121")}}),z=!0}function Me(t){return t.filter(e=>e.status===m.DESTROYED).length===t.length}s("#exitButton").click(async function(){await $(w)});
