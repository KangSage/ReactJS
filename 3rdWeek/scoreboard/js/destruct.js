var a, b, rest;
[a, b] = [10, 20];

console.log(a);

console.log(b);


// ...(나머지 연산자)를 사용하여 남은 값들을 배열로 받는다.
[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);