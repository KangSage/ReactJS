// 생성자 함수는 관례적으로 대문자로 시작.
function Person() {
    // 생성자 함수로 쓰일 때는 this = {} 빈 객체 생성.
    this.arms = 2;
    this.legs = 2;

    // 리턴이 없으면 tist가 리턴되고
    // 객체가 아닌 리턴이 있다면 무시된다.
    return 3;
}

// 자바스크립트에서 객체를 생성하는 2가지 방법 : new 연산자, 객체 리터럴 사용
var person = new Person();
console.log(person); // Person();

// literal 객체로 person2 생성
// 리터럴 객체의 프로퍼티는 변경 불가능.
var person2 = {
    arms:2,
    legs:2
};
console.log(person2);

console.log(person.arms); // 2