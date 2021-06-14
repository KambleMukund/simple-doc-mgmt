import React from 'react';
import { Link } from 'react-router-dom';
import ApplicationContext from '../context/ApplicationContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { ICON_COLOR } from './Constants';

const ViewUserProfile = () => {
  const appContext = React.useContext(ApplicationContext);
  const currentUser = appContext.currentUser;

  return (
    <div
      style={{
        height: '100%',
        width: '1049px',
        overflow: 'auto',
      }}
    >
      <div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginLeft: '19px',
            marginRight: '10px',
          }}
        >
          <p>&nbsp; </p>
          <h2>Edit User Profile</h2>
          <span>
            <Link to="/user/view">
              <FontAwesomeIcon icon={faUser} color={ICON_COLOR} size="lg" />
              <span className="menuIcon">View Profile</span>
            </Link>
          </span>
        </div>
      </div>
      <div>
        <div>
          <label>User Id:</label> <span>{currentUser.userId}</span>
        </div>
        <div>
          <label>First Name:</label> <span>{currentUser.firstName}</span>
        </div>
        <div>
          <label>Last Name:</label> <span>{currentUser.lastName}</span>
        </div>
      </div>
    </div>
  );
};

export default ViewUserProfile;
