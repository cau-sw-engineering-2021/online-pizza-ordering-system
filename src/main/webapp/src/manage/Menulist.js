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
import {fetchMenuList} from '../util/index';
import AddMenuDialog from './AddMenuDialog';

const Menulist = () => {

  const [dialogOpen, setDialogOpen] = useState(false);
  const [menuList, setMenuList] = useState([]);

  const handleClickOpen = () => {
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

    useEffect(() => {
        fetchMenuList().then(data => {
          console.log(data.menulist);
          setMenuList(data.menulist);
        })
      },[dialogOpen]);

    return (
        <div>
          <div>
              <span>Pizza Management</span>
          </div>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>LargePrice</TableCell>
                    <TableCell>MediumPrice</TableCell>
                    <TableCell>SmallPrice</TableCell>
                    <TableCell>ImgUrl</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {menuList.map((menu) => (
                    <TableRow key={menu.name}>
                      <TableCell component="th" scope="row">
                        {menu.name}
                      </TableCell>
                      <TableCell>{menu.largeprice}</TableCell>
                      <TableCell>{menu.mediumprice}</TableCell>
                      <TableCell>{menu.smallprice}</TableCell>
                      <TableCell>{menu.imgUrl}</TableCell>
                      <TableCell><BorderColorSharp /></TableCell>
                      <TableCell><DeleteForeverSharp /></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <div>
              <Button onClick = {() => {handleClickOpen()}}>추가</Button>
            </div>
            <AddMenuDialog open={dialogOpen} handleClose={handleClose}/>
        </div>
    );
}

export default Menulist;