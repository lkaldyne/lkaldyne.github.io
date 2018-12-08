var terminalBody = document.getElementById("terminalBody");
var terminalContainer = document.getElementById("terminalContainer");

function newPrompt(){
    let oldDiv = document.getElementById("inputChunk");
    oldDiv.className = "commandHistory";
    oldDiv.id = "";
    let newInputBox = document.createElement('div');
    newInputBox.setAttribute("id", "inputChunk");
    newInputBox.innerHTML = '<p>user@laith.kamaleddine.com:~/home$ <span>|</span></p>';
    terminalBody.appendChild(newInputBox);
}

terminalContainer.onclick = function() {
  alert("you pressed me");
};
terminalContainer.onkeydown= function (e){
    scrolltoBottom("terminalBody");

    let inputText = document.querySelector("#inputChunk p");
    let keynum;

    if(window.event) { // IE
      keynum = e.keyCode;
    } else if(e.which){ // Netscape/Firefox/Opera
      keynum = e.which;
    }
    if (keynum === 13) {
        let response = processCommand(inputText.innerHTML.substring(35,inputText.innerHTML.length-14));
        if (response === "clearConsole") {
            newPrompt();
            scrolltoBottom("terminalBody");
            clearConsole();
        }
        else {
            inputText.innerHTML += "<br><br>" + response;
            newPrompt();
            scrolltoBottom("terminalBody");
        }
    }
    else if (keynum === 8) {
        let currentText = inputText.innerHTML;
        if (currentText.length > 49) {
            inputText.innerHTML = currentText.substring(0, currentText.length - 15) + "<span>|</span>";
        }
    }
    else if ((keynum >= 40 && keynum <= 90) || (keynum >= 96 && keynum <= 111) || (keynum >= 186 && keynum <= 222) || keynum === 32){
        if (e.key !== "Delete" && e.key!== "Insert") {
            let currentText = inputText.innerHTML;
            inputText.innerHTML = currentText.substring(0, currentText.length - 14) + e.key + "<span>|</span>";
        }
    }
    //String.fromCharCode(keynum).toLowerCase()
    //alert(String.fromCharCode(keynum));
};

window.onkeydown = function(e) {
    return !(e.keyCode == 32);
};

function processCommand(command) {
    if (command === "help") {
        return "The following commands are currently supported:<br><br>" +
            "<u>cat &lt;filename&gt;:</u>&nbsp;displays the contets of that file<br>" +
            "<u>clear:</u>&nbsp;clears the contents of the terminal<br>" +
            "<u>ls:</u>&nbsp;lists the files in the current directory";
    }
    else if (command === "clear") {
        return "clearConsole";
    }
    else if (command === "ls") {
        return "intro.txt &nbsp; skills.info &nbsp; projects.info &nbsp; resume.pdf &nbsp; contact.info";
    }
    else if (command === "ls -a") {
        return ". &nbsp; .. &nbsp; .secretFile &nbsp; intro.txt &nbsp; skills.info &nbsp; projects.info &nbsp; resume.pdf &nbsp; contact.info";
    }
    else if (command.substring(0,3) === "cat") {
        let filename = command.substring(4);
        if (filename === ".secretFile") {
            return "I honestly had no clue what to put in here. I guess this should be like a congrats for knowing " +
                "some bash techniques. Ok here we go...<br><br> Congrats on finding the secret file! Your reward is... " +
                "um... the knowledge that you're competent in bash. Wow!";
        }
        else if (filename === "intro.txt") {
            return "Welcome to my Website!<br><br>" +
                "My name is Laith Kamaleddine and I am a 2<sup>nd</sup> year student at UWaterloo Engineering.&nbsp;" +
                "I usually consider myself to be more of a backend developer, but this website was a chance for me " +
                "to explore the world of Front-End and Web UX!<br><br>" +
                "With this being said, picking up new things has always been a joy of mine.&nbsp;" +
                "Learning + Growth are basically my life mantra. My satisfaction simply can't be narrowed down to " +
                "a handful of activities. As long as I'm challenged to learn something new, or to master something " +
                "I thought I knew, and I'm doing it with an awesome team, I'm forever happy!<br><br>" +
                "<i>“You never change your life until you step out of your comfort zone; change begins at the end " +
                "of your comfort zone.”</i><br>" +
                "― Roy T. Bennett<br><br>" +
                "Enjoy this website, and don't hesitate to reach out to me if you have any questions! (contact info below)";
        }
        else if (filename === "contact.info") {
            return "Email #1: Lkamaled@edu.uwaterloo.ca<br>Email #2: L.Kaldyne@gmail.com";
        }
        else {
            return "cat: Could not find file " + filename;
        }
    }
    else {
        return "Sorry, your command was not recognized. Try 'help' for valid commands";
    }
}

function scrolltoBottom(key) {
    let item = document.getElementById(key);
    item.scrollTop = item.scrollHeight;
}

function clearConsole() {
    let paras = document.getElementsByClassName('commandHistory');

    while (paras[0]) {
        paras[0].parentNode.removeChild(paras[0]);
    }
}
function typeWriter(elem, i, txt, speed) {
    if (i < txt.length) {
        elem.innerHTML += txt.charAt(i);
        i++;
        setTimeout(function(){typeWriter(elem,i,txt,speed)}, speed);
    }
}
function introTyping() {
    return onloadTypingPromise;
}

var onloadTypingPromise = new Promise(function(resolve, reject) {
    let inputText = document.querySelector("#inputChunk p");
    let i = 0;
    let txt1 = 'cat intro.txt';
    let speed = 100;
    typeWriter(inputText, i, txt1, speed);
    setTimeout(() => resolve(1), 2500); // (*)

}).then(function() { // (**)
    let txt1 = 'cat intro.txt';
    let inputText = document.querySelector("#inputChunk p");
    let response = processCommand(txt1);
    inputText.innerHTML += "<br><br>" + response;
    newPrompt();
    scrolltoBottom("terminalBody");

}).then(function() { // (***)
    let inputText = document.querySelector("#inputChunk p");
    let txt2 = 'help';
    let currentText = inputText.innerHTML;
    inputText.innerHTML = currentText.substring(0, currentText.length - 14) + txt2 + "<span>|</span>";
});