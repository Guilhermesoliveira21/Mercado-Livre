import { useState } from "react";
import useProduto from "./useProduto";

function Provider({children}) {

        const [produtos, setProdutos] = useState([])
        const [cart, setCart] = useState([])
        const [search, setSearch] = useState('celular')
        const [loader, setLoader] = useState(true)

        const value = {
                produtos, 
                setProdutos,
                search,
                setSearch,
                cart, 
                setCart,
                loader,
                 setLoader
        }
        
        return (
                <useProduto.Provider value={value}>
                        {children}
                </useProduto.Provider>
        )
}

export default Provider;