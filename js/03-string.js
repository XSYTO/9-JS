/*
STRING

kabutes: 
- viengubos (')
- dvigubos ("")
- backtick (`)

Teksto simboliu kiekis: .lenght()
*/

const name = 'vardas';
console.log(name);

const lastname = "vardenis";
console.log(lastname);

const viengubaKabute = "viengubos(')";
console.log(viengubaKabute);

const dvygubaKabute = 'dvyguba(")';
console.log(dvygubaKabute);

const kabutes12 = 'Ciar yra vienguba (\') ir dvyguba (") kabutes.'
console.log(kabutes12);

const dvygubakabutes12 = "Ciar yra vienguba (') ir dvyguba (\") kabutes."
console.log(dvygubakabutes12);

const visoskabutes12 = "Ciar yra vienguba (\') ir dvyguba (\") kabutes."
console.log(visoskabutes12);

console.log('---------');

const clientName = 'Arnoldas';
const clientAge = 27;
// Client Arnoldas is 27 years old.
const clientBio = 'Client ' + clientName + ' is' + ' ' + clientAge + ' years old.';
console.log(clientBio);

console.log('--------');

const backtickClient = `Client ${clientName} is ${clientAge} years old.`;
console.log(backtickClient);

console.log('--------');
const n1 = 7;
const n2 = 5;
// 7 + 5 = 12
const ats = `${n1} + ${n2} = ${n1 + n2}`;
console.log(ats);

console.log('--------');
const abc = 'abcdef';
const abcDydis = abc.length;
console.log(`Abeceles "${abc}" dydis yra ${abcDydis} simboliai.`);