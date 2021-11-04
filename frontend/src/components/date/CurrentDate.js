import React from 'react'
import './CurrentDate.scss';

const CurrentDate = (props)=>{
  const year= props.date.getFullYear();
  const day= props.date.toLocaleString('ge-DE', {day: '2-digit'});
  const month=props.date.toLocaleString('ge-DE', {month: 'long'});
  return(
      <div className='current-date'> 
       <p className="display-2">         
          <span><i className="bi bi-calendar-event"></i></span>
          <span className="ms-4 px-2"> Heute</span>
          <span className='date_day'>{day}</span>
          <span className='date_month'>{month}</span>         
          <span className='date_year'>{year}</span>     
          </p>      
      </div>       
  );
}

export default CurrentDate
