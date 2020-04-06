import React from 'react';
import styled from 'styled-components';
import ProductItemList from '../components/organisms/ProductItemList/ProductItemList';
import Heading from '../components/atoms/Heading/Heading';
import AppContext from '../context';

const Wrapper = styled.div`
  padding-top: 50px;
`;

const MainPage = () => (
  <Wrapper>
    <Heading big>Lista Produktów</Heading>
    <AppContext.Consumer>
      {context => <ProductItemList items={context.items} />}
    </AppContext.Consumer>
  </Wrapper>
);

export default MainPage;
