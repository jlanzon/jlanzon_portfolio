import{C as c,R as o}from"./Ranges-Cr7P48sb.js";import"./index-CfC3QUvt.js";const r=2;class p extends c{constructor(s,t,i,e){super(s,t,i),this.canvasSize=e,this.canvasSize={...e}}contains(s){const{width:t,height:i}=this.canvasSize,{x:e,y:n}=s;return super.contains(s)||super.contains({x:e-t,y:n})||super.contains({x:e-t,y:n-i})||super.contains({x:e,y:n-i})}intersects(s){if(super.intersects(s))return!0;const t=s,i=s,e={x:s.position.x-this.canvasSize.width,y:s.position.y-this.canvasSize.height};if(i.radius!==void 0){const n=new c(e.x,e.y,i.radius*r);return super.intersects(n)}else if(t.size!==void 0){const n=new o(e.x,e.y,t.size.width*r,t.size.height*r);return super.intersects(n)}return!1}}export{p as CircleWarp};
