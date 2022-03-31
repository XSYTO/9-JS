/*
IF

Sablonai:
if () {}
if () {} else {}
if () {} else if {}
if () {} else if {} else
if () {} else if {} else {} .... else if{}

Palyginimo operatoriai:
- visi: >, <, <=, =>, ==, !=, ===
- naudotini: >, <, <=, =>, !==, ===
- NEnaudotini: ==, !=,
*/

const a = 7;
const b = 5;

if (a >= b) {
    console.log('A yra daugiau arba lygu uz B');
} else{
    console.log('A nera daugiau uz B');
}    

if (a <= b) {
    console.log('A yra maziau arba lygu uz B');
} else{
    console.log('A nera maziau uz B');
}

if (a === b) {
    console.log('A yra lygu B');
} else{
    console.log('A ne lygu B');
}    

console.log('-------');

const day = 10;

if (day === 1) {
    console.log('pirmadienis');
} else if (day === 2) {
    console.log('antradienis');
} else if (day === 3) {
    console.log('treciadienis');
} else if (day === 4) {
    console.log('ketvirtadienis');
} else if (day === 5) {
    console.log('penktadienis');
} else if (day === 6) {
    console.log('sestadienis');
} else if (day === 7) {
    console.log('sekmadienis');
} else {
    console.log('tokios dienos savaiteje nera');
}

console.log('-------');
const akiuSpalva = 'melyna';

if (akiuSpalva === 'zalia') {
    console.log('Zaliaakiai yra zalciai!');
}