import './styles.css'
import {ReactComponent as Instagram} from './instagram.svg'

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icon">
                <a href="https://www.instagram.com/devsuperior.ig/">
                    <Instagram />
                </a>
            </div>
        </footer>
    )
}

export default Footer;