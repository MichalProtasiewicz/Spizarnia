import React from 'react';
import ProductItemList from '../components/organisms/ProductItemList/ProductItemList';
import AppContext from '../context';

const ShopListPage = () => (
  <AppContext.Consumer>
    {context => <ProductItemList items={context.getItemsToShoppingList()} />}
  </AppContext.Consumer>
);

export default ShopListPage;
