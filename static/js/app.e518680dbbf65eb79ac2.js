webpackJsonp([1],{"4L2J":function(e,t){e.exports={test:"テスト","Turnip Calculator":"カブ予測ツール","Buy Price":"購入価格",Sun:"日",Mon:"月",Tue:"火",Wed:"水",Thu:"木",Fri:"金",Sat:"土",AM:"午前",PM:"午後",No:"いいえ",Yes:"はい","First Time Buy":"初めて買う","Previous Pattern":"先週のパターン",Forget:"忘れた",Pattern:"パターン",Probability:"確率",Detail:"細部",Calculator:"スタート","Clear Data":"データを削除",fluctuating:"通常型","small-spike":"4期型","large-spike":"3期型",decreasing:"ジリ貧型","predict result":"結果","Total Probability":"総確率",max:"最高",min:"最小","Get Rich Together":"一緒にお金持ちになる"}},GEcr:function(e,t){},K8eY:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i,s,n,l,c=a("7+uW"),o=a("Gu7T"),u=a.n(o),_=a("c/Tr"),v=a.n(_),p=a("MICi"),d=a.n(p),m=a("pFYg"),h=a.n(m),f=a("Xxa5"),b=a.n(f),g=a("Dd8w"),y=a.n(g),P=a("BO1k"),x=a.n(P),k=a("INCx"),M=a.n(k),C=a("d7EF"),w=a.n(C),$=a("Zrlr"),T=a.n($),S=a("wxAW"),A=a.n(S),N=a("bOdI"),D=a.n(N),F=0,B=1,W=2,R=3,Y=(l={},D()(l,F,(r={},D()(r,F,.2),D()(r,B,.3),D()(r,W,.15),D()(r,R,.35),r)),D()(l,B,(i={},D()(i,F,.5),D()(i,B,.05),D()(i,W,.2),D()(i,R,.25),i)),D()(l,W,(s={},D()(s,F,.25),D()(s,B,.45),D()(s,W,.05),D()(s,R,.25),s)),D()(l,R,(n={},D()(n,F,.45),D()(n,B,.25),D()(n,W,.15),D()(n,R,.15),n)),l);function G(e){return e[1]-e[0]}function E(e,t,a){return Math.min(Math.max(e,t),a)}function L(e,t){return e[0]>t[1]||e[1]<t[0]?null:[Math.max(e[0],t[0]),Math.min(e[1],t[1])]}function z(e,t){return e[0]>t[1]||e[1]<t[0]?0:G(L(e,t))}function j(e){for(var t=0,a=0,r=0;r<e.length;r++){var i=e[r],s=t+i;Math.abs(t)>=Math.abs(i)?a+=t-s+i:a+=i-s+t,t=s}return t+a}var q=function(){function e(t,a){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];T()(this,e),this.value_start=Math.floor(t),this.value_end=Math.ceil(a);var i=[t,a],s=G(i);if(this.prob=Array(this.value_end-this.value_start),r)for(var n=0;n<this.prob.length;n++)this.prob[n]=z(this.range_of(n),i)/s}return A()(e,[{key:"range_of",value:function(e){return[this.value_start+e,this.value_start+e+1]}},{key:"min_value",value:function(){return this.value_start}},{key:"max_value",value:function(){return this.value_end}},{key:"normalize",value:function(){for(var e=j(this.prob),t=0;t<this.prob.length;t++)this.prob[t]/=e;return e}},{key:"range_limit",value:function(e){var t=w()(e,2),a=t[0],r=t[1];if((a=Math.max(a,this.min_value()))>=(r=Math.min(r,this.max_value())))return this.value_start=this.value_end=0,this.prob=[],0;a=Math.floor(a),r=Math.ceil(r);for(var i=a-this.value_start,s=r-this.value_start,n=i;n<s;n++)this.prob[n]*=z(this.range_of(n),e);return this.prob=this.prob.slice(i,s),this.value_start=a,this.value_end=r,this.normalize()}},{key:"decay",value:function(e,t){e=Math.round(e),t=Math.round(t);for(var a=function(e){for(var t=[[0,0]],a=0,r=0,i=0;i<e.length;i++){var s=e[i],n=a+s;Math.abs(a)>=Math.abs(s)?r+=a-n+s:r+=s-n+a,a=n,t.push([a,r])}return t}(this.prob),r=this.prob.length,i=t-e,s=Array(this.prob.length+i),n=0;n<s.length;n++){var l=Math.max(0,n-i),c=Math.min(r-1,n),o=[a[c+1][0],a[c+1][1],-a[l][0],-a[l][1]];l===n-i&&o.push(-this.prob[l]/2),c===n&&o.push(-this.prob[c]/2),s[n]=j(o)/i}this.prob=s,this.value_start-=t,this.value_end-=e}}]),e}(),O=function(){function e(t,a,r){T()(this,e),this.fudge_factor=0,this.prices=t,this.first_buy=a,this.previous_pattern=r}return A()(e,[{key:"intceil",value:function(e){return M()(e+.99999)}},{key:"minimum_rate_from_given_and_base",value:function(e,t){return 1e4*(e-.99999)/t}},{key:"maximum_rate_from_given_and_base",value:function(e,t){return 1e4*(e+1e-5)/t}},{key:"rate_range_from_given_and_base",value:function(e,t){return[this.minimum_rate_from_given_and_base(e,t),this.maximum_rate_from_given_and_base(e,t)]}},{key:"get_price",value:function(e,t){return this.intceil(e*t/1e4)}},{key:"multiply_generator_probability",value:b.a.mark(function e(t,a){var r,i,s,n,l,c;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=!0,i=!1,s=void 0,e.prev=3,n=x()(t);case 5:if(r=(l=n.next()).done){e.next=12;break}return c=l.value,e.next=9,y()({},c,{probability:c.probability*a});case 9:r=!0,e.next=5;break;case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(3),i=!0,s=e.t0;case 18:e.prev=18,e.prev=19,!r&&n.return&&n.return();case 21:if(e.prev=21,!i){e.next=24;break}throw s;case 24:return e.finish(21);case 25:return e.finish(18);case 26:case"end":return e.stop()}},e,this,[[3,14,18,26],[19,,21,25]])})},{key:"generate_individual_random_price",value:function(e,t,a,r,i,s){i*=1e4,s*=1e4;for(var n=e[0],l=[i,s],c=1,o=a;o<a+r;o++){var u=this.get_price(i,n),_=this.get_price(s,n);if(!isNaN(e[o])){if(e[o]<u-this.fudge_factor||e[o]>_+this.fudge_factor)return 0;c*=z(l,this.rate_range_from_given_and_base(E(e[o],u,_),n))/G(l),u=e[o],_=e[o]}t.push({min:u,max:_})}return c}},{key:"generate_decreasing_random_price",value:function(e,t,a,r,i,s,n,l){i*=1e4,s*=1e4,n*=1e4,l*=1e4;for(var c=e[0],o=new q(i,s),u=1,_=a;_<a+r;_++){var v=this.get_price(o.min_value(),c),p=this.get_price(o.max_value(),c);if(!isNaN(e[_])){if(e[_]<v-this.fudge_factor||e[_]>p+this.fudge_factor)return 0;var d=this.rate_range_from_given_and_base(E(e[_],v,p),c);if(0==(u*=o.range_limit(d)))return 0;v=e[_],p=e[_]}t.push({min:v,max:p}),o.decay(n,l)}return u}},{key:"generate_peak_price",value:function(e,t,a,r,i){var s=this;r*=1e4,i*=1e4;var n=e[0],l=1,c=[r,i],o=e[a+1];if(!isNaN(o)){var u=this.get_price(r,n),_=this.get_price(i,n);if(o<u-this.fudge_factor||o>_+this.fudge_factor)return 0;var v=this.rate_range_from_given_and_base(E(o,u,_),n);if(0==(l*=z(c,v)/G(c)))return 0;c=L(c,v)}for(var p=function(e){if(isNaN(e))return"continue";var t=s.get_price(r,n)-1,a=s.get_price(c[1],n)-1;if(e<t-s.fudge_factor||e>a+s.fudge_factor)return{v:0};var i=s.rate_range_from_given_and_base(E(e,t,a)+1,n),o=function(e,t){return e<=0?0:t<e?t:e-e*(Math.log(e)-Math.log(t))},u=c,_=w()(u,2),v=_[0],p=_[1],d=r,m=v-d,h=p-d,f=function(e){return(o(e-d,h)-o(e-d,m))/(h-m)};return 0==(l*=f(i[1])-f(i[0]))?{v:0}:void 0},d=[e[a],e[a+2]],m=0;m<d.length;m++){var f=p(d[m]);switch(f){case"continue":continue;default:if("object"===(void 0===f?"undefined":h()(f)))return f.v}}var b=this.get_price(r,n)-1,g=this.get_price(i,n)-1;return isNaN(e[a])||(b=e[a],g=e[a]),t.push({min:b,max:g}),b=t[a].min,g=this.get_price(i,n),isNaN(e[a+1])||(b=e[a+1],g=e[a+1]),t.push({min:b,max:g}),b=this.get_price(r,n)-1,g=t[a+1].max-1,isNaN(e[a+2])||(b=e[a+2],g=e[a+2]),t.push({min:b,max:g}),l}},{key:"generate_pattern_0_with_lengths",value:b.a.mark(function e(t,a,r,i,s,n){var l,c,o,u;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(l=t[0],c=[{min:l,max:l},{min:l,max:l}],o=1,0!=(o*=this.generate_individual_random_price(t,c,2,a,.9,1.4))){e.next=6;break}return e.abrupt("return");case 6:if(0!=(o*=this.generate_decreasing_random_price(t,c,2+a,r,.6,.8,.04,.1))){e.next=9;break}return e.abrupt("return");case 9:if(0!=(o*=this.generate_individual_random_price(t,c,2+a+r,i,.9,1.4))){e.next=12;break}return e.abrupt("return");case 12:if(0!=(o*=this.generate_decreasing_random_price(t,c,2+a+r+i,s,.6,.8,.04,.1))){e.next=15;break}return e.abrupt("return");case 15:if(2+a+r+i+s+n==14){e.next=17;break}throw new Error("Phase lengths don't add up");case 17:if(u=2+a+r+i+s,0!=(o*=this.generate_individual_random_price(t,c,u,14-u,.9,1.4))){e.next=21;break}return e.abrupt("return");case 21:return e.next=23,{pattern_description:"fluctuating",pattern_number:0,prices:c,probability:o};case 23:case"end":return e.stop()}},e,this)})},{key:"generate_pattern_0",value:b.a.mark(function e(t){var a,r,i;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=2;case 1:if(!(a<4)){e.next=16;break}r=0;case 3:if(!(r<7)){e.next=13;break}i=0;case 5:if(!(i<7-r-1+1)){e.next=10;break}return e.delegateYield(this.multiply_generator_probability(this.generate_pattern_0_with_lengths(t,r,a,7-r-i,5-a,i),.5/7/(7-r)),"t0",7);case 7:i++,e.next=5;break;case 10:r++,e.next=3;break;case 13:a++,e.next=1;break;case 16:case"end":return e.stop()}},e,this)})},{key:"generate_pattern_1_with_peak",value:b.a.mark(function e(t,a){var r,i,s,n,l,c;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t[0],i=[{min:r,max:r},{min:r,max:r}],s=1,0!=(s*=this.generate_decreasing_random_price(t,i,2,a-2,.85,.9,.03,.05))){e.next=6;break}return e.abrupt("return");case 6:n=[.9,1.4,2,1.4,.9,.4,.4,.4,.4,.4,.4],l=[1.4,2,6,2,1.4,.9,.9,.9,.9,.9,.9],c=a;case 9:if(!(c<14)){e.next=16;break}if(0!=(s*=this.generate_individual_random_price(t,i,c,1,n[c-a],l[c-a]))){e.next=13;break}return e.abrupt("return");case 13:c++,e.next=9;break;case 16:return e.next=18,{pattern_description:"large-spike",pattern_number:1,prices:i,probability:s};case 18:case"end":return e.stop()}},e,this)})},{key:"generate_pattern_1",value:b.a.mark(function e(t){var a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=3;case 1:if(!(a<10)){e.next=6;break}return e.delegateYield(this.multiply_generator_probability(this.generate_pattern_1_with_peak(t,a),1/7),"t0",3);case 3:a++,e.next=1;break;case 6:case"end":return e.stop()}},e,this)})},{key:"generate_pattern_2",value:b.a.mark(function e(t){var a,r,i;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t[0],r=[{min:a,max:a},{min:a,max:a}],i=1,0!=(i*=this.generate_decreasing_random_price(t,r,2,12,.85,.9,.03,.05))){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,{pattern_description:"decreasing",pattern_number:2,prices:r,probability:i};case 8:case"end":return e.stop()}},e,this)})},{key:"generate_pattern_3_with_peak",value:b.a.mark(function e(t,a){var r,i,s;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t[0],i=[{min:r,max:r},{min:r,max:r}],s=1,0!=(s*=this.generate_decreasing_random_price(t,i,2,a-2,.4,.9,.03,.05))){e.next=6;break}return e.abrupt("return");case 6:if(0!=(s*=this.generate_individual_random_price(t,i,a,2,.9,1.4))){e.next=9;break}return e.abrupt("return");case 9:if(0!=(s*=this.generate_peak_price(t,i,a+2,1.4,2))){e.next=12;break}return e.abrupt("return");case 12:if(!(a+5<14)){e.next=16;break}if(0!=(s*=this.generate_decreasing_random_price(t,i,a+5,14-(a+5),.4,.9,.03,.05))){e.next=16;break}return e.abrupt("return");case 16:return e.next=18,{pattern_description:"small-spike",pattern_number:3,prices:i,probability:s};case 18:case"end":return e.stop()}},e,this)})},{key:"generate_pattern_3",value:b.a.mark(function e(t){var a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=2;case 1:if(!(a<10)){e.next=6;break}return e.delegateYield(this.multiply_generator_probability(this.generate_pattern_3_with_peak(t,a),1/8),"t0",3);case 3:a++,e.next=1;break;case 6:case"end":return e.stop()}},e,this)})},{key:"get_transition_probability",value:function(e){return void 0===e||d()(e)||null===e||e<0||e>3?[4530/13082,3236/13082,1931/13082,3385/13082]:Y[e]}},{key:"generate_all_patterns",value:b.a.mark(function e(t,a){var r,i,s;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=[this.generate_pattern_0,this.generate_pattern_1,this.generate_pattern_2,this.generate_pattern_3],i=this.get_transition_probability(a),s=0;case 3:if(!(s<4)){e.next=8;break}return e.delegateYield(this.multiply_generator_probability(r[s].bind(this)(t),i[s]),"t0",5);case 5:s++,e.next=3;break;case 8:case"end":return e.stop()}},e,this)})},{key:"generate_possibilities",value:b.a.mark(function e(t,a,r){var i,s;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!a&&!isNaN(t[0])){e.next=15;break}i=90;case 2:if(!(i<=110)){e.next=13;break}if((s=t.slice())[0]=s[1]=i,!a){e.next=9;break}return e.delegateYield(this.generate_pattern_3(s),"t0",7);case 7:e.next=10;break;case 9:return e.delegateYield(this.generate_all_patterns(s,r),"t1",10);case 10:i++,e.next=2;break;case 13:e.next=16;break;case 15:return e.delegateYield(this.generate_all_patterns(t,r),"t2",16);case 16:case"end":return e.stop()}},e,this)})},{key:"analyze_possibilities",value:function(){for(var e=this.prices,t=this.first_buy,a=this.previous_pattern,r=[],i=0;i<6;i++)if(this.fudge_factor=i,(r=v()(this.generate_possibilities(e,t,a))).length>0){console.log("Generated possibilities using fudge factor %d: ",i,r);break}var s=r.reduce(function(e,t){return e+t.probability},0),n=!0,l=!1,c=void 0;try{for(var o,_=x()(r);!(n=(o=_.next()).done);n=!0){o.value.probability/=s}}catch(e){l=!0,c=e}finally{try{!n&&_.return&&_.return()}finally{if(l)throw c}}var p=!0,d=!1,m=void 0;try{for(var h,f=x()(r);!(p=(h=f.next()).done);p=!0){var b=h.value,g=[],y=[],P=!0,k=!1,M=void 0;try{for(var C,w=x()(b.prices.slice(2));!(P=(C=w.next()).done);P=!0){var $=C.value;$.min!==$.max?(g.push($.min),y.push($.max)):(g=[],y=[])}}catch(e){k=!0,M=e}finally{try{!P&&w.return&&w.return()}finally{if(k)throw M}}g.length||y.length||(g.push(b.prices[b.prices.length-1].min),y.push(b.prices[b.prices.length-1].max)),b.weekGuaranteedMinimum=Math.max.apply(Math,u()(g)),b.weekMax=Math.max.apply(Math,u()(y))}}catch(e){d=!0,m=e}finally{try{!p&&f.return&&f.return()}finally{if(d)throw m}}for(var T={},S=function(e){T[e]=r.filter(function(t){return t.pattern_number==e}).map(function(e){return e.probability}).reduce(function(e,t){return e+t},0)},A=[0,1,2,3],N=0;N<A.length;N++){S(A[N])}var D=!0,F=!1,B=void 0;try{for(var W,R=x()(r);!(D=(W=R.next()).done);D=!0){var Y=W.value;Y.category_total_probability=T[Y.pattern_number]}}catch(e){F=!0,B=e}finally{try{!D&&R.return&&R.return()}finally{if(F)throw B}}r.sort(function(e,t){return t.category_total_probability-e.category_total_probability||t.probability-e.probability});for(var G=[],E=0;E<14;E++){var L={min:999,max:0},z=!0,j=!1,q=void 0;try{for(var O,I=x()(r);!(z=(O=I.next()).done);z=!0){var V=O.value;V.prices[E].min<L.min&&(L.min=V.prices[E].min),V.prices[E].max>L.max&&(L.max=V.prices[E].max)}}catch(e){j=!0,q=e}finally{try{!z&&I.return&&I.return()}finally{if(j)throw q}}G.push(L)}return r.unshift({pattern_description:"all",pattern_number:4,prices:G,weekGuaranteedMinimum:Math.min.apply(Math,u()(r.map(function(e){return e.weekGuaranteedMinimum}))),weekMax:Math.max.apply(Math,u()(r.map(function(e){return e.weekMax})))}),r}}]),e}(),I={name:"oikura",data:function(){return{firstBuy:"",buyPrice:"",maePattern:"-1",sellPrice:{sellMon_AM:"",sellMon_PM:"",sellTue_AM:"",sellTue_PM:"",sellWed_AM:"",sellWed_PM:"",sellThu_AM:"",sellThu_PM:"",sellFri_AM:"",sellFri_PM:"",sellSat_AM:"",sellSat_PM:""}}},mounted:function(){},methods:{clearData:function(){for(var e in this.buyPrice="",this.sellPrice)this.sellPrice[e]="";this.$emit("clearData")},calculatorData:function(){if(""!=this.buyPrice){var e=[this.buyPrice,this.buyPrice];for(var t in this.sellPrice){var a=this.sellPrice[t]?this.sellPrice[t]:NaN;e.push(a)}var r=new O(e,this.firstBuy,this.maePattern);this.$emit("analyzeResult",r.analyze_possibilities())}}}},V={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"oikura"},[a("div",{staticClass:"oikura_block"},[a("div",{staticClass:"textCenter",staticStyle:{"margin-bottom":"5px"}},[e._v(e._s(e.$t("First Time Buy")))]),e._v(" "),a("label",{staticClass:"radioStyle",class:{isSelect:""==e.firstBuy},attrs:{for:"firstNo"}},[e._v(e._s(e.$t("No")))]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.firstBuy,expression:"firstBuy"}],staticStyle:{display:"none"},attrs:{id:"firstNo",type:"radio",value:""},domProps:{checked:e._q(e.firstBuy,"")},on:{change:function(t){e.firstBuy=""}}}),e._v(" "),a("label",{staticClass:"radioStyle",class:{isSelect:"1"==e.firstBuy},attrs:{for:"firstYes"}},[e._v(e._s(e.$t("Yes")))]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.firstBuy,expression:"firstBuy"}],staticStyle:{display:"none"},attrs:{id:"firstYes",type:"radio",value:"1"},domProps:{checked:e._q(e.firstBuy,"1")},on:{change:function(t){e.firstBuy="1"}}})]),e._v(" "),a("div",{staticClass:"oikura_block"},[a("div",{staticClass:"textCenter",staticStyle:{"margin-bottom":"5px"}},[e._v(e._s(e.$t("Previous Pattern")))]),e._v(" "),a("label",{staticClass:"radioStyle increaseWidth",class:{isSelect:"-1"==e.maePattern},attrs:{for:"Forget"}},[e._v(e._s(e.$t("Forget")))]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.maePattern,expression:"maePattern"}],staticStyle:{display:"none"},attrs:{id:"Forget",type:"radio",value:"-1"},domProps:{checked:e._q(e.maePattern,"-1")},on:{change:function(t){e.maePattern="-1"}}}),e._v(" "),a("label",{staticClass:"radioStyle increaseWidth",class:{isSelect:"0"==e.maePattern},attrs:{for:"fluctuating"}},[e._v(e._s(e.$t("fluctuating")))]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.maePattern,expression:"maePattern"}],staticStyle:{display:"none"},attrs:{id:"fluctuating",type:"radio",value:"0"},domProps:{checked:e._q(e.maePattern,"0")},on:{change:function(t){e.maePattern="0"}}}),e._v(" "),a("label",{staticClass:"radioStyle increaseWidth",class:{isSelect:"1"==e.maePattern},attrs:{for:"large"}},[e._v(e._s(e.$t("large-spike")))]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.maePattern,expression:"maePattern"}],staticStyle:{display:"none"},attrs:{id:"large",type:"radio",value:"1"},domProps:{checked:e._q(e.maePattern,"1")},on:{change:function(t){e.maePattern="1"}}}),e._v(" "),a("label",{staticClass:"radioStyle increaseWidth",class:{isSelect:"2"==e.maePattern},attrs:{for:"decreasing"}},[e._v(e._s(e.$t("decreasing")))]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.maePattern,expression:"maePattern"}],staticStyle:{display:"none"},attrs:{id:"decreasing",type:"radio",value:"2"},domProps:{checked:e._q(e.maePattern,"2")},on:{change:function(t){e.maePattern="2"}}}),e._v(" "),a("label",{staticClass:"radioStyle increaseWidth",class:{isSelect:"3"==e.maePattern},attrs:{for:"small"}},[e._v(e._s(e.$t("small-spike")))]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.maePattern,expression:"maePattern"}],staticStyle:{display:"none"},attrs:{id:"small",type:"radio",value:"3"},domProps:{checked:e._q(e.maePattern,"3")},on:{change:function(t){e.maePattern="3"}}})]),e._v(" "),a("div",{staticClass:"oikura_block"},[a("div",{staticClass:"textCenter"},[e._v(e._s(e.$t("Buy Price")))]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.buyPrice,expression:"buyPrice"}],staticClass:"inputStyle",attrs:{type:"text"},domProps:{value:e.buyPrice},on:{input:function(t){t.target.composing||(e.buyPrice=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"block_week"},[a("div",{staticClass:"day"},[a("div",{staticClass:"m_day_block"},[a("div",{staticClass:"textCenter"},[e._v(e._s(e.$t("Mon"))+" - "+e._s(e.$t("AM")))]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.sellPrice.sellMon_AM,expression:"sellPrice.sellMon_AM"}],staticClass:"inputStyle_week",attrs:{type:"text"},domProps:{value:e.sellPrice.sellMon_AM},on:{input:function(t){t.target.composing||e.$set(e.sellPrice,"sellMon_AM",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"m_day_block"},[a("div",{staticClass:"textCenter"},[e._v(e._s(e.$t("Mon"))+" - "+e._s(e.$t("PM")))]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.sellPrice.sellMon_PM,expression:"sellPrice.sellMon_PM"}],staticClass:"inputStyle_week",attrs:{type:"text"},domProps:{value:e.sellPrice.sellMon_PM},on:{input:function(t){t.target.composing||e.$set(e.sellPrice,"sellMon_PM",t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"day"},[a("div",{staticClass:"m_day_block"},[a("div",{staticClass:"textCenter"},[e._v(e._s(e.$t("Tue"))+" - "+e._s(e.$t("AM")))]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.sellPrice.sellTue_AM,expression:"sellPrice.sellTue_AM"}],staticClass:"inputStyle_week",attrs:{type:"text"},domProps:{value:e.sellPrice.sellTue_AM},on:{input:function(t){t.target.composing||e.$set(e.sellPrice,"sellTue_AM",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"m_day_block"},[a("div",{staticClass:"textCenter"},[e._v(e._s(e.$t("Tue"))+" - "+e._s(e.$t("PM")))]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.sellPrice.sellTue_PM,expression:"sellPrice.sellTue_PM"}],staticClass:"inputStyle_week",attrs:{type:"text"},domProps:{value:e.sellPrice.sellTue_PM},on:{input:function(t){t.target.composing||e.$set(e.sellPrice,"sellTue_PM",t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"day"},[a("div",{staticClass:"m_day_block"},[a("div",{staticClass:"textCenter"},[e._v(e._s(e.$t("Wed"))+" - "+e._s(e.$t("AM")))]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.sellPrice.sellWed_AM,expression:"sellPrice.sellWed_AM"}],staticClass:"inputStyle_week",attrs:{type:"text"},domProps:{value:e.sellPrice.sellWed_AM},on:{input:function(t){t.target.composing||e.$set(e.sellPrice,"sellWed_AM",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"m_day_block"},[a("div",{staticClass:"textCenter"},[e._v(e._s(e.$t("Wed"))+" - "+e._s(e.$t("PM")))]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.sellPrice.sellWed_PM,expression:"sellPrice.sellWed_PM"}],staticClass:"inputStyle_week",attrs:{type:"text"},domProps:{value:e.sellPrice.sellWed_PM},on:{input:function(t){t.target.composing||e.$set(e.sellPrice,"sellWed_PM",t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"day"},[a("div",{staticClass:"m_day_block"},[a("div",{staticClass:"textCenter"},[e._v(e._s(e.$t("Thu"))+" - "+e._s(e.$t("AM")))]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.sellPrice.sellThu_AM,expression:"sellPrice.sellThu_AM"}],staticClass:"inputStyle_week",attrs:{type:"text"},domProps:{value:e.sellPrice.sellThu_AM},on:{input:function(t){t.target.composing||e.$set(e.sellPrice,"sellThu_AM",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"m_day_block"},[a("div",{staticClass:"textCenter"},[e._v(e._s(e.$t("Thu"))+" - "+e._s(e.$t("PM")))]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.sellPrice.sellThu_PM,expression:"sellPrice.sellThu_PM"}],staticClass:"inputStyle_week",attrs:{type:"text"},domProps:{value:e.sellPrice.sellThu_PM},on:{input:function(t){t.target.composing||e.$set(e.sellPrice,"sellThu_PM",t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"day"},[a("div",{staticClass:"m_day_block"},[a("div",{staticClass:"textCenter"},[e._v(e._s(e.$t("Fri"))+" - "+e._s(e.$t("AM")))]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.sellPrice.sellFri_AM,expression:"sellPrice.sellFri_AM"}],staticClass:"inputStyle_week",attrs:{type:"text"},domProps:{value:e.sellPrice.sellFri_AM},on:{input:function(t){t.target.composing||e.$set(e.sellPrice,"sellFri_AM",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"m_day_block"},[a("div",{staticClass:"textCenter"},[e._v(e._s(e.$t("Fri"))+" - "+e._s(e.$t("PM")))]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.sellPrice.sellFri_PM,expression:"sellPrice.sellFri_PM"}],staticClass:"inputStyle_week",attrs:{type:"text"},domProps:{value:e.sellPrice.sellFri_PM},on:{input:function(t){t.target.composing||e.$set(e.sellPrice,"sellFri_PM",t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"day"},[a("div",{staticClass:"m_day_block"},[a("div",{staticClass:"textCenter"},[e._v(e._s(e.$t("Sat"))+" - "+e._s(e.$t("AM")))]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.sellPrice.sellSat_AM,expression:"sellPrice.sellSat_AM"}],staticClass:"inputStyle_week",attrs:{type:"text"},domProps:{value:e.sellPrice.sellSat_AM},on:{input:function(t){t.target.composing||e.$set(e.sellPrice,"sellSat_AM",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"m_day_block"},[a("div",{staticClass:"textCenter"},[e._v(e._s(e.$t("Sat"))+" - "+e._s(e.$t("PM")))]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.sellPrice.sellSat_PM,expression:"sellPrice.sellSat_PM"}],staticClass:"inputStyle_week",attrs:{type:"text"},domProps:{value:e.sellPrice.sellSat_PM},on:{input:function(t){t.target.composing||e.$set(e.sellPrice,"sellSat_PM",t.target.value)}}})])])]),e._v(" "),a("div",{staticClass:"block_btn"},[a("button",{staticClass:"btn",on:{click:e.calculatorData}},[e._v(e._s(e.$t("Calculator")))]),e._v(" "),a("button",{staticClass:"btn",on:{click:e.clearData}},[e._v(e._s(e.$t("Clear Data")))])])])},staticRenderFns:[]};var U=a("VU/8")(I,V,!1,function(e){a("K8eY")},"data-v-5df18fa2",null).exports,H={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"headerBar"},[t("div",{staticClass:"titleBar"},[t("h1",[this._v(this._s(this.$t("Turnip Calculator")))])])])},staticRenderFns:[]};var J=a("VU/8")({name:"headerBar",methods:{switchLang:function(e){this.$i18n.locale=e}}},H,!1,function(e){a("Ynx0")},null,null).exports,X={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"oikura"},[a("div",{staticClass:"blockTitle"},[a("h2",[e._v(e._s(e.$t("predict result")))])]),e._v(" "),a("div",{staticClass:"chart_block"},[e.showPie?a("ve-pie",{attrs:{data:e.pData,settings:e.pChartSettings}}):e._e()],1),e._v(" "),a("div",{staticClass:"chart_block"},[a("ve-line",{attrs:{data:e.lData,settings:e.chartSettings,extend:e.chartExtend}})],1)])},staticRenderFns:[]};var K=a("VU/8")({props:["pieData","lineData"],name:"resultChart",data:function(){return this.chartExtend={xAxis:{boundaryGap:!1}},this.chartSettings={xAxisType:"category",area:!0,boundaryGap:!1},{lData:{columns:["week","max","min"],rows:[]},pChartSettings:{type:"pie"},pData:{columns:["Pattern","Probability"],rows:[]},showPie:!1}},watch:{lineData:function(e){this.lData.rows=[];var t=["Mon","Tue","Wed","Thu","Fri","Sat"],a=["AM","PM"],r=0,i=0,s=e.prices;if(e)for(var n=2;n<s.length;n++){var l={week:this.$t(t[r])+" "+this.$t(a[i]),max:s[n].max,min:s[n].min};this.lData.rows.push(l),i++,n%2==1&&(i=0,r++)}},pieData:function(e){for(var t in this.pData.rows=[],e)if("all"!=t){var a={Pattern:this.$t(t.toLowerCase()),Probability:e[t].probability};this.pData.rows.push(a)}this.pData.rows.length>0?this.showPie=!0:this.showPie=!1}},methods:{}},X,!1,function(e){a("jpwd")},null,null).exports,Z={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"oikura resultTable"},[a("div",{staticClass:"blockTitle"},[a("h2",[e._v(e._s(e.$t("Detail")))])]),e._v(" "),e.tabelData.length>0?a("div",{staticClass:"block_table"},[a("table",[a("thead",[a("tr",[a("th",{attrs:{rowspan:"2"}},[e._v(e._s(e.$t("Pattern")))]),e._v(" "),a("th",{attrs:{rowspan:"2"}},[e._v(e._s(e.$t("Total Probability")))]),e._v(" "),a("th",{attrs:{rowspan:"2"}},[e._v(e._s(e.$t("Probability")))]),e._v(" "),a("th",{attrs:{colspan:"2"}},[e._v(e._s(e.$t("Mon")))]),e._v(" "),a("th",{attrs:{colspan:"2"}},[e._v(e._s(e.$t("Tue")))]),e._v(" "),a("th",{attrs:{colspan:"2"}},[e._v(e._s(e.$t("Wed")))]),e._v(" "),a("th",{attrs:{colspan:"2"}},[e._v(e._s(e.$t("Thu")))]),e._v(" "),a("th",{attrs:{colspan:"2"}},[e._v(e._s(e.$t("Fri")))]),e._v(" "),a("th",{attrs:{colspan:"2"}},[e._v(e._s(e.$t("Sat")))])]),e._v(" "),a("tr",[a("th",[e._v(e._s(e.$t("AM")))]),e._v(" "),a("th",[e._v(e._s(e.$t("PM")))]),e._v(" "),a("th",[e._v(e._s(e.$t("AM")))]),e._v(" "),a("th",[e._v(e._s(e.$t("PM")))]),e._v(" "),a("th",[e._v(e._s(e.$t("AM")))]),e._v(" "),a("th",[e._v(e._s(e.$t("PM")))]),e._v(" "),a("th",[e._v(e._s(e.$t("AM")))]),e._v(" "),a("th",[e._v(e._s(e.$t("PM")))]),e._v(" "),a("th",[e._v(e._s(e.$t("AM")))]),e._v(" "),a("th",[e._v(e._s(e.$t("PM")))]),e._v(" "),a("th",[e._v(e._s(e.$t("AM")))]),e._v(" "),a("th",[e._v(e._s(e.$t("PM")))])])]),e._v(" "),a("tbody",e._l(e.tabelData,function(t,r){return a("tr",[a("td",[e._v(e._s(e.$t(t.pattern)))]),e._v(" "),a("td",[e._v(e._s(t.total_Probability)+"%")]),e._v(" "),a("td",[e._v(e._s(t.Probability)+"%")]),e._v(" "),a("td",[e._v(e._s(t.price[0].am))]),e._v(" "),a("td",[e._v(e._s(t.price[0].pm))]),e._v(" "),a("td",[e._v(e._s(t.price[1].am))]),e._v(" "),a("td",[e._v(e._s(t.price[1].pm))]),e._v(" "),a("td",[e._v(e._s(t.price[2].am))]),e._v(" "),a("td",[e._v(e._s(t.price[2].pm))]),e._v(" "),a("td",[e._v(e._s(t.price[3].am))]),e._v(" "),a("td",[e._v(e._s(t.price[3].pm))]),e._v(" "),a("td",[e._v(e._s(t.price[4].am))]),e._v(" "),a("td",[e._v(e._s(t.price[4].pm))]),e._v(" "),a("td",[e._v(e._s(t.price[5].am))]),e._v(" "),a("td",[e._v(e._s(t.price[5].pm))])])}),0)])]):a("div",[e._v("no data")])])},staticRenderFns:[]};var Q=a("VU/8")({props:["tabelData"],name:"resultTable",data:function(){return{}},watch:{},computed:{},methods:{}},Z,!1,function(e){a("GEcr")},null,null).exports,ee=(a("VaBq"),{name:"App",components:{HeaderBar:J,Oikura:U,ResultChart:K,ResultTable:Q},data:function(){return{pattern_result:{},lineData:[],pieData:{},tabelData:{}}},methods:{switchLang:function(e){this.$i18n.locale=e},clearData:function(){this.pieData={},this.tabelData={},this.lineData={}},analyzeResult:function(e){this.tabelData=this.calTableData(e),this.pieData=this.calPieData(e),this.lineData=e[1]},calPieData:function(e){for(var t=[],a=0;a<e.length;a++)t[e[a].pattern_description]||(t[e[a].pattern_description]={},e[a].category_total_probability&&(t[e[a].pattern_description].probability=Math.round(100*Number(e[a].category_total_probability))));return t},calTableData:function(e){for(var t=[],a=1;a<e.length;a++){var r={};r.pattern=e[a].pattern_description,r.total_Probability=Math.round(100*Number(e[a].category_total_probability)),r.Probability=Math.round(100*Number(e[a].probability)),r.price=[];for(var i=1;i<7;i++){var s={am:e[a].prices[2*i].min==e[a].prices[2*i].max?e[a].prices[2*i].min:e[a].prices[2*i].min+"-"+e[a].prices[2*i].max,pm:e[a].prices[2*i+1].min==e[a].prices[2*i+1].max?e[a].prices[2*i+1].min:e[a].prices[2*i+1].min+"-"+e[a].prices[2*i+1].max};r.price.push(s)}t.push(r)}return t}}}),te={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"lang-nav"},[a("a",{staticClass:"langItem",on:{click:function(t){return e.switchLang("en-us")}}},[e._v("English")]),e._v(" /\n    "),a("a",{staticClass:"langItem",on:{click:function(t){return e.switchLang("ja-jp")}}},[e._v("日本語")]),e._v(" /\n    "),a("a",{staticClass:"langItem",on:{click:function(t){return e.switchLang("zh-tw")}}},[e._v("中文")])]),e._v(" "),a("HeaderBar"),e._v(" "),a("Oikura",{on:{analyzeResult:e.analyzeResult,clearData:e.clearData}}),e._v(" "),a("ResultChart",{attrs:{pieData:e.pieData,lineData:e.lineData}}),e._v(" "),a("ResultTable",{attrs:{tabelData:e.tabelData}}),e._v(" "),a("div",{staticClass:"oikura footer"},[e._v(e._s(e.$t("Get Rich Together"))+" - 2020/05/05")])],1)},staticRenderFns:[]};var ae=a("VU/8")(ee,te,!1,function(e){a("kgSM")},null,null).exports,re=a("vO7p"),ie=a.n(re),se=a("TXmL");c.a.use(se.a);var ne=new se.a({locale:function(){var e=["en-us","zh-tw","ja-jp"],t="en-us",a=null;for(var r in a=(a="Netscape"==navigator.appName?navigator.language:navigator.bowerLanguage).toLowerCase(),e)a==e[r]&&(t=a);return t}(),messages:{"zh-tw":a("yvvN"),"en-us":a("T2O2"),"ja-jp":a("4L2J")}});c.a.config.productionTip=!1,c.a.use(ie.a),new c.a({el:"#app",components:{App:ae},template:"<App/>",i18n:ne})},T2O2:function(e,t){e.exports={test:"test","Turnip Calculator":"Turnip Calculator","Buy Price":"Buy Price",Sun:"Sun",Mon:"Mon",Tue:"Tue",Wed:"Wed",Thu:"Thu",Fri:"Fri",Sat:"Sat",AM:"AM",PM:"PM",No:"No",Yes:"Yes",Pattern:"Pattern",Forget:"Forget","First Time Buy":"First Time Buy","Previous Pattern":"Previous Pattern",Probability:"Probability",Detail:"Detail",Calculator:"Calculator","Clear Data":"Clear Data",fluctuating:"Fluctuating","small-spike":"Small Spike","large-spike":"Large Spike",decreasing:"Decreasing","predict result":"Predict Result","Total Probability":"Total Probability",max:"MAX",min:"MIN","Get Rich Together":"Get Rich Together"}},VaBq:function(e,t){},Ynx0:function(e,t){},jpwd:function(e,t){},kgSM:function(e,t){},yvvN:function(e,t){e.exports={test:"測試","Turnip Calculator":"大頭菜計算機","Buy Price":"購入價格",Sun:"周日",Mon:"週一",Tue:"週二",Wed:"週三",Thu:"週四",Fri:"週五",Sat:"週六",AM:"上午",PM:"下午",No:"否",Yes:"是","First Time Buy":"第一次購買",Forget:"忘了","Previous Pattern":"上周模式",Calculator:"開始計算","Clear Data":"清除資料",Pattern:"模式",Detail:"詳細資料",Probability:"機率",fluctuating:"波型","small-spike":"四期型","large-spike":"三期型",decreasing:"遞減型","predict result":"預測結果","Total Probability":"總機率",max:"最大值",min:"最小值","Get Rich Together":"貨出得去、人進得來，一起發大財"}}},["NHnr"]);
//# sourceMappingURL=app.e518680dbbf65eb79ac2.js.map