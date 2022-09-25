import { useAction } from '../../hooks/useAction'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import './Pagination.scss'

const Pagination = () => {
  const { setActivePageAction } = useAction()
  const { page, total } = useTypeSelector((state) => state.table)

  const typePagination = {
    isSmall: total > 1 && total < 7,
    isStart: total >= 7 && page <= 3,
    isCenter: total >= 7 && page > 3 && page < total - 2,
    isEnd: total >= 7 && page >= total - 2,
  }

  function prevClickHandle() {
    if (page > 1) {
      setActivePageAction(page - 1)
    }
  }

  function nextClickHandle() {
    if (page < total) {
      setActivePageAction(page + 1)
    }
  }

  function renderSmallPagination() {
    return Array(total)
      .fill(1)
      .map((_, i) => (
        <button
          key={i}
          className={`pagination__button ${
            page === i + 1 && 'pagination__button_active'
          }`}
          onClick={() => setActivePageAction(i + 1)}
          children={i + 1}
        />
      ))
  }

  function renderStartPagination() {
    return (
      <>
        {Array(5)
          .fill(1)
          .map((_, i) => (
            <button
              key={i}
              className={`pagination__button ${
                page === i + 1 && 'pagination__button_active'
              }`}
              onClick={() => setActivePageAction(i + 1)}
              children={i + 1}
            />
          ))}
        <p>...</p>
        <button
          className="pagination__button"
          onClick={() => setActivePageAction(total)}
          children={total}
        />
      </>
    )
  }

  function renderCenterPagination() {
    return (
      <>
        <button
          className="pagination__button"
          onClick={() => setActivePageAction(1)}
          children={1}
        />
        <p>...</p>
        <button
          className="pagination__button"
          onClick={prevClickHandle}
          children={page - 1}
        />
        <button
          className="pagination__button pagination__button_active"
          children={page}
        />
        <button
          className="pagination__button"
          onClick={nextClickHandle}
          children={page + 1}
        />
        <p>...</p>
        <button
          className="pagination__button"
          onClick={() => setActivePageAction(total)}
          children={total}
        />
      </>
    )
  }

  function renderEndPagination() {
    return (
      <>
        <button
          className="pagination__button"
          onClick={() => setActivePageAction(1)}
          children={1}
        />
        <p>...</p>
        {Array(5)
          .fill(1)
          .map((_, i) => (
            <button
              key={i}
              className={`pagination__button ${
                page === total - i && 'pagination__button_active'
              }`}
              onClick={() => setActivePageAction(total - i)}
              children={total - i}
            />
          ))
          .reverse()}
      </>
    )
  }

  return (
    <div className="pagination">
      {page > 1 && (
        <button
          className="pagination__button pagination__button_prev"
          onClick={prevClickHandle}
          children="Назад"
        />
      )}
      {typePagination.isSmall && renderSmallPagination()}
      {typePagination.isStart && renderStartPagination()}
      {typePagination.isCenter && renderCenterPagination()}
      {typePagination.isEnd && renderEndPagination()}
      {page < total && (
        <button
          className="pagination__button pagination__button_next"
          onClick={nextClickHandle}
          children="Вперед"
        />
      )}
    </div>
  )
}

export default Pagination
