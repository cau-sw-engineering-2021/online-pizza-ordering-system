import React from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@material-ui/core";

function InputSize({ label, sizes, prices, value, onChange }) {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup
        aria-label="size"
        name="size"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {sizes.map((size) => (
          <FormControlLabel
            key={size}
            value={size}
            control={<Radio />}
            label={size + " - " + prices[size] + "원"}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default InputSize;
