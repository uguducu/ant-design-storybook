import React from 'react';
import PropTypes from 'prop-types';
import { Space, Switch } from 'antd';

/**
 * Primary UI component for user interaction
 */

const MySwitch = ({size, checked,disable, checkedChildren, uncheckedChildren, primary, ...props }) => {   
  const mode = primary ? 'true' : undefined;
  const disableCheck= disable ? 'true' : undefined;
    return (
      <Switch                   
      size={size}      
      {...props} 
      checked={mode}
      disabled={disableCheck}               
      >
        Switch
      </Switch>
    );
  };

MySwitch.propTypes = {
    /**
    * Checked change option
    */
    primary: PropTypes.bool,       
    /**
     * How large should the switch be?
     */
    size: PropTypes.oneOf(['small', 'medium']),  
    /**
     * Switch disable option
     */
    disable: PropTypes.bool,
    /**
   * Optional click handler
   */
    onClick: PropTypes.func,

     
  };
  
  MySwitch.defaultProps = {
    disable: 'false',
    size: 'medium',        

  };
  
  export default MySwitch;

  