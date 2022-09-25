import { useAction } from '../../hooks/useAction'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import { FilterOptions, SortTypes } from '../../types/filter'
import List from './List/List'
import './Table.scss'

const Table = () => {
  const { sort, sortType } = useTypeSelector((state) => state.filter)
  const { setSortTypeValueAction, setSortValueAction } = useAction()

  function setSortValue(): void {
    const isASC = sortType === SortTypes.ASC
    setSortTypeValueAction(isASC ? SortTypes.DESC : SortTypes.ASC)
  }

  function clickSortTitle(): void {
    if (sort !== FilterOptions.TITLE) setSortValueAction(FilterOptions.TITLE)
    setSortValue()
  }

  function clickSortQuantity(): void {
    if (sort !== FilterOptions.QUANTITY)
      setSortValueAction(FilterOptions.QUANTITY)
    setSortValue()
  }

  function clickSortDistance(): void {
    if (sort !== FilterOptions.DISTANCE)
      setSortValueAction(FilterOptions.DISTANCE)
    setSortValue()
  }

  function getButtonClass(type: FilterOptions): string {
    const baseClass = 'table__header-text table__header-sort-button '
    const descClass = 'table__header-sort-button_desc'
    const ascClass = 'table__header-sort-button_asc'

    if (sort === type) {
      const isASC = sortType === SortTypes.ASC
      return isASC ? baseClass + ascClass : baseClass + descClass
    }

    return baseClass
  }

  return (
    <div className="table">
      <div className="table__header header-table">
        <p className="table__header-text">Дата</p>
        <button
          className={getButtonClass(FilterOptions.TITLE)}
          onClick={clickSortTitle}
        >
          Название
        </button>
        <button
          className={getButtonClass(FilterOptions.QUANTITY)}
          onClick={clickSortQuantity}
        >
          Количество
        </button>
        <button
          className={getButtonClass(FilterOptions.DISTANCE)}
          onClick={clickSortDistance}
        >
          Расстояние
        </button>
      </div>
      <List />
    </div>
  )
}

export default Table
