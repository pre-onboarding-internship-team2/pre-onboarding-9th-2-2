import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default PageLayout;
