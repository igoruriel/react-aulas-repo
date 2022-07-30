import style from './Cabecalho.module.scss';
import stylePadrao from 'assets/style/base/Tema.module.scss';
import { Outlet } from 'react-router-dom';

const Cabecalho = () => {
	return (
		<>
			<div className={style.header}>
				<h1 className={style.header__titulo__texto}>CACHORRO QUENTE</h1>
			</div>
			< div className={stylePadrao.container}>
				<Outlet />
			</div>
		</>
	);
};

export default Cabecalho;