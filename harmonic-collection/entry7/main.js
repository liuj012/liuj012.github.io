let video = document.getElementById("video");

video.addEventListener("click", function() {
  console.log("Video clicked");
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});
