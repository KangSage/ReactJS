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
console.log(arms); // 2

function Person() {
    this.arms = 2;
    this.legs = 2;
}

var person = new Person();
console.log(person); // Person();
console.log(arms); // 2
console.log(person.arms);