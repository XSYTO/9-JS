/*
visi mokiniai turi tik 4 pazymius ir reikia suskaiciuoti vidurki.
*/
const petras = [10, 10, 8, 2];
const maryte = [5, 9, 7, 6];
const jonas = [7, 7, 8, 2];
const ona = [1, 5, 7, 10];

function vidurkis(pazymiai) {
    let pazymiuSuma = 0;
    pazymiuSuma += pazymiai[0]
    pazymiuSuma += pazymiai[1]
    pazymiuSuma += pazymiai[2]
    pazymiuSuma += pazymiai[3]
    return pazymiuSuma / pazymiai.length;
}

const petroVidurkis = vidurkis(petras);
console.log('Petras:', petroVidurkis);

const maryteVidurkis = vidurkis(maryte);
console.log('Maryte:', maryteVidurkis);

const jonasVidurkis = vidurkis(jonas);
console.log('Jonas:', jonasVidurkis);

const onaVidurkis = vidurkis(ona);
console.log('Ona:', onaVidurkis);
