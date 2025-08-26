function showPage(id) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// Music controls
const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-toggle');

function playMusic() {
  if (music.paused) {
    music.play();
    musicBtn.textContent = '⏸ Pause';
  } else {
    music.pause();
    musicBtn.textContent = '▶ Play';
  }
}

musicBtn.addEventListener('click', playMusic);

// Optional: tricky "No" button effect on last page
const trickyNo = document.getElementById('tricky-no');
if (trickyNo) {
  trickyNo.addEventListener('mouseenter', () => {
    trickyNo.style.transform = `translate(${Math.random()*100 - 50}px, ${Math.random()*50 - 25}px)`;
  });
}
