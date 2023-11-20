let body = document.body;

let firstImage = document.querySelector('.one');

	function imgChange() {
		firstImage.classList.toggle("click")
	} 

	firstImage.addEventListener("click", imgChange)

let second = document.querySelector('.two');

	function imgChangeTwo() {
		second.classList.add("click")
	} 

	second.addEventListener("click", imgChangeTwo)

let three = document.querySelector('.three');

	function imgChangeThree() {
		three.classList.add("click")
	} 

	three.addEventListener("click", imgChangeThree)

let four = document.querySelector('.four');

	function imgChangeFour() {
		four.classList.add("click")
	} 

	four.addEventListener("click", imgChangeFour)

let five = document.querySelector('.five');

	function imgChangeFive() {
		five.classList.add("click")
	} 

	five.addEventListener("click", imgChangeFive)

let six = document.querySelector('.six');

    function imgChangeSix() {
      six.classList.add("click");
      body.classList.add("wrong")

// got help from chatgpt
      requestAnimationFrame(function () {
        setTimeout(function () {
          showPopup("oh no! you've let the mouse out! \nclick 'okay' to start over");

          setTimeout(function () {
            location.reload();
          }, 800);
        }, 500);
      });
    }

    function showPopup(message) {
      alert(message);
    }

    six.addEventListener("click", imgChangeSix);


let seven = document.querySelector('.seven');

	function imgChangeSeven() {
		seven.classList.add("click")
	} 

	seven.addEventListener("click", imgChangeSeven)

let eight = document.querySelector('.eight');

	function imgChangeEight() {
		eight.classList.add("click")
	} 

	eight.addEventListener("click", imgChangeEight)

let nine = document.querySelector('.nine');

	function imgChangeNine() {
		nine.classList.add("click")
	} 

	nine.addEventListener("click", imgChangeNine)