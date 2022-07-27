// import Botao from "../../componentes/Botao";
import style from "./Cardapio.module.scss";
import { ReactComponent as Logo } from 'assets/img/logo.svg'
import Buscador from "./Buscador";
import { useState } from "react";
import Filtros from "./Buscador/Filtros";

const Cardapio = () => {

    const [busca, setBusca] = useState<string>('');
    const [filtro, setFiltro] = useState<number | null>(null);

    return (
        <main>
            <header>
                <nav className={style.menu}>
                    <Logo />
                </nav>
                <div className={style.header}>
                    <h1 className={style.header__titulo__texto}>CACHORRO QUENTE</h1>
                </div>
            </header>
            <section className={style.cardapio}>
                <h3 className={style.cardapio__titulo} >Cardapio</h3>
                <Buscador busca={busca} setBusca={setBusca} />
                <div className={style.cardapio__filtros}>
                    <Filtros filtro={filtro} setFiltro={setFiltro} />
                </div>
            </section>
        </main>
    )
}

export default Cardapio;