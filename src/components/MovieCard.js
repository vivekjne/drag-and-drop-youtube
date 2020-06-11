import React from 'react'

import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating'


const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
 
      width:'100%',
      height:190,
      marginBottom:theme.spacing(4)
    },
    details: {
      display: 'flex',
      flexGrow:1,
      flexDirection: 'column',
      
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 180,
    },
    controls: {
      display: 'flex',
      flexDirection:'column',
    
      
    },
  
}))

const MovieCard = ({movie})=>{
    const classes = useStyles()
    return(
        <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
             {movie.name}
            </Typography>
            {/* <Typography variant="subtitle1" color="textSecondary">
              Mac Miller
            </Typography> */}
          </CardContent>
          <div className={classes.controls}>
          <Box component="fieldset" mb={3} mt={3} borderColor="transparent">
        <Typography component="legend">{movie.rating}</Typography>
            <Rating name="read-only" value={movie.stars} />
        </Box>
          </div>
        </div>
        <CardMedia
          className={classes.cover}
          image={movie.image}
          title="Live from space album cover"
        />
      </Card>
    )
}

export default MovieCard