var korisnikovIzbor = prompt ('Izaberi papir, kamen ili makaze');
console.log(korisnikovIzbor);
var racunarKaze = Math.random();
if (racunarKaze<=0.33) {
	racunarKaze="papir";
}else if (racunarKaze>=0.34 && racunarKaze<=0.66) {
	racunarKaze="kamen";
}else{
	racunarKaze="makaze";
}
console.log(racunarKaze);

if (korisnikovIzbor===racunarKaze) {
	console.log ("nereseno");
}


if (korisnikovIzbor == "papir") {

	if (racunarKaze == "kamen") {
		console.log ("pobedio si");
	}
	

	else if (racunarKaze == "makaze") {
		console.log ("izgubio si");

	}


}

else if (korisnikovIzbor == "kamen") {

	if (racunarKaze == "papir") {
		console.log ("izgubio si");

	}

	else if (racunarKaze == "makaze") {
		console.log ("pobedio si");
	}

}

else if (korisnikovIzbor == "makaze") {
	if (racunarKaze == "kamen") {
		console.log("izgubio si")
	}

	else if (racunarKaze == "papir") {
		console.log("pobedio si")
	}
}



