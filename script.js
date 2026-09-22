const start=new Date(2025,5,20),fields=['days','hours','minutes','seconds'];
const experience=document.getElementById('experience'),seedStage=document.getElementById('seed-stage'),player=document.getElementById('player'),music=document.getElementById('music');
function updateCounter(){const total=Math.max(0,Math.floor((Date.now()-start)/1000)),parts=[Math.floor(total/86400),Math.floor(total%86400/3600),Math.floor(total%3600/60),total%60];fields.forEach((field,index)=>document.getElementById(field).textContent=parts[index])}
function startGarden(){experience.classList.add('planting');setTimeout(()=>{experience.classList.add('grown');music.hidden=false},850);seedStage.removeEventListener('click',startGarden)}
seedStage.addEventListener('click',startGarden);
music.addEventListener('click',()=>{if(player.paused){player.play();music.innerHTML='<span>♫</span> Pausar música'}else{player.pause();music.innerHTML='<span>♫</span> Tocar música'}});
updateCounter();setInterval(updateCounter,1000);
