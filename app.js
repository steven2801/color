const start = document.querySelector('.start-btn');
const inGame = document.querySelector('.in-game');
const container = document.querySelector('.container');
const scoreboard = document.querySelector('.scoreboard');
const user = document.querySelector('#input-name');
const avatar = document.querySelector('#avatar');
const us = document.querySelector('.us');

var username = "";
start.addEventListener('click', () => {
    username = document.getElementById('input-name').value;
    if (username === "") {
        username = "player";
    }
    if (function hasWhiteSpace(username) {
        return /\s/g.test(username);
    }) {
        username = username.replace(/\s+/g, '');
    }
    console.log(username)
    start.classList.toggle('defade-animation');
    start.classList.add('d-none');
    inGame.classList.remove('display-none');
    inGame.classList.toggle('fade-animation');
    container.classList.remove('default-height');
    container.classList.add('after-height');
    scoreboard.classList.remove('display-none');
    user.classList.add('display-none');
    avatar.classList.add('display-none');
    us.classList.add('height-zero');
    generateColor();
    countdown();
})

user.addEventListener('keypress', function (e) {
    if (e.key === "Enter") {
        start.classList.add('button-trigger');
        setTimeout(function() {
            start.classList.remove('button-trigger');
        }, 500);
        setTimeout(function something() {
            username = document.getElementById('input-name').value;
            if (username === "") {
                username = "player";
            }
            if (function hasWhiteSpace(username) {
                return /\s/g.test(username);
            }) {
                username = username.replace(/\s+/g, '');
            }
            console.log(username)
            start.classList.toggle('defade-animation');
            start.classList.add('d-none');
            inGame.classList.remove('display-none');
            inGame.classList.toggle('fade-animation');
            container.classList.remove('default-height');
            container.classList.add('after-height');
            scoreboard.classList.remove('display-none');
            user.classList.add('display-none');
            avatar.classList.add('display-none');
            us.classList.add('height-zero');
            generateColor();
            countdown();
        }, 400);
    }
})

var color;
var colorsList = ['green', 'yellow', 'blue', 'black', 'pink', 'red', 'orange'];

const inputColor = document.querySelector('#input');

inputColor.addEventListener('keypress', function (e) {
    if (e.key === "Enter") {
        submitBtn.classList.add('button-trigger');
        setTimeout(function() {
            submitBtn.classList.remove('button-trigger');
        }, 500);
        getInput(color);
    }
})

const h1color = document.querySelector('#color');
function getInput(color) {
    var inputValue = document.getElementById('input').value;
    if (inputValue === color) {
        score = score + correctScore;
        document.getElementById('score').innerHTML = score;
    } else {
        score = score + wrongScore;
        document.getElementById('score').innerHTML = score;
    }
    document.getElementById('input').value = "";
    h1color.style.color = 'black';
    generateColor();
}

function generateColor() {
    var color2 = colorsList[Math.floor(Math.random() * colorsList.length)];
    document.getElementById('color').innerHTML = colorsList[Math.floor(Math.random() * colorsList.length)];
    h1color.style.color = color2;
    color = color2;
}

const submitBtn = document.querySelector('.submit-btn');
const correctScore = 100;
const wrongScore = -150;
var score = 0

function countdown() {
    var timeLeft = setInterval(myTimer, 1000);
    var time = 20;

    function myTimer() {
        time--;
        document.getElementById('time-left').innerHTML = time;
        if (time < 11) {
            const span = document.querySelector('span');
            span.classList.add('red-color');
        }
        if (time === 0) {
            clearInterval(timeLeft);
            var result = `${username} ${score}`
            // var cheat = "steven 999999"
            localStorage.setItem('result', JSON.stringify(result));
            var savedScores = localStorage.getItem('highscores', JSON.stringify(highscores)) || '[]';
            var highscores = [...JSON.parse(savedScores), result]
            // var highscores = "";
            localStorage.setItem('highscores', JSON.stringify(highscores));
            window.location.href = "end.html";
        }
    }
}