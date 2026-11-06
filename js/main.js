const $=id=>document.getElementById(id);
$('lg').textContent=NAME.split(' ')[0].toLowerCase();$('em').textContent='✉ '+EMAIL;$('em').href='mailto:'+EMAIL;
$('ph').textContent='☎ '+PHONE;$('ph').href='tel:'+PHONE;$('li').href=LINK;$('intro').textContent=INTRO;$('ft').textContent='© 2026 '+NAME;
const nm=$('name');let i=0;
('Hi, I’m '+NAME).split('').forEach((ch,k)=>{const s=document.createElement('span');s.textContent=ch===' '?'\u00A0':ch;if(k>=4)s.className='c';s.style.animationDelay=(.3+k*.06)+'s';nm.appendChild(s)});
let ri=0,ci=0,del=false;const rl=$('role');
(function t(){const x=ROLES[ri];rl.textContent=x.slice(0,ci);if(!del&&ci===x.length){del=true;return setTimeout(t,1400)}if(del&&ci===0){del=false;ri=(ri+1)%ROLES.length}ci+=del?-1:1;setTimeout(t,del?40:90)})();
$('blob').innerHTML=PHOTO?`<img src="${PHOTO}" alt="${NAME}">`:`<svg viewBox="0 0 200 220"><path d="M20 220c0-48 34-72 80-72s80 24 80 72z" fill="#2B1B3D"/><rect x="86" y="118" width="28" height="40" rx="12" fill="#f2b896"/><ellipse cx="100" cy="92" rx="42" ry="48" fill="#f7c7a6"/><path d="M56 88c-6-46 30-62 56-54 24 4 38 26 32 54-10-22-28-30-48-28-18 2-32 12-40 28z" fill="#2B1B3D"/><circle cx="84" cy="96" r="4" fill="#2B1B3D"/><circle cx="116" cy="96" r="4" fill="#2B1B3D"/><path d="M88 114q12 10 24 0" stroke="#2B1B3D" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="76" cy="108" r="6" fill="#F0603E" opacity=".35"/><circle cx="124" cy="108" r="6" fill="#F0603E" opacity=".35"/></svg>`;
// demo work visuals
const uri=s=>"url(\"data:image/svg+xml,"+encodeURIComponent(s)+"\")";
const site=uri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450"><rect width="800" height="450" fill="#FFF8F0"/><rect width="800" height="46" fill="#fff"/><circle cx="40" cy="23" r="9" fill="#F0603E"/><rect x="560" y="17" width="50" height="12" rx="6" fill="#ddd"/><rect x="630" y="17" width="50" height="12" rx="6" fill="#ddd"/><rect x="700" y="12" width="70" height="22" rx="11" fill="#F0603E"/><text x="50" y="150" font-family="Arial" font-weight="800" font-size="46" fill="#2B1B3D">Grow your</text><text x="50" y="205" font-family="Arial" font-weight="800" font-size="46" fill="#F0603E">business online</text><rect x="50" y="235" width="170" height="44" rx="22" fill="#2B1B3D"/><circle cx="600" cy="190" r="120" fill="#FFB88C"/><circle cx="640" cy="150" r="60" fill="#F0603E"/><rect x="50" y="330" width="200" height="90" rx="14" fill="#fff"/><rect x="290" y="330" width="200" height="90" rx="14" fill="#fff"/><rect x="530" y="330" width="200" height="90" rx="14" fill="#fff"/></svg>`);
const app=uri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 560"><rect width="270" height="560" fill="#FFF8F0"/><rect y="50" width="270" height="200" fill="#F0603E"/><text x="22" y="110" font-family="Arial" font-weight="800" font-size="26" fill="#fff">Hello, Sara 👋</text><text x="22" y="140" font-family="Arial" font-size="14" fill="#fff">Your tasks today</text><circle cx="215" cy="190" r="42" fill="#FFD9B8"/><rect x="20" y="270" width="230" height="70" rx="16" fill="#fff"/><rect x="20" y="355" width="230" height="70" rx="16" fill="#fff"/><rect x="20" y="440" width="230" height="70" rx="16" fill="#fff"/><circle cx="52" cy="305" r="16" fill="#FFB88C"/><circle cx="52" cy="390" r="16" fill="#FFD9B8"/><circle cx="52" cy="475" r="16" fill="#F0603E"/></svg>`);
$('w1').style.backgroundImage=WORK1?`url(${WORK1})`:site;$('w2').style.backgroundImage=WORK2?`url(${WORK2})`:app;

const cl=(x,a=0,b=1)=>Math.min(b,Math.max(a,x)),seg=(p,a,b)=>cl((p-a)/(b-a));
const ease=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;
const bounce=t=>{if(t<.7){const u=t/.7;return u*u}const u=(t-.7)/.3;return 1-Math.sin(u*Math.PI)*.06};
const mix=(a,b,t)=>a.map((v,i)=>Math.round(v+(b[i]-v)*t));
const CREAM=[255,248,240],PLUM=[43,27,61];let mx=0,my=0;
const track=$('work'),mon=$('mon'),shot=$('shot'),phone=$('phone'),w2=$('w2'),scrim=$('scrim'),cap=$('cap'),stick=$('stick'),ground=$('ground'),card=$('card');
let last='';
function setCap(a,b,dark){const k=a+b;if(k===last)return;last=k;cap.style.opacity=0;setTimeout(()=>{cap.innerHTML=a?`${a}<small>${b}</small>`:'';cap.style.opacity=a?1:0},200)}
function render(){
  const r=track.getBoundingClientRect(),H=innerHeight,p=cl(-r.top/(r.height-H));
  $('bar').style.width=(scrollY/Math.max(1,document.body.scrollHeight-H)*100)+'%';
  const dark=ease(seg(p,0,.08))*(1-ease(seg(p,.9,1)));
  const g2=mix([240,96,62],[255,184,140],seg(p,.4,.6));stick.style.background=`radial-gradient(circle at 50% 55%,rgba(${g2},${.3*dark}),transparent 62%),rgb(${mix(CREAM,PLUM,dark)})`;
  cap.style.color=dark>.5?'#FFF8F0':'#2B1B3D';
  const mIn=ease(seg(p,.04,.14)),grow=ease(seg(p,.16,.38)),mOut=ease(seg(p,.42,.52));
  mon.style.opacity=mIn*(1-mOut);
  mon.style.transform=`translateY(${(1-mIn)*80}px) scale(${.7+.3*mIn+.04*grow-.4*mOut}) rotateY(${(1-mIn)*-25+mx*7}deg) rotateX(${-my*5}deg)`;
  shot.style.transform=`scale(${.3+.7*grow})`;
  const pIn=ease(seg(p,.55,.64)),drop=bounce(seg(p,.68,.82)),pOut=ease(seg(p,.88,.98));
  phone.style.opacity=pIn*(1-pOut);
  phone.style.transform=`translateY(${(1-pIn)*120-pOut*50}px) translateZ(${-pOut*1000}px) scale(${1+(1-pIn)*.4-pOut*.8}) rotateX(${drop*72}deg)`;
  const pr=phone.getBoundingClientRect();
  ground.style.top=(phone.offsetTop+phone.offsetHeight+4)+'px';
  ground.style.opacity=pIn*(1-pOut)*(1-drop*.6);
  const dq=seg(p,.78,.86);
  [$('d1'),$('d2')].forEach((d,n)=>{d.style.top=(phone.offsetTop+phone.offsetHeight-14)+'px';d.style.left=`calc(50% + ${(n?1:-1)*(80+dq*60)}px)`;d.style.opacity=dq>0&&dq<1?(1-dq)*.8:0;d.style.transform=`scale(${1+dq*2})`});
  w2.style.opacity=ease(seg(p,.78,.84));scrim.style.opacity=1-ease(seg(p,.76,.84));
  const sh=dq>0&&dq<.2?(1-dq/.2)*7:0;stick.style.transform=sh?`translate(${(Math.random()-.5)*sh}px,${(Math.random()-.5)*sh}px)`:'';
  const sw=$('sw');sw.style.top=(phone.offsetTop+phone.offsetHeight)+'px';sw.style.opacity=dq>0&&dq<.8?(1-dq/.8)*.8:0;sw.style.transform=`translate(-50%,-50%) rotateX(70deg) scale(${.2+dq*5})`;
  const cv2=ease(seg(p,.14,.24))*(1-ease(seg(p,.38,.46))),sc=ease(seg(p,.38,.46));
  document.querySelectorAll('.chip').forEach((c,i)=>{const an=p*14+i*1.0472,rr=1+sc*1.2;c.style.opacity=cv2;c.style.transform=`translate(-50%,-50%) translate(${Math.cos(an)*Math.min(innerWidth*.42,520)*rr}px,${Math.sin(an)*210*rr}px) scale(${.6+cv2*.4})`});
  document.querySelectorAll('.bub').forEach((b,i)=>{const bt=seg(p,.83+i*.03,.96+i*.03);b.style.opacity=Math.sin(bt*Math.PI)*(1-pOut);b.style.top=(phone.offsetTop+phone.offsetHeight*.35)+'px';b.style.transform=`translate(-50%,-50%) translate(${[-130,140,-10][i]}px,${-bt*230}px) scale(${.7+bt*.3})`});
  const kb=ease(seg(p,.86,.94))*(1-ease(seg(p,.97,1)));['k1','k2','k3'].forEach((k,n)=>{$(k).style.opacity=kb;$(k).style.transform=`translateY(${(1-kb)*30*(n+1)}px)`});
  if(p<.05)setCap('','');
  else if(p<.15)setCap('My Work','Desktop projects');
  else if(p<.42)setCap('My Work','Keep Scrolling');
  else if(p<.55)setCap('Now, mobile','');
  else if(p<.68)setCap('Mobile Work','');
  else if(p<.87)setCap('Mobile Work','App projects');
  else if(p<.96)setCap('Let’s build yours','');
  else setCap('','');
  card.classList.toggle('in',p>.95||r.bottom<H*.9);
  const step=p<.14?0:p<.42?1:p<.68?2:p<.87?3:4;document.querySelectorAll('#dots i').forEach((d,n)=>d.classList.toggle('on',n===step));
  $('dots').style.color=dark>.5?'#FFF8F0':'#2B1B3D';
}
/* preloader */
{let n=0;const t=setInterval(()=>{n+=Math.ceil(Math.random()*7);if(n>=100){n=100;clearInterval(t);setTimeout(()=>{$('pre').classList.add('out');document.body.classList.add('go');scrollTo(0,0)},350)}$('pn').textContent=n},45)}
/* cursor */
{let x=0,y=0,rx=0,ry=0;addEventListener('mousemove',e=>{x=e.clientX;y=e.clientY;$('cur').style.transform=`translate(${x}px,${y}px)`});
(function f(){rx+=(x-rx)*.15;ry+=(y-ry)*.15;$('ring').style.transform=`translate(${rx}px,${ry}px)`;requestAnimationFrame(f)})();
document.querySelectorAll('a,button,.st,input,select,textarea').forEach(el=>{el.addEventListener('mouseenter',()=>$('ring').classList.add('big'));el.addEventListener('mouseleave',()=>$('ring').classList.remove('big'))})}
/* particles + marquee skew */
const cv=$('pc'),cx=cv.getContext('2d');let PW,PH,vel=0,ly=0;const P=[];
function rs(){PW=cv.width=innerWidth;PH=cv.height=innerHeight}rs();addEventListener('resize',rs);
for(let i=0;i<60;i++)P.push({x:Math.random(),y:Math.random(),r:Math.random()*3+1,s:Math.random()*.0004+.0001,c:['255,184,140','240,96,62','255,224,184'][i%3]});
(function loop(){vel+=(Math.abs(scrollY-ly)-vel)*.1;const d=scrollY-ly;ly=scrollY;cx.clearRect(0,0,PW,PH);
P.forEach(q=>{q.y-=q.s*(1+vel*.8);if(q.y<-.05)q.y=1.05;cx.beginPath();cx.fillStyle=`rgba(${q.c},.55)`;cx.arc(q.x*PW+Math.sin(q.y*9)*14,q.y*PH,q.r,0,7);cx.fill()});
const m=document.querySelector('.mq');if(m)m.style.transform=`rotate(-1.2deg) skewX(${Math.max(-10,Math.min(10,-d*.25))}deg)`;requestAnimationFrame(loop)})();
/* reveal */
{const ro=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');ro.unobserve(e.target)}}),{threshold:.25});
document.querySelectorAll('.about h2,.about p,.info h2,.info p,.info a,.badge,.services h2,.svgrid').forEach((el,i)=>{el.classList.add('rv');el.style.transitionDelay=(i%4)*.1+'s';ro.observe(el)})}
/* sparkle trail + click burst */
{const t=$('tr'),g=t.getContext('2d'),T=[],C=['#F0603E','#FFB88C','#FFE0B8'];const sz=()=>{t.width=innerWidth;t.height=innerHeight};sz();addEventListener('resize',sz);
addEventListener('mousemove',e=>{if(Math.random()<.5)T.push({x:e.clientX,y:e.clientY,vx:(Math.random()-.5)*1.5,vy:Math.random()*1.5+.3,l:1,c:C[T.length%3]})});
addEventListener('click',e=>{for(let i=0;i<14;i++){const a=i/14*6.28;T.push({x:e.clientX,y:e.clientY,vx:Math.cos(a)*4,vy:Math.sin(a)*4,l:1,c:C[i%3]})}});
(function f(){g.clearRect(0,0,t.width,t.height);for(let i=T.length-1;i>=0;i--){const q=T[i];q.x+=q.vx;q.y+=q.vy;q.l-=.025;if(q.l<=0){T.splice(i,1);continue}g.globalAlpha=q.l;g.fillStyle=q.c;g.font=`${10+q.l*12}px sans-serif`;g.fillText('✦',q.x,q.y)}requestAnimationFrame(f)})()}
/* confetti */
function burst(){const c=$('cf'),g=c.getContext('2d');c.width=innerWidth;c.height=innerHeight;const cols=['#F0603E','#FFB88C','#FFE0B8','#2B1B3D'];
const a=Array.from({length:130},()=>({x:innerWidth/2,y:innerHeight*.6,vx:(Math.random()-.5)*16,vy:-Math.random()*16-4,w:Math.random()*9+4,r:Math.random()*6,c:cols[Math.random()*4|0]}));let n=0;
(function f(){g.clearRect(0,0,c.width,c.height);a.forEach(q=>{q.vy+=.4;q.x+=q.vx;q.y+=q.vy;q.r+=.2;g.save();g.translate(q.x,q.y);g.rotate(q.r);g.fillStyle=q.c;g.fillRect(-q.w/2,-q.w/4,q.w,q.w/2);g.restore()});if(++n<150)requestAnimationFrame(f);else g.clearRect(0,0,c.width,c.height)})()}
const SKILLS=['HTML & CSS','JavaScript','React','UI / UX','Figma','Responsive Design','SEO','Animations'];
$('mqi').innerHTML=(SKILLS.map(s=>`<span>${s}</span><i>✦</i>`).join('')).repeat(4);
$('ab').textContent='I am Kaniz Fatima. I am dedicated to transforming your concepts into exceptional websites and applications.Premium design, blazing speed, and an impeccable user experience are the hallmarks of my work.';
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const s=e.target;s.classList.add('in');const b=s.querySelector('b'),n=+b.dataset.n,sf=b.dataset.s||'+';let t0=null;const f=ts=>{t0=t0||ts;const k=Math.min(1,(ts-t0)/1400);b.textContent=Math.round(n*(1-Math.pow(1-k,3)))+(k===1?sf:'');k<1&&requestAnimationFrame(f)};requestAnimationFrame(f);io.unobserve(s)}),{threshold:.4});
document.querySelectorAll('.st').forEach((s,n)=>{s.style.transitionDelay=n*.12+'s';io.observe(s)});
addEventListener('mousemove',e=>{mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5;const g=$('glow');g.style.left=e.clientX+'px';g.style.top=e.clientY+'px';const a=$('blob');if(a)a.style.transform=`translate(${mx*-24}px,${my*-18}px)`;render()});
document.querySelectorAll('.btn,.hire').forEach(b=>{b.addEventListener('mousemove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.2}px,${(e.clientY-r.top-r.height/2)*.3}px)`});b.addEventListener('mouseleave',()=>b.style.transform='')});
addEventListener('scroll',render,{passive:true});addEventListener('resize',render);render();
$('f').addEventListener('submit',e=>{e.preventDefault();burst();$('f').style.display='none';$('ok').style.display='block'});