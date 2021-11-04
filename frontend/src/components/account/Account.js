import React from 'react';
import './Account.scss';

const Account = ({title, amount}) => {
  return (
    <div className="account-box">
      <p> <strong>{title }</strong></p>
      <p>Saldo</p>
      <p>CHF <strong>{amount}</strong></p>
    </div>
  )
}

export default Account
