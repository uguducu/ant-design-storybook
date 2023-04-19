import React from 'react';
import MyCheckbox from './MyCheckbox';

export default {
  title: 'Components/Checkbox',
  tags: ['autodocs'],
  component: MyCheckbox,
};

const Template = (args) => <MyCheckbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Checkbox',
  checked: false,
  onChange: () => {},
};

export const Group = Template.bind({});
Group.args = {
  label: 'Checkbox Group',
  checked: ['A', 'B'],
  onChange: () => {},
  groupData: [
    { label: 'Option A', value: 'A' },
    { label: 'Option B', value: 'B' },
    { label: 'Option C', value: 'C' },
  ],
};
