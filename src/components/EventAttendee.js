import React from 'react'

//Creates the JSX for editing the content values of a specific event attendee, or deleting the attendee altogether.
export default function EventAttendee({attendee, handleAttendeeChange, handleAttendeeDelete }) {
  return (
    <>
        <input className='event-input' value={attendee.firstName}
        onChange={(e) => handleAttendeeChange(attendee.id, {firstName: e.target.value})}></input>
        <input className='event-input' value={attendee.lastName}
        onChange={(e) => handleAttendeeChange(attendee.id, {lastName: e.target.value})}></input>
        <button className='btn btn--danger'
        onClick={() => handleAttendeeDelete(attendee.id)}>&times;</button>
     </> 
  )
}

