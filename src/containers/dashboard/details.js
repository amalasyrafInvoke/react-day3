import React from 'react';
import { useLocation } from 'react-router';
import classes from './details.module.css';

const Details = () => {
  let location = useLocation();
  let product = location.state;
  
  return (
    <div>
      <div className={classes.product_img}></div>
      <div>
        <h1>{product.name}</h1>
        <h4>{product.short_description}</h4>

        {product.bullet_description.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}

        <h5>Price: {product.cost}</h5>
        <button>Buy now</button>
      </div>
    </div>
  );
};

export default Details;
