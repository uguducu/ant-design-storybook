import React from 'react';
import PropTypes from 'prop-types';
import MyInputNumber from './MyInputNumber';

export default {
    title: 'Components/InputNumber',
    component: MyInputNumber,
    tags: ['autodocs'],
}

const Template = ({...args }) => <MyInputNumber {...args}></MyInputNumber>;

export const Basic = Template.bind({});
Basic.args = {
    min:'1',
    max:'10',
    defaultValue: '3'
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