(function(t){function e(e){for(var a,r,o=e[0],c=e[1],u=e[2],p=0,d=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(a=!1)}a&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={app:0},s=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1:function(t,e){},10:function(t,e){},11:function(t,e){},2:function(t,e){},2377:function(t,e,n){t.exports=n.p+"img/mdx.13f8a011.png"},3:function(t,e){},4:function(t,e){},5:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=n("a925"),s=n("e06a"),r=n.n(s),o=n("5c96"),c=n.n(o),u=(n("e05f"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",[a("el-col",{attrs:{span:20,offset:2}},[a("el-container",[a("el-header",{staticClass:"header"},[a("el-col",{attrs:{span:4,xs:24}},[a("div",{staticClass:"logo"},[a("img",{attrs:{src:n("cf05")}}),a("span",[t._v(t._s(t.$t("message.site_name")))])])]),a("el-col",{attrs:{span:8,xs:{span:24,offset:0},offset:12}},[a("div",{staticClass:"menu"},[a("div",{staticClass:"menu-contact"},[t.accounts.length?a("el-button",{attrs:{type:"primary"},on:{click:t.disConnectWallet}},[a("span",{staticStyle:{display:"inline-block",width:"80px",overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap"}},[t._v(t._s(t.accounts[0]))])]):a("el-button",{attrs:{type:"primary"},on:{click:t.connectWallet}},[a("span",{staticStyle:{display:"inline-block",width:"80px",overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap"}},[t._v(t._s(t.$t("message.connect_wallet")))])])],1),a("div",{staticClass:"menu-lang"},[a("el-dropdown",[a("el-button",{attrs:{type:"primary"}},[t._v(" "+t._s(t.$t("message.switch"))),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{nativeOn:{click:function(e){return t.switchLang("en")}}},[t._v("English")]),a("el-dropdown-item",{nativeOn:{click:function(e){return t.switchLang("cn")}}},[t._v("中文")])],1)],1)],1)])])],1),a("el-main",[a("h1",{staticClass:"main-title"},[t._v(" "+t._s(t.$t("message.site_title"))+" ")]),a("el-row",{staticClass:"hidden-md-and-down features"},[a("el-col",{attrs:{span:6}},[a("i",{staticClass:"el-icon-refresh",staticStyle:{color:"#229954"}}),t._v(" "),a("span",[t._v("资金随存随取")])]),a("el-col",{attrs:{span:6}},[a("i",{staticClass:"el-icon-data-line",staticStyle:{color:"#409EFF"}}),t._v(" "),a("span",[t._v("实时监控全网收益")])]),a("el-col",{attrs:{span:6}},[a("i",{staticClass:"el-icon-pie-chart",staticStyle:{color:"#F4D03F"}}),t._v(" "),a("span",[t._v("自动复投收益最大化")])]),a("el-col",{attrs:{span:6}},[a("i",{staticClass:"el-icon-wallet",staticStyle:{color:"#76D7C4"}}),t._v(" "),a("span",[t._v("抵御无常损失")])])],1),a("div",{staticClass:"main-card"},[a("el-row",{attrs:{gutter:10}},t._l(t.valut,(function(e,n){return a("el-col",{key:n,staticClass:"main-box",attrs:{span:8,xs:24}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"box-card-item"},[a("div",{staticClass:"box-card-item-header"},[a("div",{staticClass:"box-card-item-header-logo"},[a("img",{attrs:{src:e.logo_url}})]),a("div",{staticClass:"box-card-item-header-info"},[a("p",[t._v(t._s(e.name))])])]),a("div",{staticClass:"box-card-item-list"},[a("div",{staticClass:"box-card-item-list-li"},[a("span",[t._v(t._s(t.$t("message.coin_apy")))]),a("span",[t._v(t._s(e.rate?e.rate:"--")+"%")])]),a("div",{staticClass:"box-card-item-list-li"},[a("span",[t._v(t._s(t.$t("message.coin_total")))]),a("span",[t._v(" "+t._s(t._f("formatPrice")(e.totalDeposit,e.view_decimals))+" ")])]),a("div",{staticClass:"box-card-item-list-li"},[a("span",[t._v(t._s(t.$t("message.coin_yours")))]),a("span",[t._v(" "+t._s(t._f("formatPrice")(e.alreadyDeposit,e.view_decimals))+" ")])]),a("div",{staticClass:"box-card-item-list-li"},[a("span",[t._v(t._s(t.$t("message.coin_income"))+"("+t._s(e.name)+")")]),a("countTo",{ref:e.name+"-CountTo",refInFor:!0,attrs:{startVal:e.startAlreadyIncome,endVal:e.endAlreadyIncome,duration:8e3,decimals:e.view_decimals,separator:",",autoplay:!1}})],1)]),a("div",{staticClass:"box-card-item-btn"},[a("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.openModal(e)}}},[t._v(t._s(t.$t("message.coin_earn")))])],1)])])],1)})),1)],1)],1),a("el-footer",[a("div",{staticClass:"footer"},[a("div",{staticClass:"footer-contact"}),a("div",{staticClass:"footer-li"},[a("div",[t._v("© Udon.one 2021")])])])])],1)],1),a("el-dialog",{staticStyle:{"min-width":"320px"},attrs:{visible:t.visible,width:t.dialogWidth,"before-close":t.handleClose,top:"25vh"},on:{"update:visible":function(e){t.visible=e}}},[a("div",{staticClass:"dialog-header"},[a("div",{staticClass:"dialog-header-operate"},[a("span",{class:"deposit"===t.type?"active":"",on:{click:function(e){return t.switchStrategy("deposit")}}},[t._v(t._s(t.$t("message.coin_deposit")))]),a("span",{class:"withdraw"===t.type?"active":"",on:{click:function(e){return t.switchStrategy("withdraw")}}},[t._v(t._s(t.$t("message.coin_withdraw")))])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:"deposit"===t.type,expression:"type === 'deposit'"}],staticClass:"dialog-form"},[a("div",{staticClass:"dialog-form-header"},[a("span",[t._v(t._s(t.modalData.balance)+" "+t._s(t.modalData.name))])]),a("div",{staticClass:"dialog-form-input"},[a("div",{staticClass:"dialog-form-input-box"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.depositVal,expression:"depositVal"}],attrs:{type:"text",oninput:"value=value.replace(/[^\\d.]/g,'')"},domProps:{value:t.depositVal},on:{input:function(e){e.target.composing||(t.depositVal=e.target.value)}}}),a("span",{on:{click:function(e){t.depositVal=t.modalData.balance}}},[t._v(t._s(t.$t("message.coin_max")))])])]),a("div",{staticClass:"dialog-btn"},["0"!==t.modalData.allowanceInfo?a("div",{staticClass:"dialog-btn-group"},[a("button",{on:{click:t.handleClose}},[t._v(" "+t._s(t.$t("message.cancel"))+" ")]),a("button",{attrs:{disabled:t.depositDisabled},on:{click:t.deposit}},[t._v(" "+t._s(t.$t("message.submit"))+" ")])]):a("button",{on:{click:t.auth}},[t._v(t._s(t.$t("message.coin_approve"))+" "+t._s(t.modalData.name))])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:"withdraw"===t.type,expression:"type === 'withdraw'"}],staticClass:"dialog-form"},[a("div",{staticClass:"dialog-form-header"},[a("span",[t._v(t._s(t.modalData.userCurrentValue)+" "+t._s(t.modalData.name))])]),a("div",{staticClass:"dialog-form-input"},[a("div",{staticClass:"dialog-form-input-box"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.withdrawVal,expression:"withdrawVal"}],attrs:{type:"text"},domProps:{value:t.withdrawVal},on:{input:function(e){e.target.composing||(t.withdrawVal=e.target.value)}}}),a("span",{on:{click:function(e){t.withdrawVal=t.modalData.userCurrentValue}}},[t._v(t._s(t.$t("message.coin_max")))])])]),a("div",{staticClass:"dialog-btn"},["0"!==t.modalData.allowanceInfo?a("div",{staticClass:"dialog-btn-group"},[a("button",{on:{click:t.handleClose}},[t._v(" "+t._s(t.$t("message.cancel"))+" ")]),a("button",{attrs:{disabled:t.withdrawDisabled},on:{click:t.withdraw}},[t._v(" "+t._s(t.$t("message.submit"))+" ")])]):a("button",{on:{click:t.auth}},[t._v(t._s(t.$t("message.coin_approve"))+" "+t._s(t.modalData.name))])])])])],1)}),l=[],p=n("b85c"),d=n("1da1"),m=(n("96cf"),n("a9e3"),n("b680"),n("1276"),n("ac1f"),n("d3b7"),n("25f0"),n("5319"),n("a15b"),n("159b"),n("b0c0"),n("466d"),n("841c"),[{inputs:[{internalType:"address",name:"_token",type:"address"},{internalType:"address",name:"_manager",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[],name:"_lastPrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"_lastTimestamp",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"_paidIncome",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"_principal",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"_rewardLevel",outputs:[{internalType:"int256",name:"",type:"int256"}],stateMutability:"view",type:"function"},{inputs:[],name:"_rewardMinLine",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"int256",name:"",type:"int256"}],name:"_rewardRates",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"_rewards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"_totalPaidIncome",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"_totalPrincipal",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"_totalReward",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"_userParent",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"available",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"balance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"},{internalType:"address",name:"_parent",type:"address"}],name:"deposit",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"}],name:"deposit",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"_parent",type:"address"}],name:"depositAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"depositAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"earn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getPricePerFullShare",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getStaticInfo",outputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_account",type:"address"}],name:"getUserInfo",outputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"governance",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"manager",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"max",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"min",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_governance",type:"address"}],name:"setGovernance",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_price",type:"uint256"}],name:"setLastPricePerFullShare",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_manager",type:"address"}],name:"setManager",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_min",type:"uint256"}],name:"setMin",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"int256",name:"_level",type:"int256"}],name:"setRewardLevel",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_line",type:"uint256"}],name:"setRewardMinLine",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"int256",name:"_level",type:"int256"},{internalType:"uint256",name:"_rate",type:"uint256"}],name:"setRewardRate",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"token",outputs:[{internalType:"contract IERC20",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_shares",type:"uint256"}],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"withdrawAll",outputs:[],stateMutability:"nonpayable",type:"function"}]),y=[{name:"MDX",token_address:"0x25d2e80cb6b86881fd7e07dd263fb79f4abe033c",valut_address:"0x76EDd0F5002EaA2857d8C8F60080062c47dc25EA",decimals:18,view_decimals:4,logo_url:n("2377")}],w=n("2ef0"),f=n.n(w),M=n("4128"),b=n.n(M),g=n("ec1b"),v=n.n(g),h=n("5aac"),_=n.n(h),T=n("307c"),D=n.n(T),x=n("99e5"),N={name:"App",components:{countTo:v.a},data:function(){return{visible:!1,type:"deposit",depositVal:"",withdrawVal:"",web3:null,valut:[],token:[],accounts:[],modalData:{balance:0,name:"",allowanceInfo:0},dialogWidth:"30%"}},computed:{depositDisabled:function(){return""===this.depositVal||0===Number(this.depositVal)},withdrawDisabled:function(){return""===this.withdrawVal||0===Number(this.withdrawVal)}},watch:{depositVal:function(t){console.log(t,"newNal")}},filters:{formatPrice:function(t,e,n){if(!t&&0!==t)return"--";t=t.toFixed(e),!n&&(n=",");var a=t.toString().split(".");return a[0]=a[0].replace(/\B(?=(\d{3})+(?!\d))/g,n),a.join(".")}},mounted:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.setDialogWidth(),window.onresize=function(){return function(){t.setDialogWidth()}()},y.forEach((function(e){t.valut.push({name:e.name,decimals:e.decimals,view_decimals:e.view_decimals,token_address:e.token_address,valut_address:e.valut_address,logo_url:e.logo_url,startAlreadyIncome:0,endAlreadyIncome:0})}));case 3:case"end":return e.stop()}}),e)})))()},methods:{setDialogWidth:function(){var t=document.body.clientWidth,e=800;this.dialogWidth=t<e?"90%":"30%"},switchLang:function(t){localStorage.setItem("lang",t),this.$i18n.locale=t},handleClose:function(){this.visible=!1,this.depositVal="",this.withdrawVal=""},getQueryString:function(t){var e="(^|&)".concat(t,"=([^&]*)(&|$)"),n=window.location.search.substr(1).match(e);return null!=n?unescape(n[2]):null},openModal:function(t){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.accounts.length){n.next=3;break}return e.$notify.warning({title:e.$i18n.t("message.notify_title"),message:e.$i18n.t("message.notify_connect_wallet"),duration:2e3}),n.abrupt("return");case 3:return n.prev=3,n.next=6,e.callMethod(t.tokenContract.methods.balanceOf(e.accounts[0]));case 6:a=n.sent,t.balance=f.a.floor(a/Math.pow(10,t.decimals),t.view_decimals),e.$forceUpdate(),n.next=14;break;case 11:n.prev=11,n.t0=n["catch"](3),console.log(n.t0);case 14:e.visible=!0,e.type="deposit",e.modalData=t,e.checkAuth();case 18:case"end":return n.stop()}}),n,null,[[3,11]])})))()},switchStrategy:function(t){this.type=t},connectWallet:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={"custom-example":{display:{logo:"data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxyYWRpYWxHcmFkaWVudCBpZD0iYSIgY3g9IjAlIiBjeT0iNTAlIiByPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM1ZDlkZjYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMDZmZmYiLz48L3JhZGlhbEdyYWRpZW50PjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0ibTI1NiAwYzE0MS4zODQ4OTYgMCAyNTYgMTE0LjYxNTEwNCAyNTYgMjU2cy0xMTQuNjE1MTA0IDI1Ni0yNTYgMjU2LTI1Ni0xMTQuNjE1MTA0LTI1Ni0yNTYgMTE0LjYxNTEwNC0yNTYgMjU2LTI1NnoiIGZpbGw9InVybCgjYSkiLz48cGF0aCBkPSJtNjQuNjkxNzU1OCAzNy43MDg4Mjk4YzUxLjUzMjgwNzItNTAuMjc4NDM5NyAxMzUuMDgzOTk0Mi01MC4yNzg0Mzk3IDE4Ni42MTY3OTkyIDBsNi4yMDIwNTcgNi4wNTEwOTA2YzIuNTc2NjQgMi41MTM5MjE4IDIuNTc2NjQgNi41ODk3OTQ4IDAgOS4xMDM3MTc3bC0yMS4yMTU5OTggMjAuNjk5NTc1OWMtMS4yODgzMjEgMS4yNTY5NjE5LTMuMzc3MSAxLjI1Njk2MTktNC42NjU0MjEgMGwtOC41MzQ3NjYtOC4zMjcwMjA1Yy0zNS45NTA1NzMtMzUuMDc1NDk2Mi05NC4yMzc5NjktMzUuMDc1NDk2Mi0xMzAuMTg4NTQ0IDBsLTkuMTQwMDI4MiA4LjkxNzU1MTljLTEuMjg4MzIxNyAxLjI1Njk2MDktMy4zNzcxMDE2IDEuMjU2OTYwOS00LjY2NTQyMDggMGwtMjEuMjE1OTk3My0yMC42OTk1NzU5Yy0yLjU3NjY0MDMtMi41MTM5MjI5LTIuNTc2NjQwMy02LjU4OTc5NTggMC05LjEwMzcxNzd6bTIzMC40OTM0ODUyIDQyLjgwODkxMTcgMTguODgyMjc5IDE4LjQyMjcyNjJjMi41NzY2MjcgMi41MTM5MTAzIDIuNTc2NjQyIDYuNTg5NzU5My4wMDAwMzIgOS4xMDM2ODYzbC04NS4xNDE0OTggODMuMDcwMzU4Yy0yLjU3NjYyMyAyLjUxMzk0MS02Ljc1NDE4MiAyLjUxMzk2OS05LjMzMDg0LjAwMDA2Ni0uMDAwMDEtLjAwMDAxLS4wMDAwMjMtLjAwMDAyMy0uMDAwMDMzLS4wMDAwMzRsLTYwLjQyODI1Ni01OC45NTc0NTFjLS42NDQxNi0uNjI4NDgxLTEuNjg4NTUtLjYyODQ4MS0yLjMzMjcxIDAtLjAwMDAwNC4wMDAwMDQtLjAwMDAwOC4wMDAwMDctLjAwMDAxMi4wMDAwMTFsLTYwLjQyNjk2ODMgNTguOTU3NDA4Yy0yLjU3NjYxNDEgMi41MTM5NDctNi43NTQxNzQ2IDIuNTEzOTktOS4zMzA4NDA4LjAwMDA5Mi0uMDAwMDE1MS0uMDAwMDE0LS4wMDAwMzA5LS4wMDAwMjktLjAwMDA0NjctLjAwMDA0NmwtODUuMTQzODY3NzQtODMuMDcxNDYzYy0yLjU3NjYzOTI4LTIuNTEzOTIxLTIuNTc2NjM5MjgtNi41ODk3OTUgMC05LjEwMzcxNjNsMTguODgyMzEyNjQtMTguNDIyNjk1NWMyLjU3NjYzOTMtMi41MTM5MjIyIDYuNzU0MTk5My0yLjUxMzkyMjIgOS4zMzA4Mzk3IDBsNjAuNDI5MTM0NyA1OC45NTgyNzU4Yy42NDQxNjA4LjYyODQ4IDEuNjg4NTQ5NS42Mjg0OCAyLjMzMjcxMDMgMCAuMDAwMDA5NS0uMDAwMDA5LjAwMDAxODItLjAwMDAxOC4wMDAwMjc3LS4wMDAwMjVsNjAuNDI2MTA2NS01OC45NTgyNTA4YzIuNTc2NTgxLTIuNTEzOTggNi43NTQxNDItMi41MTQwNzQzIDkuMzMwODQtLjAwMDIxMDMuMDAwMDM3LjAwMDAzNTQuMDAwMDcyLjAwMDA3MDkuMDAwMTA3LjAwMDEwNjNsNjAuNDI5MDU2IDU4Ljk1ODM1NDhjLjY0NDE1OS42Mjg0NzkgMS42ODg1NDkuNjI4NDc5IDIuMzMyNzA5IDBsNjAuNDI4MDc5LTU4Ljk1NzE5MjVjMi41NzY2NC0yLjUxMzkyMzEgNi43NTQxOTktMi41MTM5MjMxIDkuMzMwODM5IDB6IiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk4IDE2MCkiLz48L2c+PC9zdmc+",name:"WalletConnect",description:"Scan with WalletConnect to connect"},package:D.a,options:{rpc:{128:"https://http-mainnet-node.huobichain.com"},chainId:128},connector:function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(e,n){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new e(n),t.next=3,a.enable();case 3:return t.abrupt("return",a);case 4:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}()}},t.web3Modal=new _.a({network:"mainnet",cacheProvider:!0,providerOptions:n}),e.next=4,t.web3Modal.connect();case 4:return t.provider=e.sent,t.web3=new x(t.provider),e.next=8,t.web3.eth.net.getId();case 8:if(a=e.sent,128==a){e.next=13;break}return t.disConnectWallet(),t.$notify.warning({title:t.$i18n.t("message.notify_title"),message:t.$i18n.t("message.notify_connect_heco"),duration:2e3}),e.abrupt("return");case 13:return t.getContract(),e.t0=t,e.next=17,t.web3.eth.getAccounts();case 17:e.t1=e.sent,e.t0.pvdAccountsChanged.call(e.t0,e.t1),t.provider.on("accountsChanged",t.pvdAccountsChanged),t.provider.on("chainChanged",t.pvdChainChanged),t.provider.on("connect",t.pvdConnect),t.provider.on("disconnect",t.pvdDisconnect),t.interval=setInterval(Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getVaultInfo();case 2:case"end":return e.stop()}}),e)}))),1e4);case 24:case"end":return e.stop()}}),e)})))()},disConnectWallet:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:clearInterval(t.interval),t.accounts.pop(),t.valut.forEach((function(e){y.forEach(function(){var n=Object(d["a"])(regeneratorRuntime.mark((function n(a){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:a.name===e.name&&(e.totalDeposit=0,e.rate=new b.a(0),e.alreadyDeposit=0,e.userShares=0,e.balance=-1,e.alreadyIncome=0,t.$forceUpdate());case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}())})),t.web3Modal.clearCachedProvider(),t.web3Modal=null,t.provider=null,t.web3=null;case 7:case"end":return e.stop()}}),e)})))()},pvdAccountsChanged:function(t){this.web3&&(this.accounts=t,this.getVaultInfo())},pvdChainChanged:function(t){128!=t&&this.web3&&(this.disConnectWallet(),this.$notify.warning({title:this.$i18n.t("message.notify_title"),message:this.$i18n.t("message.notify_connect_heco"),duration:2e3}))},pvdDisconnect:function(t){this.web3&&(console.log("disconnect!"),console.log(t))},pvdConnect:function(t){this.web3&&(console.log("connect!"),console.log(t))},getContract:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:y.forEach((function(e){t.valut.forEach((function(n){e.name===n.name&&(n.contract=new t.web3.eth.Contract(m,n.valut_address),n.tokenContract=new t.web3.eth.Contract(m,n.token_address))}))}));case 1:case"end":return e.stop()}}),e)})))()},getVaultInfo:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){var n,a,i,s,r,o,c,u,l,d,m,w,M,g,v,h;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=Object(p["a"])(t.valut),e.prev=1,n.s();case 3:if((a=n.n()).done){e.next=70;break}i=a.value,s=Object(p["a"])(y),e.prev=6,s.s();case 8:if((r=s.n()).done){e.next=60;break}if(o=r.value,!t.web3){e.next=58;break}if(o.name!==i.name){e.next=58;break}if(-1!==i.balance){e.next=24;break}return e.prev=13,e.next=16,t.callMethod(i.tokenContract.methods.balanceOf(t.accounts[0]));case 16:c=e.sent,i.balance=f.a.floor(c/Math.pow(10,i.decimals),i.view_decimals),t.$forceUpdate(),e.next=24;break;case 21:e.prev=21,e.t0=e["catch"](13),console.log(e.t0);case 24:return e.prev=24,e.next=27,t.callMethod(i.contract.methods.getStaticInfo());case 27:u=e.sent,l=u[1]/Math.pow(10,i.decimals),d=u[2]/Math.pow(10,18),i.totalDeposit=f.a.floor(l,i.view_decimals),m=new b.a(parseFloat(d).toFixed(4)).mul(new b.a(100)),(!i.rate||0==i.rate||m>i.rate||i.rate-m<10)&&(i.rate=m),t.$forceUpdate(),e.next=39;break;case 36:e.prev=36,e.t1=e["catch"](24),console.log(e.t1);case 39:return e.prev=39,e.next=42,t.callMethod(i.contract.methods.getUserInfo(t.accounts[0]));case 42:w=e.sent,M=w[0],g=w[1],v=w[2],h=w[3],i.userShares=M,i.alreadyDeposit=g/Math.pow(10,i.decimals),i.alreadyIncome=h/Math.pow(10,i.decimals),i.userCurrentValue=v/Math.pow(10,i.decimals),t.$forceUpdate(),i.endAlreadyIncome<i.alreadyIncome&&(i.startAlreadyIncome=i.endAlreadyIncome,i.endAlreadyIncome=i.alreadyIncome,t.$forceUpdate(),t.$refs["".concat(i.name,"-CountTo")][0].start(),console.log(t.$refs["".concat(i.name,"-CountTo")]),console.log(i.name)),e.next=58;break;case 55:e.prev=55,e.t2=e["catch"](39),console.log(e.t2);case 58:e.next=8;break;case 60:e.next=65;break;case 62:e.prev=62,e.t3=e["catch"](6),s.e(e.t3);case 65:return e.prev=65,s.f(),e.finish(65);case 68:e.next=3;break;case 70:e.next=75;break;case 72:e.prev=72,e.t4=e["catch"](1),n.e(e.t4);case 75:return e.prev=75,n.f(),e.finish(75);case 78:case"end":return e.stop()}}),e,null,[[1,72,75,78],[6,62,65,68],[13,21],[24,36],[39,55]])})))()},callMethod:function(t){return Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.call();case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e["catch"](0),e.next=10,t.call();case 10:return e.abrupt("return",e.sent);case 11:case"end":return e.stop()}}),e,null,[[0,6]])})))()},callMethod2:function(t,e){return Object(d["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.call(null,e);case 3:return n.abrupt("return",n.sent);case 6:return n.prev=6,n.t0=n["catch"](0),n.next=10,t.call(null,e);case 10:return n.abrupt("return",n.sent);case 11:case"end":return n.stop()}}),n,null,[[0,6]])})))()},sendTransaction:function(t){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function n(){var a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.$loading({lock:!0,text:e.$i18n.t("message.loading_text"),spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.5)"}),i=e,n.abrupt("return",new Promise((function(n,s){e.web3.eth.sendTransaction(t).on("confirmation",(function(t,e){0==t&&(a.close(),i.visible=!1,console.log(e),n())})).on("error",(function(t){a.close(),this.$notify.error({title:this.$i18n.t("message.notify_title"),message:this.$i18n.t("message.notify_trans_fail"),duration:0}),s(t)}))})));case 3:case"end":return n.stop()}}),n)})))()},checkAuth:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.callMethod(t.modalData.tokenContract.methods.allowance(t.accounts[0],t.modalData.valut_address));case 2:n=e.sent,t.$set(t.modalData,"allowanceInfo",n);case 4:case"end":return e.stop()}}),e)})))()},auth:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.modalData.tokenContract.methods.approve(t.modalData.valut_address,"115792089237316000000000000000000000000000000000000000000000000000000000000000").encodeABI();case 2:n=e.sent,t.sendTransaction({from:t.accounts[0],to:t.modalData.token_address,data:n}).then((function(){t.checkAuth()})).catch((function(t){console.log(t)}));case 4:case"end":return e.stop()}}),e)})))()},deposit:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){var n,a,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(Number(t.depositVal)>t.modalData.balance)){e.next=3;break}return t.$notify.warning({title:t.$i18n.t("message.notify_title"),message:t.$i18n.t("message.notify_deposit_err"),duration:2e3}),e.abrupt("return");case 3:if(n=String(t.depositVal*Math.pow(10,t.modalData.decimals)),a=t.getQueryString("q"),i=t.web3.utils.isAddress(a),s=null,Number(t.depositVal)!==t.modalData.balance){e.next=19;break}if(!i){e.next=14;break}return e.next=11,t.modalData.contract.methods.depositAll(a).encodeABI();case 11:s=e.sent,e.next=17;break;case 14:return e.next=16,t.modalData.contract.methods.depositAll().encodeABI();case 16:s=e.sent;case 17:e.next=28;break;case 19:if(!i){e.next=25;break}return e.next=22,t.modalData.contract.methods.deposit(n,a).encodeABI();case 22:s=e.sent,e.next=28;break;case 25:return e.next=27,t.modalData.contract.methods.deposit(n).encodeABI();case 27:s=e.sent;case 28:t.sendTransaction({from:t.accounts[0],to:t.modalData.valut_address,data:s}).then((function(){t.$notify.success({title:t.$i18n.t("message.notify_title"),message:t.$i18n.t("message.notify_trans_suc"),duration:0}),t.tradeSuccess()})).catch((function(t){console.log(t,"error")}));case 29:case"end":return e.stop()}}),e)})))()},withdraw:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(Number(t.withdrawVal)>t.modalData.userCurrentValue)){e.next=3;break}return t.$notify.warning({title:t.$i18n.t("message.notify_title"),message:t.$i18n.t("message.notify_withdraw_err"),duration:2e3}),e.abrupt("return");case 3:if(n=String(t.withdrawVal/t.modalData.userCurrentValue*t.modalData.userShares),a=null,Number(t.withdrawVal)!==t.modalData.userCurrentValue){e.next=11;break}return e.next=8,t.modalData.contract.methods.withdrawAll().encodeABI();case 8:a=e.sent,e.next=14;break;case 11:return e.next=13,t.modalData.contract.methods.withdraw(n).encodeABI();case 13:a=e.sent;case 14:t.sendTransaction({from:t.accounts[0],to:t.modalData.valut_address,data:a}).then((function(){t.$notify.success({title:t.$i18n.t("message.notify_title"),message:t.$i18n.t("message.notify_trans_suc"),duration:0}),t.tradeSuccess()})).catch((function(t){console.log(t,"error")}));case 15:case"end":return e.stop()}}),e)})))()},tradeSuccess:function(){this.getVaultInfo()}}},j=N,A=(n("5c0b"),n("2877")),I=Object(A["a"])(j,u,l,!1,null,null,null),k=I.exports,C=(n("7133"),n("4897")),O=n.n(C),z=n("5530"),L=n("b2d6"),S=n.n(L),E=Object(z["a"])({message:{switch:"switch",site_name:"Udon.one",connect_wallet:"WALLET",site_title:"Heco Ecological Single Token Mining Income Optimal Platform",coin_apy:"APY",coin_total:"Total",coin_yours:"Your Deposited",coin_income:"Income",coin_earn:"Earn",coin_approve:"Approve",coin_max:"MAX",coin_deposit:"Deposit",coin_withdraw:"Withdraw",cancel:"Cancel",submit:"Submit",notify_title:"Notification",notify_trans_suc:"Transaction success!",notify_trans_fail:"Transaction failed!",notify_connect_wallet:"Connect wallet please!",notify_connect_heco:"Connect heco chain please!",notify_deposit_err:"Amount can not been more than your balance!",notify_withdraw_err:"Amount can not been more than your deposited!",loading_text:"Waitting transaction"}},S.a),$=E,Y=n("f0d9"),U=n.n(Y),R=Object(z["a"])({message:{switch:"切换",site_name:"Udon.one",connect_wallet:"连接钱包",site_title:"Heco生态单币挖矿收益最优平台",coin_apy:"年化收益率",coin_total:"锁仓量",coin_yours:"已存",coin_income:"收益",coin_earn:"存入",coin_approve:"授权",coin_max:"最大",coin_deposit:"存币",coin_withdraw:"提币",cancel:"取消",submit:"确定",notify_title:"提示",notify_trans_suc:"交易成功!",notify_trans_fail:"交易失败!",notify_connect_wallet:"请先连接钱包！",notify_connect_heco:"请确保连接到了heco链!",notify_deposit_err:"存币数量不能大于钱包余额!",notify_withdraw_err:"提币数量不能大于当前已存数量!",loading_text:"等待交易执行完成"}},U.a),V=R,Q={en:$,cn:V};a["default"].use(c.a),a["default"].component("v-gravatar",r.a),a["default"].use(i["a"]);var P=new i["a"]({locale:localStorage.getItem("lang")||"cn",messages:Q});O.a.i18n((function(t,e){return P.t(t,e)})),a["default"].config.productionTip=!1;var W=document.getElementsByTagName("head"),Z=document.createElement("meta"),B="",F="",G="Udon.one";document.title=G,document.querySelector('meta[name="keywords"]').setAttribute("content",B),document.querySelector('meta[name="description"]').setAttribute("content",F),Z.content={keywords:B,description:F},W[0].appendChild(Z),new a["default"]({render:function(t){return t(k)},i18n:P}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},6:function(t,e){},7:function(t,e){},7133:function(t,e,n){},8:function(t,e){},9:function(t,e){},"9c0c":function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.15fcc726.png"}});
//# sourceMappingURL=app.5b968201.js.map