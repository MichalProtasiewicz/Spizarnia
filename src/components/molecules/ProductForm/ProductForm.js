/* eslint-disable react/destructuring-assignment */
import React from 'react';
import AppContext from '../../../context';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';

class ProductForm extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.itemEdited !== null) {
      this.state = this.getItemToEdit(this.props);
    } else {
      this.state = {
        id: '',
        name: '',
        category: '',
        quantity: '0',
        minQuantity: '0',
      };
    }
  }

  handleIntpuChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  getItemToEdit = ({ itemEdited }) => ({
    id: itemEdited.id,
    name: itemEdited.name,
    category: itemEdited.category,
    quantity: itemEdited.quantity,
    minQuantity: itemEdited.minQuantity,
  });

  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <div>
            <h1>{context.itemEdited ? 'Edytuj' : 'Dodaj nowy'} produkt</h1>
            <form
              autoComplete="off"
              onSubmit={
                context.itemEdited !== null
                  ? e => context.editItem(e, this.state)
                  : e => context.addItem(e, this.state)
              }
            >
              <Input
                onChange={this.handleIntpuChange}
                value={this.state.name}
                name="name"
                label="Name"
              />
              <Input
                onChange={this.handleIntpuChange}
                value={this.state.category}
                name="category"
                label="Category"
              />
              <Input
                onChange={this.handleIntpuChange}
                value={this.state.quantity}
                name="quantity"
                label="Quantity"
                type="number"
              />
              <Input
                onChange={this.handleIntpuChange}
                value={this.state.minQuantity}
                name="minQuantity"
                label="Minimal quantity"
                type="number"
              />
              {context.itemEdited ? (
                <Input
                  onChange={this.handleIntpuChange}
                  value={this.state.id}
                  name="id"
                  label="Id"
                  type="hidden"
                />
              ) : null}
              <Button>{context.itemEdited ? 'Edytuj' : 'Dodaj nowy'} produkt</Button>
            </form>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default ProductForm;
