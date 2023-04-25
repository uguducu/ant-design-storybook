import React from 'react';
import PropTypes from 'prop-types';
import { InputNumber } from 'antd';

const MyInputNumber = ({min,max,defaultValue,onChange,...props}) => {
    return(
        <InputNumber
        min = {min}
        max = {max}
        defaultValue={defaultValue}
        onChange={onChange}>
        </InputNumber>
    );
};

MyInputNumber.propTypes = {
    min: PropTypes.string,
    max: PropTypes.string,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
};

MyInputNumber.defaultProps = {
    min:'1',
    max:'10',
    defaultValue:'3'
};

export default MyInputNumber;