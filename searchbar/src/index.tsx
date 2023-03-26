import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SearchBar from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Card from './pages/card';
import PageNotFound from './pages/PageNotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SearchBar />,
  },
  {
    path: '/card',
    element: <Card />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
