// 1.  Ways to print is JavaScript
//   document.write("This is document write")
//   alert("Me!!")

//2. JavaScript console API

// console.log("Hello World! " + 4 + 6);
// console.warn("this is a warning");
// console.error("this is an error");

/*
multi
line 
comment
*/

// 3. JavaScript variables
// VARIABLES: containers to store data values\\

// 4. Datatypes in JavaScript

// strings
var str1 = "This is a string";
var str2 = "This is also a string";

// numbers
var num1 = 455;
var num2 = 56.56;

// objects
var marks = {
  ravi: 45,
  shubham: 48,
  buggy: 99
};
// console.log(marks);

// booleans
var a = true;
var b = false;
// console.log(a,b);

var und;
// console.log(und);

var n = null;
// console.log(n);

//5. DATA TYPES IN JAVASCRIPTS

// At a very high level there are two types of data types
/* 
1=primitive datatypes(undefined,null, numbers,string,boolean,symbol)
2=reference data types:arrays, objects
*/
// Arrays
var arr = [1, 2, "buggy", 4, 5];
// console.log(arr)

// 6. Operators in javaScript

var a = 23;
var b = 56;
//Arithematic operator
// console.log("The value of a+b: ",a+b);
// console.log("The value of a-b: ",a-b);
// console.log("The value of a/b: ",a/b);
// console.log("The value of a*b: ",a*b);

//Assignment operator
var a = 3;
// console.log("value of a:",a)
a = 10;
//console.log("Value of a after assignment:",a);

var x = 34;
var y = 56;
// console.log(x==y)
// console.log(x>y)
// console.log(x<y)

// Logical AND Operators
// console.log(true && true);
// console.log(true && false);
// console.log(false && false);

// Logical OR operator
// console.log(true || true);
// console.log(true || false);
// console.log(false || false);

// Logical NOT operator
// console.log(!(true))
// console.log(!(false))

// Functions in javaScript
// DRY Do no repeat
function avg(a, b) {
  return (a + b) / 2;
}

c1 = avg(10, 2);
c2 = avg(4, 16);
// c3=avg(c1+c2);
// console.log(c1,c2)

// Conditionals in Javascript

var age = 4;
// Single if statement
if (age > 18) {
  // console.log("You can drink water");
}

// if-else statement
// if(age>18 )
// {
//     console.log("You can drink water");
// }
// else{
//     console.log("You cannot drink rasna water")
// }

// id else Ladder

if (age > 32) {
  // console.log("You are not a kid");
} else if (age > 26) {
  // console.log("bacche nahi rahe");
} else {
  // console.log("Yes you are kid");
}

var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for (var i=0;i<arr.length-1;i++)
// {
//     console.log(arr[i]);
// }

// arr.forEach(function(element) {
//   console.log(element);
// });

// While loop

let j = 0;
// const newLocal = 0;
// while (j<arr.length)
// {
//     console.log(arr[j]);
//      j++;
// }

// do{
//     console.log(arr[j])
    
//     j++;
// }while(j<arr.length);

let myArr=["fan","camera",34,null,true];

// array methods
// console.log(myArr);
// console.log(myArr.length);
// // console.log(myArr.pop());
// // console.log(myArr.length);
// // console.log(myArr.shift())
// console.log(myArr.push("Buggy"))
// console.log(myArr);
// console.log(myArr.unshift("Shanks"))
// console.log(myArr);

// string methods

let myStr="Buggy is a good  boy";
// console.log(myStr.length);
// // console.log(myStr.lastIndexOf("boy"));

// // console.log(myStr.slice(2,10));
// // d=console.log(myStr.replace("Buggy","Shanks"))
// s=myStr.replace("good","bad");
// console.log(d,myStr);


myDate=new Date();
// console.log(myDate);


// DOM Manipulation

let elem=document.getElementById('click')
// console.log(elem);

let elemClass=document.getElementsByClassName('container')
// console.log(elemClass);
// elemClass[0].style.backgroundColor="yellow";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.remove("text-success");
// console.log(elem.innerHTML);
// console.log(elem.innerText);
// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

tn=document.getElementsByTagName("div")
// console.log(tn);
createElement=document.createElement('p');
createElement.innerHTML="This is a created para";
tn[0].appendChild(createElement);
createdElement2=document.createElement('b');
createdElement2.innerHTML="This is a created bold";
tn[0].replaceChild(createdElement2,createElement);

// removeChild(element):---> removes child

// selecting usign query

sel=document.querySelectorAll('.container');
// console.log(sel);


// Events in javaScript
// function clicked()
// {
//   console.log("button was clicked");
// }

// window.onload=function () {
//     console.log("The document was loaded")
// }

// firstContainer.addEventListener('click',function()
// {
//   console.log("clicked on container")
// })

// setTimeout funtions
function summ(a,b) {
  return a+b;
}

function logkaro()
{
  document.querySelectorAll('.container')[1].innerHTML="Set interval logged";
  // console.log("I am your log")
}
clr=setTimeout(logkaro,5000);
// clr=setInterval(logkaro,2000);


// javaScript localStorage
// localStorage.setItem('name','buggy')
// localStorage.getItem('name');

obj={name:'onkar',a:{"this" :"that"}}
jso=JSON.stringify(obj);
parsed=JSON.parse(`{"name":"onkar","a":{"this":"that"}}`)
console.log(parsed);