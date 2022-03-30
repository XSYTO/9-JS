/*
- normalus:
    - sveikieji
    - desimtainiai
- nenormalus:
    - NaN (not-a-number)
    - Infinity; -Infinity
    
OPERATORIAI:
++ - padidinimas vienu vienetu;
-- - sumazinimas vienu vienetu;
+=, -=, /=, *=, %= - savo paties reiksmes pakeitimas (a = a + 5 --> a += 5)
*/

const sveikasis = 5;
const desimtainis = 3.14;
const neigiamasDesimtainis = -3.14;
const neSkaicius = NaN;
const begalybe = Infinity;

const pirmas = 'Labas';
const antras = 'rytas';

const dalmuo = pirmas/antras;
console.log(dalmuo);

console.log('num; num');
console.log(7 + 5);
console.log(7 - 5);
console.log(7 * 5);
console.log(7 / 5);

console.log('num; string');
console.log(7 + '5');
console.log(7 - '5');
console.log(7 * '5');
console.log(7 / '5');

console.log('string; num');
console.log('7' + 5);
console.log('7' - 5);
console.log('7' * 5);
console.log('7' / 5);

console.log('string(num); string(num)');
console.log('7' + '5');
console.log('7' - '5');
console.log('7' * '5');
console.log('7' / '5');
console.log('---------');
console.log('num; true');
console.log(7 + true);
console.log(7 - true);
console.log(7 * true);
console.log(7 / true);

console.log('num; false');
console.log(7 + false);
console.log(7 - false);
console.log(7 * false);
console.log(7 / false);

console.log('true; num');
console.log(true + 7);
console.log(true - 7);
console.log(true * 7);
console.log(true / 7);

console.log('false; num');
console.log(false + 7);
console.log(false - 7);
console.log(false * 7);
console.log(false / 7);

console.log('----------');
console.log(2 ** 4);
console.log(3.14 ** 3.14);

console.log('----------');
console.log(26 % 5);
console.log(13 % 14);

console.log('----------');
let pinigineAfter = 0;
console.log('pinigine:', pinigineAfter++);
console.log('pinigine:', pinigineAfter++);
console.log('pinigine:', pinigineAfter++);
console.log('pinigine:', pinigineAfter++);
console.log('pinigine:', pinigineAfter++);

console.log('----------');
let pinigineBefore = 0;
console.log('pinigine:', ++pinigineBefore);
console.log('pinigine:', ++pinigineBefore);
console.log('pinigine:', ++pinigineBefore);
console.log('pinigine:', ++pinigineBefore);
console.log('pinigine:', ++pinigineBefore);


console.log('----------');
let skolaAfter = 0;
console.log('pinigine:', skolaAfter--);
console.log('pinigine:', skolaAfter--);
console.log('pinigine:', skolaAfter--);
console.log('pinigine:', skolaAfter--);
console.log('pinigine:', skolaAfter--);

console.log('----------');
let skolaBefore = 0;
console.log('pinigine:', --skolaBefore);
console.log('pinigine:', --skolaBefore);
console.log('pinigine:', --skolaBefore);
console.log('pinigine:', --skolaBefore);
console.log('pinigine:', --skolaBefore);

let a = 5;
console.log(a);
a = a + 1 ;
console.log(a);
++a;
console.log(a);
a++;
console.log(a);

console.log('----------');
let b = 0;
console.log(b);
b = b + 3;
console.log(b);
b++;
b++;
b++;
console.log(b);
b += 3;
console.log(b);

console.log('----------');
let c = 16;
const d = 2;
console.log(c);
c /= d;
console.log(c);
c /= d;
console.log(c);
c /= d;
console.log(c);
c /= d;
console.log(c);

console.log('----------');
let e = 5;
console.log(e);
e /= e;
console.log(e);



