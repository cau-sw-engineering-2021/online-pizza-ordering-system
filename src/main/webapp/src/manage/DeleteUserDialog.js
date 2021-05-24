import React from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle}
from '@material-ui/core';
import {deleteUser} from '../util/index';

const DeleteUserDialog = ({open, userNickname, handleClose}) => {
  
  const onDeleteClick = (id) => {
    try {
      console.log(id);
      deleteUser(id).then(data => {
        console.log(data);
      })
    } catch (e) {
        console.log(e);
    }
    handleClose();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Dialog"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            정말로 사용자를 삭제하시겠습니까?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            NO
          </Button>
          <Button onClick={() => {console.log(userNickname); onDeleteClick(userNickname)}} color="primary" autoFocus>
            YES
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DeleteUserDialog;