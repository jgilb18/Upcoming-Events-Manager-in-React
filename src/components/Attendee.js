import React from 'react'

//Returns the attributes of an attendee, namely the person's first and last name as JSX
export default function Attendee({attendee}) {
  return (
    <>
      <div className='indent-right'>{attendee.firstName}</div>
      <div className='indent-right'>{attendee.lastName}</div>
    </>
  )
}
