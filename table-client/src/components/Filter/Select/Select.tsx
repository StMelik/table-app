import { IFilterValues, IOption } from '../../../types/filter'
import './Select.scss'

interface SelectProps {
  labelText: string
  startOptionText: string
  options: IOption[]
  values: IFilterValues
  onChange: React.ChangeEventHandler
  type: 'type' | 'condition'
}

const Select: React.FC<SelectProps> = ({
  labelText,
  startOptionText,
  options,
  values,
  onChange,
  type,
}) => {
  return (
    <label className="filter__label">
      <p className="filter__text">{labelText}</p>
      <select
        className="filter__select"
        name={type}
        value={values[type]}
        onChange={onChange}
      >
        <option disabled value="">
          {startOptionText}
        </option>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </label>
  )
}

export default Select
