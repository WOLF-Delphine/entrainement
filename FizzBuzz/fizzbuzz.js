const number = prompt("Donnez moi un nombre entre 1 et 100");
console.log(number);
if (number % 3 === 0 && number % 5 === 0) {
  alert("FizzBuzz");
} else if (number % 3 === 0) {
  alert("Fizz");
} else if (number % 5 === 0) {
  alert("Buzz");
} else {
  alert(number);
}
