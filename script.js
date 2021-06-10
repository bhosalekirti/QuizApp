const quizData = [
  {
    questions: "XML stands for.",
    a: "Extended Mashup Language.",
    b: "Extensible Markup Language",
    c: "X-Markup Language.",
    d: "Extensible new Markup Language.",
    correct: "b",
  },
  {
    questions: "What is the most used proggraming language",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JS",
    correct: "a",
  },
  {
    questions: "which tag we will use for image?",
    a: "img",
    b: "b",
    c: "i",
    d: "link",
    correct: "a",
  },
  {
    questions: "how we will add style in element?",
    a: "script",
    b: "bold",
    c: "p",
    d: "style",
    correct: "d",
  },
  {
    questions: "Css stands for?",
    a: "None of the below",
    b: "Cascading style shit",
    c: "Cascade style sheets",
    d: "Cascading style sheets",
    correct: "d",
  },
  {
    questions:
      "Which of the following is the correct syntax for referring the external style sheet?",
    a: "<style src = example.css>",
    b: "<link rel='stylesheet' type='text/css' href='example.css'>",
    c: "<stylesheet> example.css </stylesheet>",
    d: "<style src='example.css' >",
    correct: "d",
  },
];

const questionsEl = document.getElementById("questions");
const quiz = document.getElementById("quiz");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const subBtn = document.getElementById("subBtn");
let currentQuiz = 0;
let answer = undefined;
let score = 0;
const answersEl = document.querySelectorAll(".answer");

loadQuiz();

function loadQuiz() {
  deSelect();
  const currentQuizData = quizData[currentQuiz];
  questionsEl.innerText = currentQuizData.questions;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;
  answersEl.forEach((answersEl) => {
    if (answersEl.checked) {
      answer = answersEl.id;
    }
  });
  return answer;
}

function deSelect() {
  answersEl.forEach((answersEl) => {
    answersEl.checked = false;
  });
}

subBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2> You answerd correctly ${score}/${quizData.length} qusions.</h2><button  onClick="window.location.reload()"  class="btnSub">Go Back To Quiz</button>`;
    }
  }
});
