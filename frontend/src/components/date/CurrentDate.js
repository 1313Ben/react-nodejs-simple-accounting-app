import React from 'react'
import './CurrentDate.scss';

const CurrentDate = (props)=>{
  const year= props.date.getFullYear();
  const day= props.date.toLocaleString('ge-DE', {day: '2-digit'});
  const month=props.date.toLocaleString('ge-DE', {month: 'long'});
  return(
      <div class='current-date'> 
       <p class="display-2">         
          <span><i class="bi bi-calendar-event"></i></span>
          <span class="ms-4 px-2"> Heute</span>
          <span class='date_day'>{day}</span>
          <span class='date_month'>{month}</span>         
          <span class='date_year'>{year}</span>     
          </p>      
      </div>       
  );
}

export default CurrentDate
