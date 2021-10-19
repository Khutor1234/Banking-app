import React from 'react';
import './balance-list-item.sass';

const BalanceListItem = ({data}) => {
  const {title, balance, currency} = data;

  return (
    <div className='balance-item '>
      <div className={`${currency} ${'balance-title'}`}>{title}</div>
      <div className={`${currency} ${'balance-amount'}`}>{balance}</div>
    </div>
  );
};
  
export default BalanceListItem;

// var myHeaders = new Headers();
// myHeaders.append("x-api-key", "ieLWvByj0Z7obl0aLmVzmiJgbjVXZf987aoRts59");

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

// fetch("https://vhmfz744o2.execute-api.eu-west-2.amazonaws.com/dev/data", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
