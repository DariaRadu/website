import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

import useStyles from '../styles/header';

const Header = () => {
    const classes = useStyles();
    return (
		<React.Fragment>
			<header className={classes.bgImage}>
				<h1 className={classes.title}>Hi, I am Daria.</h1>
				<h2>Software Engineer, Game Developer with a passion for Machine Learning. Avid traveller and wannabe dancer.</h2>
				<div className={classes.profileDescription}>
					<p>Want to contact me or see how I coded this website (plus other fun projects)? Find me on any of the platforms below!</p>
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
			</header>
		</React.Fragment>
    )
}

export default Header
