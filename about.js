// scripts.js
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('About Me section loaded successfully!');

    // Create bubble effect
    for (let i = 0; i < 20; i++) {
        createBubble();
    }
});

function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.left = `${Math.random() * 100}vw`;
    bubble.style.animationDuration = `${Math.random() * 10 + 5}s`;
    bubble.style.width = `${Math.random() * 20 + 10}px`;
    bubble.style.height = bubble.style.width;
    document.body.appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
        createBubble();
    }, (Math.random() * 10 + 5) * 1000);
}
