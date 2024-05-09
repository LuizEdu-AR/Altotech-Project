import './Header.css'

// imagens e svg
import Logo from '../assets/logoflamengobrasao.png'
import Search from '../assets/search.svg'
import Buy from '../assets/buy.svg'
import Perfil from '../assets/perfil.svg'

const Header = () => {
    return (
        <div className='header-container'>
            <div className="header-logo">
                <img src={Logo} alt="Brasão Flamengo" />
                <p>Loja não oficial</p>
            </div>
            <div className="header-menu">
                <ul>
                    <li><a href="#">Masculino</a></li>
                    <li><a href="#">Feminino</a></li>
                    <li><a href="#">Infantil</a></li>
                    <li><a href="#">Acessórios</a></li>
                </ul>
            </div>
            <div className="options-container">
                <img src={Search} alt="Pesquisar" />
                <img src={Buy} alt="Carrinho de compras" />
                <img src={Perfil} alt="Perfil" />
            </div>
        </div>
    )
}

export default Header