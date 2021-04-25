import React from 'react'
import Grid from '@material-ui/core/Grid';

import useStyles from '../styles/field';
import Zendesk from '../img/Zendesk.jpg';
import Worthmore from '../img/worthmore.jpg';
import Goals from '../img/goals.png';
import Tradeshift from '../img/tradeshift.jpg';
import CA from '../img/copyrightAgent.png';
import Lokalist from '../img/lokalist.png';
import DGF from '../img/dgf.png';

const ExperienceField = (props) => {
    const classes = useStyles();
    const data = props.data;

    const selectImage = (company) => {
        if (company == 'Die Gute Fabrik') return <img src={DGF} className={classes.fieldImage}/>
        if (company == 'Zendesk') return <img src={Zendesk} className={classes.fieldImage}/>
        if (company == 'Worthmore') return <img src={Worthmore} className={classes.fieldImage}/>
        if (company == 'Tradeshift') return <img src={Tradeshift} className={classes.fieldImage}/>
        if (company == 'Goals Group ApS') return <img src={Goals} className={classes.fieldImage}/>
        if (company == 'Copyright Agent') return <img src={CA} className={classes.fieldImage}/>
        if (company == 'Lokalist') return <img src={Lokalist} className={classes.fieldImage}/>
    }

    return (
        <Grid container spacing={2} className={classes.fieldContainer}>
            <Grid item xs={12} md={4} className={classes.imageContainer}>
                {selectImage(data.company)}
            </Grid>
            <Grid item xs={12} md={8} className={classes.fieldData}>
                <p className={classes.title}>{data.title}</p>
                <p className={classes.company}>{data.company}</p>
                <p><em>{data.period}</em></p>
                <p>{data.description}</p>
                <p>Find their website <a href={data.link} target={'_blank'}>here.</a></p>
            </Grid>
        </Grid>
    )
}

export default ExperienceField;
