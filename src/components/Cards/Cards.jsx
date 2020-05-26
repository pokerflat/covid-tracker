import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    if (!confirmed) {
        return 'loading';
    }
    return (
        <div className={styles.container}>
            <Grid container  spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom >Заболело</Typography>
                        <Typography variant="h5">
                            <CountUp 
                              start={0}
                              end={confirmed.value}
                              duration={2.5}
                              separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Кол-во зарегистрированных больных</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom >Вылечилось</Typography>
                        <Typography variant="h5">
                            <CountUp 
                              start={0}
                              end={recovered.value}
                              duration={2.5}
                              separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Количество вылечившихся</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom >Умерло</Typography>
                        <Typography variant="h5">
                            <CountUp 
                              start={0}
                              end={deaths.value}
                              duration={2.5}
                              separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Количество смертей</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;