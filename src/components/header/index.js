import React, { Component } from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import classes from './header.module.css';

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <Link to='/'>
            <h3>CarList</h3>
          </Link>
        </header>
        <Outlet />
      </div>
    );
  }
}
