const quizData = [
  {
    question: "What does HTML stand for?",
    a: "HyperText Markup Language",
    b: "Home Tool Markup Language",
    c: "Hyperlinks and Text Markup Language",
    d: "HighText Machine Language",
    correct: "a"
  },
  {
    question: "Which language is used for styling web pages?",
    a: "HTML",
    b: "CSS",
    c: "JavaScript",
    d: "Python",
    correct: "b"
  },
  {
    question: "Inside which HTML element do we put JavaScript?",
    a: "<js>",
    b: "<script>",
    c: "<javascript>",
    d: "<code>",
    correct: "b"
  },
  {
    question: "Which CSS property controls the text size?",
    a: "font-style",
    b: "text-size",
    c: "font-size",
    d: "text-style",
    correct: "c"
  },
  {
    question: "Which company developed JavaScript?",
    a: "Netscape",
    b: "Microsoft",
    c: "Google",
    d: "Apple",
    correct: "a"
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    a: "font",
    b: "styles",
    c: "class",
    d: "style",
    correct: "d"
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    a: "//",
    b: "/* */",
    c: "<!-- -->",
    d: "#",
    correct: "a"
  }
];

const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const quiz = document.getElementById("quiz");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
  let answer;
  answerEls.forEach(answerEl => {
    if(answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if(answer) {
    if(answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if(currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly 🎉</h2>
                        <button onclick="location.reload()">Reload</button>`;
    }
  }
});
