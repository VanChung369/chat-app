import React, { lazy, Suspense } from 'react';

const AppAvatar = lazy(() => import('@/components/Avatar'));

const Dashboard = () => {
  return <Suspense fallback="loading ..."></Suspense>;
};

export default Dashboard;
