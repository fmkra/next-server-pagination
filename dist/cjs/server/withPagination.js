"use strict";var e=require("react/jsx-runtime"),t=require("../client/context.js"),r=require("./getPage.js");exports.withPagination=function(a,n){return async function(s){const i=await r.getPage(s.searchParams,n),c=Object.assign(Object.assign({},s),{page:i});return e.jsx(t.ContextProvider,{data:i,children:e.jsx(a,Object.assign({},c))})}};
//# sourceMappingURL=withPagination.js.map
