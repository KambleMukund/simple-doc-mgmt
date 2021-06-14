import React from 'react';
import Layout from './components/Layout';
import AppMainContainer from './container/AppMainContainer';
import MenuBar from './components/MenuBar';
import Header from './components/Header';
import Footer from './components/Footer';
import ApplicationContextProvider from './context/ApplicationContextProvider';
import './App.css';

function App() {
  
  return (
    <ApplicationContextProvider>     
      <Layout
        headerComponent={<Header />}
        footerComponent={<Footer />}
        menuComponent={<MenuBar />}
        mainComponent={<AppMainContainer />}
      />     
    </ApplicationContextProvider>
  );
}

export default App;
