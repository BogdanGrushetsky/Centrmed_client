import moment from 'moment';
import 'moment/locale/uk';
import Day from './Day/Day';
import './dateTimePicker.css';
import { useState } from 'react';

moment.locale('uk');

const generateTimeOptions = (selectedDate) => {
  const start = moment(selectedDate).startOf('day').add(10, 'hours');
  const end = moment(selectedDate).startOf('day').add(19.5, 'hours');
  const options = [];
  while (start.isBefore(end)) {
    options.push({time: start.format('HH:mm'), busy: false});
    start.add(30, 'minutes');
  }
  return {date: selectedDate, schedule: options};
};

const generateTimeOptionsYear = (startDateStr, endDateStr) => {
    // Встановлення початкової дати
    const startDate = moment(startDateStr);

    // Встановлення кінцевої дати
    const endDate = moment(endDateStr);

    // Створення порожнього об'єкта дат Moment
    const allDays = [];

    // Цикл для проходження крізь усі дати між початковою та кінцевою датами
    for (var d = startDate; d <= endDate; d.add(1, 'days')) {
    // Створення об'єкта Moment для поточної дати
    var currentDay = moment(d);
    
    allDays.push(currentDay);
    // Додавання об'єкта Moment до об'єкту дат Moment
    // allDays[currentDay.format('YYYY-MM-DD')] = currentDay;
    }

    return allDays;

}

const DateTimePicker = () => {
    const [nShift, setNShift] = useState(0);

    const activeData = {};
    
    const dayOfYear = moment().dayOfYear() - 1;

    const year2023 = generateTimeOptionsYear('2023-01-01', '2023-12-31');
    year2023.forEach((day, index) => activeData[index] = generateTimeOptions(day));

  return (
        <div className='dateTimePicker'>
            <div className="dateTimePicker_header">
                <span onClick={() => {setNShift(nShift - 1)}}> {'<'} </span>
                <span>{activeData[dayOfYear + nShift].date.format("MMMM, YYYY")}</span>
                <span onClick={() => {setNShift(nShift + 1)}}> {'>'} </span>
            </div>
            <div className="dateTimePicker_schedule">
            <Day key={dayOfYear} data={activeData[dayOfYear + nShift]}/>
            <Day key={dayOfYear + 1} data={activeData[dayOfYear + nShift + 1]}/>
            <Day key={dayOfYear + 2} data={activeData[dayOfYear + nShift + 2]}/>
            <Day key={dayOfYear + 3} data={activeData[dayOfYear + nShift + 3]}/>
            </div>
        </div>
  );
};

export default DateTimePicker;