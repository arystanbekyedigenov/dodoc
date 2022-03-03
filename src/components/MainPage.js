import { Button, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import * as React from 'react';
import {useNavigate} from 'react-router-dom';

import SearchBlock from './SearchBlock/SearchBlock';
import ClinicCards from './ClinicCards/ClinicCards';

const useStyles = makeStyles((theme) =>({
    marginBottom:{
      marginBottom: theme.spacing(4)
    }
}));

const MainPage = (data)=> {
    const classes = useStyles();
    let navigate = useNavigate();
    
    return(
      <main className={classes.marginBottom}>
        {/*Отделил блок поиска в отдельный файл*/}
        <SearchBlock specialists={data.specialists}/>

        <Container maxWidth='sm'>
          <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
            Популярные услуги
          </Typography>
          <div>
            <Grid container spacing={1} justify='center'>
              {data.servicesList.map((service) =>(
                <Grid item>
                  <Button variant='outlined' color='primary' onClick={()=>{navigate(`/SearchPage/${service}`)}}>{service}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </div>
        </Container>

        <Container maxWidth='md'>
          <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
            Клиники г.Нур-Султан
          </Typography>
          <Grid container spacing={4}>
            {data.clinics.map((clinic) =>(
              /*Отделил карточки в отдельный файл*/
              <ClinicCards clinic={clinic}/>
            ))}
          </Grid>
        </Container>
      </main>
    );
}

export default MainPage;