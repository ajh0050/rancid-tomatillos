import './App.css';
import movieData from '../../assets/movieData'
import React, {Component} from "react"
import Movies from '../Movies/Movies'
import MovieDetails from '../MovieDetails/MovieDetails'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      movie: "",
    }
  }
  componentDidMount() {
    this.setState({ movies: movieData.movies })
  }

  selectMovie = (id) => {
    let selectedMovie = this.state.movies.find((movie) => movie.id === id)
    console.log(selectedMovie)
    this.setState({movie: selectedMovie})
  }

  returnHome = () => {
    this.setState({movie:""})
  }

  render() {
    return (
      <div className="App">
        {
        this.state.movie ? (<MovieDetails movie={this.state.movie} returnHome={this.returnHome}/>) : ( <Movies movies={this.state.movies} selectMovie={this.selectMovie}/>)
        }
       
      </div>
    )
  }
}

export default App;
