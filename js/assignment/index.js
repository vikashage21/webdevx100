// create a function which take an array of object as input , and return the users whose age > 18  and are male


function solve (arr) {
  let filterArr=  arr.filter((e)=> e.gender == "male" && e.age > 18)
  return filterArr

}

let users = [
    {
        name :'harkirat',
        age : 21 ,
        gender :'male'
    },
     {
        name :'priya',
        age : 21 ,
        gender :'female'
    },
     {
        name :'raman',
        age : 21 ,
        gender :'male'
    }
]

console.log(solve(users))