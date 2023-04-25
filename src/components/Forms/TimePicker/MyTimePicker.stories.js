import React from 'react';
import PropTypes from 'prop-types';
import MyTimePicker from './MyTimePicker';

export default {
    title: 'Components/TimePicker',
    component: MyTimePicker,
    tags:['autodocs'],
}

const Template = ({...args}) => <MyTimePicker {...args}></MyTimePicker>

export const Basic = Template.bind({});
Basic.args = {
    time: '00:00:00',
    format: 'HH:mm:ss'
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