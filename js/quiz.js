
// Here I assign all global variables and arrays

var quiz = [
  ['What is this?', 'a quiz'], 
  ['What does a teacher do?', 'teach'], 
  ['What does a programmer do?', 'code']
];
var questionsNum = quiz.length;
var question;
var answer;
var response;
var correctAnswers = 0;
var wrongAnswers = 0;
var questionsRight = '<ol>';
var questionsWrong = '<ol>';

// A function that prints a message to the page

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML += message;
}

// Structuring the quiz

for (var i = 0; i < questionsNum; i++) {
  question = quiz[i][0];
  answer = quiz[i][1];
  response = prompt(question);
  if (response === answer) {
    correctAnswers++;
    questionsRight += '<li>' + question + '</li>';
  } else {
    wrongAnswers++;
    questionsWrong += '<li>' + question + '</li>';
  }
}

// Adding finishing touches and creating the messages that will be print to the page

questionsRight += '</ol>';
questionsWrong += '</ol>';
print('You got (' + correctAnswers + ') question(s) right.<br><br>');
print('You got (' + wrongAnswers + ') question(s) wrong.');
print('<h2>Questions that you got right: </h2>');
print(questionsRight);
print('<h2>Questions that you got wrong: </h2>');
print(questionsWrong);