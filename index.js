// for player 1

var a = (Math.random())*6 + 1;
a = Math.floor(a);
console.log(a);
var p;
if(a === 1)
{
   p = document.querySelector("#player1").setAttribute('src','images/dice1.png');
}
else if(a === 2)
{
   p = document.querySelector("#player1");
   p.setAttribute('src','images/dice2.png');
}
else if(a === 3)
{
   p = document.querySelector("#player1");
   p.setAttribute('src','images/dice3.png');
}
else if(a === 4)
{
  p =  document.querySelector("#player1");
  p.setAttribute('src','images/dice4.png');
}
else if(a === 5)
{
  p =  document.querySelector("#player1");
  p.setAttribute('src','images/dice5.png');
}
else
{
   p = document.querySelector("#player1");
   p.setAttribute('src','images/dice6.png');
}


// for player 2

var b = (Math.random())*6 + 1;
b = Math.floor(b);
console.log(b);
var q;
if(b === 1)
{
  q = document.querySelector("#player2");
  q.setAttribute('src','images/dice1.png');
}
else if(b === 2)
{
   q = document.querySelector("#player2");
   q.setAttribute('src','images/dice2.png');
}
else if(b === 3)
{
   q = document.querySelector("#player2");
   q.setAttribute('src','images/dice3.png');
}
else if(b === 4)
{
  q =  document.querySelector("#player2");
  q.setAttribute('src','images/dice4.png');
}
else if(b === 5)
{
  q =  document.querySelector("#player2");
  q.setAttribute('src','images/dice5.png');
}
else
{
   q = document.querySelector("#player2");
   q.setAttribute('src','images/dice6.png');
}

if(a>b){
    document.querySelector("#winner").innerHTML = "player 1 wins";
}
else if(b>a){
    document.querySelector("#winner").innerHTML = "player 2 wins";
}
else if(a===b){
    document.querySelector("#winner").innerHTML = "there's a tie";
}