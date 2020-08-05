import React, { SelectHTMLAttributes } from 'react'

import './styles.css'

interface IOption {
  label: string
  value: string
}

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  name: string
  options: Array<IOption>
}

const Select: React.FC<ISelectProps> = ({ label, name, options, ...rest }) => {
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select id={name} {...rest} >
        <option value="" disabled hidden>Selecione uma opção</option>
        {
          options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)
        }
      </select>
    </div>
  )
}

export default Select
