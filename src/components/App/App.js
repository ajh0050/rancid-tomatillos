import './App.css';
import React, {Component} from "react"
import Movies from '../Movies/Movies'
import MovieDetails from '../MovieDetails/MovieDetails'
import { fetchMovies, fetchMovie } from "../../apiCalls";
import Header from '../Header/Header'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      movie: "",
      error: "",
    }
  }
  componentDidMount() {
    fetchMovies()
    .then((data)=> {
      this.setState({movies: data.movies})
    })
    .catch((error) => {
      console.log('fetch movies error', error)
      this.setState({error: error})
    })
  }

  selectMovie = (id) => {
    fetchMovie(id)
    .then((data)=> {
      this.setState({movie: data.movie})
    })
    .catch((error) => {
      console.log('fetch movies error', error)
      this.setState({error: error})
    })
  }

  returnHome = () => {
    this.setState({movie:""})
  }

  render() {
    return (
      <div className="App">
        <Header />
        {
        this.state.movie ? (<MovieDetails movie={this.state.movie} returnHome={this.returnHome}/>) : ( <Movies movies={this.state.movies} selectMovie={this.selectMovie}/>)
        }
       
      </div>
    )
  }
}

export default App;
