const quizData = [
    {
        quiz: "ㅅ ㅅ",
        answer: "서스"
    },
    {
        quiz: "ㅇ ㅁ ㄱ ㅅ",
        answer: "아무구스"
    },
    {
        quiz: "ㅇ ㅁ ㅇ ㅅ",
        answer: "어몽어스"
    },
    {
        quiz: "ㅇ ㅍ ㅅ ㅌ",
        answer: "임포스터"
    },
    {
        quiz: "ㅅ ㅌ ㅍ ㅅ ㅌ ㅇ ㅂ ㅇ ㅇ ㅁ ㅇ ㅅ (뛰어쓰기X)",
        answer: "스탑포스팅어바웃어몽어스"
    },
    {
        quiz: "ㄸ ㄸ ㄸ ㄸ ㄸ ㄸ ㄸ ㄸ ㄸ ㄸ ㄸ",
        answer: "띵띵띵띵띵띵띵띵띵띵띵"
    },
    {
        quiz: "ㅇ ㅁ ㅇ ㅅ ㄷ ㄹ ㅌ ㅁ",
        answer: "어몽어스드립테마"
    },
    {
        quiz: "ㅇ ㄴ ㅌ",
        answer: "유니티"
    },
    {
        quiz: "ㅇ ㄴ ㅅ ㄹ ㅅ",
        answer: "이너슬로스"
    },
    {
        quiz: "ㅋ ㄹ ㅇ",
        answer: "크루원"
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
let v1 = document.querySelector(".v1");
let v2 = document.querySelector(".v2");
loadquiz();

v1.style.visibility = 'hidden';
v2.style.visibility = 'hidden';

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
        v1.style.visibility = 'visible';
        video_start1()
        function video_start1() {
            document.getElementById("video_sim").play();
        }
        $quizSentence.innerText = isCorrect; 
        await delay(11);
    } else {
        isCorrect = "틀림";
        v2.style.visibility = 'visible';
        video_start2()
        function video_start2() {
         document.getElementById("video_du").play();
    }
    $quizSentence.innerText = isCorrect; 
    await delay(27);
    }
    v1.style.visibility = 'hidden';
    v2.style.visibility = 'hidden';
    $scoreValue.innerText = score;
    quizNumber++;
    if(quizNumber < quizData.length) {
        loadquiz();
    } else {
        $quizSentence.innerText = `결과:${score}점/총${quizData.length}문제`;
    }
}

function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}