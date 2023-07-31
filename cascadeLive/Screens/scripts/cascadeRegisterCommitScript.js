/*load this function as the window loads, set the page elements*/
window.onload = function () {
    let count = 0;
    setTimeout(function () {
    document.getElementById("transition-bar").setAttribute("id","transition-bar-one");
    setTimeout(function (){document.getElementById("transition-bar-one").remove();
    document.getElementById("welcome-note-division").remove();
    document.getElementById("register-panel").style.display="flex";},2000);},7000);
    typewrite("Status Fetched.", "welcome-note");
    setTimeout(function (){document.getElementById("register-panel").style.animation="glow 5s infinite";},11000);
};

/*previously used, specifically modified version (1.1) of typewrite ( from loading screen version 1.0) */
function typewrite(message, id) {
    let counter = 0, string = "";
    let messageBar = document.getElementById(id);
    setTimeout(function () {
        let interval = setInterval(function () {
            if (counter < message.length) {
                string += message[counter] + "_";
                messageBar.innerText = string;
                setTimeout(function () { string = string.replace('_', ''); }, 100);
                messageBar.innerText = string;
                messageBar.style.color = "gray";
                counter++;
            }
            if (counter == message.length) {
                let subinterval = setInterval(function () { string = string.replace('_', ''); messageBar.innerText = string; string += '_'; }, 100);
                messageBar.style.color = "white";
                clearInterval(interval);
                string = string.replace('_', ''); messageBar.innerText = string; string += '_';
                clearInterval(subinterval);
            }
        }, 150);
    }, 1000);
}