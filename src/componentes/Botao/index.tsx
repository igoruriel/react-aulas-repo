import React from 'react';
import style from './Botao.module.scss';

class Botao extends React.Component {

    private print(): void {
        console.log('yesss')
    }

    render(): React.ReactNode {
        return (
            <button className={style.botao}>BOTÃO</button>
        )
    }
}

export default Botao;