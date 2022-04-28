/* saves the user's name in a cookie */
function getInputValue(){
	var name = document.getElementById("myInput").value;
	document.cookie = name;
}

/* accesses the cookie and if it contains the name writes the message to the webpage */
function output() {
	let name = document.cookie;
	if (name) {
		document.getElementById("nameText").innerHTML = "Carved out with painstaking care it reads: " + name;
	}
}

