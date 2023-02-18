import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function News() {
  return (
    <div>
      <header>
        <nav>
          <h1>Brand</h1>
        <NavLink  to="home">Home</NavLink>
        <NavLink to="dashboard">Dashboard</NavLink>
          
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  );
}

export default News;
