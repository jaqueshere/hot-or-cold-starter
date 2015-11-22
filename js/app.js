
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
        var oldTemp = Math.abs(myNumber - lastGuess);
        guessCount++;
        var temperature = Math.abs(myNumber - guess);
        tempDisplay = "";

        if (guess == myNumber) {
          tempDisplay = "just right!";
        }

        else if (firstGuess && (temperature > 20)) {
          tempDisplay = "cold";
        }

        else if (firstGuess && (temperature < 20)) {
          tempDisplay = "hot";
        }

        else if (temperature > oldTemp) {
          tempDisplay = "colder";
        }

        else {
          tempDisplay = "hotter";
        }

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
      myNumber = Math.floor((Math.random()*100) + 1);
      lastGuess = 0;
      firstGuess = true;
      console.log("hello");
    }