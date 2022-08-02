import style from './Prato.module.scss';
import { useParams, useNavigate } from 'react-router-dom';
import cardapio from 'data/itens.json';
import BotaoVoltar from 'componentes/BotaoVoltar';
import TagsPrato from 'componentes/TagsPrato';
import NotFound from 'paginas/NotFound';

const Prato = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const prato = cardapio.find(item => item.id === Number(id));
    if (!prato) return <NotFound />;
    const { title, description, photo } = prato;

    return (
        <>
            <BotaoVoltar onClick={() => navigate(-1)} />
            <section className={style.container}>
                <h3 className={style.titulo}>{title}</h3>

                <div className={style.imagem}>
                    <img src={photo} alt={title} />
                </div>
                <div className={style.conteudo}>
                    <div className={style.conteudo}>
                        <p className={style.conteudo__descricao}>{description}</p>
                    </div>
                    <TagsPrato {...prato} />
                </div>
            </section>
        </>
    );
};

export default Prato;