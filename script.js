// if 
/*
var a=50;  
if(a>10){  
console.log("Greater than 10");
}
*/  

//nested if
/*
var a=5;  
if(a==10){  
console.log("a is equal to 10");  
}  
else if(a==15){  
console.log("a is equal to 15");  
}  
else if(a==20){  
console.log("a is equal to 20");  
}  
else{  
console.log("a is not equal to 10, 15 or 20");  
}
*/

/*
function js(a){
switch(a){
    case 'py':
        console.log("executed");
        break;
    case 'h':
        console.log("code executed");
        break;
    case '3':
        console.log("enter value");
        break;
    default:
        alert("wrong");   
}
}
js('4')

*/


/*
function greet(name) {
    console.log("Hello " + name + ":");
}

let name = prompt("Enter a name: ");

greet(name);
*/

/*
function add(a1, b1) {
    console.log(a1 + b1);
    console.log(a1 - b1);
    console.log(a1 * b1);
    console.log(a1 + b1);
}

add(3,4);
*/



// loop concept in javascript.
/*
for (let i = 0; i < 5; i++) {
	console.log(i);
 }



let arrayExample = [];


for (let i = -1; i < 4; i++) {
	
	arrayExample.push(i);
	console.log(arrayExample);
}



var text= "welcome to welcome javascript program organized by brightskills and brightskills welcomes you once again";

console.log(text.length);
console.log(text.indexOf("you",5));



let today= new Date();

console.log(today);

console.log(today.toDateString());


console.log(today.getMonth());
console.log(today.toLocaleString());
console.log(today.getMilliseconds());

*/


/*
    var namelist
    =["karthick", "kavin", "kayal", "ragu", "mani", "harsh", "anand", "basheer"];   
    
    console.log(namelist);
    console.table(namelist);

     console.table(namelist[0]);
     console.table(namelist[1]);
    // console.table(namelist[2]);
    // console.table(namelist[3]);
    // console.table(namelist[4]);



var namelist
=["karthick", "kavin", "kayal", "ragu", "mani", "harsh", "anand", "basheer"];   

console.log(namelist);
 console.table(namelist);
 console.table(namelist[0]);
 console.table(namelist[1]);
 console.table(namelist[2]);
 console.table(namelist[3]);
 console.table(namelist[4]);



var text= "welcome to welcome javascript program organized by brightskills and brightskills welcomes you once again";

console.log(text.length);
console.log(text.indexOf("welcome"));
console.log(text.indexOf("welcome", 10));
console.log(text.lastIndexOf("welcome"));
console.log(text.search("welcome"));
let arr=text.search(/welcome/);
console.log(arr);
let arr1=text.match(/welcome/);
console.log(arr1);
let arr11=text.match(/welcome/gi);
console.log(arr11);

console.log(text.slice(19,29));
*/

// for loop
/*
for (let i=0;i<=5;i++) {
    console.log("saran");
}


// while loop

// program to display numbers from 1 to 5

let i = 1, n = 5;

while (i <= n) {
    console.log("srn");
    i += 1;
}
*/

let sum = 0;

let number = parseInt(prompt('Enter a number: '));
while(number >= 0) {
    sum += number;
    number = parseInt(prompt('Enter a number: '));
}
console.log(`The sum is ${sum}.`);

