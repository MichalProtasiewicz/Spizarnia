import React from 'react';
import PropTypes from 'prop-types';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import Input from '../../atoms/Input/Input';
import deleteIcon from '../../../assets/icons/basket.svg';
import acceptIcon from '../../../assets/icons/tick.svg';

const EditProduct = ({ name, category, quantity, minQuantity, editItemFn }) => (
  <div>
    <form onSubmit={editItemFn}>
      <Input placeholder={name} name="name" />
      <Input placeholder={category} name="category" />
      <Input placeholder={quantity} name="quantity" />
      <Input placeholder={minQuantity} name="minQuantity" />
      <ButtonIcon type="submit" onClick={editItemFn} icon={acceptIcon} />
    </form>
    <ButtonIcon icon={deleteIcon} />
  </div>
);

EditProduct.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  quantity: PropTypes.number,
  minQuantity: PropTypes.number,
};

EditProduct.defaultProps = {
  quantity: 0,
  minQuantity: 0,
};

export default EditProduct;
