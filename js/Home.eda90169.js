(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Home"],{"029c":function(t,a,s){},"0eba":function(t,a,s){"use strict";s("90ae")},2909:function(t,a,s){"use strict";s.d(a,"a",(function(){return r}));var e=s("6b75");function i(t){if(Array.isArray(t))return Object(e["a"])(t)}s("a4d3"),s("e01a"),s("d3b7"),s("d28b"),s("3ca3"),s("ddb0"),s("a630");function n(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var c=s("06c5");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t){return i(t)||n(t)||Object(c["a"])(t)||o()}},"3f08":function(t,a,s){},"4ae7":function(t,a,s){"use strict";s("3f08")},"4c5e":function(t,a,s){var e={"./bounty_h5_en.jpg":"681e","./bounty_h5_zh-CN.jpg":"4fca","./bounty_pc_en.jpg":"3491","./bounty_pc_zh-CN.jpg":"e33c","./bsc_h5-home_nav.jpg":"ac78","./buyback_h5_en_Bsc.jpg":"7279","./buyback_h5_en_Heco.jpg":"7f9b","./buyback_h5_zh-CN_Bsc.jpg":"3d78","./buyback_h5_zh-CN_Heco.jpg":"6b35","./buyback_pc_en_Bsc.jpg":"9c9a","./buyback_pc_en_Heco.jpg":"4eb4","./buyback_pc_zh-CN_Bsc.jpg":"59a5","./buyback_pc_zh-CN_Heco.jpg":"1771","./h5_en_Bsc.jpg":"4c7d","./h5_en_Heco.jpg":"bab6","./h5_zh-CN_Bsc.jpg":"a3ca","./h5_zh-CN_Heco.jpg":"dda2","./pc_en_Bsc.jpg":"c560","./pc_en_Heco.jpg":"037b","./pc_zh-CN_Bsc.jpg":"e4a3","./pc_zh-CN_Heco.jpg":"647d"};function i(t){var a=n(t);return s(a)}function n(t){if(!s.o(e,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e[t]}i.keys=function(){return Object.keys(e)},i.resolve=n,t.exports=i,i.id="4c5e"},"7bc6":function(t,a,s){"use strict";s("029c")},"8f0f":function(t,a,s){},"90ae":function(t,a,s){},a434:function(t,a,s){"use strict";var e=s("23e7"),i=s("23cb"),n=s("a691"),c=s("50c4"),o=s("7b0b"),r=s("65f0"),l=s("8418"),_=s("1dde"),d=_("splice"),u=Math.max,m=Math.min,p=9007199254740991,h="Maximum allowed length exceeded";e({target:"Array",proto:!0,forced:!d},{splice:function(t,a){var s,e,_,d,C,v,f=o(this),b=c(f.length),g=i(t,b),y=arguments.length;if(0===y?s=e=0:1===y?(s=0,e=b-g):(s=y-2,e=m(u(n(a),0),b-g)),b+s-e>p)throw TypeError(h);for(_=r(f,e),d=0;d<e;d++)C=g+d,C in f&&l(_,d,f[C]);if(_.length=e,s<e){for(d=g;d<b-e;d++)C=d+e,v=d+s,C in f?f[v]=f[C]:delete f[v];for(d=b;d>b-e+s;d--)delete f[d-1]}else if(s>e)for(d=b-e;d>g;d--)C=d+e-1,v=d+s-1,C in f?f[v]=f[C]:delete f[v];for(d=0;d<s;d++)f[d+g]=arguments[d+2];return f.length=b-e+s,_}})},ae94:function(t,a,s){"use strict";s("8f0f")},b3d7:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home",class:[t.chainName,t.getLanguage]},[e("Carousel"),e("div",{staticClass:"home__assets"},[e("div",{staticClass:"container container-color"},[e("div",{staticClass:"new-container"},[e("p",{staticClass:"home__assets-amount"},[e("span",{staticClass:"amount-icon"}),e("span",[t._v(" "+t._s(t.$t("MDXtotals"))+" "+t._s(t.onresizeIsPC?"":"(USDT)")+" ")]),e("CountUp",{staticClass:"amount-number",attrs:{endVal:Number(t.homeData.heco_total_tvl)+Number(t.homeData.bsc_total_tvl)||0}}),t.onresizeIsPC?e("span",{staticClass:"amount-unit"},[t._v(" USDT ")]):t._e()],1),e("div",{staticClass:"home-info-pc"},[e("div",{staticClass:"h-info-item"},[e("img",{staticClass:"icon-img",attrs:{src:s("04a2")}}),e("span",{staticClass:"hi-name"},[t._v(" "+t._s(t.$t("MDXtotal")))]),e("span",{staticClass:"hi-num"},[e("CountUp",{staticClass:"amount-number",attrs:{endVal:Number(t.homeData.heco_total_tvl)||0}})],1),e("span",{staticClass:"hi-name"},[t._v("USDT")])]),e("div",{staticClass:"h-info-item"},[e("img",{staticClass:"icon-img",attrs:{src:s("d3b5")}}),e("span",{staticClass:"hi-name"},[t._v(" "+t._s(t.$t("MDXtotal")))]),e("span",{staticClass:"hi-num"},[e("CountUp",{staticClass:"amount-number",attrs:{endVal:Number(t.homeData.bsc_total_tvl)||0}})],1),e("span",{staticClass:"hi-name"},[t._v("USDT")])])]),e("div",{staticClass:"home-info-h5"},[e("div",{staticClass:"h-info-item"},[e("p",{staticClass:"hi-name"},[e("img",{staticClass:"icon-img",attrs:{src:s("04a2")}}),e("span",[t._v(t._s(t.$t("MDXtotal")))])]),e("p",{staticClass:"hi-num"},[t._v("$"),e("CountUp",{attrs:{endVal:Number(t.homeData.heco_total_tvl)||0}})],1)]),e("p",{staticClass:"line"}),e("div",{staticClass:"h-info-item"},[e("p",{staticClass:"hi-name"},[e("img",{staticClass:"icon-img",attrs:{src:s("d3b5")}}),e("span",[t._v(t._s(t.$t("MDXtotal")))])]),e("p",{staticClass:"hi-num"},[t._v("$"),e("CountUp",{attrs:{endVal:Number(t.homeData.bsc_total_tvl)||0}})],1)])]),e("div",{staticClass:"home__assets-price-card"},[e("div",{staticClass:"price__card-item no-margin"},[e("div",{staticClass:"card__item-key"},[t._v(t._s(t.$t("CurrentMDEXPrice")))]),e("div",{staticClass:"card__item-value"},[t._v(" $"+t._s(t.currentPrice)+" ")])]),e("div",{staticClass:"price__card-item no-margin"},[e("div",{staticClass:"card__item-key"},[t._v(t._s(t.$t("Yourbalance")))]),e("div",{staticClass:"card__item-value"},[e("CountUp",{attrs:{endVal:t.balance||0}})],1)]),e("div",{staticClass:"price__card-item"},[e("div",{staticClass:"card__item-key"},[t._v(" "+t._s(t.$t("PendingAirdropRewards"))+"(HECO&BSC) ")]),e("div",{staticClass:"card__item-value"},[t._v(" $"),e("CountUp",{attrs:{endVal:t.allChainData.reward_amount||0,options:t.options}})],1)]),e("div",{staticClass:"price__card-item"},[e("div",{staticClass:"card__item-key"},[t._v(" "+t._s(t.$t("AmountToBeRepurchased"))+"(HECO&BSC)"),e("el-tooltip",{attrs:{effect:"dark",content:"当待回购金额小于500WUSDT时,将暂停回购，用于燃烧销毁",placement:t.isPC?"right-end":"bottom","popper-class":"halving"}},[e("img",{staticClass:"tist",attrs:{src:t.tist,alt:""}})])],1),e("div",{staticClass:"card__item-value"},[t._v(" $"),e("CountUp",{attrs:{endVal:t.allChainData.repurch_amount||0,options:t.options}})],1)]),e("div",{staticClass:"price__card-item"},[e("div",{staticClass:"card__item-key"},[t._v(t._s(t.$t("TotalRepurchaseAndDestructionQuantity"))+"(HECO&BSC)")]),e("div",{staticClass:"card__item-value"},[e("CountUp",{attrs:{endVal:t.allChainData.destroy_mdx||0}})],1)]),e("div",{staticClass:"price__card-item time"},[e("div",{staticClass:"card__item-key"},[t._v(" "+t._s(t.$t("Countdown"))+" "),e("el-tooltip",{attrs:{effect:"dark",content:t.$t("halvingDescription"),placement:t.isPC?"right-end":"bottom","popper-class":"halving"}},[e("img",{staticClass:"tist",attrs:{src:t.tist,alt:""}})])],1),e("div",{staticClass:"card__item-value new-item-value"},[e("strong",[t._v(t._s(t.$t("approximately")))]),e("span",[t._v(t._s(t.formatCountdownDay.d))]),t._v(":"),e("span",[t._v(t._s(t.formatCountdownDay.h))]),t._v(":"),e("span",[t._v(t._s(t.formatCountdownDay.m))]),t._v(":"),e("span",[t._v(t._s(t.formatCountdownDay.s))])])])]),e("div",{staticClass:"home-input__wrap"},[e("div",{staticClass:"input-wrap"},[e("header",{staticClass:"borad header-img "},[e("div",{staticClass:"name-icom"},[e("img",{staticClass:"icon-img",attrs:{src:s("0095")}}),e("span",[t._v(t._s(t.$t("Boardroom")))])]),e("router-link",{attrs:{to:"/boardroom"}},[t._v(" "+t._s(t.$t("seeMore"))+" "),e("img",{staticClass:"more",attrs:{src:s("69f5")}})])],1),e("table",{attrs:{border:"0",cellpadding:"0",cellspacing:"0"}},[e("thead",[e("th",{staticClass:"al"},[t._v(t._s(t.$t("Staked")))]),e("th",{staticClass:"jar"},[t._v(t._s(t.$t("Earned")))]),e("th",{staticClass:"ar"},[t._v(t._s(t.$t("ApyTopic.apy")))]),e("th",{staticClass:"operation"},[t._v(t._s(t.$t("operation")))])]),e("tbody",t._l(t.boardRoomData,(function(a){return e("tr",{key:a.earnedToken+a.pid},[e("td",{staticClass:"al"},[t._v(t._s(a.pool_name))]),e("td",[t._v(t._s(a.earnedToken))]),e("td",{staticClass:"art"},[e("CountUp",{attrs:{endVal:a.pool_apy>0?100*Math.pow(1+a.pool_apy/365/100,365):0}}),t._v("% ")],1),e("td",{staticClass:"operation-ar"},[e("div",{staticClass:"oper-div"},[1!=t.chainId?e("router-link",{attrs:{to:"/pool/boardroom/"+a.earnedToken.toLowerCase()+"/"+a.pid}},[t._v(t._s(t.$t("Stakeds"))+" ")]):e("span",[t._v(t._s(t.$t("Stakeds")))]),e("span",[t._v("|")]),e("a",{attrs:{href:t.globalGetTokenConfig(a),target:"_blank"}},[t._v(t._s(t.$t("transactions")))])],1)])])})),0),0==t.boardRoomData.length?e("p",{staticClass:"emptyData"},[t._v(t._s(t.$t("empptyData")))]):t._e()])]),e("div",{staticClass:"input-wrap"},[e("header",{staticClass:"liuq header-img"},[e("div",{staticClass:"name-icom"},[e("img",{staticClass:"icon-img",attrs:{src:s("bace")}}),e("span",[t._v(t._s(t.$t("Pool")))])]),e("router-link",{attrs:{to:"/liquidity"}},[t._v(t._s(t.$t("seeMore"))+" "),e("img",{staticClass:"more",attrs:{src:s("69f5")}})])],1),e("table",{attrs:{border:"0",cellpadding:"0",cellspacing:"0"}},[e("thead",[e("th",{staticClass:"al"},[t._v(t._s(t.$t("Staked")))]),e("th",{staticClass:"jar"},[t._v(t._s(t.$t("Earned")))]),e("th",{staticClass:"ar"},[t._v(t._s(t.$t("ApyTopic.apr")))]),e("th",{staticClass:"operation"},[t._v(t._s(t.$t("operation")))])]),e("tbody",t._l(t.airdropList,(function(a){return e("tr",{key:a.pool_name},[e("td",{staticClass:"al"},[t._v(t._s(a.base_name))]),e("td",[t._v("MDX")]),e("td",{staticClass:"art"},[e("CountUp",{attrs:{endVal:a.pool_apy>0?365*a.pool_apy:0}}),t._v("% ")],1),e("td",{staticClass:"operation-ar"},[e("div",{staticClass:"oper-div"},[1!=t.chainId?e("router-link",{attrs:{to:"pool/liquidity/mdx/"+a.pid}},[t._v(t._s(t.$t("Stakeds")))]):e("span",[t._v(t._s(t.$t("Stakeds")))]),e("span",[t._v("|")]),e("a",{attrs:{href:t.globalGetTokenConfig(a),target:"_blank"}},[t._v(t._s(t.$t("transactions")))])],1)])])})),0),0==t.airdropList.length?e("p",{staticClass:"emptyData"},[t._v(t._s(t.$t("empptyData")))]):t._e()])])]),e("div",{staticClass:"home-input__current"},[e("div",{staticClass:"current"},[e("p",{staticClass:"desc"},[t._v(t._s(t.$t("CurrentLiquidity"))+"（HECO&BSC）")]),e("p",{staticClass:"amount"},[e("CountUp",{attrs:{endVal:t.allChainData.mining_supply||0}})],1)]),e("div",{staticClass:"current2 current"},[e("p",{staticClass:"desc"},[t._v(t._s(t.$t("MarketCap"))+"（HECO&BSC）")]),e("p",{staticClass:"amount"},[t._v(" $"),e("CountUp",{attrs:{endVal:t.allChainData.mining_market||0}})],1)])]),e("div",{staticClass:"home-count__wrap"},[t.onresizeIsPC?e("div",{staticClass:"home-count__warp"},[e("div",{staticClass:"count-wrap"},[e("div",{staticClass:"top count margin-right"},[e("span",{staticClass:"desc"},[t._v(" "+t._s(t.$t("PlatformTransactionVolume"))+" （HECO&BSC） ")]),e("span",{staticClass:"amount"},[t._v(" $"),e("CountUp",{attrs:{endVal:t.allChainData.volume_24hr||0}})],1)]),e("div",{staticClass:"top count margin-left"},[e("span",{staticClass:"desc"},[t._v(t._s(t.$t("HandlingFee"))+"（HECO&BSC）")]),e("span",{staticClass:"amount"},[t._v(" $"),e("CountUp",{attrs:{endVal:t.allChainData.fee_24hr||0}})],1)])]),e("div",{staticClass:"count-wrap"},[e("div",{staticClass:"down count margin-right"},[e("span",{staticClass:"desc"},[t._v(" "+t._s(t.$t("TotalAirdropRewards"))+"（HECO&BSC） ")]),e("span",{staticClass:"amount"},[t._v(" $"),e("CountUp",{attrs:{endVal:t.allChainData.boardroom_rewards||0}})],1)]),e("div",{staticClass:"down count margin-left"},[e("span",{staticClass:"desc"},[t._v(t._s(t.$t("RepurchaseAmount"))+"（HECO&BSC）")]),e("span",{staticClass:"amount"},[t._v(" $"),e("CountUp",{attrs:{endVal:t.allChainData.total_repurch||0}})],1)])])]):t._e(),t.isMobile?e("div",{staticClass:"home-count__warp"},[e("div",{staticClass:"count"},[e("span",{staticClass:"desc"},[t._v(" "+t._s(t.$t("PlatformTransactionVolume"))),e("el-tooltip",{attrs:{effect:"dark",content:"HECO&BSC",placement:t.isPC?"right-end":"bottom","popper-class":"halving"}},[e("img",{staticClass:"tist",attrs:{src:t.tist,alt:""}})])],1),e("span",{staticClass:"amount"},[t._v(" $"),e("CountUp",{attrs:{endVal:t.allChainData.volume_24hr||0}})],1)]),e("div",{staticClass:"count"},[e("span",{staticClass:"desc"},[t._v(t._s(t.$t("RepurchaseAmount"))),e("el-tooltip",{attrs:{effect:"dark",content:"HECO&BSC",placement:t.isPC?"right-end":"bottom","popper-class":"halving"}},[e("img",{staticClass:"tist",attrs:{src:t.tist,alt:""}})])],1),e("span",{staticClass:"amount"},[t._v(" $"),e("CountUp",{attrs:{endVal:t.allChainData.total_repurch||0}})],1)]),e("div",{staticClass:"count"},[e("span",{staticClass:"desc"},[t._v(" "+t._s(t.$t("TotalAirdropRewards"))),e("el-tooltip",{attrs:{effect:"dark",content:"HECO&BSC",placement:t.isPC?"right-end":"bottom","popper-class":"halving"}},[e("img",{staticClass:"tist",attrs:{src:t.tist,alt:""}})])],1),e("span",{staticClass:"amount"},[t._v(" $"),e("CountUp",{attrs:{endVal:t.allChainData.boardroom_rewards||0}})],1)]),e("div",{staticClass:"count"},[e("span",{staticClass:"desc"},[t._v(t._s(t.$t("HandlingFee"))),e("el-tooltip",{attrs:{effect:"dark",content:"HECO&BSC",placement:t.isPC?"right-end":"bottom","popper-class":"halving"}},[e("img",{staticClass:"tist",attrs:{src:t.tist,alt:""}})])],1),e("span",{staticClass:"amount"},[t._v(" $"),e("CountUp",{attrs:{endVal:t.allChainData.fee_24hr||0}})],1)])]):t._e()])])])]),e("sponsor")],1)},i=[],n=s("ade3"),c=s("2909"),o=(s("466d"),s("ac1f"),s("fb6a"),s("a434"),s("ed08")),r=s("2a5e"),l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:t.chainName},[e("div",{staticClass:"home-using"},[e("div",{staticClass:"container"},[e("div",{staticClass:"home-using__title"},[t._v(t._s(t.$t("MDXUsageScenarios")))]),e("div",{staticClass:"home-using__content"},[e("div",{staticClass:"home-using__item"},[e("div",{staticClass:"home-using__item-icon icon-1"}),e("div",{staticClass:"home-using__item-title"},[t._v(t._s(t.$t("Repurchase")))]),e("div",{staticClass:"home-using__item-describe"},[t._v(" "+t._s(t.$t("RepurchaseDesc"))+" ")])]),e("div",{staticClass:"home-using__item"},[e("div",{staticClass:"home-using__item-icon icon-2"}),e("div",{staticClass:"home-using__item-title"},[t._v(t._s(t.$t("airdrop")))]),e("div",{staticClass:"home-using__item-describe"},[t._v(t._s(t.$t("HT")))])]),e("div",{staticClass:"home-using__item"},[e("div",{staticClass:"home-using__item-icon icon-3"}),e("div",{staticClass:"home-using__item-title"},[t._v("Dao")]),e("div",{staticClass:"home-using__item-describe"},[t._v(t._s(t.$t("DaoDesc")))])])])])]),e("div",{staticClass:"home-mechanism home-mechanism-h5"},[e("div",{staticClass:"container"},[e("div",{staticClass:"home-mechanism__title"},[t._v(t._s(t.$t("MDXCheck")))]),e("div",{staticClass:"home-mechanism__content"},[e("div",{staticClass:"home-mechanism__item"},[e("a",{attrs:{href:t.fairyproof,target:"_blank"}},[e("img",{staticClass:"home-mechanism__item-logo",attrs:{src:s("295e")}})])]),e("div",{staticClass:"home-mechanism__item"},[e("a",{attrs:{href:t.certik,target:"_blank"}},[e("img",{staticClass:"home-mechanism__item-logo",attrs:{src:s("c04d")}})])]),e("div",{staticClass:"home-mechanism__item"},[e("a",{attrs:{href:t.slowmist,target:"_blank"}},[e("img",{staticClass:"home-mechanism__item-logo",attrs:{src:s("3790")}})])])])])]),e("div",{staticClass:"home-mechanism"},[e("div",{staticClass:"container"},[e("div",{staticClass:"home-mechanism__title"},[t._v(t._s(t.$t("CooperativePartner")))]),e("div",{staticClass:"home-mechanism__content"},[e("div",{staticClass:"home__item_list_new"},[e("a",{attrs:{href:t.coinmarketcap,target:"_blank"}},[e("img",{staticClass:"home-mechanism__item-logo",attrs:{src:s("4baa")}})])]),t._l(t.imgUrl,(function(t,a){return e("div",{key:a,staticClass:"home__item_list_new"},[e("img",{staticClass:"home-mechanism__item-logo",attrs:{src:t}})])}))],2)])])])},_=[],d={data:function(){return{imgUrl:[s("deb1"),s("b700"),s("86e3"),s("c59c"),s("e493"),s("9bb7"),s("5f94"),s("e0d7"),s("80b4"),s("6232"),s("ea93"),s("a34d"),s("4772"),s("153d"),s("d36a")]}},computed:{coinmarketcap:function(){return"en"==this.$store.state.language?"https://coinmarketcap.com/exchanges/mdex/":"https://coinmarketcap.com/zh/exchanges/mdex/"},certik:function(){var t="Bsc"==this.chainName?"certik_bsc":"certik";return"https://mdex.com/".concat(t,".pdf")},fairyproof:function(){var t="Bsc"==this.chainName?"fairyproof_bsc":"fairyproof";return"https://mdex.com/".concat(t,".pdf")},slowmist:function(){var t="Bsc"==this.chainName?"slowmist_bsc":"slowmist";return"https://mdex.com/".concat(t,".pdf")},chainId:function(){return this.$store.getters.chainId}}},u=d,m=(s("4ae7"),s("2877")),p=Object(m["a"])(u,l,_,!1,null,"7c24ec8e",null),h=p.exports,C=s("aa95"),v=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"title-banner"},[s("el-carousel",{attrs:{interval:5e3,arrow:t.isPC&&t.number>1?"always":"never","indicator-position":"none",autoplay:!0}},t._l(t.number,(function(a){return s("el-carousel-item",{key:"Carouserl"+a},[s("div",{staticClass:"pic",style:{backgroundImage:"url("+t.getImg(a)+")"},on:{click:function(){return t.jumpHandle(a)}}})])})),1)],1)},f=[],b={name:"Carouserl",data:function(){return{number:2,scroll:""}},computed:{},mounted:function(){},methods:{stitchingPic:function(){var t="";return this.isPC?t+="pc_":t+="h5_","zh-CN"===this.getLanguage?t+="zh-CN_":t+="en_",t+=this.chainName,t},getImg:function(t){var a={1:{"pc_zh-CN_Heco":"buyback_pc_zh-CN_Heco","pc_zh-CN_Bsc":"buyback_pc_zh-CN_Bsc",pc_en_Heco:"buyback_pc_en_Heco",pc_en_Bsc:"buyback_pc_en_Bsc","h5_zh-CN_Heco":"buyback_h5_zh-CN_Heco","h5_zh-CN_Bsc":"buyback_h5_zh-CN_Bsc",h5_en_Heco:"buyback_h5_en_Heco",h5_en_Bsc:"buyback_h5_en_Bsc"},2:{"pc_zh-CN_Heco":"pc_zh-CN_Heco","pc_zh-CN_Bsc":"pc_zh-CN_Bsc",pc_en_Heco:"pc_en_Heco",pc_en_Bsc:"pc_en_Bsc","h5_zh-CN_Heco":"h5_zh-CN_Heco","h5_zh-CN_Bsc":"h5_zh-CN_Bsc",h5_en_Heco:"h5_en_Heco",h5_en_Bsc:"h5_en_Bsc"}};return s("4c5e")("./".concat(a[t][this.stitchingPic(t)],".jpg"))},jumpHandle:function(t){var a={2:"https://www.heco123.com/".concat("zh-CN"===this.getLanguage?"zh-cn":"en-us","/vote-campaignc")};2===t&&"Heco"===this.chainName&&window.open(a[t]),1===t&&this.$router.push("/buyback")}}},g=b,y=(s("7bc6"),Object(m["a"])(g,v,f,!1,null,"6b28b57c",null)),$=y.exports,k=null,w=null,D=Object(n["a"])({name:"Home",components:{TitleBanner:C["a"],sponsor:h,Carousel:$},data:function(){return{tist:s("79e5"),options:{decimalPlaces:0},countdown:parseInt((new Date("2021/09/03 20:00:00 GMT+08:00").getTime()-(new Date).getTime())/1e3),liquidityApys:{},onresizeIsPC:!navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)}},$computed:{bnp:"bnp"},methods:{startCountdown:function(){var t=this;k=setInterval((function(){t.countdown-=1,t.countdown<=0&&clearInterval(k)}),1e3)},menu:function(){var t=document.documentElement.scrollTop||document.body.scrollTop;this.navStatus!=t>0&&this.$store.commit("setNavStatus",!this.navStatus)}},destroyed:function(){clearInterval(k),clearInterval(w)},watch:{countdown:function(){clearInterval(k),this.startCountdown()}},mounted:function(){var t=this;this.isMobile&&(this.menu(),window.addEventListener("scroll",this.menu)),this.startCountdown(),window.onresize=function(){t.onresizeIsPC=!navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)}},computed:{homeData:function(){return this.$store.state.homeData},rewardeData:function(){return this.$store.state.boardRoom.rewardeData},allChainData:function(){return this.$store.state.allChain},currentChainBoardRoomData:function(){return this.$store.getters["boardRoom/currentChainBoardRoomData"]},currentPrice:function(){var t;return Object(r["a"])(null===(t=this.homeData.mdex_info)||void 0===t?void 0:t.price,4,"round")},supply:function(){var t;return 1*(null===(t=this.homeData.mdex_info)||void 0===t?void 0:t.supply)||0},market:function(){var t;return 1*(null===(t=this.homeData.mdex_info)||void 0===t?void 0:t.market)||0},balance:function(){var t=this.$store.state.balance;return null!=t?t:0},boardRoomData:function(){return Object(c["a"])(this.currentChainBoardRoomData.allData).sort((function(t,a){return a.pool_apy-t.pool_apy})).slice(0,4)},formatCountdown:function(){return Object(o["e"])(this.countdown)},formatCountdownDay:function(){return Object(o["f"])(this.countdown)},apylist:function(){return this.$store.state.liquidity.apylist},airdropList:function(){var t=this.apylist,a=[];for(var s in t)a.push(Object.assign({pid:s},t[s]));return a.sort((function(t,a){return a.pool_apy-t.pool_apy})),a.splice(0,4)},navStatus:function(){return this.$store.state.navStatus}},created:function(){},beforeCreate:function(){var t=this;w=setInterval((function(){t.$store.dispatch("getBalance")}),9e3)}},"destroyed",(function(){window.removeEventListener("scroll",this.menu)})),B=D,H=(s("0eba"),s("ae94"),Object(m["a"])(B,e,i,!1,null,"141f4c61",null));a["default"]=H.exports}}]);