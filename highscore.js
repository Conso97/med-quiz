
//Submit score function

function submitScore() {
    let initial = document.getElementById("initial").value;
    
    let highScores = getHighScores();

    if (highScores[initial] === undefined || highScores[initial] < score) {
        highScores[initial] = score;

// write back object as string to session storage

        sessionStorage.setItem('highScores', JSON.stringify(highScores))
        sessionStorage.getItem(highScores); 
    }
}

// Score update function
function updateHighScores() {

    let scoreList = document.getElementById("scoreList");

    if (scoreList === null) {
        return;
    }

    var content = "";
    let highScores = getHighScores();

// Score count element

        let count = 1;
        Object.keys(highScores).forEach(initial => {
            content =  content + '<p id="scoreElement"> ' + count + '. ' + initial + ' - ' + highScores[initial] + '</p>';
            count ++;
        })
    
    scoreList.innerHTML = content;
}

let clearButton = document.getElementById("Clear");

if (clearButton !== null) {
    clearButton.addEventListener("click", clear)
}

// Clear highscore reload function

function clear() {
    sessionStorage.clear();
    location.reload();
}

function getHighScores() {
    let highScores = sessionStorage.getItem('highScores');

// convert json string to object
    if (highScores === null) {
        highScores = {};
    } else {
        highScores = JSON.parse(highScores);
    }
    return highScores
}