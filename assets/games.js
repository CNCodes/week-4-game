
var itsfightTime = false;

var chosenYourCharacter = false;

var opponentNotChosen = true;

var playerChosen;

var playerAttack;

var playerHealth;

var opponentChosen;

var opponentHealth;

var opponentAttack;

var opponentCount = 0;

$(document).ready(function(){

$(".picture").on("click", function(){

	if(chosenYourCharacter === false){

	playerHealth = parseInt($(this).attr("data-health"));
	playerAttack = parseInt($(this).attr("data-attack"));

	$(this).removeClass("picture");

	$(this).appendTo("#characterChosen");

	$(".picture").addClass("opponent");

	$(".opponent").appendTo("#enemyPlayers");

	$(".opponent").removeClass("picture");

	console.log(playerHealth, playerAttack);

	chosenYourCharacter = true;

}

});

$(document).on("click", ".opponent", function(){

	if(opponentNotChosen){

		opponentHealth = parseInt($(this).attr("data-health"));
		opponentAttack = parseInt($(this).attr("data-constant"));


		$(this).addClass("defeatMe");
		$(this).appendTo("#enemyChosen");

		console.log(opponentHealth, opponentAttack);

		opponentNotChosen = false;
		itsfightTime = true;
	}
});

$("#fightButton").on("click", function(){
	if(itsfightTime){

		playerHealth = playerHealth - opponentAttack;

		opponentHealth = opponentHealth - playerAttack;

		playerAttack = playerAttack + (playerAttack*.5);

		alert(playerHealth);
		alert(opponentHealth);
		alert(playerAttack);
	}

	if(opponentHealth <= 0){
		alert("You've defeated opponent");
		$(".defeatMe").appendTo(defeatedCharacter);
		opponentNotChosen = true;
		itsfightTime = false;
		opponentCount++;

	}

	if(playerHealth <= 0){
		alert("You lost");
		location.reload();
	}
})

});



