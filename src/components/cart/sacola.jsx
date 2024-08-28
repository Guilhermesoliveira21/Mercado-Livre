import { useContext, useState } from 'react';
import style from '../cart/sacola.module.css'
import useProduto from '../../context/useProduto';
import formatCurrency from '../../utils';

const Compra = () => {

        const [cont, setCont] = useState(1)

        const {cart} = useContext(useProduto)

        console.log(cart)

        const remove = () => {
                if(cont < 2){
               return
        }
        setCont(cont - 1)
        }

        const add = () => {
                setCont(cont + 1)
        }

        return (
                <div>
        
                               {cart.map((prod) => (
                                <div className={style.container} key={prod.id}>
                                <div>
                                        <img src={prod.thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="" />
                                </div>
                                <div className={style.qtde}>
                                        <button onClick={add}>+</button>
                                        <input type="text" value={cont}/>
                                        <button onClick={remove}>-</button>
                                </div>
                                <div className={style.descricao}>
                                        <p>{prod.title}</p>
                                        <h3>{formatCurrency(prod.price, 'BRL')}</h3>
                                </div>
                        </div>
                               ))}
              
                        
                </div>
        )
}

export default Compra;