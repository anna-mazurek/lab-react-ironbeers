import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Homepage extends Component {
  render() {
    return (
      <div>
        <div className="allBeers">
          <Link className="link" to="/beers">
            <h1>All Beers</h1>
          </Link>
          <img src={require('../../src/assets/beers.png')} alt="beers" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            dignissim mauris ac feugiat facilisis. Phasellus vehicula metus eu
            ante luctus, vel finibus purus eleifend.
          </p>
        </div>
        <div className="randomBeer">
          <Link className="link" to="/beers/random">
            <h1>Random Beer</h1>
          </Link>
          <img
            src={require('../../src/assets/random-beer.png')}
            alt="random-beer"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            dignissim mauris ac feugiat facilisis. Phasellus vehicula metus eu
            ante luctus, vel finibus purus eleifend.
          </p>
        </div>
        <div className="newBeer">
          <Link className="link" to="/add-beer">
            <h1>New Beer</h1>
          </Link>
          <img src={require('../../src/assets/new-beer.png')} alt="new-beer" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            dignissim mauris ac feugiat facilisis. Phasellus vehicula metus eu
            ante luctus, vel finibus purus eleifend.
          </p>
        </div>
      </div>
    );
  }
}

export default Homepage;
