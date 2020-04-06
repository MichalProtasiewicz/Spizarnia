import React from 'react';
import styled from 'styled-components';
import ProductItemList from '../components/organisms/ProductItemList/ProductItemList';
import Heading from '../components/atoms/Heading/Heading';
import AppContext from '../context';

const Wrapper = styled.div`
  padding-top: 50px;
`;

const ShopListPage = () => (
  <Wrapper>
    <Heading big>Lista Zakupów</Heading>
    <AppContext.Consumer>
      {context => <ProductItemList items={context.getItemsToShoppingList()} />}
    </AppContext.Consumer>
  </Wrapper>
);

export default ShopListPage;
