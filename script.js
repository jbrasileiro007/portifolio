const $=s=>document.querySelector(s),sl=ms=>new Promise(r=>setTimeout(r,ms));
const io=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&x.target.classList.add('on')),{threshold:.1});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));
$('#th').onclick=()=>{const r=document.documentElement;r.dataset.theme=getComputedStyle(r).colorScheme==='dark'?'light':'dark'};
async function ty(el,t,s){el.textContent='';for(const c of t){el.textContent+=c;await sl(s)}}
const D=[["oi, preciso do relatorio ate sexta, me manda?","Olá! Poderia me enviar o relatório até sexta-feira? Fico à disposição para qualquer dúvida. Obrigada!"],["reuniao amanha nao da, vamos mudar","Olá, pessoal! Amanhã não conseguirei participar da reunião. Poderíamos reagendar para outro horário?"],["segue anexo o oficio assina ai","Prezado(a), segue em anexo o ofício para sua análise e assinatura. Fico no aguardo do retorno."]];
(async()=>{let i=0;for(;;){const[a,b]=D[i++%3];await ty($('#raw'),a,28);await sl(500);await ty($('#ai'),b,22);await sl(2600)}})();
const R=[...document.querySelectorAll('.srv')];
setInterval(()=>R.forEach(r=>{const v=Math.round(25+Math.random()*55),b=r.querySelector('b');b.style.width=v+'%';b.className=v>70?'w':'';r.lastElementChild.textContent=v+'%'}),1800);
