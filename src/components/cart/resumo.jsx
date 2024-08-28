import { useContext } from 'react'
import style from './resumo.module.css'
import useProduto from '../../context/useProduto'
import formatCurrency from '../../utils'

const Resumo = () => {

        const {cart} = useContext(useProduto)

        const total = cart.reduce((acc, item) => item.price + acc, 0)


        return (
                <div className={style.container}>
                        <h2>Resumo</h2>
                        <div>
                                <p className={style.resumo}>Valor dos produtos: 
                                <span className={style.price}> {formatCurrency(total, 'BRL')}</span></p>
                                
                                <p className={style.resumo}>Frete: 
                                <span className={style.price}> R$ 780,89</span></p>
                                
                                <p className={style.resumo}>Crédito: 
                                <span className={style.price}> R$ 780,89</span></p>
                        </div>
                        <div className={style.total}>
                                <p className={style.total_pix}>Valor à vista no Pix: </p>
                                <p className={style.preco}>R$ 105,78</p>
                                <p className={style.total_pix}>(Economize: R$ 10,78)</p>
                        </div>
                        <div className={style.btn_botao}>
                                <button className={style.btn}>Finalizar compra</button>
                                <button className={style.btn_branco}>Continuar comprando</button>
                        </div>
                </div>
        )
}

export default Resumo