import style from './Item.module.scss';
import { Prato } from 'types/Cardapio';
import TagsPrato from 'componentes/TagsPrato';
import { useNavigate } from 'react-router-dom';

const Item = (props: Prato) => {
	const navigate = useNavigate();
	const {id, title, description, photo} = props;

	return (
		<div className={style.item} onClick={()=> navigate(`/prato/${id}`)}>
			<div className={style.item__imagem}>
				<img src={photo} alt={title} />
			</div>
			<div className={style.item__descricao}>
				<div className={style.item__titulo}>
					<h3>{title}</h3>
					<p>{description}</p>
				</div>
				<TagsPrato {... props}
				/>
			</div>
		</div>
	);
};

export default Item;