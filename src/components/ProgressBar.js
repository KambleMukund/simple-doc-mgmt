import React from 'react';

const Progress = (props) => {
  return (
    <div
      style={{
        width: `${ props.percentage }%`,
        background: 'lightgreen',
        height: '100%',
        borderRadius: 'inherit',
        transition: 'width .2s ease-in',
      }}
    />
  );
};

const ProgressBar = (props) => {
  return (
    <div
      style={{
        position: 'relative',
        height: '15px',
        width: '300px',
        borderRadius: '50px',
        border: '1px solid #333',
        display: 'inline-block',
      }}
    >
      <Progress percentage={props.percentage} />
    </div>
  );
};

export default ProgressBar;
