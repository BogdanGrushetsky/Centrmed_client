import React, { useReducer } from 'react'
import Slot from './Slot/Slot';

import './day.css';

function Day(props) {
    const {data} = props;
    const [ , forceUpdate ] = useReducer(x => x + 1, 0)
  return (
  <div className='dateTimePicker_day'>
    <span>{data.date.format('dddd, Do')}</span>
  {data.schedule.map(day => {return <Slot key={day.time} onClick={() => {day.busy = !day.busy; forceUpdate(); }} busy={day.busy} time={day.time}></Slot>})}
  </div>)
}

export default Day