import cardapio from 'data/itens.json';
import style from './Inicio.module.scss';
import stylePadrao from 'assets/style/base/Tema.module.scss';
import nossaCasaImg from 'assets/img/nossa_casa.png';
import { useNavigate } from 'react-router-dom';

const Inicio = () => {
	const navigate = useNavigate();
	let pratosRecomendados = [...cardapio];
	pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0, 3);
	
	function redirecionaRecomendados(prato: typeof cardapio[0]){
		navigate(`/prato/${prato.id}`, {state: {prato}});
	}

	return(
		<section>
			<h3 className={stylePadrao.titulo}>Recomendações do Chef</h3>
			<div className={style.recomendados}>
				{pratosRecomendados.map(prato => (
					<div className={style.recomendado} key={prato.id}>
						<div className={style.recomendado__imagem}>
							<img src={prato.photo} alt={prato.title} />
						</div>
						<button className={style.recomendado__botao} onClick={()=> redirecionaRecomendados(prato)}>
                            Ver mais
						</button>
					</div>
				))}
			</div>
			<h3 className={stylePadrao.titulo}>Nossa Casa</h3>
			<div className={style.nossaCasa}>
				<img src={nossaCasaImg} alt="mesa do nosso restaurante" />
				<div className={style.nossaCasa__endereco}>
					<span>Nome de Rua com a Marechal Ruy Pereira</span>
					<span>Algum Lugar - UF</span>
				</div>
			</div>
		</section>
	);
};

export default Inicio;