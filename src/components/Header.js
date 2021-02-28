import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
        <header>
      <nav>
           <Link className="link" to="/">
        <img src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" />
        </Link>
      </nav>
      </header>
    );
  }
}

export default Header;
