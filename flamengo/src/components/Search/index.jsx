import React from 'react'

import './styles.css'

import News from '../News'

const Search = () => {
    return (
        <div>
            <div className="search-main-container">
                <div className="search-container">
                    <form className="search-form">
                        <input type="text" name="pesquisar" placeholder='Informe o que deseja' className='search-text' />
                        <input type="submit" value="BUSCAR" className='search-submit' />
                    </form>
                </div>
                <h2 className='search-h2'>RESULTADO DA BUSCA</h2>
                <div className="search-select-container">
                    <div className="search-select-h2">
                        <h3>Filtrar por</h3>
                    </div>
                    <div className="select-container">
                        <select name="secao" className='search-select' defaultValue="" >
                            <option value="">Seção</option>
                            <option value="tudo">Todas</option>
                            <option value="masculino">Masculino</option>
                            <option value="feminino">Feminino</option>
                            <option value="infantil">Infantil</option>
                            <option value="acessorios">Acessórios</option>
                        </select>
                        <select name="tipo" className='search-select' defaultValue="" >
                            <option value="">Tipo</option>
                            <option value="tudo">Todas</option>
                            <option value="camisa">Camisa</option>
                            <option value="calca">Calça</option>
                            <option value="bermuda">Bermuda</option>
                            <option value="tenis">Tênis</option>
                            <option value="chapeu">Chapéu</option>
                        </select>
                    </div>
                </div>
                <div className="search-product-container"></div>
            </div>



            <News />
        </div>
    )
}

export default Search