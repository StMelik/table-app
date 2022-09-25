import axios from 'axios'
import { Dispatch } from 'react'
import { ITableItem } from './../../types/table'
import { TableAction, TableActionTypes } from '../../types/table'
import { configApi } from '../../utils/configApi'
import { IFilterValues } from '../../types/filter'

interface IFetchTable {
  total: number
  list: ITableItem[]
}

type FetchTable = (
  page: number,
  limit: number,
  filter?: IFilterValues,
  sort?: string,
  sortType?: string
) => (dispatch: Dispatch<TableAction>) => Promise<void>

export const fetchTable: FetchTable = (
  page = 1,
  limit = 10,
  filter,
  sort,
  sortType
) => {
  return async (dispatch) => {
    dispatch({ type: TableActionTypes.FETCH_TABLE })

    try {
      const response = await axios.get('/', {
        ...configApi,
        params: {
          limit,
          page,
          filter: filter?.type || null,
          condition: filter?.condition || null,
          query: filter?.query || null,
          sort: sort || null,
          sortType: sortType || null,
        },
      })

      const { list, total } = response.data as IFetchTable

      dispatch({
        type: TableActionTypes.SET_TOTAL_PAGES,
        payload: Math.ceil(total / limit),
      })
      dispatch({
        type: TableActionTypes.FETCH_TABLE_SUCCESS,
        payload: list,
      })
    } catch (e) {
      dispatch({
        type: TableActionTypes.FETCH_TABLE_ERROR,
        payload:
          'Произошла ошибка при загрузке данных таблицы. Обновите страницу.',
      })
    }
  }
}

export const setActivePageAction = (page: number) => ({
  type: TableActionTypes.SET_PAGE,
  payload: page,
})
