let body = document.body;

let firstImage = document.querySelector('.backone');

	function imgChange() {
		firstImage.classList.toggle("click")
		body.classList.toggle("wrong")
	} 

	firstImage.addEventListener("click", imgChange)

let second = document.querySelector('.backtwo');

	function imgChangeTwo() {
		second.classList.toggle("click")
		body.classList.toggle("wrong")
	} 

	second.addEventListener("click", imgChangeTwo)

let three = document.querySelector('.backthree');

	function imgChangeThree() {
		three.classList.toggle("click")
		body.classList.toggle("right")
	} 

	three.addEventListener("click", imgChangeThree)

let four = document.querySelector('.backfour');

	function imgChangeFour() {
		four.classList.toggle("click")
		body.classList.toggle("wrong")
	} 

	four.addEventListener("click", imgChangeFour)

let five = document.querySelector('.backfive');

	function imgChangeFive() {
		five.classList.toggle("click")
		body.classList.toggle("wrong")
	} 

	five.addEventListener("click", imgChangeFive)

let six = document.querySelector('.backsix');

	function imgChangeSix() {
		six.classList.toggle("click")
		body.classList.toggle("wrong")
	} 

	six.addEventListener("click", imgChangeSix)