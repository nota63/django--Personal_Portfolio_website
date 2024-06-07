// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const services = document.querySelectorAll('.service');
    const popup = document.getElementById('popup');
    const purchasePopup = document.getElementById('purchase-popup');
    const loading = document.getElementById('loading');
    const randomPriceElement = document.getElementById('random-price');
    const closeButtons = document.querySelectorAll('.close');
    const getPriceButton = document.getElementById('get-price');
    const purchaseButton = document.getElementById('purchase');

    services.forEach(service => {
        service.addEventListener('click', () => {
            popup.style.display = 'flex';
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            popup.style.display = 'none';
            purchasePopup.style.display = 'none';
        });
    });

    getPriceButton.addEventListener('click', () => {
        const randomPrice = Math.floor(Math.random() * (100000 - 15000 + 1)) + 15000;
        randomPriceElement.textContent = randomPrice;
        popup.style.display = 'none';
        purchasePopup.style.display = 'flex';
    });

    purchaseButton.addEventListener('click', () => {
        purchasePopup.style.display = 'none';
        loading.style.display = 'flex';
        setTimeout(() => {
            loading.style.display = 'none';
            alert('Your request has been raised, wait for a reply.');
        }, 3000);
    });
});
