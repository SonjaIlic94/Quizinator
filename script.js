// // var timerEl = document.getElementById('#timer-seconds');
// // var startCountdown = setInterval(countdown, 1000);
// // function countdown() {
// //     var timeLeft = 75;

// //     var timeInterval = setInterval(function () {

// //         if (timeLeft > 1) {
// //             timerEl.textContent = timeLeft + "hi";
// //             timeLeft--;

// //         }
// //         else {
// //             timerEl.textContent = '';
// //             clearInterval(timeInterval);
// //         }
// //         console.log('timer working')
// //     }, 1000);

// // }

// // var buttonEl = document.querySelector("#start-quiz");
// // buttonEl.addEventListener("click", function () {
// //     alert("button clicked");
// // });



// var counter = 10
// const startButton = document.getElementById('start-quiz-button')
// const questionContainerEl = document.getElementById('quiz-contents')
// // const quizContents = document.querySelector(".quiz-contents");
// const questionEl = document.getElementById('question')
// const answerEl = document.getElementById('quiz')
// let currentQuestion

// startButton.addEventListener('click', startQuiz, countdown)


// function countdown() {
//     counter--;
//     console.log(counter)
//     if (counter === 0) {
//         console.log('timer done')
//         clearInterval(startCountdown);
//     }

// }
// var startCountdown = setInterval(countdown, 1000);

// // questions
// const questions = [
//     {
//         question: "question 1",
//         answers: [
//             { text: "This is the right answer", correct: true },
//             { text: "This is the wrong answer", correct: false },
//             { text: "This answers wrong too", correct: false },
//             { text: "This is the wrong answer as well", correct: false }
//         ]
//     }
// ]

// // start the Quiz
// function startQuiz() {
//     console.log("started")
//     startButton.classList.add('hide')
//     currentQuestion = questions
//     questionContainerEl.classList.remove('hide')

//     nextQuestion()

// }

// // next question function
// var nextQuestion = function () {
//     showQuestion([currentQuestion])
// }

// var showQuestion = function (question) {
//     questionEl.innerText = questions.question
//     question.answers.forEach(answer => {
//         const button = document.createElement('button')
//         button.innerText = answer.text
//         button.classList.add('btn')
//         if (answer.correct) {
//             button.dataset.correct = answer.correct
//         }
//         button.addEventListener('click', chooseAnswer)
//         answerButtonsEl.appendChild(button)
//     });
// }

// // choose answer

// function chooseAnswer() {

// }

// // function addQuestions() {
// //     var questionItem = document.createElement("li");
// //     questionItem.classList = "list"

// // }



// // // append dom elements
// // quizContents.appendChild(quetionItem)

// var quizEl = document.createElement('div');
// answerEl.appendChild(quizEl);

// const timer = document.getElementById('timer-contents')
// var timerEl = document.createElement("p")
// timer.appendChild(countdown);