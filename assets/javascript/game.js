$(document).ready(function() {

var characterObject = {
	id: "",
	name: "",
	image: "",
	health: 0,
	attack: 0,
	counterAttack: 0,
};

var obiwan = characterObject
var luke = characterObject
var sidious = characterObject
var maul = characterObject
var characters = [];

var resetGame

var battle = {
	hero: "",
	villain: "",
	defeated: 0,
	heroHealth: 0,
	villainHealth: 0,
	heroBaseAttack: 0,
	heroCurrentAttack: 0,
	villainAttack: 0,

};


$("[id=0]").on("click", function() {
	console.log("0");
	battleStage(0);
});

$("[id=1]").on("click", function() {
	console.log("1");
	battleStage(1);
});

$("[id=2]").on("click", function() {
	console.log("2");
	battleStage(2);
});

$("[id=3]").on("click", function() {
	console.log("3");
	battleStage(3);
});

$("[id=4]").on("click", function() {
	console.log("4");
	battleStage(4);
});


function drawAvailableCharacters() {
	for (var i = 0; i < characters.length; i++) {
		value = '[id=' + i + ']';
		$(i).empty();
		drawCharacter(i, value);
	}
}

function drawCharacter(index, location) {
	value = '[id=' + index + ']';
		lblName = '<p class="characterName characterCardText">' + characters[index].name + '</p>';
		imgURL = '<img class="characterImage" src=assets/images/' + characters[index].image + '></img>';
		lblHealth = '<p class="characterHealth characterCardText">' + characters[index].health +'</p>';
		$(location).append(lblName);
		$(location).append(imgURL);
		$(location).append(lblHealth);
}

function battleStage(character) {
	id = "[id=" + character + "]";
	if (battle.hero === "") {
		$(id).empty();
		drawCharacter(character, "#hero");
		battle.hero = characters[character].id;
		battle.heroBaseAttack = characters[character].attack;
		battle.heroCurrentAttack = characters[character].attack;
		battle.heroHealth = characters[character].health;
		$("#instructionText").text("Choose a character to battle against!");

	}
	else if (battle.villain === "") {
		$(id).empty();
		drawCharacter(character, "#villain");
		battle.villain = characters[character].id;
		battle.villainAttack = characters[character].counterAttack;
		battle.villainHealth = characters[character].health;
		$("#instructionText").text("Click attack button to begin the fight!");
		$("#attackButton").fadeIn(200);
		console.log(battle)
	}
}

$("#attackButton").on("click", function() {
	battle.heroHealth -= battle.villainAttack;
	battle.villainHealth -= battle.heroCurrentAttack;
	battle.heroCurrentAttack += battle.heroBaseAttack;
	$("#heroInflictedDamage").text("You attacked " + battle.villain + " and inflicted " + battle.heroCurrentAttack + " damage.");
	$("#villainInflictedDamage").text(battle.villain + " attacked you and inflicted " + battle.villainAttack + " damage.");
	$("#instructionText").text("Choose a character to battle against!");
	$("#hero .characterHealth").text(battle.heroHealth)
	$("#villain .characterHealth").text(battle.villainHealth)
	checkForWinner();
})



function checkForWinner() {

	if (battle.villainHealth <= 0) {
		$("#attackButton").fadeOut(200);
		$("#instructionText").text("You won that battle!  Can you win the war?  Choose another character to battle!");
		$("#heroInflictedDamage").text("");
		$("#villainInflictedDamage").text("");

		$("#villain").empty();
		battle.villain = "";
		battle.defeated += 1
			if (battle.defeated === characters.length - 1) {
				$("#instructionText").text("You won the war!!  You are a Jedi Master!!");
				$("#hero").empty();
				resetGame = setInterval(initialize, 3000);
				
			}

	}
	else if (battle.heroHealth <= 0) {
		$("#attackButton").fadeOut(200);
		$("#instructionText").text("You lose!");
		$("#hero").empty();
		$("#villain").empty();
		$("#attackButton").hide();
		$("#instructionText").text("You lose!!  You have brought shame to the galaxy!");
		$("#heroInflictedDamage").text("");
		$("#villainInflictedDamage").text("");
		resetGame = setInterval(initialize, 3000);

	}
}

function initializeCharacters() {
	obiwan = {
	id: "obiwan",
	name: "Obi-Wan Kenobi",
	image: "obi-wan.jpg",
	health: 120,
	attack: 9,
	counterAttack: 5,
	};

	luke = {
	id: "luke",
	name: "Luke Skywalker",
	image: "luke.jpg",
	health: 100,
	attack: 10,
	counterAttack: 8,
	};

	sidious = {
	id: "sidious",
	name: "Darth Sidious",
	image: "sidious.jpg",
	health: 150,
	attack: 11,
	counterAttack: 13,
	};

	maul = {
	id: "maul",
	name: "Darth Maul",
	image: "maul.jpg",
	health: 180,
	attack: 12,
	counterAttack: 21,
	};

	characters = [obiwan, luke, sidious, maul];

	battle = {
		hero: "",
		villain: "",
		defeated: 0,
		heroHealth: 0,
		villainHealth: 0,
		heroBaseAttack: 0,
		heroCurrentAttack: 0,
		villainAttack: 0,
	};

	console.log(battle);

};

function setUpTheBaseHTML() {
	$("#instructionText").text("Click a character to choose it as your hero!");
	$("#attackButton").hide();	
	for (var i = 0; i < 4; i++) {
		$(i).empty();
	}
}

function initialize() {
	clearInterval(resetGame);
	setUpTheBaseHTML();
	
	initializeCharacters();	
	drawAvailableCharacters();
	}

initialize();

});