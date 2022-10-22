let num = prompt("Enter your number: ");
num = Number.parseInt(num);
factorial = 1;
for(let i=num; i>=1; i--){
  factorial = (factorial * i);
}
console.log(factorial);
