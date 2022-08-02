
var startButton = document.querySelector("#start-quiz-button");
var quizQuestionsEl = document.querySelector("#quiz-questions");
var initialsSubmitClick = document.querySelector("#submit-button")


//var formEl = document.querySelector("submit-initials-button");
// var submitButton = document.querySelector("#submit-button");

// var inistialsListToDo = document.querySelector("#initials-list");
// var highScoreSubmitClick = document.querySelector("#initials-item");
var initialHighScoreClick = document.querySelector("#view-high-score");
var questionTitleText = document.querySelector("#question-title");
var initialsTitleText = document.querySelector("#initials-title");
var initialsList = document.querySelector("#initials-list");
var currentQuestion = "";
var counter = "";
var countdownFunction = "";
var formEl = "";
//local storage auto input
// inputEl.value = localStorage.getItem("input");

var scores = [];

// questions
const questions = [
    {
        questionText: "Commonly used data types do NOT include:",
        answers: ['Strings', 'Booleans', 'Alerts', 'Numbers'],
        correctAnswer: 2
    },
    {
        questionText: "Arrays can be used to store:",
        answers: ['Numbers', 'Other Arrays', 'Booleans', 'All of the above'],
        correctAnswer: 3
    }
];

//START QUIZ

function startQuiz() {
    counter = 20
    document.querySelector("#timer-contents").innerHTML = "Timer: " + counter;
    countdownFunction = setInterval(startTimer, 1000);
    currentQuestion = 0;
    displayQuiz(currentQuestion);
};

function displayQuiz(q) {
    var questionTitle = document.createElement("h2");
    questionTitle.className = "question-title";
    questionTitle.textContent = questions[q].questionText;
    questionTitleText.appendChild(questionTitle);

    for (let i = 0; i < questions[q].answers.length; i++) {
        var questionItemEl = document.createElement("button");
        questionItemEl.className = "quiz-questions";
        questionItemEl.textContent = questions[q].answers[i];
        quizQuestionsEl.appendChild(questionItemEl);
        questionItemEl.addEventListener('click', function () {
            if (questions[q].correctAnswer == [i]) {
                console.log('Correct Answer!');
                goToNextQuestion();
            } else {
                console.log('Wrong Answer!');
                counter = counter - 5;
                if (counter < 0) {
                    counter = 0;
                }
                goToNextQuestion();
            }
        });
    };
};

function goToNextQuestion() {
    //empty question title node
    while (questionTitleText.firstChild) {
        questionTitleText.removeChild(questionTitleText.firstChild);
    }
    //empty quiz item node
    while (quizQuestionsEl.firstChild) {
        quizQuestionsEl.removeChild(quizQuestionsEl.firstChild);
    }
    if (currentQuestion < (questions.length - 1)) {
        currentQuestion++;
        displayQuiz(currentQuestion);
    } else {
        console.log("game over");
        endQuiz();
    }
};

function endQuiz() {
    //empty question title node
    while (questionTitleText.firstChild) {
        questionTitleText.removeChild(questionTitleText.firstChild);
    }
    //empty quiz item node
    while (quizQuestionsEl.firstChild) {
        quizQuestionsEl.removeChild(quizQuestionsEl.firstChild);
    }
    //stop the timer
    clearInterval(countdownFunction);
    document.querySelector("#timer-contents").innerHTML = "Timer: " + counter;
    // log value of counter
    var counterLog = counter;
    // takes you to the high score page
    saveHighScore(counterLog);
};

function startTimer() {
    if (counter <= 0) {
        console.log('timer done')
        clearInterval(countdownFunction);
        endQuiz();
    };
    counter--;
    document.querySelector("#timer-contents").innerHTML = "Timer: " + counter;
};

// save High Score
function saveHighScore(score) {

    var initialsTitle = document.createElement("h2");
    initialsTitle.className = "initials-title";
    initialsTitle.textContent = "Enter your initials to log your score!";
    initialsTitleText.appendChild(initialsTitle);

    // generate the form
    var formEl = document.createElement("FORM");
    formEl.setAttribute("id", "myForm");
    document.body.appendChild(formEl);

    var inputEl = document.createElement("INPUT");
    inputEl.setAttribute("type", "text");
    inputEl.setAttribute("placeholder", "Enter your Initials");
    inputEl.setAttribute("id", "initials-input");
    document.getElementById("myForm").appendChild(inputEl);

    var submitButtonEl = document.createElement("button");
    submitButtonEl.setAttribute("type", "submit");
    submitButtonEl.className = "submit-button";
    submitButtonEl.textContent = "Submit Your Initals";
    document.getElementById("myForm").appendChild(submitButtonEl);

    var inputValue;

    submitButtonEl.addEventListener('click', function (event) {
        event.preventDefault();
        var inputEl = document.querySelector("#initials-input");
        inputValue = inputEl.value;
        showHighScore(inputValue, score)
    });
};

var showHighScore = function (initials, score) {
    highScorePage();
    // create list item
    var initialsItemEl = document.createElement("li");
    initialsItemEl.className = "score-item";
    initialsItemEl.textContent = initials + "-" + score;
    initialsList.appendChild(initialsItemEl);
};

var highScorePage = function () {
    startButton.style.display = 'none';
    var initialsTitle = document.createElement("h2");
    initialsTitle.textContent = "High Scores!";
    initialsTitleText.appendChild(initialsTitle);
};


initialHighScoreClick.addEventListener("click", highScorePage);

initialsSubmitClick.addEventListener("submit", saveHighScore);

startButton.addEventListener('click', startQuiz);

startButton.addEventListener('click', () => {
    // 👇️ hide button
    startButton.style.display = 'none';
});


//things to do:
//fix highscore button
//add local storage