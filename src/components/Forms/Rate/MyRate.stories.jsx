import React from 'react';
import PropTypes from 'prop-types';
import MyRate from './MyRate';

export default {
    title: 'Components/Rate',
    component: MyRate,
    tags: ['autodocs'],
};

const Template = ({...args }) => <MyRate {...args}></MyRate>;

export const Basic = Template.bind({});
Basic.args = {
    defaultValue: '2.5'
};

MyRate.propTypes = {
    defaultValue: PropTypes.string,
}

MyRate.defaultProps = {
    defaultValue: '2.5'
};