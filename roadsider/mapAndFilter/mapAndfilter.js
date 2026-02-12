// map method 


let array = [4, 5, 40, 45]


let multiply = array.map((items, i, array) => {
    return items * 2 + i
})


console.log(multiply)


// filter


let moreThan = array.filter((items) => {
    return items > 20
})


console.log(moreThan)


// reduce method


const sum = array.reduce((acc, items, i, array) => {

    return acc + items
}, 0)

console.log(sum)


// polyfill for map method


Array.prototype.myMap = function (callback) {
    let temp = []
    for (let i = 0; i < this.length; i++) {
        temp.push(callback(this[i], i, this))
    }
    return temp
}


let customMap = array.myMap((items, i, array) => {
    return items * 2 + i
})

console.log(customMap)

//  polyfill for filter method 

Array.prototype.myFilter = function (cb) {
    let temp = []
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) temp.push(this[i])
    }
    return temp
}



let constomFilter = array.myFilter((items, i, array) => {
    return items > 8
})

console.log(constomFilter)



//  wrting own reduce method

Array.prototype.myReduce = function (cb, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
    }

    return accumulator
}


let customReduce = array.myReduce((acc, items, i, array) => {
    return acc + items
})

console.log(customReduce)


// question - 1 convert all name in uppercase

let students = [

    {
        name: "Piyush", rollNumber: 31, marks: 80
    },
    {
        name: "Jenny", rollNumber: 3, marks: 30
    },
    {
        name: "Dilpreet", rollNumber: 31, marks: 89,

    }, {
        name: "vikash", rollNumber: 45, marks: 35
    }
]


let newUpperCase = students.map((items) => {
    return items.name.toUpperCase()
})

console.log(newUpperCase)


//  question 2  - 

let marks = students.filter((marks) => {
    // return marks.marks > 60;
    return marks.marks > 60 && marks.rollNumber > 15
})

console.log(marks)


//  question 3 


const totalMarks = students.reduce((acc, curr) => {
    return acc + curr.marks
}, 0)


console.log(totalMarks)

let name = students.filter((std) => std.marks > 60).map((items) => items.name)

console.log(name)


// Question 6


let gmarks = students.filter((std) => std.marks < 60).map((std) => std.marks + 20).reduce((acc, curr) => acc + curr, 0)
console.log(gmarks)