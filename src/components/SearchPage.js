import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import AppointmentModal from './modals/AppointmentModal';
import DoctorsList from './lists/doctorsList';
import ClinicsList from './lists/clinicsList';

const useStyles = makeStyles((theme) =>({
    cardMedia:{
      minWidth: '150px',
      height: '200px'
    },
    cardContent:{
      flexGrow: 1
    },
    cardGrid:{
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4)
    }
}));

function SearchPage(data) {
    /*подтягиваю текст строки поиска*/
    let {keyword} = useParams();
    const classes = useStyles();
    
    return(
        <Container className={classes.cardGrid} maxWidth='lg'>
          <Typography variant='h3' align='center' color='textPrimary' gutterBottom>
            Результаты по запросу "{keyword}"
          </Typography>
          <Grid container spacing={4}>
            {/*Пробегаюсь по массиву докторов и фильтрую по подтянутому слову в именах и специализации*/}
            {data.doctors.filter(spec => spec.specification.includes(keyword) || spec.name.toLowerCase().includes(keyword.toLowerCase())).map((doctor) =>(
              <DoctorsList doctor={doctor} />
            ))}
          </Grid>

          <Grid container spacing={4}>
          {/*Также, пробегаюсь по массиву компаний и фильтрую по подтянутому слову в названиях и специализации*/}
          {data.clinics.filter(spec => spec.services.includes(keyword) || spec.name.toLowerCase().includes(keyword.toLowerCase())).map((clinic) =>(
              <ClinicsList clinic={clinic}/>
            ))}
          </Grid>
        </Container>

        
    );
}

export default SearchPage;