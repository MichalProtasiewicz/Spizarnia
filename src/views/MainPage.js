import React from 'react';
import ProductItemList from '../components/organisms/ProductItemList/ProductItemList';
import Heading from '../components/atoms/Heading/Heading';
import AppContext from '../context';

const MainPage = () => (
  <>
    <Heading big>Lista Produktów</Heading>
    <AppContext.Consumer>
      {context => <ProductItemList items={context.items} />}
    </AppContext.Consumer>
  </>
);

export default MainPage;
