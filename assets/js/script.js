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
var timeEl = document.querySelector(".time");

var secondsLeft = 60; // Time alloted for the quiz 

var myQuestions = [ 
    {    
      question: "What is the output of the following code? let myArray = [1, 2, 3];console.log(myArray.length)",
      answers: {
        a: "1",
        b: "2",
        c: "3",
        d: "4"
      },
      correctAnswer: 'c'
    },
    {
        question: "What is a tool used to debug code?",
        answers: {
            a: "console.log",
            b: "git/terminal",
            c: "HTML",
            d: "CSS",
        },
        correctAnswer: 'a'
    },
    {
        question: "Which of these is the incorrect syntax for declaring a variable in JavaScript?",
        answers: {
            a: "var myVariable",
            b: "let myVariable",
            c: "const myVariable",
            d: "MyVariable",
        },
        correctAnswer: 'd'
    },
    {
        question: "How do you create an object in JavaScript?",
        answers: {
            a: "var obj = {}",
            b: "var obj = new Object()",
            c: "var obj = Object()",
            d: "var obj = Object.create()",
        },
        correctAnswer: 'a'
    },
    {
        question: "Arrays in JavaScript can contain ________.",
        answers: {
            a: "Stings",
            b: "Numbers",
            c: "Booleans",
            d: "All of the above",
        },
        correctAnswer: 'd'
    }
];

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}

function sendMessage() {
    timeEl.textContent = "You ran out of time 😢";
}

//setTime();
document.getElementById("startBtn").onclick = setTime();

