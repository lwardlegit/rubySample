import React, { useState } from "react";

const MyCalendar = ({ dateRange }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const setClassNameForDateRanges = (dateRange, date) => {
    const convertedDate = new Date(date).toISOString().split('T')[0];
    console.log('date range', dateRange, 'date', convertedDate);
  
    if (convertedDate >= dateRange.start && convertedDate <= dateRange.end) {
      console.log('Date IS in range:', dateRange, 'Date:', convertedDate);
      return "range";
    }else{
      return "notInRange"
    }
  };
  

  const renderWeeks = (month, year, dateRange) => {
    let weeks = [];
    let days = [];
    let totalDays = daysInMonth(month, year);
    let firstDay = firstDayOfMonth(month, year);

    for (let i = 0; i < firstDay; i++) {
      days.push(<td key={i}></td>);
    }

    console.log('range', dateRange)
    for (let day = 1; day <= totalDays; day++) {
      // we need to take the number date and match it tp
       let date = new Date(year, month, day);

      /*
      const date = currentDate.getDate(day);
      const month = currentDate.getMonth(month)
      const year = currentDate.getFullYear(2023)
      const formattedDate = `${month}-${date}-${year}`
      */

      let className;
      if(dateRange && dateRange.start && dateRange.end){
        className = setClassNameForDateRanges(dateRange, date)
      }else{

      className =
        selectedDate && date.toDateString() === selectedDate.toDateString()
          ? "selected"
          : "";
      }
          console.log('date',date,'classname',className, selectedDate)

      days.push(
        <td key={day} className={className} onClick={() => setSelectedDate(date)}>
          {day}
        </td>
      );

      if (days.length === 7) {
        weeks.push(<tr key={day}>{days}</tr>);
        days = [];
      }
    }

    if (days.length > 0) {
      for (let i = days.length; i < 7; i++) {
        days.push(<td key={i}></td>);
      }

      weeks.push(<tr key={weeks.length + 1}>{days}</tr>);
    }

    return weeks;
  };

  return (
    <div className="calendar">
      <table>
        <thead className="days-of-week">
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>{renderWeeks(currentDate.getMonth(), currentDate.getFullYear(), dateRange)}</tbody>
      </table>
      <div className="month-year">
        {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
      </div>
    </div>
  );
};

export default MyCalendar;
