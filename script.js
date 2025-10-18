operazione = prompt("Digita 1 per le addizioni, 2 per le sottrazioni, 3 per le moltiplicazioni e 4 per le divisioni.");
a = prompt("Inserisci il primo valore");
b = prompt("Inserisci il secondo valore");
if (operazione == 1) {
    risultato = parseInt(a) + parseInt(b);
	c = prompt("Quale sarebbe secondo te il risultato?");
	if (c == risultato) document.write("Il risultato è CORRETTO!")
	else document.write("Il risultato non è corretto.")
}
if (operazione == 2) {
    risultato = parseInt(a) - parseInt(b);
	c = prompt("Quale sarebbe secondo te il risultato?");
	if (c == risultato) document.write("Il risultato è CORRETTO!")
	else document.write("Il risultato non è corretto.")
}
if (operazione == 3) {
    risultato = parseInt(a) * parseInt(b);
	c = prompt("Quale sarebbe secondo te il risultato?");
	if (c == risultato) document.write("Il risultato è CORRETTO!")
	else document.write("Il risultato non è corretto.")
}
if (operazione == 4) {
    risultato = parseInt(a) / parseInt(b);
	c = prompt("Quale sarebbe secondo te il risultato?");
	if (c == risultato) document.write("Il risultato è CORRETTO!")
	else document.write("Il risultato non è corretto.")
}