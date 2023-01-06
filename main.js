let questions = [
  {
    question: "Was ist ein Array in JavaScript?",
    answer_1: "Eine veränderliche Liste von Werten",
    answer_2: "Eine unveränderliche Liste von Werten",
    answer_3: "Eine Sammlung von Objekten",
    answer_4: "Eine Sammlung von Funktionen",
    right_answer: 1,
  },
  {
    question: "Was ist ein Boolean in JavaScript?",
    answer_1: "Eine Zahl",
    answer_2: "Ein String",
    answer_3: "Ein Objekt",
    answer_4: "Ein Wahrheitswert",
    right_answer: 4,
  },
  {
    question: "Wie hieß der Erfinder von JavaScript?",
    answer_1: "Marty McFly",
    answer_2: "Dr. Emmet Brown",
    answer_3: "Brendan Eich",
    answer_4: "Michael Jackson",
    right_answer: 3,
  },
  {
    question: "Was ist eine Variable in JavaScript?",
    answer_1: "Ein Wert, der nicht verändert werden kann",
    answer_2: "Ein Wert, der dynamisch geändert werden kann",
    answer_3: "Ein Wert, der nur für die Verwendung in Schleifen geeignet ist",
    answer_4: "Ein Wert, der nur für die Verwendung in Funktionen geeignet ist",
    right_answer: 2,
  },
];

let currentQuestion = 0;
let correctQuestions = 0;
let questionCounter = 1;

function init() {
  let all_questions = document.getElementById("all-questions");
  all_questions.innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {
  if (gameIsOver()) {
    showEndScreen();
  } else {
    showNextQuestions();
  }
}

function answer(selection) {
  let question = questions[currentQuestion];
  let selectedQuestionNumber = selection.slice(-1);
  let idOfAnswer = `answer_${question["right_answer"]}`;

  if (selectedQuestionNumber == question["right_answer"]) {
    document.getElementById(selection).classList.add("bg-success");
    correctQuestions++;
  } else {
    document.getElementById(selection).classList.add("bg-danger");
    document.getElementById(idOfAnswer).classList.add("bg-success");
  }
  document.getElementById("next-Button").disabled = false;
}

function nextQuestion() {
  currentQuestion++;
  questionCounter++;
  resetAnswer();
  document.getElementById("questionCounter").innerHTML = questionCounter;
  showQuestion();
  document.getElementById("next-Button").disabled = true;
}


function resetAnswer() {
  document
    .getElementById("answer_1")
    .classList.remove("bg-danger", "bg-success");
  document
    .getElementById("answer_2")
    .classList.remove("bg-danger", "bg-success");
  document
    .getElementById("answer_3")
    .classList.remove("bg-danger", "bg-success");
  document
    .getElementById("answer_4")
    .classList.remove("bg-danger", "bg-success");
}


function restartGame() {
  document.getElementById("header-img").src = "img/quizImg.jpg";
  document.getElementById("endScreen").style = 'display: none';
  document.getElementById("questionBody").style = '';
  questionCounter = 1;
  currentQuestion = 0;
  correctQuestions = 0;
  init();
}


 function showEndScreen(){
  document.getElementById("endScreen").style = "";
  document.getElementById("questionBody").style = "display : none;";
  document.getElementById("amountOfQuestions").innerHTML = questions.length;
  document.getElementById("id-of-correct-q").innerHTML = correctQuestions;
  document.getElementById("header-img").src = "img/trophy.png";
  document.getElementById('progressBar').style = 'display: none';
 }


 function showNextQuestions(){
  progressBarUpdate();
  let question = questions[currentQuestion];
  document.getElementById("questionText").innerHTML = question["question"];
  document.getElementById("answer_1").innerHTML = question["answer_1"];
  document.getElementById("answer_2").innerHTML = question["answer_2"];
  document.getElementById("answer_3").innerHTML = question["answer_3"];
  document.getElementById("answer_4").innerHTML = question["answer_4"];
  document.getElementById('questionCounter').innerHTML = questionCounter;
 }

 function progressBarUpdate(){
  let percent = currentQuestion / questions.length;
  percent = percent * 100;

  document.getElementById("progressBar").innerHTML = `${percent} %`;
  document.getElementById("progressBar").style = `width: ${percent}%`;
 }
 function gameIsOver(){
  return currentQuestion >= questions.length;
 }