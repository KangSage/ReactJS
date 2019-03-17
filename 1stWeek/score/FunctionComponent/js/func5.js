// prerequisite 전제 조건 V

// * 자바스크립트 this의 3가지 의미

function Animal(type, legs) {
    this.type = type;
    this.legs = legs;
    this.logInfo = function () {
        console.log(this === myCat);
        console.log('The ' + this.type + ' has ' + this.legs + ' legs');
    }
}

var myCat = new Animal('Cat', 4);

myCat.logInfo();
console.log(myCat);

console.log('=============================================================');

// 리터럴 객체로 Animal 객체를 적으시오.

var Animal2 =function (type, legs) {
    this.type = type;
    this.legs = legs;
    /*this.logInfo() = function () {
        console.log(this === myDog);
        console.log('The ', + this.type + ' has ' + this.legs = ' legs');
    }*/
};

var myDog = new Animal2('Dog', 4);
console.log(myDog);

// 실행 결과를 적으시오. function 안에 this는 무엇을 가르키는가?
