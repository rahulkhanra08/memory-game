let icons=["🍎","🍎","🚀","🚀","🎧","🎧","⚽","⚽"];

let game=document.getElementById("game");

let first=null;

let second=null;

let lock=false;

let moves=0;

let matches=0;

let time=0;

let started=false;

let timer=setInterval(()=>{

if(started){

time++;

document.getElementById("timer").innerHTML=time+"s";

}

},1000);

function createBoard(){

game.innerHTML="";

icons.sort(()=>0.5-Math.random());

icons.forEach(icon=>{

let card=document.createElement("div");

card.className="card";

card.dataset.icon=icon;

card.innerHTML=`

<div class="front">?</div>

<div class="back">${icon}</div>

`;

card.addEventListener("click",flip);

game.appendChild(card);

});

}

createBoard();

function flip(){

if(lock) return;

if(this===first) return;

started=true;

this.classList.add("flip");

if(!first){

first=this;

return;

}

second=this;

moves++;

document.getElementById("moves").innerHTML=moves;

updateStars();

check();

}

function updateStars(){

if(moves>12){

document.getElementById("stars").innerHTML="⭐⭐";

}

if(moves>18){

document.getElementById("stars").innerHTML="⭐";

}

}

function check(){

if(first.dataset.icon===second.dataset.icon){

matches++;

reset();

if(matches==4){

win();

}

}

else{

lock=true;

setTimeout(()=>{

first.classList.remove("flip");

second.classList.remove("flip");

reset();

},700);

}

}

function reset(){

[first,second,lock]=[null,null,false];

}

function win(){

started=false;

document.getElementById("modal").style.display="flex";

document.getElementById("finalTime").innerHTML="Time: "+time+"s";

document.getElementById("finalMoves").innerHTML="Moves: "+moves;

}

function restart(){

moves=0;

matches=0;

time=0;

started=false;

document.getElementById("moves").innerHTML="0";

document.getElementById("timer").innerHTML="0s";

document.getElementById("stars").innerHTML="⭐⭐⭐";

document.getElementById("modal").style.display="none";

createBoard();

}