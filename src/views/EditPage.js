import React from 'react';
import ProductsEditList from '../components/organisms/ProductsEditList/ProductsEditList';
import Heading from '../components/atoms/Heading/Heading';
import AppContext from '../context';

const EditPage = () => (
  <>
    <Heading big>Edycja Produktów</Heading>
    <AppContext.Consumer>
      {context => <ProductsEditList items={context.items} editItemFn={context.editItem} />}
    </AppContext.Consumer>
  </>
);

export default EditPage;
