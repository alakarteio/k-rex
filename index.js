!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("k-redux-factory"),require("redux"),require("lodash")):"function"==typeof define&&define.amd?define(["exports","k-redux-factory","redux","lodash"],t):t(e["k-simple-state"]={},e["k-redux-factory"],e.Redux,e._)}(this,function(exports,factory,redux,lodash){"use strict";factory=factory&&factory.hasOwnProperty("default")?factory.default:factory;var asyncToGenerator=function(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){return function n(o,a){try{var u=t[o](a),i=u.value}catch(e){return void r(e)}if(!u.done)return Promise.resolve(i).then(function(e){n("next",e)},function(e){n("throw",e)});e(i)}("next")})}},defineProperty=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},slicedToArray=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var u,i=e[Symbol.iterator]();!(n=(u=i.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{!n&&i.return&&i.return()}finally{if(o)throw a}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),toConsumableArray=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},reduxFactory=function(root){var subtree=function subtree(name,path){if(void 0===name)return Object.keys(root).map(function(e){return defineProperty({},e,subtree(e,""))}).reduce(function(e,t){return _extends({},e,t)},{});var nextPath=(path?path+".":"")+name,fullpath="root."+nextPath,options=eval(fullpath),type=options.type;return type?factory(_extends({name:name,path:path,prefix:path&&path.replace(/\./g,"_")||""},options)):"function"==typeof options?options:Object.keys(options).map(function(e){return defineProperty({},e,subtree(e,nextPath))}).reduce(function(e,t){return _extends({},e,t)},{})};return subtree()},withParams=["get","getBy","hasKey"],keysConfig={keyValue:[["set","add","update","addOrUpdate","replace","remove","orderBy","reset"],["get","getBy","getKeys","getAsArray","getLength","isInitialized","getState","hasKey"]],simpleObject:[["set","update","reset"],["get","isInitialized"]]},toContext=function(root,store){var subcontext=function subcontext(name,path){if(void 0===name)return Object.keys(root).map(function(e){return defineProperty({},e,subcontext(e,""))}).reduce(function(e,t){return _extends({},e,t)},{});var nextPath=(path?path+".":"")+name,fullpath="root."+nextPath,reducer=eval(fullpath);if(void 0!==reducer.krfType){var keys=keysConfig[reducer.krfType],_keys=slicedToArray(keys,2),actions=_keys[0],selectors=_keys[1],actionsObject=actions.map(function(e){var t=reducer[e];return defineProperty({},e,function(){return store.dispatch(t.apply(void 0,arguments))})}).reduce(function(e,t){return _extends({},e,t)},{}),selectorsObject=selectors.map(function(e){var t=reducer[e];return defineProperty({},e,function(){return withParams.includes(e)?t.apply(void 0,arguments)(store.getState()):t(store.getState())})}).reduce(function(e,t){return _extends({},e,t)},{});return Object.assign(reducer,actionsObject,selectorsObject)}return Object.keys(reducer).map(function(e){return defineProperty({},e,subcontext(e,nextPath))}).reduce(function(e,t){return _extends({},e,t)},{})};return subcontext()},combine=function(e){return function e(t){var r=Object.keys(t).map(function(r){var n=t[r];return defineProperty({},r,"function"==typeof n?n:e(n))}).reduce(function(e,t){return _extends({},e,t)},{});return redux.combineReducers(r)}(e)},getReduxDevToolsEnhancer=function(e){return window.devToolsExtension({name:e})},addDevTools=function(e){var t=e.name,r=e.devtools,n=e.enhancer;if(!r||!window||!window.devToolsExtension)return n;var o=getReduxDevToolsEnhancer(t);return n?redux.compose(n,o):o},listenFactory=function(e,t){var r=void 0,n=void 0;return{setStore:function(e){r=e,n=Object.keys(t).reduce(function(r,n){return _extends({},r,defineProperty({},n,t[n](e)))},{})},middleware:function(){return function(t){return function(o){var a=t(o);return e.forEach(function(e){e(o,r,n)}),a}}}}},enhanceRedux=function(e){var t=e.listeners,r=e.drivers,n=e.enhancer;if(n=addDevTools(e),t){var o=listenFactory(t,r),a=redux.applyMiddleware(o.middleware);return n?{enhancer:redux.compose(a,n),listen:o}:{enhancer:a,listen:o}}return{enhancer:n}},_this=void 0,dispatchFactory=function(e){return function(t){return function(r){return function(n,o,a){return e.dispatch({type:"@@http/"+t+">"+r+">"+n,payload:o,status:a})}}}},http=function(e){return function(t){return r=asyncToGenerator(regeneratorRuntime.mark(function r(n){for(var o=arguments.length,a=Array(o>2?o-2:0),u=2;u<o;u++)a[u-2]=arguments[u];var i,c,s,d,f,p,l,y,h,v=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return i=v.method,c=void 0===i?"GET":i,s=v.headers,d=(void 0===s?{}:s)["Content-Type"]||"",f=dispatchFactory(e)(t)(c),p=void 0,l=void 0,f("STARTED"),r.prev=6,r.next=9,(y=global||window).fetch.apply(y,[n,v].concat(toConsumableArray(a)));case 9:if(l=r.sent,p=l,!d.includes("json")){r.next=15;break}return r.next=14,l.json();case 14:p=r.sent;case 15:r.next=21;break;case 17:return r.prev=17,r.t0=r.catch(6),f("FAILED",r.t0,(l||{}).status),r.abrupt("return",r.t0);case 21:return h=l.status,f(h>=400||h<200?"FAILED":"ENDED",p,h),r.abrupt("return",p);case 24:case"end":return r.stop()}},r,_this,[[6,17]])})),function(e){return r.apply(this,arguments)};var r}},drivers={http:http},defaultOptions={hideRedux:!0,enhancer:void 0,init:{},listeners:void 0,devtools:!0,name:"store",drivers:drivers},createStore=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:defaultOptions,r=_extends({},defaultOptions,t,{drivers:_extends({},defaultOptions.drivers,t.drivers)}),n=r.init,o=r.hideRedux,a=reduxFactory(e),u=enhanceRedux(r),i=u.enhancer,c=u.listen,s=redux.createStore(combine(a),n,i);o&&(a=toContext(a,s));var d=_extends({},a,s),f=d.dispatch;return d.dispatch=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return"string"==typeof e?f({type:e}):f.apply(void 0,[e].concat(r))},c&&c.setStore(d),d},keyValue=function(e){return _extends({},e,{type:"keyValue"})},simpleObject=function(e){return _extends({},e,{type:"simpleObject"})},isMatching=function(e,t){return function(r){return lodash.isString(r)&&e.type===r||lodash.isFunction(r)&&r(e,t)||lodash.isRegExp(r)&&e.type.match(r)}},_when=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return function(r,n,o){return!!t.map(isMatching(r,n)).reduce(function(e,t){return e&&t},!0)&&e(r,n,o)}}},reaction=function(e){return Object.assign(e,{when:function(){return _when.apply(void 0,arguments)(e)}})},reactions=function(e){return Object.keys(e).reduce(function(t,r){return _extends({},t,defineProperty({},r,reaction(e[r])))},{})};exports.applyMiddleware=redux.applyMiddleware,exports.compose=redux.compose,exports.createStore=createStore,exports.keyValue=keyValue,exports.simpleObject=simpleObject,exports.when=_when,exports.reaction=reaction,exports.reactions=reactions,Object.defineProperty(exports,"__esModule",{value:!0})});
//# sourceMappingURL=index.js.map
