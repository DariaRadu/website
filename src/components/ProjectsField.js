import React from 'react'
import Grid from '@material-ui/core/Grid';

import useStyles from '../styles/field';
import ForestDaemons from '../img/forestDaemons.jpg';
import Settings from '../img/settings.jpg';
import MM from '../img/mm.png';
import IRTCD from '../img/irtcd.png';
import Brick from '../img/bricks.png';

const ProjectsField = (props) => {
    const classes = useStyles();
    const data = props.data;

    const selectImage = (title) => {
        if (title == 'Forest Daemons') return <img src={ForestDaemons} className={classes.projectImage}/>
        if (title == 'Settings: The Game') return <img src={Settings} className={classes.projectImage}/>
        if (title == 'Motion Matching') return <img src={MM} className={classes.projectImage}/>
        if (title == 'Iterative Ray-Traced Collision Detection') return <img src={IRTCD} className={classes.projectImage}/>
        if (title == 'Brick and Roll') return <img src={Brick} className={classes.projectImage}/>
    }

    return (
        <Grid item sm={12} md={6} xl={4} spacing={2} className={classes.fieldContainer}>
            {selectImage(data.title)}
            <p className={classes.title}>{data.title}</p>
            <p>{data.description}</p>
            <p>Find the project <a href={data.link} target={'_blank'}>here.</a></p>
        </Grid>
    )
}

export default ProjectsField;
