


var no_ofdrumbuttons = document.querySelectorAll(".drum").length;
for (var i = 0; i < no_ofdrumbuttons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttoninnerHtml = this.innerHTML;
    makesound(buttoninnerHtml);
    buttonanimation(buttoninnerHtml);
  });
}
    document.addEventListener("keypress", function(event) {
makesound(event.key);
buttonanimation(event.key);
});

    function makesound(key) {
      switch (key) {
        case "w":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();

          break;
        case "a":
          var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
          break;
        case "s":
          var tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
          break;

        case "d":
          var tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
          break;
        case "j":
          var crash = new Audio("sounds/crash.mp3");
          crash.play();
          break;
        case "k":
          var snare = new Audio("sounds/snare.mp3");
          snare.play();
          break;
        case "l":
          var kickbass = new Audio("sounds/kick-bass.mp3");
          kickbass.play();
          break;
        default:
        console.log(buttoninnerHtml);
      }
    }
function buttonanimation(currentkey){
  var activebutton = document.querySelector("."+ currentkey);
 activebutton.classList.add("pressed");
setTimeout(function(){
  activebutton.classList.remove("pressed");
} , 100);
}













// document.querySelectorAll("button")[1].addEventListener("click",handleClick);
// document.querySelectorAll("button")[2].addEventListener("click",handleClick);
// document.querySelectorAll("button")[3].addEventListener("click",handleClick);
// document.querySelectorAll("button")[4].addEventListener("click",handleClick);
// document.querySelectorAll("button")[5].addEventListener("click",handleClick);
// document.querySelectorAll("button")[6].addEventListener("click",handleClick);
