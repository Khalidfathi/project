console .log('How are you?');
//comment;
//variables
// How to create variables:
var x;
let y;
var b='noor';
console.log(b);
var someNumber=5;
console.log(someNumber);
var age =prompt('what is your age?');
document.getElementById('someText').innerHTML=age;
var number=10;
//increment num by one
number++;
//decrecment num by one
number--;
console.log(number);
/*Functions
1-creatfunction 
2-called the function*/
function fun() {
    console.log ('This is  a function');
    
}
fun();


function greeting (yourname){
 var result='Hello'+'  '+yourname;
 console.log(result);
}

 var n= prompt('what is your name?');
 greeting(n);
//How do arguments work in fun?
//How do we add 2 num togther in fun?
function sumNumber(num1,num2){
    var result=num1+num2;
    console.log(result);
}
sumNumber(5,4);
//sumNumber('Khalid',' Khuffash');
/*While loops
var number=0;
while(number<100){
   number++;
   console.log(number);
} 
*/
//For loop  (let==>var)
for(let num=0;num<=100;num++){
    console.log(num);  
}
//Data types :
var age=19;//num
let Yourname='Noor';//string
let name={first:'Jane',last:'Doe'};//object
let truth=false;//bolean 
let grocreries=['apple','banana','oranges'];//array
let random;//undefiend ;
let nothing =null;//value null
//Strings in JS (common methods)
let fruit ='banana';
let moreFruits='banana\apple';
console.log (fruit.length);//length of string
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2,6));
console.log(fruit.replace('ban','123'));//123ana
console.log(fruit.toUpperCase(fruit));//BANANA
console.log(fruit.toLowerCase(fruit));//banana
console.log(fruit.charAt(2));//n
console.log(fruit[2]);//n
console.log(fruit.split(','))//split by acomma
console.log(fruit.split(''))//split by  character

//Array in Java script:
let fruits=['banana','apple','orange' ,'pinceapples'];
//declerations of arrays:
 fruits=new Array('banana','apple','orange' ,'pinceapples');
//alert(fruit[1]);
console.log(fruits[2]);//access value at index

//changed the value:
fruits[0]='mango';
console.log(fruits);
  for(let index =0;index<fruits.length;index++){
      console.log(fruits[index]);
  }

  //array common methods :
  console.log('toString',fruits.toString());

  console.log(fruits.join('*'));
  //'mango'*'apple'*'orange' *'pinceapples'
  console.log(fruits.pop())//pinceapples (removes last item)
  console.log(fruits.push('strobaree'));//to append 
fruits[fruits.length]='new fruits';//same as push 
console.log(fruits.shift()); //remove first element from an array
console.log(fruits.unshift('Kiwi')); //add first element from an array
let vegetables=['aspargus','tomato','broccoli'];
let allGroceries=fruits.concat(vegetables);//combine array
console.log(allGroceries);
console.log(allGroceries.slice(1,4));
console.log(allGroceries.reverse()); 
console.log(allGroceries.sort()); 

let someNumbers=[5,10,2,25,3,255,1,2,5,334,321,2];
console.log(sumNumbers.sort(function(a,b){return a-b}));//sorted array in ascending order
