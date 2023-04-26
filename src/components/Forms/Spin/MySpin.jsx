import React from 'react';
import PropTypes from 'prop-types';
import { Spin} from 'antd';

/**
 * Primary UI component for user interaction
 */

const MySpin=({size,indicator,...props }) => {   
    return (    
      <Spin
        size={size}
        indicator={indicator}
        {...props}     
      >        
      </Spin>    
    );
  };

MySpin.propTypes = {   
   /**
   * How large should the Spin be?
   */
size: PropTypes.oneOf(['small', 'medium', 'large']),  
};

MySpin.defaultProps = {
    size:'medium'
};
  
export default MySpin;