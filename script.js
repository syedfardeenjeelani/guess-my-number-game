
document.querySelector('.again').addEventListener('click', function () {
    let secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').textContent = 'start guessing';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = "";
    document.querySelector('.score').textContent = score;
})




let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)


    //    when no input
    if (!guess) {
        document.querySelector('.message').textContent = ' ⛔ no number';
    }
    // when player wins
    else if (guess === secretNumber) {

        document.querySelector('.message').textContent = '🎉 correct number'
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = secretNumber;

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    // when guess is too high
    else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = ' 📈Too high'
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '🥲 you lost the game'
            document.querySelector('.score').textContent = 0;
        }
    }
    // when gues is too low
    else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = ' 📉Too low'
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = '🥲 you lost the game'
            document.querySelector('.score').textContent = 0;
        }

    }

})

let number = 4;
let i = 2;
while (i < number) {
    if (number % i === 0 && number % 1 === 0) {
        console.log('not a prime number')
    }
    else {
        console.log('prime number')
    }
    i++
}

