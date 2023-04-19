import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

/**
 * Test
 */

const MyInput = ({placeholder,size,...props}) =>{
    return(
    <Input
        placeholder='{placeholder}'
        size='{size}'
        {...props}
        >
    </Input>
    );
}

MyInput.propTypes = {
    /**
     *  Desc
     */
    placeholder: PropTypes.string,
    /**
     * 
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
};

MyInput.defaultProps = {
    placeholder: 'Basic',
    size: 'medium',
};

export default MyInput;