document.addEventListener("DOMContentLoaded", function() {
    let audio = document.querySelector(".audio");
    let soundimg = document.querySelector(".soundimg");

    audio.volume = 0.25;

    soundimg.addEventListener("click", function() {
        if (audio.paused) {
            audio.currentTime = 30;
            audio.play();
            soundimg.classList.remove("soundimgone");
        } else {
            audio.pause();
            soundimg.classList.add("soundimgone");
        }
    });

    audio.addEventListener("ended", function() {
        audio.currentTime = 30; 
        soundimg.classList.add("soundimgone");
    });
});

let envelope = document.querySelector(".envelope");
let popup = document.querySelector(".popup");
let popupTwo = document.querySelector(".popuptwo")

	function envelopeOpacity() {
	   envelope.classList.add("moveback");
	   popup.style.zIndex = "-9";
	   setTimeout(function() {
            envelope.style.zIndex = "-10"; 
        }, 1800);
	}

	envelope.addEventListener("click", envelopeOpacity);

let photoStack = document.querySelector(".photo-stack");
let photos = document.querySelectorAll(".photo");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");

    function changePhotoStack() {
        photoStack.classList.remove("photo-stack");
        photoStack.classList.add("photo-stacktwo");
    }

    function photoRelative() {
        photos.forEach(photo => {
            photo.classList.remove("photo");
            photo.classList.add("relative");
        });
    }

    function shakeAnimation() {
        six.classList.add("shakesix");
        one.classList.add("shakeone");
        two.classList.add("shaketwo");
        three.classList.add("shakethree");
        four.classList.add("shakefour");
        five.classList.add("shakefive");
    }

photoStack.addEventListener("click", function() {
        changePhotoStack();
        photoRelative();
        shakeAnimation();
    });


document.addEventListener("DOMContentLoaded", function() {
    let bird = document.querySelector(".bird");
    let one = document.getElementById("one");

    one.addEventListener("click", function() {
        if (bird.paused) {
            bird.play();
        } else {
            bird.pause();
        }
    });
});

function changeImageOfSix() {
        if (six.classList.contains("relative")) {
            if (six.src.endsWith("6.jpg")) {
                six.src = "postcard1.png";
            } else {
                six.src = "6.jpg";
            }
        }
    }

six.addEventListener("click", changeImageOfSix);

function changeImageOfTwo() {
        if (two.classList.contains("relative")) {
            if (two.src.endsWith("2.jpg")) {
                two.src = "postcard2.png";
            } else {
                two.src = "2.jpg";
            }
        }
    }

two.addEventListener("click", changeImageOfTwo);

function changeImageOfFour() {
        if (four.classList.contains("relative")) {
            if (four.src.endsWith("four.jpg")) {
                four.src = "postcard3.png";
            } else {
                four.src = "four.jpg";
            }
        }
    }

four.addEventListener("click", changeImageOfFour);


