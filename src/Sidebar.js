import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import "./Sidebar.css";
import Player from "./Main.js";

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="http://www.swgalaxymap.com/">
        Map
      </a>
      <a className="menu-item" href="https://www.fantasynamegenerators.com/star-wars.php">
        Name generators
      </a>
      <a className="menu-item" href="http://d6holocron.com/astrogation/systemlist.php?records=10">
        Travel calc
      </a>
    </Menu>
  );
};