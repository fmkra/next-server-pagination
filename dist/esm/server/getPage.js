const e=async(e,t)=>{var r,l;const n=await t(),a=Number(null!==(r=e.size)&&void 0!==r?r:10),i=Number(null!==(l=e.page)&&void 0!==l?l:1),s=Math.ceil(n/a),u=(Number(i)-1)*a;return{current:i,total:s,firstElement:u,lastElement:u+a-1,size:a}};export{e as getPage};
//# sourceMappingURL=getPage.js.map
