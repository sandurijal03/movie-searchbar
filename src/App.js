import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.searchMovies = this.searchMovies.bind(this);
    this.getApi = this.getApi.bind(this);
  }

  handleChange(e) {
    this.setState({ movie: e.target.value });
  }

  searchMovies() {
    this.getApi();
  }

  getApi() {}

  render() {
    return (
      <div className="root">
        <div className="logo">
          <h1>Movie Search Engine</h1>
        </div>
        <div className="search-form">
          <input
            type="text"
            placeholder="Enter any movie name"
            onChange={this.handleChange}
          />
          <input type="button" value="Search" onClick={this.searchMovies} />
        </div>
      </div>
    );
  }
}
export default App;
