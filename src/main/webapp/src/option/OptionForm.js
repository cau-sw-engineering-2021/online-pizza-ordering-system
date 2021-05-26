import React, { useState, useCallback, useMemo } from "react";
import InputSize from "./InputSize";
import SelectOption from "./SelectOption";
import { Button } from "@material-ui/core";

const dummyCartItem = {
  menuId: 1,
  menuImgSrc:
    "https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGl6emF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  menuName: "불고기 피자",
  quantity: 1, // 수량
  itemPrice: 10200, // 수량 하나 당 가격(피자 + 옵션)
  size: "L",
  options: ["치즈 추가", "콜라 1.25L"],
};

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
        onSubmit(dummyCartItem);
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
