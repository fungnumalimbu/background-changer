const bg=document.getElementById("background");

function changecolor(monkeythecolorcatcher){
bg.style.backgroundColor = monkeythecolorcatcher;
}
function randomcolorGenerator(){
    const red = Math.round(Math.random()*255);
    const green =Math.round(Math.random()*255);
    const blue = Math.round(Math.random()*255);

    bg.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}