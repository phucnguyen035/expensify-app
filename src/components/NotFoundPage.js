import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="not-found">
    <img className="not-found__image" src="/images/sad.png" alt="sad face" />
    <p className="not-found__text">Uh oh, the page you were looking for does not exist.</p>

    <Link className="not-found__link" to="/">
      Go to home
    </Link>
  </div>
);

export default NotFoundPage;
