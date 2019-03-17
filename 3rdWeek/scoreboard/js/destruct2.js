var a, b, rest, c;
// ({a, b} = {a:10, b:20});
({a, b, c=30} = {a:10, b:20});
console.log(a); // 10
console.log(b); // 20
console.log(c); // 30


// Stage 4 (finished proposal)
// 배열과는 달리 키에 맞춰서 할당된다.
//({a, b, ...rest} = {a:10, b:20, c:30, d:40});
({a, b, e, ...rest} = {b:20, a:10, c:30, d:40});
console.log(a);
console.log(b);
console.log(e);
console.log(rest);