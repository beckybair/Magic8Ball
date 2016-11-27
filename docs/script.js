$(document).ready(function(){

  $("#answer").hide();
  $("#question").hide();

  var magic8Ball = {};
  magic8Ball.listOfAnswers = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes, definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  ];

  // initiate the method
  magic8Ball.response = function (question) {
    var randomNumber = Math.random(); // create a random number
    var randomNumberArray = randomNumber * this.listOfAnswers.length;  // make the random number between 0 and the number of items in your array
    var randomIndex = Math.floor(randomNumberArray);  // round down the number to be a whole number
    var randomResponse = this.listOfAnswers[randomIndex]; // use that number to index a random number from the answers array

    console.log("You asked: " + question);
    console.log("My answer is: " + randomResponse);
    $("#answer").text( randomResponse );
    $("#question").text("You asked: " + question );
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
  }

// Show Prompt and run Response
  var showPrompt = function() {
    $("#answer").hide();
    $("#question").hide();
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
    var question = prompt("ASK A YES/NO QUESTION!");
    $("#8ball").effect( "shake" );
    magic8Ball.response(question);
    $("#answer").fadeIn(4000);
    $("#question").fadeIn(4000);
  }

  $("#questionButton").click(showPrompt);

});
