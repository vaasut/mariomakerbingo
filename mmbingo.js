NUM_CHALLENGES = 33;


function getChallenges(){
	let challenges = [];
	let out = [];
	let name = ""
	for (let i = 1; i <= NUM_CHALLENGES; i++){
		name = "challenge" + i;
		label_name = name + "label";
		if (document.getElementById(name).checked){
			challenges.push(document.getElementById(label_name).innerHTML);
		}
		else{
			out.push(document.getElementById(label_name).innerHTML);
		}
	}
	if (challenges.length < 24){
		alert("Not enough challenges to fill Bingo Board! Adding Extra Challenges!");
		while (challenges.length < 24){
			challenges.push(out.pop());
		}
	}
	return challenges;
}


function shuffleSquares(challenges){
	let randomSpot = 0;
	let temp = 0;
	for (let i = 0; i < challenges.length; i++){
		randomSpot = Math.floor(Math.random() * challenges.length);
		temp = challenges[i];
		challenges[i] = challenges[randomSpot];
		challenges[randomSpot] = temp;
	}
	//console.log(challenges)
	return challenges;
}


function bingoBoard(){
	challenges = getChallenges();
	let table = document.getElementById("bingoBoard");
	let tableBody = document.createElement('tbody');

	if (table.childNodes.length == 2){ //reset board
		table.removeChild(table.childNodes[1]);
	}

	challenges = shuffleSquares(challenges);
	challenges.push("Free Space");
	let temp = challenges[12];
	challenges[12] = challenges[challenges.length-1];
	challenges[challenges.length-1] = temp;

	
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
		//console.log(table.childNodes);
		table.removeChild(table.childNodes[1]);
	}
	table.appendChild(tableBody);
}

