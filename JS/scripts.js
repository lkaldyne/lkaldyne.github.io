var page = document.querySelector('#page');
var pageWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var arrowbounce = true;
var scrollCapture = 0;
var projectsInfo = '{\
    "items" : [\
        {\
            "title"   : "Coded this website from scratch!",\
            "date"    : "November 2018",\
            "linkMsg" : "Check out the repo",\
            "link"    : "https://github.com/lkaldyne/lkaldyne.github.io",\
            "imgLink" : "media/projectMedia/website.JPG"\
        },\
        {\
            "title"   : "Developed a blogging web-app in Django with user creation/registration and login sessions. Features include creating, updating, and deleting posts, updating profile information, and resetting passwords.",\
            "date"    : "September 2018",\
            "linkMsg" : "Check it out",\
            "link"    : "https://github.com/lkaldyne/bloggingWebApp",\
            "imgLink" : "media/projectMedia/djangoblog.JPG"\
        },\
        {\
            "title"   : "Architected and developed source code for an arcade claw machine in VHDL using finite-state machine logic on an FPGA board.",\
            "date"    : "July 2018",\
            "linkMsg" : "Check it out",\
            "link"    : "https://github.com/lkaldyne/ArcadeClawMachine_Engine",\
            "imgLink" : "media/projectMedia/quartusPrime.JPG"\
        },\
        {\
            "title"   : "Built a sentence emotion analyzer using python machine learning and NLP libraries. Successfully achieved an accuracy of 88.5% correct emotion detection across various series of tests",\
            "date"    : "February 2018",\
            "linkMsg" : "",\
            "link"    : "",\
            "imgLink" : "media/projectMedia/ML.png"\
        },\
        {\
            "title"   : "Developed an ASCII music reader/player on the Onion Omega 2 embedded linux chip. Current features include reading and playing notes, switching octaves, and toggling between piano and drum modes.<br><br>This project acts as a \'phase 1\' to the overall goal of having a fully-functional audio soundboard for mixing and DJing!",\
            "date"    : "November 2017",\
            "linkMsg" : "Check it out",\
            "link"    : "https://github.com/lkaldyne/ascii_music_player",\
            "imgLink" : "media/projectMedia/onionOmega2.jpg"\
        },\
        {\
            "title"   : "Created a 100\'000-digit number calculator in C++",\
            "date"    : "August 2017",\
            "linkMsg" : "Check it out",\
            "link"    : "https://github.com/lkaldyne/The_100000-Digit_Calculator",\
            "imgLink" : "media/projectMedia/calculatorApp.JPG"\
        },\
        {\
            "title"   : "Successfully implemented working solutions for several contest algorithm problems, including:\
                            <ul>\
                                <li>Maze-solvers using Depth-First-Search (DFS)</li>\
                                <li>Chess move optimizers using Breadth-First-Search (BFS)</li>\
                                <li>Several other problems, using Dynamic Programming and Graph Theory techniques for efficiency and execution speed</li>\
                            </ul>\",\
            "date"    : "February-Sept 2017",\
            "linkMsg" : "Check it out",\
            "link"    : "https://github.com/lkaldyne/LeetCode_Solutions",\
            "imgLink" : "media/projectMedia/knightHop.jpg"\
        },\
        {\
            "title"   : "Programmed a pseudo-3d crazy-taxi game replica using PyProcessing and custom 3d/depth logic.",\
            "date"    : "June 2017",\
            "linkMsg" : "Check it out",\
            "link"    : "https://github.com/lkaldyne/Crazy-Car-Jump",\
            "imgLink" : "media/projectMedia/crazy_car_jump.jpg"\
        },\
        {\
            "title"   : "Ontario Semi-finalists – ECOO programming contest (team of four).",\
            "date"    : "March 2017",\
            "linkMsg" : "",\
            "link"    : "",\
            "imgLink" : ""\
        },\
        {\
            "title"   : "Designed and programmed a Bluetooth-controlled Arduino RC car (team of 4), along with a pairing phone app to control the car\'s movements.",\
            "date"    : "June 2017",\
            "linkMsg" : "",\
            "link"    : "",\
            "imgLink" : "media/projectMedia/arduinoProject.jpg"\
        }\
    ]\
}';

function refreshPageWidth() {
    pageWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
}
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
    let alternator = false;
    let projects = JSON.parse(projectsInfo);
    for(let i = 0; i < projects.items.length; i++) {
        let projWrapper = document.createElement("div");
        if (alternator === false) {
            projWrapper.className = "container left";
        }
        else {
            projWrapper.className = "container right";
        }
        let projDiv = document.createElement("div");
        projDiv.className = "content";
        projDiv.innerHTML = `<h2>${projects.items[i].date}</h2>${projects.items[i].title} <br><br>${projects.items[i].linkMsg}`; 
        
        if(projects.items[i].link) {
            projDiv.innerHTML += `<a href="${projects.items[i].link}" target="_blank"> here</a><br><br>`;
        }
        if(projects.items[i].imgLink) {
            projDiv.innerHTML += `<img class='projectIMG' src="${projects.items[i].imgLink}">`;
        }    
        projWrapper.appendChild(projDiv);
        projectsContainer = document.getElementById('timeline');
        projectsContainer.appendChild(projWrapper);

        alternator = !alternator;

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
        elementArrow.style.transform = "rotate(180deg)";
        refreshPageWidth();
        if (pageWidth > 700) {
            elementContents.style.height = "100px";
        }
        else {
            elementContents.style.height = "210px";
        }
    }
    else {
        elementContents.style.height = "0";
        elementContents.style.marginTop = "0";
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
                text = firstChunk + '<span class="itemSeparator"> · </span>' + secondChunk;
            }
            j++;
        }
        skillElems[i].innerHTML = text;
    }
}