// consider three integer values , and find the minimum value among the given input values



function findMinimum(...values) {
    let min = values[0];

    for (let i = 1; i < values.length; i++) {
        if (min > values[i]) {
            min = values[i]
        }

    }

    return min;
}

console.log(findMinimum(4, 88, 15, 1))



// without using functions only if and else


let x = 10;
let y = 22;
let z = 5;


if (x < y && x < z) {
    console.log(x + ' is the minimum values')
} else if (y < z && y < x) {
    console.log(y + ' is the minimum values')
} else {
    console.log(z + ' is the minimum values')
}