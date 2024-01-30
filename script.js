// Essential variables for DOM manipulation
var body = document.body;
displayTitleScreen();

// & Display the Title page

/*
var titleQuiz = document.querySelector("#title-quiz");
titleQuiz.setAttribute("style", "margin:20px auto; width:50%; text-align:center;");

var instruction = document.querySelector("#instructions");
instruction.setAttribute("style", "font-size:25px; margin:auto; width:50%; text-align:center;");

var startQuiz = document.querySelector("#start-quiz").addEventListener("click", function(){
    // * place function to display the question page here and show the first qustion
});

startQuiz.setAttribute("style", "color: purple");
startQuiz.textContent = "Start Quiz";
*/
function displayTitleScreen(){
    var startQuiz = document.getElementById("start-quiz");
    startQuiz.textContent = "Start Quiz";
    document.body.appendChild(startQuiz);
}

/* 
TODO function displayTitlePage 
    Notes:
        1) It's the only page that gets displayed when the user clicks on the deployed application URL
        2) After clicking the button Go Back in the High Scores page, only the title page should be displayed. 

*/

// & Display the Multiple-Answer Choice Question Pages 

/* 
TODO function displayQuestionPage
    1) After user clicks on the Start Quiz page, the question page is displayed, the first question is displayed, all the answer choices to the first question is displayed, timer starts counting down
    2) When user finishes answering all five Questions OR the timer runs out in the middle of the quiz, the quiz results page is immediately displayed
    3) When user answers a question (that is not the last question), the next question is displayed and all the answer choices for that question gets displayed along with the results for the previous question displayed for only 5 seconds before disappearing
*/

/* 
TODO function displayQuestion
    1) array gets created where each question is dislayed and array of four answer choices get dislayed in each of the buttons 
    2) array gets created for correct answers for function checkUserAnswer to check 
*/

/* 
TODO function checkUserAnswer
    Notes:
    1) Checks if answer user selected is correct or not
    2) if not correct, subtract 10 seconds from the timer and displays "Wrong!" below the answer choices
    3) if correct, displays "Correct!" below the answer choices
*/

/*
TODO function timerDecrement
*/


//  & Display the Enter Initials page, which will be the page after either the timer runs out or the user answers all the questions

/* 
TODO function displayQuizResultsPage
    Notes:
    1) should only display Quiz Results Page in only two situations:
        1) User finishes answering all five questions
        2) User runs out of time
    2) Enter Initials event listener
    3) Submit button, when clicked AND user enters the initials, displays the High Scores Page 
*/

/* 
TODO function displayScore  
*/

/*
TODO function submit event listener
Notes:
    1. Should also add score and initials as key-value pair when clicked submit 
*/

/*
TODO function checkInitialsEntered
Notes:
    1. Will check whether the user has entered at least some initials in keyboard event listener 
    2. Will give user an alert prompt that they need to enter their initials 
*/

// & Display the View High Scores page 
/* 
TODO function displayHighScoresPage
    Notes:
    1) Should display High Score page only when user clicks the Submit button in Quiz Results page and have entered an initials (at least one letter or symbol) 
    2) When user clicks the View High Scores event listener, will display the High Scores Page
        3) If used to exit the question page, the timer is stopped and set to its initial value 
    3) Go Back button - event listener when clicked will display the title page
    4) Ordered list: 
        1) Array with key:value pairs where value is arranged from greatest to least value
        2) then dislayed accordingly 
    5) Clear High Scores button - event listener when clicked will empty the high scores and initials array and then displays only one purple box with empty letters there
*/ 

/*
TODO function arrangeScores
    Notes:
    1) Arrange scores from greatest to least 
*/

/*
TODO function displaySavedScores 
    Notes:
    1) Create a purple box element that its text content will be in the format <initial> - <score>
*/

/*
TODO function clearHighScores
    Notes:
    1) After clicking the Clear High Scores button event listener, will delete all saved initials and scores from the array and then only displays an empty purple box 
*/


/* 
^ Important Notes:
    Title Page:
        1. Contains a timer element "Time" where it displays "Time: 0" at all times
        2. Contains a "View high scores" event listener when clicked, displays the high score results page
        3. Contains text-aligned centered elements for "Coding Quiz Challenge" heading and the instruction paragraph 
        4. Contains a centered "Start Quiz" event listner when clicked, displays the first question and starts the timer

    Question Page:
        1. Contains a timer element "Time" where the first question page starts with "Time: 75" and then starts counting down
            a. When the user answers an incorrect question, 10 seconds are deducted from the remaining time and the next question is immediately displayed along with the result displayed below the buttons
            b. When the timer reaches 0, immediately displays the Enter Initials Page
        2. Contains a "View high scores" event listener when clicked, displays the high score results page
        3. Displays the text-align: left question in h2 heading
        4. Contains an ordered list element (created in JavaScript)
        5. Contains four list items, where each list item is an event listener and has the text.content display the answer choices
        6. JavaScript logic where clicking the answer choice has a process where it checks with the correct answer with the designated question (answer assigned to each index in chronological order within an array)
           a. If user selected the correct answer, display "Correct!" under a gray line below the four buttons on the next page for a brief moment 
           b. If user selected the incorrect answer, display "Wrong!" under a gray line below the four buttons on the next page for a brief moment, deducts 10 seconds from the timer if any 
        7. JavaScript logic checking (whether the timer has reached 0 or not) and (whether the user has answered 5 questions yet)
            a. timer runs out -> automatically displays the Enter Initials page, score is 0
            b. if timer hasn't run out and user selected an answer -> display to the next question 
            c. if user already answered five questions -> displays the Enter Initials page, score is the amount of time remaining

    Enter Initials Page:
        1. Contains a keyboard event listener where the user types out the initials 
            a. Text "Enter your initials:" should be to the left of this event listener
        2. Contains a "Submit" event listener (placed to the right of the keyboard event listener) when clicked, must check whether the user has entered the initials, and then displays the View High Scores webpage with the initials and score saved
        3. The amount of remaining time will be the score that is displayed in the text "Your final score is " + score "."
        4. Contains a "View high scores" event listener when clicked, displays the View High Scores webpage
        5. Contains the timer element where it stops counting down
        
    Should contain an empty array where it contains the initials and score values saved
    Should order the score values accordingly from greatest to least with the greatest placed at the top
    Should have the array update the initials and scores entered when displayed 

    View High Scores Page:
        1. Contains a h2 "High Score" heading text-align: left
        2. Displayed an ordered list where each list item is the box container are all dark/light purple shaded with black text
            a. Preferably ordered the array from greatest to least and then display in order
            b. Text format: <initials> - <score> 
        3. 2 Event Listeners arranged horizontally
            1. Go Back Button - when clicked will display the title page
            2. Clear High Score button - when clicked will clear out the array containing the initials and score and show an empty purple box instead
        4. No Timer and No View High Scores displayed on this webpage
*/