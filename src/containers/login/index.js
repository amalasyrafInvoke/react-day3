import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './login.module.css';

export default class Login extends Component {
  render() {
    return (
      <div className={classes.login_holder}>
        <h1>Login</h1>
        <form action=''>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            id='email'
            placeholder='Enter your email'
          />
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' id='password' />
          <button type='submit'>
            <Link to='/'>Submit</Link>
          </button>
        </form>
      </div>
    );
  }
}
