export interface ITableItem {
  id: string
  date: string
  title: string
  quantity: number
  distance: number
}

export interface ITableState {
  list: ITableItem[]
  loading: boolean
  error: string
  page: number
  limit: number
  total: number
}

export enum TableActionTypes {
  FETCH_TABLE = 'FETCH_TABLE',
  FETCH_TABLE_SUCCESS = 'FETCH_TABLE_SUCCESS',
  FETCH_TABLE_ERROR = 'FETCH_TABLE_ERROR',
  SET_PAGE = 'SET_PAGE',
  SET_TOTAL_PAGES = 'SET_TOTAL_PAGES',
}

interface IFetchTableAction {
  type: TableActionTypes.FETCH_TABLE
}

interface IFetchTableSuccessAction {
  type: TableActionTypes.FETCH_TABLE_SUCCESS
  payload: ITableItem[]
}

interface IFetchTableErrorAction {
  type: TableActionTypes.FETCH_TABLE_ERROR
  payload: string
}

interface ISetPageAction {
  type: TableActionTypes.SET_PAGE
  payload: number
}

interface ISetTotalPagesAction {
  type: TableActionTypes.SET_TOTAL_PAGES
  payload: number
}

export type TableAction =
  | IFetchTableAction
  | IFetchTableSuccessAction
  | IFetchTableErrorAction
  | ISetPageAction
  | ISetTotalPagesAction
