import React from 'react';
import PropTypes from 'prop-types';

function Header (props) {
  return (
    <h3 className='field'>
      <label> {props.title} </label>
    </h3>
  );
}

Header.propTypes = {
  title: PropTypes.string
};

export default Header;
