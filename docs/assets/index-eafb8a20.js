(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))f(u);new MutationObserver(u=>{for(const p of u)if(p.type==="childList")for(const y of p.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&f(y)}).observe(document,{childList:!0,subtree:!0});function m(u){const p={};return u.integrity&&(p.integrity=u.integrity),u.referrerPolicy&&(p.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?p.credentials="include":u.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function f(u){if(u.ep)return;u.ep=!0;const p=m(u);fetch(u.href,p)}})();if(!O)var O={map:function(s,a){var m={};return a?s.map(function(f,u){return m.index=u,a.call(m,f)}):s.slice()},naturalOrder:function(s,a){return s<a?-1:s>a?1:0},sum:function(s,a){var m={};return s.reduce(a?function(f,u,p){return m.index=p,f+a.call(m,u)}:function(f,u){return f+u},0)},max:function(s,a){return Math.max.apply(null,a?O.map(s,a):s)}};var X=function(){var s=5,a=8-s,m=1e3;function f(e,t,d){return(e<<2*s)+(t<<s)+d}function u(e){var t=[],d=!1;function h(){t.sort(e),d=!0}return{push:function(c){t.push(c),d=!1},peek:function(c){return d||h(),c===void 0&&(c=t.length-1),t[c]},pop:function(){return d||h(),t.pop()},size:function(){return t.length},map:function(c){return t.map(c)},debug:function(){return d||h(),t}}}function p(e,t,d,h,c,o,n){var r=this;r.r1=e,r.r2=t,r.g1=d,r.g2=h,r.b1=c,r.b2=o,r.histo=n}function y(){this.vboxes=new u(function(e,t){return O.naturalOrder(e.vbox.count()*e.vbox.volume(),t.vbox.count()*t.vbox.volume())})}function $(e,t){if(t.count()){var d=t.r2-t.r1+1,h=t.g2-t.g1+1,c=O.max([d,h,t.b2-t.b1+1]);if(t.count()==1)return[t.copy()];var o,n,r,l,g=0,v=[],b=[];if(c==d)for(o=t.r1;o<=t.r2;o++){for(l=0,n=t.g1;n<=t.g2;n++)for(r=t.b1;r<=t.b2;r++)l+=e[f(o,n,r)]||0;v[o]=g+=l}else if(c==h)for(o=t.g1;o<=t.g2;o++){for(l=0,n=t.r1;n<=t.r2;n++)for(r=t.b1;r<=t.b2;r++)l+=e[f(n,o,r)]||0;v[o]=g+=l}else for(o=t.b1;o<=t.b2;o++){for(l=0,n=t.r1;n<=t.r2;n++)for(r=t.g1;r<=t.g2;r++)l+=e[f(n,r,o)]||0;v[o]=g+=l}return v.forEach(function(w,L){b[L]=g-w}),function(w){var L,x,P,_,E,I=w+"1",C=w+"2",q=0;for(o=t[I];o<=t[C];o++)if(v[o]>g/2){for(P=t.copy(),_=t.copy(),E=(L=o-t[I])<=(x=t[C]-o)?Math.min(t[C]-1,~~(o+x/2)):Math.max(t[I],~~(o-1-L/2));!v[E];)E++;for(q=b[E];!q&&v[E-1];)q=b[--E];return P[C]=E,_[I]=P[C]+1,[P,_]}}(c==d?"r":c==h?"g":"b")}}return p.prototype={volume:function(e){var t=this;return t._volume&&!e||(t._volume=(t.r2-t.r1+1)*(t.g2-t.g1+1)*(t.b2-t.b1+1)),t._volume},count:function(e){var t=this,d=t.histo;if(!t._count_set||e){var h,c,o,n=0;for(h=t.r1;h<=t.r2;h++)for(c=t.g1;c<=t.g2;c++)for(o=t.b1;o<=t.b2;o++)n+=d[f(h,c,o)]||0;t._count=n,t._count_set=!0}return t._count},copy:function(){var e=this;return new p(e.r1,e.r2,e.g1,e.g2,e.b1,e.b2,e.histo)},avg:function(e){var t=this,d=t.histo;if(!t._avg||e){var h,c,o,n,r=0,l=1<<8-s,g=0,v=0,b=0;for(c=t.r1;c<=t.r2;c++)for(o=t.g1;o<=t.g2;o++)for(n=t.b1;n<=t.b2;n++)r+=h=d[f(c,o,n)]||0,g+=h*(c+.5)*l,v+=h*(o+.5)*l,b+=h*(n+.5)*l;t._avg=r?[~~(g/r),~~(v/r),~~(b/r)]:[~~(l*(t.r1+t.r2+1)/2),~~(l*(t.g1+t.g2+1)/2),~~(l*(t.b1+t.b2+1)/2)]}return t._avg},contains:function(e){var t=this,d=e[0]>>a;return gval=e[1]>>a,bval=e[2]>>a,d>=t.r1&&d<=t.r2&&gval>=t.g1&&gval<=t.g2&&bval>=t.b1&&bval<=t.b2}},y.prototype={push:function(e){this.vboxes.push({vbox:e,color:e.avg()})},palette:function(){return this.vboxes.map(function(e){return e.color})},size:function(){return this.vboxes.size()},map:function(e){for(var t=this.vboxes,d=0;d<t.size();d++)if(t.peek(d).vbox.contains(e))return t.peek(d).color;return this.nearest(e)},nearest:function(e){for(var t,d,h,c=this.vboxes,o=0;o<c.size();o++)((d=Math.sqrt(Math.pow(e[0]-c.peek(o).color[0],2)+Math.pow(e[1]-c.peek(o).color[1],2)+Math.pow(e[2]-c.peek(o).color[2],2)))<t||t===void 0)&&(t=d,h=c.peek(o).color);return h},forcebw:function(){var e=this.vboxes;e.sort(function(c,o){return O.naturalOrder(O.sum(c.color),O.sum(o.color))});var t=e[0].color;t[0]<5&&t[1]<5&&t[2]<5&&(e[0].color=[0,0,0]);var d=e.length-1,h=e[d].color;h[0]>251&&h[1]>251&&h[2]>251&&(e[d].color=[255,255,255])}},{quantize:function(e,t){if(!e.length||t<2||t>256)return!1;var d=function(l){var g,v=new Array(1<<3*s);return l.forEach(function(b){g=f(b[0]>>a,b[1]>>a,b[2]>>a),v[g]=(v[g]||0)+1}),v}(e);d.forEach(function(){});var h=function(l,g){var v,b,w,L=1e6,x=0,P=1e6,_=0,E=1e6,I=0;return l.forEach(function(C){(v=C[0]>>a)<L?L=v:v>x&&(x=v),(b=C[1]>>a)<P?P=b:b>_&&(_=b),(w=C[2]>>a)<E?E=w:w>I&&(I=w)}),new p(L,x,P,_,E,I,g)}(e,d),c=new u(function(l,g){return O.naturalOrder(l.count(),g.count())});function o(l,g){for(var v,b=l.size(),w=0;w<m;){if(b>=g||w++>m)return;if((v=l.pop()).count()){var L=$(d,v),x=L[0],P=L[1];if(!x)return;l.push(x),P&&(l.push(P),b++)}else l.push(v),w++}}c.push(h),o(c,.75*t);for(var n=new u(function(l,g){return O.naturalOrder(l.count()*l.volume(),g.count()*g.volume())});c.size();)n.push(c.pop());o(n,t);for(var r=new y;n.size();)r.push(n.pop());return r}}}().quantize;const W=function(s){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.width=this.canvas.width=s.naturalWidth,this.height=this.canvas.height=s.naturalHeight,this.context.drawImage(s,0,0,this.width,this.height)};W.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)};var B=function(){};B.prototype.getColor=function(s,a=10){return this.getPalette(s,5,a)[0]},B.prototype.getPalette=function(s,a,m){const f=function($){let{colorCount:e,quality:t}=$;if(e!==void 0&&Number.isInteger(e)){if(e===1)throw new Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");e=Math.max(e,2),e=Math.min(e,20)}else e=10;return(t===void 0||!Number.isInteger(t)||t<1)&&(t=10),{colorCount:e,quality:t}}({colorCount:a,quality:m}),u=new W(s),p=function($,e,t){const d=$,h=[];for(let c,o,n,r,l,g=0;g<e;g+=t)c=4*g,o=d[c+0],n=d[c+1],r=d[c+2],l=d[c+3],(l===void 0||l>=125)&&(o>250&&n>250&&r>250||h.push([o,n,r]));return h}(u.getImageData().data,u.width*u.height,f.quality),y=X(p,f.colorCount);return y?y.palette():null},B.prototype.getColorFromUrl=function(s,a,m){const f=document.createElement("img");f.addEventListener("load",()=>{const u=this.getPalette(f,5,m);a(u[0],s)}),f.src=s},B.prototype.getImageData=function(s,a){let m=new XMLHttpRequest;m.open("GET",s,!0),m.responseType="arraybuffer",m.onload=function(){if(this.status==200){let f=new Uint8Array(this.response);i=f.length;let u=new Array(i);for(let $=0;$<f.length;$++)u[$]=String.fromCharCode(f[$]);let p=u.join(""),y=window.btoa(p);a("data:image/png;base64,"+y)}},m.send()},B.prototype.getColorAsync=function(s,a,m){const f=this;this.getImageData(s,function(u){const p=document.createElement("img");p.addEventListener("load",function(){const y=f.getPalette(p,5,m);a(y[0],this)}),p.src=u})};const F=new B,G=s=>{console.log(s);const{location:a,current:m}=s,{name:f,region:u,country:p}=a,{temp_c:y,condition:$,wind_kph:e,wind_dir:t,pressure_in:d,humidity:h}=m,{icon:c,text:o}=$,n=N=>document.createElement(N),r=(N,R)=>N.append(R),l=n("article");l.classList.add("card");const g=n("div");g.classList.add("card-header");const v=n("img");v.src=`https:${c}`,v.alt="images of weather api",v.crossOrigin="Anonymous",v.classList.add("card-icon");const[b,w,L]=F.getColor(v);g.style.backgroundColor=`rgba(${b},${w},${L},0.4)`;const x=n("div");x.classList.add("card-info");const P=n("h2");P.textContent=`${o}`;const _=n("h1");_.textContent=`${y}`;const E=n("span");E.textContent="º";const I=n("h3");I.textContent=`${f}, ${u}, ${p}`;const C=n("div");C.classList.add("card-body");const q=n("div");q.classList.add("card-body-prop");const A=n("p");A.textContent="Wind",A.classList.add("card-body-stats");const k=n("p");k.textContent=`${t} ${e} kph`,k.classList.add("card-body-data");const M=n("div");M.classList.add("card-body-prop");const D=n("p");D.textContent="Humidity",D.classList.add("card-body-stats");const H=n("p");H.textContent=`${h}%`,H.classList.add("card-body-data");const z=n("div");z.classList.add("card-body-prop");const S=n("p");S.textContent="Pressure",S.classList.add("card-body-stats");const j=n("p");return j.textContent=`${d} in`,j.classList.add("card-body-data"),x.style.color=`rgb(${b-90},${w-90},${L-90})`,r(q,A),r(q,k),r(M,D),r(M,H),r(z,S),r(z,j),r(C,q),r(C,M),r(C,z),r(_,E),r(x,P),r(x,_),r(x,I),r(g,v),r(g,x),r(l,g),r(l,C),l},K=async s=>{const a="https://weatherapi-com.p.rapidapi.com/current.json?q="+s,m={method:"GET",headers:{"content-type":"application/octet-stream","X-RapidAPI-Key":"1592e28623msha1546bdbbb37bf4p1bec8djsn65cf0e56a3df","X-RapidAPI-Host":"weatherapi-com.p.rapidapi.com"}};try{const u=await(await fetch(a,m)).json();return await G(u)}catch(f){return f.mensaje}},T=async s=>await K(s),U=()=>{const s=e=>document.createElement(e),a=(e,t)=>e.append(t),m=document.querySelector("#app"),f=s("header"),u=s("main");a(m,f),a(m,u);const p=s("input"),y=s("button");y.textContent="Añadir ciudad";const $=s("button");$.textContent="Borrar ciudades",a(f,p),a(f,y),a(f,$),y.addEventListener("click",()=>{const e=p.value;T(e).then(t=>{t&&(a(u,t),p.value="",p.focus())})}),p.addEventListener("keydown",e=>{if(e.keyCode!==13)return;const t=p.value;T(t).then(d=>{d&&(a(u,d),p.value="",p.focus())})}),$.addEventListener("click",()=>{u.textContent="",p.value="",p.focus()})};U();