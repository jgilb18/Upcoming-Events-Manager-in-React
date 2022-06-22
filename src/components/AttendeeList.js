import React from 'react'
import Attendee from './Attendee'

//Produces the list of attendees in JSX given an array of attendees.
//The array is looped through, and for each entry a new attendee is added to the screen 
export default function AttendeeList({attendees}) {
  return (
    <div className='attendee-list'>
        <div className='indent-right attendee-label'>First Name</div>
        <div className='indent-right attendee-label'>Last Name</div>
        {attendees.map(attendee => {
            return <Attendee key={attendee.id} attendee={attendee}/>
        })}
    </div>
    
  )
}
