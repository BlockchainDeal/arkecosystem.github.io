webpackJsonp([9],{N3GV:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("31fQ"),a=s("cE1D"),r={data:function(){return{blocks:[]}},created:function(){var t=this;this.$on("paginatorChanged",function(e){return t.changePage(e)})},beforeRouteEnter:function(t,e,s){n.a.find(t.params.address).then(function(e){return a.a.getByPublicKey(e.publicKey,t.params.page)}).then(function(t){return s(function(e){return e.setBlocks(t)})}).catch(function(){return s({name:"404"})})},beforeRouteUpdate:function(t,e,s){var r=this;this.blocks=[],n.a.find(t.params.address).then(function(e){return a.a.getByPublicKey(e.publicKey,t.params.page)}).then(function(t){return r.setBlocks(t)}).catch(function(){return s({name:"404"})})},computed:{address:function(){return this.$route.params.address},page:function(){return this.$route.params.page}},methods:{setBlocks:function(t){t&&(this.blocks=t)},changePage:function(t){this.$router.push({name:"wallet-blocks",params:{address:this.address,page:t}})}}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"max-w-2xl mx-auto pt-5"},[e("content-header",[this._v("Blocks")]),this._v(" "),e("section",{staticClass:"page-section py-10"},[e("div",{staticClass:"hidden sm:block"},[e("table-blocks",{attrs:{blocks:this.blocks}})],1),this._v(" "),e("div",{staticClass:"sm:hidden"},[e("table-blocks-mobile",{attrs:{blocks:this.blocks}})],1),this._v(" "),e("paginator",{attrs:{start:+this.page}})],1)],1)},staticRenderFns:[]},i=s("VU/8")(r,c,!1,null,null,null);e.default=i.exports}});
//# sourceMappingURL=9.a7f8deb08f240eda0c67.js.map