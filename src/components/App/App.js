import './App.css';
import movieData from '../../assets/movieData'
import React, {Component} from "react"
import Movies from '../Movies/Movies'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      movie: {},
    }
    this.selectMovie = this.selectMovie.bind(this)
  }
  componentDidMount() {
    this.setState({ movies: movieData.movies })
  }

  selectMovie = (id) => {
    let selectedMovie = this.state.movies.find((movie) => movie.id === id)
    console.log(selectedMovie)
  }


  render() {
    return (
      <div className="App">
        <Movies 
        movies={this.state.movies} 
        selectMovie={this.selectMovie}
        />
      </div>
    )
  }
}

export default App;
