import React from 'react'
import { SearchInputProps } from './SearchInput.type'


function SearchInput({placeholder, onChange, value}:SearchInputProps) {
  return (
    <input onChange={(e) => onChange(e.target.value)} value={value} type="text" placeholder={placeholder} className="border-[1px] text-[var(--text-color)] border-[var(--border-input-opacity)] rounded-sm px-[8px] py-[8px] w-[240px]"/>
  )
}

export {SearchInput}
