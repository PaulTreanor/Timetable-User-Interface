import React from 'react';

const EditButton = props => {
    return <button class="btn btn-primary mb-3" type="button" onClick={props.addTrip}>
      Edit/Add Event <span>&#43;</span>
    </button>
  }

export default EditButton;
