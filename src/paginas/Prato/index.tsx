import style from './Prato.module.scss';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';
import cardapio from 'data/itens.json';

const Prato = () => {
    const { state } = useLocation();
    const { prato } = state as { prato: typeof cardapio[0] };
    const { title, description, price, size, serving, category, photo } = prato;

    return (
        <>
            <button className={style.voltar}>{'< Voltar'}</button>
            <section className={style.container}>
                <h3 className={style.titulo}>{title}</h3>

                <div className={style.imagem}>
                    <img src={photo} alt={title} />
                </div>
                <div className={style.conteudo}>
                    <div className={style.conteudo}>
                        <p className={style.conteudo__descricao}>{description}</p>
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
            </section>
        </>
    );
};

export default Prato;