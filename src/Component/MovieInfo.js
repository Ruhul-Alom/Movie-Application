import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Rating from 'react-rating';

 const MovieInfo=(props) =>{
  const{Title,Year,Director,Poster,Plot,Ratings}=props.movies;
  // const {imdbRating}=props.movies.Ratings['Source']
  console.log(Ratings);
  
  console.log(props.movies);
  return (
    <Card sx={{ maxWidth: 345 }} spaceing={10}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Poster}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
    {Title}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
    {Year}
          </Typography>
          <Rating initialRating={Ratings}></Rating>
          <Typography gutterBottom variant="h5" component="div">
    {Plot}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
export default MovieInfo