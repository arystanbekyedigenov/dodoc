import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@material-ui/core';
import * as React from 'react';

function AppointmentModal(){

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(
        <>
            <Button variant='outlined' color='primary' onClick={handleClickOpen}>Записаться</Button>

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
        </>
    );
}

export default AppointmentModal;