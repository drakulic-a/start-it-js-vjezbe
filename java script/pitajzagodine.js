var kolikoGodina = prompt('koliko godina imas');
if (kolikoGodina<7) {
	console.log("Pristup zabranjen")
}
else if (kolikoGodina>7 && kolikoGodina<16) {
	console.log("Limitiran pristup")
}
else{
	console.log("Pun pristup")
}