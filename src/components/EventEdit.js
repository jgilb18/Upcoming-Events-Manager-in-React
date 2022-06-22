import React from 'react'
import EventAttendee from './EventAttendee';

//Handles the JSX and functionality of the event editing section. Various functions are created
//to facilitate the process of updating the screen display and event information as the user makes edits.
export default function EventEdit({ selectedEvent, handleEventChange, removeEditedEvent }) {

    //Calls handleEventChange from App.js to update the events array with the new changes
    function changeEvent(changes) {
        handleEventChange(selectedEvent.id, {...selectedEvent, ...changes});
    }

    //Creates a new list of attendees based on the user's changes, and propogates those changes by calling
    //"changeEvent"
    function handleAttendeeChange(id, change) {
        const newAttendees = [...selectedEvent.attendees];
        const index = newAttendees.findIndex(attendee => attendee.id === id);
        newAttendees[index] = {...newAttendees[index], ...change};
        changeEvent({attendees: newAttendees})
    }

    //Creates a new list of attendees by removing an attendee selected by their ID. "changeEvent" is then
    // called to propogate those changes
    function handleAttendeeDelete(id) {
        const attendees = [...selectedEvent.attendees];
        const newAttendees = attendees.filter(attendee => attendee.id !== id);
        changeEvent({attendees: newAttendees})
    }

    //Creates the wireframe of a new attendee, adds that new attendee to the list of attendees for the
    //selected event, and then calls "changeEvent" to propogate the changes through to the events array
    function handleAttendeeAdd() {
        const newAttendee = {
            id: Date.now(),
            firstName: '',
            lastName: ''
        }
        changeEvent({attendees: [...selectedEvent.attendees, newAttendee]})
    }

  return (
      <div className='event-edit-container'>
          
          <button className='btn exit-edit-mode' onClick={removeEditedEvent}>&times;</button>
          <div className='event-grid'>
            <div className='event-label'>Name:</div>
            <input className='event-input' value={selectedEvent.name}
            onChange={e => changeEvent({name: e.target.value})}/>
            <div className='event-label'>Event Date:</div>
            <input className='event-input' 
            value={selectedEvent.eventDate}
            onChange={(e) => changeEvent({eventDate: e.target.value})}/>
            <div className='event-label'>Event Location:</div>
            <input className='event-input' value={selectedEvent.eventLocation}
             onChange={(e) => changeEvent({eventLocation: e.target.value})}/>
            <div className='event-label'>Description:</div>
            <textarea className='event-input text-area' value={selectedEvent.description}
            onChange={(e) => changeEvent({description: e.target.value})}/>
            </div>       
          <div className='event-label attendees-title'>Attendees:</div>
          <div className='attendee-edit-grid'>
                <div>First Name</div>
                <div>Last Name</div>
                <div></div>
                {selectedEvent.attendees.map(attendee => {
                    return <EventAttendee key={attendee.id} attendee={attendee} handleAttendeeChange={handleAttendeeChange} handleAttendeeDelete={handleAttendeeDelete}/>
                })}
          </div>
          <div className="add-event-button">
            <button className='btn btn--primary'
            onClick={handleAttendeeAdd}>Add Attendee</button>
          </div>
          
      </div>
  )
}
