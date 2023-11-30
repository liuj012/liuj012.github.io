let first = document.getElementById("one");

first.addEventListener("click", function() {
  console.log("Video clicked");
  if (first.paused) {
    first.play();
    first.classList.remove("bw");
  } else {
    first.pause();
  }
});

let second = document.getElementById("two");

second.addEventListener("click", function() {
  console.log("Video clicked");
  if (second.paused) {
    second.play();
    second.classList.remove("bw");
  } else {
    second.pause();
  }
});

let third = document.getElementById("three");

third.addEventListener("click", function() {
  console.log("Video clicked");
  if (third.paused) {
    third.play();
    third.classList.remove("bw");
  } else {
    third.pause();
  }
});