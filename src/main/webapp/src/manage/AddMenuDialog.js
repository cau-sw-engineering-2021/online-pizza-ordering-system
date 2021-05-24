import React, {useState} from 'react';
import styled from 'styled-components';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
}
from '@material-ui/core';
import {AddMenu} from '../util/index';

const MenuImg = styled.img`
  display: block;
  width: 80%;
`;

const AddMenuDialog = ({open, handleClose}) => {

  const [inputs, setInputs] = useState({
      name: "",
      largePrice: 0,
      mediumPrice: 0,
      smallPrice: 0,
      imgUrl: "",
  });

  const {name, largePrice, mediumPrice, smallPrice, imgUrl} = inputs;

  const onAddClick = (menuData) => {
    try {
      AddMenu(menuData).then(data => {
        console.log(data);
        handleClose();
      })
    } catch (e) {
        console.log(e);
    }
    resetInput();
  };

  const onChange = (e) => {
      const { value, id } = e.target;
      setInputs({
          ...inputs,
          [id]: value
      });
  };

  const resetInput = () => {
    setInputs({
      name: "",
      largePrice: 0,
      mediumPrice: 0,
      smallPrice: 0,
      imgUrl: "",
    })
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Add menu"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please input menu info in right form.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            onChange={onChange}
            value={name}
            fullWidth
            />
            <TextField
            autoFocus
            margin="dense"
            id="largePrice"
            label="Large size price"
            type="number"
            onChange={onChange}
            value={largePrice}
            fullWidth
            />
            <TextField
            autoFocus
            margin="dense"
            id="mediumPrice"
            label="Medium size price"
            type="number"
            onChange={onChange}
            value={mediumPrice}
            fullWidth
            />
            <TextField
            autoFocus
            margin="dense"
            id="smallPrice"
            label="Small size price"
            type="number"
            onChange={onChange}
            value={smallPrice}
            fullWidth
            />
            <TextField
            autoFocus
            margin="dense"
            id="imgUrl"
            label="Image URL"
            type="url"
            onChange={onChange}
            value={imgUrl}
            fullWidth
            />
            <MenuImg src={imgUrl} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            NO
          </Button>
          <Button onClick={() => {onAddClick(inputs)}} color="primary" autoFocus>
            YES
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddMenuDialog;