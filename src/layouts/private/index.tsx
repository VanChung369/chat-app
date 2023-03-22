import { Stack } from '@mui/system';
import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';

const PrivateLayout = () => {
  return (
    <Stack direction="row">
      <SideBar />
      <Outlet />
    </Stack>
  );
};

export default PrivateLayout;
