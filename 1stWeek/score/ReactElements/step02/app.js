// React Element II

/**
 * header 엘리먼트를 만들고 자식으로 title과 desc 엘리먼트를 포함시킨다.
 * 세번째 이후의 파라미터는 모두 자식 노드이다.
 */

"use strict";

// <h1 id="main-title" title="This is a title">My First React Element</h1>
const title = React.createElement(
    'h1',
    { id : 'main-title', title : 'This is a title'},
    'My First React Element'
);

console.log(title);

// <p>This is Description</p>
const desc = React.createElement(
    'p',
    null,
    'This is Description'
);

// <header>title, desc</header>
const header = React.createElement(
    'header',
    null,
    title, desc
);

ReactDOM.render(header, document.getElementById('root'));

/**
 * React 렌더링
 * React는 실제 DOM 노드 즉, h1, div, span 같은 태그를 직접 만들지 않는다.
 * 대신에 DOM 노드를 서술하는 자바스크립트 객체를 만든다.
 * 실제 DOM으로 만들고 업데이트 해주는 역할은 ReactDom.render() 메서드가 하는 것이다.
 * react는 실제 DOM을 다루는게 아니라 DOM에 매핑 되는 자바스크립트 객체를 다룬다는것이 Virtual DOM의 핵심이다.
 * 만일 특정한 속성을 수정하게 되면 자바스크립트 객체에서 바뀐 부분을 찾는다.
 * DOM에서 찾는게 아니라 메모리에 올라간 자바스크립트 객체에서 바뀐 부분을
 * 비교 검색하기 때문에 실제 DOM을 다루는것보다 훨씬 빠르게 업데이트가 가능해준다.
 * 처음에 한번 전체 DOM을 렌더링 한 이후에는 필요한 부분만 업데이트를 하게 된다.
 */