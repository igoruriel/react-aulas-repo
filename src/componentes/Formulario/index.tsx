import React from 'react';
import Botao from '../Botao';
import style from './Form.module.scss';

class Formulario extends React.Component {
    render(): React.ReactNode {
        return(
            <form className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="task">Task</label>
                    <input type="text" name="task" id='task' placeholder='task' required />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="cronometro">Cronômetro</label>
                    <input type="time" name="cronometro" id='cronometro' step='1' min="00:00:00" max="01:30:00" required />
                </div>
                <Botao />
            </form>
        )
    }
}

export default Formulario;