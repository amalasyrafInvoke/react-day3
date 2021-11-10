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
          <img src={this.props.src} alt='Product' width={100} height={100} />
        </div>

        <div
          style={{
            width: '200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h3>{this.props.name}</h3>
          <h4>{this.props.price}</h4>
          <Link
            to={`/dashboard/${this.props.prodID}`}
            state={this.props.product}
          >
            <button>Go</button>
          </Link>
        </div>
        <p>{this.props.shortDesc}</p>
        {/* <p>Long Desc</p> */}
      </div>
    );
  }
}
