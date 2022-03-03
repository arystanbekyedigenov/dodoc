import { Button, Container, Grid, makeStyles, Paper, styled, TextField, Typography } from '@material-ui/core';
import { Autocomplete } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import bgImg from '../img/index-first-screen_new.jpg';

const useStyles = makeStyles((theme) =>({
    mainFeaturesPost:{
      position:'relative',
      color: theme.palette.common.white,
      marginBottom: theme.spacing(4),
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    },
    overlay:{
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      backgroundOverlay: 'rgba(0,0,0,.3)'
    },
    mainFeaturePostContent:{
      position: 'relative',
      padding: theme.spacing(10),
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(10)
    }
}));

const StyledTextField = styled(TextField)({
    '& .MuiInputBase-root': {
        background: 'white',
    },
});

function SearchBlock(data){
    const classes = useStyles();
    let navigate = useNavigate();

    const [specialist, setSpecialist] = React.useState();

    return(
        <Paper className={classes.mainFeaturesPost} style={{background:`url(${bgImg})`}}>
          <Container fixed>
            <div className={classes.overlay} />
            <Grid container md={12}>
              <Grid item md={12}>
                <div className={classes.mainFeaturePostContent}>
                  <Typography component='h1' variant='h2' color='inherit' gutterBottom>
                    Поиск врача в Нур-Султане
                  </Typography>
                  <Grid container spacing={2} justify='center'>
                    <Grid item md={9} lg={9} xs={9}>
                      <Autocomplete freeSolo disableClearable id="combo-box-demo" options={data.specialists} 
                        value={specialist} 
                        onChange={(event, newValue) => {
                            setSpecialist(newValue);
                        }}
                        onInput={(event) =>{
                            setSpecialist(event.target.value);
                        }}
                        renderInput={(params) => <StyledTextField variant="outlined" {...params} label="Искать"/>}
                      />
                    </Grid>
                    <Grid item md={3} lg={3} xs={3}>
                    <Button variant='contained' 
                            color='secondary' 
                            style={{height:'50px' }}
                            onClick={()=>{
                              navigate(`/SearchPage/${specialist}`)
                            }}
                            >Искать
                    </Button>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
    );
}

export default SearchBlock;