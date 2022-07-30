import style from './Menu.module.scss';
import { ReactComponent as Logo } from 'assets/img/logo.svg';
import rotas from 'data/rotas.json';
import { Link } from 'react-router-dom';

const Menu = () => {
	return (
		<header>
			<nav className={style.menu}>
				<Logo />
				<ul className={style.menu__list}>
					{rotas.map((rota, index) => (
						<li className={style.menu__link} key={index}><Link to={rota.to}>{rota.label}</Link></li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Menu;