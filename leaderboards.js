var retrievedHighscore = localStorage.getItem('highscores');
var highscores = [...JSON.parse(retrievedHighscore)]
console.log(highscores)
var output1 = "";
var output2 = "";
var topten = [];
for (let scores of highscores) {
    var split = scores.split(" ");
    topten.push(parseInt(split[1]));
}
topten.sort(function(a, b) {
    return a - b
})
topten.reverse();
topten.slice(0, 10);
console.log(topten)

var highscoreCopy = [...highscores]
for (let scor of topten) {
    console.log(highscoreCopy)
    for (var [index, element] of highscoreCopy.entries()) {
        console.log(index, element)
        if (element === undefined) {
            continue;
        }
        if (element.includes(String(scor))) {
            var split = element.split(" ")
            output1 = output1 + split[0] + "\n";
            output2 = output2 + split[1] + "\n"
            var i = index;
            delete highscoreCopy[i];
            break;
        }
    } 
}

document.getElementById('span1').innerHTML = output1;
document.getElementById('span2').innerHTML = output2;

const back = document.querySelector('button');
back.addEventListener('click', () => {
    window.location.href = "index.html";
})