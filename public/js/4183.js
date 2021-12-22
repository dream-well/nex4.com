"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4183],{4183:(e,a,t)=>{t.r(a),t.d(a,{default:()=>i});var s=t(629),r=t(1580);const o={data:function(){return{name:"",year:"",genres:[],overview:"",runtime:"",rate:"",count:"",disabled_button:!1,upload_data:{id:null,api:{show:!1,progress:0,success_message:null,error_message:null},upload:{show:!1,progress:0,success_message:null,error_message:null,message:null},subtitle:{progress:0,success_message:null,error_message:null}},apiFormData:new FormData,cloud_type:!1}},computed:(0,s.rn)({countUploadData:function(e){return e.event.data_count},genre_list:function(e){return e.genres.data},uploadData:function(e){return e.event.upload_data}}),created:function(){this.$store.dispatch("GET_ALL_GENRES")},methods:{SERIES_CUSTOM:function(){var e=this,a=document.querySelector("#poster"),t=document.querySelector("#backdrop");this.apiFormData.append("name",this.name),this.apiFormData.append("year",this.year),this.apiFormData.append("genres",this.genres),this.apiFormData.append("overview",this.overview),this.apiFormData.append("rate",this.rate),void 0!==t.files[0]&&this.apiFormData.append("backdrop",t.files[0]),void 0!==a.files[0]&&this.apiFormData.append("poster",a.files[0]),this.apiFormData.append("cloud_type",this.cloud_type),this.$store.commit("COUNT_UPLOAD_PROGRESS"),this.$validator.validateAll().then((function(a){a&&(e.disabled_button=!0,e.upload_data.api.show=!0,e.upload_data.id=e.name,e.$store.commit("SET_PROGRESS_DATA",e.upload_data),e.$store.commit("SET_UPLOAD_PROGRESS",e.uploadData[e.countUploadData]),e.$store.commit("UPDATE_UPLOAD_PROGRESS_DATA",{key:e.countUploadData,data:e.uploadData[e.countUploadData]}),axios.post("/api/admin/new/manga/custom-upload",e.apiFormData).then((function(a){200===a.status&&(e.$store.commit("UPDATE_PROGRESS_DATA",{key:e.countUploadData,parameter:"success_message",object:"api",value:a.data.message}),e.$store.commit("UPDATE_PROGRESS_DATA",{key:e.countUploadData,parameter:"progress",object:"api",value:100}),e.$store.commit("UPDATE_UPLOAD_PROGRESS_DATA",{key:e.countUploadData,data:e.uploadData[e.countUploadData]}),setTimeout((function(){e.$router.push({name:"manga-manage"}),r.logPosition("top right"),r.success("Successful upload")}),1500))}),(function(a){e.disabled_button=!1,e.$store.commit("UPDATE_PROGRESS_DATA",{key:e.countUploadData,parameter:"error_message",object:"api",value:a.response.data.message}),e.$store.commit("UPDATE_UPLOAD_PROGRESS_DATA",{key:e.countUploadData,data:e.uploadData[e.countUploadData]})})))}))},readImage:function(e,a){var t=(document.getElementById(e).target||window.event.srcElement).files;if(FileReader&&t&&t.length){var s=new FileReader;s.onload=function(){var e=document.getElementById(a);e.style.display="block",e.src=s.result},s.readAsDataURL(t[0])}}}};const i=(0,t(1900).Z)(o,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticClass:"k1_manage_table"},[t("div",{staticClass:"title p-2"},[e._v("Series Custom Upload")]),e._v(" "),t("div",{staticClass:"col-12"},[t("div",{staticClass:"form-group"},[e._m(0),e._v(" "),t("div",{staticClass:"col-12 col-md-8 cloud-upload"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-md-6 image",on:{click:function(a){e.cloud_type="local"}}},[t("div",{staticClass:"local-cloud-logo",class:{active:"local"===e.cloud_type}},[t("img",{attrs:{src:"/themes/default/img/local-cloud.svg",alt:"local-cloud",width:"90px"}})])]),e._v(" "),t("div",{staticClass:"col-12 col-md-6 image",on:{click:function(a){e.cloud_type="aws"}}},[t("div",{staticClass:"aws-cloud-logo",class:{active:"aws"===e.cloud_type}},[t("img",{attrs:{src:"/themes/default/img/aws-cloud.svg",alt:"aws-cloud",width:"120px"}})])])])])]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-lg-6"},[e.cloud_type?t("div",[t("div",{staticClass:"form-group"},[e._m(1),e._v(" "),t("div",{staticClass:"col-12"},[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|max:30",expression:"'required|max:30'"},{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{name:"name",type:"text",placeholder:"Name"},domProps:{value:e.name},on:{input:function(a){a.target.composing||(e.name=a.target.value)}}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("name"),expression:"errors.has('name')"}],staticClass:"is-danger"},[e._v(e._s(e.errors.first("name")))])])]),e._v(" "),t("div",{staticClass:"form-group"},[e._m(2),e._v(" "),t("div",{staticClass:"col-12"},[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|numeric|max:4",expression:"'required|numeric|max:4'"},{name:"model",rawName:"v-model",value:e.year,expression:"year"}],staticClass:"form-control",attrs:{name:"year",type:"text",placeholder:"Years"},domProps:{value:e.year},on:{input:function(a){a.target.composing||(e.year=a.target.value)}}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("year"),expression:"errors.has('year')"}],staticClass:"is-danger"},[e._v(e._s(e.errors.first("year")))])])]),e._v(" "),t("div",{staticClass:"form-group"},[e._m(3),e._v(" "),t("div",{staticClass:"col-12"},[!1===e.name?t("div",{staticClass:"form-control-feedback"},[e._v("\n                  Manga name\n                ")]):e._e(),e._v(" "),t("select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.genres,expression:"genres"}],staticClass:"form-control",attrs:{multiple:"",name:"genres"},on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.genres=a.target.multiple?t:t[0]}}},e._l(e.genre_list,(function(a,s){return t("option",{key:s,domProps:{value:a.name}},[e._v("\n                    "+e._s(a.name)+"\n                  ")])})),0)]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("genres"),expression:"errors.has('genres')"}],staticClass:"is-danger"},[e._v(e._s(e.errors.first("genres")))])]),e._v(" "),t("div",{staticClass:"form-group"},[e._m(4),e._v(" "),t("div",{staticClass:"col-12"},[t("textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required|max:2000",expression:"'required|max:2000'"},{name:"model",rawName:"v-model",value:e.overview,expression:"overview"}],staticClass:"form-control",attrs:{name:"overview",type:"text",placeholder:"Overview"},domProps:{value:e.overview},on:{input:function(a){a.target.composing||(e.overview=a.target.value)}}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("overview"),expression:"errors.has('overview')"}],staticClass:"is-danger"},[e._v(e._s(e.errors.first("overview"))+"\n                ")])])]),e._v(" "),t("div",{staticClass:"form-group"},[e._m(5),e._v(" "),t("div",{staticClass:"col-12"},[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|decimal:1|max:3",expression:"'required|decimal:1|max:3'"},{name:"model",rawName:"v-model",value:e.rate,expression:"rate"}],staticClass:"form-control",attrs:{name:"rate",type:"text",placeholder:"Rate"},domProps:{value:e.rate},on:{input:function(a){a.target.composing||(e.rate=a.target.value)}}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("rate"),expression:"errors.has('rate')"}],staticClass:"is-danger"},[e._v(e._s(e.errors.first("rate")))])])]),e._v(" "),t("div",{staticClass:"form-group"},[e._m(6),e._v(" "),t("div",{staticClass:"col-12"},[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"image|required",expression:"'image|required'"}],staticClass:"inputfile",attrs:{type:"file",id:"poster",name:"poster"},on:{change:function(a){return e.readImage("poster","posterFileImage")}}}),e._v(" "),e._m(7),e._v(" "),t("img",{staticStyle:{display:"none"},attrs:{src:"",id:"posterFileImage",width:"40%"}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("poster"),expression:"errors.has('poster')"}],staticClass:"is-danger"},[e._v(e._s(e.errors.first("poster"))+"\n                ")])])]),e._v(" "),t("div",{staticClass:"form-group"},[e._m(8),e._v(" "),t("div",{staticClass:"col-12"},[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"image",expression:"'image'"}],staticClass:"inputfile",attrs:{type:"file",id:"backdrop",name:"backdrop"},on:{change:function(a){return e.readImage("backdrop","backdropFileImage")}}}),e._v(" "),e._m(9),e._v(" "),t("img",{staticStyle:{display:"none"},attrs:{src:"",id:"backdropFileImage",width:"100%"}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("backdrop"),expression:"errors.has('backdrop')"}],staticClass:"is-danger"},[e._v(e._s(e.errors.first("backdrop")))])])])]):e._e()]),e._v(" "),e.cloud_type?t("div",{staticClass:"col-12"},[t("div",{staticClass:"form-group"},[t("div",{staticClass:"col-12"},[e.disabled_button?e._e():t("button",{staticClass:"btn btn-md btn-warning",on:{click:function(a){return e.SERIES_CUSTOM()}}},[e._v("\n                Upload\n              ")]),e._v(" "),e.disabled_button?t("button",{staticClass:"btn btn-md btn-warning",attrs:{disabled:""}},[e._v("\n                Loading\n              ")]):e._e()])])]):e._e()])])])])}),[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"col-12"},[t("label",[e._v("Choose Cloud ")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"col-12"},[t("label",[e._v("Name")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"col-12"},[t("label",[e._v("Years")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"col-12"},[t("label",[e._v("Genres")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"col-12"},[t("label",[e._v("Overview")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"col-12"},[t("label",[e._v("Rate\n                  "),t("small",[e._v("(From 1 - 10)")])])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"col-12 col-sm-4"},[t("label",[e._v("Poster")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("label",{attrs:{id:"posterLabel",for:"poster"}},[e._v("Choose a poster\n                  "),t("br")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"col-12 col-sm-4"},[t("label",[e._v("Backdrop (optional)")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("label",{attrs:{id:"backdropLabel",for:"backdrop"}},[e._v("Choose a backdrop\n                  "),t("br")])}],!1,null,null,null).exports}}]);