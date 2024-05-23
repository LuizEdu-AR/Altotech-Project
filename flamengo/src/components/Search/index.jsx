import './styles.css'

import News from '../News'

import ProductCard from '../ProductCard'

import { products } from '../../data/data.js'

import { useRef, useState, useEffect } from 'react'

const Search = () => {
    const inputRef = useRef(null);

    const [valor, setValor] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setValor(inputRef.current.value);
    }

    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        const filteredProducts = products.filter((product) => {
            if (product.text && valor) {
                return product.text.toLowerCase().includes(valor.toLowerCase());
            } else {
                // Handle undefined cases (optional)
                return false; // Or any other logic
            }
        });
        setSearchResults(filteredProducts);
    };

    useEffect(() => {
        handleSearch();
    }, [valor]);

    const [filter, setFilter] = useState('');

    const handleFilter = (event) => {
        setFilter(event.target.value);
    }

    useEffect(() => {
        const filteredProducts = products.filter((product) => {
            if (product.section && filter) {
                return product.section.toLowerCase().includes(filter.toLowerCase());
            } else {
                return false;
            }
        });
        setSearchResults(filteredProducts);
    }, [filter]);

    const [filterType, setFilterType] = useState('');

    const handleFilterType = (event) => {
        setFilterType(event.target.value);
    }

    useEffect(() => {
        const filteredProducts = products.filter((product) => {
            if (product.type && filterType) {
                return product.type.toLowerCase().includes(filterType.toLowerCase());
            } else {
                return false;
            }
        });
        setSearchResults(filteredProducts);
    }, [filterType]);
    

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
                        <select name="secao" className='search-select' defaultValue="" onChange={handleFilter}>
                            <option value="">Seção</option>
                            <option value="tudo">Todas</option>
                            <option value="masculino">Masculino</option>
                            <option value="feminino">Feminino</option>
                            <option value="infantil">Infantil</option>
                            <option value="acessorios">Acessórios</option>
                        </select>
                        <span>OU</span>
                        <select name="tipo" className='search-select' defaultValue="" onChange={handleFilterType}>
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

                {valor === '' && searchResults.length === 0 && (
                    <div className="search-results">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}

                {searchResults.length > 0 && (
                    <div className="search-results">
                        {searchResults.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}

                {searchResults.length === 0 && valor !== '' && (
                    <p className="no-results">
                        Nenhum resultado para "{valor}".
                    </p>
                )}

                {valor === '' && filter === "tudo" && (
                    <div className="search-results">
                        {products.map((product) => (
                            product.section === "tudo" && <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}

                {valor === '' && filterType === "tudo" && (
                    <div className="search-results">
                        {products.map((product) => (
                            product.type === "tudo" && <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}

                <News />
            </div>
        </div>
    )
}

export default Search