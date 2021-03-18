const timerdisplay = document.getElementById("timer");
const questions = document.getElementById("question");
const answersele = document.getElementById("answers");
// pull the things from the HTML doc here.

var index;
var timer;
var timeofuser;
// created global variables i will call for later (the 3 all i can think of atm)

function onLoad() {
    timerdisplay.textContent = "";
    // blank timer display to start
    questions.textContent = "Welcome to the game of video games! Here you will have 4 questions with 4 options each, 45 seconds total. Can you beat the timer?";
    // displays the text at the top of the screen
    const startgamebutton = document.createElement("button");
    // creating the start button rather than creating another route, creating it on page load.
    startgamebutton.textContent = "I'm ready to start the game!";
    startgamebutton.addEventListener("click", startgame);
    // tried to make this .onclick but came to realize i will need startgame to be global unless i want to reload the page each time and wipe everything.
    answersele.append(startgamebutton);
    // changes the button here


    const highscorebtn = document.createElement("button");
    highscorebtn.textContent = "View Highscores";
    highscorebtn.addEventListener("click", displaybestplayers);
    answersele.append(highscorebtn);
}

onLoad()


function setTimer() {
    timer = setInterval(function () {
        timeofuser--;
        timerdisplay.textContent = "Time Left: " + timeofuser;
        if (timeofuser <= 0) {
            timeofuser = 0;
            gameover();

        }
    }, 1000)
    //normal counting pace.
}

function startgame() {
    timeofuser = 45;
    //change this if you want to have the time change.
    index = 0;
    //here we just set the index to 0 instead of running a for loop 
    setTimer();
    // call timer func to start
    timerdisplay.textContent = "Time Left: " + timeofuser;
    nextquestion();
}

function nextquestion() {
    questions.textContent = gamequestions[index].question;
    answersele.innerHTML = "";
    for (let i = 0; i < gamequestions[index].choices.length; i++) {
        const button = document.createElement("button");
        button.textContent = gamequestions[index].choices[i];
        button.addEventListener("click", verifyanswer)
        answersele.append(button);
    }
}

function verifyanswer(event) {
    if (event.target.textContent !== gamequestions[index].answer) {
        timeofuser -= 3;
        // if they get the answer wrong here.
    }
    if (++index < gamequestions.length) {
        nextquestion();
        // if there is more questions to be had then move to next question else end the game here
    } else {
        gameover();
    }
}

function gameover() {
    // when the game is over, clear the timer
    clearInterval(timer);
    timerdisplay.textContent = "Game Over!*bum bum bummmmm*";
    questions.textContent = "Your Score is: " + timeofuser;
    answersele.innerHTML = "";
    // clear here
    const nameInput = document.createElement("input");
    const instructions = document.createElement("p");
    // allow them to create a p tag from th
    instructions.textContent = "Please enter your name here for the wall of (f)(sh)ame";

    
    // nameInput.placeholder = "GG";
    nameInput.setAttribute("id", "name");

    const submitname = document.createElement("button");
    submitname.textContent = "Submit name";
    submitname.addEventListener("click", submitscore);

    answersele.append(instructions);
    answersele.append(nameInput);
    answersele.append(submitname);
    // fills this with the elements above so it isnt hardcoded in and unable to change.

}

function submitscore() {
    let score = JSON.parse(localStorage.getItem("highscores"));
    // local storage here to save so their initals will save if user plays again on the same PC
    const newScore = {
        name: document.getElementById("name").value,
        score: timeofuser
    }
    if (score) {
        score.push(newScore);
    } else {
        score = [newScore];
    }
    score.push(newScore);
    localStorage.setItem("highscores", JSON.stringify(score));
    displaybestplayers();

}

function displaybestplayers() {
    let score = JSON.parse(localStorage.getItem("highscores"));
    answersele.innerHTML = "";
    if (score.length > 1) {
        score.sort((a, b) => (a.score < b.score) ? 1 : -1);
    }
    // pulled this from a website to help sort from greatest to least.

    for (let i = 0; i < score.length; i++) {
        var newplaya = document.createElement("p");
        newplaya.textContent = score[i].name + ": " + score[i].score;
        answersele.append(newplaya);
    }

    const replay = document.createElement("button");
    replay.textContent = "Care to try again?";
    replay.addEventListener("click", startgame);
    answersele.append(replay);
}