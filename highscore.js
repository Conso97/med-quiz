
function submitScore() {
    let initial = document.getElementById("initial").value;
    
    let playerScore = sessionStorage.getItem(initial);
    if (playerScore === null || parseInt(playerScore) < score) {
        sessionStorage.setItem(initial, score);
    }
    
    sessionStorage.getItem(initial); // read to persist
}

function updateHighScores() {

    let scoreList = document.getElementById("scoreList");

    if (scoreList === null) {
        return;
    }

    var content = "";
    Object.keys(sessionStorage).forEach(initial => {
       content =  content + '<p> ' + initial + ' - ' + sessionStorage.getItem(initial) + '</p>';
    })
    
    scoreList.innerHTML = content;
}

let clearButton = document.getElementById("Clear");

if (clearButton !== null) {
    clearButton.addEventListener("click", clear)
}

function clear() {
    sessionStorage.clear();
    location.reload();
}