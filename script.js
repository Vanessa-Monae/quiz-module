// have a variable set to our html elements (button, start container, quiz container, highscores) so that we can populate them later
    // var whatev = document.getElementById('whatev')
//var Button = 

//var StartContainer = 
var test = document.getElementById("This is a text box") 
console.log(test)
//var QuizContainer = 

// var Highscores = 


// want a variable that is equal to the start time of the quiz
var Time = "1:00"

// we need a list (array []) of questions
    // the questions should have a question itself, the possible answers, and the correct answer (we should use an object)
        //     var questions = [{
            var Question = [ "Arrays in JavaScript can be used to store:"]
            a = "Strings and Numbers"
            b = "Other Arrays"
            c = "Booleans"
            d = "All of the above" 
            correct: d 

            var Question = [ "Inside which HTML elements do we put the JavaScript?:"]
            a = "</JavaScript>"
            b = "</HTML>"
            c = "</js>"
            d = "</Script>"
            correct: d 

            var Question = ["The external JavaScript file must contain the <script> tag."]
            a = "true"
            b = "false"
            correct : b 

            var Question = ["How can you add a comment in JavaScript"]
            a = "// Comment "
            b = ".. Comment"
            c = " == Comment"
            correct: a 

            var Question = ["JavaScript is the same as Java"]
            a = "True"
            b= "False"
            correct: a

            var Question = ["How do you declare a JavaScript variable"]
            a = " var MyName"
            b = " var myname"
            c = "var MYNAME"
            d = "var myNAME"
            correct: a

            var Question = ["Which operator is used to assign a value to a variable"]
            a = "x"
            b = "@"
            c = "="
            d = "-"
            correct: c



// Once someone clicks on the button we need to run a function that starts the quiz
    // whatevButton.onclick = someFunction;

// startQuiz()
    // we need to make the start container disappear
        // whetevElement.removeAttribute('class')

    // and show the quiz container
        // whatevElement.setAttribute('class', 'hidden')
        // then we need to populate the html with the data from our questons array
        // whatev.textContent = "Whatever you want"
        
// we might have a function that depending the question, writes the question info from the array to the html

// we need to have a reference of each answer
// so when we click on a specific answer 
// we should have a function that runs
    // the function will check to see if the answer given is the correct answer
    // if the answer is correct
        // go to the next question (run the above function again)
    // else the answer is wrong
        // we'll need to subtract time from the clock


// we want to subtact 1 from our timer var every second
    // setInterval(<some function>, <the time in milliseconds that you want this to run>)
    // in our function ^^^
        // we can have an if statement
        // if timer<0
        // have a function that ends the quiz endQuiz()

// When the end of the quiz is reached
    // hide the quiz container and show the highscore one
    // we can have the remaining time be the highscore
    // and whatever the users initials are (taken from the html input)
    // and save those items to local storage
        // we can have an array of scores in local storage
        // we need to make a copy of the current scores
            // var something = localStorage.getItem('scores')
            // or an empty array if it doesn't exist
        // then add our users initials and score (save this as object)
            // use .push() to add something to the end of the array
        // then we need to save the update array to local storage 
            // localStorage.setItem("scores")