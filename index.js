function functionToPlay(a){
    switch (a) {
        case "w":
            var1 = new Audio("sounds/tom-1.mp3");
            var1.play();
            break;
        case "a":
            var1 = new Audio("sounds/tom-2.mp3");
            var1.play();
            break;
        case "s":
            var1 = new Audio("sounds/tom-3.mp3");
            var1.play();
            break;
        case "d":
            var1 = new Audio("sounds/tom-4.mp3");
            var1.play();
            break;
        case "j":
            var1 = new Audio("sounds/crash.mp3");
            var1.play();
            break;
        case "k":
            var1 = new Audio("sounds/kick-bass.mp3");
            var1.play();
            break;
        case "l":
            var1 = new Audio("sounds/snare.mp3");
            var1.play();
            break;

        default:
            console.log("wrong");
    }
}

for(let i=0;i<7;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        functionToPlay(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}



document.addEventListener("keypress", function(e) {
    functionToPlay(e.key);
    buttonAnimation(e.key);
})



function buttonAnimation(e){
    var but = document.querySelector("."+e);

    but.classList.add("pressed");

    setTimeout(function(){
        but.classList.remove("pressed")
    }, 100);

    
    
}