import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Svg from './Svg';

function Header({ title }) {
  return (
    <header>
      <Link to="/">
        <h1>{title}</h1>
      </Link>
      <Svg name="logo" />
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
