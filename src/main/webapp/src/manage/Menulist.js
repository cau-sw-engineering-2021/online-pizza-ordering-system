import React, {useEffect, useState, useEffect} from 'react';
import styled from 'styled-components';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {BorderColorSharp, DeleteForeverSharp} from '@material-ui/icons';
import {fetchMenuList} from '../util/index';

/*function createData(name, phone, role) {
  return { name, phone, role };
}

const rows = [
  createData('Frozen yoghurt', 159, 4.0),
  createData('Ice cream sandwich', 237, 9.0),
  createData('Eclair', 262, 16.0),
  createData('Cupcake', 305, 3.7),
  createData('Gingerbread', 356, 16.0),
];

const Userlist = () => {

    const [userList, setUserList] = useState(null);

    useEffect(() => {
      try {
        fetchUserList.then(data => {
          console.log(data);
          setUserList(data);
        })
      } catch(e) {
        console.log(e);
      }
    }, []);
    if (!userList) {
      return null;
    }
    return (
        <div>
          <div>
              <span>User Management</span>
          </div>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>이름</TableCell>
                    <TableCell>번호</TableCell>
                    <TableCell>Role</TableCell>
                    <TableCell>  </TableCell>
                    <TableCell>  </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {userList.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{user.name}</TableCell>
                      <TableCell align="right">{user.phone}</TableCell>
                      <TableCell align="right">{user.role}</TableCell>
                      <TableCell><BorderColorSharp /></TableCell>
                      <TableCell><DeleteForeverSharp /></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <div>추가</div>
        </div>
    );
}

export default Userlist;*/

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
      const dummy = {
        id: 1,
        name: "포테이토 피자",
        price: 20000,
        size: "L",
        detail: "No Bread",
        imgLocation: "", 
      }
    return (
        <div>
            <Button onClick= {} />
        </div>
    )
}

