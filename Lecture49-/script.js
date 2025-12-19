class Quetion {
  construtor() {
    this.id = id;
    this.text = text;
    this.options = options;
    this.correctOption = correctOption;
    this.type = options;
  }
}

// 5 sample questions
const questions = [
  new Question(
    1,
    "Which color Alto do you have?",
    ["Red", "Blue", "White", "Black"],
    "Red",
    "single"
  ),
  new Question(
    2,
    "Select the colors you like:",
    ["Red", "Blue", "White", "Black"],
    ["Red", "Blue"],
    "multiple"
  ),

  new Question(
    3,
    "What is the capital of France?",
    ["Berlin", "Madrid", "Paris", "Rome"],
    "Paris",
    "single"
  ),
  new Question(
    4,
    "Select the prime numbers:",
    ["2", "3", "4", "5"],
    ["2", "3", "5"],
    "multiple"
  ),
  new Question(
    5,
    "Which planet is known as the Red Planet?",
    ["Earth", "Mars", "Jupiter", "Saturn"],
    "Mars",
    "single"
  ),
];
class Quiz {
  construtor({ questions, duration }) {
    this.questions = questions;
    this.duration = duration;
    this.userResponse = {};
    this.score = 0;
    this.currentQuesIndex = 0;
  }
  start() {

    this.displayOptions();
    this.currentQuestion();
  }
  displayOptions(qIdx) {
    
    const optionsUl = document.querySelector(".options ul");
    const options = this.questions[qIdx].options;

    optionsUl.innerHTML = options
      .map((option) => {
        return `<li>${option}<li>`;
      })
      .join("");
  }
  currentQuestion() {

    const idx = this.currentQuesIndex;
    const quetionTextElement = document.querySelector(".question p");
    quetionOptionsUl = document.querySelector(".options ul");

    quetionTextElement.textContent = this.questions[idx].text;
    this.displayOptions(idx);
  }
  previousQuestion() {
    if (this.currentQuesIndex === 0) return;
    if (this.currentQuesIndex > this.questions.length - 1) {
      const nextButton =document.querySelector(".buttomns").lastElementChild
      nextButton.textContent="Next";
    }
    this.currentQuesIndex--;
    this.currentQuestion();
  }
  nextQuestion() {
    if (this.currentQuesIndex == this.questions.length -1) {
      this.submit();
      return;
    }
    if (this.currentQuesIndex === this.questions.length - 2) {
      const nextButton =document.querySelector(".buttomns").lastElementChild
      nextButton.textContent="Submit";
    }
    this.currentQuesIndex++;
    this.currentQuestion();
  }
  calculateScore() {

    const qIdx = this.currentQuesIndex;
    for (let questionIdx in this.userResponse) {
      const optionIdx =this.userResponse[questionIdx]
      const correctOption = this.questions[qidx]
    }
    
    
  }
  captueUserResponce() {
    const idx = this.currentQuesIndex;
    this.userResponse[idx] = answer;
    console.log(this.userResponse);

  }
  startTimer() {
}}
const quiz = new Quiz({ questions: questions, duration: 60 });
quiz.start();

const options = document.querySelector(".options ul");
const prevButton = document.querySelector(".buttons").children[0];
const nextButton = document.querySelector(".buttons").children[1];
// how many methods to access?

options.addEventListener("click", (e) => {
  quiz.captueUserResponce(e.target.textContent);
});
prevButton.addEventListener("click", () => {
  quiz.previousQuestion();
});
nextButton.addEventListener("click", () => {
  quiz.nextQuestion();
});
