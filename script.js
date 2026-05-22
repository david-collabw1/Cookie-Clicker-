// Game Variables
let cookies = 0;
let cookiesPerSecond = 0;
let upgradeCost = 15;

// DOM Elements
const cookieCountEl = document.getElementById('cookie-count');
const cookieButton = document.getElementById('cookie');
const buyClickerButton = document.getElementById('buy-clicker');
const clickerCountEl = document.getElementById('clicker-count');

// 1. Click the main cookie (Adds 1 cookie manually)
cookieButton.addEventListener('click', () => {
    cookies += 1;
    updateDisplay();
});

// 2. Buy the Multiplier Upgrade
buyClickerButton.addEventListener('click', () => {
    if (cookies >= upgradeCost) {
        cookies -= upgradeCost;
        
        // If starting at 0, first buy gives 1 cookie/sec. Otherwise, double it.
        if (cookiesPerSecond === 0) {
            cookiesPerSecond = 1;
        } else {
            cookiesPerSecond = cookiesPerSecond * 2;
        }
        
        // Increase the cost for the next upgrade (multiplies cost by 2.5)
        upgradeCost = Math.round(upgradeCost * 2.5); 
        
        updateDisplay();
    } else {
        alert("You don't have enough cookies!");
    }
});

// 3. Game loop running every second
setInterval(() => {
    if (cookiesPerSecond > 0) {
        cookies += cookiesPerSecond;
        updateDisplay();
    }
}, 1000);

// 4. Keep the screen updated
function updateDisplay() {
    cookieCountEl.innerText = cookies;
    clickerCountEl.innerText = cookiesPerSecond;
    buyClickerButton.innerText = `Buy 2x Multiplier (Cost: ${upgradeCost})`;
}
