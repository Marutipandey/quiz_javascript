
const array = [
    {
        question: "What does HTML stand for?",
        options: ["html1", "html2", "html3", "html4"],
        correct: 0
    },
    {
        question: "What does JAVA stand for?",
        options: ["java1", "java2", "java3", "java4"],
        correct: 2
    },
    {
        question: "What does PYTHON stand for?",
        options: ["python1", "python2", "python3", "python4"],
        correct: 3
    },
    {
        question: "What does JAVASCRIPT stand for?",
        options: ["javascript1", "javascript2", "javascript", "javascript4"],
        correct: 1
    }
];


const quiz = document.querySelector("#quiz")
const answerEln = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4] = document.querySelectorAll("#questionElm, #option_1, #option_2, #option_3, #option_4");
const subBtn = document.querySelector("#submit");

let currentQuid = 0;
let score = 0;

const loadQuiz = () => {
    const { question, options } = array[currentQuid];
    questionElm.innerText = question;

    options.forEach((currVal, index) => {
        window[`option_${index + 1}`].innerText = currVal;
    });
};

let getSelectedOption = () => {
    let answerElement = Array.from(answerEln);
    return answerElement.findIndex((curElm) => curElm.checked);
};


const deselected = () =>{
    return answerEln.forEach((currrElm) => currrElm.checked = false);
}
subBtn.addEventListener("click", () => {
    const selectedOptionIndex = getSelectedOption();
    console.log(selectedOptionIndex);

    
    if (selectedOptionIndex === array[currentQuid].correct) {
        score++;
    }

    currentQuid++;

    if (currentQuid < array.length) {
        deselected();
        loadQuiz();
    } else {
quiz.innerHTML = `<div class="result">
<h2>Your Score: ${score}/${array.length} Correct Answers</h2>
<p style="color:purple">Congratulations on completing the quiz</p>
<button class= "reload-button" onclick="location.reload()">Play Again</button>
</div>`
        
        console.log("Quiz Completed. Your Score: " + score);
    }
});

loadQuiz();