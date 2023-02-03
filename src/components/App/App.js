import './App.css';
import movieData from '../../assets/movieData'
import React, {Component} from "react"
import Movies from '../Movies/Movies'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }
  componentDidMount() {
    this.setState({ movies: movieData.movies })
  }

  render() {
    return (
      <div className="App">
        <h1>app is rendering</h1>
        <Movies movies={this.state.movies} />
      </div>
    )
  }
}

export default App;
