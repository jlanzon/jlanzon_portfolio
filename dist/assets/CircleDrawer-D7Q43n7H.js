import{_ as t,j as m,$ as n}from"./index-CfC3QUvt.js";const o=12,c=360,s=0;class _{async draw(r){const{drawCircle:a}=await t(()=>import("./Utils-BvDvhTqc.js"),__vite__mapDeps([]));a(r)}getSidesCount(){return o}async particleInit(r,a){const i=a.shapeData,e=(i==null?void 0:i.angle)??{max:c,min:s};a.circleRange=m(e)?{min:n(e.min),max:n(e.max)}:{min:s,max:n(e)},await Promise.resolve()}}export{_ as CircleDrawer};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
