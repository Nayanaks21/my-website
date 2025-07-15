// Create 100 floating balloons
for (let i = 0; i < 100; i++) {
  const balloon = document.createElement('div');
  balloon.className = 'balloon';
  balloon.style.left = Math.random() * 100 + 'vw';
  balloon.style.animationDelay = Math.random() * 5 + 's';
  document.getElementById('balloons').appendChild(balloon);
}

// Floating hearts
setInterval(() => {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.innerText = '💖';
  sparkle.style.left = Math.random() * 100 + 'vw';
  sparkle.style.top = Math.random() * 80 + 'vh';
  document.getElementById('sparkles').appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 1000);
}, 200);
