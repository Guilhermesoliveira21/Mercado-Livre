
import style from './search.module.css'
import {BiSearchAlt} from 'react-icons/bi'


const Search = ({ type, name, placeholder, value, onChange }) => {

        return (
                <div className={style.search}>
                        <input
                                type={type}
                                name={name}
                                placeholder={placeholder}
                                value={value}
                                onChange={onChange} />

                                <button className={style.pesquisa}><BiSearchAlt/></button>
                </div>
        )
}

export default Search;