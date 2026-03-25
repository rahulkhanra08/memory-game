let cards=document.querySelectorAll(".card");

let firstCard=null;

let secondCard=null;

let lock=false;

let moves=0;

cards.forEach(card=>{

card.addEventListener("click",flip);

});

function flip(){

if(lock) return;

if(this===firstCard) return;

this.innerHTML=this.dataset.icon;

if(!firstCard){

firstCard=this;

return;

}

secondCard=this;

moves++;

document.getElementById("moves").innerHTML="Moves: "+moves;

checkMatch();

}

function checkMatch(){

if(firstCard.dataset.icon===secondCard.dataset.icon){

reset();

}

else{

lock=true;

setTimeout(()=>{

firstCard.innerHTML="?";

secondCard.innerHTML="?";

reset();

},800);

}

}

function reset(){

[firstCard,secondCard,lock]=[null,null,false];

}

function restart(){

location.reload();

}