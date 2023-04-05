import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import NotFound from '../pages/404NotFound';
import Dashboard from '../pages/Admin/Dashoard';
import Inventory from '../pages/Admin/Inventory';
// import Inventory from '../pages/Admin/Inventory';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route index element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default Router