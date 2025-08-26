const audio = document.getElementById("bg-music");

if (audio) {
  // Restore last position if available
  const lastTime = localStorage.getItem("music-time");
  if (lastTime) {
    audio.currentTime = parseFloat(lastTime);
  }

  audio.play().catch(() => {
    console.log("Autoplay blocked, user must click once");
  });

  // Save time every 2s
  setInterval(() => {
    localStorage.setItem("music-time", audio.currentTime);
  }, 2000);
}
