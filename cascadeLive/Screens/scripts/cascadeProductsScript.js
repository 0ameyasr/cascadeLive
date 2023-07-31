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

//collapseModal function to hide the modal
function  collapseModal(id)
{
    var myModal = new bootstrap.Modal(document.getElementById(id), {
        keyboard: false
      })
    myModal.hide();
}

//this function will launch the demo for each product once triggered
function demoLaunch(id)
{
    let demostring="";
    switch(id)
    {
        case "1":
            demostring="CPP>>\n"+"int factorial(int n) {\n"+
                "if (n < 0) {\n"+
                "    return 0;\n"+
                "}\n"+
                "int result = 1;\n"+
                "for (int i = 1; i <= n; ++i) {"+
                "result *= i;"+
                "}\n"+
                "return result;\n}"+
                "\n\nCIDEr::\n"+
                "define n!:: take Z:n ::\n if n lte:1 then return:1 \n else return n*(n-1)!"
            typewrite(demostring,"demoOne");
            break;
        case "2":
            demostring="C>>\n"+
            "int arraySum(int *arr, int size) {\n"+
            "   int sum = 0; \n"+
            "   for (int i = 0; i < size; i++) {"+
            "sum += *(arr + i);"+
            "}\n"+
            "    return sum;"+
            "}\n\n"+
            "CIDEr:: \n"+
            "int arraySum(Z:arr*,int size){\n"+
            "   take sum = 0;\n"+
            "   for(int i=0;i:lt:size;i++) { \n"+
            "       sum updates to arr[i];\n"+
            "   }\n"+
            "   return sum;\n"+
            "}"
            typewrite(demostring,"demoTwo");
            break;
        case "3":
            setTimeout(function () {
            demostring="Go>>\n func decimalToBinary(num int) string {\n"+
            "   if num == 0 {\n"+
            "       return '0'\n"+
            "    }\n"+
            "   binary := ''\n"+
            "   for num > 0 {\n"+
            "       remainder := num % 2\n"+
            "       binary = strconv.Itoa(remainder) + binary\n"+
            "       num /= 2\n"+
            "   }\n"+  
            "   return binary\n"+
            "}\nCIDEr:: Go:pseudo:Java\n";
            typewrite(demostring,"demoThree");},1000);
            setTimeout(function () {document.getElementById("demoThree").innerText="";
            demostring= "CIDEr::Go:pseudo\n"+
            "define decimalToBinary:: take Z:num throw ~:reverse::bin\n"+
            "   if num is 0 then bin is '0'\n"+
            "   while num>0 do bin append ~(num%2) step num/2\n"+
            "\nCIDEr::Java>>\n"+
            "public static String decimalToBinary(int decimal) {\n"+
            "    StringBuilder binary = new StringBuilder();\n"+
            "    if (decimal == 0) {\n"+
            "      return \"0\";\n"+
            "   }\n"+
            "   while (decimal > 0) {\n"+
            "       int remainder = decimal % 2;\n"+
            "       binary.append(remainder);\n"+
            "       decimal /= 2;\n"+
            "    }\n"+
            "    return binary.reverse().toString();\n"+
            "}";
            typewrite(demostring,"demoThree");
            },40000);
            break;
        case "4":
            demostring="Python>>\n"+
            "import math\n"+
            "def circle(radius):\n"+
            "   area = math.pi * radius * radius\n"+
            "   return area\n\n"+
            "CIDEr:custom::Python\n"+
            "--generic-return: provide\n"+
            "--generic-multiply: --generic-chain\n"+
            "--generic-chain-sep: [,]\n"+
            "--const-archimedes: pi\n"+
            "--generic-import: call --\n\n"+
            "Python::CIDEr>>\n"+
            "call math\n"+
            "def circle(radius):\n"+
            "   provide area = pi,radius,radius";
            typewrite(demostring,"demoFour");
            break;
        case "5":
            demostring="CDE/CPVAS/NLCUI...\n"+
            "issues:\n"+
            "1.absurd indentation after return @8\n"+
            "   ...recommends outer indent lines @9 to @12\n"+
            "2.interpreter missing main\n"+
            "   ...to enclose @9 to @12, generate call\n"+
            "suggestions:\n"+
            "1. randomness can be improved\n"+
            "   ...import secrets, use encryptionkey as\n"+
                    "...secrets.tokenhex(keyLength)\n";
            typewrite(demostring,"demoFive");
            break; 
        case "6":
            demostring="CLE/Toucan/NLCUI...\n"+
            "The map() method creates a new array populated with the results of calling\n"+
            "a provided function on every element in the calling array.\n"+
            "Syntax:\n"+
            "map(callbackFn) OR map(callbackFn, thisArg)\n"+
            "   ...callbackFn : A function to execute for each element in the array.\n"+
            "      Its return value is added as a single element in the new array.\n"+
            "      takes element, index, array.\n"+
            "   ...thisArg : A this: reference to the value to be used when executing callbackFn\n"+
            "returns: a new array with each element as a result of callbackFn\n"+
            "description: map() is an iterative, generic copying method. It does not alter 'this:'\n"+
            "support(desk): chrome 1/edge 12/firefox 1.5/opera 9.5/safari 3\n"+
            "source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference";
            typewrite(demostring,"demoSix");
            break;
        case "7":
            demostring="CLE/Toucan/IBPEM/NLCUI...\n"+
            "...critical, no integration found with CIDEr.\n"+
            "   ...integrate using CIDEr::JS>>\n"+
            "...minor, did you mean Math.PI (PI?)\n"+
            "...critical, 'result' not declared\n"+
            "...severe, method block not closed\n"+
            "...critical, onload() is not a method\n"+
            "...also, several indentation issues."+
            "...sprint:\n"+
            "   ...dry run for 0,Math.PI,1 with default n=10\n"+
            "      ...0.00, -1.77e-15, 1.56\n"+
            "   ...limits in 0,Math.PI,+Math.PI/2,-Math.PI/2 tends to 0,0,inf,-inf";
            typewrite(demostring,"demoSeven");
            break;
        case "8":
            demostring="CSTe/Observer/Stressor/NLCUI...\n"+
            "...target-active-load: 3/7 avbl users\n"+
            "...target-admin-access: none\n"+
            "...target-stress-handler: 5/7, 67%\n"+
            "...target-access-volume: 323.9 MiB\n"+
            "...target-scales-payload: 58%\n"+
            "...target-fetch-request: 766ms\n"+
            "...target-fetch-response: 213ms\n"+
            "...target-throughput: 553ms\n"+
            "...target-memory-usage: 44.2MiB (peak)\n"+
            "...target-cpu-usage: 2% (mean)\n"+
            "...target-transaction-bitrate: 323Kbs\n"+
            "...target-db-dynamo: none\n"+
            "...target-concurrency: 5 (peak)\n"+
            "...target-error-handler: 81/109\n"+
            "...target-response-overall: 86%";
            typewrite(demostring,"demoEight");
            break;
        case "9":
            demostring="CSTe/Watchdog/NLCUI...\n"+
            "...target-pulse: 313ms\n"+
            "---hidden::fetched:observer-probe-strict\n"+
            "...target-anomaly-index: 87/100\n"+
            "...launching rampage probe: watchdog, awaken::\n"+
            "   ...target-gray-case: worm\n"+
            "   ...target-worm-sign-true: true\n"+
            "   ...target-fetch-signature: bayTHZZx72350kqjp52o152921nnx235...\n"+
            "   ...target-severity: minor\n"+
            "   ...target-is-orphan: true\n"+
            "   ...target-cpu-usage:99% (spike 97%)\n"+
            "   ---hidden::fetched:CPVAS:path-strict\n"+
            "   ...watchdog-vitals: 99% \n"+
            "   ...watchdog-shield-wall: 97% \n"+
            "   ...watchdog-honeycomb: 1300/1300\n"+
            "   ...watchdog-mode-rampage: true\n"+
            "...watchdog:trigger::awaken:IBPEM\n"+
            "...worm bayTHZZx... exterminated";
            typewrite(demostring,"demoNine");
            break;
        default:
            alert(id);
    }
}