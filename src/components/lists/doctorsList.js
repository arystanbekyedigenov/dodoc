import { Box, Button, CardActions, CardContent, CardMedia, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import * as React from 'react';
import AppointmentModal from '../modals/AppointmentModal';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const useStyles = makeStyles((theme) =>({
    cardMedia:{
      minWidth: '150px',
      height: '200px'
    },
    cardContent:{
      flexGrow: 1
    }
}));

function DoctorsList(data){
    const classes = useStyles();

    return(
        <Grid item key={data.doctor} xs={12} sm={12} md={12}>
            <Paper elevation={3}>
                <Box sx={{display: 'flex', padding: 20}} >
                    <CardMedia className={classes.cardMedia} image='https://source.unsplash.com/random' title='ImageTitle' />
                    <CardContent className={classes.cardContent}>
                        <Typography variant='h6' gutterBottom>
                            {data.doctor.name}
                        </Typography>
                        <Typography>
                            Профиль: {data.doctor.specification.join(', ')}
                        </Typography>
                        <Typography>
                            Адрес: {data.doctor.adress}
                        </Typography>
                        <Typography>
                            {data.doctor.description}
                        </Typography>
                    </CardContent>
                    <CardContent align='center'>
                        <Typography variant='p'>
                            Прием от
                        </Typography>
                        <Typography variant='h5'>
                            {data.doctor.price} тг.
                        </Typography>
                        <AppointmentModal></AppointmentModal>
                        <Button size='small' color='primary'><WhatsAppIcon /> WhatsApp</Button>
                    </CardContent>
                </Box>
            </Paper>
        </Grid>
    );
}

export default DoctorsList;