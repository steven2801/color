const backHome = document.querySelector('.back-home');
backHome.addEventListener('click', () => {
    window.location.href = "home.html";
})

const playAgain = document.querySelector('.play-again');
playAgain.addEventListener('click', () => {
    window.location.href = "index.html";
})

var retrievedObject = localStorage.getItem('result');
var output = retrievedObject.replace(/['"]+/g, '');
document.getElementById('last').innerHTML = output;
