import{Connect as b}from"./index-D5g5w7bj.js";import{f as x}from"./CanvasUtils-CBGl4Zj8.js";import{P as C,c as g,L as R,n as S,J as O}from"./index-CfC3QUvt.js";import{E as w}from"./ExternalInteractorBase-CIi3zRdK.js";const y=0,v=1,k=0;function D(i,t,n,o){const e=Math.floor(n.getRadius()/t.getRadius()),s=t.getFillColor(),a=n.getFillColor();if(!s||!a)return;const d=t.getPosition(),r=n.getPosition(),l=C(s,a,t.getRadius(),n.getRadius()),c=i.createLinearGradient(d.x,d.y,r.x,r.y);return c.addColorStop(y,g(s,o)),c.addColorStop(R(e,y,v),S(l,o)),c.addColorStop(v,g(a,o)),c}function E(i,t,n,o,e){x(i,o,e),i.lineWidth=t,i.strokeStyle=n,i.stroke()}function L(i,t,n,o){const e=i.actualOptions,s=e.interactivity.modes.connect;if(s)return D(t,n,o,s.links.opacity)}function F(i,t,n){i.canvas.draw(o=>{const e=L(i,o,t,n);if(!e)return;const s=t.getPosition(),a=n.getPosition();E(o,t.retina.linksWidth??k,e,s,a)})}const H="connect",M=0;class B extends w{constructor(t){super(t)}clear(){}init(){const t=this.container,n=t.actualOptions.interactivity.modes.connect;n&&(t.retina.connectModeDistance=n.distance*t.retina.pixelRatio,t.retina.connectModeRadius=n.radius*t.retina.pixelRatio)}async interact(){const t=this.container;if(t.actualOptions.interactivity.events.onHover.enable&&t.interactivity.status==="pointermove"){const o=t.interactivity.mouse.position,{connectModeDistance:e,connectModeRadius:s}=t.retina;if(!e||e<M||!s||s<M||!o)return;const a=Math.abs(s),d=t.particles.quadTree.queryCircle(o,a,r=>this.isEnabled(r));d.forEach((r,l)=>{const c=r.getPosition(),p=1;for(const u of d.slice(l+p)){const f=u.getPosition(),m=Math.abs(e),h=Math.abs(c.x-f.x),P=Math.abs(c.y-f.y);h<m&&P<m&&F(t,r,u)}})}await Promise.resolve()}isEnabled(t){const n=this.container,o=n.interactivity.mouse,e=((t==null?void 0:t.interactivity)??n.actualOptions.interactivity).events;return e.onHover.enable&&o.position?O(H,e.onHover.mode):!1}loadModeOptions(t,...n){t.connect||(t.connect=new b);for(const o of n)t.connect.load(o==null?void 0:o.connect)}reset(){}}export{B as Connector};
