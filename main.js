(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(81),o=n.n(r),i=n(645),a=n.n(i),c=n(667),s=n.n(c),l=new URL(n(904),n.b),d=a()(o()),p=s()(l);d.push([e.id,"* {\n  box-sizing: border-box;\n  padding: 0;\n  font-family: 'Lato', sans-serif;\n  transition: 0.8s;\n  margin: 0 0;\n}\n\nbody {\n  background-color: #dedbd8;\n}\n\n.todo-container {\n  background-color: #fff;\n  width: 35%;\n  margin: 150px auto;\n  padding: 20px 15px;\n}\n\n#input-todo {\n  width: 100%;\n  padding: 10px 2px;\n  margin-top: 12px;\n  border: none;\n}\n\nul {\n  list-style-type: none;\n  box-sizing: border-box;\n}\n\nli {\n  display: flex;\n  align-items: center;\n  padding: 15px 0;\n  border-top: 1px solid #dedbd8;\n}\n\n.check-box {\n  float: left;\n  margin-top: 3px;\n  margin-right: 25px;\n}\n\n.delete-btn {\n  margin-left: auto;\n  width: 30px;\n  height: 30px;\n  border: none;\n  background: url("+p+") no-repeat;\n}\n\n.clear-btn {\n  width: 100%;\n  border: none;\n  height: 10%;\n  margin-top: 12px;\n  padding: 20px 0 !important;\n}\n\n.clear-btn:hover {\n  text-decoration: underline;\n}\n\n.list-text {\n  border: none;\n  padding: 10px;\n  font-size: 20px;\n  width: 82%;\n}\n",""]);const u=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var u=n(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var m=o(f,r);r.byIndex=c,t.splice(c,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var s=r(e,o),l=0;l<i.length;l++){var d=n(i[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},904:(e,t,n)=>{e.exports=n.p+"ef31db036e854253dea0.svg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href;var r={};(()=>{n.d(r,{Z:()=>S});var e=n(379),t=n.n(e),o=n(795),i=n.n(o),a=n(569),c=n.n(a),s=n(565),l=n.n(s),d=n(216),p=n.n(d),u=n(589),f=n.n(u),m=n(426),h={};h.styleTagTransform=f(),h.setAttributes=l(),h.insert=c().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=p(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const g=JSON.parse(localStorage.getItem("list")),v=document.createElement("div");v.classList="todo-container";const b=document.createElement("ul");b.classList="list-container",b.id="list-container";const y=document.createElement("button");let x;function S(e){b.innerHTML="",x=1,e.forEach((t=>{t.index=x,x+=1;const n=document.createElement("li"),r=document.createElement("input"),o=document.createElement("input"),i=document.createElement("button");o.type="checkbox",o.classList="check-box",r.value=t.description,r.classList="list-text",n.id=t.index,i.classList="delete-btn",i.id="delete-btn",i.addEventListener("click",(()=>function(e){const t=JSON.parse(localStorage.getItem("list")).filter((t=>t.index!==e.index));localStorage.setItem("list",JSON.stringify(t)),S(t)}(t))),r.addEventListener("keydown",(n=>function(e,t,n){const r=document.querySelector("#list-container").childNodes;for(let t=0;t<r.length;t+=1)e.index.toString()===r[t].id&&13===n.keyCode&&(e.description=r[t].childNodes[1].value);localStorage.setItem("list",JSON.stringify(t))}(t,e,n))),t.completed&&(o.checked="true"),function(e,t,n){e.addEventListener("change",(()=>{t.completed?(t.completed=!1,e.checked=!1,localStorage.setItem("list",JSON.stringify(n))):(t.completed=!0,e.checked=!0,localStorage.setItem("list",JSON.stringify(n)))}))}(o,t,e),n.appendChild(o),n.appendChild(r),n.appendChild(i),b.appendChild(n),v.appendChild(b)})),localStorage.setItem("list",JSON.stringify(e)),v.appendChild(y)}y.classList="clear-btn",y.innerHTML="Clear all completed",y.addEventListener("click",(()=>function(){const e=JSON.parse(localStorage.getItem("list")).filter((e=>!0!==e.completed));S(e),localStorage.setItem("list",JSON.stringify(e))}()));const E=null===g?localStorage.setItem("list",JSON.stringify([])):g;document.body.appendChild(function(e){const t=document.createElement("h3");t.innerHTML="Today's To Do";const n=document.createElement("input");return n.placeholder="Add to your list...",n.id="input-todo",document.createElement("ul").classList="list-container",v.appendChild(t),v.appendChild(n),S(e),v}(E)),function(){const e=document.getElementById("input-todo");e.addEventListener("keyup",(t=>{if("Enter"===t.key){const t={description:e.value,completed:!1};e.value="";const n=JSON.parse(localStorage.getItem("list"));n.push(t),S(n)}}))}()})()})();