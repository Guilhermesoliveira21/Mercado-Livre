import Compra from '../components/cart/sacola';
import style from '../components/cart/compra.module.css'
import Resumo from '../components/cart/resumo';

const Cart = () =>  {
        return (

                <div className={style.container}>
                        <div className={style.sacola}>
                                <Compra />
                        </div>
                        <div className={style.compra}>
                                <Resumo />
                        </div>
                </div>

        )
}

export default Cart;