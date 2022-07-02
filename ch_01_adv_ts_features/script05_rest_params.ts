/***********************************************
 * Deconstructing objects with REST properties *
 ***********************************************/
let guitar = {
	manufacturer: "Ibanez",
	model: "Jem 777",
	strings: 6,
};
let {manufacturer, ...details} = guitar;
const instruments = [
	"Guitar",
	"Violin",
	"Oboe",
	"Drums",
];
let [gtr, ...instrumentsSlice] = instruments;

/**********************************************************
 * Coping with a variable number of parameters using REST *
 **********************************************************/
function PrintInstruments(log: string, ...instruments: string[]): void {
	console.log(log);

	instruments.forEach((instrument, i) => console.log(i, instrument));
}
PrintInstruments("Music Shop Inventory", "Guitar", "Drums", "Clarinet", "Clavinova");
