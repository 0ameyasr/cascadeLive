/*load this function as the window loads, set the page elements*/
window.onload = function () {
    let count = 0;
    document.getElementById("transition-bar").setAttribute("id","transition-bar-one");
    setTimeout(function (){document.getElementById("transition-bar-one").remove();},2000);
    typewrite("Our API. Your Projects.", "menu-fill");
    let timeout = setTimeout(function () {
        document.getElementById("menu-fill").innerText = "";
        typewrite("Welcome to Cascade.", "menu-fill");
    }, 8000);

    let timeout2 = setTimeout(function () {
        setInterval(function () { greetRandom("menu-fill"); }, 10000);
    }, 13000);
    let timeout3 = setTimeout(function () {
        let modal = bootstrap.Modal.getOrCreateInstance("#alert-modal");
        modal.toggle();}
    ,3000);
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

/*random greeting generator that displays random messages in the menu fill bar*/
function greetRandom(id) {
    let tag = Math.floor(Math.random() * 10);
    switch (tag) {
        case 0:
            setTimeout(function () {
                document.getElementById("menu-fill").innerText = "";
                typewrite("Seems Unfamiliar? Visit our About Page!", "menu-fill");
            }, 1000);
            break;
        case 1:
            setTimeout(function () {
                document.getElementById("menu-fill").innerText = "";
                typewrite("Not a member? Well.. Register!", "menu-fill");
            }, 1000);
            break;
        case 2:
            setTimeout(function () {
                document.getElementById("menu-fill").innerText = "";
                typewrite("You can register to contribute!", "menu-fill");
            }, 1000);
            break;
        case 3:
            setTimeout(function () {
                document.getElementById("menu-fill").innerText = "";
                typewrite("Proactive. Predictive. Powerful.", "menu-fill");
            }, 1000);
            break;
        case 4:
            setTimeout(function () {
                document.getElementById("menu-fill").innerText = "";
                typewrite("Cascading developers worldwide.", "menu-fill");
            }, 1000);
            break;
        case 5:
            setTimeout(function () {
                document.getElementById("menu-fill").innerText = "";
                typewrite("We're Open Source!", "menu-fill");
            }, 1000);
            break;
        case 6:
            setTimeout(function () {
                document.getElementById("menu-fill").innerText = "";
                typewrite("Use CIDEr for your scripts!", "menu-fill");
            }, 1000);
            break;
        case 7:
            setTimeout(function () {
                document.getElementById("menu-fill").innerText = "";
                typewrite("Registration is free! Become a tester!", "menu-fill");
            }, 1000);
            break;
        case 8:
            setTimeout(function () {
                document.getElementById("menu-fill").innerText = "";
                typewrite("CSTe API Kit is under development.", "menu-fill");
            }, 1000);
            break;
        default:
            setTimeout(function () {
                document.getElementById("menu-fill").innerText = "";
                typewrite("Rare, yet Elemental.", "menu-fill");
            }, 1000);

    }
}

/*hightlight JS trigger CSS based animation on API kit hover*/
function highlight(id, tag) {
    document.getElementById(id).setAttribute("src", "..\\assets\\"+id + ".gif");
    document.getElementById(id).style.transform = "scale(1.10)";
    document.getElementById(id).style.border = "5px dashed #ffd700";
    typewrite("Click on a kit to Proceed","greetAPI");
}
/*reset the API kit image as the mouse leaves */
function reset(id) {
    document.getElementById(id).setAttribute("src","..\\assets\\"+id + ".png");
    document.getElementById(id).style.transform = "scale(1.00)";
    document.getElementById(id).style.border = "none";
    document.getElementById("greetAPI").innerText = "Meet our API.";
}

function  collapseModal(id)
{
    var myModal = new bootstrap.Modal(document.getElementById(id), {
        keyboard: false
      })
    myModal.hide();
}
