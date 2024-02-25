document.getElementById('pizza').addEventListener('click', function() {
  this.style.animation = 'spin 2s linear infinite';
  this.style.transform = 'translate(-50%, -50%) scale(0.5, 0.5) rotate(360deg)';
});
