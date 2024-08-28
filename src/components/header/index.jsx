import { useContext, useState } from 'react';
import Search from '../search';
import style from './header.module.css'
import { BsCartFill } from 'react-icons/bs'
import useProduto from '../../context/useProduto';
import Http from '../../api';
import fetchProducts from '../../api';
import Cart from '../cart';
import { Link } from 'react-router-dom';
import Loader from '../loader';

const Header = () => {

        const [search, setSearch] = useState('celular')
        const {setProdutos, loader, setLoader} = useContext(useProduto)

        const submit = async (e) => {
               
                        e.preventDefault();
                    
                        const products = await fetchProducts(search);
                        setProdutos(products)
                        setSearch('')
                        setLoader(false)
                  
        }

        const aoDigitar = (e) => {
                setSearch(e.target.value)
        }

        return (
                <header className={style.header}>
                        <nav><Link className={style.link} to='/'>Shopp</Link></nav>
                        <nav className={style.search}>
                                <form onSubmit={submit} classname={style.form}>
                                        <Search
                                                type='search'
                                                name='pesquisa'
                                                placeholder='Buscar produto..' 
                                                value={search}
                                                onChange={aoDigitar}/>

                                     </form>
                        </nav>
                        <nav >
                                <Cart />
                        </nav>
                </header>
        )
}

export default Header;