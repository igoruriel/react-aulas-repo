import { useEffect, useState } from 'react';
import converteParaSegundos from '../../comum/utilitarios/tempo';
import { PropsTarefas } from '../../interfaces/tarefas';
import Botao from '../Botao';
import style from './Cronometro.module.scss';
import Relogio from './Relogio';

interface PropsCronometro {
    selecionado: PropsTarefas | undefined;
    finalizaTarefa: () => void;
}

const Cronometro = ({finalizaTarefa, selecionado}:PropsCronometro) => {
    
    const [tempo, setTempo] = useState<number>();

    useEffect(()=> {
        selecionado?.tempo ? setTempo(converteParaSegundos(selecionado?.tempo)) : Error('esse selecionado não existe')
    }, [selecionado])

    function iniciaCronometro (contador: number = 0) {
        setTimeout(() => {
            if(contador > 0) {
                setTempo(contador - 1);
                return iniciaCronometro(contador - 1)
            }
            finalizaTarefa();
        }, 1000)
    }

    return (
        <div className={style.cronometro}>
            <h3 className={style.titulo}>Escolha uma tarefa e inicie o cronometro</h3>
            <div className={style.relogioWrapper}>
                <Relogio valor={tempo} />
            </div>
            <Botao aoClicado={() => iniciaCronometro(tempo)}>Start</Botao>
        </div>
    )
}

export default Cronometro;