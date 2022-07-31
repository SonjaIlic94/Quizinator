
var startButton = document.querySelector("#start-quiz-button");
var quizQuestionsEl = document.querySelector("#quiz-questions");

// questions
const questions = [
    {
        question: "question 1",
        answers: [
            { text: "This is the right answer", correct: true },
            { text: "This is the wrong answer", correct: false },
            { text: "This answers wrong too", correct: false },
            { text: "This is the wrong answer as well", correct: false }
        ]
    }
]

var createQuizContents = function () {
    var questionItemEl = document.createElement("li");
    questionItemEl.className = "question-item";
    questionItemEl.textContent = "This is a new question";
    quizQuestionsEl.appendChild(questionItemEl);
}
// // start the Quiz
// function startQuiz() {
//     console.log("started")
//     startButton.classList.add('hide')
//     currentQuestion = questions
//     questionContainerEl.classList.remove('hide')

//     nextQuestion()

// }

startButton.addEventListener('click', createQuizContents);
