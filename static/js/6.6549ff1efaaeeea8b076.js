webpackJsonp([6],{"2Ht3":function(t,e){},OKH4:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=s("poNg"),a={data:function(){return{count:0,timer:null}},mounted:function(){var t=this;this.getCount().then(function(){return t.initialiseTimer()})},methods:{getCount:function(){var t=this;return l.a.activeDelegatesCount().then(function(e){return t.count=e})},initialiseTimer:function(){this.timer=setInterval(this.getCount,8e3)}},beforeDestroy:function(){clearInterval(this.timer)}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hidden lg:flex items-center"},[t._m(0),t._v(" "),s("div",[s("div",{staticClass:"text-grey mb-2"},[t._v(t._s(t.$t("Delegates")))]),t._v(" "),s("div",{staticClass:"text-lg text-white semibold truncate"},[t._v(t._s(t.count))])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mr-6 flex-none"},[e("img",{staticClass:"block",attrs:{src:s("QlE7")}})])}]},r=s("VU/8")(a,n,!1,null,null,null).exports,i=s("cE1D"),o=s("NYxO"),c={data:function(){return{block:{},timer:null}},mounted:function(){var t=this;this.getBlock().then(function(){return t.initialiseTimer()})},methods:{getBlock:function(){var t=this;return i.a.last().then(function(e){return t.block=e})},initialiseTimer:function(){this.timer=setInterval(this.getBlock,8e3)}},beforeDestroy:function(){clearInterval(this.timer)}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex-auto flex justify-between sm:ml-10"},[s("div",[s("div",{staticClass:"text-grey mb-2 min-w-0"},[t._v(t._s(t.$t("Last block")))]),t._v(" "),t.block.id?s("div",{staticClass:"text-lg truncate"},[s("link-block",{attrs:{id:t.block.id}},[t._v(t._s(t.block.id))])],1):t._e()]),t._v(" "),s("div",{staticClass:"hidden md:block"},[s("div",{staticClass:"text-grey mb-2 min-w-0"},[t._v(t._s(t.$t("Forged")))]),t._v(" "),s("div",{staticClass:"text-lg text-white truncate"},[t._v("\n      "+t._s(t.$t("from transactions",{currency:t.readableCrypto(t.block.totalForged),transactions:t.block.numberOfTransactions}))+"\n    ")])]),t._v(" "),s("div",{staticClass:"w-32"},[s("div",{staticClass:"text-grey mb-2 min-w-0"},[t._v(t._s(t.$t("Delegate")))]),t._v(" "),s("div",{staticClass:"text-lg text-white truncate semibold"},[s("link-wallet",{attrs:{"public-key":t.block.generatorPublicKey}})],1)])])},staticRenderFns:[]},u=s("VU/8")(c,d,!1,null,null,null).exports,g=s("Dd8w"),v=s.n(g),m={data:function(){return{forged:0}},computed:v()({},Object(o.b)("network",["height","rewardOffset"])),mounted:function(){this.prepareComponent()},methods:{prepareComponent:function(){var t=this;this.getTotal(),this.$store.watch(function(t){return t.network.height},function(e){return t.getTotal()})},getTotal:function(){this.forged=2*(this.height-this.rewardOffset)*Math.pow(10,8)}}},f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hidden xl:block border-l border-r border-grey-dark px-10 ml-10"},[s("div",{staticClass:"text-grey mb-2 min-w-0"},[t._v(t._s(t.$t("Total Forged (token)",{token:t.networkToken()})))]),t._v(" "),s("div",{staticClass:"text-lg text-white truncate"},[t._v(t._s(t.readableCrypto(t.forged,!1)))])])},staticRenderFns:[]},b={components:{DelegateCount:r,LastBlock:u,TotalForged:s("VU/8")(m,f,!1,null,null,null).exports}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"mb-5"},[e("div",{staticClass:"px-5 sm:px-10 py-8 bg-theme-feature-background flex xl:rounded-lg items-center justify-between"},[e("delegate-count"),this._v(" "),e("total-forged"),this._v(" "),e("last-block")],1)])},staticRenderFns:[]},p=s("VU/8")(b,h,!1,null,null,null).exports,x=(s("PJh5"),{props:{delegates:{type:Array,required:!0}},computed:v()({},Object(o.b)("delegates",["forged"])),methods:{totalForged:function(t){return(t=this.forged.find(function(e){return e.delegate===t.publicKey}))?t.forged:0},lastForgingTime:function(t){var e=t.forgingStatus.lastBlock;return e?this.readableTimestampAgo(e.timestamp):this.$i18n.t("Never")},statusMessage:function(t){var e={0:this.$i18n.t("Forging"),1:this.$i18n.t("Missing"),2:this.$i18n.t("Not Forging"),3:this.$i18n.t("Awaiting Slot"),4:this.$i18n.t("Awaiting Slot"),5:this.$i18n.t("Not Forging")}[t.forgingStatus.code],s=t.forgingStatus.lastBlock,l={content:"["+e+"] Last Block @ "+s.height+" on "+this.readableTimestamp(s.timestamp),classes:["tooltip-bg-"+t.forgingStatus.code,"font-sans"]};return s?l:e},statusColor:function(t){return{0:"#46b02e",1:"#f6993f",2:"#ef192d",3:"#838a9b",4:"#838a9b",5:"#ef192d"}[t.forgingStatus.code]}}}),_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table-component",{attrs:{data:t.delegates,"sort-by":"rate","sort-order":"asc","show-filter":!1,"show-caption":!1,"table-class":"w-full text-xs md:text-base"}},[s("table-column",{attrs:{show:"rate",label:t.$t("Rank"),"header-class":"p-4 pl-5 sm:pl-10 text-left w-32","cell-class":"p-3 pl-5 sm:pl-10 text-left border-none"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n      "+t._s(e.rate)+"\n    ")]}}])}),t._v(" "),s("table-column",{attrs:{show:"username",label:t.$t("Name"),"header-class":"left-header-cell","cell-class":"py-3 px-4 text-left border-none"},scopedSlots:t._u([{key:"default",fn:function(t){return[s("link-wallet",{attrs:{address:t.address}})]}}])}),t._v(" "),s("table-column",{attrs:{show:"producedblocks",label:t.$t("Forged"),"header-class":"left-header-cell hidden xl:table-cell","cell-class":"py-3 px-4 text-left border-none hidden xl:table-cell"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n      "+t._s(t.readableCrypto(t.totalForged(e)))+"\n    ")]}}])}),t._v(" "),s("table-column",{attrs:{show:"blocksAt",label:t.$t("Last Forged"),"header-class":"left-header-cell hidden sm:table-cell","cell-class":"py-3 px-4 text-left border-none hidden sm:table-cell"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n      "+t._s(t.lastForgingTime(e))+"\n    ")]}}])}),t._v(" "),s("table-column",{attrs:{"sort-by":"status",show:"forgingStatus",label:t.$t("Status"),"header-class":"base-header-cell pr-5 sm:pr-10 md:pr-4 w-24 md:w-auto","cell-class":"py-3 px-4 pr-5 sm:pr-10 md:pr-4 text-center border-none"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("svg",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.statusMessage(e),expression:"statusMessage(row)"}],attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"19px",height:"19px"}},[s("path",{attrs:{"fill-rule":"evenodd",fill:t.statusColor(e),d:"M9.500,-0.000 C14.746,-0.000 18.999,4.253 18.999,9.500 C18.999,14.747 14.746,19.000 9.500,19.000 C4.253,19.000 -0.001,14.747 -0.001,9.500 C-0.001,4.253 4.253,-0.000 9.500,-0.000 Z"}})])]}}])}),t._v(" "),s("table-column",{attrs:{show:"productivity",label:t.$t("Productivity"),"header-class":"right-header-cell hidden md:table-cell","cell-class":"py-3 px-4 text-right border-none hidden md:table-cell"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n      "+t._s(t.percentageString(e.productivity))+"\n    ")]}}])}),t._v(" "),s("table-column",{attrs:{show:"approval",label:t.$t("Approval"),"header-class":"right-header-cell pr-5 md:pr-10 hidden md:table-cell","cell-class":"py-3 px-4 md:pr-10 text-right border-none hidden md:table-cell"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n      "+t._s(t.percentageString(e.approval))+"\n    ")]}}])})],1)},staticRenderFns:[]},y=s("VU/8")(x,_,!1,null,null,null).exports,C={data:function(){return{delegates:[]}},computed:v()({},Object(o.b)("network",["activeDelegates"])),mounted:function(){this.getDelegates()},methods:{getDelegates:function(){var t=this;l.a.standby().then(function(e){return t.delegates=e})}}},w={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table-component",{attrs:{data:t.delegates,"sort-by":"approval","sort-order":"desc","show-filter":!1,"show-caption":!1,"table-class":"w-full text-xs md:text-base"}},[s("table-column",{attrs:{show:"rate",label:t.$t("Rank"),"header-class":"left-header-cell pl-5 sm:pl-10 w-32","cell-class":"p-3 pl-5 sm:pl-10 text-left border-none"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n      "+t._s(e.rate)+"\n    ")]}}])}),t._v(" "),s("table-column",{attrs:{show:"address",label:t.$t("Name"),"header-class":"left-header-cell","cell-class":"left-cell"},scopedSlots:t._u([{key:"default",fn:function(t){return[s("link-wallet",{attrs:{address:t.address}})]}}])}),t._v(" "),s("table-column",{attrs:{show:"productivity",label:t.$t("Productivity"),"header-class":"right-header-cell hidden md:table-cell","cell-class":"right-cell hidden md:table-cell"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n      "+t._s(t.percentageString(e.productivity))+"\n    ")]}}])}),t._v(" "),s("table-column",{attrs:{show:"approval",label:t.$t("Approval"),"header-class":"right-header-cell sm:pr-10 hidden md:table-cell","cell-class":"right-end-cell hidden md:table-cell w-40"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n      "+t._s(t.percentageString(e.approval))+"\n    ")]}}])})],1)},staticRenderFns:[]},L=s("VU/8")(C,w,!1,null,null,null).exports,k=s("x4qX"),M={props:{delegates:{type:Array,required:!0}},data:function(){return{totals:{}}},watch:{delegates:function(){this.getTotals()}},methods:{getTotals:function(){this.totals=k.a.totals(this.delegates)},percentage:function(t){return t/this.$store.getters["network/activeDelegates"]*100}}},j={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex flex-wrap p-5"},[s("div",{staticClass:"w-1/2 lg:w-1/4 flex items-center px-6 my-6 border-r border-theme-border-secondary flex-col sm:flex-row text-center sm:text-left"},[s("div",{staticClass:"meter flex-none text-green mb-4 sm:mb-0"},[s("ark-meter",{attrs:{percentage:t.percentage(t.totals.forging)}})],1),t._v(" "),s("div",{staticClass:"p-0 sm:pl-4"},[s("div",{staticClass:"text-3xl semibold"},[t._v(t._s(t.totals.forging))]),t._v(" "),s("div",{staticClass:"text-grey"},[t._v(t._s(t.$t("Forged block recently")))])])]),t._v(" "),s("div",{staticClass:"w-1/2 lg:w-1/4 flex items-center px-6 my-6 lg:border-r border-theme-border-secondary flex-col sm:flex-row text-center sm:text-left"},[s("div",{staticClass:"meter flex-none text-yellow mb-4 sm:mb-0"},[s("ark-meter",{attrs:{percentage:t.percentage(t.totals.missedBlock)}})],1),t._v(" "),s("div",{staticClass:"p-0 sm:pl-4"},[s("div",{staticClass:"text-3xl semibold"},[t._v(t._s(t.totals.missedBlock))]),t._v(" "),s("div",{staticClass:"text-grey"},[t._v(t._s(t.$t("Missed block")))])])]),t._v(" "),s("hr",{staticClass:"block lg:hidden"}),t._v(" "),s("div",{staticClass:"w-1/2 lg:w-1/4 flex items-center px-6 my-6 border-r border-theme-border-secondary flex-col sm:flex-row text-center sm:text-left"},[s("div",{staticClass:"meter flex-none text-red mb-4 sm:mb-0"},[s("ark-meter",{attrs:{percentage:t.percentage(t.totals.notForging)}})],1),t._v(" "),s("div",{staticClass:"p-0 sm:pl-4"},[s("div",{staticClass:"text-3xl semibold"},[t._v(t._s(t.totals.notForging))]),t._v(" "),s("div",{staticClass:"text-grey"},[t._v(t._s(t.$t("Not forging")))])])]),t._v(" "),s("div",{staticClass:"w-1/2 lg:w-1/4 flex items-center px-6 my-6 flex-col sm:flex-row text-center sm:text-left"},[s("div",{staticClass:"meter flex-none text-blue mb-4 sm:mb-0"},[s("ark-meter",{attrs:{percentage:t.percentage(t.totals.awaitingSlot)}})],1),t._v(" "),s("div",{staticClass:"p-0 sm:pl-4"},[s("div",{staticClass:"text-3xl semibold"},[t._v(t._s(t.totals.awaitingSlot))]),t._v(" "),s("div",{staticClass:"text-grey"},[t._v(t._s(t.$t("In queue for forging")))])])])])},staticRenderFns:[]},S={components:{DelegateDetail:p,Forging:s("VU/8")(M,j,!1,null,null,null).exports,ActiveDelegates:y,StandbyDelegates:L},data:function(){return{delegates:[],activeTab:"active",timer:null}},mounted:function(){var t=this;this.getDelegates().then(function(){return t.initialiseTimer()})},methods:{getDelegates:function(){var t=this;return l.a.activeDelegates().then(function(e){return t.delegates=e})},initialiseTimer:function(){this.timer=setInterval(this.getDelegates,8e3)}},beforeDestroy:function(){clearInterval(this.timer)}},I={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"max-w-2xl mx-auto md:pt-5"},[s("content-header",[t._v(t._s(t.$t("Delegate Monitor")))]),t._v(" "),s("delegate-detail"),t._v(" "),s("section",{staticClass:"page-section py-8"},[s("nav",{staticClass:"mx-5 sm:mx-10 mb-4 border-b flex items-end"},[s("div",{class:"active"===t.activeTab?"active-tab":"inactive-tab",on:{click:function(e){t.activeTab="active"}}},[t._v("\n        "+t._s(t.$t("Active"))+"\n      ")]),t._v(" "),s("div",{class:"standby"===t.activeTab?"active-tab":"inactive-tab",on:{click:function(e){t.activeTab="standby"}}},[t._v("\n        "+t._s(t.$t("Standby"))+"\n      ")])]),t._v(" "),s("forging",{directives:[{name:"show",rawName:"v-show",value:"active"===t.activeTab,expression:"activeTab === 'active'"}],attrs:{delegates:t.delegates}}),t._v(" "),"active"===t.activeTab?s("active-delegates",{attrs:{delegates:t.delegates}}):t._e(),t._v(" "),"standby"===t.activeTab?s("standby-delegates"):t._e()],1)],1)},staticRenderFns:[]};var T=s("VU/8")(S,I,!1,function(t){s("2Ht3")},null,null);e.default=T.exports},QlE7:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NyAzOCIgd2lkdGg9IjQ3cHgiIGhlaWdodD0iMzhweCI+PHN0eWxlPi5zdDF7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojMDM3Y2ZmfTwvc3R5bGU+PHN3aXRjaD48Zz48ZyBpZD0iRm9ybWFfMV/QutC+0L/QuNGPXzJfMV8iIG9wYWNpdHk9Ii40NzEiPjxnIGlkPSJGb3JtYV8xX9C60L7Qv9C40Y9fMiI+PGc+PHBhdGggY2xhc3M9InN0MSIgZD0iTTMyLjMgOS4xYzEgMS44IDIuOSAzLjEgNSAzLjEgMy4xIDAgNS44LTIuOCA1LjgtNi4xIDAtMy4yLTIuNy02LjEtNS44LTYuMS0yLjQgMC00LjYgMS43LTUuNCA0IC41LjkuNyAyIC43IDMuMSAwIC43LS4xIDEuNC0uMyAyem0tMjIuNiAzYzIuMSAwIDQtMS4zIDUtMy4xLS4yLS42LS4zLTEuMy0uMy0xLjkgMC0xLjEuMy0yLjEuNy0zLjEtLjgtMi4zLTMtNC01LjQtNC0zLjEgMC01LjggMi44LTUuOCA2LjEgMCAzLjIgMi43IDYgNS44IDZ6bTI3LjYgMi4xYy0yLjYgMC01LjEgMS41LTYuOSAzLjkgNCAyLjQgNi45IDcuNiA2LjkgMTMuNiAwIC4yIDAgLjQtLjEuNiA0LjkgMCA5LjctMS44IDkuNy01LjMuMS03LjEtNC41LTEyLjgtOS42LTEyLjh6bS0yNy42LS4xQzQuNiAxNC4xIDAgMTkuOSAwIDI3YzAgMy42IDQuOSA1LjMgOS43IDUuMyAwLS4yLS4xLS40LS4xLS42IDAtNiAyLjktMTEuMiA2LjktMTMuNi0xLjctMi41LTQuMi00LTYuOC00eiIvPjwvZz48L2c+PC9nPjxnIGlkPSJGb3JtYV8xX9C60L7Qv9C40Y9fMV8iPjxnIGlkPSJGb3JtYV8xX9C60L7Qv9C40Y8iPjxnPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yMy41IDE3LjhjMy4xIDAgNS44LTIuOCA1LjgtNi4xIDAtMy4yLTIuNy02LjEtNS44LTYuMS0zLjEgMC01LjggMi44LTUuOCA2LjEgMCAzLjIgMi43IDYuMSA1LjggNi4xem0wIDJjLTUuMSAwLTkuNyA1LjctOS43IDEyLjggMCA3LjEgMTkuNCA3LjEgMTkuNCAwcy00LjYtMTIuOC05LjctMTIuOHoiLz48L2c+PC9nPjwvZz48L2c+PC9zd2l0Y2g+PC9zdmc+"}});
//# sourceMappingURL=6.6549ff1efaaeeea8b076.js.map