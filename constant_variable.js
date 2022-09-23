const PI=3.14
console.log(PI)  // Once we declared a constant variable it can not be modified and can not be declared again!
function display()
{
    const PI=3.142  // but if you want to declared in your own variable in a function then this variable is different!
    console.log(PI)
}
display()