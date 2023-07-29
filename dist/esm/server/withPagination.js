import{jsx as t}from"react/jsx-runtime";import{ContextProvider as r}from"../client/context.js";import{getPage as e}from"./getPage.js";function n(n,a){return async function(s){const c=await e(s.searchParams,a),i=Object.assign(Object.assign({},s),{page:c});return t(r,{data:c,children:t(n,Object.assign({},i))})}}export{n as withPagination};
//# sourceMappingURL=withPagination.js.map
