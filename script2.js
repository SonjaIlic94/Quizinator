
var startButton = document.querySelector("#start-quiz-button");
var quizQuestionsEl = document.querySelector("#quiz-questions");
var formEl = document.querySelector("submit-initials-button")
var inistialsListToDo = document.querySelector("#initials-list");
var highScoreSubmitClick = document.querySelector("#initials-item");
var initialHighScoreClick = document.querySelector("#view-high-score");
var pageSection = document.querySelector("#quiz-contents");
var highScorePage = document.createElement("div");
var questionTitleText = document.querySelector("#question-title");

var currentQuestion = "";
var counter = "";
var countdownFunction = "";

// questions
const questions = [
    {
        questionText: "question 1",
        answers: ['correct', 'false', 'not true', 'still wrong'],
        correctAnswer: 0
    },

    {
        questionText: "question 2",
        answers: ['bat', 'cat', 'not true', 'still wrong'],
        correctAnswer: 1
    }
];

//changes page to highscore page.
// have to make function for submit

var generateForm = function () {
    var formEl = document.createElement("FORM");
    formEl.setAttribute("id", "myForm");
    document.body.appendChild(formEl);

    var inputEl = document.createElement("INPUT");
    inputEl.setAttribute("type", "text");
    inputEl.setAttribute("value", "Enter your Initials");
    document.getElementById("myForm").appendChild(inputEl);

};

var createHighScore = function (event) {
    event.preventDefault();
    var initialsEl = document.createElement("li");
    initialsEl.textContent = inputEl.value;
    initialsEl.className = "initials-item";
    inistialsListToDo.appendChild(initialsEl);
}

var showHighScore = function () {
    pageSection.parentNode.replaceChild(highScorePage, pageSection);

    var submitInitalEl = document.createElement("button");
    submitInitalEl.className = "submit-button";
    submitInitalEl.textContent = "Submit Your Initals";
    highScorePage.appendChild(submitInitalEl, generateForm());

}

//START QUIZZzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

function startQuiz() {
    //make start button go away
    counter = 20
    document.querySelector("#timer-contents").innerHTML = "Timer: " + counter;

    countdownFunction = setInterval(startTimer, 1000);

    currentQuestion = 0;
    displayQuiz(currentQuestion);
}

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
        //endQuiz();
    }
};

function startTimer() {

    if (counter <= 0) {
        console.log('timer done')
        clearInterval(countdownFunction);
        //endQuiz();
    }
    console.log(counter)
    counter--;
    document.querySelector("#timer-contents").innerHTML = "Timer: " + counter;
};

initialHighScoreClick.addEventListener("click", showHighScore);
startButton.addEventListener('click', startQuiz);