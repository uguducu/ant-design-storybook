import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

/**
 * Primary UI component for user interaction
 */

const MyButton = ({ type, backgroundColor, size, icon, label,...props }) => {
  const mode = type ? 'primary' : undefined;
  return (
    <Button
      className={size}
      style={backgroundColor && { backgroundColor }}
      {...props}
      size={size}
      type={type}
      icon={icon}
      >
      {label}
    </Button>
  );
};


MyButton.propTypes = {
  /**
   * There are
   */
  type: PropTypes.oneOf(['primary', 'default', 'dashed','text','link']),
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
  /**
   * Optional icon 
   */
  icon:PropTypes.oneOf(['<SearchOutlined />']),
};

MyButton.defaultProps = {
  backgroundColor: null,
  size: 'medium',
  onClick: undefined,
  type: 'primary'
};

export default MyButton;
