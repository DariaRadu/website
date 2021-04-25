import React from 'react'
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

import useStyles from '../styles/header';
import profilePicture from '../img/profile.jpg'

const Header = () => {
    const classes = useStyles();
    return (
        <Grid container justify="center" spacing={4} className={classes.profileHeader}>
			<Grid item xs={12} md={6} className={classes.aboutMe}>
				<h1>Hi, I am Daria.</h1>
				<div className={classes.profileDescription}>
					<p>Software Engineer, Game Developer with a passion for Machine Learning. Avid traveller and wannabe dancer.</p>
					<p>Want to contact me or see how I coded this website (plus other fun projects)?</p>
					<p>Want to see how I coded this website (plus other fun projects)? Find me at dariaradur3@gmail.com (or the links below!)</p>
				</div>
				<div className={classes.icons}>
					<a className={classes.iconLink} href={'https://www.linkedin.com/in/dariaradu/'} target={'_blank'}>
						<LinkedInIcon className={classes.icon}/>
					</a>
					<a className={classes.iconLink} href={'https://github.com/DariaRadu'} target={'_blank'}>
						<GitHubIcon className={classes.icon}/>
					</a>
					<a className={classes.iconLink} href={'https://twitter.com/sparklesdaria'} target={'_blank'}>
						<TwitterIcon className={classes.icon}/>
					</a>
				</div>
			</Grid>
			<Grid item xs={12} md={6}>
				<img src={profilePicture} className={classes.profile} alt="profile" />
			</Grid>
        </Grid>
    )
}

export default Header
