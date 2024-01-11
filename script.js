// Essential varaibles for DOM manipulation
var body = document.body;

// Display the Title page

// Display the Multiple-Answer Choice Question Pages 

// Display the Enter Initials page, which will be the page after either the timer runs out or the user answers all the questions

// Display the View High Scores page 

/* Important Notes:
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
*/