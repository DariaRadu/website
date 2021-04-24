import React from 'react'
import Grid from '@material-ui/core/Grid';

import useStyles from '../styles/tabFile';

import db from '../util/db';

const TabFile = (props) => {
    const classes = useStyles();
    return (
        <Grid container justify="center" spacing={2}>
            <h2>{props.topic}</h2>
            <Grid container>
                <Grid item xs={12} sm={6}>Test1</Grid>
                <Grid item xs={12} sm={6}>Test2</Grid>
            </Grid>
        </Grid>
    )
}

export default TabFile
