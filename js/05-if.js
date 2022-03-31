/*
IF

Sablonai:
if () {}
if () {} else {}

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