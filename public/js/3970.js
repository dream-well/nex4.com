"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3970],{3377:(t,e,n)=>{n.d(e,{Z:()=>a});var s=n(3645),i=n.n(s)()((function(t){return t[1]}));i.push([t.id,".table-inverse a[data-v-d4b4b5a4]{color:#2196f3!important}",""]);const a=i},6706:(t,e,n)=>{n.d(e,{Z:()=>a});var s=n(3645),i=n.n(s)()((function(t){return t[1]}));i.push([t.id,".exit-button[data-v-e48da20a]{transition:.3s;width:20px}.exit-button[data-v-e48da20a]:hover{transform:scale(1.2)}",""]);const a=i},3645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,s){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(s)for(var a=0;a<this.length;a++){var r=this[a][0];null!=r&&(i[r]=!0)}for(var o=0;o<t.length;o++){var c=[].concat(t[o]);s&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},3379:(t,e,n)=>{var s,i=function(){return void 0===s&&(s=Boolean(window&&document&&document.all&&!window.atob)),s},a=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),r=[];function o(t){for(var e=-1,n=0;n<r.length;n++)if(r[n].identifier===t){e=n;break}return e}function c(t,e){for(var n={},s=[],i=0;i<t.length;i++){var a=t[i],c=e.base?a[0]+e.base:a[0],l=n[c]||0,d="".concat(c," ").concat(l);n[c]=l+1;var u=o(d),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(r[u].references++,r[u].updater(f)):r.push({identifier:d,updater:_(f,e),references:1}),s.push(d)}return s}function l(t){var e=document.createElement("style"),s=t.attributes||{};if(void 0===s.nonce){var i=n.nc;i&&(s.nonce=i)}if(Object.keys(s).forEach((function(t){e.setAttribute(t,s[t])})),"function"==typeof t.insert)t.insert(e);else{var r=a(t.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}return e}var d,u=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function f(t,e,n,s){var i=n?"":s.media?"@media ".concat(s.media," {").concat(s.css,"}"):s.css;if(t.styleSheet)t.styleSheet.cssText=u(e,i);else{var a=document.createTextNode(i),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(a,r[e]):t.appendChild(a)}}function v(t,e,n){var s=n.css,i=n.media,a=n.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleSheet)t.styleSheet.cssText=s;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(s))}}var p=null,h=0;function _(t,e){var n,s,i;if(e.singleton){var a=h++;n=p||(p=l(e)),s=f.bind(null,n,a,!1),i=f.bind(null,n,a,!0)}else n=l(e),s=v.bind(null,n,e),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return s(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;s(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=i());var n=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var s=0;s<n.length;s++){var i=o(n[s]);r[i].references--}for(var a=c(t,e),l=0;l<n.length;l++){var d=o(n[l]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}n=a}}}},3970:(t,e,n)=>{n.r(e),n.d(e,{default:()=>d});var s=n(629),i=n(7264);n(1580);const a={data:function(){return{showModelError:!1,error:null}},components:{"exit-button":i.Z},computed:(0,s.rn)({loading:function(t){return t.auth.loading},device_activity_data:function(t){return t.auth.device_activity_data}}),mounted:function(){this.$store.dispatch("GET_DEVICE_ACTIVITY")},methods:{DELETE_SESSION:function(t,e){this.$store.dispatch("DELETE_DEVICE_SESSION",{id:t,key:e})}}};var r=n(3379),o=n.n(r),c=n(3377),l={insert:"head",singleton:!1};o()(c.Z,l);c.Z.locals;const d=(0,n(1900).Z)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"settings"},[t.loading?n("div",{staticClass:"spinner-load"},[t._m(0),t._v(" "),t._m(1)]):t._e(),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"exit-icon",on:{click:function(e){return t.$Helper.home()}}},[n("exit-button")],1),t._v(" "),n("div",{staticClass:"col-12 col-sm-8 offset-sm-2 p-sm-3 mt-5 h-100"},[n("div",{staticClass:"device-activity"},[n("div",{staticClass:"title"},[n("p",[t._v(t._s(t.$t("setting.device_activity")))])]),t._v(" "),n("hr"),t._v(" "),n("table",{staticClass:"table table-inverse"},[n("tbody",t._l(t.device_activity_data.data,(function(e,s){return n("tr",{key:s},["on"==e.status?n("td",{staticClass:"device-on"},[n("p",{staticClass:"location"},[t._v(t._s(e.country)+" / "+t._s(e.city))]),t._v(" "),n("span",{staticClass:"status"},[t._v("Active now")])]):t._e(),t._v(" "),"off"==e.status?n("td",{staticClass:"device-off"},[n("p",{staticClass:"location"},[t._v(t._s(e.country)+" / "+t._s(e.city))]),t._v(" "),n("span",{staticClass:"status"},[t._v(" Last Login - "+t._s(e.updated_at))]),t._v(" "),n("div",{staticClass:"end-session",on:{click:function(n){return t.DELETE_SESSION(e.id,s)}}},[n("svg",{staticStyle:{"enable-background":"new 0 0 174.239 174.239"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 174.239 174.239","xml:space":"preserve",width:"15px"}},[n("g",[n("path",{attrs:{d:"M87.12,0C39.082,0,0,39.082,0,87.12s39.082,87.12,87.12,87.12s87.12-39.082,87.12-87.12S135.157,0,87.12,0z M87.12,159.305   c-39.802,0-72.185-32.383-72.185-72.185S47.318,14.935,87.12,14.935s72.185,32.383,72.185,72.185S126.921,159.305,87.12,159.305z",fill:"#ffffff"}}),t._v(" "),n("path",{attrs:{d:"M120.83,53.414c-2.917-2.917-7.647-2.917-10.559,0L87.12,76.568L63.969,53.414c-2.917-2.917-7.642-2.917-10.559,0   s-2.917,7.642,0,10.559l23.151,23.153L53.409,110.28c-2.917,2.917-2.917,7.642,0,10.559c1.458,1.458,3.369,2.188,5.28,2.188   c1.911,0,3.824-0.729,5.28-2.188L87.12,97.686l23.151,23.153c1.458,1.458,3.369,2.188,5.28,2.188c1.911,0,3.821-0.729,5.28-2.188   c2.917-2.917,2.917-7.642,0-10.559L97.679,87.127l23.151-23.153C123.747,61.057,123.747,56.331,120.83,53.414z",fill:"#ffffff"}})])])])]):t._e(),t._v(" "),"failed"==e.status?n("td",{staticClass:"device-failed"},[n("p",{staticClass:"location"},[t._v(t._s(e.country)+" / "+t._s(e.city))]),t._v(" "),n("span",{staticClass:"status"},[t._v(t._s(e.updated_at)+" - Failed")]),t._v(" "),n("div",{staticClass:"end-session",on:{click:function(n){return t.DELETE_SESSION(e.id,s)}}},[n("svg",{staticStyle:{"enable-background":"new 0 0 174.239 174.239"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 174.239 174.239","xml:space":"preserve",width:"15px"}},[n("g",[n("path",{attrs:{d:"M87.12,0C39.082,0,0,39.082,0,87.12s39.082,87.12,87.12,87.12s87.12-39.082,87.12-87.12S135.157,0,87.12,0z M87.12,159.305   c-39.802,0-72.185-32.383-72.185-72.185S47.318,14.935,87.12,14.935s72.185,32.383,72.185,72.185S126.921,159.305,87.12,159.305z",fill:"#ffffff"}}),t._v(" "),n("path",{attrs:{d:"M120.83,53.414c-2.917-2.917-7.647-2.917-10.559,0L87.12,76.568L63.969,53.414c-2.917-2.917-7.642-2.917-10.559,0   s-2.917,7.642,0,10.559l23.151,23.153L53.409,110.28c-2.917,2.917-2.917,7.642,0,10.559c1.458,1.458,3.369,2.188,5.28,2.188   c1.911,0,3.824-0.729,5.28-2.188L87.12,97.686l23.151,23.153c1.458,1.458,3.369,2.188,5.28,2.188c1.911,0,3.821-0.729,5.28-2.188   c2.917-2.917,2.917-7.642,0-10.559L97.679,87.127l23.151-23.153C123.747,61.057,123.747,56.331,120.83,53.414z",fill:"#ffffff"}})])])])]):t._e()])})),0)])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hidden-md-up phone"},[e("div",{attrs:{id:"main"}},[e("span",{staticClass:"spinner"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hidden-sm-down other"},[e("div",{attrs:{id:"main"}},[e("span",{staticClass:"spinner"})])])}],!1,null,"d4b4b5a4",null).exports},7264:(t,e,n)=>{n.d(e,{Z:()=>c});const s={methods:{BACK:function(){this.$store.commit("SHOW_SERIES_DETAILS_PAGE",!1)}}};var i=n(3379),a=n.n(i),r=n(6706),o={insert:"head",singleton:!1};a()(r.Z,o);r.Z.locals;const c=(0,n(1900).Z)(s,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"exit-button"},[e("img",{attrs:{src:"/themes/default/img/exit-icon.svg",alt:"exit icon",width:"100%"}})])}],!1,null,"e48da20a",null).exports},1900:(t,e,n)=>{function s(t,e,n,s,i,a,r,o){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),s&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),r?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=c):i&&(c=o?function(){i.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(t,e){return c.call(e),d(t,e)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,c):[c]}return{exports:t,options:l}}n.d(e,{Z:()=>s})}}]);