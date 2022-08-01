import style from './NotFound.module.scss';
import stylePadrao from 'assets/style/base/Tema.module.scss';
import classNames from 'classnames';
import { ReactComponent as NotFoundImg } from 'assets/img/NotFound/not_found.svg';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <section className={classNames({
            [style.container]: true,
            [stylePadrao.container]: true
        })}>
            <div className={style.voltar}>
                <button onClick={() => navigate(-1)} >
                    {'< Voltar'}
                </button>
            </div>
            <NotFoundImg />
        </section>
    );
};

export default NotFound;