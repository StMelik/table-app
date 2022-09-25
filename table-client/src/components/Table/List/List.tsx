import { useTypeSelector } from '../../../hooks/useTypeSelector'
import Item from '../Item/Item'
import './List.scss'

const List = () => {
  const { list } = useTypeSelector((state) => state.table)

  return (
    <ul className="list">
      {list.length < 1 && <p className="list__error">Ничего не найдено</p>}
      {list.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  )
}

export default List
