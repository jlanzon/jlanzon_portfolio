import{_ as i}from"./index-CfC3QUvt.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-BAnqJdee.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-BAnqJdee.js","assets/index-CfC3QUvt.js","assets/index-VMaD5E-3.css","assets/ValueWithRandom-RnF4-S2J.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
