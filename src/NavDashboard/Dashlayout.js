import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Dashlayout() {
  return (
    <div>
      <nav>
        <NavLink className="link" to="message">Message</NavLink>
        <NavLink className="link" to="notification">Notification</NavLink>
      </nav>
      <Outlet/>
    </div>
  );
}

export default Dashlayout;
