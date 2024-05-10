// imagens e svg
import { Images } from '../../assets/img'
import { Svgs } from '../../assets/svg'

import './styles.css'

const Footer = () => {
    return (
        <div className='footer-maincontainer'>
            <div className="main-container">
                <div className="crflamengo">
                    <img src={Images.LogoFlamengo1} alt="Logo Flamengo" />
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
                                <li><img src={Svgs.Visa} alt="Visa" /></li>
                                <li><img src={Svgs.Master} alt="Master" /></li>
                                <li><img src={Svgs.Pix} alt="Pix" /></li>
                            </ul>
                            <ul>
                                <li><img src={Svgs.Amexpress} alt="Amexpress" /></li>
                                <li><img src={Svgs.Paypal} alt="Paypal" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-container">
                <p>&copy; 2024 CLube Regatas do Flamengo, Todos os direitos reservados</p>
            </div>
            <div className="develops-container">
                <img src={Images.LogoAltotech} alt="Altotech" />
                <p>Devoloped by Hillary Diniz & Luiz Eduardo A.</p>
                <img src={Images.LogoAltotech} alt="Altotech" />
            </div>
        </div>
    )
}

export default Footer