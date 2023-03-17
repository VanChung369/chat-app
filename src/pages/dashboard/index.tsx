import React, { lazy, Suspense } from 'react';
import Chats from '../chats';

const Dashboard = () => {
  return (
    <Suspense fallback="loading ...">
      <Chats />
    </Suspense>
  );
};

export default Dashboard;
