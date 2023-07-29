const e=async(e,t)=>{var r,a;const l=await t(),n=Number(null!==(r=e.per_page)&&void 0!==r?r:10),u=Number(null!==(a=e.page)&&void 0!==a?a:1),m=Math.ceil(l/n),o=(Number(u)-1)*n;return{current:u,total:m,firstElement:o,lastElement:o+n-1,elementsPerPage:n}};export{e as getPage};
//# sourceMappingURL=getPage.js.map
