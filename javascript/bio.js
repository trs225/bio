var e="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},h="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function k(){k=function(){};h.Symbol||(h.Symbol=m)}var n=0;function m(a){return"jscomp_symbol_"+(a||"")+n++}
function p(){k();var a=h.Symbol.iterator;a||(a=h.Symbol.iterator=h.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&e(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return q(this)}});p=function(){}}function q(a){var b=0;return u(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function u(a){p();a={next:a};a[h.Symbol.iterator]=function(){return this};return a}function v(a){p();var b=a[Symbol.iterator];return b?b.call(a):q(a)}
function y(a){if(!(a instanceof Array)){a=v(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a};function z(){this.g=document.getElementById("canvas");this.h=document.getElementById("wrapper");this.b=new A;this.c=new B;this.a=new C;this.f=new D}function A(){this.c=document.getElementById("home-button");this.a=document.getElementById("about-button");this.b=document.getElementById("bio-button");this.f=document.getElementById("projects-button")}function B(){this.a=document.getElementById("about-page");this.b=document.getElementById("bio-page");this.c=document.getElementById("projects-page")}
function C(){this.a=document.getElementById("projects");this.b=document.getElementById("hemophilia");this.c=document.getElementById("probabilities")}function D(){this.a=document.getElementById("full-hemophilia");this.b=document.getElementById("full-probabilities")};function E(a){this.g=a;this.a=a.getContext("2d");this.c="white";this.h="black";this.b=2}E.prototype.f=function(){this.g.style.backgroundColor=this.c;this.a.shadowColor=""};function F(a,b,c){a.a.beginPath();a.a.arc(b,c,20,0,2*Math.PI);a.a.lineWidth=a.b;a.a.strokeStyle=a.h;a.a.stroke();a.a.closePath()}function G(a,b,c){a.a.beginPath();a.a.arc(b,c,20,0,2*Math.PI);a.a.lineWidth=a.b+5;a.a.strokeStyle="white";a.a.stroke();a.a.closePath()};function H(a,b,c){this.a=a;this.c=b;this.b=c}
H.prototype.f=function(){var a=this;I(this);J(this);window.addEventListener("click",function(b){b=v([b.clientX,b.clientY]);var c=b.next().value,d=b.next().value;F(a.c,c,d);setTimeout(function(){G(a.c,c,d)},5E3);K(a.b,0,c,d)});window.addEventListener("resize",function(){I(a);J(a)});this.a.b.c.addEventListener("click",function(){L(a)});this.a.b.a.addEventListener("click",function(){L(a);a.a.c.a.style.display="inline-block"});this.a.b.b.addEventListener("click",function(){L(a);a.a.c.b.style.display=
"inline-block"});this.a.b.f.addEventListener("click",function(){L(a);for(var b=v(Object.values(a.a.f)),c=b.next();!c.done;c=b.next())c.value.style.display="none";a.a.c.c.style.display="inline-block";a.a.a.a.style.display="flex"});this.a.a.b.addEventListener("click",function(){a.a.a.a.style.display="none";a.a.f.a.style.display="inline-block"});this.a.a.c.addEventListener("click",function(){console.log("clicked on probabilities");a.a.a.a.style.display="none";a.a.f.b.style.display="inline-block"});window.addEventListener("mousemove",
function(b){b=v(M(a.b,b.clientX,b.clientY));for(var c=b.next();!c.done;c=b.next()){var d=v(c.value),c=d.next().value,d=d.next().value;F(a.c,c,d);K(a.b,1,c,d);setTimeout(function(){var b=a.b;b.a[1]=b.a[1]||[];var c=v([b.a[1].shift(),b.a[1].shift()]),d=c.next().value,c=c.next().value,d=v([d+b.b/2,c]),b=d.next().value,d=d.next().value;G(a.c,b,d);J(a)},500)}})};function L(a){a=v(Object.values(a.a.c));for(var b=a.next();!b.done;b=a.next())b.value.style.display="none"}
function J(a){for(var b=v([0,1]),c=b.next();!c.done;c=b.next())for(var c=v(N(a.b,c.value)),d=c.next();!d.done;d=c.next())d=d.value,F(a.c,d[0],d[1])}function I(a){var b=a.a.g,c=a.a.h,c=v([c.clientWidth,c.clientHeight]);a.h=c.next().value;a.g=c.next().value;c=v([a.h,a.g]);b.width=c.next().value;b.height=c.next().value;b=a.b;c=a.g;b.b=a.h;b.g=c};function O(){var a=this;this.a=[];this.c=[40,100];this.h=function(b){return Math.pow(Math.E,-Math.pow((b-a.b/2)/(a.b/4),2))};this.i=function(b){return-b/a.g+1}}O.prototype.f=function(){};function K(a,b,c,d){a.a[b]=a.a[b]||[];a.a[b].push.apply(a.a[b],[].concat(y([c-a.b/2,d])))}
function N(a,b){function c(a){for(;;)switch(d){case 0:g.a[b]=g.a[b]||[],f=0;case 1:if(!(f<g.a[b].length)){d=3;break}d=4;return{value:[g.a[b][f]+g.b/2,g.a[b][f+1]],done:!1};case 4:if(void 0===a){d=5;break}d=-1;throw a;case 5:case 2:f+=2;d=1;break;case 3:d=-1;default:return{value:void 0,done:!0}}}var d=0,f,g=a,l={next:function(){return c(void 0)},"throw":function(a){return c(a)},"return":function(){throw Error("Not yet implemented");}};p();l[Symbol.iterator]=function(){return this};return l}
function M(a,b,c){function d(a){for(;;)switch(f){case 0:x=0;case 1:if(!(4>x)){f=3;break}var d=r,U=c,t=P(d.h,b),d=P(d.i,U);w=v([t,d]);l=w.next().value;g=w.next().value;if(!l||!g){f=4;break}f=5;a=Math.random()*(r.c[1]-r.c[0])+r.c[0];t=2*Math.random()*Math.PI;return{value:[l+a*Math.cos(t),g+a*Math.sin(t)],done:!1};case 5:if(void 0===a){f=6;break}f=-1;throw a;case 6:case 4:case 2:x++;f=1;break;case 3:f=-1;default:return{value:void 0,done:!0}}}var f=0,g,l,w,x,r=a;a={next:function(){return d(void 0)},"throw":function(a){return d(a)},
"return":function(){throw Error("Not yet implemented");}};p();a[Symbol.iterator]=function(){return this};return a}function P(a,b){if(1*Math.random()<Math.abs(a(b)))return b};function Q(){for(var a=new z,b=new E(a.g),c=new O,a=v([b,c,new H(a,b,c)]),b=a.next();!b.done;b=a.next())b.value.f()}var R=["main"],S=this;R[0]in S||!S.execScript||S.execScript("var "+R[0]);for(var T;R.length&&(T=R.shift());)R.length||void 0===Q?S[T]?S=S[T]:S=S[T]={}:S[T]=Q;Q();
