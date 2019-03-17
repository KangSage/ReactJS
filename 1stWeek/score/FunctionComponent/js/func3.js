// prerequisite 전제 조건 III

// * 함수 호출

function person() {
    // global this
    this.arms = 2;
    this.legs = 2;
}

// arms의 출력 결과는 무엇인가?
// console.log(arms); // not defined

// person의 실행 결과는 무엇인가? 그 이유는?
console.log(person()); // undefined

// arms의 출력 결과는 무엇인가? 여기서 사용된 this는 무엇인가?
// => 전역 객체 window
console.log(arms); // 2
// 브라우저의 경우 전역 객체 window의 변수가 됨.
// console.log(window.arms); // 2