parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";window.addEventListener("load",function(){var e=document.getElementById("contact-form");e.addEventListener("submit",function(t){t.preventDefault(),e.reset()});var t=document.getElementsByClassName("slideshow__item")[0],n=document.getElementById("slideshow_left"),s=document.getElementById("slideshow_right"),i=function(e){var n=t.classList[1],s=Number.parseInt(n[n.length-1])+e;0===s?s=4:5===s&&(s=1),t.classList.remove(n);var i=n.substring(0,n.length-1)+s.toString();t.classList.add(i)};n.addEventListener("click",function(){i(-1)}),s.addEventListener("click",function(){i(1)})});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.0cee03e0.js.map