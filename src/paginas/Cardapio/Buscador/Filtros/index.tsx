import style from './Filtros.module.scss';
import opcoes from './filtros.json';
import React from 'react';
import classNames from 'classnames';

type PropsOpcao = typeof opcoes[0];

interface PropsFiltros {
    filtro: number | null;
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

const Filtros = ({filtro, setFiltro}: PropsFiltros) => {

    function selecionaOpcao(opcao: PropsOpcao) {
        if(opcao.id === filtro) return setFiltro(null)
        return setFiltro(opcao.id)
    }

    return(
        <div className={style.filtros}>
            {opcoes.map((opcao) => 
                <button className={classNames({
                    [style.filtros__filtro]: true,
                    [style['filtros__filtro--ativo']]: filtro === opcao.id
                })} key={opcao.id} onClick={() => selecionaOpcao(opcao)}>{opcao.label}</button>
            )}
        </div>
    )
}

export default Filtros;