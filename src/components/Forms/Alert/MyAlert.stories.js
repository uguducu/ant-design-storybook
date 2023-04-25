import React from 'react';
import PropTypes from 'prop-types';
import MyAlert from './MyAlert';
import { Button } from 'antd';
import { Switch } from 'antd';
import { useState } from 'react'; 


export default {
    title: 'Components/Alert',
    component: MyAlert,
    tags: ['autodocs'],
    argTypes: {       
    type:'success',
    onClick: { action: 'clicked' },    
},
};

const Template = ({ label, ...args }) => <MyAlert {...args}>{label}</MyAlert>;

export const Basic = Template.bind({});
Basic.args = {
message:'Success Text',  
type: 'success'
};

export const Description = Template.bind({});
Description.args = {
message:'Success Text',
description:'Description Area',   
type: 'success'
};

export const Closable = Template.bind({});
Closable.args = {
type: 'success',
message:'Closable Alert',
closable: true,
};

export const ClosableText = Template.bind({});
ClosableText.args = {
type: 'warning',
message:'Closable Alert',
closeText: 'Closable Text',
};

export const ShowIcon = Template.bind({});
ShowIcon.args = {
type: 'warning',
message:'Alert with Icon',
showIcon: true,
};

export const AlertDetail = Template.bind({});
AlertDetail.args = {
    type:'error',
    showIcon:true,
    message:'Alert',
    action: <Button size='medium'>Detail </Button>
};



export const SwitchableAlert = () => { const [showAlert, setShowAlert] = useState(false); return ( <div> <Switch checked={showAlert} onChange={() => setShowAlert(!showAlert)} style={{ marginBottom: '16px' }} /> {showAlert && ( <MyAlert type="info" showIcon message="Alert" description="This is an alert!" /> )} </div> ); };



MyAlert.propTypes = {
    /**
    * Alert type
    */
    type: PropTypes.string,
    /**
    * Sub Message description
    */
    description: PropTypes.string,
    /**
    * Message description
    */
    message: PropTypes.string,
    /**
   * Optional click handler
   */
    onClick: PropTypes.func,
};

MyAlert.defaultProps = {
type: 'success',
onClick: undefined,
};