let a = 10;
let b = 20;
console.log('sum of 10 and 20 ' + a + b)

// bracket has high value
console.log('sum of 10 and 20 is ', (a + b))


console.log(a + b + 'the sum of 10 and 20 is ')

// typeCasting

// changing a datatype into other datatype is called typeCasting. (conversion)
 
// example

// const num  = number( prompt('type in your number ')) --- it will change string to number.

// swapping - means change one value with another value.

let num1 = 10;

let num2 =11;

let s = num1;

num1 = num2; 

num2 = s

console.log(num1, num2)


// other way to swap two number


let p = 10 ;
let n =30 ;

 p = p + n;  // 40 

 n = p - n ; // 40 - 30 = 10

 p =  p - n; // 40 -10 = 30;


 // other way to swap two number.


 let u =10 ;
 let y = 20 ;

 [u , y] = [y , u]

 console.log(u, y) 


 //find the last digit of integer


 let h  = 45584;

 console.log(h%10) //- 4 is the last digit of 45584. 


 console.log(Math.floor(h/10)) // it will remove the last digit because 4558 / 10 = 4558.something - math.floor make it round. 

// unary operator ++ --

let i =11 ;
i = i++ + ++i; // 11 + 13 = 24   
console.log(i)
    


// question
// let a = 11  ;
// let b  = 22;
// let c = a +b + a++ + b++ + ++a + ++b;

// console.log(a)
// console.log(b)
// console.log(c)   


// question 2

let t = true;
t++ ;
console.log(t) 


// math methods

// round , ceil , floor , trunc , pow , sqrt , abs , max , min , random


// question

// area of rectangle 

let l = 10 ;
let w= 11 ;

console.log(l*w 
)


// find the permieter of a triangle

// formula is 2 * (l+b)


console.log(2*(l+w))


// generate the otp .

let otp = Math.trunc(Math.random()*9000)+1000;

console.log(otp)