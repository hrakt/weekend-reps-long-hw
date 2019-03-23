// // // // PART A

// // // // How do we assign a value to a variable?
// // // // let, const, var followed by the name of the variable and equal it to the value

// // // // How do we change the value of a variable?
// // // // just name of the variable and make it equal to whatever the new value is going to be

// // // // How do we assign an existing variable to a new variable?
// // // // ex. let newVar = oldVar;

// // // // Remind me, what are declare, assign, and define?
// // // // declare is when you declare the variable, so assign name, not necessary to assgin it something
// // // // assign is when you assign a specific value to the variable
// // // // define is when you decalare and at the same time define what its going to hold


// // // // What is pseudocoding and why should you do it?
// // // //pseduocoding is when you type out the code in plain english to understand what needs to coded

// // // // What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?

// // // // most of the time you need to spend pseudocoding and understanding the logic behind the problem
// // // // once you figured out the logic and the pseudocode then you need to start working on the code

// // // // PART B

// // // var firstVariable = "Hello World";
// // // firstVariable = 12;
// // // var secondVariable = firstVariable;
// // // secondVariable = "Bye World";
// // // console.log(firstVariable); // value of the first variable

// // // var yourName = "Hrak T";
// // // var newStr = "Hello my name is " + yourName;
// // // console.log(newStr);


// // // // PART C

// // // const a = 4;
// // // const b = 53;
// // // const c = 57;
// // // const d = 16; 
// // // const e = 'Kevin';
// // // console.log(a != b);
// // // console.log(c != d);
// // // console.log('Name' == 'Name');
// // // console.log(true != false);
// // // console.log(false == false == false == false == false == false == true);
// // // console.log(false == false)
// // // console.log(e == 'Kevin');
// // // console.log(a != b != c);
// // // console.log(a == a != d);
// // // console.log(48 == '48');


// // // // PART D

// // // var animal = 'cow';
// // // if(animal = 'cow'){
// // //     console.log('mooooo');
// // // }else{
// // //     console.log('hey you are not a cow');
// // // }

// // // //Part E

// // // var age = 26;
// // // if(age>16){
// // //     console.log("Here are the keys");
// // // }else{
// // //     console.log("Sorry youre too young");
// // // }

 
// // // II. Loops

// // // A. The basics

// // for(let i=0;i<=10;i++){
// //     console.log(i);
// // }

// // for(let i = 10; i<=400;i++){
// //     console.log(i);
// // }

// // for(let i = 12; i<=4000;i+=3){
// //     console.log(i);
// // }

// // // B. Get even


// // for(let i = 1;i<=100;i++){
// //     if(i%2==0){
// //         console.log(i + "<-- this is a even number");
        
// //     }else{
// //         console.log(i);
// //     }
// // }

// // C. Give me Five

// // for(let i=0;i<=100;i++){
// //     if(i%5==0 && i!=0){
// //         console.log("I found a "+ i + ". High five!");
// //     }
// //     if(i%3 == 0 && i!=0){
// //         console.log("I found a " + i+ ". There is a crowd.");
// //     }
// // }


// // // D. Savings account
// // let bank_account=0;
// // for(let i = 0; i<=10;i++){
// //     bank_account += i;
// // }
// // console.log(bank_account);


// // bank_account=0;
// // for(let i = 0; i<=100;i++){
// //     bank_account += i*2;
// // }
// // console.log(bank_account);

// // E. Multiples of 3 and 5

// //Already done this


// // III. Arrays & Control flow

// // A. Talk about it:

// // What are the things in an array called?
//     // element of the array

// // Do Arrays guarantee those things will be in order?
// // no, its not guranteed, you can use sort() to sort an arry

// // What real-life thing could you model with an array?
// // the names of the people in the class, the numbers of the tables in a room

// // B. Easy Does It

// var quotes = ["Don't cry because it's over, smile because it happened.","So many books, so little time.", 'You only live once, but if you do it right, once is enough.' ]

// // C. Accessing elements

// const randomThings = [1, 10, "Hello", true];

// // 1. How do you access the 1st element in the array?

// console.log(randomThings[0]);

// // 2. Change the value of `"Hello"` to `"World"`.

// randomThings[2]="World";

// // 3. Check the value of the array to make sure it updated the array. How? Why, yes! `console.log()`;

// console.log(randomThings[2]);

// // D. Change values

// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

// console.log(ourClass[2]);
// ourClass[4]="Octocat";
// ourClass.push('Cloud City');

// console.log(ourClass);

// // E. Mix It Up

const myArray = [5, 10, 500, 20];

// myArray.push('Egon','Dorian');

// myArray.splice(0,1);

// myArray.unshift("Bob Marley");

// myArray.pop();
// console.log(myArray);

// myArray.reverse();
// console.log(myArray);

// // F. Biggie Smalls

// var int = 15;
// if(int < 100){
//     console.log("little number")
// }
// if(int > 100){
//     console.log("small number")
// }

// // G. Monkey in the Middle
// if(int<5){
//     console.log('little number');
// }else if(int>10){
//     console.log('big number');
// }else{
//     console.log('monkey');
// }

// // H. What's in Your Closet?

// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];
  
//   // Thom's closet is more complicated. Check out this nested data structure!!
//   const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//   ];

//   console.log("Kristy is rocking that " + kristynsCloset[2] + "today!");
//   kristynsCloset.splice(6,0,'raybans');
  
//   kristynsCloset[5] = "stained knit hat";
  
//   console.log(kristynsCloset);

//   console.log(thomsCloset[0][0]);
//   console.log(thomsCloset[2][1]);
//   console.log("Thom is looking fierce in a " + thomsCloset[0][0] + " " + thomsCloset[1][1] +  " and " + thomsCloset[2][1]);

//   thomsCloset[1][2] = 'Footie Pajamas';
  

//   IV. Functions

// A. printGreeting

// Do you think you could write a function called printGreeting with a 
// parameter name that returns a greeting with the argument interpolated 
// into the greeting?

// // B. printCool

// var printGreeting = function(str){
//     return "Hello " + str;
// }

// console.log(printGreeting('Slimer'));


// var printCool = function(str){
//     return str + ' is cool';
// }

// console.log(printCool('Captain Reynolds'));


// // C. calculateCube

// const calculateCube = function(num){
//     return Math.pow(num,3);
// }
// console.log(calculateCube(5));

// // D. isVowel

// const isVowel = function(str){
//     for(let i=0;i<str.length;i++){
//         if(str[i]=='a' || str[i] == 'i'||str[i] == 'i' ||str[i] == 'o'||str[i] == 'u'){
//             return true;
//         }
//         return false;
//     }
// }

// console.log(isVowel('a'));

// // E. getTwoLengths

// const getTwoLengths = function(str1,str2){
//     let arr = [str1.length,str2.length];
//     return arr;
// }

// console.log(getTwoLengths("Hank","Hippopopalous"));

// // F. getMultipleLengths

// const getMultipleLengths = function(arr){
//     let newArr =[];
//     for(let i= 0;i<arr.length;i++){
//         newArr.push((arr[i].length));
//     }
//     return newArr;
// }

// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// // G. maxOfThree

// const maxOfThree = function(num1,num2,num3){
//     let bigNum;
//     if(num1<= num2){
//         bigNum=num2
//         if(bigNum<=num3){
//             bigNum = num3;
//         }
//     }else{
//         bigNum = num1;
//         if(bigNum<=num3){
//             bigNum = num3;
//         }
//     }
//     return bigNum;
// }

// console.log(maxOfThree(6, 9, 1));

// // H. printLongestWord

// const printLongestWord = function(arr){
//     let longest = "";
//     let length = 0;
//     for(let i = 0;i <arr.length;i++){
//         if(arr[i].length > length){
//             longest = arr[i];
//             length = arr[i].length;
//             console.log("longest word is "+ longest);
//         }
//     }
//     return longest;
// }

// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

// // I. transmogrif

// const transmogrify = function(num1,num2,num3){
//     return Math.pow((num1*num2),num3);

// }

// console.log(transmogrify(5, 3, 2));

// //J. reverseWordOrder v2


// const reverseWordOrder = function(str){
//     let newStr = "";
//     let word= "";
//     let arr = [];
//     for(let i=0;i<=str.length;i++){
//         if(str[i]==" " || i == str.length){
//             arr.push(word);
//             word = "";
//         }else{
//             word += str[i];
//         }
//     }
//     for(let j = arr.length-1; j>=0;j--){
//             newStr += arr[j] + " ";
//     }
//     return newStr;
// }

// console.log(reverseWordOrder("Ishmael me Call"));
// console.log(reverseWordOrder("comb my on Lâncome use I"));


// K. Get down and dirty with Math.random()

const getRandom = function(min,max){
    return Math.floor(Math.random() * max) + min;
}

console.log(getRandom(1,10));
console.log(getRandom(10,100));

const getRamomElement = function(arr){
    return arr[getRandom(0,arr.length)];
}

console.log(getRamomElement(myArray));