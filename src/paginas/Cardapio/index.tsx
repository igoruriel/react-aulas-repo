// import Botao from "../../componentes/Botao";
import style from './Cardapio.module.scss';
import stylePadrao from 'assets/style/base/Tema.module.scss';
import Buscador from './Buscador';
import { useState } from 'react';
import Filtros from './Buscador/Filtros';
import Ordenador from './Ordenador';
import Itens from './Itens';

const Cardapio = () => {

	const [busca, setBusca] = useState<string>('');
	const [filtro, setFiltro] = useState<number | null>(null);
	const [ordenador, setOrdenador] = useState<string>('');

	return (
		<main>
			<section className={style.cardapio}>
				<h3 className={stylePadrao.titulo} >Cardapio</h3>
				<Buscador busca={busca} setBusca={setBusca} />
				<div className={style.cardapio__filtros}>
					<Filtros filtro={filtro} setFiltro={setFiltro} />
					<Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
				</div>
				<Itens busca={busca} filtro={filtro} ordenador={ordenador} />
			</section>
		</main>
	);
};

export default Cardapio;