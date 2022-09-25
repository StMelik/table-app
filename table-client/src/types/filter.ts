export enum FilterOptions {
  TITLE = 'title',
  QUANTITY = 'quantity',
  DISTANCE = 'distance',
}

export enum SortTypes {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum ConditionOptions {
  EQUALLY = '=',
  INCLUDE = 'ILIKE',
  MORE = '>',
  LESS = '<',
}

export interface IOption {
  value: string
  label: string
}

export interface IFilterValues {
  type: FilterOptions | ''
  condition: ConditionOptions | ''
  query: string
}

export interface IFilterState {
  filter: IFilterValues
  sort: FilterOptions | ''
  sortType: SortTypes | ''
}

export enum FilterActionTypes {
  SET_FILTER = 'SET_FILTER',
  SET_SORT_VALUE = 'SET_SORT_VALUE',
  SET_SORT_TYPE_VALUE = 'SET_SORT_TYPE_VALUE',
  RESET_FILTER = 'RESET_FILTER',
}

interface ISetFilterAction {
  type: FilterActionTypes.SET_FILTER
  payload: {
    type: FilterOptions | ''
    condition: ConditionOptions | ''
    query: string
  }
}

interface ISetSortValueAction {
  type: FilterActionTypes.SET_SORT_VALUE
  payload: FilterOptions
}

interface ISetSortTypeValueAction {
  type: FilterActionTypes.SET_SORT_TYPE_VALUE
  payload: SortTypes
}

interface resetFilterAction {
  type: FilterActionTypes.RESET_FILTER
}

export type FilterAction =
  | ISetFilterAction
  | ISetSortValueAction
  | ISetSortTypeValueAction
  | resetFilterAction
