import style from './Itens.module.scss';
import Item from './Item';
import itens from './itens.json';
import { useEffect, useState } from 'react';

interface PropsItens {
    busca: string;
    filtro: number | null;
    ordenador: string;
}

const Itens = ({busca, filtro, ordenador}: PropsItens) => {

	const [lista, setLista] = useState(itens);
    
	function filtraPorBusca (title: string) {
		const regex = new RegExp(busca, 'i');
		return regex.test(title);
	}

	function filtraPorFiltro (id: number) {
		if (filtro !== null) return filtro === id;
		return true;
	}

	function ordena (novaLista: typeof itens) {
		switch (ordenador) {
		case 'porcao':
			return novaLista.sort((a, b) => a.size > b.size ? 1 : -1);
		case 'qtd_pessoas':
			return novaLista.sort((a, b) => a.serving > b.serving ? 1 : -1);
		case 'preco':
			return novaLista.sort((a, b) => a.price > b.price ? 1 : -1);
		default: return novaLista;
		}
	} 

	useEffect(()=> {
		const novaLista = itens.filter(item => filtraPorBusca(item.title) && filtraPorFiltro(item.category.id));
		setLista(ordena(novaLista));
	}, [busca, filtro, ordenador]);

	return(
		<div className={style.itens}>
			{lista.map(item => (
				<Item key={item.id} {...item}/>
			))}
		</div>
	);
};

export default Itens;