const quizData = [
    {
        quiz: "ㅍ ㅁ 암",
        answer: "편마암"
    },
    {
        quiz: "ㅎ ㅁ 암",
        answer: "현무암"
    },
    {
        quiz: "ㄱ 암",
        answer: "규암"
    },
    {
        quiz: "ㅊ ㅁ 암",
        answer: "천매암"
    },
    {
        quiz: "ㅌ ㅌ",
        answer: "이암"
    },
    {
        quiz: "ㄷ ㄱ ㅁ ㅋ",
        answer: "유문암"
    },
    {
        quiz: "ㄴ ㅇ ㅂ",
        answer: "반려암"
    },
    {
        quiz: "ㅌ ㅅ",
        answer: "대리암"
    },
    {
        quiz: "ㅋ ㅍ",
        answer: "안산암"
    },
    {
        quiz: "ㅍ ㅇ ㅅ ㅂ",
        answer: "섬록암"
    }
];

let $quizSentence = document.querySelector(".quiz-sentence");
let quizNumber = 0;
const $userInput = document.querySelector(".inputFromKey");
const $ok_btn = document.querySelector("#ok-btn");
$ok_btn.addEventListener('click', check_answer);
let score = 0;
let currentquizData;
let $scoreValue = document.querySelector("#scoreValue");
let $quizNumber = document.querySelector("#quiz-number");
loadquiz();

function loadquiz() {
    $userInput.value = "";
    currentquizData = quizData[quizNumber];
    $quizSentence.innerText = currentquizData.quiz;
    $quizNumber.innerText = quizNumber + 1;
}

async function check_answer() {
    let isCorrect = "";
    if($userInput.value === currentquizData.answer) {
        score++;
        isCorrect = "맞음";
    } else {
        isCorrect = "틀림";
    }
    $quizSentence.innerText = isCorrect; 
    await delay(1);
    $scoreValue.innerText = score;
    quizNumber++;
    if(quizNumber < quizData.length) {
        loadquiz();
    } else {
        $quizSentence.innerText = `결과:${score}점/총${quizData.length}문제`;
        let reStartBtn = document.createElement("button");
        reStartBtn.innerText = "다시풀기";
        reStartBtn.className = "reStartBtn";
        reStartBtn.onclick = function() {
            window.location.reload();
        }
        let $quiz = document.querySelector('.quiz');
        $quiz.appendChild(reStartBtn);
    }
}

function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}