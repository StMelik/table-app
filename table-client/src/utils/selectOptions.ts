import { ConditionOptions, FilterOptions, IOption } from '../types/filter'

export const sortOptions: IOption[] = [
  { value: FilterOptions.TITLE, label: 'Названию' },
  { value: FilterOptions.QUANTITY, label: 'Количеству' },
  { value: FilterOptions.DISTANCE, label: 'Расстоянию' },
]

export const conditionOptions: IOption[] = [
  { value: ConditionOptions.EQUALLY, label: 'равно' },
  { value: ConditionOptions.INCLUDE, label: 'содержит' },
  { value: ConditionOptions.MORE, label: 'больше' },
  { value: ConditionOptions.LESS, label: 'меньше' },
]
