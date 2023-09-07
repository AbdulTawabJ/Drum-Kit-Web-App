
for(var i = 0; i < 7 ; i++){
document.querySelectorAll(".drum")[i].addEventListener("click" , function(){
var butnkey = this.innerHTML;
var sound;

switch (butnkey) {
    case "w":
        sound = new Audio("sounds/crash.mp3"); sound.play();   anim(butnkey);
        break;
    case "a":
        sound = new Audio("sounds/tom-1.mp3"); sound.play();   anim(butnkey);
        break;
    case "s":
        sound = new Audio("sounds/tom-2.mp3"); sound.play();   anim(butnkey);
        break;
    case "d":
        sound = new Audio("sounds/tom-3.mp3"); sound.play();   anim(butnkey);
        break;
    case "j":
        sound = new Audio("sounds/tom-4.mp3"); sound.play();   anim(butnkey);
        break;
    case "k":
        sound = new Audio("sounds/snare.mp3"); sound.play();   anim(butnkey);
        break;
    case "l":
        sound = new Audio("sounds/kick-bass.mp3"); sound.play();   anim(butnkey);
        break;

    
}

});
}

document.addEventListener("keydown", function(Event){
    var keyboardkey = Event.key;

    switch (keyboardkey) {
        case "w":
            new Audio("sounds/crash.mp3").play();   anim(keyboardkey);
            break;
        case "a":
            new Audio("sounds/tom-1.mp3").play();   anim(keyboardkey);
            break;
        case "s":
            new Audio("sounds/tom-2.mp3").play();   anim(keyboardkey);
            break;
        case "d":
            new Audio("sounds/tom-3.mp3").play();   anim(keyboardkey);
            break;
        case "j":
            new Audio("sounds/tom-4.mp3").play();   anim(keyboardkey);
            break;
        case "k":
            new Audio("sounds/snare.mp3").play();   anim(keyboardkey);
            break;
        case "l":
            new Audio("sounds/kick-bass.mp3").play();   anim(keyboardkey);
            break;  
    }
})

function anim(key){
    switch (key) {
        case "w":
        if(document.querySelectorAll(".drum")[0].style.transform !== "rotate(3deg)")
        {document.querySelectorAll(".drum")[0].style.transform = "rotate(3deg)";}
        setTimeout(function() {document.querySelectorAll(".drum")[0].style.transform = "rotate(-3deg)";} , 100);
            break;
        case "a":
            
            if(document.querySelector(".a").style.fontFamily !== "Poppins")
            {document.querySelector(".a").style.fontFamily = "Poppins";}
            else{
                document.querySelector(".a").style.fontFamily = "Arvo";
            }
            break;
        case "s":
            if(document.querySelector(".s").style.maxWidth !== "145px")
            {document.querySelector(".s").style.maxWidth = "145px";}
            setTimeout(function() {document.querySelector(".s").style.maxWidth = "155px"} , 50);
            break;
        case "d":
            if(document.querySelector(".d").style.borderRadius !== "28px")
            {document.querySelector(".d").style.borderRadius = "28px";}
            else{
                document.querySelector(".d").style.borderRadius = "0px";
            }
            break;
        case "j":
            if(document.querySelector(".j").style.transform !== "translateY(-7px)")
        {document.querySelector(".j").style.transform = "translateY(-7px)";}
        setTimeout(function() {document.querySelector(".j").style.transform = "translateY(7px)";} , 100);
            break;
        case "k":
            if(document.querySelector(".k").style.height !== "190px")
            {document.querySelector(".k").style.height = "190px";}
            setTimeout(function() {document.querySelector(".k").style.height = "150px";} , 200);
            break;
        case "l":
            if(document.querySelector(".l").style.transform !== "scale(110%)")
            {document.querySelector(".l").style.transform = "scale(110%)";}
            setTimeout(function() {document.querySelector(".l").style.transform = "scale(105%)";} , 100);
            break;  
    }


}