webpackJsonp([0],{"31fQ":function(t,n,e){"use strict";var a=e("Zrlr"),r=e.n(a),i=e("wxAW"),s=e.n(i),o=e("FdXI"),u=function(){function t(){r()(this,t)}return s()(t,[{key:"find",value:function(t){return o.a.get("accounts",{params:{address:t}}).then(function(t){return t.data.account})}},{key:"vote",value:function(t){return o.a.get("accounts/delegates",{params:{address:t}}).then(function(t){return t.data.delegates[0]||!1})}},{key:"top",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:25,e=t>1?(t-1)*n:0;return o.a.get("accounts/top",{params:{orderBy:"balance:desc",limit:n,offset:e}}).then(function(t){return t.data.accounts})}}]),t}();n.a=new u},OS3l:function(t,n,e){"use strict";var a=e("Zrlr"),r=e.n(a),i=e("wxAW"),s=e.n(i),o=e("FdXI"),u=function(){function t(){r()(this,t)}return s()(t,[{key:"latest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:25;return o.a.get("transactions",{params:{orderBy:"timestamp:desc",limit:t}}).then(function(t){return t.data.transactions})}},{key:"find",value:function(t){return o.a.get("transactions/get",{params:{id:t}}).then(function(t){return t.data.transaction})}},{key:"findByBlock",value:function(t){return o.a.get("transactions",{params:{blockId:t,limit:25}}).then(function(t){return t.data.transactions})}},{key:"latestRegistrations",value:function(){return o.a.get("transactions",{params:{orderBy:"timestamp:desc",limit:5,type:2}}).then(function(t){return t.data.transactions})}},{key:"latestVotes",value:function(){return o.a.get("transactions",{params:{orderBy:"timestamp:desc",limit:5,type:3}}).then(function(t){return t.data.transactions})}},{key:"allByAddress",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:25,a=n>1?(n-1)*e:0;return o.a.get("transactions",{params:{senderId:t,recipientId:t,limit:e,offset:a,orderBy:"timestamp:desc"}}).then(function(t){return t.data.transactions})}},{key:"sentByAddress",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:25,a=n>1?(n-1)*e:0;return o.a.get("transactions",{params:{senderId:t,limit:e,offset:a,orderBy:"timestamp:desc"}}).then(function(t){return t.data.transactions})}},{key:"receivedByAddress",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:25,a=n>1?(n-1)*e:0;return o.a.get("transactions",{params:{recipientId:t,limit:e,offset:a,orderBy:"timestamp:desc"}}).then(function(t){return t.data.transactions})}},{key:"sendByAddressCount",value:function(t){return o.a.get("transactions",{params:{senderId:t,limit:1}}).then(function(t){return t.data.count})}},{key:"receivedByAddressCount",value:function(t){return o.a.get("transactions",{params:{recipientId:t,limit:1}}).then(function(t){return t.data.count})}},{key:"votes",value:function(t){return o.a.get("transactions",{params:{orderBy:"timestamp:desc",limit:25,type:3,senderId:t}}).then(function(t){return t.data})}},{key:"paginate",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:25,e=t>1?(t-1)*n:0;return o.a.get("transactions",{params:{orderBy:"timestamp:desc",limit:n,offset:e}}).then(function(t){return t.data.transactions})}},{key:"paginateByAddress",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:25,a=n>1?(n-1)*e:0;return o.a.get("transactions",{params:{senderId:t,recipientId:t,limit:e,offset:a,orderBy:"timestamp:desc"}}).then(function(t){return t.data.transactions})}}]),t}();n.a=new u}});
//# sourceMappingURL=0.6b063abd0b7ade1ccffe.js.map