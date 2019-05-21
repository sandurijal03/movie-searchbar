import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
      searchResult: [],
      error: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.searchMovies = this.searchMovies.bind(this);
    this.callApi = this.callApi.bind(this);
  }
  handleChange(e) {
    this.setState({ movie: e.target.value });
  }

  searchMovies() {
    this.callApi();
  }

  callApi() {
    const BASEURL = 'https://api.themoviedb.org/3/search/movie?';
    const APIKEY = 'dc3df730fff82e5dd0c6895b885c5290';
    let self = this;

    axios
      .get(`${BASEURL}api_key=${APIKEY}&query=${this.state.movie}`)
      .then(function(response) {
        self.setState({ searchResult: response.data.results, error: false });
        if (response.data.results === 0) {
          self.setState({ error: true });
        }
      })
      .catch(function(error) {
        self.setState({ error: true });
      });
  }

  render() {
    let displayMovie = this.state.searchResult.map(movie => {
      return (
        <div classsName="search-info" key={movie.id}>
          <img
            src={'https://image.tmdb.org/t/p/w300/' + movie.poster_path}
            alt={movie.title}
          />
          <span>Movie: {movie.title}</span>
        </div>
      );
    });
    return (
      <div className="root">
        <div className="logo">
          <h1>Movies Search</h1>
        </div>
        <div className="search-form">
          <input
            type="text"
            placeholder="Enter the movies name"
            onChange={this.handleChange}
          />
          <input type="button" value="Search" onClick={this.searchMovies} />
        </div>
        {displayMovie}
      </div>
    );
  }
}

export default App;
