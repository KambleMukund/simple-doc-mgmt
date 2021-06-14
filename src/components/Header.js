import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import ApplicationContext from '../context/ApplicationContext';
import { ICON_COLOR } from './Constants';

const Header = () => {
  const appContext = React.useContext(ApplicationContext);
  const currentUser = appContext.currentUser;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: '19px',
        marginRight: '10px',
        width: '100%',
      }}
    >
      <span>
        <img src={logo} className="react-logo" alt="logo" />
      </span>
      <h2>Simple Document Upload</h2>
      <span>
        <Link to="/user/view">
          <FontAwesomeIcon
            icon={faUser}
            color={ICON_COLOR}
            size="lg"
            className="fa-fw"
          />
          <span className="menuIcon">{currentUser.fullName}</span>
        </Link>
      </span>
    </div>
  );
};

export default Header;
