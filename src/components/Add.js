import axios from 'axios';
import React from 'react';
import Header from './Header';

class Add extends React.Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 1,
    contributed_by: '',
  };

  handleInput = (event) => {
    let { type, name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    } = this.state;

    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', {
        name,
        tagline,
        description,
        first_brewed,
        brewers_tips,
        attenuation_level,
        contributed_by,
      })
      .then((res) => {
        this.setState({
          name,
          tagline,
          description,
          first_brewed,
          brewers_tips,
          attenuation_level,
          contributed_by,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Header />
        <form onSubmit={this.handleSubmit}>
          <h2>Add a new beer:</h2>
          <br />
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInput}
          />
          <br />
          <label>Tagline:</label>
          <input
            type="text"
            name="tagline"
            value={this.state.tagline}
            onChange={this.handleInput}
          />
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleInput}
          />
          <br />
          <label>First brewed:</label>
          <input
            type="text"
            name="first_brewed"
            value={this.state.first_brewed}
            onChange={this.handleInput}
          />
          <br />
          <label>Brewer's tips:</label>
          <input
            type="text"
            name="brewers_tips"
            value={this.state.brewers_tips}
            onChange={this.handleInput}
          />
          <br />
          <label>Attenuation level:</label>
          <input
            type="number"
            name="attenuation_level"
            value={this.state.attenuation_level}
            onChange={this.handleInput}
          />
          <br />
          <label>Contributed by:</label>
          <input
            type="text"
            name="contributed_by"
            value={this.state.contributed_by}
            onChange={this.handleInput}
          />
          <button type="submit">Add beer</button>
        </form>
      </div>
    );
  }
}

export default Add;
