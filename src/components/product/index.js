import React, { Component } from 'react';
import classes from './product.module.css';
import { Link, Navigate } from 'react-router-dom';

export default class Product extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={classes.product_container}>
        <div className={classes.imageHolder}>
          <img src={this.props.src} alt='Product' width={350} height={350} />
        </div>

        <div className={classes.textContainer}>
          <Link
            to={`/dashboard/${this.props.prodID}`}
            state={this.props.product}
          >
            <h1>{this.props.name}</h1>
          </Link>
          <h4>{this.props.price}</h4>
          <div style={{ maxWidth: '250px' }}>
            <p>{this.props.shortDesc}</p>
          </div>
        </div>
      </div>
    );
  }
}
