body{
  margin:0;
  min-height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  background:linear-gradient(180deg,#12010a,#2b0b17);
  font-family:"Playfair Display",serif;
  color:white;
}

.stage{
  text-align:center;
}

svg{
  width:300px;
  cursor:pointer;
}

.voxel{
  fill:#a71f2d;
  stroke:#550000;
  stroke-width:2;
}

.voxel.dark{
  fill:#7a1117;
}

@keyframes pulse{
  0%{transform:scale(1)}
  50%{transform:scale(1.05)}
  100%{transform:scale(1)}
}

.heartbeat{
  animation:pulse 1.6s infinite;
  transform-origin:center;
}

.heart-wrap.split #leftHalf{
  transform:translateX(-40px) rotate(-5deg);
}

.heart-wrap.split #rightHalf{
  transform:translateX(40px) rotate(5deg);
}

.heart-wrap.split #innerGlow{
  opacity:1;
}

.centered-message{
  margin-top:20px;
}

.hidden{
  display:none;
}

.btn{
  margin-top:10px;
  padding:10px 20px;
  background:#ff7b9c;
  border:none;
  border-radius:8px;
  cursor:pointer;
  color:white;
}

.card{
  background:rgba(255,255,255,0.08);
  padding:20px;
  border-radius:12px;
  max-width:600px;
  margin:20px auto;
}

#flowers span{
  position:fixed;
  top:-10%;
  animation:fall linear forwards;
}

@keyframes fall{
  to{
    transform:translateY(120vh) rotate(360deg);
  }
}

.invisible-btn{
  position:absolute;
  inset:0;
  background:none;
  border:none;
}
