import{types}from"k-ramel";function _defineProperty(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){_defineProperty(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var actions=function(e){var r=e.keyName,t=e.keyFields;return function(e){return function(n){var o=function(o){return function(){var u,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e[o].add(_objectSpread2({},a,(_defineProperty(u={},r,n),_defineProperty(u,t,Object.keys(a)),u)))}},u=function(o){return function(){var u,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e[o].addOrUpdate(_objectSpread2({},a,(_defineProperty(u={},r,n),_defineProperty(u,t,Object.keys(a)),u)))}};return{update:function(o){return function(u){var a;return e.values.update((_defineProperty(a={},r,n),_defineProperty(a,t,[o]),_defineProperty(a,o,u),a))}},set:o("values"),addOrUpdate:u("values"),setErrors:o("errors"),addOrUpdateErrors:u("errors"),resetErrors:function(){return e.errors.remove(n)},reset:function(){e.values.remove(n),e.errors.remove(n)}}}}},bulkActions=function(e){var r=e.keyName,t=e.keyFields;return function(e){var n=function(n){return function(o){return e[n].add(o.map(function(e){var n,o=e.name,u=e.values;return _objectSpread2({},u,(_defineProperty(n={},r,o),_defineProperty(n,t,Object.keys(u)),n))}))}},o=function(n){return function(o){return e[n].addOrUpdate(o.map(function(e){var n,o=e.name,u=e.values;return _objectSpread2({},u,(_defineProperty(n={},r,o),_defineProperty(n,t,Object.keys(u)),n))}))}};return{set:n("values"),addOrUpdate:o("values"),setErrors:n("errors"),addOrUpdateErrors:o("errors"),resetErrors:e.errors.remove,reset:function(r){e.values.remove(r),e.errors.remove(r)}}}},selectors=function(e){return function(r){return function(t){var n=function(n){return function(o){var u=r[n].get(t);if(!u)return o?"":{};if(!o&&u){var a=_objectSpread2({},u);return Object.values(e).forEach(function(e){delete a[e]}),a}var i=u[o];return null==i?"":i}};return{exists:function(){return!!r.values.get(t)},get:n("values"),getErrors:n("errors")}}}},utils=function(e){return{find:function(r){return e.values.getKeys().filter(function(e){return e.match(r)})}}},getUpdatedValues=function(e){var r=e.keyName,t=e.keyFields;return function(e){var n=_objectSpread2({},e.payload);return delete n[r],delete n[t],n}},getUpdatedFieldNames=function(e){var r=e.keyFields;return function(e){return e.payload[r]}},getUpdatedEntries=function(e){return function(r){return Object.entries(getUpdatedValues(e)(r))}},helpers=function(e){return{getUpdatedFieldNames:getUpdatedFieldNames(e),getUpdatedValues:getUpdatedValues(e),getUpdatedEntries:getUpdatedEntries(e)}},form=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.path,t=void 0===r?"form":r,n=e.getState,o=void 0===n?function(e){return e.form}:n,u=e.key,a=void 0===u?"@@form-name":u,i=a,s="@@form";"@@form-name"!==a&&(s=a);var d="".concat(s,"-fields");return{getReducer:function(){return{path:t,reducer:{values:types.keyValue({key:i}),errors:types.keyValue({key:i})}}},getDriver:function(e){var r=o(e);return Object.assign(function(e){return _objectSpread2({},actions({keyName:i,keyFields:d})(r)(e),{},selectors({keyName:i,keyFields:d})(r)(e))},bulkActions({keyName:i,keyFields:d})(r),utils(r),helpers({keyName:i,keyFields:d}))}}};export default form;
