var Random    = require('random-js'); //Wir benutzen ein Modul, das "echte" Zufallszahlen generiert
var doubleAll = require('./doubleAll');

//Bonus: Mit dem Paket random-js erstellen wir Mersenne Twister-19937 und lassen Ihn anhang von Zeit und andere Parameter initialisieren
var engine = Random.engines.mt19937().autoSeed();
// Dann legen wir eine Bereich für die Zufallszahlen fest
var randomInteger = Random.integer(0, 99);

var numbers = [];

//Wir füllen den Array numbers mit 10 Zufallszahlen
for (var i = 0; i < 10; i++) {
  numbers.push(randomInteger(engine))
};

//Hier wird Ihr Modul aufgerufen
var doubledNumbers = doubleAll(numbers);

for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i] + ' * 2 = ' + doubledNumbers[i] + ' ?')
};