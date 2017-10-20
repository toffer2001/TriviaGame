$('#start').on('click', function() {
	game.start();

})

$('#subwrapper').on('click', '#end', function() {
	game.done();
})

var questions = [{
	question:"What was the first roller coaster attraction at Walt Disney World, Space Mountain or Big Thunder Mountain?",
	answers:["Space Mountain", "Big Thunder Mountain"],
	correctAnswer: "Space Mountain"
}, {
	question:"In Mary Poppins, what animal was on the end of Mary Poppin's umbrella that spoke?",
	answers:["Parrot", "Mouse", "Cricket", "Puppy"],
	correctAnswer: "Parrot"
}, {
	question:"During the battle with Aladdin, what type of animal does Jafar transform himself into?",
	answers:["A Cobra", "A Dragon", "A Demon", "A Lion"],
	correctAnswer: "A Cobra"
}, {
	question:"In Bambi, what word does the owl use to describe falling in love?",
	answers:["Luv", "Twitterpatted", "Matrimony", "Love"],
	correctAnswer: "Twitterpatted"
}, {
	question:"During the ballroom scene of Beauty & the Beast, what color is Belle's Gown?",
	answers:["Lavender ", "Blue", "Red", "Gold"],
	correctAnswer: "Gold"
}, {
	question:" What was the name of the whale in Pinocchio?",
	answers:["White Whale", "Nemo", "Monstro", "Nimrod"],
	correctAnswer: "Monstro"
}, {
	question:"In the Lion King, where does Mufasa and his family live?",
	answers:["Circle of Life", "Savanna", "African Safari", "Pride Rock"],
	correctAnswer: "Pride Rock"
}, {
	question:"In Beauty and the Beast, how many eggs does Gaston eat for breakfast?",
	answers:["2 Dozen", "5 Dozen", "6 Dozen", "Baker's Dozen"],
	correctAnswer: "5 Dozen"
}]

var game = {
		correct: 0,
		incorrect: 0,
		counter: 45,
		countdown: function () {
			game.counter--;
			$("#counter").html(game.counter);
			if(game.counter <=0){
				console.log("Time is up!");
				game.done();
			}
		},
		start: function () {
			timer = setInterval(game.countdown,1000);
			$("#subwrapper").prepend('<h2 id="timer">Time Remaining: <span id="counter">45</span> Seconds<h2>');
			$("#start").remove();
			for(var i = 0; i < questions.length; i++){
				$('#subwrapper').append('<h2>' + questions[i].question + '</h2');

				for(var j = 0; j < questions[i].answers.length; j++){
					$('#subwrapper').append('<input id="radio" type="radio" name="question-' + i + '" value="' + questions[i].answers[j] + '">' + '<p class="answers">' + questions[i].answers[j] + '</p><br>');
				}
			}
			$('#subwrapper').append('<br><button id="end">DONE</button>');
		},
		done: function () {
				for (var i=0; i < questions.length; i++) {
					$.each($('input[name="question-' + i + '"]:checked'), function() {

						if($(this).val() == questions[i].correctAnswer) {
							game.correct++;
						}

						else {
							game.incorrect++;
						}
					});	
				};

		
			// $.each($('input[name="question-0"]:checked'), function() {

			// 	if($(this).val() == questions[0].correctAnswer) {
			// 		game.correct++;
			// 	}

			// 	else {
			// 		game.incorrect++;
			// 	}
			// });
			// $.each($('input[name="question-1"]:checked'), function() {

			// 	if($(this).val() == questions[1].correctAnswer) {
			// 		game.correct++;
			// 	}

			// 	else {
			// 		game.incorrect++;
			// 	}
			// });
			// // $.each($('input[name="question-2"]:checked'), function() {

			// // 	if($(this).val() == questions[2].correctAnswer) {
			// // 		game.correct++;
			// // 	}

			// // 	else {
			// // 		game.incorrect++;
			// // 	}
			// // });
			// // $.each($('input[name="question-3"]:checked'), function() {

			// // 	if($(this).val() == questions[3].correctAnswer) {
			// // 		game.correct++;
			// // 	}

			// // 	else {
			// // 		game.incorrect++;
			// // 	}
			// // });
			// // $.each($('input[name="question-4"]:checked'), function() {

			// // 	if($(this).val() == questions[4].correctAnswer) {
			// // 		game.correct++;
			// // 	}

			// // 	else {
			// // 		game.incorrect++;
			// // 	}
			// // });
			// // $.each($('input[name="question-5"]:checked'), function() {

			// // 	if($(this).val() == questions[5].correctAnswer) {
			// // 		game.correct++;
			// // 	}

			// // 	else {
			// // 		game.incorrect++;
			// // 	}
			// // });
			// // $.each($('input[name="question-6"]:checked'), function() {

			// // 	if($(this).val() == questions[6].correctAnswer) {
			// // 		game.correct++;
			// // 	}

			// // 	else {
			// // 		game.incorrect++;
			// // 	}
			// // });
			// // $.each($('input[name="question-7"]:checked'), function() {

			// // 	if($(this).val() == questions[7].correctAnswer) {
			// // 		game.correct++;
			// // 	}

			// // 	else {
			// // 		game.incorrect++;
			// // 	}
			// // });
			// // $.each($('input[name="question-8"]:checked'), function() {

			// // 	if($(this).val() == questions[8].correctAnswer) {
			// // 		game.correct++;
			// // 	}

			// // 	else {
			// // 		game.incorrect++;
			// // 	}
			// // });

			this.result();
		},

		result: function (){
			clearInterval(timer);
			$('#subwrapper h2').remove();
			$('#subwrapper').html("<h2>All done!</h2>");
			$('#subwrapper').append("<h3>Correct Answers: " + this.correct+"</h3>");
			$('#subwrapper').append("<h3>Incorrect Answers: " + this.incorrect+"</h3>");
			$('#subwrapper').append("<h3>Unanswered: " +(questions.length-(this.incorrect+this.correct))+"</h3>");
			$('#subwrapper').css("background-image", "url(../images/mickey-congrats.jpg)");
			
		}
}
