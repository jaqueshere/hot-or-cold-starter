
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    NewGame();

    $(".new").click(NewGame);

    $("#guessButton").click( 
      function(e) {
        e.preventDefault();
        guess = $("#userGuess").val();
        check(guess);
        var oldTemp = Math.abs(myNumber - lastGuess);
        guessCount++;
        var temperature = Math.abs(myNumber - guess);
        tempDisplay = "";
        feedback(guess, oldTemp, temperature);
        $("#feedback").text(tempDisplay);
        $("#guessList").append("<li>" + guess + "</li>");
        $("#count").text(guessCount);
        $("#userGuess").val("");
        lastGuess = guess;
        firstGuess = false;
    });

});

function NewGame() {
  $("#feedback").text("Make your Guess!");
  $("#guessList").empty();
  $("#userGuess").val("");
  guessCount = 0;
  $("#count").text(guessCount);
  pickNumber();
  lastGuess = 0;
  firstGuess = true;
  console.log("hello");
}

function pickNumber() {
  myNumber = Math.floor((Math.random()*100) + 1);
}

function check(number) {
  if ((number > 100) || (number < 1)) {
    guess = prompt("Enter a number between 1 and 100: ");
  }
}

function feedback(number, last, current) {
  if (number == myNumber) {
          tempDisplay = "just right!";
        }

  else if (firstGuess && (current > 20)) {
          tempDisplay = "cold";
        }

  else if (firstGuess && (current < 20)) {
          tempDisplay = "hot";
        }

  else if (current > last) {
          tempDisplay = "colder";
        }

  else {
          tempDisplay = "hotter";
        }

}