(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(537),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n.player-board {\n    display: grid;\n    height: 400px;\n    width: 400px;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n}\n.cell {\n    display: flex;\n    background-color: #f4f4f5;\n    justify-content: center;\n    border: 1px solid black;\n    align-items: center;\n    font-size: 1.5rem;\n    cursor: pointer;\n}\n.container {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    margin-top: 20px;\n    height: 100vh;\n}\nbody {\n    font-family: 'Roboto', sans-serif;\n}\n.header-container {\n    margin-top: 20px;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n.missed {\n    background-color: #86efac;\n}\n.hit {\n    background-color: #ff7f7f;\n}\n.board-container{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\nh2{\n    margin-bottom: 20px;\n    font-size: 2rem;\n}\n.ship{\n    background-color: grey;\n}","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,aAAa;IACb,YAAY;IACZ,sCAAsC;IACtC,mCAAmC;AACvC;AACA;IACI,aAAa;IACb,yBAAyB;IACzB,uBAAuB;IACvB,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,eAAe;AACnB;AACA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,gBAAgB;IAChB,aAAa;AACjB;AACA;IACI,iCAAiC;AACrC;AACA;IACI,gBAAgB;IAChB,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;AAC1B;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;AAC1B;AACA;IACI,mBAAmB;IACnB,eAAe;AACnB;AACA;IACI,sBAAsB;AAC1B",sourcesContent:["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n.player-board {\n    display: grid;\n    height: 400px;\n    width: 400px;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n}\n.cell {\n    display: flex;\n    background-color: #f4f4f5;\n    justify-content: center;\n    border: 1px solid black;\n    align-items: center;\n    font-size: 1.5rem;\n    cursor: pointer;\n}\n.container {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    margin-top: 20px;\n    height: 100vh;\n}\nbody {\n    font-family: 'Roboto', sans-serif;\n}\n.header-container {\n    margin-top: 20px;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n.missed {\n    background-color: #86efac;\n}\n.hit {\n    background-color: #ff7f7f;\n}\n.board-container{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\nh2{\n    margin-bottom: 20px;\n    font-size: 2rem;\n}\n.ship{\n    background-color: grey;\n}"],sourceRoot:""}]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},537:e=>{e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[n].concat([a]).join("\n")}return[n].join("\n")}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],u=a[l]||0,A="".concat(l," ").concat(u);a[l]=u+1;var d=t(A),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)n[d].references++,n[d].updater(f);else{var p=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:A,updater:p,references:1})}i.push(A)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),l=0;l<a.length;l++){var u=t(a[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),l=t(216),u=t.n(l),A=t(589),d=t.n(A),f=t(426),p={};p.styleTagTransform=d(),p.setAttributes=s(),p.insert=i().bind(null,"head"),p.domAPI=o(),p.insertStyleElement=u(),n()(f.Z,p),f.Z&&f.Z.locals&&f.Z.locals;const m=function(){const e=[];return{placeShip:function(n,t){const r=function(e){let n=0;return{length:e,isSunk:function(){return n>=e},hit:function(){n+=1},getHitCount:function(){return n}}}(n),o=[];for(let e=0;e<n;e+=1){const n=[t[0]+e,t[1]];o.push(n)}e.push({ship:r,positions:o})},visitedAttacks:[],receiveAttack:function(n){let t=!1;return e.forEach((({ship:e,positions:r})=>{r.forEach(((r,o)=>{JSON.stringify(r)===JSON.stringify(n)&&(e.hit(),t=!0)}))})),t},allSunk:function(n){if(n){let n=!0;return e.forEach((({ship:e})=>{e.isSunk()||(n=!1)})),!!n}},ships:e,clearShips:function(){e.length=0}}},h=function(){return{createCellEls:function(e){const n=[0,0];for(let t=0;t<100;t+=1){n[0]>9&&(n[0]=0,n[1]+=1);const t=document.createElement("div");t.classList.add("cell"),t.setAttribute("data-index",n),t.setAttribute("data-clicked",!1),e.appendChild(t),n[0]+=1}},markCellAsHit:function(e,n){document.querySelector(`.${n}-board > [data-index="${e}"]`).classList.add("hit")},markCellAsMissed:function(e,n){document.querySelector(`.${n}-board > [data-index="${e}"]`).classList.add("missed")},markShips:function(e,n,t){for(let r=0;r<n;r+=1)document.querySelector(`.${t}-board > [data-index="${[e[0]+r,e[1]]}"]`).classList.add("ship")},resetCells:function(e,n){let t=document.querySelectorAll(".cell");t.forEach((e=>{e.parentNode.removeChild(e),console.log(e)})),t=document.querySelectorAll(".cell"),console.log(t)}}};let g=h(),C=[5,4,3,3,2];const y=function(e,n){if(0!==C.length)return alert(`Enter a ship of length ${C[0]} to place on the board`),function(e,n,t){if(e[0]+n>10)return alert("Outside the board"),!1;let r=!1;return t.ships.forEach((t=>{t.positions.forEach((t=>{for(let o=0;o<n;o+=1)JSON.stringify(t)===JSON.stringify([e[0]+o,e[1]])&&(!0!==r&&alert("Ship collision"),r=!0)}))})),!0!==r}(e,C[0],n)&&(n.placeShip(C[0],e),g.markShips(e,C[0],"player1"),C.shift()),console.log(C.length>0),C.length>0},b=document.querySelector(".player1-board"),v=document.querySelector(".player2-board");!function e(){const n=h(),t={gameboard:m(),sendAttack:function(e,n){return n.receiveAttack(e)}};console.log(t);const r=function(){const e=m();let n=[];for(let e=0;e<10;e+=1)for(let t=0;t<10;t+=1)n.push([e,t]);return{gameboard:e,sendAttack:function(e){const t=Math.floor(Math.random()*n.length),r=n[t];return n=n.filter(((e,n)=>n!==t)),[e.receiveAttack(r),r]}}}(),o=t.gameboard,a=r.gameboard;n.createCellEls(b),n.createCellEls(v);const i=document.querySelectorAll(".player2-board > .cell"),c=document.querySelectorAll(".player1-board > .cell");let s=t,l=a;c.forEach((c=>{function u(i){if(console.log("a"),"true"===i.target.getAttribute("data-clicked"))return;i.target.setAttribute("data-clicked",!0);const c=i.target.getAttribute("data-index").split(",").map(Number);if(t.sendAttack(c,a)?(n.markCellAsHit(c,"player2"),a.allSunk(!0)&&alert("Player 1 wins!")):(console.log(c),n.markCellAsMissed(c,"player2")),s=s===t?r:t,l=l===a?o:a,s===r){const i=r.sendAttack(o),c=i[0],u=i[1];c?(n.markCellAsHit(u,"player1"),o.allSunk(!0)&&(alert("Player 2 wins!"),function(n,t,r,o,a){console.log(n,t),r.resetCells(n,t),o.clearShips(),a.clearShips(),C=[5,4,3,3,2],e()}(b,v,n,o,a))):n.markCellAsMissed(u,"player1"),s=t,l=a}}c.addEventListener("click",(function e(n){console.log("b");const t=n.target.getAttribute("data-index").split(",").map(Number),r=y(t,o);console.log(t,r),r||(c.removeEventListener("click",e),document.querySelectorAll(".player1-board > .ship").forEach((e=>{e.classList.remove("ship")})),i.forEach((e=>{e.addEventListener("click",u)})))}))}))}()})()})();
//# sourceMappingURL=bundle.js.map