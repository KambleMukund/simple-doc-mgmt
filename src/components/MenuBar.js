import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  //faCoffee,
  faHome,
  faFile,
  faUpload,
} from '@fortawesome/free-solid-svg-icons';
import { ICON_COLOR } from './Constants';

const MenuBar = () => {
  return (
    <ul id="menu-bar">
      <li>
        <Link to="/">
          <FontAwesomeIcon
            icon={faHome}
            color={ICON_COLOR}
            size="lg"
            className="fa-fw"
          />

          <span className="menuIcon">Home</span>
        </Link>
      </li>

      {/* <li>
        <Link to="/counter">
          <FontAwesomeIcon
            icon={faCoffee}
            color={ICON_COLOR}
            size="lg"
            className="fa-fw"
          />

          <span className="menuIcon">Counter</span>
        </Link>
      </li> */}

      <li>
        <Link to="/documents/view">
          <FontAwesomeIcon
            icon={faFile}
            color={ICON_COLOR}
            size="lg"
            className="fa-fw"
          />

          <span className="menuIcon">Documents</span>
        </Link>
      </li>

      <li>
        <Link to="/documents/upload">
          <FontAwesomeIcon
            icon={faUpload}
            color={ICON_COLOR}
            size="lg"
            className="fa-fw"
          />

          <span className="menuIcon">Upload</span>
        </Link>
      </li>
    </ul>
  );
};

export default MenuBar;
