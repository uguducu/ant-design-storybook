import React from 'react';
import PropTypes from 'prop-types';
import MySpin from './MySpin';
import { LoadingOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Spin, Alert,Switch } from 'antd';


export default {
    title: 'Components/Spin',
    component: MySpin,
    tags: ['autodocs'],
    argTypes: {       
    size: {
    control: { type: 'select', options: ['small', 'medium', 'large'] }
    },   
},
};

const Template = ({...args }) => <MySpin {...args}></MySpin>;

const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );

export const Basic = Template.bind({});
Basic.args = {

};

export const CustomSpin = () => <Spin indicator={antIcon} />;

export const EmbeddedMode = () => {
    const [loading, setLoading] = useState(false); 
    const toggle= (checked)=>{setLoading(checked)};
    return (
   <div>
   <Spin spinning={loading}>
        <Alert
        message="Alert message title"
        description="Further details about the context of this alert."
        type="info">
        </Alert>
   </Spin>   
   <div style={{ marginTop: 16 }}>
        Loading state:
        <Switch checked={loading} onChange={toggle} />
      </div>
   </div>
   );
   };


MySpin.propTypes = {   
    /**
    * How large should the Spin be?
    */
 size: PropTypes.oneOf(['small', 'medium', 'large']),  
};

MySpin.defaultProps = {    
    size: 'medium',    
};
    