import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import MovieList from './Component/MovieList';
import MovieInfo from './Component/MovieInfo';

function App() {
  const [movieInfo,setMovieInfo]=useState([]);
  const [text,setText]=useState("")
 const onChange=(e)=>{
  e.preventDefault();
  const value=e.target.value;
  setText(value);
 }

  const searchMovie=(e)=>{
    e.preventDefault();
    if (text === "") {
      alert("Please enter something!");
    } else {
      // alert(text);
      const url=`http://www.omdbapi.com/?s=${text}&apikey=79555010`
      fetch(url)
      .then(data=>data.json())
      .then(data=>setMovieInfo(data['Search']))
    // .then(data=>console.log(data))
    console.log(movieInfo);
      setText("");
    }


  }
  return (
    <div className="App">
      <form  style={{width:'100%',backgroundColor:'green'}} onSubmit={searchMovie} >
        <input type="text"  value={text} onChange={onChange} style={{width:'80%',padding:'10px'}} />
        <button type='submit'style={{width:'10%',padding:'10px'}}>submit</button>
      </form>
      {movieInfo.map(movies=><MovieInfo movies={movies}/>)}
    </div>
  );
}

export default App;
