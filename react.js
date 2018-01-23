!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],t):t(e["k-simple-state-react"]={},e.React)}(this,function(e,t){"use strict";var n="default"in t?t.default:t,r=function(e){return e.displayName||e.name||e.constructor&&e.constructor.name||"Unknown"},o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t};e.inject=function(e){return function(s){var f,p;return p=f=function(t){function r(e,t){o(this,r);var n=a(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e,t));return n.state={injectedProps:{}},n}return c(r,t),i(r,[{key:"componentWillMount",value:function(){var t=this,n=this.context.kStore;this.unsubscribe=n.subscribe(function(){t.setState(function(t){return u({},t,{injectedProps:e(n)})})})}},{key:"componentWillReceiveProps",value:function(e){this.readStore(e)()}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){return n.createElement(s,u({},this.props,this.state.injectedProps))}}]),r}(t.Component),f.displayName="inject("+r(s),f.contextTypes={kStore:function(){return null}},p}},e.provider=function(e){return function(u){var s,f;return f=s=function(t){function r(){return o(this,r),a(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return c(r,t),i(r,[{key:"getChildContext",value:function(){return{kStore:e}}},{key:"render",value:function(){return n.createElement(u,this.props)}}]),r}(t.Component),s.displayName="provider("+r(u)+")",s.childContextTypes={kStore:function(){return null}},f}},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=react.js.map