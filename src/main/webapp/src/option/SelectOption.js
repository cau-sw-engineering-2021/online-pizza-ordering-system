import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import styled from "styled-components";

const SelectBox = styled(Select)`
  display: block;
`;

function SelectOption({ option, value, onSelect }) {
  return (
    <FormControl fullWidth={true}>
      <InputLabel id="option-select-label">{option.name}</InputLabel>
      <SelectBox
        labelId="option-select-label"
        value={value ? value : ""}
        onChange={(e) => onSelect(option.id, e.target.value)}
      >
        <MenuItem key={-1} value={null}>
          선택해주세요
        </MenuItem>
        {option.values.map((v) => (
          <MenuItem key={v.id} value={v.id}>
            {v.name} (+{v.price}원)
          </MenuItem>
        ))}
      </SelectBox>
    </FormControl>
  );
}

export default SelectOption;
