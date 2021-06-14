import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Counter from '../container/CounterContainer';
import FunctionalCounter from '../components/FunctionalCounter';
import DocumentList from '../components/DocumentList';
//import DropZoneUploader from '../components/DropZoneUploader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UploadDocument from '../components/UploadDocument';
import ViewUserProfile from '../components/ViewUserProfile';
import EditUserProfile from '../components/EditUserProfile';
import { ErrorBoundary } from 'react-error-boundary';
import AppErrorFallback from '../components/AppErrorFallback';

const AppMainContainer = () => {
  return (
    <>
      <ErrorBoundary FallbackComponent={AppErrorFallback}>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl
          pauseOnFocusLoss
          draggable
          pauseOnHover
          style={{
            width: '70%',
          }}
        />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/counter">
            <Counter />
            <FunctionalCounter />
          </Route>
          <Route path="/documents/view">
            <DocumentList />
          </Route>
          <Route path="/documents/upload">
            <UploadDocument />
          </Route>
          <Route path="/user/view">
            <ViewUserProfile />
          </Route>
          <Route path="/user/edit">
            <EditUserProfile />
          </Route>
        </Switch>
      </ErrorBoundary>
    </>
  );
};

export default AppMainContainer;
