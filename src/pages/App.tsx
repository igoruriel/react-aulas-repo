import { useState } from "react";
import Cronometro from "../componentes/Cronometro";
import Formulario from "../componentes/Formulario";
import Lista from "../componentes/Lista";
import { PropsTarefas } from "../interfaces/tarefas";
import style from './App.module.scss'

function App() {
      
  const [tarefas, setTarefas] = useState<PropsTarefas[]>([])
  const [selecionado, setSelecionado] = useState<PropsTarefas>();

  function selecionaTarefa (tarefaSelecionada: PropsTarefas) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa, 
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }
  
  function finalizaTarefa () {
    if (selecionado) {
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if (tarefa.id === selecionado.id) {
          return {
            ...tarefa, 
            selecionado: false, 
            completado: true
          }
        }
        return tarefa;
      }))
    }
  }
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tasks={tarefas} selecionaTarefa={selecionaTarefa} />
      <Cronometro finalizaTarefa={finalizaTarefa} selecionado={selecionado}/>
    </div>
  );
}

export default App;
