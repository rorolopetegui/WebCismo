(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"15819f774badb7d8e343":function(e,t,n){var o=n("537f1f7d06478edf7dcc");"string"===typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n("1e4534d1d62a11482e97")(o,r);o.locals&&(e.exports=o.locals)},"1647a7b190f43e9543e0":function(e,t,n){"use strict";t.a=[{title:"Salesforce",backgroundImage:"https://i.imgur.com/jfNWTeV.png",link:"#"},{title:"Avesur",backgroundImage:"https://i.imgur.com/w1yXtur.png",link:"#"},{title:"Cutcsa",backgroundImage:"https://i.imgur.com/MNcpPNV.png",link:"#"},{title:"RadioTaxi 141",backgroundImage:"https://i.imgur.com/cul899k.png",link:"#"},{title:"Expreso Tupiza",backgroundImage:"https://i.imgur.com/ZNg4eyL.png",link:"#"},{title:"UrbanTaxi",backgroundImage:"https://i.imgur.com/I935Eyq.png",link:"#"}]},"24fd6385974095c8b16c":function(e,t,n){"use strict";t.a=[{name:"Jorge M.",profession:"Gerente comercial, Avesur SRL",quote:"Cuando nos vimos necesitando una p\xe1gina web, Cismo Solutions se encarg\xf3 r\xe1pidamente en encontrar la mejor p\xe1gina web que refleje lo que nuestra empresa desea comunicar. Me encuentro muy satisfecho con ellos.",avatar:"https://i.imgur.com/6VeG3D5.png"},{name:"Ernesto Guzman",profession:"Asesor comercial, Expreso Tupiza, Bolivia",quote:"Cismo, por algunos a\xf1os han brindado a nuestra Organizaci\xf3n sus servicios de realizaci\xf3n y programaci\xf3n de aplicaciones internas para mejorar el servicio de nuestra empresa y lo han cumplido en su totalidad demostrando ser una empresa con transparencia, firme y comprometida a ayudar a realizar los objetivos de sus clientes, estas caracter\xedsticas la han hecho merecedora de nuestra confianza.",avatar:"https://i.imgur.com/M5WBX1E.png"},{name:"Carlos P\xe9rez",profession:"Gerente de sistemas, Urban Taxi, Guatemala",quote:"Urban Taxi se encuentra totalmente complacida con el trabajo realizado y anhela continuar as\xed por mucho tiempo m\xe1s, tanto por su seriedad como la eficacia con la que la empresa ha prestado sus servicios. Brindamos nuestros servicios a 2000 taxis en Ciudad de Guatemala!",avatar:"https://i.imgur.com/qQFfMHH.png"}]},"38f0a5a2dfc5795018ed":function(e,t,n){"use strict";var o,r=n("8af190b70a6bc55c6f1b"),i=(n("8a2d1b95e05b6a321e74"),n("a95ec4cd15b8c770ae24"),n("6643a48240e3ce4e96c0")),a=n("f01efac8284662da352d");n("15819f774badb7d8e343");function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,n,r){o||(o="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&i)for(var s in i)void 0===t[s]&&(t[s]=i[s]);else t||(t=i||{});if(1===a)t.children=r;else if(a>1){for(var c=new Array(a),l=0;l<a;l++)c[l]=arguments[l+3];t.children=c}return{$$typeof:o,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d,y=c("br",{}),b=c("br",{}),v=function(e){function t(){var e,n,o,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return o=this,r=(e=u(t)).call.apply(e,[this].concat(a)),n=!r||"object"!==s(r)&&"function"!==typeof r?p(o):r,m(p(p(n)),"state",{hoverRight:!1,hoverLeft:!1,page:0}),m(p(p(n)),"onHoverLeft",function(){n.setState(function(e){return{hoverLeft:!e.hoverLeft}})}),m(p(p(n)),"onHoverRight",function(){n.setState(function(e){return{hoverRight:!e.hoverRight}})}),m(p(p(n)),"nextPage",function(e){n.setState(function(t){return{page:t.page===e-1?0:t.page+1}})}),m(p(p(n)),"backPage",function(e){n.setState(function(t){return{page:0===t.page?e-1:t.page-1}})}),n}var n,o,d;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,r["Component"]),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.content,o=n.length,r=this.state,s=r.hoverLeft,l=r.hoverRight,u=r.page;return c("div",{style:t.container},void 0,c(i.a,{onMouseEnter:this.onHoverLeft.bind(this),onMouseLeave:this.onHoverLeft.bind(this),onClick:this.backPage.bind(this,o),style:t.iconLeft,icon:a.d,size:"2x",className:s?" arrowHover":"arrow"}),n.map(function(e,n){return c("div",{className:"item"+(n===u?" item-active":"")},n,c("img",{src:e.avatar,style:t.avatar}),c("p",{style:t.quote},void 0,'"',e.quote,'"'),c("span",{style:t.name},void 0,e.name),y,c("span",{style:t.profession},void 0,e.profession),b,c(i.a,{style:t.iconQuote,icon:a.h,size:"2x"}))}),c(i.a,{onMouseEnter:this.onHoverRight.bind(this),onMouseLeave:this.onHoverRight.bind(this),onClick:this.nextPage.bind(this,o),style:t.iconRight,icon:a.e,size:"2x",className:l?" arrowHover":"arrow"}))}}])&&l(n.prototype,o),d&&l(n,d),t}();function h(e){return(h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t,n,o){d||(d="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&r)for(var a in r)void 0===t[a]&&(t[a]=r[a]);else t||(t=r||{});if(1===i)t.children=o;else if(i>1){for(var s=new Array(i),c=0;c<i;c++)s[c]=arguments[c+3];t.children=s}return{$$typeof:d,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function w(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function k(e,t){return!t||"object"!==h(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var O=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),k(this,S(t).apply(this,arguments))}var n,o,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(t,r["Component"]),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.contentClients,o=e.contentTestimonials;return g("div",{style:t.container},void 0,g("div",{style:t.titleContainer},void 0,g("span",{style:t.titleSection},void 0,"Clientes")),g("div",{style:t.clientsLogo},void 0,n.map(function(e,n){return g("div",{style:t.clientImgContainer},n,g("img",{style:t.clientImg,src:e.backgroundImage,className:"clientImage"}))})),g("div",{style:t.clientTestimonials},void 0,g("span",{style:t.clientTestimonials.title},void 0,"Testimonios"),g("div",{style:t.clientTestimonials.carouselContainer},void 0,g(v,{classes:t.clientTestimonials.carousel,content:o}))))}}])&&w(n.prototype,o),i&&w(n,i),t}();t.a=O},"537f1f7d06478edf7dcc":function(e,t,n){(e.exports=n("c138e55a31f3f8960e99")(!1)).push([e.i,".item {\r\n\tcolor: black;\r\n\twidth: 100%;\r\n\tposition: absolute;\r\n\topacity: 0;\r\n\ttop:0;\r\n\ttransition: opacity .75s ease-in-out;\r\n}\r\n.item-active {\r\n\topacity: 1;\r\n\ttransition: opacity 1.75s ease;\r\n\tposition: relative;\r\n\ttop:0;\r\n}\r\n.arrow{\r\n\tcursor: pointer;\r\n    width: 100%;\r\n\t-webkit-transition: all 0.5s ease;\r\n\t-moz-transition: all 0.5s ease;\r\n\t-o-transition: all 0.5s ease;\r\n\t-ms-transition: all 0.5s ease;\r\n\ttransition: all 0.5s ease;\r\n\tz-index:-1;\r\n}\r\n.arrowHover{\r\n\tcursor: pointer;\r\n\ttransform: scale(1.2);\r\n\t-webkit-transition: all 0.5s ease;\r\n\t-moz-transition: all 0.5s ease;\r\n\t-o-transition: all 0.5s ease;\r\n\t-ms-transition: all 0.5s ease;\r\n\ttransition: all 0.5s ease;\r\n\tz-index:-1;\r\n}",""])},"7875c7c02d416620529b":function(e,t,n){(e.exports=n("c138e55a31f3f8960e99")(!1)).push([e.i,".clientImage{\r\n\t-webkit-filter: grayscale(100%) opacity(60%);\r\n\t-webkit-transition: all 0.8s ease;\r\n\t-moz-transition: all 0.8s ease;\r\n\t-o-transition: all 0.8s ease;\r\n\t-ms-transition: all 0.8s ease;\r\n\ttransition: all 0.8s ease;\r\n\tz-index:-1;\r\n}\r\n.clientImage:Hover{\r\n\t-webkit-filter: grayscale(0%) opacity(100%);\r\n\t-webkit-transition: all 0.8s ease;\r\n\t-moz-transition: all 0.8s ease;\r\n\t-o-transition: all 0.8s ease;\r\n\t-ms-transition: all 0.8s ease;\r\n\ttransition: all 0.8s ease;\r\n\tz-index:-1;\r\n}\t",""])},a95ec4cd15b8c770ae24:function(e,t,n){var o=n("7875c7c02d416620529b");"string"===typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n("1e4534d1d62a11482e97")(o,r);o.locals&&(e.exports=o.locals)}}]);