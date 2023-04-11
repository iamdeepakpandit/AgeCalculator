const text = "Developed By DEEPAK SHARMA"; // Text to be typed
const speed = 100; // Typing speed (in milliseconds)
const textElement = document.getElementById("text"); // Get the text element

let i = 0;
function typeWriter() {
	if (i < text.length) {
		textElement.innerHTML += text.charAt(i); // Add the next character
		i++;
		setTimeout(typeWriter,  speed); // Call the function again after the specified speed
	}
}

typeWriter(); // Call the function to start the animation
