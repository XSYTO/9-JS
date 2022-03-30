/*
ARRAY
- pozicijos prasideda nuliu
- pozicijos tik sveikieji skaiciai
- ilgis / irasu kiekis --> .length
*/
const pazymiai = [10, 2, 8, 4, 6, 8];
console.log('Pazymiai:', pazymiai);

console.log('----------');

// koks pirmas
// koks paskutinis
// pazymiu vidurki
// pazymiu kiekis

console.log('Pirmas:', pazymiai[0]);
console.log('Antras:', pazymiai[1]);
console.log('Trecias:', pazymiai[2]);

const pazymiuKiekis = pazymiai.length;
const paskutinioPozicija = pazymiuKiekis - 1;
console.log('Paskutinis:', pazymiai[paskutinioPozicija]);
console.log('Paskutinis:', pazymiai[pazymiai.length - 1]);

// masyvas -> ilgis -> paskutinio pozicija
// [1] -> 1 -> 0
// [1, 2] -> 2 -> 1
// [1, 2, -6] -> 3 -> 2
// [1, 2, -6, 13] -> 4 -> 3

console.log('--------');

const studentai = ['Petriukas', 'Kiesa', 'Jonce', 'Antonis'];
console.log(studentai);

let index = 0;
console.log(`Cia yra: ${studentai[index++]}.`);
console.log(`Cia yra: ${studentai[index++]}.`);
console.log(`Cia yra: ${studentai[index++]}.`);
console.log(`Cia yra: ${studentai[index++]}.`);