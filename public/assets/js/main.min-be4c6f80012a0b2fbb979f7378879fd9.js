/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";function c(a,b){b=b||ba;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}function d(a){var b=!!a&&"length"in a&&a.length,c=oa.type(a);return"function"!==c&&!oa.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}function e(a,b,c){return oa.isFunction(b)?oa.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?oa.grep(a,function(a){return a===b!==c}):"string"!=typeof b?oa.grep(a,function(a){return ga.call(b,a)>-1!==c}):ya.test(b)?oa.filter(b,a,c):(b=oa.filter(b,a),oa.grep(a,function(a){return ga.call(b,a)>-1!==c&&1===a.nodeType}))}function f(a,b){for(;(a=a[b])&&1!==a.nodeType;);return a}function g(a){var b={};return oa.each(a.match(Ea)||[],function(a,c){b[c]=!0}),b}function h(a){return a}function i(a){throw a}function j(a,b,c){var d;try{a&&oa.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&oa.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}function k(){ba.removeEventListener("DOMContentLoaded",k),a.removeEventListener("load",k),oa.ready()}function l(){this.expando=oa.expando+l.uid++}function m(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:La.test(a)?JSON.parse(a):a)}function n(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Ma,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=m(c)}catch(e){}Ka.set(a,b,c)}else c=void 0;return c}function o(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return oa.css(a,b,"")},i=h(),j=c&&c[3]||(oa.cssNumber[b]?"":"px"),k=(oa.cssNumber[b]||"px"!==j&&+i)&&Oa.exec(oa.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,oa.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}function p(a){var b,c=a.ownerDocument,d=a.nodeName,e=Sa[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=oa.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),Sa[d]=e,e)}function q(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=Ja.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&Qa(d)&&(e[f]=p(d))):"none"!==c&&(e[f]="none",Ja.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}function r(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&oa.nodeName(a,b)?oa.merge([a],c):c}function s(a,b){for(var c=0,d=a.length;c<d;c++)Ja.set(a[c],"globalEval",!b||Ja.get(b[c],"globalEval"))}function t(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===oa.type(f))oa.merge(m,f.nodeType?[f]:f);else if(Xa.test(f)){for(g=g||l.appendChild(b.createElement("div")),h=(Ua.exec(f)||["",""])[1].toLowerCase(),i=Wa[h]||Wa._default,g.innerHTML=i[1]+oa.htmlPrefilter(f)+i[2],k=i[0];k--;)g=g.lastChild;oa.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));for(l.textContent="",n=0;f=m[n++];)if(d&&oa.inArray(f,d)>-1)e&&e.push(f);else if(j=oa.contains(f.ownerDocument,f),g=r(l.appendChild(f),"script"),j&&s(g),c)for(k=0;f=g[k++];)Va.test(f.type||"")&&c.push(f);return l}function u(){return!0}function v(){return!1}function w(){try{return ba.activeElement}catch(a){}}function x(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)x(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=v;else if(!e)return a;return 1===f&&(g=e,e=function(a){return oa().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=oa.guid++)),a.each(function(){oa.event.add(this,b,e,d,c)})}function y(a,b){return oa.nodeName(a,"table")&&oa.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function z(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function A(a){var b=db.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function B(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(Ja.hasData(a)&&(f=Ja.access(a),g=Ja.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)oa.event.add(b,e,j[e][c])}Ka.hasData(a)&&(h=Ka.access(a),i=oa.extend({},h),Ka.set(b,i))}}function C(a,b){var c=b.nodeName.toLowerCase();"input"===c&&Ta.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function D(a,b,d,e){b=ea.apply([],b);var f,g,h,i,j,k,l=0,m=a.length,n=m-1,o=b[0],p=oa.isFunction(o);if(p||m>1&&"string"==typeof o&&!ma.checkClone&&cb.test(o))return a.each(function(c){var f=a.eq(c);p&&(b[0]=o.call(this,c,f.html())),D(f,b,d,e)});if(m&&(f=t(b,a[0].ownerDocument,!1,a,e),g=f.firstChild,1===f.childNodes.length&&(f=g),g||e)){for(h=oa.map(r(f,"script"),z),i=h.length;l<m;l++)j=f,l!==n&&(j=oa.clone(j,!0,!0),i&&oa.merge(h,r(j,"script"))),d.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,oa.map(h,A),l=0;l<i;l++)j=h[l],Va.test(j.type||"")&&!Ja.access(j,"globalEval")&&oa.contains(k,j)&&(j.src?oa._evalUrl&&oa._evalUrl(j.src):c(j.textContent.replace(eb,""),k))}return a}function E(a,b,c){for(var d,e=b?oa.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||oa.cleanData(r(d)),d.parentNode&&(c&&oa.contains(d.ownerDocument,d)&&s(r(d,"script")),d.parentNode.removeChild(d));return a}function F(a,b,c){var d,e,f,g,h=a.style;return c=c||hb(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||oa.contains(a.ownerDocument,a)||(g=oa.style(a,b)),!ma.pixelMarginRight()&&gb.test(g)&&fb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function G(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}function H(a){if(a in mb)return a;for(var b=a[0].toUpperCase()+a.slice(1),c=lb.length;c--;)if(a=lb[c]+b,a in mb)return a}function I(a,b,c){var d=Oa.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function J(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=oa.css(a,c+Pa[f],!0,e)),d?("content"===c&&(g-=oa.css(a,"padding"+Pa[f],!0,e)),"margin"!==c&&(g-=oa.css(a,"border"+Pa[f]+"Width",!0,e))):(g+=oa.css(a,"padding"+Pa[f],!0,e),"padding"!==c&&(g+=oa.css(a,"border"+Pa[f]+"Width",!0,e)));return g}function K(a,b,c){var d,e=!0,f=hb(a),g="border-box"===oa.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),d<=0||null==d){if(d=F(a,b,f),(d<0||null==d)&&(d=a.style[b]),gb.test(d))return d;e=g&&(ma.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+J(a,b,c||(g?"border":"content"),e,f)+"px"}function L(a,b,c,d,e){return new L.prototype.init(a,b,c,d,e)}function M(){ob&&(a.requestAnimationFrame(M),oa.fx.tick())}function N(){return a.setTimeout(function(){nb=void 0}),nb=oa.now()}function O(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=Pa[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function P(a,b,c){for(var d,e=(S.tweeners[b]||[]).concat(S.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function Q(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&Qa(a),r=Ja.get(a,"fxshow");c.queue||(g=oa._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,oa.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],pb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;p=!0}n[d]=r&&r[d]||oa.style(a,d)}if(i=!oa.isEmptyObject(b),i||!oa.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=r&&r.display,null==j&&(j=Ja.get(a,"display")),k=oa.css(a,"display"),"none"===k&&(j?k=j:(q([a],!0),j=a.style.display||j,k=oa.css(a,"display"),q([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===oa.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(r?"hidden"in r&&(p=r.hidden):r=Ja.access(a,"fxshow",{display:j}),f&&(r.hidden=!p),p&&q([a],!0),m.done(function(){p||q([a]),Ja.remove(a,"fxshow");for(d in n)oa.style(a,d,n[d])})),i=P(p?r[d]:0,d,m),d in r||(r[d]=i.start,p&&(i.end=i.start,i.start=0))}}function R(a,b){var c,d,e,f,g;for(c in a)if(d=oa.camelCase(c),e=b[d],f=a[c],oa.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=oa.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function S(a,b,c){var d,e,f=0,g=S.prefilters.length,h=oa.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=nb||N(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:oa.extend({},b),opts:oa.extend(!0,{specialEasing:{},easing:oa.easing._default},c),originalProperties:b,originalOptions:c,startTime:nb||N(),duration:c.duration,tweens:[],createTween:function(b,c){var d=oa.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(R(k,j.opts.specialEasing);f<g;f++)if(d=S.prefilters[f].call(j,a,k,j.opts))return oa.isFunction(d.stop)&&(oa._queueHooks(j.elem,j.opts.queue).stop=oa.proxy(d.stop,d)),d;return oa.map(k,P,j),oa.isFunction(j.opts.start)&&j.opts.start.call(a,j),oa.fx.timer(oa.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function T(a){var b=a.match(Ea)||[];return b.join(" ")}function U(a){return a.getAttribute&&a.getAttribute("class")||""}function V(a,b,c,d){var e;if(oa.isArray(b))oa.each(b,function(b,e){c||Ab.test(a)?d(a,e):V(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==oa.type(b))d(a,b);else for(e in b)V(a+"["+e+"]",b[e],c,d)}function W(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(Ea)||[];if(oa.isFunction(c))for(;d=f[e++];)"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function X(a,b,c,d){function e(h){var i;return f[h]=!0,oa.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||g||f[j]?g?!(i=j):void 0:(b.dataTypes.unshift(j),e(j),!1)}),i}var f={},g=a===Mb;return e(b.dataTypes[0])||!f["*"]&&e("*")}function Y(a,b){var c,d,e=oa.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&oa.extend(!0,a,d),a}function Z(a,b,c){for(var d,e,f,g,h=a.contents,i=a.dataTypes;"*"===i[0];)i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function $(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];for(f=k.shift();f;)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}function _(a){return oa.isWindow(a)?a:9===a.nodeType&&a.defaultView}var aa=[],ba=a.document,ca=Object.getPrototypeOf,da=aa.slice,ea=aa.concat,fa=aa.push,ga=aa.indexOf,ha={},ia=ha.toString,ja=ha.hasOwnProperty,ka=ja.toString,la=ka.call(Object),ma={},na="3.1.1",oa=function(a,b){return new oa.fn.init(a,b)},pa=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,qa=/^-ms-/,ra=/-([a-z])/g,sa=function(a,b){return b.toUpperCase()};oa.fn=oa.prototype={jquery:na,constructor:oa,length:0,toArray:function(){return da.call(this)},get:function(a){return null==a?da.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=oa.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return oa.each(this,a)},map:function(a){return this.pushStack(oa.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(da.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:fa,sort:aa.sort,splice:aa.splice},oa.extend=oa.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||oa.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(oa.isPlainObject(d)||(e=oa.isArray(d)))?(e?(e=!1,f=c&&oa.isArray(c)?c:[]):f=c&&oa.isPlainObject(c)?c:{},g[b]=oa.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},oa.extend({expando:"jQuery"+(na+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===oa.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=oa.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==ia.call(a)||(b=ca(a))&&(c=ja.call(b,"constructor")&&b.constructor,"function"!=typeof c||ka.call(c)!==la))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?ha[ia.call(a)]||"object":typeof a},globalEval:function(a){c(a)},camelCase:function(a){return a.replace(qa,"ms-").replace(ra,sa)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,e=0;if(d(a))for(c=a.length;e<c&&b.call(a[e],e,a[e])!==!1;e++);else for(e in a)if(b.call(a[e],e,a[e])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(pa,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(d(Object(a))?oa.merge(c,"string"==typeof a?[a]:a):fa.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:ga.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var e,f,g=0,h=[];if(d(a))for(e=a.length;g<e;g++)f=b(a[g],g,c),null!=f&&h.push(f);else for(g in a)f=b(a[g],g,c),null!=f&&h.push(f);return ea.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),oa.isFunction(a))return d=da.call(arguments,2),e=function(){return a.apply(b||this,d.concat(da.call(arguments)))},e.guid=a.guid=a.guid||oa.guid++,e},now:Date.now,support:ma}),"function"==typeof Symbol&&(oa.fn[Symbol.iterator]=aa[Symbol.iterator]),oa.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){ha["[object "+b+"]"]=b.toLowerCase()});var ta=function(a){function b(a,b,c,d){var e,f,g,h,i,j,k,m=b&&b.ownerDocument,o=b?b.nodeType:9;if(c=c||[],"string"!=typeof a||!a||1!==o&&9!==o&&11!==o)return c;if(!d&&((b?b.ownerDocument||b:P)!==H&&G(b),b=b||H,J)){if(11!==o&&(i=ra.exec(a)))if(e=i[1]){if(9===o){if(!(g=b.getElementById(e)))return c;if(g.id===e)return c.push(g),c}else if(m&&(g=m.getElementById(e))&&N(b,g)&&g.id===e)return c.push(g),c}else{if(i[2])return $.apply(c,b.getElementsByTagName(a)),c;if((e=i[3])&&w.getElementsByClassName&&b.getElementsByClassName)return $.apply(c,b.getElementsByClassName(e)),c}if(w.qsa&&!U[a+" "]&&(!K||!K.test(a))){if(1!==o)m=b,k=a;else if("object"!==b.nodeName.toLowerCase()){for((h=b.getAttribute("id"))?h=h.replace(va,wa):b.setAttribute("id",h=O),j=A(a),f=j.length;f--;)j[f]="#"+h+" "+n(j[f]);k=j.join(","),m=sa.test(a)&&l(b.parentNode)||b}if(k)try{return $.apply(c,m.querySelectorAll(k)),c}catch(p){}finally{h===O&&b.removeAttribute("id")}}}return C(a.replace(ha,"$1"),b,c,d)}function c(){function a(c,d){return b.push(c+" ")>x.cacheLength&&delete a[b.shift()],a[c+" "]=d}var b=[];return a}function d(a){return a[O]=!0,a}function e(a){var b=H.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function f(a,b){for(var c=a.split("|"),d=c.length;d--;)x.attrHandle[c[d]]=b}function g(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)for(;c=c.nextSibling;)if(c===b)return-1;return a?1:-1}function h(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function i(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function j(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ya(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function k(a){return d(function(b){return b=+b,d(function(c,d){for(var e,f=a([],c.length,b),g=f.length;g--;)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function l(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}function m(){}function n(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function o(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=R++;return b.first?function(b,c,e){for(;b=b[d];)if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[Q,h];if(i){for(;b=b[d];)if((1===b.nodeType||g)&&a(b,c,i))return!0}else for(;b=b[d];)if(1===b.nodeType||g)if(l=b[O]||(b[O]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===Q&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function p(a){return a.length>1?function(b,c,d){for(var e=a.length;e--;)if(!a[e](b,c,d))return!1;return!0}:a[0]}function q(a,c,d){for(var e=0,f=c.length;e<f;e++)b(a,c[e],d);return d}function r(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function s(a,b,c,e,f,g){return e&&!e[O]&&(e=s(e)),f&&!f[O]&&(f=s(f,g)),d(function(d,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=d||q(b||"*",h.nodeType?[h]:h,[]),s=!a||!d&&b?p:r(p,m,a,h,i),t=c?f||(d?a:o||e)?[]:g:s;if(c&&c(s,t,h,i),e)for(j=r(t,n),e(j,[],h,i),k=j.length;k--;)(l=j[k])&&(t[n[k]]=!(s[n[k]]=l));if(d){if(f||a){if(f){for(j=[],k=t.length;k--;)(l=t[k])&&j.push(s[k]=l);f(null,t=[],j,i)}for(k=t.length;k--;)(l=t[k])&&(j=f?aa(d,l):m[k])>-1&&(d[j]=!(g[j]=l))}}else t=r(t===g?t.splice(o,t.length):t),f?f(null,g,t,i):$.apply(g,t)})}function t(a){for(var b,c,d,e=a.length,f=x.relative[a[0].type],g=f||x.relative[" "],h=f?1:0,i=o(function(a){return a===b},g,!0),j=o(function(a){return aa(b,a)>-1},g,!0),k=[function(a,c,d){var e=!f&&(d||c!==D)||((b=c).nodeType?i(a,c,d):j(a,c,d));return b=null,e}];h<e;h++)if(c=x.relative[a[h].type])k=[o(p(k),c)];else{if(c=x.filter[a[h].type].apply(null,a[h].matches),c[O]){for(d=++h;d<e&&!x.relative[a[d].type];d++);return s(h>1&&p(k),h>1&&n(a.slice(0,h-1).concat({value:" "===a[h-2].type?"*":""})).replace(ha,"$1"),c,h<d&&t(a.slice(h,d)),d<e&&t(a=a.slice(d)),d<e&&n(a))}k.push(c)}return p(k)}function u(a,c){var e=c.length>0,f=a.length>0,g=function(d,g,h,i,j){var k,l,m,n=0,o="0",p=d&&[],q=[],s=D,t=d||f&&x.find.TAG("*",j),u=Q+=null==s?1:Math.random()||.1,v=t.length;for(j&&(D=g===H||g||j);o!==v&&null!=(k=t[o]);o++){if(f&&k){for(l=0,g||k.ownerDocument===H||(G(k),h=!J);m=a[l++];)if(m(k,g||H,h)){i.push(k);break}j&&(Q=u)}e&&((k=!m&&k)&&n--,d&&p.push(k))}if(n+=o,e&&o!==n){for(l=0;m=c[l++];)m(p,q,g,h);if(d){if(n>0)for(;o--;)p[o]||q[o]||(q[o]=Y.call(i));q=r(q)}$.apply(i,q),j&&!d&&q.length>0&&n+c.length>1&&b.uniqueSort(i)}return j&&(Q=u,D=s),p};return e?d(g):g}var v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O="sizzle"+1*new Date,P=a.document,Q=0,R=0,S=c(),T=c(),U=c(),V=function(a,b){return a===b&&(F=!0),0},W={}.hasOwnProperty,X=[],Y=X.pop,Z=X.push,$=X.push,_=X.slice,aa=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},ba="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ca="[\\x20\\t\\r\\n\\f]",da="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",ea="\\["+ca+"*("+da+")(?:"+ca+"*([*^$|!~]?=)"+ca+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+da+"))|)"+ca+"*\\]",fa=":("+da+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ea+")*)|.*)\\)|)",ga=new RegExp(ca+"+","g"),ha=new RegExp("^"+ca+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ca+"+$","g"),ia=new RegExp("^"+ca+"*,"+ca+"*"),ja=new RegExp("^"+ca+"*([>+~]|"+ca+")"+ca+"*"),ka=new RegExp("="+ca+"*([^\\]'\"]*?)"+ca+"*\\]","g"),la=new RegExp(fa),ma=new RegExp("^"+da+"$"),na={ID:new RegExp("^#("+da+")"),CLASS:new RegExp("^\\.("+da+")"),TAG:new RegExp("^("+da+"|[*])"),ATTR:new RegExp("^"+ea),PSEUDO:new RegExp("^"+fa),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ca+"*(even|odd|(([+-]|)(\\d*)n|)"+ca+"*(?:([+-]|)"+ca+"*(\\d+)|))"+ca+"*\\)|)","i"),bool:new RegExp("^(?:"+ba+")$","i"),needsContext:new RegExp("^"+ca+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ca+"*((?:-\\d)?\\d*)"+ca+"*\\)|)(?=[^-]|$)","i")},oa=/^(?:input|select|textarea|button)$/i,pa=/^h\d$/i,qa=/^[^{]+\{\s*\[native \w/,ra=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,sa=/[+~]/,ta=new RegExp("\\\\([\\da-f]{1,6}"+ca+"?|("+ca+")|.)","ig"),ua=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},va=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,wa=function(a,b){return b?"\0"===a?"�":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},xa=function(){G()},ya=o(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{$.apply(X=_.call(P.childNodes),P.childNodes),X[P.childNodes.length].nodeType}catch(za){$={apply:X.length?function(a,b){Z.apply(a,_.call(b))}:function(a,b){for(var c=a.length,d=0;a[c++]=b[d++];);a.length=c-1}}}w=b.support={},z=b.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},G=b.setDocument=function(a){var b,c,d=a?a.ownerDocument||a:P;return d!==H&&9===d.nodeType&&d.documentElement?(H=d,I=H.documentElement,J=!z(H),P!==H&&(c=H.defaultView)&&c.top!==c&&(c.addEventListener?c.addEventListener("unload",xa,!1):c.attachEvent&&c.attachEvent("onunload",xa)),w.attributes=e(function(a){return a.className="i",!a.getAttribute("className")}),w.getElementsByTagName=e(function(a){return a.appendChild(H.createComment("")),!a.getElementsByTagName("*").length}),w.getElementsByClassName=qa.test(H.getElementsByClassName),w.getById=e(function(a){return I.appendChild(a).id=O,!H.getElementsByName||!H.getElementsByName(O).length}),w.getById?(x.filter.ID=function(a){var b=a.replace(ta,ua);return function(a){return a.getAttribute("id")===b}},x.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&J){var c=b.getElementById(a);return c?[c]:[]}}):(x.filter.ID=function(a){var b=a.replace(ta,ua);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},x.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&J){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];for(e=b.getElementsByName(a),d=0;f=e[d++];)if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),x.find.TAG=w.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):w.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){for(;c=f[e++];)1===c.nodeType&&d.push(c);return d}return f},x.find.CLASS=w.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&J)return b.getElementsByClassName(a)},L=[],K=[],(w.qsa=qa.test(H.querySelectorAll))&&(e(function(a){I.appendChild(a).innerHTML="<a id='"+O+"'></a><select id='"+O+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&K.push("[*^$]="+ca+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||K.push("\\["+ca+"*(?:value|"+ba+")"),a.querySelectorAll("[id~="+O+"-]").length||K.push("~="),a.querySelectorAll(":checked").length||K.push(":checked"),a.querySelectorAll("a#"+O+"+*").length||K.push(".#.+[+~]")}),e(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=H.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&K.push("name"+ca+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&K.push(":enabled",":disabled"),I.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&K.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),K.push(",.*:")})),(w.matchesSelector=qa.test(M=I.matches||I.webkitMatchesSelector||I.mozMatchesSelector||I.oMatchesSelector||I.msMatchesSelector))&&e(function(a){w.disconnectedMatch=M.call(a,"*"),M.call(a,"[s!='']:x"),L.push("!=",fa)}),K=K.length&&new RegExp(K.join("|")),L=L.length&&new RegExp(L.join("|")),b=qa.test(I.compareDocumentPosition),N=b||qa.test(I.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)for(;b=b.parentNode;)if(b===a)return!0;return!1},V=b?function(a,b){if(a===b)return F=!0,0;var c=!a.compareDocumentPosition-!b.compareDocumentPosition;return c?c:(c=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&c||!w.sortDetached&&b.compareDocumentPosition(a)===c?a===H||a.ownerDocument===P&&N(P,a)?-1:b===H||b.ownerDocument===P&&N(P,b)?1:E?aa(E,a)-aa(E,b):0:4&c?-1:1)}:function(a,b){if(a===b)return F=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===H?-1:b===H?1:e?-1:f?1:E?aa(E,a)-aa(E,b):0;if(e===f)return g(a,b);for(c=a;c=c.parentNode;)h.unshift(c);for(c=b;c=c.parentNode;)i.unshift(c);for(;h[d]===i[d];)d++;return d?g(h[d],i[d]):h[d]===P?-1:i[d]===P?1:0},H):H},b.matches=function(a,c){return b(a,null,null,c)},b.matchesSelector=function(a,c){if((a.ownerDocument||a)!==H&&G(a),c=c.replace(ka,"='$1']"),w.matchesSelector&&J&&!U[c+" "]&&(!L||!L.test(c))&&(!K||!K.test(c)))try{var d=M.call(a,c);if(d||w.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return b(c,H,null,[a]).length>0},b.contains=function(a,b){return(a.ownerDocument||a)!==H&&G(a),N(a,b)},b.attr=function(a,b){(a.ownerDocument||a)!==H&&G(a);var c=x.attrHandle[b.toLowerCase()],d=c&&W.call(x.attrHandle,b.toLowerCase())?c(a,b,!J):void 0;return void 0!==d?d:w.attributes||!J?a.getAttribute(b):(d=a.getAttributeNode(b))&&d.specified?d.value:null},b.escape=function(a){return(a+"").replace(va,wa)},b.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},b.uniqueSort=function(a){var b,c=[],d=0,e=0;if(F=!w.detectDuplicates,E=!w.sortStable&&a.slice(0),a.sort(V),F){for(;b=a[e++];)b===a[e]&&(d=c.push(e));for(;d--;)a.splice(c[d],1)}return E=null,a},y=b.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(1===e||9===e||11===e){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=y(a)}else if(3===e||4===e)return a.nodeValue}else for(;b=a[d++];)c+=y(b);return c},x=b.selectors={cacheLength:50,createPseudo:d,match:na,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ta,ua),a[3]=(a[3]||a[4]||a[5]||"").replace(ta,ua),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||b.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&b.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return na.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&la.test(c)&&(b=A(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ta,ua).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=S[a+" "];return b||(b=new RegExp("(^|"+ca+")"+a+"("+ca+"|$)"))&&S(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,c,d){return function(e){var f=b.attr(e,a);return null==f?"!="===c:!c||(f+="","="===c?f===d:"!="===c?f!==d:"^="===c?d&&0===f.indexOf(d):"*="===c?d&&f.indexOf(d)>-1:"$="===c?d&&f.slice(-d.length)===d:"~="===c?(" "+f.replace(ga," ")+" ").indexOf(d)>-1:"|="===c&&(f===d||f.slice(0,d.length+1)===d+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){for(;p;){for(m=b;m=m[p];)if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){for(m=q,l=m[O]||(m[O]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===Q&&j[1],t=n&&j[2],m=n&&q.childNodes[n];m=++n&&m&&m[p]||(t=n=0)||o.pop();)if(1===m.nodeType&&++t&&m===b){k[a]=[Q,n,t];break}}else if(s&&(m=b,l=m[O]||(m[O]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===Q&&j[1],t=n),t===!1)for(;(m=++n&&m&&m[p]||(t=n=0)||o.pop())&&((h?m.nodeName.toLowerCase()!==r:1!==m.nodeType)||!++t||(s&&(l=m[O]||(m[O]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[Q,t]),m!==b)););return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,c){var e,f=x.pseudos[a]||x.setFilters[a.toLowerCase()]||b.error("unsupported pseudo: "+a);return f[O]?f(c):f.length>1?(e=[a,a,"",c],x.setFilters.hasOwnProperty(a.toLowerCase())?d(function(a,b){for(var d,e=f(a,c),g=e.length;g--;)d=aa(a,e[g]),a[d]=!(b[d]=e[g])}):function(a){return f(a,0,e)}):f}},pseudos:{not:d(function(a){var b=[],c=[],e=B(a.replace(ha,"$1"));return e[O]?d(function(a,b,c,d){for(var f,g=e(a,null,d,[]),h=a.length;h--;)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,d,f){return b[0]=a,e(b,null,f,c),b[0]=null,!c.pop()}}),has:d(function(a){return function(c){return b(a,c).length>0}}),contains:d(function(a){return a=a.replace(ta,ua),function(b){return(b.textContent||b.innerText||y(b)).indexOf(a)>-1}}),lang:d(function(a){return ma.test(a||"")||b.error("unsupported lang: "+a),a=a.replace(ta,ua).toLowerCase(),function(b){var c;do if(c=J?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1;
}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===I},focus:function(a){return a===H.activeElement&&(!H.hasFocus||H.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:j(!1),disabled:j(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!x.pseudos.empty(a)},header:function(a){return pa.test(a.nodeName)},input:function(a){return oa.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:k(function(){return[0]}),last:k(function(a,b){return[b-1]}),eq:k(function(a,b,c){return[c<0?c+b:c]}),even:k(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:k(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:k(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:k(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},x.pseudos.nth=x.pseudos.eq;for(v in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})x.pseudos[v]=h(v);for(v in{submit:!0,reset:!0})x.pseudos[v]=i(v);return m.prototype=x.filters=x.pseudos,x.setFilters=new m,A=b.tokenize=function(a,c){var d,e,f,g,h,i,j,k=T[a+" "];if(k)return c?0:k.slice(0);for(h=a,i=[],j=x.preFilter;h;){d&&!(e=ia.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),d=!1,(e=ja.exec(h))&&(d=e.shift(),f.push({value:d,type:e[0].replace(ha," ")}),h=h.slice(d.length));for(g in x.filter)!(e=na[g].exec(h))||j[g]&&!(e=j[g](e))||(d=e.shift(),f.push({value:d,type:g,matches:e}),h=h.slice(d.length));if(!d)break}return c?h.length:h?b.error(a):T(a,i).slice(0)},B=b.compile=function(a,b){var c,d=[],e=[],f=U[a+" "];if(!f){for(b||(b=A(a)),c=b.length;c--;)f=t(b[c]),f[O]?d.push(f):e.push(f);f=U(a,u(e,d)),f.selector=a}return f},C=b.select=function(a,b,c,d){var e,f,g,h,i,j="function"==typeof a&&a,k=!d&&A(a=j.selector||a);if(c=c||[],1===k.length){if(f=k[0]=k[0].slice(0),f.length>2&&"ID"===(g=f[0]).type&&9===b.nodeType&&J&&x.relative[f[1].type]){if(b=(x.find.ID(g.matches[0].replace(ta,ua),b)||[])[0],!b)return c;j&&(b=b.parentNode),a=a.slice(f.shift().value.length)}for(e=na.needsContext.test(a)?0:f.length;e--&&(g=f[e],!x.relative[h=g.type]);)if((i=x.find[h])&&(d=i(g.matches[0].replace(ta,ua),sa.test(f[0].type)&&l(b.parentNode)||b))){if(f.splice(e,1),a=d.length&&n(f),!a)return $.apply(c,d),c;break}}return(j||B(a,k))(d,b,!J,c,!b||sa.test(a)&&l(b.parentNode)||b),c},w.sortStable=O.split("").sort(V).join("")===O,w.detectDuplicates=!!F,G(),w.sortDetached=e(function(a){return 1&a.compareDocumentPosition(H.createElement("fieldset"))}),e(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||f("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),w.attributes&&e(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||f("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),e(function(a){return null==a.getAttribute("disabled")})||f(ba,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),b}(a);oa.find=ta,oa.expr=ta.selectors,oa.expr[":"]=oa.expr.pseudos,oa.uniqueSort=oa.unique=ta.uniqueSort,oa.text=ta.getText,oa.isXMLDoc=ta.isXML,oa.contains=ta.contains,oa.escapeSelector=ta.escape;var ua=function(a,b,c){for(var d=[],e=void 0!==c;(a=a[b])&&9!==a.nodeType;)if(1===a.nodeType){if(e&&oa(a).is(c))break;d.push(a)}return d},va=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},wa=oa.expr.match.needsContext,xa=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,ya=/^.[^:#\[\.,]*$/;oa.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?oa.find.matchesSelector(d,a)?[d]:[]:oa.find.matches(a,oa.grep(b,function(a){return 1===a.nodeType}))},oa.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(oa(a).filter(function(){for(b=0;b<d;b++)if(oa.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)oa.find(a,e[b],c);return d>1?oa.uniqueSort(c):c},filter:function(a){return this.pushStack(e(this,a||[],!1))},not:function(a){return this.pushStack(e(this,a||[],!0))},is:function(a){return!!e(this,"string"==typeof a&&wa.test(a)?oa(a):a||[],!1).length}});var za,Aa=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Ba=oa.fn.init=function(a,b,c){var d,e;if(!a)return this;if(c=c||za,"string"==typeof a){if(d="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:Aa.exec(a),!d||!d[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(d[1]){if(b=b instanceof oa?b[0]:b,oa.merge(this,oa.parseHTML(d[1],b&&b.nodeType?b.ownerDocument||b:ba,!0)),xa.test(d[1])&&oa.isPlainObject(b))for(d in b)oa.isFunction(this[d])?this[d](b[d]):this.attr(d,b[d]);return this}return e=ba.getElementById(d[2]),e&&(this[0]=e,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):oa.isFunction(a)?void 0!==c.ready?c.ready(a):a(oa):oa.makeArray(a,this)};Ba.prototype=oa.fn,za=oa(ba);var Ca=/^(?:parents|prev(?:Until|All))/,Da={children:!0,contents:!0,next:!0,prev:!0};oa.fn.extend({has:function(a){var b=oa(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(oa.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&oa(a);if(!wa.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&oa.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?oa.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?ga.call(oa(a),this[0]):ga.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(oa.uniqueSort(oa.merge(this.get(),oa(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}}),oa.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return ua(a,"parentNode")},parentsUntil:function(a,b,c){return ua(a,"parentNode",c)},next:function(a){return f(a,"nextSibling")},prev:function(a){return f(a,"previousSibling")},nextAll:function(a){return ua(a,"nextSibling")},prevAll:function(a){return ua(a,"previousSibling")},nextUntil:function(a,b,c){return ua(a,"nextSibling",c)},prevUntil:function(a,b,c){return ua(a,"previousSibling",c)},siblings:function(a){return va((a.parentNode||{}).firstChild,a)},children:function(a){return va(a.firstChild)},contents:function(a){return a.contentDocument||oa.merge([],a.childNodes)}},function(a,b){oa.fn[a]=function(c,d){var e=oa.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=oa.filter(d,e)),this.length>1&&(Da[a]||oa.uniqueSort(e),Ca.test(a)&&e.reverse()),this.pushStack(e)}});var Ea=/[^\x20\t\r\n\f]+/g;oa.Callbacks=function(a){a="string"==typeof a?g(a):oa.extend({},a);var b,c,d,e,f=[],h=[],i=-1,j=function(){for(e=a.once,d=b=!0;h.length;i=-1)for(c=h.shift();++i<f.length;)f[i].apply(c[0],c[1])===!1&&a.stopOnFalse&&(i=f.length,c=!1);a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},k={add:function(){return f&&(c&&!b&&(i=f.length-1,h.push(c)),function d(b){oa.each(b,function(b,c){oa.isFunction(c)?a.unique&&k.has(c)||f.push(c):c&&c.length&&"string"!==oa.type(c)&&d(c)})}(arguments),c&&!b&&j()),this},remove:function(){return oa.each(arguments,function(a,b){for(var c;(c=oa.inArray(b,f,c))>-1;)f.splice(c,1),c<=i&&i--}),this},has:function(a){return a?oa.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=h=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=h=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],h.push(c),b||j()),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},oa.extend({Deferred:function(b){var c=[["notify","progress",oa.Callbacks("memory"),oa.Callbacks("memory"),2],["resolve","done",oa.Callbacks("once memory"),oa.Callbacks("once memory"),0,"resolved"],["reject","fail",oa.Callbacks("once memory"),oa.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return oa.Deferred(function(b){oa.each(c,function(c,d){var e=oa.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&oa.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){function f(b,c,d,e){return function(){var j=this,k=arguments,l=function(){var a,l;if(!(b<g)){if(a=d.apply(j,k),a===c.promise())throw new TypeError("Thenable self-resolution");l=a&&("object"==typeof a||"function"==typeof a)&&a.then,oa.isFunction(l)?e?l.call(a,f(g,c,h,e),f(g,c,i,e)):(g++,l.call(a,f(g,c,h,e),f(g,c,i,e),f(g,c,h,c.notifyWith))):(d!==h&&(j=void 0,k=[a]),(e||c.resolveWith)(j,k))}},m=e?l:function(){try{l()}catch(a){oa.Deferred.exceptionHook&&oa.Deferred.exceptionHook(a,m.stackTrace),b+1>=g&&(d!==i&&(j=void 0,k=[a]),c.rejectWith(j,k))}};b?m():(oa.Deferred.getStackHook&&(m.stackTrace=oa.Deferred.getStackHook()),a.setTimeout(m))}}var g=0;return oa.Deferred(function(a){c[0][3].add(f(0,a,oa.isFunction(e)?e:h,a.notifyWith)),c[1][3].add(f(0,a,oa.isFunction(b)?b:h)),c[2][3].add(f(0,a,oa.isFunction(d)?d:i))}).promise()},promise:function(a){return null!=a?oa.extend(a,e):e}},f={};return oa.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=da.call(arguments),f=oa.Deferred(),g=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?da.call(arguments):c,--b||f.resolveWith(d,e)}};if(b<=1&&(j(a,f.done(g(c)).resolve,f.reject),"pending"===f.state()||oa.isFunction(e[c]&&e[c].then)))return f.then();for(;c--;)j(e[c],g(c),f.reject);return f.promise()}});var Fa=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;oa.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Fa.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},oa.readyException=function(b){a.setTimeout(function(){throw b})};var Ga=oa.Deferred();oa.fn.ready=function(a){return Ga.then(a)["catch"](function(a){oa.readyException(a)}),this},oa.extend({isReady:!1,readyWait:1,holdReady:function(a){a?oa.readyWait++:oa.ready(!0)},ready:function(a){(a===!0?--oa.readyWait:oa.isReady)||(oa.isReady=!0,a!==!0&&--oa.readyWait>0||Ga.resolveWith(ba,[oa]))}}),oa.ready.then=Ga.then,"complete"===ba.readyState||"loading"!==ba.readyState&&!ba.documentElement.doScroll?a.setTimeout(oa.ready):(ba.addEventListener("DOMContentLoaded",k),a.addEventListener("load",k));var Ha=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===oa.type(c)){e=!0;for(h in c)Ha(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,oa.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(oa(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Ia=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};l.uid=1,l.prototype={cache:function(a){var b=a[this.expando];return b||(b={},Ia(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[oa.camelCase(b)]=c;else for(d in b)e[oa.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][oa.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){oa.isArray(b)?b=b.map(oa.camelCase):(b=oa.camelCase(b),b=b in d?[b]:b.match(Ea)||[]),c=b.length;for(;c--;)delete d[b[c]]}(void 0===b||oa.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!oa.isEmptyObject(b)}};var Ja=new l,Ka=new l,La=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ma=/[A-Z]/g;oa.extend({hasData:function(a){return Ka.hasData(a)||Ja.hasData(a)},data:function(a,b,c){return Ka.access(a,b,c)},removeData:function(a,b){Ka.remove(a,b)},_data:function(a,b,c){return Ja.access(a,b,c)},_removeData:function(a,b){Ja.remove(a,b)}}),oa.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=Ka.get(f),1===f.nodeType&&!Ja.get(f,"hasDataAttrs"))){for(c=g.length;c--;)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=oa.camelCase(d.slice(5)),n(f,d,e[d])));Ja.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){Ka.set(this,a)}):Ha(this,function(b){var c;if(f&&void 0===b){if(c=Ka.get(f,a),void 0!==c)return c;if(c=n(f,a),void 0!==c)return c}else this.each(function(){Ka.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){Ka.remove(this,a)})}}),oa.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=Ja.get(a,b),c&&(!d||oa.isArray(c)?d=Ja.access(a,b,oa.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=oa.queue(a,b),d=c.length,e=c.shift(),f=oa._queueHooks(a,b),g=function(){oa.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return Ja.get(a,c)||Ja.access(a,c,{empty:oa.Callbacks("once memory").add(function(){Ja.remove(a,[b+"queue",c])})})}}),oa.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?oa.queue(this[0],a):void 0===b?this:this.each(function(){var c=oa.queue(this,a,b);oa._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&oa.dequeue(this,a)})},dequeue:function(a){return this.each(function(){oa.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=oa.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};for("string"!=typeof a&&(b=a,a=void 0),a=a||"fx";g--;)c=Ja.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Na=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Oa=new RegExp("^(?:([+-])=|)("+Na+")([a-z%]*)$","i"),Pa=["Top","Right","Bottom","Left"],Qa=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&oa.contains(a.ownerDocument,a)&&"none"===oa.css(a,"display")},Ra=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Sa={};oa.fn.extend({show:function(){return q(this,!0)},hide:function(){return q(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){Qa(this)?oa(this).show():oa(this).hide()})}});var Ta=/^(?:checkbox|radio)$/i,Ua=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,Va=/^$|\/(?:java|ecma)script/i,Wa={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Wa.optgroup=Wa.option,Wa.tbody=Wa.tfoot=Wa.colgroup=Wa.caption=Wa.thead,Wa.th=Wa.td;var Xa=/<|&#?\w+;/;!function(){var a=ba.createDocumentFragment(),b=a.appendChild(ba.createElement("div")),c=ba.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),ma.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",ma.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var Ya=ba.documentElement,Za=/^key/,$a=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,_a=/^([^.]*)(?:\.(.+)|)/;oa.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=Ja.get(a);if(q)for(c.handler&&(f=c,c=f.handler,e=f.selector),e&&oa.find.matchesSelector(Ya,e),c.guid||(c.guid=oa.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof oa&&oa.event.triggered!==b.type?oa.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(Ea)||[""],j=b.length;j--;)h=_a.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=oa.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=oa.event.special[n]||{},k=oa.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&oa.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),oa.event.global[n]=!0)},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=Ja.hasData(a)&&Ja.get(a);if(q&&(i=q.events)){for(b=(b||"").match(Ea)||[""],j=b.length;j--;)if(h=_a.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){for(l=oa.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;f--;)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||oa.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)oa.event.remove(a,n+b[j],c,d,!0);oa.isEmptyObject(i)&&Ja.remove(a,"handle events")}},dispatch:function(a){var b,c,d,e,f,g,h=oa.event.fix(a),i=new Array(arguments.length),j=(Ja.get(this,"events")||{})[h.type]||[],k=oa.event.special[h.type]||{};for(i[0]=h,b=1;b<arguments.length;b++)i[b]=arguments[b];if(h.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,h)!==!1){for(g=oa.event.handlers.call(this,h,j),b=0;(e=g[b++])&&!h.isPropagationStopped();)for(h.currentTarget=e.elem,c=0;(f=e.handlers[c++])&&!h.isImmediatePropagationStopped();)h.rnamespace&&!h.rnamespace.test(f.namespace)||(h.handleObj=f,h.data=f.data,d=((oa.event.special[f.origType]||{}).handle||f.handler).apply(e.elem,i),void 0!==d&&(h.result=d)===!1&&(h.preventDefault(),h.stopPropagation()));return k.postDispatch&&k.postDispatch.call(this,h),h.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?oa(e,this).index(j)>-1:oa.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(oa.Event.prototype,a,{enumerable:!0,configurable:!0,get:oa.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[oa.expando]?a:new oa.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==w()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===w()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&oa.nodeName(this,"input"))return this.click(),!1},_default:function(a){return oa.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},oa.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},oa.Event=function(a,b){return this instanceof oa.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?u:v,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&oa.extend(this,b),this.timeStamp=a&&a.timeStamp||oa.now(),void(this[oa.expando]=!0)):new oa.Event(a,b)},oa.Event.prototype={constructor:oa.Event,isDefaultPrevented:v,isPropagationStopped:v,isImmediatePropagationStopped:v,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=u,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=u,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=u,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},oa.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&Za.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&$a.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},oa.event.addProp),oa.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){oa.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||oa.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),oa.fn.extend({on:function(a,b,c,d){return x(this,a,b,c,d)},one:function(a,b,c,d){return x(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,oa(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=v),this.each(function(){oa.event.remove(this,a,c,b)})}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,bb=/<script|<style|<link/i,cb=/checked\s*(?:[^=]|=\s*.checked.)/i,db=/^true\/(.*)/,eb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;oa.extend({htmlPrefilter:function(a){return a.replace(ab,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=oa.contains(a.ownerDocument,a);if(!(ma.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||oa.isXMLDoc(a)))for(g=r(h),f=r(a),d=0,e=f.length;d<e;d++)C(f[d],g[d]);if(b)if(c)for(f=f||r(a),g=g||r(h),d=0,e=f.length;d<e;d++)B(f[d],g[d]);else B(a,h);return g=r(h,"script"),g.length>0&&s(g,!i&&r(a,"script")),h},cleanData:function(a){for(var b,c,d,e=oa.event.special,f=0;void 0!==(c=a[f]);f++)if(Ia(c)){if(b=c[Ja.expando]){if(b.events)for(d in b.events)e[d]?oa.event.remove(c,d):oa.removeEvent(c,d,b.handle);c[Ja.expando]=void 0}c[Ka.expando]&&(c[Ka.expando]=void 0)}}}),oa.fn.extend({detach:function(a){return E(this,a,!0)},remove:function(a){return E(this,a)},text:function(a){return Ha(this,function(a){return void 0===a?oa.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return D(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=y(this,a);b.appendChild(a)}})},prepend:function(){return D(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=y(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return D(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return D(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(oa.cleanData(r(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return oa.clone(this,a,b)})},html:function(a){return Ha(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!bb.test(a)&&!Wa[(Ua.exec(a)||["",""])[1].toLowerCase()]){a=oa.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(oa.cleanData(r(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return D(this,arguments,function(b){var c=this.parentNode;oa.inArray(this,a)<0&&(oa.cleanData(r(this)),c&&c.replaceChild(b,this))},a)}}),oa.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){oa.fn[a]=function(a){for(var c,d=[],e=oa(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),oa(e[g])[b](c),fa.apply(d,c.get());return this.pushStack(d)}});var fb=/^margin/,gb=new RegExp("^("+Na+")(?!px)[a-z%]+$","i"),hb=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(h){h.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ya.appendChild(g);var b=a.getComputedStyle(h);c="1%"!==b.top,f="2px"===b.marginLeft,d="4px"===b.width,h.style.marginRight="50%",e="4px"===b.marginRight,Ya.removeChild(g),h=null}}var c,d,e,f,g=ba.createElement("div"),h=ba.createElement("div");h.style&&(h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",ma.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h),oa.extend(ma,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),d},pixelMarginRight:function(){return b(),e},reliableMarginLeft:function(){return b(),f}}))}();var ib=/^(none|table(?!-c[ea]).+)/,jb={position:"absolute",visibility:"hidden",display:"block"},kb={letterSpacing:"0",fontWeight:"400"},lb=["Webkit","Moz","ms"],mb=ba.createElement("div").style;oa.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=F(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=oa.camelCase(b),i=a.style;return b=oa.cssProps[h]||(oa.cssProps[h]=H(h)||h),g=oa.cssHooks[b]||oa.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Oa.exec(c))&&e[1]&&(c=o(a,b,e),f="number"),void(null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(oa.cssNumber[h]?"":"px")),ma.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c))))}},css:function(a,b,c,d){var e,f,g,h=oa.camelCase(b);return b=oa.cssProps[h]||(oa.cssProps[h]=H(h)||h),g=oa.cssHooks[b]||oa.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=F(a,b,d)),"normal"===e&&b in kb&&(e=kb[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),oa.each(["height","width"],function(a,b){oa.cssHooks[b]={get:function(a,c,d){if(c)return!ib.test(oa.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?K(a,b,d):Ra(a,jb,function(){return K(a,b,d)})},set:function(a,c,d){var e,f=d&&hb(a),g=d&&J(a,b,d,"border-box"===oa.css(a,"boxSizing",!1,f),f);return g&&(e=Oa.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=oa.css(a,b)),I(a,c,g)}}}),oa.cssHooks.marginLeft=G(ma.reliableMarginLeft,function(a,b){if(b)return(parseFloat(F(a,"marginLeft"))||a.getBoundingClientRect().left-Ra(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),oa.each({margin:"",padding:"",border:"Width"},function(a,b){oa.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+Pa[d]+b]=f[d]||f[d-2]||f[0];return e}},fb.test(a)||(oa.cssHooks[a+b].set=I)}),oa.fn.extend({css:function(a,b){return Ha(this,function(a,b,c){var d,e,f={},g=0;if(oa.isArray(b)){for(d=hb(a),e=b.length;g<e;g++)f[b[g]]=oa.css(a,b[g],!1,d);return f}return void 0!==c?oa.style(a,b,c):oa.css(a,b)},a,b,arguments.length>1)}}),oa.Tween=L,L.prototype={constructor:L,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||oa.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(oa.cssNumber[c]?"":"px")},cur:function(){var a=L.propHooks[this.prop];return a&&a.get?a.get(this):L.propHooks._default.get(this)},run:function(a){var b,c=L.propHooks[this.prop];return this.options.duration?this.pos=b=oa.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):L.propHooks._default.set(this),this}},L.prototype.init.prototype=L.prototype,L.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=oa.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){oa.fx.step[a.prop]?oa.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[oa.cssProps[a.prop]]&&!oa.cssHooks[a.prop]?a.elem[a.prop]=a.now:oa.style(a.elem,a.prop,a.now+a.unit)}}},L.propHooks.scrollTop=L.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},oa.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},oa.fx=L.prototype.init,oa.fx.step={};var nb,ob,pb=/^(?:toggle|show|hide)$/,qb=/queueHooks$/;oa.Animation=oa.extend(S,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return o(c.elem,a,Oa.exec(b),c),c}]},tweener:function(a,b){oa.isFunction(a)?(b=a,a=["*"]):a=a.match(Ea);for(var c,d=0,e=a.length;d<e;d++)c=a[d],S.tweeners[c]=S.tweeners[c]||[],S.tweeners[c].unshift(b)},prefilters:[Q],prefilter:function(a,b){b?S.prefilters.unshift(a):S.prefilters.push(a)}}),oa.speed=function(a,b,c){var d=a&&"object"==typeof a?oa.extend({},a):{complete:c||!c&&b||oa.isFunction(a)&&a,duration:a,easing:c&&b||b&&!oa.isFunction(b)&&b};return oa.fx.off||ba.hidden?d.duration=0:"number"!=typeof d.duration&&(d.duration in oa.fx.speeds?d.duration=oa.fx.speeds[d.duration]:d.duration=oa.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){oa.isFunction(d.old)&&d.old.call(this),d.queue&&oa.dequeue(this,d.queue)},d},oa.fn.extend({fadeTo:function(a,b,c,d){return this.filter(Qa).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=oa.isEmptyObject(a),f=oa.speed(b,c,d),g=function(){var b=S(this,oa.extend({},a),f);(e||Ja.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=oa.timers,g=Ja.get(this);
if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&qb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||oa.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=Ja.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=oa.timers,g=d?d.length:0;for(c.finish=!0,oa.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),oa.each(["toggle","show","hide"],function(a,b){var c=oa.fn[b];oa.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(O(b,!0),a,d,e)}}),oa.each({slideDown:O("show"),slideUp:O("hide"),slideToggle:O("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){oa.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),oa.timers=[],oa.fx.tick=function(){var a,b=0,c=oa.timers;for(nb=oa.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||oa.fx.stop(),nb=void 0},oa.fx.timer=function(a){oa.timers.push(a),a()?oa.fx.start():oa.timers.pop()},oa.fx.interval=13,oa.fx.start=function(){ob||(ob=a.requestAnimationFrame?a.requestAnimationFrame(M):a.setInterval(oa.fx.tick,oa.fx.interval))},oa.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame(ob):a.clearInterval(ob),ob=null},oa.fx.speeds={slow:600,fast:200,_default:400},oa.fn.delay=function(b,c){return b=oa.fx?oa.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=ba.createElement("input"),b=ba.createElement("select"),c=b.appendChild(ba.createElement("option"));a.type="checkbox",ma.checkOn=""!==a.value,ma.optSelected=c.selected,a=ba.createElement("input"),a.value="t",a.type="radio",ma.radioValue="t"===a.value}();var rb,sb=oa.expr.attrHandle;oa.fn.extend({attr:function(a,b){return Ha(this,oa.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){oa.removeAttr(this,a)})}}),oa.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?oa.prop(a,b,c):(1===f&&oa.isXMLDoc(a)||(e=oa.attrHooks[b.toLowerCase()]||(oa.expr.match.bool.test(b)?rb:void 0)),void 0!==c?null===c?void oa.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=oa.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!ma.radioValue&&"radio"===b&&oa.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(Ea);if(e&&1===a.nodeType)for(;c=e[d++];)a.removeAttribute(c)}}),rb={set:function(a,b,c){return b===!1?oa.removeAttr(a,c):a.setAttribute(c,c),c}},oa.each(oa.expr.match.bool.source.match(/\w+/g),function(a,b){var c=sb[b]||oa.find.attr;sb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=sb[g],sb[g]=e,e=null!=c(a,b,d)?g:null,sb[g]=f),e}});var tb=/^(?:input|select|textarea|button)$/i,ub=/^(?:a|area)$/i;oa.fn.extend({prop:function(a,b){return Ha(this,oa.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[oa.propFix[a]||a]})}}),oa.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&oa.isXMLDoc(a)||(b=oa.propFix[b]||b,e=oa.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=oa.find.attr(a,"tabindex");return b?parseInt(b,10):tb.test(a.nodeName)||ub.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),ma.optSelected||(oa.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),oa.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){oa.propFix[this.toLowerCase()]=this}),oa.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(oa.isFunction(a))return this.each(function(b){oa(this).addClass(a.call(this,b,U(this)))});if("string"==typeof a&&a)for(b=a.match(Ea)||[];c=this[i++];)if(e=U(c),d=1===c.nodeType&&" "+T(e)+" "){for(g=0;f=b[g++];)d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=T(d),e!==h&&c.setAttribute("class",h)}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(oa.isFunction(a))return this.each(function(b){oa(this).removeClass(a.call(this,b,U(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a)for(b=a.match(Ea)||[];c=this[i++];)if(e=U(c),d=1===c.nodeType&&" "+T(e)+" "){for(g=0;f=b[g++];)for(;d.indexOf(" "+f+" ")>-1;)d=d.replace(" "+f+" "," ");h=T(d),e!==h&&c.setAttribute("class",h)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):oa.isFunction(a)?this.each(function(c){oa(this).toggleClass(a.call(this,c,U(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c)for(d=0,e=oa(this),f=a.match(Ea)||[];b=f[d++];)e.hasClass(b)?e.removeClass(b):e.addClass(b);else void 0!==a&&"boolean"!==c||(b=U(this),b&&Ja.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":Ja.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;for(b=" "+a+" ";c=this[d++];)if(1===c.nodeType&&(" "+T(U(c))+" ").indexOf(b)>-1)return!0;return!1}});var vb=/\r/g;oa.fn.extend({val:function(a){var b,c,d,e=this[0];return arguments.length?(d=oa.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,oa(this).val()):a,null==e?e="":"number"==typeof e?e+="":oa.isArray(e)&&(e=oa.map(e,function(a){return null==a?"":a+""})),b=oa.valHooks[this.type]||oa.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))})):e?(b=oa.valHooks[e.type]||oa.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(vb,""):null==c?"":c)):void 0}}),oa.extend({valHooks:{option:{get:function(a){var b=oa.find.attr(a,"value");return null!=b?b:T(oa.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!oa.nodeName(c.parentNode,"optgroup"))){if(b=oa(c).val(),g)return b;h.push(b)}return h},set:function(a,b){for(var c,d,e=a.options,f=oa.makeArray(b),g=e.length;g--;)d=e[g],(d.selected=oa.inArray(oa.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),oa.each(["radio","checkbox"],function(){oa.valHooks[this]={set:function(a,b){if(oa.isArray(b))return a.checked=oa.inArray(oa(a).val(),b)>-1}},ma.checkOn||(oa.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var wb=/^(?:focusinfocus|focusoutblur)$/;oa.extend(oa.event,{trigger:function(b,c,d,e){var f,g,h,i,j,k,l,m=[d||ba],n=ja.call(b,"type")?b.type:b,o=ja.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||ba,3!==d.nodeType&&8!==d.nodeType&&!wb.test(n+oa.event.triggered)&&(n.indexOf(".")>-1&&(o=n.split("."),n=o.shift(),o.sort()),j=n.indexOf(":")<0&&"on"+n,b=b[oa.expando]?b:new oa.Event(n,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=o.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:oa.makeArray(c,[b]),l=oa.event.special[n]||{},e||!l.trigger||l.trigger.apply(d,c)!==!1)){if(!e&&!l.noBubble&&!oa.isWindow(d)){for(i=l.delegateType||n,wb.test(i+n)||(g=g.parentNode);g;g=g.parentNode)m.push(g),h=g;h===(d.ownerDocument||ba)&&m.push(h.defaultView||h.parentWindow||a)}for(f=0;(g=m[f++])&&!b.isPropagationStopped();)b.type=f>1?i:l.bindType||n,k=(Ja.get(g,"events")||{})[b.type]&&Ja.get(g,"handle"),k&&k.apply(g,c),k=j&&g[j],k&&k.apply&&Ia(g)&&(b.result=k.apply(g,c),b.result===!1&&b.preventDefault());return b.type=n,e||b.isDefaultPrevented()||l._default&&l._default.apply(m.pop(),c)!==!1||!Ia(d)||j&&oa.isFunction(d[n])&&!oa.isWindow(d)&&(h=d[j],h&&(d[j]=null),oa.event.triggered=n,d[n](),oa.event.triggered=void 0,h&&(d[j]=h)),b.result}},simulate:function(a,b,c){var d=oa.extend(new oa.Event,c,{type:a,isSimulated:!0});oa.event.trigger(d,null,b)}}),oa.fn.extend({trigger:function(a,b){return this.each(function(){oa.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return oa.event.trigger(a,b,c,!0)}}),oa.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){oa.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),oa.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),ma.focusin="onfocusin"in a,ma.focusin||oa.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){oa.event.simulate(b,a.target,oa.event.fix(a))};oa.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=Ja.access(d,b);e||d.addEventListener(a,c,!0),Ja.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=Ja.access(d,b)-1;e?Ja.access(d,b,e):(d.removeEventListener(a,c,!0),Ja.remove(d,b))}}});var xb=a.location,yb=oa.now(),zb=/\?/;oa.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||oa.error("Invalid XML: "+b),c};var Ab=/\[\]$/,Bb=/\r?\n/g,Cb=/^(?:submit|button|image|reset|file)$/i,Db=/^(?:input|select|textarea|keygen)/i;oa.param=function(a,b){var c,d=[],e=function(a,b){var c=oa.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(oa.isArray(a)||a.jquery&&!oa.isPlainObject(a))oa.each(a,function(){e(this.name,this.value)});else for(c in a)V(c,a[c],b,e);return d.join("&")},oa.fn.extend({serialize:function(){return oa.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=oa.prop(this,"elements");return a?oa.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!oa(this).is(":disabled")&&Db.test(this.nodeName)&&!Cb.test(a)&&(this.checked||!Ta.test(a))}).map(function(a,b){var c=oa(this).val();return null==c?null:oa.isArray(c)?oa.map(c,function(a){return{name:b.name,value:a.replace(Bb,"\r\n")}}):{name:b.name,value:c.replace(Bb,"\r\n")}}).get()}});var Eb=/%20/g,Fb=/#.*$/,Gb=/([?&])_=[^&]*/,Hb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ib=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Jb=/^(?:GET|HEAD)$/,Kb=/^\/\//,Lb={},Mb={},Nb="*/".concat("*"),Ob=ba.createElement("a");Ob.href=xb.href,oa.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:xb.href,type:"GET",isLocal:Ib.test(xb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":oa.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Y(Y(a,oa.ajaxSettings),b):Y(oa.ajaxSettings,a)},ajaxPrefilter:W(Lb),ajaxTransport:W(Mb),ajax:function(b,c){function d(b,c,d,h){var j,m,n,u,v,w=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(u=Z(o,x,d)),u=$(o,u,x,j),j?(o.ifModified&&(v=x.getResponseHeader("Last-Modified"),v&&(oa.lastModified[f]=v),v=x.getResponseHeader("etag"),v&&(oa.etag[f]=v)),204===b||"HEAD"===o.type?w="nocontent":304===b?w="notmodified":(w=u.state,m=u.data,n=u.error,j=!n)):(n=w,!b&&w||(w="error",b<0&&(b=0))),x.status=b,x.statusText=(c||w)+"",j?r.resolveWith(p,[m,w,x]):r.rejectWith(p,[x,w,n]),x.statusCode(t),t=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[x,o,j?m:n]),s.fireWith(p,[x,w]),l&&(q.trigger("ajaxComplete",[x,o]),--oa.active||oa.event.trigger("ajaxStop")))}"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=oa.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?oa(p):oa.event,r=oa.Deferred(),s=oa.Callbacks("once memory"),t=o.statusCode||{},u={},v={},w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h)for(h={};b=Hb.exec(g);)h[b[1].toLowerCase()]=b[2];b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=v[a.toLowerCase()]=v[a.toLowerCase()]||a,u[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)x.always(a[x.status]);else for(b in a)t[b]=[t[b],a[b]];return this},abort:function(a){var b=a||w;return e&&e.abort(b),d(0,b),this}};if(r.promise(x),o.url=((b||o.url||xb.href)+"").replace(Kb,xb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(Ea)||[""],null==o.crossDomain){j=ba.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ob.protocol+"//"+Ob.host!=j.protocol+"//"+j.host}catch(y){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=oa.param(o.data,o.traditional)),X(Lb,o,c,x),k)return x;l=oa.event&&o.global,l&&0===oa.active++&&oa.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Jb.test(o.type),f=o.url.replace(Fb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Eb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(zb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Gb,"$1"),n=(zb.test(f)?"&":"?")+"_="+yb++ +n),o.url=f+n),o.ifModified&&(oa.lastModified[f]&&x.setRequestHeader("If-Modified-Since",oa.lastModified[f]),oa.etag[f]&&x.setRequestHeader("If-None-Match",oa.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",o.contentType),x.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Nb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)x.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,x,o)===!1||k))return x.abort();if(w="abort",s.add(o.complete),x.done(o.success),x.fail(o.error),e=X(Mb,o,c,x)){if(x.readyState=1,l&&q.trigger("ajaxSend",[x,o]),k)return x;o.async&&o.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},o.timeout));try{k=!1,e.send(u,d)}catch(y){if(k)throw y;d(-1,y)}}else d(-1,"No Transport");return x},getJSON:function(a,b,c){return oa.get(a,b,c,"json")},getScript:function(a,b){return oa.get(a,void 0,b,"script")}}),oa.each(["get","post"],function(a,b){oa[b]=function(a,c,d,e){return oa.isFunction(c)&&(e=e||d,d=c,c=void 0),oa.ajax(oa.extend({url:a,type:b,dataType:e,data:c,success:d},oa.isPlainObject(a)&&a))}}),oa._evalUrl=function(a){return oa.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},oa.fn.extend({wrapAll:function(a){var b;return this[0]&&(oa.isFunction(a)&&(a=a.call(this[0])),b=oa(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){for(var a=this;a.firstElementChild;)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return oa.isFunction(a)?this.each(function(b){oa(this).wrapInner(a.call(this,b))}):this.each(function(){var b=oa(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=oa.isFunction(a);return this.each(function(c){oa(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){oa(this).replaceWith(this.childNodes)}),this}}),oa.expr.pseudos.hidden=function(a){return!oa.expr.pseudos.visible(a)},oa.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},oa.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Pb={0:200,1223:204},Qb=oa.ajaxSettings.xhr();ma.cors=!!Qb&&"withCredentials"in Qb,ma.ajax=Qb=!!Qb,oa.ajaxTransport(function(b){var c,d;if(ma.cors||Qb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Pb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),oa.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),oa.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return oa.globalEval(a),a}}}),oa.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),oa.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=oa("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),ba.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Rb=[],Sb=/(=)\?(?=&|$)|\?\?/;oa.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Rb.pop()||oa.expando+"_"+yb++;return this[a]=!0,a}}),oa.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Sb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Sb.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=oa.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Sb,"$1"+e):b.jsonp!==!1&&(b.url+=(zb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||oa.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?oa(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Rb.push(e)),g&&oa.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),ma.createHTMLDocument=function(){var a=ba.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),oa.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var d,e,f;return b||(ma.createHTMLDocument?(b=ba.implementation.createHTMLDocument(""),d=b.createElement("base"),d.href=ba.location.href,b.head.appendChild(d)):b=ba),e=xa.exec(a),f=!c&&[],e?[b.createElement(e[1])]:(e=t([a],b,f),f&&f.length&&oa(f).remove(),oa.merge([],e.childNodes))},oa.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=T(a.slice(h)),a=a.slice(0,h)),oa.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&oa.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?oa("<div>").append(oa.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},oa.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){oa.fn[b]=function(a){return this.on(b,a)}}),oa.expr.pseudos.animated=function(a){return oa.grep(oa.timers,function(b){return a===b.elem}).length},oa.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=oa.css(a,"position"),l=oa(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=oa.css(a,"top"),i=oa.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),oa.isFunction(b)&&(b=b.call(a,c,oa.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},oa.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){oa.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];return f?f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=_(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}:void 0},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===oa.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),oa.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+oa.css(a[0],"borderTopWidth",!0),left:d.left+oa.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-oa.css(c,"marginTop",!0),left:b.left-d.left-oa.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent;a&&"static"===oa.css(a,"position");)a=a.offsetParent;return a||Ya})}}),oa.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;oa.fn[a]=function(d){return Ha(this,function(a,d,e){var f=_(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),oa.each(["top","left"],function(a,b){oa.cssHooks[b]=G(ma.pixelPosition,function(a,c){if(c)return c=F(a,b),gb.test(c)?oa(a).position()[b]+"px":c})}),oa.each({Height:"height",Width:"width"},function(a,b){oa.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){oa.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return Ha(this,function(b,c,e){var f;return oa.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?oa.css(b,c,h):oa.style(b,c,e,h)},b,g?e:void 0,g)}})}),oa.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),oa.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return oa});var Tb=a.jQuery,Ub=a.$;return oa.noConflict=function(b){return a.$===oa&&(a.$=Ub),b&&a.jQuery===oa&&(a.jQuery=Tb),oa},b||(a.jQuery=a.$=oa),oa}),function(){"use strict";/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */
/*jslint browser:true, node:true*/
/*global define, Event, Node*/
/**
	 * Instantiate fast-clicking listeners on the specified layer.
	 *
	 * @constructor
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
function a(b,d){
// Some old versions of Android don't have Function.prototype.bind
function e(a,b){return function(){return a.apply(b,arguments)}}var f;if(d=d||{},/**
		 * Whether a click is currently being tracked.
		 *
		 * @type boolean
		 */
this.trackingClick=!1,/**
		 * Timestamp for when click tracking started.
		 *
		 * @type number
		 */
this.trackingClickStart=0,/**
		 * The element being tracked for a click.
		 *
		 * @type EventTarget
		 */
this.targetElement=null,/**
		 * X-coordinate of touch start event.
		 *
		 * @type number
		 */
this.touchStartX=0,/**
		 * Y-coordinate of touch start event.
		 *
		 * @type number
		 */
this.touchStartY=0,/**
		 * ID of the last touch, retrieved from Touch.identifier.
		 *
		 * @type number
		 */
this.lastTouchIdentifier=0,/**
		 * Touchmove boundary, beyond which a click will be cancelled.
		 *
		 * @type number
		 */
this.touchBoundary=d.touchBoundary||10,/**
		 * The FastClick layer.
		 *
		 * @type Element
		 */
this.layer=b,/**
		 * The minimum time between tap(touchstart and touchend) events
		 *
		 * @type number
		 */
this.tapDelay=d.tapDelay||200,/**
		 * The maximum time for a tap
		 *
		 * @type number
		 */
this.tapTimeout=d.tapTimeout||700,!a.notNeeded(b)){for(var g=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],h=this,i=0,j=g.length;i<j;i++)h[g[i]]=e(h[g[i]],h);
// Set up event handlers as required
c&&(b.addEventListener("mouseover",this.onMouse,!0),b.addEventListener("mousedown",this.onMouse,!0),b.addEventListener("mouseup",this.onMouse,!0)),b.addEventListener("click",this.onClick,!0),b.addEventListener("touchstart",this.onTouchStart,!1),b.addEventListener("touchmove",this.onTouchMove,!1),b.addEventListener("touchend",this.onTouchEnd,!1),b.addEventListener("touchcancel",this.onTouchCancel,!1),
// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
// layer when they are cancelled.
Event.prototype.stopImmediatePropagation||(b.removeEventListener=function(a,c,d){var e=Node.prototype.removeEventListener;"click"===a?e.call(b,a,c.hijacked||c,d):e.call(b,a,c,d)},b.addEventListener=function(a,c,d){var e=Node.prototype.addEventListener;"click"===a?e.call(b,a,c.hijacked||(c.hijacked=function(a){a.propagationStopped||c(a)}),d):e.call(b,a,c,d)}),
// If a handler is already declared in the element's onclick attribute, it will be fired before
// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
// adding it as listener.
"function"==typeof b.onclick&&(
// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
// - the old one won't work if passed to addEventListener directly.
f=b.onclick,b.addEventListener("click",function(a){f(a)},!1),b.onclick=null)}}/**
	* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	*
	* @type boolean
	*/
var b=navigator.userAgent.indexOf("Windows Phone")>=0,c=navigator.userAgent.indexOf("Android")>0&&!b,d=/iP(ad|hone|od)/.test(navigator.userAgent)&&!b,e=d&&/OS 4_\d(_\d)?/.test(navigator.userAgent),f=d&&/OS [6-7]_\d/.test(navigator.userAgent),g=navigator.userAgent.indexOf("BB10")>0;/**
	 * Determine whether a given element requires a native click.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element needs a native click
	 */
a.prototype.needsClick=function(a){switch(a.nodeName.toLowerCase()){
// Don't send a synthetic click to disabled inputs (issue #62)
case"button":case"select":case"textarea":if(a.disabled)return!0;break;case"input":
// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
if(d&&"file"===a.type||a.disabled)return!0;break;case"label":case"iframe":// iOS8 homescreen apps can prevent events bubbling into frames
case"video":return!0}return/\bneedsclick\b/.test(a.className)},/**
	 * Determine whether a given element requires a call to focus to simulate click into element.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	 */
a.prototype.needsFocus=function(a){switch(a.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!c;case"input":switch(a.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}
// No point in attempting to focus disabled inputs
return!a.disabled&&!a.readOnly;default:return/\bneedsfocus\b/.test(a.className)}},/**
	 * Send a click event to the specified element.
	 *
	 * @param {EventTarget|Element} targetElement
	 * @param {Event} event
	 */
a.prototype.sendClick=function(a,b){var c,d;
// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
document.activeElement&&document.activeElement!==a&&document.activeElement.blur(),d=b.changedTouches[0],
// Synthesise a click event, with an extra attribute so it can be tracked
c=document.createEvent("MouseEvents"),c.initMouseEvent(this.determineEventType(a),!0,!0,window,1,d.screenX,d.screenY,d.clientX,d.clientY,!1,!1,!1,!1,0,null),c.forwardedTouchEvent=!0,a.dispatchEvent(c)},a.prototype.determineEventType=function(a){
//Issue #159: Android Chrome Select Box does not open with a synthetic click event
//Issue #159: Android Chrome Select Box does not open with a synthetic click event
return c&&"select"===a.tagName.toLowerCase()?"mousedown":"click"},/**
	 * @param {EventTarget|Element} targetElement
	 */
a.prototype.focus=function(a){var b;
// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
d&&a.setSelectionRange&&0!==a.type.indexOf("date")&&"time"!==a.type&&"month"!==a.type?(b=a.value.length,a.setSelectionRange(b,b)):a.focus()},/**
	 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	 *
	 * @param {EventTarget|Element} targetElement
	 */
a.prototype.updateScrollParent=function(a){var b,c;
// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
// target element was moved to another parent.
if(b=a.fastClickScrollParent,!b||!b.contains(a)){c=a;do{if(c.scrollHeight>c.offsetHeight){b=c,a.fastClickScrollParent=c;break}c=c.parentElement}while(c)}
// Always update the scroll top tracker if possible.
b&&(b.fastClickLastScrollTop=b.scrollTop)},/**
	 * @param {EventTarget} targetElement
	 * @returns {Element|EventTarget}
	 */
a.prototype.getTargetElementFromEventTarget=function(a){
// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
return a.nodeType===Node.TEXT_NODE?a.parentNode:a},/**
	 * On touch start, record the position and scroll offset.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
a.prototype.onTouchStart=function(a){var b,c,f;
// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
if(a.targetTouches.length>1)return!0;if(b=this.getTargetElementFromEventTarget(a.target),c=a.targetTouches[0],d){if(
// Only trusted events will deselect text on iOS (issue #49)
f=window.getSelection(),f.rangeCount&&!f.isCollapsed)return!0;if(!e){
// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
// with the same identifier as the touch event that previously triggered the click that triggered the alert.
// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
// random integers, it's safe to to continue if the identifier is 0 here.
if(c.identifier&&c.identifier===this.lastTouchIdentifier)return a.preventDefault(),!1;this.lastTouchIdentifier=c.identifier,
// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
// 1) the user does a fling scroll on the scrollable layer
// 2) the user stops the fling scroll with another tap
// then the event.target of the last 'touchend' event will be the element that was under the user's finger
// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
this.updateScrollParent(b)}}
// Prevent phantom clicks on fast double-tap (issue #36)
return this.trackingClick=!0,this.trackingClickStart=a.timeStamp,this.targetElement=b,this.touchStartX=c.pageX,this.touchStartY=c.pageY,a.timeStamp-this.lastClickTime<this.tapDelay&&a.preventDefault(),!0},/**
	 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
a.prototype.touchHasMoved=function(a){var b=a.changedTouches[0],c=this.touchBoundary;return Math.abs(b.pageX-this.touchStartX)>c||Math.abs(b.pageY-this.touchStartY)>c},/**
	 * Update the last position.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
a.prototype.onTouchMove=function(a){
// If the touch has moved, cancel the click tracking
return!this.trackingClick||((this.targetElement!==this.getTargetElementFromEventTarget(a.target)||this.touchHasMoved(a))&&(this.trackingClick=!1,this.targetElement=null),!0)},/**
	 * Attempt to find the labelled control for the given label element.
	 *
	 * @param {EventTarget|HTMLLabelElement} labelElement
	 * @returns {Element|null}
	 */
a.prototype.findControl=function(a){
// Fast path for newer browsers supporting the HTML5 control attribute
// Fast path for newer browsers supporting the HTML5 control attribute
// All browsers under test that support touch events also support the HTML5 htmlFor attribute
return void 0!==a.control?a.control:a.htmlFor?document.getElementById(a.htmlFor):a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},/**
	 * On touch end, determine whether to send a click event at once.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
a.prototype.onTouchEnd=function(a){var b,g,h,i,j,k=this.targetElement;if(!this.trackingClick)return!0;
// Prevent phantom clicks on fast double-tap (issue #36)
if(a.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(a.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(
// Reset to prevent wrong click cancel on input (issue #156).
this.cancelNextClick=!1,this.lastClickTime=a.timeStamp,g=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,
// On some iOS devices, the targetElement supplied with the event is invalid if the layer
// is performing a transition or scroll, and has to be re-detected manually. Note that
// for this to function correctly, it must be called *after* the event target is checked!
// See issue #57; also filed as rdar://13048589 .
f&&(j=a.changedTouches[0],
// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
k=document.elementFromPoint(j.pageX-window.pageXOffset,j.pageY-window.pageYOffset)||k,k.fastClickScrollParent=this.targetElement.fastClickScrollParent),h=k.tagName.toLowerCase(),"label"===h){if(b=this.findControl(k)){if(this.focus(k),c)return!1;k=b}}else if(this.needsFocus(k))
// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
return a.timeStamp-g>100||d&&window.top!==window&&"input"===h?(this.targetElement=null,!1):(this.focus(k),this.sendClick(k,a),d&&"select"===h||(this.targetElement=null,a.preventDefault()),!1);
// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
// Prevent the actual click from going though - unless the target node is marked as requiring
// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
return!(!d||e||(i=k.fastClickScrollParent,!i||i.fastClickLastScrollTop===i.scrollTop))||(this.needsClick(k)||(a.preventDefault(),this.sendClick(k,a)),!1)},/**
	 * On touch cancel, stop tracking the click.
	 *
	 * @returns {void}
	 */
a.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},/**
	 * Determine mouse events which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
a.prototype.onMouse=function(a){
// If a target element was never set (because a touch event was never fired) allow the event
// If a target element was never set (because a touch event was never fired) allow the event
// Programmatically generated events targeting a specific element should be permitted
// Derive and check the target element to see whether the mouse event needs to be permitted;
// unless explicitly enabled, prevent non-touch click events from triggering actions,
// to prevent ghost/doubleclicks.
// Prevent any user-added listeners declared on FastClick element from being fired.
// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
// Cancel the event
return!this.targetElement||(!!a.forwardedTouchEvent||(!a.cancelable||(!(!this.needsClick(this.targetElement)||this.cancelNextClick)||(a.stopImmediatePropagation?a.stopImmediatePropagation():a.propagationStopped=!0,a.stopPropagation(),a.preventDefault(),!1))))},/**
	 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	 * an actual click which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
a.prototype.onClick=function(a){var b;
// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===a.target.type&&0===a.detail||(b=this.onMouse(a),b||(this.targetElement=null),b)},/**
	 * Remove all FastClick's event listeners.
	 *
	 * @returns {void}
	 */
a.prototype.destroy=function(){var a=this.layer;c&&(a.removeEventListener("mouseover",this.onMouse,!0),a.removeEventListener("mousedown",this.onMouse,!0),a.removeEventListener("mouseup",this.onMouse,!0)),a.removeEventListener("click",this.onClick,!0),a.removeEventListener("touchstart",this.onTouchStart,!1),a.removeEventListener("touchmove",this.onTouchMove,!1),a.removeEventListener("touchend",this.onTouchEnd,!1),a.removeEventListener("touchcancel",this.onTouchCancel,!1)},/**
	 * Check whether FastClick is needed.
	 *
	 * @param {Element} layer The layer to listen on
	 */
a.notNeeded=function(a){var b,d,e,f;
// Devices that don't support touch don't need FastClick
if("undefined"==typeof window.ontouchstart)return!0;if(
// Chrome version - zero for other browsers
d=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!c)return!0;if(b=document.querySelector("meta[name=viewport]")){
// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
if(b.content.indexOf("user-scalable=no")!==-1)return!0;
// Chrome 32 and above with width=device-width or less don't need FastClick
if(d>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(g&&(e=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),e[1]>=10&&e[2]>=3&&(b=document.querySelector("meta[name=viewport]")))){
// user-scalable=no eliminates click delay.
if(b.content.indexOf("user-scalable=no")!==-1)return!0;
// width=device-width (or less than device-width) eliminates click delay.
if(document.documentElement.scrollWidth<=window.outerWidth)return!0}
// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
// Firefox version - zero for other browsers
// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896
return"none"===a.style.msTouchAction||"manipulation"===a.style.touchAction||(f=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1],!!(f>=27&&(b=document.querySelector("meta[name=viewport]"),b&&(b.content.indexOf("user-scalable=no")!==-1||document.documentElement.scrollWidth<=window.outerWidth)))||("none"===a.style.touchAction||"manipulation"===a.style.touchAction))},/**
	 * Factory method for creating a FastClick object
	 *
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
a.attach=function(b,c){return new a(b,c)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?
// AMD. Register as an anonymous module.
define(function(){return a}):"undefined"!=typeof module&&module.exports?(module.exports=a.attach,module.exports.FastClick=a):window.FastClick=a}(),function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.moment=b()}(this,function(){"use strict";function a(){return md.apply(null,arguments)}
// This is done to register the method called with moment()
// without creating circular dependencies.
function b(a){md=a}function c(a){return a instanceof Array||"[object Array]"===Object.prototype.toString.call(a)}function d(a){
// IE8 will treat undefined and null as object if it wasn't for
// input != null
return null!=a&&"[object Object]"===Object.prototype.toString.call(a)}function e(a){var b;for(b in a)
// even if its not own property I'd still call it non-empty
return!1;return!0}function f(a){return a instanceof Date||"[object Date]"===Object.prototype.toString.call(a)}function g(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function h(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function i(a,b){for(var c in b)h(b,c)&&(a[c]=b[c]);return h(b,"toString")&&(a.toString=b.toString),h(b,"valueOf")&&(a.valueOf=b.valueOf),a}function j(a,b,c,d){return qb(a,b,c,d,!0).utc()}function k(){
// We need to deep clone this object.
return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null}}function l(a){return null==a._pf&&(a._pf=k()),a._pf}function m(a){if(null==a._isValid){var b=l(a),c=nd.call(b.parsedDateParts,function(a){return null!=a}),d=!isNaN(a._d.getTime())&&b.overflow<0&&!b.empty&&!b.invalidMonth&&!b.invalidWeekday&&!b.nullInput&&!b.invalidFormat&&!b.userInvalidated&&(!b.meridiem||b.meridiem&&c);if(a._strict&&(d=d&&0===b.charsLeftOver&&0===b.unusedTokens.length&&void 0===b.bigHour),null!=Object.isFrozen&&Object.isFrozen(a))return d;a._isValid=d}return a._isValid}function n(a){var b=j(NaN);return null!=a?i(l(b),a):l(b).userInvalidated=!0,b}function o(a){return void 0===a}function p(a,b){var c,d,e;if(o(b._isAMomentObject)||(a._isAMomentObject=b._isAMomentObject),o(b._i)||(a._i=b._i),o(b._f)||(a._f=b._f),o(b._l)||(a._l=b._l),o(b._strict)||(a._strict=b._strict),o(b._tzm)||(a._tzm=b._tzm),o(b._isUTC)||(a._isUTC=b._isUTC),o(b._offset)||(a._offset=b._offset),o(b._pf)||(a._pf=l(b)),o(b._locale)||(a._locale=b._locale),od.length>0)for(c in od)d=od[c],e=b[d],o(e)||(a[d]=e);return a}
// Moment prototype object
function q(b){p(this,b),this._d=new Date(null!=b._d?b._d.getTime():NaN),
// Prevent infinite loop in case updateOffset creates new moment
// objects.
pd===!1&&(pd=!0,a.updateOffset(this),pd=!1)}function r(a){return a instanceof q||null!=a&&null!=a._isAMomentObject}function s(a){return a<0?Math.ceil(a)||0:Math.floor(a)}function t(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=s(b)),c}
// compare two arrays, return the number of differences
function u(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;d<e;d++)(c&&a[d]!==b[d]||!c&&t(a[d])!==t(b[d]))&&g++;return g+f}function v(b){a.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+b)}function w(b,c){var d=!0;return i(function(){if(null!=a.deprecationHandler&&a.deprecationHandler(null,b),d){for(var e,f=[],g=0;g<arguments.length;g++){if(e="","object"==typeof arguments[g]){e+="\n["+g+"] ";for(var h in arguments[0])e+=h+": "+arguments[0][h]+", ";e=e.slice(0,-2)}else e=arguments[g];f.push(e)}v(b+"\nArguments: "+Array.prototype.slice.call(f).join("")+"\n"+(new Error).stack),d=!1}return c.apply(this,arguments)},c)}function x(b,c){null!=a.deprecationHandler&&a.deprecationHandler(b,c),qd[b]||(v(c),qd[b]=!0)}function y(a){return a instanceof Function||"[object Function]"===Object.prototype.toString.call(a)}function z(a){var b,c;for(c in a)b=a[c],y(b)?this[c]=b:this["_"+c]=b;this._config=a,
// Lenient ordinal parsing accepts just a number in addition to
// number + (possibly) stuff coming from _ordinalParseLenient.
this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}function A(a,b){var c,e=i({},a);for(c in b)h(b,c)&&(d(a[c])&&d(b[c])?(e[c]={},i(e[c],a[c]),i(e[c],b[c])):null!=b[c]?e[c]=b[c]:delete e[c]);for(c in a)h(a,c)&&!h(b,c)&&d(a[c])&&(
// make sure changes to properties don't modify parent config
e[c]=i({},e[c]));return e}function B(a){null!=a&&this.set(a)}function C(a,b,c){var d=this._calendar[a]||this._calendar.sameElse;return y(d)?d.call(b,c):d}function D(a){var b=this._longDateFormat[a],c=this._longDateFormat[a.toUpperCase()];return b||!c?b:(this._longDateFormat[a]=c.replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a])}function E(){return this._invalidDate}function F(a){return this._ordinal.replace("%d",a)}function G(a,b,c,d){var e=this._relativeTime[c];return y(e)?e(a,b,c,d):e.replace(/%d/i,a)}function H(a,b){var c=this._relativeTime[a>0?"future":"past"];return y(c)?c(b):c.replace(/%s/i,b)}function I(a,b){var c=a.toLowerCase();zd[c]=zd[c+"s"]=zd[b]=a}function J(a){return"string"==typeof a?zd[a]||zd[a.toLowerCase()]:void 0}function K(a){var b,c,d={};for(c in a)h(a,c)&&(b=J(c),b&&(d[b]=a[c]));return d}function L(a,b){Ad[a]=b}function M(a){var b=[];for(var c in a)b.push({unit:c,priority:Ad[c]});return b.sort(function(a,b){return a.priority-b.priority}),b}function N(b,c){return function(d){return null!=d?(P(this,b,d),a.updateOffset(this,c),this):O(this,b)}}function O(a,b){return a.isValid()?a._d["get"+(a._isUTC?"UTC":"")+b]():NaN}function P(a,b,c){a.isValid()&&a._d["set"+(a._isUTC?"UTC":"")+b](c)}
// MOMENTS
function Q(a){return a=J(a),y(this[a])?this[a]():this}function R(a,b){if("object"==typeof a){a=K(a);for(var c=M(a),d=0;d<c.length;d++)this[c[d].unit](a[c[d].unit])}else if(a=J(a),y(this[a]))return this[a](b);return this}function S(a,b,c){var d=""+Math.abs(a),e=b-d.length,f=a>=0;return(f?c?"+":"":"-")+Math.pow(10,Math.max(0,e)).toString().substr(1)+d}
// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function T(a,b,c,d){var e=d;"string"==typeof d&&(e=function(){return this[d]()}),a&&(Ed[a]=e),b&&(Ed[b[0]]=function(){return S(e.apply(this,arguments),b[1],b[2])}),c&&(Ed[c]=function(){return this.localeData().ordinal(e.apply(this,arguments),a)})}function U(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function V(a){var b,c,d=a.match(Bd);for(b=0,c=d.length;b<c;b++)Ed[d[b]]?d[b]=Ed[d[b]]:d[b]=U(d[b]);return function(b){var e,f="";for(e=0;e<c;e++)f+=d[e]instanceof Function?d[e].call(b,a):d[e];return f}}
// format date using native date object
function W(a,b){return a.isValid()?(b=X(b,a.localeData()),Dd[b]=Dd[b]||V(b),Dd[b](a)):a.localeData().invalidDate()}function X(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Cd.lastIndex=0;d>=0&&Cd.test(a);)a=a.replace(Cd,c),Cd.lastIndex=0,d-=1;return a}function Y(a,b,c){Wd[a]=y(b)?b:function(a,d){return a&&c?c:b}}function Z(a,b){return h(Wd,a)?Wd[a](b._strict,b._locale):new RegExp($(a))}
// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function $(a){return _(a.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e}))}function _(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function aa(a,b){var c,d=b;for("string"==typeof a&&(a=[a]),"number"==typeof b&&(d=function(a,c){c[b]=t(a)}),c=0;c<a.length;c++)Xd[a[c]]=d}function ba(a,b){aa(a,function(a,c,d,e){d._w=d._w||{},b(a,d._w,d,e)})}function ca(a,b,c){null!=b&&h(Xd,a)&&Xd[a](b,c._a,c,a)}function da(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function ea(a,b){return a?c(this._months)?this._months[a.month()]:this._months[(this._months.isFormat||fe).test(b)?"format":"standalone"][a.month()]:this._months}function fa(a,b){return a?c(this._monthsShort)?this._monthsShort[a.month()]:this._monthsShort[fe.test(b)?"format":"standalone"][a.month()]:this._monthsShort}function ga(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._monthsParse)for(
// this is not used
this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],d=0;d<12;++d)f=j([2e3,d]),this._shortMonthsParse[d]=this.monthsShort(f,"").toLocaleLowerCase(),this._longMonthsParse[d]=this.months(f,"").toLocaleLowerCase();return c?"MMM"===b?(e=sd.call(this._shortMonthsParse,g),e!==-1?e:null):(e=sd.call(this._longMonthsParse,g),e!==-1?e:null):"MMM"===b?(e=sd.call(this._shortMonthsParse,g),e!==-1?e:(e=sd.call(this._longMonthsParse,g),e!==-1?e:null)):(e=sd.call(this._longMonthsParse,g),e!==-1?e:(e=sd.call(this._shortMonthsParse,g),e!==-1?e:null))}function ha(a,b,c){var d,e,f;if(this._monthsParseExact)return ga.call(this,a,b,c);
// TODO: add sorting
// Sorting makes sure if one month (or abbr) is a prefix of another
// see sorting in computeMonthsParse
for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;d<12;d++){
// test the regex
if(
// make the regex if we don't have it already
e=j([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}}
// MOMENTS
function ia(a,b){var c;if(!a.isValid())
// No op
return a;if("string"==typeof b)if(/^\d+$/.test(b))b=t(b);else
// TODO: Another silent failure?
if(b=a.localeData().monthsParse(b),"number"!=typeof b)return a;return c=Math.min(a.date(),da(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a}function ja(b){return null!=b?(ia(this,b),a.updateOffset(this,!0),this):O(this,"Month")}function ka(){return da(this.year(),this.month())}function la(a){return this._monthsParseExact?(h(this,"_monthsRegex")||na.call(this),a?this._monthsShortStrictRegex:this._monthsShortRegex):(h(this,"_monthsShortRegex")||(this._monthsShortRegex=ie),this._monthsShortStrictRegex&&a?this._monthsShortStrictRegex:this._monthsShortRegex)}function ma(a){return this._monthsParseExact?(h(this,"_monthsRegex")||na.call(this),a?this._monthsStrictRegex:this._monthsRegex):(h(this,"_monthsRegex")||(this._monthsRegex=je),this._monthsStrictRegex&&a?this._monthsStrictRegex:this._monthsRegex)}function na(){function a(a,b){return b.length-a.length}var b,c,d=[],e=[],f=[];for(b=0;b<12;b++)
// make the regex if we don't have it already
c=j([2e3,b]),d.push(this.monthsShort(c,"")),e.push(this.months(c,"")),f.push(this.months(c,"")),f.push(this.monthsShort(c,""));for(
// Sorting makes sure if one month (or abbr) is a prefix of another it
// will match the longer piece.
d.sort(a),e.sort(a),f.sort(a),b=0;b<12;b++)d[b]=_(d[b]),e[b]=_(e[b]);for(b=0;b<24;b++)f[b]=_(f[b]);this._monthsRegex=new RegExp("^("+f.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+e.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+d.join("|")+")","i")}
// HELPERS
function oa(a){return pa(a)?366:365}function pa(a){return a%4===0&&a%100!==0||a%400===0}function qa(){return pa(this.year())}function ra(a,b,c,d,e,f,g){
//can't just apply() to create a date:
//http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
var h=new Date(a,b,c,d,e,f,g);
//the date constructor remaps years 0-99 to 1900-1999
return a<100&&a>=0&&isFinite(h.getFullYear())&&h.setFullYear(a),h}function sa(a){var b=new Date(Date.UTC.apply(null,arguments));
//the Date.UTC function remaps years 0-99 to 1900-1999
return a<100&&a>=0&&isFinite(b.getUTCFullYear())&&b.setUTCFullYear(a),b}
// start-of-first-week - start-of-year
function ta(a,b,c){var// first-week day -- which january is always in the first week (4 for iso, 1 for other)
d=7+b-c,
// first-week day local weekday -- which local weekday is fwd
e=(7+sa(a,0,d).getUTCDay()-b)%7;return-e+d-1}
//http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function ua(a,b,c,d,e){var f,g,h=(7+c-d)%7,i=ta(a,d,e),j=1+7*(b-1)+h+i;return j<=0?(f=a-1,g=oa(f)+j):j>oa(a)?(f=a+1,g=j-oa(a)):(f=a,g=j),{year:f,dayOfYear:g}}function va(a,b,c){var d,e,f=ta(a.year(),b,c),g=Math.floor((a.dayOfYear()-f-1)/7)+1;return g<1?(e=a.year()-1,d=g+wa(e,b,c)):g>wa(a.year(),b,c)?(d=g-wa(a.year(),b,c),e=a.year()+1):(e=a.year(),d=g),{week:d,year:e}}function wa(a,b,c){var d=ta(a,b,c),e=ta(a+1,b,c);return(oa(a)-d+e)/7}
// HELPERS
// LOCALES
function xa(a){return va(a,this._week.dow,this._week.doy).week}function ya(){return this._week.dow}function za(){return this._week.doy}
// MOMENTS
function Aa(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")}function Ba(a){var b=va(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")}
// HELPERS
function Ca(a,b){return"string"!=typeof a?a:isNaN(a)?(a=b.weekdaysParse(a),"number"==typeof a?a:null):parseInt(a,10)}function Da(a,b){return"string"==typeof a?b.weekdaysParse(a)%7||7:isNaN(a)?null:a}function Ea(a,b){return a?c(this._weekdays)?this._weekdays[a.day()]:this._weekdays[this._weekdays.isFormat.test(b)?"format":"standalone"][a.day()]:this._weekdays}function Fa(a){return a?this._weekdaysShort[a.day()]:this._weekdaysShort}function Ga(a){return a?this._weekdaysMin[a.day()]:this._weekdaysMin}function Ha(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],d=0;d<7;++d)f=j([2e3,1]).day(d),this._minWeekdaysParse[d]=this.weekdaysMin(f,"").toLocaleLowerCase(),this._shortWeekdaysParse[d]=this.weekdaysShort(f,"").toLocaleLowerCase(),this._weekdaysParse[d]=this.weekdays(f,"").toLocaleLowerCase();return c?"dddd"===b?(e=sd.call(this._weekdaysParse,g),e!==-1?e:null):"ddd"===b?(e=sd.call(this._shortWeekdaysParse,g),e!==-1?e:null):(e=sd.call(this._minWeekdaysParse,g),e!==-1?e:null):"dddd"===b?(e=sd.call(this._weekdaysParse,g),e!==-1?e:(e=sd.call(this._shortWeekdaysParse,g),e!==-1?e:(e=sd.call(this._minWeekdaysParse,g),e!==-1?e:null))):"ddd"===b?(e=sd.call(this._shortWeekdaysParse,g),e!==-1?e:(e=sd.call(this._weekdaysParse,g),e!==-1?e:(e=sd.call(this._minWeekdaysParse,g),e!==-1?e:null))):(e=sd.call(this._minWeekdaysParse,g),e!==-1?e:(e=sd.call(this._weekdaysParse,g),e!==-1?e:(e=sd.call(this._shortWeekdaysParse,g),e!==-1?e:null)))}function Ia(a,b,c){var d,e,f;if(this._weekdaysParseExact)return Ha.call(this,a,b,c);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),d=0;d<7;d++){
// test the regex
if(
// make the regex if we don't have it already
e=j([2e3,1]).day(d),c&&!this._fullWeekdaysParse[d]&&(this._fullWeekdaysParse[d]=new RegExp("^"+this.weekdays(e,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[d]=new RegExp("^"+this.weekdaysShort(e,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[d]=new RegExp("^"+this.weekdaysMin(e,"").replace(".",".?")+"$","i")),this._weekdaysParse[d]||(f="^"+this.weekdays(e,"")+"|^"+this.weekdaysShort(e,"")+"|^"+this.weekdaysMin(e,""),this._weekdaysParse[d]=new RegExp(f.replace(".",""),"i")),c&&"dddd"===b&&this._fullWeekdaysParse[d].test(a))return d;if(c&&"ddd"===b&&this._shortWeekdaysParse[d].test(a))return d;if(c&&"dd"===b&&this._minWeekdaysParse[d].test(a))return d;if(!c&&this._weekdaysParse[d].test(a))return d}}
// MOMENTS
function Ja(a){if(!this.isValid())return null!=a?this:NaN;var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=Ca(a,this.localeData()),this.add(a-b,"d")):b}function Ka(a){if(!this.isValid())return null!=a?this:NaN;var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")}function La(a){if(!this.isValid())return null!=a?this:NaN;
// behaves the same as moment#day except
// as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
// as a setter, sunday should belong to the previous week.
if(null!=a){var b=Da(a,this.localeData());return this.day(this.day()%7?b:b-7)}return this.day()||7}function Ma(a){return this._weekdaysParseExact?(h(this,"_weekdaysRegex")||Pa.call(this),a?this._weekdaysStrictRegex:this._weekdaysRegex):(h(this,"_weekdaysRegex")||(this._weekdaysRegex=pe),this._weekdaysStrictRegex&&a?this._weekdaysStrictRegex:this._weekdaysRegex)}function Na(a){return this._weekdaysParseExact?(h(this,"_weekdaysRegex")||Pa.call(this),a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(h(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=qe),this._weekdaysShortStrictRegex&&a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Oa(a){return this._weekdaysParseExact?(h(this,"_weekdaysRegex")||Pa.call(this),a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(h(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=re),this._weekdaysMinStrictRegex&&a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Pa(){function a(a,b){return b.length-a.length}var b,c,d,e,f,g=[],h=[],i=[],k=[];for(b=0;b<7;b++)
// make the regex if we don't have it already
c=j([2e3,1]).day(b),d=this.weekdaysMin(c,""),e=this.weekdaysShort(c,""),f=this.weekdays(c,""),g.push(d),h.push(e),i.push(f),k.push(d),k.push(e),k.push(f);for(
// Sorting makes sure if one weekday (or abbr) is a prefix of another it
// will match the longer piece.
g.sort(a),h.sort(a),i.sort(a),k.sort(a),b=0;b<7;b++)h[b]=_(h[b]),i[b]=_(i[b]),k[b]=_(k[b]);this._weekdaysRegex=new RegExp("^("+k.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+h.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+g.join("|")+")","i")}
// FORMATTING
function Qa(){return this.hours()%12||12}function Ra(){return this.hours()||24}function Sa(a,b){T(a,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),b)})}
// PARSING
function Ta(a,b){return b._meridiemParse}
// LOCALES
function Ua(a){
// IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
// Using charAt should be more compatible.
return"p"===(a+"").toLowerCase().charAt(0)}function Va(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"}function Wa(a){return a?a.toLowerCase().replace("_","-"):a}
// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
function Xa(a){for(var b,c,d,e,f=0;f<a.length;){for(e=Wa(a[f]).split("-"),b=e.length,c=Wa(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=Ya(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&u(e,c,!0)>=b-1)
//the next array item is better than a shallower substring of this one
break;b--}f++}return null}function Ya(a){var b=null;
// TODO: Find a better way to register and load all the locales in Node
if(!we[a]&&"undefined"!=typeof module&&module&&module.exports)try{b=se._abbr,require("./locale/"+a),
// because defineLocale currently also sets the global locale, we
// want to undo that for lazy loaded locales
Za(b)}catch(c){}return we[a]}
// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
function Za(a,b){var c;
// moment.duration._locale = moment._locale = data;
return a&&(c=o(b)?ab(a):$a(a,b),c&&(se=c)),se._abbr}function $a(a,b){if(null!==b){var c=ve;
// treat as if there is no base config
// backwards compat for now: also set the locale
return b.abbr=a,null!=we[a]?(x("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),c=we[a]._config):null!=b.parentLocale&&(null!=we[b.parentLocale]?c=we[b.parentLocale]._config:x("parentLocaleUndefined","specified parentLocale is not defined yet. See http://momentjs.com/guides/#/warnings/parent-locale/")),we[a]=new B(A(c,b)),Za(a),we[a]}
// useful for testing
return delete we[a],null}function _a(a,b){if(null!=b){var c,d=ve;
// MERGE
null!=we[a]&&(d=we[a]._config),b=A(d,b),c=new B(b),c.parentLocale=we[a],we[a]=c,
// backwards compat for now: also set the locale
Za(a)}else
// pass null for config to unupdate, useful for tests
null!=we[a]&&(null!=we[a].parentLocale?we[a]=we[a].parentLocale:null!=we[a]&&delete we[a]);return we[a]}
// returns locale data
function ab(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return se;if(!c(a)){if(
//short-circuit everything else
b=Ya(a))return b;a=[a]}return Xa(a)}function bb(){return rd(we)}function cb(a){var b,c=a._a;return c&&l(a).overflow===-2&&(b=c[Zd]<0||c[Zd]>11?Zd:c[$d]<1||c[$d]>da(c[Yd],c[Zd])?$d:c[_d]<0||c[_d]>24||24===c[_d]&&(0!==c[ae]||0!==c[be]||0!==c[ce])?_d:c[ae]<0||c[ae]>59?ae:c[be]<0||c[be]>59?be:c[ce]<0||c[ce]>999?ce:-1,l(a)._overflowDayOfYear&&(b<Yd||b>$d)&&(b=$d),l(a)._overflowWeeks&&b===-1&&(b=de),l(a)._overflowWeekday&&b===-1&&(b=ee),l(a).overflow=b),a}
// date from iso format
function db(a){var b,c,d,e,f,g,h=a._i,i=xe.exec(h)||ye.exec(h);if(i){for(l(a).iso=!0,b=0,c=Ae.length;b<c;b++)if(Ae[b][1].exec(i[1])){e=Ae[b][0],d=Ae[b][2]!==!1;break}if(null==e)return void(a._isValid=!1);if(i[3]){for(b=0,c=Be.length;b<c;b++)if(Be[b][1].exec(i[3])){
// match[2] should be 'T' or space
f=(i[2]||" ")+Be[b][0];break}if(null==f)return void(a._isValid=!1)}if(!d&&null!=f)return void(a._isValid=!1);if(i[4]){if(!ze.exec(i[4]))return void(a._isValid=!1);g="Z"}a._f=e+(f||"")+(g||""),jb(a)}else a._isValid=!1}
// date from iso format or fallback
function eb(b){var c=Ce.exec(b._i);return null!==c?void(b._d=new Date((+c[1]))):(db(b),void(b._isValid===!1&&(delete b._isValid,a.createFromInputFallback(b))))}
// Pick the first defined of two or three arguments.
function fb(a,b,c){return null!=a?a:null!=b?b:c}function gb(b){
// hooks is actually the exported moment object
var c=new Date(a.now());return b._useUTC?[c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()]:[c.getFullYear(),c.getMonth(),c.getDate()]}
// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
function hb(a){var b,c,d,e,f=[];if(!a._d){
// Default to current date.
// * if no year, month, day of month are given, default to today
// * if day of month is given, default month and year
// * if month is given, default only year
// * if year is given, don't default anything
for(d=gb(a),
//compute day of the year from weeks and weekdays
a._w&&null==a._a[$d]&&null==a._a[Zd]&&ib(a),
//if the day of the year is set, figure out what it is
a._dayOfYear&&(e=fb(a._a[Yd],d[Yd]),a._dayOfYear>oa(e)&&(l(a)._overflowDayOfYear=!0),c=sa(e,0,a._dayOfYear),a._a[Zd]=c.getUTCMonth(),a._a[$d]=c.getUTCDate()),b=0;b<3&&null==a._a[b];++b)a._a[b]=f[b]=d[b];
// Zero out whatever was not defaulted, including time
for(;b<7;b++)a._a[b]=f[b]=null==a._a[b]?2===b?1:0:a._a[b];
// Check for 24:00:00.000
24===a._a[_d]&&0===a._a[ae]&&0===a._a[be]&&0===a._a[ce]&&(a._nextDay=!0,a._a[_d]=0),a._d=(a._useUTC?sa:ra).apply(null,f),
// Apply timezone offset from input. The actual utcOffset can be changed
// with parseZone.
null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm),a._nextDay&&(a._a[_d]=24)}}function ib(a){var b,c,d,e,f,g,h,i;b=a._w,null!=b.GG||null!=b.W||null!=b.E?(f=1,g=4,
// TODO: We need to take the current isoWeekYear, but that depends on
// how we interpret now (local, utc, fixed offset). So create
// a now version of current config (take local/utc/offset flags, and
// create now).
c=fb(b.GG,a._a[Yd],va(rb(),1,4).year),d=fb(b.W,1),e=fb(b.E,1),(e<1||e>7)&&(i=!0)):(f=a._locale._week.dow,g=a._locale._week.doy,c=fb(b.gg,a._a[Yd],va(rb(),f,g).year),d=fb(b.w,1),null!=b.d?(
// weekday -- low day numbers are considered next week
e=b.d,(e<0||e>6)&&(i=!0)):null!=b.e?(
// local weekday -- counting starts from begining of week
e=b.e+f,(b.e<0||b.e>6)&&(i=!0)):
// default to begining of week
e=f),d<1||d>wa(c,f,g)?l(a)._overflowWeeks=!0:null!=i?l(a)._overflowWeekday=!0:(h=ua(c,d,e,f,g),a._a[Yd]=h.year,a._dayOfYear=h.dayOfYear)}
// date from string and format string
function jb(b){
// TODO: Move this to another part of the creation flow to prevent circular deps
if(b._f===a.ISO_8601)return void db(b);b._a=[],l(b).empty=!0;
// This array is used to make a Date, either with `new Date` or `Date.UTC`
var c,d,e,f,g,h=""+b._i,i=h.length,j=0;for(e=X(b._f,b._locale).match(Bd)||[],c=0;c<e.length;c++)f=e[c],d=(h.match(Z(f,b))||[])[0],
// console.log('token', token, 'parsedInput', parsedInput,
//         'regex', getParseRegexForToken(token, config));
d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&l(b).unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),j+=d.length),
// don't parse if it's not a known token
Ed[f]?(d?l(b).empty=!1:l(b).unusedTokens.push(f),ca(f,d,b)):b._strict&&!d&&l(b).unusedTokens.push(f);
// add remaining unparsed input length to the string
l(b).charsLeftOver=i-j,h.length>0&&l(b).unusedInput.push(h),
// clear _12h flag if hour is <= 12
b._a[_d]<=12&&l(b).bigHour===!0&&b._a[_d]>0&&(l(b).bigHour=void 0),l(b).parsedDateParts=b._a.slice(0),l(b).meridiem=b._meridiem,
// handle meridiem
b._a[_d]=kb(b._locale,b._a[_d],b._meridiem),hb(b),cb(b)}function kb(a,b,c){var d;
// Fallback
return null==c?b:null!=a.meridiemHour?a.meridiemHour(b,c):null!=a.isPM?(d=a.isPM(c),d&&b<12&&(b+=12),d||12!==b||(b=0),b):b}
// date from string and array of format strings
function lb(a){var b,c,d,e,f;if(0===a._f.length)return l(a).invalidFormat=!0,void(a._d=new Date(NaN));for(e=0;e<a._f.length;e++)f=0,b=p({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._f=a._f[e],jb(b),m(b)&&(
// if there is any input that was not parsed add a penalty for that format
f+=l(b).charsLeftOver,
//or tokens
f+=10*l(b).unusedTokens.length,l(b).score=f,(null==d||f<d)&&(d=f,c=b));i(a,c||b)}function mb(a){if(!a._d){var b=K(a._i);a._a=g([b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],function(a){return a&&parseInt(a,10)}),hb(a)}}function nb(a){var b=new q(cb(ob(a)));
// Adding is smart enough around DST
return b._nextDay&&(b.add(1,"d"),b._nextDay=void 0),b}function ob(a){var b=a._i,d=a._f;return a._locale=a._locale||ab(a._l),null===b||void 0===d&&""===b?n({nullInput:!0}):("string"==typeof b&&(a._i=b=a._locale.preparse(b)),r(b)?new q(cb(b)):(c(d)?lb(a):f(b)?a._d=b:d?jb(a):pb(a),m(a)||(a._d=null),a))}function pb(b){var d=b._i;void 0===d?b._d=new Date(a.now()):f(d)?b._d=new Date(d.valueOf()):"string"==typeof d?eb(b):c(d)?(b._a=g(d.slice(0),function(a){return parseInt(a,10)}),hb(b)):"object"==typeof d?mb(b):"number"==typeof d?
// from milliseconds
b._d=new Date(d):a.createFromInputFallback(b)}function qb(a,b,f,g,h){var i={};
// object construction must be done this way.
// https://github.com/moment/moment/issues/1423
return"boolean"==typeof f&&(g=f,f=void 0),(d(a)&&e(a)||c(a)&&0===a.length)&&(a=void 0),i._isAMomentObject=!0,i._useUTC=i._isUTC=h,i._l=f,i._i=a,i._f=b,i._strict=g,nb(i)}function rb(a,b,c,d){return qb(a,b,c,d,!1)}
// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
function sb(a,b){var d,e;if(1===b.length&&c(b[0])&&(b=b[0]),!b.length)return rb();for(d=b[0],e=1;e<b.length;++e)b[e].isValid()&&!b[e][a](d)||(d=b[e]);return d}
// TODO: Use [].sort instead?
function tb(){var a=[].slice.call(arguments,0);return sb("isBefore",a)}function ub(){var a=[].slice.call(arguments,0);return sb("isAfter",a)}function vb(a){var b=K(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;
// representation for dateAddRemove
this._milliseconds=+k+1e3*j+// 1000
6e4*i+// 1000 * 60
1e3*h*60*60,//using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
// Because of dateAddRemove treats 24 hours as different from a
// day when working around DST, we need to store them separately
this._days=+g+7*f,
// It is impossible translate months into days without knowing
// which months you are are talking about, so we have to store
// it separately.
this._months=+e+3*d+12*c,this._data={},this._locale=ab(),this._bubble()}function wb(a){return a instanceof vb}function xb(a){return a<0?Math.round(-1*a)*-1:Math.round(a)}
// FORMATTING
function yb(a,b){T(a,0,0,function(){var a=this.utcOffset(),c="+";return a<0&&(a=-a,c="-"),c+S(~~(a/60),2)+b+S(~~a%60,2)})}function zb(a,b){var c=(b||"").match(a)||[],d=c[c.length-1]||[],e=(d+"").match(Ge)||["-",0,0],f=+(60*e[1])+t(e[2]);return"+"===e[0]?f:-f}
// Return a moment from input, that is local/utc/zone equivalent to model.
function Ab(b,c){var d,e;
// Use low-level api, because this fn is low-level api.
return c._isUTC?(d=c.clone(),e=(r(b)||f(b)?b.valueOf():rb(b).valueOf())-d.valueOf(),d._d.setTime(d._d.valueOf()+e),a.updateOffset(d,!1),d):rb(b).local()}function Bb(a){
// On Firefox.24 Date#getTimezoneOffset returns a floating point.
// https://github.com/moment/moment/pull/1871
return 15*-Math.round(a._d.getTimezoneOffset()/15)}
// MOMENTS
// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
function Cb(b,c){var d,e=this._offset||0;return this.isValid()?null!=b?("string"==typeof b?b=zb(Td,b):Math.abs(b)<16&&(b=60*b),!this._isUTC&&c&&(d=Bb(this)),this._offset=b,this._isUTC=!0,null!=d&&this.add(d,"m"),e!==b&&(!c||this._changeInProgress?Sb(this,Nb(b-e,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,a.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?e:Bb(this):null!=b?this:NaN}function Db(a,b){return null!=a?("string"!=typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()}function Eb(a){return this.utcOffset(0,a)}function Fb(a){return this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(Bb(this),"m")),this}function Gb(){if(this._tzm)this.utcOffset(this._tzm);else if("string"==typeof this._i){var a=zb(Sd,this._i);0===a?this.utcOffset(0,!0):this.utcOffset(zb(Sd,this._i))}return this}function Hb(a){return!!this.isValid()&&(a=a?rb(a).utcOffset():0,(this.utcOffset()-a)%60===0)}function Ib(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Jb(){if(!o(this._isDSTShifted))return this._isDSTShifted;var a={};if(p(a,this),a=ob(a),a._a){var b=a._isUTC?j(a._a):rb(a._a);this._isDSTShifted=this.isValid()&&u(a._a,b.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function Kb(){return!!this.isValid()&&!this._isUTC}function Lb(){return!!this.isValid()&&this._isUTC}function Mb(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}function Nb(a,b){var c,d,e,f=a,
// matching against regexp is expensive, do it on demand
g=null;// checks for null or undefined
return wb(a)?f={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(f={},b?f[b]=a:f.milliseconds=a):(g=He.exec(a))?(c="-"===g[1]?-1:1,f={y:0,d:t(g[$d])*c,h:t(g[_d])*c,m:t(g[ae])*c,s:t(g[be])*c,ms:t(xb(1e3*g[ce]))*c}):(g=Ie.exec(a))?(c="-"===g[1]?-1:1,f={y:Ob(g[2],c),M:Ob(g[3],c),w:Ob(g[4],c),d:Ob(g[5],c),h:Ob(g[6],c),m:Ob(g[7],c),s:Ob(g[8],c)}):null==f?f={}:"object"==typeof f&&("from"in f||"to"in f)&&(e=Qb(rb(f.from),rb(f.to)),f={},f.ms=e.milliseconds,f.M=e.months),d=new vb(f),wb(a)&&h(a,"_locale")&&(d._locale=a._locale),d}function Ob(a,b){
// We'd normally use ~~inp for this, but unfortunately it also
// converts floats to ints.
// inp may be undefined, so careful calling replace on it.
var c=a&&parseFloat(a.replace(",","."));
// apply sign while we're at it
return(isNaN(c)?0:c)*b}function Pb(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function Qb(a,b){var c;return a.isValid()&&b.isValid()?(b=Ab(b,a),a.isBefore(b)?c=Pb(a,b):(c=Pb(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c):{milliseconds:0,months:0}}
// TODO: remove 'name' arg after deprecation is removed
function Rb(a,b){return function(c,d){var e,f;
//invert the arguments, but complain about it
return null===d||isNaN(+d)||(x(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=Nb(c,d),Sb(this,e,a),this}}function Sb(b,c,d,e){var f=c._milliseconds,g=xb(c._days),h=xb(c._months);b.isValid()&&(e=null==e||e,f&&b._d.setTime(b._d.valueOf()+f*d),g&&P(b,"Date",O(b,"Date")+g*d),h&&ia(b,O(b,"Month")+h*d),e&&a.updateOffset(b,g||h))}function Tb(a,b){var c=a.diff(b,"days",!0);return c<-6?"sameElse":c<-1?"lastWeek":c<0?"lastDay":c<1?"sameDay":c<2?"nextDay":c<7?"nextWeek":"sameElse"}function Ub(b,c){
// We want to compare the start of today, vs this.
// Getting start-of-today depends on whether we're local/utc/offset or not.
var d=b||rb(),e=Ab(d,this).startOf("day"),f=a.calendarFormat(this,e)||"sameElse",g=c&&(y(c[f])?c[f].call(this,d):c[f]);return this.format(g||this.localeData().calendar(f,this,rb(d)))}function Vb(){return new q(this)}function Wb(a,b){var c=r(a)?a:rb(a);return!(!this.isValid()||!c.isValid())&&(b=J(o(b)?"millisecond":b),"millisecond"===b?this.valueOf()>c.valueOf():c.valueOf()<this.clone().startOf(b).valueOf())}function Xb(a,b){var c=r(a)?a:rb(a);return!(!this.isValid()||!c.isValid())&&(b=J(o(b)?"millisecond":b),"millisecond"===b?this.valueOf()<c.valueOf():this.clone().endOf(b).valueOf()<c.valueOf())}function Yb(a,b,c,d){return d=d||"()",("("===d[0]?this.isAfter(a,c):!this.isBefore(a,c))&&(")"===d[1]?this.isBefore(b,c):!this.isAfter(b,c))}function Zb(a,b){var c,d=r(a)?a:rb(a);return!(!this.isValid()||!d.isValid())&&(b=J(b||"millisecond"),"millisecond"===b?this.valueOf()===d.valueOf():(c=d.valueOf(),this.clone().startOf(b).valueOf()<=c&&c<=this.clone().endOf(b).valueOf()))}function $b(a,b){return this.isSame(a,b)||this.isAfter(a,b)}function _b(a,b){return this.isSame(a,b)||this.isBefore(a,b)}function ac(a,b,c){var d,e,f,g;// 1000
// 1000 * 60
// 1000 * 60 * 60
// 1000 * 60 * 60 * 24, negate dst
// 1000 * 60 * 60 * 24 * 7, negate dst
return this.isValid()?(d=Ab(a,this),d.isValid()?(e=6e4*(d.utcOffset()-this.utcOffset()),b=J(b),"year"===b||"month"===b||"quarter"===b?(g=bc(this,d),"quarter"===b?g/=3:"year"===b&&(g/=12)):(f=this-d,g="second"===b?f/1e3:"minute"===b?f/6e4:"hour"===b?f/36e5:"day"===b?(f-e)/864e5:"week"===b?(f-e)/6048e5:f),c?g:s(g)):NaN):NaN}function bc(a,b){
// difference in months
var c,d,e=12*(b.year()-a.year())+(b.month()-a.month()),
// b is in (anchor - 1 month, anchor + 1 month)
f=a.clone().add(e,"months");
//check for negative zero, return zero if negative zero
// linear across the month
// linear across the month
return b-f<0?(c=a.clone().add(e-1,"months"),d=(b-f)/(f-c)):(c=a.clone().add(e+1,"months"),d=(b-f)/(c-f)),-(e+d)||0}function cc(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function dc(){var a=this.clone().utc();return 0<a.year()&&a.year()<=9999?y(Date.prototype.toISOString)?this.toDate().toISOString():W(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):W(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function ec(b){b||(b=this.isUtc()?a.defaultFormatUtc:a.defaultFormat);var c=W(this,b);return this.localeData().postformat(c)}function fc(a,b){return this.isValid()&&(r(a)&&a.isValid()||rb(a).isValid())?Nb({to:this,from:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function gc(a){return this.from(rb(),a)}function hc(a,b){return this.isValid()&&(r(a)&&a.isValid()||rb(a).isValid())?Nb({from:this,to:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function ic(a){return this.to(rb(),a)}
// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
function jc(a){var b;return void 0===a?this._locale._abbr:(b=ab(a),null!=b&&(this._locale=b),this)}function kc(){return this._locale}function lc(a){
// the following switch intentionally omits break keywords
// to utilize falling through the cases.
switch(a=J(a)){case"year":this.month(0);/* falls through */
case"quarter":case"month":this.date(1);/* falls through */
case"week":case"isoWeek":case"day":case"date":this.hours(0);/* falls through */
case"hour":this.minutes(0);/* falls through */
case"minute":this.seconds(0);/* falls through */
case"second":this.milliseconds(0)}
// weeks are a special case
// quarters are also special
return"week"===a&&this.weekday(0),"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this}function mc(a){
// 'date' is an alias for 'day', so it should be considered as such.
return a=J(a),void 0===a||"millisecond"===a?this:("date"===a&&(a="day"),this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms"))}function nc(){return this._d.valueOf()-6e4*(this._offset||0)}function oc(){return Math.floor(this.valueOf()/1e3)}function pc(){return new Date(this.valueOf())}function qc(){var a=this;return[a.year(),a.month(),a.date(),a.hour(),a.minute(),a.second(),a.millisecond()]}function rc(){var a=this;return{years:a.year(),months:a.month(),date:a.date(),hours:a.hours(),minutes:a.minutes(),seconds:a.seconds(),milliseconds:a.milliseconds()}}function sc(){
// new Date(NaN).toJSON() === null
return this.isValid()?this.toISOString():null}function tc(){return m(this)}function uc(){return i({},l(this))}function vc(){return l(this).overflow}function wc(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function xc(a,b){T(0,[a,a.length],0,b)}
// MOMENTS
function yc(a){return Cc.call(this,a,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function zc(a){return Cc.call(this,a,this.isoWeek(),this.isoWeekday(),1,4)}function Ac(){return wa(this.year(),1,4)}function Bc(){var a=this.localeData()._week;return wa(this.year(),a.dow,a.doy)}function Cc(a,b,c,d,e){var f;return null==a?va(this,d,e).year:(f=wa(a,d,e),b>f&&(b=f),Dc.call(this,a,b,c,d,e))}function Dc(a,b,c,d,e){var f=ua(a,b,c,d,e),g=sa(f.year,0,f.dayOfYear);return this.year(g.getUTCFullYear()),this.month(g.getUTCMonth()),this.date(g.getUTCDate()),this}
// MOMENTS
function Ec(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)}
// HELPERS
// MOMENTS
function Fc(a){var b=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")}function Gc(a,b){b[ce]=t(1e3*("0."+a))}
// MOMENTS
function Hc(){return this._isUTC?"UTC":""}function Ic(){return this._isUTC?"Coordinated Universal Time":""}function Jc(a){return rb(1e3*a)}function Kc(){return rb.apply(null,arguments).parseZone()}function Lc(a){return a}function Mc(a,b,c,d){var e=ab(),f=j().set(d,b);return e[c](f,a)}function Nc(a,b,c){if("number"==typeof a&&(b=a,a=void 0),a=a||"",null!=b)return Mc(a,b,c,"month");var d,e=[];for(d=0;d<12;d++)e[d]=Mc(a,d,c,"month");return e}
// ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)
function Oc(a,b,c,d){"boolean"==typeof a?("number"==typeof b&&(c=b,b=void 0),b=b||""):(b=a,c=b,a=!1,"number"==typeof b&&(c=b,b=void 0),b=b||"");var e=ab(),f=a?e._week.dow:0;if(null!=c)return Mc(b,(c+f)%7,d,"day");var g,h=[];for(g=0;g<7;g++)h[g]=Mc(b,(g+f)%7,d,"day");return h}function Pc(a,b){return Nc(a,b,"months")}function Qc(a,b){return Nc(a,b,"monthsShort")}function Rc(a,b,c){return Oc(a,b,c,"weekdays")}function Sc(a,b,c){return Oc(a,b,c,"weekdaysShort")}function Tc(a,b,c){return Oc(a,b,c,"weekdaysMin")}function Uc(){var a=this._data;return this._milliseconds=Ue(this._milliseconds),this._days=Ue(this._days),this._months=Ue(this._months),a.milliseconds=Ue(a.milliseconds),a.seconds=Ue(a.seconds),a.minutes=Ue(a.minutes),a.hours=Ue(a.hours),a.months=Ue(a.months),a.years=Ue(a.years),this}function Vc(a,b,c,d){var e=Nb(b,c);return a._milliseconds+=d*e._milliseconds,a._days+=d*e._days,a._months+=d*e._months,a._bubble()}
// supports only 2.0-style add(1, 's') or add(duration)
function Wc(a,b){return Vc(this,a,b,1)}
// supports only 2.0-style subtract(1, 's') or subtract(duration)
function Xc(a,b){return Vc(this,a,b,-1)}function Yc(a){return a<0?Math.floor(a):Math.ceil(a)}function Zc(){var a,b,c,d,e,f=this._milliseconds,g=this._days,h=this._months,i=this._data;
// if we have a mix of positive and negative values, bubble down first
// check: https://github.com/moment/moment/issues/2166
// The following code bubbles up values, see the tests for
// examples of what that means.
// convert days to months
// 12 months -> 1 year
return f>=0&&g>=0&&h>=0||f<=0&&g<=0&&h<=0||(f+=864e5*Yc(_c(h)+g),g=0,h=0),i.milliseconds=f%1e3,a=s(f/1e3),i.seconds=a%60,b=s(a/60),i.minutes=b%60,c=s(b/60),i.hours=c%24,g+=s(c/24),e=s($c(g)),h+=e,g-=Yc(_c(e)),d=s(h/12),h%=12,i.days=g,i.months=h,i.years=d,this}function $c(a){
// 400 years have 146097 days (taking into account leap year rules)
// 400 years have 12 months === 4800
return 4800*a/146097}function _c(a){
// the reverse of daysToMonths
return 146097*a/4800}function ad(a){var b,c,d=this._milliseconds;if(a=J(a),"month"===a||"year"===a)return b=this._days+d/864e5,c=this._months+$c(b),"month"===a?c:c/12;switch(
// handle milliseconds separately because of floating point math errors (issue #1867)
b=this._days+Math.round(_c(this._months)),a){case"week":return b/7+d/6048e5;case"day":return b+d/864e5;case"hour":return 24*b+d/36e5;case"minute":return 1440*b+d/6e4;case"second":return 86400*b+d/1e3;
// Math.floor prevents floating point math errors here
case"millisecond":return Math.floor(864e5*b)+d;default:throw new Error("Unknown unit "+a)}}
// TODO: Use this.as('ms')?
function bd(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*t(this._months/12)}function cd(a){return function(){return this.as(a)}}function dd(a){return a=J(a),this[a+"s"]()}function ed(a){return function(){return this._data[a]}}function fd(){return s(this.days()/7)}
// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
function gd(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function hd(a,b,c){var d=Nb(a).abs(),e=jf(d.as("s")),f=jf(d.as("m")),g=jf(d.as("h")),h=jf(d.as("d")),i=jf(d.as("M")),j=jf(d.as("y")),k=e<kf.s&&["s",e]||f<=1&&["m"]||f<kf.m&&["mm",f]||g<=1&&["h"]||g<kf.h&&["hh",g]||h<=1&&["d"]||h<kf.d&&["dd",h]||i<=1&&["M"]||i<kf.M&&["MM",i]||j<=1&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,gd.apply(null,k)}
// This function allows you to set the rounding function for relative time strings
function id(a){return void 0===a?jf:"function"==typeof a&&(jf=a,!0)}
// This function allows you to set a threshold for relative time strings
function jd(a,b){return void 0!==kf[a]&&(void 0===b?kf[a]:(kf[a]=b,!0))}function kd(a){var b=this.localeData(),c=hd(this,!a,b);return a&&(c=b.pastFuture(+this,c)),b.postformat(c)}function ld(){
// for ISO strings we do not use the normal bubbling rules:
//  * milliseconds bubble up until they become hours
//  * days do not bubble at all
//  * months bubble up until they become years
// This is because there is no context-free conversion between hours and days
// (think of clock changes)
// and also not between days and months (28-31 days per month)
var a,b,c,d=lf(this._milliseconds)/1e3,e=lf(this._days),f=lf(this._months);
// 3600 seconds -> 60 minutes -> 1 hour
a=s(d/60),b=s(a/60),d%=60,a%=60,
// 12 months -> 1 year
c=s(f/12),f%=12;
// inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
var g=c,h=f,i=e,j=b,k=a,l=d,m=this.asSeconds();return m?(m<0?"-":"")+"P"+(g?g+"Y":"")+(h?h+"M":"")+(i?i+"D":"")+(j||k||l?"T":"")+(j?j+"H":"")+(k?k+"M":"")+(l?l+"S":""):"P0D"}var md,nd;nd=Array.prototype.some?Array.prototype.some:function(a){for(var b=Object(this),c=b.length>>>0,d=0;d<c;d++)if(d in b&&a.call(this,b[d],d,b))return!0;return!1};
// Plugins that add properties should also add the key here (null value),
// so we can properly clone ourselves.
var od=a.momentProperties=[],pd=!1,qd={};a.suppressDeprecationWarnings=!1,a.deprecationHandler=null;var rd;rd=Object.keys?Object.keys:function(a){var b,c=[];for(b in a)h(a,b)&&c.push(b);return c};var sd,td={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},ud={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},vd="Invalid date",wd="%d",xd=/\d{1,2}/,yd={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},zd={},Ad={},Bd=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Cd=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Dd={},Ed={},Fd=/\d/,Gd=/\d\d/,Hd=/\d{3}/,Id=/\d{4}/,Jd=/[+-]?\d{6}/,Kd=/\d\d?/,Ld=/\d\d\d\d?/,Md=/\d\d\d\d\d\d?/,Nd=/\d{1,3}/,Od=/\d{1,4}/,Pd=/[+-]?\d{1,6}/,Qd=/\d+/,Rd=/[+-]?\d+/,Sd=/Z|[+-]\d\d:?\d\d/gi,Td=/Z|[+-]\d\d(?::?\d\d)?/gi,Ud=/[+-]?\d+(\.\d{1,3})?/,Vd=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Wd={},Xd={},Yd=0,Zd=1,$d=2,_d=3,ae=4,be=5,ce=6,de=7,ee=8;sd=Array.prototype.indexOf?Array.prototype.indexOf:function(a){
// I know
var b;for(b=0;b<this.length;++b)if(this[b]===a)return b;return-1},
// FORMATTING
T("M",["MM",2],"Mo",function(){return this.month()+1}),T("MMM",0,0,function(a){return this.localeData().monthsShort(this,a)}),T("MMMM",0,0,function(a){return this.localeData().months(this,a)}),
// ALIASES
I("month","M"),
// PRIORITY
L("month",8),
// PARSING
Y("M",Kd),Y("MM",Kd,Gd),Y("MMM",function(a,b){return b.monthsShortRegex(a)}),Y("MMMM",function(a,b){return b.monthsRegex(a)}),aa(["M","MM"],function(a,b){b[Zd]=t(a)-1}),aa(["MMM","MMMM"],function(a,b,c,d){var e=c._locale.monthsParse(a,d,c._strict);
// if we didn't find a month name, mark the date as invalid.
null!=e?b[Zd]=e:l(c).invalidMonth=a});
// LOCALES
var fe=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,ge="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),he="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),ie=Vd,je=Vd;
// FORMATTING
T("Y",0,0,function(){var a=this.year();return a<=9999?""+a:"+"+a}),T(0,["YY",2],0,function(){return this.year()%100}),T(0,["YYYY",4],0,"year"),T(0,["YYYYY",5],0,"year"),T(0,["YYYYYY",6,!0],0,"year"),
// ALIASES
I("year","y"),
// PRIORITIES
L("year",1),
// PARSING
Y("Y",Rd),Y("YY",Kd,Gd),Y("YYYY",Od,Id),Y("YYYYY",Pd,Jd),Y("YYYYYY",Pd,Jd),aa(["YYYYY","YYYYYY"],Yd),aa("YYYY",function(b,c){c[Yd]=2===b.length?a.parseTwoDigitYear(b):t(b)}),aa("YY",function(b,c){c[Yd]=a.parseTwoDigitYear(b)}),aa("Y",function(a,b){b[Yd]=parseInt(a,10)}),
// HOOKS
a.parseTwoDigitYear=function(a){return t(a)+(t(a)>68?1900:2e3)};
// MOMENTS
var ke=N("FullYear",!0);
// FORMATTING
T("w",["ww",2],"wo","week"),T("W",["WW",2],"Wo","isoWeek"),
// ALIASES
I("week","w"),I("isoWeek","W"),
// PRIORITIES
L("week",5),L("isoWeek",5),
// PARSING
Y("w",Kd),Y("ww",Kd,Gd),Y("W",Kd),Y("WW",Kd,Gd),ba(["w","ww","W","WW"],function(a,b,c,d){b[d.substr(0,1)]=t(a)});var le={dow:0,// Sunday is the first day of the week.
doy:6};
// FORMATTING
T("d",0,"do","day"),T("dd",0,0,function(a){return this.localeData().weekdaysMin(this,a)}),T("ddd",0,0,function(a){return this.localeData().weekdaysShort(this,a)}),T("dddd",0,0,function(a){return this.localeData().weekdays(this,a)}),T("e",0,0,"weekday"),T("E",0,0,"isoWeekday"),
// ALIASES
I("day","d"),I("weekday","e"),I("isoWeekday","E"),
// PRIORITY
L("day",11),L("weekday",11),L("isoWeekday",11),
// PARSING
Y("d",Kd),Y("e",Kd),Y("E",Kd),Y("dd",function(a,b){return b.weekdaysMinRegex(a)}),Y("ddd",function(a,b){return b.weekdaysShortRegex(a)}),Y("dddd",function(a,b){return b.weekdaysRegex(a)}),ba(["dd","ddd","dddd"],function(a,b,c,d){var e=c._locale.weekdaysParse(a,d,c._strict);
// if we didn't get a weekday name, mark the date as invalid
null!=e?b.d=e:l(c).invalidWeekday=a}),ba(["d","e","E"],function(a,b,c,d){b[d]=t(a)});
// LOCALES
var me="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),ne="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),oe="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),pe=Vd,qe=Vd,re=Vd;T("H",["HH",2],0,"hour"),T("h",["hh",2],0,Qa),T("k",["kk",2],0,Ra),T("hmm",0,0,function(){return""+Qa.apply(this)+S(this.minutes(),2)}),T("hmmss",0,0,function(){return""+Qa.apply(this)+S(this.minutes(),2)+S(this.seconds(),2)}),T("Hmm",0,0,function(){return""+this.hours()+S(this.minutes(),2)}),T("Hmmss",0,0,function(){return""+this.hours()+S(this.minutes(),2)+S(this.seconds(),2)}),Sa("a",!0),Sa("A",!1),
// ALIASES
I("hour","h"),
// PRIORITY
L("hour",13),Y("a",Ta),Y("A",Ta),Y("H",Kd),Y("h",Kd),Y("HH",Kd,Gd),Y("hh",Kd,Gd),Y("hmm",Ld),Y("hmmss",Md),Y("Hmm",Ld),Y("Hmmss",Md),aa(["H","HH"],_d),aa(["a","A"],function(a,b,c){c._isPm=c._locale.isPM(a),c._meridiem=a}),aa(["h","hh"],function(a,b,c){b[_d]=t(a),l(c).bigHour=!0}),aa("hmm",function(a,b,c){var d=a.length-2;b[_d]=t(a.substr(0,d)),b[ae]=t(a.substr(d)),l(c).bigHour=!0}),aa("hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[_d]=t(a.substr(0,d)),b[ae]=t(a.substr(d,2)),b[be]=t(a.substr(e)),l(c).bigHour=!0}),aa("Hmm",function(a,b,c){var d=a.length-2;b[_d]=t(a.substr(0,d)),b[ae]=t(a.substr(d))}),aa("Hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[_d]=t(a.substr(0,d)),b[ae]=t(a.substr(d,2)),b[be]=t(a.substr(e))});var se,te=/[ap]\.?m?\.?/i,ue=N("Hours",!0),ve={calendar:td,longDateFormat:ud,invalidDate:vd,ordinal:wd,ordinalParse:xd,relativeTime:yd,months:ge,monthsShort:he,week:le,weekdays:me,weekdaysMin:oe,weekdaysShort:ne,meridiemParse:te},we={},xe=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,ye=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,ze=/Z|[+-]\d\d(?::?\d\d)?/,Ae=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],
// YYYYMM is NOT allowed by the standard
["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],Be=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Ce=/^\/?Date\((\-?\d+)/i;a.createFromInputFallback=w("value provided is not in a recognized ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),
// constant that refers to the ISO standard
a.ISO_8601=function(){};var De=w("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var a=rb.apply(null,arguments);return this.isValid()&&a.isValid()?a<this?this:a:n()}),Ee=w("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var a=rb.apply(null,arguments);return this.isValid()&&a.isValid()?a>this?this:a:n()}),Fe=function(){return Date.now?Date.now():+new Date};yb("Z",":"),yb("ZZ",""),
// PARSING
Y("Z",Td),Y("ZZ",Td),aa(["Z","ZZ"],function(a,b,c){c._useUTC=!0,c._tzm=zb(Td,a)});
// HELPERS
// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
var Ge=/([\+\-]|\d\d)/gi;
// HOOKS
// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
a.updateOffset=function(){};
// ASP.NET json date format regex
var He=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,Ie=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;Nb.fn=vb.prototype;var Je=Rb(1,"add"),Ke=Rb(-1,"subtract");a.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",a.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Le=w("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(a){return void 0===a?this.localeData():this.locale(a)});
// FORMATTING
T(0,["gg",2],0,function(){return this.weekYear()%100}),T(0,["GG",2],0,function(){return this.isoWeekYear()%100}),xc("gggg","weekYear"),xc("ggggg","weekYear"),xc("GGGG","isoWeekYear"),xc("GGGGG","isoWeekYear"),
// ALIASES
I("weekYear","gg"),I("isoWeekYear","GG"),
// PRIORITY
L("weekYear",1),L("isoWeekYear",1),
// PARSING
Y("G",Rd),Y("g",Rd),Y("GG",Kd,Gd),Y("gg",Kd,Gd),Y("GGGG",Od,Id),Y("gggg",Od,Id),Y("GGGGG",Pd,Jd),Y("ggggg",Pd,Jd),ba(["gggg","ggggg","GGGG","GGGGG"],function(a,b,c,d){b[d.substr(0,2)]=t(a)}),ba(["gg","GG"],function(b,c,d,e){c[e]=a.parseTwoDigitYear(b)}),
// FORMATTING
T("Q",0,"Qo","quarter"),
// ALIASES
I("quarter","Q"),
// PRIORITY
L("quarter",7),
// PARSING
Y("Q",Fd),aa("Q",function(a,b){b[Zd]=3*(t(a)-1)}),
// FORMATTING
T("D",["DD",2],"Do","date"),
// ALIASES
I("date","D"),
// PRIOROITY
L("date",9),
// PARSING
Y("D",Kd),Y("DD",Kd,Gd),Y("Do",function(a,b){return a?b._ordinalParse:b._ordinalParseLenient}),aa(["D","DD"],$d),aa("Do",function(a,b){b[$d]=t(a.match(Kd)[0],10)});
// MOMENTS
var Me=N("Date",!0);
// FORMATTING
T("DDD",["DDDD",3],"DDDo","dayOfYear"),
// ALIASES
I("dayOfYear","DDD"),
// PRIORITY
L("dayOfYear",4),
// PARSING
Y("DDD",Nd),Y("DDDD",Hd),aa(["DDD","DDDD"],function(a,b,c){c._dayOfYear=t(a)}),
// FORMATTING
T("m",["mm",2],0,"minute"),
// ALIASES
I("minute","m"),
// PRIORITY
L("minute",14),
// PARSING
Y("m",Kd),Y("mm",Kd,Gd),aa(["m","mm"],ae);
// MOMENTS
var Ne=N("Minutes",!1);
// FORMATTING
T("s",["ss",2],0,"second"),
// ALIASES
I("second","s"),
// PRIORITY
L("second",15),
// PARSING
Y("s",Kd),Y("ss",Kd,Gd),aa(["s","ss"],be);
// MOMENTS
var Oe=N("Seconds",!1);
// FORMATTING
T("S",0,0,function(){return~~(this.millisecond()/100)}),T(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),T(0,["SSS",3],0,"millisecond"),T(0,["SSSS",4],0,function(){return 10*this.millisecond()}),T(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),T(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),T(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),T(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),T(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),
// ALIASES
I("millisecond","ms"),
// PRIORITY
L("millisecond",16),
// PARSING
Y("S",Nd,Fd),Y("SS",Nd,Gd),Y("SSS",Nd,Hd);var Pe;for(Pe="SSSS";Pe.length<=9;Pe+="S")Y(Pe,Qd);for(Pe="S";Pe.length<=9;Pe+="S")aa(Pe,Gc);
// MOMENTS
var Qe=N("Milliseconds",!1);
// FORMATTING
T("z",0,0,"zoneAbbr"),T("zz",0,0,"zoneName");var Re=q.prototype;Re.add=Je,Re.calendar=Ub,Re.clone=Vb,Re.diff=ac,Re.endOf=mc,Re.format=ec,Re.from=fc,Re.fromNow=gc,Re.to=hc,Re.toNow=ic,Re.get=Q,Re.invalidAt=vc,Re.isAfter=Wb,Re.isBefore=Xb,Re.isBetween=Yb,Re.isSame=Zb,Re.isSameOrAfter=$b,Re.isSameOrBefore=_b,Re.isValid=tc,Re.lang=Le,Re.locale=jc,Re.localeData=kc,Re.max=Ee,Re.min=De,Re.parsingFlags=uc,Re.set=R,Re.startOf=lc,Re.subtract=Ke,Re.toArray=qc,Re.toObject=rc,Re.toDate=pc,Re.toISOString=dc,Re.toJSON=sc,Re.toString=cc,Re.unix=oc,Re.valueOf=nc,Re.creationData=wc,
// Year
Re.year=ke,Re.isLeapYear=qa,
// Week Year
Re.weekYear=yc,Re.isoWeekYear=zc,
// Quarter
Re.quarter=Re.quarters=Ec,
// Month
Re.month=ja,Re.daysInMonth=ka,
// Week
Re.week=Re.weeks=Aa,Re.isoWeek=Re.isoWeeks=Ba,Re.weeksInYear=Bc,Re.isoWeeksInYear=Ac,
// Day
Re.date=Me,Re.day=Re.days=Ja,Re.weekday=Ka,Re.isoWeekday=La,Re.dayOfYear=Fc,
// Hour
Re.hour=Re.hours=ue,
// Minute
Re.minute=Re.minutes=Ne,
// Second
Re.second=Re.seconds=Oe,
// Millisecond
Re.millisecond=Re.milliseconds=Qe,
// Offset
Re.utcOffset=Cb,Re.utc=Eb,Re.local=Fb,Re.parseZone=Gb,Re.hasAlignedHourOffset=Hb,Re.isDST=Ib,Re.isLocal=Kb,Re.isUtcOffset=Lb,Re.isUtc=Mb,Re.isUTC=Mb,
// Timezone
Re.zoneAbbr=Hc,Re.zoneName=Ic,
// Deprecations
Re.dates=w("dates accessor is deprecated. Use date instead.",Me),Re.months=w("months accessor is deprecated. Use month instead",ja),Re.years=w("years accessor is deprecated. Use year instead",ke),Re.zone=w("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Db),Re.isDSTShifted=w("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Jb);var Se=Re,Te=B.prototype;Te.calendar=C,Te.longDateFormat=D,Te.invalidDate=E,Te.ordinal=F,Te.preparse=Lc,Te.postformat=Lc,Te.relativeTime=G,Te.pastFuture=H,Te.set=z,
// Month
Te.months=ea,Te.monthsShort=fa,Te.monthsParse=ha,Te.monthsRegex=ma,Te.monthsShortRegex=la,
// Week
Te.week=xa,Te.firstDayOfYear=za,Te.firstDayOfWeek=ya,
// Day of Week
Te.weekdays=Ea,Te.weekdaysMin=Ga,Te.weekdaysShort=Fa,Te.weekdaysParse=Ia,Te.weekdaysRegex=Ma,Te.weekdaysShortRegex=Na,Te.weekdaysMinRegex=Oa,
// Hours
Te.isPM=Ua,Te.meridiem=Va,Za("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===t(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),
// Side effect imports
a.lang=w("moment.lang is deprecated. Use moment.locale instead.",Za),a.langData=w("moment.langData is deprecated. Use moment.localeData instead.",ab);var Ue=Math.abs,Ve=cd("ms"),We=cd("s"),Xe=cd("m"),Ye=cd("h"),Ze=cd("d"),$e=cd("w"),_e=cd("M"),af=cd("y"),bf=ed("milliseconds"),cf=ed("seconds"),df=ed("minutes"),ef=ed("hours"),ff=ed("days"),gf=ed("months"),hf=ed("years"),jf=Math.round,kf={s:45,// seconds to minute
m:45,// minutes to hour
h:22,// hours to day
d:26,// days to month
M:11},lf=Math.abs,mf=vb.prototype;mf.abs=Uc,mf.add=Wc,mf.subtract=Xc,mf.as=ad,mf.asMilliseconds=Ve,mf.asSeconds=We,mf.asMinutes=Xe,mf.asHours=Ye,mf.asDays=Ze,mf.asWeeks=$e,mf.asMonths=_e,mf.asYears=af,mf.valueOf=bd,mf._bubble=Zc,mf.get=dd,mf.milliseconds=bf,mf.seconds=cf,mf.minutes=df,mf.hours=ef,mf.days=ff,mf.weeks=fd,mf.months=gf,mf.years=hf,mf.humanize=kd,mf.toISOString=ld,mf.toString=ld,mf.toJSON=ld,mf.locale=jc,mf.localeData=kc,
// Deprecations
mf.toIsoString=w("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",ld),mf.lang=Le,
// Side effect imports
// FORMATTING
T("X",0,0,"unix"),T("x",0,0,"valueOf"),
// PARSING
Y("x",Rd),Y("X",Ud),aa("X",function(a,b,c){c._d=new Date(1e3*parseFloat(a,10))}),aa("x",function(a,b,c){c._d=new Date(t(a))}),
// Side effect imports
a.version="2.15.1",b(rb),a.fn=Se,a.min=tb,a.max=ub,a.now=Fe,a.utc=j,a.unix=Jc,a.months=Pc,a.isDate=f,a.locale=Za,a.invalid=n,a.duration=Nb,a.isMoment=r,a.weekdays=Rc,a.parseZone=Kc,a.localeData=ab,a.isDuration=wb,a.monthsShort=Qc,a.weekdaysMin=Tc,a.defineLocale=$a,a.updateLocale=_a,a.locales=bb,a.weekdaysShort=Sc,a.normalizeUnits=J,a.relativeTimeRounding=id,a.relativeTimeThreshold=jd,a.calendarFormat=Tb,a.prototype=Se;var nf=a;return nf}),/*!
 * Pikaday
 *
 * Copyright © 2014 David Bushell | BSD & MIT license | https://github.com/dbushell/Pikaday
 */
function(a,b){"use strict";var c;if("object"==typeof exports){
// CommonJS module
// Load moment.js as an optional dependency
try{c=require("moment")}catch(d){}module.exports=b(c)}else"function"==typeof define&&define.amd?
// AMD. Register as an anonymous module.
define(function(a){
// Load moment.js as an optional dependency
var d="moment";try{c=a(d)}catch(e){}return b(c)}):a.Pikaday=b(a.moment)}(this,function(a){"use strict";/**
     * feature detection and helper functions
     */
var b="function"==typeof a,c=!!window.addEventListener,d=window.document,e=window.setTimeout,f=function(a,b,d,e){c?a.addEventListener(b,d,!!e):a.attachEvent("on"+b,d)},g=function(a,b,d,e){c?a.removeEventListener(b,d,!!e):a.detachEvent("on"+b,d)},h=function(a,b,c){var e;d.createEvent?(e=d.createEvent("HTMLEvents"),e.initEvent(b,!0,!1),e=t(e,c),a.dispatchEvent(e)):d.createEventObject&&(e=d.createEventObject(),e=t(e,c),a.fireEvent("on"+b,e))},i=function(a){return a.trim?a.trim():a.replace(/^\s+|\s+$/g,"")},j=function(a,b){return(" "+a.className+" ").indexOf(" "+b+" ")!==-1},k=function(a,b){j(a,b)||(a.className=""===a.className?b:a.className+" "+b)},l=function(a,b){a.className=i((" "+a.className+" ").replace(" "+b+" "," "))},m=function(a){return/Array/.test(Object.prototype.toString.call(a))},n=function(a){return/Date/.test(Object.prototype.toString.call(a))&&!isNaN(a.getTime())},o=function(a){var b=a.getDay();return 0===b||6===b},p=function(a){
// solution by Matti Virkkunen: http://stackoverflow.com/a/4881951
return a%4===0&&a%100!==0||a%400===0},q=function(a,b){return[31,p(a)?29:28,31,30,31,30,31,31,30,31,30,31][b]},r=function(a){n(a)&&a.setHours(0,0,0,0)},s=function(a,b){
// weak date comparison (use setToStartOfDay(date) to ensure correct result)
return a.getTime()===b.getTime()},t=function(a,b,c){var d,e;for(d in b)e=void 0!==a[d],e&&"object"==typeof b[d]&&null!==b[d]&&void 0===b[d].nodeName?n(b[d])?c&&(a[d]=new Date(b[d].getTime())):m(b[d])?c&&(a[d]=b[d].slice(0)):a[d]=t({},b[d],c):!c&&e||(a[d]=b[d]);return a},u=function(a){return a.month<0&&(a.year-=Math.ceil(Math.abs(a.month)/12),a.month+=12),a.month>11&&(a.year+=Math.floor(Math.abs(a.month)/12),a.month-=12),a},/**
     * defaults and localisation
     */
v={
// bind the picker to a form field
field:null,
// automatically show/hide the picker on `field` focus (default `true` if `field` is set)
bound:void 0,
// position of the datepicker, relative to the field (default to bottom & left)
// ('bottom' & 'left' keywords are not used, 'top' & 'right' are modifier on the bottom/left position)
position:"bottom left",
// automatically fit in the viewport even if it means repositioning from the position option
reposition:!0,
// the default output format for `.toString()` and `field` value
format:"YYYY-MM-DD",
// the initial date to view when first opened
defaultDate:null,
// make the `defaultDate` the initial selected value
setDefaultDate:!1,
// first day of week (0: Sunday, 1: Monday etc)
firstDay:0,
// the minimum/earliest date that can be selected
minDate:null,
// the maximum/latest date that can be selected
maxDate:null,
// number of years either side, or array of upper/lower range
yearRange:10,
// show week numbers at head of row
showWeekNumber:!1,
// used internally (don't config outside)
minYear:0,maxYear:9999,minMonth:void 0,maxMonth:void 0,startRange:null,endRange:null,isRTL:!1,
// Additional text to append to the year in the calendar title
yearSuffix:"",
// Render the month after year in the calendar title
showMonthAfterYear:!1,
// how many months are visible
numberOfMonths:1,
// when numberOfMonths is used, this will help you to choose where the main calendar will be (default `left`, can be set to `right`)
// only used for the first display or when a selected date is not visible
mainCalendar:"left",
// Specify a DOM element to render the calendar in
container:void 0,
// internationalization
i18n:{previousMonth:"Previous Month",nextMonth:"Next Month",months:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},
// Theme Classname
theme:null,
// callback function
onSelect:null,onOpen:null,onClose:null,onDraw:null},/**
     * templating functions to abstract HTML rendering
     */
w=function(a,b,c){for(b+=a.firstDay;b>=7;)b-=7;return c?a.i18n.weekdaysShort[b]:a.i18n.weekdays[b]},x=function(a){if(a.isEmpty)return'<td class="is-empty"></td>';var b=[];return a.isDisabled&&b.push("is-disabled"),a.isToday&&b.push("is-today"),a.isSelected&&b.push("is-selected"),a.isInRange&&b.push("is-inrange"),a.isStartRange&&b.push("is-startrange"),a.isEndRange&&b.push("is-endrange"),'<td data-day="'+a.day+'" class="'+b.join(" ")+'"><button class="pika-button pika-day" type="button" data-pika-year="'+a.year+'" data-pika-month="'+a.month+'" data-pika-day="'+a.day+'">'+a.day+"</button></td>"},y=function(a,b,c){
// Lifted from http://javascript.about.com/library/blweekyear.htm, lightly modified.
var d=new Date(c,0,1),e=Math.ceil(((new Date(c,b,a)-d)/864e5+d.getDay()+1)/7);return'<td class="pika-week">'+e+"</td>"},z=function(a,b){return"<tr>"+(b?a.reverse():a).join("")+"</tr>"},A=function(a){return"<tbody>"+a.join("")+"</tbody>"},B=function(a){var b,c=[];for(a.showWeekNumber&&c.push("<th></th>"),b=0;b<7;b++)c.push('<th scope="col"><abbr title="'+w(a,b)+'">'+w(a,b,!0)+"</abbr></th>");return"<thead>"+(a.isRTL?c.reverse():c).join("")+"</thead>"},C=function(a,b,c,d,e){var f,g,h,i,j,k=a._o,l=c===k.minYear,n=c===k.maxYear,o='<div class="pika-title">',p=!0,q=!0;for(h=[],f=0;f<12;f++)h.push('<option value="'+(c===e?f-b:12+f-b)+'"'+(f===d?" selected":"")+(l&&f<k.minMonth||n&&f>k.maxMonth?"disabled":"")+">"+k.i18n.months[f]+"</option>");for(i='<div class="pika-label">'+k.i18n.months[d]+'<select class="pika-select pika-select-month" tabindex="-1">'+h.join("")+"</select></div>",m(k.yearRange)?(f=k.yearRange[0],g=k.yearRange[1]+1):(f=c-k.yearRange,g=1+c+k.yearRange),h=[];f<g&&f<=k.maxYear;f++)f>=k.minYear&&h.push('<option value="'+f+'"'+(f===c?" selected":"")+">"+f+"</option>");return j='<div class="pika-label">'+c+k.yearSuffix+'<select class="pika-select pika-select-year" tabindex="-1">'+h.join("")+"</select></div>",o+=k.showMonthAfterYear?j+i:i+j,l&&(0===d||k.minMonth>=d)&&(p=!1),n&&(11===d||k.maxMonth<=d)&&(q=!1),0===b&&(o+='<button class="pika-prev'+(p?"":" is-disabled")+'" type="button">'+k.i18n.previousMonth+"</button>"),b===a._o.numberOfMonths-1&&(o+='<button class="pika-next'+(q?"":" is-disabled")+'" type="button">'+k.i18n.nextMonth+"</button>"),o+="</div>"},D=function(a,b){return'<table cellpadding="0" cellspacing="0" class="pika-table">'+B(a)+A(b)+"</table>"},/**
     * Pikaday constructor
     */
E=function(g){var h=this,i=h.config(g);h._onMouseDown=function(a){if(h._v){a=a||window.event;var b=a.target||a.srcElement;if(b)if(j(b,"is-disabled")||(j(b,"pika-button")&&!j(b,"is-empty")?(h.setDate(new Date(b.getAttribute("data-pika-year"),b.getAttribute("data-pika-month"),b.getAttribute("data-pika-day"))),i.bound&&e(function(){h.hide(),i.field&&i.field.blur()},100)):j(b,"pika-prev")?h.prevMonth():j(b,"pika-next")&&h.nextMonth()),j(b,"pika-select"))h._c=!0;else{
// if this is touch event prevent mouse events emulation
if(!a.preventDefault)return a.returnValue=!1,!1;a.preventDefault()}}},h._onChange=function(a){a=a||window.event;var b=a.target||a.srcElement;b&&(j(b,"pika-select-month")?h.gotoMonth(b.value):j(b,"pika-select-year")&&h.gotoYear(b.value))},h._onInputChange=function(c){var d;c.firedBy!==h&&(b?(d=a(i.field.value,i.format),d=d&&d.isValid()?d.toDate():null):d=new Date(Date.parse(i.field.value)),n(d)&&h.setDate(d),h._v||h.show())},h._onInputFocus=function(){h.show()},h._onInputClick=function(){h.show()},h._onInputBlur=function(){
// IE allows pika div to gain focus; catch blur the input field
var a=d.activeElement;do if(j(a,"pika-single"))return;while(a=a.parentNode);h._c||(h._b=e(function(){h.hide()},50)),h._c=!1},h._onClick=function(a){a=a||window.event;var b=a.target||a.srcElement,d=b;if(b){!c&&j(b,"pika-select")&&(b.onchange||(b.setAttribute("onchange","return;"),f(b,"change",h._onChange)));do if(j(d,"pika-single")||d===i.trigger)return;while(d=d.parentNode);h._v&&b!==i.trigger&&d!==i.trigger&&h.hide()}},h.el=d.createElement("div"),h.el.className="pika-single"+(i.isRTL?" is-rtl":"")+(i.theme?" "+i.theme:""),f(h.el,"mousedown",h._onMouseDown,!0),f(h.el,"touchend",h._onMouseDown,!0),f(h.el,"change",h._onChange),i.field&&(i.container?i.container.appendChild(h.el):i.bound?d.body.appendChild(h.el):i.field.parentNode.insertBefore(h.el,i.field.nextSibling),f(i.field,"change",h._onInputChange),i.defaultDate||(b&&i.field.value?i.defaultDate=a(i.field.value,i.format).toDate():i.defaultDate=new Date(Date.parse(i.field.value)),i.setDefaultDate=!0));var k=i.defaultDate;n(k)?i.setDefaultDate?h.setDate(k,!0):h.gotoDate(k):h.gotoDate(new Date),i.bound?(this.hide(),h.el.className+=" is-bound",f(i.trigger,"click",h._onInputClick),f(i.trigger,"focus",h._onInputFocus),f(i.trigger,"blur",h._onInputBlur)):this.show()};/**
     * public Pikaday API
     */
return E.prototype={/**
         * configure functionality
         */
config:function(a){this._o||(this._o=t({},v,!0));var b=t(this._o,a,!0);b.isRTL=!!b.isRTL,b.field=b.field&&b.field.nodeName?b.field:null,b.theme="string"==typeof b.theme&&b.theme?b.theme:null,b.bound=!!(void 0!==b.bound?b.field&&b.bound:b.field),b.trigger=b.trigger&&b.trigger.nodeName?b.trigger:b.field,b.disableWeekends=!!b.disableWeekends,b.disableDayFn="function"==typeof b.disableDayFn?b.disableDayFn:null;var c=parseInt(b.numberOfMonths,10)||1;if(b.numberOfMonths=c>4?4:c,n(b.minDate)||(b.minDate=!1),n(b.maxDate)||(b.maxDate=!1),b.minDate&&b.maxDate&&b.maxDate<b.minDate&&(b.maxDate=b.minDate=!1),b.minDate&&this.setMinDate(b.minDate),b.maxDate&&this.setMaxDate(b.maxDate),m(b.yearRange)){var d=(new Date).getFullYear()-10;b.yearRange[0]=parseInt(b.yearRange[0],10)||d,b.yearRange[1]=parseInt(b.yearRange[1],10)||d}else b.yearRange=Math.abs(parseInt(b.yearRange,10))||v.yearRange,b.yearRange>100&&(b.yearRange=100);return b},/**
         * return a formatted string of the current selection (using Moment.js if available)
         */
toString:function(c){return n(this._d)?b?a(this._d).format(c||this._o.format):this._d.toDateString():""},/**
         * return a Moment.js object of the current selection (if available)
         */
getMoment:function(){return b?a(this._d):null},/**
         * set the current selection from a Moment.js object (if available)
         */
setMoment:function(c,d){b&&a.isMoment(c)&&this.setDate(c.toDate(),d)},/**
         * return a Date object of the current selection
         */
getDate:function(){return n(this._d)?new Date(this._d.getTime()):null},/**
         * set the current selection
         */
setDate:function(a,b){if(!a)return this._d=null,this._o.field&&(this._o.field.value="",h(this._o.field,"change",{firedBy:this})),this.draw();if("string"==typeof a&&(a=new Date(Date.parse(a))),n(a)){var c=this._o.minDate,d=this._o.maxDate;n(c)&&a<c?a=c:n(d)&&a>d&&(a=d),this._d=new Date(a.getTime()),r(this._d),this.gotoDate(this._d),this._o.field&&(this._o.field.value=this.toString(),h(this._o.field,"change",{firedBy:this})),b||"function"!=typeof this._o.onSelect||this._o.onSelect.call(this,this.getDate())}},/**
         * change view to a specific date
         */
gotoDate:function(a){var b=!0;if(n(a)){if(this.calendars){var c=new Date(this.calendars[0].year,this.calendars[0].month,1),d=new Date(this.calendars[this.calendars.length-1].year,this.calendars[this.calendars.length-1].month,1),e=a.getTime();
// get the end of the month
d.setMonth(d.getMonth()+1),d.setDate(d.getDate()-1),b=e<c.getTime()||d.getTime()<e}b&&(this.calendars=[{month:a.getMonth(),year:a.getFullYear()}],"right"===this._o.mainCalendar&&(this.calendars[0].month+=1-this._o.numberOfMonths)),this.adjustCalendars()}},adjustCalendars:function(){this.calendars[0]=u(this.calendars[0]);for(var a=1;a<this._o.numberOfMonths;a++)this.calendars[a]=u({month:this.calendars[0].month+a,year:this.calendars[0].year});this.draw()},gotoToday:function(){this.gotoDate(new Date)},/**
         * change view to a specific month (zero-index, e.g. 0: January)
         */
gotoMonth:function(a){isNaN(a)||(this.calendars[0].month=parseInt(a,10),this.adjustCalendars())},nextMonth:function(){this.calendars[0].month++,this.adjustCalendars()},prevMonth:function(){this.calendars[0].month--,this.adjustCalendars()},/**
         * change view to a specific full year (e.g. "2012")
         */
gotoYear:function(a){isNaN(a)||(this.calendars[0].year=parseInt(a,10),this.adjustCalendars())},/**
         * change the minDate
         */
setMinDate:function(a){r(a),this._o.minDate=a,this._o.minYear=a.getFullYear(),this._o.minMonth=a.getMonth(),this.draw()},/**
         * change the maxDate
         */
setMaxDate:function(a){r(a),this._o.maxDate=a,this._o.maxYear=a.getFullYear(),this._o.maxMonth=a.getMonth(),this.draw()},setStartRange:function(a){this._o.startRange=a},setEndRange:function(a){this._o.endRange=a},/**
         * refresh the HTML
         */
draw:function(a){if(this._v||a){var b=this._o,c=b.minYear,d=b.maxYear,f=b.minMonth,g=b.maxMonth,h="";this._y<=c&&(this._y=c,!isNaN(f)&&this._m<f&&(this._m=f)),this._y>=d&&(this._y=d,!isNaN(g)&&this._m>g&&(this._m=g));for(var i=0;i<b.numberOfMonths;i++)h+='<div class="pika-lendar">'+C(this,i,this.calendars[i].year,this.calendars[i].month,this.calendars[0].year)+this.render(this.calendars[i].year,this.calendars[i].month)+"</div>";if(this.el.innerHTML=h,b.bound&&"hidden"!==b.field.type&&e(function(){b.trigger.focus()},1),"function"==typeof this._o.onDraw){var j=this;e(function(){j._o.onDraw.call(j)},0)}}},adjustPosition:function(){var a,b,c,e,f,g,h,i,j,k;if(!this._o.container){if(this.el.style.position="absolute",a=this._o.trigger,b=a,c=this.el.offsetWidth,e=this.el.offsetHeight,f=window.innerWidth||d.documentElement.clientWidth,g=window.innerHeight||d.documentElement.clientHeight,h=window.pageYOffset||d.body.scrollTop||d.documentElement.scrollTop,"function"==typeof a.getBoundingClientRect)k=a.getBoundingClientRect(),i=k.left+window.pageXOffset,j=k.bottom+window.pageYOffset;else for(i=b.offsetLeft,j=b.offsetTop+b.offsetHeight;b=b.offsetParent;)i+=b.offsetLeft,j+=b.offsetTop;
// default position is bottom & left
(this._o.reposition&&i+c>f||this._o.position.indexOf("right")>-1&&i-c+a.offsetWidth>0)&&(i=i-c+a.offsetWidth),(this._o.reposition&&j+e>g+h||this._o.position.indexOf("top")>-1&&j-e-a.offsetHeight>0)&&(j=j-e-a.offsetHeight),this.el.style.left=i+"px",this.el.style.top=j+"px"}},/**
         * render HTML for a particular month
         */
render:function(a,b){var c=this._o,d=new Date,e=q(a,b),f=new Date(a,b,1).getDay(),g=[],h=[];r(d),c.firstDay>0&&(f-=c.firstDay,f<0&&(f+=7));for(var i=e+f,j=i;j>7;)j-=7;i+=7-j;for(var k=0,l=0;k<i;k++){var m=new Date(a,b,1+(k-f)),p=!!n(this._d)&&s(m,this._d),t=s(m,d),u=k<f||k>=e+f,v=c.startRange&&s(c.startRange,m),w=c.endRange&&s(c.endRange,m),A=c.startRange&&c.endRange&&c.startRange<m&&m<c.endRange,B=c.minDate&&m<c.minDate||c.maxDate&&m>c.maxDate||c.disableWeekends&&o(m)||c.disableDayFn&&c.disableDayFn(m),C={day:1+(k-f),month:b,year:a,isSelected:p,isToday:t,isDisabled:B,isEmpty:u,isStartRange:v,isEndRange:w,isInRange:A};h.push(x(C)),7===++l&&(c.showWeekNumber&&h.unshift(y(k-f,b,a)),g.push(z(h,c.isRTL)),h=[],l=0)}return D(c,g)},isVisible:function(){return this._v},show:function(){this._v||(l(this.el,"is-hidden"),this._v=!0,this.draw(),this._o.bound&&(f(d,"click",this._onClick),this.adjustPosition()),"function"==typeof this._o.onOpen&&this._o.onOpen.call(this))},hide:function(){var a=this._v;a!==!1&&(this._o.bound&&g(d,"click",this._onClick),this.el.style.position="static",// reset
this.el.style.left="auto",this.el.style.top="auto",k(this.el,"is-hidden"),this._v=!1,void 0!==a&&"function"==typeof this._o.onClose&&this._o.onClose.call(this))},/**
         * GAME OVER
         */
destroy:function(){this.hide(),g(this.el,"mousedown",this._onMouseDown,!0),g(this.el,"touchend",this._onMouseDown,!0),g(this.el,"change",this._onChange),this._o.field&&(g(this._o.field,"change",this._onInputChange),this._o.bound&&(g(this._o.trigger,"click",this._onInputClick),g(this._o.trigger,"focus",this._onInputFocus),g(this._o.trigger,"blur",this._onInputBlur))),this.el.parentNode&&this.el.parentNode.removeChild(this.el)}},E}),/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */
/*global define: false Mustache: true*/
function(a,b){"object"==typeof exports&&exports&&"string"!=typeof exports.nodeName?b(exports):"function"==typeof define&&define.amd?define(["exports"],b):(a.Mustache={},b(a.Mustache))}(this,function(a){function b(a){return"function"==typeof a}/**
   * More correct typeof string handling array
   * which normally returns typeof 'object'
   */
function c(a){return p(a)?"array":typeof a}function d(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}/**
   * Null safe way of checking whether or not an object,
   * including its prototype, has a given property
   */
function e(a,b){return null!=a&&"object"==typeof a&&b in a}function f(a,b){return q.call(a,b)}function g(a){return!f(r,a)}function h(a){return String(a).replace(/[&<>"'`=\/]/g,function(a){return s[a]})}/**
   * Breaks up the given `template` string into a tree of tokens. If the `tags`
   * argument is given here it must be an array with two string values: the
   * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
   * course, the default is to use mustaches (i.e. mustache.tags).
   *
   * A token is an array with at least 4 elements. The first element is the
   * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
   * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
   * all text that appears outside a symbol this element is "text".
   *
   * The second element of a token is its "value". For mustache tags this is
   * whatever else was inside the tag besides the opening symbol. For text tokens
   * this is the text itself.
   *
   * The third and fourth elements of the token are the start and end indices,
   * respectively, of the token in the original template.
   *
   * Tokens that are the root node of a subtree contain two more elements: 1) an
   * array of tokens in the subtree and 2) the index in the original template at
   * which the closing tag for that section begins.
   */
function i(b,c){// Is there a non-space char on the current line?
// Strips all whitespace tokens array for the current line
// if there was a {{#tag}} on it and otherwise only space.
function e(){if(r&&!s)for(;q.length;)delete o[q.pop()];else q=[];r=!1,s=!1}function f(a){if("string"==typeof a&&(a=a.split(u,2)),!p(a)||2!==a.length)throw new Error("Invalid tags: "+a);h=new RegExp(d(a[0])+"\\s*"),i=new RegExp("\\s*"+d(a[1])),m=new RegExp("\\s*"+d("}"+a[1]))}if(!b)return[];var h,i,m,n=[],o=[],q=[],r=!1,s=!1;f(c||a.tags);for(var y,z,A,B,C,D,E=new l(b);!E.eos();){if(y=E.pos,
// Match any text between tags.
A=E.scanUntil(h))for(var F=0,G=A.length;F<G;++F)B=A.charAt(F),g(B)?q.push(o.length):s=!0,o.push(["text",B,y,y+1]),y+=1,
// Check for whitespace on the current line.
"\n"===B&&e();
// Match the opening tag.
if(!E.scan(h))break;
// Match the closing tag.
if(r=!0,
// Get the tag type.
z=E.scan(x)||"name",E.scan(t),
// Get the tag value.
"="===z?(A=E.scanUntil(v),E.scan(v),E.scanUntil(i)):"{"===z?(A=E.scanUntil(m),E.scan(w),E.scanUntil(i),z="&"):A=E.scanUntil(i),!E.scan(i))throw new Error("Unclosed tag at "+E.pos);if(C=[z,A,y,E.pos],o.push(C),"#"===z||"^"===z)n.push(C);else if("/"===z){if(
// Check section nesting.
D=n.pop(),!D)throw new Error('Unopened section "'+A+'" at '+y);if(D[1]!==A)throw new Error('Unclosed section "'+D[1]+'" at '+y)}else"name"===z||"{"===z||"&"===z?s=!0:"="===z&&
// Set the tags for the next time around.
f(A)}if(
// Make sure there are no open sections when we're done.
D=n.pop())throw new Error('Unclosed section "'+D[1]+'" at '+E.pos);return k(j(o))}/**
   * Combines the values of consecutive text tokens in the given `tokens` array
   * to a single token.
   */
function j(a){for(var b,c,d=[],e=0,f=a.length;e<f;++e)b=a[e],b&&("text"===b[0]&&c&&"text"===c[0]?(c[1]+=b[1],c[3]=b[3]):(d.push(b),c=b));return d}/**
   * Forms the given array of `tokens` into a nested tree structure where
   * tokens that represent a section have two additional items: 1) an array of
   * all tokens that appear in that section and 2) the index in the original
   * template that represents the end of that section.
   */
function k(a){for(var b,c,d=[],e=d,f=[],g=0,h=a.length;g<h;++g)switch(b=a[g],b[0]){case"#":case"^":e.push(b),f.push(b),e=b[4]=[];break;case"/":c=f.pop(),c[5]=b[2],e=f.length>0?f[f.length-1][4]:d;break;default:e.push(b)}return d}/**
   * A simple string scanner that is used by the template parser to find
   * tokens in template strings.
   */
function l(a){this.string=a,this.tail=a,this.pos=0}/**
   * Represents a rendering context by wrapping a view object and
   * maintaining a reference to the parent context.
   */
function m(a,b){this.view=a,this.cache={".":this.view},this.parent=b}/**
   * A Writer knows how to take a stream of tokens and render them to a
   * string, given a context. It also maintains a cache of templates to
   * avoid the need to parse the same template twice.
   */
function n(){this.cache={}}var o=Object.prototype.toString,p=Array.isArray||function(a){return"[object Array]"===o.call(a)},q=RegExp.prototype.test,r=/\S/,s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},t=/\s*/,u=/\s+/,v=/\s*=/,w=/\s*\}/,x=/#|\^|\/|>|\{|&|=|!/;/**
   * Returns `true` if the tail is empty (end of string).
   */
l.prototype.eos=function(){return""===this.tail},/**
   * Tries to match the given regular expression at the current position.
   * Returns the matched text if it can match, the empty string otherwise.
   */
l.prototype.scan=function(a){var b=this.tail.match(a);if(!b||0!==b.index)return"";var c=b[0];return this.tail=this.tail.substring(c.length),this.pos+=c.length,c},/**
   * Skips all text until the given regular expression can be matched. Returns
   * the skipped string, which is the entire tail if no match can be made.
   */
l.prototype.scanUntil=function(a){var b,c=this.tail.search(a);switch(c){case-1:b=this.tail,this.tail="";break;case 0:b="";break;default:b=this.tail.substring(0,c),this.tail=this.tail.substring(c)}return this.pos+=b.length,b},/**
   * Creates a new context using the given view with this context
   * as the parent.
   */
m.prototype.push=function(a){return new m(a,this)},/**
   * Returns the value of the given name in this context, traversing
   * up the context hierarchy if the value is absent in this context's view.
   */
m.prototype.lookup=function(a){var c,d=this.cache;if(d.hasOwnProperty(a))c=d[a];else{for(var f,g,h=this,i=!1;h;){if(a.indexOf(".")>0)/**
           * Using the dot notion path in `name`, we descend through the
           * nested objects.
           *
           * To be certain that the lookup has been successful, we have to
           * check if the last object in the path actually has the property
           * we are looking for. We store the result in `lookupHit`.
           *
           * This is specially necessary for when the value has been set to
           * `undefined` and we want to avoid looking up parent contexts.
           **/
for(c=h.view,f=a.split("."),g=0;null!=c&&g<f.length;)g===f.length-1&&(i=e(c,f[g])),c=c[f[g++]];else c=h.view[a],i=e(h.view,a);if(i)break;h=h.parent}d[a]=c}return b(c)&&(c=c.call(this.view)),c},/**
   * Clears all cached templates in this writer.
   */
n.prototype.clearCache=function(){this.cache={}},/**
   * Parses and caches the given `template` and returns the array of tokens
   * that is generated from the parse.
   */
n.prototype.parse=function(a,b){var c=this.cache,d=c[a];return null==d&&(d=c[a]=i(a,b)),d},/**
   * High-level method that is used to render the given `template` with
   * the given `view`.
   *
   * The optional `partials` argument may be an object that contains the
   * names and templates of partials that are used in the template. It may
   * also be a function that is used to load partial templates on the fly
   * that takes a single argument: the name of the partial.
   */
n.prototype.render=function(a,b,c){var d=this.parse(a),e=b instanceof m?b:new m(b);return this.renderTokens(d,e,c,a)},/**
   * Low-level method that renders the given array of `tokens` using
   * the given `context` and `partials`.
   *
   * Note: The `originalTemplate` is only ever used to extract the portion
   * of the original template that was contained in a higher-order section.
   * If the template doesn't use higher-order sections, this argument may
   * be omitted.
   */
n.prototype.renderTokens=function(a,b,c,d){for(var e,f,g,h="",i=0,j=a.length;i<j;++i)g=void 0,e=a[i],f=e[0],"#"===f?g=this.renderSection(e,b,c,d):"^"===f?g=this.renderInverted(e,b,c,d):">"===f?g=this.renderPartial(e,b,c,d):"&"===f?g=this.unescapedValue(e,b):"name"===f?g=this.escapedValue(e,b):"text"===f&&(g=this.rawValue(e)),void 0!==g&&(h+=g);return h},n.prototype.renderSection=function(a,c,d,e){
// This function is used to render an arbitrary template
// in the current context by higher-order sections.
function f(a){return g.render(a,c,d)}var g=this,h="",i=c.lookup(a[1]);if(i){if(p(i))for(var j=0,k=i.length;j<k;++j)h+=this.renderTokens(a[4],c.push(i[j]),d,e);else if("object"==typeof i||"string"==typeof i||"number"==typeof i)h+=this.renderTokens(a[4],c.push(i),d,e);else if(b(i)){if("string"!=typeof e)throw new Error("Cannot use higher-order sections without the original template");
// Extract the portion of the original template that the section contains.
i=i.call(c.view,e.slice(a[3],a[5]),f),null!=i&&(h+=i)}else h+=this.renderTokens(a[4],c,d,e);return h}},n.prototype.renderInverted=function(a,b,c,d){var e=b.lookup(a[1]);
// Use JavaScript's definition of falsy. Include empty arrays.
// See https://github.com/janl/mustache.js/issues/186
if(!e||p(e)&&0===e.length)return this.renderTokens(a[4],b,c,d)},n.prototype.renderPartial=function(a,c,d){if(d){var e=b(d)?d(a[1]):d[a[1]];return null!=e?this.renderTokens(this.parse(e),c,d,e):void 0}},n.prototype.unescapedValue=function(a,b){var c=b.lookup(a[1]);if(null!=c)return c},n.prototype.escapedValue=function(b,c){var d=c.lookup(b[1]);if(null!=d)return a.escape(d)},n.prototype.rawValue=function(a){return a[1]},a.name="mustache.js",a.version="2.2.1",a.tags=["{{","}}"];
// All high-level mustache.* functions use this writer.
var y=new n;/**
   * Clears all cached templates in the default writer.
   */
a.clearCache=function(){return y.clearCache()},/**
   * Parses and caches the given template in the default writer and returns the
   * array of tokens it contains. Doing this ahead of time avoids the need to
   * parse templates on the fly as they are rendered.
   */
a.parse=function(a,b){return y.parse(a,b)},/**
   * Renders the `template` with the given `view` and `partials` using the
   * default writer.
   */
a.render=function(a,b,d){if("string"!=typeof a)throw new TypeError('Invalid template! Template should be a "string" but "'+c(a)+'" was given as the first argument for mustache#render(template, view, partials)');return y.render(a,b,d)},
// This is here for backwards compatibility with 0.4.x.,
/*eslint-disable */
// eslint wants camel cased function name
a.to_html=function(c,d,e,f){/*eslint-enable*/
var g=a.render(c,d,e);return b(f)?void f(g):g},
// Export the escaping function so that the user may override it.
// See https://github.com/janl/mustache.js/issues/244
a.escape=h,
// Export these mainly for testing, but also for advanced usage.
a.Scanner=l,a.Context=m,a.Writer=n}),/* global FastClick, ga, Pikaday, moment, Mustache */
$.fn.extend({animateCss:function(a,b){"use strict";var c="webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";this.addClass("animated "+a).one(c,function(){var c=$(this);c.removeClass("animated "+a),"function"==typeof b&&b()})}}),function(a,b,c,d){"use strict";/**
	 * Constructor
	 * @param element This is the element that plugin is running on
	 * @param object options Options specific to this instance
	 * @return void
	 */
function e(b,c){this.domNode=b,this.element=a(b),
// The first param, if bool specifies 'deep' copy. False by default. i.e. merge all child props that are objects too
this.options=a.extend(!0,{},g,c),this._defaults=g,this._name=f,this.init()}/**
	 * The name of this plugin
	 * @var string
	 */
var f="netglueSiteWide",g={externalLinkNewWindow:!0};/**
	 * Init
	 * @return void
	 */
e.prototype.init=function(){
// Do Initialisation
a("html").addClass("js-ready"),a("html").removeClass("no-js"),this.vendorInit(),this.clickTracking(),this.externalLinks(),this.initOffCanvas(),this.initDesktopNavScroll(),this.initDatePickers(),this.initCalculator(),this.resultSheetOpen=!1},/**
	 * Vendor plugin initialisation
	 * @return float
	 */
e.prototype.vendorInit=function(){FastClick.attach(c.body)},/**
	 * Other Methods
	 */
// ...
e.prototype.initCalculator=function(){var b=a("form.calculator");if(b.length){var c=this;
// Load the result template
this.resultTemplate=a(".calculator-success-template")[0].outerHTML,
// Load the error template
this.errorTemplate=a(".calculator-error-template")[0].outerHTML,a(".mustache-template").remove(),b.submit(function(d){d.preventDefault(),a.post("/calculate",b.serialize(),function(a){c.updateCalculation(a)}).fail(function(b){c.updateCalculation(a.parseJSON(b.responseText))})})}},e.prototype.updateCalculation=function(b){var d;d=a(b.error===!0?Mustache.render(this.errorTemplate,b):Mustache.render(this.resultTemplate,b));var e=a("form.calculator").find("button");e.attr("disabled",!0),a("body").append(d);var f=this,g=function(){f.resultSheetOpen=!1,f.showHeader(),d.animateCss("slideOutLeft",function(){d.remove(),e.attr("disabled",!1)})};d.css("display","block"),
// Close when close button is clicked
d.find(".close").click(function(a){return a.preventDefault(),g(),!1}),
// Close with escape key
a(c).keyup(function(a){27==a.keyCode&&g()}),this.hideHeader(),d.animateCss("slideInRight"),this.resultSheetOpen=!0},e.prototype.initDatePickers=function(){if(!this.hasDateInput()){var a=new Pikaday({field:c.getElementById("input-date"),firstDay:1,maxDate:new Date,format:"YYYY-MM-DD",onSelect:function(){}});a.setMoment(moment())}},/**
     * Whether the browser supports the date input
     *
     * @return bool
     */
e.prototype.hasDateInput=function(){var a=c.createElement("input");return a.type="date","date"===a.type},e.prototype.initOffCanvas=function(){var b=this;a(".open-nav").click(function(a){return a.preventDefault(),b.toggleNav(),!1}),a(c).keyup(function(a){27==a.keyCode&&b.closeNav()})},e.prototype.toggleNav=function(){return this.isNavOpen()?this.closeNav():this.openNav()},e.prototype.isNavOpen=function(){return a("body").hasClass("nav-open")},e.prototype.openNav=function(){this.resultSheetOpen||(a("body").addClass("nav-open"),this.showHeader())},e.prototype.closeNav=function(){a("body").removeClass("nav-open")},e.prototype.hideHeader=function(){a(".site-header").addClass("compact")},e.prototype.showHeader=function(){this.resultSheetOpen||a(".site-header").removeClass("compact")},/**
     * Scroll listener for desktop naviation
     */
e.prototype.initDesktopNavScroll=function(){var d=a("body"),e=a(".site-header"),f=e.outerHeight(),g=this,h=b.pageYOffset||c.documentElement.scrollTop;b.addEventListener("scroll",function(){var a=b.pageYOffset||c.documentElement.scrollTop;// Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
a>h?(
// downscroll code
d.hasClass("scroll-down")||d.addClass("scroll-down"),d.hasClass("scroll-up")&&d.removeClass("scroll-up")):(
// upscroll code
d.hasClass("scroll-down")&&d.removeClass("scroll-down"),d.hasClass("scroll-up")||d.addClass("scroll-up")),h=a,a>f&&!g.isNavOpen()?g.hideHeader():(g.showHeader(),d.removeClass("scroll-up"),d.removeClass("scroll-down"))},!1)},/**
     * Tracking various clicks as GA events
     */
e.prototype.clickTracking=function(){"function"==typeof ga&&(a('a[href^="mailto:"]').click(function(){ga("send","event","Link","click","Clicked mailto: Link")}),a('a[href^="tel:"]').click(function(){ga("send","event","Link","click","Clicked tel: Link")}),a('a[href^="https://www.facebook.com"]').click(function(){ga("send","event","Link","click","Visited Facebook")}),a('a[href*="twitter.com"]').click(function(){ga("send","event","Link","click","Visited Twitter")}),a('a[href^="https://plus.google.com"]').click(function(){ga("send","event","Link","click","Visited Google+")}))},/**
	 * Decide whether we should add the target="_blank" attribute to external links
	 * @return void
	 */
e.prototype.externalLinks=function(){this.options.externalLinkNewWindow===!0&&a("a").filter(function(){return this.hostname&&this.hostname!==b.location.hostname}).each(function(){a(this).attr("target","_blank")})},/**
	 * Add plugin as a closure to jQuery
	 * Create a new instance of the plugin for each element
	 * @param object options
	 * @return jQuery for chaining
	 */
a.fn[f]=function(b){return this.each(function(){a.data(this,"plugin_"+f)||a.data(this,"plugin_"+f,new e(this,b))})}}(jQuery,window,document),$(function(){"use strict";$("body").netglueSiteWide()});