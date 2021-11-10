import React, { Component } from 'react';
import Product from '../../components/product';
import classes from './dashboard.module.css';
import { products } from '../../assets/products_data';
import { Link } from 'react-router-dom';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      products: products,
    };
  }

  searchFunction = (value) => {
    this.setState({ searchValue: value });
  };
  render() {
    return (
      <div className={classes.productList_container}>
        <div className={classes.title_container}>
          <h2>Product List</h2>
        </div>
        <div className={classes.title_container}>
          <Link to='/create'>Create New Product </Link>
          <input
            type='text'
            name='seacth'
            id='search'
            placeholder='Search by product name'
            onChange={(e) => this.searchFunction(e.target.value)}
          />
        </div>
        <div>
          {products.map((prod) => {
            let reg = new RegExp(this.state.searchValue, 'gi');
            if (prod.name.match(reg)) {
              return (
                <Product
                  product={prod}
                  key={prod.id}
                  prodID={prod.id}
                  src={prod.image}
                  name={prod.name}
                  price={prod.cost}
                  shortDesc={prod.short_description}
                />
              );
            }
          })}
        </div>
      </div>
    );
  }
}
