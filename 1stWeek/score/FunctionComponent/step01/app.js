// prerequisite 전제 조건 I
"use strict";

// * 함수 선언문과 함수 표현식

// 아래는 함수 선언문(function definition)이다. 함수 표현식으로 바꾸시오.
// 함수 선언문과 함수 표현식의 차이점은 무엇인가?
myName('Yan', 'Fan');

function myName(first, last) {
    console.log(first + last);
}

/* 에러
 * myName2('Yan2', 'Fan2')
 */

// 함수 표현식.
const myName2 = function (first, last) {
    console.log(first+last);
};

// 변수에 함수를 담을 경우 호이스팅에 의해 변수는 메모리에 생성되지만
// 함수는 호이스팅 되지 않기 때문에 표현식보다 아래에서 호출해야한다.
myName2('Yan2', 'Fan2');