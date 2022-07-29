import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.scss';
import Cardapio from './paginas/Cardapio';

ReactDOM.render(
	<React.StrictMode>
		<Cardapio />
	</React.StrictMode>,
	document.getElementById('root')
);
