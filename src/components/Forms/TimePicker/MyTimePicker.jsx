import React from 'react';
import PropTypes from 'prop-types';
import { TimePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

const MyTimePicker = ({onChange,time,format,...props}) => {
    return(
        <TimePicker 
        onChange={onChange}
        defaultOpenValue={dayjs(time, format)} />
    );
};

MyTimePicker.propTypes = {
    time: PropTypes.string,
    format: PropTypes.string,
    onChange: PropTypes.func,
}

MyTimePicker.defaultProps = {
    time: '00:00:00',
    format: 'HH:mm:ss'
};

export default MyTimePicker;