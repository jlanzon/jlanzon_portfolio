import{E as m,V as q,n as _,m as C,Z as S,H as R,T as D}from"./index-CfC3QUvt.js";import{f as L}from"./CanvasUtils-CBGl4Zj8.js";function W(l,o,n,i){l.beginPath(),l.moveTo(o.x,o.y),l.lineTo(n.x,n.y),l.lineTo(i.x,i.y),l.closePath()}function O(l){let o=!1;const{begin:n,end:i,maxDistance:e,context:t,canvasSize:s,width:r,backgroundMask:y,colorLine:u,opacity:h,links:d}=l;if(m(n,i)<=e)L(t,n,i),o=!0;else if(d.warp){let a,g;const x={x:i.x-s.width,y:i.y},p=q(n,x);if(p.distance<=e){const f=n.y-p.dy/p.dx*n.x;a={x:0,y:f},g={x:s.width,y:f}}else{const f={x:i.x,y:i.y-s.height},k=q(n,f);if(k.distance<=e){const w=-(n.y-k.dy/k.dx*n.x)/(k.dy/k.dx);a={x:w,y:0},g={x:w,y:s.height}}else{const b={x:i.x-s.width,y:i.y-s.height},w=q(n,b);if(w.distance<=e){const F=n.y-w.dy/w.dx*n.x;a={x:-F/(w.dy/w.dx),y:F},g={x:a.x+s.width,y:a.y+s.height}}}}a&&g&&(L(t,n,a),L(t,i,g),o=!0)}if(!o)return;t.lineWidth=r,y.enable&&(t.globalCompositeOperation=y.composite),t.strokeStyle=_(u,h);const{shadow:c}=d;if(c.enable){const a=C(c.color);a&&(t.shadowBlur=c.blur,t.shadowColor=_(a))}t.stroke()}function z(l){const{context:o,pos1:n,pos2:i,pos3:e,backgroundMask:t,colorTriangle:s,opacityTriangle:r}=l;W(o,n,i,e),t.enable&&(o.globalCompositeOperation=t.composite),o.fillStyle=_(s,r),o.fill()}function E(l){return l.sort((o,n)=>o-n),l.join("_")}function M(l,o){const n=E(l.map(e=>e.id));let i=o.get(n);return i===void 0&&(i=S(),o.set(n,i)),i}const P=0,T=0,v=0,I=.5,V=1;class K{constructor(o){this.container=o,this._drawLinkLine=(n,i)=>{const e=n.options.links;if(!(e!=null&&e.enable))return;const t=this.container,s=t.actualOptions,r=i.destination,y=n.getPosition(),u=r.getPosition();let h=i.opacity;t.canvas.draw(d=>{var f;let c;const a=(f=n.options.twinkle)==null?void 0:f.lines;if(a!=null&&a.enable){const k=a.frequency,b=C(a.color);S()<k&&b&&(c=b,h=R(a.opacity))}if(!c){const k=e.id!==void 0?t.particles.linksColors.get(e.id):t.particles.linksColor;c=D(n,r,k)}if(!c)return;const g=n.retina.linksWidth??T,x=n.retina.linksDistance??v,{backgroundMask:p}=s;O({context:d,width:g,begin:y,end:u,maxDistance:x,canvasSize:t.canvas.size,links:e,backgroundMask:p,colorLine:c,opacity:h})})},this._drawLinkTriangle=(n,i,e)=>{const t=n.options.links;if(!(t!=null&&t.enable))return;const s=t.triangles;if(!s.enable)return;const r=this.container,y=r.actualOptions,u=i.destination,h=e.destination,d=s.opacity??(i.opacity+e.opacity)*I;d<=P||r.canvas.draw(c=>{const a=n.getPosition(),g=u.getPosition(),x=h.getPosition(),p=n.retina.linksDistance??v;if(m(a,g)>p||m(x,g)>p||m(x,a)>p)return;let f=C(s.color);if(!f){const k=t.id!==void 0?r.particles.linksColors.get(t.id):r.particles.linksColor;f=D(n,u,k)}f&&z({context:c,pos1:a,pos2:g,pos3:x,backgroundMask:y.backgroundMask,colorTriangle:f,opacityTriangle:d})})},this._drawTriangles=(n,i,e,t)=>{var y,u,h;const s=e.destination;if(!((y=n.links)!=null&&y.triangles.enable&&((u=s.options.links)!=null&&u.triangles.enable)))return;const r=(h=s.links)==null?void 0:h.filter(d=>{const c=this._getLinkFrequency(s,d.destination);return s.options.links&&c<=s.options.links.frequency&&t.findIndex(g=>g.destination===d.destination)>=0});if(r!=null&&r.length)for(const d of r){const c=d.destination;this._getTriangleFrequency(i,s,c)>n.links.triangles.frequency||this._drawLinkTriangle(i,e,d)}},this._getLinkFrequency=(n,i)=>M([n,i],this._freqs.links),this._getTriangleFrequency=(n,i,e)=>M([n,i,e],this._freqs.triangles),this._freqs={links:new Map,triangles:new Map}}async drawParticle(o,n){const{links:i,options:e}=n;if(!(i!=null&&i.length))return;const t=i.filter(s=>e.links&&(e.links.frequency>=V||this._getLinkFrequency(n,s.destination)<=e.links.frequency));for(const s of t)this._drawTriangles(e,n,s,t),s.opacity>P&&(n.retina.linksWidth??T)>T&&this._drawLinkLine(n,s);await Promise.resolve()}async init(){this._freqs.links=new Map,this._freqs.triangles=new Map,await Promise.resolve()}particleCreated(o){if(o.links=[],!o.options.links)return;const n=this.container.retina.pixelRatio,{retina:i}=o,{distance:e,width:t}=o.options.links;i.linksDistance=e*n,i.linksWidth=t*n}particleDestroyed(o){o.links=[]}}export{K as LinkInstance};
