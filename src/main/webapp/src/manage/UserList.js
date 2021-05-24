import React, {useState} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {BorderColorSharp, DeleteForeverSharp} from '@material-ui/icons';
import {fetchUserList} from '../util/index';
import DeleteDialog from './DeleteDialog';

const UserList = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [userList, setUserList] = useState(null);
  const [id, setId] = useState(0);

  const handleClickOpen = (id) => {
    setDialogOpen(true);
    setId(id);
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

    try {
      fetchUserList().then(data => {
        console.log(data.userlist);
        setUserList(data.userlist);
      });
    } catch(e) {
        console.log(e);
    }

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
                  <TableCell>Name</TableCell>
                  <TableCell>Nickname</TableCell>
                  <TableCell> PhoneNum</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>E-mail</TableCell>
                 </TableRow>
              </TableHead>
              <TableBody>
                {userList.map((user) => (
                  <TableRow key={user.nickname}>
                     <TableCell component="th" scope="row">
                        {user.name}
                    </TableCell>
                    <TableCell align="right">{user.name}</TableCell>
                    <TableCell align="right">{user.nickname}</TableCell>
                    <TableCell align="right">{user.phoneNum}</TableCell>
                    <TableCell align="right">{user.address}</TableCell>
                    <TableCell align="right">{user.email}</TableCell>
                    <TableCell><BorderColorSharp /></TableCell>
                    <TableCell><DeleteForeverSharp onClick={handleClickOpen(user.id)}/></TableCell>
                   </TableRow>
                 ))}
               </TableBody>
            </Table>
           </TableContainer>
           <DeleteDialog open={dialogOpen} userId={id} handleClose={handleClose}/>
         <div>추가</div>
      </div>
  );
}

export default UserList;