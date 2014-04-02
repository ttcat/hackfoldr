function import$(e,n){var t={}.hasOwnProperty;for(var o in n)t.call(n,o)&&(e[o]=n[o]);return e}function in$(e,n){for(var t=-1,o=n.length>>>0;++t<o;)if(e===n[t])return!0;return!1}require.register("config.jsenv",function(e,n,t){t.exports={BUILD:"git-a945679",FIREBASE:"https://g0vhub.firebaseio.com",GITHUB_API_PROXY:"http://utcr.org:8080",G0V_LABELS:[{color:"5CC2D6",name:"datainput",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"資料輸入"},{color:"F2800D",name:"translation",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"翻譯"},{color:"C7F53D",name:"OCR",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"OCR/圖文辨識"},{color:"F53D3D",name:"research",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"研究"},{color:"40BF40",name:"drawing",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"繪圖"},{color:"2EB88A",name:"parser",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"爬資料"},{color:"FFE14D",name:"bitesized",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"小工作"},{color:"3399CC",name:"doc",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"文件（技術）"},{color:"000000",name:"devops",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"維運"},{color:"8040BF",name:"promote",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"宣傳"},{color:"CC66CC",name:"writing",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"文案"},{color:"004C99",name:"design",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"設計"},{color:"A30000",name:"code",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"程式"},{color:"66E6FF",name:"frontend",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"前端"}],CATEGORIZATION:[{"class":"btn-primary",name:"專案類",tags:["立法院","鄉民關心你"]},{"class":"",name:"議題類",tags:["環保","農業","服貿","通訊","資訊自由"]},{"class":"btn-success",name:"專業類",tags:["法律","設計","文字","程式","新聞","行銷","廣告","繪圖","攝影"]},{"class":"btn-info",name:"特殊技能類",tags:["手沖咖啡","3D printing"]},{"class":"btn-warning",name:"以技能分類",tags:["爬資料","轉換資料"]}],GOOGLE_API_BROWSER_APPLICATION_KEY:"AIzaSyCHm8NgD_p5F_-e7euH8BZiB4wSB8pOZ2A"}}),angular.module("scroll",[]).value("$anchorScroll",angular.noop),angular.module("app",["ui","app.templates","app.controllers","ui.state","ui.bootstrap"]).config(["$stateProvider","$urlRouterProvider","$locationProvider"].concat(function(e,n,t){return e.state("about",{url:"/about",templateUrl:"partials/about.html"}).state("hack",{url:"/{hackId}",templateUrl:"partials/hack.html",controller:"HackFolderCtrl",onEnter:function(){return $("body").addClass("hide-overflow")},onExit:function(){return $("body").removeClass("hide-overflow")}}).state("hack.index",{url:"/__index"}).state("hack.doc",{url:"/{docId}"}),n.otherwise("/congressoccupied"),t.html5Mode(!0)})).run(["$rootScope","$state","$stateParams","$location"].concat(function(e,n,t,o){return e.$state=n,e.$stateParam=t,e.go=function(e){return o.path(e)},e._build=require("config.jsenv").BUILD,e.$on("$stateChangeSuccess",function(e,n){var t;return t=n.name,"undefined"!=typeof window&&null!==window&&"function"==typeof window.ga?window.ga("send","pageview",{page:o.$$url,title:t}):void 0}),e.safeApply=function(e,n){var t;return t=e.$root.$$phase,"$apply"===t||"$digest"===t?"function"==typeof n?n():void 0:e.$apply(n)}})),this.googleOnLoadCallback=function(){return gapi.client.setApiKey(require("config.jsenv").GOOGLE_API_BROWSER_APPLICATION_KEY),gapi.client.load("youtube","v3",function(){return angular.element(document).ready(function(){return angular.bootstrap(document,["app"])})})};var slice$=[].slice,replace$="".replace;angular.module("app.controllers",["ui.state","ngCookies"]).controller({AppCtrl:["$scope","$window","$state","$rootScope","$timeout"].concat(function(e,n,t,o,r){return e.$watch("$state.current.name",function(n){return"irc"===n?e.ircEnabled=!0:void 0}),window.addEventListener("load",function(){return r(function(){return window.scrollTo(0,1)},0)}),r(function(){return o.hideGithubRibbon=!0},1e4)})}).controller({HackFolderCtrl:["$scope","$window","$state","$cookies","HackFolder"].concat(function(e,n,t,o,r){var c,a;return import$(e,{hasViewMode:function(e){return null!=e?e.match(/g(doc|present|draw)/):void 0},sortableOptions:{update:function(){return"undefined"!=typeof console&&null!==console?console.log("notyetupdated"):void 0}},iframes:r.iframes,docs:r.docs,tree:r.tree,godoc:function(n){var t;return"_blank"===(null!=(t=n.opts)?t.target:void 0)?(window.open(n.url,n.id),!0):n.url.match(/(https?:)?\/\/[^/]*(github|facebook)\.com/)?(window.open(n.url,n.id),!0):e.go("/"+e.hackId+"/"+decodeURIComponent(n.id))},open:function(e){return window.open(e.url,e.id),!1},activate:function(e){var n;return n=r.activate(e),"hackfoldr"===(null!=n?n.type:void 0)&&"undefined"!=typeof console&&null!==console?console.log("folder!!"):void 0},saveBtn:void 0,saveModalOpts:{dialogFade:!0},saveModalOpen:!1,showSaveModal:function(n,t,r){return e.saveModalOpen=n,r&&(e.saveBtn=$(r.target)),t&&(o.savebtn="consumed",e.saveBtn)?e.saveBtn.fadeOut(1e3):void 0},showSaveBtn:function(){return"consumed"!==o.savebtn},HackFolder:r,iframeCallback:function(n){return function(o){return e.$apply(function(){return"undefined"!=typeof console&&null!==console&&console.log("iframecb",o,n),t.current.title=n.title+" – hackfoldr",n.noiframe="fail"===o?!0:!1,"unsure"===o?n.iframeunsure=!0:void 0})}},debug:function(e){return"undefined"!=typeof console&&null!==console?console.log(e,this):void 0},reload:function(e){return r.getIndex(e,!0,function(){})}}),e.$watch("hackId",function(n){return r.getIndex(n,!1,function(){var o,c;return e.$watch("docId",function(t){var o;return t&&(o=r.activate(t)),"hackfoldr"===(null!=o?o.type:void 0)?(e.showIndex=!0,r.loadRemoteCsv(o.id,function(o,c,a){var l,i,u;return l=function(){var e,n,o,c=[];for(e=0,o=(n=r.tree).length;o>e;++e)l=n[e],l.id===t&&c.push(l);return c}()[0],l.tagFilter=null!=(i=l.tags)&&null!=(u=i[0])?u.content:void 0,l.chidlren||(null==l.children&&(l.children=null!=a?a[0].children:void 0),(i=r.docs).splice.apply(i,[c.length,0].concat(slice$.call(c)))),e.indexDocs=c,e.indexSearch=n.replace(/^g0v-/,"")})):e.showIndex=!1}),e.showIndex="hack.index"===t.current.name,e.showIndex?void 0:!e.docId&&(o=null!=(c=r.docs[0])?c.id:void 0)?t.transitionTo("hack.doc",{docId:o,hackId:e.hackId}):void 0})}),e.collapsed=null!=(c=o.collapsed)?c:n.innerWidth<768,e.$watch("collapsed",function(e){return null!=e?o.collapsed=e:void 0}),e.hackId=(a=t.params.hackId)?a:"congressoccupied",e.$watch("$state.params.docId",function(n){return n?e.docId=encodeURIComponent(encodeURIComponent(n)):void 0})})}).directive("resize",["$window"].concat(function(e){return function(n,t){var o;return o=function(){return n.width=e.innerWidth,n.height=e.innerHeight,n.contentHeight=e.innerHeight-$(t).offset().top},angular.element(e).bind("resize",function(){return n.$apply(o)}),o()}})).directive("ngxIframe",["$parse"].concat(function(e){return{link:function(n,t,o){var r,c,a;return r=e(o.ngxIframe)(n),c=function(e,n){var t;return t=!function(){try{return"about:blank"==e.location}catch(n){}}(),r(n&&$.browser.mozilla?"unsure":t?"ok":"fail")},$(t).load(function(){return clearTimeout(a),c(this.contentWindow,!0)}),a=setTimeout(function(){return c(t[0].contentWindow)},5e3)}}})).directive("ngxNoclick",function(){return function(e,n){return $(n).click(function(e){return e.preventDefault(),!1})}}).directive("ngxClickMeta",["$parse"].concat(function(e){return{link:function(n,t,o){var r,c;return r=e(o.ngxClickMeta),c=navigator.appVersion.match(/Win/)?function(e){return e.ctrlKey}:function(e){return e.metaKey},$(t).click(function(e){return c(e)&&!r(n)?(e.preventDefault(),!1):void 0})}}})).directive("ngxFinal",function(){return function(e,n){return $(n).click(function(e){return e.stopPropagation()})}}).directive("scrollbar",["$window"].concat(function(e){return function(n){var t;return t=function(){var t;return t=$(".index"),n.hasScrollbar=t.get(0).scrollHeight>e.innerHeight-$(".navbar").height()},angular.element(e).bind("resize",function(){return n.$apply(t)}),n.$watch("docs",t),t()}})).factory({HackFolder:["$http","$sce"].concat(function(e,n){var t,o,r,c,a;return t={},o=[],r=[],a={iframes:t,docs:o,tree:r,activate:function(e,c){function a(e){return e.id}var l,i,u,s,d,p,h,g,v,f,m;for(null==c&&(c=!1),i=function(){var n,t,r,c=[];for(n=0,r=(t=o).length;r>n;++n)l=t[n],l.id===e&&c.push(l);return c}()[0],u=null!=i?i.type:void 0,s=0,p=(d=r).length;p>s;++s)h=d[s],(g=null!=h&&null!=(v=h.children)?v.map(a):void 0)&&in$(e,g)&&(h.expand=!0);return f=c?"edit":"view",m=function(){var n;switch(n=[u],!1){case"gdoc"!==n[0]:return"https://docs.google.com/document/d/"+e+"/"+f+"?pli=1&overridemobile=true";case"gsheet"!==n[0]:return"https://docs.google.com/spreadsheet/ccc?key="+e;case"gpresent"!==n[0]:return"https://docs.google.com/presentation/d/"+e+"/"+f;case"gdraw"!==n[0]:return"https://docs.google.com/drawings/d/"+e+"/"+f;case"gsheet"!==n[0]:return"https://docs.google.com/spreadsheet/ccc?key="+e;case"hackpad"!==n[0]:return"https://"+(null!=(n=i.site)?n:"")+"hackpad.com/"+e;case"ethercalc"!==n[0]:return"https://ethercalc.org/"+e;case"url"!==n[0]:return decodeURIComponent(decodeURIComponent(e));default:return""}}(),null!=i&&i.hashtag&&(m+=null!=i?i.hashtag:void 0),m&&(m=n.trustAsResourceUrl(m)),"hackfoldr"===(null!=i?i.type:void 0)?i:((g=t[e])?(g.src=m,g.mode=f):t[e]={src:m,doc:i,mode:f},i)},getIndex:function(n,t,r){var a,l,i=this;return c!==n||t?(a=0,(l=function(){return e.get("https://www.ethercalc.org/_/"+n+"/csv").error(function(){return++a>3?void 0:setTimeout(l,1e3)}).success(function(e){return c=n,o.length=0,i.processCsv(e,r)})})()):r(o)},processCsv:function(e,n){return this.loadCsv(e,o,r,function(e,t){return a.folderTitle=e,n(t)})},loadRemoteCsv:function(n,t){var o=this;return e.get("https://www.ethercalc.org/_/"+n+"/csv").success(function(e){var n,r;return n=[],r=[],o.loadCsv(e,n,r,function(e){return t(e,n,r)})})},loadCsv:function(e,n,t,o){function r(){try{return JSON.parse(null!=w?w:"{}")}catch(e){}}function c(){var e;switch(e=[f],!1){case void 0!==e[0]:return i||m&&(i=m,m=null),{title:m,type:"dummy",id:"dummy"};case!(L=/^\/\/(.*?)(?:\#(.*))?$/.exec(e[0])):return{type:"hackfoldr",id:L[1],tag:L[2]};case!(L=/^https?:\/\/www\.ethercalc\.(?:com|org)\/(.*)/.exec(e[0])):return{type:"ethercalc",id:L[1]};case!(L=/https:\/\/docs\.google\.com\/document\/(?:d\/)?([^\/]+)\//.exec(e[0])):return{type:"gdoc",id:L[1]};case!(L=/https:\/\/docs\.google\.com\/spreadsheet\/ccc\?key=([^\/?&]+)/.exec(e[0])):return{type:"gsheet",id:L[1]};case!(L=/https:\/\/docs\.google\.com\/drawings\/(?:d\/)?([^\/]+)\//.exec(e[0])):return{type:"gdraw",id:L[1]};case!(L=/https:\/\/docs\.google\.com\/presentation\/(?:d\/)?([^\/]+)\//.exec(e[0])):return{type:"gpresent",id:L[1]};case!(L=/https?:\/\/(\w+\.)?hackpad\.com\/(?:.*?-)?([\w]+)(\#.*)?$/.exec(e[0])):return{type:"hackpad",site:L[1],id:L[2]};case!(L=/^(https?:\/\/[^\/]+)/.exec(e[0])):return{type:"url",id:encodeURIComponent(encodeURIComponent(f)),icon:"http://g.etfv.co/"+L[1]};default:return"undefined"!=typeof console&&null!==console?console.log("unrecognized",f):void 0}}function a(e){return e.length}function l(e){var n,t,o,r,c;return n=e.match(/^(.*?)(?::(.*))?$/),t=n[0],o=n[1],r=n[2],c=slice$.call(n,3),{content:o,"class":null!=r?r:"warning"}}var i,u,s,d,p,h,g,v,f,m,w,k,b,y,I,C,x,F,L,O,z,R,W,A,B;for(e=replace$.call(e,/^\"?#.*\n/gm,""),s=[],d=0,h=(p=e.split(/\n/)).length;h>d;++d)g=p[d],g&&(v=g.split(/,/),f=v[0],m=v[1],w=v[2],k=v[3],b=v[4],y=slice$.call(v,5),m=replace$.call(m,/^"|"$/g,""),w&&(w=replace$.call(w,/^"|"$/g,"")),w&&(w=w.replace(/""/g,'"')),k&&(k=replace$.call(k,/^"|"$/g,"")),v=f.match(/^"?(\s*)(\S+?)?(#\S+?)?\s*"?$/),I=v[0],C=v[1],f=v[2],x=v[3],F=import$({summary:b,hashtag:x,url:f,title:m,indent:C.length,opts:r()},c()),s.push("dummy"!==F.type||null!=(v=F.title)&&v.length?import$(import$({icon:"/img/"+F.type+".png"},F),{tags:(null!=(v=null!=(O=F.opts)?O.tags:void 0)?v:[]).concat((null!=(v=null!=k?k.split(","):void 0)?v:[]).filter(a).map(l))}):null));for(u=s,u.filter(function(e){return e&&e.url}).map(function(e){var n,t,o;return(n=e.url.match(/youtube.com\/embed\/(.*)/))?(t=n[1],o=gapi.client.youtube.videos.list({id:t,part:"snippet"}),o.execute(function(n){var t;return"live"===(null!=(t=n.items)?t[0].snippet.liveBroadcastContent:void 0)?e.tags=e.tags.concat({"class":"warning",content:"LIVE"}):void 0})):(n=e.url.match(/ustream.tv\/embed\/(.*)/))?(t=n[1],$.get("http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D'http%3A%2F%2Fapi.ustream.tv%2Fjson%2Fchannel%2F"+t+"%2FgetValueOf%2Fstatus'&format=json&diagnostics=true&callback=",function(n){var t,o;return"live"===JSON.parse(null!=(t=n.query)&&null!=(o=t.results)&&null!=(t=o.body)?t.p:void 0).results?e.tags=e.tags.concat({"class":"warning",content:"LIVE"}):void 0})):void 0}),n.splice.apply(n,[0,n.length].concat(slice$.call(u.filter(function(e){return null!=e})))),z=0,s=[],d=0,h=n.length;h>d;++d)W=d,F=n[d],W>0&&F.indent?(A=n[z],B=null!=(p=A.children)?p:A.children=[],B.push(F),s.push(null)):(z=W,s.push(F));return R=s,R=R.filter(function(e){return null!=e}),R=R.map(function(e){var n,t;return e.children&&(e.expand=null!=(n=null!=(t=e.opts)?t.expand:void 0)?n:e.children.length<5),e}),t.splice.apply(t,[0,t.length].concat(slice$.call(R))),o(i,n)}}})});