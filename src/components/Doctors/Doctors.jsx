import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Doctor from '../Doctor/Doctor';
import { API_URL } from '../../http';

import './doctors.css';

function Doctors() {
  useEffect(() => {
    axios.get(`${API_URL}/doctorApi/doctors`)
      .then(function (response) {
        const filteredData = response.data.filter(doctor => doctor.verified === true);
        setDoctors(filteredData);
      }).catch(function (error) {
        console.error(error);
      });
  }, [])

  const [doctors, setDoctors] = useState([]);

  return (
    <div className='doctors'>
      {doctors && doctors.map(doctor => {
        const specialty = doctor.specialist[0]
        return (<Doctor key={doctor.id} name={doctor.name} specialty={specialty?.specialist ? specialty?.specialist : 'Немає спеціальності'} residence={`${doctor?.doctorInfo?.Residence?.country}`} />
        )
      }
      )}
    </div>
  )
}

export default Doctors