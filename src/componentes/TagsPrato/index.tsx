import style from './TagsPrato.module.scss';
import classNames from 'classnames';
import { Prato } from 'types/Cardapio';

const TagsPrato = ({price, size, serving, category}: Prato) => {
    return (
        <div className={style.item__tags}>
            <div className={classNames({
                [style.item__tipo]: true,
                [style[`item__tipo__${category.label.toLowerCase()}`]]: true
            })}>{category.label}</div>
            <div className={style.item__porcao}>{size}g</div>
            <div className={style.item__qtdpessoas}>Serve {serving > 1 ? `${serving} pessoas` : `${serving} pessoa`}</div>
            <div className={style.item__valor}>R$ {price.toFixed(2)}</div>
        </div>
    );
};

export default TagsPrato;