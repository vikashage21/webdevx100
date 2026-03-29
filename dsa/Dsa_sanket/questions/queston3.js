let a = 10;
let b = 12;
let c = 5;


function validTrianlge(a, b, c) {
    if (a + b > c && b + c > a && c + a > b) {
        console.log('valid triangle')
    } else {
        console.log('invalid triangle')
    }
}
validTrianlge(a, b, c)