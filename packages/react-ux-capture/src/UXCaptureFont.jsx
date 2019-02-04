// @flow
import React from 'react';

type Props = {
	fontFamily: string,
	mark: string,
};

// Smaller build of webfontloader library with "custom" module only
// See: https://github.com/typekit/webfontloader/blob/master/CONTRIBUTING.md#building
export const fontLoaderInlineCode = `/* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function h(a,b,c){return a.call.apply(a.bind,arguments)}function aa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function l(a,b,c){l=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?h:aa;return l.apply(null,arguments)}var q=Date.now||function(){return+new Date};function ba(a,b){this.a=b||a;this.b=this.a.document}var ca=!!window.FontFace;function r(a,b,c,d){b=a.b.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.b.createTextNode(d));return b}function t(a,b,c){a=a.b.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}
function w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\\s+/g," ").replace(/^\\s+|\\s+$/,"")}function x(a,b){for(var c=a.className.split(/\\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function da(a,b,c){function d(){m&&e&&f&&(m(g),m=null)}b=r(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,m=c||null;ca?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d()}):setTimeout(function(){e=!0;d()},0);t(a,"head",b)};function ea(){this.a=0;this.b=null}function fa(a){a.a++;return function(){a.a--;y(a)}}function ga(a,b){a.b=b;y(a)}function y(a){0==a.a&&a.b&&(a.b(),a.b=null)};function z(a){this.a=a||"-"}z.prototype.b=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\\W_]+/g,"").toLowerCase());return b.join(this.a)};function A(a,b){this.b=a;this.c=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.c=parseInt(c[2],10))}function ha(a){return B(a)+" "+(a.c+"00")+" 300px "+D(a.b)}function D(a){var b=[];a=a.split(/,\\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function E(a){return a.a+a.c}function B(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b};function ia(a,b){this.b=a;this.c=a.a.document.documentElement;this.g=b;this.a=new z("-");this.h=!1!==b.events;this.f=!1!==b.classes}function ja(a){a.f&&w(a.c,[a.a.b("wf","loading")]);F(a,"loading")}function G(a){if(a.f){var b=x(a.c,a.a.b("wf","active")),c=[],d=[a.a.b("wf","loading")];b||c.push(a.a.b("wf","inactive"));w(a.c,c,d)}F(a,"inactive")}function F(a,b,c){if(a.h&&a.g[b])if(c)a.g[b](c.b,E(c));else a.g[b]()};function ka(){this.b={}}function la(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.b[e];f&&d.push(f(b[e],c))}return d};function H(a,b){this.b=a;this.c=b;this.a=r(this.b,"span",{"aria-hidden":"true"},this.c)}function I(a){t(a.b,"body",a.a)}function J(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+D(a.b)+";"+("font-style:"+B(a)+";font-weight:"+(a.c+"00")+";")};function K(a,b,c,d,e,f){this.f=a;this.h=b;this.a=d;this.b=c;this.c=e||3E3;this.g=f||void 0}K.prototype.start=function(){var a=this.b.a.document,b=this,c=q(),d=new Promise(function(d,e){function f(){q()-c>=b.c?e():a.fonts.load(ha(b.a),b.g).then(function(a){1<=a.length?d():setTimeout(f,25)},function(){e()})}f()}),e=null,f=new Promise(function(a,c){e=setTimeout(c,b.c)});Promise.race([f,d]).then(function(){e&&(clearTimeout(e),e=null);b.f(b.a)},function(){b.h(b.a)})};function L(a,b,c,d,e,f,g){this.m=a;this.s=b;this.b=c;this.a=d;this.j=g||"BESbswy";this.c={};this.u=e||3E3;this.l=f||null;this.i=this.h=this.g=this.f=null;this.f=new H(this.b,this.j);this.g=new H(this.b,this.j);this.h=new H(this.b,this.j);this.i=new H(this.b,this.j);a=new A(this.a.b+",serif",E(this.a));a=J(a);this.f.a.style.cssText=a;a=new A(this.a.b+",sans-serif",E(this.a));a=J(a);this.g.a.style.cssText=a;a=new A("serif",E(this.a));a=J(a);this.h.a.style.cssText=a;a=new A("sans-serif",E(this.a));a=
J(a);this.i.a.style.cssText=a;I(this.f);I(this.g);I(this.h);I(this.i)}var M={w:"serif",v:"sans-serif"},N=null;function O(){if(null===N){var a=/AppleWebKit\\/([0-9]+)(?:\\.([0-9]+))/.exec(window.navigator.userAgent);N=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return N}L.prototype.start=function(){this.c.serif=this.h.a.offsetWidth;this.c["sans-serif"]=this.i.a.offsetWidth;this.o=q();P(this)};
function Q(a,b,c){for(var d in M)if(M.hasOwnProperty(d)&&b===a.c[M[d]]&&c===a.c[M[d]])return!0;return!1}function P(a){var b=a.f.a.offsetWidth,c=a.g.a.offsetWidth,d;(d=b===a.c.serif&&c===a.c["sans-serif"])||(d=O()&&Q(a,b,c));d?q()-a.o>=a.u?O()&&Q(a,b,c)&&(null===a.l||a.l.hasOwnProperty(a.a.b))?R(a,a.m):R(a,a.s):ma(a):R(a,a.m)}function ma(a){setTimeout(l(function(){P(this)},a),50)}function R(a,b){setTimeout(l(function(){v(this.f.a);v(this.g.a);v(this.h.a);v(this.i.a);b(this.a)},a),0)};function S(a,b,c){this.b=a;this.a=b;this.c=0;this.i=this.h=!1;this.j=c}var T=null;S.prototype.f=function(a){var b=this.a;b.f&&w(b.c,[b.a.b("wf",a.b,E(a).toString(),"active")],[b.a.b("wf",a.b,E(a).toString(),"loading"),b.a.b("wf",a.b,E(a).toString(),"inactive")]);F(b,"fontactive",a);this.i=!0;U(this)};
S.prototype.g=function(a){var b=this.a;if(b.f){var c=x(b.c,b.a.b("wf",a.b,E(a).toString(),"active")),d=[],e=[b.a.b("wf",a.b,E(a).toString(),"loading")];c||d.push(b.a.b("wf",a.b,E(a).toString(),"inactive"));w(b.c,d,e)}F(b,"fontinactive",a);U(this)};function U(a){0==--a.c&&a.h&&(a.i?(a=a.a,a.f&&w(a.c,[a.a.b("wf","active")],[a.a.b("wf","loading"),a.a.b("wf","inactive")]),F(a,"active")):G(a.a))};function V(a){this.h=a;this.f=new ka;this.g=0;this.a=this.c=!0}V.prototype.load=function(a){this.b=new ba(this.h,a.context||this.h);this.c=!1!==a.events;this.a=!1!==a.classes;na(this,new ia(this.b,a),a)};
function oa(a,b,c,d,e){var f=0==--a.g;(a.a||a.c)&&setTimeout(function(){var a=e||null,m=d||null||{};if(0===c.length&&f)G(b.a);else{b.c+=c.length;f&&(b.h=f);var k,n=[];for(k=0;k<c.length;k++){var C=c[k],X=m[C.b],p=b.a,u=C;p.f&&w(p.c,[p.a.b("wf",u.b,E(u).toString(),"loading")]);F(p,"fontloading",u);p=null;if(null===T)if(window.FontFace){var u=/Gecko.*Firefox\\/(\\d+)/.exec(window.navigator.userAgent),pa=/OS X.*Version\\/10\\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);
T=u?42<parseInt(u[1],10):pa?!1:!0}else T=!1;T?p=new K(l(b.f,b),l(b.g,b),b.b,C,b.j,X):p=new L(l(b.f,b),l(b.g,b),b.b,C,b.j,a,X);n.push(p)}for(k=0;k<n.length;k++)n[k].start()}},0)}function na(a,b,c){var d=[],e=c.timeout;ja(b);var d=la(a.f,c,a.b),f=new S(a.b,b,e);a.g=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,c,d){oa(a,f,b,c,d)})};function W(a,b){this.b=a;this.a=b}W.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new ea;b=0;for(c=d.length;b<c;b++)da(this.b,d[b],fa(g));var m=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var k=d[1].split(","),n=0;n<k.length;n+=1)m.push(new A(d[0],k[n]));else m.push(new A(d[0]));ga(g,function(){a(m,f)})};var Y=new V(window);Y.f.b.custom=function(a,b){return new W(b,a)};var Z={load:l(Y.load,Y)};"function"===typeof define&&define.amd?define(function(){return Z}):"undefined"!==typeof module&&module.exports?module.exports=Z:(window.WebFont=Z,window.WebFontConfig&&Y.load(window.WebFontConfig));}());`;

const generateUXCaptureFontJS = (fontFamily: string, mark: string) => `
    WebFont.load({
        custom: {
            families: ['${fontFamily}']
        },
        active: function() {
            if(window.UXCapture) {
                window.UXCapture.mark("${mark}");
            }
        }
    });
`;

// fontFamily attribute should include individual weights if separate files are used
// Example: "Graphik Meetup:n4,n5,n6"
// Attention, if no weight specified, only n4 (e.g. font-weight: 400) is tested for!
// See https://github.com/typekit/webfontloader#events for more detail
const UXCaptureFont = ({ fontFamily, mark }: Props) =>
	<script
		dangerouslySetInnerHTML={{
			__html: generateUXCaptureFontJS(fontFamily, mark),
		}}
	/>; // eslint-disable-line react/no-danger

export default UXCaptureFont;