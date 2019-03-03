// CommonJS 모듈 가져오기
// var _ = require('lodash');

// ES6 모듈 가져오기
import _ from 'lodash';

// 원래 ES6의 규칙은 아니고 webpack이 알아서 처리하는 것이다.
import './style.css';

function component() {
    let element = document.createElement('div');
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());

console.log('hello webpack dev server');