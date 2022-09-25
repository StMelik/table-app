import { useEffect } from 'react'
import { useAction } from '../hooks/useAction'
import { useTypeSelector } from '../hooks/useTypeSelector'
import Error from './Error/Error'
import Filter from './Filter/Filter'
import Pagination from './Pagination/Pagination'
import Preloader from './Preloader/Preloader'
import Table from './Table/Table'

const App = () => {
  const { loading, page, limit, error, total } = useTypeSelector(
    (state) => state.table
  )
  const { filter, sort, sortType } = useTypeSelector((state) => state.filter)
  const { fetchTable } = useAction()

  useEffect(() => {
    fetchTable(page, limit, filter, sort, sortType)
  }, [page, sortType, filter])

  if (error) return <Error error={error} />

  return (
    <div className="app">
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Filter />
          <Table />
          {!!total && <Pagination />}
        </>
      )}
    </div>
  )
}

export default App
