function d(t){const{context:a,particle:i,radius:o,opacity:r}=t,l=i.emojiData,p=2,e=o*p,c=a.globalAlpha;l&&(a.globalAlpha=r,a.drawImage(l,-o,-o,e,e),a.globalAlpha=c)}export{d as drawEmoji};
