import React from 'react';
import Navigation from '../../molecules/Navigation/Navigation';
import Button from '../../atoms/Button/Button';

const Header = ({ openModalFn }) => (
  <div>
    <Navigation />
    <Button onClick={openModalFn}>Nowy produkt</Button>
  </div>
);

export default Header;
