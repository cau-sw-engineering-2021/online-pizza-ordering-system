import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Typography} from '@material-ui/core';
import {BorderColorSharp, DeleteForeverSharp} from '@material-ui/icons';
import {fetchUserList} from '../util/index';
import DeleteUserDialog from './DeleteUserDialog';

const Header = styled.div`
maxWidth: 1280px;
margin: 0 auto;
display: flex;
justify-content: center;
align-items:  center;
font: 30px bold sans-serif;
`

const UserList = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [userList, setUserList] = useState([]);
  const [id, setId] = useState("");

  const handleClickOpen = (id) => {
    setDialogOpen(true);
    setId(id);
  };

  const handleClose = () => {
    fetchUserList().then(data => {
      setUserList(data.userlist);
      setDialogOpen(false);
    });
  };


  useEffect(() => {
    fetchUserList().then(data => {
      console.log(data.userlist);
      setUserList(data.userlist);
    });
  },[]);

  return (
      <div>
        <Header>
          <Typography variant="h4" align="center" style={{ margin: "1em 0" }}>
            User Management
          </Typography>
        </Header>
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
                    <TableCell>{user.nickname}</TableCell>
                    <TableCell>{user.phoneNum}</TableCell>
                    <TableCell>{user.address}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell><BorderColorSharp /></TableCell>
                    <TableCell><DeleteForeverSharp onClick={() => {console.log(user.nickname);handleClickOpen(user.nickname)}}/></TableCell>
                   </TableRow>
                 ))}
               </TableBody>
            </Table>
           </TableContainer>
           <DeleteUserDialog open={dialogOpen} userNickname={id} handleClose={handleClose}/>
      </div>
  );
}

export default UserList;