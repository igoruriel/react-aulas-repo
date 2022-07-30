import Cardapio from 'paginas/Cardapio';
import Inicio from 'paginas/Inicio';
import Cabecalho from 'componentes/CabecalhoBanner';
import Menu from 'componentes/Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const AppRouter = () => {
	return (
		<Router>
			<Menu />
			<Routes>
				<Route path='/' element={<Cabecalho />}>
					<Route index element={<Inicio />}/>
					<Route path='cardapio' element={<Cardapio />} />
				</Route>
			</Routes>
		</Router>
	);
};

export default AppRouter;