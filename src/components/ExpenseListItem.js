import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

export const ExpenseListItem = ({ amount, createdAt, desc, id }) => (
  <Link to={`/edit/${id}`} className="list-item">
    <div>
      <h3 className="list-item__title">{desc}</h3>
      <span className="list-item__subtitle">{moment(createdAt).format('DD/MM/YYYY')}</span>
    </div>

    <h3 className="list-item__data">{numeral(amount / 100).format('$0,0.00')}</h3>
  </Link>
);

ExpenseListItem.propTypes = {
  amount: PropTypes.number.isRequired,
  createdAt: PropTypes.number.isRequired,
  desc: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default ExpenseListItem;
