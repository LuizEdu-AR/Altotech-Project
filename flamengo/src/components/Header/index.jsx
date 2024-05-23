import './styles.css'

import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

// imagens e svg
import { Images } from '../../assets/img'
import { Svgs } from '../../assets/svg'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const Header = () => {
    return (
        <div className='header-main-container'>
            <div className="announceheader-container">
                <LocalShippingIcon style={{ color: '#fff', fontSize: '24px' }} />
                <h3 className='announceheader-h3'>1ª TROCA POR NOSSA CONTA - PRODUTOS EXCLUSIVOS</h3>
                <LocalShippingIcon style={{ color: '#fff', fontSize: '24px' }} />
            </div>
            <div className='header-container'>
                <div className="header-logo">
                    <img src={Images.logoFlamengoBrasao} alt="Brasão Flamengo" />
                    <Link to="/" style={{ color: '#ce2228', textDecoration: 'none', fontWeight: '600' }} className='loja'>Loja não oficial</Link>
                </div>
                <div className="header-menu">
                    <ul>
                        <li><NavLink to="/">Masculino</NavLink></li>
                        <li><NavLink to="/feminino">Feminino</NavLink></li>
                        <li><NavLink to="/calcados">Calçados</NavLink></li>
                        <li><NavLink to="/acessorios">Acessórios</NavLink></li>
                    </ul>
                </div>
                <div className="options-container">
                    <Link to="/pesquisar" style={{ display: 'flex', justifyContent: 'center' }}><img src={Svgs.Search} alt="Pesquisar" /></Link>
                    <img src={Svgs.Buy} alt="Carrinho de compras" />
                    <Link to="/usuario" style={{ display: 'flex', justifyContent: 'center' }}><img src={Svgs.Perfil} alt="Perfil" /></Link>
                </div>
            </div>
        </div>
    )
}

export default Header