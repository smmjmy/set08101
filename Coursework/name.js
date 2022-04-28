

function getInputValue(){
	var name = document.getElementById("myInput").value;
	document.cookie = name;
}


function output() {
	let name = document.cookie;
	if (name) {
		document.getElementById("nameText").innerHTML = "Carved out with painstaking care it reads: " + name;
	}
}
