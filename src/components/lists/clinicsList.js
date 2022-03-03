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

function ClinicsList(data){
    const classes = useStyles();

    return(
        <Grid item key={data.clinic} xs={12} sm={12} md={12}>
            <Paper elevation={3}>
                <Box sx={{display: 'flex', padding: 20}} >
                    <CardMedia className={classes.cardMedia} image='https://source.unsplash.com/random' title='ImageTitle' />
                    <CardContent className={classes.cardContent}>
                        <Typography variant='h6' gutterBottom>
                            {data.clinic.name}
                        </Typography>
                        <Typography>
                            Профиль: {data.clinic.services.join(', ')}
                        </Typography>
                        <Typography>
                            Время работы: {data.clinic.workingHours}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <AppointmentModal></AppointmentModal>
                        <Button size='small' color='primary'>
                            <WhatsAppIcon /> WhatsApp
                        </Button>
                    </CardActions>
                </Box>
            </Paper>
        </Grid>
    );
}

export default ClinicsList;