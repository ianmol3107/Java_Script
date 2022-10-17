let a= prompt("Hey Dude what's your age?");
console.log(typeof a);
console.log();

a=Number.parseInt(a); // Convert the string to a number
console.log(typeof a);

console.log();
if(a<0){
  console.log("Age is Invaild")
}
else if(a<9){
  console.log("you can't even think to drive a car");
}

else if(a>9 && a<18){
  console.log("you can't drive a car");
}

else if(a>18 && a<=45){
  console.log("you can drive a car");
}

else{
  console.log("your age is above 45, so take rest! don't need to drive");
}

console.log();
console.log();
console.log("You can", (a>60)? "Take a bed rest Now Uncle Ji...": "Not drive" );
