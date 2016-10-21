import React  from 'react';
import {Link} from 'react-router';

class Homepage extends React.Component {
  render() {
      return (
      <div className="jumbotron">
      <h1>My App Admin</h1>
      <p>react, redux, react-router</p>
      <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
      </div>
    );
  }
}

export default Homepage;
