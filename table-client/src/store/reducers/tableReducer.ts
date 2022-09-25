import { ITableState, TableAction, TableActionTypes } from '../../types/table'

const initialState: ITableState = {
  list: [],
  loading: true,
  error: '',
  page: 1,
  limit: 10,
  total: 0,
}

export const tableReducer = (
  state = initialState,
  action: TableAction
): ITableState => {
  switch (action.type) {
    case TableActionTypes.FETCH_TABLE:
      return { ...state, loading: true }
    case TableActionTypes.FETCH_TABLE_SUCCESS:
      return { ...state, loading: false, list: action.payload }
    case TableActionTypes.FETCH_TABLE_ERROR:
      return { ...state, loading: false, error: action.payload }
    case TableActionTypes.SET_PAGE:
      return { ...state, page: action.payload }
    case TableActionTypes.SET_TOTAL_PAGES:
      return { ...state, total: action.payload }
    default:
      return state
  }
}
