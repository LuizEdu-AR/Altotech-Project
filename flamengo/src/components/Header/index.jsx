import './styles.css'

import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

// imagens e svg
import { Images } from '../../assets/img'
import { Svgs } from '../../assets/svg'

const Header = () => {
    return (
        <div className='header-container'>
            <div className="header-logo">
                <img src={Images.logoFlamengoBrasao} alt="Brasão Flamengo" />
                <Link to="/" style={{color: 'white', textDecoration: 'none'}}>Loja não oficial</Link>
            </div>
            <div className="header-menu">
                <ul>
                    <li><NavLink to="/">Masculino</NavLink></li>
                    <li><NavLink to="/feminino">Feminino</NavLink></li>
                    <li><NavLink to="/infantil">Infantil</NavLink></li>
                    <li><NavLink to="/acessorios">Acessórios</NavLink></li>
                </ul>
            </div>
            <div className="options-container">
                <img src={Svgs.Search} alt="Pesquisar" />
                <img src={Svgs.Buy} alt="Carrinho de compras" />
                <img src={Svgs.Perfil} alt="Perfil" />
            </div>
        </div>
    )
}

export default Header