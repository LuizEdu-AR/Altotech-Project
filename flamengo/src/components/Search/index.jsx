import './styles.css'

import News from '../News'

import ProductCard from '../ProductCard'

import { products } from '../../data/data'

import { useRef, useState } from 'react'

const Search = () => {
    const inputRef = useRef(null);

    const [products, setProducts] = useState([products]);

    const [searchResults, setSearchResults] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const valor = inputRef.current.value.toLowerCase();

        const filteredProducts = products.filter((product) =>
            product.name.toLowerCase().includes(valor)
        );

        setSearchResults(filteredProducts);
    };
    return (
        <div>
            <div className="search-main-container">
                <div className="search-container">
                    <form className="search-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="pesquisar"
                            placeholder='Informe o nome do produto que deseja'
                            className='search-text'
                            ref={inputRef}
                        />
                        <input
                            type="submit"
                            value="BUSCAR"
                            className='search-submit'
                        />
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
                {/* <div className="search-product-grid">
                    {products.map((product, index) => {
                        const row = Math.floor(index / 4);
                        const col = index % 4;

                        return (
                            <div key={product.id} className={`product-row-${row} product-col-${col}`}>
                                <ProductCard product={product} />
                            </div>
                        );
                    })}
                </div> */}

                {searchResults.length > 0 && (
                    <ul className="search-results">
                        {searchResults.map((product) => (
                            <li key={product.id}>
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                            </li>
                        ))}
                    </ul>
                )}

                {searchResults.length === 0 && valor !== '' && (
                    <p className="no-results">
                        Nenhum produto encontrado com o nome "{valor}".
                    </p>
                )}



                <News />
            </div>
        </div>
    )
}

export default Search