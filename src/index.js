import React from 'react';
import ReactDOM from 'react-dom';
// 导入react-redux,提供器(为组件提供数据源)
import {Provider} from 'react-redux';
// 导入store
import store from './store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	// 为react中的根组件提供数据源
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
