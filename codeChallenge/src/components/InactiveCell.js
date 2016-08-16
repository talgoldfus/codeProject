import React from 'react';

const InactiveCell = (cell) => {
  
  return (<td id={cell.id}>
            <span>{cell.difficulty}</span>
        </td>)
  }

export default InactiveCell
