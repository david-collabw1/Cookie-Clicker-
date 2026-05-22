# Cookie-Clicker-
a good knock off game, you might get bored, but leave it open and running!!
# COOKIE CLICKER

A custom cookie clicker game that starts at 0 and multiplies your production by 2x with every upgrade!

## 📄 Game Code Storage

### 1. index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Cookie Clicker</title>
    <style>
        body { text-align: center; font-family: sans-serif; background-color: #f0e6d6; padding-top: 50px; }
        h1 { font-size: 3rem; color: #5c3a21; margin-bottom: 20px; }
        #cookie { font-size: 100px; cursor: pointer; background: none; border: none; transition: transform 0.1s; }
        #cookie:active { transform: scale(0.9); }
        button.upgrade { padding: 10px 20px; font-size: 16px; margin: 10px; cursor: pointer; }
    </style>
</head>
<body>
    <h1>COOKIE CLICKER</h1>
    <p style="font-size: 24px;">Cookies: <span id="cookie-count">0</span></p>
    <button id="cookie">🍪</button>
    <br><br>
    <button id="buy-clicker" class="upgrade">Buy 2x Multiplier (Cost: 15)</button>
    <p>Cookies Per Second: <span id="clicker-count">0</span></p>
    <script src="script.js"></script>
</body>
</html>
```

### 2. script.js
```javascript
let cookies = 0;
let cookiesPerSecond = 0;
let upgradeCost = 15;

const cookieCountEl = document.getElementById('cookie-count');
const cookieButton = document.getElementById('cookie');
const buyClickerButton = document.getElementById('buy-clicker');
const clickerCountEl = document.getElementById('clicker-count');

cookieButton.addEventListener('click', () => {
    cookies += 1;
    updateDisplay();
});

buyClickerButton.addEventListener('click', () => {
    if (cookies >= upgradeCost) {
        cookies -= upgradeCost;
        if (cookiesPerSecond === 0) {
            cookiesPerSecond = 1;
        } else {
            cookiesPerSecond = cookiesPerSecond * 2;
        }
        upgradeCost = Math.round(upgradeCost * 2.5); 
        updateDisplay();
    } else {
        alert("You don't have enough cookies!");
    }
});

setInterval(() => {
    if (cookiesPerSecond > 0) {
        cookies += cookiesPerSecond;
        updateDisplay();
    }
}, 1000);

function updateDisplay() {
    cookieCountEl.innerText = cookies;
    clickerCountEl.innerText = cookiesPerSecond;
    buyClickerButton.innerText = `Buy 2x Multiplier (Cost: ${upgradeCost})`;
}
```
