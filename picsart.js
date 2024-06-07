document.addEventListener('DOMContentLoaded', function() {
    const introMessage = document.querySelector('.intro-message strong');
    const messageText = introMessage.textContent;
    introMessage.textContent = '';

    let charIndex = 0;

    function typeMessage() {
        if (charIndex < messageText.length) {
            introMessage.textContent += messageText.charAt(charIndex);
            charIndex++;
            setTimeout(typeMessage, 100);
        }
    }

    typeMessage();
});
