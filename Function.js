let a=4,b=6,c=9;
const hello = () =>{
  console.log("Hey, how are you all?");
  return "Awein";
}
function avg(x,y){
  let i;
  i= (x+y)/2+1;
  console.log("Average of numbers " + x +" and " + y + " is: "+ i);
  // console.log("DONE");
}
avg(a,b);
avg(b,c);
avg(a,c);
hello();
