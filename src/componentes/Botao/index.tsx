import React from 'react';
import { PropsBotao } from '../../interfaces/botao';
import style from './Botao.module.scss';

class Botao extends React.Component<PropsBotao>{

    render() {
        return (
            <button onClick={this.props.aoClicado} type={this.props.type || 'button'} className={style.botao}>{this.props.children}</button>
        )
    }
}

export default Botao;