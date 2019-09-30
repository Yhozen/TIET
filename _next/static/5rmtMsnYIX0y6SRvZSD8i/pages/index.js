(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{O3Xf:function(t,e,n){var r;!function(){"use strict";function n(t){if("undefined"===typeof t)throw new Error('Pathformer [constructor]: "element" parameter is required');if(t.constructor===String&&!(t=document.getElementById(t)))throw new Error('Pathformer [constructor]: "element" parameter is not related to an existing ID');if(!(t instanceof window.SVGElement||t instanceof window.SVGGElement||/^svg$/i.test(t.nodeName)))throw new Error('Pathformer [constructor]: "element" parameter must be a string or a SVGelement');this.el=t,this.scan(t)}var i,s,a,o;function l(t,e,n){i(),this.isReady=!1,this.setElement(t,e),this.setOptions(e),this.setCallback(n),this.isReady&&this.init()}n.prototype.TYPES=["line","ellipse","circle","polygon","polyline","rect"],n.prototype.ATTR_WATCH=["cx","cy","points","r","rx","ry","x","x1","x2","y","y1","y2"],n.prototype.scan=function(t){for(var e,n,r,i=t.querySelectorAll(this.TYPES.join(",")),s=0;s<i.length;s++)n=(0,this[(e=i[s]).tagName.toLowerCase()+"ToPath"])(this.parseAttr(e.attributes)),r=this.pathMaker(e,n),e.parentNode.replaceChild(r,e)},n.prototype.lineToPath=function(t){var e={},n=t.x1||0,r=t.y1||0,i=t.x2||0,s=t.y2||0;return e.d="M"+n+","+r+"L"+i+","+s,e},n.prototype.rectToPath=function(t){var e={},n=parseFloat(t.x)||0,r=parseFloat(t.y)||0,i=parseFloat(t.width)||0,s=parseFloat(t.height)||0;if(t.rx||t.ry){var a=parseInt(t.rx,10)||-1,o=parseInt(t.ry,10)||-1;a=Math.min(Math.max(a<0?o:a,0),i/2),o=Math.min(Math.max(o<0?a:o,0),s/2),e.d="M "+(n+a)+","+r+" L "+(n+i-a)+","+r+" A "+a+","+o+",0,0,1,"+(n+i)+","+(r+o)+" L "+(n+i)+","+(r+s-o)+" A "+a+","+o+",0,0,1,"+(n+i-a)+","+(r+s)+" L "+(n+a)+","+(r+s)+" A "+a+","+o+",0,0,1,"+n+","+(r+s-o)+" L "+n+","+(r+o)+" A "+a+","+o+",0,0,1,"+(n+a)+","+r}else e.d="M"+n+" "+r+" L"+(n+i)+" "+r+" L"+(n+i)+" "+(r+s)+" L"+n+" "+(r+s)+" Z";return e},n.prototype.polylineToPath=function(t){var e,n,r={},i=t.points.trim().split(" ");if(-1===t.points.indexOf(",")){var s=[];for(e=0;e<i.length;e+=2)s.push(i[e]+","+i[e+1]);i=s}for(n="M"+i[0],e=1;e<i.length;e++)-1!==i[e].indexOf(",")&&(n+="L"+i[e]);return r.d=n,r},n.prototype.polygonToPath=function(t){var e=n.prototype.polylineToPath(t);return e.d+="Z",e},n.prototype.ellipseToPath=function(t){var e={},n=parseFloat(t.rx)||0,r=parseFloat(t.ry)||0,i=parseFloat(t.cx)||0,s=parseFloat(t.cy)||0,a=i-n,o=s,l=parseFloat(i)+parseFloat(n),c=s;return e.d="M"+a+","+o+"A"+n+","+r+" 0,1,1 "+l+","+c+"A"+n+","+r+" 0,1,1 "+a+","+c,e},n.prototype.circleToPath=function(t){var e={},n=parseFloat(t.r)||0,r=parseFloat(t.cx)||0,i=parseFloat(t.cy)||0,s=r-n,a=i,o=parseFloat(r)+parseFloat(n),l=i;return e.d="M"+s+","+a+"A"+n+","+n+" 0,1,1 "+o+","+l+"A"+n+","+n+" 0,1,1 "+s+","+l,e},n.prototype.pathMaker=function(t,e){var n,r,i=document.createElementNS("http://www.w3.org/2000/svg","path");for(n=0;n<t.attributes.length;n++)r=t.attributes[n],-1===this.ATTR_WATCH.indexOf(r.name)&&i.setAttribute(r.name,r.value);for(n in e)i.setAttribute(n,e[n]);return i},n.prototype.parseAttr=function(t){for(var e,n={},r=0;r<t.length;r++){if(e=t[r],-1!==this.ATTR_WATCH.indexOf(e.name)&&-1!==e.value.indexOf("%"))throw new Error("Pathformer [parseAttr]: a SVG shape got values in percentage. This cannot be transformed into 'path' tags. Please use 'viewBox'.");n[e.name]=e.value}return n},l.LINEAR=function(t){return t},l.EASE=function(t){return-Math.cos(t*Math.PI)/2+.5},l.EASE_OUT=function(t){return 1-Math.pow(1-t,3)},l.EASE_IN=function(t){return Math.pow(t,3)},l.EASE_OUT_BOUNCE=function(t){var e=1-Math.cos(t*(.5*Math.PI)),n=Math.pow(e,1.5),r=Math.pow(1-t,2);return 1-r+(1-Math.abs(Math.cos(n*(2.5*Math.PI))))*r},l.prototype.setElement=function(t,e){var n,r;if("undefined"===typeof t)throw new Error('Vivus [constructor]: "element" parameter is required');if(t.constructor===String&&!(t=document.getElementById(t)))throw new Error('Vivus [constructor]: "element" parameter is not related to an existing ID');if(this.parentEl=t,e&&e.file){r=this,n=function(){var t=document.createElement("div");t.innerHTML=this.responseText;var n=t.querySelector("svg");if(!n)throw new Error("Vivus [load]: Cannot find the SVG in the loaded file : "+e.file);r.el=n,r.el.setAttribute("width","100%"),r.el.setAttribute("height","100%"),r.parentEl.appendChild(r.el),r.isReady=!0,r.init(),r=null};var i=new window.XMLHttpRequest;return i.addEventListener("load",n),i.open("GET",e.file),void i.send()}switch(t.constructor){case window.SVGSVGElement:case window.SVGElement:case window.SVGGElement:this.el=t,this.isReady=!0;break;case window.HTMLObjectElement:r=this,(n=function(e){if(!r.isReady){if(r.el=t.contentDocument&&t.contentDocument.querySelector("svg"),!r.el&&e)throw new Error("Vivus [constructor]: object loaded does not contain any SVG");r.el&&(t.getAttribute("built-by-vivus")&&(r.parentEl.insertBefore(r.el,t),r.parentEl.removeChild(t),r.el.setAttribute("width","100%"),r.el.setAttribute("height","100%")),r.isReady=!0,r.init(),r=null)}})()||t.addEventListener("load",n);break;default:throw new Error('Vivus [constructor]: "element" parameter is not valid (or miss the "file" attribute)')}},l.prototype.setOptions=function(t){var e=["delayed","sync","async","nsync","oneByOne","scenario","scenario-sync"],n=["inViewport","manual","autostart"];if(void 0!==t&&t.constructor!==Object)throw new Error('Vivus [constructor]: "options" parameter must be an object');if((t=t||{}).type&&-1===e.indexOf(t.type))throw new Error("Vivus [constructor]: "+t.type+" is not an existing animation `type`");if(this.type=t.type||e[0],t.start&&-1===n.indexOf(t.start))throw new Error("Vivus [constructor]: "+t.start+" is not an existing `start` option");if(this.start=t.start||n[0],this.isIE=-1!==window.navigator.userAgent.indexOf("MSIE")||-1!==window.navigator.userAgent.indexOf("Trident/")||-1!==window.navigator.userAgent.indexOf("Edge/"),this.duration=o(t.duration,120),this.delay=o(t.delay,null),this.dashGap=o(t.dashGap,1),this.forceRender=t.hasOwnProperty("forceRender")?!!t.forceRender:this.isIE,this.reverseStack=!!t.reverseStack,this.selfDestroy=!!t.selfDestroy,this.onReady=t.onReady,this.map=[],this.frameLength=this.currentFrame=this.delayUnit=this.speed=this.handle=null,this.ignoreInvisible=!!t.hasOwnProperty("ignoreInvisible")&&!!t.ignoreInvisible,this.animTimingFunction=t.animTimingFunction||l.LINEAR,this.pathTimingFunction=t.pathTimingFunction||l.LINEAR,this.delay>=this.duration)throw new Error("Vivus [constructor]: delay must be shorter than duration")},l.prototype.setCallback=function(t){if(t&&t.constructor!==Function)throw new Error('Vivus [constructor]: "callback" parameter must be a function');this.callback=t||function(){}},l.prototype.mapping=function(){var t,e,n,r,i,s,a,l;for(l=s=a=0,e=this.el.querySelectorAll("path"),t=0;t<e.length;t++)n=e[t],this.isInvisible(n)||(i={el:n,length:Math.ceil(n.getTotalLength())},isNaN(i.length)?window.console&&console.warn&&console.warn("Vivus [mapping]: cannot retrieve a path element length",n):(this.map.push(i),n.style.strokeDasharray=i.length+" "+(i.length+2*this.dashGap),n.style.strokeDashoffset=i.length+this.dashGap,i.length+=this.dashGap,s+=i.length,this.renderPath(t)));for(s=0===s?1:s,this.delay=null===this.delay?this.duration/3:this.delay,this.delayUnit=this.delay/(e.length>1?e.length-1:1),this.reverseStack&&this.map.reverse(),t=0;t<this.map.length;t++){switch(i=this.map[t],this.type){case"delayed":i.startAt=this.delayUnit*t,i.duration=this.duration-this.delay;break;case"oneByOne":i.startAt=a/s*this.duration,i.duration=i.length/s*this.duration;break;case"sync":case"async":case"nsync":i.startAt=0,i.duration=this.duration;break;case"scenario-sync":n=i.el,r=this.parseAttr(n),i.startAt=l+(o(r["data-delay"],this.delayUnit)||0),i.duration=o(r["data-duration"],this.duration),l=void 0!==r["data-async"]?i.startAt:i.startAt+i.duration,this.frameLength=Math.max(this.frameLength,i.startAt+i.duration);break;case"scenario":n=i.el,r=this.parseAttr(n),i.startAt=o(r["data-start"],this.delayUnit)||0,i.duration=o(r["data-duration"],this.duration),this.frameLength=Math.max(this.frameLength,i.startAt+i.duration)}a+=i.length,this.frameLength=this.frameLength||this.duration}},l.prototype.drawer=function(){var t=this;if(this.currentFrame+=this.speed,this.currentFrame<=0)this.stop(),this.reset();else{if(!(this.currentFrame>=this.frameLength))return this.trace(),void(this.handle=s(function(){t.drawer()}));this.stop(),this.currentFrame=this.frameLength,this.trace(),this.selfDestroy&&this.destroy()}this.callback(this),this.instanceCallback&&(this.instanceCallback(this),this.instanceCallback=null)},l.prototype.trace=function(){var t,e,n,r;for(r=this.animTimingFunction(this.currentFrame/this.frameLength)*this.frameLength,t=0;t<this.map.length;t++)e=(r-(n=this.map[t]).startAt)/n.duration,e=this.pathTimingFunction(Math.max(0,Math.min(1,e))),n.progress!==e&&(n.progress=e,n.el.style.strokeDashoffset=Math.floor(n.length*(1-e)),this.renderPath(t))},l.prototype.renderPath=function(t){if(this.forceRender&&this.map&&this.map[t]){var e=this.map[t],n=e.el.cloneNode(!0);e.el.parentNode.replaceChild(n,e.el),e.el=n}},l.prototype.init=function(){this.frameLength=0,this.currentFrame=0,this.map=[],new n(this.el),this.mapping(),this.starter(),this.onReady&&this.onReady(this)},l.prototype.starter=function(){switch(this.start){case"manual":return;case"autostart":this.play();break;case"inViewport":var t=this,e=function(){t.isInViewport(t.parentEl,1)&&(t.play(),window.removeEventListener("scroll",e))};window.addEventListener("scroll",e),e()}},l.prototype.getStatus=function(){return 0===this.currentFrame?"start":this.currentFrame===this.frameLength?"end":"progress"},l.prototype.reset=function(){return this.setFrameProgress(0)},l.prototype.finish=function(){return this.setFrameProgress(1)},l.prototype.setFrameProgress=function(t){return t=Math.min(1,Math.max(0,t)),this.currentFrame=Math.round(this.frameLength*t),this.trace(),this},l.prototype.play=function(t,e){if(this.instanceCallback=null,t&&"function"===typeof t)this.instanceCallback=t,t=null;else if(t&&"number"!==typeof t)throw new Error("Vivus [play]: invalid speed");return e&&"function"===typeof e&&!this.instanceCallback&&(this.instanceCallback=e),this.speed=t||1,this.handle||this.drawer(),this},l.prototype.stop=function(){return this.handle&&(a(this.handle),this.handle=null),this},l.prototype.destroy=function(){var t,e;for(this.stop(),t=0;t<this.map.length;t++)(e=this.map[t]).el.style.strokeDashoffset=null,e.el.style.strokeDasharray=null,this.renderPath(t)},l.prototype.isInvisible=function(t){var e,n=t.getAttribute("data-ignore");return null!==n?"false"!==n:!!this.ignoreInvisible&&(!(e=t.getBoundingClientRect()).width&&!e.height)},l.prototype.parseAttr=function(t){var e,n={};if(t&&t.attributes)for(var r=0;r<t.attributes.length;r++)n[(e=t.attributes[r]).name]=e.value;return n},l.prototype.isInViewport=function(t,e){var n=this.scrollY(),r=n+this.getViewportH(),i=t.getBoundingClientRect(),s=i.height,a=n+i.top;return a+s*(e=e||0)<=r&&a+s>=n},l.prototype.getViewportH=function(){var t=this.docElem.clientHeight,e=window.innerHeight;return t<e?e:t},l.prototype.scrollY=function(){return window.pageYOffset||this.docElem.scrollTop},i=function(){l.prototype.docElem||(l.prototype.docElem=window.document.documentElement,s=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)},a=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(t){return window.clearTimeout(t)})},o=function(t,e){var n=parseInt(t,10);return n>=0?n:e},void 0===(r=function(){return l}.apply(e,[]))||(t.exports=r)}()},OTAv:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useScrollPosition=a;var r=n("q1tI"),i="undefined"!==typeof window;function s(t){var e=t.element,n=t.useWindow;if(!i)return{x:0,y:0};var r=(e?e.current:document.body).getBoundingClientRect();return n?{x:window.scrollX,y:window.scrollY}:{x:r.left,y:r.top}}function a(t,e,n,a,o){var l=(0,r.useRef)(s({useWindow:a})),c=null,u=function(){var e=s({element:n,useWindow:a});t({prevPos:l.current,currPos:e}),l.current=e,c=null};(0,r.useLayoutEffect)(function(){if(i){var t=function(){o?null===c&&(c=setTimeout(u,o)):u()};return window.addEventListener("scroll",t),function(){return window.removeEventListener("scroll",t)}}},e)}a.defaultProps={deps:[],element:!1,useWindow:!1,wait:null}},RNiq:function(t,e,n){"use strict";n.r(e);var r=n("MX0m"),i=n.n(r),s=n("q1tI"),a=n.n(s),o=n("8Kt/"),l=n.n(o),c=n("ZbKm"),u=n("mVgX"),h=n("fH58"),p=(n("yJra"),n("O3Xf")),d=n.n(p);function m(){return(m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var f=a.a.createElement("path",{d:"M119.4 13.1c-50.7 0-93.3 34.4-105.1 80.7C24 88.7 34 83.9 34 83.9s29.5-11.6 43.3-11.4c0-5.9 9.9-21.9 22.9-14.6 11.3 6.4 10 23.7 10 23.7s22.8 9.8 28.4 12.7c12.8 7.2 11.4 17.9 11.4 17.9s24.2 12.9 32.5 15.2c15.5 4.4 2.6 17.6 2.6 17.6s.4 6.1 0 7c-.1 1-1.7 6.9-3.2 8-1 1-8.1 8-17.7 5.6-9.6-2.5-31.7 1.2-31.7 1.2-13.7 11-23.3 7.4-21.5 11.3s0 13.4 0 13.4-4.6 21.2 6.2 35c.7 0 1.5.1 2.2.1 59.8 0 108.4-47.8 108.4-106.8S179.3 13.1 119.4 13.1z",className:"logo_svg__XpPntJCt_0",stroke:"#fff",fill:"none",strokeWidth:5}),y=function(t){return a.a.createElement("svg",m({viewBox:"0 0 238.1 238.1"},t),f)},w=a.a.createElement,g=function(t){var e=t.height,n=void 0===e?"350px":e,r=t.duration,i=void 0===r?200:r;return Object(s.useEffect)(function(){new d.a("logo",{duration:i})},[]),w(y,{id:"logo",height:n})},b=n("lTFH"),v=a.a.createElement,x=function(t){var e=t.color,n=void 0===e?"white":e,r=Object(s.useState)(""),o=r[0],l=r[1];Object(b.useScrollPosition)(function(t){t.prevPos,t.currPos.y;l("none")});return v(a.a.Fragment,null,v("div",{className:i.a.dynamic([["1155136897",[n]]])+" "+(o||"")},v("svg",{viewBox:"0 0 24 24",className:i.a.dynamic([["1155136897",[n]]])},v("polygon",{points:"15.5,5 11,5 16,12 11,19 15.5,19 20.5,12 \t\t",className:i.a.dynamic([["1155136897",[n]]])}),v("polygon",{points:"8.5,5 4,5 9,12 4,19 8.5,19 13.5,12 \t\t",className:i.a.dynamic([["1155136897",[n]]])}))),v(i.a,{id:"1155136897",dynamic:[n]},["div.__jsx-style-dynamic-selector{position:fixed;width:60px;height:60px;bottom:20px;right:20px;z-index:1000;}",".none.__jsx-style-dynamic-selector{display:none;}","svg.__jsx-style-dynamic-selector{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);}","polygon.__jsx-style-dynamic-selector{fill:".concat(n,";box-shadow:0 0 0 0 rgba(0,0,0,1);-webkit-animation:pulse 1s ease infinite;-webkit-animation:pulse-__jsx-style-dynamic-selector 1s ease infinite;animation:pulse-__jsx-style-dynamic-selector 1s ease infinite;}"),"@-webkit-keyframes pulse-__jsx-style-dynamic-selector{0%{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;-webkit-transform:scale(0.95);}70%{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;-webkit-transform:scale(1.05);}100%{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;-webkit-transform:scale(0.95);}}","@keyframes pulse-__jsx-style-dynamic-selector{0%{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;-webkit-transform:scale(0.95);}70%{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;-webkit-transform:scale(1.05);}100%{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;-webkit-transform:scale(0.95);}}","@-webkit-keyframes pulse{0%.__jsx-style-dynamic-selector{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);-webkit-transform:scale(0.95);}70%.__jsx-style-dynamic-selector{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);-webkit-transform:scale(1.05);}100%.__jsx-style-dynamic-selector{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);-webkit-transform:scale(0.95);}}"]))},k=n("WeE9"),E=a.a.createElement;e.default=function(){return Object(s.useEffect)(function(){n.e(7).then(n.t.bind(null,"Vy+v",7)).then(function(t){(0,window.particlesJS)("particles-js",k)})},[]),E(a.a.Fragment,null,E(l.a,null,E("title",{className:"jsx-2701970306"},"Home"),E("link",{href:"https://fonts.googleapis.com/css?family=Raleway:900&display=swap",rel:"stylesheet",className:"jsx-2701970306"})),E("div",{id:"particles-js",className:"jsx-2701970306"}),E(c.a,null,E(c.b,{duration:600,pin:!0},E(h.a,null,"50% de los pl\xe1sticos tienen un solo uso")),E(c.b,{duration:600,pin:!0},E(h.a,null,"91% de los pl\xe1sticos no se reciclan")),E(c.b,{duration:600,pin:!0},E(h.a,null,"T\xfa puedes frenar esto")),E(c.b,{duration:600,offset:300,pin:!0},E("div",{id:"svg-container",className:"jsx-2701970306"},E(g,null),E("h1",{className:"jsx-2701970306"},"NOMBREDELAWEA"))),E(c.b,{triggerHook:"onLeave",duration:"100%",pin:!0},E(u.a,{wrapper:E("div",{id:"pinContainer",className:"jsx-2701970306"})},E(u.b,{from:{x:"-100%"},to:{x:"0%"}},E("section",{className:"jsx-2701970306 panel turqoise"},E("span",{className:"jsx-2701970306"},"DAME TU INFO")))))),E(x,null),E(i.a,{id:"2701970306"},["body{margin:0;font-family:Avenir Next,-apple-system,BlinkMacSystemFont,Avenir, Helvetica,sans-serif;background-color:#2980b9;-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}",'h1.jsx-2701970306{font:2em/1 Impact,"Raleway",sans-serif;text-align:center;color:white;-webkit-letter-spacing:3px;-moz-letter-spacing:3px;-ms-letter-spacing:3px;letter-spacing:3px;text-shadow:1px 2px 0 #666,2px 3px 0 #888;}',"#svg-container.jsx-2701970306{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}","#particles-js.jsx-2701970306{position:fixed;display:block;top:0;bottom:0;left:0;right:0;z-index:0;}","#pinContainer.jsx-2701970306{height:100vh;width:100vw;overflow:hidden;}","#pinContainer.jsx-2701970306 .panel.jsx-2701970306{height:100vh;width:100vw;position:absolute;text-align:center;}",".panel.jsx-2701970306 span.jsx-2701970306{position:relative;display:block;overflow:visible;top:50%;font-size:80px;color:white;}",".panel.blue.jsx-2701970306{background-color:#3883d8;}",".panel.turqoise.jsx-2701970306{background-color:black;}",".panel.green.jsx-2701970306{background-color:#22d659;margin-bottom:800px;}",".panel.bordeaux.jsx-2701970306{background-color:#953543;}"]))}},WeE9:function(t){t.exports=JSON.parse('{"particles":{"number":{"value":200,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":4,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.5,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":140,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}')},lTFH:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"useScrollPosition",{enumerable:!0,get:function(){return r.useScrollPosition}});var r=n("OTAv")},vlRD:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",1,0]]]);