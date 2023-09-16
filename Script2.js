const text = "Developed By DEEPAK SHARMA";
const speed = 100; 
const textElement = document.getElementById("text"); 

let i = 0;
function typeWriter() {
	if (i < text.length) {
		textElement.innerHTML += text.charAt(i);
		i++;
		setTimeout(typeWriter,  speed);
	}
}

typeWriter();
