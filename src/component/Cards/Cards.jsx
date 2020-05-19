import React from 'react';
import {Card,CardContent,Grid,Typography} from '@material-ui/core';
import CountUp from 'react-countup';
//import styles from './Cards.module.css';


const Cards=({data:{confirmed,recovered,deaths,lastUpdate}})=>{
  if(!confirmed){
    return 'Loading...';
  }
  return(
    <div>
    <Grid container spacing={4} justify="center" >
      <Grid item xs={12} md={3} component={Card} >
          <CardContent>
            <Typography   color="textSecondary" gutterBottom>Infected</Typography>
            <Typography  variant="h5">
              <CountUp start={0} end={confirmed.value} duration={2.5} separator=","></CountUp>
              </Typography>
            <Typography  color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography  variant="body2">Number of active case</Typography>
          </CardContent>
      </Grid>
      <Grid item xs={12} md={3} component={Card}>
          <CardContent>
            <Typography   color="textSecondary" gutterBottom>Recovered</Typography>
            <Typography  variant="h5">
              <CountUp start={0} end={recovered.value} duration={2.5} separator=","></CountUp>
              </Typography>
            <Typography  color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
             <Typography  variant="body2">Number of Recovered</Typography>
          </CardContent>
      </Grid>
      <Grid item xs={12} md={3} component={Card} >
          <CardContent>
            <Typography   color="textSecondary" gutterBottom>Death</Typography>
            <Typography  variant="h5">
              <CountUp start={0} end={deaths.value} duration={2.5} separator=","></CountUp>
              </Typography>
            <Typography  color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
              <Typography  variant="body2">Number of Death</Typography>
          </CardContent>
      </Grid>
    </Grid>
    </div>
  )
}

export default Cards;
