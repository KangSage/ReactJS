// JSX 문법

/**
 * React Element를 일일히 생성하는 것은 너무 번거롭다.
 * 그래서 축약 문법인 JSX 문법이 만들어졌다.
 */

"use strict";

// <h1 id="main-title" title="This is a title">My First React Element</h1>
const title = <h1>My First React Element</h1>;
console.log(title);

const desc = <p>This is Description</p>;

// React Elements 문법
/*
const header = React.createElement(
    'header',
    null,
    title, desc
);
*/

// JSX 문법 - ()로 감쌀 수도 있다. 2줄이 넘어가는 경우 가독성을 위해 감싸는 것을 권장한다.
const header = (
    <header>
        <h1>My First React Element</h1>
        <p>This is Description</p>
    </header>
);

console.log(header);

ReactDOM.render(header, document.getElementById('root'));

/**
 * JSX로 변환 후에 실행하면 Unexpected token < 에러가 발생!
 * babel 스크립트를 추가하고 app.js를 import한 태그에 type="text/babel"을 추가한다.
 */