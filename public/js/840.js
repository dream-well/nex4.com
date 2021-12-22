"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[840],{7214:(e,t,a)=>{a.d(t,{Z:()=>i});var s=a(3645),r=a.n(s)()((function(e){return e[1]}));r.push([e.id,"svg[data-v-3e43005c]{display:inline-block;height:80px;position:absolute;right:0;top:0;width:80px}",""]);const i=r},3645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var a=e(t);return t[2]?"@media ".concat(t[2]," {").concat(a,"}"):a})).join("")},t.i=function(e,a,s){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(s)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(var n=0;n<e.length;n++){var l=[].concat(e[n]);s&&r[l[0]]||(a&&(l[2]?l[2]="".concat(a," and ").concat(l[2]):l[2]=a),t.push(l))}},t}},3379:(e,t,a)=>{var s,r=function(){return void 0===s&&(s=Boolean(window&&document&&document.all&&!window.atob)),s},i=function(){var e={};return function(t){if(void 0===e[t]){var a=document.querySelector(t);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}e[t]=a}return e[t]}}(),o=[];function n(e){for(var t=-1,a=0;a<o.length;a++)if(o[a].identifier===e){t=a;break}return t}function l(e,t){for(var a={},s=[],r=0;r<e.length;r++){var i=e[r],l=t.base?i[0]+t.base:i[0],c=a[l]||0,d="".concat(l," ").concat(c);a[l]=c+1;var v=n(d),m={css:i[1],media:i[2],sourceMap:i[3]};-1!==v?(o[v].references++,o[v].updater(m)):o.push({identifier:d,updater:f(m,t),references:1}),s.push(d)}return s}function c(e){var t=document.createElement("style"),s=e.attributes||{};if(void 0===s.nonce){var r=a.nc;r&&(s.nonce=r)}if(Object.keys(s).forEach((function(e){t.setAttribute(e,s[e])})),"function"==typeof e.insert)e.insert(t);else{var o=i(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var d,v=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function m(e,t,a,s){var r=a?"":s.media?"@media ".concat(s.media," {").concat(s.css,"}"):s.css;if(e.styleSheet)e.styleSheet.cssText=v(t,r);else{var i=document.createTextNode(r),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function u(e,t,a){var s=a.css,r=a.media,i=a.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=s;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(s))}}var p=null,_=0;function f(e,t){var a,s,r;if(t.singleton){var i=_++;a=p||(p=c(t)),s=m.bind(null,a,i,!1),r=m.bind(null,a,i,!0)}else a=c(t),s=u.bind(null,a,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(a)};return s(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;s(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var a=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var s=0;s<a.length;s++){var r=n(a[s]);o[r].references--}for(var i=l(e,t),c=0;c<a.length;c++){var d=n(a[c]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}a=i}}}},75:(e,t,a)=>{a.d(t,{Z:()=>n});var s=a(3379),r=a.n(s),i=a(7214),o={insert:"head",singleton:!1};r()(i.Z,o);i.Z.locals;const n=(0,a(1900).Z)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"loader-svg"},[t("svg",{attrs:{version:"1.1",id:"L9",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 100 100","enable-background":"new 0 0 0 0","xml:space":"preserve"}},[t("path",{attrs:{fill:"rgb(130, 138, 159)",d:"M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"}},[t("animateTransform",{attrs:{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"1s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"}})],1)])])}),[],!1,null,"3e43005c",null).exports},840:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});var s=a(629),r=a(75),i=a(1580);const o={data:function(){return{genres:[],showProgress:!1,movieedit:!1,embedCode:"",search_query:"",percentCompleted:0,selectedCast3:null,error_message_edit:"",success_message_edit:""}},components:{Loader:r.Z},computed:(0,s.rn)({data:function(e){return e.movies.data},genre_list:function(e){return e.genres.data},data_actors:function(e){return e.actors.data},data_actors_search:function(e){return e.actors.data_search},button_loading:function(e){return e.movies.button_loading},spinner_loading:function(e){return e.movies.spinner_loading},spinner_loading_actor:function(e){return e.actors.spinner_loading},categories_list:function(e){return e.categories.data}}),created:function(){this.$store.dispatch("GET_CATEGORIES_BY_SORT","movie"),this.$store.dispatch("GET_ALL_GENRES")},watch:{search_query:function(e){""!==e?this.$store.dispatch("GET_ACTORS_SEARCH",e):this.$store.commit("CLEAR_SEARCH")}},mounted:function(){this.$store.dispatch("GET_MOVIE",this.$route.params.id),this.$store.dispatch("GET_ALL_ACTORS")},methods:{UPDATE:function(e){var t=this,a=document.querySelector("#poster"),s=document.querySelector("#backdrop"),r=new FormData;r.append("id",this.data.movie.id),r.append("name",this.data.movie.name),r.append("year",this.data.movie.year),r.append("age",this.data.movie.age),r.append("genres",this.genres),r.append("overview",this.data.movie.overview),r.append("runtime",this.data.movie.runtime),r.append("rate",this.data.movie.rate),r.append("youtube",this.data.movie.youtube),r.append("poster",a.files[0]),r.append("backdrop",s.files[0]),r.append("cast",JSON.stringify(this.data.cast)),r.append("category",this.data.movie.category),r.append("videos",JSON.stringify(this.data.videos)),this.$validator.validateAll().then((function(e){if(e){t.showProgress=!0,t.movieedit=!0;var a={headers:{"content-type":"multipart/form-data"},onUploadProgress:function(e){t.percentCompleted=Math.round(100*e.loaded/e.total)}};axios.post("api/admin/update/movie",r,a).then((function(e){200===e.status&&(t.success_message_edit=e.data.message,setTimeout((function(){t.$router.go(-1)}),2e3))}))}}),(function(e){t.error_message_edit=response.data.message}))},ADD_ACTOR:function(e,t){"default"===t?(this.data.cast.push(this.data_actors.actors.data[e]),i.logPosition("top right"),i.success(this.data_actors.actors.data[e].name+" has been added to cast")):"search"===t&&(this.data.cast.push(this.data_actors_search.actors[e]),i.logPosition("top right"),i.success(this.data_actors_search.actors[e].name+" has been added to cast"))},DELETE_ACTOR:function(e){this.data.cast.splice(e,1)},readImage:function(e,t){var a=(document.getElementById(e).target||window.event.srcElement).files;if(FileReader&&a&&a.length){var s=new FileReader;s.onload=function(){var e=document.getElementById(t);e.style.display="block",e.src=s.result},s.readAsDataURL(a[0])}}}};const n=(0,a(1900).Z)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.spinner_loading?a("div",{staticClass:"spinner-load"},[a("Loader")],1):e._e(),e._v(" "),e.spinner_loading?e._e():a("div",{staticClass:"k1_manage_table"},[a("h5",{staticClass:"title p-2"},[e._v(e._s(e.data.movie.name))]),e._v(" "),a("div",{staticClass:"actor-modal"},[a("div",{staticClass:"modal fade",attrs:{id:"GetActorModal",tabindex:"-1",role:"dialog","aria-labelledby":"GetActorModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[e._m(0),e._v(" "),a("div",{staticClass:"modal-body"},[e.spinner_loading_actor?a("div",{staticClass:"spinner-load"},[a("Loader")],1):e._e(),e._v(" "),a("div",{staticClass:"col-12"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Search")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.search_query,expression:"search_query"}],staticClass:"form-control",attrs:{name:"search",type:"text",placeholder:"Search By Name"},domProps:{value:e.search_query},on:{input:function(t){t.target.composing||(e.search_query=t.target.value)}}})]),e._v(" "),null!==e.data_actors.actors?a("div",{staticClass:"col-12"},[null===e.data_actors_search?a("div",{staticClass:"row"},e._l(e.data_actors.actors.data,(function(t,s){return a("div",{key:s,staticClass:"col-8 col-sm-3 mt-2 add-actor",on:{click:function(t){return e.ADD_ACTOR(s,"default")}}},[a("div",{staticClass:"image"},["local"==t.cloud?a("img",{staticClass:"img-rounded",attrs:{src:t.image,id:"preview_"+t.id,width:"100%"}}):e._e(),e._v(" "),"aws"==t.cloud?a("img",{staticClass:"img-rounded",attrs:{src:e.md_cast+t.image,id:"preview_"+t.id,width:"100%"}}):e._e(),e._v(" "),a("p",[e._v(e._s(t.name))])])])})),0):a("div",{staticClass:"row"},e._l(e.data_actors_search.actors,(function(t,s){return a("div",{key:s,staticClass:"col-8 col-sm-3 mt-2 add-actor",on:{click:function(t){return e.ADD_ACTOR(s,"search")}}},[a("div",{staticClass:"image"},["local"==t.cloud||null==t.cloud?a("img",{staticClass:"img-rounded",attrs:{src:t.image,id:"preview_"+t.id,width:"100%"}}):e._e(),e._v(" "),"aws"==t.cloud?a("img",{staticClass:"img-rounded",attrs:{src:e.md_cast+t.image,id:"preview_"+t.id,width:"100%"}}):e._e(),e._v(" "),a("p",[e._v(e._s(t.name))])])])})),0)]):a("div",[e._m(1)])])])])])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-6"},[a("div",{staticClass:"form-group"},[e._m(2),e._v(" "),a("div",{staticClass:"col-12"},[a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|max:30",expression:"'required|max:30'"},{name:"model",rawName:"v-model",value:e.data.movie.name,expression:"data.movie.name"}],staticClass:"form-control",attrs:{name:"name",type:"text",placeholder:"Name"},domProps:{value:e.data.movie.name},on:{input:function(t){t.target.composing||e.$set(e.data.movie,"name",t.target.value)}}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("name"),expression:"errors.has('name')"}],staticClass:"is-danger"},[e._v(e._s(e.errors.first("name")))])])]),e._v(" "),a("div",{staticClass:"form-group"},[e._m(3),e._v(" "),a("div",{staticClass:"col-12"},[a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|numeric|max:4",expression:"'required|numeric|max:4'"},{name:"model",rawName:"v-model",value:e.data.movie.year,expression:"data.movie.year"}],staticClass:"form-control",attrs:{name:"year",type:"text",placeholder:"Years"},domProps:{value:e.data.movie.year},on:{input:function(t){t.target.composing||e.$set(e.data.movie,"year",t.target.value)}}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("year"),expression:"errors.has('year')"}],staticClass:"is-danger"},[e._v(e._s(e.errors.first("year")))])])]),e._v(" "),a("div",{staticClass:"form-group"},[e._m(4),e._v(" "),a("div",{staticClass:"col-12"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.genres,expression:"genres"}],staticClass:"form-control",attrs:{multiple:"",name:"genres"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.genres=t.target.multiple?a:a[0]}}},e._l(e.genre_list,(function(t,s){return a("option",{key:s,domProps:{value:t.name}},[e._v(e._s(t.name))])})),0)])]),e._v(" "),a("div",{staticClass:"form-group"},[e._m(5),e._v(" "),a("div",{staticClass:"col-12"},[a("select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.data.movie.category,expression:"data.movie.category"}],staticClass:"form-control",attrs:{name:"category",id:"category"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.data.movie,"category",t.target.multiple?a:a[0])}}},e._l(e.categories_list.categories,(function(t,s){return a("option",{key:s,domProps:{value:t.id}},[e._v("\n                                "+e._s(t.name)+"\n                            ")])})),0),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("category"),expression:"errors.has('category')"}],staticClass:" is-danger"},[e._v(e._s(e.errors.first("category")))])])]),e._v(" "),a("div",{staticClass:"form-group"},[e._m(6),e._v(" "),a("div",{staticClass:"col-12"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.data.movie.overview,expression:"data.movie.overview"}],staticClass:"form-control",attrs:{name:"overview",type:"text",placeholder:"Overview"},domProps:{value:e.data.movie.overview},on:{input:function(t){t.target.composing||e.$set(e.data.movie,"overview",t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"form-group"},[e._m(7),e._v(" "),a("div",{staticClass:"col-12"},[a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|decimal|max:10",expression:"'required|decimal|max:10'"},{name:"model",rawName:"v-model",value:e.data.movie.runtime,expression:"data.movie.runtime"}],staticClass:"form-control",attrs:{name:"runtime",type:"text",placeholder:"Runtime"},domProps:{value:e.data.movie.runtime},on:{input:function(t){t.target.composing||e.$set(e.data.movie,"runtime",t.target.value)}}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("runtime"),expression:"errors.has('runtime')"}],staticClass:"is-danger"},[e._v(e._s(e.errors.first("runtime"))+"\n                        ")])])]),e._v(" "),a("div",{staticClass:"form-group"},[e._m(8),e._v(" "),a("div",{staticClass:"col-12"},[a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|decimal|max:5",expression:"'required|decimal|max:5'"},{name:"model",rawName:"v-model",value:e.data.movie.rate,expression:"data.movie.rate"}],staticClass:"form-control",attrs:{name:"rate",type:"text",placeholder:"Rate"},domProps:{value:e.data.movie.rate},on:{input:function(t){t.target.composing||e.$set(e.data.movie,"rate",t.target.value)}}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("rate"),expression:"errors.has('rate')"}],staticClass:"is-danger"},[e._v(e._s(e.errors.first("rate")))])])]),e._v(" "),a("div",{staticClass:"form-group"},[e._m(9),e._v(" "),a("div",{staticClass:"col-12"},[a("input",{directives:[{name:"validate",rawName:"v-validate",value:"url|max:300",expression:"'url|max:300'"},{name:"model",rawName:"v-model",value:e.data.movie.youtube,expression:"data.movie.youtube"}],staticClass:"form-control",attrs:{name:"youtube",type:"text",placeholder:"Trailer"},domProps:{value:e.data.movie.youtube},on:{input:function(t){t.target.composing||e.$set(e.data.movie,"youtube",t.target.value)}}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("youtube"),expression:"errors.has('youtube')"}],staticClass:"is-danger"},[e._v(e._s(e.errors.first("youtube"))+"\n                        ")])])]),e._v(" "),a("div",{staticClass:"form-group"},[a("div",{staticClass:"col-12"},[a("label",{attrs:{for:"age"}},[e._v("Rating system")]),e._v(" "),a("select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.data.movie.age,expression:"data.movie.age"}],staticClass:"form-control",attrs:{name:"age",id:"age"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.data.movie,"age",t.target.multiple?a:a[0])}}},[a("option",[e._v("G")]),e._v(" "),a("option",[e._v("PG")]),e._v(" "),a("option",[e._v("PG-13")]),e._v(" "),a("option",[e._v("R")]),e._v(" "),a("option",[e._v("X")])]),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("age"),expression:"errors.has('age')"}],staticClass:" is-danger"},[e._v(e._s(e.errors.first("age")))])])]),e._v(" "),a("div",{staticClass:"form-group"},[e._m(10),e._v(" "),a("div",{staticClass:"col-12"},[a("input",{directives:[{name:"validate",rawName:"v-validate",value:"image",expression:"'image'"}],staticClass:"inputfile",attrs:{type:"file",id:"poster",name:"poster"},on:{change:function(t){return e.readImage("poster","posterFileImage")}}}),e._v(" "),e._m(11),e._v(" "),"local"==e.data.movie.cloud||null==e.data.movie.cloud?a("img",{attrs:{src:"/storage/posters/300_"+e.data.movie.poster,id:"posterFileImage",width:"40%"}}):e._e(),e._v(" "),"aws"==e.data.movie.cloud?a("img",{attrs:{src:e.md_poster+e.data.movie.poster,alt:e.data.movie.poster,width:"300px"}}):e._e(),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("poster"),expression:"errors.has('poster')"}],staticClass:"is-danger"},[e._v(e._s(e.errors.first("poster")))])])]),e._v(" "),a("div",{staticClass:"form-group"},[e._m(12),e._v(" "),a("div",{staticClass:"col-12"},[a("input",{directives:[{name:"validate",rawName:"v-validate",value:"image",expression:"'image'"}],staticClass:"inputfile",attrs:{type:"file",id:"backdrop",name:"backdrop"},on:{change:function(t){return e.readImage("backdrop","backdropFileImage")}}}),e._v(" "),e._m(13),e._v(" "),"local"==e.data.movie.cloud||null==e.data.movie.cloud?a("img",{attrs:{src:"/storage/backdrops/300_"+e.data.movie.backdrop,id:"backdropFileImage",width:"100%"}}):e._e(),e._v(" "),"aws"==e.data.movie.cloud?a("img",{attrs:{src:e.md_backdrop+e.data.movie.backdrop,alt:e.data.movie.backdrop,width:"100%"}}):e._e(),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("backdrop"),expression:"errors.has('backdrop')"}],staticClass:"is-danger"},[e._v(e._s(e.errors.first("backdrop")))])])])]),e._v(" "),a("div",{staticClass:"col-12 col-md-6 cast"},[a("h5",{staticClass:"title p-2"},[e._v("Cast")]),e._v(" "),a("div",{staticClass:"row"},[e._l(e.data.cast,(function(t,s){return a("div",{key:s,staticClass:"col-6 col-lg-4 col-xl-3 mt-4 text-center"},[a("div",{staticClass:"image-cast"},[a("div",{staticClass:"delete-cast"},[a("i",{staticClass:"fa fa-times-circle",on:{click:function(t){return e.DELETE_ACTOR(s)}}})]),e._v(" "),a("div",{staticClass:"image"},["local"==t.cloud?a("img",{staticClass:"img-rounded",attrs:{src:t.image,alt:t.name,width:"100%"}}):e._e(),e._v(" "),"aws"==t.cloud?a("img",{staticClass:"img-rounded",attrs:{src:e.md_cast+t.image,alt:t.name,width:"100%"}}):e._e()]),e._v(" "),a("p",[e._v(e._s(t.name))])])])})),e._v(" "),e._m(14)],2),e._v(" "),a("hr"),e._v(" "),a("div",{staticClass:"mt-4",attrs:{id:"accordion resolution-videos"}},[a("h5",{staticClass:"title p-2"},[e._v("Videos")]),e._v(" "),e._l(e.data.videos,(function(t,s){return a("div",{key:s,staticClass:"card"},["embed"!==t.video_format?a("div",{staticClass:"card-header",attrs:{id:"heading"+s}},[a("h5",{staticClass:"mb-0"},[a("button",{staticClass:"btn btn-link",attrs:{"data-toggle":"collapse","data-target":"#collapse"+s,"aria-expanded":"true","aria-controls":"collapse"+s}},[e._v("\n                                    Resolution "),"320"===t.resolution?a("span",[e._v("320P")]):e._e(),e._v(" "),"480"===t.resolution?a("span",[e._v("480P")]):e._e(),e._v(" "),"720"===t.resolution?a("span",[e._v("720P")]):e._e(),e._v(" "),"1080"===t.resolution?a("span",[e._v("1080P")]):e._e()])])]):e._e(),e._v(" "),a("div",{staticClass:"collapse show",attrs:{id:"collapse"+s,"aria-labelledby":"heading"+s,"data-parent":"#accordion"}},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"form-group video-player"},["embed"!==t.video_format?a("video",{attrs:{width:"100%",controls:""}},[a("source",{attrs:{src:t.video_url}}),e._v("\n                                        Your browser does not support the video tag.\n                                    ")]):e._e()]),e._v(" "),"embed"!==t.video_format?a("div",{staticClass:"form-group"},[a("label",{staticClass:"m-1",attrs:{for:"link"}},[e._v("Video Link")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.video_url,expression:"item.video_url"}],staticClass:"form-control",attrs:{type:"text",name:"link",id:"link"},domProps:{value:t.video_url},on:{input:function(a){a.target.composing||e.$set(t,"video_url",a.target.value)}}})]):e._e(),e._v(" "),"embed"===t.video_format?a("div",{staticClass:"form-group"},[a("label",{staticClass:"m-1",attrs:{for:"link"}},[e._v("Embed Code "+e._s(s+1))]),e._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.embed_code,expression:"item.embed_code"}],staticClass:"form-control",attrs:{type:"text",name:"link",rows:"5",id:"embed",placeholder:"Put your new code for update"},domProps:{value:t.embed_code},on:{input:function(a){a.target.composing||e.$set(t,"embed_code",a.target.value)}}})]):e._e()])])])}))],2)]),e._v(" "),a("div",{staticClass:"form-group m-3"},[a("div",{staticClass:"col-12 col-md-6"},[a("button",{staticClass:"btn btn-md btn-warning",on:{click:function(t){return e.UPDATE(e.data.movie.id)}}},[e._v("UPDATE")])])]),e._v(" "),e.showProgress?a("div",{staticClass:"upload-modal"},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-body p-4"},[e.movieedit?a("div",{staticClass:"movieapi"},[a("div",{staticClass:"progress mt-2"},[a("div",{staticClass:"progress-bar",style:{width:e.percentCompleted+"%",height:"6px"},attrs:{role:"progressbar","aria-valuenow":e.percentCompleted,"aria-valuemin":"0","aria-valuemax":"100"}})]),e._v(" "),a("p",{staticClass:"is-danger"},[e._v(e._s(e.error_message_edit))]),e._v(" "),a("p",{staticClass:"is-success"},[e._v(e._s(e.success_message_edit))]),e._v(" "),a("hr")]):e._e()])])])]):e._e()])])])}),[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"GetActorModalLabel"}},[e._v("Actors")]),e._v(" "),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-center"},[a("h4",[e._v("No result were found")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-2"},[a("label",[e._v("Name")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-2"},[a("label",[e._v("Years")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-2"},[a("label",[e._v("Genres")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-12"},[a("label",{attrs:{for:"category"}},[e._v("Category")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-2"},[a("label",[e._v("Overview")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-2"},[a("label",[e._v("Runtime")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-2"},[a("label",[e._v("Rate")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-2"},[a("label",[e._v("Trailer")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-12 col-sm-4"},[a("label",[e._v("Poster")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{attrs:{id:"posterLabel",for:"poster"}},[e._v("Choose a poster\n                            "),a("br")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-12 col-sm-4"},[a("label",[e._v("Backdrop")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{attrs:{id:"backdropLabel",for:"backdrop"}},[e._v("Choose a backdrop\n                            "),a("br")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-lg-3 col-sm-4 col-12 mt-4 text-center"},[a("div",{staticClass:"add-cast",attrs:{"data-toggle":"modal","data-target":"#GetActorModal"}},[a("h3",[e._v("ADD")])])])}],!1,null,null,null).exports}}]);