import React from "react"

import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core"

export default function SelectFilter({
  label,
  name,
  value,
  onChange,
  options,
}) {
  return (
    <FormControl variant="outlined" size="medium">
      <InputLabel>{label}</InputLabel>
      <Select name={name} value={value} onChange={onChange} label={label}>
        {options !== null &&
          options.map((option, index) => (
            <MenuItem value={option.value} key={index}>
              {option.value}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  )
}
