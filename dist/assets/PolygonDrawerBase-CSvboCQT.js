import{_ as o,H as d}from"./index-CfC3QUvt.js";const n=5;class c{async draw(e){const{particle:t,radius:a}=e,s=this.getCenter(t,a),r=this.getSidesData(t,a),{drawPolygon:i}=await o(()=>import("./Utils-CkUXDPWY.js"),__vite__mapDeps([0,1,2]));i(e,s,r)}getSidesCount(e){const t=e.shapeData;return Math.round(d((t==null?void 0:t.sides)??n))}}export{c as P};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Utils-CkUXDPWY.js","assets/index-CfC3QUvt.js","assets/index-VMaD5E-3.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
