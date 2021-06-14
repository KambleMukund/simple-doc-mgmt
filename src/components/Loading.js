import React from 'react';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Loading = () => {
  return (
    <span>
      <FontAwesomeIcon icon={faSpinner} color="black" size="lg" />
      <br />
      Loading...
    </span>
  );
};

export default Loading;
