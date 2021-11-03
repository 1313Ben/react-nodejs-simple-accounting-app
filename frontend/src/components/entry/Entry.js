import React from 'react';
import './Entry.scss';

const Entry = (props) => {
  const {entry} = props;

  return (
    <tr>
      <td>{entry.id}</td>
      <td>{entry.date}</td>
      <td>{entry.type}</td>
      <td>`${entry.currency} ${entry.amount}`</td>
      <td>{entry.accountName} </td>
      <td>{entry.category}</td>
      <td>{entry.comment}</td>
      <td class="btn"><button class="edit-delete"><i class="bi bi-pencil-square"></i></button></td>
      <td class="btn"><button class="edit-delete"><i class="bi bi-trash"></i></button></td>
    </tr>
  )
}

export default Entry
