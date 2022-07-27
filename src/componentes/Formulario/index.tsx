import {v4 as idv4} from 'uuid';
import React from 'react';
import { PropsTarefas } from '../../interfaces/tarefas';
import Botao from '../Botao';
import style from './Form.module.scss';
import Input from './Input';

class Formulario extends React.Component<{setTarefas: React.Dispatch<React.SetStateAction<PropsTarefas[]>>}> {
    
    state = {
        tarefa:'',
        tempo:'00:00'
    }

    public aoAdicionar (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        this.props.setTarefas(tarefasAntigas=>[...tarefasAntigas, {...this.state, selecionado: false, completado: false, id: idv4()}])
        
        this.setState({tarefa: '', tempo: ''})
    }

    render(): JSX.Element {
        return (
            <form onSubmit={this.aoAdicionar.bind(this)} className={style.novaTarefa}>
                <Input 
                    titulo='Task' 
                    inputType='text' 
                    nome='task' 
                    placeholder='task' 
                    valor={this.state.tarefa}
                    aoAlterado={(e) => this.setState({tarefa: e.target.value})}
                />
                <Input 
                    titulo='Cronômetro' 
                    inputType='time' 
                    nome='cronometro' 
                    step='1' 
                    min='00:00:00' 
                    max='00:30:00' 
                    valor={this.state.tempo}
                    aoAlterado={(e) => this.setState({tempo: e.target.value})}
                />
                <Botao type={'submit'}>Addicionar</Botao>
            </form>
        )
    }
}

export default Formulario;