import React, {useState} from 'react';
import {Dropdown} from './Dropdown';

const days = [
  {
    label: 'Monday',
    value: 'Monday',
  },
  {
    label: 'Tuesday',
    value: 'Tuesday',
  },
  {
    label: 'Wednesday',
    value: 'Wednesday',
  },
  {
    label: 'Thursday',
    value: 'Thursday',
  },
  {
    label: 'Friday',
    value: 'Friday',
  },
  {
    label: 'Saturday',
    value: 'Saturday',
  },
  {
    label: 'Sunday',
    value: 'Sunday',
  },
];

export const Container = () => {
  const [day, setDay] = useState('');

  return (
    <div style={{width: '260px'}}>
      <Dropdown
        id="days"
        label="Day"
        placeholder="Select Day"
        value={day}
        list={days}
        onSelect={item => setDay(item.label)}
      />
    </div>
  );
};
