import React from 'react';
import Header from './Header';
import axios from 'axios';

class Random extends React.Component {
  state = {
    Random: [],
  };

  componentDidMount() {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((response) => {
        this.setState({ Random: response.data });
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <Header />
        <h1>{this.state.Random.name}</h1>
        <p>
          <img className="beer-image" src={this.state.Random.image_url} />
        </p>
        <p>{this.state.Random.tagline}</p>
        <p>First brewed: {this.state.Random.first_brewed}</p>
        <p>Attenuation level: {this.state.Random.attenuation_level}</p>
        <p>{this.state.Random.description}</p>
        <p>Contributed by: {this.state.Random.contributed_by}</p>
      </div>
    );
  }
}

export default Random;
