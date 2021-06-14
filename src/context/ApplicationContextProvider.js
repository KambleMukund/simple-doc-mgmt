import React, { Component } from 'react';
import ApplicationContext from './ApplicationContext';
import dotenv from 'dotenv';

dotenv.config();

class ApplicationContextProvider extends Component {
  render() {
    return (
      <ApplicationContext.Provider
        value={{
          currentUser: {
            id: '765432',
            userId: 'rohit_gupta@abc.com',
            firstName: 'Rohit',
            lastName: 'Gupta',
            fullName: 'Rohit Gupta',
          },
          appEnv: {
            API_BASE_URL: process.env.REACT_APP_API_BASE_URL,
            ENV_TYPE: process.env.REACT_APP_ENV_TYPE,
          },
        }}
      >
        {this.props.children}
      </ApplicationContext.Provider>
    );
  }
}

export default ApplicationContextProvider;
