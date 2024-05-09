import Logo from '../assets/logoflamengo1.png'

// imagens e svg
import Visa from '../assets/visa.svg'
import Master from '../assets/master.svg'
import Pix from '../assets/pix.svg'
import Amexpress from '../assets/amexpress.svg'
import Paypal from '../assets/paypal.svg'
import Altotech from '../assets/logoaltotech.png'

import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-maincontainer'>
            <div className="main-container">
                <div className="crflamengo">
                    <img src={Logo} alt="Logo Flamengo" />
                    <p>CLUBE DE REGATAS DO FLAMENGO</p>
                </div>
                <div className="footer-options-container">
                    <div className="footer-options">
                        <h2>INFORMAÇÕES</h2>
                        <ul>
                            <li><a href="#">Quem Somos</a></li>
                            <li><a href="#">Fale Conosco</a></li>
                            <li><a href="#">Produtos Licensiados</a></li>
                            <li><a href="#">Nossas Lojas</a></li>
                        </ul>
                    </div>
                    <div className="footer-options">
                        <h2>SUPORTE</h2>
                        <ul>
                            <li><a href="#">Política de Privacidade</a></li>
                            <li><a href="#">Política de Entrega</a></li>
                            <li><a href="#">Suporte de Cashback</a></li>
                            <li><a href="#">Trocas e Devoluções</a></li>
                            <li><a href="#">Formas de Pagamento</a></li>
                        </ul>
                    </div>
                    <div className="footer-options">
                        <h2>MINHA CONTA</h2>
                        <ul>
                            <li><a href="#">Meus Dados</a></li>
                        </ul>
                    </div>
                    <div className="payment-options">
                        <h2>Informações</h2>
                        <div className="paymentmethod">
                            <ul>
                                <li><img src={Visa} alt="Visa" /></li>
                                <li><img src={Master} alt="Master" /></li>
                                <li><img src={Pix} alt="Pix" /></li>
                            </ul>
                            <ul>
                                <li><img src={Amexpress} alt="Amexpress" /></li>
                                <li><img src={Paypal} alt="Paypal" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-container">
                <p>&copy; 2024 CLube Regatas do Flamengo, Todos os direitos reservados</p>
            </div>
            <div className="develops-container">
                <img src={Altotech} alt="Altotech" />
                <p>Devoloped by Hillary Diniz & Luiz Eduardo A.</p>
                <img src={Altotech} alt="Altotech" />
            </div>
        </div>
    )
}

export default Footer