// prerequisite 전제 조건 II

// * 익명 함수와 에로우 펑션

// 함수 표현식.
let circleArea = function (pi, r) {
    let area = pi * r * r;
    return area;
};
let result = circleArea(3.14, 3);
console.log(result);

// 위의 함수 표현식의 익명 함수를 에로우 펑션으로 바꾸시오.
let circleArea2 = (pi, r) => {
    let area = pi * r * r;
    return area;
};
let result2 = circleArea2(3.14, 3);
console.log(result2);
