import React, { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className="_admin_layout_wrap">
      <div className="_admin_layout_main">
        <Sidebar />
        <div className="_admin_layout_page">
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
