import React from 'react';
import PropTypes from 'prop-types';
import Svg from './Svg';

function Header({ title }) {
  return (
    <header>
      <h1>{title}</h1>
      <Svg name="logo" />
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
