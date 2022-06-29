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

console.log(details.strings);
