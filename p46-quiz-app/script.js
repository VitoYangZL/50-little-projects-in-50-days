const quizData = [
  {
    question: "What do you call a cute door ?",
    a: "Wat dog?",
    b: "You got cheese for me ?",
    c: "Adoorable",
    d: "uwu",
    correct: "c",
  },
  {
    question: "What kind of wine that is my only one?",
    a: "Snoop Dog",
    b: "Rice Wine",
    c: "Okay mama",
    d: "Vodka",
    correct: "d",
  },
  {
    question: "Movie ?",
    a: "Nah.",
    b: "How dare you",
    c: "K",
    d: "LetsGoooo",
    correct: "a",
  },
  {
    question: "Best Rapper?",
    a: "Snoop Dog",
    b: "You got cheese for me ?",
    c: "Eminem",
    d: "Mr.Heisenburg",
    correct: "c",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEls = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswer();

  const currentQuizData = quizData[currentQuiz];

  questionEls.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswer() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
          <h2>You answered correctly at ${score} / ${quizData.length} questions</h2>

          <button onclick="location.reload()">Reload</button>
          `;
    }
  }
});
