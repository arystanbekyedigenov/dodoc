import { BottomNavigation, BottomNavigationAction, Typography } from '@material-ui/core';
import * as React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles((theme) =>({
    root:{
        flexGrow: 1,
        background: '#d8d8d8'
    },
    bgDark:{
        background: '#d8d8d8'
    }

  }));

const Footer = ()=> {
    const classes = useStyles();

    const [value, setValue] = React.useState('recents');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <footer className={classes.bgDark}>
            <Typography variant='h2' align='center' gutterBottom>Footer</Typography>
            <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
                <BottomNavigationAction label='Recents' value='recents' icon={<RestoreIcon />} />
                <BottomNavigationAction label='Favorites' value='favorites' icon={<FavoriteIcon />} />
                <BottomNavigationAction label='Nearby' value='nearby' icon={<LocationOnIcon />} />
                <BottomNavigationAction label='Folder' value='folder' icon={<FolderIcon />} />
            </BottomNavigation>

            <Typography align='center' color='textSecondary' component='p' variant='subtitle1'>
                © 2016 - 2022 DoDoc
            </Typography>
        </footer>
    );
}

export default Footer;