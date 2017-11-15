webpackJsonp([5],{"/TYz":function(t,e,a){"use strict";function s(t){a("a3dU")}Object.defineProperty(e,"__esModule",{value:!0});var n=a("sFlg"),i=a("K2ND"),r=a("VU/8"),o=s,l=r(n.a,i.a,!1,o,null,null);e.default=l.exports},"3J1b":function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,".ctrlContainer{max-width:100%;padding:8px}.customFont{font-size:11px}",""])},GWJ0:function(t,e){},K2ND:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sans-serif"},[a("article",{staticClass:"cf ph3 ph5-ns pv5"},[a("header",{staticClass:"fn fl-ns w-50-ns pr4-ns"},[a("usage"),a("h1",{staticClass:"mb3 mt0 lh-title"},[t._v("\n        Integrated \n        Differential \n        Expression and \n        Pathway analysis")]),a("time",{staticClass:"f6 ttu tracked gray"},[t._v("Ge-Lab")])],1),t._m(0)]),t._m(1),a("div",{staticClass:"cf ph3 ph5-ns pb5 bg-yellow black-70 code"},[a("div",{staticClass:"mw9 center"},[a("h1",{staticClass:"fl w-100 mt5 f5 ttu tracked fw6"},[t._v("iDEP: Main Features ")]),t._m(2),a("div",{staticClass:"cf"},[a("article",{staticClass:"sans-serif pv2 fl w-100 w-50-l pr0 pr2-l"},[a("div",{staticClass:"f5 f4-ns measure lh-copy mt0"},[a("ul",{staticStyle:{overflow:"scroll","max-height":"300px"}},t._l(t.orgs,function(e){return a("li",{staticClass:"f6"},[t._v(t._s(e))])}))])]),t._m(3)])])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fn fl-ns w-50-ns"},[a("p",{staticClass:"lh-copy w-100"},[t._v("\n        Integrated Differential Expression and Pathway analysis (iDEP) of transcriptomic data. See documentation and manuscript. \n        Based on annotation of 69 metazoa and 42 plant genomes in Ensembl BioMart as of 6/4/2017. \n        Additional data from KEGG, Reactome, MSigDB (human), GSKB (mouse) and araPath (arabidopsis). \n        For feedbacks or data contributions (genes and GO mapping of any species), \n        please contact us, or visit our homepage. Send us suggestions or any error message to help improve iDEP.\n      ")]),a("p",{staticClass:"lh-copy w-100"},[t._v('\n        Users can upload a CSV or tab-delimited text file with the first column as gene IDs. For RNA-seq data, read count per gene is recommended. Also accepted are normalized expression data based on FPKM, RPKM, or DNA microarray data. iDEP can convert most types of common gene IDs to Ensembl gene IDs, which is used internally for enrichment and pathway analyses. iDEP parses column names to define sample groups. To define 3 biological samples (Control, TreatmentA, TreatmentB) with 2 replicates each, column names should be:\n        Ctrl_1, Ctrl_2, TrtA_1, TrtA_2, TrtB_1, TrtB_2.\n        For factorial design, use underscore "_" to separate factors such as genetic background (wide type vs. mutant:WT vs. Mu) and experimental condition (Ctrl vs. Trt). Currently, only two factors are allowed. To define an 2x2 factorial design, use column names like:\n        WT_Ctrl_1, WT_Ctrl_2, WT_Trt_1, WT_Trt_2, Mu_Ctrl_1, Mu_Ctrl_2, Mu_Trt_1, Mu_Trt_2\n      ')])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cf ph3 ph5-ns pb5 bg-light-gray black-70 code"},[a("div",{staticClass:"mw9 center"},[a("div",{staticClass:"cf"},[a("h1",{staticClass:"fl w-100 mt5 f5 ttu tracked fw6"},[t._v("Choose application ")]),a("article",{staticClass:"sans-serif pv2 fl w-100 w-50-l pr0 pr2-l"},[a("article",{staticClass:"sans-serif pv2 fl w-100 "},[a("h2",{staticClass:"f5 f1-ns fw6 mb2"},[t._v("Shiny Application")]),a("div",[t._v("Keep genes with minimal counts per million (CPM) in at least n libraries:")]),a("div",[t._v(" Go to iDEP with shinyAPP ")])])]),a("article",{staticClass:"sans-serif pv2 fl w-100 w-50-l pr0 pr2-l"},[a("article",{staticClass:"sans-serif pv2 fl w-100 "},[a("h2",{staticClass:"f5 f1-ns fw6 mb2"},[t._v("Web Application")]),a("div",[t._v("Keep genes with minimal counts per million (CPM) in at least n libraries:")]),a("div",[t._v(" Go to iDEP with RestAPI ")])])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"sans-serif pv2 fl w-100 "},[a("h2",{staticClass:"f4 f1-ns fw6 mb2"},[t._v(" Available Tools ")]),a("div",[t._v("Keep genes with minimal counts per million (CPM) in at least n libraries:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"sans-serif pv2 fl w-100 w-50-l pr0 pr2-l"},[a("section",{staticClass:"f5 f4-ns measure lh-copy mt0"},[a("div",[t._v("Users can upload a CSV or tab-delimited text file with the first column as gene IDs. For RNA-seq data, read count per gene is recommended. Also accepted are normalized expression data based on FPKM, RPKM, or DNA microarray data. iDEP can convert most types of common gene IDs to Ensembl gene IDs, which is used internally for enrichment and pathway analyses. iDEP parses column names to define sample groups. To define 3 biological samples (Control, TreatmentA, TreatmentB) with 2 replicates each, column names should be:")]),a("div",{staticClass:"code"},[t._v("Ctrl_1, Ctrl_2, TrtA_1, TrtA_2, TrtB_1, TrtB_2.")]),a("div",[t._v('For factorial design, use underscore "_" to separate factors such as genetic background (wide type vs. mutant:WT vs. Mu) and experimental condition (Ctrl vs. Trt). Currently, only two factors are allowed. To define an 2x2 factorial design, use column names like:')]),a("div",{staticClass:"code"},[t._v("WT_Ctrl_1, WT_Ctrl_2, WT_Trt_1, WT_Trt_2, Mu_Ctrl_1, Mu_Ctrl_2, Mu_Trt_1, Mu_Trt_2")])])])}],i={render:s,staticRenderFns:n};e.a=i},KXl2:function(t,e,a){"use strict";function s(t){a("PwOt")}var n=a("GWJ0"),i=a.n(n),r=a("yccl"),o=a("VU/8"),l=s,c=o(i.a,r.a,!1,l,null,null);e.a=c.exports},PwOt:function(t,e,a){var s=a("3J1b");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("80d0527c",s,!0)},a3dU:function(t,e,a){var s=a("ui/k");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("ee68b888",s,!0)},sFlg:function(t,e,a){"use strict";var s=a("NYxO"),n=a("usoK"),i=a("KXl2");e.a={components:{Usage:i.a},computed:Object(s.mapState)(["users"]),data:function(){return{orgs:[]}},mounted:function(){var t=this;n.a.ref("idep/gmt/org").once("value",function(e){t.orgs=e.val()})}}},"ui/k":function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,'.cf:after,.cf:before{content:" ";display:table}.cf:after{clear:both}.cf{*zoom:1}.fn{float:none}.tracked{letter-spacing:.1em}.lh-title{line-height:1.25}.lh-copy{line-height:1.5}.gray{color:#777}.pv5{padding-top:64px;padding-top:4rem;padding-bottom:64px;padding-bottom:4rem}.ph3{padding-left:16px;padding-left:1rem;padding-right:16px;padding-right:1rem}.mb3{margin-bottom:16px;margin-bottom:1rem}.mt0{margin-top:0}.mt4{margin-top:32px;margin-top:2rem}.ttu{text-transform:uppercase}.f6{font-size:14px;font-size:.875rem}.measure{max-width:30em}@media screen and (min-width:30em){.fl-ns{float:left;display:inline}.w-50-ns{width:50%}.pr4-ns{padding-right:2rem}.ph5-ns{padding-left:4rem;padding-right:4rem}.mt0-ns{margin-top:0}}',""])},usoK:function(t,e,a){"use strict";var s=a("Sazm"),n=a.n(s),i={apiKey:"AIzaSyBO4CCJzL7U9pFSEv-9ETqVt5dzMNKiwk4",authDomain:"bcloud.firebaseapp.com",databaseURL:"https://bcloud.firebaseio.com",projectId:"firebase-bcloud",storageBucket:"firebase-bcloud.appspot.com",messagingSenderId:"172712893865"},r=n.a.initializeApp(i);e.a=r.database()},yccl:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"code ctrlContainer customFont bg-washed-blue near-black"},[a("span",[t._v("Usage")]),a("span",[t._v(" Number of Users: ")]),a("span",[t._v(" Total # of Users today: ")]),a("span",[t._v(" iDep1: ")]),a("span",[t._v(" iDep2: ")]),a("span",[t._v(" iDep3: ")])])}],i={render:s,staticRenderFns:n};e.a=i}});
//# sourceMappingURL=index.96d644a72320272c9c62.js.map