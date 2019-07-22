import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const BookStoreAppBar = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '0 10px'
      }}
    >
      <Link to="/">Demo</Link>
      <Link to="/bookstore">Bookstore</Link>
    </div>
  );
};

export default BookStoreAppBar;
