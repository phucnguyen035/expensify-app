import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

export const ExpenseListItem = ({ amount, createdAt, desc, id }) => (
  <div>
    <h3>
      <Link to={`/edit/${id}`}>{desc}</Link>
    </h3>

    <p>
      Amount: {numeral(amount / 100).format('$0,0.00')} - Created at:{' '}
      {moment(createdAt).format('DD/MM/YYYY')}
    </p>
  </div>
);

export default ExpenseListItem;
