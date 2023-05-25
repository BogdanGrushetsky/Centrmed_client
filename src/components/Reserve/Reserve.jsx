import React from 'react'
import Doctor from '../Doctor/Doctor';
import DateTimePicker from '../DateTimePicker/DateTimePicker';

import './reserve.css';

function Reserve() {
  return (
    <div className="reserve">
        <div className="reserve_title">Забронювати час</div>
        <div className="reserve_main">
          <DateTimePicker />
        </div>
    </div>
  )
}

export default Reserve