import Cardapio from 'paginas/Cardapio';
import Inicio from 'paginas/Inicio';
import Cabecalho from 'componentes/CabecalhoBanner';
import Menu from 'componentes/Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sobre from 'paginas/Sobre';
import Footer from 'componentes/Footer';
import NotFound from 'paginas/NotFound';
import Prato from 'paginas/Prato';

const AppRouter = () => {
	return (
		<main className='container'>
			<Router>
				<Menu />
				<Routes>
					<Route path='/' element={<Cabecalho />}>
						<Route index element={<Inicio />} />
						<Route path='cardapio' element={<Cardapio />} />
						<Route path='sobre' element={<Sobre />}></Route>
					</Route>
					<Route path='prato/:id' element={<Prato />} />
					<Route path={'*'} element={<NotFound />} />
				</Routes>
				<Footer />
			</Router>
		</main>
	);
};

export default AppRouter;