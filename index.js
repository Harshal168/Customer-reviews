const up = document.getElementById("up")
const down = document.getElementById("down")
const slide = document.getElementById("slide")

x = 0;

function upper(){
    if(x > "-400")
    x = x - 240;
    slide.style.top = x + "px";
    
}

function lower(){
    if(x < 0)
    x = x + 240;
    slide.style.top = x + "px";
    
}


