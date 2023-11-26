// click the correct button, next number shows
// click the wrong button, page has popup and then reloads
// got help from chatgpt on how to simplify and organize the code

function showHidden(elementToShow) {
       elementToShow.removeAttribute('id');
       elementToShow.scrollIntoView({ behavior: 'smooth' });
      }

function wrong() {
       setTimeout(function () {
            showPopup("That's wrong. Click 'OK' to try again");
            location.reload();
      }, 100);
      }

function showPopup(message) {
       alert(message);
      }

document.addEventListener("DOMContentLoaded", function () {
            // First set of elements
      let first = document.querySelector(".lowerOne");
      let firstShow = document.querySelector(".two");
      let firstWrong = document.querySelector(".higherOne");

      first.addEventListener("click", function () {
                showHidden(firstShow);
      });

      firstWrong.addEventListener("click", wrong);

            // Second set of elements
      let second = document.querySelector(".higherTwo");
      let secondShow = document.querySelector(".three");
      let secondWrong = document.querySelector(".lowerTwo");

      second.addEventListener("click", function () {
            showHidden(secondShow);
      });

      secondWrong.addEventListener("click", wrong);

            // Third set of elements
      let third = document.querySelector(".higherThree");
      let thirdShow = document.querySelector(".four");
      let thirdWrong = document.querySelector(".lowerThree");

      third.addEventListener("click", function () {
            showHidden(thirdShow);
      });

      thirdWrong.addEventListener("click", wrong);

            // Fourth set of elements
      let fourth = document.querySelector(".lowerFour");
      let fourthShow = document.querySelector(".five");
      let fourthWrong = document.querySelector(".higherFour");

      fourth.addEventListener("click", function () {
            showHidden(fourthShow);
      });

      fourthWrong.addEventListener("click", wrong);

            // Fifth set of elements
      let fifth = document.querySelector(".higherFive");
      let fifthShow = document.querySelector(".six");
      let fifthWrong = document.querySelector(".lowerFive");

      fifth.addEventListener("click", function () {
            showHidden(fifthShow);
      });

      fifthWrong.addEventListener("click", wrong);
});

