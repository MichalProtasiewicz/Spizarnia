import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import logo from '../../../assets/logo.png';

const StyledLogoLink = styled(Link)`
  display: block;
  width: 90px;
  height: 90px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 95%;
  border: none;
  text-decoration: none;
  margin-right: 50px;
`;

const Header = ({ openModalFn }) => (
  <AppBar>
    <Toolbar>
      <StyledLogoLink to="/" />
      <ButtonGroup>
        <Button component={Link} to="/products" variant="contained" size="large">
          Lista Produktów
        </Button>
        <Button component={Link} to="/shop-list" variant="contained" size="large">
          Lista Zakupów
        </Button>
        <Button variant="contained" size="large" onClick={openModalFn}>
          Nowy produkt
        </Button>
      </ButtonGroup>
    </Toolbar>
  </AppBar>
);

export default Header;
