import React from 'react'

import CentrmedLogo from '../../icons/CentrmedLogoSmall.svg';
import DoctorImg from '../../images/doctor.png';

import './doctor.css';
import { Button } from '../Button/Button';

function Doctor(props) {
  const { name, specialty, residence } = props;

  return (
    <div className="doctor">
      <img className='doctor_logo' src={CentrmedLogo} alt="Centrmed Logo" />
      <img className="doctor_img" src={DoctorImg} alt="doctor img" />
      <div className="doctor_name">{name}</div>
      <div className="doctor_specialty">{specialty}</div>
      <div className="doctor_residence">{residence}</div>
      <div className="doctor_buttonWrapper">
        <Button>Записатися</Button>
      </div>
    </div>
  )
}

export default Doctor