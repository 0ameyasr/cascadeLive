/*takes the user to the home page on trigger*/
function activate() 
{
	window.open("../pages/cascadeHome.html",target='_self');
}

/*typewriter-like animated message*/
function typewrite(message, id,timeout,color) {
	/*declare local variables, a counter and an empty string */
    let counter = 0, string = "";

	/*fetch the required division element */
    let messageBar = document.getElementById(id);

	/*set a delay for the entered amount of timeout required by the user */
    setTimeout(function () {
		/*set a very short interval while writing each message character, to get the
		  typewriting animation*/
        let interval = setInterval(function () {
			/*check if the message is being written  */
            if (counter < message.length) {
				/*add the message character to the empty string, also a small underscore
				  that adds the effect of a cursor, commit this string to the messageBar */
                string += message[counter] + "_";
                messageBar.innerText = string;

				/*small timeout to remove the cursor after each second character placed,
				  commit update to string, make the character gray (aesthetics only) and
				  then increase the counter as the character is being written*/
                setTimeout(function () { string = string.replace('_', ''); }, 100);
                messageBar.innerText = string;
                messageBar.style.color = "gray";
                counter++;
            }
			/*if the message is finally written, the underscore tends to linger after the 
		      message, we need to correct this and change the message to the desired color
			  of the user. */
            if (counter == message.length) {
				/*define the subinterval for message clearance and final commitment, change the 
				  color too */
                let subinterval = setInterval(function () { 
				 string = string.replace('_', '');
				 messageBar.innerText = string; 
				 string += '_'; 
			    }, 100);
                messageBar.style.color = color;

				/*clear the animation interval */
                clearInterval(interval);
				/*final replace character and update string to the messageBar */
                string = string.replace('_', '');
				messageBar.innerText = string; 
				string += '_';
				/*clear the underscore clearance subinterval */
                clearInterval(subinterval);
            }
        }, 150);
    }, timeout);
}

/*controls the typewriting messages and the animations */
function loadingBlink() 
{
	/*fetch the message bar, indirectly append the logo child to it, which gives the starting 
	  fadeIn animation.*/
	document.getElementById("loadingMessage").innerHTML = "<div class='logo-container'>A 2 B</div>";
	
	/*typewrite animations, trigger them on a 1 second gap,enter required parameters */
	typewrite("Cascade API","loadingMessage",1000,"white");
	typewrite("Proactive. Predictive. Powerful.","welcome-note",2000,"#ffd700");
	
	/*just a small color stylisation after the entire animation is done, this is for a small duration
	  almost synced to the home page re-direction*/
	setTimeout(function () {
		document.getElementById("loadingMessage").innerHTML="Cascade <font style='color:red'>API</font>";},7000)
	/*just a second later, take the user to the home page. */
	setTimeout(function () {activate()}, 8000);
}