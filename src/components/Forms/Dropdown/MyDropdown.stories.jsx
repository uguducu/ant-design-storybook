import React from 'react';
import MyDropdown from './MyDropdown';

export default {
  title: 'Components/Dropdown',
  tags: ['autodocs'],
  component: MyDropdown,
};

const menuData = [
  { key: '1', label: 'Option 1' },
  { key: '2', label: 'Option 2' },
  { key: '3', label: 'Option 3' },
];

const Template = (args) => <MyDropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttonLabel: 'Click me',
  menuData,
  onItemClick: (key) => console.log('Clicked item with key', key),
};
