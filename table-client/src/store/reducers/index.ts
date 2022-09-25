import { combineReducers } from 'redux'
import { tableReducer } from '../reducers/tableReducer'
import { filterReducer } from './filterReducer'

export const rootReducer = combineReducers({
  table: tableReducer,
  filter: filterReducer,
})

export type RootState = ReturnType<typeof rootReducer>
