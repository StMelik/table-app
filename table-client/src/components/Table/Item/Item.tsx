import { ITableItem } from '../../../types/table'
import { formatDate } from '../../../utils/formatDate'
import './Item.scss'

interface ItemProps {
  item: ITableItem
}

const Item: React.FC<ItemProps> = ({ item }) => {
  return (
    <li className="item">
      <p className="item-text">{formatDate(item.date)}</p>
      <p className="item-text ">{item.title}</p>
      <p className="item-text ">{item.quantity}</p>
      <p className="item-text ">{item.distance}</p>
    </li>
  )
}

export default Item
