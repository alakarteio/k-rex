import{routerForBrowser,push,replace,go,goBack,goForward,block,unblock,initializeCurrentLocation}from"redux-little-router";import{compose,applyMiddleware}from"redux";var _getParentResultParam=function r(e,t){if(e)return e[t]?e[t]:r(e.parent,t)},_isParentResultParam=function r(e,t,n){return!!e&&(e[t]===n||r(e.parent,t,n))},isRouterImpl=function(r){var e=r.reducer,t=r.middleware,n=r.enhancer;return e&&n&&t},getDriver=function(r){return function(e){var t=e.dispatch,n=e.getState,u=function(){return r(n())},o=function(){return u().result};return{push:function(r){return t(push(r))},replace:function(r){return t(replace(r))},go:function(r){return t(go(r))},goBack:function(){return t(goBack())},goForward:function(){return t(goForward())},block:function(r){return t(block(r))},unblock:function(){return t(unblock())},get:u,getRouteParam:function(r){return u().params&&u().params[r]},getQueryParam:function(r){return u().query&&u().query[r]},getResultParam:function(r){return o()&&o()[r]},getParentResultParam:function(r){return _getParentResultParam(o(),r)},isRoute:function(r){return u().route===r},isParentResultParam:function(r,e){return _isParentResultParam(o(),r,e)}}}},init=function(r){return function(e){var t=e.getState,n=e.dispatch,u=r(t());u&&n(initializeCurrentLocation(u))}},reduxLittleRouter=function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(r){return r.router},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"router",n=isRouterImpl(r)?r:routerForBrowser({routes:r}),u=n.reducer,o=n.middleware,i=n.enhancer;return{getDriver:getDriver(e),getReducer:function(){return{reducer:u,path:t}},getEnhancer:function(){return compose(i,applyMiddleware(o))},init:init(e)}};export default reduxLittleRouter;
//# sourceMappingURL=index.es.js.map
