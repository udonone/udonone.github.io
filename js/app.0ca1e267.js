(function(e){function t(t){for(var a,o,r=t[0],c=t[1],u=t[2],d=0,p=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},i={app:0},s=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0385":function(e,t,n){e.exports=n.p+"img/husd.7284453e.png"},1:function(e,t){},10:function(e,t){},11:function(e,t){},2:function(e,t){},2377:function(e,t,n){e.exports=n.p+"img/mdx.13f8a011.png"},3:function(e,t){},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=n("a925"),s=n("e06a"),o=n.n(s),r=n("5c96"),c=n.n(r),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",[a("el-col",{attrs:{span:20,offset:2}},[a("el-container",[a("el-header",{staticClass:"header"},[a("el-col",{attrs:{span:4,xs:24}},[a("div",{staticClass:"logo"},[a("img",{attrs:{src:n("cf05")}}),a("span",[e._v(e._s(e.$t("message.site_name")))])])]),a("el-col",{attrs:{span:8,xs:{span:24,offset:0},offset:12}},[a("div",{staticClass:"menu"},[a("div",{staticClass:"menu-contact"},[e.accounts.length?a("el-button",{attrs:{type:"primary"},on:{click:e.disConnectWallet}},[a("span",{staticStyle:{display:"inline-block",width:"80px",overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap"}},[e._v(e._s(e.accounts[0]))])]):a("el-button",{attrs:{type:"primary"},on:{click:e.connectWallet}},[a("span",{staticStyle:{display:"inline-block",width:"80px",overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap"}},[e._v(e._s(e.$t("message.connect_wallet")))])])],1),a("div",{staticClass:"menu-lang"},[a("el-dropdown",[a("el-button",{attrs:{type:"primary"}},[e._v(" "+e._s(e.$t("message.switch"))),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{nativeOn:{click:function(t){return e.switchLang("en")}}},[e._v("English")]),a("el-dropdown-item",{nativeOn:{click:function(t){return e.switchLang("cn")}}},[e._v("中文")])],1)],1)],1)])])],1),a("el-main",[a("h1",{staticClass:"main-title"},[e._v(" "+e._s(e.$t("message.site_title"))+" ")]),a("div",{staticClass:"main-card"},[a("el-row",{attrs:{gutter:10}},e._l(e.valut,(function(t,n){return a("el-col",{key:n,staticClass:"main-box",attrs:{span:8,xs:24}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"box-card-item"},[a("div",{staticClass:"box-card-item-header"},[a("div",{staticClass:"box-card-item-header-logo"},[a("img",{attrs:{src:t.logo_url}})]),a("div",{staticClass:"box-card-item-header-info"},[a("p",[e._v(e._s(t.name))])])]),a("div",{staticClass:"box-card-item-list"},[a("div",{staticClass:"box-card-item-list-li"},[a("span",[e._v(e._s(e.$t("message.coin_apy")))]),a("span",[e._v(e._s(t.rate?t.rate:"--")+"%")])]),a("div",{staticClass:"box-card-item-list-li"},[a("span",[e._v(e._s(e.$t("message.coin_total")))]),a("span",[e._v(" "+e._s(e._f("formatPrice")(t.totalDeposit,t.view_decimals))+" ")])]),a("div",{staticClass:"box-card-item-list-li"},[a("span",[e._v(e._s(e.$t("message.coin_yours")))]),a("span",[e._v(" "+e._s(e._f("formatPrice")(t.alreadyDeposit,t.view_decimals))+" ")])]),a("div",{staticClass:"box-card-item-list-li"},[a("span",[e._v(e._s(e.$t("message.coin_income")))]),a("span",[e._v(" "+e._s(e._f("formatPrice")(t.alreadyIncome,t.view_decimals))+" ")])])]),a("div",{staticClass:"box-card-item-btn"},[a("el-button",{attrs:{type:"primary"},on:{click:function(n){return e.openModal(t)}}},[e._v(e._s(e.$t("message.coin_earn")))])],1)])])],1)})),1)],1)]),a("el-footer",[a("div",{staticClass:"footer"},[a("div",{staticClass:"footer-contact"}),a("div",{staticClass:"footer-li"},[a("div",[e._v("© Udon.one 2021")])])])])],1)],1),a("el-dialog",{staticStyle:{"min-width":"320px"},attrs:{visible:e.visible,width:e.dialogWidth,"before-close":e.handleClose,top:"25vh"},on:{"update:visible":function(t){e.visible=t}}},[a("div",{staticClass:"dialog-header"},[a("div",{staticClass:"dialog-header-operate"},[a("span",{class:"deposit"===e.type?"active":"",on:{click:function(t){return e.switchStrategy("deposit")}}},[e._v(e._s(e.$t("message.coin_deposit")))]),a("span",{class:"withdraw"===e.type?"active":"",on:{click:function(t){return e.switchStrategy("withdraw")}}},[e._v(e._s(e.$t("message.coin_withdraw")))])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:"deposit"===e.type,expression:"type === 'deposit'"}],staticClass:"dialog-form"},[a("div",{staticClass:"dialog-form-header"},[a("span",[e._v(e._s(e.modalData.balance)+" "+e._s(e.modalData.name))])]),a("div",{staticClass:"dialog-form-input"},[a("div",{staticClass:"dialog-form-input-box"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.depositVal,expression:"depositVal"}],attrs:{type:"text",oninput:"value=value.replace(/[^\\d.]/g,'')"},domProps:{value:e.depositVal},on:{input:function(t){t.target.composing||(e.depositVal=t.target.value)}}}),a("span",{on:{click:function(t){e.depositVal=e.modalData.balance}}},[e._v(e._s(e.$t("message.coin_max")))])])]),a("div",{staticClass:"dialog-btn"},["0"!==e.modalData.allowanceInfo?a("div",{staticClass:"dialog-btn-group"},[a("button",{on:{click:e.handleClose}},[e._v(" "+e._s(e.$t("message.cancel"))+" ")]),a("button",{attrs:{disabled:e.depositDisabled},on:{click:e.deposit}},[e._v(" "+e._s(e.$t("message.submit"))+" ")])]):a("button",{on:{click:e.auth}},[e._v(e._s(e.$t("message.coin_approve"))+" "+e._s(e.modalData.name))])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:"withdraw"===e.type,expression:"type === 'withdraw'"}],staticClass:"dialog-form"},[a("div",{staticClass:"dialog-form-header"},[a("span",[e._v(e._s(e.modalData.userCurrentValue)+" "+e._s(e.modalData.name))])]),a("div",{staticClass:"dialog-form-input"},[a("div",{staticClass:"dialog-form-input-box"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.withdrawVal,expression:"withdrawVal"}],attrs:{type:"text"},domProps:{value:e.withdrawVal},on:{input:function(t){t.target.composing||(e.withdrawVal=t.target.value)}}}),a("span",{on:{click:function(t){e.withdrawVal=e.modalData.userCurrentValue}}},[e._v(e._s(e.$t("message.coin_max")))])])]),a("div",{staticClass:"dialog-btn"},["0"!==e.modalData.allowanceInfo?a("div",{staticClass:"dialog-btn-group"},[a("button",{on:{click:e.handleClose}},[e._v(" "+e._s(e.$t("message.cancel"))+" ")]),a("button",{attrs:{disabled:e.withdrawDisabled},on:{click:e.withdraw}},[e._v(" "+e._s(e.$t("message.submit"))+" ")])]):a("button",{on:{click:e.auth}},[e._v(e._s(e.$t("message.coin_approve"))+" "+e._s(e.modalData.name))])])])])],1)},l=[],d=n("b85c"),p=n("1da1"),m=(n("96cf"),n("a9e3"),n("b680"),n("1276"),n("ac1f"),n("d3b7"),n("25f0"),n("5319"),n("a15b"),n("159b"),n("b0c0"),[{inputs:[{internalType:"address",name:"_token",type:"address"},{internalType:"address",name:"_manager",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"available",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"balance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"}],name:"deposit",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"depositAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"earn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getPricePerFullShare",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getStaticInfo",outputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_account",type:"address"}],name:"getUserInfo",outputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"governance",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"manager",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"max",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"min",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_governance",type:"address"}],name:"setGovernance",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_manager",type:"address"}],name:"setManager",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_min",type:"uint256"}],name:"setMin",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"token",outputs:[{internalType:"contract IERC20",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_shares",type:"uint256"}],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"withdrawAll",outputs:[],stateMutability:"nonpayable",type:"function"}]),y=[{name:"MDX",token_address:"0x25d2e80cb6b86881fd7e07dd263fb79f4abe033c",valut_address:"0xaB3f60a03Fe0DadDeffE36BFCA925f6eC8F05163",decimals:18,view_decimals:4,logo_url:n("2377")},{name:"USDT",token_address:"0xa71edc38d189767582c38a3145b5873052c3e47a",valut_address:"0xA2Ae3080e45E209Ea8C7D505cb0F7491702ADbd4",decimals:18,view_decimals:4,logo_url:n("728d")},{name:"HBTC",token_address:"0x66a79d23e58475d2738179ca52cd0b41d73f0bea",valut_address:"0xbd90F9FFc135C48E76c9709420F82D4095130f87",decimals:18,view_decimals:8,logo_url:n("d6e0")},{name:"ETH",token_address:"0x64ff637fb478863b7468bc97d30a5bf3a428a1fd",valut_address:"0x6feaf1fb98fb837393CB6e15Ad1F3E564c030194",decimals:18,view_decimals:8,logo_url:n("88f6")},{name:"HUSD",token_address:"0x0298c2b32eae4da002a15f36fdf7615bea3da047",valut_address:"0x193f03e845Ac51921e7F7727c552CCe119B70D9d",decimals:8,view_decimals:4,logo_url:n("0385")}],f=n("2ef0"),w=n.n(f),M=n("4128"),g=n.n(M),h=n("5aac"),b=n.n(h),v=n("307c"),_=n.n(v),D=n("99e5"),T={name:"App",data:function(){return{visible:!1,type:"deposit",depositVal:"",withdrawVal:"",web3:null,valut:[],token:[],accounts:[],modalData:{balance:0,name:"",allowanceInfo:0},dialogWidth:"30%"}},computed:{depositDisabled:function(){return""===this.depositVal||0===Number(this.depositVal)},withdrawDisabled:function(){return""===this.withdrawVal||0===Number(this.withdrawVal)}},watch:{depositVal:function(e){console.log(e,"newNal")}},filters:{formatPrice:function(e,t,n){if(!e&&0!==e)return"--";e=e.toFixed(t),!n&&(n=",");var a=e.toString().split(".");return a[0]=a[0].replace(/\B(?=(\d{3})+(?!\d))/g,n),a.join(".")}},mounted:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.setDialogWidth(),window.onresize=function(){return function(){e.setDialogWidth()}()},y.forEach((function(t){e.valut.push({name:t.name,decimals:t.decimals,view_decimals:t.view_decimals,token_address:t.token_address,valut_address:t.valut_address,logo_url:t.logo_url})}));case 3:case"end":return t.stop()}}),t)})))()},methods:{setDialogWidth:function(){var e=document.body.clientWidth,t=800;this.dialogWidth=e<t?"90%":"30%"},switchLang:function(e){localStorage.setItem("lang",e),this.$i18n.locale=e},handleClose:function(){this.visible=!1,this.depositVal="",this.withdrawVal=""},openModal:function(e){this.accounts.length?(this.visible=!0,this.type="deposit",this.modalData=e,this.checkAuth()):this.$notify.warning({title:this.$i18n.t("message.notify_title"),message:this.$i18n.t("message.notify_connect_wallet"),duration:2e3})},switchStrategy:function(e){this.type=e},connectWallet:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={"custom-example":{display:{logo:"data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxyYWRpYWxHcmFkaWVudCBpZD0iYSIgY3g9IjAlIiBjeT0iNTAlIiByPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM1ZDlkZjYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMDZmZmYiLz48L3JhZGlhbEdyYWRpZW50PjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0ibTI1NiAwYzE0MS4zODQ4OTYgMCAyNTYgMTE0LjYxNTEwNCAyNTYgMjU2cy0xMTQuNjE1MTA0IDI1Ni0yNTYgMjU2LTI1Ni0xMTQuNjE1MTA0LTI1Ni0yNTYgMTE0LjYxNTEwNC0yNTYgMjU2LTI1NnoiIGZpbGw9InVybCgjYSkiLz48cGF0aCBkPSJtNjQuNjkxNzU1OCAzNy43MDg4Mjk4YzUxLjUzMjgwNzItNTAuMjc4NDM5NyAxMzUuMDgzOTk0Mi01MC4yNzg0Mzk3IDE4Ni42MTY3OTkyIDBsNi4yMDIwNTcgNi4wNTEwOTA2YzIuNTc2NjQgMi41MTM5MjE4IDIuNTc2NjQgNi41ODk3OTQ4IDAgOS4xMDM3MTc3bC0yMS4yMTU5OTggMjAuNjk5NTc1OWMtMS4yODgzMjEgMS4yNTY5NjE5LTMuMzc3MSAxLjI1Njk2MTktNC42NjU0MjEgMGwtOC41MzQ3NjYtOC4zMjcwMjA1Yy0zNS45NTA1NzMtMzUuMDc1NDk2Mi05NC4yMzc5NjktMzUuMDc1NDk2Mi0xMzAuMTg4NTQ0IDBsLTkuMTQwMDI4MiA4LjkxNzU1MTljLTEuMjg4MzIxNyAxLjI1Njk2MDktMy4zNzcxMDE2IDEuMjU2OTYwOS00LjY2NTQyMDggMGwtMjEuMjE1OTk3My0yMC42OTk1NzU5Yy0yLjU3NjY0MDMtMi41MTM5MjI5LTIuNTc2NjQwMy02LjU4OTc5NTggMC05LjEwMzcxNzd6bTIzMC40OTM0ODUyIDQyLjgwODkxMTcgMTguODgyMjc5IDE4LjQyMjcyNjJjMi41NzY2MjcgMi41MTM5MTAzIDIuNTc2NjQyIDYuNTg5NzU5My4wMDAwMzIgOS4xMDM2ODYzbC04NS4xNDE0OTggODMuMDcwMzU4Yy0yLjU3NjYyMyAyLjUxMzk0MS02Ljc1NDE4MiAyLjUxMzk2OS05LjMzMDg0LjAwMDA2Ni0uMDAwMDEtLjAwMDAxLS4wMDAwMjMtLjAwMDAyMy0uMDAwMDMzLS4wMDAwMzRsLTYwLjQyODI1Ni01OC45NTc0NTFjLS42NDQxNi0uNjI4NDgxLTEuNjg4NTUtLjYyODQ4MS0yLjMzMjcxIDAtLjAwMDAwNC4wMDAwMDQtLjAwMDAwOC4wMDAwMDctLjAwMDAxMi4wMDAwMTFsLTYwLjQyNjk2ODMgNTguOTU3NDA4Yy0yLjU3NjYxNDEgMi41MTM5NDctNi43NTQxNzQ2IDIuNTEzOTktOS4zMzA4NDA4LjAwMDA5Mi0uMDAwMDE1MS0uMDAwMDE0LS4wMDAwMzA5LS4wMDAwMjktLjAwMDA0NjctLjAwMDA0NmwtODUuMTQzODY3NzQtODMuMDcxNDYzYy0yLjU3NjYzOTI4LTIuNTEzOTIxLTIuNTc2NjM5MjgtNi41ODk3OTUgMC05LjEwMzcxNjNsMTguODgyMzEyNjQtMTguNDIyNjk1NWMyLjU3NjYzOTMtMi41MTM5MjIyIDYuNzU0MTk5My0yLjUxMzkyMjIgOS4zMzA4Mzk3IDBsNjAuNDI5MTM0NyA1OC45NTgyNzU4Yy42NDQxNjA4LjYyODQ4IDEuNjg4NTQ5NS42Mjg0OCAyLjMzMjcxMDMgMCAuMDAwMDA5NS0uMDAwMDA5LjAwMDAxODItLjAwMDAxOC4wMDAwMjc3LS4wMDAwMjVsNjAuNDI2MTA2NS01OC45NTgyNTA4YzIuNTc2NTgxLTIuNTEzOTggNi43NTQxNDItMi41MTQwNzQzIDkuMzMwODQtLjAwMDIxMDMuMDAwMDM3LjAwMDAzNTQuMDAwMDcyLjAwMDA3MDkuMDAwMTA3LjAwMDEwNjNsNjAuNDI5MDU2IDU4Ljk1ODM1NDhjLjY0NDE1OS42Mjg0NzkgMS42ODg1NDkuNjI4NDc5IDIuMzMyNzA5IDBsNjAuNDI4MDc5LTU4Ljk1NzE5MjVjMi41NzY2NC0yLjUxMzkyMzEgNi43NTQxOTktMi41MTM5MjMxIDkuMzMwODM5IDB6IiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk4IDE2MCkiLz48L2c+PC9zdmc+",name:"WalletConnect",description:"Scan with WalletConnect to connect"},package:_.a,options:{rpc:{128:"https://http-mainnet-node.huobichain.com"},chainId:128},connector:function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new t(n),e.next=3,a.enable();case 3:return e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()}},e.web3Modal=new b.a({network:"mainnet",cacheProvider:!0,providerOptions:n}),t.next=4,e.web3Modal.connect();case 4:return e.provider=t.sent,e.web3=new D(e.provider),t.next=8,e.web3.eth.net.getId();case 8:if(a=t.sent,128==a){t.next=13;break}return e.disConnectWallet(),e.$notify.warning({title:e.$i18n.t("message.notify_title"),message:e.$i18n.t("message.notify_connect_heco"),duration:2e3}),t.abrupt("return");case 13:return e.getContract(),t.t0=e,t.next=17,e.web3.eth.getAccounts();case 17:t.t1=t.sent,t.t0.pvdAccountsChanged.call(t.t0,t.t1),e.provider.on("accountsChanged",e.pvdAccountsChanged),e.provider.on("chainChanged",e.pvdChainChanged),e.provider.on("connect",e.pvdConnect),e.provider.on("disconnect",e.pvdDisconnect),e.interval=setInterval(Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getVaultInfo();case 2:case"end":return t.stop()}}),t)}))),1e4);case 24:case"end":return t.stop()}}),t)})))()},disConnectWallet:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:clearInterval(e.interval),e.accounts.pop(),e.valut.forEach((function(t){y.forEach(function(){var n=Object(p["a"])(regeneratorRuntime.mark((function n(a){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:a.name===t.name&&(t.totalDeposit=0,t.rate=0,t.alreadyDeposit=0,t.userShares=0,t.balance=0,e.$forceUpdate());case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())})),e.web3Modal.clearCachedProvider(),e.web3Modal=null,e.provider=null,e.web3=null;case 7:case"end":return t.stop()}}),t)})))()},pvdAccountsChanged:function(e){this.web3&&(this.accounts=e,this.getVaultInfo())},pvdChainChanged:function(e){128!=e&&this.web3&&(this.disConnectWallet(),this.$notify.warning({title:this.$i18n.t("message.notify_title"),message:this.$i18n.t("message.notify_connect_heco"),duration:2e3}))},pvdDisconnect:function(e){this.web3&&(console.log("disconnect!"),console.log(e))},pvdConnect:function(e){this.web3&&(console.log("connect!"),console.log(e))},getContract:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:y.forEach((function(t){e.valut.forEach((function(n){t.name===n.name&&(n.contract=new e.web3.eth.Contract(m,n.valut_address),n.tokenContract=new e.web3.eth.Contract(m,n.token_address))}))}));case 1:case"end":return t.stop()}}),t)})))()},getVaultInfo:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var n,a,i,s,o,r,c,u,l,p,m,f,M,h,b;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=Object(d["a"])(e.valut),t.prev=1,n.s();case 3:if((a=n.n()).done){t.next=47;break}i=a.value,s=Object(d["a"])(y),t.prev=6,s.s();case 8:if((o=s.n()).done){t.next=37;break}if(r=o.value,!e.web3){t.next=35;break}if(r.name!==i.name){t.next=35;break}return t.next=14,e.callMethod(i.tokenContract.methods.balanceOf(e.accounts[0]));case 14:return c=t.sent,i.balance=w.a.floor(c/Math.pow(10,i.decimals),i.view_decimals),t.next=18,e.callMethod(i.contract.methods.getStaticInfo());case 18:return u=t.sent,l=u[1]/Math.pow(10,i.decimals),p=u[2]/Math.pow(10,18),i.totalDeposit=w.a.floor(l,i.view_decimals),i.rate=new g.a(parseFloat(p).toFixed(4)).mul(new g.a(100)),t.next=25,e.callMethod(i.contract.methods.getUserInfo(e.accounts[0]));case 25:m=t.sent,f=m[0],M=m[1],h=m[2],b=m[3],i.userShares=f,i.alreadyDeposit=M/Math.pow(10,i.decimals),i.alreadyIncome=b/Math.pow(10,i.decimals),i.userCurrentValue=h/Math.pow(10,i.decimals),e.$forceUpdate();case 35:t.next=8;break;case 37:t.next=42;break;case 39:t.prev=39,t.t0=t["catch"](6),s.e(t.t0);case 42:return t.prev=42,s.f(),t.finish(42);case 45:t.next=3;break;case 47:t.next=52;break;case 49:t.prev=49,t.t1=t["catch"](1),n.e(t.t1);case 52:return t.prev=52,n.f(),t.finish(52);case 55:case"end":return t.stop()}}),t,null,[[1,49,52,55],[6,39,42,45]])})))()},callMethod:function(e){return Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.call();case 3:return t.abrupt("return",t.sent);case 6:return t.prev=6,t.t0=t["catch"](0),t.next=10,e.call();case 10:return t.abrupt("return",t.sent);case 11:case"end":return t.stop()}}),t,null,[[0,6]])})))()},callMethod2:function(e,t){return Object(p["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.call(null,t);case 3:return n.abrupt("return",n.sent);case 6:return n.prev=6,n.t0=n["catch"](0),n.next=10,e.call(null,t);case 10:return n.abrupt("return",n.sent);case 11:case"end":return n.stop()}}),n,null,[[0,6]])})))()},sendTransaction:function(e){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.$loading({lock:!0,text:t.$i18n.t("message.loading_text"),spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.5)"}),n.abrupt("return",new Promise((function(n,i){t.web3.eth.sendTransaction(e).on("confirmation",(function(e,t){5==e&&(a.close(),console.log(t),n())})).on("error",(function(e){a.close(),this.$notify.error({title:this.$i18n.t("message.notify_title"),message:this.$i18n.t("message.notify_trans_fail"),duration:0}),i(e)}))})));case 2:case"end":return n.stop()}}),n)})))()},checkAuth:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.modalData.tokenContract.methods.allowance(e.accounts[0],e.modalData.valut_address).call();case 2:n=t.sent,e.$set(e.modalData,"allowanceInfo",n);case 4:case"end":return t.stop()}}),t)})))()},auth:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.modalData.tokenContract.methods.approve(e.modalData.valut_address,"115792089237316000000000000000000000000000000000000000000000000000000000000000").encodeABI();case 2:n=t.sent,e.sendTransaction({from:e.accounts[0],to:e.modalData.token_address,data:n}).then((function(){e.checkAuth()})).catch((function(e){console.log(e)}));case 4:case"end":return t.stop()}}),t)})))()},deposit:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(Number(e.depositVal)>e.modalData.balance)){t.next=3;break}return e.$notify.warning({title:e.$i18n.t("message.notify_title"),message:e.$i18n.t("message.notify_deposit_err"),duration:2e3}),t.abrupt("return");case 3:if(n=String(e.depositVal*Math.pow(10,e.modalData.decimals)),a=null,Number(e.depositVal)!==e.modalData.balance){t.next=11;break}return t.next=8,e.modalData.contract.methods.depositAll().encodeABI();case 8:a=t.sent,t.next=14;break;case 11:return t.next=13,e.modalData.contract.methods.deposit(n).encodeABI();case 13:a=t.sent;case 14:e.sendTransaction({from:e.accounts[0],to:e.modalData.valut_address,data:a}).then((function(){e.$notify.success({title:e.$i18n.t("message.notify_title"),message:e.$i18n.t("message.notify_trans_suc"),duration:0}),e.tradeSuccess()})).catch((function(e){console.log(e,"error")}));case 15:case"end":return t.stop()}}),t)})))()},withdraw:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(Number(e.withdrawVal)>e.modalData.userCurrentValue)){t.next=3;break}return e.$notify.warning({title:e.$i18n.t("message.notify_title"),message:e.$i18n.t("message.notify_withdraw_err"),duration:2e3}),t.abrupt("return");case 3:if(n=String(e.withdrawVal/e.modalData.userCurrentValue*e.modalData.userShares),a=null,Number(e.withdrawVal)!==e.modalData.userCurrentValue){t.next=11;break}return t.next=8,e.modalData.contract.methods.withdrawAll().encodeABI();case 8:a=t.sent,t.next=14;break;case 11:return t.next=13,e.modalData.contract.methods.withdraw(n).encodeABI();case 13:a=t.sent;case 14:e.sendTransaction({from:e.accounts[0],to:e.modalData.valut_address,data:a}).then((function(){e.$notify.success({title:e.$i18n.t("message.notify_title"),message:e.$i18n.t("message.notify_trans_suc"),duration:0}),e.tradeSuccess()})).catch((function(e){console.log(e,"error")}));case 15:case"end":return t.stop()}}),t)})))()},tradeSuccess:function(){this.getVaultInfo()}}},N=T,x=(n("5c0b"),n("2877")),j=Object(x["a"])(N,u,l,!1,null,null,null),A=j.exports,I=(n("7133"),n("4897")),k=n.n(I),C=n("5530"),O=n("b2d6"),z=n.n(O),L=Object(C["a"])({message:{switch:"switch",site_name:"Udon.one",connect_wallet:"WALLET",site_title:"Heco Ecological Single Token Mining Income Optimal Platform",coin_apy:"APY",coin_total:"Total",coin_yours:"Your Deposited",coin_income:"Income",coin_earn:"Earn",coin_approve:"Approve",coin_max:"MAX",coin_deposit:"Deposit",coin_withdraw:"Withdraw",cancel:"Cancel",submit:"Submit",notify_title:"Notification",notify_trans_suc:"Transaction success!",notify_trans_fail:"Transaction failed!",notify_connect_wallet:"Connect wallet please!",notify_connect_heco:"Connect heco chain please!",notify_deposit_err:"Amount can not been more than your balance!",notify_withdraw_err:"Amount can not been more than your deposited!",loading_text:"Waitting transaction"}},z.a),S=L,E=n("f0d9"),Y=n.n(E),$=Object(C["a"])({message:{switch:"切换",site_name:"Udon.one",connect_wallet:"连接钱包",site_title:"Heco生态单币挖矿收益最优平台",coin_apy:"年化收益率",coin_total:"锁仓量",coin_yours:"已存",coin_income:"收益",coin_earn:"存入",coin_approve:"授权",coin_max:"最大",coin_deposit:"存币",coin_withdraw:"提币",cancel:"取消",submit:"确定",notify_title:"提示",notify_trans_suc:"交易成功!",notify_trans_fail:"交易失败!",notify_connect_wallet:"请先连接钱包！",notify_connect_heco:"请确保连接到了heco链!",notify_deposit_err:"存币数量不能大于钱包余额!",notify_withdraw_err:"提币数量不能大于当前已存数量!",loading_text:"等待交易执行完成"}},Y.a),U=$,V={en:S,cn:U};a["default"].use(c.a),a["default"].component("v-gravatar",o.a),a["default"].use(i["a"]);var R=new i["a"]({locale:localStorage.getItem("lang")||"cn",messages:V});k.a.i18n((function(e,t){return R.t(e,t)})),a["default"].config.productionTip=!1;var Q=document.getElementsByTagName("head"),P=document.createElement("meta"),W="",Z="",B="Udon.one";document.title=B,document.querySelector('meta[name="keywords"]').setAttribute("content",W),document.querySelector('meta[name="description"]').setAttribute("content",Z),P.content={keywords:W,description:Z},Q[0].appendChild(P),new a["default"]({render:function(e){return e(A)},i18n:R}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},6:function(e,t){},7:function(e,t){},7133:function(e,t,n){},"728d":function(e,t,n){e.exports=n.p+"img/usdt.3d9af5ce.png"},8:function(e,t){},"88f6":function(e,t,n){e.exports=n.p+"img/eth.b3459ea6.png"},9:function(e,t){},"9c0c":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.15fcc726.png"},d6e0:function(e,t,n){e.exports=n.p+"img/hbtc.11a4a94f.png"}});
//# sourceMappingURL=app.0ca1e267.js.map