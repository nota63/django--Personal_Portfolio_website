document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("introText");
    const text = textElement.textContent;
    textElement.textContent = "";
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        } else {
            textElement.style.opacity = 1;
        }
    }

    typeWriter();
});
