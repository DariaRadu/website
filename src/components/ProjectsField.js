import React from 'react'
import Grid from '@material-ui/core/Grid';

import useStyles from '../styles/field';
import ForestDaemons from '../img/forestDaemons.png';
import Settings from '../img/settings.png';
import MM from '../img/mm.png';
import IRTCD from '../img/irtcd.png';

const ProjectsField = (props) => {
    const classes = useStyles();
    const data = props.data;

    const selectImage = (title) => {
        if (title == 'Forest Daemons') return <img src={ForestDaemons} className={classes.projectImage}/>
        if (title == 'Settings: The Game') return <img src={Settings} className={classes.projectImage}/>
        if (title == 'Motion Matching') return <img src={MM} className={classes.projectImage}/>
        if (title == 'Iterative Ray-Traced Collision Detection') return <img src={IRTCD} className={classes.projectImage}/>
    }

    return (
        <Grid container spacing={2} className={classes.fieldContainer}>
            <Grid item xs={12} sm={7} className={classes.fieldData}>
                <p className={classes.title}>{data.title}</p>
                <p>{data.description}</p>
                <p>Find the project <a href={data.link} target={'_blank'}>here.</a></p>
            </Grid>
            <Grid item xs={12} sm={5}>
                {selectImage(data.title)}
            </Grid>
        </Grid>
    )
}

export default ProjectsField;
