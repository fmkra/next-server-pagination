"use strict";exports.getPage=async(e,t)=>{var r,a;const l=await t(),n=Number(null!==(r=e.per_page)&&void 0!==r?r:10),s=Number(null!==(a=e.page)&&void 0!==a?a:1),u=Math.ceil(l/n),i=(Number(s)-1)*n;return{current:s,total:u,firstElement:i,lastElement:i+n-1,elementsPerPage:n}};
//# sourceMappingURL=getPage.js.map
