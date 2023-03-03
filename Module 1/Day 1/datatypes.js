let str = '123';
let number = 123;
let bool = true;
let str2 = true;
let Null = null;
let Undefined;

let obj = {
    prob1: 'property 1',
    prob2: 12345
    func: (n) => {
        console.log(n);
        return n;
    }
}

let arr = []

console.log(str);
console.log(number);
console.log(bool);
console.log(null);
console.log(Undefined);
console.log(obj);
obj.func(obj.prob1);