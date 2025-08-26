function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');
}

// Music toggle
const music = document.getElementById("bg-music");
const toggleBtn = document.getElementById("music-toggle");

function playMusic() {
  if (music.paused) {
    music.play();
    toggleBtn.textContent = "⏸ Pause";
  }
}

toggleBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    toggleBtn.textContent = "⏸ Pause";
  } else {
    music.pause();
    toggleBtn.textContent = "▶ Play";
  }
});

// Tricky No button moves away
const trickyNo = document.getElementById("tricky-no");
if (trickyNo) {
  trickyNo.addEventListener("mouseover", () => {
    const btn = trickyNo;
    const container = document.querySelector(".btn");
    const maxX = container.offsetWidth - btn.offsetWidth;
    const maxY = container.offsetHeight - btn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    btn.style.left = `${randomX}px`;
    btn.style.top = `${randomY}px`;
  });
}
