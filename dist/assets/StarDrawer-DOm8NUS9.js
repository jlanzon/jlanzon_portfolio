import{_ as r,H as s}from"./index-CfC3QUvt.js";const n=2,o=5;class c{async draw(t){const{drawStar:a}=await r(()=>import("./Utils-BCAo-Dnz.js"),__vite__mapDeps([]));a(t)}getSidesCount(t){const a=t.shapeData;return Math.round(s((a==null?void 0:a.sides)??o))}async particleInit(t,a){const e=a.shapeData;a.starInset=s((e==null?void 0:e.inset)??n),await Promise.resolve()}}export{c as StarDrawer};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
