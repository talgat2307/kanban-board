import React from 'react';
import './Button.scss';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, disableBtn }) => {
  return (
    <button
      className='button'
      onClick={onClick}
      disabled={disableBtn}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
}


export default Button;