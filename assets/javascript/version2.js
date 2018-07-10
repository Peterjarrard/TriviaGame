
var questions = ["Question One",
"Question Two",
"Question Three",
"Question Four",
"Question Five",
"Question Six",
"Question Seven",
"Question Eight",
"Question Nine",
"Question Ten",
];
var answer = ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10"];

var wrongAnswer = ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10"];

var intervalId;
// var time = 25;
var time = 5;
var i = 0;
var correct = 0;
var incorrect = 0;
var right = true ; 
var wrong = false ;


$(document).ready(function () {
//========================================================================================================================================================================
// Store functions in this section that set up display on initial load of webpage
$(".jumbotron").hide();


// console.log(questions.Q1);
// console.log(questions.Q2);
// console.log(questions.Q3);
// console.log(questions.Q4);


//========================================================================================================================================================================

// hides start button and displays jumbotron
$("#startbutton").on("click", function () {
    $("#startbutton").hide();
    $(".jumbotron").show();
    questionTimer();
    nextQuestion();
})

function rightOrWrong () {
    if (right) {
        correctAnswer();
    } else if (wrong) {
        wrongAnswer();
    }
}

// Display on screen when answer is Incorrect
function wrongAnswer() {
    i++ ;
    setTimeout(wrongAnswer, 5000);
    $("#rightOrWrong").html("INCORRECT!");
    stopOrContinue();

}
  // Display on screen when answer is correct
  function correctAnswer() {
    i++ ;
    setTimeout(correctAnswer, 5000);
    $("#rightOrWrong").html("CORRECT!");
    stopOrContinue();
}

// starts the round
function questionTimer() {
    intervalId = setInterval(decrement, 1000);
}

// Sets rate at which timer decreases (One Second)
function decrement() {
    time--;
    $("#questiontimer").html(time);
    if (time === 0) {
        wrong = true ;     
    }
}

// Resets Timer
function resetTimer() {
    // time = 25;
    time = 5;
}

// Determines whether to continue [ nextQuestion() ] or if game is over [ gameReset() ]
function stopOrContinue() {
    if (i <= questions.length) {
        nextQuestion();
    } else {
        gameReset();
    }
}

// Displays next question
function nextQuestion() {
    resetTimer();
    right = false ; 
    wrong = false ; 

    $("#question").html(questions[i]);
    $("#answerOne").html("A: " + answer[i]);
    $("#answerTwo").html("B: " + wrongAnswer[i]);
    $("#answerThree").html("C: " + wrongAnswer[i]);
    $("#answerFour").html("D: " + wrongAnswer[i]);
}

// Resets Game
function gameReset() {
    i = 0;
    correct = 0;
    incorrect = 0;
}



}) //closes $(document).ready(function()