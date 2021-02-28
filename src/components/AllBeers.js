import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import axios from 'axios';
import './../App.css';

class AllBeers extends React.Component {
  state = {
    beers: [],
  };


  displayBeers = () => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        const data = response.data;
        console.log(data);
        this.setState({ beers: data });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.displayBeers();
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Beers</h1>
        {this.state.beers.map((beer) => {
          return (
            <div key={beer._id}>
            <Link to={`/beers/${beer._id}`}>
              <p>{beer.name}</p>
              </Link>
              <p>{beer.tagline}</p>
              <p><img className="beer-image" src={beer.image_url}/></p>
              <hr/>
            </div>
          );
        })}
      </div>
    );
  }
}

export default AllBeers;
