import React from 'react';
import ReactDOM from 'react-dom';
import SearchMovies from "./searchMovies";
class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h4>Project Made By: Rishabh Singh</h4>
        <h1 className="title">React Movie Search</h1>
        <SearchMovies/>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));