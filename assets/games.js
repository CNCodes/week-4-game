
var gameObject = {

	playerStats: {

		playerChosen: "",

		playerAttack: "",

		playerHealth: "",

	},

	opponentStats: {

		opponentChosen: "",

		opponentHealth: "",

		opponentAttack: "",
	},

	/*initializeGame: function(name, image, attack, health, contstant) {
		var newDiv = $('<div></div').addClass("picture styleMe col-xs-3 col-sm-3 col-md-3 col-lg-3 text-center btn");
		newDiv.attr({
			data-attack: attack,
			data-health: health,
			data-constant: constant,
		});
		var nameSection = $('<p></p>').text(name);
		var imageSection = $()



	}*/


	startGame: function(){
		$(".picture").on("click", function(){

				gameObject.playerStats.playerHealth = parseInt($(this).attr("data-health"));
				gameObject.playerStats.playerAttack = parseInt($(this).attr("data-attack"));

				$(this).removeClass("picture");
				$(this).appendTo("#characterChosen");

				$(".picture").addClass("opponent");

				$(this).addClass("picture");

				$(".opponent").appendTo("#enemyPlayers");

				$(".picture").off("click");
				
				gameObject.chooseBadGuy();


		});

	},

	chooseBadGuy: function(){
		$(".opponent").on("click", function(){

				gameObject.opponentStats.opponentHealth = parseInt($(this).attr("data-health"));
				gameObject.opponentStats.opponentAttack = parseInt($(this).attr("data-constant"));

				$(this).removeClass("opponent");
				$(this).addClass("defeatMe");
				$(this).appendTo("#enemyChosen");

				gameObject.startTheBrawl();

				$(".opponent").off("click");
			
		});

	},

	startTheBrawl: function(){	
		$("#fightButton").on("click", function(){

			gameObject.playerStats.playerHealth = gameObject.playerStats.playerHealth - gameObject.opponentStats.opponentAttack;

			gameObject.opponentStats.opponentHealth = gameObject.opponentStats.opponentHealth - gameObject.playerStats.playerAttack;

			gameObject.playerStats.playerAttack = gameObject.playerStats.playerAttack + (gameObject.playerStats.playerAttack*.5);

			$('#fightText').html('<p style = "color: #E8DF80;"> Your health is ' + gameObject.playerStats.playerHealth + '</p><br><p style = "color: #E8DF80;"> Your opponents health is ' + gameObject.opponentStats.opponentHealth + '</p><br><p style = "color: #E8DF80;"> Your attack is now '+gameObject.playerStats.playerAttack);

		if(gameObject.opponentStats.opponentHealth <= 0){
			alert("You've defeated opponent");
			$('#fightText').html( '<p style = "color: #E8DF80;"> Choose Your Next Opponent </p>');
			$(".defeatMe").appendTo("#defeatedCharacter");
			
			gameObject.opponentCount++;
			gameObject.chooseBadGuy();
			$("#fightButton").off("click");

		}

		if(gameObject.playerStats.playerHealth <= 0){
			alert("You lost");
			gameObject.resetGame();
		}
	});
},

	resetGame: function() {
		$(".picture").appendTo("#choosePlayer");
		$("#fightButton").off("click");
		$(".opponent").off("click");
		$(".defeatMe").removeClass("defeatMe");
		gameObject.startGame();
	}

}



$(document).ready(function(){

gameObject.startGame();

$('#resetContainer').on('click', function(){
	gameObject.resetGame();
});

});



