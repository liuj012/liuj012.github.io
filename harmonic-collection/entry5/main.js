// got help from chat gpt for the math random

let rock = document.querySelector(".rock")
let paper = document.querySelector(".paper")
let scissor = document.querySelector(".scissor")

function showRandomRock() {
    const randomNum = Math.floor(Math.random() * 3) + 1;
    hideAllRocks();
    let rockResult = document.querySelector('.rock' + randomNum);
    rockResult.classList.remove('hidden');
    rockResult.scrollIntoView({ behavior: 'smooth' });
}

function hideAllRocks() {
    // Hide all result divs
    for (let i = 1; i <= 3; i++) {
        document.querySelector('.rock' + i).classList.add('hidden');
    }
}

rock.addEventListener("click", showRandomRock);

function showRandomPaper() {
    const randomNum = Math.floor(Math.random() * 3) + 1;
    hideAllPaper();
    let paperResult = document.querySelector('.paper' + randomNum);
    paperResult.classList.remove('hidden');
    paperResult.scrollIntoView({ behavior: 'smooth' });
}

function hideAllPaper() {
    // Hide all result divs
    for (let i = 1; i <= 3; i++) {
        document.querySelector('.paper' + i).classList.add('hidden');
    }
}

paper.addEventListener("click", showRandomPaper);

function showRandomScissor() {
    const randomNum = Math.floor(Math.random() * 3) + 1;
    hideAllScissor();
    let scissorResult = document.querySelector('.scissor' + randomNum);
    scissorResult.classList.remove('hidden');
    scissorResult.scrollIntoView({ behavior: 'smooth' });
}

function hideAllScissor() {
    // Hide all result divs
    for (let i = 1; i <= 3; i++) {
        document.querySelector('.scissor' + i).classList.add('hidden');
    }
}

scissor.addEventListener("click", showRandomScissor);