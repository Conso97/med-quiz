// minutes = minutes < 10 ? "0" + seconds;

// display.textContent = seconds;

// if (--timer < 0) {
//     timer = 0;
//     // timer = duration; // uncomment this line to reset timer automatically after reaching 0
// }
// // }, 1000);
// // }

// window.onload = function () {
// var time = 60 / 2, // your time in seconds here
// display = document.querySelector('#Time');
// startTimer(time, display);
// };

let myQuestions = [{ question: "All the traits that are passed biologically from parent to child are considered?", answers: { 1: "1.Culture", 2: "2.Heredity", 3: "3.Gender", 4: "4.Environment", }, correctAnswer: "2", }, 
                   { question: "Which form of arthritis is associated with the formation of uric acid crystals in the joint?", answers: { 1: "1.Comminuted fracture", 2: "2.Spin bifida", 3: "3.Gouty arthritis", 4: "4.Paget's disease", }, correctAnswer: "3", }, 
                   { question: "Which diagnostic technique is used to detect cancer in osteomyelitis?", answers: { 1: "1.Bone scan", 2: "2.Luxation", 3: "3.Osteomalacia", 4: "4.Leukemia", }, correctAnswer: "1", }, 
                   { question: "Which term means any degenerative condition of the vertebrae?", answers: { 1: "1.Chondroplasty", 2: "2.Osteomalacia", 3: "3.Spondylitis", 4: "4.Spondylosis", }, correctAnswer: "4", } ];

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

// startGame();


document.getElementById("buttons").addEventListener("click", function(e) {
  const tgt = e.target;
  if (tgt.type && tgt.type === "button") {
    document.getElementById("result").underText = tgt.dataset.correct === "true" ? "Correct" : "Incorrect"
  }
})

document.getElementById("buttons").addEventListener("click", renderQuestion)

//Create 'answerQuetion' function (Listen from a parent element)
    //Get the value associated with the clicked 'button' (event.target)
    //Compare against the correct answer for the current question
        //if incorrect  ...
            //Subtract points from teh 'score'
    //Continue to next question 'renderCurrentQuestion' (inceriment pointed by ++ moving it by 1 and recall current question)
function answerQuestion(userAnswer) {
  let correctAnswer = myQuestions[questionIndex].correctAnswer;
  if (userAnswer == correctAnswer) {
    score ++;
  } else {
    currentTime -= 10;
  }
  questionIndex++;

  if (questionIndex == myQuestions.length) {
    // end game after the last question
    endGame();
  }
}

//Create a 'start game' function
//initializing the startinging 'timeleft' value + score 
//start the running countdown on the timer + Score 
// Hide the start screen element and show the first question 

function startGame() {
  
  var startScreen = document.getElementById("start-screen");
  var questionScreen = document.getElementById("questions");

  // replace start screen with questions now
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

  // show the end screen
  questionScreen.style.display = "none";
  endScreen.style.display = "block";

  // display score
  document.getElementById("end-message").innerHTML = "Your final score is " + score;
}

function startTimer() {
  // start the timer
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

