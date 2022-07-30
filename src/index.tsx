import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.scss';
import AppRouter from 'routes';

ReactDOM.render(
	<React.StrictMode>
		<AppRouter />
	</React.StrictMode>,
	document.getElementById('root')
);
