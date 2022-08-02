import style from './BotaoVoltar.module.scss';

interface PropsBotaoVoltar {
    onClick: () => void;
} 

const BotaoVoltar = ({onClick}: PropsBotaoVoltar) => {
    return (
        <button onClick={onClick} className={style.voltar}>{'< Voltar'}</button>
    );
};

export default BotaoVoltar;