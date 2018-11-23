var page = document.querySelector('#page');

window.onresize = function (){
    document.getElementById("TitleImage").style.animation = "none";
    document.getElementById("TitleName").style.animation = "none";
    document.getElementById("TitleName").style.color = "white";
    document.getElementById("TitleDiv").style.animation = "none";

}
window.onload = function (){
    document.getElementById("terminalContainer").style.opacity = "1";
    titleSpawn();
  for (let i = 0; i < 60; i++) {
    let square = document.createElement("div");
    if (i < 10) {
        square.style.cssText = "width: 8px; height: 8px; position: absolute; display: inline-block; border: 1px solid black";
    }
    else if (i < 20) {
        square.style.cssText = "width: 20px; height: 20px; position: absolute; display: inline-block; border: 1px solid black";
    }
    else if (i < 30) {
        square.style.cssText = "width: 40px; height: 40px; position: absolute; display: inline-block; border: 1px solid black";
    }
    else if (i < 40) {
        square.style.cssText = "width: 60px; height: 60px; position: absolute; display: inline-block; border: 1px solid black";
    }
    else if (i < 50) {
        square.style.cssText = "width: 80px; height: 80px; position: absolute; display: inline-block; border: 1px solid black";
    }
    else if (i < 60) {
        square.style.cssText = "width: 100px; height: 100px; position: absolute; display: inline-block; border: 1px solid black";
    }
    else {
        square.style.cssText = "width: 80px; height: 80px; position: absolute; display: inline-block; border: 1px solid black";
    }
    page.appendChild(square);
    reset(square, i);
  }
}
 async function reset(item, i) {
  let x = Math.floor(Math.random() * 100);
  let xText = x.toString()+"vw";
  let time = Math.floor(Math.random() * 15) + 10;
  let timeText = time.toString()+"s";
  item.style.transition = "none";
  item.style.left= xText;
  item.style.transform="rotate(0deg)";
  item.style.borderRadius = "0";
  item.style.backgroundColor = "white";
  item.style.opacity = "0.6";
  if (i % 5 === 0) {
        item.style.bottom= '-100px';
    }
    else if (i % 7 === 0) {
        item.style.bottom= '-200px';
    }
    else if (i % 8 === 0) {
        item.style.bottom= '-300px';
    }
    else if (i % 9 === 00) {
        item.style.bottom= '-500px';
    }
    else if (i % 10 === 0) {
        item.style.bottom= '-550px';
    }
    else if (i % 11 === 0) {
        item.style.bottom= '-800px';
    }
    else {
        item.style.bottom= '-900px';
    }
  setTimeout(()=>{
    item.style.transition = timeText;
    let timing = "transition-timing-function";
    item.style[timing] = "linear";
    item.style.bottom="1000px";
    item.style.transform="rotate(720deg)";
    item.style.borderRadius = "45%";
    item.style.opacity = "0";
    setTimeout(()=>{reset(item,i)}, time*1000);
  }, 100);
}
function titleSpawn() {
    let elem = document.getElementById("navbar");
    var id = setInterval(frame, 5);
    var yPos = -500;
    var inc = 10;
    var dec = 0.1;
    function frame() {
        if (inc <= -1) {
            dec = 0;
            clearInterval(id);
        }
        elem.style.top = yPos + "px";
        yPos+=inc;
        inc -= dec;
    }
}