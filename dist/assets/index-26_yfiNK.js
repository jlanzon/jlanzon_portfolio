import{_ as n}from"./index-CfC3QUvt.js";async function i(a,t=!0){await a.addInteractor("externalPause",async e=>{const{Pauser:r}=await n(()=>import("./Pauser-DbdKZWrS.js"),__vite__mapDeps([0,1]));return new r(e)},t)}export{i as loadExternalPauseInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Pauser-DbdKZWrS.js","assets/ExternalInteractorBase-CIi3zRdK.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
