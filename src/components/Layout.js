import React from 'react';
//import PropTypes from "prop-types";

const Layout = ({
  headerComponent,
  footerComponent,
  mainComponent,
  menuComponent,
}) => {
  return (
    <div className="app" id="app-layout">
      <div className="wrapper" id="modelContainer">
        <header className="header">{headerComponent}</header>
        <main className="main">{mainComponent}</main>
        <aside className="aside">{menuComponent}</aside>
        <footer className="footer">{footerComponent}</footer>
      </div>
    </div>
  );
};

// Layout.propTypes = {
//   headerComponent: PropTypes.elementType.isRequired,
//   footerComponent: PropTypes.elementType.isRequired,
//   mainComponent: PropTypes.elementType.isRequired,
//   menuComponent: PropTypes.elementType.isRequired,
// };

export default Layout;
