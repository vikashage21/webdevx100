import fs from "fs";

function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(4, 5));

// creating a function which add the sum of n

function sumAll(n: number): number | undefined {
  if (n) {
    let sum: number = 0;
    for (let i = 0; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
}

console.log(sumAll(4));

// function as argument

type operation = (a: number, b: number) => number;

function add(a: number, b: number): number {
  return a + b;
}

function divided(a: number, b: number): number {
  return a / b;
}

function doOperation(num: number, num2: number, op: operation): number {
  return op(num, num2);
}

const ans: number = doOperation(4, 5, sum);

console.log(ans);

// const content: string = fs.readFileSync("src/a.txt", "utf-8");
// const secondContent: string = fs.readFileSync("src/b.txt", "utf-8");
// console.log(content);

// console.log(secondContent);

// console.log('done')

// async

const content: string = fs.readFile(
  "src/a.txt",
  "utf-8",
  (err: string, data: string) => {
    console.log(data);
  }
);
const secondContent: string = fs.readFile(
  "src/b.txt",
  "utf-8",
  (err: string, data: string) => {
    console.log(data);
  }
);
console.log(content);

console.log(secondContent);

console.log("done");

// creating object in typescript

type obj = {
  gender: boolean;
  username: string;
  age: number;
};

let userData: obj = {
  gender: true,
  username: "vikash",
  age: 45,
};

console.log(userData);

// Rest operators

type FuncTypes = (...m: number[]) => number[];

const func: FuncTypes = (...m) => {
  return m;
};

func(25, 54, 67, 78);

// creating classes in typescript

interface playerType {
  username: string;
  age: number;
  role: string;
}

class player implements playerType {
  username: string;
  age: number;
  role: string;
  constructor(username: string, age: number, role: string) {
    this.username = username;
    this.age = age;
    this.role = role;
  }
}

const p = new player("vikash ", 45, "admin");

console.log(p);

// callback aproch

function main(): void {
  console.log("calling function main");
}

function promiseWrappper(fun: () => void, ms: number) {
  setTimeout(() => {
    fun();
  }, ms);
}

promiseWrappper(main, 3000);

// creating a promise base function

const readFilePromise = (filepath: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    try {
      console.log("file reading ....");
      setTimeout(() => {
        console.log("file read after 3 sec");

        const data: string = fs.readFileSync(filepath, "utf-8");

        resolve(data);

        resolve(data);
      }, 3000);
    } catch (error) {
      reject(error);
    }
  });
};

readFilePromise("src/a.txt").then((data) => {
  console.log(data);
});
