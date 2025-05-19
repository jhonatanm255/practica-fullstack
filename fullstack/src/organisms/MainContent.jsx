import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Customer from '../pages/CustomerPage'
import Employees from '../pages/EmployeesPage'
import OrderDetails from '../pages/OrderDetails'
import Orders from '../pages/OrdersPage'
import Products from '../pages/ProductsPage'
import Shipped from '../pages/ShippedPage'
import Supplyers from '../pages/SupplyerPage'



function MainContent() {
  return (
    <div className='p-4 bg-gray-100'>
      <Routes>
        <Route path="customer" element={<Customer />} />
        <Route path="employees" element={<Employees />} />
        <Route path="orderdetails" element={<OrderDetails />} />
        <Route path="orders" element={<Orders />} />
        <Route path="products" element={<Products />} />
        <Route path="shipped" element={<Shipped />} />
        <Route path="supplyers" element={<Supplyers />} />
      </Routes>
    </div>
  )
}

export default MainContent
