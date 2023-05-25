import moment from 'moment';
import React from 'react'

import './slot.css';

function Slot(props) {
  const {time, busy} = props;
  const endTime = moment(time, 'HH:mm').add(30, 'minutes').format('HH:mm');
  return (
    <div onClick={props.onClick} className={busy ? "slot active" : "slot"}>{`${time} - ${endTime}`}</div>
  )
}

export default Slot