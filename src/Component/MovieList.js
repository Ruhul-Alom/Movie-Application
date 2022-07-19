import { ClassNames } from "@emotion/react";
import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import MovieInfo from "./MovieInfo";
import movieData  from "./moviesData";

const MovieList=(props)=>{
    const [movieInfo,setMovieInfo]=useState([]);
    // const url=`http://www.omdbapi.com/?i=tt3896198&apikey=79555010`
//   fetch(`https://movie-database-alternative.p.rapidapi.com/`)
//   .then(data=>data.json())
// //   .then(data=>setMovieInfo(data))
// .then(data=>console.log(data))
return(
  <Grid container >

  { props.movies.map(movie=><MovieInfo movie={movie}/>)}
  </Grid>


);
}
export default MovieList