import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

/**
 * Primary UI component for user interaction
 */

const MyButton = ({ primary, backgroundColor, size, label,...props }) => {
  const mode = primary ? 'primary' : undefined;
  return (
    <Button
      type="button"
      className={size}
      style={backgroundColor && { backgroundColor }}
      {...props}
      size={size}
      type={mode}
    >
      {label}
    </Button>
  );
};


MyButton.propTypes = {
  /**
   * x
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

MyButton.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};

export default MyButton;
