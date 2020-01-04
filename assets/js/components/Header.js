import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="tabs">
    <ul>
      <li>
        <NavLink activeClassName="has-text-link" exact to="/">
          Workers
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="has-text-link" to="/skills">
          Skills
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="has-text-link" to="/access">
          Access
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="has-text-link" to="/logs">
          Logs
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Header;