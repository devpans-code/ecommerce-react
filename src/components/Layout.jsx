import React from 'react';
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="navigationWrapper">
        <React.StrictMode>
          <main>{children}</main>
        </React.StrictMode>
      </div>
    </>
  )
}

export default Layout
