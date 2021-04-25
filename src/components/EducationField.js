import React from 'react'
import Grid from '@material-ui/core/Grid';

import useStyles from '../styles/field';
import ITU from '../img/itu.jpg';
import KEA from '../img/kea.png';

const EducationField = (props) => {
    const classes = useStyles();
    const data = props.data;

    const selectImage = (index) => {
        if (index == 1) return <img src={ITU} className={classes.educationImage}/>
        if (index == 2) return <img src={KEA} className={classes.educationImage}/>

    }

    return (
        <Grid container className={classes.educationContainer}>
            <div className={classes.imageContainer}>
                {selectImage(data.id)}
            </div>
            <p className={classes.title}>{data.title}</p>
            <p>{data.period}</p>
            <p>{data.school}</p>
        </Grid>
    )
}

export default EducationField;
