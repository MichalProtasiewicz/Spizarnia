/* eslint-disable no-undef */
/* eslint-disable no-alert */
/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { routes } from 'routes';
import MainTemplate from 'templates/MainTemplate';
import MainPage from 'views/MainPage';
import ShopListPage from 'views/ShopListPage';
import { v4 as uuidv4 } from 'uuid';
import AppContext from '../context';
import Header from '../components/organisms/Header/Header';
import Modal from '../components/organisms/Modal/Modal';

class Root extends React.Component {
  state = {
    items: [
      {
        id: '1',
        name: 'Mleko',
        category: 'Nabiał',
        quantity: '2',
        minQuantity: '3',
      },
      {
        id: '2',
        name: 'Masło',
        category: 'Nabiał',
        quantity: '4',
        minQuantity: '3',
      },
    ],
    isModalOpen: false,
    itemEdited: null,
  };

  addItem = (e, newItem) => {
    e.preventDefault();
    newItem.id = uuidv4();

    this.setState(prevState => ({
      items: [...prevState.items, newItem],
    }));
    e.target.reset();
    this.closeModal();
  };

  deleteItem = e => {
    if (window.confirm('Usunąć wybrany produkt?')) {
      const id = e.target.value;

      this.setState(prevState => ({
        items: prevState.items.filter(item => {
          return item.id !== id;
        }),
      }));
    }
  };

  editItem = (e, editedItem) => {
    e.preventDefault();

    this.setState(prevState => ({
      items: [
        ...prevState.items.filter(item => {
          return item.id !== editedItem.id;
        }),
        editedItem,
      ],
    }));

    this.closeModal();
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  createFormToAddItem = () => {
    this.setState({
      itemEdited: null,
    });
    this.openModal();
  };

  createFormToEditItem = e => {
    const id = e.target.value;

    const item = this.state.items.filter(item => {
      return item.id === id;
    });

    if (item[0]) {
      this.openModal();
      this.setState({
        itemEdited: item[0],
      });
    }
  };

  getItemsToShoppingList = () =>
    this.state.items.filter(item => {
      return item.quantity < item.minQuantity;
    });

  render() {
    const { isModalOpen } = this.state;
    const contextElements = {
      ...this.state,
      addItem: this.addItem,
      editItem: this.editItem,
      deleteItem: this.deleteItem,
      createFormToAddItem: this.createFormToAddItem,
      createFormToEditItem: this.createFormToEditItem,
      getItemsToShoppingList: this.getItemsToShoppingList,
    };

    return (
      <BrowserRouter>
        <MainTemplate>
          <AppContext.Provider value={contextElements}>
            <Header openModalFn={this.createFormToAddItem} />
            <Switch>
              <Route exact path={routes.home} render={() => <Redirect to="/products" />} />
              <Route exact path={routes.products} component={MainPage} />
              <Route path={routes.shop} component={ShopListPage} />
            </Switch>
            {isModalOpen && <Modal closeModalFn={this.closeModal} />}
          </AppContext.Provider>
        </MainTemplate>
      </BrowserRouter>
    );
  }
}

export default Root;
