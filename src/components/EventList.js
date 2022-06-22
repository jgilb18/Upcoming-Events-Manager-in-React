import React from 'react';
import Event from './Event.js';


//Returns the JSX for the list of events. This function loops through the events, creating a new event on
//each call. Finally, the "Add Event" button is added to the button of the events list.
export default function EventList({events, handleEventAdd, handleEventEdit, handleEventDelete}) {
  
  return (
    <div className='event-list-container'>
      <div className="event-list">
      {events.map(event => {
            return <Event key={event.id} {...event} handleEventEdit={handleEventEdit} handleEventDelete={handleEventDelete}/>
       })}
      </div>
      <div className='add-event-container'>
        <button className='btn btn--primary' onClick={handleEventAdd}>Add Event</button>
      </div>
    </div> 
  )
}




