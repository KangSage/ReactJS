import React from 'react';
import ReactDOM from 'react-dom';
// CSS 우선순위에 의해 익스터널인 경우 가장 마지막 CSS파일이 오버라이팅 되므로 bootstrap을 위에 둔다.
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {Root} from "./pages/Root";

ReactDOM.render(<Provider store={store}> <Root/></Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
