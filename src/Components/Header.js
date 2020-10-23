import React from 'react';
import '../App.css';
import Navigation from './Navigation';
import Search from './Search';


class Header extends React.Component {



  render () {
  return (
    <div>
      <Navigation />
        <Search />
    </div>
  );
  }
}

export default Header;
