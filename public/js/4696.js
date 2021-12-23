"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4696],{4696:(a,t,e)=>{e.r(t),e.d(t,{default:()=>r});var s=e(629),o=e(1580);const i={data:function(){return{id:"",age:null,series_api:!1,disabled_button:!1,upload_data:{id:null,api:{show:!1,progress:0,success_message:null,error_message:null},upload:{show:!1,progress:0,success_message:null,error_message:null,message:null},subtitle:{progress:0,success_message:null,error_message:null}},apiFormData:new FormData,cloud_type:!1,category:null}},computed:(0,s.rn)({countUploadData:function(a){return a.event.data_count},uploadData:function(a){return a.event.upload_data},categories_list:function(a){return a.categories.data}}),created:function(){this.$store.dispatch("GET_CATEGORIES_BY_SORT","series")},methods:{SERIES_API:function(a){var t=this;this.$store.commit("COUNT_UPLOAD_PROGRESS"),this.apiFormData.append("id",this.id),this.apiFormData.append("age",this.age),this.apiFormData.append("category",this.category),this.apiFormData.append("cloud_type",this.cloud_type),this.$validator.validateAll().then((function(a){a&&(t.disabled_button=!0,t.upload_data.api.show=!0,t.upload_data.id=t.id,t.$store.commit("SET_PROGRESS_DATA",t.upload_data),t.$store.commit("SET_UPLOAD_PROGRESS",t.uploadData[t.countUploadData]),t.$store.commit("UPDATE_UPLOAD_PROGRESS_DATA",{key:t.countUploadData,data:t.uploadData[t.countUploadData]}),axios.post("/api/admin/new/series/moviedbapi",t.apiFormData).then((function(a){200===a.status&&(t.$store.commit("UPDATE_PROGRESS_DATA",{key:t.countUploadData,parameter:"success_message",object:"api",value:a.data.message}),t.$store.commit("UPDATE_PROGRESS_DATA",{key:t.countUploadData,parameter:"progress",object:"api",value:100}),t.$store.commit("UPDATE_UPLOAD_PROGRESS_DATA",{key:t.countUploadData,data:t.uploadData[t.countUploadData]}),setTimeout((function(){t.$router.push({name:"series-manage"}),o.logPosition("top right"),o.success("Successful upload")}),1500))}),(function(a){t.disabled_button=!1,t.$store.commit("UPDATE_PROGRESS_DATA",{key:t.countUploadData,parameter:"error_message",object:"api",value:a.response.data.message}),t.$store.commit("UPDATE_UPLOAD_PROGRESS_DATA",{key:t.countUploadData,data:t.uploadData[t.countUploadData]})})))}))}}};const r=(0,e(1900).Z)(i,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"new-series-api"},[e("div",{staticClass:"k1_manage_table"},[e("div",{staticClass:"title p-2"},[a._v("Series API Upload")]),a._v(" "),e("div",{staticClass:"col-12"},[e("div",{staticClass:"form-group"},[a._m(0),a._v(" "),e("div",{staticClass:"col-12 col-md-8 cloud-upload"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-6 image",on:{click:function(t){a.cloud_type="local"}}},[e("div",{staticClass:"local-cloud-logo",class:{active:"local"===a.cloud_type}},[e("img",{attrs:{src:"/themes/default/img/local-cloud.svg",alt:"local-cloud",width:"90px"}})])]),a._v(" "),e("div",{staticClass:"col-12 col-md-6 image",on:{click:function(t){a.cloud_type="aws"}}},[e("div",{staticClass:"aws-cloud-logo",class:{active:"aws"===a.cloud_type}},[e("img",{attrs:{src:"/themes/default/img/aws-cloud.svg",alt:"aws-cloud",width:"120px"}})])])])])]),a._v(" "),a.cloud_type?e("div",[e("div",{staticClass:"form-group"},[a._m(1),a._v(" "),e("div",{staticClass:"col-12 col-sm-8 col-lg-4"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.id,expression:"id"},{name:"validate",rawName:"v-validate",value:"required|numeric",expression:"'required|numeric'"}],staticClass:"form-control",attrs:{name:"id",type:"text",placeholder:"Moviedb id"},domProps:{value:a.id},on:{input:function(t){t.target.composing||(a.id=t.target.value)}}}),a._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("id"),expression:"errors.has('id')"}],staticClass:"is-danger"},[a._v(a._s(a.errors.first("id")))])])]),a._v(" "),e("div",{staticClass:"col-12 col-sm-8 col-lg-4"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"age"}},[a._v("Rating system")]),a._v(" "),e("select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:a.age,expression:"age"}],staticClass:"form-control",attrs:{name:"age",id:"age"},on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,(function(a){return a.selected})).map((function(a){return"_value"in a?a._value:a.value}));a.age=t.target.multiple?e:e[0]}}},[e("option",[a._v("G")]),a._v(" "),e("option",[a._v("PG")]),a._v(" "),e("option",[a._v("PG-13")]),a._v(" "),e("option",[a._v("R")]),a._v(" "),e("option",[a._v("X")])])]),a._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("age"),expression:"errors.has('age')"}],staticClass:" is-danger"},[a._v(a._s(a.errors.first("age")))])]),a._v(" "),e("div",{staticClass:"col-12 col-sm-8 col-lg-4"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"category"}},[a._v("Category")]),a._v(" "),e("select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:a.category,expression:"category"}],staticClass:"form-control",attrs:{name:"category",id:"category"},on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,(function(a){return a.selected})).map((function(a){return"_value"in a?a._value:a.value}));a.category=t.target.multiple?e:e[0]}}},a._l(a.categories_list.categories,(function(t,s){return e("option",{key:s,domProps:{value:t.id}},[a._v("\n                                "+a._s(t.name)+"\n                            ")])})),0),a._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("category"),expression:"errors.has('category')"}],staticClass:" is-danger"},[a._v(a._s(a.errors.first("category")))])])]),a._v(" "),e("div",{staticClass:"form-group"},[e("div",{staticClass:"col-6"},[a.disabled_button?a._e():e("button",{staticClass:"btn btn-md  btn-warning",on:{click:function(t){return a.SERIES_API()}}},[a._v("Upload\n                    ")]),a._v(" "),a.disabled_button?e("button",{staticClass:"btn btn-md  btn-warning",attrs:{disabled:""}},[a._v("Loading")]):a._e()])])]):a._e()])])])}),[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"col-12"},[e("label",[a._v("Choose Cloud ")])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"col-12 col-lg-12"},[e("label",[a._v("ID")])])}],!1,null,null,null).exports}}]);