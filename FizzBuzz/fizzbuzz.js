//const number = prompt("Donnez moi un nombre entre 1 et 100");
//console.log(number);
//if (number % 3 === 0 && number % 5 === 0) {
  //alert("FizzBuzz");
//} else if (number % 3 === 0) {
  //alert("Fizz");
//} else if (number % 5 === 0) {
  //alert("Buzz");
//} else {
  //alert(number);
//}


let output = [];
let counter = 1;

function fizzBuzz() {
  if (counter % 3 === 0 && counter % 5 === 0) {
    output.push("FizzBuzz")
  } else if (counter % 3 === 0) {
    output.push("Fizz");
  } else if (counter % 5 === 0) {
    output.push("Buzz");
  } else {
    output.push(counter);
  }
  counter ++;
  console.log(output);
}
