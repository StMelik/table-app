import {
  FilterAction,
  IFilterState,
  FilterActionTypes,
} from '../../types/filter'

const initialState: IFilterState = {
  sort: '',
  sortType: '',
  filter: {
    type: '',
    condition: '',
    query: '',
  },
}

export const filterReducer = (
  state = initialState,
  action: FilterAction
): IFilterState => {
  switch (action.type) {
    case FilterActionTypes.SET_FILTER:
      return { ...state, filter: action.payload }
    case FilterActionTypes.SET_SORT_VALUE:
      return { ...state, sort: action.payload }
    case FilterActionTypes.SET_SORT_TYPE_VALUE:
      return { ...state, sortType: action.payload }
    case FilterActionTypes.RESET_FILTER:
      return initialState
    default:
      return state
  }
}
