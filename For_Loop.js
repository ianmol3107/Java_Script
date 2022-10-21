let sum=0;
let num = prompt("Enter your first digit number: ");
num = Number.parseInt(num);
for(let i=1; i<num+1 ; i++){
  sum = (sum + i);
}
console.log("Sum of " + num + " Natural number is " + sum);
