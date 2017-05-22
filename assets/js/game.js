//Word list
var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var words = ['MARIO', 'LUIGI', 'PEACH', 'SAMUS', 'TOAD', 'BOWSER', 'PIKACHU', 'JIGGLYPUFF', 'FOX', 'LINK', 'ZELDA', 'GANONDORF', 'KIRBY', 'YOSHI'];

var correctGuesses = [];
var guessesRemaining = 10;
var chooseWord = "";
var answerField = [];

var music = new Audio('assets/sounds/song.mp3');
music.play();
music.volume = 0.5;



//New game button
$("#newGame").click(function () {
	
	music.play()
	
	"use strict";
	guessesRemaining = 10;
	correctGuesses = 0;
	answerField = [];
	chooseWord = "";
	$("#portrait").attr("src", "assets/images/unknown.png");
	
	var start = new Audio('assets/sounds/start.wav');
	start.play();
	
	
	//Choose a random word from words[]
	var chooseWord = words[Math.floor(Math.random() * words.length)];
	console.log(chooseWord);

	//Create spaces for field
	var createField = function () {
		for (var i = 0; i < chooseWord.length; i++) {
				answerField[i] = "_";
				$("#answerField").text(answerField.join(" "));
			}
		}

	//Create list of clickasble buttons
	var createList = function() {
		for (var i = 0; i < alphabet.length; i++) {
			var letterBtn = $("<button>");
			$(letterBtn).addClass("btn btn-danger letters");
			$(letterBtn).attr("type", "button");
			$(letterBtn).attr("data-letter", alphabet[i]);
			$(letterBtn).html(alphabet[i]);
			$("#buttons").append(letterBtn);
		}

	}


	//Check function
	var checkAnswer = function() {
		$(".letters").click(function() {
			var guess = $(this).text();
			$(this).attr("disabled", "disabled");
			$(this).prop("onclick", null);
			console.log(guess);
			for (var i = 0; i < chooseWord.length; i++) {
				if (chooseWord[i] === guess) {
					answerField[i] = guess;
					$("#answerField").text(answerField.join(" "));
					correctGuesses += 1;
					var correct = new Audio('assets/sounds/correct.wav');
					correct.play();	
					message();

				}
			}

			var incorrect = (chooseWord.indexOf(guess));
			if (incorrect === -1) {
				guessesRemaining -= 1;
				$("#guessesRemaining").html("Lives remaining: " + guessesRemaining);
				var incorrect = new Audio('assets/sounds/incorrect.wav');
				incorrect.play();
				console.log(guessesRemaining);
				message();
			}
			else {
				message();
				
			}

		});
	}

	//Status message function
	var message = function () {
		for (var i = 0; i < chooseWord.length; i++) {
			if (correctGuesses === chooseWord.length) {
				$(".message").html("You win!");
				if (chooseWord === "MARIO"){
					$("#portrait").attr("src", "assets/images/mario.png");
				}
				if (chooseWord === "LUIGI"){
					$("#portrait").attr("src", "assets/images/luigi.png");
				}
				if (chooseWord === "PEACH"){
					$("#portrait").attr("src", "assets/images/peach.png");
				}
				if (chooseWord === "TOAD"){
					$("#portrait").attr("src", "assets/images/toad.png");
				}
				if (chooseWord === "BOWSER"){
					$("#portrait").attr("src", "assets/images/bowser.png");
				}
				if (chooseWord === "PIKACHU"){
					$("#portrait").attr("src", "assets/images/pikachu.png");
				}
				if (chooseWord === "LINK"){
					$("#portrait").attr("src", "assets/images/link.png");
				}
				if (chooseWord === "ZELDA"){
					$("#portrait").attr("src", "assets/images/zelda.png");
				}
				if (chooseWord === "GANONDORF"){
					$("#portrait").attr("src", "assets/images/ganondorf.png");
				}
				if (chooseWord === "KIRBY"){
					$("#portrait").attr("src", "assets/images/kirby.png");
				}
				if (chooseWord === "FOX"){
					$("#portrait").attr("src", "assets/images/fox.png");
				}
				if (chooseWord === "SAMUS"){
					$("#portrait").attr("src", "assets/images/samus.png");
				}
				if (chooseWord === "JIGGLYPUFF"){
					$("#portrait").attr("src", "assets/images/jigglypuff.png");
				}
				if (chooseWord === "YOSHI"){
					$("#portrait").attr("src", "assets/images/yoshi.png");
				}
				var victory = new Audio('assets/sounds/victory.wav');
				victory.play();
			}
		}
			if (guessesRemaining < 1) {
			$(".message").html("Game over.")
			var gameOver = new Audio("assets/sounds/game_over.wav");
			gameOver.play();
			music.pause();
			
		}
	}

	$(".message").empty();
	
	$("#guessesRemaining").html("Lives remaining: " + guessesRemaining);
	
	$("#buttons").empty();

	createField();
	createList();
	checkAnswer();
	message();
	
});

