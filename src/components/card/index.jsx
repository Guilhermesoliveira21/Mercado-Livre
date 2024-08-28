import { useContext, useEffect } from 'react'
import style from './card.module.css'
import {MdAddShoppingCart} from 'react-icons/md'
import useProduto from '../../context/useProduto'
import fetchProdutos from '../../api'
import formatCurrency from '../../utils'
import Loader from '../loader'

const Card = () => {

        const {produtos, setProdutos, search, cart, setCart, loader, setLoader} = useContext( useProduto )

        useEffect(() => {
                fetchProdutos(search).then((response) => {
                        setProdutos(response)
                        setLoader(false)
                })

        },[])
        

        return (
                <div className={style.container}>
                     {loader && (<Loader />) || (
                        <>
                        {produtos.map((product) => (
                        <div  key={product.id} className={style.card}>
                                <button className={style.add} onClick={() => {
                                        setCart([...cart, product])
                                }}><MdAddShoppingCart /></button>
                                
                                <div>
                                <img className={style.img} src={product.thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="" />
                                <div className={style.descricao}>
                                        <h3 className={style.title}>{product.title}</h3>
                                        <h3 className={style.price}>{formatCurrency(product.price, 'BRL')}</h3>
                                </div>
                                </div>
                                
                        </div>
                        ))}
                        </>
                     )}
                        
                        {setCart(cart)}
                </div>
        )
}

export default Card;