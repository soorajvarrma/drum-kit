// for(var i=0;i<;i++)
// {
var x = document.querySelectorAll(".drum").length;
    for( var i=0; i<x; i++)
    {
        document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var btn = this.innerHTML;
        makeSound(btn);
        buttonAnimation(btn);
    });
    }
document.addEventListener("keydown",function(event){
    
    makeSound(event.key);
    buttonAnimation(event.key);
});
function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
    
        default:console.log("Error");
            break;
    }
}
function buttonAnimation(currentKey){
    var newbutton = document.querySelector("."+currentKey);
    newbutton.classList.add("pressed");
    setTimeout(function(){
        newbutton.classList.remove("pressed");
    }, 100);
}