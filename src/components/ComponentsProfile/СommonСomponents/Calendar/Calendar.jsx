import { useState } from 'react';
import DatePicker from "react-datepicker";
import './Calendar.css'
import "react-datepicker/dist/react-datepicker.css";
import uk from 'date-fns/locale/uk';


export const Calendar = ({ innerRef, date }) => {
	const [startDate, setStartDate] = useState();
	return (
		<>
			<div className='Calendar__title'>Дата народження {date && ': ' + date} </div>
			<DatePicker
				locale={uk}
				dateFormat="d.M.yyyy"
				selected={startDate}
				onChange={(date) => {
					innerRef.current.dateOfBirth = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()
					setStartDate(date)
				}}
				showMonthDropdown
				showYearDropdown
				className='Calendar'
			/>
		</>
	);

};