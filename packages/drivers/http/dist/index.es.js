var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},asyncToGenerator=function(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,r){return function n(o,a){try{var i=e[o](a),s=i.value}catch(t){return void r(t)}if(!i.done)return Promise.resolve(s).then(function(t){n("next",t)},function(t){n("throw",t)});t(s)}("next")})}},_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},toConsumableArray=function(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)},_this=void 0,dispatchFactory=function(t){return function(e){return function(r){return function(n,o,a,i){return t.dispatch({type:"@@http/"+e+">"+r+">"+n,payload:o,status:a,fetch:i})}}}},getDriver=function(t){var e={},r=function(r){var n,o=(n=asyncToGenerator(regeneratorRuntime.mark(function n(o){for(var a=arguments.length,i=Array(a>2?a-2:0),s=2;s<a;s++)i[s-2]=arguments[s];var u,c,f,d,h,p,y,l,v,b,m=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return u=m.method,c=void 0===u?"GET":u,f=_extends({},e.headers,m.headers),d=_extends({},e,m,{headers:f}),h=dispatchFactory(t)(r)(c),p=void 0,y=void 0,l=[o,d].concat(toConsumableArray(i)),h("STARTED",void 0,void 0,l),n.prev=8,n.next=11,(v=global||window).fetch.apply(v,toConsumableArray(l));case 11:if(y=n.sent,p=y,!(y.headers&&y.headers.get("Content-Type")&&y.headers.get("Content-Type").includes("json"))){n.next=17;break}return n.next=16,y.json();case 16:p=n.sent;case 17:n.next=23;break;case 19:return n.prev=19,n.t0=n.catch(8),h("FAILED",n.t0,(y||{}).status,l),n.abrupt("return",n.t0);case 23:return b=y.status,h(b>=400||b<200?"FAILED":"ENDED",p,b),n.abrupt("return",p);case 26:case"end":return n.stop()}},n,_this,[[8,19]])})),function(t){return n.apply(this,arguments)});return["GET","POST","HEAD","PUT","DELETE","OPTIONS","CONNECT"].forEach(function(t){o[t.toLowerCase()]=function(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=_extends({},n.headers),i=n;if(r&&["object","array"].includes(void 0===r?"undefined":_typeof(r))){var s=r;r instanceof FormData||(a["Content-Type"]=a["Content-Type"]||"application/json",s=JSON.stringify(r)),i=_extends({},i,{body:s})}return i=_extends({},i,{method:t,headers:a}),o(e,i)}}),o};return r.setCredentials=function(t){e=_extends({},e,{credentials:t})},r.setOptions=function(t){e=_extends({},t,{headers:_extends({},t.headers)})},r.setAuthorization=function(t){var n=_extends({},e.headers,{Authorization:t});return t||delete n.Authorization,r.setOptions(_extends({},e,{headers:n}))},r.clearAuthorization=function(){return r.setAuthorization()},r},http=function(){return{getDriver:getDriver}};export default http;
//# sourceMappingURL=index.es.js.map
