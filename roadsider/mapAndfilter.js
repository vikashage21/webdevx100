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