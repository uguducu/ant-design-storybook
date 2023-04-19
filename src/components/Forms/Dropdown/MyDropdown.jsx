import React from 'react';
import { Menu, Dropdown } from 'antd';

const MyDropdown = ({ buttonLabel, menuData, onItemClick }) => {
const handleItemClick = (e) => {
    onItemClick && onItemClick(e.key);
};

  const menu = (
    <Menu onClick={handleItemClick}>
      {menuData.map((item) => (
        <Menu.Item key={item.key}>{item.label}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <button className="ant-dropdown-link">{buttonLabel}</button>
    </Dropdown>
  );
};

export default MyDropdown;
