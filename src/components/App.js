import React, { useState } from 'react';
import EventList from './EventList';
import EventEdit from './EventEdit'
import '../css/app.css';


export default function App() {
  const [events, setEvents] = useState(sampleEvents); //events is an array that keeps track of the list of all events
  const [selectedEventIdToEdit, selectEventIdToEdit] = useState(); //tracks the targeted event when "Edit" is clicked
  const selectedEvent = events.find(event => event.id === selectedEventIdToEdit)

  //Updates the events array once someone has edited an event
  function handleEventChange(id, newEvent) {
    const newEvents = [...events]; //makes a copy of "events" to add the changed event into
    const changeIndex = newEvents.findIndex(event => event.id === id);
    newEvents[changeIndex] = newEvent;
    setEvents(newEvents);
  }

  //Sets selectedEventIdToEdit given the id of an event
  function handleEventEdit(id) {
    const targetedEvent = events.find(event => event.id === id)
    selectEventIdToEdit(targetedEvent.id)
  }

  //removes an event from the event list given an event id
  function handleEventDelete(id) {
    setEvents(events.filter(event => event.id !== id));
  }

  //When the user is done creating an event and X's out, this function sets selectEnventIdToEdit as undefined
  //in order to clear the right of the screen
  function removeEditedEvent() {
    selectEventIdToEdit(undefined);
  }

  //Creates an event template for a new event and adds the new event to the bottom of the events list.
  function handleEventAdd() {
    const newEvent = {
        id: Date.now(),
        name: 'New Event',
        eventDate: '',
        eventLocation: '',
        description: '',
        attendees: [{
          id:1,
          firstName: '',
          lastName: ''
        },
        {
          id: 2,
          firstName: '',
          lastName: ''
        }]
      }
      const newEvents = [...events, newEvent];
      setEvents(newEvents);
    }
    
  
  return (
    <>
      <EventList events={events} handleEventAdd={handleEventAdd} handleEventEdit={handleEventEdit} handleEventDelete={handleEventDelete}/>
      {selectedEvent && <EventEdit selectedEvent={selectedEvent} handleEventChange={handleEventChange} removeEditedEvent={removeEditedEvent}/>}
    </>
    
  )
}

//A list of two sample events that are displayed on the screen upon initialization of the program
const sampleEvents = [
  {
    id: 1,
    name: 'Boardwalk Concert',
    eventDate: 'June 14 at 1:30pm',
    eventLocation: 'Santa Cruz Beach Boardwalk',
    description: "Rock out to local bands at this beautiful seaside location, while you enjoy a variety of Boardwalk treats. Play at the arcades that stay open late or shop variety of stores open late in the Colonnade.",
    attendees: [{
      id:1,
      firstName: 'Mark',
      lastName: 'Jones'
    },
    {
      id: 2,
      firstName: 'Jill',
      lastName: 'Smith'
    }]
  }, 
  {
    id: 2,
    name: 'Evening Symphony',
    eventDate: 'July 20 at 6:15pm',
    eventLocation: 'Lynwood Concert Hall',
    description: "Join the New Hollywood String Quartet and The Da Camera Society ​in a series of four concerts celebrating Beethoven's musical genius.", 
    attendees: [{
      id:1,
      firstName: 'Maria',
      lastName: 'Jameson'
    },
    {
      id: 2,
      firstName: 'Devon',
      lastName: 'Brown'
    }]
  }, 
]