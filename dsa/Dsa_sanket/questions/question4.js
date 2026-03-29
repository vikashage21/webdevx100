
//  given the side length of a from of 3 itergers , check if the given is equilateral triangle or isosceles triangle or scalene triangle
let a = 10;
let b = 10;
let c = 45;


if (a == b && b == c && c == a) {
    console.log('equilateral triangle')
} else if (a == b || b == c || c == a) {
    console.log('isosceles triangle')
} else {
    console.log('scalene triangle')
}