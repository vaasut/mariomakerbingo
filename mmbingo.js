let challenges = 
["Complete a snow level",
"Complete a level while riding Yoshi",
"Collect three bonus one-ups in a level (x5)",
"Complete an SMB 3 level",
"Defeat Boom-Boom in three different levels",
"Get the world record on a level (x3)",
"Complete a castle level",
"Complete a level while wearing a shell helmet",
"Complete a level while carrying a pow block",
"Ride in a clown car in three different levels",
"Complete a water level",
"Complete an autoscroller level",
"Collect a key in five different levels",
"Complete 5 levels",
"Complete 15 levels",
"Complete a specific challenge level",
"Complete a level with exactly 42 coins",
"Complete a puzzle level (any level with the puzzle tag)",
"Complete a level on your first try",
"Complete a level with the fire flower powerup",
"Complete a speedrun level (any level with the speedrun tag)",
"Have over 15 lives (25 for expert, 35 for super expert)",
"Complete a night level (x3)",
"Defeat the angry sun"]

function shuffleSquares(challenges){
	let randomSpot = 0;
	let temp = 0;
	for (let i = 0; i < challenges.length; i++){
		randomSpot = Math.floor(Math.random() * challenges.length);
		temp = challenges[i];
		challenges[i] = challenges[randomSpot];
		challenges[randomSpot] = temp;
	}
	console.log(challenges)
	return challenges;
}


function bingoBoard(challenges){
	let table = document.getElementById("bingoBoard");
	let tableBody = document.createElement('tbody');

	if (table.childNodes.length == 2){ //reset board
		table.removeChild(table.childNodes[1]);
		challenges[12] = challenges[24];
		challenges.pop();
	}
	challenges = shuffleSquares(challenges);
	challenges.push("Free Space");
	let temp = challenges[12];
	challenges[12] = challenges[24];
	challenges[24] = temp;

	
	for (let i = 0; i < 5; i ++) {
		let row = document.createElement('tr');
		for (let j = 0; j < 5; j++){
			let cell = document.createElement('td');
			cell.appendChild(document.createTextNode(challenges[i*5+j]));
			row.appendChild(cell);
			}
		tableBody.appendChild(row);
	};

	if (table.childNodes.length == 2){
		console.log(table.childNodes);
		table.removeChild(table.childNodes[1]);
	}
	table.appendChild(tableBody);
}

