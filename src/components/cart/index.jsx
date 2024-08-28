import { BsCartFill } from "react-icons/bs"
import style from './cart.module.css'
import { Link } from "react-router-dom";
import { useContext } from "react";
import useProduto from "../../context/useProduto";

const Cart = () => {

        const {cart} = useContext(useProduto)

        return (
                <button className={style.carrinho}>
                                        <Link to='/carrinho'><BsCartFill /></Link>
                                        {!cart.length <1 && (<span className={style.quantidade}>{cart.length}</span>)}
                                        
                                        <div className={style.carrinho__cart}>
                                        
                                        </div>
                        </button>
        )
}

export default Cart;