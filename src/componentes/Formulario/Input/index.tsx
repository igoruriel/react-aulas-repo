import { PropsInput } from '../../../interfaces/input';
import style from '../Form.module.scss';

const Input = ({nome, titulo, inputType, valor, aoAlterado, placeholder, step, min, max}: PropsInput) => {
    return (
        <div className={style.inputContainer}>
            <label className={style.inputLabel} htmlFor={nome}>{titulo}</label>
            <input 
                className={style.input} 
                type={inputType} 
                name={nome} 
                id={nome} 
                value={valor}
                onChange={aoAlterado}
                placeholder={placeholder} 
                step={step} 
                min={min} 
                max={max} 
                required 
            />
        </div>
    )
}

export default Input;