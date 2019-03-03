// prerequisite 전제 조건 III

// * 함수 호출과 생성자 함수
function person() {
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
console.log(window.arms); // 2

// 생성자 함수는 관례적으로 대문자로 시작.
function Person() {
    // 생성자 함수로 쓰일 때는 this = {} 빈 객체 생성.
    // this.arms = 2;
    // this.legs = 2;

    // 리턴이 없으면 tist가 리턴되고
    // 객체가 아닌 리턴이 있다면 무시된다.
    return 3;
}

// 자바스크립트에서 객체를 생성하는 2가지 방법 : new 연산자, 객체 리터럴 사용
var person = new Person();
console.log(person); // Person();

// literal 객체로 person 생성
var person2 = {};
console.log(person2);

console.log(arms); // 2
console.log(person.arms); // 2