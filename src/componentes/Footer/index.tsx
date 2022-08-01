import style from './Footer.module.scss';
import { ReactComponent as Logo } from 'assets/img/logo.svg';

const Footer = () => {
    return (
        <footer>
            <div className={style.footer}>
                <Logo />
            </div>
        </footer>
    );
};

export default Footer;