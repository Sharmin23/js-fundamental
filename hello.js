// *************var,let,const*********
//how to declare a variable using var,let and const
// var,var declarations are globall scope,variable can be re-declared and update,var variable are hoisted to the top 

// re-declare
// var name = 'sharmin';
// var name = 'sumaiya';

// update
// var greeter = "hey hi";
//     greeter = "say Hello instead";

//     console.log(name);
//     console.log(greeter)


//let ,let is block scoped and bounded by{},let can be update but not re-declared
// let age = 24;
//     age = 25;

//     console.log(age);

// const, const declaration are block scoped,can't be updated or re-declared.

// we can change the element of constant array 

// const cars = ["saab","volvo","BMW"];

// cars[0] = "toyota";
// // console.log(cars);

// // we can change the property of a const object:

// // You can create a const object:
// const car = {type:"Fiat", model:"500", color:"white"};

// // You can change a property:
// car.color = "red";

// // You can add a property:
// car.owner = "Johnson";

// console.log(car);

// ************Condition***********


// if (condition) {
//     //  block of code to be executed if the condition is true
//   }

/*switch(expression) {
    case x:
      // code block
      break;
    case y:
      // code block
      break;
    default:
      // code block
  }*/


  /*switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }*/

  //***************Array************


//   const cousins = ['sharmin','sumaiya','nasima'];
//   console.log(cousins);

//  //accessing array elements
//  console.log(cousins[1]);

//  //changing an array Element/set
//  cousins[0] = 'sonali';
//  console.log(cousins);

//  //FIND the index of an element
//  var positionIndex = cousins.indexOf('sumaiya');
//  console.log(positionIndex);

// //length property
// console.log(cousins.length);

// //accessing first element
// console.log(cousins[0]);

// // accessing last element
// const lastElement = cousins[cousins.length-1];
// console.log(lastElement);
 
// //adding a new element at last
//  const addNew = cousins.push('fahmida');
// console.log(cousins);

// // adding a new element at first
// var addFirst= cousins.unshift('bakiya');
// console.log(cousins)

// //delete last element of an array
// var deleteLast = cousins.pop();
// console.log(cousins);

// //delete first element of an array
// var deleteFirst = cousins.shift();
// console.log(cousins);

//***********for loop*******
/*
let i = 5;

for (let i = 0; i < 10; i++) {
  // some code
}

// Here i is 5 */

 //************function*********
// if we don't use return keyword it will be undefined(NAN)
// after using return keyword it will be stop excuting
// function toCelsius(fahrenheit) {
//     return (5/9) * (fahrenheit-32);
//   }
  
//   let value = toCelsius;

// function startFan(){
//     console.log('stand up');    
// }
//   startFan();

// function bringSingara(money){
//     console.log(money + 'ai nen singara');
// }
// bringSingara(100);

// function add(num1,num2){
//     var sum = num1 + num2;
//     return sum;
//     return 15;
//     return 'hello done';

// }
//  var total = add(10,54);
//  console.log('total',total);

/* function functionName( parameter){
    function body
    return
}

var returnedValue = function(parameters value)
*/

// function getAverage(assignment1,assignment2,assignment3){
//     var total = assignment1+assignment2+assignment3;
//     var average = total/3;
//     return average;
// }

// var assignment1 = 60;
// var assignment2 = 70;
// var assignment3 = 40;

// var myAverage = getAverage(assignment1,assignment2,assignment3);

// console.log('my average score',myAverage);

//**************Object********** */
// var myComputer = {
//     brand: 'lonovo',
//     price: 40000,
//     color : 'silver',
//     processor:'i7'
// }

// console.log(myComputer.processor);
// myComputer.processor = 'i79';
// console.log(myComputer);