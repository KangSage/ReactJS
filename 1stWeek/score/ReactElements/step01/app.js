// React Element I

"use strict";

/**
 * React Element 생성
 * React Element는 3가지 파라미터를 가진다.
 * 1. 엘리먼트 or 노드, 2. 속성, 3. 자식 노드
 */

const title = React.createElement(
    'h1',
    { id : 'main-title', title : 'This is a title'},
    'My First React Element'
);

console.log(title);

// React DOM을 id가 root인 div 안에 렌더링 한다.
ReactDOM.render(title, document.getElementById('root'));