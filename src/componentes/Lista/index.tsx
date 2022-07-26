import style from './Lista.module.scss';

const Lista = () => {
    
    const listaDetarefas = [
        {
            tarefa: 'js',
            tempo: '1:30:00'
        }, 
        {
            tarefa: 'outra tarefa', 
            tempo: '1:20:00'
        }
    ] 

    return (
        <aside className={style.listaTarefas}>
            <h2>Lista de Tarefas</h2>
            <ul>
                {listaDetarefas.map(item => (
                    <li className={style.item} key={item.tarefa}>
                        <h3>{item.tarefa}</h3>
                        <span>{item.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Lista;