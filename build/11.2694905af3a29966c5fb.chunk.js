(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{c6f963d22fd98b438cce:function(e,t,o){"use strict";o.r(t);var n,i=o("8af190b70a6bc55c6f1b"),a=(o("8a2d1b95e05b6a321e74"),o("afe4b627eb43e210dfe6")),r=o("bd183afcc37eabd79225"),s=o.n(r),l=o("e61a87a9a868f6feefd8"),p=o.n(l);function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,o,i){n||(n="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,r=arguments.length-3;if(t||0===r||(t={children:void 0}),t&&a)for(var s in a)void 0===t[s]&&(t[s]=a[s]);else t||(t=a||{});if(1===r)t.children=i;else if(r>1){for(var l=new Array(r),p=0;p<r;p++)l[p]=arguments[p+3];t.children=l}return{$$typeof:n,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}function d(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var m,b=o("ddfae3697b8a4a1ec10e"),y=u("option",{value:"Hire"},void 0,"Contratar a Cismo"),v=u("option",{value:"Work"},void 0,"Trabajar con nostros"),x=u("option",{value:"Quote"},void 0,"Presupuesto"),C=u("option",{value:"Question"},void 0,"Solo una pregunta"),S=function(e){function t(){var e,o,n,i,a,r,s;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,p=new Array(l),u=0;u<l;u++)p[u]=arguments[u];return n=this,o=!(i=(e=f(t)).call.apply(e,[this].concat(p)))||"object"!==c(i)&&"function"!==typeof i?g(n):i,a=g(g(o)),s={fname:"",email:"",reason:"Hire",phone:"",message:"",mailSent:!1,error:null,isVerified:!1,remarkName:!1,remarkEmail:!1,remarkMessage:!1},(r="state")in a?Object.defineProperty(a,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[r]=s,o}var o,n,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,i["Component"]),o=t,(n=[{key:"handleChangeName",value:function(e){this.setState({fname:e.target.value})}},{key:"handleChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"handleChangeReason",value:function(e){this.setState({reason:e.target.value})}},{key:"handleChangePhone",value:function(e){this.setState({phone:e.target.value})}},{key:"handleChangeMessage",value:function(e){this.setState({message:e.target.value})}},{key:"validateEmail",value:function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}},{key:"requiredEntry",value:function(){return this.setState({remarkName:!1,remarkEmail:!1,remarkMessage:!1,error:""}),""===this.state.fname||""===this.state.email||""===this.state.message?(this.setState({remarkName:!0,remarkEmail:!0,remarkMessage:!0,error:"*Rellene todos los campos obligatorios"}),!1):!!this.validateEmail(this.state.email)||(this.setState({remarkEmail:!0,error:"Ingrese un mail correcto"}),!1)}},{key:"submit",value:function(e){var t=this;this.requiredEntry()?(console.log("Sending"),this.state.isVerified&&!this.state.mailSent?s()({method:"post",url:"".concat("https://cismosolutions.com/api/index.php"),headers:{"content-type":"application/json"},data:this.state}).then(function(e){t.setState({mailSent:!0}),console.log("Sended: "+e.data.sent),console.log(e),p.a.pageview("/Contact-Sended")}).catch(function(e){t.setState({error:e.message}),console.log("Error: "+e),p.a.pageview("/Contact-Error-Server")}):this.state.mailSent?(this.setState({error:"Usted ya env\xedo un mail, refresque en caso de querer enviar otro"}),p.a.pageview("/Contact-Error-TryingSendAgain")):(this.setState({error:"Primero verifique que no es un robot"}),p.a.pageview("/Contact-Error-Captcha"))):p.a.pageview("/Contact-Error-Fields")}},{key:"verifiedCaptcha",value:function(e){e&&this.setState({isVerified:!0})}},{key:"render",value:function(){var e=this.props.classes,t=this.state,o=t.mailSent,n=t.remarkName,i=t.remarkEmail,r=t.remarkMessage,s=t.error;return u("div",{style:e.container},void 0,u("div",{style:e.containerCentered},void 0,u("input",{style:n?e.inputRemarked:e.input,type:"text",value:this.state.fname,placeholder:"Mi nombre es",onChange:this.handleChangeName.bind(this)}),u("input",{style:i?e.inputRemarked:e.input,type:"text",value:this.state.email,placeholder:"Me pueden enviar un mail a",onChange:this.handleChangeEmail.bind(this)}),u("select",{style:e.input,onChange:this.handleChangeReason.bind(this)},void 0,y,v,x,C),u("input",{style:e.input,type:"text",value:this.state.phone,placeholder:"Ll\xe1menme a (optional)",onChange:this.handleChangePhone.bind(this)}),u("textarea",{style:r?e.inputMessageRemarked:e.inputMessage,value:this.state.message,placeholder:"Tengo que agregar algo",onChange:this.handleChangeMessage.bind(this)}),u(b,{sitekey:"6LcVOJIUAAAAAMhET3rdbFoTm4oUwTFro9peeTWB",render:"explicit",verifyCallback:this.verifiedCaptcha.bind(this),style:e.captcha}),u(a.a,{classes:e.button,action:this.submit.bind(this),enabled:!o},void 0,"Enviar"),u("span",{style:n||i||r||null!==s?e.spanMessage:e.spanMessageHidden},void 0,s)))}}])&&d(o.prototype,n),r&&d(o,r),t}(),w=o("372591fc9360ab1fd053"),k=o("6643a48240e3ce4e96c0"),R=o("f01efac8284662da352d"),F=o("db7c472d4eb703911549"),E=o("0d7f0986bcd2f33d8a2a");function T(e){return(T="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t,o,n){m||(m="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&i)for(var r in i)void 0===t[r]&&(t[r]=i[r]);else t||(t=i||{});if(1===a)t.children=n;else if(a>1){for(var s=new Array(a),l=0;l<a;l++)s[l]=arguments[l+3];t.children=s}return{$$typeof:m,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}function A(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function M(e,t){return!t||"object"!==T(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}o.d(t,"default",function(){return $});var j={headerSeparator:{width:"100%",height:"100px",backgroundColor:"#F0F8FF"},headerBanner:{container:{position:"relative",width:"100%",height:"230px",background:"repeating-linear-gradient(45deg, #09202F, #09202F 10px, #071722 10px, #071722 20px)",textAlign:"center",marginBottom:"2%"},sectionTitle:{position:"absolute",top:"50%",left:"50%",marginRight:"-50%",transform:"translate(-50%, -50%)",color:"#CCCCCC",fontFamily:"Roboto",letterSpacing:"0.2px",lineHeight:"65px",fontWeight:"900",fontSize:"70px",textTransform:"uppercase"}},contact:{container:{position:"relative",width:"100%",height:"500px"},containerCentered:{position:"absolute",top:"50%",left:"50%",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"60%"},input:{color:"#192727",border:"1px solid #C0C0C0",marginRight:"5%",marginBottom:"2%",width:"42.5%",height:"50px",paddingLeft:"8px",fontFamily:"Roboto",fontSize:"15px"},inputRemarked:{color:"#192727",border:"1px solid #F6546A",marginRight:"5%",marginBottom:"2%",width:"42.5%",height:"50px",paddingLeft:"8px",fontFamily:"Roboto",fontSize:"15px"},inputMessage:{color:"#192727",border:"1px solid #C0C0C0",marginBottom:"2%",width:"90%",height:"100px",paddingLeft:"8px",paddingTop:"8px",fontFamily:"Roboto",fontSize:"15px"},inputMessageRemarked:{color:"#192727",border:"1px solid #F6546A",marginBottom:"2%",width:"90%",height:"100px",paddingLeft:"8px",paddingTop:"8px",fontFamily:"Roboto",fontSize:"15px"},captcha:{marginLeft:"25px"},spanMessage:{color:"#F6546A",margin:"3%",float:"left"},spanMessageHidden:{display:"none"},button:{container:{marginTop:"15px",backgroundColor:"#05697B",width:"180px",height:"50px",position:"relative",float:"left"},containerDisable:{marginTop:"15px",backgroundColor:"#A39E98",width:"180px",height:"50px",position:"relative"},innerContent:{color:"white",position:"absolute",top:"50%",left:"30%",marginRight:"-50%",transform:"translate(-50%, -50%)"}}}},B={headerSeparator:{width:"100%",height:"70px",backgroundColor:"#F0F8FF"},headerBanner:{container:{position:"relative",width:"100%",height:"200px",background:"repeating-linear-gradient(45deg, #09202F, #09202F 10px, #071722 10px, #071722 20px)",textAlign:"center",marginBottom:"2%"},sectionTitle:{position:"absolute",top:"50%",left:"50%",marginRight:"-50%",transform:"translate(-50%, -50%)",color:"#CCCCCC",fontFamily:"Roboto",letterSpacing:"0.2px",lineHeight:"65px",fontWeight:"900",fontSize:"60px",textTransform:"uppercase"}},contact:{container:{position:"relative",width:"100%",height:"600px"},containerCentered:{position:"absolute",top:"50%",left:"50%",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"90%"},input:{color:"#192727",border:"1px solid #C0C0C0",marginRight:"5%",marginBottom:"2%",width:"100%",height:"50px",paddingLeft:"8px",fontFamily:"Roboto",fontSize:"15px"},inputRemarked:{color:"#192727",border:"1px solid #F6546A",marginRight:"5%",marginBottom:"2%",width:"100%",height:"50px",paddingLeft:"8px",fontFamily:"Roboto",fontSize:"15px"},inputMessage:{color:"#192727",border:"1px solid #C0C0C0",marginBottom:"2%",width:"100%",height:"100px",paddingLeft:"8px",paddingTop:"8px",fontFamily:"Roboto",fontSize:"15px"},inputMessageRemarked:{color:"#192727",border:"1px solid #F6546A",marginBottom:"2%",width:"100%",height:"100px",paddingLeft:"8px",paddingTop:"8px",fontFamily:"Roboto",fontSize:"15px"},captcha:{marginLeft:"25px"},spanMessage:{color:"#F6546A",margin:"3%",float:"left"},spanMessageHidden:{display:"none"},button:{container:{marginTop:"15px",backgroundColor:"#05697B",width:"180px",height:"50px",position:"relative",float:"left"},containerDisable:{marginTop:"15px",backgroundColor:"#A39E98",width:"180px",height:"50px",position:"relative"},innerContent:{color:"white",position:"absolute",top:"50%",left:"30%",marginRight:"-50%",transform:"translate(-50%, -50%)"}}}},z=O(E.Helmet,{},void 0,O("title",{},void 0,"Contacto - Cismo Solutions"),O("meta",{name:"description",content:"Solicita tu presupuesto sin costo!"})),L=O(k.a,{icon:R.g,size:"1x"}),H=O("br",{}),q=O("span",{},void 0,"Contacto"),N=O("span",{},void 0,"Haz tu primer contacto!"),$=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),M(this,P(t).apply(this,arguments))}var o,n,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,i["PureComponent"]),o=t,(n=[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){var e=!(!F.isAndroid&&!F.isIOS);return O("div",{},void 0,z,O("div",{style:e?B.headerSeparator:j.headerSeparator}),O(w.a,{classes:e?B.headerBanner:j.headerBanner},void 0,L,H,e&&q,!e&&N),O(S,{classes:e?B.contact:j.contact}))}}])&&A(o.prototype,n),a&&A(o,a),t}()}}]);