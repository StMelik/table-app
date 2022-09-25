import {
  FilterActionTypes,
  FilterOptions,
  IFilterValues,
  SortTypes,
} from '../../types/filter'

export const setFilterAction = (filter: IFilterValues) => ({
  type: FilterActionTypes.SET_FILTER,
  payload: filter,
})

export const setSortValueAction = (sort: FilterOptions) => ({
  type: FilterActionTypes.SET_SORT_VALUE,
  payload: sort,
})

export const setSortTypeValueAction = (sortType: SortTypes) => ({
  type: FilterActionTypes.SET_SORT_TYPE_VALUE,
  payload: sortType,
})

export const resetFilterAction = () => ({
  type: FilterActionTypes.RESET_FILTER,
})
