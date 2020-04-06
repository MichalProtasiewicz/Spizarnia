import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <ul>
    <li>
      <Link to="/">Lista Produktów</Link>
    </li>
    <li>
      <Link to="/shop-list">Lista Zakupów</Link>
    </li>
  </ul>
);

export default Navigation;
