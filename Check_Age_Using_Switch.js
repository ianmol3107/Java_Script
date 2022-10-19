let age= prompt("Enter your age?");
age=Number.parseInt(age);
switch(age){
  case 12:
    console.log("Your age is 12");
    break; // if we not put here BREAK statement then if 1st condition become true then after 1st condition all the statement will me print also...
  case 13:
    console.log("Your age is 13");
    break;
  case 14:
    console.log("Your age is 14");
    break;
  case 15:
    console.log("Your age is 15");
    break;
  case 16:
    console.log("Your age is 16");
    break;
  default:
    console.log("Your age is not special");
}
