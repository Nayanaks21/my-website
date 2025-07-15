// 🎈 Create floating balloons
function createBalloon() {
  const balloon = document.createElement('div');
  balloon.classList.add('balloon');

  // Random horizontal position (0% to 100%)
  balloon.style.left = Math.random() * 100 + 'vw';

  // Random animation delay
  balloon.style.animationDelay = Math.random() * 5 + 's';

  document.getElementById('balloons').appendChild(balloon);

  // Remove after animation
  setTimeout(() => {
    balloon.remove();
  }, 6000);
}

setInterval(createBalloon, 300);

// 💖 Floating hearts
setInterval(() => {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.innerText = '💖';
  sparkle.style.left = Math.random() * 100 + 'vw';
  sparkle.style.top = Math.random() * 80 + 'vh';
  document.getElementById('sparkles').appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 1000);
}, 200);
