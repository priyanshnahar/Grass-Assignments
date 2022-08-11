const company = 'Britania';
console.log(company.length)

for(let i = 0; i < company.length; i++) {
    console.log(company[i]);
}

// to replace the letter
const product = 'Good Day Cookies';
let result = product.replace('G', 'F');
console.log(result);

// concat method 
const emptyString = " ";
let tagline = emptyString.concat("Smile",  " that",  " makes",  " it",  " Good",  " Day");
console.log(tagline);

// replace all the B letters
const message = "bat ball botton";
let result1 = message.replaceAll('b', 'c');
console.log(result1);


let sentence = "/I'm lovin, it"

let regExp = /[A-Z]/;
let indexReg = sentence.search(regExp);
console.log(indexReg);

// slice the string
const message2 = "Tasty bhi Healthy Bhi";
let result2 = message2.slice(0, 10);
console.log(result2);


const message3 = "JavaScript::is::fun";
let result3 = message3.split("::");
console.log(result);

// Output: [ 'JavaScript', 'is', 'fun' ]