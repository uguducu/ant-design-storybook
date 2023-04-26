import React from 'react';
import PropTypes from 'prop-types';
import MyButton from './MyButton';


export default {
    title: 'Components/Button',
    component: MyButton,
    tags: ['autodocs'],
    argTypes: {
    backgroundColor: { control: 'color' },
    type: {
    control: { type: 'select', options: ['primary', 'default', 'dashed','text','link'] }
    },
    size: {
    control: { type: 'select', options: ['small', 'medium', 'large'] }
    },
    onClick: { action: 'clicked' },
},
};

const Template = ({ label, ...args }) => <MyButton {...args}>{label}</MyButton>;

export const Primary = Template.bind({});
Primary.args = {
type: 'primary',
label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
label: 'Button',
};

MyButton.propTypes = {
    /**
   * Is this the principal call to action on the page?
   */
    type: PropTypes.oneOf(['primary', 'default', 'dashed','text','link']),
    /**
   * What background color to use
   */
    backgroundColor: PropTypes.string,
    /**
   * How large should the button be?
   */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
   * Button contents
   */
    label: PropTypes.string.isRequired,
    /**
   * Optional click handler
   */
    onClick: PropTypes.func,
};

MyButton.defaultProps = {
label:'Button',
backgroundColor: null,
primary: false,
size: 'medium',
onClick: undefined,
};
