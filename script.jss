const heartWrap = document.querySelector('.heart-wrap');
const heartButton = document.getElementById('heartButton');
const firstMessage = document.getElementById('firstMessage');
const nextBtn = document.getElementById('nextBtn');
const letterWrap = document.getElementById('letterWrap');
const letterText = document.getElementById('letterText');
const flowers = document.getElementById('flowers');

const LETTER = [
  "I love you so much more than I could ever fully explain and being with you is one of the greatest gifts in my life.",
  "You mean everything to me.",
  "You are incredibly beautiful and absolutely gorgeous inside and out.",
  "Love your smile, your eyes and the whole you baby.",
  "Lucky to call you mine.",
  "I love you, always and forever ♾️",
  "Your Daddy"
];

heartButton.onclick = () => {
  heartWrap.classList.add('split');
  firstMessage.classList.remove('hidden');
  nextBtn.classList.remove('hidden');
};

nextBtn.onclick = async () => {
  firstMessage.classList.add('hidden');
  letterWrap.classList.remove('hidden');

  for(const line of LETTER){
    const p = document.createElement('p');
    letterText.appendChild(p);
    for(const char of line){
      p.textContent += char;
      await new Promise(r=>setTimeout(r,20));
    }
  }

  setInterval(spawnFlower,400);
};

function spawnFlower(){
  const span = document.createElement('span');
  span.textContent = ['🌸','🌹','🌺','🌷'][Math.floor(Math.random()*4)];
  span.style.left = Math.random()*100+'vw';
  span.style.fontSize = (14+Math.random()*20)+'px';
  span.style.animationDuration = (6+Math.random()*6)+'s';
  flowers.appendChild(span);
  setTimeout(()=>span.remove(),12000);
}
