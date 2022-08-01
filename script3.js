// questions
const question = {
    question: "Question 1",
    answers: ['correct', 'wrng', 'nottrue', 'false'],
    correctAnswer: 1

};

//show questions
function displayQuestion(q) {
    var questionDiv = document.getElementById("#question-title");
    questionDiv.textContent = q.question;
}

displayQuestion(question);