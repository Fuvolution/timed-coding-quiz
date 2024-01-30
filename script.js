// Essential variables for DOM manipulation
var body = document.body;
displayTitleScreen();

// Display the Title page
function displayTitleScreen(){
    var startQuiz = document.getElementById("start-quiz");
    startQuiz.textContent = "Start Quiz";
    document.body.appendChild(startQuiz);
}