function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function asyncGeneratorStep(e,t,r,n,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise(function(n,o){var a=e.apply(t,r);function i(e){asyncGeneratorStep(a,n,o,i,c,"next",e)}function c(e){asyncGeneratorStep(a,n,o,i,c,"throw",e)}i(void 0)})}}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){_defineProperty(e,t,r[t])})}return e}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _iterableToArrayLimit(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var fromEntries=function(e){return Object.assign.apply(Object,[{}].concat(_toConsumableArray(Array.from(e,function(e){var t=_slicedToArray(e,2);return _defineProperty({},t[0],t[1])}))))},getFilename=function(e){return/filename="(.*)"/g.exec(e)[1]},dispatchFactory=function(e){return function(t,r){return function(n){return function(o,a,i,c,u){return e.dispatch({type:"@@http/".concat(t,">").concat(n,">").concat(o),payload:a,status:i,headers:c,fetch:u,context:r})}}}},getDriver=function(e){var t={},r=function(r,n){var o=function(){var o=_asyncToGenerator(regeneratorRuntime.mark(function o(a){var i,c,u,s,f,l,y,p,d,b,h,v,m,_,S,A=arguments;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:for(i=A.length>1&&void 0!==A[1]?A[1]:{},c=i.method,u=void 0===c?"GET":c,s=_objectSpread({},t.headers,i.headers),f=_objectSpread({},t,i,{headers:s}),l=dispatchFactory(e)(r,n)(u),b=A.length,h=new Array(b>2?b-2:0),v=2;v<b;v++)h[v-2]=A[v];return m=[a,f].concat(h),l("STARTED",void 0,void 0,void 0,m),o.prev=8,o.next=11,(_=global||window).fetch.apply(_,_toConsumableArray(m));case 11:if(p=o.sent,y=p,d=fromEntries(p.headers.entries()),!p.headers.has("Content-Type")||!p.headers.get("Content-Type").includes("json")){o.next=18;break}return o.next=17,p.json();case 17:y=o.sent;case 18:if(!p.headers.has("Content-Disposition")){o.next=24;break}return o.next=21,p.blob();case 21:o.t0=o.sent,o.t1=getFilename(p.headers.get("Content-Disposition")),y={blob:o.t0,filename:o.t1};case 24:o.next=30;break;case 26:return o.prev=26,o.t2=o.catch(8),l("FAILED",o.t2,(p||{}).status,d,m),o.abrupt("return",o.t2);case 30:return S=p.status,l(S>=400||S<200?"FAILED":"ENDED",y,S,d),o.abrupt("return",y);case 33:case"end":return o.stop()}},o,this,[[8,26]])}));return function(e){return o.apply(this,arguments)}}();return["GET","POST","HEAD","PATCH","PUT","DELETE","OPTIONS","CONNECT"].forEach(function(e){o[e.toLowerCase()]=function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=_objectSpread({},n.headers),i=n;if(r&&["object","array"].includes(_typeof(r))){var c=r;r instanceof FormData||(a["Content-Type"]=a["Content-Type"]||"application/json",c=JSON.stringify(r)),i=_objectSpread({},i,{body:c})}return i=_objectSpread({},i,{method:e,headers:a}),o(t,i)}}),o};return r.setCredentials=function(e){t=_objectSpread({},t,{credentials:e})},r.setOptions=function(e){t=_objectSpread({},e,{headers:_objectSpread({},e.headers)})},r.setAuthorization=function(e){var n=_objectSpread({},t.headers,{Authorization:e});return e||delete n.Authorization,r.setOptions(_objectSpread({},t,{headers:n}))},r.clearAuthorization=function(){return r.setAuthorization()},r},http=function(){return{getDriver:getDriver}};export default http;
