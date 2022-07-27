import { PropsTarefas } from '../../../interfaces/tarefas';
import style from '../Lista.module.scss';

interface PropsSelecionaTarefa extends PropsTarefas{
    selecionaTarefa: (tarefaSelecionada: PropsTarefas) => void
}

const Item = ({ tarefa, tempo, selecionado, completado, id, selecionaTarefa}: PropsSelecionaTarefa) => {
    return (
        <li className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''}`} 
            onClick={() => 
                !completado && selecionaTarefa({tarefa, tempo, selecionado, completado, id})}
        >
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            {completado && <span className={style.concluido}></span>}
        </li>
    )
}

export default Item;