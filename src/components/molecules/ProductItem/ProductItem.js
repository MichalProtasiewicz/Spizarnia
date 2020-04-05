import React from 'react';
import PropTypes from 'prop-types';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import Heading from '../../atoms/Heading/Heading';
import deleteIcon from '../../../assets/icons/basket.svg';

const ProductItem = ({ name, category, quantity, minQuantity }) => (
  <div>
    <Heading>Category: {category}</Heading>
    <Paragraph>Name: {name}</Paragraph>
    <Paragraph>Quantity: {quantity}</Paragraph>
    <Paragraph>Min Quantity: {minQuantity}</Paragraph>
    <ButtonIcon icon={deleteIcon} />
  </div>
);

ProductItem.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  quantity: PropTypes.number,
  minQuantity: PropTypes.number,
};

ProductItem.defaultProps = {
  quantity: 0,
  minQuantity: 0,
};

export default ProductItem;
