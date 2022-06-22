import React from 'react';
import AttendeeList from './AttendeeList';

//Creates the JSX for each individual event, including the edit and delete button, the date, description, 
//location, and attendees
export default function Event({ id, name, eventDate, eventLocation, description, attendees, handleEventEdit, handleEventDelete }) {
  return (
    <>
      <div className='event-container'>
        <div className='header'>
          <h3 className='title'>{name}</h3>
          <div>
            <button className='btn btn--primary btn-right'
            onClick={() => handleEventEdit(id)}>Edit</button>
            <button className='btn btn--danger'
            onClick={() => handleEventDelete(id)}>Delete</button>
          </div>
        </div>
        <div className='event-description'>
          <span className='event-label'>Event Date:</span>
          <span className='event-value'>{eventDate}</span>
        </div>
        <div className='event-location'>
          <span className='event-label'>Event Location:</span>
          <span className='event-value'>{eventLocation}</span>
        </div>
        <div className='event-description'>
          <div className='event-label margin-bottom'>Description:</div>
          <span className='event-value'>{description}</span>
        </div>
        <div className='event-label attendees-title'>Attendees:</div>
        <AttendeeList attendees={attendees}/>
      </div>
    </>
  )
}
