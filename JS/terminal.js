var terminalBody = document.getElementById("terminalBody");
var terminalContainer = document.getElementById("terminalContainer");

function newPrompt(){
    let notFirstTime = false;
    let oldDiv = document.getElementById("inputChunk");
    let oldInputBox = document.querySelector("#inputChunk input");
    if (oldInputBox != null) {
        oldInputBox.parentNode.removeChild(oldInputBox);
        notFirstTime = true;
    }
    oldDiv.className = "commandHistory";
    oldDiv.id = "";
    let newInputBox = document.createElement('div');
    newInputBox.setAttribute("id", "inputChunk");
    newInputBox.innerHTML = 'user@laith.kamaleddine.com:~/home$ <input type="text">';
    terminalBody.appendChild(newInputBox);
    //if (notFirstTime) {
    document.querySelector("#inputChunk input").focus();
    //}
}

terminalContainer.onclick = function() {
    document.querySelector("#inputChunk input").focus();
};
terminalContainer.onkeydown= function (e){
    scrolltoBottom("terminalBody");

    let keynum;

    if(window.event) { // IE
      keynum = e.keyCode;
    } else if(e.which){ // Netscape/Firefox/Opera
      keynum = e.which;
    }
    if (keynum === 9) {
        e.preventDefault();
        let inputText = document.querySelector("#inputChunk input").value;
        switch (inputText.substring(0,5)) {
            case "cat p":
                document.querySelector("#inputChunk input").value = "cat projects.info";
                break;
            case "cat i":
                document.querySelector("#inputChunk input").value = "cat intro.txt";
                break;
            case "cat s":
                document.querySelector("#inputChunk input").value = "cat skills.info";
                break;
            case "cat r":
                document.querySelector("#inputChunk input").value = "cat resume.pdf";
                break;
            case "cat c":
                document.querySelector("#inputChunk input").value = "cat contact.info";
                break;
        }
    }
    if (keynum === 13) {
        let inputText = document.querySelector("#inputChunk input").value;
        let response = processCommand(inputText);
        if (response === "clearConsole") {
            newPrompt();
            scrolltoBottom("terminalBody");
            clearConsole();
        }
        else {
            let promptText = document.querySelector("#inputChunk");
            promptText.innerHTML = "user@laith.kamaleddine.com:~/home$ " + inputText + "<br><br>" + response;
            newPrompt();
            scrolltoBottom("terminalBody");
            if (response === "Scrolling to skills section...") {
                scrollToElement("technicals");
            }
            else if (response === "Scrolling to projects section...") {
                scrollToElement("projects");
            }
            else if (response === "Redirecting to resume.pdf...") {
                let win = window.open("https://lkaldyne.github.io/resume.pdf", '_blank');
                win.focus();
            }
        }
    }
};

function processCommand(command) {
    if (command === "help" || command === "Help") {
        return "The following commands are currently supported:<br><br>" +
            "<u>cat &lt;filename&gt;:</u>&nbsp;displays the contets of that file<br>" +
            "<u>clear:</u>&nbsp;clears the contents of the terminal<br>" +
            "<u>ls:</u>&nbsp;lists the files in the current directory<br>" +
            "<u>&lt;tab key&gt;:</u>&nbsp;autocompletes file names following 'cat' command";
    }
    else if (command === "clear" || command === "Clear") {
        return "clearConsole";
    }
    else if (command === "ls" || command === "Ls") {
        return "intro.txt &nbsp; skills.info &nbsp; projects.info &nbsp; resume.pdf &nbsp; contact.info";
    }
    else if (command === "ls -a" || command === "Ls -a") {
        return ". &nbsp; .. &nbsp; .secretFile &nbsp; intro.txt &nbsp; skills.info &nbsp; projects.info &nbsp; resume.pdf &nbsp; contact.info";
    }
    else if (command.substring(0,3) === "cat" || command.substring(0,3) === "Cat") {
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
        else if (filename === "skills.info") {
            return "Scrolling to skills section...";
        }
        else if (filename === "projects.info") {
            return "Scrolling to projects section...";
        }
        else if (filename === "resume.pdf") {
            return "Redirecting to resume.pdf...";
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
        setTimeout(function () {
            typeWriter(elem, i, txt, speed)
        }, speed);
    }
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
    let inputText = document.querySelector("#inputChunk input");
    inputText.value = "help";
    document.getElementById("TitleImage").style.border = "2px solid white";
});

function scrollToElement(id) {
    //document.getElementById(id).scrollIntoView();
    let element = document.getElementById(id);
    let rect = element.getBoundingClientRect();
    if (id === 'projects') {
        document.body.scrollTop = rect.top + 100;
    }
    else {
        document.body.scrollTop = rect.top
    }
}