import style from './Item.module.scss';
import itens from 'data/itens.json';
import classNames from 'classnames';

type Props = typeof itens[0];

const Item = ({title, description, price, size, serving, category, photo}: Props) => {

	return (
		<div className={style.item}>
			<div className={style.item__imagem}>
				<img src={photo} alt={title} />
			</div>
			<div className={style.item__descricao}>
				<div className={style.item__titulo}>
					<h3>{title}</h3>
					<p>{description}</p>
				</div>
				<div className={style.item__tags}>
					<div className={classNames({
						[style.item__tipo]: true, 
						[style[`item__tipo__${category.label.toLowerCase()}`]]: true
					})}>{category.label}</div>
					<div className={style.item__porcao}>{size}g</div>
					<div className={style.item__qtdpessoas}>Serve {serving > 1 ? `${serving} pessoas` : `${serving} pessoa`}</div>
					<div className={style.item__valor}>R$ {price.toFixed(2)}</div>
				</div>
			</div>
		</div>
	);
};

export default Item;