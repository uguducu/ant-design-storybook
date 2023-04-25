import React from 'react';
import PropTypes from 'prop-types';
import { Radio } from 'antd';

const MyRadio = ({defaultChecked,label,...props}) => {
    return (
        <Radio
            defaultChecked={defaultChecked}
        >
            {label}
        </Radio>
    );
};

MyRadio.propTypes = {
    defaultChecked: PropTypes.bool,
    label: PropTypes.string.isRequired,
}

MyRadio.defaultProps = {
    defaultChecked: true,
}

export default MyRadio;