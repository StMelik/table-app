import { useAction } from '../../hooks/useAction'
import { useState } from 'react'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import { ConditionOptions, FilterOptions, IOption } from '../../types/filter'
import { conditionOptions, sortOptions } from '../../utils/selectOptions'
import './Filter.scss'
import Select from './Select/Select'

const Filter = () => {
  const { filter, sort, sortType } = useTypeSelector((state) => state.filter)
  const { setActivePageAction, resetFilterAction, setFilterAction } =
    useAction()
  const [values, setValues] = useState(filter)

  const isTitleTypeActive = values.type === FilterOptions.TITLE
  const isDisabled = {
    submit: !values.condition || !values.type || !values.query,
    reset:
      !values.condition && !values.type && !values.query && !sort && !sortType,
  }

  function changeInput(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const name = e.target.name
    const value = e.target.value

    setValues({
      ...values,
      [name]: value,
    })
  }

  function submitFilterHandle(e: React.FormEvent) {
    e.preventDefault()
    setActivePageAction(1)
    setFilterAction(values)
  }

  function validationConditionOptions(isTitleTypeActive: Boolean): IOption[] {
    return conditionOptions.filter((option) =>
      isTitleTypeActive
        ? option.value === ConditionOptions.INCLUDE
        : option.value !== ConditionOptions.INCLUDE
    )
  }

  return (
    <form className="filter" onSubmit={submitFilterHandle}>
      <Select
        labelText="Отфильтровать по"
        onChange={changeInput}
        options={sortOptions}
        startOptionText="фильтр"
        values={values}
        type="type"
      />
      <Select
        labelText="которое"
        onChange={changeInput}
        options={validationConditionOptions(isTitleTypeActive)}
        startOptionText="условие"
        values={values}
        type="condition"
      />
      <input
        className="filter__input"
        placeholder={isTitleTypeActive ? 'символы' : 'кол-во'}
        type={isTitleTypeActive ? 'text' : 'number'}
        name="query"
        min={1}
        value={values.query}
        onChange={changeInput}
      />

      <button
        disabled={isDisabled.submit}
        className="filter__button"
        type="submit"
      >
        Фильтовать
      </button>

      <button
        disabled={isDisabled.reset}
        className="filter__button"
        onClick={resetFilterAction}
      >
        Сбросить
      </button>
    </form>
  )
}

export default Filter
