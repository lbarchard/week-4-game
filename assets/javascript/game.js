$(document).ready(function() {
var obiwan = {
	id: "obiwan",
	name: "Obi-Wan Kenobi",
	image: "obi-wan.jpg",
	health: "120",
};

var luke = {
	id: "luke",
	name: "Luke Skywalker",
	image: "luke.jpg",
	health: "100",
};

var sidious = {
	id: "sidious",
	name: "Darth Sidious",
	image: "sidious.jpg",
	health: "150",
};

var maul = {
	id: "maul",
	name: "Darth Maul",
	image: "maul.jpg",
	health: "180",
};

var characters = [obiwan, luke, sidious, maul];

var battle = {
	hero: "",
	villain: "",
	defeated: [],
};

$("[id=0]").on("click", function() {
	console.log("0");
	battleStage(0);
})

$("[id=1]").on("click", function() {
	console.log("1");
	battleStage(1);

	// console.log($.contains( "#hero", "characterName" ));
})

$("[id=2]").on("click", function() {
	console.log("2");
	battleStage(2);
})

$("[id=3]").on("click", function() {
	console.log("3");
	battleStage(3);
})

$("[id=4]").on("click", function() {
	console.log("4");
	battleStage(4);
})


function drawInitialCharacters() {
	for (var i = 0; i < characters.length; i++) {
		value = '[id=' + i + ']';
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
		battle.hero = characters[character].name;
	}
	else if (battle.villain === "") {
		$(id).empty();
		drawCharacter(character, "#villain");
		battle.villain = characters[character].name;
	}
}
drawInitialCharacters();

});

