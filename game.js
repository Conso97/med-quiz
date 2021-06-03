
//An array list of questions - text, answeres, correct answers 
let myQuestions = [{ question: "All the traits that are passed biologically from parent to child are considered?", answers: { 1: "1.Culture", 2: "2.Heredity", 3: "3.Gender", 4: "4.Environment", }, correctAnswer: "2", }, 
{ question: "Which form of arthritis is associated with the formation of uric acid crystals in the joint?", answers: { 1: "1.Comminuted fracture", 2: "2.Spin bifida", 3: "3.Gouty arthritis", 4: "4.Paget's disease", }, correctAnswer: "3", }, 
{ question: "Which diagnostic technique is used to detect cancer in osteomyelitis?", answers: { 1: "1.Bone scan", 2: "2.Luxation", 3: "3.Osteomalacia", 4: "4.Leukemia", }, correctAnswer: "1", }, 
{ question: "Which term means any degenerative condition of the vertebrae?", answers: { 1: "1.Chondroplasty", 2: "2.Osteomalacia", 3: "3.Spondylitis", 4: "4.Spondylosis", }, correctAnswer: "4", } ];

//A 'questionIndex' to point to the current question 

let questionIndex = 0;
let score = 0;
let currentTime = 75;

function renderQuestion() {
if (questionIndex >= myQuestions.length) return;
let show = document.getElementById('question');
let q = myQuestions[questionIndex];
show.innerHTML = q.question;
Object.entries(q.answers).forEach(([number,text]) => {
const but = document.getElementById(number);
but.innerHTML = text;
})
}

// startGame
document.getElementById("buttons").addEventListener("click", function(e) {
const tgt = e.target;
if (tgt.type && tgt.type === "button") {
document.getElementById("result").underText = tgt.dataset.correct === "true" ? "Correct" : "Incorrect"
}
})

document.getElementById("buttons").addEventListener("click", renderQuestion)

//Compare against the correct answer for the current question, subtracts (10 sec) if incorrect  
function answerQuestion(userAnswer) {
    let correctAnswer = myQuestions[questionIndex].correctAnswer;
    if (userAnswer == correctAnswer) {
      score ++;
    } else {
      currentTime -= 10;
    }
//Continue to next question 'renderCurrentQuestion' (inceriment pointed by ++ moving it by 1 and recall current question)
    document.getElementById("gradeValue").innerHTML = userAnswer == correctAnswer ? "Correct" : "Wrong";
    document.getElementById("gradeValue").style.display = "block";
    document.getElementById("grade").style.display = "block";
  
    questionIndex++;
  
    if (questionIndex == myQuestions.length) {
      // end game after the last question
      endGame();
    }
  }

//Create a 'start game' function (initializing the startinging 'timeleft' value + score) 

function startGame() {

var startScreen = document.getElementById("start-screen");
var questionScreen = document.getElementById("questions");

// Replaced start screen with questions now
startScreen.style.display = "none";
questionScreen.style.display = "block";

renderQuestion();

startTimer();
}
let gameOver = false;
function endGame() {
gameOver = true;
var questionScreen = document.getElementById("questions");
var endScreen = document.getElementById("end-screen");

// Shows the end screen
questionScreen.style.display = "none";
endScreen.style.display = "block";

// Displays score
document.getElementById("end-message").innerHTML = "Your final score is " + score;
}

function startTimer() {
// Starts the timer
var timer = setInterval(function() {
document.getElementById("time").innerHTML = currentTime;
currentTime --;

if (currentTime < 0) {
clearInterval(timer);
endGame();
} 
if (gameOver) {
clearInterval(timer);
}
}, 1000)
}
