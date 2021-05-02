import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import ExperienceField from './ExperienceField';
import ProjectsField from './ProjectsField';
import EducationField from './EducationField';
import useStyles from '../styles/tabFile';

import db from '../util/db';

const TabFile = (props) => {
    const [data, setData] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        const dataRef = db.ref(props.topic);
        dataRef.on('value', (snapshot) => {
          const newData = snapshot.val();
          const newDataList = [];
          for (let id in newData) {
            newDataList.push({ id, ...newData[id] });
          }
          setData(newDataList);
        });
      }, []);
    return (
        <Grid container justify="center" spacing={2} className={classes.tabContainer}>
            <h2 className={classes.tabTitle}>{props.topic}</h2>
            <Grid container>
                {data.length && props.topic == "Experience"
                ? data.map((field, index) => <ExperienceField key={index} data={field}/>)
                : ''}

                {data.length && props.topic == "Projects"
                ? data.map((field, index) => <ProjectsField key={index} data={field}/>)
                : ''}

                {data.length && props.topic == "Education"
                ? data.map((field, index) => <EducationField key={index} data={field}/>)
                : ''}
            </Grid>
        </Grid>
    )
}

export default TabFile
