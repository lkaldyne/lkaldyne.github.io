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


terminalContainer.onkeydown= function (e){
    scrolltoBottom("terminalBody");

    var inputText = document.querySelector("#inputChunk p");
    var keynum;

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
    else {
        let currentText = inputText.innerHTML;
        inputText.innerHTML = currentText.substring(0,currentText.length-14) + e.key + "<span>|</span>";
    }
    //String.fromCharCode(keynum).toLowerCase()
    //alert(String.fromCharCode(keynum));
};

window.onkeydown = function(e) {
    return !(e.keyCode == 32);
};

function processCommand(command) {
    if (command === "cat") {
        return "yo";
    }
    else if (command === "clear") {
        return "clearConsole";
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