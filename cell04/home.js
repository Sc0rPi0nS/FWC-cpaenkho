const text = "Welcome to our <RUSH PROJECT>";
const typingtext = document.getElementById("typing_text");
let index = 0;

function deletetext() {
    if (index > 0) {
        typingtext.textContent = text.substring(0, index - 1);
        index--;
        setTimeout(deletetext, 50);
    } else {
        setTimeout(typetext, 500);
    }
}

function typetext() {
    if (index < text.length) {
        typingtext.textContent += text[index];
        index++;
        setTimeout(typetext, 100);
    } else {
        setTimeout(deletetext, 1500);
    }
}

typetext();