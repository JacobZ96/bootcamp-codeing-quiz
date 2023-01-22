// ACCEPTANCE CRITERIA FOR CHALLENGE
    // GIVEN I am taking a code quiz
    // WHEN I click the start button
    // THEN a timer starts and I am presented with a question
    // WHEN I answer a question
    // THEN I am presented with another question
    // WHEN I answer a question incorrectly
    // THEN time is subtracted from the clock
    // WHEN all questions are answered or the timer reaches 0
    // THEN the game is over
    // WHEN the game is over
    // THEN I can save my initials and my score


// VARIABLES THAT CONNECT ELEMENTS OF HTML TO JS
var timeEl = document.querySelector(".time");
var start = document.getElementById("startBtn");
var myAnswers = document.querySelector(".answers");
var option1 = document.querySelector("#opt-1");
var option2 = document.querySelector("#opt-2");
var option3 = document.querySelector("#opt-3");
var option4 = document.querySelector("#opt-4");
var intro = document.querySelector(".intro-section");
var questionsDiv = document.querySelector(".question-section");
var questionTitle = document.querySelector("#question-title");
var userChoices = document.getElementById("answers");
var initials = document.querySelector(".add-initials")
var secondsLeft = 40; // Time alloted for the quiz 
var submit = document.getElementById("submitBtn");
var timerInterval;
var index = 0;

// VARIABLE THAT CONTAINS THE QUESTIONS FOR THE QUIZ
var myQuestions = [ 
    {    
      question: "What is the output of the following code? let myArray = [1, 2, 3];console.log(myArray.length)",
      answers: {
        a: "1",
        b: "2",
        c: "3",
        d: "4"
      },
      correctAnswer: "3"
    },
    {
        question: "What is a tool used to debug code?",
        answers: {
            a: "console.log",
            b: "git/terminal",
            c: "HTML",
            d: "CSS",
        },
        correctAnswer: "console.log"
    },
    {
        question: "Which of these is the incorrect syntax for declaring a variable in JavaScript?",
        answers: {
            a: "var myVariable",
            b: "let myVariable",
            c: "const myVariable",
            d: "MyVariable",
        },
        correctAnswer: "MyVariable"
    },
    {
        question: "How do you create an object in JavaScript?",
        answers: {
            a: "var obj = {}",
            b: "var obj = new Object()",
            c: "var obj = Object()",
            d: "var obj = Object.create()",
        },
        correctAnswer: "var obj = {}"
    },
    {
        question: "Arrays in JavaScript can contain ________.",
        answers: {
            a: "Stings",
            b: "Numbers",
            c: "Booleans",
            d: "All of the above",
        },
        correctAnswer: "All of the above"
    }
];

// FUNCTION THAT STARTS THE QUIZ, HIDES CERTIAN PARTS OF THE PAGE AND DISPLAYES OTHERS
function startQuiz() {
    intro.classList.add("hide");
    questionsDiv.classList.remove("hide");
    runQuestions();
    setTime();
}

// FUNCTION THAT RUNS HOW THE QUESTIONS ARE DISPLAYED ON THE PAGE
function runQuestions() {
    questionTitle.textContent = myQuestions[index].question;
    option1.textContent = myQuestions[index].answers.a;
    option2.textContent = myQuestions[index].answers.b;
    option3.textContent = myQuestions[index].answers.c;
    option4.textContent = myQuestions[index].answers.d; 
}

// EVENTLISTENER THAT SUBTRACTS TIME FOR WRONG ANSWERS AND LOGS WHETHER THAT ANSWER CHOSEN WAS CORRECT OR NOT
userChoices.addEventListener("click", function(event){
    let chosen = event.target.textContent;
    if (chosen == myQuestions[index].correctAnswer) {
        console.log("correct");
    } else {
        secondsLeft = secondsLeft - 5;
        console.log("wrong");
    }
    showNext();
})

// SHOWS THE NEXT QUESTION IN THE ARRAY
function showNext() {
   index++
   if (index >= myQuestions.length) {
       endQuiz();
       return;
    }
    runQuestions();
}

// ADDS INITIALS DIV TO THE PAGE 
function addInitials() {
    questionsDiv.classList.add("hide");
    initials.classList.remove("hide");
}


// FUNCTION TO CREATE A TIMER AND DISPLAYS MESSAGE IF TIME RUNS OUT 
function setTime() {
     timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;

        if (secondsLeft <= 0) {
            endQuiz();
        }
    }, 1000);
}

function sendMessage() {
    timeEl.textContent = "You ran out of time 😢";
}

// FUNCTION TO END THE QUIZ, GIVES HIGH-SCORE, AND PLACE TO INPUT INITIALS
function endQuiz() {
    sendMessage();
    addInitials();
    clearInterval(timerInterval);
    score = secondsLeft;
    getHighScores();
}

// EVENTLISTENER TO START THE QUIZ
start.addEventListener("click", startQuiz);

// VARIABLES AND EVENTLISTENER FOR KEEPING TRACK OF USERINPUTS AND SCORE FOR QUIZ
var score = 0
var userInput = document.getElementById("input");
submit.addEventListener("click", function() {
    var initials = userInput.value;
    console.log(initials);
    score = secondsLeft 
    console.log(score);
    localStorage.setItem(initials, score);
})

// DYNAMIC LIST TO KEEP TRACK OF HIGH-SCORES
function getHighScores() {
    // probably will be in a for loop 
    var highScores =localStorage.getItem('jz');
    var highScoreList = document.getElementById("high-score-list");
    var listEl = document.createElement("li");
    listEl.textContent = highScores;
    highScoreList.append(listEl);
}