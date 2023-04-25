import React from 'react';
import PropTypes from 'prop-types';
import MyRadio from './MyRadio';

export default {
    title: 'Components/Radio',
    component: MyRadio,
    tags: ['autodocs'],
};

const Template = ({ label, ...args }) => <MyRadio {...args}>{label}</MyRadio>;

export const Default = Template.bind({});
Default.args = {
    defaultChecked: true,
    label:'Radio',
};

MyRadio.propTypes = {
    defaultChecked: PropTypes.bool,
    label: PropTypes.string.isRequired,
}

MyRadio.defaultProps = {
    defaultChecked: true,
    label:'Radio'
};