import{jsx as t}from"react/jsx-runtime";import{ContextProvider as r}from"../client/context.js";import{getPage as e}from"./getPage.js";function n(n,a,s){return async function(c){const i=await e(c.searchParams,a,s),o=Object.assign(Object.assign({},c),{page:i});return t(r,{data:i,children:t(n,Object.assign({},o))})}}export{n as withPagination};
//# sourceMappingURL=withPagination.js.map
