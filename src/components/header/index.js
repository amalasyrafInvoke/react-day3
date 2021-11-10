import React, { Component } from 'react';
import { Outlet } from 'react-router';
import classes from './header.module.css';

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <h3>Logo</h3>
          <ul></ul>
        </header>
        <Outlet />
      </div>
    );
  }
}
