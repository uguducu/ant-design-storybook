import React from 'react';
import PropTypes from 'prop-types';
import { Alert} from 'antd';


/**
 * Primary UI component for user interaction
 */

const MyAlert=({type, label, description,message,...props }) => {   
  return (    
    <Alert
      type={type}
      message={message}
      description={description}           
      {...props}     
    >
      {label}
    </Alert>    
  );
};

MyAlert.propTypes = {   
    /**
    * Alert type
    */
    type: PropTypes.string,
    /**
    * Sub Message description
    */
    description: PropTypes.string,
    /**
    * Message description
    */
    message: PropTypes.string,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
  };

  MyAlert.defaultProps = {
    type: 'success',
    description: 'empty',
    message: 'empty',
    onClick: undefined,
  };
  
  export default MyAlert;