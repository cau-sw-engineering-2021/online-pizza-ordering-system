import React, {useEffect, useState} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {BorderColorSharp, DeleteForeverSharp} from '@material-ui/icons';
import {fetchMenuList, AddMenu} from '../util/index';

const Dummy = {
  id: 1,
  name: "포테이토 피자",
  price: 20000,
  size: "L",
  detail: "No Bread",
  imgLocation: "https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGl6emF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
};

const Menulist = () => {

    const [menuList, setMenuList] = useState(null);

    useEffect(() => {
      try {
        fetchMenuList.then(data => {
          console.log(data);
          setMenuList(data);
        })
      } catch(e) {
        console.log(e);
      }
    }, []);
    if (!menuList) {
      return null;
    }
    return (
        <div>
          <div>
              <span>Pizza Management</span>
          </div>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>이름</TableCell>
                    <TableCell>사이즈</TableCell>
                    <TableCell>가격</TableCell>
                    <TableCell></TableCell>
                    <TableCell>  </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {menuList.map((menu) => (
                    <TableRow key={menu.id}>
                      <TableCell component="th" scope="row">
                        {menu.name}
                      </TableCell>
                      <TableCell align="right">{menu.name}</TableCell>
                      <TableCell align="right">{menu.price}</TableCell>
                      <TableCell align="right">{menu.size}</TableCell>
                      <TableCell><BorderColorSharp /></TableCell>
                      <TableCell><DeleteForeverSharp /></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <div>
              <Button onClick = {AddMenu({...Dummy})}>추가</Button>
            </div>
        </div>
    );
}

export default Menulist;