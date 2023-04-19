import React, { useState } from 'react';
import moment from 'moment';
import MyDatePicker from './MyDatePicker';

export default {
title: 'Components/DatePicker',
tags: ['autodocs'],
component: MyDatePicker,
};

const Template = (args) => {
const [value, setValue] = useState(args.value);
const handleChange = (val) => setValue(val);

return <MyDatePicker {...args} value={value} onChange={handleChange} />;
};

export const Basic = Template.bind({});
Basic.args = {
mode: 'basic',
};

export const Range = Template.bind({});
Range.args = {
mode: 'range',
};

export const Switchable = Template.bind({});
Switchable.args = {
mode: 'switchable',
};

export const WithTime = Template.bind({});
WithTime.args = {
mode: 'default',
showTime: true,
};

export const WithWeekNumber = Template.bind({});
WithWeekNumber.args = {
mode: 'default',
showWeekNumber: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
mode: 'basic',
disabled: true,
};

export const Controlled = Template.bind({});
Controlled.args = {
mode: 'basic',
value: moment('2023/04/12'),
};

export const Grouped = Template.bind({});
Grouped.args = {
mode: 'basic',
showToday: false,
showWeekNumber: true,
};

Grouped.decorators = [
(Story) => (
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
<Story />
<br />
<MyDatePicker mode="basic" showToday={false} showWeekNumber value={moment()} onChange={() => {}} />
</div>
),
];