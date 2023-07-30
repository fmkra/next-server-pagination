"use strict";exports.getPage=async(e,t)=>{var r,a;const l=await t(),s=Number(null!==(r=e.size)&&void 0!==r?r:10),i=Number(null!==(a=e.page)&&void 0!==a?a:1),n=Math.ceil(l/s),u=(Number(i)-1)*s;return{current:i,total:n,firstElement:u,lastElement:u+s-1,size:s}};
//# sourceMappingURL=getPage.js.map
