const res = a => b => a + b;

const res2 = function (a) {
    return function(b) {
       return a + b;
    }
};

console.log(res(1)(2));
console.log(res2(1)(2));
