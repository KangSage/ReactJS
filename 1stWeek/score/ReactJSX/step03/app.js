// JSX EXPRESSION

/**
 * JSX를 더 동적으로 만들기 위해서는 태그 내부에 자바스크립트 변수를 {}로 삽입 할 수 있다.
 * 이것을 JSX EXPRESSION이라고 한다.
 */

"use strict";

// <h1 id="main-title" title="This is a title">My First React Element</h1>
const title = 'My First React Element';
const desc = 'This is Description';
const myTitleId = 'main-title';
const name = 'ksage';

// JSX 문법 - ()로 감쌀 수도 있다. 2줄이 넘어가는 경우 가독성을 위해 감싸는 것을 권장한다.
// JSX 내부 주석은 {/**/}이다. webstorm keymap = ctrl + /
const header = (
    <header>
        {/* JSX 주석 */}
        <h1 id={myTitleId}>{name}'s {title}</h1>;
        <p className="main-desc">{desc}</p>
    </header>
);

console.log(header);

ReactDOM.render(header, document.getElementById('root'));

/**
 * id에 myTitleId라는 변수가 들어갔기 때문에 ""가 없다.
 * HTML class의 경우 ES6에 class 문법 예약어가 있기 때문에 className이라는 camel case를 사용한다.
 * 자바스크립트 변수가 아닌 고정 class라면 ""로 감싸서 String임을 명시한다.
 */