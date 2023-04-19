import React from 'react';
import PropTypes from 'prop-types';
import MyInput from './MyInput';

export default {
    title: 'Components/Input',
    component: MyInput,
    tags: ['autodocs'],
    argTypes:{        
        size: {
            control: { type: 'select', options: ['small', 'medium', 'large'] }
        },
    },
};

const Template = ({...args }) => <MyInput {...args}></MyInput>;

export const Basic = Template.bind({});
Basic.args = {
    placeholder: "Basic"
};

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