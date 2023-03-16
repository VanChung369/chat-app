import React from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
      Dashboards
      <Outlet />
    </>
  );
};

export default DashboardLayout;
