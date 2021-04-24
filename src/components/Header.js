import React from 'react'
import Grid from '@material-ui/core/Grid';

import useStyles from '../styles/header';
import profilePicture from '../img/profile.jpg'

const Header = () => {
    const classes = useStyles();
    return (
        <Grid container justify="center" spacing={2} className={classes.profileHeader}>
			<Grid item xs={12} sm={6} className={classes.aboutMe}>
				<h1>Hi, I am Daria.</h1>
				<p>Software Engineer, Game Developer with a passion for Machine Learning. Avid traveller and wannabe dancer.</p>
			</Grid>
			<Grid item xs={12} sm={6}>
				<img src={profilePicture} className={classes.profile} alt="profile" />
			</Grid>
        </Grid>
    )
}

export default Header
