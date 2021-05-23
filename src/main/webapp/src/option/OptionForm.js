import React, { useState, useCallback, useMemo } from "react";
import InputSize from "./InputSize";
import SelectOption from "./SelectOption";
import { Button } from "@material-ui/core";

function OptionForm({ menu, onSubmit }) {
  const [size, setSize] = useState(menu.size[0]);
  const [values, setValues] = useState([]);

  const handleSizeChange = useCallback((v) => setSize(v), []);
  const handleOptionSelect = useCallback(
    (id, value) => {
      setValues(values.filter((v) => v.id !== id).concat({ id, value }));
    },
    [values]
  );

  const price = useMemo(() => {
    let ret = 0;
    ret += menu.price[size];

    values.forEach((v) => {
      const option = menu.options.find((op) => v.id === op.id);

      if (option) {
        const selected = option.values.find((val) => val.id === v.value);
        if (selected) {
          ret += selected.price;
        }
      }
    });

    return ret;
  }, [menu, size, values]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ size, values });
      }}
    >
      <InputSize
        label="사이즈"
        sizes={menu.size}
        prices={menu.price}
        value={size}
        onChange={handleSizeChange}
      />
      {menu.options.map((option) => (
        <SelectOption
          key={option.id}
          option={option}
          value={values.find((v) => v.id === option.id)?.value}
          onSelect={handleOptionSelect}
        />
      ))}

      <p>총 가격 : {price}원</p>

      <Button type="submit" variant="contained" color="primary">
        장바구니 담기
      </Button>
    </form>
  );
}

export default OptionForm;
