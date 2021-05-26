import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import MenuItem from "./MenuItem";
import styled from "styled-components";
import { fetchMenuList } from "../util";

const MenuGrid = styled(Grid)`
  padding: 0;
  margin: 0 auto;
`;

function MenuList() {
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    fetchMenuList().then((json) => setMenuList(json.menuList));
  }, []);

  return (
    <main className="MenuList" style={{ maxWidth: 1280, margin: "0 auto" }}>
      <Typography variant="h3" align="center" style={{ margin: "1.5em 0" }}>
        Pizza Ordering System
      </Typography>

      <MenuGrid container spacing={2} className="menu-list">
        {menuList.map((menu) => (
          <MenuItem key={menu.id} menu={menu} />
        ))}
      </MenuGrid>
    </main>
  );
}

export default MenuList;
