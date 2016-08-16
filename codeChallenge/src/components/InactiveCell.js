import React from 'react';

const InactiveCell = (cell) => {
  
  return (<td id={cell.id}>
            {cell.difficulty}
        </td>)
  }

export default InactiveCell
