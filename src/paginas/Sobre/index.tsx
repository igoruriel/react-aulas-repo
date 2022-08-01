import style from './Sobre.module.scss';
import stylePadrao from 'assets/style/base/Tema.module.scss';
import imgSobreNos from 'assets/img/Sobre/casa.png';
import imgMassa from 'assets/img/Sobre/massa1.png';
import imgMassa2 from 'assets/img/Sobre/massa2.png';

const imgMassas = [imgMassa, imgMassa2];

const Sobre = () => {
    return (
        <section>
            <h3 className={stylePadrao.titulo}>Sobre Nós</h3>
            <div className={style.sobreNos}>
                <img src={imgSobreNos} alt="fachada do restaurante" />
                <div className={style.sobreNos__texto}>
                    <p>Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos pelos ingredientes tradicionais da culinária Italiana, frescos e de excelente qualidade para que sua experiência seja ainda mais intensa!</p>
                    <p>Também possuímos uma cardápio de carnes com muitas opções de acordo com o seu gosto!</p>
                    <p>Para acompanhar as massas italianas, Aluroni possui uma reserva de vinhos especiais, que harmonizam perfeitamente com o seu parto, seja carne ou massa!</p>
                </div>
            </div>
            <div className={style.imagens}>
                {imgMassas.map((massa, index) => (
                    <div key={index} className={style.imagens__imagem}>
                        <img src={massa} alt={massa} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Sobre;