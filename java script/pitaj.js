var unesiBoju=prompt('Unesi jednu od osnovnih boja');
var unesiBoju2=prompt('Unesi jos jednu od osnovnih boja');

if (unesiBoju!=="plava" && unesiBoju!== "crvena" && unesiBoju!== "zuta") {
	console.log('Unijeli ste pogresnu boju');
}

if (unesiBoju2!=="plava" && unesiBoju2!== "crvena" && unesiBoju2!== "zuta") {
	console.log('Unijeli ste pogresnu boju');
}

if (unesiBoju=="crvena") {
	if (unesiBoju2=="plava") {
		console.log("Ljubicasta  boja");
	}

	else if (unesiBoju2=="zuta"){
		console.log("Narandzasta boja");
	}

	else {
		console.log("Crvena boja");
	}
}

if (unesiBoju=="plava") {
	if (unesiBoju2=="crvena") {
		console.log("Ljubicasta boja");
	}

	else if (unesiBoju2=="zuta") {
		console.log("Zelena boja");
	}

	else {
		console.log("Plava boja");
	}
}

if (unesiBoju=="zuta") {
	if (unesiBoju2=="crvena") {
		console.log("Narandzasta boja");
	}

	else if (unesiBoju2=="plava"){
		console.log("Zelena boja");
	}

	else{
		console.log("Zuta boja");
	}
}

/*nije dovoljno staviti samo = zato sto time dodjeljujemo, treba staviti == ili === jer se tako provjerava jednakost*/