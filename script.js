
const txt='I am sorry if my words upset you. Hurting you was never my intention. 🥺💖';
let i=0,e=document.getElementById('typewriter');
(function type(){if(i<txt.length){e.innerHTML+=txt[i++];setTimeout(type,40)}})();

for(let k=0;k<40;k++){
 let h=document.createElement('div');
 h.className='heart';h.innerHTML='💖';
 h.style.left=Math.random()*100+'vw';
 h.style.animation='fall '+(5+Math.random()*6)+'s linear infinite';
 document.body.appendChild(h);
}
for(let k=0;k<25;k++){
 let p=document.createElement('div');
 p.className='petal';p.innerHTML='🌸';
 p.style.left=Math.random()*100+'vw';
 p.style.animation='fall '+(6+Math.random()*8)+'s linear infinite';
 document.body.appendChild(p);
}

secretBtn.onclick=()=>secret.hidden=false;
forgiveBtn.onclick=()=>{
 msg.innerHTML='🎉 Thank you for giving me another chance! 💖';
 for(let i=0;i<80;i++){
  let h=document.createElement('div');
  h.className='heart';h.innerHTML='💖';
  h.style.left=Math.random()*100+'vw';
  h.style.animation='fall 3s linear';
  document.body.appendChild(h);
 }
};
