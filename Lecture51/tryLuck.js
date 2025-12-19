class Question {
  constructor() {
    this.operators = ["+", "-", "/", "%", "^"];
    this.operand1 = this.random(20);
    this.operand2 = this.random(10);
    this.operator = this.operators[this.random(this.operators.length) - 1];
    this.score = this.random(10);
    this.correctAnswer = this.calculateAnswer();
  }

  random(high) {
    return 1 + Math.floor(Math.random() * high);
  }

  calculateAnswer() {
    switch (this.operator) {
      case "+":
        return this.operand1 + this.operand2;
      case "-":
        return this.operand1 - this.operand2;
      case "/":
        return Math.floor(this.operand1 / this.operand2);
      case "%":
        return this.operand1 % this.operand2;
      case "^":
        return this.operand1 ** this.operand2;
      default:
        return null;
    }
  }

  getQuestionText() {
    return `${this.operand1} ${this.operator} ${this.operand2}`;
  }

  validateAnswer(answer) {
    return Number(answer) === this.correctAnswer ? this.score : 0;
  }
}

class Quiz {
  constructor() {
    this.score = 0;
    this.question = new Question();
    this.showQuestion();
  }

  showQuestion() {
    questionEle.textContent = this.question.getQuestionText();
    answerEle.value = "";
  }

  submitAnswer(answer) {
    this.score += this.question.validateAnswer(answer);
    scoreEle.textContent = this.score;
    this.question = new Question();
    this.showQuestion();
  }
}

const questionEle = document.querySelector("#questionText");
const answerEle = document.querySelector("#answerInput");
const scoreEle = document.querySelector("#score");

const quiz = new Quiz();

answerEle.addEventListener("keydown", (e) => {
  if (e.key === "Enter") quiz.submitAnswer(answerEle.value);
});
