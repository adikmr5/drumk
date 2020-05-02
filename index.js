var numberOfDrums=document.querySelectorAll(".drum").length;

for (var i=0;i<numberOfDrums;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function () {
    var buttonInner=this.innerHTML;
    play(buttonInner);
    animate(buttonInner);
  });
}
document.addEventListener("keydown",function(event) {
  play(event.key);
  animate(event.key);
});
function play(key) {
  switch (key) {
    case 'w':
    tom1=new Audio("sounds/tom-1.mp3");
    tom1.play();
      break;
    case 'a':
    tom2=new Audio("sounds/tom-2.mp3");
    tom2.play();
      break;
    case 's':
    tom3=new Audio("sounds/tom-3.mp3");
    tom3.play();
      break;
    case 'd':
    atom4=new Audio("sounds/tom-4.mp3");
    atom4.play();
      break;
    case 'j':
    snamre=new Audio("sounds/snare.mp3");
    snamre.play();
      break;
    case 'k':
    crash=new Audio("sounds/crash.mp3");
    crash.play();
      break;
    case 'l':
    kick=new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;
    default:
  }

}
function animate(key) {
  var currentKey=document.querySelector("."+key);
  console.log(currentKey);
  currentKey.classList.add("pressed");
  setTimeout(function () {
    currentKey.classList.remove("pressed");
  },100);
}
