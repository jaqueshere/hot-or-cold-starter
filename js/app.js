
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

    $(".new").click(NewGame());

    $("#guessButton").click( 
      function(e) {
        e.preventDefault();
        guess = $("#userGuess").val();
        guessCount++;
        temperature = Math.abs(myNumber - guess);
        tempDisplay = "";
        if (temperature > 20)
          tempDisplay = "cold";
        else
          tempDisplay = "hot";
        $("#feedback").text(tempDisplay);
        $("#guessList").append("<li>" + guess + "</li>");
        $("#count").text(guessCount);
    });

    function NewGame() {
      guessCount = 0;
      myNumber = Math.floor((Math.random()*100) + 1);
      lastGuess = 0;
    }

});


