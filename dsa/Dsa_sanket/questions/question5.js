// write a program to print the no's from 1 to 10 ;

for (let i = 1; i <= 10; i++) {
    console.log(i)
}


// write a program to calculate the sum of all the from 1 to 10
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}

console.log(sum)

//  write a program to print the no's from 20 to 1 ;
let j = 20;
while (j >= 1) {
    console.log(j)
    j--
}


// write a program to print all the even numbers greater than 1 an less than 25

for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i + ' = even')
    } 
}