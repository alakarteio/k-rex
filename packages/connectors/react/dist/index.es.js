import React,{Component}from"react";import shallowEqual from"fbjs/lib/shallowEqual";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _extends(){return(_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){_defineProperty(t,e,n[e])})}return t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}var getWrappedDisplayName=function(t){return t.displayName||t.name||t.constructor&&t.constructor.name||"Unknown"},defaultObject={},withoutFunctions=function(t){return Object.keys(t).reduce(function(e,n){var r=t[n];return"function"==typeof r?e:_objectSpread({},e,_defineProperty({},n,r))},defaultObject)},inject=function(t){return function(e){var n,r;return r=n=function(n){function r(e,n){var o;return _classCallCheck(this,r),_defineProperty(_assertThisInitialized(_assertThisInitialized(o=_possibleConstructorReturn(this,_getPrototypeOf(r).call(this,e,n)))),"inject",function(e){o.store&&(o.setState(function(n){return _objectSpread({},n,{injectedProps:t&&t(o.store,e||o.props,o.store.drivers)||defaultObject})}),o.reduxState=o.store.getState())}),o.first=!0,o.reduxState=void 0,o.state={injectedProps:{}},o}return _inherits(r,Component),_createClass(r,[{key:"componentWillMount",value:function(){var t=this,n=this.context.store;if(n)this.store=n,this.inject(),this.unsubscribe=n.subscribe(function(){t.store&&t.reduxState===t.store.getState()||t.inject()});else{var r="font-weight: bolder; font-style: italic;";console.error("[k-ramel/react] Error in %cinject%c for the component %c".concat(getWrappedDisplayName(e),"%c\n")+"\t> The store needs to be provided by an ancestor of this component.\n\t> You can use %cprovider%c from %c@k-ramel/react%c or %cProvider%c from %creact-redux%c.\n\nCheck the documentation for an example at https://github.com/alakarteio/k-ramel#connect-it-with-reactjs\n",r,"",r,"",r,"",r,"",r,"",r,"")}}},{key:"componentWillReceiveProps",value:function(t){shallowEqual(this.props,t)||this.inject(t)}},{key:"shouldComponentUpdate",value:function(t,e){if(this.first)return!0;var n=this.state.injectedProps;return!(shallowEqual(this.props,t)&&shallowEqual(withoutFunctions(e.injectedProps),withoutFunctions(n)))}},{key:"componentWillUnmount",value:function(){this.store=void 0,this.unsubscribe()}},{key:"render",value:function(){this.first&&(this.first=!1);var t=this.state.injectedProps;return React.createElement(e,_extends({},this.props,t))}}]),r}(),_defineProperty(n,"displayName","inject(".concat(getWrappedDisplayName(e))),_defineProperty(n,"contextTypes",{store:function(){return null}}),r}},provider=function(t){return function(e){var n,r;return r=n=function(n){function r(){return _classCallCheck(this,r),_possibleConstructorReturn(this,_getPrototypeOf(r).apply(this,arguments))}return _inherits(r,Component),_createClass(r,[{key:"getChildContext",value:function(){return{store:t}}},{key:"render",value:function(){return React.createElement(e,this.props)}}]),r}(),_defineProperty(n,"displayName","provider(".concat(getWrappedDisplayName(e),")")),_defineProperty(n,"childContextTypes",{store:function(){return null}}),r}},defaultListeners=[],toActionFactory=function(t){var e="".concat(t?">":"").concat(t||"");return function(t){return"@@krml/LISTENERS>".concat(t).concat(e)}},listen=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:defaultListeners,e=arguments.length>1?arguments[1]:void 0;return function(n){var r,o,i=toActionFactory(e);return o=r=function(e){function r(){return _classCallCheck(this,r),_possibleConstructorReturn(this,_getPrototypeOf(r).apply(this,arguments))}return _inherits(r,Component),_createClass(r,[{key:"componentWillMount",value:function(){var e=this.context.store;e.listeners.add(t),e.dispatch(i("ADDED"))}},{key:"componentWillUnmount",value:function(){var e=this.context.store;e.dispatch(i("REMOVING")),e.listeners.remove(t)}},{key:"render",value:function(){return React.createElement(n,this.props)}}]),r}(),_defineProperty(r,"displayName","listen(".concat(getWrappedDisplayName(n))),_defineProperty(r,"contextTypes",{store:function(){return null}}),o}};export{inject,provider,listen};
