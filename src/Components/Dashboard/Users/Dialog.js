import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Container } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function InfoDialogSlide(props) {

  const handleClose = () => {
    props.openUserDetailsDialog(false)
  };

  return (
    <React.Fragment>
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{props.user.firstName}'s Details</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          <Container component="main" maxWidth="xs">
            <div>ID: {props.user.id}</div>
            <div>First Name: {props.user.firstName}</div>
            <div>Last Name: {props.user.lastName}</div>
            <div>Age: {props.user.age}</div>
            </Container>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}