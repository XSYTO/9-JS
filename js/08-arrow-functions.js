const pirmas = 7;
const antras = 5;

// iprasta funkcija
function suma(pirmas , antras) {
    return pirmas + antras;
}
const r1 = suma(pirmas, antras);
console.log(r1);



console.log('--------');
// kintamajam priskirta anonimine finkcija

const atimtis = function (a, b) {
    return a - b;
}
const r2 = atimtis(pirmas , antras);
console.log(r2);

console.log('----dalyba----');
// arrow (rodykline) funkcija
const dalyba = (a, b) => {
    return a / b;
}
const r3 = dalyba(pirmas, antras);
console.log(r3);

console.log('---------');
// arrow (rodykline) funkcija
// jei logikos bloke {} yra tik 1 procedura, tai galime nerasyti  {} ir return
const daugyba = (a, b) => a * b;
const r4 = daugyba(pirmas, antras);
console.log(r4);

console.log('---------');
// arrow (rodykline) funkcija
// jei logikos bloke {} yra tik 1 procedura, tai galime nerasyti  {}
const kvadratu = (a) => a * a;
const r5 = kvadratu(pirmas);
console.log(r5);