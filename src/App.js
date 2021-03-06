import React, { Suspense } from 'react'

import './app.css'
import useStyles from './styles/app';
import Grid from '@material-ui/core/Grid';
import Header from './components/Header';
import TabMenu from './components/TabMenu';

// const Header = React.lazy(() => import('./components/Header'));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <Header/>
      <Grid container className={classes.tabMenu}>
        <TabMenu/>
      </Grid>
      
    </div>
  )
}

export default App
