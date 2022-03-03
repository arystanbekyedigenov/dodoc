import * as React from 'react';
import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {useNavigate} from 'react-router-dom';
import AppointmentModal from '../modals/AppointmentModal';

import logo from '../img/new_logo_default.svg';

const useStyles = makeStyles((theme) =>({
    title:{
        flexGrow: 1
      },
    imgButton:{
      width: '120px',
      height: '50px',
      backgroundRepeat: 'no-repeat'
    }
  }));

const Header = ()=> {
    const classes = useStyles();
    let navigate = useNavigate();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(
      <Container fixed>
        <Toolbar>
          <Button className={classes.imgButton} onClick={()=>{navigate(`/`)}}>
            <img src={logo} alt='logo'/>
          </Button>
          <Typography variant='h6' className={classes.title}></Typography>
          <AppointmentModal></AppointmentModal>
          {/* <Box mr={3}>
            <Button color='secondary' variant='contained' onClick={handleClickOpen}>Оставить заявку</Button>

            <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
              <DialogTitle id='form-dialog-title'>Заявка</DialogTitle>
              <DialogContent>
                <DialogContentText>Заполните форму</DialogContentText>
                <TextField
                          autoFocus
                          margin='dense'
                          id='name'
                          label='Ф.И.О'
                          type='name'
                          fullWidth 
                />
                <TextField
                          autoFocus
                          margin='dense'
                          id='phone'
                          label='Ваш телефон'
                          type='phone'
                          fullWidth 
                />
                <TextField
                          autoFocus
                          margin='dense'
                          id='description'
                          label='Опишите Вашу проблему'
                          type='description'
                          fullWidth 
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color='primary'>Отмена</Button>
                <Button onClick={handleClose} color='primary'>Оставить заявку</Button>
              </DialogActions>
            </Dialog>
          </Box> */}
        </Toolbar>
      </Container>
    );
}

export default Header;