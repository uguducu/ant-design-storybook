import moment from 'moment';
import { DatePicker, Switch } from 'antd';

const { RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const weekFormat = 'YYYY/Wo';

const MyDatePicker = ({ mode, disabled, showToday, showWeekNumber, showTime, value, onChange }) => {
  const props = {
    value: value || undefined,
    onChange,
    showToday,
    showWeekNumber,
    disabled,
  };

  if (mode === 'basic') {
    return <DatePicker {...props} />;
  } else if (mode === 'range') {
    return <RangePicker {...props} />;
  } else if (mode === 'switchable') {
    return (
      <div>
        <Switch
          checkedChildren="Range Picker"
          unCheckedChildren="Basic DatePicker"
          defaultChecked
          onChange={(checked) => onChange(checked ? undefined : [])}
        />
        <br />
        {Array.isArray(value) ? (
          <RangePicker {...props} />
        ) : (
          <DatePicker {...props} />
        )}
      </div>
    );
  } else {
    const pickerProps = {
      ...props,
      ...(showTime ? { showTime: true } : {}),
      format: showWeekNumber ? weekFormat : dateFormat,
    };
    return <DatePicker {...pickerProps} />;
  }
};

export default MyDatePicker;
