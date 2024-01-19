/*

const n = 5;

for (let i = 1; i <= n; i++) {
    console.log(`hello, world`);
}


for (const x=7:i<=7;i++){
    console.log('hello world')
}

*/


let sum = 0;
let number = 0;

do {
    sum += number;
    number = parseInt(prompt('Enter a number: '));
} while(number >= 0)

console.log(`The sum is ${sum}.`);