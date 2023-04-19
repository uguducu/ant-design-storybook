import React from 'react';
import { Checkbox } from 'antd';

const MyCheckbox = ({ label, checked, onChange, groupData }) => {
  if (groupData && groupData.length > 0) {
    return (
      <Checkbox.Group defaultValue={checked} onChange={onChange}>
        {groupData.map((data) => (
          <Checkbox key={data.value} value={data.value}>
            {data.label}
          </Checkbox>
        ))}
      </Checkbox.Group>
    );
  }
  return (
    <Checkbox checked={checked} onChange={onChange}>
      {label}
    </Checkbox>
  );
};

export default MyCheckbox;
