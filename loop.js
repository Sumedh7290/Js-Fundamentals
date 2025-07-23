function printGreeting(name){
    console.log(`welcome to My Restaurant ${name}`);

}
printGreeting("Boneto Fine dine");
printGreeting("Bombay 63");
printGreeting("Classic Comforts");


function addNum(num1, num2){
  let num1 = Number(num1);
let num2=Number(num2);
    if(isNaN(num1) || isNaN(num2)){
        return  ("please enter valid numbers");
    }
    return num1 + num2;
    


console.log(addNum(10,"20abc"))



let num = 12;
console.log(isNaN(num)); 

let num1 = "123abc";
console.log(isNaN(num1));