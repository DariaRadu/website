import React, { Suspense } from 'react'
import './app.css'
import useStyles from './styles/app';
import Grid from '@material-ui/core/Grid';

const Header = React.lazy(() => import('./components/Header'));
const TabMenu = React.lazy(() => import('./components/TabMenu'));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <Suspense fallback={<div></div>}>
        <Header/>
      </Suspense>
      <Grid container className={classes.tabMenu}>
        <Suspense fallback={<div></div>}>
          <TabMenu/>
        </Suspense>
      </Grid>
      
    </div>
  )
}

export default App
