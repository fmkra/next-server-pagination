"use strict";var e=require("react/jsx-runtime"),t=require("../client/context.js"),r=require("./getPage.js");exports.withPagination=function(a,n,s){return async function(i){const c=await r.getPage(i.searchParams,n,s),g=Object.assign(Object.assign({},i),{page:c});return e.jsx(t.ContextProvider,{data:c,children:e.jsx(a,Object.assign({},g))})}};
//# sourceMappingURL=withPagination.js.map
