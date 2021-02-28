import React from 'react';
import Header from './Header';
import axios from 'axios';

class OneBeer extends React.Component {
  state = {
    oneBeer: [],
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((response) => {
        this.setState({ oneBeer: response.data });
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }


  render() {
    return (
      <div>
        <Header />
        <h1>{this.state.oneBeer.name}</h1>
        <p><img className="beer-image" src={this.state.oneBeer.image_url}/></p>
        <p>{this.state.oneBeer.tagline}</p>
        <p>First brewed: {this.state.oneBeer.first_brewed}</p>
        <p>Attenuation level: {this.state.oneBeer.attenuation_level}</p>
        <p>{this.state.oneBeer.description}</p>
        <p>Contributed by: {this.state.oneBeer.contributed_by}</p>
      </div>
    );
  }
}

export default OneBeer;
