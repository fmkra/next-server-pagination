const e=async(e,t)=>{var r,l;const n=await t(),a=Number(null!==(r=e.size)&&void 0!==r?r:10),s=Number(null!==(l=e.page)&&void 0!==l?l:1),u=Math.ceil(n/a),i=(Number(s)-1)*a;return{current:s,total:u,firstElement:i,lastElement:i+a-1,elementsPerPage:a}};export{e as getPage};
//# sourceMappingURL=getPage.js.map
