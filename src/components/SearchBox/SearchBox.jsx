import css from "./SearchBox.module.css"
import {useSelector,useDispatch} from 'react-redux'
import { changeFilter} from '../../redux/filtersSlice'
import {selectNameFilter } from '../../redux/selectors'

const SearchBox = () => {
     
    const dispatch = useDispatch();
    const filters = useSelector(selectNameFilter);
    const onChangeFilter = (event) => {
        dispatch(changeFilter(event.target.value))
  }

    return (
        <label className={css.filter}>Find contacts by name
            <input type="text" value={filters} onChange={onChangeFilter}/></label> 
  )
}

export default SearchBox