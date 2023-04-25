import React from 'react';
import PropTypes, { any } from 'prop-types';
import MySwitch from './MySwitch';
import { Switch, Space } from 'antd';


export default {
    title: 'Components/Switch',
    component: MySwitch,
    tags: ['autodocs'],       
    argTypes: {
    size: {
    control: { type: 'select', options: ['small', 'medium'] }
    },        
    onClick: { action: 'clicked' },
},
};

const Template = ({...args }) => <MySwitch {...args}>Switch Label</MySwitch>;

export const Primary = Template.bind({});
Primary.args = {
disable: true,
};

export const TextIcon = Template.bind({});
TextIcon.args = {  


};

export const Loading = Template.bind({});
Loading.args = {
loading: true,
primary: true,
};



MySwitch.propTypes = {
    /**
   * Is this the principal call to action on the page?
   */
    primary: PropTypes.bool,    
    /**
   * How large should the switch be?
   */
    size: PropTypes.oneOf(['small', 'medium']), 
     /**
   * How large should the switch be?
   */
     disable: PropTypes.bool,        
    /**
   * Optional click handler
   */
    onClick: PropTypes.func,
    
};

MySwitch.defaultProps = {
label:'Switch',
disable: 'false',
primary: false,
size: 'medium',
onClick: undefined,
};