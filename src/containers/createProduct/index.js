import React, { Component } from 'react';
import { products } from '../../assets/products_data';

export default class CreateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      description: '',
      cost: '',
    };
  }

  buttonOnClick = () => {

    console.log(this.state);
    console.log(products);
  
    if (!this.state.name || !this.state.id || !this.state.description || !this.state.cost) {
      alert('All fields must be filled');
      return;
    }

    if (products.find(product => product.id === this.state.id)) {
      alert('ID existed');
      return;
    }

    products.push({
      id: this.state.id,
      name: this.state.name,
      image: null,
      cost: this.state.cost,
      short_description: this.state.description,
      bullet_description: []
    })

    console.log(products);

  }

  render() {
    return (
      <form>
        <label htmlFor='id'>ID</label>
        <input
          type='text'
          id='id'
          placeholder='ID'
          onChange={(e) => {
            this.setState({ id: e.target.value });
          }}
        />
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          placeholder='Name'
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        />
        <label htmlFor='description'>Description</label>
        <input
          type='text'
          id='description'
          placeholder='Description'
          onChange={(e) => {
            this.setState({ description: e.target.value });
          }}
        />
        <label htmlFor='cost'>Cost</label>
        <input
          type='text'
          id='cost'
          placeholder='Cost'
          onChange={(e) => {
            this.setState({ cost: e.target.value });
          }}
        />
        <button onClick={this.buttonOnClick} type='button'>
          Create
        </button>
      </form>
    );
  }
}
