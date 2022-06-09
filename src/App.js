// import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {AddColor} from "./AddColor";
import { Routes, Route, Link, Navigate, useParams, useNavigate } from "react-router-dom";
import { MovieCard } from './MovieCard';
import { MovieAdditionForm } from './MovieAdditionForm';
import Button from '@mui/material/Button';
const mveinf = [
  {
    imgg : "https://wallpaperaccess.com/full/1266291.jpg",
    namee : "Titanic",
    ratingg : 7.9,
    contentt : "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    trailerr : "https://www.youtube.com/embed/kVrqfYjkTdQ"
  },
  {
    imgg : "https://www.xtrafondos.com/descargar.php?id=2728&vertical=1",
    namee : "Ben-Hur",
    ratingg : 8.1,
    contentt : "After a Jewish prince is betrayed and sent into slavery by a Roman friend in 1st-century Jerusalem, he regains his freedom and comes back for revenge.",
    trailerr : "https://www.youtube.com/embed/NR1ZHKw09n8"
  },
  {
    imgg : "https://static.toiimg.com/photo/msid-5348868/5348868.jpg?26276",
    namee : "Avatar",
    ratingg : 7.8,
    contentt : "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home. ",
    trailerr : "https://www.youtube.com/embed/5PSNL1qE6VY"
  },
  {
    imgg : "https://i.pinimg.com/originals/6b/40/c5/6b40c5d03dfce1084dea4829bc7310a1.jpg",
    namee : "Harry Potter and the Goblet of Fire",
    ratingg : 7.7,
    contentt : "Harry Potter finds himself competing in a hazardous tournament between rival schools of magic, but he is distracted by recurring nightmares.",
    trailerr : "https://www.youtube.com/embed/7lJ6Suyp1ok"
  },
  {
    imgg : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
    namee : "The Avengers",
    ratingg : 8,
    contentt : "Marvel's The Avengers (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland), or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name.",
    trailerr : "https://www.youtube.com/embed/eOrNdBpGMv8"
  },
  {
    imgg : "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
    namee : "Baahubali",
    ratingg : 8,
    contentt : "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
    trailerr : "https://www.youtube.com/embed/sOEg_YZQsTI"
  },
  {
    imgg : "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
    namee : "Interstellar",
    ratingg : 8.6,
    contentt : "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
    trailerr : "https://www.youtube.com/embed/zSWdZVtXT7E"
  },
  {
    imgg : "https://stat1.bollywoodhungama.in/wp-content/uploads/2021/10/Pushpa.jpeg",
    namee : "Pushpa",
    ratingg : 7.6,
    contentt : "Story of Pushpa Raj, a lorry driver in Seshachalam forests of South India, set in the backdrop of red sandalwood smuggling. Red Sandalwood is endemic to South-Eastern Ghats (mountain range) of India.",
    trailerr : "https://www.youtube.com/embed/Q1NKMPhP8PY"
  },
  {
    imgg : "https://m.media-amazon.com/images/I/711eHgGtnFL._SL1209_.jpg",
    namee : "Bahubali 2",
    ratingg : 8.2,
    contentt : "When Shiva, the son of Bahubali, learns about his heritage, he begins to look for answers. His story is juxtaposed with past events that unfolded in the Mahishmati Kingdom.",
    trailerr : "https://www.youtube.com/embed/G62HrubdD6o"
  },
  {
    imgg : "https://m.media-amazon.com/images/M/MV5BMjMwMDgyOGQtMWZjNC00MDUwLTllZDYtZWM3NDBmN2YzNGZmXkEyXkFqcGdeQXVyMTQzNjkzMzEw._V1_FMjpg_UX1000_.jpg",
    namee : "KGF Chapter 2",
    ratingg : 8.7,
    contentt : "In the blood-soaked Kolar Gold Fields, Rocky's name strikes fear into his foes. While his allies look up to him, the government sees him as a threat to law and order. Rocky must battle threats from all sides for unchallenged supremacy.",
    trailerr : "https://www.youtube.com/embed/JKa05nyUmuQ"
  },
  {
    imgg : "https://stat1.bollywoodhungama.in/wp-content/uploads/2016/03/Dangal-1.jpg",
    namee : "Dangal",
    ratingg : 8.3,
    contentt : "Former wrestler Mahavir Singh Phogat and his two wrestler daughters struggle towards glory at the Commonwealth Games in the face of societal oppression.",
    trailerr : "https://www.youtube.com/embed/x_7YlGv9u1g"
  },
  {
    imgg : "https://m.media-amazon.com/images/M/MV5BMTYzOTE2NjkxN15BMl5BanBnXkFtZTgwMDgzMTg0MzE@._V1_.jpg",
    namee : "PK",
    ratingg : 8.1,
    contentt : "An alien on Earth loses the only device he can use to communicate with his spaceship. His innocent nature and child-like questions force the country to evaluate the impact of religion on its people.",
    trailerr : "https://www.youtube.com/embed/SOXWc32k4zA"
  }
];



function App() {
  const[movieInfo,setmovieInfo]=useState(mveinf);
  function AddMovies(){
    return(
      <div className="movieAddition">
        <MovieAdditionForm mveinf={movieInfo} setmovieInfo={setmovieInfo} />
      </div> 
    );
  }
  function Movies(){
    return(
      <div className="movieList">
        {movieInfo.map((value,index)=>{
          return <MovieCard key = {index} id = {index} img = {value.imgg} name = {value.namee} rating = {value.ratingg} content = {value.contentt} />
        })}
      </div>
    )
  }

  return (
    <div className="App">
      {/* <h1>Welcome to React Router!</h1> */}
      <nav className = "navigationBar">
        {/* <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/addmovies">Add Movies</Link></li>
          <li><Link to="/addcolor">Color Game</Link></li>
        </ul> */}
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/addmovies">Add Movies</Link>
          <Link to="/addcolor">Color Game</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/addmovies"element={<AddMovies />}/>
        <Route path="/addcolor" element={<AddColor />} />
        <Route path="/movies/:id" element={<MovieDetails movieList={movieInfo}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      
      {/* <div className="movieAddition">
      <MovieAdditionForm mveinf={movieInfo} setmovieInfo={setmovieInfo} />
      </div> 
      <div className="movieList">
        {movieInfo.map((value,index)=>{
          return <MovieCard key = {index} img = {value.imgg} name = {value.namee} rating = {value.ratingg} content = {value.contentt} />
        })}
      </div> */}
      {/* <AddColor /> */}
    </div>
  )
  
}
function MovieDetails({movieList}){
  const{id} = useParams();
  const navigate = useNavigate();
  const styles = {
    color : movieList[id].ratingg > 8 ? 'green' : 'red'
  }
  return(
  <div>
    <iframe 
      width="100%" 
      height="800" 
      src= {movieList[id].trailerr} 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen
    >
    </iframe>
    <div className="movieDetailContainer">
      <div className = "movieCredentials">
        <h2 className = "movieName">{movieList[id].namee}</h2>
        <p className='movieRating' style={styles}>⭐ {movieList[id].ratingg}</p>
      </div>
      <p className='movieDescription'>{movieList[id].contentt}</p>
      
      <Button variant="outlined" onClick={() => {
            return navigate(-1);
          }}
          >
            Back</Button>
    </div>
  </div>
  )
}

function NotFound(){
  return <h1>404 not found</h1>
}
function Home(){
  return <h1>Welcome to the movie app</h1>
}
function About(){
  return <h1>This is all about movies</h1>
}
export {App};


