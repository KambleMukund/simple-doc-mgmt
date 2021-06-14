import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThList } from '@fortawesome/free-solid-svg-icons';
import UploadFiles from './UploadFiles';
import { ICON_COLOR } from './Constants';

const UploadDocument = () => {
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
          <h2>Upload Document</h2>
          <span>
            <Link to="/documents/view">
              <FontAwesomeIcon
                icon={faThList}
                color={ICON_COLOR}
                size="lg"
                className="fa-fw"
              />
              <span className="menuIcon"> Document List</span>
            </Link>
          </span>
        </div>
      </div>
      <div>
        <UploadFiles />
      </div>
    </div>
  );
};

export default UploadDocument;
