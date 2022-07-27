import style from './Relogio.module.scss';

interface PropsRelogio {
    valor: number | undefined
}

const Relogio = ({valor = 0}: PropsRelogio) => {
    
    const [minutosDezena, minutosUnidade] = String(Math.round(valor / 60)).padStart(2, '0');
    const [segundosDezena, segundosUnidade] = String(valor % 60).padStart(2, '0');
    
    return (
        <>
            <span className={style.relogioNumero}>{minutosDezena}</span>
            <span className={style.relogioNumero}>{minutosUnidade}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{segundosDezena}</span>
            <span className={style.relogioNumero}>{segundosUnidade}</span>
        </>
    )
}

export default Relogio;