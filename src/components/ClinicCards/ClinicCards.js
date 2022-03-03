import * as React from 'react';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import AppointmentModal from '../modals/AppointmentModal';

const useStyles = makeStyles((theme) =>({
    cardMedia:{
      paddingTop: '56.25%'
    },
    cardContent:{
      flexGrow: 1
    },
    cardGrid:{
      marginTop: theme.spacing(4)
    }
}));

function ClinicCards(data){
    const classes = useStyles();

    return(
        <Grid item key={data.clinic} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
            <CardMedia className={classes.cardMedia} image='https://source.unsplash.com/random' title='ImageTitle' />
            <CardContent className={classes.cardContent}>
                <Typography variant='h6' gutterBottom>
                    {data.clinic.name}
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
            </Card>
        </Grid>
    );
}

export default ClinicCards;