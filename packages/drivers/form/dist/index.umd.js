!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("k-ramel")):"function"==typeof define&&define.amd?define(["k-ramel"],r):(e=e||self)["@k-ramel/driver-form"]=r(e.kRamel)}(this,function(e){"use strict";function r(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function t(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function n(e){for(var n=1;n<arguments.length;n++){var u=null!=arguments[n]?arguments[n]:{};n%2?t(Object(u),!0).forEach(function(t){r(e,t,u[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(u)):t(Object(u)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(u,r))})}return e}var u=function(e){var r=e.keyName,t=e.keyFields;return function(e){var u=n({},e.payload);return delete u[r],delete u[t],u}},o=function(e){return function(r){return Object.entries(u(e)(r))}};return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.path,i=void 0===a?"form":a,c=t.getState,s=void 0===c?function(e){return e.form}:c,f=t.key,d=void 0===f?"@@form-name":f,l=d,v="@@form";"@@form-name"!==d&&(v=d);var y="".concat(v,"-fields");return{getReducer:function(){return{path:i,reducer:{values:e.types.keyValue({key:l}),errors:e.types.keyValue({key:l})}}},getDriver:function(e){var t=s(e);return Object.assign(function(e){return n({},function(e){var t=e.keyName,u=e.keyFields;return function(e){return function(o){var a=function(a){return function(){var i,c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e[a].add(n({},c,(r(i={},t,o),r(i,u,Object.keys(c)),i)))}},i=function(a){return function(){var i,c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e[a].addOrUpdate(n({},c,(r(i={},t,o),r(i,u,Object.keys(c)),i)))}};return{update:function(n){return function(a){var i;return e.values.update((r(i={},t,o),r(i,u,[n]),r(i,n,a),i))}},set:a("values"),addOrUpdate:i("values"),setErrors:a("errors"),addOrUpdateErrors:i("errors"),resetErrors:function(){return e.errors.remove(o)},reset:function(){e.values.remove(o),e.errors.remove(o)}}}}}({keyName:l,keyFields:y})(t)(e),{},(u={keyName:l,keyFields:y},function(e){return function(r){var t=function(t){return function(o){var a=e[t].get(r);if(!a)return o?"":{};if(!o&&a){var i=n({},a);return Object.values(u).forEach(function(e){delete i[e]}),i}var c=a[o];return null==c?"":c}};return{exists:function(){return!!e.values.get(r)},get:t("values"),getErrors:t("errors")}}})(t)(e));var u},function(e){var t=e.keyName,u=e.keyFields;return function(e){var o=function(o){return function(a){return e[o].add(a.map(function(e){var o,a=e.name,i=e.values;return n({},i,(r(o={},t,a),r(o,u,Object.keys(i)),o))}))}},a=function(o){return function(a){return e[o].addOrUpdate(a.map(function(e){var o,a=e.name,i=e.values;return n({},i,(r(o={},t,a),r(o,u,Object.keys(i)),o))}))}};return{set:o("values"),addOrUpdate:a("values"),setErrors:o("errors"),addOrUpdateErrors:a("errors"),resetErrors:e.errors.remove,reset:function(r){e.values.remove(r),e.errors.remove(r)}}}}({keyName:l,keyFields:y})(t),function(e){return{find:function(r){return e.values.getKeys().filter(function(e){return e.match(r)})}}}(t),function(e){return{getUpdatedFieldNames:(r=e,t=r.keyFields,function(e){return e.payload[t]}),getUpdatedValues:u(e),getUpdatedEntries:o(e)};var r,t}({keyName:l,keyFields:y}))}}}});
