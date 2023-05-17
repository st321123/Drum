var numLength = document.querySelectorAll(".divBut").length;
for(let i=0;i<numLength;i++)
{
  document.querySelectorAll(" .divBut")[i].addEventListener("click",function(){
var selectedKey = this.innerHTML;

makeSound(selectedKey);
addingAnimation(selectedKey);
 })
}
var num = document.addEventListener("keypress",function(event){
  var sel =event.key.toUpperCase();
makeSound(sel);
addingAnimation(sel);

})

function makeSound(key){
  switch(key)
{
  case "W":
   var tom1 = new Audio("sounds/tom-1.mp3");
  tom1.play();
  break;
  case "A":
   var tom2 = new Audio("sounds/tom-2.mp3");
  tom2.play();
  break;
  case "S":
   var tom3 = new Audio("sounds/tom-3.mp3");
  tom3.play();
  break;
  case "D":
   var tom4 = new Audio("sounds/tom-4.mp3");
  tom4.play();
  break;
  case "J":
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
   
  case "K":
    var crash = new Audio("sounds/crash.mp3");
  crash.play();
  break;
   
  case "L":
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;
  break;
  default: console.log(selectedKey);
  

}
 }



 function addingAnimation(keyselct){
    var currentButon = document.querySelector('.' + keyselct);
currentButon.classList.add("pressed");
setTimeout(function (){
  currentButon.classList.remove("pressed");
},100)
 }