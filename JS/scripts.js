var page = document.querySelector('#page');
var pageWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var arrowbounce = true;
var scrollCapture = 0;

window.onload = function (){
    //document.getElementById("TitleName").innerHTML = pageWidth;
    document.getElementById("terminalContainer").style.opacity = "1";
    document.getElementById("terminalBody").focus();
    let numSquares = 30;
    if (pageWidth > 980){
        numSquares = 60;
    }
    titleSpawn();
    skillItemFormatting();
  for (let i = 0; i < numSquares; i++) {
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
    arrowBounce();
  }
};
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

async function arrowBounce() {
    if (arrowbounce) {
        let item = document.getElementById("scrollArrow");
        item.style.transition = "none";
        item.style.bottom = "100px";
        item.style.opacity = "0.2";
        setTimeout(() => {
            item.style.transition = "1s";
            item.style.bottom = "0";
            item.style.opacity = "1";
            setTimeout(() => {arrowBounce()}, 2000);
        }, 100);
    }
}

function scrollArrowHandling() {
    let doc = document.documentElement;
    let top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    let arrow = document.getElementById("scrollArrow");
    if (top >= 400) {
        arrowbounce = false;
        arrow.style.transition = "1s";
        arrow.style.transform = "rotate(180deg)";
        arrow.style.bottom = "50px";
        arrow.style.opacity = "1";
    }
    if (top < 400) {
        arrow.style.transition = "1s";
        arrow.style.transform = "rotate(0deg)";
        if (scrollCapture >= 400) {
            arrow.style.opacity = "0.5";
        }
        arrowbounce = true;
    }
    scrollCapture = top;
}

function clickArrowHandling() {
    let doc = document.documentElement;
    let top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    if (top >= 400) {
        document.body.scrollTop = document.documentElement.scrollTop = 0;

    }
    else {
        document.body.scrollTop = document.documentElement.scrollTop = 900;
    }
}
function titleSpawn() {
    let elem1 = document.getElementById("TitleName");
    let elem2 = document.getElementById("TitleImage");
    elem1.style.top = "0";
    elem2.style.top = "0";

}

function mobileMenuExpandCollapse(el) {
    let elementContents = el.getElementsByTagName("DIV")[0];
    let elementArrow = el.getElementsByTagName("IMG")[0];
    if (elementContents.style.height === "0px" || elementContents.style.height === '') {
        elementContents.style.marginTop = "20px";
        elementContents.style.height = "80px";
        //elementContents.style.overflow = 'auto';
        elementArrow.style.transform = "rotate(180deg)";
    }
    else {
        elementContents.style.height = "0";
        elementContents.style.marginTop = "0";
       // elementContents.style.overflow = 'hidden';
        elementArrow.style.transform = "rotate(0deg)";
    }
}

function skillItemFormatting() {
    let skillElems = document.getElementsByClassName("mobileSkillItem");
    for (let i = 0; i < skillElems.length; i++) {
        let text = skillElems[i].innerHTML;
        let j = 0;
        while (j !== text.length) {
            if (text[j] === ",") {
                let firstChunk = text.substring(0,j);
                let secondChunk = text.substring(j+1);
                text = firstChunk + '<span class="itemSeparator">&nbsp&nbsp&nbsp · &nbsp&nbsp&nbsp</span>' + secondChunk;
            }
            j++;
        }
        skillElems[i].innerHTML = text;
    }


}