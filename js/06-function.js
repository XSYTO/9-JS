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


/*
Funkcija gauna varda ir turi grazinti sakini:
"Vardo pirma raide yra [V] ir vardas sudarytas is [5] raidziu."
*/

function vardoAnalize(name) {
    return `Vardo "${name}"pirma raide yra ${name[0]} ir vardas sudarytas is ${name.length} raidziu.`
}

const petroVardas = vardoAnalize('Petras');
console.log(petroVardas);

const onaVardas = vardoAnalize('Ona');
console.log(onaVardas);

/*
Funkscija gauna du skaicius ir turi grazinti lygti su sprendimu, pvz.:
2 + 2 = 4
*/

function suma(a, b) {
    return `${a} + ${b} = ${a + b}`;
}

const s1 = suma(2, 3);
console.log(s1);

const s2 = suma(0.1, 0.2);
console.log(s2);

const s3 = suma(-88, -11);
console.log(s3);

/*

desimtainis skaicius
0           00
1           01
2           10
3           011
4           100
5           101
6           110
7           111
8           1000

0.55         5,5*10^-1     [sveika, desimataine, laipsnis]
0.0714      7.14*10^-2  [7, 14, -2]

*/
