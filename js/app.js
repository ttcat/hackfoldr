function import$(t,e){var n={}.hasOwnProperty;for(var r in e)n.call(e,r)&&(t[r]=e[r]);return t}function in$(t,e){for(var n=-1,r=e.length>>>0;++n<r;)if(t===e[n])return!0;return!1}require.register("config.jsenv",function(t,e,n){n.exports={BUILD:"git-d47c31c",FIREBASE:"https://g0vhub.firebaseio.com",GITHUB_API_PROXY:"http://utcr.org:8080",G0V_LABELS:[{color:"5CC2D6",name:"datainput",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"資料輸入"},{color:"F2800D",name:"translation",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"翻譯"},{color:"C7F53D",name:"OCR",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"OCR/圖文辨識"},{color:"F53D3D",name:"research",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"研究"},{color:"40BF40",name:"drawing",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"繪圖"},{color:"2EB88A",name:"parser",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"爬資料"},{color:"FFE14D",name:"bitesized",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"小工作"},{color:"3399CC",name:"doc",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"文件（技術）"},{color:"000000",name:"devops",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"維運"},{color:"8040BF",name:"promote",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"宣傳"},{color:"CC66CC",name:"writing",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"文案"},{color:"004C99",name:"design",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"設計"},{color:"A30000",name:"code",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"程式"},{color:"66E6FF",name:"frontend",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"前端"}],CATEGORIZATION:[{"class":"btn-primary",name:"專案類",tags:["立法院","鄉民關心你"]},{"class":"",name:"議題類",tags:["環保","農業","服貿","通訊","資訊自由"]},{"class":"btn-success",name:"專業類",tags:["法律","設計","文字","程式","新聞","行銷","廣告","繪圖","攝影"]},{"class":"btn-info",name:"特殊技能類",tags:["手沖咖啡","3D printing"]},{"class":"btn-warning",name:"以技能分類",tags:["爬資料","轉換資料"]}],GOOGLE_API_BROWSER_APPLICATION_KEY:"AIzaSyCHm8NgD_p5F_-e7euH8BZiB4wSB8pOZ2A"}}),angular.module("scroll",[]).value("$anchorScroll",angular.noop),angular.module("app",["ui","app.templates","app.controllers","ui.state","ui.bootstrap"]).config(["$stateProvider","$urlRouterProvider","$locationProvider"].concat(function(t,e,n){return t.state("about",{url:"/about",templateUrl:"partials/about.html"}).state("hack",{url:"/{hackId}",templateUrl:"partials/hack.html",controller:"HackFolderCtrl",onEnter:function(){return $("body").addClass("hide-overflow")},onExit:function(){return $("body").removeClass("hide-overflow")}}).state("hack.index",{url:"/__index"}).state("hack.doc",{url:"/{docId}"}),e.otherwise("/nonuke2014"),n.html5Mode(!0)})).run(["$rootScope","$state","$stateParams","$location"].concat(function(t,e,n,r){return t.$state=e,t.$stateParam=n,t.go=function(t){return r.path(t)},t._build=require("config.jsenv").BUILD,t.$on("$stateChangeSuccess",function(t,e){var n;return n=e.name,"undefined"!=typeof window&&null!==window&&"function"==typeof window.ga?window.ga("send","pageview",{page:r.$$url,title:n}):void 0}),t.safeApply=function(t,e){var n;return n=t.$root.$$phase,"$apply"===n||"$digest"===n?"function"==typeof e?e():void 0:t.$apply(e)}})),this.googleOnLoadCallback=function(){return gapi.client.setApiKey(require("config.jsenv").GOOGLE_API_BROWSER_APPLICATION_KEY),gapi.client.load("youtube","v3",function(){return angular.element(document).ready(function(){return angular.bootstrap(document,["app"])})})},$(function(){function pad(t,e){for(var n=""+t;n.length<e;)n="0"+n;return n}function formatTime(t){t/=10;{var e=parseInt(t/36e4),n=parseInt(t/6e3)-60*e,r=parseInt(t/100)-3600*e-60*n;pad(t-100*r-6e3*n,2)}return"禁食 "+e+" 小時 "+(n>0?pad(n,2):"00")+" 分鐘 "+pad(r,2)+" 秒"}$("body").prepend('<span id="stopwatch" style="position: absolute; color: #EBFF00; z-index: 99999; left: 45%; font-size: 14px; margin-top: 7px; padding: 3px; border-radius: 3px; background: black"></span>'),function($){$.timer=function(func,time,autostart){return this.set=function(func,time,autostart){if(this.init=!0,"object"==typeof func){var paramList=["autostart","time"];for(var arg in paramList)void 0!=func[paramList[arg]]&&eval(paramList[arg]+" = func[paramList[arg]]");func=func.action}return"function"==typeof func&&(this.action=func),isNaN(time)||(this.intervalTime=time),autostart&&!this.active&&(this.active=!0,this.setTimer()),this},this.once=function(t){var e=this;return isNaN(t)&&(t=0),window.setTimeout(function(){e.action()},t),this},this.play=function(t){return this.active||(t?this.setTimer():this.setTimer(this.remaining),this.active=!0),this},this.pause=function(){return this.active&&(this.active=!1,this.remaining-=new Date-this.last,this.clearTimer()),this},this.stop=function(){return this.active=!1,this.remaining=this.intervalTime,this.clearTimer(),this},this.toggle=function(t){return this.active?this.pause():t?this.play(!0):this.play(),this},this.reset=function(){return this.active=!1,this.play(!0),this},this.clearTimer=function(){window.clearTimeout(this.timeoutObject)},this.setTimer=function(t){var e=this;"function"==typeof this.action&&(isNaN(t)&&(t=this.intervalTime),this.remaining=t,this.last=new Date,this.clearTimer(),this.timeoutObject=window.setTimeout(function(){e.go()},t))},this.go=function(){this.active&&(this.action(),this.setTimer())},this.init?new $.timer(func,time,autostart):(this.set(func,time,autostart),this)}}(jQuery),window.Example1=new function(){function t(){var t=formatTime(a);console.log(t),e=$("#stopwatch"),e.html(t),a+=n}var e,n=1e3,r=new Date,o=r.getTime(),i=new Date(2014,3,22,11,0),a=o-i.getTime();$(function(){Example1.Timer=$.timer(t,n,!0)}),this.resetStopwatch=function(){a=0,Example1.Timer.stop().once()}}});var slice$=[].slice,replace$="".replace;angular.module("app.controllers",["ui.state","ngCookies"]).controller({AppCtrl:["$scope","$window","$state","$rootScope","$timeout"].concat(function(t,e,n,r,o){return t.$watch("$state.current.name",function(e){return"irc"===e?t.ircEnabled=!0:void 0}),window.addEventListener("load",function(){return o(function(){return window.scrollTo(0,1)},0)}),o(function(){return r.hideGithubRibbon=!0},1e4)})}).controller({HackFolderCtrl:["$scope","$sce","$window","$state","$cookies","HackFolder"].concat(function(t,e,n,r,o,i){var a,c;return import$(t,{hasViewMode:function(t){return null!=t?t.match(/g(doc|present|draw)/):void 0},sortableOptions:{update:function(){return"undefined"!=typeof console&&null!==console?console.log("notyetupdated"):void 0}},iframes:i.iframes,docs:i.docs,tree:i.tree,godoc:function(e){var n;return"_blank"===(null!=(n=e.opts)?n.target:void 0)?(window.open(e.url,e.id),!0):e.url.match(/(https?:)?\/\/[^/]*(github|facebook)\.com/)?(window.open(e.url,e.id),!0):t.go("/"+t.hackId+"/"+decodeURIComponent(e.id))},open:function(t){return window.open(t.url,t.id),!1},activate:function(t){var e;return e=i.activate(t),"hackfoldr"===(null!=e?e.type:void 0)&&"undefined"!=typeof console&&null!==console?console.log("folder!!"):void 0},saveBtn:void 0,saveModalOpts:{dialogFade:!0},saveModalOpen:!1,showSaveModal:function(e,n,r){return t.saveModalOpen=e,r&&(t.saveBtn=$(r.target)),n&&(o.savebtn="consumed",t.saveBtn)?t.saveBtn.fadeOut(1e3):void 0},showSaveBtn:function(){return"consumed"!==o.savebtn},HackFolder:i,barframeSrc:function(t){var n;return n=t.opts.bar.replace(/\{(\w+)\}/g,function(){return t[arguments[1]]}),e.trustAsResourceUrl(n)},iframeCallback:function(e){return null==e&&(e={}),function(n){return t.$apply(function(){return"undefined"!=typeof console&&null!==console&&console.log("iframecb",n,e),e.title&&(document.title=e.title+" – hackfoldr"),e.noiframe="fail"===n?!0:!1,"unsure"===n?e.iframeunsure=!0:void 0})}},debug:function(t){return"undefined"!=typeof console&&null!==console?console.log(t,this):void 0},reload:function(t){return i.getIndex(t,!0,function(){})}}),t.$watch("hackId",function(e){return i.getIndex(e,!1,function(){var n,o;return t.$watch("docId",function(n){var r;return n&&(r=i.activate(n)),"hackfoldr"===(null!=r?r.type:void 0)?(t.showIndex=!0,i.loadRemoteCsv(r.id,function(r,o,a){var c,u,s;return c=function(){var t,e,r,o=[];for(t=0,r=(e=i.tree).length;r>t;++t)c=e[t],c.id===n&&o.push(c);return o}()[0],c.tagFilter=null!=(u=c.tags)&&null!=(s=u[0])?s.content:void 0,c.chidlren||(null==c.children&&(c.children=null!=a?a[0].children:void 0),(u=i.docs).splice.apply(u,[o.length,0].concat(slice$.call(o)))),t.indexDocs=o,t.indexSearch=e.replace(/^g0v-/,"")})):t.showIndex=!1}),t.showIndex="hack.index"===r.current.name,t.showIndex?void 0:!t.docId&&(n=null!=(o=i.docs[0])?o.id:void 0)?r.transitionTo("hack.doc",{docId:n,hackId:t.hackId}):void 0})}),t.collapsed=null!=(a=o.collapsed)?a:n.innerWidth<768,t.$watch("collapsed",function(t){return null!=t?o.collapsed=t:void 0}),t.hackId=(c=r.params.hackId)?c:"nonuke2014",t.$watch("$state.params.docId",function(e){return e?t.docId=encodeURIComponent(encodeURIComponent(e)):void 0}),t.sidebar=!1,t.toggleSidebar=function(){return t.collapsed=!1,t.sidebar=!t.sidebar}})}).directive("resize",["$window"].concat(function(t){return function(e,n){var r;return r=function(){return e.width=t.innerWidth,e.height=t.innerHeight,e.contentHeight=t.innerHeight-$(n).offset().top},angular.element(t).bind("resize",function(){return e.$apply(r)}),r()}})).directive("ngxIframe",["$parse"].concat(function(t){return{link:function(e,n,r){var o,i,a;return o=t(r.ngxIframe)(e),i=function(t,e){var n;return n=!function(){try{return"about:blank"==t.location}catch(e){}}(),o(e&&$.browser.mozilla?"unsure":n?"ok":"fail")},$(n).load(function(){return clearTimeout(a),i(this.contentWindow,!0)}),a=setTimeout(function(){return i(n[0].contentWindow)},5e3)}}})).directive("ngxNoclick",function(){return function(t,e){return $(e).click(function(t){return t.preventDefault(),!1})}}).directive("ngxClickMeta",["$parse"].concat(function(t){return{link:function(e,n,r){var o,i;return o=t(r.ngxClickMeta),i=navigator.appVersion.match(/Win/)?function(t){return t.ctrlKey}:function(t){return t.metaKey},$(n).click(function(t){return i(t)&&!o(e)?(t.preventDefault(),!1):void 0})}}})).directive("ngxFinal",function(){return function(t,e){return $(e).click(function(t){return t.stopPropagation()})}}).directive("scrollbar",["$window"].concat(function(t){return function(e){var n;return n=function(){var n;return n=$(".index"),e.hasScrollbar=n.get(0).scrollHeight>t.innerHeight-$(".navbar").height()},angular.element(t).bind("resize",function(){return e.$apply(n)}),e.$watch("docs",n),n()}})).factory({HackFolder:["$http","$sce"].concat(function(t,e){var n,r,o,i,a;return n={},r=[],o=[],a={iframes:n,docs:r,tree:o,activate:function(t,i){function a(t){return t.id}var c,u,s,l,d,p,h,f,v,g,m;for(null==i&&(i=!1),u=function(){var e,n,o,i=[];for(e=0,o=(n=r).length;o>e;++e)c=n[e],c.id===t&&i.push(c);return i}()[0],s=null!=u?u.type:void 0,l=0,p=(d=o).length;p>l;++l)h=d[l],(f=null!=h&&null!=(v=h.children)?v.map(a):void 0)&&in$(t,f)&&(h.expand=!0);return g=i?"edit":"view",m=function(){var e;switch(e=[s],!1){case"gdoc"!==e[0]:return"https://docs.google.com/document/d/"+t+"/"+g+"?pli=1&overridemobile=true";case"gsheet"!==e[0]:return"https://docs.google.com/spreadsheet/ccc?key="+t;case"gpresent"!==e[0]:return"https://docs.google.com/presentation/d/"+t+"/"+g;case"gdraw"!==e[0]:return"https://docs.google.com/drawings/d/"+t+"/"+g;case"gsheet"!==e[0]:return"https://docs.google.com/spreadsheet/ccc?key="+t;case"hackpad"!==e[0]:return"https://"+(null!=(e=u.site)?e:"")+"hackpad.com/"+t;case"ethercalc"!==e[0]:return"https://ethercalc.org/"+t;case"video"!==e[0]:if("youtube"===u.provider)return"https://www.youtube.com/embed/"+t;if("ustream"===u.provider)return"http://www.ustream.tv/embed/"+t+"?v=3";break;case"url"!==e[0]:return decodeURIComponent(decodeURIComponent(t));default:return""}}(),null!=u&&u.hashtag&&(m+=null!=u?u.hashtag:void 0),m&&(m=e.trustAsResourceUrl(m)),"hackfoldr"===(null!=u?u.type:void 0)?u:((f=n[t])?(f.src=m,f.mode=g):n[t]={src:m,doc:u,mode:g},u)},getIndex:function(e,n,o){var a,c,u=this;return i!==e||n?(a=0,(c=function(){return t.get("https://www.ethercalc.org/_/"+e+"/csv").error(function(){return++a>3?void 0:setTimeout(c,1e3)}).success(function(t){return i=e,r.length=0,u.processCsv(t,o)})})()):o(r)},processCsv:function(t,e){return this.loadCsv(t,r,o,function(t,n){return a.folderTitle=t,e(n)})},loadRemoteCsv:function(e,n){var r=this;return t.get("https://www.ethercalc.org/_/"+e+"/csv").success(function(t){var e,o;return e=[],o=[],r.loadCsv(t,e,o,function(t){return n(t,e,o)})})},loadCsv:function(t,e,n,r){function o(){try{return JSON.parse(w.replace(/""/g,'"'))}catch(t){}}function i(){var t;switch(t=[g],!1){case void 0!==t[0]:return u||(m&&(u=m,m=null),w&&(s=w)),{title:m,type:"dummy",id:"dummy"};case!(F=/^\/\/(.*?)(?:\#(.*))?$/.exec(t[0])):return{type:"hackfoldr",id:F[1],tag:F[2]};case!(F=/^https?:\/\/www\.ethercalc\.(?:com|org)\/(.*)/.exec(t[0])):return{type:"ethercalc",id:F[1]};case!(F=/https:\/\/docs\.google\.com\/document\/(?:d\/)?([^\/]+)\//.exec(t[0])):return{type:"gdoc",id:F[1]};case!(F=/https:\/\/docs\.google\.com\/spreadsheet\/ccc\?key=([^\/?&]+)/.exec(t[0])):return{type:"gsheet",id:F[1]};case!(F=/https:\/\/docs\.google\.com\/drawings\/(?:d\/)?([^\/]+)\//.exec(t[0])):return{type:"gdraw",id:F[1]};case!(F=/https:\/\/docs\.google\.com\/presentation\/(?:d\/)?([^\/]+)\//.exec(t[0])):return{type:"gpresent",id:F[1]};case!(F=/https?:\/\/(\w+\.)?hackpad\.com\/(?:.*?-)?([\w]+)(\#.*)?$/.exec(t[0])):return{type:"hackpad",site:F[1],id:F[2]};case!(F=/https?:\/\/(?:youtu\.be\/|(?:www\.)?youtube\.com\/(?:embed\/|watch\?v=))([-\w]+)/.exec(t[0])):return{type:"video",provider:"youtube",id:F[1],icon:"http://g.etfv.co/"+g};case!(F=/https?:\/\/(?:www\.)?ustream\.tv\/(?:embed|channel)\/([-\w]+)/.exec(t[0])):return{type:"video",provider:"ustream",id:F[1],icon:"http://g.etfv.co/"+g};case!(F=/^(https?:\/\/[^\/]+)/.exec(t[0])):return{type:"url",id:encodeURIComponent(encodeURIComponent(g)),icon:"http://g.etfv.co/"+F[1]};default:return"undefined"!=typeof console&&null!==console?console.log("unrecognized",g):void 0}}function a(t){return t.length}function c(t){var e,n,r,o,i;return e=t.match(/^(.*?)(?::(.*))?$/),n=e[0],r=e[1],o=e[2],i=slice$.call(e,3),{content:r,"class":null!=o?o:"warning"}}var u,s,l,d,p,h,f,v,g,m,w,b,y,k,I,x,C,T,L,F,O,z,E,R,S,A;for(t=replace$.call(t,/^\"?#.*\n/gm,""),s={},d=[],p=0,f=(h=CSV.parse(t)).length;f>p;++p)v=h[p],g=v[0],m=v[1],w=v[2],b=v[3],y=v[4],k=slice$.call(v,5),m&&(m=replace$.call(m,/^"|"$/g,""),w&&(w=replace$.call(w,/^"|"$/g,"")),w&&(w=o()),null==w&&(w={}),b&&(b=replace$.call(b,/^"|"$/g,"")),I=g.match(/^"?(\s*)(\S+?)?(#\S+?)?\s*"?$/),x=I[0],C=I[1],g=I[2],T=I[3],L=import$({summary:y,hashtag:T,url:g,title:m,indent:C.length,opts:import$(import$({},s),w)},i()),d.push("dummy"!==L.type||null!=(I=L.title)&&I.length?import$(import$({icon:"/img/"+L.type+".png"},L),{tags:(null!=(I=null!=(O=L.opts)?O.tags:void 0)?I:[]).concat((null!=(I=null!=b?b.split(","):void 0)?I:[]).filter(a).map(c))}):null));for(l=d,l.filter(function(t){return null!=t?t.url:void 0}).map(function(t){var e,n,r;return"video"===t.type&&"youtube"===t.provider?(e=gapi.client.youtube.videos.list({id:t.id,part:"snippet"}),e.execute(function(e){var n;return"live"===(null!=(n=e.items)?n[0].snippet.liveBroadcastContent:void 0)?t.tags=t.tags.concat({"class":"warning",content:"LIVE"}):void 0})):(n=t.url.match(/ustream.tv\/embed\/([^?]+)/))?(r=n[1],$.get("http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D'http%3A%2F%2Fapi.ustream.tv%2Fjson%2Fchannel%2F"+r+"%2FgetValueOf%2Fstatus'&format=json&diagnostics=true&callback=",function(e){var n,r;return"live"===JSON.parse(null!=(n=e.query)&&null!=(r=n.results)&&null!=(n=r.body)?n.p:void 0).results?t.tags=t.tags.concat({"class":"warning",content:"LIVE"}):void 0})):void 0}),e.splice.apply(e,[0,e.length].concat(slice$.call(l.filter(function(t){return null!=t})))),z=0,d=[],p=0,f=e.length;f>p;++p)R=p,L=e[p],R>0&&L.indent?(S=e[z],A=null!=(h=S.children)?h:S.children=[],A.push(L),d.push(null)):(z=R,d.push(L));return E=d,E=E.filter(function(t){return null!=t}),E=E.map(function(t){var e,n;return t.children&&(t.expand=null!=(e=null!=(n=t.opts)?n.expand:void 0)?e:t.children.length<5),t}),n.splice.apply(n,[0,n.length].concat(slice$.call(E))),r(u,e)}}})});