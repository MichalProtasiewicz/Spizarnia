import React from 'react';
import { storiesOf } from '@storybook/react';
import ProductItemList from './ProductItemList';

const initialStateArray = [
  {
    name: 'Chleb',
    category: 'Pieczywo',
    quantity: 2,
    minQuantity: 1,
  },
  {
    name: 'Mleko',
    category: 'Nabiał',
    quantity: 1,
    minQuantity: 1,
  },
  {
    name: 'Wędlina',
    category: 'Mięso',
    quantity: 2,
    minQuantity: 1,
  },
  {
    name: 'Ser',
    category: 'Nabiał',
  },
];

storiesOf('Organisms/ProductItem', module).add('Normal', () => (
  <ProductItemList items={initialStateArray} />
));
