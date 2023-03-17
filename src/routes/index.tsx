import { Suspense, lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { DEFAULT_PATH } from '../config';
import LoadingScreen from '../components/Loading';
import PrivateLayout from '../layouts/private';

const Loadable = (Component: any) => (props: any) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

const Dashboard = Loadable(lazy(() => import('../pages/dashboard')));

const Page404 = Loadable(lazy(() => import('../pages/404')));

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <PrivateLayout />,
      children: [
        { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
        { path: '/dashborad', element: <Dashboard /> },

        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
