import React from 'react';
import PropTypes from 'prop-types';
import { Rate } from 'antd';

const MyRate = ({allowHalf, defaultValue,...props}) => {
    return(
        <Rate
            allowHalf defaultValue={defaultValue}>
        </Rate>
    );
};

MyRate.propTypes = {
    defaultValue: PropTypes.string,
}

MyRate.defaultProps = {
    defaultValue: '2.5'
};

export default MyRate;