import { Routes, Route } from 'react-router-dom';
// import React, { Suspense } from 'react';
import HomePage from './pages/HomePage';
import Layout from './components/Layout';
import ShoppingCart from './pages/ShoppingCart';
// const HomePage = lazy(() => import('./pages/HomePage'));
// const Layout = lazy(() => import('./components/Layout'));
// const ShoppingCart = lazy(() => import('./pages/ShoppingCart'));

export const App = () => {
  return (
    <div>
    {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Layout>

      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          <Route index element={<HomePage />} />
          <Route path="shopping-cart" element={<ShoppingCart/>} />
          <Route path="*" element={<HomePage />} />

        {/* </Route> */}
      </Routes>
      </Layout>
    {/* </Suspense> */}
  </div>
  );
};
