webpackJsonp([7],{"7PdC":function(t,e,a){"use strict";var s=a("Dd8w"),r=a.n(s),n=a("MyEg"),l=a("/VNn"),i=a("ex61"),o=a("NP5A"),d=a("NYxO"),c={mixins:[o.a],components:{WalletLink:l.a,Currency:n.a,TableHeader:i.a},props:{wallets:{type:Array,required:!0}},computed:r()({},Object(d.b)("network",["supply"]),{sortedWallets:function(){return _.orderBy(this.wallets,this.sortKey,this.sortDirection)}}),methods:{getRank:function(t){return 25*(this.$route.params.page>1?this.$route.params.page-1:0)+(t+1)}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"w-full"},[a("table-header",{attrs:{fields:[{label:"Rank",class:"p-4 pl-10 text-left"},{label:"Address",sortBy:"address",class:"p-4 text-left"},{label:"Balance",sortBy:"balance",class:"p-4 text-right"},{label:"Supply",class:"p-4 pr-10 text-right"}],"sort-key":t.sortKey,"sort-direction":t.sortDirection,"sort-symbol":t.sortSymbol,handler:t.sortBy}}),t._v(" "),a("tbody",t._l(t.sortedWallets,function(e,s){return a("tr",{key:e.address},[a("td",{staticClass:"p-4 pl-10 text-left border-none w-24"},[t._v("\n        "+t._s(t.getRank(s))+"\n      ")]),t._v(" "),a("td",{staticClass:"p-4 text-left border-none"},[a("wallet-link",{attrs:{address:e.address}})],1),t._v(" "),a("td",{staticClass:"p-4 text-right border-none"},[t._v("\n        "+t._s(t.readableCrypto(e.balance))+"\n      ")]),t._v(" "),a("td",{staticClass:"p-4 pr-10 text-right border-none w-24"},[t._v("\n        "+t._s(t.readableNumber(e.balance/t.supply*100))+"%\n      ")])])}))],1)},staticRenderFns:[]};var p=a("VU/8")(c,u,!1,function(t){a("g+q2")},"data-v-0adf05bd",null);e.a=p.exports},I6TN:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("OrnC"),r=a("7PdC"),n=a("Jama"),l=a("OzNK"),i=a("31fQ"),o={components:{ContentHeader:s.a,TableWallets:r.a,TableWalletsMobile:n.a,Paginator:l.a},data:function(){return{wallets:[]}},beforeRouteEnter:function(t,e,a){i.a.top(t.params.page).then(function(t){return a(function(e){return e.setWallets(t)})})},beforeRouteUpdate:function(t,e,a){var s=this;this.wallets=[],i.a.top(t.params.page).then(function(t){return s.setWallets(t)}).then(function(){return a()})},created:function(){var t=this;this.$on("paginatorChanged",function(e){return t.changePage(e)})},methods:{setWallets:function(t){this.wallets=t},changePage:function(t){this.$router.push({name:"top-wallets",params:{page:t}})}}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"max-w-2xl mx-auto md:pt-5"},[e("content-header",[this._v("Top Accounts")]),this._v(" "),e("section",{staticClass:"bg-theme-content-background shadow-theme xl:rounded-lg py-5 md:py-10"},[e("div",{staticClass:"hidden sm:block"},[e("table-wallets",{attrs:{wallets:this.wallets}})],1),this._v(" "),e("div",{staticClass:"sm:hidden"},[e("table-wallets-mobile",{attrs:{wallets:this.wallets}})],1),this._v(" "),e("paginator",{attrs:{start:+this.$route.params.page}})],1)],1)},staticRenderFns:[]},c=a("VU/8")(o,d,!1,null,null,null);e.default=c.exports},Jama:function(t,e,a){"use strict";var s=a("Dd8w"),r=a.n(s),n=a("MyEg"),l=a("/VNn"),i=a("NYxO"),o={components:{WalletLink:l.a,Currency:n.a},props:{wallets:{type:Array,required:!0}},computed:r()({},Object(i.b)("network",["supply"])),methods:{getRank:function(t){return 25*(this.$route.params.page>1?this.$route.params.page-1:0)+(t+1)}}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.wallets,function(e,s){return a("div",{key:e.address,staticClass:"tx-row-mobile px-5 py-4"},[a("div",{staticClass:"border-b py-4 flex justify-between flex-wrap"},[a("div",[t._v("Rank")]),t._v(" "),a("div",[t._v(t._s(t.getRank(s)))])]),t._v(" "),a("div",{staticClass:"border-b py-4 flex justify-between flex-wrap"},[a("div",[t._v("Address")]),t._v(" "),a("wallet-link",{attrs:{address:e.address}})],1),t._v(" "),a("div",{staticClass:"border-b py-4 flex justify-between flex-wrap"},[a("div",[t._v("Balance")]),t._v(" "),a("div",[t._v(t._s(t.readableCrypto(e.balance)))])]),t._v(" "),a("div",{staticClass:"py-4 flex justify-between flex-wrap"},[a("div",[t._v("Supply")]),t._v(" "),a("div",[t._v(t._s(t.readableNumber(e.balance/t.supply*100))+"%")])])])}))},staticRenderFns:[]};var c=a("VU/8")(o,d,!1,function(t){a("ZQtQ")},"data-v-985dc1ca",null);e.a=c.exports},ZQtQ:function(t,e){},"g+q2":function(t,e){}});
//# sourceMappingURL=7.32301e9db5a6604f1659.js.map