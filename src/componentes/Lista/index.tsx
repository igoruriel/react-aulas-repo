import { PropsTarefas } from '../../interfaces/tarefas';
import Item from './Item';
import style from './Lista.module.scss';

interface PropsLista {
    tasks: PropsTarefas[],
    selecionaTarefa: (tarefaSelecionada: PropsTarefas) => void
}

const Lista = ({tasks, selecionaTarefa}: PropsLista) => {
    return (
        <aside className={style.listaTarefas}>
            <h2>Lista de Tarefas</h2>
            <ul>
                {tasks.map(item => (
                    <Item {...item} key={item.id} selecionaTarefa={selecionaTarefa} />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;