var randomNumber1=Math.ceil(Math.random()*6);
var randomNumber2=Math.ceil(Math.random()*6);

var pic1="images/dice"+randomNumber1+".png"
var pic2="images/dice"+randomNumber2+".png"

document.querySelector(".img1").setAttribute("src",pic1)
document.querySelector(".img2").setAttribute("src",pic2)

if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="<i class='fas fa-flag'></i> Player 1 wins!"
}
else if (randomNumber1!=randomNumber2) {
  document.querySelector("h1").innerHTML="Player 2 wins! <i class='fas fa-flag'></i>"
}
else{
  document.querySelector("h1").innerHTML="Draw!"
}
