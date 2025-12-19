const questions = [
  {
    title: "1. Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "define", "make", "set"],
    correctOption: 1,
  },

  {
    title: "2. Which method is used to print output in console?",
    options: ["console.log()", "document.write()", "alert()", "prompt()"],
    correctOption: 1,
  },

  {
    title: "3. What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Module",
      "Desktop Oriented Mode",
      "Design Object Manager",
    ],
    correctOption: 1,
  },

  {
    title: "4. Which symbol is used for single-line comments?",
    options: ["//", "/* */", "#", "<!-- -->"],
    correctOption: 1,
  },

  {
    title: "5. Inside which HTML tag do we write JavaScript?",
    options: ["<script>", "<js>", "<javascript>", "<code>"],
    correctOption: 1,
  },
];

let currQuesIdx = 0;
let score = 0;

const questionSection = document.querySelector(".questions");
const questionTitle = document.querySelector(".question-title");

const option1 = document.querySelector(".option-1");
const option2 = document.querySelector(".option-2");
const option3 = document.querySelector(".option-3");
const option4 = document.querySelector(".option-4");

const nextBtn = document.querySelector(".next");
const scoreSection = document.querySelector(".score");

const optionButtons = [option1, option2, option3, option4];

function loadQuestion() {
  const q = questions[currQuesIdx];

  questionTitle.textContent = q.title;

  optionButtons.forEach((btn, index) => {
    btn.textContent = q.options[index];
    btn.classList.remove("selected", "correct", "wrong");
    btn.disabled = false;
  });
}

function changeScore(optionNumber, btn) {
  let correct = questions[currQuesIdx].correctOption;

  if (correct === optionNumber) {
    score += 4;
    btn.classList.add("correct");
  } else {
    score -= 1;
    btn.classList.add("wrong");
    optionButtons[correct - 1].classList.add("correct");
  }

  optionButtons.forEach((button) => (button.disabled = true));
}

function changeQuestion() {
  if (currQuesIdx === questions.length - 1) {
    questionSection.style.display = "none";
    scoreSection.style.display = "block";
    scoreSection.textContent = "Your Score " + score;
    return;
  }

  currQuesIdx++;
  loadQuestion();
}

option1.addEventListener("click", () => changeScore(1, option1));
option2.addEventListener("click", () => changeScore(2, option2));
option3.addEventListener("click", () => changeScore(3, option3));
option4.addEventListener("click", () => changeScore(4, option4));

nextBtn.addEventListener("click", changeQuestion);

loadQuestion();

// const questions = [
//   {
//     title:
//       "1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis",
//     options: [
//       "Lorem ipsum dolor sit amet.",
//       "Lorem ipsum dolor sit.",
//       "Lorem, ipsum dolor.",
//       "Lorem ipsum dolor sit amet.",
//     ],
//     correctOption: 2,
//   },
//   {
//     title:
//       "2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis",
//     options: [
//       "Lorem ipsum dolor sit amet.",
//       "Lorem ipsum dolor sit.",
//       "Lorem, ipsum dolor.",
//       "Lorem ipsum dolor sit amet.",
//     ],
//     correctOption: 2,
//   },
//   {
//     title:
//       "3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis",
//     options: [
//       "Lorem ipsum dolor sit amet.",
//       "Lorem ipsum dolor sit.",
//       "Lorem, ipsum dolor.",
//       "Lorem ipsum dolor sit amet.",
//     ],
//     correctOption: 2,
//   },
//   {
//     title:
//       "4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis",
//     options: [
//       "Lorem ipsum dolor sit amet.",
//       "Lorem ipsum dolor sit.",
//       "Lorem, ipsum dolor.",
//       "Lorem ipsum dolor sit amet.",
//     ],
//     correctOption: 2,
//   },
//   {
//     title:
//       "5 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis",
//     options: [
//       "Lorem ipsum dolor sit amet.",
//       "Lorem ipsum dolor sit.",
//       "Lorem, ipsum dolor.",
//       "Lorem ipsum dolor sit amet.",
//     ],
//     correctOption: 2,
//   },
// ];

// let currQuesIdx = 0;
// let score = 0;
// const correctAnswerScore = 4;
// const wrongAnswerScore = -1;

// const questionSection = document.querySelector(".questions");

// const questionTitle = document.querySelector(".question-title");

// const option1 = document.querySelector(".option-1");
// const option2 = document.querySelector(".option-2");
// const option3 = document.querySelector(".option-3");
// const option4 = document.querySelector(".option-4");

// const nextBtn = document.querySelector(".next");

// const scoreSection = document.querySelector(".score");

// function changeScore(optionNumber) {
//   if (questions[currQuesIdx].correctOption === optionNumber)
//     score += correctAnswerScore;
//   else score += wrongAnswerScore;
// }

// function changeQuestion() {
//   if (currQuesIdx === questions.length - 1) {
//     questionSection.style.display = "none";
//     scoreSection.style.display = "block";
//     scoreSection.textContent = "Your Score " + score;
//   }

//   currQuesIdx++;

//   const questionObj = questions[currQuesIdx];

//   questionTitle.textContent = questionObj.title;
//   option1.textContent = questionObj.options[0];
//   option2.textContent = questionObj.options[1];
//   option3.textContent = questionObj.options[2];
//   option4.textContent = questionObj.options[3];
// }

// nextBtn.addEventListener("click", changeQuestion);

// option1.addEventListener("click", () => {
//   changeScore(1);
//   changeQuestion();
// });

// option2.addEventListener("click", () => {
//   changeScore(2);
//   changeQuestion();
// });
// option3.addEventListener("click", () => {
//   changeScore(3);
//   changeQuestion();
// });
// option4.addEventListener("click", () => {
//   changeScore(4);
//   changeQuestion();
// });
