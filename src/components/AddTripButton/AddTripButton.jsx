import React from 'react'
import './AddTripButton.scss';

function AddTrip(props) {
  const { openModal } = props
  return (
      <div className='add-trip' onClick={openModal}>
              <p>+</p>
              <p>Add Trip</p>
          </div>
  )
}

export default AddTrip